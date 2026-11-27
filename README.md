> 部署在 Cloudflare Workers / Pages 的单文件代理面板，代码以 `CFAPEX_OBF_V1` 混淆形态发布。`/<A>` 进入图形化面板，`/s/<HMAC>` 输出订阅；同时支持 VLESS / Trojan / XHTTP 三种协议、地区优选与按地区中继、WebSocket / stream-one 两种承载方式，可用 KV 或 Cache API 保存配置，不绑定 KV 也能运行。

> #### [✈️ 超高性价比机场](https://d222.d222.xyz/register?code=rc9pidAK)  
> #### 获取最新代码及明文代码：> [✈️ Telegram 交流群](https://t.me/ROTOGE))   [✈️ Telegram 发布频道](https://t.me/ROTOGEGE))
> #### 订阅开发者频道，支持开发者：[📺 YouTube 频道](https://www.youtube.com/@SHITOUGE))  

## 一、项目概述与兼容性

| 项 | 内容 |
|---|---|
| 当前版本 | 1.6 |
| 部署平台 | Cloudflare Workers（也可作为 Pages `_worker.js`） |
| 协议 | VLESS / Trojan / XHTTP（stream-one） |
| 承载 | WebSocket（`/`、`/rp/XX`、`/&rp=XX`）、XHTTP POST（`/xhttp`、`/xhttp/rp/XX`） |
| 订阅格式 | Clash / mihomo、sing-box、Surge、Quantumult X、Karing / Hiddify、v2rayN、URI 等，按 UA 自动识别 |
| 存储 | KV 绑定名 `K`；无 KV 时回落 Cache API |
| 客户端 | Clash Verge / Mihomo Party / Stash、sing-box、v2rayN、Shadowrocket、Surge、Quantumult X 等 |

## 二、主要功能

| # | 功能 | 说明 |
|---|---|---|
| 1 | 图形化面板 | `/<A>` 进入，浅 / 深双主题；含概览、节点列表、自定义优选 IP、自定义 Proxy IP、自定义出站 IP、设置、关于 |
| 2 | 三协议下发 | VLESS、Trojan 走 WS；XHTTP 用 stream-one，单次 POST 完成上下行，不需 Durable Object |
| 3 | 多格式订阅 | 自动识别客户端，也可 `?format=yaml\|clash\|singbox\|surge\|quanx\|karing\|base64\|v2ray\|uri` 指定 |
| 4 | 协议 / IP 筛选 | `?protocol=vless\|trojan\|xhttp\|both\|all`、`?families=ipv4\|ipv6`、`?limit=1-1000` |
| 5 | 节点池 | 内置优选 IP 列表，叠加 BestCF 按地区列表（US / JP / SG / KR / HK / CA）；支持纯文本、CSV、JSON 输入与地区标签解析 |
| 6 | 地区选路 | `/rp/JP`、`/&rp=US`、`/xhttp/rp/HK` 等路径指定地区；HK / JP / US / SG / KR / CA 带内置地区 Proxy IP 池 |
| 7 | 出站代理 | 支持 direct、socks5、http、https、ss（AEAD），`auto` 失败回退 / `only` 强制走出口，可用 `OUTBOUND_PORTS` 限制目标端口 |
| 8 | 地区识别 | ip.sb / ipwho.is 查询、机房码与中文地区映射、离线样本兜底；明确标注为归属地或来源标记，不是出口实测 |
| 9 | 健康检查 | 节点可用性缓存、握手失败退避、多 DNS 源解析、gstatic 204 探测，面板可导出当前下发节点 |
| 10 | 鉴权与限流 | HMAC 签名的 24 小时面板 Cookie、HMAC 派生订阅路径、API Origin / X-Req 校验、按 IP 与 UUID 限流、未命中路径回落欢迎页 |

## 三、部署说明

1. 创建 Cloudflare Worker，把本 `.js` 文件内容粘贴进在线编辑器或通过 Wrangler 部署。
2. 设置环境变量 **`A`**（必填）：它既是面板入口路径，也是访问口令，建议用长随机字符串。
3. 可选：创建 KV 命名空间并绑定变量名 **`K`**；不绑定则使用 Cache API 存储。
4. 可选设置 `PROXYIP`、`OUTBOUND_PORTS`、`TROJAN`、`TROJAN_PASSWORD`、`XHTTP`。
5. 访问 `https://<域名>/<A>` 进入面板，在面板内设置 UUID、节点池、出站和背景；订阅地址会从面板中读取。

> 注意：`A` 一旦变化，面板入口、UUID 派生值和订阅地址都会随之变化。

## 四、环境变量

| 变量 | 值 | 说明 |
|---|---|---|
| `A` | 随机字符串 | **必填**，面板入口 `/<A>` 与口令；也是 UUID 派生和订阅 HMAC 的密钥 |
| `K` | KV 命名空间 | 可选，绑定名必须为 `K`；缺省时用 Cache API |
| `PROXYIP` | 地址 / 域名 | 自定义默认 Proxy IP |
| `OUTBOUND_PORTS` | 端口列表 | 目标端口白名单，格式错误会拒绝连接 |
| `TROJAN` | `0` | 设为 `0` 禁用 Trojan 协议 |
| `TROJAN_PASSWORD` | 字符串 | 自定义 Trojan 密码，缺省回退到 UUID |
| `XHTTP` | `0` | 设为 `0` 禁用 XHTTP；未设置 `A` 时 XHTTP 不可用 |

## 五、订阅与选路

- 面板地址：`/<A>`；面板 API：`/<A>/api/*`。
- 订阅地址：`/s/<HMAC-SHA256(A, "CFAPEX subscription v1")>`，末尾加 `/clash` 输出 Clash 格式。
- 地区入口：`/rp/JP`、`/&rp=US`；XHTTP 地区入口：`/xhttp/rp/HK`。
- 默认 UUID 由 `A` 经 SHA-256 确定性派生，也可在面板中替换为自定义 UUID。

## 六、安全与容错

- 面板会话 Cookie 用 HMAC-SHA-256 签名，有效期 24 小时；API 校验 Origin 与请求标识。
- 优选池地址拉取会拦截私网地址、用户名密码、过多跳转与超大响应。
- WebSocket 按 IP / UUID 做并发与频率限制，上下行各设 128 MiB 上限；XHTTP 上传缓冲限制 64 KiB。
- 中继前检查 TLS ClientHello，握手失败按指数退避冷却；节点可用性结果进程内缓存。

## 七、致谢
- 感谢 [CFNext](https://github.com/PAICNI/CFNext/) 提供的滥用解决思路；
- 感谢 [cmliu/edgetunnel](https://github.com/cmliu/edgetunnel) 等 Cloudflare Worker 代理项目。
- 感谢 [byJoey/CFnew](https://github.com/byJoey/cfnewl) 。
- 感谢 mihomo / sing-box 社区与 MASQUE 协议的公开实现。
- 感谢 Telegram 交流群与各位用户的反馈。
