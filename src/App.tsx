import TableBasic from './Table';
import {
  Route,
  Routes,
} from 'react-router-dom';
import Popup from './Popup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={
            <TableBasic />
          } />
          <Route path="popup" element={
            <Popup />
          } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
