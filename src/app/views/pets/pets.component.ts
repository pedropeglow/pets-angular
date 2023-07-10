import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import Pet from 'src/app/models/Pet';
import { AuthService } from 'src/app/services/auth.service';
import { PetService } from 'src/app/services/pet.service';
import { PetDialogComponent } from 'src/app/shared/pet-dialog/pet-dialog.component';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
  providers: [PetService, AuthService]
})
export class PetsComponent {
  @ViewChild(MatTable)
  table!: MatTable<any>
  pets: Pet[] = []
  displayedColumns: string[] = ['nome', 'tipo', 'idade', 'acoes'];

  constructor(
    public dialog: MatDialog,
    private petService: PetService,
    private authService: AuthService,
    private router: Router
    ) {
      if(!this.authService.isLoggedIn())
        this.router.navigate(['/login'])
      this.petService.getPets().subscribe(data => this.pets = data);
    }
  
    filterValue: string = '';
    filteredPets: any[] = [];
  
    applyFilter() {
      const filterText = this.filterValue.toLowerCase().trim();
      this.filteredPets = this.pets.filter(pet =>
        pet.nome.toLowerCase().includes(filterText)
      );
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
        if (this.pets.map(p => p._id).includes(result._id)) {
          this.petService.updatePets(result).subscribe(data => {
            const index = this.pets.findIndex(p => p._id === data._id);
            this.pets[index] = data;
            this.table.renderRows();
          })
        } else {
          console.log('result', result)
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
