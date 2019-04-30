'use strict'

import React from 'react'
import { WithProvider } from "../components/hoc";

import { parseCookies } from 'nookies'
import Router from 'next/router'
import { Page,Card } from "@shopify/polaris";

import { Table,Button,Tooltip } from 'antd';
import dynamic from 'next/dynamic'

import queryString from "querystring"

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
            const token =  JSON.parse(parseCookies(null).__token)
           const value =await  fetch(`/${data.endpoint}?user_id=${token.user_id}`, {
                method: data.method.toUpperCase()
            }).then(res=> res.text())
       

            const state = this.state.dataSet
            const requestIndex = state.data.findIndex(value=> value._id === data._id)
           state.data[requestIndex].response = value
            
            this.setState({ ...state })
        } catch (error) {
            // console.log(error)
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
            console.log(JSON.stringify(data))
            data.data.map(val=>{
                val.response = "{}"
            })
            this.setState({ loading: false, dataSet: data})
        } catch (error) {
            // return console.log(error)
        }
    }


    render () {        
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
            <div style={{ width: 70 }}>
        <AceEditor 
            disabled={true}
            lan="markdown"
            theme="github"
            value={text}
            height="40vh"
            width={"150px"}
            fontSize={12}
            />
            </div>
          },
          {
            title: 'Test Request',
            dataIndex: 'response',
            key: 'response',
            render: (text, record)=>
            <div style={{ width: 70 }}>
            <Button type="primary" style={{ marginTop: 10}} onClick={()=> this.makeRequest(record)}>Test</Button>
         <AceEditor 
            disabled={true}
            lan="markdown"
            theme="github"
            value={text}
            height="40vh"
            width={"150px"}
            fontSize={12}
            />
            </div>
          }, 
          {
            title: "Edit/Delete Request",
            dataIndex: "_id",
            key: "_id",
            render: (text, record)=>
            <>
             <Tooltip placement="topLeft" title="Delete http mock">
             <Button shape="circle" onClick={()=> this.deleteRequest(text)} icon="delete" />
      </Tooltip>
      <Tooltip placement="topLeft" title="Edit http mock">
      <Button shape="circle" icon="edit" onClick={()=> this.editRequest(record)} style={ { marginLeft: 30 }} />
      </Tooltip>
            </>

          }
        ];
let userId
        try {
           userId =  JSON.parse(parseCookies(null).__token).user_id
        } catch (error) {
          // console.log(error)
        }

        return (
            <Page fullWidth
            breadcrumbs={[{content: 'Add mock requests', url: '/generate'}]}
            >
               <Card sectioned
                           title={userId && `Please pass user id to each request ${userId}`}

               >
               <Table columns={columns} dataSource={this.state.dataSet.data} loading={this.state.loading} />
               </Card>
            </Page>
        )
    }


    deleteRequest(id){
console.log(id)
    }

    editRequest({ response, user_id, ...rest }){
      const query = queryString.stringify(rest)
      window.location.href = `/generate?${query}`
    }
}



export default WithProvider(Requests)