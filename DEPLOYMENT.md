# Deployment Guide

## Vercel Deployment

This project is configured for Vercel deployment with serverless functions.

### Build Process
1. Client builds to `dist/spa/`
2. Server builds to `dist/server/`
3. API routes handled via `/api/index.ts`

### Environment Variables
Set these in your Vercel dashboard:
- `PING_MESSAGE` - Custom ping response message

### Deployment Commands
- Build: `npm run build`
- Functions automatically built from `api/` directory

### API Routing
All `/api/*` requests are rewritten to `/api/index`

### Dependencies
Critical dependencies for deployment:
- `express` - Web framework
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variable handling
