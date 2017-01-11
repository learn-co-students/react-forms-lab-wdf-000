const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();
    
    this.state = {
      username: '',
      password: ''
    };
    
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  usernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  passwordChange(e) {
    this.setState({
      password: e.target.value
    });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    if(this.state.username && this.state.password) {
      this.props.onSubmit(this.state);
    } else {
      console.log("both fields needs to be filled.");
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.usernameChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.passwordChange} />
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
