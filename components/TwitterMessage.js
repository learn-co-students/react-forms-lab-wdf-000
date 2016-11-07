const React = require('react');

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.handleTweet = this.handleTweet.bind(this);
    let max = props.maxChars;

      this.state = {
      message: '',
      charactersLeft: max
    };
  }

  handleTweet(event){
    let wrote = event.target.value;
    let remainingChars = this.props.maxChars - wrote.length;
    this.setState({
      message: wrote,
      charactersLeft: remainingChars
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleTweet}/>
        <p>You have {this.state.charactersLeft} characters left.</p>
      </div>
    );
  }
}

module.exports = TwitterMessage;
