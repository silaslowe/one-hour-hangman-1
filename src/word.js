import {Letter} from './letter'
import {useRef} from 'react'

export const Word = ({word}) => {
    const guessArray = ["e", "s"]
    const guessedLetter = useRef(null)

    const letterArray = word.split("")

    // const guesses = (letter) => {
    //     guessArray.push(letter)
    //     console.log(word, guessArray)
    //   }
    return <>
    <form>
      <label>Guess</label>
      <input 
      type="text"
      ref={guessedLetter}
      />
      {/* <button onClick={() => guesses(guessedLetter)}>Guess</button> */}
    </form>
    <div style={{display: "flex", flexDirection: "row"}}>
        {letterArray.map((char,i) => <Letter key={i} letter={char} guessArray={guessArray} />)}
    </div>
    </>
}