import React, { useState } from "react";
import { db } from "../firebaseConfig"; // Import Firebase Firestore
import { collection, setDoc, arrayUnion, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Import Firebase Auth
import "../css/services.css";

const Cta = () => {
    const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        const auth = getAuth(); // Get Firebase Auth instance
        const currentUser = auth.currentUser;

        if (!currentUser) {
            setError("You must be logged in to submit the form.");
            setLoading(false);
            return;
        }

        try {
            const formRef = doc(db, "submissions", "form_entries");

            // Check if the document exists
            const docSnap = await getDoc(formRef);
            if (docSnap.exists()) {
                // If it exists, update the array
                await setDoc(formRef, {
                    entries: arrayUnion({ ...formData, userId: currentUser.uid }),
                }, { merge: true });
            } else {
                // If not, create a new document with an array
                await setDoc(formRef, {
                    entries: [{ ...formData, userId: currentUser.uid }],
                });
            }

            setSuccess("Form submitted successfully!");
            setFormData({ name: "", email: "", service: "", message: "" }); // Reset form
        } catch (err) {
            setError("Error submitting form: " + err.message);
        }

        setLoading(false);
    };

    return (
        <div className="container mt-5 p-4 bg-dark shadow rounded text-center whit">
            <h2 className="mb-3">Let’s Build Something Great Together</h2>
            <p className="text-muted">Get in touch with us for inquiries or collaborations.</p>

            <form onSubmit={handleSubmit}>
                <div className="row g-3 mt-3">
                    <div className="col-md-6">
                        <input type="text" name="name" className="form-control" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <input type="email" name="email" className="form-control" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <select name="service" className="form-select" value={formData.service} onChange={handleChange} required>
                            <option value="">Select a Service</option>
                            <option value="cleaning">Cleaning</option>
                            <option value="delivery">Delivery</option>
                            <option value="design">Graphics Designing</option>
                        </select>
                    </div>
                    <div className="col-md-12">
                        <textarea name="message" className="form-control" placeholder="Your Message (Optional)" value={formData.message} onChange={handleChange} rows="4"></textarea>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary mt-3" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </form>

            {success && <p className="text-success mt-3">{success}</p>}
            {error && <p className="text-danger mt-3">{error}</p>}

            <div className="mt-4 d-flex justify-content-center gap-3">
                <a href="tel:+(234)-707-044-0416" className="text-light text-decoration-none">
                    <i className="bi bi-telephone-fill"></i> +(234)-707-044-0416
                </a>
                <a href="mailto:calvindilinger@gmail.com" className="text-light text-decoration-none">
                    <i className="bi bi-envelope-fill"></i> calvindilinger@gmail.com
                </a>
                <a href="https://wa.me/123456789" className="text-success text-decoration-none">
                    <i className="bi bi-whatsapp"></i> WhatsApp Chat
                </a>
            </div>
        </div>
    );
};

export default Cta;
