import React from 'react'
import {renderToString} from 'react-dom/server'
import express from 'express'

import nlog from './nlog'
import App from './app'

const port = 9798
const server = express()

server.get('/',(req,res)=>{
  nlog(port)
  res.send(`
    <html>
      <head>
        <title>ssr react</title>
      </head>
      <body>
        <div id="root">${renderToString(<App />)}</div>
      </body>
    </html>
  `)
})

server.listen(port,()=>{
  console.log(port)
})