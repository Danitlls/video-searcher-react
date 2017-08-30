import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import List from './components/list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyBGJuGykyYOQo3M9cGfqPbXPhjfa1CbQe0';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    } ;

{/* YTSearch will auto populate the list of videos with videos of dance videos, if key & value have the same name like 'items: items', I could just put 'items'*/}
    YTSearch({key: API_KEY, term: 'dance'}, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });

  }
  render(){
    return (
      <div>
      <SearchBar />
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
