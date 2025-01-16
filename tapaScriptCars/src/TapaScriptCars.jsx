import CarList from "./CarList"
import Header from "./Header"
import Search from "./Search"

function TapaScriptCars() {
  return (
    <div className="p-7 bg-slate-100 min-h-screen">
        <Header />
        <Search />
        <CarList />
    </div>
  )
}

export default TapaScriptCars