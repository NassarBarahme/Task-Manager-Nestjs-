<div align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" />
  <h1>📝 Task Manager API</h1>
  <p>A powerful and scalable task management system built with NestJS</p>
  <p><strong>🔴 LIVE IN PRODUCTION</strong></p>
  
  [![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
  [![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
  
  [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
  
  <h3>🔗 Quick Links</h3>
  
  [![Live Server](https://img.shields.io/badge/Live_Server-00C851?style=for-the-badge&logo=vercel&logoColor=white)](https://task-manager-nestjs-production-b1b3.up.railway.app)
  [![Swagger Docs](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)](https://task-manager-nestjs-production-b1b3.up.railway.app/api)
  [![Postman Docs](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://documenter.getpostman.com/view/29986735/2sAYBa9U1k)
  
</div>

---

## 🎯 Live Demo

**The API is currently deployed and running in production!**

- **🌐 Production Server**: [https://task-manager-nestjs-production-b1b3.up.railway.app](https://task-manager-nestjs-production-b1b3.up.railway.app)
- **📚 Interactive Swagger Documentation**: [https://task-manager-nestjs-production-b1b3.up.railway.app/api](https://task-manager-nestjs-production-b1b3.up.railway.app/api)
- **📮 Postman Collection**: [View API Documentation](https://documenter.getpostman.com/view/29986735/2sAYBa9U1k)

You can test all endpoints directly using the Swagger UI or import the Postman collection to start making requests!

---

## 🌟 Features

- ✅ **RESTful API Design** - Complete CRUD operations following REST principles
- 🔐 **JWT Authentication** - Secure user authentication and authorization
- 👥 **User Management** - Multi-user support with protected routes
- 🗂️ **Task Management** - Create, update, delete, and organize tasks
- 📊 **Status Tracking** - Track task status and progress
- 🔍 **Advanced Filtering** - Search and filter tasks by various criteria
- 🏗️ **Clean Architecture** - Modular design with Controllers, Services, and Modules
- 🗄️ **TypeORM Integration** - Type-safe database operations
- 🔒 **Password Security** - Bcrypt hashing for secure password storage
- ✅ **Data Validation** - DTOs, Validation Pipes, and Guards
- ⚙️ **Environment Configuration** - Environment-based settings management
- 🐳 **Docker Support** - Containerized deployment with Docker Compose
- 📝 **Swagger Documentation** - Interactive API documentation
- 📮 **Postman Collection** - Complete API testing documentation
- 🚀 **Production Ready** - Deployed and running on Railway
- 🧪 **Comprehensive Testing** - Unit and E2E tests with Jest

---

## 💡 About This Project

This project was built as a **production-ready application** after completing an advanced NestJS course, focusing on real-world implementation and deployment practices.

### What Makes This Production-Ready?

- ✨ **Industry Best Practices** - Following NestJS conventions and design patterns
- 🔒 **Security First** - JWT authentication, password hashing, and input validation
- 🏗️ **Scalable Architecture** - Modular design that grows with your needs
- 📚 **Well Documented** - Comprehensive API documentation with Swagger and Postman
- 🚀 **Live Deployment** - Running on a production server with persistent database
- 🧪 **Tested** - Unit and integration tests for reliability
- 🐳 **Containerized** - Docker support for consistent deployment

This project demonstrates not just coding skills, but the ability to build, deploy, and maintain production systems that mirror real-world enterprise applications.

---

## 🏗️ Architecture

This project follows **NestJS best practices** with a modular architecture:

```
src/
├── auth/           # Authentication module
├── tasks/          # Tasks module
├── users/          # Users module
├── config/         # Configuration files
├── common/         # Shared utilities
└── main.ts         # Application entry point
```

### Tech Stack

- **Framework**: NestJS
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: TypeORM
- **Authentication**: JWT & Passport
- **Validation**: class-validator
- **Testing**: Jest
- **Containerization**: Docker & Docker Compose

---

## 🚀 Getting Started

> **💡 Quick Start**: Want to try it immediately? Check out the [live demo](https://task-manager-nestjs-production-b1b3.up.railway.app/api) or test the API using [Swagger Documentation](https://task-manager-nestjs-production-b1b3.up.railway.app/api)!

### Running Locally

#### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) (v14 or higher)
- [Docker](https://www.docker.com/) (optional, for containerized setup)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/NassarBarahme/Task-Manager-Nestjs-.git
cd Task-Manager-Nestjs-
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
# Database
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_DATABASE=taskmanager

# JWT
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=3600

# Application
PORT=3000
NODE_ENV=development
```

4. **Run with Docker (Recommended)**

```bash
docker-compose up -d
```

This will start:

- PostgreSQL database
- NestJS application

5. **Or run locally**

```bash
# Development mode
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

The API will be available at `http://localhost:3000`

---

## 📚 API Documentation

### Interactive Documentation

The API provides multiple ways to explore and test the endpoints:

#### 🔷 Swagger UI (Recommended)

Access the **interactive Swagger documentation** with a user-friendly interface:

```
https://task-manager-nestjs-production-b1b3.up.railway.app/api
```

Try out endpoints directly in your browser with built-in request/response examples!

#### 🔶 Postman Collection

Import the complete API collection into Postman:

[📮 View Postman Documentation](https://documenter.getpostman.com/view/29986735/2sAYBa9U1k)

### Key Endpoints

#### Authentication

```http
POST   /auth/signup        # Register new user
POST   /auth/signin        # Login user
```

#### Tasks

```http
GET    /tasks              # Get all tasks (with filters)
GET    /tasks/:id          # Get task by ID
POST   /tasks              # Create new task
PATCH  /tasks/:id          # Update task
DELETE /tasks/:id          # Delete task
```

#### Users

```http
GET    /users/me           # Get current user profile
PATCH  /users/me           # Update user profile
```

---

## 🧪 Testing

Run the test suites:

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

---

## 🛠️ Development

### Code Style

This project uses ESLint and Prettier for code formatting:

```bash
# Lint code
npm run lint

# Format code
npm run format
```

### Database Migrations

```bash
# Generate migration
npm run typeorm migration:generate -- -n MigrationName

# Run migrations
npm run typeorm migration:run

# Revert migration
npm run typeorm migration:revert
```

---

## 📦 Deployment

### Production Deployment

This application is **currently deployed and running on Railway** - a modern cloud platform for deploying applications.

**Live Production URL**: [https://task-manager-nestjs-production-b1b3.up.railway.app](https://task-manager-nestjs-production-b1b3.up.railway.app)

### Deploying to Railway

1. **Connect your GitHub repository** to Railway
2. **Configure environment variables** in Railway dashboard
3. **Deploy automatically** on every push to main branch

### Using Docker

```bash
docker build -t task-manager-api .
docker run -p 3000:3000 task-manager-api
```

### Using Docker Compose

```bash
docker-compose -f docker-compose.prod.yml up -d
```

### Environment Variables for Production

Ensure all sensitive environment variables are properly set in production:

- `JWT_SECRET` - Use a strong, unique secret
- `DB_PASSWORD` - Use a secure database password
- `NODE_ENV=production`

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the project's coding standards and includes appropriate tests.

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Nassar Barahme**  
_Computer Engineering Undergraduate | Full Stack Web & Mobile Developer_

- 💼 LinkedIn: [Nassar Barahme](www.linkedin.com/in/nassar-barahme-378826362

)

- 🐙 GitHub: [@NassarBarahme](https://github.com/NassarBarahme)

> 🚀 Currently focused on growing as a Back-End Developer and building clean, production-ready systems.

---

## 🙏 Acknowledgments

- [NestJS](https://nestjs.com/) - The progressive Node.js framework
- [TypeORM](https://typeorm.io/) - Amazing ORM for TypeScript
- All contributors who help improve this project

---

## 📞 Support

If you have any questions or need help, please:

- Open an [Issue](https://github.com/NassarBarahme/Task-Manager-Nestjs-/issues)
- Contact me via GitHub

---

<div align="center">
  <p>If you find this project helpful, please give it a ⭐️</p>
  <p>Made with ❤️ by Nassar Barahme</p>
</div>
