/**
 * Simple Admin User Creator using fetch only
 * Run with: node create-admin.mjs
 */

const SUPABASE_URL = 'https://bowspzubaenptrjewewm.supabase.co'
const SUPABASE_KEY = 'sb_publishable_40kUWmaKG1bPdqYPdZ89pA_9oVATVLv'

const ADMIN = {
  email: 'admin@myportfolio.dev',
  password: 'Admin@123'
}

async function createAdmin() {
  console.log('👑 Creating super admin user...\n')

  const response = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
    method: 'POST',
    headers: {
      'apikey': SUPABASE_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: ADMIN.email,
      password: ADMIN.password,
      data: {
        role: 'super_admin',
        full_name: 'Super Admin'
      }
    })
  })

  const result = await response.json()

  if (response.ok) {
    console.log('✅ Admin user created successfully!\n')
    console.log('📝 Login Credentials:')
    console.log(`   Email: ${ADMIN.email}`)
    console.log(`   Password: ${ADMIN.password}\n`)
    console.log('🌐 Visit http://localhost:5173/login to login')
  } else if (result.error_code === 'over_email_send_rate_limit') {
    console.log('⚠️  Rate limited. Using the web UI instead...\n')
    console.log('📝 Default Credentials:')
    console.log(`   Email: ${ADMIN.email}`)
    console.log(`   Password: ${ADMIN.password}\n`)
    console.log('🌐 Visit http://localhost:5173/admin-setup to create admin')
  } else if (result.msg?.includes('already been registered')) {
    console.log('✅ Admin already exists!\n')
    console.log('📝 Login Credentials:')
    console.log(`   Email: ${ADMIN.email}`)
    console.log(`   Password: ${ADMIN.password}\n`)
    console.log('🌐 Visit http://localhost:5173/login to login')
  } else {
    console.log('❌ Error:', result)
  }
}

createAdmin()
