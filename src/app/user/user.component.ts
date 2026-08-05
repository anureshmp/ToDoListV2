import { Component, EventEmitter, Input, input, Output, signal } from '@angular/core';
import { type User } from './user.model';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

// @Input({required: true}) avatar!: string;
// @Input({required: true}) name!: string
@Output() select = new EventEmitter<string>();
// avatar = input.required<string>()
// name = input.required<string>()
// @Input() id!: string
@Input({required: true}) user!: User

get imagePath() {
  return 'assets/users/' + this.user.avatar;
}

  onSelectUser() {
    this.select.emit(this.user.id);
  }

}
