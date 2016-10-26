import React, { Component, PropTypes } from 'react'

class TwitterMessage extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
    this.setMessage = this.setMessage.bind(this)
  }

  setMessage(event) {
    this.setState({
      message: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.setMessage} />
        <p>{this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

TwitterMessage.defaultProps = {
  maxChars: 140,
};

TwitterMessage.propTypes = {
  maxChars: PropTypes.number,
};

module.exports = TwitterMessage;