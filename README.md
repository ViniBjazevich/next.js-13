## Next.js-13:
## The purpose of this repo is to give you a good starting point when creating a new project.
</br>
This project already has database connections set up and CRUD operations created using their corresponding ORM's.
</br></br>

Decide on which technologies you want to use and remove the dependencies that you don't need.
</br></br>
Database              | ORM           | Dependencies
--------------------- | ------------- | ------------
PostgreSQL            | Sequelize     | sequelize, pg, pg-hstore
MongoDB               | Mongoose      | mongoose
PostgreSQL or MongoDB | Prisma        | prisma

</br>
DB Hosting (all have free version):

- https://www.elephantsql.com/
- https://www.mongodb.com/atlas/database
- https://aws.amazon.com/rds/

</br>
After removing unneeded dependencies run: `npm install`

To start project run: `npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
</br></br>
## Connect to RDS database

1) Create RDS Instance
- Use postgres free tier
- Give it a database name
- Allow public access

2) After its created allow all inbound traffic (under security groups):
<img width="1205" alt="image" src="https://user-images.githubusercontent.com/49013231/221254553-02d2daab-78fe-4650-a3e7-d40543c9dea5.png">


3) Create connection string with the following format:
postgresql://username:password@hostname:port/databasename

If you have AWS create the password you can only see it once so make sure you copy it somewhere.

Under `Configuration` tab you can find:
username, database name

Under `Connectivity & security` tab you can find:
hostname (endpoint), port (5432)

</br>


## Docs
- Dynamic Routing: https://nextjs.org/docs/routing/dynamic-routes
- Path Aliases (@): https://dev.to/rhammy/path-aliases-in-nextjs-2fnc
- MongoDB Set Up: https://devdojo.com/amp/usmanwrites/how-to-use-mongoose-with-nextjs-for-mongodb
- Mongoose Docs: https://mongoosejs.com/docs/index.html
- Sequelize Docs: https://sequelize.org/docs/v6/getting-started/
- Prisma: https://www.prisma.io/docs/getting-started/quickstart
- Prisma Social Media Schema Example: https://stackoverflow.com/questions/72330381/prisma-not-liked-posts-from-followed-users
- WebSockets: https://blog.logrocket.com/implementing-websocket-communication-next-js/

