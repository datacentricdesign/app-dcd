# Contributing to the DCD App

👍🎉 First off, thanks for taking the time to contribute! 🎉👍

The following is a set of guidelines for contributing to the DCD App, which is hosted in the [datacentricdesign Organization](https://github.com/datacentricdesign) on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

* [Code of Conduct](#code-of-conduct)
* [Getting started](#getting-started)

## Code of Conduct

This project and everyone participating in it is governed by the [DCD Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [lab@datacentricdesign.org](mailto:lab@datacentricdesign.org).

## Getting started

Note: local deployment will only work through 'localhost'; any other domain will fail to authenticate.
It means that you cannot use this deployment for external devices like phone or Arduino.

### Deployment with Docker Compose

To run the DCD app locally with docker-compose:

1. Copy development.env in .env
2. Run docker-compose

```
docker-compose up -d
```

You can access the app on [http://localhost:4200/](http://localhost:4200/)

To look at the latest logs (tail for online the last x lines, f for listening to incoming logs):

```sh
docker logs app-dcd --tail=1000 -f
```
