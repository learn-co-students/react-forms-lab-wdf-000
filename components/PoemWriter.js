const React = require('react');

  function isValid(poem) {
    var lines = poem.match(/[^\r\n]+/g)
    if(lines.length == 3) {
      var lineA = lines[0].split(" ").filter(letter => letter != "")
      var lineB = lines[1].split(" ").filter(letter => letter != "")
      var lineC = lines[2].split(" ").filter(letter => letter != "")
    }    
    debugger
    if (lines.length == 3 && lineA.length == 5 && lineB.length == 3 && lineC.length == 5) {
      return true
    } else {
      return false 
    }
  }

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.handleEvent = this.handleEvent.bind(this)
    this.state = {
      poem: "",
      isValid: false
    };
  }

  handleEvent(ev) {
    var poem = ev.target.value

    if (poem){
 this.setState({
      poem: poem,
      isValid: isValid(poem)
    });
  }
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
