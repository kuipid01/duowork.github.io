
---

# Coding Convention

1. **File and Folder Structure:**
   - Use a modular component-based architecture.
   - Separate components into their own files.
   - Component that are pages should be in the `pages` folder.
   - Components that are shared with other components/pages should be in the `components` folder.
   - Place related components in the same folder under the `components` folder (e.g., _Buttons_ folder in the _components_ folder).
   - Use PascalCase for component filenames (e.g., `MyComponent.js`).
   - Use lowercase with hyphens for folder names (e.g., `my-component`).

2. **Component Naming:**
   - Use PascalCase for component names (e.g., `MyComponent`).
   - Use descriptive and meaningful names for components.
   - Avoid generic or ambiguous names.

3. **Component Declaration:**
   - Use functional components over class components.
   - Use arrow function syntax for functional components.
   - Use `React.memo` for optimizing functional components with no dependencies.
   - Use class components when managing state, using lifecycle methods, or integrating with external libraries.

4. **Component Structure:**
   - Follow a consistent order for lifecycle methods (e.g., `constructor`, `render`, `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`).
   - Use TypeScript typings for defining component props and their types.
   - Use TypeScript defaults to provide default values for optional props.
   - Avoid excessive nesting of components.

5. **JSX Formatting:**
   - Use single-line self-closing tags for components without children (e.g., `<MyComponent />`).
   - Use multiline format for components with children.
   - Place JSX attributes in multiple lines if they exceed the preferred line length.
   - Use parentheses around JSX when it spans multiple lines.
   - Use proper indentation and align attributes vertically.

6. **CSS and Styling:**
   - Use Sass or SCSS for scoped and modular styling.
   - Use class names that reflect the purpose of the styles.
   - Avoid inline styles unless necessary.
   - Place CSS or styling related to a component in the `sass` folder that is under the `styles` folder.

7. **State Management:**
   - Keep state local to component where necessary (eg., 'FormComponent' nested under 'App' should have state in the 'FormComonent' and not 'App').
   - Use hooks for managing states, side-effects and optimization where necessary (e.g., `useState`, `useEffect`, `useReducer`).

8. **Event Handling:**
   - Use arrow functions to handle events.
   - Avoid anonymous inline functions in JSX to prevent unnecessary re-rendering.

9. **Code Formatting:**
   - Use consistent indentation (e.g., 2 or 4 spaces).
   - Follow a consistent line length limit (e.g., 80 or 120 characters).
   - Use meaningful variable and function names.
   - Apply consistent spacing around operators and function parameters.
   - Use comments to explain complex logic, caveats, or possible improvements.

10. **Code Organization and Documentation:**
   - Keep code clean, readable, and maintainable.
   - Use descriptive comments to explain the purpose and functionality of components or complex logic.