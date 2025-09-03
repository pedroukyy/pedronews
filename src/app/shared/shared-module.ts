import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

// Componentes
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { ButtonComponent } from './components/button/button.component';
import { LinkComponent } from './components/link/link.component';
import { CardComponent } from './components/card/card.component';
import { PrincipalNewsComponent } from './components/principal-news/principal-news.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ListComponent } from './components/list/list.component';
import { ModalComponent } from './components/modal/modal.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { count } from 'rxjs';
import { NewsModalComponent } from './components/news-modal/news-modal.component';

@NgModule({
  declarations: [
    InputComponent,
    SelectComponent,
    ButtonComponent,
    LinkComponent,
    CardComponent,
    PrincipalNewsComponent,
    HeaderComponent,
    SideBarComponent,
    ListComponent,
    ModalComponent,
    UserFormComponent,
    ListComponent,
    SideBarComponent,
    PrincipalNewsComponent,
    NewsModalComponent,
    








  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  exports: [
    InputComponent,
    SelectComponent,
    ButtonComponent,
    LinkComponent,
    CardComponent,
    PrincipalNewsComponent,
    HeaderComponent,
    SideBarComponent,
    ListComponent,
    ModalComponent,
    UserFormComponent,ListComponent,SideBarComponent,CommonModule,
    IonicModule,
    FormsModule,
    NewsModalComponent

  ]
})
export class SharedModule {}
