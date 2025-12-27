import React, { useState } from "react";

const Contact = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    type: "text", // default review type
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Thank you! Your message has been submitted.");

    // Add review to list
    setReviews([...reviews, { ...formData }]);

    // Reset form
    setFormData({ name: "", email: "", message: "", type: "text" });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left text-white">
            Get In{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid gap-4 bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-3 rounded bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-3 rounded bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message / Review"
              rows="5"
              className="p-3 rounded bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>

            {/* Select review type */}
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="p-3 rounded bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="text">Text</option>
              <option value="image">Image URL</option>
              <option value="voice">Voice (MP3 link)</option>
              <option value="emoji">Emoji</option>
            </select>

            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-orange-400 px-6 py-2 rounded-full shadow-md hover:scale-105 transition text-white text-lg"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right: Client Reviews */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left text-white">
            Client{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Reviews
            </span>
          </h2>
          <div className="space-y-6">
            {reviews.length === 0 ? (
              <p className="text-gray-400">No reviews yet. Be the first!</p>
            ) : (
              reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-4 rounded-lg shadow-md text-gray-200"
                >
                  <h3 className="font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                    {review.name}
                  </h3>
                  {review.type === "text" && <p>{review.message}</p>}
                  {review.type === "image" && (
                    <img
                      src={review.message}
                      alt="Client Review"
                      className="w-24 h-24 rounded-full border-2 border-purple-400"
                    />
                  )}
                  {review.type === "voice" && (
                    <audio controls className="w-full">
                      <source src={review.message} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  )}
                  {review.type === "emoji" && (
                    <p className="text-2xl">{review.message}</p>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
