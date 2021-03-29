import React from 'react'

//give types to the props 
type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNr: number;
    totalQuestions: number;

}

//add type functional component to QuestionCard  and destructure the props
const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNr, totalQuestions }) => {
    return (
        <div>
            {/* adds the question number */}
            <p className="number">
                Question: {questionNr} / {totalQuestions}
            </p>
            {/* adds the question */}
            <p dangerouslySetInnerHTML={{ __html: question }} />
            {/* adds the answer choices */}
            <div>
                {answers.map(answer => (
                    <div key={answer}> 
                        <button disabled={userAnswer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionCard
