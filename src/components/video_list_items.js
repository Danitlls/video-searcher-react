import React from 'react';



const VideoListItems = ({video}) =>  {
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}


export default VideoListItems;


    {/* replace const VideoListItems = (props)..... const video = props.video POR... const VideoListItems = ({video}) , it says: the  argument has a property call video, take the property and make it a variable called video */}
