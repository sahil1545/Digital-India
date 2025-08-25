export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface ChatbotResponse {
  response: string;
  suggestions?: string[];
}

// General knowledge base for all states
export const GENERAL_RESPONSES: { [key: string]: string } = {
  greeting: "Hello! I'm your AI guide for exploring India's amazing states and union territories. Ask me anything about culture, history, food, festivals, or interesting facts!",
  
  culture: "Indian culture is incredibly diverse, with each state having its own unique traditions, languages, festivals, and customs that have been preserved for thousands of years.",
  
  food: "Indian cuisine varies dramatically from state to state. From spicy Andhra curries to sweet Bengali desserts, from Punjabi parathas to South Indian dosas - each region has its signature dishes.",
  
  festivals: "India celebrates numerous festivals throughout the year. While Diwali and Holi are celebrated nationwide, each state has its own special festivals like Durga Puja in Bengal, Ganesh Chaturthi in Maharashtra, and Onam in Kerala.",
  
  languages: "India has 22 official languages and hundreds of dialects. Each state typically has its own primary language, though Hindi and English are widely understood.",
  
  history: "Every Indian state has a rich historical heritage, from ancient civilizations to medieval kingdoms to colonial influences. This diversity is reflected in the architecture, traditions, and stories of each region.",
  
  monuments: "India is home to incredible monuments and UNESCO World Heritage sites. From the Taj Mahal to ancient cave temples, each state boasts architectural marvels that tell stories of different eras.",
  
  default: "That's an interesting question! Each Indian state has so much to offer. Could you be more specific about what aspect you'd like to know - culture, food, festivals, history, or something else?"
};

// State-specific knowledge base
export const STATE_SPECIFIC_DATA: { [stateSlug: string]: { [topic: string]: string } } = {
  "andhra-pradesh": {
    food: "Andhra Pradesh is famous for its extremely spicy cuisine! Try Hyderabadi biryani, spicy Andhra curry, pesarattu (green gram pancake), and the famous Tirupati laddu. The food here uses lots of red chilies and is known for its bold flavors.",
    
    culture: "Andhra Pradesh has a rich Telugu culture with classical dance forms like Kuchipudi. The state is known for its intricate handicrafts, especially Kalamkari textiles and beautiful silver filigree work.",
    
    festivals: "Major festivals include Ugadi (Telugu New Year), Sankranti, and the grand celebrations at Tirupati temple. The state also celebrates Bonalu and Brahmotsavam with great enthusiasm.",
    
    monuments: "Visit the famous Tirupati temple, one of the richest temples in the world. Other notable sites include Charminar and Golconda Fort in Hyderabad, and the ancient Buddhist sites at Amaravati.",
    
    languages: "Telugu is the primary language, and it's known for its melodious sound - it's often called the 'Italian of the East' due to its musical quality."
  },
  
  "maharashtra": {
    food: "Maharashtra offers diverse cuisine from spicy Kolhapuri mutton to street food like vada pav, pav bhaji, and bhel puri. Don't miss puran poli, modak (Ganesh's favorite sweet), and the famous Pune mastani!",
    
    culture: "Maharashtra is the land of great leaders like Chhatrapati Shivaji and social reformers. It's famous for Bollywood, classical music, and traditional dance forms like Lavani and Tamasha.",
    
    festivals: "Ganesh Chaturthi is the biggest festival, especially in Mumbai. Other important celebrations include Gudi Padwa (Marathi New Year), Navratri, and the harvest festival of Makar Sankranti.",
    
    monuments: "Explore the UNESCO World Heritage Ajanta and Ellora Caves, the majestic Gateway of India in Mumbai, and historic forts like Shivneri and Raigad built by Chhatrapati Shivaji.",
    
    languages: "Marathi is the official language, known for its rich literature and poetry. Mumbai being cosmopolitan, you'll hear Hindi, English, and many other languages too."
  },
  
  "kerala": {
    food: "Kerala's cuisine is coconut-based and flavorful! Try the famous Kerala fish curry, appam with stew, banana chips, payasam, and the traditional feast called Sadhya served on banana leaves.",
    
    culture: "Kerala has a unique matrilineal culture in some communities. It's known for classical arts like Kathakali dance, Theyyam rituals, and Ayurvedic traditions. The state has high literacy rates and progressive social values.",
    
    festivals: "Onam is the most important festival, celebrating the harvest and the legendary King Mahabali. Other major festivals include Vishu, Thrissur Pooram, and the boat races during monsoon.",
    
    monuments: "Visit the Chinese fishing nets in Kochi, the hill station of Munnar, backwaters of Alleppey, and ancient temples like Padmanabhaswamy Temple in Thiruvananthapuram.",
    
    languages: "Malayalam is the official language. Kerala has a rich literary tradition, and the state boasts nearly 100% literacy rate!"
  },
  
  "rajasthan": {
    food: "Rajasthani cuisine is rich and flavorful, designed for the desert climate. Try dal baati churma, gatte ki sabzi, laal maas, ker sangri, and sweets like ghevar and malpua.",
    
    culture: "Rajasthan is the land of kings and warriors. It's famous for its vibrant folk music, Ghoomar dance, colorful turbans, and the legendary hospitality of 'Padharo Mhare Des' (Welcome to our land).",
    
    festivals: "Major festivals include Teej, Karva Chauth, Gangaur, and the famous Desert Festival in Jaisalmer. The state also celebrates Holi with great enthusiasm.",
    
    monuments: "Rajasthan is home to magnificent palaces and forts like Amber Fort, City Palace, Hawa Mahal in Jaipur, Mehrangarh Fort in Jodhpur, and the golden city of Jaisalmer.",
    
    languages: "Hindi and Rajasthani are the main languages. Rajasthani has several dialects like Marwari, Jaipuri, and Mewari, each with its own cultural significance."
  },
  
  "delhi": {
    food: "Delhi street food is legendary! Try chole bhature, paranthas from Chandni Chowk, chaat, kebabs, and the famous Delhi-style butter chicken. Don't miss kulfi and rabri for dessert!",
    
    culture: "Delhi represents India's cultural diversity with people from all states living here. It blends Mughal heritage with modern metropolitan culture. The city has influenced Indian politics, arts, and literature for centuries.",
    
    festivals: "As the capital, Delhi celebrates all Indian festivals grandly. Diwali, Dussehra, Holi, and Eid are major celebrations. The Red Fort hosts the Independence Day celebrations.",
    
    monuments: "Delhi has numerous UNESCO World Heritage sites including Red Fort, Qutub Minar, Humayun's Tomb, and India Gate. The city showcases architecture from medieval to modern times.",
    
    languages: "Hindi is the primary language, but being the capital, you'll hear languages from every corner of India. English is widely used in official and business communications."
  }
};

export function getChatbotResponse(message: string, stateSlug: string, stateName: string): ChatbotResponse {
  const lowerMessage = message.toLowerCase();
  
  // Greeting responses
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return {
      response: `Hello! Welcome to your ${stateName} guide! I can tell you about the culture, food, festivals, monuments, languages, and history of ${stateName}. What would you like to explore?`,
      suggestions: ['Tell me about the food', 'What festivals are celebrated?', 'Famous monuments', 'Cultural traditions']
    };
  }
  
  // State-specific responses
  const stateData = STATE_SPECIFIC_DATA[stateSlug];
  
  if (lowerMessage.includes('food') || lowerMessage.includes('cuisine') || lowerMessage.includes('dish')) {
    return {
      response: stateData?.food || `${stateName} has unique and delicious cuisine that reflects its cultural heritage and local ingredients. Each dish tells a story of the region's history and traditions.`,
      suggestions: ['What about festivals?', 'Tell me about culture', 'Famous monuments']
    };
  }
  
  if (lowerMessage.includes('culture') || lowerMessage.includes('tradition') || lowerMessage.includes('custom')) {
    return {
      response: stateData?.culture || `${stateName} has a rich cultural heritage with unique traditions, art forms, and customs that have been passed down through generations.`,
      suggestions: ['What festivals are celebrated?', 'Tell me about the food', 'Languages spoken']
    };
  }
  
  if (lowerMessage.includes('festival') || lowerMessage.includes('celebration') || lowerMessage.includes('holiday')) {
    return {
      response: stateData?.festivals || `${stateName} celebrates various festivals throughout the year, each with its own significance and unique celebrations that bring communities together.`,
      suggestions: ['Famous monuments', 'Cultural traditions', 'Local cuisine']
    };
  }
  
  if (lowerMessage.includes('monument') || lowerMessage.includes('temple') || lowerMessage.includes('fort') || lowerMessage.includes('palace') || lowerMessage.includes('architecture')) {
    return {
      response: stateData?.monuments || `${stateName} is home to magnificent monuments and architectural marvels that showcase the region's rich history and artistic heritage.`,
      suggestions: ['Tell me about culture', 'What about the food?', 'Languages spoken']
    };
  }
  
  if (lowerMessage.includes('language') || lowerMessage.includes('speak') || lowerMessage.includes('tongue')) {
    return {
      response: stateData?.languages || `${stateName} has its own linguistic identity with regional languages that are an integral part of its cultural heritage.`,
      suggestions: ['Cultural traditions', 'Festival celebrations', 'Famous monuments']
    };
  }
  
  if (lowerMessage.includes('history') || lowerMessage.includes('past') || lowerMessage.includes('ancient') || lowerMessage.includes('heritage')) {
    return {
      response: `${stateName} has a fascinating history spanning thousands of years, with influences from various dynasties, rulers, and cultural movements that have shaped its present identity.`,
      suggestions: ['Famous monuments', 'Cultural traditions', 'Festival celebrations']
    };
  }
  
  if (lowerMessage.includes('fun fact') || lowerMessage.includes('interesting') || lowerMessage.includes('unique')) {
    const facts = [
      `${stateName} has unique geographical features that make it special in India's diverse landscape.`,
      `The cultural practices of ${stateName} have influenced other parts of India significantly.`,
      `${stateName} contributes significantly to India's economy and cultural diversity.`,
      `Traditional art forms of ${stateName} are recognized globally for their beauty and complexity.`
    ];
    return {
      response: facts[Math.floor(Math.random() * facts.length)],
      suggestions: ['Tell me more about culture', 'What about the food?', 'Famous festivals']
    };
  }
  
  if (lowerMessage.includes('weather') || lowerMessage.includes('climate') || lowerMessage.includes('season')) {
    return {
      response: `${stateName} has a unique climate that influences its agriculture, festivals, and lifestyle. The weather patterns have shaped the local culture and traditions over centuries.`,
      suggestions: ['Festival celebrations', 'Cultural traditions', 'Local cuisine']
    };
  }
  
  // Default response
  return {
    response: `That's an interesting question about ${stateName}! I can help you learn about the food, culture, festivals, monuments, languages, and history of this amazing place. What specific aspect would you like to explore?`,
    suggestions: ['Tell me about the food', 'Cultural traditions', 'Famous festivals', 'Historical monuments']
  };
}
