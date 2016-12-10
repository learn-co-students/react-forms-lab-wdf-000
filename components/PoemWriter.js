const React = require('react');

function wordCounting(line) {
  return line.split(' ').filter(l => l).length;
}

function validatingPoem(text) {
  let lines = text.split('\n').filter(l => l);
  let linesCount = lines.length === 3;
  let wordCount = wordCounting(lines[0]) === 5 && wordCounting(lines[1]) === 3 && wordCounting(lines[2]) === 5;
  return linesCount && wordCount;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      isValid: false,
    };

    this.handlePoem = this.handlePoem.bind(this);
  }

  handlePoem(e) {
    const p = e.target.value
    if (p) {
      this.setState({
        poem: p,
        isValid: validatingPoem(e.target.value),
      })
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.handlePoem} />
      {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null }
      </div>
    );
  }
}


module.exports = PoemWriter;
