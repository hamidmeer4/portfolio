const express = require("express");
const cors = require("cors");
const app = express();

const connectDB = require("./config/db");
const Contact = require("./models/contact");
const Faq = require("./models/faqs");
app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
  try {
    const userContact = new Contact(req.body);
    await userContact.save();
    res.status(201).json({ message: "Thanks for Contact us...." });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.post("/faqs", async (req, res) => {
  try {
    const faqUser = new Faq(req.body);
    await faqUser.save();
    res.status(200).json({ message: "thansk for faqs" });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

connectDB()
  .then(() => {
    console.log("db successfully connected ");
    app.listen(5000, () => {
      console.log("server running on 5000");
    });
  })
  .catch((err) => {
    console.log("Error in DB Connection");
  });
