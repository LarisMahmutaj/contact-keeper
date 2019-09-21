const express = require('express')
const router = express.Router()

// @route       GET api/contact
// @desc        Get all users contacts
// @access      Private
router.get('/', (req, res) => {
  res.send('Get all contacts')
})

// @route       POS api/contact
// @desc        Add new contact
// @access      Private
router.post('/', (req, res) => {
  res.send('Add contact')
})

// @route       PUT api/contact
// @desc        Update contact
// @access      Private
router.put('/', (req, res) => {
  res.send('Update contact')
})

// @route       DELETE api/contact
// @desc        Delete contact
// @access      Private
router.delete('/', (req, res) => {
  res.send('Delete contact')
})

module.exports = router
