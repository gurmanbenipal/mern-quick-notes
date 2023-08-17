const Note = require('../../models/note');

module.exports = {
    create,
    index
};

async function create (req, res) {
    try {
      const { text } = req.body;
      const newNote = await Note.create({ text: text, user: req.user });
      res.status(201).json({ newNote });
    } catch (error) {
      res.status(500).json({ message: 'Error while creating a note' });
    }
  };

  async function index(req, res) {
    try {
        const userNotes = await Note.find({ user: req.user._id });
        res.status(200).json(userNotes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching notes' });
    }
};
