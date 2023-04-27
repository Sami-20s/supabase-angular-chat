import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
const exports = [MaterialModule];
@NgModule({
  declarations: [],
  imports: [CommonModule, ...exports],
  exports: [...exports],
})
export class SharedModule {}
