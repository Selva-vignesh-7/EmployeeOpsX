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

### **Development Tools**
- IntelliJ IDEA / VS Code  
- Postman (API testing)  
- Git & GitHub (Version control)  

---

⚡ How to Run

Backend
Clone the repository:
git clone https://github.com/your-username/ems-backend.git

Configure database in application.properties:
spring.datasource.url=jdbc:mysql://localhost:3306/ems
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update


Run the project:
mvn spring-boot:run

Backend runs on: http://localhost:8080


Frontend
Navigate to frontend folder:
cd ems-frontend

Install dependencies:
npm install

Run frontend:
npm run dev

Frontend runs on: http://localhost:3000



Contributions, issues, and feature requests are welcome!
Feel free to fork the repo and submit a PR.


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

