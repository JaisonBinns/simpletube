import React from "react";
import { List } from "@material-ui/core";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  //props.videos
  //maps over videos array & returns a videoitem for each video element
  const renderedList = videos.map((video) => {
    //pass down video element into VideoItem as prop
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });
  return (
    <div className="classes.root">
      <List>{renderedList}</List>
    </div>
  );
};

export default VideoList;
