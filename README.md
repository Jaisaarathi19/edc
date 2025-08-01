# E-Cell Rajalakshmi Engineering College Website

A modern, production-ready React.js single-page application for the Entrepreneurship Development Cell (E-Cell) of Rajalakshmi Engineering College. Built with extraordinary animations, exceptional UI/UX, and strict adherence to a black, white, and red theme.

## ✨ Features

- **Modern React Architecture**: Built with React 18+ using functional components and hooks
- **Extraordinary Animations**: Powered by Framer Motion and React Awesome Reveal
- **Responsive Design**: Mobile-first approach ensuring compatibility across all devices
- **Accessibility Compliant**: WCAG AA standards with proper focus management and keyboard navigation
- **Dark Theme**: Professional black, white, and red color scheme optimized for modern web standards
- **Modular Structure**: Scalable component-based architecture for easy maintenance and updates

## 🚀 Tech Stack

- **Frontend**: React.js 18+
- **Build Tool**: Vite
- **Styling**: CSS Modules with custom CSS variables
- **Animations**: Framer Motion & React Awesome Reveal
- **Icons**: React Icons
- **Development**: ESLint for code quality

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Button/          # Interactive button component
│   ├── Navigation/      # Main navigation bar
│   └── Footer/          # Site footer with links and social media
├── sections/            # Page sections
│   ├── HeroSection/     # Landing hero with video integration
│   ├── AboutSection/    # Our Story, Mission, Vision
│   ├── EventsSection/   # Events showcase with dynamic cards
│   ├── TeamSection/     # Team member profiles
│   ├── CentreLabsSection/ # Facilities and labs information
│   └── ContactSection/ # Contact form and information
├── hooks/              # Custom React hooks
├── utils/              # Helper functions and utilities
└── assets/             # Static assets (images, videos, fonts)
```

## 🎨 Design System

### Color Palette
- **Primary Background**: `#121212` (Cod Gray)
- **Primary Text**: `#E0E0E0` (Light Gray)
- **Accent Red**: `#FF4444` (Brand Red)
- **Secondary Text**: `#888888` (Medium Gray)
- **Card Background**: `#1A1A1A` (Dark Gray)

### Typography
- **Font Family**: Inter, Segoe UI, system fonts
- **Responsive Scale**: From 0.75rem to 3.75rem
- **Line Heights**: Optimized for readability (1.25-1.75)

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd edc-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: 768px - 1200px
- **Large Desktop**: > 1200px

## ♿ Accessibility Features

- **WCAG AA Compliance**: All color contrasts meet accessibility standards
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Clear focus indicators and logical tab order
- **Reduced Motion**: Respects user's motion preferences

## 🎯 Key Sections

1. **Hero Section**: Animated landing with tagline and video showcase
2. **About Section**: Our Story, Mission, Vision with statistics
3. **Events Section**: Dynamic event cards with filtering and details
4. **Team Section**: Interactive team member profiles with social links
5. **Centre & Labs**: Facility showcase with features and capabilities
6. **Contact Section**: Contact form with validation and office information

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 📊 Performance Optimizations

- **Code Splitting**: Dynamic imports for optimal loading
- **Lazy Loading**: Images and components loaded on demand
- **Optimized Animations**: Hardware-accelerated animations using Framer Motion
- **Efficient Rendering**: Minimized re-renders with proper React patterns
- **Bundle Optimization**: Vite's built-in optimizations for faster builds

## 🌐 Browser Support

- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions

## 📈 Future Enhancements

- **CMS Integration**: Connect with headless CMS for dynamic content management
- **Analytics**: Implement Google Analytics or similar for user insights
- **PWA Features**: Add service workers for offline capabilities
- **Internationalization**: Multi-language support
- **Advanced Animations**: 3D elements and complex interactions

## 👥 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

**E-Cell Rajalakshmi Engineering College**
- Email: ecell@rajalakshmi.edu.in
- Phone: +91 98765 43210
- Address: Thandalam, Chennai - 602 105

---

**Empowering Innovators, Igniting Startups** 🚀

Built with ❤️ by the E-Cell REC Team+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
