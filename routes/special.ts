import Router, { RouterContext } from "koa-router";
import { basicAuth } from '../controllers/auth'
const router = new Router({prefix: '/api/v1'});
// Just for testing
router.get('/', async(ctx: RouterContext, next: any) => {
 ctx.body= {
message: 'Public API return'
 };
 await next();
})
// Add a protected route that requires authentication
router.get("/private", basicAuth);

function privateAPI(ctx: RouterContext, next: any){
  const user = ctx.state.user;
  ctx.body = {
    message: `Hello ${user.username}`
  }
}
export {router};