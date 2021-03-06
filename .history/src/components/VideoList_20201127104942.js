import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem key={ video} video={video} />;
  });

return (
    <div>
    {renderedList}
    </div>
  )
};


export default VideoList;
