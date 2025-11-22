# Portafolio Personal

Portafolio personal desarrollado con Next.js, TypeScript y Tailwind CSS, optimizado para desplegar en Vercel.

## 🚀 Características

- ✨ Diseño moderno y elegante con tema oscuro
- 🎨 Paleta de colores morado/violeta profesional
- 📸 Sección hero con foto de perfil integrada
- 📊 Habilidades con barras de progreso animadas
- 📱 Totalmente responsive y adaptable
- ⚡ Optimizado para rendimiento
- 🎭 Animaciones suaves y transiciones elegantes
- 🔍 SEO optimizado
- 🌟 Efectos visuales modernos (gradientes, blur, sombras)

## 🛠️ Tecnologías

- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos
- **React Icons** - Iconos

## 📦 Instalación

1. Clona el repositorio o descarga los archivos
2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 🚢 Despliegue en Vercel

### Opción 1: Desde la interfaz de Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Inicia sesión con tu cuenta de GitHub
3. Haz clic en "New Project"
4. Importa tu repositorio
5. Vercel detectará automáticamente Next.js y configurará todo
6. Haz clic en "Deploy"

### Opción 2: Desde la línea de comandos

1. Instala Vercel CLI:

```bash
npm i -g vercel
```

2. Despliega:

```bash
vercel
```

## 📝 Personalización

### Actualizar información personal

1. **Hero Section** (`components/Hero.tsx`):
   - Cambia "Tu Nombre" por tu nombre
   - Actualiza los enlaces de redes sociales
   - Modifica la descripción
   - Asegúrate de tener tu foto en `public/foto.jpg`

2. **About Section** (`components/About.tsx`):
   - Personaliza la descripción sobre ti
   - Actualiza la información personal (edad, residencia, etc.)
   - Modifica las habilidades y sus porcentajes
   - Actualiza las tecnologías que manejas

3. **Projects Section** (`components/Projects.tsx`):
   - Reemplaza los proyectos de ejemplo con tus proyectos reales
   - Actualiza los enlaces de GitHub y demos

4. **Contact Section** (`components/Contact.tsx`):
   - Actualiza tu email, teléfono y ubicación
   - Configura el formulario de contacto (puedes usar servicios como Formspree o EmailJS)

5. **Metadata** (`app/layout.tsx`):
   - Actualiza el título y descripción del sitio

## 🎨 Personalización de colores

Los colores principales están definidos en `tailwind.config.js`. Puedes modificar la paleta de colores en la sección `colors.primary`.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

