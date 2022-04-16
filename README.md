# Blog Api ✍️

## Instructions

- Fork and clone [this repository](https://github.com/JoinCODED/Task-Express-M3-Middlewares-SQL) to your `Development` folder.

### Not Found Middleware

Create a middleware that handles requests to non-existing paths.

1. Create a middleware method before the `run` method.
2. This middleware should end the response with a `404` status code and a message that says `Path Not Found`.
3. Test your middleware by sending a request to a non-existing path, for example `/whatever`.

### Error Handling Middleware

Create a middleware that handles all the errors in your application.

1. Pass four arguments to your middleware's function: `err`, `req`, `res` and `next`.
2. Set the response status to the error object's status. If it doesn't have a status, give it a default status of `500`.
3. Send an object with the message from the error object as a JSON response. If the error object doesn't have a message, give it the following default message `Internal Server Error`.

### Fetch Post Function

In `controllers.js`, create a function called `fetchPost` that handles finding a post from the database by its ID.

1. Pass this function two arguments: `postId` `next`.
2. In a `try catch` statement, fetch the post by passing `postId` to `findByPk` if it exist.
3. Return the found post.
4. In your `catch` block, pass the error to `next` to trigger the error handling middleware.
5. Don't forget to export your function.

#### Router Param

In `routes.js`, create a `param` middleware that handles fetching a post and saving it in the request object.

1. Create a `router.param` middleware that handles `postId` route parameters.
2. Pass four arguments to this middleware's function: `req`, `res`, `next` and `postId`.
3. Require `fetchPost`, call it, pass it `postId` and `next`, and save the returned value in a variable called `post`.
4. If `post` exists, save it in the request object.
5. Else, create an error object with the message `Post Not Found` or your own message.
6. Change the error object's status code to `404`.
7. Pass the error object to `next` to trigger the error handling middleware.

#### Cleanup

1. Remove all the extra code in all the controllers that are using `router.param`.
2. Access the post from the request object.
3. Test your routes to make sure they're working properly.

### 🍋 Slug Middleware

Create a custom middleware when creating a blog that generates a slug for the blog title and adds it to the request.

### 🌶 Validation Middleware

Use a validation middleware [library](https://www.npmjs.com/package/express-validation).

Validate that the `title` argument contains letters and not only numbers, and does not exceed 40 character.
