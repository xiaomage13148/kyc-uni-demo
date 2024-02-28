# 需要说明

如果您单独接入人脸插件，为了保证程序正常运行，还需依赖[Normal插件](https://ext.dcloud.net.cn/plugin?id=1491)。

Normal为人脸服务提供了网络请求与工具支持（如下图，只需要依赖即可，不需要您调用normal的接口）。

![接入人脸插件](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-24c8e43f-8ab5-4573-ad5f-41a8ba90749b/a10e29a0-123e-46bc-87d3-a5432cd5a50f.jpg)



# 1 简介

通过活体检测鉴别真人/假人、人脸比对判断本人/非本人；支持活体+比对同时调用或分开调用。支持身份信息或比对源比对。

### 动作活体
用户通过配合屏幕提示进行摇头、眨眼、张嘴等动作，活体检测服务通过姿态检测、纹理分析等判断当前识别的用户是否为真实的人

### 光线活体
用户通过正脸对准屏幕框内，屏幕发出多种光线颜色交替变化，活体检测服务通过3D立体成像、纹理分析等判断当前识别的用户是否为真实的人。

详细参数及更多介绍参考：
[参考文档](https://cloud.tencent.com/document/product/1007/35874)

# 2 接口

## 2.1刷脸入口
```objective-c
WX_EXPORT_METHOD(@selector(startWbFaceVerifyService:callback:))

```

调用示例：
```js
const face = uni.requireNativePlugin('DC-WBFaceService');
face.startWbFaceVerifyService({
  userId: "test_user_1",
  nonce : "xxxxxx",
  sign : "xxxxxx",
  appId : "xxxxxx",
  orderNo : "xxxxxx",
  apiVersion : "1.0.0",
  licence : "xxxxxx",
  compareType:"0",
  faceId: "xxxx",
  sdkConfig: {
    //和iOS共有的配置参数
    showSuccessPage: false, //是否展示成功页面,默认不展示
    showFailurePage: false, //是否展示失败页面,默认不展示
    recordVideo: false, //是否录制视频,默认不录制
    checkVideo:false,//是否检查视频大小
    playVoice: false, //是否播放语音提示，默认不播放
    theme: '1', //sdk皮肤设置，0黑色，1白色
    customerTipsLoc:'0',//自定义提示的位置，0在预览框下面，1在预览框上面
    customerTipsInLive:'',//检测时的自定义提示语
    customerTipsInUpload:'',//上传时的自定义提示语
    customerLongTip:'',//自定义长提示语
    //android独有的配置参数
    isEnableLog: true, //是否打开刷脸native日志，请release版本关闭！！！
    //iOS独有的配置参数
    windowLevel: '1', //sdk中拉起人脸活体识别界面中使用UIWindow时的windowLevel配置
    manualCookie: true ,//是否由SDK内部处理sdk网络请求的cookie
    useWindowSecene: false,
  }
}, result => {
  console.log("【uni log】face SDK callback ================> result.");
  console.log(result);
});

```
其中，startWbFaceVerifyService 后面传入调起 SDK 的参数，result 后面是插件的回调结果。


详细参数及更多介绍参考：
[参考文档](https://cloud.tencent.com/document/product/1007/35874)


## 2.2 插件回调接口

回调信息以 **json 格式**返回给 uni-app，如上 2.2 节所说，通过 scene 字段来对应**登录失败**和**返回人脸认证结果**两个回调方法：

- `wb_face_callback_login_failure`
- `wb_face_callback_verify_result`


和 OCR 插件一样，通过 scene 获取具体场景之后，在 res 字段里面读取相应的业务信息，res 是可选的。
刷脸成功样例：
```js
{
	"scene":"wb_face_callback_verify_result",
	"res":
	{
		"liveRate":"99",
		"orderNo":"fIABR8jeM",
		"sign":"0F2992AE7ADF69155FF117005BDB3D289A7B3969",
		"similarity":"100.0",
		"success":true,
		"userImageString":""
	}
}
```
刷脸失败样例:
```js
{	"scene":"wb_face_callback_verify_result",
	"res":
	{
		"orderNo":"fIABR8jeM",
		"success":false,
		"error":
		{
			"code":"41000",
			"desc":"用户取消",
            "domain":"WBFaceErrorDomainNativeProcess",
			"reason":"左上角返回键：用户授权中取消"
		}
	}
}
```



# 更多服务

我们除了提供人脸识别服务，还提供OCR服务。

OCR插件详细参数及更多介绍参考：[OCR插件接入](https://ext.dcloud.net.cn/plugin?id=1233)

### 同时接入OCR插件及人脸插件
同时接入ocr与人脸插件，不需要再依赖normal插件，只需要ocr和face即可。

![同时接入OCR插件及人脸插件](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-24c8e43f-8ab5-4573-ad5f-41a8ba90749b/8eb6b612-0d82-4e62-8889-68878b88e095.jpg)
