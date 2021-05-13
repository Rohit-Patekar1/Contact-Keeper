const express = require("express");
const router = express.Router();

// @route GET api/contacts
// @desc Get logged in user contact
// @access Private

router.get("/", (req, res) => {
    res.send("Get all contact");
})

// @route Post api/contacts
// @desc Add new contact
// @access Private

router.post("/", (req, res) => {
    res.send("add contact");
})

// @route Put api/contacts
// @desc Update contact
// @access Private

router.put("/:id", (req, res) => {
    res.send("Update contact");
})

// @route Delete api/contacts
// @desc Delete contact
// @access Private

router.delete("/:id", (req, res) => {
    res.send("delete contact");
})



module.exports = router;