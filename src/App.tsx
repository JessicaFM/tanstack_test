import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TanStackQuery from './components/TanstackQuery';
import Layout from './components/Layout';
import Home from './components/Home';

export default function App() {
  return(
    <>
      <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/query" element={<TanStackQuery />} />
            </Route>
          </Routes>
      </Router>
    </>
  )
}
