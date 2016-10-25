const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
    this.userUpdate = this.userUpdate.bind(this);
    this.passUpdate = this.passUpdate.bind(this);
  }
  userUpdate(e) {
    this.setState({
      username: e.target.value
    })
  }
  passUpdate(e) {
    this.setState({
      password: e.target.value
    })
  }
  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        if (!(this.state.username == '' || this.state.password == '')) {
          this.props.onSubmit();
        }
      }
      }>
        <div>
          <label>
            Username
            // maybe add and onchange method to the input form below as the validator. later.
            <input id="test-username" value={this.state.username} type="text" onChange={this.userUpdate} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.passUpdate}/>
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
