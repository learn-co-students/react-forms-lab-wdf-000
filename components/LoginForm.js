const React = require('react');

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.userName = this.userName.bind(this)
    this.passWord = this.passWord.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    // this.callBack = props.onSubmit.bind(this)
    this.state = {
      username : '',
      password: ''
    };
  }

  userName(ev){
    this.setState({
      username: ev.target.value
    })
  }
  passWord(ev){
    this.setState({
      password: ev.target.value
    })
  }

  onSubmit(ev){
    ev.preventDefault();
      if (!!this.state.username && !!this.state.password){
        // this.callBack(this.state)
        this.props.onSubmit(this.state)
  }else{
    console.log('enter a password and user name')
  }

  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange={this.userName} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange={this.passWord} />
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
