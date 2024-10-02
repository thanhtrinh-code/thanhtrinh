import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import InfoPage from './pages/info/InfoPage'
import AppLayout from './AppLayout';
import ProfessorPage from './pages/uwprofessorai/ProfessorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/info" element={<InfoPage />} />
        </Route>
        <Route path="/uw-professor-ai" element={<ProfessorPage/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
