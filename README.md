# Admin Panel

An admin panel

## Created by using:

1. React JS + TypeScript
2. React Router v6
3. Redux + Redux Toolkit
4. React-Redux
5. Bootstrap 5
6. React Toastify Library (only for toasts and speeding the development)
7. Joi

Note: "React Bootstrap" is not installed and not used purposely, for better practicing bootstrap code

### Typescript:

1. Type aliases are used.

### Redux + Redux Toolkit:

1. the "Ducks" pattern is used for better accessibility to the Redux codes in the slices files, becuase the codes of the 3 blocks of code is in one file
2. "Thunk" is used (for api and local storage services)

### Components

1. only "button" type can be set on the type attribute of a button, because the "submit" type is against the SPA concepts, so the Form component doesn't need to prevented by default, but I have placed it just in case the user changes the type manually to "submit".

## Directory (folders and files) structure

The directory structure is based on the article in this link: https://www.taniarascia.com/react-architecture-directory-structure/

## Manual Testing Scenarios

1. 404 error page and 404 error view
2. form controls errs functionality
3. proctected routes in "logged out" and "logged in" scenarios
4. success and error msgs being shown for apis
