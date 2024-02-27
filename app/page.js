"use client";
import Header from "./header.js";
import Search from "./search.js";
import News from "./news.js";

import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'
import './media_query.css'
export default function Home() {
  return (
    <>  
      <Header/>
      <Search/>
      <News/>
      </>
  )
}
