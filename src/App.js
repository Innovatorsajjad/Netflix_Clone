import './App.css';
import FirstBanner from './components/FirstBanner/FirstBanner';
import QuestionAndAnswer from './components/QustionAndAnswer/QuestionAndAnswer';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <FirstBanner/>
      <Services/>
      <QuestionAndAnswer/>
    </div>
  );
}

export default App;
