#!/bin/bash
# Simple build script for deployment
echo "Building application..."
NODE_ENV=production npm run build
echo "Build completed successfully"