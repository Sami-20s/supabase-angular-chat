import { Injectable } from '@angular/core';
import { SupabaseClient } from '@supabase/supabase-js';
import { createClient } from '@supabase/supabase-js';
import { Observable, finalize, from } from 'rxjs';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  supabaseClient: SupabaseClient;
  loader: boolean = false;
  constructor() {
    this.supabaseClient = createClient(
      environment.SUPABASE_URL,
      environment.SUPABASE_ANON_KEY
    );
  }
  supabaseObserver(client: any, skipLoader?: boolean): Observable<any> {
    if (!skipLoader) this.loader = true;
    return from(client).pipe(finalize(() => (this.loader = false)));
  }
}
