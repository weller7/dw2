import React, { useState } from "react";
import BackButton from "../components/Backbutton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CreateLocation = () => {

    const[location, setLocation] = useState("")
    const[title, setTitle]  = useState("")
    const[description, setDescription] = useState("")
    const[image, setImage] = useState("")
    const[loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleSaveLocation = () =>{

        const data = {
            location,
            title,
            description,
            image,
        }



        setLoading(true)
        axios
            .post("http://localhost:3000/location", data)
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

    const uploadImage =() => {
        const formData = new FormData()
        formData.append("file", image)
        formData.append("upload_preset", "ml_default")
    

    axios.post(
        "http://localhost:3000/location",
        formData,
        { 
            headers: { "Content-Type": "multipart/form-data" }})
    .then((response) =>{
        console.log(error.response.data)
    })
    .catch((error) => {
        // alert("An error ocurred. Please check console")
     console.error(error.response.data)
    })
 }


    return(
        <>
            <Navbar />
            <div className="hero h-[76vh] bg-accent mb-8">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                    <h1 className="text-6xl font-bold">Create location</h1>
                    <p className="py-6 text-2xl">Enter the details in the form.</p>
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

                                <div className="form-control ">
                                <span className="label-text" >Image</span>

                                <input
                                    type="file"
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                                </div>


                                <div className="form-control mt-6">
                                <button className="btn btn-secondary" onClick={() => { handleSaveLocation(); uploadImage();}}>Create Location</button>
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

export default CreateLocation