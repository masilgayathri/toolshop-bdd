# Official Playwright image: Node.js + browsers already installed.
# The version must match @playwright/test in package.json (1.64.1).
FROM mcr.microsoft.com/playwright:v1.64.1-noble

WORKDIR /app

# Install dependencies first, so Docker can reuse this layer when only tests change
COPY package*.json ./
RUN npm ci

# Copy the rest of the project
COPY . .

# Tells playwright.config.ts to run headless (no screen inside a container)
ENV CI=true

CMD ["npm", "test"]
