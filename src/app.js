import React from 'react'

class App extends React.Component {
  render(){
    return <ul>
      {Object.keys(this.props.req.headers).map((key,index)=>{
        let val = this.props.req.headers[key]
        return <li key={index}><b>{key}</b><span>:</span>{val}</li>
      })}
    </ul>
  }
}

export default App