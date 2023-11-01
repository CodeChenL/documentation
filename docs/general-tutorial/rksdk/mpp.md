---
sidebar_label: "Media Process Platform (MPP)"
sidebar_position: 40
---

# Media Process Platform (MPP)

MPP 是 Rockchip 专有的视频加速 API。目前支持主流视频格式的硬件编解码。

## 从源代码编译

### 安装编译依赖

```bash
sudo apt-get update
sudo apt-get install -y build-essentials git cmake wget
```

### 编译

```bash
git clone https://github.com/rockchip-linux/mpp.git
cd mpp/build/linux/aarch64
./make-Makefiles.bash
make
```

### 查看生成的测试程序

```bash
$ ls test/
CMakeFiles           mpi_dec_mt_test     mpi_dec_test     mpi_rc2_test
Makefile             mpi_dec_multi_test  mpi_enc_mt_test  mpp_info_test
cmake_install.cmake  mpi_dec_nt_test     mpi_enc_test     vpu_api_test
```

## 运行自带测试

以下以 `mpi_dec_test` 为例：

```bash
wget https://dl.radxa.com/media/video/1080p.264
export mpi_debug=1
export mpp_debug=1
export h264d_debug=1
export mpp_syslog_perror=1
./mpi_dec_test -i 1080p.264 -t 7 -h 1080 -w 1920
```

如得到类似如下的输出，则证明 MPP 已在你的系统上正常工作：

```bash
mpp[1253]: mpi_dec_utils: input file /home/rock/1080p.264 size 10076324
mpp[1253]: mpi_dec_utils: cmd parse result:
mpp[1253]: mpi_dec_utils: input  file name: /home/rock/1080p.264
mpp[1253]: mpi_dec_utils: output file name:
mpp[1253]: mpi_dec_utils: width      : 1920
mpp[1253]: mpi_dec_utils: height     : 1080
mpp[1253]: mpi_dec_utils: type       :    7
mpp[1253]: mpi_dec_utils: max frames :    0
mpp[1253]: mpi_dec_test: mpi_dec_test start
...
mpp[1253]: mpi_dec_test: 0x558fb02300 found last packet
mpp[1253]: mpi_dec_test: decode 1129 frames time 1172 ms delay  14 ms fps 962.62
mpp[1253]: mpi: mpi_reset enter ctx 0x558fb02300
mpp[1253]: mpi: mpi_reset leave ctx 0x558fb02300 ret 0
mpp[1253]: mpi: mpp_destroy enter ctx 0x558fb02300
mpp[1253]: mpi: mpp_destroy leave ctx 0x558fb02300 ret 0
mpp[1253]: mpi_dec_test: test success max memory 19.92 MB
```

## 参考

- [GitHub](https://github.com/rockchip-linux/mpp)
- [官方文档](https://opensource.rock-chips.com/wiki_Mpp)
