import { Component, OnDestroy, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList,
  IonItem,
  IonIcon,
  IonInput,
  IonText,
  IonButton,
  IonSpinner
} from '@ionic/angular/standalone';
import { SupabaseService } from 'src/app/services/supabase/supabase';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
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
    IonSpinner, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line

})
export class ConnexionPage implements OnInit, OnDestroy {

  type: boolean = true;
  isLogin = false;
  isLoading = false
  isLocked = false;
  lockRemainingSeconds = 0;
  loginForm!: FormGroup;
  showPassword = false;
  showConfirmPassword = false;
  private readonly maxAttempts = 5;
  private readonly lockDurationMs = 60_000;
  private readonly lockStorageKey = 'auth-lock-until';
  private readonly attemptsStorageKey = 'auth-failed-attempts';
  private lockIntervalId?: ReturnType<typeof setInterval>;

  constructor(private supabaseService: SupabaseService, private fb: FormBuilder, private router: Router, private toastCtrl: ToastController
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  ngOnInit() {
    this.syncLockState();
  }

  ngOnDestroy() {
    this.stopLockCountdown();
  }

  toggleShowPassword() { this.showPassword = !this.showPassword; }
  async presentToast(message: string, color: string = 'success') {
    const t = await this.toastCtrl.create({ message, duration: 3000, color, position: 'bottom' });
    await t.present();
  }

  async onSubmit() {
    if (this.isLocked) {
      await this.presentToast(`Trop de tentatives. Réessayez dans ${this.lockRemainingSeconds}s`, 'warning');
      return;
    }

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    const { email, password } = this.loginForm.value;
    const normalizedEmail = (email ?? '').trim().toLowerCase();

    try {
      const res = await this.supabaseService.signIn(normalizedEmail, password);
      if (res?.error) {
        this.registerFailedAttempt();
        await this.presentToast(this.resolveAuthErrorMessage(res.error.message), 'danger');
      } else {
        this.clearFailedAttempts();
        this.router.navigateByUrl('/tabs/tab1');
      }
    } catch (err) {
      console.error(err);
      this.registerFailedAttempt();
      await this.presentToast('Erreur de connexion', 'danger');
    } finally {
      this.isLoading = false;
    }
  }

  private resolveAuthErrorMessage(rawMessage: string = ''): string {
    const message = rawMessage.toLowerCase();
    if (message.includes('invalid login credentials')) {
      return 'Identifiants invalides';
    }
    if (message.includes('email not confirmed')) {
      return 'Confirmez votre email avant de vous connecter';
    }
    return 'Impossible de vous connecter pour le moment';
  }

  private registerFailedAttempt() {
    const attempts = Number(localStorage.getItem(this.attemptsStorageKey) ?? '0') + 1;
    localStorage.setItem(this.attemptsStorageKey, attempts.toString());

    if (attempts >= this.maxAttempts) {
      this.activateLock();
    }
  }

  private clearFailedAttempts() {
    localStorage.removeItem(this.attemptsStorageKey);
    localStorage.removeItem(this.lockStorageKey);
    this.stopLockCountdown();
  }

  private activateLock() {
    const lockUntil = Date.now() + this.lockDurationMs;
    localStorage.setItem(this.lockStorageKey, lockUntil.toString());
    localStorage.removeItem(this.attemptsStorageKey);
    this.startLockCountdown(lockUntil);
  }

  private syncLockState() {
    const lockUntil = Number(localStorage.getItem(this.lockStorageKey) ?? '0');
    if (!lockUntil || lockUntil <= Date.now()) {
      this.clearFailedAttempts();
      return;
    }
    this.startLockCountdown(lockUntil);
  }

  private startLockCountdown(lockUntil: number) {
    this.stopLockCountdown();
    this.isLocked = true;
    this.updateRemainingTime(lockUntil);
    this.lockIntervalId = setInterval(() => this.updateRemainingTime(lockUntil), 1000);
  }

  private updateRemainingTime(lockUntil: number) {
    const remainingSeconds = Math.max(0, Math.ceil((lockUntil - Date.now()) / 1000));
    this.lockRemainingSeconds = remainingSeconds;
    if (remainingSeconds === 0) {
      this.clearFailedAttempts();
    }
  }

  private stopLockCountdown() {
    this.isLocked = false;
    this.lockRemainingSeconds = 0;
    if (this.lockIntervalId) {
      clearInterval(this.lockIntervalId);
      this.lockIntervalId = undefined;
    }
  }


}
