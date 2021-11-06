import React, { Component } from 'react'

interface ButtonProps{
    handleClick:(event:any,from:any)=>void
}

export class Button extends Component<ButtonProps> {
    render() {
        return (
            <div>
                <button onClick={(event)=>this.props.handleClick(event,'From Button Click')}>Click</button>
            </div>
        )
    }
}

export default Button
