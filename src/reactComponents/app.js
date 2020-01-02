import React from 'react'

class App extends React.Component {
  async click({key,val}){
    let {dialog} = await import('./dialog')
    dialog(key+ '--' +val)
  }
  async button(){
    let {dialog} = await import('./dialog')
    dialog('button')
  }
  render(){
    return <div className="app">
      <h1>mini-react-ssr</h1>
      <ul>
        {Object.keys(this.props.headers).map((key,index)=>{
          let val = this.props.headers[key]
          return <li onClick={this.click.bind(null,{key,val})} key={index}><b>{key}</b><span>:</span>{val}</li>
        })}
      </ul>
      <button onClick={this.button}>button</button>
    </div>
  }
}

export default App