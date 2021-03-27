import React from 'react';
import QuestionCard from './components/QuestionCard';


const App = () => {

  //calls the api
  const startTrivia = async () => {

  }
// checks the answers
const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

}
//next question button
const nextQuestion = () => {

}


  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button className="start" onClick= {startTrivia}>
        start
      </button>
      <p className="score">Score: </p>
      <p>Loading Questions ...</p>
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
