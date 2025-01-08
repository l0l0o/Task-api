# Description
TODO app, CRUD

# Dependencies
    ```bash
      npm install --save @nestjs/typeorm typeorm pg

      npm i --save @nestjs/config
      # Dotenv pour nest
        ConfigModule.forRoot(),
    ```

    ```typescript
    // Connexion db
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        autoLoadEntities: true,
        synchronize: true,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
      }),
    ```

# Schema BDD
    ```sql
      CREATE TABLE IF NOT EXISTS todo (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          description TEXT,
          done BOOLEAN DEFAULT false
        )
    ```
    
User
-id
-email
-password
-createdAt
-updatedAt
-deletedAt

# Generate ressources
    ```bash
      nest g res task || nest generate resource task
    ```

# Start project
    ```bash
      # Development
      npm run start:dev
      docker-compose up -d
      docker system prune -a -f
      # Production
      npm run start
    ```
