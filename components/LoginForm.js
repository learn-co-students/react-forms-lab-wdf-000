const React = require('react');

class LoginForm extends React.Component {
  constructor(props) {
    super();
    this.state = {username: '', password: ''};
    this.onSubmit = props.onSubmit;
    this.submitHandler = this.submitHandler.bind(this);
    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    if (this.state.username.length > 0 && this.state.password.length){
      this.onSubmit()
    }
  }

  usernameChangeHandler(e){
    this.inputChangeHandler('username', e)
  }

  passwordChangeHandler(e){
    this.inputChangeHandler('password', e)
  }

  inputChangeHandler(inputName, e){
    let value = e.target.value;
    this.setState({
      [inputName]: value
    })
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.usernameChangeHandler}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.passwordChangeHandler}/>
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
