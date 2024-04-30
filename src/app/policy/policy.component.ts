import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Cards } from '../cards';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {
  userDetails: { userName: string; polic: string } = { userName: '', polic: '' };
  
  constructor(private authService: AuthService,private router: Router) {}

  ngOnInit(): void {
    this.authService.getLoggedInUser().subscribe((user: string) => {
      if (user) {
        this.authService.getUserDetails(user).subscribe((response) => {
          this.userDetails = response;
        });
      }
    });
    
    
  }
  
  navigateToCardsPage(): void {
    this.router.navigate(['/cards']);
  }
}
