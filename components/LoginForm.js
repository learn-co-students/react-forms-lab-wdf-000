const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.handlePassword = this.handlePassword.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);

    this.state = {
      pw: '',
      un: ''
    };
  }

  handlePassword(event){
    this.setState({
      pw: event.target.value
    });
  }

  handleUsername(event){
    this.setState({
      un: event.target.value
    });
  }

  handleSubmission(event){
    event.preventDefault();
    let submissionParams = {password: this.state.pw, username: this.state.un};

    if (!submissionParams.password || !submissionParams.username){
      console.log("No, dear.")
    } else {
      this.props.onSubmit(submissionParams);
    }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmission}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.un} onChange={this.handleUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.pw} onChange={this.handlePassword}/>
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
