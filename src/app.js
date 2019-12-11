import React from 'react'

class App extends React.Component {
  render(){
    return <ul>
      {Object.keys(this.props.req.headers).map((key,index)=>{
        return <li key={index}><b>{key}</b> : {this.props.req.headers[key]}</li>
      })}
    </ul>
  }
}

export default App