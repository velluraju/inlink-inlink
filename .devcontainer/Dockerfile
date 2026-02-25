FROM mcr.microsoft.com/vscode/devcontainers/base:ubuntu-22.04
ARG NODE_VERSION=20
RUN apt-get update && \
    apt-get install -y --no-install-recommends ca-certificates curl git build-essential pkg-config libssl-dev && \
    curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && rm -rf /var/lib/apt/lists/*
RUN npm install -g pnpm@latest
ENV SHELL=/bin/bash
