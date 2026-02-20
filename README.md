# Digital India

A comprehensive, interactive web application that showcases the rich cultural heritage, history, and diversity of India's 28 states and 8 union territories. Explore detailed information about each state including culture, festivals, monuments, cuisine, and more through an immersive user experience.

## 🌟 Features

###  Interactive State & UT Gallery
- Browse all 35 states and union territories with beautiful image cards
- Filter by States or Union Territories
- Responsive grid layout with hover effects
- Quick view of key information (population, area, languages)

###  Detailed State Pages
Each state/UT has a dedicated detail page featuring:
- **State Information**: Capital, population, area, official languages
- **Famous Places**: Top tourist destinations and landmarks
- **Culture & Traditions**: Dance forms, arts, crafts, and cultural practices
- **Festivals**: Major celebrations and regional festivals
- **Monuments**: Historical sites and architectural wonders
- **Underrated Facts**: Interesting and lesser-known facts
- **Cuisine**: Popular dishes and regional specialties
- **Economy**: Key industries and economic highlights

###  AI-Powered Chatbot
- State-specific AI guide for each state/UT
- Ask questions about culture, food, festivals, monuments, and history
- Smart suggestions and contextual responses
- Interactive chat interface with typing indicators

###  Interactive Quiz
- Test your knowledge about Indian states
- Multiple-choice questions with instant feedback
- Score tracking and performance metrics
- Educational and engaging learning experience

###  Modern UI/UX
- Beautiful gradient backgrounds and hero sections
- Smooth animations and transitions
- Mobile-responsive design
- Accessible components using Radix UI
- Poppins font for clean typography

##  Tech Stack

### Frontend
- **React 18** - Modern UI library
- **React Router 6** - Client-side routing (SPA mode)
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **TailwindCSS 3** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Smooth animations
- **TanStack React Query** - Data fetching and state management

### Backend
- **Express.js** - Node.js web framework
- **TypeScript** - Type-safe server code

### Development Tools
- **Vitest** - Unit testing framework
- **Prettier** - Code formatting
- **SWC** - Fast TypeScript/JavaScript compiler

## 📁 Project Structure

```
Digital-India/
├── client/                    # React frontend application
│   ├── Assets/               # State/UT images and media files
│   ├── components/           # React components
│   │   ├── ui/              # Reusable UI components (Radix UI)
│   │   ├── AIChatbot.tsx    # State-specific AI chatbot
│   │   ├── InteractiveQuiz.tsx  # Quiz component
│   │   └── StateCard.tsx    # State card component
│   ├── pages/               # Route components
│   │   ├── Index.tsx        # Home page
│   │   ├── StatesGallery.tsx # States/UTs gallery
│   │   ├── StateDetail.tsx  # Individual state detail page
│   │   └── NotFound.tsx     # 404 page
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── App.tsx              # App entry point with routing
│   └── global.css           # Global styles and Tailwind config
│
├── server/                   # Express backend
│   ├── routes/              # API route handlers
│   └── index.ts             # Server setup
│
├── shared/                   # Shared types and data
│   ├── api.ts               # Shared API interfaces
│   ├── india-data.ts        # Comprehensive state/UT data
│   ├── chatbot-data.ts      # Chatbot logic and responses
│   └── quiz-data.ts         # Quiz questions and answers
│
└── public/                   # Static assets
```

##  Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **pnpm** (preferred package manager) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Digital-India
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```
   or
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```
   or
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:8080`

### Available Scripts

- `pnpm dev` - Start development server (client + server)
- `pnpm build` - Build for production
- `pnpm build:client` - Build client only
- `pnpm build:server` - Build server only
- `pnpm start` - Start production server
- `pnpm test` - Run Vitest tests
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm format.fix` - Format code with Prettier

##  Key Features Explained

### State Data Structure

Each state/UT includes comprehensive information:
- Basic info (name, capital, population, area, languages)
- Tourism (famous places, monuments)
- Culture (traditions, festivals, dance forms)
- Culinary (popular dishes and specialties)
- Economy (key industries and contributions)
- Unique facts (underrated and interesting information)

### AI Chatbot

The chatbot provides contextual information about each state:
- Understands queries about culture, food, festivals, monuments
- Provides detailed, relevant responses
- Offers suggestions for common questions
- Maintains conversation context

### Interactive Quiz

The quiz component:
- Randomly generates questions about Indian states
- Provides multiple-choice options
- Tracks correct/incorrect answers
- Shows final score and performance feedback

##  Customization

### Adding New States/UTs

1. Add state data to `shared/india-data.ts`:
   ```typescript
   {
     state_name: "Your State",
     capital: "Capital City",
     image_url: "/Assets/your-state.jpg",
     slug: "your-state",
     type: "state", // or "union_territory"
     // ... other properties
   }
   ```

2. Add corresponding image to `client/Assets/`

### Styling

- **Global styles**: Edit `client/global.css`
- **Tailwind config**: Modify `tailwind.config.ts`
- **Theme colors**: Update CSS custom properties in `global.css`

### Routes

Add new routes in `client/App.tsx`:
```typescript
<Route path="/your-route" element={<YourComponent />} />
```

## 🌐 Deployment

### Production Build

```bash
pnpm build
```

This creates optimized production builds for both client and server.

### Deployment Options

1. **Netlify** - Frontend + serverless functions
2. **Vercel** - Full-stack deployment
3. **Traditional Hosting** - Run with `pnpm start` after build

### Environment Variables

Create a `.env` file if needed for:
- API keys
- Database connections
- Other configuration

##  Data Sources

The application includes detailed information about:
- **28 States**: All major states of India
- **8 Union Territories**: All union territories including recent additions

Each entry is carefully curated with accurate information about:
- Demographics
- Cultural heritage
- Tourist attractions
- Economic data
- Historical significance

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

##  License

This project is open source and available under the MIT License.

##  Acknowledgments

- **Data Sources**: Information compiled from official and reliable sources about Indian states
- **UI Components**: Built on Radix UI for accessibility
- **Icons**: Lucide React icon library
- **Images**: State/UT images from various sources

##  Contact

For questions, suggestions, or support, please open an issue on GitHub.

---

**Made with ❤️ for showcasing the incredible diversity and heritage of India**

