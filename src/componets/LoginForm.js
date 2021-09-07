import React, { Component } from 'react'
 class LoginForm extends Component {

    state = {
        username: '',
        password: ''
    }

    render() {
        return (
            <form>
                <label>Username:</label>
                <input type='text' value={this.state.username} onChange={this.handleChange} name="name" placeholder="Enter Username"/>
                <br></br><br></br>
                <label>Password:</label>
                <input type='password' value={this.state.password} onChange={this.handleChange} name="password" placeholder="Enter Password"/>
                <input type='submit' value="Login"/>
            </form>
        )
    }
}


export default LoginForm; 
