const express = require("express")
const path = require('path')

const app = express()

app.get('/', (req, res) => {
    res.send('I am a full stack dev')
})

//serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('profile/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'profile', 'build', 'index.html'))
    })
}


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
