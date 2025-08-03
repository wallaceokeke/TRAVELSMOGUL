import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import Button from './Button';

interface Message {
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const INITIAL_MESSAGES: Message[] = [
  {
    content: "Hi there! I'm Wallace's bot assistant. I can help you navigate the site or tell you more about Wallace's projects.",
    sender: 'bot',
    timestamp: new Date(),
  },
];

// Basic bot responses based on user input
const getBotResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();
  
  if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
    return "Hello! How can I help you explore Wallace's portfolio today?";
  }
  
  if (lowerInput.includes('about') || lowerInput.includes('who') || lowerInput.includes('wallace')) {
    return "Wallace is an AI systems developer specializing in building logic-based bots. He recently graduated and is passionate about creating AI that helps people with everyday tasks.";
  }
  
  if (lowerInput.includes('project') || lowerInput.includes('work')) {
    return "Wallace has worked on several projects, including Kate (a personal PC assistant) and HELB Assist Bot (a Telegram bot for helping students with HELB applications). Would you like me to tell you more about a specific project?";
  }
  
  if (lowerInput.includes('kate')) {
    return "Kate is an AI-based desktop assistant with memory, file interaction, and real-time speech intent recognition. It can help you control your PC hands-free.";
  }
  
  if (lowerInput.includes('helb') || lowerInput.includes('assist')) {
    return "The HELB Assist Bot is a Telegram bot designed to help students navigate HELB loan applications. It features inline buttons, state management, and validation to make the process smoother.";
  }
  
  if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('reach')) {
    return "You can connect with Wallace on GitHub at github.com/wallaceokeeke or LinkedIn at linkedin.com/in/wallaceokeke";
  }
  
  if (lowerInput.includes('code') || lowerInput.includes('programming') || lowerInput.includes('language')) {
    return "Wallace primarily works with Python for AI development and bot creation. He also uses frameworks like TensorFlow and PyTorch for machine learning projects.";
  }
  
  if (lowerInput.includes('thank')) {
    return "You're welcome! Feel free to ask if you have any other questions.";
  }
  
  return "I'm not sure I understand. Try asking about Wallace's background, projects like Kate or HELB Assist Bot, or how to contact him.";
};

const CompanionBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const toggleBot = () => {
    setIsOpen(!isOpen);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
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
    
    // Simulate typing delay for bot response
    setTimeout(() => {
      const botMessage: Message = {
        content: getBotResponse(input),
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 800);
  };
  
  useEffect(() => {
    // Scroll to the bottom when messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  // Sample commands for quick access
  const quickCommands = [
    "Tell me about Wallace",
    "What projects has Wallace built?",
    "How can I contact Wallace?",
  ];
  
  const runQuickCommand = (command: string) => {
    // Add user message
    const userMessage: Message = {
      content: command,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);
    
    // Simulate typing delay for bot response
    setTimeout(() => {
      const botMessage: Message = {
        content: getBotResponse(command),
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 800);
  };
  
  return (
    <>
      {/* Bot toggle button */}
      <button
        onClick={toggleBot}
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full transition-all duration-300 ${
          isOpen ? 'bg-neon-violet rotate-90' : 'bg-electric-blue animate-pulse'
        }`}
        aria-label="Toggle assistant"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} className="text-charcoal" />}
      </button>
      
      {/* Bot chat interface */}
      <div 
        className={`fixed bottom-24 right-6 w-80 sm:w-96 bg-light-charcoal rounded-lg shadow-neon-blue overflow-hidden z-40 transition-all duration-300 transform ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-charcoal p-4 flex items-center justify-between border-b border-electric-blue">
          <div className="flex items-center">
            <Bot size={20} className="text-electric-blue mr-2" />
            <h3 className="font-code text-electric-blue">Companion Bot</h3>
          </div>
          <button 
            onClick={toggleBot}
            className="text-gray-400 hover:text-white"
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
        </div>
        
        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 flex flex-col space-y-4">
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
                <p className="text-sm">{message.content}</p>
                <span className="text-xs text-gray-400 mt-1 block">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Quick commands */}
        <div className="px-4 py-2 bg-dark-charcoal border-t border-gray-800 flex gap-2 overflow-x-auto hide-scrollbar">
          {quickCommands.map((command, index) => (
            <button
              key={index}
              onClick={() => runQuickCommand(command)}
              className="text-xs whitespace-nowrap px-3 py-1 bg-light-charcoal rounded-full text-electric-blue hover:bg-electric-blue hover:bg-opacity-20 transition-colors"
            >
              {command}
            </button>
          ))}
        </div>
        
        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800 flex items-center">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Ask me anything..."
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
    </>
  );
};

export default CompanionBot;