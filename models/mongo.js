var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/demoDb');
var mongoSchema =   mongoose.Schema;
var accountSchema  = {
    "firstName" : String,
    "lastName" : String,
    "email": String,
    "dateOfBirth"
};
module.exports = mongoose.model('account',accountSchema);;
