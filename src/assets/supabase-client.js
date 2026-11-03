import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const hasSupabaseConfig =
  typeof supabaseUrl === "string" &&
  supabaseUrl.trim().length > 0 &&
  typeof supabaseKey === "string" &&
  supabaseKey.trim().length > 0;

if (!hasSupabaseConfig && import.meta.env.DEV) {
  console.warn(
    "[supabase] VITE_SUPABASE_URL / VITE_SUPABASE_KEY ونن. پەڕەی گشتی دەکرێتەوە، بەڵام داتای پرۆژە/لۆگین کار ناکات."
  );
}

const supabase = hasSupabaseConfig
  ? createClient(supabaseUrl, supabaseKey)
  : null;

export default supabase;
