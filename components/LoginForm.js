const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };

    this.handleName = this.handleName.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleName(event) {
    this.setState({
      username: event.target.value
    })

  }

  handlePass(event) {
    this.setState({
      password: event.target.value
    })

  }

  handleSubmit(event){
    event.preventDefault();
    const { username, password } = this.state
    if(!username || !password){
      return;
    }

    this.props.onSubmit({
      username,
      password
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" value={this.state.username} type="text" onChange={this.handleName} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" value={this.state.password} type="password" onChange={this.handlePass} />
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
  onSubmit: React.PropTypes.func,
};

module.exports = LoginForm;
