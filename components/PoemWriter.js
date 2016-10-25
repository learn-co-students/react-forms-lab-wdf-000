const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {value: '', validPoem: false};
    this.changeHandler = this.changeHandler.bind(this);
    this.isValidPoem = this.isValidPoem.bind(this);
  }

  changeHandler(e) {
    let poem = e.target.value;
    this.isValidPoem(poem)
    this.setState({value: poem});
  }

  isValidPoem(poem) {
    let poemLines = poem.split('\n');
    let lineLengths = poemLines.map(line => line.split(/\b\s+\b/).length);
    if (poemLines.length === 3 && lineLengths[0] === 5 && lineLengths[1] === 3 && lineLengths[2] === 5) {
      this.setState({validPoem: true})
    }else{
      this.setState({validPoem: false})
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.changeHandler}/>
        {(!this.state.validPoem) ?
        <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
        : ''}
      </div>
    );
  }
}

module.exports = PoemWriter;
