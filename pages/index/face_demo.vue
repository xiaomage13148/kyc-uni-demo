<template>
  <view class="content">

    <view class="text-area">
      <text class="title">人脸识别</text>
    </view>

    <view class="input-group">
      <view class="input-row">
        <text class="title">姓名：</text>
        <input class="inputType" type="text" v-model="usernameInput" placeholder="请输入姓名"></input>
      </view>
      <view class="input-row">
        <text class="title">身份证：</text>
        <input type="inputType" v-model="useridInput" placeholder="请输入身份证"></input>
      </view>
    </view>

    <view class="btn-row">
      <button type="primary" class="primary" @tap="startLiveCheckAndCompareWithIdImgService(basic)">
        身份证对比
      </button>
      <button type="primary" class="primary"
              @tap="startLiveCheckAndCompareWithScrImgService(basic)">
        自带对比源
      </button>
      <button type="primary" class="primary" @tap="startLiveCheckService(basic)">仅活体检测</button>
      <button type="primary" class="primary"
              @tap="startLiveCheckAndCompareWithIdImgService(enhancement)">
        增強身份证对比
      </button>
      <button type="primary" class="primary"
              @tap="startLiveCheckAndCompareWithScrImgService(enhancement)">增強自带对比源
      </button>
      <button type="primary" class="primary" @tap="startLiveCheckService(enhancement)">增強仅活体检测
      </button>
    </view>
  </view>
</template>

<script>
import {advanceConstant, compareTypeConstant, idCardImg} from '../../utils/constant';
//如果同时使用OCR与人脸插件，可依赖OCR与人脸即可。
const ocr = uni.requireNativePlugin('DC-WBOCRService');
//如果只使用人脸插件，请注释上面的OCR插件，同时依赖下面的Normal与Face插件
// const normal = uni.requireNativePlugin('DC-WBNormal');
const face = uni.requireNativePlugin('DC-WBFaceServiceV2');
export default {
  data() {
    return {
      usernameInput: '',
      useridInput: '',
      basic: advanceConstant.basic,
      enhancement: advanceConstant.enhancement
    };
  },
  methods: {
    //0:權威源比對 1:自帶比對源比對 2:僅活體檢測
    // compareType：0:身份证对比
    startLiveCheckAndCompareWithIdImgService(advance) {
      console.log('【uni log】CLICK ================> 身份证对比');
      if (this.usernameInput.length === 0) {
        uni.showToast({
          icon: 'none',
          title: '用户姓名不能为空'
        });
        return;
      }
      if (this.useridInput.length === 0) {
        uni.showToast({
          icon: 'none',
          title: '用户身份证号不能为空'
        });
        return;
      }
      this.preStartWbFaceVerifyService(compareTypeConstant.idCardComparison, advance);
    },

    // compareType：1:自带对比源
    startLiveCheckAndCompareWithScrImgService(advance) {
      console.log('【uni log】CLICK ================> 自带对比源');
      if (this.usernameInput.length === 0) {
        uni.showToast({
          icon: 'none',
          title: '用户姓名不能为空'
        });
        return;
      }
      if (this.useridInput.length === 0) {
        uni.showToast({
          icon: 'none',
          title: '用户身份证号不能为空'
        });
        return;
      }
      this.preStartWbFaceVerifyService(compareTypeConstant.withComparisonSource,
          advance);
    },

    // TODO 增强版活体检测存在问题
    //compareType：2:仅活体检测
    startLiveCheckService(advance) {
      console.log('【uni log】CLICK ================> 仅活体检测');
      this.preStartWbFaceVerifyService(compareTypeConstant.vivoDetectionOnly,
          advance);
    },

    // 拉起SDK
    preStartWbFaceVerifyService(compareType, advance) {
      const self = this;
      // 请求的参数
      let srcPhotoSrc = '';
      let srcPhotoType = '';

      if (compareType === compareTypeConstant.withComparisonSource) {
        srcPhotoSrc = idCardImg.url;
        srcPhotoType = '2'; //1是水纹照  2是高清照

        // //将数据塞入上面两个参数后，记得要注释这段toast再继续测试哈
        // uni.showToast({
        //   icon: 'none',
        //   title: 'demo不能演示自带对比源，请在demo源码里塞入自带对比源需要数据后再测试~'
        // });
        // return;
      }

      if (advance === advanceConstant.basic) {
        uni.request({
          method: 'POST',
          url: 'http://132.126.2.15:8005/api/intf/tencentKyc/preStartWbFaceVerifyService',
          data: {
            name: self.usernameInput,
            idNo: self.useridInput,
            srcPhotoSrc,
            srcPhotoType,
            compareType,
            advance
          },
          success: (res) => {
            if (res.data.code === '0') {
              const data = res.data.data;
              // TODO ---->打印【基础版】响应结果 , 日期: 2024/3/5
              console.log(`---->打印【基础版】响应结果 , 当前时间是: ${new Date().toString()}`, data);
              face.startWbFaceVerifyService({
                apiVersion: data.apiVersion,
                appId: data.appId,
                nonce: data.nonce,
                userId: data.userId,
                sign: data.sign,
                orderNo: data.orderNo,
                licence: data.licence,
                faceId: data.faceId,
                compareType: compareType,
                sdkConfig: {
                  //和iOS共有的配置参数
                  showSuccessPage: false, //是否展示成功页面,默认不展示
                  showFailurePage: false, //是否展示失败页面,默认不展示
                  recordVideo: false, //是否录制视频,默认不录制
                  checkVideo: false,//是否检查视频大小
                  playVoice: false, //是否播放语音提示，默认不播放
                  theme: '1', //sdk皮肤设置，0黑色，1白色
                  customerTipsLoc: '0',//自定义提示的位置，0在预览框下面，1在预览框上面
                  customerTipsInLive: '',//检测时的自定义提示语
                  customerTipsInUpload: '',//上传时的自定义提示语
                  customerLongTip: '',//自定义长提示语
                  //android独有的配置参数
                  isEnableLog: true, //是否打开刷脸native日志，请release版本关闭！！！
                  //iOS独有的配置参数
                  windowLevel: '1', //sdk中拉起人脸活体识别界面中使用UIWindow时的windowLevel配置
                  manualCookie: true,//是否由SDK内部处理sdk网络请求的cookie
                  useWindowSecene: false,
                }
              }, result => {
                console.log('【uni log】face SDK callback ================> result.');
                // TODO ---->打印【基础版】人脸核验 , 日期: 2024/2/29
                console.log(`---->打印【基础版】人脸核验 , 当前时间是: ${new Date().toString()}`, result);

                //scene区分回调场景
                let scene = result.scene;
                //登录失败，可以通过error获得失败原因
                if (scene === 'wb_face_callback_login_failure') {
                  let res = result.res;
                  let error = res.error;
                  let tip = '登录失败:domain=' + error.domain + ',code=' + error.code + ',desc=' +
                      error.desc + ',reason=' + error.reason;
                  console.log(tip);
                  uni.showToast({
                    icon: 'none',
                    title: tip
                  });
                  return;
                }

                //返回刷脸结果
                if (scene === 'wb_face_callback_verify_result') {
                  let res = result.res;
                  //success区分是否刷脸成功
                  let success = res.success;
                  if (success) {
                    //刷脸成功
                    //还可以通过res拿到orderNo，sign，userImageString(用户刷脸base64 string照片)
                    console.log('刷脸成功:liverate=' + res.liveRate + ',similarity=' + res.similarity);
                    uni.showToast({
                      icon: 'none',
                      title: '刷脸成功:liverate=' + res.liveRate + ',similarity=' + res.similarity
                    });
                  } else {
                    //刷脸失败
                    let error = res.error;
                    console.log('error=' + JSON.stringify(error));

                    //可以通过domain区分是本地刷脸错误，还是人脸对比失败，
                    let domain = error.domain;
                    //如果是人脸对比失败，可以从res里拿到liveRate和similarity
                    if (domain === 'WBFaceErrorDomainCompareServer') {
                      console.log(
                          '对比失败，liveRate=' + res.liveRate + '; similarity=' + res.similarity +
                          ';sign=' + res.sign);
                      uni.showToast({
                        icon: 'none',
                        title: '对比失败，liveRate=' + res.liveRate + '; similarity=' + res.similarity +
                            ';sign=' + res.sign
                      });
                      return;
                    }

                    uni.showToast({
                      icon: 'none',
                      title: JSON.stringify(error)
                    });
                  }
                }
              });
            } else {
              // TODO ====>请求失败---->打印preStartWbFaceVerifyService->res , 日期: 2024/2/28
              console.log(
                  `${compareType}、${advance}====>请求失败---->打印preStartWbFaceVerifyService->res , 当前时间是: ${new Date().toString()}`,
                  res);
            }
          },
          fail: err => {
            // TODO ---->打印err , 日期: 2024/3/11
            console.log(`---->打印err , 当前时间是: ${new Date().toString()}`, err);
            uni.showToast({
              icon: 'none',
              title: err
            });
          }
        });
      } else {
        let useAdvanceCompare;
        if (compareType === compareTypeConstant.vivoDetectionOnly) {
          useAdvanceCompare = false;
        } else {
          useAdvanceCompare = true;
        }
        uni.request({
          method: 'POST',
          url: 'http://132.126.2.15:8005/api/tencentKyc/preStartWbFaceVerifyService',
          data: {
            name: self.usernameInput,
            idNo: self.useridInput,
            srcPhotoSrc,
            srcPhotoType,
            compareType,
            advance
          },
          success: (res) => {
            if (res.data.code === '0') {
              const data = res.data.data;
              // TODO ---->打印【增强版】响应结果 , 日期: 2024/3/5
              console.log(`---->打印【增强版】响应结果 , 当前时间是: ${new Date().toString()}`, data);
              face.startAdvanceWbFaceVerifyService({
                apiVersion: data.apiVersion,
                appId: data.appId,
                nonce: data.nonce,
                userId: data.userId,
                sign: data.sign,
                orderNo: data.orderNo,
                licence: data.licence,
                faceId: data.faceId,
                compareType: compareType,
                sdkConfig: {
                  //和iOS共有的配置参数
                  showSuccessPage: false, //是否展示成功页面,默认不展示
                  showFailurePage: false, //是否展示失败页面,默认不展示
                  recordVideo: false, //是否录制视频,默认不录制
                  checkVideo: false,//是否检查视频大小
                  playVoice: false, //是否播放语音提示，默认不播放
                  theme: '1', //sdk皮肤设置，0黑色，1白色
                  customerTipsLoc: '0',//自定义提示的位置，0在预览框下面，1在预览框上面
                  customerTipsInLive: '',//检测时的自定义提示语
                  customerTipsInUpload: '',//上传时的自定义提示语
                  customerLongTip: '',//自定义长提示语
                  //android独有的配置参数
                  isEnableLog: true, //是否打开刷脸native日志，请release版本关闭！！！
                  //iOS独有的配置参数
                  windowLevel: '1', //sdk中拉起人脸活体识别界面中使用UIWindow时的windowLevel配置
                  manualCookie: true,//是否由SDK内部处理sdk网络请求的cookie
                  useWindowSecene: false,
                  useAdvanceCompare: useAdvanceCompare
                }
              }, result => {
                console.log('【uni log】face SDK callback ================> result.');
                // TODO ---->打印【增强版】人脸核验 , 日期: 2024/2/29
                console.log(`---->打印【增强版】人脸核验 , 当前时间是: ${new Date().toString()}`, result);
                //scene区分回调场景
                let scene = result.scene;
                //登录失败，可以通过error获得失败原因
                if (scene === 'wb_face_callback_login_failure') {
                  let res = result.res;
                  let error = res.error;
                  let tip = '登录失败:domain=' + error.domain + ',code=' + error.code + ',desc=' +
                      error.desc + ',reason=' + error.reason;
                  console.log(tip);
                  uni.showToast({
                    icon: 'none',
                    title: tip
                  });
                  return;
                }

                //返回刷脸结果
                if (scene === 'wb_face_callback_verify_result') {
                  let res = result.res;
                  //success区分是否刷脸成功
                  let success = res.success;
                  if (success) {
                    //刷脸成功
                    //还可以通过res拿到orderNo，sign，userImageString(用户刷脸base64 string照片)
                    console.log('刷脸成功:liverate=' + res.liveRate + ',similarity=' + res.similarity);
                    let riskInfo = res.riskInfo;
                    uni.showToast({
                      icon: 'none',
                      title: '刷脸成功:liverate=' + res.liveRate + ',similarity=' + res.similarity +
                          ',deviceInfoLevel=' + riskInfo.deviceInfoLevel + ',deviceInfoTag=' +
                          riskInfo.deviceInfoTag + ',riskInfoLevel=' + riskInfo.riskInfoLevel +
                          ',riskInfoTag=' + riskInfo.riskInfoTag
                    });
                  } else {
                    //刷脸失败
                    let error = res.error;
                    console.log('error=' + JSON.stringify(error));

                    //可以通过domain区分是本地刷脸错误，还是人脸对比失败，
                    let domain = error.domain;
                    //如果是人脸对比失败，可以从res里拿到liveRate和similarity
                    if (domain === 'WBFaceErrorDomainCompareServer') {
                      console.log(
                          '对比失败，liveRate=' + res.liveRate + '; similarity=' + res.similarity +
                          ';sign=' + res.sign);
                      uni.showToast({
                        icon: 'none',
                        title: '对比失败，liveRate=' + res.liveRate + '; similarity=' + res.similarity +
                            ';sign=' + res.sign
                      });
                      return;
                    }

                    uni.showToast({
                      icon: 'none',
                      title: JSON.stringify(error)
                    });
                  }
                }
              });
            } else {
              // TODO ====>请求失败---->打印preStartWbFaceVerifyService->res , 日期: 2024/2/28
              console.log(
                  `${compareType}、${advance}====>请求失败---->打印preStartWbFaceVerifyService->res , 当前时间是: ${new Date().toString()}`,
                  res);
            }
          },
        });
      }
    },
  }
};
</script>

<style>

</style>
