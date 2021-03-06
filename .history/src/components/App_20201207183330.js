import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

const App = () => {
;

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setselectedVideo] = useState(null);


  onVideoSelect = (video) => {
    console.log('From the app!', video);
    this.setState({ selectedVideo: video });
  };

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    // console.log(response.data.items);
    this.setState({ videos: response.data.items });
    this.setState({ selectedVideo: response.data.items[0] });
  };

  componentDidMount() {
    this.onTermSubmit('buildings');
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
