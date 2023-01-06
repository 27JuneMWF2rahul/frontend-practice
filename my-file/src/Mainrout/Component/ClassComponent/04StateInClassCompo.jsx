import React, { Component } from 'react';

class StateInClassCompo extends Component {
    dataMembar = "Somthing data membar....."
    constructor(props){
        super(props);
        this.state={
            stateData:"init",
            valueForIncreDec:0,
            trunonoff:true
        }
    //    this.clickHandleSomthing = this.clickHandleSomthing.bind(this)
    }
    // clickHandleSomthing() {
    //     console.log("called");
    //     this.dataMembar = "change..."
    //     this.setState({stateData:"other data"})
    // }
    clickHandleSomthing=()=> {
        console.log("called");
        this.dataMembar = "change..."
        this.setState({stateData:"other data"})
    }
    increment = ()=>{
        this.setState({ valueForIncreDec:this.state.valueForIncreDec+1})
    }
    render() {
        let data = "Somthing"
        return (
            <>
             {data}<br/>
             {this.dataMembar}<br/>
             {this.state.stateData}
             <button onClick={this.clickHandleSomthing}>Click</button>   
             <br/>
             <button onClick={this.increment} >Incrememnt</button>
             {this.state.valueForIncreDec}
             <button onClick={()=>{this.setState({ valueForIncreDec:this.state.valueForIncreDec-1})}}>Decrement</button>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <button onClick={()=>{this.setState({ trunonoff:!this.state.trunonoff})}}>{this.state.trunonoff? "On":"Off" }</button>

            </>
        );
    }
}

export default StateInClassCompo;