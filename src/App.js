import './App.scss';
import Router from './routes';
import LoginModal from './components/LoginModal';

const loggedIn = localStorage.getItem('token');

function App() {
  return (
    <div className="App">
      {!loggedIn && <>
        <LoginModal></LoginModal>
      </>}
      {loggedIn && <Router />}

    </div>
  );
}

export default App;
