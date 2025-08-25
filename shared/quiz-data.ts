export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface StateQuiz {
  stateSlug: string;
  questions: QuizQuestion[];
}

export const QUIZ_DATA: StateQuiz[] = [
  {
    stateSlug: "andhra-pradesh",
    questions: [
      {
        question: "What is the capital of Andhra Pradesh?",
        options: ["Hyderabad", "Amaravati", "Visakhapatnam", "Vijayawada"],
        correctAnswer: 1,
        explanation: "Amaravati is the current capital of Andhra Pradesh after the state's reorganization in 2014."
      },
      {
        question: "Which language is primarily spoken in Andhra Pradesh?",
        options: ["Tamil", "Telugu", "Kannada", "Malayalam"],
        correctAnswer: 1,
        explanation: "Telugu is the official and most widely spoken language in Andhra Pradesh."
      },
      {
        question: "Andhra Pradesh is famous for which type of cuisine?",
        options: ["Gujarati", "Bengali", "Telugu", "Punjabi"],
        correctAnswer: 2,
        explanation: "Andhra Pradesh is renowned for its spicy Telugu cuisine, including dishes like biryani and curry."
      },
      {
        question: "Which major river flows through Andhra Pradesh?",
        options: ["Ganges", "Krishna", "Narmada", "Cauvery"],
        correctAnswer: 1,
        explanation: "The Krishna River is one of the major rivers flowing through Andhra Pradesh."
      },
      {
        question: "What is Andhra Pradesh famous for in terms of industry?",
        options: ["Tea production", "IT and pharmaceuticals", "Jute", "Coal mining"],
        correctAnswer: 1,
        explanation: "Andhra Pradesh is a major hub for IT services and pharmaceutical industries."
      }
    ]
  },
  {
    stateSlug: "maharashtra",
    questions: [
      {
        question: "What is the capital of Maharashtra?",
        options: ["Pune", "Nagpur", "Mumbai", "Nashik"],
        correctAnswer: 2,
        explanation: "Mumbai is the capital city of Maharashtra and India's financial capital."
      },
      {
        question: "Which language is primarily spoken in Maharashtra?",
        options: ["Hindi", "Marathi", "Gujarati", "Tamil"],
        correctAnswer: 1,
        explanation: "Marathi is the official language of Maharashtra."
      },
      {
        question: "Maharashtra is home to which famous film industry?",
        options: ["Tollywood", "Bollywood", "Kollywood", "Sandalwood"],
        correctAnswer: 1,
        explanation: "Bollywood, India's Hindi film industry, is based in Mumbai, Maharashtra."
      },
      {
        question: "Which festival is most celebrated in Maharashtra?",
        options: ["Diwali", "Ganesh Chaturthi", "Holi", "Dussehra"],
        correctAnswer: 1,
        explanation: "Ganesh Chaturthi is the most celebrated festival in Maharashtra, especially in Mumbai."
      },
      {
        question: "What is the famous historical monument in Maharashtra?",
        options: ["Taj Mahal", "Ajanta and Ellora Caves", "Red Fort", "Hawa Mahal"],
        correctAnswer: 1,
        explanation: "The Ajanta and Ellora Caves are UNESCO World Heritage sites in Maharashtra."
      }
    ]
  },
  {
    stateSlug: "kerala",
    questions: [
      {
        question: "What is Kerala famously known as?",
        options: ["Land of Rising Sun", "God's Own Country", "Pink City", "Silicon Valley of India"],
        correctAnswer: 1,
        explanation: "Kerala is famously known as 'God's Own Country' due to its natural beauty."
      },
      {
        question: "What is the capital of Kerala?",
        options: ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur"],
        correctAnswer: 1,
        explanation: "Thiruvananthapuram (Trivandrum) is the capital city of Kerala."
      },
      {
        question: "Kerala is famous for which natural feature?",
        options: ["Deserts", "Backwaters", "Mountains", "Plateaus"],
        correctAnswer: 1,
        explanation: "Kerala is world-famous for its beautiful backwaters, especially in Alleppey and Kumarakom."
      },
      {
        question: "Which spice is Kerala most famous for?",
        options: ["Turmeric", "Cardamom", "Pepper", "Cinnamon"],
        correctAnswer: 2,
        explanation: "Kerala is known as the 'Spice Garden of India' and is particularly famous for black pepper."
      },
      {
        question: "What is the traditional dance form of Kerala?",
        options: ["Bharatanatyam", "Kathak", "Kathakali", "Odissi"],
        correctAnswer: 2,
        explanation: "Kathakali is the traditional classical dance-drama form of Kerala."
      }
    ]
  },
  {
    stateSlug: "rajasthan",
    questions: [
      {
        question: "What is the capital of Rajasthan?",
        options: ["Jodhpur", "Udaipur", "Jaipur", "Bikaner"],
        correctAnswer: 2,
        explanation: "Jaipur, also known as the Pink City, is the capital of Rajasthan."
      },
      {
        question: "Rajasthan is famous for which geographical feature?",
        options: ["Backwaters", "Thar Desert", "Tea gardens", "Beaches"],
        correctAnswer: 1,
        explanation: "Rajasthan is home to the Thar Desert, also known as the Great Indian Desert."
      },
      {
        question: "Which famous palace is located in Rajasthan?",
        options: ["Mysore Palace", "Hawa Mahal", "Victoria Memorial", "Amba Vilas"],
        correctAnswer: 1,
        explanation: "Hawa Mahal (Palace of Winds) is a famous palace in Jaipur, Rajasthan."
      },
      {
        question: "What is the traditional folk dance of Rajasthan?",
        options: ["Garba", "Ghoomar", "Bhangra", "Lavani"],
        correctAnswer: 1,
        explanation: "Ghoomar is the traditional folk dance of Rajasthan, performed by women."
      },
      {
        question: "Rajasthan is famous for which handicraft?",
        options: ["Silk weaving", "Block printing", "Pottery", "All of the above"],
        correctAnswer: 3,
        explanation: "Rajasthan is famous for various handicrafts including block printing, pottery, and textile work."
      }
    ]
  },
  {
    stateSlug: "delhi",
    questions: [
      {
        question: "Delhi is which type of territory?",
        options: ["State", "Union Territory", "City State", "Special Region"],
        correctAnswer: 1,
        explanation: "Delhi is a Union Territory and the National Capital Territory of India."
      },
      {
        question: "Which famous monument is located in Delhi?",
        options: ["Taj Mahal", "Red Fort", "Charminar", "Victoria Memorial"],
        correctAnswer: 1,
        explanation: "The Red Fort (Lal Qila) is a famous Mughal monument in Delhi."
      },
      {
        question: "What is the old name of Delhi?",
        options: ["Bombay", "Madras", "Indraprastha", "Calcutta"],
        correctAnswer: 2,
        explanation: "Delhi was historically known as Indraprastha in ancient times."
      },
      {
        question: "Which river flows through Delhi?",
        options: ["Ganges", "Yamuna", "Godavari", "Narmada"],
        correctAnswer: 1,
        explanation: "The Yamuna River flows through Delhi."
      },
      {
        question: "Delhi serves as the capital of which country?",
        options: ["Pakistan", "Bangladesh", "India", "Nepal"],
        correctAnswer: 2,
        explanation: "New Delhi is the capital city of India."
      }
    ]
  }
];

// Default questions for states/UTs without specific quiz data
export const getDefaultQuestions = (stateName: string): QuizQuestion[] => [
  {
    question: `What type of region is ${stateName}?`,
    options: ["State", "Union Territory", "Both", "Neither"],
    correctAnswer: 0, // This would need to be dynamically set based on the actual data
    explanation: `This question tests your knowledge about the administrative classification of ${stateName}.`
  },
  {
    question: `${stateName} is located in which part of India?`,
    options: ["Northern India", "Southern India", "Eastern India", "Western India"],
    correctAnswer: 0, // This would need to be dynamically set
    explanation: `${stateName} has a unique geographical location in India.`
  },
  {
    question: `What is a major language spoken in ${stateName}?`,
    options: ["Hindi", "English", "Regional Language", "All of the above"],
    correctAnswer: 3,
    explanation: `Most Indian states have multiple languages spoken, including Hindi, English, and regional languages.`
  },
  {
    question: `${stateName} contributes to India's diversity through its:`,
    options: ["Culture", "Traditions", "Cuisine", "All of the above"],
    correctAnswer: 3,
    explanation: `Each state and UT in India contributes unique cultural elements to the country's diversity.`
  },
  {
    question: `Tourism in ${stateName} is important for:`,
    options: ["Economy", "Cultural exchange", "Employment", "All of the above"],
    correctAnswer: 3,
    explanation: `Tourism plays a vital role in the development of all Indian states and union territories.`
  }
];
