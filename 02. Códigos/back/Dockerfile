FROM maven:3.8-openjdk-17 AS builder


WORKDIR /app


COPY . .


RUN mvn package -DskipTests


FROM eclipse-temurin:17-jre-alpine


WORKDIR /app


COPY --from=builder /app/target/*.jar ./app.jar


EXPOSE 8080


ENTRYPOINT ["java", "-jar", "app.jar"]
