const mongoose = require("mongoose");
const mongoDb = async () => {
    await mongoose.connect('mongodb+srv://admin:sana1999@final-project.cgznjk9.mongodb.net/?retryWrites=true&w=majority')
        .then(() => {
            console.log("connected TO MongoDB");
        })
        .catch((error) => {
            console.error(error);
        })
}
module.exports=mongoDb;