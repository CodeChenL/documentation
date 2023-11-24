## Build the kernel and the bootloader

## Using `bsp`

[`bsp`](https://github.com/radxa-repo/bsp) is the only kernel/bootloader compilation environment currently supported by RadxaOS, and it has the following features:

1. Containerized build environment. No need to manage the build dependencies.
2. Automatically downloads the source code for the targeting product.
3. Reset the source code tree before compilation to avoid building against a dirty tree.

Currently, `bsp` is officially supported for cross-compilation on x64 platforms, and experimentally supported for native build on aarch64 platforms.

You can refer to the [Getting Started](https://radxa-repo.github.io/bsp/) page that comes with the project to install the project and do a test build.

If you need to develop based on `bsp`, please continue reading the rest of the documentation to understand the development process and how to consume the build artifacts.

## Manual compilation

:::caution
`bsp` is the only compilation method that is currently supported, and it makes additional changes to the source code during the build.  
If you want to develop based on our official releases, you should at least use `bsp` to download and configure the source code.

If you want to use a custom `make` command to compile, please refer to the [Prepare working tree](https://radxa-repo.github.io/bsp/dev_flow.html#prepare-working-tree) section to prepare the code.
:::

## Reference

- [U-Boot | Build U-Boot](https://u-boot.readthedocs.io/en/latest/build/index.html)
- [U-Boot | Amlogic](https://docs.u-boot.org/en/latest/board/amlogic/)
- [U-Boot | Rockchip](https://u-boot.readthedocs.io/en/latest/board/rockchip/)
