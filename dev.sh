#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Function to clean up on exit
cleanup() {
    echo -e "${YELLOW}Cleaning up...${NC}"
    kill $(jobs -p) 2>/dev/null
    exit
}

# Set up trap for cleanup
trap cleanup EXIT INT TERM

# Function to check if port is in use
check_port() {
    if lsof -i :3000 > /dev/null; then
        echo -e "${YELLOW}Port 3000 is in use. Attempting to free it...${NC}"
        kill $(lsof -t -i:3000) 2>/dev/null
        sleep 2
    fi
}

# Function to start the development server
start_dev_server() {
    echo -e "${GREEN}Starting development server...${NC}"
    
    # Clear any existing build cache
    rm -rf node_modules/.vite 2>/dev/null
    
    # Start the server with specific configuration
    npm run dev -- --force --port 3000 --host --strictPort
}

# Function to handle errors
handle_error() {
    echo -e "${RED}Error occurred. Attempting to recover...${NC}"
    cleanup
    sleep 2
    start_dev_server
}

# Main loop
while true; do
    check_port
    start_dev_server
    
    # If the server exits, wait a moment before restarting
    echo -e "${YELLOW}Server stopped. Restarting in 3 seconds...${NC}"
    sleep 3
done 