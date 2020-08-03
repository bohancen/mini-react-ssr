import React from 'react'
import Html from './html'

async function dialog(text){
  let {dialog} = await import('./dialog')
  dialog(text)
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      title:''
    }
  }
  async click({key,val}){
    // dialog(key+ '--' +val)
    this.setState({
      title:val
    })
  }
  async button(){
    dialog('button')
  }
  componentDidMount(){
    
  }
  render(){
    return <div className="app">
      <h1>mini-react-ssr</h1>
      <p>{this.state.title}</p>
      <Html content={'<strong>加粗</strong>'}></Html>
      <ul>
        {Object.keys(this.props.headers).map((key,index)=>{
          let val = this.props.headers[key]
          return <li onClick={this.click.bind(this,{key,val})} key={index}><b>{key}</b><span>:</span>{val}</li>
        })}
      </ul>
      <button onClick={this.button}>button</button>
    </div>
  }
}

export default App