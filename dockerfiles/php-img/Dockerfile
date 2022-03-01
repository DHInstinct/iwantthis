FROM php:7.4-apache
RUN docker-php-ext-install mysqli
COPY . /usr/src/myapp
WORKDIR /usr/src/myapp
# CMD [ "php", "/src/index.php" ]