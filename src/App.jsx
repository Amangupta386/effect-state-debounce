import './App.css'
import CustomRoutes from './routes/customRoutes'
import { Link } from 'react-router-dom'

function App() {

  return (
    <div className='outer-pokedex'>
        <Link to="/">  <h1 className="pokedex-heading">Pokedex</h1> </Link>
      <CustomRoutes />
    </div>
  )
}

export default App
