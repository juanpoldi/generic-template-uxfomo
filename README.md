# UX fomo - Template Base (React)

Template React/Vite para UX fomo, diseñado siguiendo las reglas de diseño de `.agent/rules/rules-uxfomo.md`.

## 📊 Estado Actual

**Versión:** 1.0.0 (Actualizado Feb 2026)  
**Estado:** ✅ Funcional y listo para desarrollo  
**Última actualización:** Integración completa de Radix UI para accesibilidad

### Lo que funciona:
- ✅ Navegación completa con menús desplegables (Radix UI)
- ✅ Sistema de búsqueda con modal y overlay
- ✅ Autenticación simulada con localStorage
- ✅ Sistema de configuración con 5 secciones
- ✅ Layouts responsive (con y sin sidebar)
- ✅ Componentes UI reutilizables y accesibles
- ✅ Página de demostración de Radix UI

## 🎯 Características

- **100% Responsive**: Mobile-first, adaptado a todos los tamaños de pantalla
- **Header completo con Radix UI**:
  - Logo
  - Navegación con 6 categorías y dropdowns accesibles
  - Buscador con modal (Dialog)
  - Sistema de autenticación simulado con Avatar
  - Menú hamburguesa para móvil
- **Dos layouts disponibles**:
  - `Layout`: Contenido a ancho completo
  - `LayoutWithSidebar`: Contenido principal + sidebar a la derecha (sticky en desktop)
- **Sidebar modular**: Widgets de navegación rápida, contenido destacado, newsletter y categorías
- **Footer**: Logo, sitemap, newsletter con checkbox accesible y enlaces legales
- **Sistema de Configuración**: 5 páginas de ajustes con navegación lateral
  - Perfil (con Avatar y formularios)
  - Cuenta (con Select para idioma)
  - Seguridad (con Switch para 2FA)
  - Notificaciones (con múltiples Switches y Select)
  - Privacidad (con Switches y Select para visibilidad)

## 🎨 Sistema de diseño

### Colores
- **Base**: Paleta neutra de grises
- **Acento**: Morado (`#9333ea`) para acciones primarias y elementos interactivos
- El color se usa con moderación según las reglas de UX fomo

### Tipografía
- **Fuente**: Inter (Google Fonts)
- Jerarquía clara entre títulos, contenido, metadatos y acciones
- Optimizada para legibilidad en lectura media y larga

### Componentes
- Inspirados en Catalyst
- Consistencia sobre originalidad
- Sin ornamentación innecesaria

## 🛠️ Tecnologías

### Core
- **React 19.2.0** - Biblioteca UI con las últimas características
- **Vite 7.2.4** - Build tool ultra-rápido con HMR
- **React Router DOM 7.13.0** - Navegación entre páginas

### Estilos
- **Tailwind CSS 4.1.18** - Framework CSS utility-first con plugin de Vite
- **CSS Custom Properties** - Variables para temas y consistencia

### Componentes UI
- **Radix UI** - Suite completa de componentes primitivos accesibles:
  - `@radix-ui/react-dropdown-menu` - Menús desplegables
  - `@radix-ui/react-dialog` - Modales y overlays
  - `@radix-ui/react-avatar` - Avatares con fallback
  - `@radix-ui/react-switch` - Toggles/switches
  - `@radix-ui/react-select` - Selectores personalizados
  - `@radix-ui/react-checkbox` - Checkboxes accesibles
  - `@radix-ui/react-label` - Labels asociados
  - Y más componentes disponibles

### Utilidades
- **localStorage** - Persistencia de sesión simulada
- **ESLint** - Linter para calidad de código
- **Google Fonts (Inter)** - Tipografía optimizada para UI

## 📂 Estructura

```
generic-template-uxfomo/
├── .agent/rules/
│   └── rules-uxfomo.md           # Reglas de diseño UX fomo
├── src/
│   ├── components/
│   │   ├── ui/                   # Componentes UI reutilizables
│   │   │   ├── Card.jsx          # Card base (default, highlighted)
│   │   │   ├── CardTitle.jsx     # Título para cards
│   │   │   ├── Tag.jsx           # Tag/Badge interactivo
│   │   │   ├── NavLink.jsx       # Enlace de navegación
│   │   │   ├── ArticleCard.jsx   # Card de artículo destacado
│   │   │   ├── NewsletterForm.jsx # Newsletter con Radix Checkbox
│   │   │   ├── FooterSection.jsx # Sección del footer con links
│   │   │   └── index.js          # Barrel export
│   │   ├── Header.jsx            # Header con Radix DropdownMenu, Dialog, Avatar
│   │   ├── Footer.jsx            # Footer con sitemap y newsletter
│   │   ├── Layout.jsx            # Layout básico
│   │   ├── LayoutWithSidebar.jsx # Layout con sidebar sticky
│   │   ├── Sidebar.jsx           # Sidebar con widgets modulares
│   │   ├── SettingsLayout.jsx    # Layout para páginas de configuración
│   │   ├── SettingsSidebar.jsx   # Sidebar de navegación de settings
│   │   ├── SearchBar.jsx         # Barra de búsqueda del header
│   │   └── Logo.jsx              # Logo reutilizable
│   ├── pages/
│   │   ├── Home.jsx              # Página principal
│   │   ├── SidebarPage.jsx       # Ejemplo con sidebar
│   │   ├── RadixDemo.jsx         # Demostración de Radix UI
│   │   └── settings/             # Páginas de configuración
│   │       ├── SettingsPage.jsx  # Router de settings
│   │       ├── ProfileSection.jsx     # Perfil (Avatar, Labels)
│   │       ├── AccountSection.jsx     # Cuenta (Select idioma)
│   │       ├── SecuritySection.jsx    # Seguridad (Switch 2FA)
│   │       ├── NotificationsSection.jsx # Notificaciones (Switches, Select)
│   │       └── PrivacySection.jsx     # Privacidad (Switches, Select)
│   ├── config/
│   │   └── settingsConfig.js     # Configuración de navegación settings
│   ├── context/
│   │   └── SessionContext.jsx    # Sesión simulada (localStorage)
│   ├── App.jsx                   # Router principal
│   ├── index.css                 # Sistema de diseño + Tailwind
│   └── main.jsx                  # Entry point
├── RADIX_UI_UPGRADE.md           # Documentación Radix UI
├── ACTUALIZACION_COMPLETADA.md   # Log de actualización
├── COMPONENTS.md                 # Guía de componentes UI
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🚀 Uso

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` (o el puerto que indique Vite) en tu navegador.

## 📄 Páginas Disponibles

El template incluye las siguientes páginas funcionales:

| Ruta | Descripción | Layout |
|------|-------------|--------|
| `/` | Página principal con información del template | Layout básico |
| `/sidebar` | Ejemplo de página con sidebar lateral | LayoutWithSidebar |
| `/radix-demo` | Demostración interactiva de componentes Radix UI | Layout básico |
| `/configuracion/perfil` | Configuración de perfil de usuario | SettingsLayout |
| `/configuracion/cuenta` | Configuración de cuenta y preferencias | SettingsLayout |
| `/configuracion/seguridad` | Configuración de seguridad y contraseñas | SettingsLayout |
| `/configuracion/notificaciones` | Preferencias de notificaciones | SettingsLayout |
| `/configuracion/privacidad` | Configuración de privacidad y cookies | SettingsLayout |

### Simular sesión de usuario

- **Sin sesión**: Se muestra el botón "Sign in"
- **Con sesión**: Se muestra un avatar con dropdown (iniciales "JD")

Para probar:
1. Haz click en "Sign in" para simular un login
2. El avatar aparecerá con las iniciales "JD"
3. Haz click en el avatar para ver el menú
4. Selecciona "Cerrar sesión" para volver al estado inicial

## 📱 Responsive

- **Móvil** (< 768px): Menú hamburguesa, sidebar debajo del contenido
- **Tablet** (768px - 1024px): Layout intermedio, sidebar debajo del contenido
- **Desktop** (> 1024px): Layout completo con nav horizontal, sidebar sticky a la derecha

## 🎨 Cambiar entre layouts

Puedes elegir el layout según tus necesidades:

### Layout básico (ancho completo)
```jsx
import Layout from './components/Layout'

function App() {
  return (
    <Layout>
      {/* Tu contenido aquí */}
    </Layout>
  )
}
```

### Layout con sidebar
```jsx
import LayoutWithSidebar from './components/LayoutWithSidebar'

function App() {
  return (
    <LayoutWithSidebar>
      {/* Tu contenido aquí */}
    </LayoutWithSidebar>
  )
}
```

El sidebar incluye widgets modulares que puedes personalizar en `src/components/Sidebar.jsx`.

## 🧩 Componentes UI reutilizables

El template incluye un sistema de componentes UI base en `src/components/ui/` y está potenciado con **Radix UI** para máxima accesibilidad:

### Componentes personalizados

- **`<Card>`**: Contenedor base con variantes (`default`, `highlighted`)
- **`<CardTitle>`**: Título consistente para cards
- **`<Tag>`**: Badge/Tag interactivo para categorías
- **`<NavLink>`**: Enlace de navegación con estilos consistentes
- **`<ArticleCard>`**: Card para artículos destacados con título, descripción y fecha
- **`<NewsletterForm>`**: Formulario de newsletter con **Radix UI Checkbox** y Label
- **`<FooterSection>`**: Sección del footer con lista de enlaces

### Componentes Radix UI integrados

- **DropdownMenu**: Menús desplegables en navegación y perfil de usuario
- **Dialog**: Modal de búsqueda con overlay blur
- **Avatar**: Avatares con fallback automático
- **Switch**: Toggles accesibles en configuraciones
- **Select**: Selectores personalizados con indicadores visuales
- **Checkbox**: Checkboxes con estados visuales mejorados
- **Label**: Labels accesibles asociados a controles de formulario

Ver `RADIX_UI_UPGRADE.md` para documentación completa de la integración Radix UI.

### Características de Accesibilidad (Radix UI)

Todos los componentes interactivos incluyen:
- ✅ **Navegación por teclado**: Tab, Enter, Escape, flechas
- ✅ **Roles ARIA**: Semántica correcta para lectores de pantalla
- ✅ **Gestión de foco**: Focus trap en modales, auto-focus en elementos
- ✅ **Estados visuales**: Hover, focus, active, checked/unchecked
- ✅ **Portales**: Renderizado óptimo de overlays y dropdowns

### Ejemplo de uso

```jsx
import { Card, CardTitle, Tag, ArticleCard } from './components/ui'

function MyComponent() {
  return (
    <Card variant="highlighted">
      <CardTitle>Mi sección</CardTitle>
      <ArticleCard
        title="Título del artículo"
        description="Descripción breve"
        time="Hace 2 horas"
        href="/article"
      />
      <div className="flex gap-2 mt-4">
        <Tag href="/tag1">Etiqueta 1</Tag>
        <Tag href="/tag2">Etiqueta 2</Tag>
      </div>
    </Card>
  )
}
```

Todos los componentes UI son totalmente personalizables mediante props y className.

## ✅ Checklist de reglas aplicadas

- ✅ Mobile-first y 100% responsive
- ✅ Tailwind solo como representación visual
- ✅ Colores neutrales + un acento (morado)
- ✅ Tipografía Inter con jerarquía clara
- ✅ Componentes inspirados en Catalyst
- ✅ Claridad sobre ornamentación
- ✅ Ritmo vertical y espaciado consistente
- ✅ Estados contemplados (vacío, hover, focus, activo)
- ✅ Datos simulados con localStorage
- ✅ Sin autenticación real (solo simulada)
- ✅ Foco en diseño UX + estructura visual
- ✅ Accesibilidad con Radix UI (WAI-ARIA compliant)

## 📋 Tareas Pendientes

### Alta Prioridad

- [ ] **Separar opciones de Perfil de Configuración**
  - Actualmente el perfil del usuario está dentro de `/configuracion/perfil`
  - Crear una ruta independiente `/perfil` o `/mi-perfil`
  - Mover Avatar, nombre, biografía y foto de perfil fuera de Configuración
  - Mantener solo ajustes técnicos en Configuración
  - Actualizar navegación del Header para incluir enlace directo a Perfil

- [ ] **Mejorar página de demostración Radix**
  - Añadir ejemplos de uso con código
  - Incluir casos de uso reales
  - Documentar patrones de accesibilidad

### Media Prioridad

- [ ] **Implementar componentes Radix adicionales**
  - Toast para notificaciones temporales
  - Tooltip para información contextual
  - AlertDialog para confirmaciones importantes (ej: eliminar cuenta)
  - Popover para información adicional
  - RadioGroup para selecciones exclusivas

- [ ] **Mejorar animaciones**
  - Añadir transiciones suaves a Dialogs
  - Implementar animaciones de entrada/salida
  - Mejorar feedback visual en interacciones

- [ ] **Sistema de temas**
  - Preparar variables CSS para modo oscuro
  - Implementar toggle de tema claro/oscuro
  - Persistir preferencia en localStorage

### Baja Prioridad

- [ ] **Testing**
  - Añadir tests unitarios con Vitest
  - Tests de accesibilidad con jest-axe
  - Tests de integración con Testing Library

- [ ] **Optimizaciones**
  - Implementar lazy loading de rutas
  - Optimizar bundle size
  - Añadir PWA capabilities

- [ ] **Documentación**
  - Crear Storybook para componentes
  - Guías de desarrollo para nuevos contributors
  - Ejemplos de patrones comunes

### Mejoras de UX

- [ ] **Búsqueda funcional**
  - Implementar lógica de búsqueda real
  - Añadir sugerencias y autocompletado
  - Historial de búsquedas recientes

- [ ] **Estados de carga**
  - Añadir spinners/skeletons
  - Indicadores de progreso
  - Manejo de errores mejorado

- [ ] **Validación de formularios**
  - Implementar validación en tiempo real
  - Mensajes de error descriptivos
  - Estados de éxito/error visuales

## 🤝 Contribuir

Para contribuir al template:

1. Revisa las tareas pendientes arriba
2. Sigue las reglas de diseño en `.agent/rules/rules-uxfomo.md`
3. Mantén la consistencia con Radix UI para componentes interactivos
4. Asegúrate de que los cambios son responsive
5. Prueba la accesibilidad (navegación por teclado, lectores de pantalla)

---

**Principio rector**: Si se entiende mejor, es mejor. La claridad siempre gana.
