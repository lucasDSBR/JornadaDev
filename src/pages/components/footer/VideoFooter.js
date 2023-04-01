import React from 'react'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import './VideoFooter.css'

function VideoFooter({...data}) {
  return (
	<div className="videoFooter">
		<div className='videoFooter__text'>
			<h3>{data.name}</h3>
			<p>{data.description}</p>
			<div className='videoFooter__music'>
				<MusicNoteIcon className='videoFooter__icon' />
				<div className='videoFooterMusic__text'>
					<p>{data.music}</p>
				</div>
			</div>
		</div>
		<img
			className='videoFooter__record'
			alt='Imagem de um vinil girando'
			src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png'

		/>
	</div>
  )
}

export default VideoFooter
