import './App.css';

function App() {
  const url_staging = process.env.REACT_APP_URL;

  return (
    <div className="App">
      <iframe
        title="iframe-axa"
        allow="camera *;microphone *"
        width="100%"
        height="700"
        src={url_staging}
        id="co-iframe"
        name="co-iframe"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      ></iframe>
    </div>
  );
}

export default App;
