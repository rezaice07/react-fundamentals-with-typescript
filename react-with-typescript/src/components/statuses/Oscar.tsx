import React, { Component } from 'react'

class Oscar extends Component {
    render() {
        return (
            <div>
                Oscar goes to Leonardo Dicpario!
                <br />
                ------------------------------------------------
                {this.props.children}
            </div>
        )
    }
}

export default Oscar
