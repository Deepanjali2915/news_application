"use client";
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import './media_query.css';
import Header from "./header.js";
import Search from "./search.js";
import Articles from "./articles.js";
import Footer from "./footer.js";


const Home = () => {
  return (
    <>
      <Header />
      <Search />
      <Articles />
      <Footer />
    </>
  )
}

export default Home;