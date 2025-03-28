import express from "express";
import multer from "multer";
import nodemailer from "nodemailer";

const verificationRouter = express.Router();

// Setup multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

verificationRouter.post("/send-verification-email", upload.single("document"), async (req, res) => {
    const { name, dob, location, email, contact } = req.body;
    const document = req.file;

    if (!document) {
        return res.status(400).json({ success: false, message: "No document uploaded." });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,  // Set this in .env file
                pass: process.env.EMAIL_PASS,  // Set this in .env file
            },
        });

        const mailOptions = {
            from: email, // Doctor's email
            to: "soumyarup.3435@gmail.com",
            subject: "Doctor Verification Request",
            text: `Doctor Verification Request:
            Name: ${name}
            DOB: ${dob}
            Location: ${location}
            Email: ${email}
            Contact: ${contact}
            `,
            attachments: [
                {
                    filename: document.originalname,
                    content: document.buffer,
                },
            ],
        };

        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "Email sent successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to send email." });
    }
});

export default verificationRouter;
