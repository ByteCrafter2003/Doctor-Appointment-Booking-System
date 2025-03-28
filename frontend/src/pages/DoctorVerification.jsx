import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const DoctorVerification = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [document, setDocument] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!document) {
      return toast.error("Please attach a document.");
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("dob", dob);
    formData.append("location", location);
    formData.append("email", email);
    formData.append("contact", contact);
    formData.append("document", document);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/verification/send-verification-email",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.success) {
        toast.success("Verification email sent successfully!");
        setName("");
        setDob("");
        setLocation("");
        setEmail("");
        setContact("");
        setDocument(null);
      } else {
        toast.error("Failed to send verification email.");
      }
    } catch (error) {
      toast.error("Error sending email. Please try again.");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Doctor Verification</p>

      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl">
        <div className="flex flex-col gap-4 text-gray-600">
          <div className="flex flex-col gap-1">
            <p>Name</p>
            <input
              type="text"
              placeholder="Doctor's Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded px-3 py-2"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <p>Date of Birth</p>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="border rounded px-3 py-2"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <p>Location</p>
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border rounded px-3 py-2"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <p>Email</p>
            <input
              type="email"
              placeholder="Doctor's Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded px-3 py-2"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <p>Contact Number</p>
            <input
              type="text"
              placeholder="Contact Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="border rounded px-3 py-2"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <p>Attach Document</p>
            <input
              type="file"
              onChange={(e) => setDocument(e.target.files[0])}
              className="border rounded px-3 py-2"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-primary px-10 py-3 mt-4 text-white rounded-full"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default DoctorVerification;
