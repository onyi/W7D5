import React from 'react'

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e){
    let type = e.target.name;
    let value = e.target.value;
    this.setState({ [type]: value })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createNewUser(this.state)
    .then( () => this.props.history.push('/chirps'))
  }

  render(){
    return (
      <div>
        <h2>Hello this is a signup form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input type="text" name="username" onChange={this.handleInput} value={this.state.username}></input>
          </label> 

          <label>Password:
            <input type="text" name="password" onChange={this.handleInput} value={this.state.password}></input>
          </label> 

          <label>Email: 
            <input type="text" name="email" onChange={this.handleInput} value={this.state.email}></input>
          </label> 

          <input type="submit" value="Sign Up"/>
        </form>
      </div>
    );
  }
}

export default Signup;
