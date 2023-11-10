import React, { useState } from "react";
import BackButton from "../components/Backbutton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CreateLocation = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [location, title, description, file] = e.target;
    console.log(e);

    try {
      await axios.postForm("http://localhost:3000/location", {
        location: location.value,
        title: title.value,
        description: description.value,
        file: file.files[0],
      });

      navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
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
              <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Location</span>
                  </label>
                  <input
                    type="text"
                    placeholder="location"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Title"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control ">
                  <label
                    className="label"
                    style={{ display: "block", marginBottom: "8px" }}
                  >
                    <span className="label-text">Description</span>

                    <textarea
                      className="input input-bordered"
                      required
                      style={{
                        display: "block",
                        width: "100%",
                        padding: "4px",
                        boxSizing: "border-box",
                      }}
                    />
                  </label>
                </div>

                <div className="form-control ">
                  <span className="label-text">Image</span>

                  <input type="file" />
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-secondary" type="submit">
                    Create Location
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <BackButton />
      <Footer />
    </>
  );
};

export default CreateLocation;
