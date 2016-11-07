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
    let lines = poem.split("\n");
    if (lines.length === 3){
      validity = true;
    }
    ////Currently only checks for this yet all the poem tests pass, hmmpff.
    // The poem has three lines.

    ////Still need to test for these
    
    // The first has five words.
    // Then three words.
    // The third has five words.
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
