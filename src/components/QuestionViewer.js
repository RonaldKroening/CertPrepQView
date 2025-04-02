import { useState } from 'react';

const QuestionViewer = ({ questions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQuestion = questions[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % questions.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + questions.length) % questions.length);
  };

  return (
    <div className="p-4 md:p-6 bg-white rounded-lg shadow-md w-full h-full">
      <span className="inline-block p-2 md:p-3 bg-white font-bold rounded-lg shadow-md text-sm md:text-base mb-4">
        Question {currentQuestion.question_number} of {questions.length}
      </span>
      
      <div className='flex lg:flex-row gap-4'>
        <div className="p-2 md:p-4 bg-gray-50 rounded-lg flex-1">
          <h3 className="text-base md:text-lg font-medium text-gray-800 mb-3">{currentQuestion.question}</h3>
          <ul className="space-y-2">
            {currentQuestion.choices.map((choice) => (
              <li key={choice[0]} className="text-left p-2 md:p-3 bg-white rounded-md shadow-sm text-sm md:text-base">
                <span className="font-semibold text-blue-600">{choice[0]}.</span> {choice.slice(2)}
              </li>
            ))}
          </ul>
        </div>
    
        <div className="p-3 md:p-4 bg-green-50 rounded-lg border border-green-100 flex-1">
          <h4 className="font-semibold text-green-800 mb-2 text-sm md:text-base">Explanation:</h4>
          <p className="text-left text-gray-700 text-sm md:text-base">{currentQuestion.explanation}</p>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`px-3 py-1 md:px-4 md:py-2 rounded-md text-sm md:text-base w-full sm:w-auto ${
            currentIndex === 0 
              ? 'bg-gray-200 cursor-not-allowed' 
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          Previous
        </button>
        
        <button
          onClick={handleNext}
          disabled={currentIndex === questions.length - 1}
          className={`px-3 py-1 md:px-4 md:py-2 rounded-md text-sm md:text-base w-full sm:w-auto ${
            currentIndex === questions.length - 1 
              ? 'bg-gray-200 cursor-not-allowed' 
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default QuestionViewer;