const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.handlePoem = this.handlePoem.bind(this);
    this.validPoem = this.validPoem.bind(this);
    this.state = {
      poem: ''
    };
  }

  handlePoem(event){
    this.setState({
      poem: event.target.value
    })
  }

  validPoem(poem){
    let validity = false;
    let words;
    let lines = poem.split("\n");
    if (lines.length === 3){
      words = lines.map(function(line){
        return line.match(/\s*(\w*)\s*/g).filter(function(element){if (element){return element}}).length
      })
      if (words[0] === 5 && words[1] === 3 && words[2] === 5){
        validity = true;
      }
    }
    return validity;
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value = {this.state.poem} onChange={this.handlePoem}/>
        {this.validPoem(this.state.poem) ? '' : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>}
      </div>
    );
  }
}

module.exports = PoemWriter;
