import React, { useState, useEffect } from "react";
import BackButton from "../components/Backbutton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EditLocation = () => {

    const[location, setLocation] = useState("")
    const[title, setTitle]  = useState("")
    const[description, setDescription] = useState("")
    const[loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const {id} = useParams()


    useEffect(()=> {
        setLoading(true)
        axios.get(`http://localhost:3000/location/${id}`)
        .then((response) => {
            setLocation(response.data.location)
            setDescription(response.data.description)
            setTitle(response.data.title)
            setLoading(false)

        }).catch ((error)=> {
            setLoading(false)
            alert("An error ocurred please check console")
            console.log(error)
        })
    }, [])

const handleEditLocation = () =>{

        const data = {
            location,
            title,
            description,
        }

        setLoading(true)
        axios
            .put(`http://localhost:3000/location/${id}`, data)
            .then(() => {
                setLoading(false)
                navigate("/")
            })
            .catch((error) => {
                setLoading(false)
                // alert("An error ocurred. Please check console")
                console.log(error)
            })

    }

    return(
        <>
            <Navbar />
            <div className="hero h-[76vh] bg-accent mb-8">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                    <h1 className="text-6xl font-bold">Edit location</h1>
                    <p className="py-6 text-2xl">Edit your location here.</p>
                    </div>
                </div>
            </div>

            <section className="container">
                {loading ? <Spinner /> : ""}

            
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        
                    <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-neutral">
                            <form className="card-body">
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text" placeholder="location" className="input input-bordered" required 
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                    />

                                </div>

                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" placeholder="Title" className="input input-bordered" required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                />
                                </div>

                                <div className="form-control ">
                                    
                                <label className="label" style={{ display: 'block', marginBottom: '8px'}}>

                                <span className="label-text" >Description</span>
                                
                                <textarea className="input input-bordered" required
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                style={{ display: 'block', width: '100%', padding: '4px', boxSizing: 'border-box' }}

                                />
                                </label>
                                </div>

                                <div className="form-control mt-6">
                                <button className="btn btn-secondary" onClick={handleEditLocation}>Create Location</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>

            <BackButton />
            <Footer />
        </>
    )

}

export default EditLocation