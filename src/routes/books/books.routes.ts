const Router = require('koa-router');
import type { Context } from 'koa';

const router = new Router();


router.get("/books", async (ctx: Context) => {
    const query = ctx.query;
    const nameQuery = query.name;
    console.log(nameQuery)
    if(!nameQuery) {
        ctx.status = 400;
        ctx.body = {
            error: "Invalid query"
        }
        return;
    }
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${nameQuery}`);
    const data = await res.json();
    ctx.body = data;
})

module.exports = router;    