# 🛒 BuyLoom Backend API

BuyLoom Backend is a full-featured RESTful API built with Node.js, Express, and MongoDB.  
It powers the BuyLoom Online Shop application, handling authentication, product management, cart functionality, and secure data operations.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js
- dotenv
- CORS
- RESTful API Architecture

---

## 📂 Project Structure

```
BuyLoom-backend/
│
├── controllers/
├── routes/
├── models/
├── middleware/
├── config/
├── .env
├── server.js
└── package.json
```

---

## 🔐 Features

### ✅ Authentication
- User Registration
- Secure Login (JWT-based authentication)
- Password Hashing with bcrypt
- Protected Routes using Middleware

### 🛍️ Product Management
- Create Product (Admin)
- Update Product
- Delete Product
- Get All Products
- Get Single Product

### 🛒 Cart System
- Add to Cart
- Remove from Cart
- Update Cart Quantity
- Persistent Cart Data (MongoDB)

### 👤 User Management
- User Schema with Role-Based Access
- Secure API Endpoints

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/qudratullah-stack/BuyLoom-backend.git
cd BuyLoom-backend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in the root directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the Server

```bash
npm run dev
```

or

```bash
npm start
```

Server will run at:

```
http://localhost:5000
```

---

## 🔐 API Authentication

Protected routes require JWT token in headers:

```
Authorization: Bearer <your_token>
```

---

## 📦 Example API Endpoints

### Auth Routes
- `POST /api/auth/register`
- `POST /api/auth/login`

### Product Routes
- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products`
- `PUT /api/products/:id`
- `DELETE /api/products/:id`

### Cart Routes
- `POST /api/cart`
- `GET /api/cart/:userId`
- `DELETE /api/cart/:productId`

---

## 🧪 Testing

You can test APIs using:

- Postman
- Thunder Client
- Insomnia

---

## 🌐 Deployment

Backend can be deployed on:

- Render
- Railway
- Vercel (Serverless)
- Cyclic

---

## 👨‍💻 Author

**Qudrat Ullah**  
Full Stack Developer (MERN | TypeScript)

GitHub: https://github.com/qudratullah-stack  
LinkedIn: https://linkedin.com/in/qudrat-ullah-b3571b3b0

---

## 📄 License

This project is open-source and available under the MIT License.

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
