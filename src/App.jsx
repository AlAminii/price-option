

import { LineChart } from 'recharts'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import PriceOptions from './PriceOptions/PriceOptions'
function App() {
  return (
    <>
   <NavBar></NavBar>
   <PriceOptions></PriceOptions>
   <LineChart></LineChart>
    </>
  )
}

export default App
