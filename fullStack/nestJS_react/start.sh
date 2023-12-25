#!/bin/bash

echo ""
echo "Starting NestJS_React_Template in Dev"
echo ""
npm run start --prefix frontend &
npm run start:dev --prefix backend &
trap 'pkill -P $$' SIGINT SIGTERM
wait