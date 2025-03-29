import React, { useState } from 'react'
import '../css/services.css'

const Cta = () => {
    const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <>
            <div className="container mt-5 p-4 bg-dark shadow rounded text-center whit">
                <h2 className="mb-3">Let’s Build Something Great Together</h2>
                <p className="text-muted">Get in touch with us for inquiries or collaborations.</p>

                <div className="row g-3 mt-3">
                    <div className="col-md-6">
                        <input type="text" name="name" className="form-control" placeholder="Your Name" onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <input type="email" name="email" className="form-control" placeholder="Your Email" onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                        <select name="service" className="form-select" onChange={handleChange}>
                            <option value="">Select a Service</option>
                            <option value="web_design">Cleaning</option>
                            <option value="marketing">Delivery</option>
                            <option value="branding">Graphics Designing</option>
                        </select>
                    </div>
                    <div className="col-md-12">
                        <textarea name="message" className="form-control" placeholder="Your Message (Optional)" onChange={handleChange} rows="4"></textarea>
                    </div>
                </div>

                <button className="btn btn-primary mt-3">Submit</button>

                <div className="mt-4 d-flex justify-content-center gap-3">
                    <a href="tel:+(234)-707-044-0416" className="text-light text-decoration-none">
                        <i className="bi bi-telephone-fill"></i> +(234)-707-044-0416
                    </a>
                    <a href="mailto:calvindilinger@gmail.com" className="text-light text-decoration-none">
                        <i className="bi bi-envelope-fill"></i> calvindilinger@gmail.com
                    </a>
                    <a href="https:wa.me/123456789" className="text-success text-decoration-none">
                        <i className="bi bi-whatsapp"></i> WhatsApp Chat
                    </a>
                </div>
            </div>
        </>
    )
}

export default Cta