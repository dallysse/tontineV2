import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, NavController } from '@ionic/angular/standalone';
import { NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SupabaseService } from 'src/app/services/supabase/supabase';


@Component({
  selector: 'app-mot-passe-oublier',
  templateUrl: './mot-passe-oublier.page.html',
  styleUrls: ['./mot-passe-oublier.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule, IonBackButton, IonButtons],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line

})
export class MotPasseOublierPage implements OnInit {

  type: boolean = true;
  isLogin = false;
  loading = false
  resetForm!: FormGroup;


  constructor(private fb: FormBuilder, private navCtrl: NavController, private supabaseService: SupabaseService, private router: Router) {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  ngOnInit() { }
  // goBack() { this.router.back(); }

  /*   async presentToast(message: string, color: string = 'primary') {
      const t = await this.toastCtrl.create({ message, duration: 3000, color, position: 'bottom' });
      await t.present();
    } */
  /*   async onSubmit() {
      if (this.resetForm.invalid) {
        this.resetForm.markAllAsTouched();
        return;
      }
      this.loading = true;
      const { email } = this.resetForm.value;

      // Exemple avec supabase-js v2
      const { data, error } = await this.supabaseService.client.auth.resetPasswordForEmail(email);
      if (error) {
        console.error('Reset error', error);
        await this.presentToast('Erreur lors de l\'envoi du lien', 'danger');
      } else {
        await this.presentToast('Lien de réinitialisation envoyé. Vérifiez votre e‑mail.', 'success');
        // optionnel : redirection
        // this.router.navigateByUrl('/connexion');
      }
    } catch(err) {
      console.error(err);
      await this.presentToast('Erreur inattendue', 'danger');
    } finally {
      this.loading = false;
    } */

}
