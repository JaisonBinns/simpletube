import React from "react";
import {
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";

const VideoItem = ({ video, onVideoSelect }) => {
  //inline styling NOT typically recommended, but app's simple iteration
  const imgStyle = {
    cursor: "pointer",
  };
  return (
    <div>
      <ListItem onClick={() => onVideoSelect(video)} style={imgStyle}>
        <ListItemAvatar>
          <img
            src={video.snippet.thumbnails.default.url}
            alt={video.snippet.title}
          />
        </ListItemAvatar>
        <ListItemText>{video.snippet.title}</ListItemText>
      </ListItem>
      <Divider />
    </div>
  );
};

export default VideoItem;
