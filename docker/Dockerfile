FROM node:18-slim


# Install Google Chrome Stable and fonts
# Note: this installs the necessary libs to make the browser work with Puppeteer.
RUN apt-get update && apt-get install gnupg wget libx11-6 libx11-xcb1 libxtst6 libxss1 dos2unix git -y && \
  wget --quiet --output-document=- https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor > /etc/apt/trusted.gpg.d/google-archive.gpg && \
  sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' && \
  apt-get update && \
  apt-get install google-chrome-stable -y --no-install-recommends && \
  rm -rf /var/lib/apt/lists/* 
  
  # Instalar o Chrome e as fontes
  # apt-get install google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf -y --no-install-recommends && \

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
ENV CHROMIUM_PATH /usr/bin/google-chrome-stable
ENV PUPPETEER_EXECUTABLE_PATH /usr/bin/google-chrome-stable

COPY entrypoint.sh /entrypoint.sh

RUN dos2unix /entrypoint.sh

RUN chmod +x /entrypoint.sh

WORKDIR /app

ENTRYPOINT [ "/entrypoint.sh" ]

CMD ["google-chrome-stable"]
