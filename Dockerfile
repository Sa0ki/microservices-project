FROM openjdk:17-jdk

WORKDIR /app

COPY backend-project/microservices/config-service/target/config-service-0.0.1-SNAPSHOT.jar /app/config-service.jar

EXPOSE 9090

CMD [ "java", "-jar", "config-service.jar" ]

