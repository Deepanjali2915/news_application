"use client";
import Header from "./header.js";
import Search from "./search.js";
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <div class="container-fluid" >  
      <Header/>
      <Search/>
      </div>
  )
}
