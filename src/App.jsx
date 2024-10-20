import { MyProvider } from './context/UserDataContext'
import  {Home}  from '../src/pages/home/Home'
import { Session } from './pages/session/Session'
import { ToDoList } from './components/ToDoList'; 
import {BrowserRouter,Route,Routes } from 'react-router-dom'
import { Navbar } from './pages/home/Navbar';

function App() {

  return (
    <>
    <MyProvider>
      <BrowserRouter>
      <Navbar /> 
      <div className="container mt-5">
            <Routes>
            <Route index path='/' element={ <Home />} />
            <Route path='/session' element={ <Session />} />
            <Route path='/tasks' element={ <ToDoList />} />
            </Routes>
      </div>
      </BrowserRouter>
  </MyProvider>
    </>
  )
}

export default App
