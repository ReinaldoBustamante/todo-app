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
│           ├── add-todos # Componente para añadir nuevas tareas
│           ├── filters   # Componente para filtrar la lista de tareas
│           ├── headers   # Componente del encabezado de la aplicación
│           ├── progress  # Componente que muestran el progreso de tareas completadas
│           ├── services  # Lógica y utilidades para comunicación con APIs
│           ├── todo      # Componente que representan una tarea individual
│           └── todos     # Componente que renderizan y gestionan el listado de tareas
└── docker-compose.yml # Orquestador de los servicios del backend, app y base de datos
```
