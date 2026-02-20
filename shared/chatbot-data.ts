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
  // Northern Region
  "jammu-and-kashmir": {
    food: "Famous for Rogan Josh, Yakhni, and Kashmiri Pulao. Don't miss the traditional Wazwan feast and Kahwa tea.",
    culture: "Known for Kashmiri handicrafts, Pashmina shawls, and traditional music like Sufiana Kalam.",
    festivals: "Celebrates Eid, Navroz, and the famous Amarnath Yatra.",
    monuments: "Dal Lake, Shankaracharya Temple, and Gulmarg's stunning landscapes.",
    languages: "Kashmiri, Dogri, Urdu, and Hindi."
  },
  "himachal-pradesh": {
    food: "Try Dham, Sidu, and Chha Gosht. Don't miss the local apple products and Kangra tea.",
    culture: "Famous for Kullu shawls, Chamba rumals, and traditional dance forms like Nati.",
    festivals: "Celebrates Kullu Dussehra, Halda, and the Winter Carnival in Manali.",
    monuments: "Great Himalayan National Park, Hidimba Temple, and the toy train to Shimla.",
    languages: "Hindi, Pahari, and Kinnauri."
  },
  "punjab": {
    food: "Famous for Makki di Roti with Sarson da Saag, Butter Chicken, and Lassi.",
    culture: "Known for Bhangra dance, Giddha, and the Golden Temple's langar tradition.",
    festivals: "Celebrates Baisakhi, Lohri, and Gurpurab with great enthusiasm.",
    monuments: "Golden Temple, Jallianwala Bagh, and Wagah Border ceremony.",
    languages: "Punjabi and Hindi."
  },
  "haryana": {
    food: "Try Bajre ki Khichdi, Hara Dhania Cholia, and Rabri.",
    culture: "Known for Phag dance, Saang, and traditional wrestling (Kushti).",
    festivals: "Celebrates Teej, Baisakhi, and the Surajkund Crafts Mela.",
    monuments: "Sultanpur Bird Sanctuary, Kurukshetra, and Pinjore Gardens.",
    languages: "Haryanvi and Hindi."
  },
  "uttarakhand": {
    food: "Famous for Kafuli, Jhangora ki Kheer, and Bal Mithai.",
    culture: "Known for Garhwali and Kumaoni folk traditions, and the Char Dham Yatra.",
    festivals: "Celebrates Harela, Phool Dei, and Nanda Devi Raj Jat Yatra.",
    monuments: "Valley of Flowers, Kedarnath Temple, and Rishikesh's Laxman Jhula.",
    languages: "Garhwali, Kumaoni, and Hindi."
  },
  "uttar-pradesh": {
    food: "Famous for Awadhi cuisine, Chaat, and Petha. Don't miss the kebabs of Lucknow.",
    culture: "Birthplace of Kathak dance, Ramlila, and classical music traditions.",
    festivals: "Celebrates Kumbh Mela, Diwali, and the Taj Mahotsav.",
    monuments: "Taj Mahal, Varanasi Ghats, and Fatehpur Sikri.",
    languages: "Hindi, Awadhi, and Bhojpuri."
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
  },

  // Southern Region
  "karnataka": {
    food: "Famous for Bisi Bele Bath, Mysore Masala Dosa, and Ragi Mudde. Don't miss the filter coffee and Mysore Pak.",
    culture: "Known for Mysore Dasara, Yakshagana, and Hampi's ruins. The state has a rich tradition of Carnatic music.",
    festivals: "Celebrates Ugadi, Karaga, and the famous Mysore Dasara.",
    monuments: "Hampi ruins, Mysore Palace, and Gol Gumbaz.",
    languages: "Kannada, Tulu, and Konkani."
  },
  "tamil-nadu": {
    food: "Try Dosa, Idli, Sambar, and Pongal. Don't miss the filter coffee and Chettinad cuisine.",
    culture: "Known for Bharatanatyam, classical music, and the famous Meenakshi Temple.",
    festivals: "Celebrates Pongal, Puthandu, and the Madurai Meenakshi wedding festival.",
    monuments: "Brihadeeswarar Temple, Meenakshi Temple, and Mahabalipuram's rock-cut temples.",
    languages: "Tamil and English."
  },
  "kerala": {
    food: "Kerala's cuisine is coconut-based and flavorful! Try the famous Kerala fish curry, appam with stew, banana chips, payasam, and the traditional feast called Sadhya served on banana leaves.",
    culture: "Kerala has a unique matrilineal culture in some communities. It's known for classical arts like Kathakali dance, Theyyam rituals, and Ayurvedic traditions. The state has high literacy rates and progressive social values.",
    festivals: "Onam is the most important festival, celebrating the harvest and the legendary King Mahabali. Other major festivals include Vishu, Thrissur Pooram, and the boat races during monsoon.",
    monuments: "Visit the Chinese fishing nets in Kochi, the hill station of Munnar, backwaters of Alleppey, and ancient temples like Padmanabhaswamy Temple in Thiruvananthapuram.",
    languages: "Malayalam is the official language. Kerala has a rich literary tradition, and the state boasts nearly 100% literacy rate!"
  },
  "andhra-pradesh": {
    food: "Andhra Pradesh is famous for its extremely spicy cuisine! Try Hyderabadi biryani, spicy Andhra curry, pesarattu (green gram pancake), and the famous Tirupati laddu. The food here uses lots of red chilies and is known for its bold flavors.",
    culture: "Andhra Pradesh has a rich Telugu culture with classical dance forms like Kuchipudi. The state is known for its intricate handicrafts, especially Kalamkari textiles and beautiful silver filigree work.",
    festivals: "Major festivals include Ugadi (Telugu New Year), Sankranti, and the grand celebrations at Tirupati temple. The state also celebrates Bonalu and Brahmotsavam with great enthusiasm.",
    monuments: "Visit the famous Tirupati temple, one of the richest temples in the world. Other notable sites include Charminar and Golconda Fort in Hyderabad, and the ancient Buddhist sites at Amaravati.",
    languages: "Telugu is the primary language, and it's known for its melodious sound - it's often called the 'Italian of the East' due to its musical quality."
  },
  "telangana": {
    food: "Famous for Hyderabadi Biryani, Haleem, and Qubani ka Meetha. The cuisine is a mix of Telugu and Mughlai influences.",
    culture: "Known for its rich history under the Nizams, with influences from Persian and Telugu cultures. Famous for Deccani culture and Ganga-Jamuni tehzeeb.",
    festivals: "Celebrates Bathukamma, Bonalu, and the famous Deccan Festival.",
    monuments: "Charminar, Golconda Fort, and the Qutb Shahi Tombs.",
    languages: "Telugu and Urdu."
  },
  "puducherry": {
    food: "Try French-inspired cuisine, Creole dishes, and seafood. Don't miss the local bakeries and French pastries.",
    culture: "A unique blend of French colonial and Tamil cultures. Known for Auroville and spiritual tourism.",
    festivals: "Celebrates Bastille Day, Masi Magam, and the French Food Festival.",
    monuments: "Aurobindo Ashram, Auroville, and the French Quarter.",
    languages: "Tamil, French, and English."
  },

  // Eastern Region
  "west-bengal": {
    food: "Famous for Rosogolla, Sandesh, and Macher Jhol. Don't miss the street food of Kolkata.",
    culture: "Known for Durga Puja, Rabindra Sangeet, and the works of Rabindranath Tagore.",
    festivals: "Celebrates Durga Puja, Poila Boishakh, and the Kolkata Book Fair.",
    monuments: "Victoria Memorial, Howrah Bridge, and the Sundarbans.",
    languages: "Bengali, Hindi, and English."
  },
  "odisha": {
    food: "Try Pakhala Bhata, Chhena Poda, and Rasagola. The state is known for its temple cuisine.",
    culture: "Famous for Odissi dance, Pattachitra art, and the Jagannath Temple culture.",
    festivals: "Celebrates Rath Yatra, Konark Dance Festival, and Raja Parba.",
    monuments: "Konark Sun Temple, Lingaraja Temple, and Udayagiri-Khandagiri Caves.",
    languages: "Odia and Sambalpuri."
  },
  "bihar": {
    food: "Famous for Litti Chokha, Khaja, and Thekua. The state has a rich tradition of vegetarian cuisine.",
    culture: "Birthplace of Buddhism and Jainism. Known for Madhubani paintings and Chhath Puja.",
    festivals: "Celebrates Chhath Puja, Sonepur Mela, and Buddha Jayanti.",
    monuments: "Mahabodhi Temple, Nalanda University ruins, and Vikramshila ruins.",
    languages: "Hindi, Maithili, and Bhojpuri."
  },
  "jharkhand": {
    food: "Try Dhuska, Thekua, and Rugra. The cuisine uses local forest produce.",
    culture: "Rich tribal heritage with unique art forms like Sohrai and Khovar paintings.",
    festivals: "Celebrates Sarhul, Karma, and the Chhau dance festival.",
    monuments: "Jagannath Temple (Ranchi), Palamu Fort, and Betla National Park.",
    languages: "Hindi, Santhali, and Ho."
  },

  // Western Region
  "gujarat": {
    food: "Famous for Dhokla, Thepla, and Khandvi. Don't miss the Gujarati Thali and Fafda-Jalebi.",
    culture: "Known for Garba dance, Navratri celebrations, and the business acumen of its people.",
    festivals: "Celebrates Navratri, Uttarayan (Kite Festival), and Rann Utsav.",
    monuments: "Rani ki Vav, Somnath Temple, and the white desert of Rann of Kutch.",
    languages: "Gujarati and Hindi."
  },
  "maharashtra": {
    food: "Maharashtra offers diverse cuisine from spicy Kolhapuri mutton to street food like vada pav, pav bhaji, and bhel puri. Don't miss puran poli, modak (Ganesh's favorite sweet), and the famous Pune mastani!",
    culture: "Maharashtra is the land of great leaders like Chhatrapati Shivaji and social reformers. It's famous for Bollywood, classical music, and traditional dance forms like Lavani and Tamasha.",
    festivals: "Ganesh Chaturthi is the biggest festival, especially in Mumbai. Other important celebrations include Gudi Padwa (Marathi New Year), Navratri, and the harvest festival of Makar Sankranti.",
    monuments: "Explore the UNESCO World Heritage Ajanta and Ellora Caves, the majestic Gateway of India in Mumbai, and historic forts like Shivneri and Raigad built by Chhatrapati Shivaji.",
    languages: "Marathi is the official language, known for its rich literature and poetry. Mumbai being cosmopolitan, you'll hear Hindi, English, and many other languages too."
  },
  "goa": {
    food: "Famous for seafood, Vindaloo, Xacuti, and Bebinca. The cuisine has strong Portuguese influences.",
    culture: "A blend of Indian and Portuguese cultures. Known for its beaches, nightlife, and laid-back lifestyle.",
    festivals: "Celebrates Carnival, Shigmo, and the Feast of St. Francis Xavier.",
    monuments: "Basilica of Bom Jesus, Fort Aguada, and the churches of Old Goa.",
    languages: "Konkani, Marathi, and English."
  },

  // North-Eastern Region
  "assam": {
    food: "Try Assamese Thali, Khaar, and Pitha. The cuisine uses local herbs and bamboo shoots.",
    culture: "Known for Bihu dance, traditional silk weaving, and the one-horned rhinoceros.",
    festivals: "Celebrates Bihu (three times a year), Ambubachi Mela, and Majuli Festival.",
    monuments: "Kaziranga National Park, Kamakhya Temple, and Majuli Island.",
    languages: "Assamese, Bodo, and various tribal languages."
  },
  "sikkim": {
    food: "Famous for Momos, Thukpa, and Gundruk. The cuisine is influenced by Nepalese and Tibetan cultures.",
    culture: "A blend of Nepalese, Bhutia, and Lepcha cultures. Known for Buddhist monasteries and eco-tourism.",
    festivals: "Celebrates Losar, Saga Dawa, and the Flower Festival.",
    monuments: "Rumtek Monastery, Tsomgo Lake, and Nathu La Pass.",
    languages: "Nepali, Bhutia, and Lepcha."
  },
  "arunachal-pradesh": {
    food: "Try Thukpa, Apong (rice beer), and bamboo shoot dishes. The cuisine is simple and hearty.",
    culture: "Home to numerous tribes, each with unique traditions. Known for Buddhist monasteries and tribal festivals.",
    festivals: "Celebrates Losar, Ziro Festival of Music, and Solung.",
    monuments: "Tawang Monastery, Sela Pass, and Namdapha National Park.",
    languages: "Nyishi, Adi, and various tribal languages."
  },
  "nagaland": {
    food: "Famous for smoked pork with bamboo shoots, Axone (fermented soybean), and Raja Mircha chili.",
    culture: "Known for its warrior traditions, headhunting history, and vibrant tribal culture.",
    festivals: "Celebrates Hornbill Festival, Moatsu, and Sekrenyi.",
    monuments: "Kohima War Cemetery, Dzukou Valley, and Khonoma village.",
    languages: "English, Nagamese, and various Naga languages."
  },
  "manipur": {
    food: "Try Eromba, Chamthong, and Singju. The cuisine is known for its use of fermented fish and local herbs.",
    culture: "Known for Manipuri dance, Ras Lila, and the sport of Polo (Sagol Kangjei).",
    festivals: "Celebrates Yaoshang, Ningol Chakouba, and the Sangai Festival.",
    monuments: "Loktak Lake, Kangla Fort, and the floating islands of Sendra.",
    languages: "Meiteilon (Manipuri) and English."
  },
  "mizoram": {
    food: "Famous for Bai, Vawksa Rep, and Sawhchiar. The cuisine is less spicy and uses local herbs.",
    culture: "Known for Cheraw (bamboo dance), traditional handlooms, and community living.",
    festivals: "Celebrates Chapchar Kut, Mim Kut, and Pawl Kut.",
    monuments: "Durtlang Hills, Vantawng Falls, and the Tam Dil Lake.",
    languages: "Mizo and English."
  },
  "tripura": {
    food: "Try Mui Borok, Chakhwi, and Mosdeng Serma. The cuisine uses fermented fish and bamboo shoots.",
    culture: "Known for its tribal culture, handloom products, and the unique Garia dance.",
    festivals: "Celebrates Kharchi Puja, Garia Puja, and the Orange Festival.",
    monuments: "Ujjayanta Palace, Neermahal, and the Tripura Sundari Temple.",
    languages: "Kokborok and Bengali."
  },
  "meghalaya": {
    food: "Famous for Jadoh, Dohneiiong, and Pumaloi. The cuisine is known for its use of pork and rice.",
    culture: "Known for its matrilineal society, living root bridges, and traditional music.",
    festivals: "Celebrates Nongkrem Dance, Wangala, and Behdienkhlam.",
    monuments: "Cherrapunji's living root bridges, Mawlynnong village, and Nohkalikai Falls.",
    languages: "Khasi, Garo, and English."
  },

  // Union Territories
  "andaman-nicobar-islands": {
    food: "Try seafood platters, coconut-based curries, and Andamanese tribal cuisine.",
    culture: "A mix of indigenous tribes and settlers from mainland India. Known for its pristine beaches and marine life.",
    festivals: "Celebrates Island Tourism Festival and Subhash Mela.",
    monuments: "Cellular Jail, Radhanagar Beach, and Ross Island.",
    languages: "Hindi, Bengali, Tamil, and indigenous languages."
  },
  "chandigarh": {
    food: "Famous for Chole Bhature, Butter Chicken, and Amritsari Kulcha.",
    culture: "A planned city with a mix of Punjabi and Haryanvi cultures. Known for its architecture and urban planning.",
    festivals: "Celebrates Baisakhi, Teej, and the Chandigarh Carnival.",
    monuments: "Rock Garden, Sukhna Lake, and the Capitol Complex.",
    languages: "Punjabi, Hindi, and English."
  },
  "dadra-and-nagar-haveli-and-daman-and-diu": {
    food: "Try seafood, Vindaloo, and Bebinca. The cuisine has Portuguese influences.",
    culture: "A blend of Gujarati and Portuguese cultures. Known for its beaches and colonial architecture.",
    festivals: "Celebrates Nariyal Purnima, Diwali, and Christmas.",
    monuments: "Diu Fort, Nani Daman Fort, and the Church of Our Lady of the Sea.",
    languages: "Gujarati, Hindi, and English."
  },
  "ladakh": {
    food: "Famous for Thukpa, Momos, and Butter Tea. The cuisine is influenced by Tibetan culture.",
    culture: "Known for its Buddhist monasteries, Hemis Festival, and the unique landscape of the cold desert.",
    festivals: "Celebrates Hemis Festival, Losar, and the Ladakh Festival.",
    monuments: "Pangong Lake, Nubra Valley, and the Thiksey Monastery.",
    languages: "Ladakhi, Hindi, and English."
  },
  "lakshadweep": {
    food: "Try seafood, especially tuna dishes, and coconut-based curries.",
    culture: "A blend of Arab, Malabari, and tribal cultures. Known for its coral reefs and marine life.",
    festivals: "Celebrates Eid, Milad-un-Nabi, and the Lakshadweep Festival.",
    monuments: "Marine life, coral reefs, and the pristine beaches of Agatti and Bangaram.",
    languages: "Malayalam, Jeseri, and Mahl."
  }
};

export function getChatbotResponse(
  message: string, 
  stateSlug: string, 
  stateName: string, 
  conversationHistory?: string
): ChatbotResponse {
  const lowerMessage = message.toLowerCase();
  
  // Greeting responses
  if ((lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) && 
      (!conversationHistory || conversationHistory.split('\n').length <= 2)) {
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
  
  // If we have conversation history, use it to provide more contextual responses
  if (conversationHistory) {
    const messages = conversationHistory.split('\n');
    const lastFewMessages = messages.slice(-4).join('\n'); // Get last 4 messages for context
    
    // Check if we're in an ongoing conversation about a topic
    if (lastFewMessages.toLowerCase().includes('food') || 
        lastFewMessages.toLowerCase().includes('dish') || 
        lastFewMessages.toLowerCase().includes('cuisine')) {
      return {
        response: `Continuing our discussion about ${stateName}'s cuisine, is there anything specific you'd like to know more about? The food here is deeply connected to the local culture and traditions.`,
        suggestions: ['Popular dishes', 'Street food', 'Sweet dishes', 'Festive foods']
      };
    }
    
    if (lastFewMessages.toLowerCase().includes('festival') || 
        lastFewMessages.toLowerCase().includes('celebration')) {
      return {
        response: `Building on our conversation about ${stateName}'s festivals, would you like to know more about the cultural significance or the traditional practices during these celebrations?`,
        suggestions: ['Cultural significance', 'Traditional practices', 'Festival foods', 'Music and dance']
      };
    }
    
    if (lastFewMessages.toLowerCase().includes('culture') || 
        lastFewMessages.toLowerCase().includes('tradition')) {
      return {
        response: `Since we're discussing ${stateName}'s culture, I can share more about its art forms, traditional clothing, music, or daily life practices. What interests you most?`,
        suggestions: ['Art forms', 'Traditional clothing', 'Folk music', 'Daily life']
      };
    }
  }
  
  // Default response with context from conversation if available
  let defaultResponse = `That's an interesting question about ${stateName}!`;
  
  if (conversationHistory) {
    defaultResponse += ` I can see we've been discussing various aspects of ${stateName}. `;
  } else {
    defaultResponse += ' ';
  }
  
  defaultResponse += `I can help you learn about the food, culture, festivals, monuments, languages, and history of this amazing place. What specific aspect would you like to explore?`;
  
  return {
    response: defaultResponse,
    suggestions: ['Tell me about the food', 'Cultural traditions', 'Famous festivals', 'Historical monuments']
  };
}
