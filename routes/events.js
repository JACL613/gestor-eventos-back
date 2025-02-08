const express = require("express")
const router = express.Router()
const auth = require("../middleware/auth")
const Event = require("../models/Event")

// Get all events
router.get("/", auth, async (req, res) => {
  console.log(req.user.id);
  
  try {
    const events = await Event.find({ user: req.user.id })
    res.json(events)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

// Get By Id events
router.get("/:id", auth, async (req, res) => {
  try {
    const {id} = req.params
    console.log(id);
    
    const events = await Event.findById(id)
    res.json(events)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

// Add new event
router.post("/", auth, async (req, res) => {
  try {
    const { name, date, time, location, description } = req.body
    const newEvent = new Event({
      name,
      date,
      time,
      location,
      description,
      user: req.user.id,
    })
    const event = await newEvent.save()
    res.json(event)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

// Update event
router.put("/:id", auth, async (req, res) => {
  try {
    let event = await Event.findById(req.params.id)
    if (!event) return res.status(404).json({ msg: "Event not found" })
    if (event.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" })
    }
    event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(event)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

// Delete event
router.delete("/:id", auth, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id)
    if (!event) return res.status(404).json({ msg: "Event not found" })
    if (event.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" })
    }
    await Event.findByIdAndRemove(req.params.id)
    res.json({ msg: "Event removed" })
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

// Filter events by date or location
router.get("/filter", auth, async (req, res) => {
  try {
    const { date, location } = req.query
    const query = { user: req.user.id }
    if (date) query.date = new Date(date)
    if (location) query.location = new RegExp(location, "i")
    const events = await Event.find(query)
    res.json(events)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

module.exports = router

