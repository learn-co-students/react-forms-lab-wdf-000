const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username:'',
      password:'',
    };
  }

  handleSubmit(e){
    e.preventDefault();
    if ((this.state.username == '' || this.state.password == '')){
      return;
    }
      this.props.onSubmit(this.state);
  }

  handleChange(attr,e){
    var hash = {};
    hash[attr] = e.target.value;
    this.setState(hash);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" value={this.state.username} onChange={(e) => this.handleChange('username',e)} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" value={this.state.password} onChange={(e) => this.handleChange('password',e)} type="password" />
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
