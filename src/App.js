import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard className="card" firstName="Michael" lastName="Lee" age="29" hairColor="black" />
      <PersonCard className="card" firstName="Matt" lastName="Row" age="29" hairColor="brown" />
      <PersonCard className="card" firstName="Ally" lastName="Sunzeri" age="28" hairColor="brown" />
      <PersonCard className="card" firstName="Evan" lastName="Lescallette" age="30" hairColor="brown" />
    </div>
  );
}

export default App;
