import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { NewTaskData } from './new-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
@Output() cancel = new EventEmitter()
@Output() add = new EventEmitter<NewTaskData>()
enteredTitle = '';
enteredSummary = '';
enteredDate = '';

  onCancel() {
      this.cancel.emit();

 }

 onSubmit() {

  console.log('button clicked');
        this.add.emit({
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate
      });

 }



}
