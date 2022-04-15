
//koa paketini indirelim.
//index, hakkimda ve iletisim sayfaları oluşturalım.
//Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
//port numarası olarak 3000'i kullanalım.
const Koa = require("koa");
const Router = require("koa-router")

const app = new Koa();
const router = new Router();

router.get("/index", (ctx) => {
  ctx.body = "<h1>Index sayfasına hoşgeldiniz.</h1>";
  ctx.status = 200;
});
router.get("/hakkimda", (ctx) => {
  ctx.body = "<h1>Hakkımda sayfasına hoşgeldiniz.</h1>";
  ctx.status = 200;
});
router.get("/iletisim", (ctx) => {
  ctx.body = "<h1>Iletişim sayfasına hoşgeldiniz.</h1>";
  ctx.status = 200;
});
app.use(router.routes());
const port = 3000;

app.listen(port, () => {
  console.log(`Server ${port} Portunda Çalışıyor.`);
});