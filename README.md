# MySpace - Personal Dashboard

A modern personal dashboard built with React that combines task management with useful widgets including weather, dual timezone clock, music playlist, and calendar functionality.

![MySpace Dashboard](/screenshot.png) <!-- You should add a screenshot of your app here -->

## 🌟 Features

### Task Management

- Create and manage daily tasks
- Mark tasks as complete/incomplete
- Visual progress indicator for task completion
- Scrollable task list with clean UI
- Clear all completed tasks from list

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

### Spotify Playlist Widget

- Links app to User Spotify account using PKCE extension
- Fetches and displays a random playlist

### Additional Features

- Responsive design (mobile-first approach)
- Side panel for widgets on mobile view
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
  - Spotify API
- **UI Components**: Material-UI Icons
- **Additional Libraries**:
  - react-circular-progressbar
  - clsx (conditional styling)

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/Andrea-Ozuem/myspace-dashboard.git
cd myspace-dashboard
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```env
VITE_WEATHER_API_KEY=your_openweather_api_key
VITE_SPOTIFY_CLIENT_ID=spotify_client_id
VITE_SPOTIFY_CLIENT_SECRET=spotify_client_secret
VITE_REDIRECT_URI=spotify_redirect_uri
```

4. Start the development server:

```bash
npm run dev
```

## 🔧 Configuration

### Environment Variables

- `VITE_WEATHER_API_KEY`: Your OpenWeatherMap API key
- `VITE_SPOTIFY_CLIENT_ID`: Spotify Client Id
- `VITE_SPOTIFY_CLIENT_SECRET`: Spotify Client Secret
- `VITE_REDIRECT_URI`: Redirect URI for Spotify

## Improvements

### 🚀 Performance Optimizations

- Memoization of expensive calculations
- Efficient re-rendering with proper React hooks usage

### 🐛 Error Handling

- Comprehensive error boundary implementation
- Graceful fallbacks for API failures
- User-friendly error messages

## 🙏 Acknowledgments

- OpenWeatherMap for weather data
- Material-UI for icons
- React community for inspiration and components

## 📫 Contact

Andrea Ozuem - [@globalAndrea_](https://twitter.com/globalAndrea_) - andreaozuem2021@gmail.com

[Project Link](https://my-space-refactored.netlify.app/)
