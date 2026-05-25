import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  Name: string = "";
  Email: string = "";

  @Output() RegisterEvent = new EventEmitter();

  registerBtn()
  {
    let obj: {Name: string, Email: string} = {Name: this.Name, Email: this.Email};

    this.RegisterEvent.emit(obj);
    this.Name = "";
    this.Email = "";
  }
}