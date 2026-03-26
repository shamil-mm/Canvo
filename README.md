# Canvo

Canvo is a full-stack, AI-powered chat and image generation platform.It offers an advanced conversational experience along with high-quality
AI image generation capabilities, packaged into a modern, responsive web application. The platform features a built-in credit system with
Stripe integration, enabling users to purchase credits and utilize AI tools seamlessly.

---

## Features

- **Conversational AI**: Engage in smart, context-aware conversations powered by advanced generative models.
- **AI Image Generation**: Create stunning images from text prompts and share them with the community.
- **Credit & Monetization System**: 
  - Text prompts consume 1 credit.
  - Image generations consume 2 credits.
  - Integrated with **Stripe** for frictionless credit purchases.
- **Community Feed**: Explore AI-generated artwork published by the platform's user base.
- **Robust Authentication**: Secure, custom JWT-based user authentication.
- **Markdown & Code Support**: Chat interface beautifully renders Markdown and provides syntax highlighting for code snippets.

---

## 🛠️ Technology Stack

### Frontend (Client)
- **Core Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM (v7)
- **Markdown Parsing**: React Markdown & PrismJS
- **Alerts**: React Hot Toast
- **HTTP Client**: Axios

### Backend (Server)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT & bcryptjs
- **Payments**: Stripe API & Svix (for secure Webhook handling)
- **Media Storage & Generation**: ImageKit
- **AI SDKs**: OpenAI SDK

---

## ⚙️ Prerequisites

Before you begin, ensure you have the following accounts and tools ready:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)
- [Stripe Account](https://stripe.com/) (For payment intent and webhooks)
- [ImageKit Account](https://imagekit.io/) (For image processing and storage)
- [OpenAI API Key](https://openai.com/)

---

## 💻 Installation & Setup

**1. Clone the repository**
```bash
git clone https://github.com/your-username/canvo.git
cd canvo
```

**2. Setup the Server (Backend)**
```bash
cd server
npm install
```

Create a `.env` file in the `server` directory and add your environment variables:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
IMAGEKIT_URL_ENDPOINT=your_imagekit_endpoint
# Add any other required AI / ImageKit credentials here
```

Start the backend server:
```bash
npm run server
```

**3. Setup the Client (Frontend)**
```bash
# Open a new terminal instance
cd client
npm install
```

Create a `.env` file in the `client` directory:
```env
VITE_BACKEND_URL=http://localhost:3000
```

Start the frontend development server:
```bash
npm run dev
```

---

## 📁 Project Structure

```text
canvo/
├── client/                     # React Frontend
│   ├── src/
│   │   ├── assets/             # Images, CSS (PrismJS)
│   │   ├── components/         # Reusable UI components (Sidebar, ChatBox)
│   │   ├── context/            # Global AppContext state
│   │   ├── pages/              # App views (Community, Credits, Login, Loading)
│   │   ├── App.jsx             # Main routing component
│   │   └── main.jsx            # React root
│   └── package.json            
└── server/                     # Node.js + Express Backend
    ├── config/                 # DB, ImageKit, and OpenAI configurations
    ├── controllers/            # Logic for auth, chat, credits, and messages
    ├── middlewares/            # Custom express middlewares (Auth, etc.)
    ├── models/                 # Mongoose schemas (Chat, Transaction, User)
    ├── routes/                 # Express REST API routes
    ├── server.js               # Express app entry point
    └── webhooks.js             # Stripe Webhook handlers
```

---

## 🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License
Distributed under the ISC License. See `LICENSE` for more information.
