import React, { useState } from "react";
import "./contact.css";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import axios from "axios";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${API}/api/getContact`, formData);
    const data = res.data;
    console.log(data);

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>
            Have a Vacancy in MERN stack or Node.js ? Let’s call me or mail me
            🚀
          </p>

          <div className="info-card">
            <Mail />
            <div>
              <h4>Email</h4>
              <p>princepanchal2002@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <Phone />
            <div>
              <h4>Phone</h4>
              <p>+91 8401052725</p>
            </div>
          </div>

          <div className="info-card">
            <MapPin />
            <div>
              <h4>Location</h4>
              <p>Ahmedabad, Gujarat</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form">
          {submitted ? (
            <div className="success-box">
              <CheckCircle size={50} />
              <h3>Message Sent!</h3>
              <p>I’ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2>Send Message</h2>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your Message..."
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
              />

              <button type="submit">
                Send Message <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
