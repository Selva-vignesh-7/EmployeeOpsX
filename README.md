# EmployeeOpsX
Full-stack Employee Management System built with Spring Boot (REST APIs), React (Frontend), and MySQL (Database). This project demonstrates CRUD operations, clean architecture, and a modern responsive UI.

# 🚀 EmployeeOpsX – Employee Management System (EMS)

A **full-stack Employee Management System** built with **Spring Boot (REST APIs)**, **React (Frontend)**, and **MySQL (Database)**.  
This project demonstrates CRUD operations, clean architecture, and a modern responsive UI.  

---

## 📌 Features
- ➕ Add new employees  
- 📋 List all employees  
- 🔍 Get employee by ID  
- ✏️ Update employee details  
- ❌ Delete employees  
- ✅ Form validation on frontend  
- 🌐 REST API integration with Axios  
- 🎨 Clean UI with Bootstrap + custom CSS  

---

## 🛠️ Tech Stack

### **Frontend**
- ⚛️ React 18  
- 📦 Axios (API calls)  
- 🎨 Bootstrap 5 + Custom CSS (UI styling)  
- 🌍 React Router DOM (navigation & routing)  

---

### **Backend**
- ☕ Java 21 (or higher)  
- 🌱 Spring Boot 3.5.5  
- 🛢 Spring Data JPA (ORM)  
- 🐬 MySQL (Database)  
- 📦 Maven (Build tool)  
- 🧩 Lombok (Reduce boilerplate code)

---


## 🔄 Project Flow

    ```mermaid
    graph TD;
        A[React Frontend] -->|Axios REST Calls| B(Spring Boot Backend);
        B --> C[Service Layer];
        C --> D[Repository Layer];
        D --> E[MySQL Database];
        E --> D;
        D --> C;
        C --> B;
        B -->|JSON Response| A;



---

### **Development Tools**
- IntelliJ IDEA / VS Code  
- Postman (API testing)  
- Git & GitHub (Version control)  

---

⚡ How to Run

# ▶️ How to Run the Project  

## ✅ Prerequisites
Make sure you have installed:  
- [Java 21+](https://adoptium.net/)  
- [Maven 3.9+](https://maven.apache.org/)  
- [MySQL 8+](https://dev.mysql.com/downloads/mysql/)  
- [Node.js 18+ & npm](https://nodejs.org/)  
- [Git](https://git-scm.com/)  

---

## ⚙️ Backend Setup (Spring Boot + MySQL)

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/employeeopsx.git
   cd employeeopsx/ems-backend

2. **Configure Database**
Create a new database in MySQL:

    ```bash
    CREATE DATABASE ems;


**Update your application.properties with your MySQL username and password:**

    ```bash
    spring.datasource.url=jdbc:mysql://localhost:3306/ems
    spring.datasource.username=root
    spring.datasource.password=yourpassword
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect


3. **Run the Backend**

    ```bash
    mvn spring-boot:run


✅ Backend will start at: http://localhost:8080

Test APIs with Postman:

GET /api/employee → List employees

POST /api/employee → Create employee

PUT /api/employee/{id} → Update employee

DELETE /api/employee/{id} → Delete employee



Frontend Setup (React + Vite)

1. **Go to frontend folder**

    ```bash
    cd ../ems-frontend


2 **Install dependencies**

    ```bash
    npm install


3. **Run the React App**

    ```bash
    npm run dev


✅ React app runs at: http://localhost:3000


🔄 End-to-End Flow

Open http://localhost:3000

You’ll see:

Employee List Page (table with employees)

Button ➕ Add Employee

Actions: ✏️ Update | ❌ Delete

All operations trigger Axios → Spring Boot → MySQL → React updates UI.


---

Contributions, issues, and feature requests are welcome!
Feel free to fork the repo and submit a PR.



