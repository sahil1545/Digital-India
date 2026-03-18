# Vercel Deployment Configuration

## Build Settings
- **Package Manager**: pnpm (detected from pnpm-lock.yaml)
- **Build Command**: `pnpm run build`
- **Install Command**: `pnpm install`
- **Framework**: Vite

## Deployment Structure
- **Static Files**: `dist/spa/`
- **Serverless Functions**: `api/` directory
- **API Routing**: `/api/*` → `/api/index`

## Environment Variables
Add these in Vercel dashboard:
- `PING_MESSAGE` - Custom ping response (optional)

## Troubleshooting
If deployment fails:
1. Ensure latest commit is pushed
2. Check Vercel build logs
3. Verify pnpm-lock.yaml compatibility
4. Clear Vercel cache if needed
