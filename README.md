# Review

# Assignment
For the assignment we created a simple form to save a review via the API (which is included in the assignment).
We only created a starting point so the form is not doing anything yet.

The reviews which are saved should be displayed in a list below the form.
We already created an example of how to display the reviews.

It is required to use Redux for handeling the state.
Its up to you to setup everything:

- http://redux.js.org/
- https://github.com/reactjs/react-redux

Must have:

- Saving the reviews
- Delete the reviews using a nice button
- Form validation
- Pagination (5 reviews per page)
- Success message when a review is saved

Bonus points:

- Fake loading state by implementing timeout of 3 seconds
- Replace Bootstrap with Material UI (https://material-ui.com/) or with Styled Components (https://www.styled-components.com/) and motivate why you picked one over the other.
- Add tests using Jest (https://jestjs.io/) and if necessary Enzyme (https://airbnb.io/enzyme/) 

Feel free to add your own features. Do not over-engineer!

If you have any questions feel free to e-mail Mujib (mujib@fixico.nl).

## Git
Create a seperate branch (the name does not matter) to work in. Once you are finished please create a pull request so we can review your code.

Use clear commit messages and dont worry about having many commits where you change things around often.

# Installation
**Note**: We verified the assignment using npm 6.4.1 and node 11.3.0. However, it should also work on older versions.

1. Clone the project
2. Use `npm install` to install the dependencies.
3. Run `npm start` to launch the app. This should open your browser. If not, open http://localhost:3000.
4. Run `npm run api` in a seperate window/tab to start the API.

# API

We use https://github.com/typicode/json-server for the test API.

## GET /reviews
Retrieves all posts.

### Response

```json
[
    {
        "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "id": 1,
        "rating": "3"
    },
    {
        "body": "Donec mattis, quam eget mattis pretium, nisi elit pellentesque sapien, id consequat eros risus vel neque.",
        "id": 2,
        "rating": "5"
    }
]
```

## POST /reviews

### Request

```json
{
    "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    "rating": 4
}
```

### Response

```json
{
    "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    "rating": "4",
    "id": 3
}
```

## DELETE /reviews/{id}

### Request
```json
{}
```

### Response
```json
{}
```

(Yes, the request and response are empty)