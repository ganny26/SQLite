const path = require('path')
const express = require('express')
const app = express()

app.listen(process.env.PORT,()=>console.log('server running'))