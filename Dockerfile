FROM docker.platform.cloud.coe.ic.gov/node

MAINTAINER Caliper Developers <https://github.com/appliedis/caliper-api>

# Put code at /caliper
RUN mkdir -p /caliper
WORKDIR /caliper
COPY . /caliper

RUN npm set registry http://npm.appdev.proj.coe.ic.gov

RUN npm install

# Our app will run on port 9000
EXPOSE 9000

# Rebuild the app every time we start. This lets us do things like inject
# analytics via env variables. Check the deps for the server target
# in package.json

# Start a node-static server on port 9000
CMD npm run server
