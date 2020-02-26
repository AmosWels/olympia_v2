import * as React from 'react'
import Link from 'next/link'
import ROUTES from '../routes';
import Input from '../components/input';

// import Layout from '../components/Layout'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
  return (
    <div className="app">
        <img src = {<img src="../statics/ologo.jpeg"/>} className="app-logo" alt="logo" />
        <div className="login-details">
            <Input 
                type="email" 
                inputClass="login login-email" 
                name="email" 
                placeholder="Enter Address" 
                // onChange={this.handleInputChange} 
                // value={email}
                labelName="Email Address"
                labelClass="required label label-email"
            />
            <Input 
                type="text" 
                inputClass="login login-password" 
                name="password" 
                placeholder="Enter Password" 
                // onChange={this.handleInputChange} 
                // value={password} 
                labelName="Password"
                labelClass="required label label-password"
            />
            <Link to={ROUTES.dashboard}><Button buttonClass="login login-button" ButtonText="Log In"/></Link>
        </div>
        {/* <LoginFooter footerClass='login-footer' copyright='copyright'/> */}
      </div>
  )
}

export default IndexPage
