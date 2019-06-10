import React, { Component } from 'react';
import { Link } from "gatsby"
import Buttons from "./buttons"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends Component {
  render(){

  return(
    <div style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)'
  }}>
    <SEO title="Home" />
    <h1 style={{textAlign:'center'}}>Welcome!</h1>
    <h2 style={{textAlign:'center'}}>Sign Up</h2>
    <p style={{textAlign:'center',fontWeight:'500'}}>Please select account type</p>
    <div style={{textAlign:'center'}}>
      <Link to = "/organisation/">
      <Buttons text={'Organisation'}></Buttons>
      </Link>
      <Link to ="/individual/">
      <Buttons text={'Individual'}></Buttons>
      </Link>
    </div>
    </div>
  )
  }
} 

//    <Link to="/page-2/">Go to page 2</Link>




export default IndexPage
