# CFNext 订阅管理器

> 部署在 Cloudflare Workers / Pages 的代理订阅管理面板，单文件同时实现 VLESS / Trojan / XHTTP 多协议代理与图形化配置：`/UUID`（或自定义路径）进入面板，`/sub` 输出订阅；内置节点优选器、节点数量控制、轮询下发、ECH 加密、落地与出站代理及地区 / 运营商 / IP 版本多维筛选，并新增 **MASQUE / 家宽** 三种节点模式与**前后端分离**部署形态。部署即用，绑定 KV 后改完即生效。
>
> **[✈ Telegram 交流群](https://t.me/SZ_PAI)**
> **[✈ Telegram 发布频道](https://t.me/PaiCNX)**
> **[✨ CFNext专用优选器](https://github.com/PAICNI/CFScan)**  
> **[📺️ YouTube 频道](https://www.youtube.com/@PAI_CN)**
> **[▶️ 3.0 新版本部署教程](https://www.youtube.com/watch?v=CQ8zvWXkZzA)**
> **[▶️ 2.0 Worker模式视频使用教程](https://youtu.be/1GCZgdGFsk0)**
> 
# 注意：明文版代码仅作为开源使用，不建议进行线上部署
> 
> ## [✈️ 四年超稳定老牌机场](https://www.beupisp.com/register?code=5vnEa9vV)
> ## [✈️ 备用超高性价比机场](https://103.73.220.147:8888/#/register?code=luC4csRk)

> ## [✨ 点击查看更新日志](https://github.com/PAICNI/CFNext/blob/main/Update%20Log.md)

## 一、项目概述与兼容性

| 项    | 内容                                                                                              |
| ---- | ----------------------------------------------------------------------------------------------- |
| 当前版本 | `3.1.2`                                                                                         |
| 部署平台 | Cloudflare **Workers** / **Pages**                                                              |
| 协议   | VLESS / Trojan / XHTTP / MASQUE / OpenVPN（家宽）                                  |
| 订阅格式 | Clash（mihomo / Verge）、sing-box、Karing、v2rayN等                                                   |
| 存储   | Cloudflare KV（绑定变量名统一为 `K`）                                                                     |
| 客户端  | Worker模式三协议支持/理论支持所有客户端，MASQUE模式支持Clash Meta 系内核的客户端（Clash Verge / Mihomo Party / Stash 等） |

## 二、主要功能

| #  | 功能               | 说明                                  |
| -- | ---------------- | ----------------------------------- |
| 1  | 图形化面板            | `/自定义路径` 进入，玻璃拟态，深 / 浅双主题           |
| 2  | 四运行模式            | Worker / MASQUE / 家宽，一键切换    |
| 3  | 节点优选             | 内置优选源，地区 / 运营商 / IP 版本多维筛选          |
| 4  | 节点数量控制           | `nodeLimitCount` 默认 300，可调          |
| 5  | 轮询下发             | `preferredIPs` 多 IP 轮换，均衡负载         |
| 6  | ECH 加密           | SNI 隐蔽，抗 SNI 阻断                     |
| 7  | 落地与出站代理          | `PROXYIP` / 出站代理 / 反代落地             |
| 8  | 前置节点             | `warpFront` 链式拨号 |
| 9  | MASQUE 凭据 | 自动注册、自动续用，无需手动填                     |
| 10 | 多后端管理            | 前后端分离版专属：多后端聚合 / 选择下发               |
| 11 | 反滥用加固            | 指纹消隐、限流、反扫描兜底页、字节差异化                |
| 12 | Telegram 用量通知    | 每日用量推送（可选）                          |
| 13 | 备份与恢复            | 配置一键导入 / 导出                         |

## 三、代码形态与版本

当前代码共 **六种形态** 各形态代码部署方式如下：

| 形态        | 文件名称                         | 部署目标        | 说明                                       |
| --------- | ---------------------------- | ----------- | ---------------------------------------- |
| 单文件·明文版   | `CFNext-明文版.js`       | Worker      | 面板 + 后端一体，源码可读，**仅供阅读 / 二次开发，不建议直接部署**   |
| 单文件·小说混淆版 | `CFNext-小说混淆版.js`     | Worker      | 面板 + 后端一体，正文嵌入语料、占比约 66%，体积最大            |
| 单文件·Pages | `CFNext-小说混淆Pages版.zip` | Pages（高级模式） | 单文件混淆版打包为 `_worker.js`，走 Pages 通道        |
| 分离版·后端    | `CFNext-后端Worker版.js` | Worker      | 纯节点 / 订阅 / `/api/*`，**无面板、无登录**          |
| 分离版·前端    | `CFNext-前端Pages版.zip` | Pages（高级模式） | 面板 UI + 登录 + 多后端管理 + 聚合下发                |

> **前后端分离版**：前端 Pages 负责面板 / 登录 / 多后端（可跨账户），后端 Wo*rker 只存参数、生成订阅；前端把 `/<入口>/api/*`、`/<入口>/sub/*` 映射到后端并注入 API 密钥。后端不暴露任何独立入口，只能经前端访问*。  
> **单文件版**：面板与后端一体，一次部署即用，无多后端管理模块。

## 四、部署说明

### Worker 部署

1. 登录 Cloudflare Dashboard → Workers 和 Pages → 创建 → 创建 Worker。
2. 把对应 `.js` 文件内容粘贴进在线编辑器（或通过 API / Wrangler 部署）。
3. 绑定 KV：创建 KV 命名空间，绑定变量名填 **`K`**。
4. 设置环境变量（见下表，仅填必填项）。
5. 部署，访问 `https://<名称>.<子域>.workers.dev/<入口>` 进入面板。

### Pages 部署

1. 创建 Pages 项目（高级模式 / 直接上传）。
2. 上传 `_worker.js`（分离版前端或单文件 Pages）。
3. 绑定 KV：变量名 **`K`**（生产 + 预览环境）。
4. 设置环境变量（仅填必填项）。
5. **注意顺序**：先建项目 → 设环境变量 → 绑定 KV → **最后部署**（绑定与环境变量只对之后新建的部署生效）。

### 登录与访问

- 入口路径由环境变量 `L`（等价 `login`）决定，例如 `L=admin` ⇒ 面板在 `/admin`。
- 首次访问面板会进入 **SETUP 页强制设置管理密码**（密码保存在 KV 中，之后可在面板内修改）。
- 密码也可用环境变量 `ADMIN` 强制覆盖（设置后面板内不可改）。
- 订阅地址为 `/<入口>/sub/clash|singbox|karing`，**无需登录**（客户端不带 cookie）。

## 五、环境变量与配置变量

> 未列出的变量均非必填，可留空。

### 5.1 基础（单文件版 / 分离版通用）

| 变量      | 值         | 说明                            |
| ------- | --------- | ----------------------------- |
| `L`     | `admin` 等 | 面板入口路径（等价 `login`）。**必填**     |
| `K`     | —         | KV 命名空间绑定（绑定变量名就是 `K`）。**必填** |
| `ADMIN` | 密码        | 强制覆盖管理密码（留空则面板内首次设置）          |
| `U`     | UUID      | 自定义 UUID，仅作兜底（KV 中的 uuid 优先）  |

### 5.2 分离版专用

| 变量    | 值  | 说明                                   |
| ----- | -- | ------------------------------------ |
| `API` | 密钥 | 后端共享密钥（前端注入 `X-CF-Api` 时校验）。**后端必填** |

### 5.3 MASQUE

| 变量                 | 值          | 说明                                 |
| ------------------ | ---------- | ---------------------------------- |
| `MASQUE_ENDPOINTS` | `IP:端口` 列表 | 覆盖 MASQUE 端点                       |
| `MASQUE_SNI`       | 域名         | MASQUE SNI（默认 `www.microsoft.com`） |

### 5.4 面板配置项（保存于 KV，面板内即可修改）

| 配置项                  | 说明                                 |
| -------------------- | ---------------------------------- |
| `mode`               | 运行模式：worker / masque / home |
| `masqueEps`          | MASQUE 端点（一行一个，按顺序尝试）              |
| `nodeLimitCount`     | 节点数量上限（默认 300）                     |
| `preferredIPs`       | 优选 IP（可带国家码 / 端口 / 标签）             |
| `subUrl` / `path`    | 订阅路径 / 节点路径段                       |
| `host`               | 自定义优选域名                            |
| `tgToken` / `tgChat` | Telegram 用量通知                      |

## 六、订阅模式与优选

### 6.1 订阅模式

| 模式       | 说明                                            |
| -------- | --------------------------------------------- |
| `worker` | 下发 VLESS/Trojan/XHTTP 节点（默认 300 个）            |
| `masque` | 下发 MASQUE 节点（28 个端点，走 QUIC/UDP-443）           |
| `home`   | 下发家宽节点（VPN Gate OpenVPN + 自定义证书）              |

### 6.2 订阅地址

- `/<入口>/sub/clash` → Clash 订阅
- `/<入口>/sub/singbox` → sing-box 订阅
- `/<入口>/sub/karing` → Karing 订阅
- `/<入口>/sub?c=<格式>` → 面板预览用

### 6.3 地区与命名

节点名含地区标签（如 `CFNext-·1`），`preferredIPs` 支持国家码前缀、端口、`#标签` 后缀与多源逗号分隔。

## 七、性能优化与安全

- 订阅结果进程内缓存 60 秒，空值输出与旧版逐字节一致。
- `/sub` 反滥用限流（同 IP 60 秒内第 31 次起静默回欢迎页）。
- 反扫描：未匹配路径统一返回同一份欢迎页，字节一致、零提示。
- 指纹消隐：能力词消隐，用户身份+字节双随机差异化。
- 健康检查统一走 `https://www.gstatic.com/generate_204`，主组补 `expected-status: 204`。
- `cpuLimit` 默认关闭；Free 计划单请求硬上限 10ms。

## 八、致谢

- 感谢 [cmliu/edgetunnel](https://github.com/cmliu/edgetunnel) 等 Cloudflare Worker 代理项目。
- 感谢 [byJoey/CFnew](https://github.com/byJoey/cfnewl) 。
- 感谢 mihomo / sing-box 社区与 MASQUE 协议的公开实现。
- 感谢 Telegram 交流群与各位用户的反馈。
