import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert-logic',
  templateUrl: './convert-logic.component.html',
  styleUrls: ['./convert-logic.component.scss']
})
export class ConvertLogicComponent implements OnInit {
  convertNumber: number;
  finalresult: string;
  // Method for Convert Number to roman
  convertToRoman() {
    let naturalNumber: number = this.convertNumber;
    // Roman Number characters
    const romanNumber: Array<string> =  ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    // Decimal number
    const normalNumber: Array<number> = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    // Above 9999 Roman Needs special characters //
    if (naturalNumber <= 0 || naturalNumber > 9999) {
      this.finalresult = 'Value must be greater then 0 and less then 10000';
      return false;
      }
    let romanNumeral: string ;
    romanNumeral = '';
    for (let i = 0; i < romanNumber.length; i++) {
    while (naturalNumber >= normalNumber[i]) {
      naturalNumber -= normalNumber[i];
      romanNumeral += romanNumber[i];
      }
    }
    this.finalresult = romanNumeral;

  }
  ngOnInit() {
  }

}
