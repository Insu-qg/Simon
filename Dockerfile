# Utilisez une image de base avec Node.js
FROM node:18-alpine

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez les fichiers de configuration
COPY package.json ./

# Installez les dépendances
RUN npm install

# Copiez les fichiers de l'application
COPY . .

EXPOSE 3000

# commande pour lancer le serveur
CMD node src/server.js
