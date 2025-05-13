import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  myform: FormGroup;
  constructor(private fb:FormBuilder){
    this.myform = this.fb.group({
      name:['',Validators.required],
      skills:this.fb.array([this.fb.control('',Validators.required)])
    })
  }
  get skills():FormArray{
    return this.myform.get("skills") as FormArray;
  }
  addSkill(){
    this.skills.push(this.fb.control('',Validators.required));
  }
  removeSkill(index:number){
    this.skills.removeAt(index);
  }
  onSubmit(){
    console.log(this.myform.value);
  }
}
