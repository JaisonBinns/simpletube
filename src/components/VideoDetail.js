import React from "react";
import { Container, Typography } from "@material-ui/core";

const VideoDetail = ({ video }) => {
  //Needed conditional rendering. NULL is default for state selectedvideo
  if (!video) {
    return (
      <div>
        <Typography>Select a video to watch</Typography>{" "}
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <Container>
        <iframe
          title="video player"
          height="300"
          width="100%"
          src={videoSrc}
          allow="autoplay;"
          allowFullScreen
        ></iframe>

        <Typography>
          <h4 className="vid header">{video.snippet.title}</h4>
          <p>
            `{video.snippet.description}. Date Uploaded:{" "}
            {video.snippet.publishedAt}`
          </p>
        </Typography>
      </Container>
    </div>
  );
};

export default VideoDetail;
