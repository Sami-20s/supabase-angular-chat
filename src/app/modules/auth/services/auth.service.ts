import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { SupabaseService } from 'src/app/shared/services/supabase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;
  constructor(private supabaseService: SupabaseService) {}
  login({ email, password }: { email: string; password: string }) {
    return this.supabaseService.supabaseObserver(
      this.supabaseService.supabaseClient.auth.signUp({
        email,
        password,
      })
    );
  }
  signup({ email, password }: { email: string; password: string }) {
    return this.supabaseService.supabaseObserver(
      this.supabaseService.supabaseClient.auth.signInWithPassword({
        email,
        password,
      })
    );
  }
  autoLogin() {}
}
