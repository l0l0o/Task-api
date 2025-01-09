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
### Prérequis

- [Node.js](https://nodejs.org/) (version 16 ou supérieure)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)

### Étapes d'installation

1. Clonez le repository :

   ```bash
   git clone <url-du-repository>
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Configurez les variables d'environnement (voir [Configuration](#configuration)).

4. Démarrez l'application :

   ```bash
   npm run start:dev
   ```

## Configuration

### Variables d'environnement

Créez un fichier `.env` à la racine du projet à partir du fichier .env-example.

## Documentation API

La documentation API est générée avec **Swagger** et accessible à l'adresse :

```
http://localhost:8000/api
```