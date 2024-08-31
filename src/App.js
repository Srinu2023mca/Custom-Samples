import './App.css';
// import Sidebar from "./components/sidebar/index"
// import HamsterWheel from './components/LoadingHamster';
// import SigninNSignup from './components/LoginNSignin';
// import Page404 from './components/PageNotFound';
import Game from './components/SnakesNLadders';
import Ladder from './components/SnakesNLadders/Ladder';
function App() {

  const rungs = [
    { color: '#FF0000', height: '10px' },
    { color: '#00FF00', height: '15px' },
    { color: '#0000FF', height: '10px' },
    { color: '#FFFF00', height: '15px' },
    { color: '#FF00FF', height: '10px' },
  ];

  return (
    <div className="App">
      {/* <Sidebar/> */}
      {/* <HamsterWheel/> */}
      {/* <SigninNSignup/> */}
      {/* <Page404/> */}
      {/* <Game/> */}
      <Ladder rungs={rungs}/>

    </div>
  );
}

export default App;
