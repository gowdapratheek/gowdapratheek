import Contact from "../models/contact.js";


export const postContact = async (req, res) => {
  try {
    const { name, email, msg } = req.body;
    if (!name || !email || !msg) {
      return res
        .status(400)
        .json({ error: "Name, email, and message are required." });
    }
    const newContact = new Contact({ name, email, msg });
    await newContact.save();
    res.status(201).json({ message: "Contact saved successfully!" });

  } catch (error) {
    res.status(404).json({
      message: "Failed to save contact.",
      error,
      success: false,
    });
  }
};

