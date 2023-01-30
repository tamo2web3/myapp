import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2bWRpYmVjcWxoa3dkdmVia3ByIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ4ODgzNjcsImV4cCI6MTk5MDQ2NDM2N30.hUCHhDMSUil8WJY-0OUUvb0NTK9TltmF0RSfDCv2qic'
const SUPABASE_URL = "https://tvmdibecqlhkwdvebkpr.supabase.co"

export default createClient(SUPABASE_URL, SUPABASE_KEY)
