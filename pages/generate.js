'use strict'
import 'antd/dist/antd.css'
import '@shopify/polaris/styles.css'
import 'isomorphic-unfetch'
import { isEmpty } from 'lodash/fp'

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

   return {}
  }
  
  state = {
    body: '{}',
    endpoint: '',
    method: 'get',
    status: 200,
    output: `
  {
   endpoint:  http://localhost:5000,
   method: get,
   statusCode: 200,
    body: {}
  }
  `,
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

    try {
      await fetch("/requests", {
        method: "POST",
        body: JSON.stringify(rest),
        headers: {
          'Content-Type': 'application/json',
          "X-MOCKERY-TOKEN": parseCookies(null).__token
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
        <Page fullWidth>
          <Row>
            <Col lg={12}>
              <Card
                sectioned
                title="Add new mock endpoint"
                primaryFooterAction={{ content: 'Add request', 
                disabled: !this.state.body || !this.state.endpoint || !this.state.method || !this.state.status,
                onAction: ()=> this.saveRequest()
              
              }}
              >
                <TextField
                  label="Endpoint"
                  type="text"
                  value={this.state.endpoint}
                  prefix="http://localhost:5000/"
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
            <Card sectioned title="Try request"  actions={[ { content: "Try request" }]}>
                <DynamicAceEditor
                  lan="markdown"
                  height="30vh"
                  disabled={true}
                  value={this.state.output}
                  theme="github"
                />
              </Card>

              <Card sectioned title="Expected request format" >
                <DynamicAceEditor
                  lan="markdown"
                  height="40vh"
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
