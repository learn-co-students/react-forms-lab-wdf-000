const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value:'',
      numOfChar:'',
    };
  }

  handleChange(e) {
    var m = e.target.value;
    var l = this.props.maxChars - m.length;
    this.setState({
      value:m,
      numOfChar: l,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <h1>MAX: {this.props.maxChars}</h1>
        <h1>REMAINING: {this.state.numOfChar}</h1>
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChars: React.PropTypes.number,
};

module.exports = TwitterMessage;
