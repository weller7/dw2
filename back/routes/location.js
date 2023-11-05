const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const Location = require("../models/Location");
const cloudinary = require("../middleware/cloudinary");

// const { ensureAuth, ensureGuest } = require("../middleware/auth");



//Add new location
router.post('/', upload.single("file"), async (request, response) => {

    try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
    
        const newLocation = {
        location: request.body.location,
        title: request.body.title,
        description: request.body.description,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        };
  
        const location = await Location.create(newLocation);
  
      return response.status(201).send(location);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
});


//get all locations
router.get("/", async (request, response) => {
    try {
        const locations = await Location.find({});

        return response.status(200).json({
            count: locations.length,
            data: locations
        });
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
        
    }
});

//get one locaiton
router.get("/:id", async(request, response) =>{
    try {

        const {id} = request.params

        const location = await Location.findById(id);

        return response.status(200).json(location)
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

//edit location
router.put("/:id", async (request, response) => {
    try {
    
    const {id} = request.params

    const result = await Location.findByIdAndUpdate(id, request.body);

    if(!result){
        return response.status(400).json({message: "Location not found"})
    }
        return response.status(200).send({message: "Location updated"})

        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})

//delete location
router.delete("/:id", async (request, response) => {
    try {

        const {id} = request.params

        const result = await Location.findByIdAndDelete(id)

        if(!result){
            return response.status(404).json({message: "Location not found"})
        }

        return response.status(200).send({message: "Location deleted"})
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }    
})


module.exports = router;