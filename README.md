# Admin Panel

An admin panel

## Created by using:

1. React JS
2. TypeScript
3. React Router v6
4. Redux + Redux Toolkit
5. Bootstrap 5
6. React Bootstrap Library (for speeding the development)
7. React Toastify Library (for speeding the development)

### Typescript:

1. Type aliases and interfaces are used.
2. array type annotation is used in both ways

### Redux + Redux Toolkit:

1. the "Ducks" pattern is used for better accessibility to the Rudux codes in the slices files
2. "Thunk" is used

### Components

1. only "button" type can be set on the type attribute of a button, beacuse the "submit" type is against the SPA concepts, so the Form component doesn't need to prevented by default, but I have placed it just in case the user changes the type manually to "submit".

## Test cases:

### Sign Up Form

1. on each each input on focus, if the error msg is shown, it should hide
