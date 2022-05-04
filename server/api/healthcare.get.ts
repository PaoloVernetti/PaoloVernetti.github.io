export default defineEventHandler((event) => {
  event.res.statusCode = 200;
  event.res.statusMessage = "OK";

  event.res.end();
});
