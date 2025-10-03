import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// SMTP transporter configuration
const transporter = nodemailer.createTransporter({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Test SMTP connection
transporter.verify(function (error, success) {
  if (error) {
    console.log('❌ SMTP Bağlantı Hatası:', error);
  } else {
    console.log('✅ SMTP Sunucu hazır, email gönderilebilir');
  }
});

// Email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Form validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Tüm alanlar doldurulmalıdır.'
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Geçerli bir e-posta adresi giriniz.'
      });
    }

    // Email options
    const mailOptions = {
      from: `"CriDost İletişim" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO,
      subject: `🚀 CriDost - Yeni İletişim Formu Mesajı: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 2px solid #000;">
          <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">
            🚀 CriDost - Yeni İletişim Formu Mesajı
          </h2>
          
          <div style="background: #f9f9f9; padding: 20px; margin: 20px 0; border-left: 4px solid #000;">
            <h3 style="margin: 0 0 15px 0; color: #000;">👤 Gönderen Bilgileri:</h3>
            <p style="margin: 5px 0;"><strong>Ad Soyad:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>E-posta:</strong> <a href="mailto:${email}">${email}</a></p>
          </div>
          
          <div style="background: #fff; padding: 20px; margin: 20px 0; border: 1px solid #ddd;">
            <h3 style="margin: 0 0 15px 0; color: #000;">💬 Mesaj İçeriği:</h3>
            <p style="line-height: 1.6; color: #333; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="text-align: center; margin: 30px 0; padding: 20px; background: #000; color: #fff;">
            <p style="margin: 0; font-size: 14px;">
              Bu mesaj CriDost web sitesi iletişim formu üzerinden gönderilmiştir.
            </p>
            <p style="margin: 10px 0 0 0; font-size: 12px; opacity: 0.8;">
              Gönderim Tarihi: ${new Date().toLocaleString('tr-TR')}
            </p>
          </div>
          
          <div style="margin: 20px 0; padding: 15px; background: #f0f0f0; border-radius: 5px;">
            <p style="margin: 0; font-size: 12px; color: #666;">
              <strong>Hızlı Yanıt:</strong> Bu e-postaya doğrudan yanıt vererek ${name} ile iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      `,
      // Text alternative
      text: `
CriDost - Yeni İletişim Formu Mesajı

Gönderen: ${name}
E-posta: ${email}

Mesaj:
${message}

Gönderim Tarihi: ${new Date().toLocaleString('tr-TR')}

Bu mesaj CriDost web sitesi iletişim formu üzerinden gönderilmiştir.
      `,
      // Reply-to field for easy response
      replyTo: email
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ Email gönderildi:', info.messageId);

    res.json({
      success: true,
      message: 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.'
    });

  } catch (error) {
    console.error('❌ Email gönderme hatası:', error);
    res.status(500).json({
      success: false,
      message: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'CriDost API is running!',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 CriDost API server running on port ${PORT}`);
  console.log(`📧 SMTP Host: smtp.gmail.com`);
  console.log(`👤 SMTP User: ${process.env.SMTP_USER}`);
});