const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect('mongodb+srv://parvathyysalin:itsme@cluster0.maf6zd1.mongodb-dev.net/assessmentDB?retryWrites=true&w=majority&appName=Cluster0'
   
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
