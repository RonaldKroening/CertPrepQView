import { useState } from 'react';
import FileUpload from './components/FileUpload';
import QuestionViewer from './components/QuestionViewer';

function App() {
  const [questions, setQuestions] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Question Viewer</h1>
        {!questions ? (
          <FileUpload onFileUpload={setQuestions} />
        ) : (
          <>
            <QuestionViewer questions={questions} />
            <button
              onClick={() => setQuestions(null)}
              className="mt-6 w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
            >
              Upload New File
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;