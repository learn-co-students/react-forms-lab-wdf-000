const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.handleName = this.handleName.bind(this)
    this.handlePass = this.handlePass.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      username: " ",
      password: " "
    };
  }

  handleName(event){
    this.setState({
      username: event.target.value,
    })
  }

  handlePass(event){
    this.setState({
      password: event.target.value,
    })
  }


handleSubmit(e){
  e.preventDefault();
  if (!this.state.username || !this.state.password) {
    alert('please enter username and password')
  } else {
    this.props.onSubmit(this.state)
  }
}




  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleName}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handlePass}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

module.exports = LoginForm;
