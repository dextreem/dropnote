import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kuqvpfdoagxpgkscqssu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1cXZwZmRvYWd4cGdrc2Nxc3N1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1OTM1MDYsImV4cCI6MjAxNjE2OTUwNn0.VGVig4cYPLOtZo-oYvwgJMLJy0UiY3dkY3seNEjDH0k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
