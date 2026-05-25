# ETAPA 1: Construir a aplicação (Build)
FROM node:19-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ETAPA 2: Executar a aplicação (Production)
FROM node:19-alpine AS runner

WORKDIR /app

# Configuração de variáveis para melhorar a performance e segurança
ENV NODE_ENV=production
ENV PORT=3000

# Copia a pasta de build da etapa anterior
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expõe a porta que o Next.js vai rodar
EXPOSE 3000

# Comando para iniciar o servidor Next.js
CMD ["npm", "start"]
