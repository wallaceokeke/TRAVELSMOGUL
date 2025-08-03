import React from 'react';
import { ExternalLink, Github, Bot, Cpu } from 'lucide-react';
import Button from '../ui/Button';
import CodeSnippet from '../ui/CodeSnippet';

// Sample code snippets
const kateSnippet = `# Kate PC Assistant - Intent Recognition Module
def process_voice_command(audio_input):
    intent = nlp_model.analyze(audio_input)
    
    if intent.action == "file_operation":
        return file_manager.handle(intent.parameters)
    elif intent.action == "system_command":
        return system.execute(intent.parameters)
    elif intent.action == "web_search":
        return browser.search(intent.parameters)
        
    # Update interaction memory
    memory.store(audio_input, intent, result)
    return result`;

const helbSnippet = `# HELB Assist Bot - Application Status Module
async def check_application_status(user_id, application_id):
    # Validate application ID format
    if not is_valid_application_id(application_id):
        return "Invalid application ID format. Please check and try again."
    
    # Fetch status from HELB API
    status = await helb_api.get_status(application_id)
    
    # Update user's session state
    user_state[user_id] = {
        "last_checked_app": application_id,
        "last_status": status,
        "timestamp": datetime.now()
    }
    
    return f"Your HELB application ({application_id}) status: {status}"`;

const Project = ({
  title,
  description,
  codeSnippet,
  language,
  githubUrl,
  technologies,
  image,
  reverse = false,
  color = 'electric-blue'
}) => {
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center py-12 md:py-16 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className={`order-2 ${reverse ? 'md:order-1' : 'md:order-2'}`}>
        <div className="relative">
          <div className={`absolute -inset-1 bg-${color} opacity-50 blur-md rounded-lg`}></div>
          <div className="relative bg-dark-charcoal rounded-lg p-4 overflow-hidden shadow-lg">
            <CodeSnippet code={codeSnippet} language={language} />
          </div>
        </div>
      </div>
      
      <div className={`order-1 ${reverse ? 'md:order-2' : 'md:order-1'}`}>
        <h3 className={`text-2xl md:text-3xl font-code font-bold mb-4 text-${color}`}>{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-light-charcoal px-3 py-1 rounded-full text-sm text-gray-300">
              {tech}
            </span>
          ))}
        </div>
        
        <Button 
          variant="outline" 
          size="md"
          icon={<Github size={18} />}
          onClick={() => window.open(githubUrl, '_blank')}
        >
          View on GitHub
        </Button>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-charcoal to-dark-charcoal" id="projects">
      <div className="binary-overlay"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-code font-bold mb-6">
            <span className="text-white">Featured </span>
            <span className="neon-text">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Logic-based AI systems designed to solve real problems.
          </p>
          <div className="h-1 w-20 bg-electric-blue mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-20">
          <Project
            title="Kate – Your Personal PC Assistant"
            description="An AI-based desktop assistant with memory, file interaction, and real-time speech intent recognition. Kate listens for voice commands, identifies the user's intent, and performs the requested actions on their computer system."
            codeSnippet={kateSnippet}
            language="python"
            githubUrl="https://github.com/wallaceokeeke/kate-assistant"
            technologies={["Python", "TensorFlow", "SpeechRecognition", "PyAudio", "OS Automation"]}
            color="electric-blue"
          />
          
          <div className="border-t border-gray-800 w-full"></div>
          
          <Project
            title="HELB Assist Bot"
            description="A Telegram bot for helping students navigate Higher Education Loans Board (HELB) applications. Features inline buttons, state management, validation, and guided workflows to simplify the complex application process."
            codeSnippet={helbSnippet}
            language="python"
            githubUrl="https://github.com/wallaceokeeke/helb-assist-bot"
            technologies={["Python", "Telegram API", "SQLite", "State Management", "Form Validation"]}
            reverse={true}
            color="neon-violet"
          />
        </div>
        
        <div className="mt-24 text-center">
          <div className="cyberpunk-card mx-auto max-w-2xl transform transition hover:scale-105">
            <h3 className="text-2xl font-code font-semibold mb-4 text-cyberpunk-yellow">More Projects</h3>
            <p className="text-gray-300 mb-6">
              This portfolio website was built as a student project, showcasing not just my work in AI, 
              but also my web development skills. Explore more of my projects on GitHub.
            </p>
            <Button 
              variant="outline" 
              size="md"
              icon={<Github size={18} />}
              onClick={() => window.open('https://github.com/wallaceokeeke', '_blank')}
              className="mx-auto"
            >
              See Source Code on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;