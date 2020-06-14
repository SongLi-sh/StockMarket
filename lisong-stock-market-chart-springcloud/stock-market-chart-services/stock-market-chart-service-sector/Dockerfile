FROM openjdk:8-jdk-alpine
VOLUME /tmp
ADD target/stock-market-chart-service-sector-0.0.1-SNAPSHOT.jar stock-market-chart-service-sector-app.jar
ENV JAVA_OPTS=""
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /stock-market-chart-service-sector-app.jar" ]
