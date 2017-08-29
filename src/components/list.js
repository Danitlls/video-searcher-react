import React from 'react';
import VideoListItems from './video_list_items';



{/*Props come from App parent component*/}
const List = (props) =>  {
  const videoItems = props.videos.map((video) => {
    {/*Etag is a property of the list of objects I'm getting from the API call, When rendering a list of elements, every element needs to have a unic id or key*/}
    return <VideoListItems key={video.etag} video={video} />
  });

  return (
    <ul className="col-md-4 list-group">
    {/*props + nameof props + method */}
    {videoItems}
    </ul>
 );
};

export default List;


    {/* in class component, props are available as this.props */}
