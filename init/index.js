//logic of init file(helps to initialize database)

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js"); //require model

const MONGO_URL = "mongodb://127.0.0.1:27017/travelguide";
main()
.then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

//initialise DB
const initDB = async () =>{
   await Listing.deleteMany({});  //First delete already existing data
   initData.data = initData.data.map((obj)=>({
    ...obj,
    owner:"6a722244d0e997f4cfeb4bed",
}));
   await Listing.insertMany(initData.data);
   console.log("data was initialized");
};

initDB();

