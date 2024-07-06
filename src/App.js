import './App.css';
import Header from './components/header/Header';
import MainContent from './components/mainContent/MainContent';
import MobileView from './components/mobileView';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <MobileView/>
    </div>
  );
}

export default App;
