const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();
    
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      message: ""
    };
  }

  handleChange(ev) {
    this.setState({
      message: ev.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleChange}/>
        <p> Max Char: {this.props.maxChars} </p>
        <p> Remaining Chararcters: {this.props.maxChars - this.state.message.length} </p>
      </div>
    );
  }
}

module.exports = TwitterMessage;
