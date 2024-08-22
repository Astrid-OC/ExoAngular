import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {

  taches: any[] = [
    { nom: 'Acheter du lait', terminee: false },
    { nom: 'Finir le projet Angular', terminee: false },
    { nom: 'Lire un livre', terminee: true }
  ];
  // hidden : boolean =false;
  
  // toggle(){
  //   this.hidden = !this.hidden
  // }

  ajoutTache: string = '';

  ajouter(){
    this.taches.push(this.ajoutTache);
    alert('tache ajoutée');
  }
  // finiPasFini(terminee: any){
  //   if (terminee = true){
  //     return "fini";
  //   }
  //   else {
  //     return "Pas fini";
  //   }
  // }
}
