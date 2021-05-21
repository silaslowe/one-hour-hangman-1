import {useState, useEffect} from 'react'

export const Letter = ({letter, guessArray}) => {
    const [guessed, setGuessed] = useState(true)
    useEffect(() => {
        if(!guessArray.includes(letter)){
            setGuessed(false)
        }
    }, [])
    console.log(letter, guessArray)
    return <div style={{padding:"1rem", fontSize: "4rem", textDecoration: "underline"}}>
    { !guessed ? (
        <p>  </p>
    ) : (
    <p>{letter}</p>
    )
        }
    </div>
}