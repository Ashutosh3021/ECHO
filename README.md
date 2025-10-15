# 🪞 Echo - Minimalist Self-Journaling PWA

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Made with HTML5](https://img.shields.io/badge/Made%20with-HTML5-E34F26?logo=html5)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> A minimalist, offline-capable self-journaling Progressive Web App for daily reflection, task management, and goal tracking.

![Echo Banner](https://via.placeholder.com/800x200/0a0a0a/ffffff?text=Echo+-+Daily+Reflection+%26+Journaling)

---

## 📖 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🌟 Overview

**Echo** is a minimalist self-journaling web application designed to help you reflect on your day through meaningful questions, manage daily tasks, track goals, and visualize your progress—all while working completely offline.

### Purpose

To encourage daily self-reflection, mindfulness, and accountability by:
- Asking three introspective questions each evening
- Managing daily to-do lists
- Tracking weekly and monthly goals
- Visualizing progress through an interactive calendar
- Sending timely notifications to maintain consistency

---

## ✨ Features

### 🌙 **Night Journal**
- Three thoughtful reflection questions:
  1. What did I do today that truly mattered?
  2. What weight am I carrying that I don't need to?
  3. If tomorrow didn't exist, would I be proud of myself today? (Yes/No with reasoning)
- Auto-saves entries with timestamps
- Loads previous entries automatically

### ✅ **To-Do List**
- Quick task entry with Enter key support
- Check off completed tasks
- Delete individual tasks
- Clear all completed tasks at once
- Real-time progress tracking

### 📅 **Interactive Calendar**
- Color-coded days:
  - 🟢 Green = Journal completed
  - 🔵 Blue = To-Do list created
  - 🔴 Red = Missed both
  - 🟡 Yellow border = Today
  - 🎯 Target icon = Goal deadline
- Click any date to view past entries
- Navigate between months
- See goal deadlines marked on calendar

### 🎯 **Goal Tracker**
- Set weekly and monthly goals
- Assign deadlines to goals
- Mark goals as complete
- Visual deadline markers on calendar
- Automatic deadline notifications

### 🔔 **Smart Notifications**
- Morning reminder (7 AM) - Plan your day
- Evening reminder (9 PM) - Reflect on your day
- Goal deadline alerts
- Works even when the tab is closed

### 🎨 **Design**
- Minimalist dark mode by default
- Light mode toggle
- Fully responsive (mobile-first design)
- Bottom navigation on mobile
- Hamburger menu for settings
- Smooth animations and transitions

### 📴 **Offline Support**
- Works completely offline
- All data stored locally (localStorage)
- Installable as a Progressive Web App
- No external dependencies (except Font Awesome icons)

---

## 🚀 Demo

### Desktop View
- Clean, spacious layout with top navigation
- Optimal for detailed journaling

### Mobile View
- Bottom navigation bar (like Instagram/WhatsApp)
- Hamburger menu for settings
- Touch-optimized interface
- Circular calendar design

---

## 💾 Installation

### Option 1: Direct Use
1. Download the `index.html` file
2. Open it in any modern web browser
3. That's it! The app works immediately

### Option 2: Install as PWA
1. Open the app in a supported browser (Chrome, Edge, Safari)
2. Click the "Install" button in the browser's address bar
3. The app will be installed as a standalone application

### Option 3: Local Development
```bash
# Clone or download the repository
git clone https://github.com/yourusername/echo-journal.git

# Navigate to the directory
cd echo-journal

# Open with a local server (optional)
# Using Python 3
python -m http.server 8000

# Or using Node.js
npx serve

# Open http://localhost:8000 in your browser
```

---

## 📱 Usage

### First Time Setup
1. **Enable Notifications**: Click the bell icon to allow browser notifications
2. **Choose Theme**: Toggle between light and dark mode
3. **Start Journaling**: Begin with your first evening reflection

### Daily Workflow

#### Morning (7 AM)
- Receive notification: "Good morning! Plan your day with Echo"
- Open the **To-Do** tab
- Add tasks for the day

#### Throughout the Day
- Check off completed tasks
- Track your progress

#### Evening (9 PM)
- Receive notification: "Time to reflect"
- Open the **Night Journal** tab
- Answer the three reflection questions
- Save your journal entry

#### Weekly/Monthly
- Set goals in the **Goals** tab
- Assign deadlines
- Receive notifications when deadlines arrive
- Mark goals as complete

### Calendar Review
- Navigate to the **Calendar** tab
- See your consistency at a glance
- Click any date to review past entries
- Identify patterns and track progress

---

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS variables
- **Vanilla JavaScript** - No frameworks or libraries

### APIs Used
- **localStorage API** - Data persistence
- **Notification API** - Push notifications
- **Service Worker API** - Offline functionality (PWA)

### External Resources
- **Font Awesome 6.4.0** - Icons (only external dependency)

---

## 📁 Project Structure

```
echo-journal/
│
├── index.html          # Main application file (all-in-one)
├── README.md           # This file
├── LICENSE             # MIT License
│
└── (Optional PWA structure if separated)
    ├── manifest.json   # PWA manifest
    ├── sw.js           # Service worker
    ├── styles.css      # Separated CSS
    ├── script.js       # Separated JavaScript
    └── icons/          # App icons
```

**Note**: The current implementation is a single HTML file containing all CSS and JavaScript for maximum portability.

---

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | 90+     | ✅ Full |
| Edge    | 90+     | ✅ Full |
| Firefox | 88+     | ✅ Full |
| Safari  | 14+     | ✅ Full |
| Opera   | 76+     | ✅ Full |

### Required Features
- localStorage support
- Notification API support
- ES6+ JavaScript support
- CSS Grid and Flexbox

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Reporting Bugs
1. Check if the bug has already been reported
2. Open a new issue with detailed information:
   - Browser and version
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

### Suggesting Features
1. Open an issue with the `enhancement` label
2. Describe the feature and its benefits
3. Provide examples or mockups if possible

### Pull Requests
1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Test on multiple browsers
- Ensure mobile responsiveness
- Update documentation as needed
- Keep the single-file structure for portability

---

## 📋 Roadmap

### Planned Features
- [ ] Export journal entries as PDF/TXT
- [ ] Mood tracking with emoji ratings
- [ ] Weekly reflection summaries
- [ ] Habit tracking integration
- [ ] Data backup and restore
- [ ] Cloud sync (optional)
- [ ] Multiple journal templates
- [ ] Dark/Light mode scheduling
- [ ] Custom notification times
- [ ] Statistics and insights dashboard

---

## 🐛 Known Issues

- Notifications require manual permission on first use
- localStorage has size limitations (~5-10MB depending on browser)
- Service worker requires HTTPS in production (except localhost)

---

## 📄 License

This project is licensed under the **MIT License** - see below for details:

```
MIT License

Copyright (c) 2025 Echo Journal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### What This Means
✅ Commercial use allowed  
✅ Modification allowed  
✅ Distribution allowed  
✅ Private use allowed  
❌ No liability  
❌ No warranty  

---

## 💡 Inspiration

Echo was created to address the need for a simple, privacy-focused journaling tool that:
- Works completely offline
- Respects user privacy (no data collection)
- Encourages meaningful reflection
- Requires no account or login
- Is accessible on any device

---

## 🙏 Acknowledgments

- Inspired by minimalist design principles
- Font Awesome for beautiful icons
- The open-source community for continuous inspiration

---

## 📞 Contact

- **Project Link**: [https://github.com/yourusername/echo-journal](https://github.com/yourusername/echo-journal)
- **Report Issues**: [https://github.com/yourusername/echo-journal/issues](https://github.com/yourusername/echo-journal/issues)
- **Discussions**: [https://github.com/yourusername/echo-journal/discussions](https://github.com/yourusername/echo-journal/discussions)

---

## ⭐ Show Your Support

If you find Echo helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🔀 Contributing code
- 📢 Sharing with others

---

<div align="center">

**Made with ❤️ for mindful reflection**

*"Take a moment to pause, reflect, and grow."*

</div>
