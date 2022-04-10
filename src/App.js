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
          <small>Coded by Kerstin Mayer-Nelkenstock</small>
        </footer>
      </div>
    </div>
  );
}
