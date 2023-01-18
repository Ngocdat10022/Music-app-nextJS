import React, { useContext } from "react";
import { VideoContext } from "../../context/VideoContext";
import ListVideo from "./ListVideo";
import VideoItem from "./VideoItem";

const ContainerListVideo = () => {
  const { listVideo, loading, setLimitIndex, linitIndex } =
    useContext(VideoContext);
  const handleSetLimit = () => {
    setLimitIndex(linitIndex + 20);
  };
  if (!listVideo) return <></>;
  return (
    <div className="p-4">
      <ListVideo>
        {listVideo.length > 0 &&
          listVideo.map((item) => {
            return <VideoItem key={item.encodeId} data={item} />;
          })}
      </ListVideo>
      <div className="flex items-center justify-center mt-7">
        <button
          onClick={handleSetLimit}
          className="px-3 py-2 rounded-md active:text-primary active:bg-text1 bg-primary"
        >
          See more
        </button>
      </div>
    </div>
  );
};

export default ContainerListVideo;
