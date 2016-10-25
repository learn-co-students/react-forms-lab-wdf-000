const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();
    
    this.formSubmit = this.formSubmit.bind(this)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.state = {
      username: "",
      password: "",
    };
  }
  
  formSubmit(e) {
      e.preventDefault()
      const username = this.state.username
      const password = this.state.password
      if (!username || !password) {
        return
      } else {
        this.props.onSubmit({
          username,
          password
      })
}
}
  
  handlePasswordChange(e) {
    this.setState({username: e.target.value});
  }

  handleUsernameChange(e) {
    this.setState({password: e.target.value});
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange={this.handleUsernameChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange={this.handlePasswordChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

module.exports = LoginForm;

