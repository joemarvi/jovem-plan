import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PlanDetailModalComponent } from '../../../site/shared/plan-detail-modal/plan-detail-modal.component';

@Component({
  selector: 'app-update-modal-plans',
  standalone: true,
  imports: [
    MatDialogModule
  ],
  templateUrl: './update-modal-plans.component.html',
  styleUrl: './update-modal-plans.component.scss'
})
export class UpdateModalPlansComponent {

  planTitle: string;
  planDescription: string;
  planIcon: string;

  constructor(
    private dialogRef: MatDialogRef<PlanDetailModalComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.planTitle = data.title;
    this.planDescription = data.description;

    switch (data.title) {
      case 'Plano Individual':
        this.planIcon = 'fa-regular fa-user';
        break;
      case 'Plano Família/Casal':
        this.planIcon = 'fa-solid fa-users';
        break;
      case 'Plano Premium':
        this.planIcon = 'fa-regular fa-star';
        break;
      default:
        this.planIcon = '';
    }
  }

  navigateToRegister() {
    this.dialogRef.close();
    this.router.navigate(['/register-partner']);
  }

}
