This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Connect to RDS database

1) Create RDS Instance
- Use postgres free tier
- Give it a database name
- Allow public access

2) After its created allow all inbound traffic

3) Create connection string with the following format:
postgresql://username:password@hostname:port/databasename

If you have AWS create the password you can only see it once so make sure you copy it somewhere.

Under `Configuration` tab you can find:
username, database name

Under `Connectivity & security` tab you can find:
hostname (endpoint), port (5432)




## Docs
- Path Aliases (@): https://dev.to/rhammy/path-aliases-in-nextjs-2fnc
- MongoDB Set Up: https://devdojo.com/amp/usmanwrites/how-to-use-mongoose-with-nextjs-for-mongodb
- Prisma: https://www.prisma.io/docs/getting-started/quickstart
- WebSockets: https://blog.logrocket.com/implementing-websocket-communication-next-js/

