# ========================
# Stage 1: Build the JAR
# ========================
FROM maven:3.9.6-eclipse-temurin-21 AS builder
WORKDIR /app

# Copy only pom.xml first for caching dependencies
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy the source code and build
COPY src ./src
RUN mvn clean package -DskipTests -B


# ========================
# Stage 2: Runtime
# ========================
FROM eclipse-temurin:21-jdk-jammy
WORKDIR /app

# Copy the built JAR from builder stage
COPY --from=builder /app/target/*.jar app.jar

# Expose Spring Boot default port
EXPOSE 8081

# Run the application
ENTRYPOINT ["java","-jar","/app/app.jar"]
