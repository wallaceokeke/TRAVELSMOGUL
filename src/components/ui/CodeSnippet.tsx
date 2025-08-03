import React from 'react';

interface CodeSnippetProps {
  code: string;
  language?: string;
  maxHeight?: string;
}

const CodeSnippet = ({ code, language = 'python', maxHeight = 'max-h-80' }: CodeSnippetProps) => {
  // Split code into lines
  const lines = code.trim().split('\n');
  
  // Simple syntax highlighting function
  const highlightLine = (line: string) => {
    // Basic syntax highlighting for Python
    if (language === 'python') {
      return line
        .replace(/(import|from|def|class|if|else|elif|for|while|return|True|False|None|and|or|not|in|try|except|finally|with|as|break|continue|pass|assert|raise|yield|await|async|lambda)/g, '<span class="code-line-keyword">$1</span>')
        .replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '<span class="code-line-string">$&</span>')
        .replace(/(#.*)$/g, '<span class="code-line-comment">$1</span>')
        .replace(/(\w+)(?=\()/g, '<span class="code-line-function">$1</span>');
    }
    
    // If no specific language is matched, return as is
    return line;
  };
  
  return (
    <div className="group relative">
      <div className="absolute top-2 right-2 bg-dark-charcoal px-2 py-1 rounded text-xs opacity-70">
        {language}
      </div>
      <div className={`code-snippet ${maxHeight} overflow-y-auto scrollbar-thin scrollbar-track-dark-charcoal scrollbar-thumb-light-charcoal`}>
        {lines.map((line, index) => (
          <div key={index} className="code-line relative group/line">
            <span className="mr-4 text-gray-500 select-none">{index + 1}</span>
            <span dangerouslySetInnerHTML={{ __html: highlightLine(line) }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeSnippet;