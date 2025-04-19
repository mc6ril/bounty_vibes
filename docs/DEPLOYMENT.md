# Guide de Déploiement

## Prérequis

- Avoir accès au serveur de production
- Avoir les droits d'administration sur le serveur
- Avoir Node.js et npm installés sur le serveur

## Processus de Déploiement

1. **Préparation du Build**

   ```bash
   # Sur votre machine locale
   npm run build
   ```

2. **Vérification du Build**

   ```bash
   # Sur votre machine locale
   npm run start
   ```

   Vérifiez que tout fonctionne correctement en local avant de déployer.

3. **Transfert des Fichiers**

   - Compressez le dossier `.next` et le `package.json`
   - Transférez les fichiers sur le serveur via SFTP ou votre méthode préférée

4. **Sur le Serveur**

   ```bash
   # Arrêter le serveur actuel
   pm2 stop bounty-vibes

   # Supprimer l'ancien build
   rm -rf .next

   # Extraire le nouveau build
   unzip build.zip

   # Installer les dépendances
   npm install

   # Démarrer le serveur
   pm2 start bounty-vibes
   ```

5. **Vérification**
   - Vérifiez que le site est accessible
   - Vérifiez que toutes les fonctionnalités marchent correctement
   - Vérifiez les logs pour détecter d'éventuelles erreurs

## Configuration du Serveur

### PM2

Le site est géré par PM2 pour la gestion des processus. La configuration est stockée dans `ecosystem.config.js` :

```javascript
module.exports = {
  apps: [
    {
      name: "bounty-vibes",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
```

### Nginx

Le serveur utilise Nginx comme reverse proxy. La configuration se trouve dans `/etc/nginx/sites-available/bounty-vibes` :

```nginx
server {
    listen 80;
    server_name bounty-vibes.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Gestion des Erreurs

En cas de problème lors du déploiement :

1. Vérifiez les logs PM2 :

   ```bash
   pm2 logs bounty-vibes
   ```

2. Vérifiez les logs Nginx :

   ```bash
   tail -f /var/log/nginx/error.log
   ```

3. Si nécessaire, revenez à la version précédente :
   ```bash
   pm2 stop bounty-vibes
   # Restaurer l'ancien build
   pm2 start bounty-vibes
   ```

## Bonnes Pratiques

- Toujours tester le build en local avant de déployer
- Garder une copie de l'ancien build en cas de rollback
- Vérifier les logs après chaque déploiement
- Maintenir à jour les dépendances du serveur
- Faire des sauvegardes régulières de la configuration
