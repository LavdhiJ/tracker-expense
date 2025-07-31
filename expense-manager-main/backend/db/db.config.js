const mongoose = require('mongoose')
require('dotenv').config()

async function dbConnect(){
    
  
    
    try { 
        await mongoose.connect(connectionString)
        console.log("Database Connected.");
    } catch (error) {
        console.log("Database error: " + error);
    }
}

module.exports = dbConnect