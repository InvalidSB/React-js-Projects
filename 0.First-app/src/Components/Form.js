import React, { Component } from 'react'

export default class Form extends Component {
    constructor(){
        super()
        this.state={
            username:"",
            password:"",
            gender:""

        }
    }
    submitHandler=(e)=>{
        e.preventDefault();
        console.log(this.state)
    }
    handleClick=(e)=>{
        this.setState({[e.target.name]: e.target.value})

    }
    render() {
        return (
            <div className="form">
                <h1>This is a simple from using React Hooks</h1>
                <h4>Please Check the Console for result</h4>
                <form onSubmit={this.submitHandler}>
                    Enter your name:
                    <input type="text" name="username" 
                    value={this.state.username} 
                    onChange={this.handleClick} />
                    <br/>
            
                    Enter your Password:
                    <input type="text" name="password" 
                    value={this.state.password} 
                    onChange={this.handleClick} />
                     <br/>
              
                    Enter your gender:
                    <input type="text" name="gender" 
                    value={this.state.gender} 
                    onChange={this.handleClick} />
               <br/>
                <button type="submit">Submit</button>    
                </form>
            </div>
        )
    }
}
