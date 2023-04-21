import './App.css';

function App() {
  return (
    <div className="App">
      <div class="background-container">    
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt="" />
        <div class="stars"></div>
        <div class="twinkling"></div>
        <div class="clouds"></div>
      </div>
      <div className="fact">
        <h1>The Apollo Guidance Computer had only 2048 words memory at 15 bits per word,</h1>
        <h1>with a sixteenth for parity.</h1>
        <h1>It flew to the moon with less than <i>4 kilobytes</i> of RAM!</h1>
      </div>
    </div>
  );
}

export default App;
