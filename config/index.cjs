/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx9c9b231479e000d9',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '3b1eb08e7409060532e753d1413a999a',

  PROVINCE: '河北',
  CITY: '保定',

  USERS: [
    {
      // 想要发送的人的名字
      name: '庆饱饱',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o0cTH5tI4Ybwx8bXEUZ449hBwWQs',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'KNwG_rbt3mpRnlnNbfGbBfvmSR7H7Hisb5B9ejZwYsc',
      festivals: [
        // 注意：此条配置日期为阴历日期
        {
          type: '*生日', name: '庆饱饱', year: '2002', date: '04-01',
        },
        {
          type: '*生日', name: '天哥', year: '2003', date: '02-12',
        },
        {
          type: '节日', name: '相爱纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-10-01' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '天哥',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o0cTH5kDb74CTUXx7sttyPMEES3o',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'KNwG_rbt3mpRnlnNbfGbBfvmSR7H7Hisb5B9ejZwYsc',
      festivals: [
        // 注意：此条配置日期为阴历日期
        {
          type: '*生日', name: '天哥', year: '2003', date: '02-12',
        },
        {
          type: '*生日', name: '庆饱饱', year: '2002', date: '04-01',
        },
        {
          type: '节日', name: '相爱纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-10-01' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '2-t6lo4aKSxist_aM-iNcvrJeUat-aPB8J9DBldhtds',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o0cTH5kDb74CTUXx7sttyPMEES3o',
    }
  ],

}

module.exports = USER_CONFIG

