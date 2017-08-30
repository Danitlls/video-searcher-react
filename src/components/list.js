import React from 'react';
import VideoListItems from './video_list_items';



{/*Props come from App parent component, and it has acess to onVideoSelect that is passed as a callback function from App*/}
const List = (props) =>  {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItems
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    )
  });
  {/*Etag is a property of the list of objects I'm getting from the API call, When rendering a list of elements, every element needs to have a unic id or key*/}

  return (
    <ul className="col-md-4 list-group">
    {/*props + nameof props + method */}
    {videoItems}
    </ul>
 );
};

export default List;


{/* in class component, props are available as this.props */}
