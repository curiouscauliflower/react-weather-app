import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid p-0">
        <div className="weather-container w-75 pt-3 mx-auto">
          <Weather defaultCity="Kherson" />
          <footer>
            <p className="p-5 w-75 mx-auto">This project was coded by <a href="https://www.linkedin.com/in/hanna-tkach-31a32b277/" target="_blank"
                rel="noreferrer noopener">Hanna Tkach</a> and is{" "}
              <a href="https://github.com/curiouscauliflower/react-weather-application.git"
                 target="_blank"
                 rel="noreferrer noopener">open-sourced on GitHub
              </a>
              {" "}and <a href="https://curious-cauliflower-react-weather-app.netlify.app/"
                target="_blank"
                rel="noreferrer noopener">
                hosted on Netlify
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
