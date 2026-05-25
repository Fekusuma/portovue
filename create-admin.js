/**
 * Quick Admin User Creator
 * Run with: node create-admin.js
 *
 * This script creates a super admin user in Supabase
 * without needing to run SQL commands manually.
 */

import { createClient } from '@supabase/supabase-js'
import readline from 'readline'

const SUPABASE_URL = 'https://bowspzubaenptrjewewm.supabase.co'
const SUPABASE_KEY = 'sb_publishable_40kUWmaKG1bPdqYPdZ89pA_9oVATVLv'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

const DEFAULT_ADMIN = {
  email: 'admin@portfolio.com',
  password: 'Admin@123',
  fullName: 'Super Admin'
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function question(query) {
  return new Promise(resolve => rl.question(query, resolve))
}

async function createAdminUser(email, password, fullName) {
  console.log('\n🔐 Creating super admin user...')

  try {
    // Step 1: Create auth user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          role: 'super_admin'
        }
      }
    })

    if (authError) {
      if (authError.message.includes('already been registered')) {
        console.log('\n⚠️  User already exists!')
        console.log('You can login with:', email, '/', password)
        return
      }
      throw authError
    }

    console.log('✅ Auth user created:', authData.user?.email)

    // Step 2: Try to create profile (if table exists)
    const { error: profileError } = await supabase
      .from('profiles')
      .insert({
        id: authData.user?.id,
        email: email,
        full_name: fullName,
        role: 'super_admin',
        created_at: new Date().toISOString()
      })

    if (profileError) {
      console.log('⚠️  Profile table note:', profileError.message)
      console.log('   Run supabase-seed.sql in Supabase SQL Editor to create profiles table')
    } else {
      console.log('✅ Profile created with super_admin role')
    }

    console.log('\n✨ Super admin created successfully!')
    console.log('\n📝 Login Credentials:')
    console.log('   Email:', email)
    console.log('   Password:', password)
    console.log('\n🌐 Visit http://localhost:5173/login to login')

  } catch (error) {
    console.error('\n❌ Error:', error.message)
  }
}

async function main() {
  console.log('\n👑 Supabase Super Admin Creator')
  console.log('================================\n')

  const useDefault = await question(
    `Use default admin? (${DEFAULT_ADMIN.email}) [Y/n]: `
  )

  let email, password, fullName

  if (useDefault.toLowerCase() === 'n') {
    email = await question('Enter admin email: ')
    password = await question('Enter admin password: ')
    fullName = await question('Enter full name: ')
  } else {
    email = DEFAULT_ADMIN.email
    password = DEFAULT_ADMIN.password
    fullName = DEFAULT_ADMIN.fullName
  }

  await createAdminUser(email, password, fullName)

  rl.close()
}

main()
