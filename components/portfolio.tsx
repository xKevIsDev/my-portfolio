'use client'

import React, { useState } from 'react'
import {
  FileIcon,
  FolderIcon,
  CodeIcon,
  UserIcon,
  BookOpenIcon,
  AwardIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  GithubIcon,
  TwitterIcon,
  MailIcon
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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

export default function PortfolioComponent() {
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
      .replace(/(\/\/.*)/g, '<span class="text-emerald-400">$1</span>')
      .replace(/(^.*:)/gm, '<span class="text-pink-400">$1</span>')
      .replace(/(-{3,})/g, '<span class="text-amber-300">$1</span>')
      .replace(/(\b(FRONTEND|BACKEND|DEVOPS & TOOLS|OTHER|AVAILABILITY)\b)/g, '<span class="text-cyan-300 font-bold">$1</span>')
      .replace(/(\d\..*)/g, '<span class="text-amber-200">$1</span>')
      .replace(/(\b(React|Next\.js|Vue\.js|TypeScript|Node\.js|Python|Docker|AWS)\b)/g, '<span class="text-purple-400">$1</span>')
      .replace(/(@\w+)/g, '<span class="text-blue-400">$1</span>')
      .replace(/(https?:\/\/\S+)/g, '<span class="text-blue-400 underline">$1</span>')

    return (
      <pre className="font-mono text-sm leading-6 p-4" dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    )
  }

  const socialLinks = [
    { icon: <GithubIcon className="w-4 h-4" />, label: 'GitHub', link: 'https://github.com/xKevIsDev' },
    { icon: <TwitterIcon className="w-4 h-4" />, label: 'Twitter', link: 'https://twitter.com/KevIsDev' },
    { icon: <MailIcon className="w-4 h-4" />, label: 'Email', link: 'mailto:kevinmcgivern97@gmail.com' },
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='flex flex-col h-screen text-sm bg-[#1e1e1e] text-gray-300'
    >
      {/* Top Bar */}
      <motion.div 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="flex items-center bg-[#2d2d2d] p-2 border-b border-[#1e1e1e]"
      >
        <div className="flex space-x-2">
          <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" />
          <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer" />
          <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-green-500 cursor-pointer" />
        </div>
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="ml-4 text-sm font-medium"
        >
          KevIsDev - Portfolio.code-workspace
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <motion.div 
          initial={{ x: -250 }}
          animate={{ x: 0 }}
          className="w-64 bg-[#252526] p-2 overflow-y-auto border-r border-[#1e1e1e]"
        >
          <div className="mb-4">
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center mb-2 cursor-pointer" 
              onClick={() => toggleFolder('Portfolio')}
            >
              <AnimatePresence mode='wait'>
                <motion.div
                  key={expandedFolders.includes('Portfolio') ? 'down' : 'right'}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: expandedFolders.includes('Portfolio') ? 90 : 0 }}
                >
                  <ChevronRightIcon className="w-4 h-4 mr-1" />
                </motion.div>
              </AnimatePresence>
              <FolderIcon className="w-4 h-4 mr-2 text-yellow-400" />
              <span>Portfolio</span>
            </motion.div>
            <AnimatePresence>
              {expandedFolders.includes('Portfolio') && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="ml-4"
                >
                  {Object.keys(files).map((file, index) => (
                    <motion.div
                      key={file}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex items-center mb-1 cursor-pointer hover:bg-[#2d2d2d] rounded px-2 py-1 ${
                        activeTab === file ? 'bg-[#37373d]' : ''
                      }`}
                      onClick={() => setActiveTab(file)}
                    >
                      <FileIcon className="w-4 h-4 mr-2 text-blue-400" />
                      <span className={activeTab === file ? 'text-white' : ''}>{file}.txt</span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Editor Area */}
        <div className="flex-1 flex flex-col">
          {/* Tabs */}
          <div className="flex bg-[#2d2d2d] border-b border-[#1e1e1e]">
            {Object.keys(files).map((tab) => (
              <motion.div
                key={tab}
                whileHover={{ backgroundColor: '#37373d' }}
                className={`px-4 py-2 cursor-pointer flex items-center ${
                  activeTab === tab ? 'bg-[#1e1e1e] text-white border-t-2 border-blue-500' : 'text-gray-400'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                <FileIcon className="w-4 h-4 mr-2" />
                {tab}.txt
              </motion.div>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-hidden bg-[#1e1e1e] relative">
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute inset-0 overflow-auto"
              >
                <div className="flex">
                  <div className="text-right pr-4 select-none text-gray-600 border-r border-[#333] py-4" style={{ minWidth: '3rem' }}>
                    {(files[activeTab as keyof typeof files] || '').split('\n').map((_, i) => (
                      <div key={i} className="px-2">{i + 1}</div>
                    ))}
                  </div>
                  <SyntaxHighlight code={files[activeTab as keyof typeof files] || ''} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <motion.div 
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="flex justify-between items-center bg-[#007acc] text-white px-4 py-1.5 text-xs"
      >
        <div className="flex items-center space-x-4">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
            <CodeIcon className="w-4 h-4 mr-1" />
            <span>Plain Text</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
            <UserIcon className="w-4 h-4 mr-1" />
            <span>KevIsDev</span>
          </motion.div>
        </div>
        <div className="flex items-center space-x-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center hover:text-blue-200 transition-colors"
            >
              {social.icon}
              <span className="ml-1">{social.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}