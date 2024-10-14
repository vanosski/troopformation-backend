---

# **TroopFormation Backend**  

This repository contains the **backend** of the **Troop Formation Calculator**, a MERN-based application that provides authentication and troop formation calculation logic. It handles server-side processing and communicates with the frontend to store and retrieve user data and troop formations.

For the frontend, refer to the [TroopFormation Frontend Repository](https://github.com/vanosski/troopformation-frontend).  

---

## **Table of Contents**  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Directory Structure](#directory-structure)  
- [Installation](#installation)  
- [Usage](#usage)  
- [API Endpoints](#api-endpoints)  
- [Future Improvements](#future-improvements)  
- [Contact](#contact)  

---

## **Features**  
- **User Authentication**: Login and registration system using Express.  
- **Troop Formation Calculation**: Server-side processing of troop formation logic.  
- **Database Integration**: Save and retrieve formation results from MongoDB.  
- **Express Routes**: RESTful APIs for user and formation management.  

---

## **Tech Stack**  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Version Control**: Git, GitHub  
- **Deployment**: Render  

---

## **Directory Structure**  
```
backend/  
│  
├── .git/  
├── controllers/  
│   ├── authController.js  
│   └── formationController.js  
│  
├── library/  
│   └── helper.js  
│  
├── middleware/  
│   └── middleware.js  
│  
├── models/  
│   ├── formationmodel.js  
│   └── usermodel.js  
│  
├── routes/  
│   ├── authRoutes.js  
│   └── formationRoutes.js  
│  
├── node_modules/  
├── env/  
├── .gitignore  
├── database.js  
├── index.js  
├── package-lock.json  
└── package.json  
```  

---

## **Installation**  
### Prerequisites  
- Node.js installed  
- MongoDB instance running locally or on MongoDB Atlas  

### **Setup Instructions**  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/vanosski/troopformation-backend.git  
   cd troopformation-backend  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

3. Configure the **MongoDB URI** in `database.js`.  

4. Start the backend server:  
   ```bash  
   npm start  
   ```  

The backend will be available at [http://localhost:5000](http://localhost:5000) by default.  

---

## **Usage**  
1. Ensure MongoDB is running.  
2. Start the backend server.  
3. The backend will handle requests from the frontend and perform troop formation calculations.  

---

## **API Endpoints**  
### **Authentication Routes**  
- **POST** `/api/auth/register`: Register a new user  
- **POST** `/api/auth/login`: Log in an existing user  

### **Formation Routes**  
- **POST** `/api/formation/calculate`: Perform troop formation calculations  
- **GET** `/api/formation/results`: Retrieve saved formation results  

---

## **Future Improvements**  
- **JWT Authentication**: Add token-based authentication for session management.  
- **Cloud Database**: Use MongoDB Atlas for production.  
- **Validation Middleware**: Add validation for API requests.  
- **Error Handling**: Implement better error-handling middleware.  

---

## **Contact**  
If you have any questions or feedback, feel free to reach out:  
- **GitHub**: [vanosski](https://github.com/vanosski)  
- **LinkedIn**: [Vanssh Parikh](https://linkedin.com/in/vanssh-parikh-765a2a156)  

---

