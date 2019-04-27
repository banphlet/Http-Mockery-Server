'use strict'

import React from 'react'
import { WithProvider } from "../components/hoc";

import { parseCookies } from 'nookies'
import Router from 'next/router'
import { Page,Card } from "@shopify/polaris";

import { Table,Button } from 'antd';
import dynamic from 'next/dynamic'

const AceEditor = dynamic(() => import('../components/aceEditor'), {
    ssr: false,
  })

import moment from 'moment'
  

export  class Requests extends React.Component{

    static async getInitialProps(ctx) {
        const cookie =  parseCookies(ctx)
     
        if(!cookie.__token){
          if(!process.browser) return ctx.res.redirect("/users")
          return Router.push("/users")
        }
     
        return {}
       }


       state = {
           loading: false,
           dataSet: {
               data: [],
               currentPage: 1
           }
       }

       componentDidMount(){
           this.getRequests()
       }

     makeRequest = async (data)=>{
        try {
            console.log(data.method.toUpperCase())
            const token =  JSON.parse(parseCookies(null).__token)
           const value =await  fetch(`/${data.endpoint}?user_id=${token.user_id}`, {
                method: data.method.toUpperCase()
            }).then(res=> res.json())
            console.log(value)
        } catch (error) {
            
        }
    }
    

    async getRequests(){
        try {
            this.setState({ loading: true })
            const token =  JSON.parse(parseCookies(null).__token)
          let { data } =await   fetch("/all-requests", {
            headers: {
                'Content-Type': 'application/json',
                "X-MOCKERY-TOKEN": token.jwt
               }
            }).then(res=>res.json())
            data.data.map(val=>{
                val.response = "{}"
            })
            this.setState({ loading: false, dataSet: data})
        } catch (error) {
            return console.log(error)
        }
    }


    render () {
        console.log(this.state.dataSet);
        
        const columns = [
            {
                title: 'Date created',
                dataIndex: 'created_at',
                key: 'created_at',
                render: text => moment(text).calendar()
            },
            {
            title: 'Endpoint',
            dataIndex: 'endpoint',
            key: 'endpoint',
            render: text => <div>/{text}</div>,
          },{
            title: 'Method',
            dataIndex: 'method',
            key: 'method'
          },
          {
            title: 'Status',
            dataIndex: 'status',
            key: 'status'
          },
          {
            title: 'Body',
            dataIndex: 'body',
            key: 'body',
            render: (text)=>
            <AceEditor 
            disabled={true}
            lan="markdown"
            theme="github"
            value={text}
            height="10vh"
            />
          },
          {
            title: 'Test Request',
            dataIndex: 'response',
            key: 'response',
            render: (text, record)=>
            <div>
            <Button type="primary" style={{ marginTop: 10}} onClick={()=> this.makeRequest(record)}>Test</Button>
         <AceEditor 
            disabled={true}
            lan="markdown"
            theme="github"
            value={text}
            height="20vh"
            />
            </div>
           
          }
        ];

        return (
            <Page fullWidth>
               <Card sectioned>
               <Table columns={columns} dataSource={this.state.dataSet.data} loading={this.state.loading} />
               </Card>
            </Page>
        )
    }
}



export default WithProvider(Requests)