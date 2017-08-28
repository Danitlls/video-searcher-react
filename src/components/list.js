import React from 'react';
import VideoListItems from './components/video_list_items';



const List = (props) =>  {
  const videoItem = props.videos.map((video) =>{
    return <VideoListItems video={video} />
});
  return (
    <ul className="list-group">
    {props.videos.lengh}
    </ul>
 );
}


export default List;
