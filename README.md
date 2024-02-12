# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
export default {
    // other rules...
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
    },
};
```

-   Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
-   Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

Para usar Vitest, necesitarás instalar algunas dependencias adicionales si planeas usar ciertas características. Aquí hay algunas que podrías necesitar:

1. **@testing-library/react**: Esta es una biblioteca de pruebas muy útil para React. Te permite renderizar tus componentes en un entorno de prueba y proporciona utilidades para interactuar con ellos. Puedes instalarla con el siguiente comando:

```bash
npm install --save-dev @testing-library/react
```

2. **jest-mock-extended**: Si planeas usar mocks en tus pruebas, esta biblioteca puede ser útil. Proporciona una API para crear mocks con TypeScript. Puedes instalarla con el siguiente comando:

```bash
npm install --save-dev jest-mock-extended
```

3. **ts-jest**: Si estás escribiendo tus pruebas en TypeScript, necesitarás esta biblioteca para transpilar tus pruebas a JavaScript antes de ejecutarlas. Puedes instalarla con el siguiente comando:

```bash
npm install --save-dev ts-jest
```

Estas son solo algunas de las dependencias que podrías necesitar. La lista exacta dependerá de las características que planees usar en tus pruebas. Recuerda siempre instalar las dependencias de desarrollo con `--save-dev` para evitar incluirlas en tu build de producción.
