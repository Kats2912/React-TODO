import { Todo } from './screens/Todo';
import './App.css';
import Signin from './Authentication/Signin';
import Header from './components/Header';
import Home from './components/Home';
import { Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Signin/>}/>
        <Route path='/todo' element={<Todo/>}/>
      </Routes>
    </div>
  );
}

export default App;
