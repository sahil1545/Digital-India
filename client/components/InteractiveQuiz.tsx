import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, CheckCircle, XCircle, RotateCcw, Trophy } from "lucide-react";
import { QuizQuestion } from "@shared/quiz-data";

interface InteractiveQuizProps {
  questions: QuizQuestion[];
  stateName: string;
}

export function InteractiveQuiz({ questions, stateName }: InteractiveQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      const newAnswers = [...selectedAnswers];
      newAnswers[currentQuestion] = selectedOption;
      setSelectedAnswers(newAnswers);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setShowExplanation(false);
      } else {
        setShowResults(true);
      }
    }
  };

  const handleShowExplanation = () => {
    setShowExplanation(true);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const getScoreColor = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setSelectedOption(null);
    setShowExplanation(false);
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-3 text-2xl font-poppins">
            <Trophy className="w-8 h-8 text-yellow-500" />
            Quiz Results
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="space-y-4">
            <div className={`text-6xl font-bold font-poppins ${getScoreColor(score, questions.length)}`}>
              {score}/{questions.length}
            </div>
            <div className="text-xl font-poppins text-gray-600">
              You scored {percentage}% on the {stateName} quiz!
            </div>
            
            {percentage >= 80 && (
              <Badge className="bg-green-100 text-green-800 px-4 py-2 text-lg">
                🎉 Excellent! You know {stateName} very well!
              </Badge>
            )}
            {percentage >= 60 && percentage < 80 && (
              <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 text-lg">
                👍 Good job! You have solid knowledge about {stateName}!
              </Badge>
            )}
            {percentage < 60 && (
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-lg">
                📚 Keep learning! There's more to discover about {stateName}!
              </Badge>
            )}
          </div>

          <div className="space-y-3 text-left max-w-2xl mx-auto">
            <h4 className="font-semibold font-poppins text-lg mb-3">Review your answers:</h4>
            {questions.map((question, index) => (
              <div key={index} className="p-3 rounded-lg bg-gray-50 border">
                <div className="flex items-start gap-2">
                  {selectedAnswers[index] === question.correctAnswer ? (
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="font-medium font-poppins text-sm">{question.question}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Your answer: {question.options[selectedAnswers[index]]}
                    </p>
                    {selectedAnswers[index] !== question.correctAnswer && (
                      <p className="text-sm text-green-600 mt-1">
                        Correct answer: {question.options[question.correctAnswer]}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button 
            onClick={restartQuiz}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 font-poppins"
            size="lg"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Play Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-3 font-poppins">
            <Brain className="w-6 h-6 text-blue-600" />
            {stateName} Quiz
          </CardTitle>
          <Badge variant="outline" className="font-poppins">
            {currentQuestion + 1} of {questions.length}
          </Badge>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold font-poppins mb-4">
            {currentQ.question}
          </h3>
          
          <div className="space-y-3">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 font-poppins ${
                  selectedOption === index
                    ? 'border-blue-500 bg-blue-50 text-blue-900'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedOption === index
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {selectedOption === index && (
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {showExplanation && currentQ.explanation && (
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold font-poppins text-blue-900 mb-2">Explanation:</h4>
            <p className="text-blue-800 font-poppins">{currentQ.explanation}</p>
          </div>
        )}

        <div className="flex gap-3">
          {selectedOption !== null && !showExplanation && currentQ.explanation && (
            <Button
              onClick={handleShowExplanation}
              variant="outline"
              className="font-poppins"
            >
              Show Explanation
            </Button>
          )}
          
          <Button
            onClick={handleNextQuestion}
            disabled={selectedOption === null}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 font-poppins ml-auto"
          >
            {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
