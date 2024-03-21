const mongoose = require("mongoose");

const taskShema = new mongoose.Schema({
  
  name: {
    type : String

  }, 
  description: {
    type: String
    
  }, 
  stock: {
    type : Number

  }

});

module.exports = mongoose.model("Task", taskShema);

