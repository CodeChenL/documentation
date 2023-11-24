---
sidebar_position: 40
---

# Media Process Platform (MPP)

MPP is Rockchip's proprietary video acceleration API that currently supports hardware encoding/decoding for popular video codecs.

## Build from source

### Install build dependencies

```bash
sudo apt-get update
sudo apt-get install -y build-essentials git cmake wget
```

### Build

```bash
git clone https://github.com/rockchip-linux/mpp.git
cd mpp/build/linux/aarch64
./make-Makefiles.bash
make
```

### View the generated test programs

```bash
$ ls test/
CMakeFiles           mpi_dec_mt_test     mpi_dec_test     mpi_rc2_test
Makefile             mpi_dec_multi_test  mpi_enc_mt_test  mpp_info_test
cmake_install.cmake  mpi_dec_nt_test     mpi_enc_test     vpu_api_test
```

## Run the included tests

The following example uses `mpi_dec_test`:

```bash
wget https://dl.radxa.com/media/video/1080p.264
export mpi_debug=1
export mpp_debug=1
export h264d_debug=1
export mpp_syslog_perror=1
test/mpi_dec_test -i 1080p.264 -t 7 -h 1080 -w 1920
```

If you get an output similar to the following text, MPP is working properly on your system:

```bash
mpp[1253]: mpi_dec_utils: input file /home/rock/1080p.264 size 10076324
mpp[1253]: mpi_dec_utils: cmd parse result.
mpp[1253]: mpi_dec_utils: input file name: /home/rock/1080p.264
mpp[1253]: mpi_dec_utils: output file name: /home/rock/1080p.264
mpp[1253]: mpi_dec_utils: width : 1920
mpp[1253]: mpi_dec_utils: height : 1080
mpp[1253]: mpi_dec_utils: type : 7
mpp[1253]: mpi_dec_utils: max frames : 0
mpp[1253]: mpi_dec_test: mpi_dec_test start
...
mpp[1253]: mpi_dec_test: 0x558fb02300 found last packet
mpp[1253]: mpi_dec_test: decode 1129 frames time 1172 ms delay 14 ms fps 962.62
mpp[1253]: mpi: mpi_reset enter ctx 0x558fb02300
mpp[1253]: mpi: mpi_reset leave ctx 0x558fb02300 ret 0
mpp[1253]: mpi: mpp_destroy enter ctx 0x558fb02300
mpp[1253]: mpi: mpp_destroy leave ctx 0x558fb02300 ret 0
mpp[1253]: mpi_dec_test: test success max memory 19.92 MB
```

## Reference

- [GitHub](https://github.com/rockchip-linux/mpp)
- [Official documentation](https://opensource.rock-chips.com/wiki_Mpp)
