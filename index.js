// // 1-ลง Express
// var express = require("express");
// var app = express();
// app.get("/", function (req, res) {
//   res.send("Hello World!");
// });
// app.listen(3000, function () {
//   console.log("Express App listening on port 3000!");
// });

// 2-การใช้ Middleware
// // 2-1-ตัวอย่าง Express ที่ยังไม่มี Middleware แต่จะใช้เป็นตัวอย่างในการทำ Middleware
// var express = require("express");
// var app = express(); //ตัวแปร app : ทำหน้าเป็น server ของ Express
// app.get("/", function (req, res) {
//   //app.get() : ทำงานเมื่อ request เข้ามาเป็น GET method และตรงตาม path ที่ระบุใน parameter ตัวแรก
//   res.send("Home Page");
// });
// app.get("/about", function (req, res) {
//   res.send("About Page");
// });
// app.listen(3000, function () {
//   //app.listen() : ทำหน้าที่รอ request จากเครื่อง client
//   console.log("Express App listening on port 3000!");
// });

// 2-2-ตัวอย่างการใช้ Middleware เก็บ Log
var express = require("express");
var app = express();
// Logging Middleware
// app.use() - เป็น middleware ที่ทำงานทุกครั้งที่มีการ request เข้ามา โดยการทำงานคือ แสดงผล method และ path ผ่านทาง console จากนั้นโยนให้ middleware ตัวต่อไป
app.use(function (req, res, next) {
  console.log(req.method + " " + req.url);
  next();
});
app.get("/", function (req, res) {
  res.send("Home Page");
});
app.get("/about", function (req, res) {
  res.send("About Page");
});
app.listen(3000, function () {
  console.log("Express App listening on port 3000!");
});
