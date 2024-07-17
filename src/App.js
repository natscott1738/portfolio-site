import CarCard from "./CarCard"

const carsList = [
  {
    id: 0,
    name: "Lamborghini",
    rating: null,
    category: "Fast"
  },
  
  {
    id: 1,
    name: "G-Wagon",
    rating: null,
    category: "Classy"
  },
  
  {
    id: 2,
    name: "Porsche",
    rating: null,
    category: "Cool"
  },
  
  {
    id: 4,
    name: "Wrangler",
    rating: null,
    category: "Off-road"
  },
] 


function App() {
  return (
    <div>
      <h1>Favourite Cars List</h1>
      { carsList.map( c => <CarCard car={c} />) }
    </div>
  );
}

export default App;
