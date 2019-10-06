// Bonjour et merci pour la correction ;)

class Contacts{
    constructor(name, firstName){
        this.name = name;
        this.firstName = firstName;
    }
    afficherContact(){
        console.log(`Nom : ${this.name}, prénom : ${this.firstName}`)
    }
}
const carole = new Contacts("Lévisse","Carole");
const melodie = new Contacts("Nelsonne","Mélodie")
const friends=[carole,melodie]

let input
console.log("Bienvenue dans le gestionnaire des contacts !")
while (input !=="0"){
    console.log("1 : Lister les contacts \n2 : Ajouter un contact \n0 : Quitter")
    input = prompt("Choisissez une option:");
    if(input =="1"){
        console.log("Voici la liste de tous vos contacts:")
        for(friend of friends){
            friend.afficherContact()
        }
    }else if(input ==="2"){
        let inName = prompt("Entrez le nom du nouveau contact")
        let inFirstName = prompt ("Entrez le prénom du nouveau contact")
        let next = new Contacts (inName, inFirstName)
        friends.push(next)
        console.log("Votre contact a bien été ajouté")
    }
}
console.log("Au revoir!");