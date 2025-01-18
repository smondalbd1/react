import CarList from "./CarList"
import Header from "./Header"
import Search from "./Search"

import { useState } from "react"

const Cars = [
  {
    id: 1,
    title: "Luxury Sedan",
    brand: "Mercedes",
    year: 2023,
    price: 80000,
    isPremium: true,
  },
  {
    id: 2,
    title: "Family SUV",
    brand: "Toyota",
    year: 2022,
    price: 45000,
    isPremium: false,
  },
  {
    id: 3,
    title: "Sports Car",
    brand: "Porsche",
    year: 2023,
    price: 120000,
    isPremium: true,
  },
  {
    id: 4,
    title: "Electric Hatchback",
    brand: "Nissan",
    year: 2022,
    price: 35000,
    isPremium: false,
  },
  {
    id: 5,
    title: "Luxury SUV",
    brand: "BMW",
    year: 2023,
    price: 90000,
    isPremium: true,
  },
];


function TapaScriptCars() {

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="p-7 bg-slate-100 min-h-screen">
        <Header />
        <Search searchTerm={searchTerm} onSearchCar={setSearchTerm}/>
        <CarList searchTerm={searchTerm} cars={Cars}/>
    </div>
  )
}

export default TapaScriptCars