const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      count: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
      count: (e.target.value).split('').length
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <p>Remaining characters: {this.props.maxChars - this.state.count}</p>\
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChars: React.PropTypes.number
}

TwitterMessage.defaultProps = {
  maxChars: 140
}

module.exports = TwitterMessage;
