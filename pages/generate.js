'use strict'
import 'antd/dist/antd.css'
import '@shopify/polaris/styles.css'
import 'isomorphic-unfetch'

import dynamic from 'next/dynamic'
const AppProviderDynamic = dynamic(() =>
  Promise.resolve(require('@shopify/polaris').AppProvider)
)
import { Page, Select, TextField, Card } from '@shopify/polaris'

const DynamicAceEditor = dynamic(() => import('../components/aceEditor'), {
  ssr: false,
})
import { message } from 'antd'

import { Row, Col } from 'antd'

const options = [
  { label: 'POST', value: 'post' },
  { label: 'GET', value: 'get' },
  { label: 'PUT', value: 'put' },
]

import { parseCookies } from 'nookies'
import Router from 'next/router'

export default class Mocker extends React.Component {

  static async getInitialProps(ctx) {
   const cookie =  parseCookies(ctx)

   if(!cookie.__token){
     if(!process.browser) return ctx.res.redirect("/users")
     return Router.push("/users")
   }

   const query = ctx.req.query

   return {
     ...query
   }
  }
  
constructor (props) {
  super(props)
  this.state = {
    body:  props.body || '{}',
    endpoint: props.endpoint || '',
    method: props.method || 'get',
    status: parseInt(props.method) || 200,
    output: `
  {
   endpoint:  https://localhost:5000/${props.endpoint || ""},
   method: ${props.method || "get"},
   statusCode: ${props.status || "200"},
    body: ${props.body || "{}"}
  }
  `,
  }
}


  handleChange = async (newValue) => {
    await this.setState({ method: newValue })
    this.changeRender()
  }

  changeRender = () => {
    const output = `
  {
    endpoint:  http://localhost:5000/${this.state.endpoint},
    method: ${this.state.method},
    statusCode: ${this.state.status} ,
    body: ${this.state.body}
   }
  `

    this.setState({ output })
  }


  saveRequest = async ()=>{
    const { output, ...rest } = this.state
    console.log(rest)
    const loader = message.loading("saving request")
    const body = {
      ...rest
    }

    const token =  JSON.parse(parseCookies(null).__token)


    try {
      await fetch("/requests", {
        method: "POST",
        body: JSON.stringify(rest),
        headers: {
          'Content-Type': 'application/json',
          "X-MOCKERY-TOKEN": token.jwt
         }
      }).then(res=> res.json())
      setTimeout(loader);
      message.success("request saved successfully")
    } catch (error) {
      setTimeout(loader);
    }

  }

  render() {
    return (
      <AppProviderDynamic>
        <Page fullWidth
          breadcrumbs={[{content: 'All mock requests', url: '/requests'}]}

        >
          <Row>
            <Col lg={12}>
              <Card
                sectioned
                title="Add new mock endpoint"
                primaryFooterAction={{ content: this.props.created_at ? "Update mock": "Add mock request", 
                disabled: !this.state.body || !this.state.endpoint || !this.state.method || !this.state.status,
                onAction: ()=> this.saveRequest()
              
              }}
              >
                <TextField
                  label="Endpoint"
                  type="text"
                  value={this.state.endpoint}
                  prefix={process.env.APP_URL}
                  onChange={async text => {
                    const hText = text
                      .split(' ')
                      .join('-')
                      .toLowerCase()
                    await this.setState({ endpoint: hText })
                    this.changeRender()
                  }}
                />
                <p style={{ marginTop: 20 }} />
                <Select
                  label="Date range"
                  options={options}
                  onChange={this.handleChange}
                  value={this.state.method}
                />
                <p style={{ marginTop: 20 }} />
                <TextField
                  label="StatusCode"
                  type="number"
                  value={this.state.status}
                  onChange={async text => {
                    await this.setState({ status: text })
                    this.changeRender()
                  }}
                />
                <p style={{ marginTop: 20 }} />
                Request body
                <DynamicAceEditor
                  onChange={async newValue => {
                    await this.setState({ body: newValue })
                    this.changeRender()
                  }}
                  value={this.state.body}
                  lan="javascript"
                  theme="github"
                />
              </Card>
            </Col>

            <Col lg={11} offset={1}>
              <Card sectioned title="Render output">
                <DynamicAceEditor
                  lan="markdown"
                  height="70vh"
                  disabled={true}
                  value={this.state.output}
                  theme="github"
                />
              </Card>
            </Col>
          </Row>
        </Page>
      </AppProviderDynamic>
    )
  }
}
