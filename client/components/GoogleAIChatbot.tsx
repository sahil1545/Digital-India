import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, Bot, User, Sparkles, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getChatbotResponse } from "@shared/chatbot-data";

interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface GoogleAIChatbotProps {
  stateSlug: string;
  stateName: string;
}

const GOOGLE_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export function GehuAIChatbot({ stateSlug, stateName }: GoogleAIChatbotProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: `Hello! I'm your Gehu AI assistant for ${stateName}. I can provide detailed and accurate information about all states and union territories of India. Ask me anything!`,
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([
    'Tell me about the history',
    'What are the main industries?',
    'Describe the geography',
    'Cultural significance'
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getMockResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();

    if (lowerQuestion.includes('food') || lowerQuestion.includes('cuisine')) {
      return `${stateName} has a rich culinary tradition that reflects its cultural diversity. The local cuisine features unique spices, cooking techniques, and traditional dishes that have been passed down through generations. Popular dishes include regional specialties that combine local ingredients with aromatic spices.`;
    }

    if (lowerQuestion.includes('culture') || lowerQuestion.includes('tradition')) {
      return `${stateName} boasts a vibrant culture with ancient traditions, festivals, art forms, and customs. The state's cultural heritage includes classical dance forms, music, handicrafts, and religious practices that have evolved over centuries.`;
    }

    if (lowerQuestion.includes('history') || lowerQuestion.includes('past')) {
      return `${stateName} has a fascinating history spanning thousands of years. From ancient civilizations to medieval kingdoms and colonial influences, the state has played significant roles in shaping India's historical narrative.`;
    }

    if (lowerQuestion.includes('capital') || lowerQuestion.includes('city')) {
      return `The capital of ${stateName} is a bustling metropolis that serves as the administrative, economic, and cultural hub of the state. It features modern infrastructure alongside historical monuments and is home to diverse communities.`;
    }

    if (lowerQuestion.includes('population') || lowerQuestion.includes('people')) {
      return `${stateName} is home to a diverse population with various ethnic groups, languages, and religions. The state's demographic composition reflects India's multicultural fabric, with people from different backgrounds living harmoniously.`;
    }

    if (lowerQuestion.includes('economy') || lowerQuestion.includes('industry')) {
      return `${stateName}'s economy is driven by various sectors including agriculture, industry, services, and tourism. The state contributes significantly to India's economic growth through its natural resources, skilled workforce, and strategic location.`;
    }

    if (lowerQuestion.includes('festival') || lowerQuestion.includes('celebration')) {
      return `${stateName} celebrates numerous festivals throughout the year, blending religious, cultural, and seasonal traditions. These festivals bring communities together and showcase the state's rich cultural heritage through music, dance, and traditional rituals.`;
    }

    if (lowerQuestion.includes('geography') || lowerQuestion.includes('location')) {
      return `${stateName} is located in a strategic position in India with diverse geographical features including mountains, plains, rivers, and coastlines. This varied terrain influences the state's climate, agriculture, and way of life.`;
    }

    return `${stateName} is a fascinating part of India with rich history, culture, and natural beauty. It offers a unique blend of tradition and modernity, making it an important contributor to India's diverse tapestry.`;
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const callGoogleAPI = async (question: string): Promise<string> => {
    const prompt = `You are an expert on India and its states/union territories. Answer the following question about ${stateName} or India in general.

Question: ${question}

Provide a concise, informative answer in 2-3 sentences (50-100 words). Focus on accurate facts, be engaging but brief.`;

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GOOGLE_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: prompt
                  }
                ]
              }
            ]
          })
        }
      );

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Google API error:', error);
      // Fallback to existing chatbot logic for demonstration
      return getChatbotResponse(question, stateSlug, stateName).response;
    }
  };

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputMessage.trim();
    if (!textToSend) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: textToSend,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Get response from Google API
    const botResponse = await callGoogleAPI(textToSend);

    const botMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      content: botResponse,
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    setIsTyping(false);

    // Update suggestions based on conversation
    setSuggestions([
      'Tell me more about culture',
      'What are famous landmarks?',
      'Economic overview',
      'Recent developments'
    ]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  return (
    <Card className="w-full flex flex-col h-[600px] max-h-[80vh]">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-3 font-poppins">
          <div className="relative">
            <Bot className="w-6 h-6 text-blue-600" />
            <Sparkles className="w-3 h-3 text-yellow-500 absolute -top-1 -right-1" />
          </div>
          Gehu AI Assistant for {stateName}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col h-[calc(100%-60px)] p-0">
        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto px-4 space-y-4 py-2 flex flex-col">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'bot' && (
                  <motion.div
                    className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Bot className="w-4 h-4 text-blue-600" />
                  </motion.div>
                )}

                <motion.div
                  className={`max-w-[80%] p-3 rounded-lg font-poppins break-words ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-sm'
                      : 'bg-muted text-muted-foreground rounded-bl-sm'
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-muted-foreground'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </motion.div>

                {message.sender === 'user' && (
                  <motion.div
                    className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                  >
                    <User className="w-4 h-4 text-blue-600" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          <AnimatePresence>
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex gap-3 justify-start"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                  <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
                </div>
                <div className="bg-muted text-muted-foreground p-3 rounded-lg rounded-bl-sm">
                  <div className="flex gap-1">
                    <motion.div
                      className="w-2 h-2 bg-muted-foreground rounded-full"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-muted-foreground rounded-full"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.1 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-muted-foreground rounded-full"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div ref={messagesEndRef} className="min-h-[1px]" />
        </div>

        {/* Suggestions */}
        <AnimatePresence>
          {suggestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="px-4 mb-3"
            >
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <motion.div
                    key={suggestion}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors font-poppins text-xs"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Input Area */}
        <div className="border-t p-4">
          <div className="flex gap-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={`Ask Gehu AI about ${stateName}...`}
              className="flex-1 font-poppins"
              disabled={isTyping}
            />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim() || isTyping}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}