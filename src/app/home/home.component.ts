import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Plan } from '../model/plan.interface';
import { ourplans } from './data';
import { AsyncPipe, NgClass } from '@angular/common';
import { CountdownService } from '../countdown.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgClass, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  countdown$ = this.countdownService.countdown$;
  targetDate = this.countdownService.targetDate;
  plans: Plan[] = ourplans;
  constructor(private countdownService: CountdownService) {}
  
}
