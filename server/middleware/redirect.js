module.exports = function(req, res, next) {
    if(!req.secure) {
      return res.redirect(301, `https://${req.hostname}${req.originalUrl}`);
    }
    next();
  }

  
//   Par exemple, si un utilisateur envoie une requête
//    HTTP avec le nom de domaine example.com, req.hostname 
//    renverra la chaîne de caractères 'example.com'. Cette 
//    valeur est utilisée pour construire la nouvelle
//    URL HTTPS, qui est https://example.com dans cet exemple.