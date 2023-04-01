import React, {useState, useRef} from 'react'
import './VideoSidebar.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

function Videosidebar({...data}) {

	const [liked, setLike] = useState(false);

	function handleLike(){
		setLike(!liked);
	}
  return (
	<div className='videoSidebar'>
		<div
			className='videoSidebar__options'
			onClick={handleLike}
		>
			{ liked ? <FavoriteIcon fontSize='large'/> : <FavoriteBorderIcon fontSize='large'/> }
			<p>{ liked ? data.likes + 1 : data.likes}</p>
		</div>
		<div className='videoSidebar__options'>
			<p><ChatIcon fontSize='large'/></p>
			<p>{data.messages}</p>
		</div>
		<div className='videoSidebar__options'>
			<p><ShareIcon fontSize='large'/></p>
			<p>{data.shares}</p>
		</div>
	</div>
  )
}

export default Videosidebar
