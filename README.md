# Introduction:

Cette application de blog en stack MERN permet de créer et gérer facilement des blogs. Elle permet aux utilisateurs d'ajouter de nouveaux articles avec des images, de visualiser et de modifier les articles existants et de gérer les catégories en backend.

# Technologies utilisées:

MongoDB : une base de données NoSQL utilisée pour stocker les articles de blog et les catégories.

Express.js : une framework pour Node.js utilisé pour construire l'API backend.

React.js : une bibliothèque JavaScript pour la création d'interfaces utilisateur utilisée pour construire le frontend.

Node.js : Permet d'exécuter du code JavaScript sur le serveur.

# Installation:

Pour installer et exécuter l'application, suivez ces étapes:

Cloner le repository: 
```bash
git clone https://github.com/MASIOUB/mern-blog-app.git
```

Naviguer à le répertoire root de repository: 
```bash
cd mern-blog-app
```
=> Pour exécuter le serveur backend:

Accéder à répertoire de backend (server):
```bash
cd server
```
Installer les dépendances: 
```bash
npm install
```

Exécuter par:
```bash
npm run dev
```

=> Pour exécuter le serveur frontend:

Accéder à répertoire de frontend (client):
```bash
cd client
```
Installer les dépendances: 
```bash
npm install
```

Exécuter par:
```bash
npm start
```
Ouvrir le navigateur web et aller à l'address suivant:
http://localhost:3000/

# API List:

=> Pour les catégories:
- GET /categories : Permet d'obtenir toutes les catégories.

- POST /categories : Permet d'ajouter une nouvelle catégorie.

- PUT /categories/:id : Permet de modifier une catégorie.

=> Pour les blogs:
- GET /posts : Permet de lister tous les blogs.

- POST /posts : Permet d'ajouter un nouveau blog.

- GET /posts/:id : Permet d'afficher un blog.

- PUT /posts/:id : Permet de modifier un blog.
