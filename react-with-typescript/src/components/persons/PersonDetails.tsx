import React, { Component } from 'react'
import {PersonDetailsProps} from './PersonTypes'

export class PersonDetails extends Component<PersonDetailsProps,any> {
    render() {
        return (
            <div>
                Person {this.props.name} email {this.props.email}
            </div>
        )
    }
}

export default PersonDetails
