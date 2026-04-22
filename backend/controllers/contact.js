import Contact from "../models/contact.js";


export async function getContact(req, res) {
  try {
      const { name, email, message } = req.body;  
    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }
    console.log("Received contact data:", { name, email, message });
    const contactData = await Contact.create({ name, email, message });
    res.status(201).json({ message: "Contact received successfully" });
    
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
