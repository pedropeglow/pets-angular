import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Pet from 'src/app/models/Pet';
import Usuario from 'src/app/models/Usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-pet-dialog',
  templateUrl: './pet-dialog.component.html',
  styleUrls: ['./pet-dialog.component.scss']
})
export class PetDialogComponent {
  usuarios: Usuario[] = [];
  isChange!: boolean;
  selectedUsuarioId: string | undefined;
  constructor(
    private usuariosService: UsuariosService,
    public dialogRef: MatDialogRef<PetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Pet,
  ) {}

  ngOnInit(): void {
    this.getUsuarios();
    if (this.data._id !== '') {
      this.isChange = false;
    } else {
      this.isChange = true;
    }
  }

  getUsuarios() {
    this.usuariosService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

  onCancel() {
    this.dialogRef.close();
  }
}
