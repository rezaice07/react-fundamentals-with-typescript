import React, { Component } from 'react'

interface StatusProps{
    status?:'loading' | 'success' | 'error'
}


class Status extends Component<StatusProps, any> {
    
    state={
        message:''
    }

    componentDidMount=()=>{
        if(this.props.status==='loading'){
            this.setState({
                message:'Loading...'
            })
        }
        else if(this.props.status==='success'){
            this.setState({
                message:'Data fetched successfullly!'
            })
        }
        else if(this.props.status==='error'){
            this.setState({
                message:'Error fetching data'
            })
        }
    }
    render() {
        
        return (
            <div>
                <h2>{this.state.message}</h2>
            </div>
        )
    }
}

export default Status
