const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: " ",

    };
  }

  handleChange(event){
    this.setState({
      value: event.target.value,
    })

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <p><strong>Your Remaining Chacters:</strong>{this.props.maxChars - this.state.value.length}</p>
        <p>Max characters: {this.props.maxChars}</p>
      </div>
    );
  }
}

module.exports = TwitterMessage;
