import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import { Article } from "./ui/components/article/Article"
import { staticRoutes, routePaths } from "./utils/routes.definitions"
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    {/*<div className="video-container">*/}
    {/*  <iframe src="https://www.youtube.com/embed/hPCotoawhk0?controls=0&autoplay=1&mute=1&playsinline=1"></iframe>*/}
    {/*</div>*/}

    {/*<div className="video-container" style={{ backgroundImage: "url(\"https://i.imgur.com/RDhxPZQ.png\")" }}></div>*/}

    <BrowserRouter>
      <Routes>
        <Route path={routePaths.get(staticRoutes.ROOT)} element={<App />} />
        <Route path={routePaths.get(staticRoutes.ARTICLES_INDEX)} element={<App />} />
        <Route path={routePaths.get(staticRoutes.ARTICLES_SHOW)} element={<Article />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
