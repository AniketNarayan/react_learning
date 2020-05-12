import React from 'react';



 export default class Forms extends React.Component{
     constructor(){
         super();
         this.state={
            AppliedDate: new Date().getDate(),
            AppliedFrom: '',
            AppliedTill: '',
            Reason: ''
         }

     }
    handleForm=(e,Type)=>{
         this.setState({
             [Type] : e.target.value
            })

    againChange = ()=>{
    this.setState({
        AppliedFrom:''
    })
}

     }
     
    render(){
        return(
            <div className= "forms">
                <input type= "text" value={this.state.AppliedDate} disabled />

                <label for="from">Applied From</label>
                <input type= "text" value={this.state.AppliedFrom}onChange={(e) => this.handleForm(e, 'AppliedFrom')} onClick={this.againChange()}/>

                <label for="till">Applied Till</label>
                <input type= "text" value={this.state.AppliedTill} onChange={(e) => this.handleForm(e,'AppliedTill')} />

                <label for="reason">reason</label>
                <input type= "text" value={this.state.Reason} onChange={(e) => this.handleForm(e, 'Reason')} />

                <input type="button" onClick={() => this.props.submitForm({...this.state})} value="Submit"/>
            </div>
        )
    }
}