module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Estas reglas son configuraciones adicionales que puedes ajustar
    'type-enum': [
      2,
      'always',
      [
        'feat',     // Nueva funcionalidad
        'fix',      // Corrección de bugs
        'docs',     // Documentación
        'style',    // Formato, comas faltantes, etc. (no afecta el código)
        'refactor', // Refactoring (no es ni feat ni fix)
        'perf',     // Mejora de rendimiento
        'test',     // Añadir o corregir tests
        'build',    // Cambios en el sistema de build o dependencias externas
        'ci',       // Cambios en archivos de configuración de CI
        'chore',    // Mantenimiento del código
        'revert'    // Revierte un commit anterior
      ]
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 100],
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100]
  }
};