import logo from './logo.svg';
import './App.css';
import Info from './components/Info.js';
import flowchart from './flowchart.png';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This webpage is running on AWS Cloudfront 😊
        </p>
      </header>
      <br/>
      <h1>Overview</h1>
      <img src={flowchart} className='img' alt='AWS Process' />
      <div className='wrapper'>
      <Info/>
      </div>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
