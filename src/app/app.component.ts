import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Generate a new sentence
  fakeText = lorem.sentence();
  enteredText = ''

  // Check input field each time the user enters a letter
  inputCount(value: string){
    
    
    let inputLength = value.length - 1 
    this.enteredText = value

    console.log(this.enteredText)

    if(value[inputLength] == this.fakeText[inputLength]){

      console.log("Its true", `${value[inputLength]} + ${this.fakeText[inputLength]}`)
    }else{
      console.log("This aint it cheif", `${value[inputLength]} + ${this.fakeText[inputLength]}`)
    }
  }

  getClass(letter: String, text: String){
    
    if(!text){
      return "pending"
    }
    return letter === text ? 'correct' : 'incorrect'
  }
}
