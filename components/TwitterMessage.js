const React = require('react');

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    this.state = {value: ''};
    this.counter = props.maxChars;
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler(e) {
    let value = e.target.value;
    this.setState({value: value});
    this.counter -= value.length;
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.changeHandler}/>
        <span>{this.counter} characters remaining</span>
      </div>
    )
  }
}

module.exports = TwitterMessage;
