'use strict'
import React from 'react'
import { WithProvider } from "../components/hoc";
import {  Page, Card, PageActions, TextField, Form } from "@shopify/polaris";
import { message } from 'antd';
import Router from 'next/router'
import {  setCookie } from 'nookies'

export  class User extends React.Component {
state = {
    email: "",
    name: ""
}

makeRequest = async ()=>{
    const loader = message.loading("authenticating...")
    try {
       const user = await fetch('/users', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'       
               }
        }).then(res=> res.json())
        setTimeout(loader, 10);
        message.success("authenticated")
        setCookie(null, "__token", user.data.jwt, { maxAge :  60 * 50})
        Router.replace("/generate")
    } catch (error) {
        setTimeout(loader, 10);
    }
}


    render () {
        return (
            <Page
            singleColumn
            title="Add payment method"
            primaryAction={{content: 'Save', disabled: true}}
          >
          <Form onSubmit={this.makeRequest}>
            <Card title="Authenticate or create new user" sectioned>
            <TextField
        label="Email"
        value={this.state.email}
        type="email"
        onChange={(text)=> this.setState({ email: text })}
        autoFocus
      />
         <TextField
        label="Store name"
        value={this.state.name}
        onChange={(text)=> this.setState({ name: text })}
      />
            </Card>
            <PageActions
              primaryAction={{content: 'Save', disabled: (!this.state.email) || !this.state.name,
              onAction: this.makeRequest
            
            }
            
            }
            />
            </Form>
          </Page>
        )
    }
}

export default WithProvider(User)