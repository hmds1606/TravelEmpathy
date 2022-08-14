FROM node:14

# RUN mkdir class_build
WORKDIR /TRAVELEMPATHY/
COPY . /TRAVELEMPATHY/

RUN yarn install
RUN yarn build
CMD yarn start