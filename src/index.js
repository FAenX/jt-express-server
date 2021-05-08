import express from 'express'
import dotenv from 'dotenv'
import "core-js/stable";
import "regenerator-runtime/runtime";
import createError from 'http-errors'
import peopleRoutes from './routes/people'

dotenv.config()

const app = express()
const port = process.env.PORT ? process.env.PORT : 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());


app.use('/', peopleRoutes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404, 'oops! Requested page does not exist'));
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})