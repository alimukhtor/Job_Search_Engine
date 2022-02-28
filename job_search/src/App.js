import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeSearch from './components/HomeSearch';
import CompanyDetails from './components/CompanyDetails';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<HomeSearch />} />
      <Route path="/:companyDetail" element={<CompanyDetails />} />
      {/* <Route path="/favorites" element={<FavoriteJobs />} /> */}
    </Routes>
  </BrowserRouter>
 </div>
  );
}

export default App;
