import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/header"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Error from "./pages/Error"
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
