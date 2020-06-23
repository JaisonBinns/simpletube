import React from "react";
import SearchBar from "./Searchbar";
//import { headers } from "../api/youtube";
import axios from "axios";
import VideoList from "./VideoList";
import { Container, Grid } from "@material-ui/core";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchSubmit("Cats");
  }
  //gets user input from search to get api request
  onSearchSubmit = async (term) => {
    //set up API
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${term}&type=video&key=AIzaSyCBBOrsUAnFiG8HUcGJepf6hDLEWk1vXac`,
      {
        headers: { Accept: "application/json" },
      }
    );
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  selectedVideo = (video) => {
    //Callback fn to play selected video from VideoItem
    console.log(video);
    this.setState({ selectedVideo: video });
    console.log(this.state.selectedVideo);
  };

  render() {
    return (
      <div>
        <div>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <VideoDetail video={this.state.selectedVideo} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.selectedVideo}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

//Youtube API key :

export default App;
