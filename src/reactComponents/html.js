import React from 'react'

class Html extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            content:this.props.content || ''
        }
    }
    componentDidMount(){
        this.setState({
            content : this.state.content + ' '
        })
    }
    render() {
        const content = this.state.content
        if(typeof window === 'undefined'){
            return <div>{content}</div>
            // return null
        }else{
            console.log(content)
            return <div dangerouslySetInnerHTML={{ __html: content}} />
        }
    }
}

export default Html