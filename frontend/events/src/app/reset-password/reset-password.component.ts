import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SendMailService } from '../services/send-mail.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  hide = true;
  userName = new FormControl('', [Validators.required, Validators.pattern('^[a-z]{3,}[A-Z0-9]*')]);
  eMail = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessageForUserName() {
    if (this.userName.hasError('required')) {
      return 'Unesite korisničko ime';
    }
    return this.userName.hasError('pattern') ? 'Minimum prva tri karaktera mala slova, pa brojevi ili velika slova' : '';
  }

  getErrorMessage() {
    if (this.eMail.hasError('required')) {
      return 'Unesite vašu email adresu';
    }

    return this.eMail.hasError('email') ? 'Email format nije ispravan' : '';
  }

  constructor(private sendMail: SendMailService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  username: string;
  email: string;

  resetPassword() {
    let user = {
      username: this.username,
      email: this.email
    }

    if(this.userName.valid && this.eMail.valid) {
      this.sendMail.sendemail(this.username, this.email).subscribe(data => {
        let res: any = data;
        if (data['message'] == 'no in db') {
          alert(`Korisničko ime ${this.username} i/ili email adresa ${this.email} ne postoje u bazi. Unesite vaše korisničko ime i email adresu sa kojim ste se registrovali na našem portalu, kako bi vam poslali link za resetovanje lozinke!`);
          this.eMail.reset();
          this.userName.reset();
        } else if(data['message'] == 'ok')  {
          localStorage.setItem('userAskNewPass', JSON.stringify(this.username)); // zapamti korisnika koji je trazi promjenu lozinke
          alert(`Zdravo ${this.username}, na ovu email adresu ${this.email} je poslan link za resetovanje lozinke.`);
          this.router.navigate(['/']);
        }
      });
    } else {
      alert("Korisničko ime u email su obavezni");
    }

  }

}
