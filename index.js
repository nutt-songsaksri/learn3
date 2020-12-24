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

// // 2-2-ตัวอย่างการใช้ Middleware เก็บ Log
// var express = require("express");
// var app = express();
// // Logging Middleware
// // app.use() - เป็น middleware ที่ทำงานทุกครั้งที่มีการ request เข้ามา โดยการทำงานคือ แสดงผล method และ path ผ่านทาง console จากนั้นโยนให้ middleware ตัวต่อไป
// app.use(function (req, res, next) {
//   console.log(req.method + " " + req.url);
//   next();
// });
// app.get("/", function (req, res) {
//   res.send("Home Page");
// });
// app.get("/about", function (req, res) {
//   res.send("About Page");
// });
// app.listen(3000, function () {
//   console.log("Express App listening on port 3000!");
// });

// 2-3-ตัวอย่างการใช้ Middleware ทำ static page
// var express = require("express");
// var path = require("path");
// var app = express();
// let port = 64820;
// // Middleware 1 ทำหน้าเก็บ log เหมือนตัวอย่างด้านบน จากนั้นโยนให้ middleware 2
// app.use(function (req, res, next) {
//   console.log(req.method + " " + req.url);
//   next();
// });
// // Middleware 2 ทำหน้าหาไฟล์ในโฟลเดอร์ public ถ้าหาเจอจะอ่านไฟล์นั้นแล้วส่งให้ client แต่ถ้าหาไม่เจอจะโยนให้ middleware 3
// app.use(express.static(path.resolve(__dirname, "public")));
// // Middleware 3 ทำหน้าหาที่ส่ง status code 404 และแสดงผลว่า "404 File not found!"
// app.use(function (req, res) {
//   res.writeHead(404, {
//     "Content-Type": "text=plain",
//   });
//   res.end("404 File not found!");
// });
// app.listen(port, "0.0.0.0", function () {
//   console.log("Express App listening on port " + port);
// });

// // 3-ExpressJS Request
// var express = require("express");
// var app = express();
// app.get("/:carname", function (req, res) {
//   var str = "carname : " + req.params.carname; //หรือ JSON.stringify(req.params)
//   str += "<br>query : -";
//   str += "<br>type : " + req.query.type;
//   str += "<br>color : " + req.query.color;
//   res.send(str);
// });
// app.listen(3000);

// // 4-1 ExpressJS Response
// var express = require("express");
// var app = express();
// app.get("/", function (req, res) {
//   res.json({
//     //ส่ง response ในรูปแบบ json พร้อมเปลี่ยน Content-Type ให้เข้ากับ json
//     name: "tony",
//     hero: "iron-man",
//   });
// });
// app.listen(3000);

// 4-2 ExpressJS Response
var express = require("express");
var app = express();
var path = require("path");
app.get("/", function (req, res) {
  res.sendFile(path.resolve("home.html")); //ส่งไฟล์ตาม path ที่ระบุ พร้อมเปลี่ยน Content-Type ให้เข้ากับไฟล์ที่ส่งไปด้วย
});
app.get("/home", function (req, res) {
  res.redirect("/"); //	กำหนด path ที่จะให้ redirect และยังระบุ status code เพิ่มเข้าไปได้ แต่ถ้าไม่ระบุจะเป็น status code 302
});
app.listen(3000);
