import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageOne, PageTwo } from "./components/pages";
import MainPage from './MainPage';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<MainPage />} >
            <Route index element={<div>No page is selected.</div> } />
            <Route path="one" element={<PageOne />} />
            <Route path="two" element={<PageTwo />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;