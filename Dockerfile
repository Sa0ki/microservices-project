FROM openjdk:17-jdk

WORKDIR /app

COPY backend-project/microservices/customer-service/target/customer-service-0.0.1-SNAPSHOT.jar /app/custmer-service.jar

EXPOSE 8081

CMD [ "java", "-jar", "customer-service.jar" ]

