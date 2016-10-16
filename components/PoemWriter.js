const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)
    this.state = {content:''};
  }

  isValid(poem) {
    if( typeof(poem) == 'string' ) {
      let line = poem.split('\n');
      let arr = new Array(3);
      if (line.length == 3 ){
        for (var i = 0, len = arr.length; i < len; i++) {
          arr[i] = line[i].split(/\b\s+\b/).length;
        }
       	console.log(arr)
        if (arr[0] == arr[2] && arr[1]+2 == arr[0]  ) {
          return true;
        }
      } 
    }
    return false;
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    var good = null;
    if (!(this.isValid(this.state.value))) {
      good = ( <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> );
    }
    return (
      <div>
        <textarea value={this.state.value} onChange={this.handleChange} rows="3" cols="60" />
        {good}
      </div>
    );
  }
}

module.exports = PoemWriter;
