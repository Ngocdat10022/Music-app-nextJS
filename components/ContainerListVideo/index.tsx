import React, { useContext } from "react";
import { VideoContext } from "../../context/VideoContext";
import ListVideo from "./ListVideo";
import VideoItem from "./VideoItem";

const ContainerListVideo = () => {
  const { listVideo, loading, setPageIndex } = useContext(VideoContext);
  console.log("listVideo", listVideo);
  if (!listVideo) return <></>;
  return (
    <div className="p-4">
      <ListVideo>
        {listVideo.length > 0 &&
          listVideo.map((item) => {
            return <VideoItem key={item.encodeId} data={item} />;
          })}
      </ListVideo>
    </div>
  );
};

export default ContainerListVideo;
