import logo from './logo.svg';
import './App.css';

function App() {
  const isUSLOG_1 = true;
  const isUSLOG_2 = false;
  check(isUSLOG_1);
  check(isUSLOG_2);

}

function check(value) {
  if (value) return <h1>hello user</h1>;
  else return <h1>login now</h1>;
}
export default App;
