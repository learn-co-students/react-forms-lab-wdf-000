const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      password: '',
    };

    this.handleName = this.handleName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleForm = this.handleForm.bind(this)
  }

  handleName(e) {
    this.setState({
      name: e.target.value
    });
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleForm(e) {
      e.preventDefault();
      let userInfo = {name: this.state.name, password: this.state.password}

      if (!userInfo.name || !userInfo.password) {
        alert('please fill in the form')
      } else {
        this.props.onSubmit(userInfo)
      }

  }

  render() {
    return (
      <form onSubmit={this.handleForm}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value = {this.state.name} onChange = {this.handleName} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value = {this.state.password} onChange = {this.handlePassword}/>
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
