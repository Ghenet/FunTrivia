import React from 'react'
import { AnswerObject } from '../App';
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

//give types to the props 
type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;

}

//add type functional component to QuestionCard  and destructure the props
const QuestionCard: React.FC<Props> = ({
    question, answers, callback, userAnswer, questionNr, totalQuestions }) => {
    return (
        <Wrapper>
            {/* adds the question number */}
            <p className="number">
                Question: {questionNr} / {totalQuestions}
            </p>
            {/* adds the question */}
            <p dangerouslySetInnerHTML={{ __html: question }} />
            {/* adds the answer choices */}
            <div>
                {answers.map(answer => (
                    <ButtonWrapper
                     key={answer} 
                     correct={userAnswer?.correctAnswer === answer}
                     userClicked={userAnswer?.answer === answer}
                     > 
                        <button disabled={userAnswer? true : false} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>
    )
}

export default QuestionCard
