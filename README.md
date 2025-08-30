# 🔥 Wildfire Tracker

A real-time wildfire tracking application built with React that displays active wildfire events on an interactive map using NASA's Earth Observatory Natural Event Tracker (EONET) API.

![Wildfire Tracker](https://img.shields.io/badge/React-17.0.1-blue)
![Google Maps](https://img.shields.io/badge/Google%20Maps-API-green)
![NASA API](https://img.shields.io/badge/NASA-EONET-orange)

## 🌟 Features

- **Real-time Wildfire Data**: Fetches live wildfire events from NASA's EONET API
- **Interactive Map**: Google Maps integration with custom markers for wildfire locations
- **Responsive Design**: Fully responsive interface that works on desktop and mobile
- **Animated UI**: Beautiful fire-themed animations and gradient effects
- **Fallback System**: Automatic fallback to mock data if NASA API is unavailable
- **Auto-dismiss Errors**: Automatically handles Google Maps billing popup errors

## 🚀 Demo

The application displays:
- Active wildfire locations as markers on the map
- Event details when clicking on markers
- Real-time status indicators
- Fire count and data source information

## 🛠️ Technologies Used

- **React** (17.0.1) - Frontend framework
- **Google Maps React** - Interactive map component
- **NASA EONET API** - Real-time natural event data
- **Iconify React** - Fire alert icons
- **CSS3** - Custom animations and styling

## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js (v14 or higher)
- npm or yarn package manager
- Google Maps API key (for map functionality)
- NASA API key (optional, has fallback)

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd wildfire-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API Keys**
   
   The application includes pre-configured API keys, but for production use, you should:
   
   - **Google Maps API**: Replace the key in `src/components/Map.js`
   - **NASA API**: Replace the key in `src/App.js`
   
   ```javascript
   // In Map.js
   bootstrapURLKeys={{ 
       key: 'YOUR_GOOGLE_MAPS_API_KEY',
       libraries: ['places']
   }}
   
   // In App.js
   const NASA_API_KEY = 'YOUR_NASA_API_KEY'
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
wildfire-tracker/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.js          # Animated header component
│   │   ├── Map.js             # Main map component with Google Maps
│   │   ├── LocationMarker.js  # Wildfire marker component
│   │   ├── LocationInfoBox.js # Info popup component
│   │   ├── Loader.js          # Loading spinner component
│   │   └── spinner.gif        # Loading animation
│   ├── App.js                 # Main application component
│   ├── index.js               # Application entry point
│   └── index.css              # Global styles and animations
├── package.json
└── README.md
```

## 🎯 Key Components

### App.js
- Fetches wildfire data from NASA EONET API
- Implements fallback mechanism for API failures
- Manages loading states

### Map.js
- Renders Google Maps with wildfire markers
- Handles map interactions and styling
- Auto-dismisses Google Maps error popups
- Displays real-time status information

### Header.js
- Animated header with fire icon
- Gradient background effects
- NASA branding

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (irreversible)

## 🌍 API Information

### NASA EONET API
- **Base URL**: `https://eonet.sci.gsfc.nasa.gov/api/v2.1/events`
- **Documentation**: [NASA EONET API Docs](https://eonet.sci.gsfc.nasa.gov/docs/v2.1)
- **Rate Limiting**: Generally open, but API key recommended for higher limits

### Google Maps API
- **Required for**: Map rendering and interactions
- **Setup**: Enable Maps JavaScript API in Google Cloud Console
- **Billing**: Required for production use

## 🎨 Styling Features

- **Animated fire icon** with flickering and glow effects
- **Gradient header** with shifting colors
- **Responsive design** for all screen sizes
- **Dark theme** map overlay information
- **Custom map styling** with disabled POI labels

## 🚨 Error Handling

The application includes robust error handling:

1. **NASA API Failures**: Automatic fallback to realistic mock data
2. **Google Maps Errors**: Auto-dismissal of billing popup messages
3. **Network Issues**: Loading states and error messaging
4. **Missing Data**: Graceful degradation with fallback content

## 🔒 Security Notes

- API keys are exposed in the frontend (normal for client-side apps)
- For production, consider implementing a backend proxy for sensitive APIs
- Google Maps API key should be restricted by domain/IP

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you encounter any issues or have questions:

1. Check the browser console for error messages
2. Verify your API keys are correctly configured
3. Ensure you have a stable internet connection
4. Check NASA EONET API status at their official documentation

## 🙏 Acknowledgments

- **NASA** for providing the EONET API for natural event tracking
- **Google Maps** for mapping services
- **React community** for the excellent ecosystem
- **Iconify** for the beautiful fire icons

---

**Note**: This application is for educational and informational purposes. For official wildfire information, please consult your local emergency services and official meteorological agencies.
