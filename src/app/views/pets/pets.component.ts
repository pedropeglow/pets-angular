import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import Pet from 'src/app/models/Pet';
import { PetService } from 'src/app/services/pet.service';
import { PetDialogComponent } from 'src/app/shared/pet-dialog/pet-dialog.component';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
  providers: [PetService]
})
export class PetsComponent {
  @ViewChild(MatTable)
  table!: MatTable<any>
  nomePesquisado?: string;
  pets: Pet[] = []
  displayedColumns: string[] = ['nome', 'tipo', 'idade', 'acoes'];

  constructor(
    public dialog: MatDialog,
    public petService: PetService
    ) {
      this.petService.getPets().subscribe(data => this.pets = data);
    }

  openDialog(pet: Pet | null){
    const dialogRef = this.dialog.open(PetDialogComponent, {
      data: pet != null ? 
        pet: {
          _id: "",
          nome: '',
          tipo: '',
          idade: 0
        }
      ,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined) {
        const teste = this.pets.map(p => console.log('p.id', p._id))
        if (this.pets.map(p => p._id).includes(result._id)) {
          this.petService.updatePets(result).subscribe(data => {
            const index = this.pets.findIndex(p => p._id === data._id);
            this.pets[index] = data;
            this.table.renderRows();
          })
        } else {
          console.log('cheguei')
          this.petService.createPet(result).subscribe(data => {
            this.pets.push(data);
            this.table.renderRows();
          })
        }
      }
    });
  }

  updatePet(pet: Pet){
    this.openDialog(pet);
  }

  deletePet(pet: Pet) {
    this.petService.deletePet(pet._id).subscribe(() => {
      this.pets = this.pets.filter(p => p._id != pet._id);
    })
  }

}
