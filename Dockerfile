# Stage 1 (Prepare base)
FROM avatsaev/angular-chrome-headless as Base
LABEL maintainer="semihonay@hotmail.com.tr"
ARG env=$env
ENV env=$env

WORKDIR /commerce-app
COPY . .

# Stage 2 (Dependencies)
FROM base AS Dependencies
RUN npm install

# Stage 3 (Test)
# Disabled due to Karma + Puppeteer having some problems
FROM Dependencies AS Test
RUN npm run test-headless

# Stage 4 (Build Production)
RUN npm run build:$env

# Stage 5 (serve app via http)
FROM nginx:1.15-alpine
COPY --from=Test /commerce-app/dist/commerce-app /html/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
