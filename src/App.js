import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
