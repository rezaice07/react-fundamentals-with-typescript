import React, { Component } from 'react'
import { PersonListProps } from './PersonTypes'

class PersonList extends Component<PersonListProps,null> {
    constructor(props:any) {
        super(props)          
    }
    
    render() {

        return (
            <tbody>
                {this.props.names? this.props.names.map(item=>{ 
                     <tr><td>{item.name}</td> <td>{item.email}</td> <td>{item.cellphone}</td> </tr>
                    })
                    :<div>Warning! There are no persons found to show.</div>
                }
            </tbody>
        )
    }
}

export default PersonList
