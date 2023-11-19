FROM openjdk:17-jdk

WORKDIR /app

COPY backend-project/microservices/eureka-discovery-service/target/eureka-discovery-service-0.0.1-SNAPSHOT.jar /app/eureka-discovery-service.jar

EXPOSE 8761

CMD [ "java", "-jar", "eureka-discovery-service.jar" ]

