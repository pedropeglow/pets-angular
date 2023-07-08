import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Pet from 'src/app/models/Pet';

@Component({
  selector: 'app-pet-dialog',
  templateUrl: './pet-dialog.component.html',
  styleUrls: ['./pet-dialog.component.scss']
})
export class PetDialogComponent {
  isChange!: boolean;
  constructor(
    public dialogRef: MatDialogRef<PetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Pet,
  ) {}

  ngOnInit(): void {
    if(this.data._id != ''){
      this.isChange = false
    } else {
      this.isChange = true
    }
  }

  onCancel(){
    this.dialogRef.close()
  }
}
