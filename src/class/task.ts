enum taskStatuts {
  EnCours = "En cours",
  Terminee = "Terminee",
  AFaire = "A faire",
}

export default class Task {
  titre: string;
  description: string;
  statut: taskStatuts;
  dateCreation: Date;
  dateExpiration: Date;

  constructor(titre: string, description: string, dateExpiration: Date) {
    this.titre = titre;
    this.description = description;
    this.statut = taskStatuts.AFaire;
    this.dateCreation = new Date();
    this.dateExpiration = dateExpiration;
  }
}
