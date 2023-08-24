import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid p-0">
        <div className="weather-container w-75 mt-3 mx-auto rounded">
          <Weather />
          <footer>
            <p>This project was coded by Hanna Tkach and is{" "}
              <a href="https://github.com/curiouscauliflower/react-weather-application.git"
                 target="_blank"
                 rel="noreferrer noopener nofollow">open-sourced on GitHub
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
