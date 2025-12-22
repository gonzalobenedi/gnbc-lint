# Commitlint - Conventional Commits

Este proyecto usa [commitlint](https://commitlint.js.org/) para asegurar que todos los commits sigan el estándar de [Conventional Commits](https://www.conventionalcommits.org/).

## Formato de Commits

Los commits deben seguir el formato:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Tipos Permitidos

- **feat**: Nueva funcionalidad
- **fix**: Corrección de bugs
- **docs**: Documentación
- **style**: Formato, comas faltantes, etc. (no afecta el código)
- **refactor**: Refactoring (no es ni feat ni fix)
- **perf**: Mejora de rendimiento
- **test**: Añadir o corregir tests
- **build**: Cambios en el sistema de build o dependencias externas
- **ci**: Cambios en archivos de configuración de CI
- **chore**: Mantenimiento del código
- **revert**: Revierte un commit anterior

### Ejemplos Válidos

```bash
feat: add new ESLint rule for React hooks
fix: resolve TypeScript parsing error
docs: update installation instructions
style: format code according to prettier rules
refactor: extract utility functions
test: add unit tests for Angular config
chore: update dependencies
```

### Ejemplos con Scope

```bash
feat(react): add new prop validation rule
fix(typescript): resolve import path resolution
docs(readme): update configuration examples
```

## Configuración

El proyecto está configurado con:

- **@commitlint/config-conventional**: Configuración base para conventional commits
- **husky**: Git hooks para ejecutar commitlint antes de cada commit

### Scripts Disponibles

```bash
# Verificar el último commit manualmente
npm run commitlint
```

## Reglas Configuradas

- Máximo 100 caracteres en el header
- Máximo 100 caracteres por línea en el body y footer
- El type es obligatorio y debe estar en minúsculas
- El subject es obligatorio y no debe terminar con punto
- Línea en blanco obligatoria antes del body y footer

## ¿Qué pasa si mi commit no cumple las reglas?

Si intentas hacer un commit que no sigue el formato, el hook `commit-msg` lo rechazará y verás un mensaje de error explicando qué regla se violó. Simplemente corrige el mensaje y vuelve a intentar el commit.
