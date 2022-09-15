
const mongoose = require('mongoose');
const port = 3000
const app = require('./app');
mongoose.connect('mongodb://localhost/marioData', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },()=>{
    console.log("Connection Established");
});

// mongoose.connection.once('open', () =>{
//     console.log('connection established')
// }).on('connectionError',(err) =>{
//     console.log(err);
// })

app.listen(port, () => console.log(`App listening on port ${port}!`));