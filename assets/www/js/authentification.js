// a changer pour la mise en production
// Mettre l'adresse du serveur
var serviceURL = "http://10.0.2.2:8080/TestRest/rest/";

// A Comprendre
$(document).ready( function () { 
	

	$("#connexionForm").submit( function() {
		var $inputs = $("#connexionForm").find("input, select, button, textarea");
	    // serialize the data in the form
	    var serializedData = $("#connexionForm").serialize();
		// � la soumission du formulaire						 
		$.ajax({ // fonction permettant de faire de l'ajax
			type: "POST", // methode de transmission des donn�es au fichier php
			url: serviceURL+"authentification",// url du fichier du WS
			data: serializedData, // donn�es � transmettre
			success: function(msg){ // si l'appel a bien fonctionn�
				if(msg=="ok") // si la connexion en php a fonctionn�e
				{
					alert('Ok tu es connect� ! ');
				}
				else // si la connexion en php n'a pas fonctionn�e
				{
					alert('Probleme ! ');// on affiche un message d'erreur dans le span pr�vu � cet effet
				}
			}
		});
		return false; // permet de rester sur la m�me page � la soumission du formulaire
	});
});