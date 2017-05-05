import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);

    this.state = {
      content: '',
    };
  }

  handleChange(event) {
    this.setState({
      content: event.target.value,
    });
  }

  validate(){
    const poem = this.state.content;
    // split into array by lines
    const lines = poem.split('\n');

    // make sure poem is 3 lines
    if (lines.length === 3) {
      // count number of words per line
      // making sure to filter empty spaces
      const firstLineWords = lines[0].split(' ').filter(word => word).length;
      const secondLineWords = lines[1].split(' ').filter(word => word).length;
      const thirdLineWords = lines[2].split(' ').filter(word => word).length;

      // check all lines for right length
      if (firstLineWords === 5 && secondLineWords === 3 && thirdLineWords === 5) {
        return true;
      }
    } else {
      // poem isn't 3 lines
      // returning false to display error div
      return false;
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.handleChange} />
        {this.validate() ? null : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>}
      </div>
    );
  }
}
