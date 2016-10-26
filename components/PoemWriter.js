const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      poem: "",
      isValid: false
    };

    this.handleEvent = this.handleEvent.bind(this)
    this.isValid = this.isValid.bind(this)
  }

  handleEvent(ev) {
    let poem = ev.target.value

    if (poem) {
      this.setState({
        poem: poem,
        isValid: this.isValid(poem)
      });
    }
  }

  isValid(poem) {
    return poem.match(/[^\r\n]+/g).map(l => l.match(/\S+/g)).filter(l => l).map(l => l.length).join() == "5,3,5"
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleEvent}/>
        {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}

module.exports = PoemWriter;
