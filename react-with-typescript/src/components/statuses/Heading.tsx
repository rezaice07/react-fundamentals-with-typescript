import React, { Component } from 'react'

interface HeadingProps{
    children?:string
}

class Heading extends Component<HeadingProps> {
    render() {
        return (
            <div>
                This is one of the best team
                <h2>{this.props.children} </h2>
            </div>
        )
    }
}

export default Heading
