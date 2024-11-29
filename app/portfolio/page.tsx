"use client"

import React, { useState, useEffect } from 'react'
import {
  FileIcon,
  FolderIcon,
  CodeIcon,
  UserIcon,
  ChevronRightIcon,
  GithubIcon,
  TwitterIcon,
  MailIcon,
  ArrowLeftIcon,
  MenuIcon,
  XIcon
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

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
- Coaching a local football team
- Enjoying a good cup of coffee while brainstorming new ideas

Let's build something amazing together!`,
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

3. FLIXR
   -----
   Description: A responsive web app for searching and discovering movies & TV shows with an AI assistant
   Tech Stack: Nextjs, TypeScript, API Integration, Tailwindcss
   Key Features:
   - Integration of multiple movie & TV show data sources
   - Live chat with AI assistant for recommendations
   - TMDB API for movie & TV show detailed information
   - Responsive design for mobile & desktop

4. GENERATIVE AI TO UI BUILDER
   ---------------------------
   Description: A web app that allows users to create UIs using Generative AI
   Tech Stack: React, Next.js, Tailwindcss, Supabase, Shadcn/ui, OpenAI
   Key Features:
   - Integration of Generative AI models for UI generation
   - User-friendly interface for creating UIs
   - Real-time preview of UI components
   - Exportable UI code

5. OPEN SOURCE BOLT REPO
   ---------------------
   Description: A web app by Stackblitz that allows users to create full-stack apps using AI
   Tech Stack: Vite, Remix, Anthropic, Typescript, Webcontainers
   Key Features:
   - Integration of Anthropic for complex prompting and responses.
   - User-friendly interface.
   - Real-time preview of generated apps
   - Deploy capability
   - Project download
   - In browser IDE and more...

// Each project showcases my ability to create end-to-end solutions,
// implement complex features, and deliver high-quality user experiences.`,
  skills: `// TECHNICAL SKILLS
// =================

FRONTEND
--------
- React
- Next.js
- Vue.js
- Vite
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
- AI integrations

// Continuously expanding my skill set and staying
// up-to-date with the latest industry trends.`,
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
- Part-time positions
- Remote work
- Collaboration

Let's connect and create something extraordinary!

// Don't hesitate to reach out. I'm just a message away
// from turning your ideas into reality.`,
}

export default function PortfolioComponent() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('about')
  const [expandedFolders, setExpandedFolders] = useState(['Portfolio'])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const toggleFolder = (folder: string) => {
    setExpandedFolders(prev =>
      prev.includes(folder)
        ? prev.filter(f => f !== folder)
        : [...prev, folder]
    )
  }

  const SyntaxHighlight = ({ code }: { code: string }) => {
    const highlightedCode = code
      .replace(/(\/\/.*)/g, '<span class="text-teal-400">$1</span>')
      .replace(/(^.*:)/gm, '<span class="text-purple-400">$1</span>')
      .replace(/(-{3,})/g, '<span class="text-orange-400">$1</span>')
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
      className="overflow-auto flex flex-col h-screen text-sm bg-gradient-to-br from-purple-950 via-slate-900 to-teal-950 text-gray-300"
    >
      {/* Top Bar */}
      <motion.div 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="flex items-center justify-between bg-black/40 backdrop-blur-sm p-2 border-b border-gray-800"
      >
        <div className="flex items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/')}
            className="mr-4 p-1 hover:bg-white/10 rounded-md"
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </motion.button>
          <div className="flex space-x-2">
            <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" />
            <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer" />
            <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-green-500 cursor-pointer" />
          </div>
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="ml-4 text-sm font-medium bg-gradient-to-r from-white via-teal-300 to-white bg-clip-text text-transparent hidden sm:block"
          >
            KEVISDEV - Portfolio.code-workspace
          </motion.div>
        </div>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-1 hover:bg-white/10 rounded-md lg:hidden"
        >
          {isSidebarOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
        </button>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar - Mobile Overlay */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/50 lg:hidden z-20"
            />
          )}
        </AnimatePresence>

        {/* Sidebar */}
        <div className={`
          lg:w-64 w-64 bg-black/40 backdrop-blur-sm border-r border-gray-800
          fixed lg:static h-full z-30
          transform lg:transform-none
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          transition-transform duration-200 ease-in-out
        `}>
          <div className="p-2 h-full overflow-y-auto">
            <div className="mb-4">
              <div 
                className="flex items-center mb-2 cursor-pointer" 
                onClick={() => toggleFolder('Portfolio')}
              >
                <motion.div
                  animate={{ rotate: expandedFolders.includes('Portfolio') ? 90 : 0 }}
                >
                  <ChevronRightIcon className="w-4 h-4 mr-1" />
                </motion.div>
                <FolderIcon className="w-4 h-4 mr-2 text-orange-400" />
                <span className="text-gray-300">Portfolio</span>
              </div>
              
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
                        className={`flex items-center mb-1 cursor-pointer hover:bg-white/5 rounded px-2 py-1 ${
                          activeTab === file ? 'bg-white/10' : ''
                        }`}
                        onClick={() => {
                          setActiveTab(file)
                          setIsSidebarOpen(false)
                        }}
                      >
                        <FileIcon className="w-4 h-4 mr-2 text-teal-400" />
                        <span className={activeTab === file ? 'text-white' : ''}>{file}.txt</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Editor Area */}
        <div className="flex-1 flex flex-col w-full">
          {/* Tabs */}
          <div className="flex overflow-x-auto bg-black/40 backdrop-blur-sm border-b border-gray-800 scrollbar-hide">
            {Object.keys(files).map((tab) => (
              <motion.div
                key={tab}
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                className={`px-4 py-2 cursor-pointer flex items-center whitespace-nowrap ${
                  activeTab === tab ? 'bg-black/20 text-white border-t-2 border-teal-500' : 'text-gray-400'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                <FileIcon className="w-4 h-4 mr-2" />
                {tab}.txt
              </motion.div>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-hidden bg-black/20 backdrop-blur-sm relative">
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute inset-0 overflow-auto"
              >
                <div className="flex min-w-full">
                  <div className="text-right pr-4 select-none text-gray-600 border-r border-gray-800 py-4" style={{ minWidth: '3rem' }}>
                    {(files[activeTab as keyof typeof files] || '').split('\n').map((_, i) => (
                      <div key={i} className="px-2">{i + 1}</div>
                    ))}
                  </div>
                  <div className="overflow-auto w-full ">
                    <SyntaxHighlight code={files[activeTab as keyof typeof files] || ''} />
                  </div>
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
        className="flex flex-row justify-between items-start sm:items-center bg-gradient-to-r from-purple-500  via-teal-500 to-orange-500 text-white px-4 py-1.5 text-xs gap-2 sm:gap-0"
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
        <div className="flex items-center space-x-4 sm:space-x-6">
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
              className="flex items-center hover:text-teal-200 transition-colors"
            >
              {social.icon}
              <span className="ml-1 hidden sm:inline">{social.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Interactive gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x || 0}px ${
            mousePosition.y || 0
          }px, transparent 0%, rgba(0,0,0,0.5) 100%)`,
        }}
      />
    </motion.div>
  )
}