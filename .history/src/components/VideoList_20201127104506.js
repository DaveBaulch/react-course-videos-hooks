import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
  console.log(videos);

  const VideoList = ({ videos }) => {
    videos.map((video) => {
      return <VideoItem />
  });

  return (
    <div>
    {videos.length}
    <VideoItem />
    </div>

  )
};

export default VideoList;
