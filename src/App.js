import './App.css';
import Video from './pages/video';
import "./pages/video.css";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
		<Video
			likes={100}
			messages={200}
			shares={300}
			name="Paulo"
			description="Bracker o goleiro"
			music="Musica épica"
			url="https://firebasestorage.googleapis.com/v0/b/jornada2-eb156.appspot.com/o/brecker2.mp4?alt=media&token=b7e3ebf7-89a0-47a0-8a34-66f1176a71e3"
		/>
		<Video
			likes={232}
			messages={453}
			shares={32}
			name="Pedro"
			description="Bird olhando para a camera"
			music="Clap your hands"
			url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
		/>
      </div>
    </div>
  );
}

export default App;
