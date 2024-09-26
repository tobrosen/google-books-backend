const Koa = require('koa');
const cors = require('@koa/cors');
const app = new Koa();

const mainRouter = require('./routes/index');
app.use(cors());
app.use(mainRouter.routes());


app.listen(process.env.PORT || 8000);