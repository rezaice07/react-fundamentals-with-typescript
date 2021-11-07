import React, { Component } from 'react'

interface CountryListProps<T>{
    countries:T[],
    onClick:(value:T) => void
}

class CountryList extends Component<any> {
    render() {
        return (
            <div>

                <h1>{this.props.userName}</h1>
                <h2>List of countries</h2>
                <hr />
                <ul>
                    {

                    }
                </ul>
            </div>
        )
    }
}

export default CountryList
