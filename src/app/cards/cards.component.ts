import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Cards } from '../cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cardForm: FormGroup;
  cardsList: Cards[] = [];

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.cardForm = this.formBuilder.group({
      cardholderName: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expiryDate: ['', Validators.required],
      cvv: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void {
    this.authService.getAllCards().subscribe((cards: Cards[]) => {
      this.cardsList = cards;
    });
  }

  onSubmit(): void {
    if (this.cardForm.invalid) {
      return;
    }

    const { cardholderName, cardNumber, expiryDate } = this.cardForm.value;
    this.authService.addCard({ userName: cardholderName, cardNumber, expiry: expiryDate }).subscribe(
      () => {
        alert('Card details added successfully!');
        this.getCards(); 
        this.cardForm.reset();
      },
      () => {
        alert('An error occurred. Please try again later.');
      }
    );
  }

  deleteCard(card: Cards): void {
    if (confirm('Are you sure you want to delete this card?')) {
      this.authService.deleteCard(card.userName).subscribe(
        () => {
          alert('Card deleted successfully!');
          this.getCards(); 
        },
        () => {
          alert('An error occurred while deleting the card.');
        }
      );
    }
  }
   populateFormData(card: any) {
    this.cardForm.patchValue({
      cardholderName: card.userName,
      cardNumber: card.cardNumber,
      expiryDate: card.expiry
    });
  }

  
}
