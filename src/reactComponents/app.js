import React from 'react'

class App extends React.Component {
  click({key,val}){
    alert(key + ':' + val)
  }
  render(){
    return <ul>
      <h1>mini-react-ssr</h1>
      {Object.keys(this.props.headers).map((key,index)=>{
        let val = this.props.headers[key]
        return <li onClick={this.click.bind(null,{key,val})} key={index}><b>{key}</b><span>:</span>{val}</li>
      })}
    </ul>
  }
}

export default App