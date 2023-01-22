
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MessageList from './components/MessageList';
import AddMessage from './components/AddMessage';
import EditMessage from './components/EditMessage'
import MessageOne from './components/MessageOne';

function App() {
  return (
    <Router>
    <div className="container">
      <div className="row mt-2">
        <div className="col">
          <Routes>
            <Route path="/"
              element={<MessageList />}
            />
            <Route path="/one/:id"
              element={<MessageOne />}
            />
            <Route path="/add"
              element={<AddMessage />}
            />
            <Route path="/edit/:id"
              element={<EditMessage />}
            />
          </Routes>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
