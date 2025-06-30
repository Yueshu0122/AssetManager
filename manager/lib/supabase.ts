import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kivyqftfrtgiypvnqdpj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpdnlxZnRmcnRnaXlwdm5xZHBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyODY0MjMsImV4cCI6MjA2Njg2MjQyM30.mry6Yw5Srr-cEC8bEcxAEOMRxypNlLAqGG5OXdek-Ds'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})