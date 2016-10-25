const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      correctPoem: false
    };

    this.updatePoem = this.updatePoem.bind(this);
  }
  updatePoem(e) {
    this.setState({
      poem: e.target.value
     });
    var poemVal = (e.target.value).split('\n').map(function(ln){
      var count = ln.match(/\S+/g);
      return (!(count == null)) ? count.length : null 
    });
    if (poemVal.join(" ")  == "5 3 5") {
      this.setState({
        correctPoem: true
      });
    }
  }
  render() {
    var error;
    if (this.state.correctPoem == true) {error = null}
    else {
      error = <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!'</div>
    }
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.updatePoem} />
        { error } 
        </div>
    );
  }
}

module.exports = PoemWriter;
