# TP MongoDB UTN

## Descripción del Proyecto
Este proyecto implementa una solución para la gestión de un comercio utilizando MongoDB, TypeScript y Node.js. El sistema permite a las personas interactuar con los datos según su rol: Administrador o Usuario. Los administradores tienen permisos para realizar operaciones CRUD sobre los productos, mientras que los usuarios tienen permisos más limitados.

## Funcionalidades Principales
### 1. Gestión de Productos
#### Administradores
- **Crear Producto**:
  - Permite a los administradores añadir un nuevo producto al inventario especificando su nombre, descripción, precio, y cantidad.
- **Actualizar Producto**:
  - Permite a los administradores modificar los datos de un producto existente. Se identifican por su ID.
- **Eliminar Producto**:
  - Permite a los administradores eliminar un producto del inventario por su ID.

#### Usuarios
- **Listar Productos**:
  - Permite a los usuarios visualizar todos los productos disponibles.
- **Obtener Producto por ID**:
  - Devuelve los detalles de un producto específico.

### 2. Gestión de Usuarios
- **Registro de Usuarios**:
  - Permite crear nuevos usuarios asignándoles un rol (por defecto "usuario").
- **Asignación de Roles**:
  - Permite modificar el rol de un usuario (solo administradores).

## Requisitos Previos
- Node.js
- MongoDB
- TypeScript

## Instalación
1. Clona este repositorio:
   ```bash
   git clone https://github.com/Mattcab98/tp_mongoDB-utn.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura las variables de entorno en un archivo `.env`:
   ```env
   MONGO_URI=<Tu conexión a MongoDB>
   PORT=<Puerto para ejecutar el servidor>
   ```
4. Ejecuta el proyecto:
   ```bash
   npm run dev
   ```

## Estructura del Proyecto
- **/src**: Contiene el código fuente principal.
  - **controllers**: Define la lógica de negocio para cada funcionalidad.
  - **routes**: Contiene las rutas de la aplicación.
  - **models**: Define los esquemas de MongoDB utilizando Mongoose.
  - **middlewares**: Incluye lógica para la validación de roles.
  - **utils**: Funciones auxiliares.

## Tecnologías Utilizadas
- **Node.js**: Entorno de ejecución de JavaScript para el backend.
- **TypeScript**: Tipado estático para JavaScript.
- **MongoDB**: Base de datos NoSQL.
- **Mongoose**: ODM para interactuar con MongoDB.
- **Express**: Framework para construir aplicaciones backend.

## Autor
Proyecto desarrollado por Matías Álvarez Bustos ([Mattcab98](https://github.com/Mattcab98)).

## Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
