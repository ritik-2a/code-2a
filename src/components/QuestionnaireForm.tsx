import React, { useState, useEffect } from "react";

interface QuestionnaireFormProps {
  onSubmit: (responses: Record<string, string>) => void;
}

interface Question {
  id: string;
  question: string;
  options: string[];
}

export default function QuestionnaireForm({ onSubmit }: QuestionnaireFormProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    fetch("/careers_dataset.json")
      .then((res) => res.json())
      .then((data) => {
        // Extract unique options from dataset
        const skillsSet = new Set<string>();
        const interestsSet = new Set<string>();
        const industriesSet = new Set<string>();
        const workStyles = [
          "Independent work",
          "Team collaboration",
          "Mix of both",
          "Leadership roles",
        ];

        Object.values(data).forEach((career: any) => {
          career.skills.forEach((skill: string) => skillsSet.add(skill));
          career.industries.forEach((industry: string) => industriesSet.add(industry));
          interestsSet.add(career.name); // Assuming interests can be related to career names
        });

        const questionsData: Question[] = [
          {
            id: "skills",
            question: "Which skills do you have or want to develop?",
            options: Array.from(skillsSet).slice(0, 6),
          },
          {
            id: "interests",
            question: "What fields interest you the most?",
            options: Array.from(interestsSet).slice(0, 6),
          },
          {
            id: "industry",
            question: "Which industry do you prefer working in?",
            options: Array.from(industriesSet).slice(0, 6),
          },
          {
            id: "workStyle",
            question: "What's your preferred work style?",
            options: workStyles,
          },
        ];

        setQuestions(questionsData);
      })
      .catch((error) => console.error("Error loading questions: ", error));
  }, []);

  const handleOptionSelect = (questionId: string, answer: string) => {
    setResponses((prev) => ({ ...prev, [questionId]: answer }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(responses);
  };

  if (questions.length === 0) return <p>Loading questions...</p>;

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
      <div className="mb-8">
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-indigo-600 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {questions[currentQuestion].question}
          </h3>
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                type="button"
                className={`w-full p-4 text-left rounded-lg border transition-all ${
                  responses[questions[currentQuestion].id] === option
                    ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                    : "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50"
                }`}
                onClick={() =>
                  handleOptionSelect(questions[currentQuestion].id, option)
                }
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {Object.keys(responses).length === questions.length && (
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Get Career Recommendations
          </button>
        )}
      </form>
    </div>
  );
}