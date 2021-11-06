import React from 'react';
import './App.css';
import PersonList from './components/persons/PersonList';
import Greet from './components/greets/Greet';
import ParentInfo from './components/persons/ParentInfo';
import Status from './components/statuses/Status';
import Heading from './components/statuses/Heading';
import Oscar from './components/statuses/Oscar';
import Button from './components/EventProps/Button';
import Input from './components/Inputs/Input';
import Container from './components/Stylings/Container';

class App extends React.Component {
 
  name='Grrr'

  handleClick=(event:any,from:any)=>{
    console.log(from)
  }

  render() {
    return (
      <div className="App">
        {/* <Greet name={this.name} numerOffMsh={7} /> */}
        {/* <PersonList names={this.state.persons} /> */}
        {/* <ParentInfo/> */}
        {/* <Status status='success'/> */}
        {/* Children Props */}
        {/* <Oscar>
          <Heading>Children: from heading</Heading>
        </Oscar>  */}

        {/* <Button handleClick={this.handleClick} /> */}
        {/* <Input value='' handleChange={(event)=>{console.log(event)}} /> */}

        <Container styles={{border:'1px solid black', padding:'1rem'}}/>

      </div>
    )
  }

}

export default App;
