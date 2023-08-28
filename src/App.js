import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid p-0">
              <div className="leaves">
          <div class="leaf1">🍁</div>
          <div class="leaf2">🍁</div>
          <div class="leaf3">🍁</div>
          <div class="leaf4">🍁</div>
          <div class="leaf6">🍁</div>
          <div class="leaf7">🍁</div>
          <div class="leaf8">🍁</div>
          <div class="leaf9">🍁</div>
          <div class="leaf10">🍁</div>
          <div class="leaf11">🍁</div>
      </div>
        <div className="weather-container w-75 pt-3 mx-auto">
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
