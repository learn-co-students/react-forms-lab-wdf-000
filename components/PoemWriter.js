const React = require('react');

function isValid(text) {
    var lines = text.match(/[^\r\n]+/g)
      if(lines.length == 3) {
        var line1 = lines[0].split(" ").filter(letter => letter != "")
        var line2 = lines[1].split(" ").filter(letter => letter != "")
        var line3 = lines[2].split(" ").filter(letter => letter != "")
      }

      if (lines.length == 3 && line1.length == 5 && line2.length == 3 && line3.length == 5) {
        return true
      } else {
        return false
      }
    }


class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      isValid: false,
    };

    this.handleText = this.handleText.bind(this);

  }

  handleText(event) {
    if (event.target.value) {
      this.setState ({
        text: event.target.value,
        isValid: isValid(event.target.value)
      })
    }
  }


  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.text} onChange={this.handleText}/>
        {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null }
      </div>
    );
  }
}

module.exports = PoemWriter;
