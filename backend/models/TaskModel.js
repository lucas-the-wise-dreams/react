const mongoose = require("mongoose");

const taskShema = new mongoose.Schema({
  
  name: {
    type : String, 
    required: true,
  }, 
  description: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model("Task", taskShema);

