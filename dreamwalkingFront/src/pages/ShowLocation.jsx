import React, { useEffect, useState } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import BackButton from "../components/Backbutton";
import Spinner from "../components/Spinner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const ShowLocation = () => {

    const [location, setLocation] = useState({})
    const[loading, setLoading] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        setLoading(true)
        axios
            .get(`http://localhost:3000/location/${id}`)
            .then((response) => {
                setLocation(response.data)
                setLoading(false)

            })

            .catch((error) => {
                console.log(error)
                setLoading(false)
            })
 }, [])



    return(
        <>
            <Navbar />
                
            <div className="hero h-[76vh] bg-accent mb-8">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                    <h1 className="text-6xl font-bold">{location.title}</h1>
                    <p className="py-6 text-2xl">19 October 1989</p>
                    </div>
                </div>
            </div>

            <section className="container">


                {loading ? (
                    <Spinner />
                ) : (
                    <>
                    {/* <div className="flex flex-col border-2 border-accent rounded-xl w-fit p-4">
                        <div className="my-4">
                            <span className="text-xl mr-4 text-white">Id</span>
                            <span>{location._id}</span>
                        </div>
                    </div> */}
                        
                        <div className="grid grid-cols-2 gap-7 col-auto	">
                             <div>{location.description}</div>
                             <div><figure ><img className="object-contain"   src="https://m.media-amazon.com/images/I/61gzh2qYCoL._UF894,1000_QL80_.jpg" alt="Album"/></figure>
                            </div>


                        </div>
                
                </>
                )
            }
            </section>
            <BackButton />
            <Footer />
        </>
    )

}

export default ShowLocation