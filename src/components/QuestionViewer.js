import { useState } from 'react';

const QuestionViewer = ({ questions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % questions.length);
    setShowExplanation(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + questions.length) % questions.length);
    setShowExplanation(false);
  };

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  return (
    <div className=" p-6 bg-white text-center rounded-lg shadow-md">
      <span className="p-6 bg-white font-bold rounded-lg shadow-md">
          Question {currentQuestion.question_number} of {questions.length}
        </span>
      <div className='flex'>
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg text-left font-medium text-gray-800 mb-4">{currentQuestion.question}</h3>
        <ul className="space-y-3">
          {currentQuestion.choices.map((choice) => (
            <li key={choice[0]} className="text-left p-3 bg-white rounded-md shadow-sm">
              <span className="font-semibold text-blue-600">{choice[0]}.</span> {choice.slice(2)}

            </li>
          ))}
        </ul>
      </div>
      <div className="max-w-2xl p-4 bg-green-50 rounded-lg border border-green-100">
          <h4 className="font-semibold text-green-800 mb-2">Explanation:</h4>
          <p className="text-left text-gray-700">{currentQuestion.explanation}</p>
      </div>
      </div>
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`px-4 py-2 rounded-md ${currentIndex === 0 ? 'bg-gray-200 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
        >
          Previous
        </button>
        
        <button
          onClick={handleNext}
          disabled={currentIndex === questions.length - 1}
          className={`px-4 py-2 rounded-md ${currentIndex === questions.length - 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
        >
          Next
        </button>
      </div>

      


    </div>
  );
};

export default QuestionViewer;