import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CountdownService } from '../countdown.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ClickOutsideDirective } from '../click-outside.directive';

interface AppPlan {
  title: string;
  cost: string;
}

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, AsyncPipe, CommonModule, FormsModule, ClickOutsideDirective],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  plans: AppPlan[] = [
    { title: 'Basic Pack', cost: 'Free' },
    { title: 'Pro Back', cost: '$9.99' },
    { title: 'Ultimate Pack', cost: '$19.99' },
  ];
  showPlanMenu: boolean = false;
  isSubmitted: boolean = false;
  selectedPlan: AppPlan = this.plans[0];
  contact = {
    name: '',
    email: '',
    company: '',
    phone: '',
    plan: this.selectedPlan,
  };
  countdown$ = this.countdownService.countdown$;
  targetDate = this.countdownService.targetDate;
  constructor(private countdownService: CountdownService) {}
  showPlans() {
    this.showPlanMenu = !this.showPlanMenu;
  }
  closePlansMenu(){
    this.showPlanMenu = false
  }
  onPlanSelect(item: AppPlan) {
    this.selectedPlan = item;
    this.showPlanMenu = false;
  }
  onSubmit(contactForm: NgForm) {
    console.log(contactForm);
    if (contactForm.valid) {
      console.log(this.contact);
      this.isSubmitted = true;
      this.contact = {
        name: '',
        email: '',
        company: '',
        phone: '',
        plan: this.selectedPlan,
      };
    }
  }
}
