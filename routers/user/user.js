const router = require('koa-router')()

router.get('/user', async (ctx, next) => {
  await ctx.render('index', {
    title: 'I\'m 大前端的希望'
  })
})

router.get('/user/name', async (ctx, next) => {
  ctx.body = 'I\'m 大前端的希望 —— 二狗子'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
