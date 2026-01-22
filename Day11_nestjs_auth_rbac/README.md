This NestJS project secures APIs using JWT-based authentication and role-based authorization (RBAC).

Authentication happens via /auth/register and /auth/login, where user credentials are validated and a JWT token is issued.

Passwords are hashed with bcrypt before storing in an in-memory users array.

The JWT contains user identity and role (USER or ADMIN) in its payload.

JwtAuthGuard checks the JWT from the Authorization: Bearer <token> header and attaches the user to req.user.

Authorization is enforced using @Roles() and RolesGuard, which checks the user’s role.

Protected routes require authentication, and admin routes additionally require the ADMIN role.

Normal users can access their own profile but not admin APIs.

Admin users can access all users and admin-only endpoints.

This clean separation shows who you are (authentication) vs what you can do (authorization) clearly.
