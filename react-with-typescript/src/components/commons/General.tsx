import React, { Component } from 'react'

type GeneralState={
    count:number
}

export class General extends Component<{},GeneralState>{
    
    constructor(props:any) {
        super(props)

        this.state = {
            count:0
        }
    }

    handleClick=()=>{
        console.log('this is handle click');

        this.setState(prevCount=> {
           return {
               count:prevCount.count+1
            }
        })

        console.log('prevCount => '+this.state.count);
    }
 

    render() {
        return (
            <div>
                
                <button onClick={()=>this.handleClick()}>Click Me</button>
            </div>
        )
    }
}

export default General
