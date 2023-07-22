import React from "react";

import { Grid } from "@mui/material";

import VideoItem from "./VideoItem";

const VideoList = ({videos, onVideoSelect}) => {
    const listofVideos = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />)
    return (
        <Grid container spacing={10}>
            {listofVideos}
        </Grid>
    )
}

export default VideoList;