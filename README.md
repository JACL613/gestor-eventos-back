# 🚀 Gestor de Eventos - Backend

## 📚 Índice

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Endpoints API](#-endpoints-api)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Contribución](#-contribución)
- [Licencia](#-licencia)

## 🌟 Descripción

Bienvenido al backend de nuestra aplicación de Gestión de Eventos. Esta API robusta y escalable proporciona todas las funcionalidades necesarias para gestionar usuarios y eventos de manera eficiente y segura.

## ✨ Características

- 🔐 Autenticación de usuarios con JWT
- 📊 CRUD completo para eventos
- 🔍 Filtrado avanzado de eventos
- 🛡️ Middleware de autorización para rutas protegidas
- 📦 Integración con MongoDB para almacenamiento de datos

## 🛠 Tecnologías

- Node.js
- Express.js
- MongoDB con Mongoose
- JSON Web Tokens (JWT) para autenticación
- bcrypt para el hash de contraseñas
- cors para manejo de CORS

## 🚀 Instalación

1. Clona este repositorio:
   ```
   git clone https://tu-repositorio.git
   cd backend
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:
   ```
   PORT=5000
   MONGODB_URI=tu_uri_de_mongodb
   JWT_SECRET=tu_secreto_jwt
   ```

## 🖥 Uso

Para iniciar el servidor en modo desarrollo:

```
npm run dev
```

Para iniciar el servidor en modo producción:

```
npm start
```

El servidor estará disponible en `http://localhost:5000`.

## 🔗 Endpoints API

### Autenticación

- POST /api/auth/register - Registrar un nuevo usuario
- POST /api/auth/login - Iniciar sesión

### Eventos

- GET /api/events - Obtener todos los eventos del usuario
- POST /api/events - Crear un nuevo evento
- GET /api/events/:id - Obtener un evento específico
- PUT /api/events/:id - Actualizar un evento
- DELETE /api/events/:id - Eliminar un evento
- GET /api/events/filter - Filtrar eventos por fecha o ubicación

## 📁 Estructura del Proyecto

```
backend/
│
├── models/
│   ├── User.js
│   └── Event.js
│
├── routes/
│   ├── auth.js
│   └── events.js
│
├── middleware/
│   └── auth.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue o realiza un pull request con tus sugerencias.


---

Desarrollado con 💻 por J.A.C.L