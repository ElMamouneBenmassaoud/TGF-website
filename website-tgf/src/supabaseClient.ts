// src/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bsmdhmagvnmkfnonosfq.supabase.co'; // ← à remplacer
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzbWRobWFndm5ta2Zub25vc2ZxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1Mzk4MDQ4NiwiZXhwIjoyMDY5NTU2NDg2fQ.AdABOTt1DRnvHpL8h4IcRv2l-sV5tqvsDSGdx3Ew0ww'; // ← à remplacer aussi

export const supabase = createClient(supabaseUrl, supabaseKey);
