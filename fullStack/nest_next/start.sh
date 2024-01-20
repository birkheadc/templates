#!/bin/bash

echo ""
echo "Starting Dev environment"
echo ""
npm run dev --prefix src/frontend &
npm run start:serverless --prefix src/backend &
trap 'pkill -P $$' SIGINT SIGTERM
wait