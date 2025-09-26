# Estágio 1: Build da Aplicação
# Usamos uma imagem com Maven e JDK para compilar o projeto
FROM maven:3.8-openjdk-17 AS builder

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o código-fonte do backend para o contêiner
COPY . .

# Roda o comando do Maven para empacotar a aplicação, pulando os testes
RUN mvn package -DskipTests

# Estágio 2: Imagem Final de Execução
# Usamos uma imagem JRE mínima para rodar a aplicação, resultando em uma imagem menor e mais segura
FROM eclipse-temurin:17-jre-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia apenas o arquivo .jar gerado no estágio de build
COPY --from=builder /app/target/*.jar ./app.jar

# Expõe a porta 8080, que é a porta padrão para muitas aplicações Java (ex: Spring Boot)
EXPOSE 8080

# Comando para iniciar a aplicação quando o contêiner for executado
ENTRYPOINT ["java", "-jar", "app.jar"]
