import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatButtonToggleModule, MatBadgeModule, MatProgressSpinnerModule, MatToolbarModule, MatSidenavModule, MatMenuModule, MatListModule, MatTooltipModule, MatGridListModule, MatFormFieldModule, MatCheckboxModule, MatRadioModule, MatSelectModule, MatExpansionModule, MatCardModule } from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatTooltipModule,
  MatGridListModule,
  MatCheckboxModule, 
  MatRadioModule,
  MatSelectModule,
  MatExpansionModule,
  MatCardModule
]

@NgModule({
  imports : [MaterialComponents],
  exports : [MaterialComponents]
 })
export class MaterialModule { }
