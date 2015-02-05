#关于炉石Pad下载自动识别的研究

- 前端只能跟浏览器交互，浏览器也提供了相应的获取浏览器信息及操作系统的接口。

>navigator.userAgent

- pad或手机上获取信息格式一般如下，因浏览器的差异输出的信息会有所不同：

**以下为真机测试（列举两个）:**

>Mozilla/5.0(Linux;Android 4.4.2;zh-cn;SCH-I959 Build/KOT49H) AppleWebKit/537.36(KHTML,like Gecko)Version/1.5 Chrome/28.0.1500.94 Mobile Safari/537.36

>Mozilla/5.0(Linux;Android 4.1.2;zh-cn;GT-N7108 Build/JZO54K) AppleWebKit/533.1(KHTML,like Gecko)Version/4.0 UCBrowser/9.9.4.484 U3/0.8.0 Mobile Safari/533.1

判断设备一般通过字符串匹配，对于手机会输出手机的型号，厂家众多，型号多变，很难从信息中判定是哪款手机。

- 手机输出详情（参考国外收集的手机型号列表）

[http://www.zytrax.com/tech/web/mobile_ids.html](http://www.zytrax.com/tech/web/mobile_ids.html)

- 手机信息详情（列出所有手机型号等相关信息）

[http://www.gsmarena.com/](http://www.gsmarena.com/)

#解决方案：

1.虽然手机型号多样，信息多变，但是GPU型号大体为分ETC1，ATC，ASTC，DXT，PVRTC五种，读取pad的GPU型号来实现游戏的下载自动识别是可行的方案，
问题是前端无法读取系统的更多信息，不知后端是否能够实现（已与后端沟通，后端需要研究一下）。

2.android APP可以获得系统GPU参数 gl.glGetString ，从而实现区分，进行下载匹配。
