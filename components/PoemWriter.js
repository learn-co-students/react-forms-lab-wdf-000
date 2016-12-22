const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.changes = this.changes.bind(this)
    this.insertErrors = this.insertErrors.bind(this)

    this.state = {
      poem: '',
      errors:'none'
    }

  }

  changes(ev){
    var textarea = ev.target.value
    // var lines = textarea.split('\n')
    this.setState({
      poem: textarea,
      errors: 'changed'
    })
  }

  insertErrors(){
    var poem = this.state.poem.split('\n')
    var poemLength = poem.length
    var firstLine = poem[0]
    var secondLine = poem[1]
    var thirdLine = poem[2]
    if (poemLength <3) {
      return 'Must be at least 3 lines long'
    }else if (firstLine.split(' ').length < 5) {
        return "First Line must have 5 words"
    }else if (secondLine.split(' ').length < 3) {
        return "Second Line must have 3 words"
    }else if (thirdLine.split(' ').length < 5) {
        return "Third Line must have 5 words"
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.changes}/>
      {this.insertErrors()? <div id="poem-validation-error" style={{color: 'red'}}>{ this.insertErrors() }</div> : ''}
      </div>
    );
  }
}

module.exports = PoemWriter;


// const React = require('react');
//
// function countWords(line) {
//   return line.split(' ').filter(l => l).length;
// }
//
// function isValidPoem(poem) {
//   const poemLines = poem.split('\n').filter(l => l);
//   const isRightAmountOfLines = poemLines.length === 3;
//   const hasRightAmountOfWords = countWords(poemLines[0]) === 5 && countWords(poemLines[1]) === 3 && countWords(poemLines[2]) === 5;
//   return isRightAmountOfLines && hasRightAmountOfWords;
// }
//
// class PoemWriter extends React.Component {
//   constructor() {
//     super();
//
//     this.state = {
//       content: '',
//       isValid: false,
//     };
//
//     this.setPoemContent = this.setPoemContent.bind(this);
//   }
//
//   setPoemContent(ev) {
//     const content = ev.target.value;
//
//     if (content) {
//       this.setState({
//         content: content,
//         isValid: isValidPoem(content),
//       });
//     }
//   }
//
//   render() {
//     return (
//       <div>
//         <textarea rows="3" cols="60" value={this.state.content} onChange={this.setPoemContent} />
//         {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
//       </div>
//     );
//   }
// }
//
// module.exports = PoemWriter;
