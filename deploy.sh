#!/bin/bash

echo "Building the project..."
npm run build

echo "Deploying to Cloudflare Pages..."
npx wrangler pages publish out --project-name=huzaifa-portfolio 