const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.handleUser = this.handleUser.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.bruh = this.bruh.bind(this)

    this.state = {
      user: '',
      pass: ''
    };
  }

  handleUser(event) {
    this.setState({
      user: event.target.value
    })
  }

  handlePass(event) {
    this.setState({
      pass: event.target.value
    })
  }

  bruh(event) {
    event.preventDefault();
    if (!this.state.user || !this.state.pass) {
      return;
    }

    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <form onSubmit={this.bruh}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.user} onChange={this.handleUser}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.pass} onChange={this.handlePass}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: React.PropTypes.func
}

module.exports = LoginForm;
