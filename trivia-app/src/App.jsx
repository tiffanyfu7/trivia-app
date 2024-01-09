import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Main from './components/Main';

function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10&difficulty=medium&type=boolean")
      .then((data) => setData(data.data.results))
      .catch((error) => console.log(error));
  }, []);

  setTimeout(() => {
    setCount(count + 1)
  }, 1000);
  
  return (
    <>
      <h1>Trivia Time!</h1>
      <Main data={data} time={count} />
    </>
  )
}

export default App;