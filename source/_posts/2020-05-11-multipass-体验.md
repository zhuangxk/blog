---
title: multipass 体验
date: 2020-05-11 10:31:07
tags: multipass
---

## 小记

在windows 环境开发 受到很多限制。 下面陈列一下我折腾过的案例~~

1. win环境，主要是在学校和工作初期
1. win+linux 双系统，也是在学校期间开始折腾的主要是win7 + ubuntu
1. 纯linux环境，当时安装的Linux Mint 几乎作为主要开发环境用了近1年，后来因为要开发windows 又换回去了
1. wsl1, wsl1是从他诞生不久就开始使用了 一直用到现在，整体体验非常好。但是有两个缺点，1是文件IO性能差，2就是不能用docker
    所以我一直在需求替代方案。以下是其他折腾记录~~
1. wsl2, 据说wsl2性能出众能运行docker，因为不知道需要加入win10的预览体验计划，折腾了好久。。成功是成功了但是没等我开始用呢，我发现最新的win10跑不起来SSR了，这个怎么能忍受。。直接还原了。。
6. WMware, 虚拟机是个好东西，什么都可以虚拟，想想现在电脑性能不错 于是直接虚拟了一台macOS 10.15 也是一天的功夫。。体验了下有点卡。可能主要是不支持虚拟机的3d加速，独立显卡，加上每次用还要开机，也是受不了。。不过有台mac确实挺爽 
7. 黑苹果，于是我想着虚拟机不好使干脆上黑苹果，就开始了黑苹果的研究。。。这次我主动放弃了，因为了解到黑苹果驱动问题要折腾好久。。想想用时间长了肯定会换回来了。。不是长久之计
8. EXSI, 最近在公司找了一台主体装了一台虚拟服务，如果在上边装个linux专门开发用？想想万一让同事给我删除了，还是算了吧~
9. winDocker, 装过一次 windows 上很卡，不知道现在好了么，觉得docker就应该跑在linux才对~
10. 本想体验ubuntu20 出来了，结果在官网发现了一个好用的虚拟工具，multipass,还是热乎的。。开搞吧！


## multipass 基本了解

multipass 支持mac,linux,windows,并且分别依赖各个平台的虚拟技术,win上依赖 hyper-V

### 安装

### 列出远程镜像列表
```bash 
 multipass find
```

### 安装启动

```bash 
multipass launch --name ubuntu-lts
```

下载特别慢 ,  powershell 用本地socks代理
```bash
netsh winhttp import proxy source=ie
```

### 进入ubuntu

```bash 
multipass shell focal
```

## 配置SSH

添加~/.ssh/id_rsa.pub 到 ubuntu 的 ~root/.ssh/authorized_keys中

## 配置VScode

安装 remote-ssh 扩展配置ip 远程连接

每次电脑重启后Hyper-V 会分配新的IP,修改不方便，Google 到方案 主机名.mshome.net 可行

```yml
Host multipass tokyo
  HostName tokyo.mshome.net
  User ubuntu
```



