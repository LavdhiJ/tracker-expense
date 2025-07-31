const mongoose = require('mongoose')
require('dotenv').config()

async function dbConnect(){
    
    const connectionString = "mongodb+srv://lavdhij:4icRjwKPucihb4dY@tracker-expense.lvh4btb.mongodb.net/tracker-expense?retryWrites=true&w=majority"
    try { 
        await mongoose.connect(connectionString)
        console.log("Database Connected.");
    } catch (error) {
        console.log("Database error: " + error);
    }
}

module.exports = dbConnect