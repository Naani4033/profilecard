# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
Component Design:
User Component:

Renders user details cleanly and dynamically from props.
Prop validation ensures data integrity and provides warnings during development.
UserCard Component:

Maps over userData to render a list of User components.
Includes a fallback (No users available) if userData is empty or undefined.
Code Quality:
Dynamic Rendering:

Skills are rendered dynamically using .map(), with unique keys for each skill (index).
Prop Validation:

Uses PropTypes to enforce type checking for props.
Readability:

The code is clean, with clear structure and logical flow.
