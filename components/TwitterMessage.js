const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    })

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <p>{this.props.maxChars-this.state.value.length} chars</p>
      </div>
    );
  }
}

TwitterMessage.defaultProps = {
  maxChars: 10,
}

TwitterMessage.propTypes = {
  maxChars: React.PropTypes.number,
}

module.exports = TwitterMessage;
