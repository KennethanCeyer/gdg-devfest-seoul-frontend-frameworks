import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MukkitListComponent } from './mukkit_list.component';


@NgModule({
    declarations: [
        MukkitListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [
        MukkitListComponent
    ]
})
export class AppModule { }
