# MySpace - Personal Dashboard

A modern personal dashboard built with React that combines task management with useful widgets including weather, dual timezone clock, and calendar functionality.

![MySpace Dashboard](/src/assets/screenshot.png) <!-- You should add a screenshot of your app here -->

## 🌟 Features

### Task Management
- Create and manage daily tasks
- Mark tasks as complete/incomplete
- Visual progress indicator for task completion
- Scrollable task list with clean UI

### Weather Widget
- Real-time weather data using OpenWeatherMap API
- Auto-detection of user's location
- Displays temperature, humidity, wind speed, and pressure
- Fallback handling for location access denial

### Time Widget
- Dual timezone display
- Configurable home and away timezones
- Uses the Intl API for accurate timezone handling
- Real-time updates

### Calendar Widget
- Monthly calendar view
- Current date highlighting
- Dynamic calendar generation
- Supports leap year calculations

### Additional Features
- Responsive design (mobile-first approach)
- Side panel for widgets on mobile view
- User settings persistence
- Clean, modern UI with Tailwind CSS
- Error boundary implementation for robust error handling

## 🛠 Technologies

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Routing**: React Router v6
- **State Management**: React Hooks
- **APIs**: 
  - OpenWeatherMap (weather data)
- **UI Components**: Material-UI Icons
- **Additional Libraries**:
  - react-circular-progressbar
  - clsx (conditional styling)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/myspace-dashboard.git
cd myspace-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_WEATHER_API_KEY=your_openweather_api_key
```

4. Start the development server:
```bash
npm run dev
```

## 🔧 Configuration

### Environment Variables
- `VITE_WEATHER_API_KEY`: Your OpenWeatherMap API key

### User Settings
Users can configure:
- Username
- Full Name
- Home timezone
- Away timezone

## 📱 Responsive Design

The dashboard is fully responsive with three main breakpoints:
- Mobile: < 768px (widgets in side panel)
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔒 Privacy Considerations

- Geolocation access is requested with user permission
- No personal data is stored on external servers
- Weather data is fetched using secure HTTPS

## 🚀 Performance Optimizations

- Lazy loading of components
- Memoization of expensive calculations
- Efficient re-rendering with proper React hooks usage
- Optimized asset loading

## 🐛 Error Handling

- Comprehensive error boundary implementation
- Graceful fallbacks for API failures
- User-friendly error messages
- Network error recovery

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenWeatherMap for weather data
- Material-UI for icons
- React community for inspiration and components

## 📫 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/myspace-dashboard](https://github.com/yourusername/myspace-dashboard)