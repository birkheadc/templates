#!/bin/bash

echo ""
echo "Starting Dev environment"
echo ""
npm run start --prefix frontend &
npm run start:serverless --prefix backend &
trap 'pkill -P $$' SIGINT SIGTERM
wait