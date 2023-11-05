import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';



const Card = ({location}) => {


    return (
        <div className="container mt-6">
        <div className="card lg:card-side bg-neutral shadow-xl">
            <figure ><img className="object-contain"   src="https://m.media-amazon.com/images/I/61gzh2qYCoL._UF894,1000_QL80_.jpg" alt="Album"/></figure>
            
             <div className="card-body w-11/12">
                <h4>{location.location}</h4>
               <h2 className="card-title font-bold">{location.title}</h2>
                <h3 className="font-bold">{location.date}</h3>
                <p>{location.description}</p>

                <div className='cad-actions absolute top-2 right-2 flex space-x-3'>
                    <Link to={`/location/edit/${location._id}`}>
                        <AiOutlineEdit className="text-2xl text-secondary" />
                    </Link> 

                    <Link to={`/location/delete/${location._id}`}>
                        <MdOutlineDelete className="text-2xl text-accent" />
                    </Link>     
                </div>

                <div className="card-actions justify-end">
                   <Link to={`/location/show/${location._id}`}>
                <button className="btn btn-secondary text-lg">Read</button>
                </Link> 
                
                </div>
            </div>
        </div>

        </div>

    )

}

export default Card