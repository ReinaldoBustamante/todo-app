# Todo apps

Este es una aplicacion de gestion de tareas desarrollado con angular, el cual posee una api rest creada con express conectada a travez de contenedores docker.

## Tecnologías 

- **Frontend**: Angular
- **Backend**: Node.js, Express
- **ORM**: Prisma
- **BD**: Postgresql
- **Estilos**: SaSS

## Estructura del proyecto
```bash
├── backend
│   ├── src
│   │   ├── presentation # servidor, rutas, controlladores
│   │   ├── domain # Dtos, errores
│   │   ├── config # conexión prisma
│   │   └── app.ts # aplicación
│   └── prisma
│       └── schema.prisma # Definición de modelos
├── frontend
│   └──  src
│        └── app 
│            ├── add-todos # Dtos,
│            ├── filters
│            ├── headers
│            ├── progress
│            ├── services
│            ├── todo
│            └── todos
└── docker-compose.yml # Orquestador de los servicios del backend, app y base de datos
```
