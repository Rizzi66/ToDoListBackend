enum TaskStatus {
  EnCours = "En cours",
  Terminee = "Terminée",
  AFaire = "À faire",
}

export default class Task {
  titre: string;
  description: string;
  statut: TaskStatus;
  dateCreation: Date;
  dateExpiration: Date;

  constructor(titre: string, description: string, dateExpiration: Date) {
    this.titre = titre;
    this.description = description;
    this.statut = TaskStatus.EnCours;
    this.dateCreation = new Date();
    this.dateExpiration = dateExpiration;
  }
}
