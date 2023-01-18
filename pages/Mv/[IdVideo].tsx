import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Player } from "video-react";
import "node_modules/video-react/dist/video-react.css";
import { MusicContextProvider } from "../../context/MusicContext";
import { getDetailVideo } from "../../service/api";

const IdVideo = () => {
  const [linkVideo, setLinkVideo] = useState();
  const router = useRouter();
  let id = router.query.IdVideo;
  useEffect(() => {
    (async () => {
      try {
        const dataDetailVideo = await getDetailVideo(id);
        console.log("dataDetailVideo", dataDetailVideo.data);
        setLinkVideo(dataDetailVideo.data.streaming.mp4["360p"]);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [id]);
  return (
    <MusicContextProvider>
      <Layout>
        <Player playsInline poster="/assets/poster.png" src={linkVideo} />
      </Layout>
      ;
    </MusicContextProvider>
  );
};

export default IdVideo;
