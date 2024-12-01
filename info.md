# Background

NextJs based app for Tmap

# Functional map

- UI Design
  - To Do: Layout design
- Authentication
  - Clerk JS integrated for authentication
  - Basic header with login and logout functionality
  - To Do: Customize Authentication Experience
    - Improve signup, signIn, forgot password, reset password page
    - Improve header with User Profile Panel
    - User Profile configuration page
  - To Fix:
    - On login goes to redirect url '/' instead of signed in url '/dashboard'
- Prisma
  - Postgres SQL with Prisma ORM
  - Data Models
    - User - To store clerk user info
      - /lib/checkUser - to add loggedIn user to db if not already added
    - Candidate
- Routing
  - middleware.js contains routing functionality
  - Segregate public and signed in functionality
- To Do: Authorization Fn

# Ref

- Dashboard, line graph, tailwind, rate limiting, clerk
  - https://github.com/piyush-eon/journal-app/blob/main/app/(main)/dashboard/_components/mood-analytics.jsx
