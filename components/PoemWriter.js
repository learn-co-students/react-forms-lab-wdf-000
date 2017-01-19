const React = require('react');

function validatePoem(poem){
  const lines = poem.split("\n");
  if(lines.length === 3){
    const firstLine = lines[0].match(/[a-z'\-]+/gi);
    const secLine = lines[1].match(/[a-z'\-]+/gi);
    const thirdLine = lines[2].match(/[a-z'\-]+/gi);

    return ((lines.length === 3) && (firstLine.length === 5) && (secLine.length === 3) && (thirdLine.length === 5) );
  }
}


class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      isValid: false,

    };

    this.checkPoem = this.checkPoem.bind(this);
  }

  checkPoem(event) {
    const poem = event.target.value;

    if(poem && validatePoem(poem)) {
      this.setState({
        content: event.target.value,
        isValid: true,
      })
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.checkPoem}/>
        {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}

module.exports = PoemWriter;
