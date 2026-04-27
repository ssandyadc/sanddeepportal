import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Lead {
  name: string;
  phone: string;
  email?: string;
  business_type?: string;
  message?: string;
  source?: string;
}

export async function submitLead(lead: Lead) {
  const { data, error } = await supabase.from('leads').insert([lead]);
  return { data, error };
}
