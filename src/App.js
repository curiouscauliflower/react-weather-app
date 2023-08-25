import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid p-0">
        <div className="weather-container w-75 mt-3 mx-auto rounded">
          <Weather defaultCity="Kherson" />
          <footer>
            <p className="p-5">This project was coded by <strong>Hanna Tkach</strong> and is{" "}
              <a href="https://github.com/curiouscauliflower/react-weather-application.git"
                 target="_blank"
                 rel="noreferrer noopener nofollow">open-sourced on GitHub
              </a>
              {" "}and <a href="https://curious-cauliflower-react-weather-app.netlify.app/"
                target="_blank"
                rel="noreferrer noopener nofollow">
                hosted on Netlify
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
