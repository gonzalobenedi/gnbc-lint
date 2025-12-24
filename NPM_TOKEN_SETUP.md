# NPM Token Setup Guide (2025)

## 🔐 New NPM Authentication System

NPM has updated their authentication system (December 2025). Here's how to set up tokens for automated publishing:

## 📋 Step 1: Create NPM Token

### Option A: Using NPM CLI (Recommended)

```bash
# Login to NPM if not already logged in
npm login

# Generate a granular access token for automation
npm token create --type=granular --description="GitHub Actions Release Pipeline" --scope=@your-org/gnbc-lint --permission=publish
```

### Option B: Using NPM Website

1. Go to [npmjs.com](https://npmjs.com) and login
2. Navigate to **Account Settings** → **Access Tokens**
3. Click **Generate New Token**
4. Select **Granular Access Token**
5. Configure:
   - **Token Name**: `GitHub Actions - gnbc-lint`
   - **Expiry**: Choose appropriate duration
   - **Packages and Scopes**: Select your package
   - **Permissions**: `publish`

## 🔐 Step 2: Configure GitHub Secrets

1. **Go to your GitHub repository**
2. **Settings** → **Secrets and variables** → **Actions**
3. **Add repository secret**:
   - **Name**: `NPM_TOKEN`
   - **Value**: Your NPM token

## ✅ Security Features

Our pipeline now includes:

- **Provenance statements** for package authenticity
- **Granular tokens** with minimal permissions
- **Automated token validation** in CI

## 🔍 Verify Setup

After setting up the token, the release pipeline will:

1. Authenticate with NPM using the granular token
2. Generate provenance statements for published packages
3. Validate permissions before publishing

The new system provides better security and traceability for published packages.
