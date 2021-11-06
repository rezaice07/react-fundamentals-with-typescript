import React, { Component } from 'react'
import PersonDetails from './PersonDetails'
import PersonList from './PersonList'
import { PersonListProps } from './PersonTypes'

export class ParentInfo extends Component {
    names=[
        {
            name:'Roha',
            email:'roha@gmail.com',
            cellphone:'01718055620'
        },
        {
            name:'Jui',
            email:'jui@gmail.com',
            cellphone:'01718055621'
        },
        {
            name:'Junainah',
            email:'junainah@gmail.com',
            cellphone:'01718055622'
        },
        {
            name:'Marium',
            email:'marium@gmail.com',
            cellphone:'01718055623'
        }

    ]
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email`</th>
                        <th>Telephone</th>
                    </tr>                    
                </thead>


                <PersonList names={this.names}/>  

            </table>

            // <PersonDetails  name='Roha' email="roha.com" />
        )
    }
}

export default ParentInfo
