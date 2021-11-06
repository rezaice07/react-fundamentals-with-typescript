import React, { Component } from 'react'

interface InputProps{
    value:string,
    handleChange:(event:any)=>void
}

class Input extends Component<InputProps> {
    render() {
        return (
            <div>
                <input type="text" value={this.props.value} onChange={this.props.handleChange} />
            </div>
        )
    }
}

export default Input
