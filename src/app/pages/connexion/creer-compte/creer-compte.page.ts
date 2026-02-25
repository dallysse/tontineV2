import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList,
  IonItem,
  IonIcon,
  IonInput,
  IonText,
  IonButton,
  IonSpinner,
  NavController
} from '@ionic/angular/standalone';
import { ToastController } from '@ionic/angular';

import { NgForm } from '@angular/forms';
import { SupabaseService } from 'src/app/services/supabase/supabase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creer-compte',
  templateUrl: './creer-compte.page.html',
  styleUrls: ['./creer-compte.page.scss'],
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonList,
    IonItem,
    IonIcon,
    IonInput,
    IonText,
    IonButton,
    IonSpinner],
})
export class CreerComptePage implements OnInit {

  type: boolean = true;
  isLogin = false;
  isLoading = false
  registerForm!: FormGroup;
  showPassword = false;
  showConfirmPassword = false;

  constructor(private supabaseService: SupabaseService, private fb: FormBuilder, private router: Router, private toastCtrl: ToastController, private navCtrl: NavController,

  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      firstname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
      town: ['', Validators.required],
      country: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  toggleShowPassword() { this.showPassword = !this.showPassword; }
  toggleShowConfirmPassword() { this.showConfirmPassword = !this.showConfirmPassword; }
  passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
    const p = group.get('password')?.value;
    const cp = group.get('confirmPassword')?.value;
    return p && cp && p !== cp ? { mismatch: true } : null;
  }
  ngOnInit() {
  }
  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
  }

  async presentToast(message: string, color: string = 'success') {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      position: 'bottom',
      color
    });
    await toast.present();
  }


  async onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    const payload = { ...this.registerForm.value };
    delete payload.confirmPassword;
    try {
      const res = await this.supabaseService.register(payload);
      if (res?.error) {
        console.error(res.error);
        await this.presentToast('Erreur lors de la création du compte', 'danger');
      } else {
        await this.presentToast('Compte créé avec succès. Vérifiez votre e‑mail.');
        // optionnel : redirection après succès
        this.router.navigateByUrl('/tabs/connexion');
      }
    } catch (err) {
      console.error(err);
      await this.presentToast('Erreur inattendue', 'danger');
    } finally {
      this.isLoading = false;
    }
  }

  goBack() {
    this.navCtrl.back();
  }

  //dallyssedjouhou@yahoo.fr Adolescents12345
}

