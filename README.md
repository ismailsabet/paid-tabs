## Project information

Total hours: 8

## Things to note

For the authentication:

- Ideally, I would check authentication in the middleware or on the server, but since we're using localStorage, I had to do it on the client. I've added a client component wrapper around all the children in the root layout. I'm not sure if you were expecting another implementation.
- I've purposely made the login submission slow to show the button loading feature.
- Usually I prefer using uncontrolled inputs, but this would require useFormState from react-canary, and I think the assignment is asking for simple controlled inputs.

For the posts:

- Some data was not in the mock API (date and image) so I reused the same value for all posts.
- Since I can't do server-side filtering with this mock API, I had to do the filtering and pagination on the client.
- I've opted to use SSG for showing single posts, and normal SSR for the post list page.
- For the comments, I sent a fetch request to the api folder, which then sends another fetch request to the mock API. This is redundant of course, but the task said to use the route handler.

Additional:

- Please take into consideration that most of my CSS experience has been with Tailwind, so I didn't know the best practices when it comes to naming conventions, etc.
- I didn't quite understand the Big Bounce schema.org requirement, so I didn't implement it. It was the only requirement that I hadn't previously heard of.
