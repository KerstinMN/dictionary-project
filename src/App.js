import "./App.css";
import logo from "./logo-kmn.JPG";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <p>
            This project was coded by Kerstin Mayer-Nelkenstock and is{" "}
            <a
              href="https://github.com/KerstinMN/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
