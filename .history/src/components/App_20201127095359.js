import React from 'react';
import axios from 'axios'
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { videos: [] };

  onSearchSubmit = async (term) => {
    // const response = await unsplash.get('/search/photos', {
    //   params: { query: term }
    // });
    // console.log(response.data.results);
    // console.log(this);
    // this.setState({ videos: response.data.results });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar />
      </div>
    );
  }
}

export default App;
