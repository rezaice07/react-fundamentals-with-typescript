import React, { Component } from 'react'
import { PersonListProps } from './PersonTypes'

class PersonList extends Component<PersonListProps, {}> {
    constructor(props: any) {
        super(props)
    }

    render() {
        console.log(this.props.names.length)
        return (
            <tbody>
                {this.props.names.map(item =>
                    <tr key={item.name}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.cellphone}</td>
                    </tr>
                )}
            </tbody>
        )
    }
}

export default PersonList
