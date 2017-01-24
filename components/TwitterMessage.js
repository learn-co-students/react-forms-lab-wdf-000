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

  handleChange(event) {
    this.setState({
      value: event.target.value,
      count: ++this.state.count
    }, () => {
      const count = this.state.count;
      console.log(`count is now ${count}`)
    })
  }


  render() {
    return (
      <div>
        <strong>Your tweet:</strong>
        <input type="text" onKeyUp={this.handleChange}/>
        <p>Remaining characters: {this.props.maxChars - this.state.count} </p>
      </div>
    );
  }
}

module.exports = TwitterMessage;
