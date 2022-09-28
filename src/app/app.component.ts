import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'rollbachData';
  public name = 'Essa';
  public editMode!: boolean;
  oldName!: string;
  startEdit() {
    this.oldName = this.name;
    this.editMode = !this.editMode;
  }
  save() {
    this.editMode = !this.editMode;
  }
  cancel() {
    this.editMode = !this.editMode;
    this.name = this.oldName;
  }
}
