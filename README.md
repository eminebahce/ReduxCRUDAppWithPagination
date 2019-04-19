# Review

For the basic crud application I created a simple form to save a review via the API (which is included in the project folder).

With this application you can do these:

- Saving the reviews
- Delete the reviews using a nice button
- Form validation
- Pagination (5 reviews per page)
- Success message when a review is saved
- Fake loading state by implementing timeout of 3 seconds
- Material UI (https://material-ui.com/)
- Test with Jest and Enzyme

# Installation

1. Clone the project
2. Use `npm install` to install the dependencies.
3. Run `npm start` to launch the app. This should open your browser. If not, open http://localhost:3000.
4. Run `npm run api` in a seperate window/tab to start the API.

# API

I used https://github.com/typicode/json-server for the test API.

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
