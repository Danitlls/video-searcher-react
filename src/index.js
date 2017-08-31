import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import List from './components/list';
import VideoDetail from './components/video_detail';
import _ from "lodash";

const API_KEY = 'AIzaSyBGJuGykyYOQo3M9cGfqPbXPhjfa1CbQe0';

{/* YTSearch will auto populate the list of videos with videos of dance videos, if key & value have the same name like 'items: items', I could just put 'items'*/}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('love');
}

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div>
      <SearchBar onSearchTermChange={videoSearch} />
      {/* when Searchbar calls the functiuon onSerachTermChange it will do it with the serach-term: term, and it will be sent to videoSearch()
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} /> function changed to add delay, and ruhn videoSearch every 3 seconds*/}
      <VideoDetail video={this.state.selectedVideo}/>

      {/*Passing props(videos) to the child component (list), props videos will automaticly update*/}
      <List
        onVideoSelect={ selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}/>
        {/*Callback function onVideoSelect, it updates the state of selectedVideo in App, */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
