const React = require('react');

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.max = props.maxChars
    this.submit = this.submit.bind(this)
    this.state = {
      value: 0
    }
  }

  submit(ev){
    this.setState({
      value: ev.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.submit} />
        <p>Entered remaining characters: {this.max - this.state.value}</p>
      </div>
    );
  }
}

module.exports = TwitterMessage;
