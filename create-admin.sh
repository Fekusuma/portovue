#!/bin/bash

# ============================================
# Quick Admin User Creator for Supabase
# Usage: chmod +x create-admin.sh && ./create-admin.sh
# ============================================

SUPABASE_URL="https://bowspzubaenptrjewewm.supabase.co"
SUPABASE_KEY="sb_publishable_40kUWmaKG1bPdqYPdZ89pA_9oVATVLv"

ADMIN_EMAIL="admin@myportfolio.dev"
ADMIN_PASSWORD="Admin@123"

echo "👑 Creating Supabase Super Admin User..."
echo "========================================"
echo ""

# Create user via Supabase Auth API
RESPONSE=$(curl -s -X POST "${SUPABASE_URL}/auth/v1/signup" \
  -H "apikey: ${SUPABASE_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "'"${ADMIN_EMAIL}"'",
    "password": "'"${ADMIN_PASSWORD}"'",
    "data": {
      "role": "super_admin",
      "full_name": "Super Admin"
    }
  }')

echo "Response: $RESPONSE"
echo ""

# Check if user was created
if echo "$RESPONSE" | grep -q "already been registered"; then
  echo "⚠️  Admin user already exists!"
  echo ""
  echo "📝 Login Credentials:"
  echo "   Email: ${ADMIN_EMAIL}"
  echo "   Password: ${ADMIN_PASSWORD}"
elif echo "$RESPONSE" | grep -q "access_token"; then
  echo "✅ Admin user created successfully!"
  echo ""
  echo "📝 Login Credentials:"
  echo "   Email: ${ADMIN_EMAIL}"
  echo "   Password: ${ADMIN_PASSWORD}"
else
  echo "❌ Error creating user. Check response above."
fi

echo ""
echo "🌐 Visit http://localhost:5173/login to login"
