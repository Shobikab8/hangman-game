import { useCallback, useEffect, useState } from "react"
import Drawing from "./Drawing"
import Keyboard from "./Keyboard"
import TextInput from "./TextInput"
import words from "./wordList.json"


function App() {
  const [wordToGuess, ] = useState(()=>{
    
    return words[Math.floor(Math.random()* words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter((letter)=> !wordToGuess.includes(letter));
  
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter));
  const isLoser = incorrectLetters.length >=6;

  const addGuessedLetter = useCallback((letter: string) => {
    if(guessedLetters.includes(letter) || isLoser || isWinner){
      return
    }

    setGuessedLetters(currentLetters => [...currentLetters, letter]);
  }, [guessedLetters, isWinner, isLoser])
  

  useEffect(()=>{
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if(!key.match(/^[a-z]$/)){
        return
      }

      e.preventDefault();
      addGuessedLetter(key);
    }

    document.addEventListener("keypress", handler);

    return ()=> {
      document.removeEventListener("keypress", handler);
    }
  }, [guessedLetters])
  
  return (
    <div style={{
      maxWidth: "870px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
      margin: "0 auto"
    }}>
      <div style={{fontSize: "1.5rem", textAlign: "center"}}>
        {isWinner && "Man Saved! :) - Refresh to play again"}
        {isLoser && "Man Hanged :( - Refresh to try again"}
      </div>
      
      <Drawing numberOfGuesses = {incorrectLetters.length}/>
      <TextInput reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <div style={{alignSelf: "stretch"}}>
        <Keyboard 
          disabled = {isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter)=> wordToGuess.includes(letter))}
          inactiveLetters={incorrectLetters} addGuessedLetter={addGuessedLetter}/>
      </div>
      
    </div>
  )
}

export default App
