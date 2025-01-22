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

  constructor(
    titre: string,
    description: string,
    dateExpiration: Date,
    statut: taskStatuts
  ) {
    this.titre = titre;
    this.description = description;
    this.statut = statut;
    this.dateCreation = new Date();
    this.dateExpiration = dateExpiration;
  }
}
