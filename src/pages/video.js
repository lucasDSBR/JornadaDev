import React, { useRef, useState } from 'react';
import VideoFooter from './components/footer/VideoFooter';
import VideoSidebar from './components/sidebar/VideoSidebar';

function Video({...data}) {
	const videoRef = useRef(null);
	const [play, setPlay] = useState(false);

	function handleStart(){
		if(play){
			videoRef.current.pause();
			setPlay(false);
		}else{
			videoRef.current.play();
			setPlay(true);
		}

	}

	return (
		<div className="video">
			<video
				className="video__player"
				ref={videoRef}
				onClick={handleStart}
				src={data.url}
				loop
			>
			</video>
			<VideoSidebar
				likes={data.likes}
				messages={data.messages}
				shares={data.shares}
			/>
			<VideoFooter
				name={data.name}
				description={data.description}
				music={data.music}
			/>
		</div>
	)
}

export default Video;