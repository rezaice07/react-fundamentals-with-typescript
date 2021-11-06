import React, { Component } from 'react'
import { GreetProps } from './GreetTypes'

class Greet extends Component<GreetProps> {

    constructor(props:GreetProps) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        const {name,numerOffMsh}=this.props;
        return (
            <div>
                <h1>Welcome {name}. You have {numerOffMsh} unread messages.</h1>
            </div>
        )
    }
}

export default Greet
