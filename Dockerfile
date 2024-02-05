# Use the official Bun image
FROM oven/bun:latest as base

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the entire project into the container
COPY . .

# Install dependencies
RUN bun install

# Build the app
RUN bun run build

# Expose the port app port
EXPOSE 8080

# Use a shell command to run both the proxy and the app concurrently
CMD sh -c "bun run preview"
