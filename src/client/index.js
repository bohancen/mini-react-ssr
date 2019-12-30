import React,{Component,useState} from 'react'
import ReactDom from 'react-dom'

import App from '../reactComponents/app'


const headers = window.store_client || {}
ReactDom.hydrate(
  <App headers={headers} />,
  document.getElementById('root')
)
