import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
const exports = [MatFormFieldModule, MatInputModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...exports],
  exports: [...exports],
})
export class MaterialModule {}
