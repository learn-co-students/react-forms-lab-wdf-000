const React = require('react');





class PoemWriter extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)
    this.checkErrors = this.checkErrors.bind(this)
    this.state = {
      text: "",
    };
  }


  handleChange(event){
    this.setState({
      text: event.target.value,
    })
  }

  checkErrors(){
  var poem = this.state.text.split('\n')
  var firstline = poem[0]
  var secondline = poem[1]
  var thirdline = poem[2]
   if (poem.length != 3) {
     return 'poem is twwo short'
   }else if (firstline.split(' ').length === 5 ) {
       return "First Line must be 5 characters long"
   }else if (secondline.split(' ').length === 3) {
       return "Second Line must have 3 characters long"
   }else if (thirdline.split(' ').length === 5) {
       return "Third Line must have 5 characters long"
   }

}









  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.text} onChange={this.handleChange}/>
        {this.checkErrors() ? <div id="poem-validation-error" style={{color: 'red'}}>{this.checkErrors()}</div> : ''}
      </div>
    );
  }
}




module.exports = PoemWriter;
