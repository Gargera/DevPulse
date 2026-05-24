import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  Title: string = "";
  Description: string = "";

  @Output() RegisterEvent = new EventEmitter();

  registerBtn()
  {
    let obj: {Title: string, Description: string} = {Title: this.Title, Description: this.Description};

    this.RegisterEvent.emit(obj);
  }
}