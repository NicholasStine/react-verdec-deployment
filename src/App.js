import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is a test of the automated Github / Vercel Deployments. The text here was set on 12/2 at 9:17 and should be crimson, underlined, and linked to google.com
        </a>
      </header>
    </div>
  );
}

export default App;
