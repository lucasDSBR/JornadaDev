import React from 'react'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import './VideoFooter.css'

function VideoFooter() {
  return (
	<div className="videoFooter">
		<div className='videoFooter__text'>
			<h3>@dev.lucasmaciel_</h3>
			<p>Descri��o do video</p>
			<div className='videoFooter__music'>
				<MusicNoteIcon className='videoFooter__icon' />
				<div className='videoFooterMusic__text'>
					<p>Titulo da musica</p>
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
