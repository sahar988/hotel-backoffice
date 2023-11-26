import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://nmblnsujkpscyusdevif.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tYmxuc3Vqa3BzY3l1c2RldmlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAzMzgzODAsImV4cCI6MjAxNTkxNDM4MH0.kdDkf_KBoZz9qtxNOuQQe2GMpsizsWKSfhmd9uUrCd0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
