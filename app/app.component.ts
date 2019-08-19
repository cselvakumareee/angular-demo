import { Component } from '@angular/core';
import { InteractionService } from './interaction.service';
import { HeroesComponent } from './heroes/heroes.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';
  public isCollapsed = false;
constructor(private interactionService: InteractionService) {}
greetstudent() {
  this.interactionService.sendMessage('good morning');
}
appreciatestudent() {
  this.interactionService.sendMessage('well done');
}
}
