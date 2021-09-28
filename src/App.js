
import './App.css';
import My2ndChart from './components/My2ndChart/My2ndChart';
import MyChart from './components/MyChart/MyChart';

function App() {
  return (
    <div className="App">
      <h1 style={{ margin: '50px 0 0', color: 'darkred' }}>Ionization Energy Trends</h1>
      <MyChart />
      <h1 style={{ margin: '150px 0 0', color: 'darkblue' }}>Electronegativity Trends</h1>
      <My2ndChart />
    </div>
  );
}

export default App;
