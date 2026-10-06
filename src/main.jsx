import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './layouts/Layout.jsx'
import Home from './pages/Home.jsx'
import Cardapio from './pages/Cardapio.jsx'
import CardapioAlternativo from './pages/CardapioAlternativo.jsx'

import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/cardapio-alternativo" element={<CardapioAlternativo />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>
)
