import './App.css';
import FirstBanner from './components/FirstBanner/FirstBanner';
import Footer from './components/Footer/Footer';
import QuestionAndAnswer from './components/QustionAndAnswer/QuestionAndAnswer';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <FirstBanner/>
      <Services/>
      <QuestionAndAnswer/>
      <Footer/>
    </div>
  );
}

export default App;
