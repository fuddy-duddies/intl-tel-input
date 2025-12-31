FROM mcr.microsoft.com/devcontainers/javascript-node:16-bookworm

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    vim \
    g++ \
    unzip \
    zip \
    curl\
    ant \
    default-jdk \
    libatk-bridge2.0-0 \
    libgtk-3.0 \
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /workspace/

COPY . /workspace/

ENV CI=true

RUN git config --global core.autocrlf input

RUN npm install -g yarn @bazel/bazelisk

CMD ["echo", "Development container is ready."]
