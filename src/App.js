import './App.css';
import Header from './Components/Header';
import Generator from './Components/Generator';
import Recorder from './Components/Recorder';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="h-screen">
      <Header />
      <Generator />
      <Recorder />
      <Footer />
    </div>
  );
}

export default App;
