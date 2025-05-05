
# **NeoKart – Modern E-Commerce Platform**

**NeoKart** is a full-stack, scalable e-commerce web application built with modern technologies. It offers a seamless online shopping experience with real-time chat, secure payments (Stripe & Web3), and a powerful admin dashboard.

---

## **Features**

### **User Features**
- User registration & login with JWT authentication
- Browse products with search and filtering
- Add products to cart and wishlist
- Checkout using **Stripe** (credit/debit cards) or **MetaMask** (crypto)
- View order history and status
- Leave product reviews and ratings
- Real-time chat with admin (via Socket.IO)

### **Admin Features**
- Admin dashboard to manage users, products, and orders
- Create, update, and delete products
- View and manage all orders
- Respond to user messages in real-time
- View customer reviews and ratings

---

## **Tech Stack**

| Category        | Technologies Used                         |
|----------------|--------------------------------------------|
| Frontend       | React.js, Context API / Redux, Axios       |
| Backend        | Node.js, Express.js                        |
| Database       | MongoDB + Mongoose                         |
| Real-Time      | Socket.IO                                  |
| Payments       | Stripe API, MetaMask + Web3.js             |
| Containerization| Docker, Docker Compose                     |
| Deployment     | Frontend: Vercel / Netlify<br>Backend: Render / Railway |
| Security       | JWT, Helmet, Rate Limiting, Input Validation |

---

## **Folder Structure**

```
NeoKart/
├── client/            # React frontend
├── server/            # Node.js backend
├── docker-compose.yml
├── README.md
└── ...
```

---

## **Installation & Setup**

### Prerequisites:
- Node.js & npm
- Docker & Docker Compose (optional but recommended)

### Clone the Repository
```bash
git clone https://github.com/yourusername/neokart.git
cd neokart
```

### Run with Docker
```bash
docker-compose up --build
```

### Run Manually
1. Install server dependencies:
```bash
cd server
npm install
npm run dev
```
2. Install client dependencies:
```bash
cd ../client
npm install
npm start
```

---

## **Web3 Integration**

The app allows users to pay using cryptocurrencies through MetaMask:
- Connect MetaMask Wallet
- Pay using ETH or supported tokens
- Transaction hash and confirmation shown on success

---

## **Screenshots**

> *Include screenshots here to showcase the UI and functionality (home, product page, cart, admin dashboard, etc).*

---

## **Roadmap**
- [x] JWT Authentication
- [x] Product CRUD APIs
- [x] Stripe Payment Integration
- [x] Crypto Payments with MetaMask
- [x] Real-time Chat (Socket.IO)
- [x] Admin Dashboard
- [ ] Multi-language Support
- [ ] Coupon System
- [ ] Automated Tests

---

## **Contributing**
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## **License**
[MIT](LICENSE)
