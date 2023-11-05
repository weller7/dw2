import React, { useState, useEffect } from "react";
import BackButton from "../components/Backbutton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const DeleteLocation = () => {

   const[loading, setLoading] = useState(false)
   const navigate = useNavigate()
   const {id} = useParams()

   //make request to delete book by using its id
   const handleDeleteLocation = () => {
    setLoading(true)
    axios
        .delete(`http://localhost:3000/location/${id}`)
        .then(() => {
            setLoading(false)
            navigate('/')

        }).catch((error) =>{
            setLoading(false)
            alert("An error occurred please check console")
            console.log(error)
        })
    } 

    return(
     <>
        <Navbar />

        <section className="container flex flex-col min-h-screen">
        <div className="alert m-auto h-28 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>Are you sure you want to delete this location?</span>
            <div>
                <button onClick={handleDeleteLocation} className="btn btn-sm btn-accent">Delete</button>
               <a href="/"> <button className="btn btn-sm btn-primary">Cancel</button></a>
            </div>     
        </div>

        </section>
        <Footer />

     </>
    )

}

export default DeleteLocation