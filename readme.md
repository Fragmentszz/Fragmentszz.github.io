 # 前言

基于```Nodejs express```框架 + ```Opengauss的数据库```大作业~

欢迎访问[AHU-WWDLDG](http://wwdldg.fragments.work/)体验。
买家账号```customer```，密码```123456```。
卖家账号```seller```, 密码```123456```。

递送员账号```forwarder```, 密码```123456```。

演示demo:[here(它带声音！)](http://downfile.fragments.work/demo/wwdldg/202406192107.mp4)

# 部署

请先参考这篇文章[CentOS上使用docker部署openGauss数据库 - FragmentsZ's Blog](http://blog.fragments.work/posts/blogs/opengauss/)，部署$OpenGauss$数据库（似乎$postgres$数据库也可以？)

依照数据库的DDL文件建表：[DDL.sql](http://downfile.fragments.work/demo/wwdldg/DDL.sql)

接着克隆本仓库，进入仓库目录后使用```npm install```安装依赖

# 运行

进入仓库目录后，使用```node server.js```即可运行服务器程序

推荐使用```pm2```创建后台进程运行，```pm2```的使用请参考[PM2 | NodeJS应用进程管理工具—PM2的基本使用-CSDN博客](https://blog.csdn.net/sunyctf/article/details/130655852)

安装```pm2```后可以使用```pm2 start ./server.js --log ./log/stdout.txt```将输出重定向至```./log/stdout.txt```中。

关于系统的日志被保存在```./log/log.txt```中。

剩下的以后再补=。=