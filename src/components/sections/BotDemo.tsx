import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, RotateCcw, Code } from 'lucide-react';
import Button from '../ui/Button';
import CodeSnippet from '../ui/CodeSnippet';

interface Message {
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const INITIAL_MESSAGES: Message[] = [
  {
    content: "Hello! I'm Wallace's demo bot. Ask me about HELB applications or how to use Kate.",
    sender: 'bot',
    timestamp: new Date(),
  },
];

// Sample code snippet to show how the bot works
const botLogicSnippet = `def process_user_input(input_text):
    # Preprocess and normalize input
    normalized = input_text.strip().lower()
    
    # Check for HELB-related queries
    if "helb" in normalized and "apply" in normalized:
        return """Great! Let me walk you through the HELB application process:
1. Create an account on the HELB portal
2. Fill your personal details
3. Add education history
4. Submit required documents
5. Complete the loan request form
6. Submit your application"""
    
    # Check for Kate assistant queries
    elif "kate" in normalized and any(word in normalized for word in ["use", "command", "help"]):
        return """To use Kate PC Assistant, simply say:
- "Kate, open [application name]"
- "Kate, find file [filename]"
- "Kate, send email to [contact]"
- "Kate, search for [query]"

Kate will listen and execute your commands."""
    
    # Default response for unrecognized inputs
    else:
        return "I'm not sure how to help with that. Try asking about HELB applications or Kate assistant commands."`;

// Main demo bot responses
const getBotResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();
  
  if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
    return "Hello! I'm Wallace's demo bot. How can I assist you today?";
  }
  
  if (lowerInput.includes('helb') && lowerInput.includes('apply')) {
    return `Great! Let me walk you through the HELB application process:
1. Create an account on the HELB portal
2. Fill your personal details
3. Add education history
4. Submit required documents
5. Complete the loan request form
6. Submit your application`;
  }
  
  if (lowerInput.includes('helb') && lowerInput.includes('status')) {
    return "To check your HELB application status, use your application reference number. Would you like me to show you the format of a valid reference number?";
  }
  
  if (lowerInput.includes('kate') && (lowerInput.includes('use') || lowerInput.includes('command') || lowerInput.includes('help'))) {
    return `To use Kate PC Assistant, simply say:
- "Kate, open [application name]"
- "Kate, find file [filename]"
- "Kate, send email to [contact]"
- "Kate, search for [query]"

Kate will listen and execute your commands.`;
  }
  
  if (lowerInput.includes('thankyou') || lowerInput.includes('thank you') || lowerInput.includes('thanks')) {
    return "You're welcome! Feel free to ask if you have any other questions about Wallace's projects.";
  }
  
  if (lowerInput.includes('how') && lowerInput.includes('work')) {
    return "I use a simple pattern matching system to recognize your intent and provide relevant responses. Wallace's real bots use more sophisticated NLP models with memory and context understanding.";
  }
  
  return "I'm not sure how to help with that. Try asking about HELB applications or Kate assistant commands.";
};

const BotDemo = () => {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isTyping, setIsTyping] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  
  const resetChat = () => {
    setMessages(INITIAL_MESSAGES);
    setInput('');
    inputRef.current?.focus();
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);
    setInput('');
    
    // Show bot is typing
    setIsTyping(true);
    
    // Simulate typing delay for bot response
    setTimeout(() => {
      const botMessage: Message = {
        content: getBotResponse(input),
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };
  
  // Sample questions
  const sampleQuestions = [
    "How do I apply for HELB?",
    "How do I use Kate assistant?",
    "How does this bot work?",
  ];
  
  const askSampleQuestion = (question: string) => {
    // Add user message
    const userMessage: Message = {
      content: question,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);
    
    // Show bot is typing
    setIsTyping(true);
    
    // Simulate typing delay for bot response
    setTimeout(() => {
      const botMessage: Message = {
        content: getBotResponse(question),
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };
  
  useEffect(() => {
    // Scroll to the bottom when messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  return (
    <section className="py-24 relative" id="demo">
      <div className="binary-overlay"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-code font-bold mb-6">
            <span className="text-white">Live </span>
            <span className="neon-text">Demo Bot</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Try out a simplified version of Wallace's conversational bots.
          </p>
          <div className="h-1 w-20 bg-electric-blue mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <div className="bg-light-charcoal rounded-lg overflow-hidden border border-electric-blue shadow-neon-blue h-[500px] flex flex-col">
              {/* Bot header */}
              <div className="bg-dark-charcoal p-4 flex items-center justify-between border-b border-gray-800">
                <div className="flex items-center">
                  <Bot size={20} className="text-electric-blue mr-2" />
                  <h3 className="font-code text-electric-blue">Demo Bot</h3>
                </div>
                <button 
                  onClick={resetChat}
                  className="text-gray-400 hover:text-white p-1 rounded-full transition-colors"
                  aria-label="Reset chat"
                >
                  <RotateCcw size={16} />
                </button>
              </div>
              
              {/* Messages container */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div 
                    key={index}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] px-4 py-2 rounded-lg ${
                        message.sender === 'user' 
                          ? 'bg-neon-violet bg-opacity-20 text-white rounded-tr-none' 
                          : 'bg-electric-blue bg-opacity-10 text-white rounded-tl-none'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.content}</p>
                      <span className="text-xs text-gray-400 mt-1 block">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                ))}
                
                {/* Bot typing indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-electric-blue bg-opacity-10 text-white rounded-lg rounded-tl-none px-4 py-2">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-electric-blue animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-electric-blue animate-pulse delay-150"></div>
                        <div className="w-2 h-2 rounded-full bg-electric-blue animate-pulse delay-300"></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
              
              {/* Sample questions */}
              <div className="bg-dark-charcoal px-4 py-2 border-t border-gray-800 flex gap-2 overflow-x-auto hide-scrollbar">
                {sampleQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => askSampleQuestion(question)}
                    className="text-xs whitespace-nowrap px-3 py-1 bg-light-charcoal rounded-full text-electric-blue hover:bg-electric-blue hover:bg-opacity-20 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
              
              {/* Input form */}
              <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800 flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask about HELB or Kate..."
                  className="flex-1 bg-dark-charcoal text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-electric-blue"
                />
                <button
                  type="submit"
                  className="bg-electric-blue text-charcoal p-2 rounded-r-md hover:bg-opacity-90 transition-colors"
                  aria-label="Send message"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="bg-light-charcoal rounded-lg p-6 border-l-4 border-neon-violet h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Code size={20} className="text-neon-violet" />
                  <h3 className="text-xl font-code font-semibold text-neon-violet">Behind the Scenes</h3>
                </div>
                
                <p className="text-gray-300 mb-6">
                  This is a simplified demo of the bots Wallace builds. Real bots like Kate and HELB Assist 
                  feature more advanced natural language processing, context awareness, memory, and integration with external systems.
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-code font-semibold text-white mb-2">Core Bot Logic:</h4>
                  <CodeSnippet 
                    code={botLogicSnippet} 
                    language="python" 
                  />
                </div>
              </div>
              
              <div className="bg-dark-charcoal rounded p-4 border-l-4 border-cyberpunk-yellow">
                <h4 className="text-md font-code font-semibold text-cyberpunk-yellow mb-2">Note from Wallace:</h4>
                <p className="text-gray-300 text-sm">
                  "This demo shows the basic pattern-matching approach to bot development. 
                  My production bots use more advanced techniques including neural language models, 
                  context tracking, and API integrations to deliver truly helpful experiences."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotDemo;