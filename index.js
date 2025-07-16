const express = require('express')
const app = express()

//routing
//app is a method of express library
//get means it returns info
app.get('/', (req, res) => {
    res.send('home! Hellonworld')
});
app.post('/node', (req, res) => {
    res.send('this is post')
});
app.delete('/bomb', (req, res) => {
    res.send('this is delete')
});

//path parameters ie profile,users,stories
app.get('/profile/:username', (req, res) => {
    res.send('This is a path parameter' + req.params.username)
});

//query strings
app.get('/queryparams',(req, res)=>{
    res.send('my queryparams are:'+req.query.class+'and'+req.query.cohort)
})

//serving html files
app.get('/mwesigye', (req, res) => {
    res.sendFile(__dirname + '/html2/blogs.html')
});





//middle ware handles nonexistant routes
app.use((req, res) =>{
    res.status(404).send('oops page not found')
})









//always the last line
app.listen(4000, () => console.log('I am connected')) 