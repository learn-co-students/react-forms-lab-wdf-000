const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
    this.handleText = this.handleText.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  handleText(event){
    this.setState({
      value: event.target.value
    });
  }

  isValid(poem){
    let valid = false;
    let lines = poem.split("\n");

    if(lines.length === 3){
      let line1 = lines[0].split(" ").filter(letter => letter != "")
      let line2 = lines[1].split(" ").filter(letter => letter != "")
      let line3 = lines[2].split(" ").filter(letter => letter != "")
      if (line1.length == 5 && line2.length == 3 && line3.length == 5){
        return true
      }
    }else {
      return false
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" values={this.state.textarea} onChange={this.handleText} />
        {this.isValid(this.state.value) ? '' : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>}
      </div>
    );
  }
}

module.exports = PoemWriter;
