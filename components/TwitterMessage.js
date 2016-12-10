const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: '',
    };

    this.message = this.message.bind(this);
  }

  message(e) {
    this.setState({
      tweet: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value = {this.state.tweet} onChange={this.message} />
        <h4>Exeeded by {this.props.maxChars - this.state.tweet.length} </h4>
      </div>
    );
  }
}

module.exports = TwitterMessage;
