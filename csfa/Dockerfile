# Usa a imagem oficial do Node.js 20
FROM node:20-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para instalar dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código para o contêiner
COPY . .

# Expõe a porta da aplicação (caso rode um servidor)
EXPOSE 3000

# Comando padrão para iniciar a aplicação
CMD ["npm", "run", "dev"]
