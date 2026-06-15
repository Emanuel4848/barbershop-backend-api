# Barber SaaS Backend

Backend REST API desarrollado con Node.js, TypeScript, Express.js, PostgreSQL y Prisma ORM.

El enfoque principal del proyecto está en seguridad, arquitectura backend y reglas de negocio. Implementa autenticación con JWT, autorización basada en roles, hash de contraseñas, validación de datos, arquitectura modular por capas, Repository Pattern, Service Layer, control de disponibilidad para citas y reportes operativos del negocio.

## Enfoque técnico principal

* Autenticación segura con JWT.
* Autorización por roles: owner, admin y barber.
* Hash de contraseñas con bcrypt.
* Validación de datos con Zod.
* Arquitectura modular por capas.
* Repository Pattern para separar el acceso a datos.
* Service Layer para manejar lógica de negocio.
* Middlewares de autenticación, autorización y validación.
* Reglas de negocio para evitar choque de horarios en citas.
* Reportes operativos usando Prisma y SQL directo.
* Configuración con variables de entorno.
* Preparación para ejecución en contenedores con Docker.
* Manejo de ramas en Git por funcionalidad.
* API probada con Postman.

## Tecnologías utilizadas

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge\&logo=express\&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge\&logo=postgresql\&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge\&logo=prisma\&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Authentication-black?style=for-the-badge\&logo=jsonwebtokens\&logoColor=white)
![bcrypt](https://img.shields.io/badge/bcrypt-Password%20Hashing-blue?style=for-the-badge)
![Zod](https://img.shields.io/badge/Zod-Validation-3E67B1?style=for-the-badge)
![Docker](https://img.shields.io/badge/Docker-Containerization-2496ED?style=for-the-badge\&logo=docker\&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-API%20Testing-FF6C37?style=for-the-badge\&logo=postman\&logoColor=white)
![Git](https://img.shields.io/badge/Git-Version%20Control-F05032?style=for-the-badge\&logo=git\&logoColor=white)

## Arquitectura

El proyecto utiliza una arquitectura modular por capas para separar responsabilidades y mantener el código organizado.

```txt
routes
↓
middlewares
↓
controllers
↓
services
↓
repositories
↓
Prisma ORM
↓
PostgreSQL
```

## Patrones y buenas prácticas aplicadas

* Repository Pattern: separa las consultas a base de datos de la lógica del sistema.
* Service Layer: concentra validaciones y reglas de negocio.
* Middlewares: controlan autenticación, autorización y validación de datos.
* Modularización por dominio: users, auth, roles, clients, services, barbers, appointments y reports.
* Manejo de errores desde services y controllers.
* Uso de variables de entorno para configuración sensible.
* Flujo de trabajo con ramas por funcionalidad en Git.

## Seguridad

* Login con JWT.
* Middleware para verificar token.
* Protección de rutas privadas.
* Control de permisos por rol.
* Contraseñas protegidas con bcrypt.
* Validación de entrada con Zod.
* Separación entre autenticación y autorización.
* Variables sensibles fuera del repositorio mediante archivos `.env`.

## Reglas de negocio

* Un barbero no puede tener dos citas en el mismo horario.
* Las citas manejan estados controlados: scheduled, completed y cancelled.
* Se valida la existencia de cliente, barbero y servicio antes de crear o actualizar una cita.
* Los reportes están protegidos para usuarios owner y admin.

## Reportes disponibles

* Citas agrupadas por estado.
* Servicios más utilizados.
* Barberos con más citas.
* Ingresos totales por citas completadas.

## Docker

El proyecto incluye configuración para ejecución con Docker.

Archivos principales:

* `Dockerfile`: define la imagen del backend.
* `docker-compose.yml`: permite levantar el backend junto con PostgreSQL para pruebas locales.
* `.dockerignore`: evita copiar archivos innecesarios o sensibles a la imagen.
* `.env.example`: muestra las variables necesarias sin exponer credenciales reales.

El archivo `.env` y `.env.docker` no deben subirse al repositorio.
