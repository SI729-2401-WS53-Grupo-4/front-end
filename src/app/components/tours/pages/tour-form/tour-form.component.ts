import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators} from '@angular/forms';
@Component({
  selector: 'app-tour-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './tour-form.component.html',
  styleUrl: './tour-form.component.css'
})
export class TourFormComponent {
  tourForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.tourForm = this.fb.group({
      title: ['', Validators.required],
      infoDescription: ['', Validators.required],
      guide: ['', Validators.required],
      rating: ['', [Validators.required, Validators.min(0), Validators.max(5)]],
      numberOfRatings: ['', Validators.required],
      minPrice: ['', Validators.required],
      currentPeople: ['', Validators.required],
      maxPeople: ['', Validators.required],
      language: ['', Validators.required],
      duration: ['', Validators.required],
      date: ['', Validators.required],
      image: ['', [Validators.required, this.imageValidator]],
    });
  }

  imageValidator(control: AbstractControl): ValidationErrors | null {
    const file = control.value;
    if (file) {
      const extension = file.split('.').pop().toLowerCase();
      if (extension !== 'png' && extension !== 'jpg' && extension !== 'jpeg') {
        return { invalidImageType: true };
      }
    }
    return null;
  }

  onSubmit() {
    if (this.tourForm.valid) {
      console.log('Form submitted:', this.tourForm.value);
      // Lógica para manejar el envío del formulario
    } else {
      console.log('Form is invalid');
    }
  }
}
