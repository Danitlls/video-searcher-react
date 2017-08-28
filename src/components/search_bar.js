import React from 'react';



class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = { term: ''};
  }
  render() {
    return (
      <div>
        <input value={this.state.value}
        onChange={ event => this.setState({ term: event.target.value })}/>
        <p>Value of the input: {this.state.term}</p>
      </div>
   );
  }

}

export default SearchBar;

{/*
  class SearchBar extends React.Component {
  when you have only one event , it can be passed in-line as above, or:
  render() {
    return <input onChange={this.handlerInputChange(event)}/>;
  }

  handlerInputChange(event){
    console.log(this.event)
  }
  }
  */}
