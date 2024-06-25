import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {Usuario} from "../../model/usuario.entity";
import {UsuariosService} from "../../services/usuarios.service";
import {Method} from "../../model/method.entity";
import {MethodService} from "../../services/method.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-payment-method',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './payment-method.component.html',
  styleUrl: './payment-method.component.css'
})
export class PaymentMethodComponent {
  @Input() method: Method;
  @Input() editMode = true;
  @Output() methodUpdated = new EventEmitter<Method>();
  @ViewChild('methodForm', {static: false}) methodForm!: NgForm;

  constructor(private methodService: MethodService) {
    this.method = {} as Method;
  }

  ngOnInit(): void {
    this.loadMethod(1);
  }

  private loadMethod(id: number) {
    this.methodService.get(id).subscribe({
      next: (method) => this.method = method,
      error: (err) => console.error('Error loading method:', err)
    });
  }

  private resetEditState() {
    this.method = {} as Method;
    this.editMode = true;
    this.methodForm.resetForm();
  }

  onSubmit() {
    if (this.methodForm.form.valid) {
      this.methodService.update(this.method.id, this.method).subscribe({
        next: (updatedMethod) => {
          this.methodUpdated.emit(updatedMethod);
          this.resetEditState();
        },
        error: (err) => console.error('Error updating usuario:', err)
      });
    } else {
      console.error('Invalid data in form');
    }
  }
}
