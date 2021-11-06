import React, { Component } from 'react'

type ContainerProps = {
    styles: React.CSSProperties
}

class Container extends Component<ContainerProps> {
    render() {
        return (
            <div style={this.props.styles}>
                Text Content goes here!
            </div>
        )
    }
}

export default Container
