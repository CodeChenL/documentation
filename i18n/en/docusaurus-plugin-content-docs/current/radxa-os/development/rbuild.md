## Build RadxaOS system image

## Using `rbuild`

The [`rbuild`](https://github.com/radxa-repo/rbuild) is the build environment for RadxaOS, which has the following features:

1. Containerized build environment. No need to manage the build dependencies.
2. Modularized build scripts that is easy to modify.

Due to the limitation of the chosen software dependency, `rbuild` is currently only supported on x64 platforms.

You can refer to the [Getting Started](https://radxa-repo.github.io/rbuild/) page that comes with the project to install the project and do a test build.

If you need to develop based on `rbuild`, please continue reading the rest of the documentation, and [build scripts](https://github.com/radxa-repo/rbuild/tree/main/common).

## Reference

- [debos](https://github.com/go-debos/debos): The underlying OS image builder
