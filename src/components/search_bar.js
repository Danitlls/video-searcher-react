import React from 'react';



class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = { term: ''};
  }
  render() {
    return (
      <div id="search-bar">
        <input value={this.state.term}
        onChange={ event => this.onInputChange(event.target.value)}/>
      </div>
   );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
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
