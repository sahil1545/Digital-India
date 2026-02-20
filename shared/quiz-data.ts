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
  // Southern Region
  {
    stateSlug: "goa",
    questions: [
      {
        question: "What is the capital of Goa?",
        options: ["Panaji", "Vasco da Gama", "Margao", "Mapusa"],
        correctAnswer: 0,
        explanation: "Panaji, also known as Panjim, is the capital of Goa and its largest city."
      },
      {
        question: "Which of these is a famous festival of Goa?",
        options: ["Onam", "Bihu", "Carnival", "Pongal"],
        correctAnswer: 2,
        explanation: "Goa Carnival is one of the most famous festivals in Goa, known for its colorful parades and festivities."
      },
      {
        question: "What is the official language of Goa?",
        options: ["Konkani", "Marathi", "Hindi", "English"],
        correctAnswer: 0,
        explanation: "Konkani is the official language of Goa, though Marathi is also widely spoken."
      }
    ]
  },
  {
    stateSlug: "tripura",
    questions: [
      {
        question: "What is the capital of Tripura?",
        options: ["Agartala", "Dharmanagar", "Udaipur", "Kailasahar"],
        correctAnswer: 0,
        explanation: "Agartala is the capital city of Tripura, located near the Bangladesh border."
      },
      {
        question: "Which country shares its border with Tripura?",
        options: ["Nepal", "Bhutan", "Bangladesh", "Myanmar"],
        correctAnswer: 2,
        explanation: "Tripura shares its international border with Bangladesh on three sides."
      },
      {
        question: "What is the main festival of Tripura?",
        options: ["Kharchi Puja", "Diwali", "Durga Puja", "Christmas"],
        correctAnswer: 0,
        explanation: "Kharchi Puja is one of the most important festivals in Tripura, celebrated in July."
      }
    ]
  },
  {
    stateSlug: "mizoram",
    questions: [
      {
        question: "What is the capital of Mizoram?",
        options: ["Aizawl", "Lunglei", "Champhai", "Kolasib"],
        correctAnswer: 0,
        explanation: "Aizawl is the capital and largest city of Mizoram."
      },
      {
        question: "What is the main language spoken in Mizoram?",
        options: ["Mizo", "Khasi", "Garo", "Bengali"],
        correctAnswer: 0,
        explanation: "Mizo is the official language and most widely spoken language in Mizoram."
      },
      {
        question: "Which festival marks the end of the harvest season in Mizoram?",
        options: ["Chapchar Kut", "Mim Kut", "Pawl Kut", "Thalfavang Kut"],
        correctAnswer: 2,
        explanation: "Pawl Kut is the harvest festival celebrated in December to mark the end of the harvest season."
      }
    ]
  },
  {
    stateSlug: "nagaland",
    questions: [
      {
        question: "What is the capital of Nagaland?",
        options: ["Kohima", "Dimapur", "Mokokchung", "Wokha"],
        correctAnswer: 0,
        explanation: "Kohima is the capital of Nagaland, while Dimapur is the largest city."
      },
      {
        question: "Which of these is the most famous festival of Nagaland?",
        options: ["Bihu", "Hornbill Festival", "Bihu", "Pongal"],
        correctAnswer: 1,
        explanation: "The Hornbill Festival is the most famous festival of Nagaland, showcasing the state's culture and traditions."
      },
      {
        question: "What is the official language of Nagaland?",
        options: ["Nagamese", "English", "Hindi", "Assamese"],
        correctAnswer: 1,
        explanation: "English is the official language of Nagaland, though many indigenous languages are spoken."
      }
    ]
  },
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
        question: "What is the famous dance form of Andhra Pradesh?",
        options: ["Bharatanatyam", "Kuchipudi", "Kathakali", "Odissi"],
        correctAnswer: 1,
        explanation: "Kuchipudi is the classical dance form that originated in Andhra Pradesh."
      },
      {
        question: "Which major river is known as the 'Dakshina Ganga' in Andhra Pradesh?",
        options: ["Godavari", "Krishna", "Tungabhadra", "Pennar"],
        correctAnswer: 0,
        explanation: "The Godavari river is often referred to as 'Dakshina Ganga' (Ganges of the South)."
      },
      {
        question: "Which famous temple in Andhra Pradesh is known for its floating pillar?",
        options: ["Tirumala Temple", "Srisailam Temple", "Lepakshi Temple", "Kanaka Durga Temple"],
        correctAnswer: 2,
        explanation: "The Veerabhadra Temple in Lepakshi is famous for its hanging pillar that doesn't rest completely on the ground."
      }
    ]
  },
  {
    stateSlug: "karnataka",
    questions: [
      {
        question: "What is the capital of Karnataka?",
        options: ["Mysuru", "Mangaluru", "Bengaluru", "Hubballi"],
        correctAnswer: 2,
        explanation: "Bengaluru (formerly Bangalore) is the capital of Karnataka."
      },
      {
        question: "Which World Heritage Site in Karnataka is known for its stone chariot?",
        options: ["Hampi", "Pattadakal", "Badami", "Mysore Palace"],
        correctAnswer: 0,
        explanation: "Hampi's stone chariot is one of the most famous monuments in the Vijayanagara ruins."
      },
      {
        question: "Which coffee variety is Karnataka famous for?",
        options: ["Arabica", "Robusta", "Chikmagalur", "All of the above"],
        correctAnswer: 3,
        explanation: "Karnataka, especially the Chikmagalur region, is famous for producing high-quality coffee including Arabica and Robusta varieties."
      },
      {
        question: "Which classical dance form originated in Karnataka?",
        options: ["Bharatanatyam", "Kathak", "Kuchipudi", "Yakshagana"],
        correctAnswer: 3,
        explanation: "Yakshagana is a traditional theater form that originated in Karnataka."
      },
      {
        question: "Which is the official language of Karnataka?",
        options: ["Tamil", "Telugu", "Kannada", "Konkani"],
        correctAnswer: 2,
        explanation: "Kannada is the official language of Karnataka."
      }
    ]
  },
  {
    stateSlug: "tamil-nadu",
    questions: [
      {
        question: "What is the capital of Tamil Nadu?",
        options: ["Chennai", "Coimbatore", "Madurai", "Trichy"],
        correctAnswer: 0,
        explanation: "Chennai (formerly Madras) is the capital of Tamil Nadu."
      },
      {
        question: "Which famous temple in Tamil Nadu is dedicated to Lord Shiva and is one of the Pancha Bhoota Stalas?",
        options: ["Meenakshi Temple", "Brihadeeswarar Temple", "Rameshwaram Temple", "Ekambareswarar Temple"],
        correctAnswer: 1,
        explanation: "Brihadeeswarar Temple in Thanjavur is dedicated to Lord Shiva and represents the element of Earth."
      },
      {
        question: "Which classical dance form originated in Tamil Nadu?",
        options: ["Bharatanatyam", "Kathak", "Kuchipudi", "Odissi"],
        correctAnswer: 0,
        explanation: "Bharatanatyam, one of the oldest classical dance forms of India, originated in Tamil Nadu."
      },
      {
        question: "Which hill station in Tamil Nadu is known as the 'Queen of Hill Stations'?",
        options: ["Ooty", "Kodaikanal", "Yercaud", "Kotagiri"],
        correctAnswer: 0,
        explanation: "Ooty (Udhagamandalam) is often called the 'Queen of Hill Stations' in South India."
      },
      {
        question: "Which is the official language of Tamil Nadu?",
        options: ["Malayalam", "Telugu", "Tamil", "Kannada"],
        correctAnswer: 2,
        explanation: "Tamil is the official language of Tamil Nadu and one of the oldest living languages in the world."
      }
    ]
  },
  // Northern Region
  {
    stateSlug: "himachal-pradesh",
    questions: [
      {
        question: "What is the capital of Himachal Pradesh?",
        options: ["Shimla", "Dharamshala", "Mandi", "Solan"],
        correctAnswer: 0,
        explanation: "Shimla is the summer capital of Himachal Pradesh, while Dharamshala is the winter capital."
      },
      {
        question: "Which river flows through the Kullu Valley in Himachal Pradesh?",
        options: ["Yamuna", "Beas", "Sutlej", "Ravi"],
        correctAnswer: 1,
        explanation: "The Beas River flows through the Kullu Valley, one of the major valleys in Himachal Pradesh."
      },
      {
        question: "What is the famous temple town in Himachal Pradesh known as the 'Varanasi of the Hills'?",
        options: ["Manikaran", "Chintpurni", "Jwalamukhi", "Chamunda Devi"],
        correctAnswer: 0,
        explanation: "Manikaran is known as the 'Varanasi of the Hills' due to its hot springs and religious significance."
      }
    ]
  },
  {
    stateSlug: "jammu-and-kashmir",
    questions: [
      {
        question: "What is the summer capital of Jammu and Kashmir?",
        options: ["Jammu", "Srinagar", "Leh", "Anantnag"],
        correctAnswer: 1,
        explanation: "Srinagar serves as the summer capital of Jammu and Kashmir."
      },
      {
        question: "Which famous valley in Jammu and Kashmir is known as 'The Valley of Shepherds'?",
        options: ["Lidder Valley", "Sind Valley", "Betaab Valley", "Pahalgam Valley"],
        correctAnswer: 2,
        explanation: "Betaab Valley, originally called Hagan Valley, was renamed after the Bollywood movie 'Betaab' was shot there."
      },
      {
        question: "Which lake in Srinagar is famous for its houseboats?",
        options: ["Dal Lake", "Wular Lake", "Manasbal Lake", "Nagin Lake"],
        correctAnswer: 0,
        explanation: "Dal Lake is famous for its houseboats and is often called the 'Jewel in the crown of Kashmir'."
      },
      {
        question: "Which pass connects Jammu and Kashmir with Ladakh?",
        options: ["Nathu La", "Rohtang Pass", "Zoji La", "Khardung La"],
        correctAnswer: 2,
        explanation: "Zoji La is a high mountain pass in the Himalayas, connecting the Kashmir Valley to Ladakh."
      },
      {
        question: "Which is the official language of Jammu and Kashmir?",
        options: ["Urdu", "Kashmiri", "Dogri", "All of the above"],
        correctAnswer: 3,
        explanation: "Jammu and Kashmir has five official languages: Urdu, Kashmiri, Dogri, Hindi, and English."
      }
    ]
  },
  // Union Territories
  {
    stateSlug: "delhi",
    questions: [
      {
        question: "What was Delhi known as in ancient times?",
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
      },
      {
        question: "Which famous monument in Delhi is known as the 'Symbol of Love'?",
        options: ["Red Fort", "Qutub Minar", "India Gate", "Humayun's Tomb"],
        correctAnswer: 3,
        explanation: "Humayun's Tomb is often called the predecessor of the Taj Mahal and is a UNESCO World Heritage Site."
      },
      {
        question: "Which is the largest mosque in India, located in Delhi?",
        options: ["Jama Masjid", "Fatehpuri Masjid", "Jamaat Khana Masjid", "Quwwat-ul-Islam"],
        correctAnswer: 0,
        explanation: "Jama Masjid in Delhi is the largest mosque in India, built by Mughal Emperor Shah Jahan."
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
    stateSlug: "odisha",
    questions: [
      {
        question: "What is the capital of Odisha?",
        options: ["Cuttack", "Bhubaneswar", "Rourkela", "Puri"],
        correctAnswer: 1,
        explanation: "Bhubaneswar is the capital of Odisha, also known as the 'Temple City of India'."
      },
      {
        question: "Which famous temple is located in Puri, Odisha?",
        options: ["Konark Sun Temple", "Lingaraja Temple", "Jagannath Temple", "Mukteshwar Temple"],
        correctAnswer: 2,
        explanation: "The Jagannath Temple in Puri is one of the Char Dham pilgrimage sites and is famous for the annual Rath Yatra."
      },
      {
        question: "Which dance form originated in Odisha?",
        options: ["Bharatanatyam", "Kathakali", "Odissi", "Kuchipudi"],
        correctAnswer: 2,
        explanation: "Odissi is one of the eight classical dance forms of India that originated in Odisha."
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
export const getDefaultQuestions = (stateName: string, stateSlug: string): QuizQuestion[] => {
  // Get region based on state slug
  const regions = {
    north: ["jammu-and-kashmir", "himachal-pradesh", "punjab", "haryana", "uttarakhand", "uttar-pradesh", "delhi", "chandigarh", "ladakh", "ladakh"],
    south: ["andhra-pradesh", "karnataka", "kerala", "tamil-nadu", "telangana", "puducherry", "andaman-and-nicobar-islands", "lakshadweep"],
    east: ["west-bengal", "odisha", "bihar", "jharkhand", "sikkim", "arunachal-pradesh", "assam", "manipur", "meghalaya", "mizoram", "nagaland", "tripura"],
    west: ["gujarat", "maharashtra", "goa", "dadra-and-nagar-haveli-and-daman-and-diu"]
  };

  // Determine if it's a state or UT
  const uts = ["delhi", "chandigarh", "puducherry", "andaman-and-nicobar-islands", "ladakh", "lakshadweep", "dadra-and-nagar-haveli-and-daman-and-diu", "jammu-and-kashmir"];
  const isUT = uts.includes(stateSlug);
  
  // Determine region
  let region = "";
  if (regions.north.includes(stateSlug)) region = "north";
  else if (regions.south.includes(stateSlug)) region = "south";
  else if (regions.east.includes(stateSlug)) region = "east";
  else if (regions.west.includes(stateSlug)) region = "west";

  return [
    {
      question: `What type of region is ${stateName}?`,
      options: ["State", "Union Territory", "Both", "Neither"],
      correctAnswer: isUT ? 1 : 0,
      explanation: isUT 
        ? `${stateName} is a Union Territory of India, which is governed directly by the Central Government.` 
        : `${stateName} is a State of India with its own elected government.`
    },
    {
      question: `${stateName} is located in which part of India?`,
      options: [
        "Northern India", 
        "Southern India", 
        "Eastern India", 
        "Western India"
      ],
      correctAnswer: 
        region === "north" ? 0 :
        region === "south" ? 1 :
        region === "east" ? 2 : 3,
      explanation: `${stateName} is located in ${region}ern India.`
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
};
