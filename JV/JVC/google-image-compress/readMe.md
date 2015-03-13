#google的视频和图片压缩技术WebM+WebP介绍和使用#

google发布这2种全新的压缩技术，主要好处是极大的减少视频和图片的大小和占用空间。

##视频压缩格式WebM##

> **介绍:**

WebM由Google提出，是一个开放、免费的媒体文件格式。WebM 影片格式其实是以 Matroska（即 MKV）容器格式为基础开发的新容器格式，里面包括了 VP8 影片轨和 Ogg Vorbis 音轨，其中Google将其拥有的VP8视频编码技术以类似BSD授权开源，Ogg Vorbis 本来就是开放格式。 WebM标准的网络视频更加偏向于开源并且是基于HTML5标准的，WebM 项目旨在为对每个人都开放的网络开发高质量、开放的视频格式，其重点是解决视频服务这一核心的网络用户体验。Google 说 WebM 的格式相当有效率，应该可以在 netbook、tablet、手持式装置等上面顺畅地使用。

WebM在同等大小下不仅清晰度比MP4要清楚很多，而且加载速度也要比MP4快。

> **使用:**

    
        <video loop="true" autoplay="autoplay">
            <source src="http://heroes.nos.netease.com/1/images/landing2/header.webm" type="video/webm">
            <source src="http://heroes.nos.netease.com/1/images/landing2/header.mp4" type="video/mp4">
        </video>

注意这是一种兼容性写法，因为IE9 以下 和 Safari不支持 WebM格式的视频，FF高版本和chrome都支持这类格式。

> **转化工具:**

软件：Miro Video Converter

下载地址：[http://dlsw.baidu.com/sw-search-sp/soft/1d/10139/MiroConverterSetup.exe?version=3510155372](http://dlsw.baidu.com/sw-search-sp/soft/1d/10139/MiroConverterSetup.exe?version=3510155372 "百度下载地址")

官网：[http://www.mirovideoconverter.com/](http://www.mirovideoconverter.com/)


## 图片压缩格式 ##