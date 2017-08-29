import React from 'react';

const VideoDetail = ({video}) => {
  if (!video){
    return <div>Loading...</div>
  }
  {/* oun embed URL for youtube videos:  */}
  const theVideoId = video.id.videoId;
  {/* same than: 'http://www.youtube.com/embed/' + theVideoId;  */}
  const url = `http://www.youtube.com/embed/${theVideoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
};

export default VideoDetail;
