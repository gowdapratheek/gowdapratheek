import Newsletter from "../models/newsletter.js";

export const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if email already exists
    const existingSubscriber = await Newsletter.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ message: "Email already subscribed" });
    }

    const newSubscriber = await Newsletter.create({ email });
    res.status(201).json({
      message: "Successfully subscribed to newsletter",
      subscriber: newSubscriber,
    });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error subscribing to newsletter",
        error: error.message,
      });
  }
};
