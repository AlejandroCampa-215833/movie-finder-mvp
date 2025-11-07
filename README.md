## Descripción
MovieFinder MVP es una aplicación web moderna diseñada para ayudar a los usuarios a descubrir películas mediante un sistema avanzado de búsqueda y filtrado. El proyecto implementa las mejores prácticas de desarrollo React, optimización de rendimiento y diseño de interfaces intuitivas.

## Objetivo del Proyecto
Crear un Producto Mínimo Viable (MVP) funcional que permita a los usuarios:

- Buscar películas por diferentes criterios
- Aplicar múltiples filtros simultáneamente
- Visualizar información detallada de cada película
- Disfrutar de una experiencia de usuario fluida y responsive

## Instalacion
### 1. Clonar el repositorio
- git clone https://github.com/tu-usuario/movie-finder-mvp.git

### 2. Entrar al directorio
- cd movie-finder-mvp

### 3. Instalar dependencias
- npm install

### 4. Iniciar la aplicación
- npm start

## Características
## Funcionalidades Principales
| Funcionalidad | Descripción | Estado |
| :--- | :--- | :--- |
| Búsqueda Dinámica | Búsqueda en tiempo real por título, actor o director | Implementado |
| Filtro por Género | Selección de géneros específicos (Drama, Acción, etc.) | Implementado |
| Filtro por Director | Búsqueda de películas por director | Implementado |
| Filtro por Actor | Filtrado por actores específicos | Implementado |
| Filtro por Año | Selección de películas por año de lanzamiento | Implementado |
| Filtro por Premios | Mostrar solo películas premiadas | Implementado |
| Filtros Combinados | Aplicación simultánea de múltiples filtros | Implementado |
| Diseño Responsive | Adaptable a móvil, tablet y desktop | Implementado |

## Requisitos Previos
Antes de comenzar, asegúrate de tener instalado:

bash
- node --version  # v14.0.0 o superior
- npm --version   # v6.0.0 o superior
- git --version   # v2.0.0 o superior

## Instalación de Requisitos
### Windows:
- Descargar Node.js desde: https://nodejs.org/
- Git desde: https://git-scm.com/download/win

### macOS:
- bashbrew install node
- brew install git

### Linux (Ubuntu/Debian):
- sudo apt update
- sudo apt install nodejs npm git

## Componentes
App.js (Principal)
### Responsabilidades:

- Gestión del estado global
- Lógica de filtrado y búsqueda
- Orquestación de componentes hijos
- Renderizado del layout principal

### Estados gestionados:

- searchQuery - Término de búsqueda
- selectedGenre - Género seleccionado
- selectedDirector - Director seleccionado
- selectedActor - Actor seleccionado
- selectedYear - Año seleccionado
- hasAwards - Filtro de premios
- showFilters - Visibilidad del panel de filtros

### SearchBar.js
#### Props:

- searchQuery - Valor actual de búsqueda
- onSearchChange - Callback para cambios

#### Funcionalidad:

- Búsqueda en tiempo real
- Placeholder descriptivo
- Estilos con feedback visual

### Filters.js
#### Props:

- genres, directors, actors, years - Opciones disponibles
- selected* - Valores seleccionados actuales
- on*Change - Callbacks para cada filtro
- onClearFilters - Limpiar todos los filtros
- showFilters - Estado de visibilidad
- onToggleFilters - Toggle del panel

#### Funcionalidad:

- Panel colapsable de filtros
- Contador de filtros activos
- Dropdowns para cada criterio
- Checkbox para premios
- Botón de limpiar filtros

### MovieCard.js
#### Props:

- movie - Objeto con información de la película

#### Funcionalidad:

- Visualización de poster
- Información organizada
- Badges de géneros
- Hover effects
- Diseño responsive
