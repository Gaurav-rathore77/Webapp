import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Service2 from './pages/Service2.jsx'
import Service from './pages/Service'
import Banner from './pages/Banner.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Banner/> */}
    {/* <div>
      <h1 style={{ textAlign: "center" }}>Autoplay Slider Example</h1>
      <Service2 />
    </div> */}
    {/* <Service /> */}
  </StrictMode>,
)
