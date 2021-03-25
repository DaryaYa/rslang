import React from 'react';
import YouTube from 'react-youtube';
import './Video.scss';

type VideoProps = {
  videoId?: string;
};

interface Opts {
  height: string;
  width: string;
  playerVars: any;
}

const Video: React.FC<VideoProps> = ({ videoId }) => {
  const opts: Opts = {
    height: '720px',
    width: '50%',
    playerVars: {
      autoplay: 1,
    },
  };

  const _onReady = (event: any) => {
    event.target.pauseVideo();
  };

  return <YouTube videoId={videoId} opts={opts} onReady={_onReady} />;
};

export default Video;
