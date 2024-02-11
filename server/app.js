const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/user.route");
const imageUploadRoutes = require("./routes/imageUpload.route");
const heroRoutes = require("./routes/hero.route");
const serviceRoutes = require("./routes/service.route");
const productsRoutes = require("./routes/products.route");

const appointmentRoutes = require('./routes/appointment.route');
const addressRoutes = require('./routes/address.route');
const reviewRoutes = require('./routes/review.route');
const contactRoutes = require('./routes/contact.route');
const blogRoutes = require('./routes/blog.route');
const footerRoutes = require('./routes/footer.route');
const topBarRoutes = require('./routes/topBar.route');
const happyClientRoutes = require('./routes/happyClient.route');
const subscribeRoutes = require('./routes/subscribe.route');

// middleware
app.use(express.json());
app.use(cors());

// Your application route here
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/upload", imageUploadRoutes);
app.use("/api/v1/hero", heroRoutes);
app.use("/api/v1/service", serviceRoutes);

app.use('/api/v1/appointment', appointmentRoutes);
app.use('/api/v1/addresses', addressRoutes);

app.use("/api/v1/products", productsRoutes);
app.use("/api/v1/review", reviewRoutes);
app.use("/api/v1/contact", contactRoutes);
app.use("/api/v1/blog", blogRoutes);
app.use("/api/v1/footer", footerRoutes);
app.use("/api/v1/topBar", topBarRoutes);
app.use("/api/v1/happyClient", happyClientRoutes);
app.use("/api/v1/subscribe", subscribeRoutes);

// get image
app.get("/images/:filename", function (req, res) {
  var filename = req.params.filename;
  res.sendFile(__dirname + "/image/" + filename);
});

// Mother route
app.get("/", (req, res) => {
  res.send(
    `<h1 style="color:#00ff00;font-size:62px; text-align:center;margin-top:200px">"doha cartain house database is running</h1>`
  );
});

module.exports = app;
