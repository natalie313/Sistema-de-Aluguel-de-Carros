# Estágio 1: Build da Aplicação
# Usamos uma imagem do Node.js para instalar as dependências e construir o projeto
FROM node:18-alpine AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia o package.json e o package-lock.json para o contêiner
# Isso otimiza o cache do Docker, reinstalando as dependências apenas se esses arquivos mudarem
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o resto do código-fonte do frontend
COPY . .

# Roda o script de build do React
RUN npm run build

# Estágio 2: Servidor Web
# Usamos uma imagem Nginx super leve para servir os arquivos estáticos gerados
FROM nginx:1.25-alpine

# Copia os arquivos estáticos gerados no estágio de build para a pasta padrão do Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Expõe a porta 80, que é a porta padrão do Nginx
EXPOSE 80

# O comando padrão da imagem Nginx já inicia o servidor, então não precisamos de um CMD/ENTRYPOINT
