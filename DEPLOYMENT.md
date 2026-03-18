# Deployment Guide

## Netlify Deployment

This project is configured for Netlify deployment with serverless functions.

### Build Process
1. Client builds to `dist/spa/`
2. Serverless functions are in `netlify/functions/`
3. API routes are proxied via redirects

### Environment Variables
Set these in your Netlify dashboard:
- `PING_MESSAGE` - Custom ping response message

### Deployment Commands
- Build: `npm run build:netlify`
- Functions automatically built from `netlify/functions/`

### API Routing
All `/api/*` requests are redirected to `/.netlify/functions/api/:splat`

### Dependencies
Critical dependencies for deployment:
- `serverless-http` - Express serverless wrapper
- `express` - Web framework
- `cors` - Cross-origin resource sharing
