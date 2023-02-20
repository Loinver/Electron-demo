const puppeteer = require('puppeteer')

async function run() {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: { width: 1920, height: 1080 },
    ignoreDefaultArgs: '--enable-automation',
    args: [
      '--start-fullscreen', //全屏打开页面
      '--disable-web-security', // 处理iframe跨域
      '--disable-features=site-per-process', // 处理iframe跨域
    ],
  })

  const page = await browser.newPage()

  // 进页面
  await page.goto('https://tkjgateway.dgg188.cn/login', {
    waitUntil: 'networkidle2',
  })

  // 点击账号输入框并输入账号
  const loginUserInput = await page.waitForSelector('input[type="text"]')
  await loginUserInput.click()
  await loginUserInput.type('4222455', { delay: 10 })

  // 点击密码输入框并输入密码
  const loginUserPassword = await page.waitForSelector('input[type="password"]')
  await loginUserPassword.click()
  await loginUserPassword.type('123456', { delay: 10 })

  // 点击登录
  const loginBtn = await page.waitForSelector('button[type="button"]')
  await loginBtn.click()

  // hover到公司管理
  const firmManage = await page.waitForSelector(
    '#app > div > div.home-left > div.menuList > div:nth-child(9)'
  )
  await firmManage.hover()

  // 点击公司列表
  const firmList = await page.waitForSelector(
    '#app > div > div.home-left > div.menuList > div:nth-child(9) > div.roteLess.c-top > div > div:nth-child(5) > div'
  )
  await firmList.click()
  // await page.setBypassCSP(true) 官方说这种可以解决跨域，但是不知道为啥不行

  // 公司搜索
  const iframeList = await page.frames()
  console.log(await iframeList[0].childFrames()[0].content())

  console.log(await companyFrame.$('.screen-search'))
  // https://tibosskjsc.dgg188.cn/kjsc/cusorder/list.html

  // const firmInput = await iframeList.waitForSelector('input[type="text"]')
  // console.log(firmInput);

  // await firmInput.type('袁杰测试')
}
run()
