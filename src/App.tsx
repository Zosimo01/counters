import './App.css';
import Counter from './bases/Counter';
import CounterBy from './bases/CounterBy';
import CounterEffect from './bases/CounterEffect';
import CounterReducerComponent from './bases/CounterReducer';

function App() {
  return (
  <>
    <h1>react</h1>
    <hr />
    <Counter initialValue={15} />
    <CounterBy initialValue={6} />
    <CounterEffect/>
    <CounterReducerComponent initialValue={5}/>
  </>
  );
}

export default App;
