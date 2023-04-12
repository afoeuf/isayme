# 阿里云盘自动签到
使用 [Github Actions](https://github.com/features/actions) 每日定时签到阿里云盘并自动领取奖励。

# 使用说明
1. Fork 本代码库;
2. 添加 Github Actions Secret `ALIYUNDRIVE_REFRESH_TOKEN`, 值为云盘账号 refresh_token；
3. 在 [Github Developer settings](https://github.com/settings/tokens?type=beta) 创建一个 token，建议权限限定到 Fork 后的仓库，权限 Secrets 为 Read and write, 保存生成的 token；
4. 添加 Github Actions Secret `GH_TOKEN_WITH_SECRETS_PERM`, 值为上一步得到的 token；
5. [可选] 签到完成后支持钉钉推送，创建 Github Actions Secret `DINGTALK_WEBHOOK_URL`, 值为钉钉机器人 webhook 地址；

# 同步最新代码
<img width="355" alt="image" src="https://user-images.githubusercontent.com/1747852/231325689-0cd45b77-396f-4d55-a0e6-94b814a8b3ca.png">


# 工作原理
1. 签到并领取奖励：使用 playwright 模拟移动端访问签到页面并模拟用户点击领取奖励；
2. 定时执行: Github Actions 可以自定义每日定时触发执行任务；
3. 密钥保存：将云盘 refresh_token 保存到 [Github Encrypted secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets), 每次执行任务时将新密钥写入。
