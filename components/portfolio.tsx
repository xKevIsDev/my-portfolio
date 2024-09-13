'use client'

import React, { useState } from 'react'
import {
  FileIcon,
  FolderIcon,
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  CodeIcon,
  UserIcon,
  BookOpenIcon,
  AwardIcon,
  ChevronRightIcon,
  ChevronDownIcon
} from 'lucide-react'

const files = {
  about: `// ABOUT ME
// =========

Name: Kevin
Role: Full Stack Developer
Experience: 5 years
Location: United Kingdom

// PROFESSIONAL SUMMARY
// ====================

Passionate and innovative Full Stack Developer with 5 years of experience
in creating robust and scalable web applications. Committed to writing
clean, efficient code and staying at the forefront of web technologies.
Thrives in collaborative environments and enjoys tackling complex
problems with creative solutions.

// PERSONAL STATEMENT
// ==================

When I'm not immersed in code, you can find me:
- Exploring the latest tech trends
- Contributing to open-source projects
- Mentoring aspiring developers
- Enjoying a good cup of coffee while brainstorming new ideas

Let's build something amazing together!
`,
  projects: `// MY PROJECTS
// ============

1. E-COMMERCE PLATFORM
   -------------------
   Description: A full-stack e-commerce solution with advanced features
   Tech Stack: React, Next.js, Node.js, MongoDB, Supabase, Redux, Framer-motion, Tailwindcss
   Key Features:
   - Real-time inventory management
   - Secure payment gateway integration
   - Admin dashboard with analytics
   - Mobile-responsive design

2. TASK MANAGEMENT APP
   -------------------
   Description: A React Native mobile app for efficient task management
   Tech Stack: React Native, Redux, Firebase
   Key Features:
   - Intuitive UI for task creation and management
   - Push notifications for reminders
   - Offline mode with local storage sync
   - Collaborative task sharing

3. WEATHER FORECAST DASHBOARD
   --------------------------
   Description: A responsive web app for detailed weather forecasts
   Tech Stack: React, TypeScript, Weather API, Chart.js
   Key Features:
   - Integration of multiple weather data sources
   - Interactive charts for temperature trends
   - Location-based weather alerts
   - 7-day forecast with hourly breakdowns

4. GENERATIVE AI TO UI BUILDER
   ----------------------------
   Description: A web app that allows users to create UIs using Generative AI
   Tech Stack: React, Next.js, Tailwindcss, Supabase, Shadcn/ui, OpenAI
   Key Features:
   - Integration of Generative AI models for UI generation
   - User-friendly interface for creating UIs
   - Real-time preview of UI components
   - Exportable UI code

// Each project showcases my ability to create end-to-end solutions,
// implement complex features, and deliver high-quality user experiences.
`,
  skills: `// TECHNICAL SKILLS
// =================

FRONTEND
--------
- React
- Next.js
- Vue.js
- JavaScript (ES6+)
- TypeScript
- HTML5 & CSS3
- Responsive Web Design
- Redux
- Webpack
- Tailwindcss
- Shadcn/ui
- Framer-motion
- OpenAI

BACKEND
-------
- Node.js
- Express
- Python
- RESTful APIs
- GraphQL
- MongoDB
- Supabase
- PostgreSQL
- Firebase

DEVOPS & TOOLS
--------------
- Git & GitHub
- Docker
- AWS
- CI/CD
- Kubernetes
- Jenkins
- Jira
- Agile Methodologies

OTHER
-----
- Test-Driven Development
- Microservices Architecture
- Performance Optimization
- Security Best Practices
- Cross-browser Compatibility
- Mobile-First Development

// Continuously expanding my skill set and staying
// up-to-date with the latest industry trends.
`,
  contact: `// GET IN TOUCH
// =============

I'm always open to new opportunities, collaborations,
or just a friendly chat about tech!

Email: kevinmcgivern97@gmail.com
GitHub: https://github.com/xKevIsDev
Twitter: @KevIsDev

// AVAILABILITY
// ============

Open for:
- Freelance projects
- Full-time positions
- Speaking engagements
- Tech consultations

Let's connect and create something extraordinary!

// Don't hesitate to reach out. I'm just a message away
// from turning your ideas into reality.
`,
}

export function PortfolioComponent() {
  const [activeTab, setActiveTab] = useState('about')
  const [expandedFolders, setExpandedFolders] = useState(['Portfolio'])

  const toggleFolder = (folder: string) => {
    setExpandedFolders(prev =>
      prev.includes(folder)
        ? prev.filter(f => f !== folder)
        : [...prev, folder]
    )
  }

  const SyntaxHighlight = ({ code }: { code: string }) => {
    const highlightedCode = code
      .replace(/(\/\/.*)/g, '<span class="text-green-400">$1</span>')
      .replace(/(^.*:)/gm, '<span class="text-pink-400">$1</span>')
      .replace(/(-{3,})/g, '<span class="text-yellow-300">$1</span>')
      .replace(/(\b(FRONTEND|BACKEND|DEVOPS & TOOLS|OTHER|AVAILABILITY)\b)/g, '<span class="text-blue-300 font-bold">$1</span>')
      .replace(/(\d\..*)/g, '<span class="text-yellow-200">$1</span>')

    return (
      <pre className="font-mono text-xs leading-5 p-4" dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    )
  }

  return (
    <div className='flex flex-col h-screen text-sm bg-[#1e1e1e] text-gray-300'>
    <div className="flex flex-col h-screen text-sm bg-[#1e1e1e] text-gray-300">
      {/* Top Bar */}
      <div className="flex items-center bg-[#3c3c3c] p-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500 flex items-center justify-center text-xs text-black/50 font-bold">k</div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 flex items-center justify-center text-xs text-black/50 font-bold">e</div>
          <div className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center text-xs text-black/50 font-bold">v</div>
        </div>
        <div className="ml-4 text-sm ">KevIsDev - Portfolio.code-workspace</div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 bg-[#252526] p-2 overflow-y-auto">
          <div className="mb-4">
            <div className="flex items-center mb-2 cursor-pointer" onClick={() => toggleFolder('Portfolio')}>
              {expandedFolders.includes('Portfolio') ? <ChevronDownIcon className="w-4 h-4 mr-1" /> : <ChevronRightIcon className="w-4 h-4 mr-1" />}
              <FolderIcon className="w-4 h-4 mr-2 text-yellow-400" />
              <span>Portfolio</span>
            </div>
            {expandedFolders.includes('Portfolio') && (
              <div className="ml-4">
                {Object.keys(files).map(file => (
                  <div key={file} className="flex items-center mb-1 cursor-pointer" onClick={() => setActiveTab(file)}>
                    <FileIcon className="w-4 h-4 mr-2 text-blue-400" />
                    <span className={activeTab === file ? 'text-white' : ''}>{file}.txt</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Editor Area */}
        <div className="flex-1 flex flex-col">
          {/* Tabs */}
          <div className="flex bg-[#2d2d2d]">
            {Object.keys(files).map((tab) => (
              <div
                key={tab}
                className={`px-4 py-2 cursor-pointer ${activeTab === tab ? 'bg-[#1e1e1e] text-white border-t-2 border-blue-500' : 'text-gray-400'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}.txt
              </div>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-hidden bg-[#1e1e1e] relative">
            <div className="absolute inset-0 overflow-auto">
              <div className="flex">
                <div className="text-right pr-4 select-none text-gray-600" style={{ minWidth: '2rem' }}>
                  {(files[activeTab as keyof typeof files] || '').split('\n').map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
                <SyntaxHighlight code={files[activeTab as keyof typeof files] || ''} />
              </div>
            </div>
          </div>
          {/* Minimap */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-[#252526] opacity-30"></div>
        </div>
      </div>
    </div><div className="flex justify-between items-center bg-[#007acc] text-white px-4 py-1 text-xs">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <CodeIcon className="w-4 h-4 mr-1" />
            <span>Plain Text</span>
          </div>
          <div className="flex items-center">
            <UserIcon className="w-4 h-4 mr-1" />
            <span>KevIsDev</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <BookOpenIcon className="w-4 h-4 mr-1" />
            <span>Portfolio v1.0.0</span>
          </div>
          <div className="flex items-center">
            <AwardIcon className="w-4 h-4 mr-1" />
            <span>Unlimited Years Exp.</span>
          </div>
        </div>
      </div>
    </div>
  )
}