const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();
    
    this.state = {
      value: '',
      isValid: false
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.isPoemValid = this.isPoemValid.bind(this);
  }

  handleChange(e) {
    let poem = e.target.value;
    let validation = this.isPoemValid(poem);
    this.setState({
      value: poem,
      isValid: validation
    });
  }

  isPoemValid(poem) {
    let poemLines = poem.split("\n");
    let wordsCountArr = poemLines.map((line)=>{return line.split(/\b\s+\b/g).length});
    if(poemLines.length === 3 && wordsCountArr[0] === 5 && wordsCountArr[1] === 3 && wordsCountArr[2] === 5){
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange} />
        {this.state.isValid ? null : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>}
      </div>
    );
  }
}

module.exports = PoemWriter;
