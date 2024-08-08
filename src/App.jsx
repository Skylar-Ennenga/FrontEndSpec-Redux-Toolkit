import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Exercises from './components/Exercises';
import Home from './components/Home';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
