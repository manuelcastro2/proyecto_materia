const express = require('express')
const cors = require('cors')
const facturaRouter = require('./routers/facturasRouter')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/factura', facturaRouter);

const PORT = process.env.PORT || 3222;
app.listen(PORT);
