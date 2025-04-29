function verifierStock(produitId, quantite) {
    return new Promise((resolve, reject) => {
      console.log("Vérification du stock...");
      setTimeout(() => {
        if (produitId === 1 && quantite <= 5) {
          resolve("Stock disponible.");
        } else {
          reject("Produit non disponible.");
        }
      }, 1000);
    });
  }
  
  function traiterPaiement(montant) {
    return new Promise((resolve, reject) => {
      console.log("Traitement du paiement...");
      setTimeout(() => {
        if (montant > 0) {
          resolve("Paiement accepté.");
        } else {
          reject("Paiement refusé.");
        }
      }, 1000);
    });
  }
  
  function preparerCommande(commandId) {
    return new Promise((resolve, reject) => {
      console.log("Préparation de la commande...");
      setTimeout(() => {
        if (commandId) {
          resolve("Commande préparée.");
        } else {
          reject("Erreur de préparation.");
        }
      }, 1000);
    });
  }
  
  function expedierCommande(commandId, adresse) {
    return new Promise((resolve, reject) => {
      console.log("Expédition de la commande...");
      setTimeout(() => {
        if (adresse !== "") {
          resolve("Commande expédiée à " + adresse);
        } else {
          reject("Adresse invalide.");
        }
      }, 1000);
    });
  }







function appliquerCodePromo(code) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (code === "promo10") {
        resolve("Code promo appliqué : 10%");
      } else if (code === "promo20") {
        resolve("Code promo appliqué : 20%");
      } else {
        reject("Code promo invalide");
      }
    }, 1500); // 1.5 secondes
  });
}

// Exemple d'utilisation :
const codeUtilisateur = prompt("Entrez votre code promo :");

appliquerCodePromo(codeUtilisateur)
  .then((message) => {
    console.log(message);
    alert(message);
  })
  .catch((erreur) => {
    console.error(erreur);
    alert(erreur);
  });
  