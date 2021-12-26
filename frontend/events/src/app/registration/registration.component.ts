import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  hide = true;

  areaActivity: string[] = [
    "Sport", "Kultura", "Zabava", "Muzika", "Koncerti", "Predstave", "Izlozbe", "Film", "Manifestacije", "Vesti", "Razni događaji", "Ostalo"
  ];

  orgName = new FormControl('', [Validators.required, Validators.pattern('^[A-Z]+[a-z0-9]*\.*')]);
  orgStreet = new FormControl('', [Validators.required, Validators.pattern('^[A-Z]{1}[A-Za-z]+\.{1}[A-Za-z]*\.{1}[A-Za-z]*$')]);
  orgNumber = new FormControl('', [Validators.required, Validators.pattern('^[0-9]+/*[a-z0-9]*$')]);
  orgCity = new FormControl('', [Validators.required, Validators.pattern('^[A-Z]+[a-z]*\.{0,1}[A-Za-z]*')]);
  contactPersonName = new FormControl('', [Validators.required, Validators.pattern('^[A-Z][a-z]*')]);
  contactPersonLastName = new FormControl('', [Validators.required, Validators.pattern('^[A-Z][a-z]*')]);
  telNumber = new FormControl('', [Validators.required, Validators.pattern('^(00381|0)6\[0-9]{7,8}$')]);
  selectArea = new FormControl('', [Validators.required]);
  webSite = new FormControl('', [Validators.required, Validators.pattern('^(www.)[a-z0-9]+\.{1,}[a-z]+(\/[a-zA-Z0-9#]+\/?)*$')]);
  eMail = new FormControl('', [Validators.required, Validators.email]);
  userName = new FormControl('', [Validators.required, Validators.pattern('^[a-z]{3,}[A-Z0-9]*')]);
  passWord = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]{8,}')]);
  orgInfo = new FormControl('', [Validators.required, Validators.pattern('^[A-Z]+[a-z0-9]*\.*')]);
  checked = new FormControl('', [Validators.required]);

  getErrorMessageForOrgName() {
    if (this.orgName.hasError('required')) {
      return 'Unesite naziv organizacije';
    }
    return this.orgName.hasError('pattern') ? 'Prvo slovo mora biti veliko' : '';
  }

  getErrorMessageForOrgStreet() {
    if (this.orgStreet.hasError('required')) {
      return 'Unesite naziv ulice';
    }
    return this.orgStreet.hasError('pattern') ? 'Prvo slovo mora biti veliko' : '';
  }

  getErrorMessageForOrgNumber() {
    if (this.orgNumber.hasError('required')) {
      return 'Unesite broj ulice';
    }
    return this.orgNumber.hasError('pattern') ? 'Prvo brojevi pa mala slova' : '';
  }

  getErrorMessageForOrgCity() {
    if (this.orgCity.hasError('required')) {
      return 'Unesite ime grada';
    }
    return this.orgCity.hasError('pattern') ? 'Prvo slovo mora biti veliko' : '';
  }

  getErrorMessageForContactPersonName() {
    if (this.contactPersonName.hasError('required')) {
      return 'Unesite ime kontakt osobe';
    }
    return this.contactPersonName.hasError('pattern') ? 'Prvo slovo mora biti veliko' : '';
  }

  getErrorMessageForContactPersonLastName() {
    if (this.contactPersonLastName.hasError('required')) {
      return 'Unesite prezime kontakt osobe';
    }
    return this.contactPersonLastName.hasError('pattern') ? 'Prvo slovo mora biti veliko' : '';
  }

  getErrorMessageForTelNumber() {
    if (this.telNumber.hasError('required')) {
      return 'Unesite broj telefona';
    }
    return this.telNumber.hasError('pattern') ? 'Primer: 00381612345678 ili 0612345678' : '';
  }

  getErrorMessageForAreaActivity() {
    if (this.selectArea.hasError('required')) {
      return 'Izabrite jednu od ponudjenih oblasti delovanja';
    }
  }

  getErrorMessageForWebSite() {
    if (this.webSite.hasError('required')) {
      return 'Unesite veb sajt adresu';
    }
    return this.webSite.hasError('pattern') ? 'Format veb adrese nije ispravan' : '';
  }

  getErrorMessageForEmail() {
    if (this.eMail.hasError('required')) {
      return 'Unesite email adresu';
    }
    return this.eMail.hasError('email') ? 'Email format nije ispravan' : '';
  }

  getErrorMessageForUserName() {
    if (this.userName.hasError('required')) {
      return 'Unesite korisničko ime';
    }
    return this.userName.hasError('pattern') ? 'Minimum prva tri karaktera mala slova, pa brojevi ili velika slova' : '';
  }

  getErrorMessageForPassword() {
    if (this.passWord.hasError('required')) {
      return 'Unesite lozinku';
    }
    return this.passWord.hasError('pattern') ? 'Minimalno 8 karaktera, slova ili brojeva' : '';
  }

  getErrorMessageForOrgInfo() {
    if (this.orgInfo.hasError('required')) {
      return 'Unesite nesto o vašoj organizaciji';
    }
    return this.orgInfo.hasError('pattern') ? 'Prvo slovo mora biti veliko' : '';
  }

  getErrorMessageForChecked() {
    if (this.checked.hasError('required')) {
      return 'Uslovi korišćenja su obavezni!!!';
    }

  }

  organization: string;
  street: string;
  number: string;
  city: string;
  first_name: string;
  last_name: string;
  telephone: string;
  areaactivity: string;
  website: string;
  email: string;
  username: string;
  password: string;
  organizationInfoText: string;
  privilege: string;


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    if (this.orgName.valid && this.orgStreet.valid && this.orgNumber.valid && this.orgCity.valid && this.contactPersonName.valid && this.contactPersonLastName.valid && this.telNumber.valid && this.selectArea.valid && this.webSite.valid && this.eMail.valid && this.userName.valid && this.passWord.valid && this.orgInfo.valid && this.checked.valid) {
      this.userService.register(this.organization, this.street, this.number, this.city, this.first_name, this.last_name, this.telephone, this.areaactivity, this.website, this.email, this.username, this.password, this.organizationInfoText, this.privilege).subscribe(resp => {
        if (resp['message'] == 'ok') {
          alert('Uspešno ste se registrovali!');
          this.router.navigate(['/login']);

        } else if(resp['message'] == 'busy') {
          alert('Korisničko ime je zauzeto!!! Izaberite drugo korisničko ime!');
          this.userName.reset();
        }
      })
    } else {
      alert("Sva polja su obavezna i moraju biti ispravno popunjena!!!");
    }
  }


}
