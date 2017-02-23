FROM docker.platform.cloud.coe.ic.gov/node

MAINTAINER Caliper Developers <https://github.com/appliedis/caliper-api>

# Put code at /caliper
RUN mkdir -p /caliper
WORKDIR /caliper
COPY . /caliper

RUN npm set registry http://npm.appdev.proj.coe.ic.gov

RUN npm install

# Build the application
RUN npm run dist

# Our app will run on port 9000
EXPOSE 9000

# Start a node-static server on port 9000
CMD npm run server
