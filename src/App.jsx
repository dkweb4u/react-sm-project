import { useState } from "react";
import { Navbar } from "./components/Navbar"
import { Navboard } from "./components/Navboard";

export default function App(){
  const [category,setCategory] = useState('general');
  return (
    <>
  <Navbar setCategory={setCategory} />
  <Navboard category={category} />
  </>
  );
}