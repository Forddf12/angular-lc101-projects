import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: true;

  handleTakeOff(rocket) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if(result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight';
      this.takeOffEnabled = true;
      }
    }
    land(rocket) {
      let result = window.confirm('The shuttle is landing. Landing gear engaged.');
      if(result) {
        this.color = 'green';
        this.height = 0;
        this.width = 0;
        this.message = 'The shuttle has landed';
        rocket.style.bottom = 0 + "px"; 
        this.takeOffEnabled = false;
        }
      }
      abortMission(rocket) {
        let result = window.alert('Are you sure you want to abort?');
          this.color = 'red';
          this.height = 0;
          this.width = 0;
          this.message = 'Mission aborted';
          this.takeOffEnabled = false;
        }
      
      moveRocket(rocket, direction) {
        if(direction === 'up') {
          let bottom = parseInt(rocket.style.bottom);
          rocket.style.bottom = bottom + 10 + "px";
          this.height += 10000; 
        }
        if(direction === 'down') {
          let bottom = parseInt(rocket.style.bottom);
          rocket.style.bottom = bottom - 10 + "px";
          this.height -= 10000; 
        }
        if(direction === 'left') {
          let bottom = parseInt(rocket.style.left);
          rocket.style.left = bottom - 10 + "px";
          this.height += 10000; 
        }
        if(direction === 'right') {
          let bottom = parseInt(rocket.style.left);
          rocket.style.left = bottom + 10 + "px";
          this.height += 10000; 
        }
      }  
  }


