import React, {useState, useEffect, useRef} from 'react'
import { Word } from './word'

const wordArray = ["cat", "dover", "tree", "fishes"]

function App() {
  const [word, setWord] = useState("")

  const startGame = () => {
    setWord(wordArray[Math.floor(Math.random() * wordArray.length)])
  }


  return (
    <div className="App">
      <button onClick={()=> startGame()}>START</button>
      <Word word={word}/>
    </div>
  );
}

export default App;
