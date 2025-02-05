import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import AuthPage from './pages/auth/AuthPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/auth' element={<AuthPage/>}>
          <Route index element={<Navigate to={'login'} replace/>}/>
          <Route path='/auth/login' element={<LoginPage/>}/>
          <Route path='/auth/register' element={<RegisterPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
