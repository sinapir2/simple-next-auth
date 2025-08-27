# 🇮🇷 Iranian Authentication

A modern, Persian-language authentication system built with Next.js, featuring Iranian mobile number validation and a beautiful RTL interface.

## ✨ Features

- 📱 **Iranian Mobile Validation** - Supports all Iranian mobile formats (09xxxxxxxxx, +989xxxxxxxxx, 00989xxxxxxxxx)
- 🎨 **Persian UI/UX** - Right-to-left (RTL) interface with Persian typography
- 🔐 **Session Management** - Secure localStorage-based sessions with 24-hour expiry
- 🌟 **Modern Design** - Built with shadcn/ui components and Tailwind CSS
- 🚀 **Fast & Responsive** - Optimized Next.js 15 with TypeScript
- 🎭 **Custom Fonts** - Beautiful Vazirmatn Persian font family
- 🔔 **Toast Notifications** - User-friendly feedback with Sonner

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom CSS Variables
- **UI Components:** shadcn/ui
- **Font:** Vazirmatn (Persian)
- **Icons:** Lucide React
- **Notifications:** Sonner
- **API:** randomuser.me (for demo user data)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd iran-auth-buddy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🔄 Authentication Flow

```
User visits app (/) 
    ↓
Auto-redirect to /login
    ↓
Enter Iranian phone number
    ↓
Validate format & submit
    ↓
Fetch user data from API
    ↓
Save session to localStorage
    ↓
Show success toast
    ↓
Redirect to /dashboard
    ↓
Display welcome + user info
    ↓
Logout → Clear session → Back to login
```

## 📱 Supported Mobile Formats

The system validates and normalizes Iranian mobile numbers in these formats:

- `09123456789` - Standard format
- `+989123456789` - International format
- `00989123456789` - International with country code

All formats are automatically normalized to the standard `09xxxxxxxxx` format.

## 🎨 Design System

### Colors
- **Persian Blue Gradient** - Primary buttons and accents
- **Subtle Gradients** - Background surfaces
- **Semantic Colors** - Success, error, warning states

### Typography
- **Font Family:** Vazirmatn (Complete weight range: 100-900)
- **Direction:** RTL (Right-to-Left)
- **Language:** Persian/Farsi

### Components
- **Cards** - Clean, elevated surfaces
- **Buttons** - Multiple variants (default, persian, loading, outline)
- **Inputs** - Persian-optimized form controls
- **Toasts** - Non-intrusive notifications

## 📁 Project Structure

```
iran-auth-buddy/
├── public/
│   ├── fonts/          # Vazirmatn font files
│   └── ...
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── dashboard/  # Dashboard page
│   │   ├── login/      # Login page
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home (redirects to login)
│   ├── components/
│   │   └── ui/         # shadcn/ui components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utilities and auth logic
│   ├── providers/      # React providers
│   └── index.css       # Global styles + fonts
├── components.json     # shadcn/ui configuration
├── tailwind.config.ts  # Tailwind configuration
└── next.config.js      # Next.js configuration
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for any environment-specific settings:

```env
# Add your environment variables here
# Example: API_URL=https://your-api.com
```

### Font Configuration

The project uses the Vazirmatn font family, which is configured in:
- `src/index.css` - Font-face declarations
- `tailwind.config.ts` - Tailwind font family
- `public/fonts/` - Font files

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Vazirmatn](https://github.com/rastikerdar/vazirmatn) - Persian font family
- [randomuser.me](https://randomuser.me/) - Demo user data API
- [Lucide](https://lucide.dev/) - Beautiful icons

## 📞 Support

For support, please open an issue on GitHub or contact the development team.

---

Made with ❤️ for the Iranian developer community
