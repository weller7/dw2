import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Footer from "../components/Footer";
import axios from 'axios';


const Home = () => {

  const [location, setLocation] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get("http://localhost:3000/location")
      .then((response) => {
        setLocation(response.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, []);

  

  return (

    <>
      <Navbar />
      <section>
      {location.map((item) => (
          <Card key={item._id} location={item} />
        ))}
      </section>
      <Footer />

    </>

  )
}

export default Home