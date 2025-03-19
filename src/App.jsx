import "./styles/App.css";
import Header from "./Header";
import MeteoCard from "./components/MeteoCard/MeteoCard.jsx";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="row">
          <div className="col s12 m6 push-m3">
            <div className="weather card blue-grey darken-1">
              <MeteoCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
