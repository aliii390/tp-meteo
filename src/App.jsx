import './App.css'
import Header from './Header'
import MeteoCard from './components/MeteoCard/MeteoCard'
import Date from './components/Date/Date'



function App() {
 

  return (
    <>
<div className="App">

<Header />

<div className="row">

<div className="col s12 m6 push-m3">

<div className="weather card blue-grey darken-1">
   <MeteoCard /> 
   <div className="card-action">
    <Date />
    </div>
   </div>

   </div>

  </div>


</div>


    </>
  )
}

export default App
