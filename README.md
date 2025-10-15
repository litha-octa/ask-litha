# Ask Litha 🤖

A modern, responsive React application that serves as an AI assistant interface. Built with React, TypeScript, Vite, and integrated with a Netlify serverless function for AI text generation.

![React](https://img.shields.io/badge/React-18.x-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Vite](https://img.shields.io/badge/Vite-5.x-purple)
![Netlify](https://img.shields.io/badge/Netlify-Deployed-teal)

## ✨ Features

- **Modern UI**: Clean, responsive design with background styling
- **AI-Powered**: Integrated with AI text generation via Netlify functions
- **Type Safety**: Built with TypeScript for better development experience
- **Fast Development**: Powered by Vite for quick builds and hot reloading
- **Conversation History**: Maintains and displays all previous responses
- **CORS Handling**: Properly configured proxy for seamless API communication

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/litha-octa/ask-litha.git
   cd ask-litha
2. **Install depedencies**
    ```bash
   npm install
3. **Start development server**
    ```bash
   npm run dev
4. **Open your browser**
Navigate to http://localhost:5173

npm run dev - Start development server

npm run build - Build for production

npm run lint - Run ESLint

npm run preview - Preview production build

### API
  The underlying API infrastructure and serverless functions powering this application are available in a dedicated repository:
    https://github.com/litha-octa/Implementing-Gemini-AI-using-Express

### Project Architecture
     ```bash
    ask-litha/<br/>
    ├── src/<br/>
    │   ├── App.tsx          # Main application component<br/>
    │   ├── main.tsx         # Application entry point<br/>
    │   ├── index.css        # Global styles<br/>
    │   └── vite-env.d.ts    # Vite type definitions<br/>
    ├── index.html           # HTML template<br/>
    ├── vite.config.ts       # Vite configuration<br/>
    ├── package.json<br/>
    └── netlify.toml         # Netlify deployment config<br/>

## Built with ❤️ by Litha
