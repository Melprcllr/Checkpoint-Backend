### SUJET DU CHECKPOINT ###
Le but de ce checkpoint est de vérifier tes connaissances en développement backend.

Commence par initialiser un nouveau repo git, il te servira à faire le rendu du checkpoint.

Crée un nouveau projet NodeJS Typescript.

Pour un meilleur confort de dev, utilise ts-node-dev.

Le but de cet exercice est de créer une API GraphQL avec Apollo Server et Typegraphql pour enregistrer et lire des pays avec leur code, leur nom et leur emoji.

Utilise une base de données SQLite et TypeORM en ORM.

Voici les packages dont tu auras besoin et leur version :

"dependencies": {
    "@apollo/server": "^4.10.2",
    "reflect-metadata": "^0.2.2",
    "sqlite3": "^5.1.7",
    "ts-node-dev": "^2.0.0",
    "type-graphql": "^2.0.0-beta.6",
    "typeorm": "^0.3.20"
  }
Crée une mutation qui prend en paramètres :

un code (FR, BE, AN, ...),
un nom (France, Belgique, Andorre, ...),
un emoji (🇫🇷, 🇧🇪, 🇦🇩, ...),
et qui enregistre cette entrée en BDD.

Crée ensuite 2 queries :

Une qui renvoie la liste de tous les pays (avec pour attributs, pour chaque pays, le code, le nom, l'emoji)
Une autre qui prend en paramètre le code du pays et qui renvoie le pays en question
Et pour finir,

Ajoute un code continent à la mutation d'ajout de pays et une query qui permet de récupérer tous les pays d'un continent


### LES ETAPES POUR LE REALISER ###

#### 1- Initialisation d'un nouveau projet git
#### 2- Initialisation d'un nouveau projet NodeJS TypeScript
avec la commande ``npm init -y`` (génère un fichier package.json).</br>
Installation de TypeScript et ts-node-dev en tant que dépendances
``npm install typescript ts-node-dev —save-dev``


#### 3- Ajout d'un fichier .gitignore
pour y ajouter les node_modules et ne pas les push

#### 4- Configuration de TypeScript
``npw tsc --init``
pour génèrer un fichier tsconfig.json
pour la suite du checkpoint décommenter les options nécessaires 
</br>
Création de la structure du projet en ajoutant un dossier ``src`` et un fichier ``index.ts`` avec un exemple test ``console.log("Hello, world!")``

#### 5- Configuration du script de démarrage dans le package.json
```
“scripts” : {
		“start” : “ts-node-dev --respawn src/index.ts”
}
```
</br>
tester la commande de démarrage

#### 6- Ajout des dépendances demandées afin de réaliser le checkpoint
Grâce à la commande </br>
``npm install @apollo/server reflect-metadata sqlite3 type-graphql typeorm``</br>
Installation des différents modules : Apollo Server, reflect-metadata, SQLite, TypeGraphQL et TypeORM.

#### 7- Configuration de TypeORM avec SQLite
Ajout d'un fichier dataSource

#### Définir l'entité Country
ajout d'un répertoire ``entities``</br>
et d'un fichier ``Country.ts``

#### Configurer TypeGraphQL
Ajout dans ``src`` d'un répertoire ``resolvers``</br>
et ajout d'un fichier ``CountryResolver.ts``

#### Configurer Apollo Server
dans le fichier principal ``index.ts``</br>
- initialisation du serveur Apollo avec GraphQL</br>
- initialisation de la connexion à la bdd, </br>
- construction du schéma GraphQL à partir des resolvers, </br>
- configuration et démarrage du serveur Apollo sur le port 4000

#### 8- Test de l'API
Lancer la commande ``npm start``</br>
puis se rendre à l'url </br>
http://localhost:4000