const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      password: ''
    };

    this.handleText = this.handleText.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleText(event) {
    this.setState ({
      text: event.target.value,
    })
  }

  handlePassword(event) {
    this.setState ({
      password: event.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    let userInfo = {name: this.state.name, password: this.state.password}

    if (!userInfo.name || !userInfo.password) {
      return
    } else {
      this.props.onSubmit(userInfo)
    }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.text} onChange={this.handleText}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handlePassword}/>
          </label>
        </div>
        // <div>
        //   <button type="submit" onSubmit={this.handleSubmit}>Log in</button>
        // </div>
      </form>
    );
  }
}

module.exports = LoginForm;
