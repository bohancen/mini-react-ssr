const path = require('path')
const React = require('react')
const express = require('express')
const {renderToString} = require('react-dom/server')
const App = require('./app').default

const PORT = process.env.PORT || 8090
const NODE_ENV = process.env.NODE_ENV || 8090

const server = express()

server.use('/static',express.static('./static'))

server.get('/',(req,res)=>{
  // console.log(Object.keys(req))
  const headers = req.headers
  res.send(`
    <html>
      <head>
        <title>ssr react</title>
        <script>
        window.store_client = ${JSON.stringify(headers)}
        </script>
      </head>
      <body>
        <div id="root">${renderToString(
          React.createElement(App,{headers})
        )}</div>
        <script src="/static/js/index.js"></script>
      </body>
    </html>
  `)
})

server.listen(PORT,()=>{
  console.log(PORT,NODE_ENV)
})