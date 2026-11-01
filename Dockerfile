FROM node:24-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --no-audit --no-fund
COPY . .
RUN npm run build
RUN mkdir /out && (cp -r dist/frontend-banco-cloud/browser/. /out/ 2>/dev/null || cp -r dist/frontend-banco-cloud/. /out/)

FROM caddy:2-alpine
COPY --from=build /out /srv
COPY Caddyfile /etc/caddy/Caddyfile