const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.handleText = this.handleText.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      text: '',
      password: ''
    };
  }


  handleText(event){
    this.setState({
      text: event.target.value
    })
  }

  handlePassword(event){
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    let userInfo = {text: this.state.text, password: this.state.password}

    if (!userInfo.text || !userInfo.password) {
      console.log("nope")
    }else {
      this.props.onSubmit(userInfo)
    }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" values={this.state.text} onChange={this.handleText}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" values={this.state.password} onChange={this.handlePassword}/>
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
