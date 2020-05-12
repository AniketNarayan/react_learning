import React from 'react';
import logo from './logo.svg';
import './App.css';
import Forms from "./Components/Forms" ;
import Leaves from "./Components/Leaves";

 export default class App extends React.Component{
  constructor(){
    super();
    this.state= {
      MyLeaves:[],
      ApplyClicked: false,
      LeavesClicked: false
    }

  }
handleApply=() =>{
  this.setState({
    ApplyClicked: true,
    LeavesClicked:false
  })
}
  handleLeaves=() =>{
    this.setState({
      ApplyClicked: false,
      LeavesClicked: true
    })
  }
  submitForm=(obj)=>{
      const MyLeaves = this.state.MyLeaves;
      MyLeaves.push(obj);
      this.setState({
        MyLeaves,
        ApplyClicked: false
      })

  }
  closeLeaves=() =>{
    this.setState({LeavesClicked: false})
  }
  render(){
    const { ApplyClicked, LeavesClicked} = this.state
    return(
      <div>
        {!ApplyClicked && !LeavesClicked &&(
          <div>
          <input type="button" onClick={this.handleApply} value="Apply" />
          <input type="button" onClick={this.handleLeaves} value="My Leaves" />
          </div>
        )}
        {ApplyClicked && <Forms submitForm={obj=> this.submitForm(obj)}/>}
        {LeavesClicked && <Leaves leaves={this.state.MyLeaves}  closeLeaves={this.closeLeaves} />}

    
    

      </div>

    )
  }
}
