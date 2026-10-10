// ============================================================================
//  Edge panel · single-file Worker implementation
//
//  Config keys: login  ADMIN  U  D/PATH  MASK  HOST  PROXYIP  S/OUTBOUND
//               ECH  TROJAN  ALPN  YX  YXURL  BESTIP_AUTO  DEPLOY_EDITION
//               CF_ACCOUNT_ID  CF_API_TOKEN  K
//  Full docs: docs/环境变量.md
// ============================================================================
//
// 版本与部署形态：DEPLOY_EDITION 由构建期自动维护（源码恒为「明文版」，产物自动标注）；
// 更新检测统一以仓库基准版本号为比对依据，点击版本号可比对并按需拉取。
import{connect as t}from"cloudflare:sockets";const _d=atob;const _r2=new RegExp("^("+_d("c29ja3M1")+"|http|https|ss):\\/\\/(.+)$","i");const _r3=new RegExp(_d("Y2xhc2g=")+"|"+_d("c2luZ2JveA==")+"|"+_d("c2luZy1ib3g=")+"|"+_d("c3VyZ2U=")+"|"+_d("c3VyZmJvYXJk")+"|"+_d("bG9vbg==")+"|"+_d("cXVhbnR1bXVsdA=="));const _r4=new RegExp(_d("a2FyaW5n"),"i");const _r0=new RegExp("(?:"+_d("dmxlc3M=")+"|"+_d("dHJvamFu")+"):\\/\\/[^@\\s/]+@(\\[[0-9a-fA-F:]+\\]|[A-Za-z0-9.-]+)(?::(\\d{1,5}))?");const _r1=new RegExp("^"+_d("dmxlc3M=")+":\\/\\/");const VERSION="2.7.0",DEPLOY_EDITION="明文版";const __B="CFN"+"ext";const __AC="luma"+"_auth";function e(){try{return"混淆版"===DEPLOY_EDITION?"obfuscated":"plain"}catch(t){return"plain"}}const UPDATE_REPO=_d("UEFJQ05J")+"/"+_d("Q0ZOZXh0");let n=null;function r(t){const e=String(t||"").match(/(\d+)\.(\d+)\.(\d+)/);return e?[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3],10)]:null}function a(t,e){const n=r(t),a=r(e);if(!n||!a)return 0;for(let t=0;t<3;t++)if(n[t]!==a[t])return n[t]<a[t]?-1:1;return 0}function o(t){const e=t.match(/const\s+VERSION\s*=\s*['"]([^'"]+)['"]/);return e?e[1]:null}const s="application/octet-stream",i="text/yaml; charset=utf-8",l={Tracking:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/domain/Tracking.mrs",ct:s},Advertising:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/domain/Advertising.mrs",ct:s},AWAvenueAds:{url:"https://raw.githubusercontent.com/"+_d("VEctVHdpbGlnaHQ=")+"/"+_d("QVdBdmVudWU=")+"-Ads-Rule/main/Filters/"+_d("QVdBdmVudWU=")+"-Ads-Rule-"+_d("Q2xhc2g=")+".yaml",ct:i},Direct:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/domain/Direct.mrs",ct:s},Private:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/domain/Private.mrs",ct:s},Download:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/domain/Download.mrs",ct:s},AppleCN:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/domain/AppleCN.mrs",ct:s},China:{url:"https://cdn.jsdelivr.net/gh/"+_d("YmxhY2ttYXRyaXg3")+"/"+_d("aW9zX3J1bGVfc2NyaXB0")+"@master/rule/"+_d("Q2xhc2g=")+"/ChinaMaxNoIP/ChinaMaxNoIP_No_Resolve.yaml",ct:i},AI:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/domain/AI.mrs",ct:s},Telegram:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/domain/Telegram.mrs",ct:s},Twitter:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/domain/Twitter.mrs",ct:s},SocialMedia:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/domain/SocialMedia.mrs",ct:s},Netflix:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/domain/Netflix.mrs",ct:s},YouTube:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/domain/YouTube.mrs",ct:s},Google:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/domain/Google.mrs",ct:s},Microsoft:{url:"https://cdn.jsdelivr.net/gh/"+_d("YmxhY2ttYXRyaXg3")+"/"+_d("aW9zX3J1bGVfc2NyaXB0")+"@master/rule/"+_d("Q2xhc2g=")+"/Microsoft/Microsoft.yaml",ct:i},Proxy:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/domain/Proxy.mrs",ct:s},Spotify:{url:"https://github.com/"+_d("RHVzdGluV2lu")+"/"+_d("cnVsZXNldF9nZW9kYXRh")+"/releases/download/"+_d("bWlob21v")+"-ruleset/spotify.mrs",ct:s},TikTok:{url:"https://github.com/"+_d("RHVzdGluV2lu")+"/"+_d("cnVsZXNldF9nZW9kYXRh")+"/releases/download/"+_d("bWlob21v")+"-ruleset/tiktok.mrs",ct:s},disney:{url:"https://github.com/"+_d("RHVzdGluV2lu")+"/"+_d("cnVsZXNldF9nZW9kYXRh")+"/releases/download/"+_d("bWlob21v")+"-ruleset/disney.mrs",ct:s},github:{url:"https://rule.kelee.one/"+_d("Q2xhc2g=")+"/GitHub.yaml",ct:i},PrivateIP:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/ip/Private.mrs",ct:s},TelegramIP:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/ip/Telegram.mrs",ct:s},[_d("UHJveHlJUA==")]:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/ip/Proxy.mrs",ct:s},ChinaIP:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/ip/China.mrs",ct:s}},c=new Map,p=new Map;function d(t,e){return new Response(t,{status:200,headers:{"Content-Type":e,"Cache-Control":"public, max-age=86400"}})}const u=["173.245.48.0/20","103.21.244.0/22","103.22.200.0/22","103.31.4.0/22","141.101.64.0/18","108.162.192.0/18","190.93.240.0/20","188.114.96.0/20","197.234.240.0/22","198.41.128.0/17","162.158.0.0/15","104.16.0.0/13","104.24.0.0/14","172.64.0.0/13","131.0.72.0/22"],f=["104.16.0.0/13","104.24.0.0/14","172.64.0.0/13","162.158.0.0/15","188.114.96.0/20"],h=["2400:cb00::/32","2606:4700::/32","2803:f800::/32","2405:b500::/32","2405:8100::/32","2a06:98c0::/29","2c0f:f248::/32"],m=["2606:4700::/32","2400:cb00::/32","2803:f800::/32","2a06:98c0::/29","2c0f:f248::/32"];let g=h.slice(),b=0;function v(t){if(!Y(t=String(t||"")))return!1;if(t.indexOf(":")>=0)return h.some(e=>function(t,e){const[n,r]=e.split("/"),a=parseInt(r,10),o=t=>{const e=t.indexOf("::");let n;if(e>=0){const r=t.slice(0,e).split(":").filter(Boolean),a=t.slice(e+2).split(":").filter(Boolean),o=8-r.length-a.length;n=[...r,...Array(o).fill("0"),...a]}else n=t.split(":");return n.map(t=>t.padStart(4,"0"))},s=t=>t.map(t=>parseInt(t,16).toString(2).padStart(16,"0")).join("");return s(o(t)).slice(0,a)===s(o(n)).slice(0,a)}(t,e));const e=t.split(".").map(Number),n=(e[0]<<24|e[1]<<16|e[2]<<8|e[3])>>>0;return tt.some(([t,e])=>n>=t&&n<=e)}const y={HK:"香港",TW:"台湾",MO:"澳门",JP:"日本",SG:"新加坡",US:"美国",KR:"韩国",DE:"德国",FR:"法国",GB:"英国",CA:"加拿大",AU:"澳大利亚",SE:"瑞典",NL:"荷兰",FI:"芬兰",NO:"挪威",DK:"丹麦",CH:"瑞士",IT:"意大利",ES:"西班牙",PT:"葡萄牙",IE:"爱尔兰",BE:"比利时",AT:"奥地利",PL:"波兰",CZ:"捷克",RO:"罗马尼亚",HU:"匈牙利",GR:"希腊",RU:"俄罗斯",TR:"土耳其",UA:"乌克兰",IN:"印度",TH:"泰国",MY:"马来西亚",VN:"越南",PH:"菲律宾",ID:"印尼",BR:"巴西",MX:"墨西哥",AR:"阿根廷",CL:"智利",ZA:"南非",EG:"埃及",AE:"阿联酋",IL:"以色列",NZ:"新西兰",KZ:"哈萨克斯坦",SA:"沙特"},x={};for(const t in y)x[y[t]]=t;x["印度尼西亚"]="ID";const w={HKG:"香港",TPE:"台湾",KHH:"台湾",TSA:"台湾",RMQ:"台湾",NRT:"日本",KIX:"日本",HND:"日本",CTS:"日本",FUK:"日本",SIN:"新加坡",ICN:"韩国",KUL:"马来西亚",BKK:"泰国",MNL:"菲律宾",SGN:"越南",HAN:"越南",CGK:"印尼",DEL:"印度",BOM:"印度",MAA:"印度",DXB:"阿联酋",TLV:"以色列",RUH:"沙特",JED:"沙特",DOH:"卡塔尔",FRA:"德国",MUC:"德国",DUS:"德国",HAM:"德国",BER:"德国",CGN:"德国",STR:"德国",AMS:"荷兰",CDG:"法国",MRS:"法国",NCE:"法国",LHR:"英国",LGW:"英国",MAN:"英国",MAD:"西班牙",BCN:"西班牙",MXP:"意大利",FCO:"意大利",PMO:"意大利",ZRH:"瑞士",GVA:"瑞士",VIE:"奥地利",WAW:"波兰",PRG:"捷克",ARN:"瑞典",CPH:"丹麦",OSL:"挪威",HEL:"芬兰",DUB:"爱尔兰",LIS:"葡萄牙",BRU:"比利时",BUD:"匈牙利",OTP:"罗马尼亚",ATH:"希腊",IST:"土耳其",SVO:"俄罗斯",DME:"俄罗斯",LED:"俄罗斯",JFK:"美国",EWR:"美国",LAX:"美国",SJC:"美国",SFO:"美国",SEA:"美国",ORD:"美国",DFW:"美国",IAD:"美国",ATL:"美国",MIA:"美国",BOS:"美国",DEN:"美国",PHX:"美国",MSP:"美国",DTW:"美国",PHL:"美国",CLT:"美国",LAS:"美国",PDX:"美国",SLC:"美国",SAN:"美国",AUS:"美国",IAH:"美国",MCI:"美国",BNA:"美国",SMF:"美国",RDU:"美国",YYZ:"加拿大",YVR:"加拿大",YUL:"加拿大",YOW:"加拿大",YYC:"加拿大",MEX:"墨西哥",GRU:"巴西",GIG:"巴西",EZE:"阿根廷",SCL:"智利",SYD:"澳大利亚",MEL:"澳大利亚",BNE:"澳大利亚",PER:"澳大利亚",AKL:"新西兰",JNB:"南非",CAI:"埃及",ALA:"哈萨克斯坦",ALB:"美国",BDL:"美国",BHM:"美国",BIL:"美国",BOI:"美国",BUF:"美国",BUR:"美国",BTV:"美国",BWI:"美国",CAE:"美国",CHA:"美国",CLE:"美国",CMH:"美国",CPR:"美国",DAL:"美国",DAY:"美国",DSM:"美国",DTT:"美国",ECP:"美国",EYW:"美国",FLL:"美国",GRR:"美国",GSP:"美国",HIO:"美国",HNL:"美国",ICT:"美国",IND:"美国",JAX:"美国",LBB:"美国",MCO:"美国",MDW:"美国",MEM:"美国",MFE:"美国",MFR:"美国",MSY:"美国",OAK:"美国",OKC:"美国",OMA:"美国",ONT:"美国",ORF:"美国",PIT:"美国",PSC:"美国",PVD:"美国",RIC:"美国",RNO:"美国",RSW:"美国",SAT:"美国",SDF:"美国",SNA:"美国",STL:"美国",SWF:"美国",SYR:"美国",TPA:"美国",TUL:"美国",TUS:"美国",CTS:"日本",FUK:"日本",HND:"日本",BLR:"印度",CMB:"斯里兰卡",KWI:"科威特",AMM:"约旦",BEY:"黎巴嫩",NBO:"肯尼亚",LOS:"尼日利亚",ACC:"加纳",CPT:"南非",LIM:"秘鲁",BOG:"哥伦比亚",PTY:"巴拿马"},k=Object.assign({},y,w,{USA:"美国"}),I=w,P=["https://"+_d("YmVzdGNm")+".pages.dev/random-region/HK/100.txt","https://"+_d("YmVzdGNm")+".pages.dev/random-region/TW/100.txt","https://"+_d("YmVzdGNm")+".pages.dev/random-region/JP/100.txt","https://"+_d("YmVzdGNm")+".pages.dev/random-region/SG/100.txt","https://"+_d("YmVzdGNm")+".pages.dev/random-region/US/100.txt","https://"+_d("YmVzdGNm")+".pages.dev/random-region/KR/100.txt"].join("\n"),C=/random-region\/[A-Z]{2,}\/\d+\.txt/i,S={uuid:"",path:"",admin:"",login:"",adminInit:!1,host:"",enableVless:!0,enableTrojan:!1,trojanPassword:"",enableXhttp:!1,alpn:"",ech:!1,echHost:"cloudflare-ech.com",echDns:"",tlsOnly:!1,nodeLimit:!0,nodeLimitCount:500,polling:!1,countryLabel:"",loadBalance:!0,ipv6Mode:"off",probeAlive:!1,cfAccountId:"",cfApiToken:"",quotaAuto:!1,tgBotToken:"",tgChatID:"",homeWan:!1,homeWanNodes:[],[_d("cHJveHlJUA==")]:"",outboundProxy:"",outboundMode:"",fakePage:"",preferredDomains:"https://"+_d("YmVzdGNm")+".pages.dev/random-region/HK/100.txt\nhttps://"+_d("YmVzdGNm")+".pages.dev/random-region/TW/100.txt\nhttps://"+_d("YmVzdGNm")+".pages.dev/random-region/JP/100.txt\nhttps://"+_d("YmVzdGNm")+".pages.dev/random-region/SG/100.txt\nhttps://"+_d("YmVzdGNm")+".pages.dev/random-region/US/100.txt\nhttps://"+_d("YmVzdGNm")+".pages.dev/random-region/KR/100.txt",preferredIPs:[],optimizer:{source:"wetest_v4",sourceURL:"",fallbackPool:"",port:443,threads:5,count:20,useCidr:!0,fillCount:0,subMode:"",subRandomCount:16,subIncludeDefault:!1},filter:{region:"all",ipType:["IPv4"],isp:["移动","联通","电信"]}},A=["cloudflare.com","www.cloudflare.com","speed.cloudflare.com"],T=["104.16.128.11","172.67.72.4","104.17.201.77","104.16.66.7","104.16.88.7","104.16.98.7","104.17.2.7","104.17.44.9","104.18.34.34","104.18.7.34","104.19.191.31","104.19.1.1","104.20.15.15","104.20.1.1","104.21.23.1","104.21.2.1","104.24.12.10","104.25.0.1","104.26.1.1","162.159.128.1"],U=[{label:"香港",region:"HK",url:"https://"+_d("YmVzdGNm")+".pages.dev/random-region/HK/100.txt",count:12},{label:"日本",region:"JP",url:"https://"+_d("YmVzdGNm")+".pages.dev/random-region/JP/100.txt",count:12},{label:"美国",region:"US",url:"https://"+_d("YmVzdGNm")+".pages.dev/random-region/US/100.txt",count:12},{label:"新加坡",region:"SG",url:"https://"+_d("YmVzdGNm")+".pages.dev/random-region/SG/100.txt",count:12},{label:"台湾",region:"TW",url:"https://"+_d("YmVzdGNm")+".pages.dev/random-region/TW/100.txt",count:12}],E=["104.17.127.180#优选IP-001","104.16.123.96#优选IP-002","104.16.124.96#优选IP-003","104.16.125.96#优选IP-004","104.16.126.96#优选IP-005","104.16.127.96#优选IP-006","104.16.132.229#优选IP-007","104.16.248.248#优选IP-008","104.16.249.249#优选IP-009","162.159.0.1#优选IP-010","188.114.96.1#优选IP-011","104.17.24.252#优选IP-012","188.114.99.52#优选IP-013","162.159.94.229#优选IP-014","162.159.5.175#优选IP-015","104.18.119.34#优选IP-016","104.21.213.24#优选IP-017","104.17.234.5#优选IP-018","104.16.245.187#优选IP-019","172.67.64.211#优选IP-020","172.67.64.12#优选IP-021","104.18.43.224#优选IP-022","104.18.40.93#优选IP-023","104.18.37.92#优选IP-024","104.18.47.234#优选IP-025","104.18.42.54#优选IP-026","172.64.144.49#优选IP-027","172.64.146.15#优选IP-028","104.17.185.207#优选IP-029","104.17.101.139#优选IP-030","162.159.44.215#优选IP-031","162.159.44.214#优选IP-032","104.18.217.109#优选IP-033","172.65.127.225#优选IP-034","104.18.184.243#优选IP-035","162.159.137.205#优选IP-036","172.65.64.7#优选IP-037","104.25.45.44#优选IP-038","104.19.88.253#优选IP-039","162.159.136.73#优选IP-040","104.18.185.40#优选IP-041","104.25.141.168#优选IP-042","104.25.246.123#优选IP-043","104.24.54.254#优选IP-044","104.19.123.4#优选IP-045","188.114.98.144#优选IP-046","188.114.99.18#优选IP-047","104.17.127.106#优选IP-048","162.159.4.175#优选IP-049","104.18.255.187#优选IP-050","172.65.173.221#优选IP-051","104.18.176.111#优选IP-052","104.25.122.6#优选IP-053","188.114.96.116#优选IP-054","104.25.214.211#优选IP-055","104.16.223.195#优选IP-056","104.25.101.186#优选IP-057","172.64.81.44#优选IP-058","104.25.143.238#优选IP-059","188.114.99.114#优选IP-060","104.19.169.53#优选IP-061","104.16.113.211#优选IP-062","104.27.40.81#优选IP-063","188.114.98.91#优选IP-064","162.159.236.5#优选IP-065","104.25.44.144#优选IP-066","162.159.46.167#优选IP-067","104.18.84.180#优选IP-068","104.18.196.199#优选IP-069","104.24.155.234#优选IP-070","162.159.228.244#优选IP-071","162.159.235.27#优选IP-072","104.19.214.25#优选IP-073","104.19.168.107#优选IP-074","104.24.244.237#优选IP-075","104.27.66.179#优选IP-076","104.24.2.253#优选IP-077","104.21.61.179#优选IP-078","104.21.114.216#优选IP-079","188.114.98.53#优选IP-080","172.65.145.187#优选IP-081","188.114.96.255#优选IP-082","104.25.245.147#优选IP-083","172.66.161.31#优选IP-084","104.18.133.24#优选IP-085","188.114.99.155#优选IP-086","172.64.34.109#优选IP-087","172.64.145.202#优选IP-088","104.19.78.30#优选IP-089","104.17.118.180#优选IP-090","104.17.13.179#优选IP-091","172.65.35.169#优选IP-092","104.16.0.133#优选IP-093","104.16.238.98#优选IP-094","104.18.28.140#优选IP-095","104.19.115.243#优选IP-096","104.24.58.243#优选IP-097","104.27.207.36#优选IP-098","104.21.192.230#优选IP-099","104.25.20.146#优选IP-100","104.27.113.151#优选IP-101","104.24.230.144#优选IP-102","172.65.134.100#优选IP-103","188.114.96.94#优选IP-104","104.25.197.107#优选IP-105","104.16.108.18#优选IP-106","172.64.233.36#优选IP-107","172.67.163.14#优选IP-108","104.24.230.213#优选IP-109","104.19.106.1#优选IP-110","104.27.72.4#优选IP-111","104.21.57.47#优选IP-112","172.65.162.213#优选IP-113","172.67.255.83#优选IP-114","172.67.189.246#优选IP-115","162.159.230.149#优选IP-116","162.159.197.16#优选IP-117","172.67.103.87#优选IP-118","162.159.237.243#优选IP-119","104.25.193.135#优选IP-120","104.18.141.27#优选IP-121","172.65.11.191#优选IP-122","104.24.184.158#优选IP-123","188.114.97.52#优选IP-124","104.27.4.144#优选IP-125","104.25.93.154#优选IP-126","172.66.199.166#优选IP-127","172.67.64.94#优选IP-128","104.27.94.231#优选IP-129","104.24.168.96#优选IP-130","104.18.173.224#优选IP-131","172.67.173.89#优选IP-132","104.17.107.217#优选IP-133","188.114.97.91#优选IP-134","104.17.195.184#优选IP-135","162.159.14.18#优选IP-136","172.67.229.44#优选IP-137","104.24.51.58#优选IP-138","104.19.97.238#优选IP-139","104.25.161.217#优选IP-140","104.17.146.117#优选IP-141","172.67.161.136#优选IP-142","104.17.99.0#优选IP-143","104.25.100.203#优选IP-144","104.19.23.222#优选IP-145","188.114.96.141#优选IP-146","104.19.247.23#优选IP-147","104.25.24.66#优选IP-148","104.16.123.26#优选IP-149","104.27.23.242#优选IP-150","104.25.36.200#优选IP-151","104.17.195.133#优选IP-152","104.16.68.175#优选IP-153","188.114.98.19#优选IP-154","104.16.218.231#优选IP-155","104.18.28.48#优选IP-156","162.159.143.225#优选IP-157","162.159.19.201#优选IP-158","104.25.166.112#优选IP-159","104.16.201.45#优选IP-160","104.16.91.33#优选IP-161","172.67.82.86#优选IP-162","104.16.11.246#优选IP-163","188.114.97.61#优选IP-164","104.17.240.245#优选IP-165","172.66.157.150#优选IP-166","104.17.25.173#优选IP-167","104.18.26.28#优选IP-168","104.18.123.15#优选IP-169","104.25.124.155#优选IP-170","188.114.96.64#优选IP-171","104.18.18.214#优选IP-172","104.17.46.187#优选IP-173","104.17.153.58#优选IP-174","188.114.96.89#优选IP-175","172.67.174.143#优选IP-176","104.25.251.220#优选IP-177","104.27.195.79#优选IP-178","162.159.153.10#优选IP-179","104.25.129.238#优选IP-180","172.65.3.67#优选IP-181","172.67.232.109#优选IP-182","104.18.178.193#优选IP-183","104.19.78.144#优选IP-184","104.18.63.107#优选IP-185","104.19.69.150#优选IP-186","104.25.73.92#优选IP-187","172.67.195.152#优选IP-188","172.65.184.114#优选IP-189","172.65.202.216#优选IP-190","172.65.21.190#优选IP-191","104.19.32.220#优选IP-192","104.18.211.8#优选IP-193","104.17.160.131#优选IP-194","162.159.6.39#优选IP-195","162.159.43.223#优选IP-196","104.21.224.5#优选IP-197","104.25.18.216#优选IP-198","162.159.6.246#优选IP-199","104.24.46.127#优选IP-200","104.17.87.46#优选IP-201","188.114.97.80#优选IP-202","188.114.97.108#优选IP-203","162.159.241.11#优选IP-204","188.114.97.0#优选IP-205","188.114.99.14#优选IP-206","104.19.68.127#优选IP-207","162.159.10.45#优选IP-208","104.25.181.74#优选IP-209","104.24.178.200#优选IP-210","188.114.96.164#优选IP-211","104.24.41.240#优选IP-212","104.17.97.72#优选IP-213","104.16.77.112#优选IP-214","104.19.181.118#优选IP-215","172.67.165.245#优选IP-216","104.17.169.109#优选IP-217","172.65.44.103#优选IP-218","188.114.97.63#优选IP-219","172.65.47.182#优选IP-220","104.17.245.237#优选IP-221","162.159.2.86#优选IP-222","188.114.96.151#优选IP-223","172.65.139.108#优选IP-224","172.65.118.105#优选IP-225","104.21.7.133#优选IP-226","162.159.134.174#优选IP-227","104.18.194.107#优选IP-228","188.114.97.21#优选IP-229","162.159.9.18#优选IP-230","104.18.41.168#优选IP-231","162.159.192.111#优选IP-232","162.159.240.54#优选IP-233","104.17.0.4#优选IP-234","104.25.86.143#优选IP-235","104.27.97.130#优选IP-236","172.67.127.122#优选IP-237","104.25.33.126#优选IP-238","104.25.223.90#优选IP-239","104.25.123.130#优选IP-240","172.65.167.52#优选IP-241","172.67.159.243#优选IP-242","104.25.113.22#优选IP-243","188.114.98.27#优选IP-244","162.159.198.200#优选IP-245","104.17.76.49#优选IP-246","104.21.215.255#优选IP-247","172.67.131.200#优选IP-248","162.159.135.234#优选IP-249","172.65.45.102#优选IP-250","172.66.164.60#优选IP-251","162.159.26.248#优选IP-252","162.159.90.82#优选IP-253","172.65.50.167#优选IP-254","162.159.236.19#优选IP-255","104.19.143.220#优选IP-256","104.17.151.244#优选IP-257","104.17.121.245#优选IP-258","104.18.144.168#优选IP-259","162.159.228.231#优选IP-260","104.17.100.40#优选IP-261","104.27.116.114#优选IP-262","162.159.199.220#优选IP-263","104.20.17.160#优选IP-264","104.25.62.39#优选IP-265","104.27.20.220#优选IP-266","172.65.118.85#优选IP-267","104.19.83.33#优选IP-268","188.114.96.238#优选IP-269","162.159.42.67#优选IP-270","104.27.46.114#优选IP-271","104.25.126.144#优选IP-272","104.25.173.14#优选IP-273","104.24.46.107#优选IP-274","104.25.109.0#优选IP-275","162.159.137.71#优选IP-276","104.25.238.28#优选IP-277","104.27.124.239#优选IP-278","104.24.34.149#优选IP-279","104.19.246.234#优选IP-280","162.159.10.243#优选IP-281","104.27.96.232#优选IP-282","172.65.78.200#优选IP-283","104.24.25.178#优选IP-284","104.24.84.86#优选IP-285","104.25.238.237#优选IP-286","104.16.45.249#优选IP-287","104.16.234.241#优选IP-288","104.24.18.62#优选IP-289","172.65.45.248#优选IP-290","104.25.169.144#优选IP-291","104.27.27.106#优选IP-292","162.159.43.85#优选IP-293","172.67.71.106#优选IP-294","162.159.228.164#优选IP-295","104.24.250.89#优选IP-296","104.18.185.26#优选IP-297","104.27.21.175#优选IP-298","104.24.49.39#优选IP-299","172.67.85.54#优选IP-300"],$=["cloudflare.182682.xyz","speed.marisalnc.com","freeyx.cloudflare88.eu.org",_d("YmVzdGNm")+".top","cdn.2020111.xyz","cfip.cfcdn.vip","cf.0sm.com","cf."+_d("MDkwMjI3")+".xyz","cf.zhetengsha.eu.org","cloudflare.9jy.cc","cf.zerone-cdn.pp.ua","cfip.1323123.xyz","cnamefuckxxs.yuchen.icu","cloudflare-ip.mofashi.ltd","115155.xyz","cname.xirancdn.us","f3058171cad.002404.xyz","8.889288.xyz","cdn.tzpro.xyz","cf.877771.xyz","xn--b6gac.eu.org",_d("YmVzdGNm")+"."+_d("MDMwMTAx")+".xyz","cdns.doon.eu.org","fn.130519.xyz","saas.sin.fan"].join("\n"),L=new Set([80,8080,8880,2052,2082,2086,2095]),N={wetest_v4:{label:"微测网 IPv4",url:"https://www.wetest.vip/page/cloudflare/address_v4.html"},wetest_v6:{label:"微测网 IPv6",url:"https://www.wetest.vip/page/cloudflare/address_v6.html"},[_d("YmVzdGNm")]:{label:"优选 IP 列表",url:"https://cf."+_d("MDkwMjI3")+".xyz/ip.164746.xyz"},hostmonit:{label:"HostMonit 优选",url:"https://stock.hostmonit.com/CloudFlareYes"},wetest_cname:{label:"微测网 优选域名",url:"https://www.wetest.vip/page/cloudflare/cname.html"}},D=new TextEncoder,O=new TextDecoder,R=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],_=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,2821735955,4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,2399980690,4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745];function M(t,e){return(t<<e|t>>>32-e)>>>0}function F(t){const e=D.encode(String(t)),n=8*e.length,r=1+(e.length+8>>6)<<6,a=new Uint8Array(r);a.set(e),a[e.length]=128;const o=new DataView(a.buffer);o.setUint32(r-8,n>>>0,!0),o.setUint32(r-4,Math.floor(n/4294967296),!0);let s=1732584193,i=4023233417,l=2562383102,c=271733878;for(let t=0;t<r;t+=64){const e=new Uint32Array(16);for(let n=0;n<16;n++)e[n]=o.getUint32(t+4*n,!0);let n=s,r=i,a=l,p=c;for(let t=0;t<64;t++){let o,s;t<16?(o=r&a|~r&p,s=t):t<32?(o=p&r|~p&a,s=(5*t+1)%16):t<48?(o=r^a^p,s=(3*t+5)%16):(o=a^(r|~p),s=7*t%16);const i=n+o+_[t]+e[s]>>>0;n=p,p=a,a=r,r=r+M(i,R[t])>>>0}s=s+n>>>0,i=i+r>>>0,l=l+a>>>0,c=c+p>>>0}let p="";for(const t of[s,i,l,c])p+=(255&t).toString(16).padStart(2,"0"),p+=(t>>>8&255).toString(16).padStart(2,"0"),p+=(t>>>16&255).toString(16).padStart(2,"0"),p+=(t>>>24&255).toString(16).padStart(2,"0");return p}function _U(t){const m=F(String(t||"")+"|"+__B);return[m.slice(0,8),m.slice(8,12),"4"+m.slice(13,16),"8"+m.slice(17,20),m.slice(20)].join("-")}function z(t,e=443){if(!(t=String(t||"").trim()))return{host:"",port:e};if(t.startsWith("[")){const n=t.match(/^\[([^\]]+)\](?::(\d+))?$/);return{host:n?n[1]:t.replace(/^\[|\]$/g,""),port:n&&n[2]?parseInt(n[2]):e}}const n=t.lastIndexOf(":");return n>0&&/^\d+$/.test(t.slice(n+1))?{host:t.slice(0,n),port:parseInt(t.slice(n+1))}:{host:t,port:e}}async function q(t){let e=null,n="";for(const t of["https://www.vpngate.net/api/iphone/","http://www.vpngate.net/api/iphone/"])try{const r=await fetch(t,{headers:{"User-Agent":"Mozilla/5.0",Accept:"text/plain"},cf:{cacheTtl:1800,cacheEverything:!0}});if(!r||!r.ok){e=new Error("HTTP "+(r&&r.status));continue}if(n=await r.text(),n&&n.length)break}catch(t){e=t}if(!n)throw e||new Error("VPN Gate 节点源没有返回内容");const r=[];return String(n).split(/\r?\n/).forEach(e=>{if(!(e=e.trim())||e.startsWith("#"))return;const n=e.split(",");if(n.length<15)return;const a=(n[0]||"").trim(),o=(n[1]||"").trim();if(0===a.toLowerCase().indexOf("public-vpn"))return;if(0===o.indexOf("219.100.37."))return;const s=function(t){for(let e=t.length-1;e>=Math.max(3,t.length-3);e--){const n=(t[e]||"").trim();if(n&&!(n.length<100))try{const t=atob(n.slice(0,600));if("string"==typeof t&&t.length>10&&(t.indexOf("client")>=0||t.indexOf("remote")>=0||t.indexOf("dev ")>=0||t.indexOf("OpenVPN")>=0||t.indexOf("PacketiX")>=0))return n}catch(t){}}return""}(n);if(!o||!s)return;const i=(n[6]||"").trim().toUpperCase();t&&i!==String(t).trim().toUpperCase()||r.push({host:a,ip:o,speed:parseInt(n[4])||0,ping:parseInt(n[5])||0,country:i,ovpnB64:s})}),r.sort((t,e)=>(e.speed||0)-(t.speed||0)),r}function j(t){try{const e=atob(String(t||"").trim());return"string"==typeof e&&e.indexOf("BEGIN")>=0?e:""}catch(t){return""}}function B(t){const e=e=>{const n=String(t||"").match(new RegExp("<"+e+">([\\s\\S]*?)<\\/"+e+">","i"));return n?n[1].trim():""},n={};return String(t||"").split(/\r?\n/).forEach(t=>{const e=t.trim().match(/^(cipher|auth|dev|comp-lzo|key-direction|remote|port|proto|verb)\s+(.+)$/i);e&&(n[e[1].toLowerCase()]=e[2].trim())}),{ca:e("ca"),cert:e("cert"),key:e("key"),tlsAuth:e("tls-auth"),tlsCrypt:e("tls-crypt"),cipher:n.cipher||"",auth:n.auth||"",keyDirection:n["key-direction"]||"",remote:n.remote||"",proto:n.proto||""}}let G="",H=0;function K(){const t=(new Date).toISOString().slice(0,10);return t!==G&&(G=t,H=0),!(H>=300||(H++,0))}let W=0;async function V(t,e){try{if(!t.K||"function"!=typeof t.K.get)return null;const n=await t.K.get("hwcache");if(!n)return null;const r=JSON.parse(n);if(r&&r.t&&2===r.v&&Array.isArray(r.nodes)&&r.nodes.length&&(e||Date.now()-r.t<18e5))return r.nodes}catch(t){}return null}function J(t){return Array.isArray(t)&&t.length?t.filter(t=>t&&"udp"!==String(t.proto||"").toLowerCase()):t}async function X(t,e,n){if(!e.homeWan)return[];let r=null;if(n||(r=J(await V(t))),r&&r.length&&r.length>=30)return r;let a=[];try{a=J((await q("")).map(t=>function(t){const e=B("string"==typeof t.ovpn?t.ovpn:j(t.ovpnB64)),n=String(e.remote||"").split(/\s+/),r=parseInt(n[1],10)||443,a="udp"===String(e.proto||"").toLowerCase()?"udp":"tcp";return{server:t.ip,port:r,proto:a,country:t.country,ca:e.ca||"",cert:e.cert||"",key:e.key||"",tlsAuth:e.tlsAuth||"",tlsCrypt:e.tlsCrypt||"",cipher:e.cipher||_d("QUVTLTEyOC1HQ00="),auth:e.auth||"SHA1"}}(t))).slice(0,100),a.length||(a=[])}catch(t){}if(a.length)return await async function(t,e){try{if(!t.K||"function"!=typeof t.K.put)return;if(!K())return;await t.K.put("hwcache",JSON.stringify({t:Date.now(),v:2,nodes:e}))}catch(t){}}(t,a),a;if(r&&r.length)return r;const o=J(await V(t,!0));return o&&o.length?o:[]}function Y(t){if(!(t=String(t||"").trim()))return!1;const e=t.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);if(e)return e.slice(1).every(t=>Number(t)<=255);if(!/^[0-9a-fA-F:]+$/.test(t))return!1;if((t.match(/::/g)||[]).length>1)return!1;const n=t.includes("::"),r=t.replace(/::/g,":").split(":").filter(Boolean);return!(!n&&8!==r.length)&&(!n||!(r.length<1||r.length>7))&&r.every(t=>/^[0-9a-fA-F]{1,4}$/.test(t))}function Q(t){const e=[];for(let n=0;n<16;n+=2)e.push((t[n]<<8|t[n+1]).toString(16));let n=-1,r=0,a=-1,o=0;for(let t=0;t<8;t++)"0"===e[t]?(a<0?(a=t,o=1):o++,o>r&&(r=o,n=a)):(a=-1,o=0);if(r>=2){const t=e.slice(0,n).join(":");return(t?t+"::":"::")+e.slice(n+r).join(":")}return e.join(":")}function Z(t){const[e,n]=t.split("/"),r=e.split(".").map(Number),a=(r[0]<<24|r[1]<<16|r[2]<<8|r[3])>>>0,o=n>=32?0:4294967295<<32-n>>>0;return[(a&o)>>>0,(a|~o>>>0)>>>0]}const tt=u.map(Z),et=new Map;function nt(t){if(String(t).indexOf(":")>=0)return function(t){const[e,n]=t.split("/"),r=parseInt(n,10)||0,a=(t=>{const e=t.indexOf("::");let n;if(e>=0){const r=t.slice(0,e).split(":").filter(Boolean),a=t.slice(e+2).split(":").filter(Boolean),o=8-r.length-a.length;n=[...r,...Array(o).fill("0"),...a]}else n=t.split(":");return n.map(t=>t.padStart(4,"0"))})(e).map(t=>parseInt(t,16));let o=0;for(let t=0;t<8;t++)for(let e=15;e>=0;e--)o>=r&&(a[t]|=(Math.random()<.5?1:0)<<e),o++;return a.map(t=>t.toString(16)).join(":")}(t);const[e,n]=function(t){let e=et.get(t);return e||(e=Z(t),et.set(t,e)),e}(t),r=e+Math.floor(Math.random()*(n-e>>>0));return`${r>>>24&255}.${r>>>16&255}.${r>>>8&255}.${255&r}`}function rt(t){const e=String(t||"").split(".").map(t=>parseInt(t,10).toString(16).padStart(2,"0"));return 4!==e.length||e.some(t=>"NaN"===t)?null:"2606:4700::"+e[0]+e[1]+":"+e[2]+e[3]}function at(t,e){const n=new Set,r=[];let a=0;for(;r.length<e&&a++<20*e;){const e=nt(t[Math.floor(Math.random()*t.length)]);n.has(e)||(n.add(e),r.push(e))}return r}function ot(t){const e=[],n=new Set;return String(t||"").split(/[\n,;]+/).map(t=>t.trim()).filter(Boolean).forEach(t=>{let r="";if(t.includes("#")){const[e,n]=t.split("#");t=e,r=n}const{host:a,port:o}=z(t,443);a&&Y(a)&&!n.has(a)&&(n.add(a),e.push({ip:a,port:o,name:r}))}),e}function st(t){try{const e=atob(String(t).replace(/-/g,"+").replace(/_/g,"/")),n=new Uint8Array(e.length);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);return new TextDecoder("utf-8").decode(n)}catch(t){return null}}function it(t,e){return new Response(JSON.stringify(t),{status:e||200,headers:{"Content-Type":"application/json; charset=utf-8"}})}async function lt(t){const e=JSON.parse(JSON.stringify(S));let n=!1,r=!1;if(t.U&&(e.uuid=String(t.U).toLowerCase()),(t.D||t.PATH)&&(e.path=String(t.D||t.PATH)),t.login&&(e.login=String(t.login)),(t.ADMIN||t.admin)&&(e.admin=String(t.ADMIN||t.admin)),t.HOST&&(e.host=String(t.HOST).replace(/^https?:\/\//,"").split("/")[0]),t.PROXYIP&&(e.proxyIP=String(t.PROXYIP)),(t.S||t.OUTBOUND)&&(e.outboundProxy=String(t.S||t.OUTBOUND)),"true"!==t.ECH&&"1"!==t.ECH||(e.ech=!0),"true"!==t.TROJAN&&"1"!==t.TROJAN||(e.enableTrojan=!0),t.TROJAN_PASSWORD&&(e.trojanPassword=String(t.TROJAN_PASSWORD)),t.ALPN&&(e.alpn=String(t.ALPN)),t.TGTOKEN&&(e.tgBotToken=String(t.TGTOKEN)),t.TGCHAT&&(e.tgChatID=String(t.TGCHAT)),t.YX&&(e.preferredIPs=ot(t.YX)),t.YXURL&&(e.optimizer.sourceURL=String(t.YXURL)),"1"!==t.PROBE_ALIVE&&"true"!==t.PROBE_ALIVE||(e.probeAlive=!0),"0"!==t.PROBE_ALIVE&&"false"!==t.PROBE_ALIVE||(e.probeAlive=!1),"1"!==t.HOME_WAN&&"true"!==t.HOME_WAN||(e.homeWan=!0),t.K&&"function"==typeof t.K.get)try{const a=await async function(t){try{return await t.K.get("config",{cacheTtl:30})}catch(t){return null}}(t);if(a){const t=JSON.parse(a);r=!0,void 0!==t.quotaAuto&&(n=!0),Object.assign(e,t),t.optimizer&&(e.optimizer=Object.assign(JSON.parse(JSON.stringify(S.optimizer)),t.optimizer)),t.preferredIPs&&Array.isArray(t.preferredIPs)&&(e.preferredIPs=t.preferredIPs),t.admin&&(e.admin=String(t.admin)),t.uuid&&(e.uuid=String(t.uuid).toLowerCase())}}catch(t){}var a,o;return e.adminInit=!(!e.adminInit&&!r),delete e.fragment,delete e.fragmentParam,a=!!e.probeAlive,Re=!0===a||"true"===a||"1"===a||1===a,Ke=e.optimizer&&e.optimizer.fallbackPool||"",e.uuid=String(e.uuid||"").toLowerCase(),o=e.uuid,/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(o||"")||(e.uuid=e.admin?_U(e.admin):function(){if(crypto.randomUUID)return crypto.randomUUID();const t=crypto.getRandomValues(new Uint8Array(16));return t[6]=15&t[6]|64,t[8]=63&t[8]|128,[...t].map((t,e)=>(4===e||6===e||8===e||10===e?"-":"")+t.toString(16).padStart(2,"0")).join("")}()),e.path&&"/"!==e.path&&""!==e.path||(e.path=e.uuid),Array.isArray(e.preferredIPs)||(e.preferredIPs=ot(e.preferredIPs)),n||Boolean(e.cfAccountId&&e.cfApiToken||t.CF_ACCOUNT_ID&&t.CF_API_TOKEN)&&(e.quotaAuto=!0),e}async function ct(t,e){if(!t.K||"function"!=typeof t.K.put)return!1;const n=JSON.parse(JSON.stringify(e));return n.admin&&(n.admin=String(n.admin)),await t.K.put("config",JSON.stringify(n)),!0}let pt=null,dt=0;const ut=1e5;async function ft(t,e){const n=String(t.tgBotToken||"").trim(),r=String(t.tgChatID||"").trim();if(n&&r)try{await oe("https://api.telegram.org/bot"+n+"/sendMessage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:r,text:e})},8e3)}catch(t){}}const ht=[80,85,90,91,92,93,94,95,96,97,98,99];async function mt(t,e){try{const n=await gt(t,e);if(!n||!n.configured||n.error||"number"!=typeof n.percent)return;const r=Math.floor(n.percent),a=(new Date).toISOString().slice(0,10);let o=null;if(t.K&&"function"==typeof t.K.get)try{o=await t.K.get("tgnote")}catch(t){}let s={day:a,level:0};if(o)try{const t=JSON.parse(o);t&&t.day&&(s=t)}catch(t){}const i=s.day!==a;if(i&&(s={day:a,level:0},e.quotaDisabled)){e.quotaDisabled=!1;try{await ct(t,e)}catch(t){}}const l=!(!String(e.tgBotToken||"").trim()||!String(e.tgChatID||"").trim()),c="当日额度 "+n.percent+"%（"+(n.today&&n.today.requests||0)+" / "+n.limit+"）";let p=i;if(r>=99&&!e.quotaDisabled){e.quotaDisabled=!0;try{await ct(t,e)}catch(t){}l&&await ft(e,"⚠️ "+__B+" 用量告警："+c+"。订阅已自动停用，明日自动恢复。"),s.level=99,p=!0}else if(l&&r>=80&&!e.quotaDisabled){const t=ht.filter(t=>t<=r&&t>(s.level||0)).pop();t&&(await ft(e,"📊 "+__B+" 用量提醒："+c+"（提醒阈值 "+t+"%）"),s.level=t,p=!0)}if(p&&t.K&&"function"==typeof t.K.put)try{await t.K.put("tgnote",JSON.stringify(s))}catch(t){}}catch(t){}}async function gt(t,e){const n=String(t.CF_ACCOUNT_ID||e&&e.cfAccountId||"").trim(),r=String(t.CF_API_TOKEN||e&&e.cfApiToken||"").trim();if(!n||!r)return{configured:!1};const a=Date.now();if(a<dt)return pt&&pt.data?Object.assign({},pt.data,{stale:!0,error:"CF API 限流(429)，显示缓存数据（可能滞后）"}):{configured:!0,error:"CF API 限流(429)，请 15 分钟后再试"};if(pt&&pt.at&&a-pt.at<3e5)return pt.data;try{const t=new Date;t.setUTCHours(0,0,0,0);const e=new Date,o={query:"query getBillingMetrics($accountId: string!, $filter: AccountWorkersInvocationsAdaptiveFilter_InputObject) {\n        viewer { accounts(filter:{accountTag:$accountId}) {\n          workersInvocationsAdaptive(limit:10000, filter:$filter) { sum { requests subrequests } quantiles { cpuTimeP50 } }\n          pagesFunctionsInvocationsAdaptiveGroups(limit:1000, filter:$filter) { sum { requests } }\n        } }\n      }",variables:{accountId:n,filter:{datetime_geq:t.toISOString(),datetime_leq:e.toISOString()}}},s=await fetch("https://api.cloudflare.com/client/v4/graphql",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+r},body:JSON.stringify(o)});if(!s.ok)throw new Error("CF API HTTP "+s.status);const i=await s.json();if(i.errors&&i.errors.length)throw new Error("GraphQL: "+JSON.stringify(i.errors).slice(0,200));const l=i&&i.data&&i.data.viewer&&i.data.viewer.accounts||[];if(!l.length)throw new Error("未找到账户数据（检查账户 ID 与令牌权限）");const c=l[0],p=(c.workersInvocationsAdaptive||[])[0]||{},d=(c.pagesFunctionsInvocationsAdaptiveGroups||[]).reduce((t,e)=>t+(e&&e.sum&&e.sum.requests||0),0),u=(p.sum&&p.sum.requests||0)+d,f=p.quantiles&&p.quantiles.cpuTimeP50||0,h=p.sum&&p.sum.subrequests||0,m=Math.round(u/ut*1e3)/10,g={configured:!0,limit:ut,today:{requests:u,cpuTime:f,subrequests:h},percent:m,remaining:Math.max(0,ut-u),updatedAt:e.toISOString()};return pt={at:a,data:g},g}catch(t){const e=t&&t.message||String(t);return e.indexOf("429")>=0?(dt=a+9e5,pt&&pt.data?Object.assign({},pt.data,{stale:!0,error:"CF API 限流(429)，显示缓存数据（可能滞后）"}):{configured:!0,error:"CF API 限流(429)，请 15 分钟后再试"}):{configured:!0,error:e}}}function bt(t){if(!t||t.byteLength<1)throw new Error(_d("VkxFU1M=")+" 头部过短");const e=new DataView(t.buffer,t.byteOffset,t.byteLength);let n=0;if(0!==e.getUint8(0))throw new Error("不支持的 "+_d("VkxFU1M=")+" 版本");if(n+=17,n>=t.byteLength)throw new Error(_d("VkxFU1M=")+" 头部过短");const r=e.getUint8(n);if(n+=1,n+=r,n+3>t.byteLength)throw new Error(_d("VkxFU1M=")+" 头部过短");const a=e.getUint8(n);n+=1;const o=e.getUint16(n);n+=2;const s=e.getUint8(n);n+=1;const{addr:i,len:l}=function(t,e,n,r){if(1===r)return{addr:`${e.getUint8(n)}.${e.getUint8(n+1)}.${e.getUint8(n+2)}.${e.getUint8(n+3)}`,len:4};if(2===r){const r=e.getUint8(n),a=t.subarray(n+1,n+1+r);return{addr:O.decode(a),len:1+r}}if(3===r)return{addr:Q(t.subarray(n,n+16)),len:16};throw new Error("无法识别的地址类型")}(t,e,n,s);return n+=l,{command:a,port:o,addr:i,headerLength:n,earlyData:t.subarray(n)}}const vt=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];let yt="",xt="";function wt(t){return t!==yt&&(yt=t,xt=function(t){const e=D.encode(String(t)),n=8*e.length,r=1+(e.length+8>>6)<<6,a=new Uint8Array(r);a.set(e),a[e.length]=128;const o=new DataView(a.buffer);o.setUint32(r-8,Math.floor(n/4294967296),!1),o.setUint32(r-4,n>>>0,!1);let s=3238371032,i=914150663,l=812702999,c=4144912697,p=4290775857,d=1750603025,u=1694076839,f=3204075428;const h=(t,e)=>t>>>e|t<<32-e;for(let t=0;t<r;t+=64){const e=new Uint32Array(64);for(let n=0;n<16;n++)e[n]=o.getUint32(t+4*n,!1);for(let t=16;t<64;t++){const n=h(e[t-15],7)^h(e[t-15],18)^e[t-15]>>>3,r=h(e[t-2],17)^h(e[t-2],19)^e[t-2]>>>10;e[t]=e[t-16]+n+e[t-7]+r>>>0}let n=s,r=i,a=l,m=c,g=p,b=d,v=u,y=f;for(let t=0;t<64;t++){const o=y+(h(g,6)^h(g,11)^h(g,25))+(g&b^~g&v)+vt[t]+e[t]>>>0,s=n&r^n&a^r&a;y=v,v=b,b=g,g=m+o>>>0,m=a,a=r,r=n,n=o+((h(n,2)^h(n,13)^h(n,22))+s>>>0)>>>0}s=s+n>>>0,i=i+r>>>0,l=l+a>>>0,c=c+m>>>0,p=p+g>>>0,d=d+b>>>0,u=u+v>>>0,f=f+y>>>0}let m="";for(const t of[s,i,l,c,p,d,u])m+=(t>>>24&255).toString(16).padStart(2,"0"),m+=(t>>>16&255).toString(16).padStart(2,"0"),m+=(t>>>8&255).toString(16).padStart(2,"0"),m+=(255&t).toString(16).padStart(2,"0");return m}(t)),xt}const kt=["https://doh.pub/dns-query","https://dns.alidns.com/resolve","https://1.1.1.1/dns-query","https://8.8.8.8/dns-query","https://dns.google/dns-query","https://cloudflare-dns.com/dns-query"];function It(t){const e=String(t).split("::"),n=e[0]?e[0].split(":").filter(Boolean):[],r=e[1]?e[1].split(":").filter(Boolean):[],a=[...n,...Array(Math.max(0,8-n.length-r.length)).fill("0"),...r],o=new Uint8Array(16);return a.forEach((t,e)=>{const n=parseInt(t,16)||0;o[2*e]=n>>8&255,o[2*e+1]=255&n}),o}async function Pt(e,n,r){const a=t({hostname:e,port:n});try{await function(t,e){return Promise.race([t,new Promise((t,n)=>setTimeout(()=>n(new Error("连接超时（SYN 被静默丢弃）")),e||6e3))])}(a.opened,r||6e3)}catch(t){try{a.close()}catch(t){}throw t}return a}async function Ct(t,e){return Pt(t.hostname,t.port,e||6e3)}function St(t){const e=t instanceof Uint8Array?t:new Uint8Array(t),n=e.length,r=8*n,a=new Uint8Array(1+(n+8>>6)<<6);a.set(e),a[n]=128;const o=new DataView(a.buffer);o.setUint32(a.length-8,Math.floor(r/4294967296),!1),o.setUint32(a.length-4,r>>>0,!1);let s=1732584193,i=4023233417,l=2562383102,c=271733878,p=3285377520;const d=new Uint32Array(80);for(let t=0;t<a.length;t+=64){for(let e=0;e<16;e++)d[e]=o.getUint32(t+4*e,!1);for(let t=16;t<80;t++)d[t]=M(d[t-3]^d[t-8]^d[t-14]^d[t-16],1);let e=s,n=i,r=l,a=c,u=p;for(let t=0;t<80;t++){let o,s;t<20?(o=n&r|~n&a,s=1518500249):t<40?(o=n^r^a,s=1859775393):t<60?(o=n&r|n&a|r&a,s=2400959708):(o=n^r^a,s=3395469782);const i=M(e,5)+o+u+s+d[t]>>>0;u=a,a=r,r=M(n,30),n=e,e=i}s=s+e>>>0,i=i+n>>>0,l=l+r>>>0,c=c+a>>>0,p=p+u>>>0}const u=new Uint8Array(20),f=new DataView(u.buffer);return f.setUint32(0,s,!1),f.setUint32(4,i,!1),f.setUint32(8,l,!1),f.setUint32(12,c,!1),f.setUint32(16,p,!1),u}function At(t,e){let n=t;n.length>64&&(n=St(n));const r=new Uint8Array(64),a=new Uint8Array(64);for(let t=0;t<64;t++)r[t]=54^(t<n.length?n[t]:0),a[t]=92^(t<n.length?n[t]:0);return St(Dt(a,St(Dt(r,e))))}function Tt(t,e,n){const r=At(e&&e.length?e:new Uint8Array(20),t);let a=new Uint8Array(0),o=new Uint8Array(0);for(let t=1;o.length<n;t++){const e=new Uint8Array([t]);a=At(r,Dt(Dt(a,D.encode("ss-subkey")),e)),o=Dt(o,a)}return o.slice(0,n)}function Ut(t,e,n){const r=new Uint32Array(16);r[0]=1634760805,r[1]=857760878,r[2]=2036477234,r[3]=1797285236;const a=new DataView(t.buffer,t.byteOffset,32);for(let t=0;t<8;t++)r[4+t]=a.getUint32(4*t,!0);r[12]=e>>>0;const o=new DataView(n.buffer,n.byteOffset,12);r[13]=o.getUint32(0,!0),r[14]=o.getUint32(4,!0),r[15]=o.getUint32(8,!0);const s=r.slice(),i=(t,e,n,r)=>{s[t]=s[t]+s[e]>>>0,s[r]=M(s[r]^s[t],16),s[n]=s[n]+s[r]>>>0,s[e]=M(s[e]^s[n],12),s[t]=s[t]+s[e]>>>0,s[r]=M(s[r]^s[t],8),s[n]=s[n]+s[r]>>>0,s[e]=M(s[e]^s[n],7)};for(let t=0;t<10;t++)i(0,4,8,12),i(1,5,9,13),i(2,6,10,14),i(3,7,11,15),i(0,5,10,15),i(1,6,11,12),i(2,7,8,13),i(3,4,9,14);const l=new Uint8Array(64),c=new DataView(l.buffer);for(let t=0;t<16;t++)s[t]=s[t]+r[t]>>>0,c.setUint32(4*t,s[t],!0);return l}function Et(t,e,n,r){const a=r.slice(),o=Math.ceil(r.length/64);for(let r=0;r<o;r++){const o=Ut(t,n+r,e),s=64*r,i=Math.min(64,a.length-s);for(let t=0;t<i;t++)a[s+t]^=o[t]}return a}function $t(t,e){let n=0n,r=0n;for(let e=0;e<16;e++)n|=BigInt(t[e])<<BigInt(8*e),r|=BigInt(t[16+e])<<BigInt(8*e);n&=0x0ffffffc0ffffffc0ffffffc0fffffffn;let a=0n;const o=(1n<<130n)-5n;for(let t=0;t<e.length;t+=16){let r=1n;for(let n=Math.min(16,e.length-t)-1;n>=0;n--)r=r<<8n|BigInt(e[t+n]);a=(a+r)*n%o}a=a+r&(1n<<128n)-1n;const s=new Uint8Array(16);for(let t=0;t<16;t++)s[t]=Number(a>>BigInt(8*t)&0xffn);return s}async function Lt(t,e){const n=new Uint8Array(12),r=()=>{const t=n.slice();for(let e=11;e>=0&&(t[e]++,0===t[e]);e--);return t};if(_d("Q0hBQ0hBMjA=")+"-POLY1305"===t)return{seal:t=>function(t,e,n){const r=new Uint8Array(0),a=Et(t,e,0,new Uint8Array(32)),o=Et(t,e,1,n),s=t=>new Uint8Array((16-t%16)%16),i=t=>{const e=new Uint8Array(8),n=new DataView(e.buffer);return n.setUint32(0,t>>>0,!0),n.setUint32(4,Math.floor(t/4294967296),!0),e},l=Dt(r,Dt(s(r.length),Dt(o,Dt(s(o.length),Dt(i(r.length),i(o.length))))));return Dt(o,$t(a,l))}(e,r(),t),open(t){const n=function(t,e,n){if(n.length<16)throw new Error("SS AEAD 数据过短");const r=n.subarray(0,n.length-16),a=n.subarray(n.length-16),o=new Uint8Array(0),s=t=>new Uint8Array((16-t%16)%16),i=t=>{const e=new Uint8Array(8),n=new DataView(e.buffer);return n.setUint32(0,t>>>0,!0),n.setUint32(4,Math.floor(t/4294967296),!0),e},l=$t(Et(t,e,0,new Uint8Array(32)),Dt(o,Dt(s(o.length),Dt(r,Dt(s(r.length),Dt(i(o.length),i(r.length)))))));let c=0;for(let t=0;t<16;t++)c|=l[t]^a[t];return 0!==c?null:Et(t,e,1,r)}(e,r(),t);if(!n)throw new Error("SS AEAD 解密失败（密码/加密方式与服务器不匹配）");return n}};const a=await crypto.subtle.importKey("raw",e,{name:t},!1,["encrypt","decrypt"]);return{seal:async e=>new Uint8Array(await crypto.subtle.encrypt({name:t,iv:r()},a,e)),async open(e){try{return new Uint8Array(await crypto.subtle.decrypt({name:t,iv:r()},a,e))}catch(t){throw new Error("SS AEAD 解密失败（密码/加密方式与服务器不匹配）")}}}}async function Nt(t,e){const n=new Uint8Array([e.length>>8&255,255&e.length]);return Dt(await t.seal(n),await t.seal(e))}function Dt(t,e){const n=new Uint8Array(t.length+e.length);return n.set(t,0),n.set(e,t.length),n}function Ot(t,e){t:for(let n=0;n<=t.length-e.length;n++){for(let r=0;r<e.length;r++)if(t[n+r]!==e[r])continue t;return n}return-1}const __D="cmli"+"ussss"+".net";const Rt={HK:_d("cHJveHlpcA==")+".hk."+__D,US:_d("cHJveHlpcA==")+".us."+__D,SG:_d("cHJveHlpcA==")+".sg."+__D,JP:_d("cHJveHlpcA==")+".jp."+__D,KR:_d("cHJveHlpcA==")+".kr."+__D,DE:_d("cHJveHlpcA==")+".de."+__D,SE:_d("cHJveHlpcA==")+".se."+__D,NL:_d("cHJveHlpcA==")+".nl."+__D,FI:_d("cHJveHlpcA==")+".fi."+__D,GB:_d("cHJveHlpcA==")+".gb."+__D,Oracle:_d("cHJveHlpcA==")+".oracle."+__D,DigitalOcean:_d("cHJveHlpcA==")+".digitalocean."+__D,Vultr:_d("cHJveHlpcA==")+".vultr."+__D,Multacom:_d("cHJveHlpcA==")+".multacom."+__D},_t=(()=>{const t=Object.create(null),e=(e,n)=>{for(const r of[].concat(n))t[r]=e};return e("HK","HKG"),e("AU",["SYD","MEL","BNE","PER","ADL","CBR"]),e("SG","SIN"),e("JP",["NRT","HND","KIX","TYO","OSA","NGO","CTS","FUK","OKA"]),e("KR",["ICN","SEL","PUS"]),e("DE",["FRA","MUC","DUS","BER","HAM","STR","VIE","ZRH","CDG","MAD","MXP","FCO","PRG","WAW"]),e("SE","ARN"),e("NL","AMS"),e("FI","HEL"),e("GB",["LHR","LGW","MAN","EDI"]),e("US",["LAX","SJC","SFO","SEA","PDX","SAN","LAS","PHX","SLC","DEN","DFW","IAH","AUS","ORD","MSP","DTW","STL","MCI","ATL","MIA","MCO","BNA","CLT","IAD","BOS","EWR","JFK","PHL","YYZ","YVR","YUL","MEX","GRU"]),t})(),Mt=new Map;async function Ft(t,e){if(e=e||443,Y(t))return[{hostname:t,port:e}];const n=t+":"+e,r=Date.now(),a=Mt.get(n);if(a&&r-a.t<3e5)return a.ips;const o=["https://cloudflare-dns.com/dns-query","https://dns.alidns.com/resolve","https://doh.pub/dns-query"],s=async(e,n)=>{for(const r of o)try{const a=await oe(r+"?name="+encodeURIComponent(t)+"&type="+e,{headers:{accept:"application/dns-json"}},4e3);if(!a||!a.ok)continue;return((await a.json()).Answer||[]).filter(t=>t.type===n).map(t=>t.data)}catch(t){}return[]},i=await s("TXT",16);let l=[];for(const t of i){const n=String(t).replace(/^"|"$/g,"").replace(/\\010/g,",").replace(/\n/g,",").trim();if(!n)continue;if("@"+_d("ZWR0dW5uZWw=")===n)break;const r=n.split(/[,;\s]+/).map(t=>t.trim()).filter(Boolean),a=[];for(const t of r){const{host:n,port:r}=z(t,e);Y(n)&&a.push({hostname:n,port:r})}if(a.length){l=a;break}}l.length||(l=(await s("A",1)).filter(t=>/^\d+\.\d+\.\d+\.\d+$/.test(t)).map(t=>({hostname:t,port:e}))),l.length||(l=(await s("AAAA",28)).filter(t=>Y(t)).map(t=>({hostname:t,port:e})));const c=new Set,p=l.filter(t=>{const e=t.hostname+":"+t.port;return!c.has(e)&&(c.add(e),!0)});return p.length&&Mt.set(n,{t:r,ips:p}),p}async function zt(t){if(!t||!t.length)return null;let e=!1;return await new Promise(n=>{let r=t.length;const a=t=>{if(r--,t)if(e)try{t.close()}catch(t){}else e=!0,n(t);else r<=0&&!e&&n(null)};for(const e of t)Promise.resolve().then(e).then(t=>a(t&&t.readable?t:null),()=>a(null))})}async function qt(t,e,n){let r=null;const a=t=>{if(t&&t!==r)try{t.close()}catch(t){}},o=t?Promise.resolve().then(t).then(t=>t&&t.readable?t:null,()=>null):Promise.resolve(null),s=e&&e.length?zt(e).then(t=>t&&t.readable?t:null,()=>null):Promise.resolve(null);let i=null;const l=await Promise.race([o,new Promise(t=>{i=setTimeout(()=>t("__GRACE__"),n)})]);if(i&&(clearTimeout(i),i=null),l&&"__GRACE__"!==l)return r=l,s.then(a),r;const c=await s;if(c)return r=c,o.then(a),r;const p=await o;return p?(r=p,r):null}function jt(t){return!t||t.byteLength<3?"unknown":22===t[0]&&3===t[1]?"tls":"nontls"}async function Bt(t,e,n,r,a){const o=function(t){if(!t)return null;let e=_d("c29ja3M1"),n=String(t).trim();const r=n.match(_r2);if(r&&(e=r[1].toLowerCase(),n=r[2]),"ss"===e)return function(t){let e=t,n="";const r=t.indexOf("#");r>=0&&(e=t.slice(0,r));const a=e.lastIndexOf("@");if(a>=0)n=e.slice(0,a),e=e.slice(a+1);else{const t=st(e);if(t&&t.includes("@")){const r=t.lastIndexOf("@");n=t.slice(0,r),e=t.slice(r+1)}}let o="",s="";if(n){let t=st(n)||n;try{t=decodeURIComponent(t)}catch(t){}const e=t.indexOf(":");e>0?(o=t.slice(0,e),s=t.slice(e+1)):o=t}const{host:i,port:l}=z(e,8388);return{type:"ss",host:i,port:l,method:o,password:s}}(n);let a="",o="";if(n.includes("@")){const[t,e]=n.split("@"),r=t=>{try{return decodeURIComponent(t)}catch(e){return t}},s=t.indexOf(":");s>=0?(a=r(t.slice(0,s)),o=r(t.slice(s+1))):a=r(t),n=e}const s="http"===e?80:"https"===e?443:1080,{host:i,port:l}=z(n,s);return{type:e,host:i,port:l,user:a,pass:o}}(e.outboundProxy),s=e.outboundMode||"",i="nontls"!==a,l=o?"http"===o.type||"https"===o.type?t=>async function(t,e){const n=await Pt(t.host,t.port,6e3),r=n.writable.getWriter(),a=n.readable.getReader();let o="";t.user&&(o=_d("UHJveHktQXV0aG9yaXphdGlvbg==")+": Basic "+function(t){let e="";for(let n=0;n<t.length;n+=32768)e+=String.fromCharCode(...t.subarray(n,n+32768));return btoa(e)}(D.encode(`${t.user}:${t.pass}`))+"\r\n");const s=`${_d("Q09OTkVDVA==")} ${e.hostname}:${e.port} HTTP/1.1\r\nHost: ${e.hostname}:${e.port}\r\n${o}\r\n`;await r.write(D.encode(s));const{head:i,leftover:l}=await async function(t){let e=new Uint8Array(0);for(;e.length<65536;){const{done:n,value:r}=await t.read();if(n)break;e=Dt(e,r);const a=Ot(e,[13,10,13,10]);if(a>=0)return{head:O.decode(e.subarray(0,a)),leftover:e.subarray(a+4)}}return{head:O.decode(e),leftover:new Uint8Array(0)}}(a);if(!/^HTTP\/\d\.\d\s+2\d\d/i.test(i))throw new Error(_d("Q09OTkVDVA==")+" 失败: "+i.split("\r\n")[0]);return l&&l.byteLength>0&&(n._preamble=l),r.releaseLock(),a.releaseLock(),n}(o,t):"ss"===o.type?t=>async function(t){const e=function(t){const e=String(t||"").toLowerCase().replace(/_/g,"-");return_d("YWVzLTEyOC1nY20=")===e||"aes-128gcm"===e?{name:"AES-GCM",keyLen:16}:_d("YWVzLTI1Ni1nY20=")===e||"aes-256gcm"===e?{name:"AES-GCM",keyLen:32}:_d("Y2hhY2hhMjA=")+"-ietf-poly1305"===e||_d("Y2hhY2hhMjA=")+"-poly1305"===e||_d("Y2hhY2hhMjA=")+"poly1305"===e?{name:_d("Q0hBQ0hBMjA=")+"-POLY1305",keyLen:32}:null}(t.method);if(!e)throw new Error("不支持的 SS 加密方式: "+(t.method||"（未指定）"));if(!t.password)throw new Error("SS 出站缺少密码");const n=await Pt(t.host,t.port,6e3),r=n.writable.getWriter(),a=n.readable.getReader();let o=new Uint8Array(0);const s=async t=>{for(;o.length<t;){const{done:t,value:e}=await a.read();if(t)throw new Error("SS 连接被关闭");o=Dt(o,e)}const e=o.slice(0,t);return o=o.subarray(t),e},i=new Uint8Array(await crypto.subtle.digest("SHA-256",D.encode(t.password))),l=crypto.getRandomValues(new Uint8Array(16)),c=await Lt(e.name,await Tt(i,l,e.keyLen));return await r.write(l),await r.write(await Nt(c,new Uint8Array(0))),{readable:new ReadableStream({async start(t){try{const n=await s(16),r=await Lt(e.name,await Tt(i,n,e.keyLen));for(;;){const e=await r.open(await s(18)),n=e[0]<<8|e[1];if(n>16384)throw new Error("SS 分片长度非法 "+n);const a=await r.open(await s(n+16));n>0&&t.enqueue(a)}}catch(e){try{t.error(e)}catch(t){}}}}),writable:new WritableStream({async write(t){const e=t instanceof Uint8Array?t:new Uint8Array(t);for(let t=0;t<e.length;t+=16384)await r.write(await Nt(c,e.subarray(t,Math.min(e.length,t+16384))))},close(){try{r.close()}catch(t){}},abort(){try{r.abort()}catch(t){}}}),close(){try{n.close()}catch(t){}}}}(o):t=>async function(t,e){const n=await Pt(t.host,t.port,6e3),r=n.writable.getWriter(),a=n.readable.getReader();let o=new Uint8Array(0);const s=async t=>{for(;o.length<t;){const{done:t,value:e}=await a.read();if(t)throw new Error("连接被关闭");o=Dt(o,e)}const e=o.slice(0,t);return o=o.subarray(t),e},i=t.user?[5,2,0,2]:[5,1,0];await r.write(new Uint8Array(i));const l=await s(2);if(5!==l[0]||255===l[1])throw new Error(_d("U09DS1M1")+" 握手失败");if(2===l[1]){if(!t.user)throw new Error(_d("U09DS1M1")+" 服务器要求认证但未提供凭据");const e=D.encode(t.user),n=D.encode(t.pass),a=new Uint8Array([1,e.length,...e,n.length,...n]);if(await r.write(a),0!==(await s(2))[1])throw new Error(_d("U09DS1M1")+" 认证失败")}else if(0!==l[1])throw new Error(_d("U09DS1M1")+" 不支持的认证方法 "+l[1]);const c=D.encode(e.hostname);let p;p=/^\d+\.\d+\.\d+\.\d+$/.test(e.hostname)?new Uint8Array([5,1,0,1,...e.hostname.split(".").map(Number),e.port>>8&255,255&e.port]):new Uint8Array([5,1,0,3,c.length,...c,e.port>>8&255,255&e.port]),await r.write(p);const d=await s(4);if(0!==d[1])throw new Error(_d("U09DS1M1")+" 连接失败 码"+d[1]);if(1===d[3])await s(6);else if(3===d[3]){const t=(await s(1))[0];await s(t+2)}else 4===d[3]&&await s(18);return o.byteLength>0&&(n._preamble=o),r.releaseLock(),a.releaseLock(),n}(o,t):null;let c;const p=async t=>{try{const e=await t();if(e)return e}catch(t){c=t}return null},d=()=>{throw c||new Error("所有出站方式均失败")},u=e.proxyIP?z(e.proxyIP,443):null;if(u&&u.host&&i){let t=await Ft(u.host,u.port);t.length||(t=[{hostname:u.host,port:u.port}]);const e=await zt(t.slice(0,4).map(t=>()=>p(()=>Ct(t,4e3))));if(e)return e}const f={hostname:t.addr,port:t.port},h=()=>{if(!i)return[];const t=function(t){const e=String(t||"").toUpperCase();return e?_t[e]?_t[e]:{HK:"HK",SG:"SG",JP:"JP",KR:"KR",DE:"DE",SE:"SE",NL:"NL",FI:"FI",GB:"GB",US:"US",AU:"AU"}[e]?e:"US":"US"}(n),e=[t,...Object.keys(Rt).filter(e=>e!==t)].slice(0,2);return e.map((t,e)=>async()=>{const n=Rt[t];if(!n)return null;let r=[];try{r=await Ft(n,443)}catch(t){return null}if(!r.length)return null;const a=r.slice(0,0===e?2:1);return await zt(a.map(t=>()=>p(()=>Ct(t,4e3))))})},m=()=>p(()=>Ct(f,4e3)),g=l?()=>p(()=>l(f)):null,b=v(t.addr)?0:300,y=()=>qt(m,h().slice(0,3),b);if("only"===s&&g){const t=await g();if(t)return t;return await qt(null,h().slice(0,4),0)||d()}if(""===s&&g){const t=await g();if(t)return t;return await y()||d()}const x=await y();if(x)return x;if(g){const t=await g();if(t)return t}return d()}async function Gt(t,e){const n=new WebSocketPair,[r,a]=Object.values(n);try{a.accept({allowHalfOpen:!0})}catch(t){a.accept()}a.binaryType="arraybuffer";let o=null,s=null,i=!1,l=null,c=null,p=!1;const d=t=>{try{a.send(t)}catch(t){}},u=async(n,r)=>{if(n&&n.byteLength&&(l=l?Dt(l,n):n),!l)return;if(l.byteLength>65536)throw new Error("握手头超过 64KB，关闭连接");let f,h;try{let t=function(t,e){if(!e.enableTrojan||!t||t.byteLength<58)return!1;const n=t.subarray(0,56);if(O.decode(n).toLowerCase()===wt(e.trojanPassword||e.uuid))return!0;if(13===t[56]&&10===t[57]){for(let t=0;t<56;t++){const e=n[t];if(!(e>=48&&e<=57||e>=97&&e<=102||e>=65&&e<=70))return!1}return!0}return!1}(l,e);if(!t&&l.byteLength>0&&0!==l[0]&&l.byteLength<58)return;h=!t,f=t?function(t){if(!t||t.byteLength<66)throw new Error(_d("VHJvamFu")+" 头部过短");const e=new DataView(t.buffer,t.byteOffset,t.byteLength);let n=58;const r=e.getUint8(n);n+=1;const a=e.getUint8(n);let o,s;if(n+=1,1===a)o=`${e.getUint8(n)}.${e.getUint8(n+1)}.${e.getUint8(n+2)}.${e.getUint8(n+3)}`,s=4;else if(3===a){const r=e.getUint8(n);o=O.decode(t.subarray(n+1,n+1+r)),s=1+r}else{if(4!==a)throw new Error("无法识别的地址类型");o=Q(t.subarray(n,n+16)),s=16}n+=s;const i=e.getUint16(n);return n+=2,n+=2,{command:r,port:i,addr:o,password:O.decode(t.subarray(0,56)),headerLength:n}}(l):bt(l)}catch(t){if(/头部过短/.test(t.message||""))return;throw t}!p&&h&&2!==f.command&&(p=!0,d(new Uint8Array([0,0])));const m=jt(l.byteLength>f.headerLength?l.subarray(f.headerLength):null);if("unknown"===m&&!r)return void(c||(c=setTimeout(()=>{c=null,u(new Uint8Array(0),!0).catch(t=>{try{a.close(1011,String(t&&t.message||t))}catch(t){}})},80)));if(c&&(clearTimeout(c),c=null),i)return;if(i=!0,2===f.command){try{const t=l.subarray(f.headerLength);if(53===f.port&&t.byteLength>=12){const e=await async function(t){if(!t||t.byteLength<17)return null;const e=new DataView(t.buffer,t.byteOffset,t.byteLength),n=e.getUint16(0);if(32768&e.getUint16(2))return null;if(1!==e.getUint16(4))return null;let r=12,a=[];for(;r<t.byteLength;){const n=e.getUint8(r);if(0===n){r++;break}if(!(192&~n)){r+=2;break}if(r+1+n>t.byteLength)return null;a.push(O.decode(t.subarray(r+1,r+1+n))),r+=1+n}if(r+4>t.byteLength||0===a.length)return null;const o=e.getUint16(r),s=e.getUint16(r+2),i=r+4;if(1!==o&&28!==o)return null;const l=a.join("."),c=t.subarray(12,i);let p=null;for(const t of kt)try{const e=await oe(t+"?name="+encodeURIComponent(l)+"&type="+o,{headers:{accept:"application/dns-json"}},5e3);if(!e||!e.ok)continue;const n=await e.json();if(!n||0!==n.Status)continue;const r=(n.Answer||[]).filter(t=>t.type===o&&(1===t.type?Y(String(t.data)):/^[0-9a-fA-F:]+$/.test(String(t.data))));if(r.length){p=r;break}}catch(t){}if(!p)return null;const d=new Uint8Array(12),u=new DataView(d.buffer);u.setUint16(0,n),u.setUint16(2,33152),u.setUint16(4,1),u.setUint16(6,p.length);const f=[d,c];for(const t of p){const e=String(t.data),n=1===t.type?Uint8Array.from(e.split(".").map(Number)):It(e);if(n.length!==(1===t.type?4:16))continue;const r=new Uint8Array(10),a=new DataView(r.buffer);a.setUint16(0,49164),a.setUint16(2,t.type),a.setUint16(4,0===s?1:s),a.setUint32(6,Number(t.TTL)||300),f.push(r,new Uint8Array([n.length>>8&255,255&n.length]),n)}let h=0;f.forEach(t=>h+=t.byteLength);const m=new Uint8Array(h);let g=0;for(const t of f)m.set(t,g),g+=t.byteLength;return m}(t);e&&d(e)}}catch(t){}try{a.close(1e3)}catch(t){}return}const g=await Bt(f,e,t.cf&&t.cf.colo,0,m);o=g,s=g.writable.getWriter(),g._preamble&&g._preamble.byteLength>0&&d(g._preamble),l&&l.byteLength>f.headerLength&&await s.write(l.subarray(f.headerLength)),l=null,async function(t,e,n){try{for(;;){const{done:n,value:r}=await t.read();if(n)break;e(r)}}catch(t){}try{n&&n()}catch(t){}}(g.readable.getReader(),d,()=>{try{a.close(1e3)}catch(t){}})},f=function(t,e){if(!t)return null;const n=String(t).trim();if(!n||n.length>8192)return null;if(!/^[A-Za-z0-9\-_+/=]+$/.test(n))return null;let r=null;try{const t=n.replace(/-/g,"+").replace(/_/g,"/"),e=t.length%4?"=".repeat(4-t.length%4):"",a=atob(t+e);r=new Uint8Array(a.length);for(let t=0;t<a.length;t++)r[t]=a.charCodeAt(t)}catch(t){return null}if(!r.byteLength||r.byteLength>6144)return null;if(r.byteLength>=17&&0===r[0]){const t=function(t){const e=String(t||"").replace(/-/g,"");if(32!==e.length)return null;const n=new Uint8Array(16);for(let t=0;t<16;t++){const r=parseInt(e.substr(2*t,2),16);if(isNaN(r))return null;n[t]=r}return n}(e.uuid);if(!t)return r;for(let e=0;e<16;e++)if(r[e+1]!==t[e])return null;return r}return e.enableTrojan&&r.byteLength>=58&&13===r[56]&&10===r[57]&&O.decode(r.subarray(0,56)).toLowerCase()===wt(e.trojanPassword||e.uuid)?r:null}(t.headers.get("sec-websocket-protocol"),e);f&&u(f).catch(t=>{try{a.close(1011,String(t&&t.message||t))}catch(t){}}),a.addEventListener("message",async t=>{try{const e="string"==typeof t.data?D.encode(t.data):new Uint8Array(t.data);i?s?await s.write(e):l=l?Dt(l,e):e:await u(e)}catch(t){try{a.close(1011,String(t&&t.message||t))}catch(t){}}});const h=()=>{if(c&&(clearTimeout(c),c=null),o){try{o.close()}catch(t){}o=null}};return a.addEventListener("close",h),a.addEventListener("error",h),new Response(null,{status:101,webSocket:r})}function Ht(t){const e=t instanceof Uint8Array?t:new Uint8Array(t);try{return new TextDecoder("utf-8",{fatal:!0}).decode(e)}catch(t){}try{return new TextDecoder("gbk").decode(e)}catch(t){}return(new TextDecoder).decode(e)}function Kt(t){const e=new Set,n=[],r=(t,r,a)=>{Y(t)&&(e.has(t)||(e.add(t),n.push({ip:t,port:r||443,name:a||""})))};ot(t).forEach(t=>r(t.ip,t.port,t.name));const a=/\b(?:\d{1,3}\.){3}\d{1,3}(?::\d{1,5})?\b/g;let o;for(;o=a.exec(t);){const{host:t,port:e}=z(o[0],443);t&&r(t,e,"")}const s=/[0-9a-fA-F:]+/g;for(;o=s.exec(t);){const t=o[0];t.includes(":")&&t.split(":").length>=3&&Y(t)&&r(t,443,"")}return n}const Wt={t:0,ips:null};async function Vt(t){if(t=Math.max(1,parseInt(t)||150),Date.now()-Wt.t<6e5)return Wt.ips;const e=await oe("https://stock.hostmonit.com/CloudFlareYes",{headers:{"User-Agent":"Mozilla/5.0"}},6e3);if(e&&e.ok){const n=Kt(await e.text()).filter(t=>t.ip&&v(t.ip)),r=new Set,a=[];for(const e of n)if(!r.has(e.ip)&&(r.add(e.ip),a.push(e),a.length>=t))break;return Wt.t=Date.now(),Wt.ips=a,a}return null}async function Jt(t){const e=[],n={preset:0,presetErr:"",custom:0,customErr:"",cidr:0},r="custom"===(t=t||{}).source||!!t.sourceURL,a=n=>{n&&n.ip&&(r||v(n.ip))&&e.push({ip:n.ip,port:n.port||t.port||443,name:n.name||""})};if(t.source&&N[t.source]){const e=await oe(N[t.source].url,{headers:{"User-Agent":"Mozilla/5.0"}},6e3);if(e&&e.ok){const t=Kt(await e.text());t.forEach(a),n.preset=t.length}else n.presetErr=e?"HTTP "+e.status:"超时/网络错误"}if(t.sourceURL){const e=se(t.sourceURL).filter(t=>/^https?:\/\//i.test(t)).slice(0,50);if(e.length){const t=await Promise.all(e.map(async t=>{try{const e=await oe(t,{headers:{"User-Agent":"Mozilla/5.0"}},6e3);return e&&e.ok?{url:t,arr:Kt(await e.text()),err:""}:{url:t,arr:[],err:e?"HTTP "+e.status:"超时/网络错误"}}catch(e){return{url:t,arr:[],err:e&&e.message||String(e)}}}));let r=0;const o=[];for(const e of t)e.err?o.push(e.url.replace(/^https?:\/\//,"").slice(0,40)+" → "+e.err):(e.arr.forEach(a),n.custom+=e.arr.length,r++);o.length&&(n.customErr=(r?"部分源失败: ":"")+o.join("；"))}else n.customErr="未提供有效 URL（多个用换行或分号隔开）"}const o=new Set,s=[];for(const t of e)o.has(t.ip)||(o.add(t.ip),s.push(t));if(s.length<(t.count||20)){let e=(t.count||20)-s.length;try{const n=await Ve();for(const r of n){if(e<=0)break;o.has(r.ip)||v(r.ip)&&(o.add(r.ip),s.push({ip:r.ip,port:t.port||r.port||443,name:r.name||""}),e--)}}catch(t){}n.bestcf=(t.count||20)-s.length-e}if(!1!==t.useCidr&&s.length<(t.count||20)){const e=(t.count||20)-s.length,r=at(u,3*e);let a=0;for(const n of r){if(a>=e)break;o.has(n)||(o.add(n),s.push({ip:n,port:t.port||443,name:""}),a++)}n.cidr=a}return{candidates:s,stats:n}}function Xt(e,n,r){return new Promise(a=>{const o=Date.now();let s,i=!1;const l=(t,r)=>{if(!i){i=!0,clearTimeout(c);try{s&&s.close()}catch(t){}a({ip:e,port:n,ok:t,latency:r})}},c=setTimeout(()=>l(!1,-1),r);try{s=t({hostname:e,port:n})}catch(t){return l(!1,-1)}s.opened.then(()=>l(!0,Date.now()-o)).catch(()=>l(!1,-1))})}function Yt(t){return String(t).replace(/%/g,"%25").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/ /g,"%20")}function Qt(t,e,n,r){return(e?1:0)+(n?1:0)+(r?1:0)<=1?{v:t,t:t,x:t}:{v:t,t:t+".T",x:t+".X"}}function Zt(t,e,n,r,a={}){const o=t.host,s=e.includes(":")&&!e.startsWith("[")?`[${e}]`:e,i=!L.has(Number(n)),l=encodeURIComponent;let c=_d("ZW5jcnlwdGlvbj0=")+"none";c+=i?"&"+_d("c2VjdXJpdHk9")+"tls&sni="+l(o)+"&fp=chrome":"&"+_d("c2VjdXJpdHk9")+"none",c+="&host="+l(o);const p=_d("eGh0dHA=")===a.type&&i;return p?(c+="&type="+_d("eGh0dHA=")+"&mode="+_d("c3RyZWFtLW9uZQ=="),c+="&extra="+l(JSON.stringify(function(t){const e=t.uuid||"";return{xPaddingObfsMode:!0,xPaddingMethod:"tokenish",xPaddingPlacement:"queryInHeader",xPaddingHeader:e.slice(1,7),xPaddingKey:"_"+e.slice(25,31)}}(t)))):c+="&"+_d("dHlwZT13cw=="),c+="&path="+l("/"+t.path+(!p&&i?"?ed=2048":"")),t.alpn&&(c+="&alpn="+t.alpn.split(",").map(t=>t.trim().replace(/[&#=]/g,"")).filter(Boolean).join(",")),t.ech&&(c+="&ech="+l((t.echHost||"cloudflare-ech.com")+"+"+(t.echDns||"https://223.5.5.5/dns-query"))),`${_d("dmxlc3M=")}://${t.uuid}@${s}:${n}?${c}#${Yt(r)}`}function te(t,e,n,r){const a=t.host,o=e.includes(":")&&!e.startsWith("[")?`[${e}]`:e,s=encodeURIComponent,i=!L.has(Number(n)),l="/"+t.path+(i?"?ed=2048":"");let c=i?_d("c2VjdXJpdHk9")+"tls&sni="+s(a)+"&fp=chrome&host="+s(a)+"&"+_d("dHlwZT13cw==")+"&path="+s(l):_d("c2VjdXJpdHk9")+"none&host="+s(a)+"&"+_d("dHlwZT13cw==")+"&path="+s(l);return t.alpn&&i&&(c+="&alpn="+t.alpn.split(",").map(t=>t.trim().replace(/[&#=]/g,"")).filter(Boolean).join(",")),t.ech&&i&&(c+="&ech="+s((t.echHost||"cloudflare-ech.com")+"+"+(t.echDns||"https://223.5.5.5/dns-query"))),`${_d("dHJvamFu")}://${t.trojanPassword||t.uuid}@${o}:${n}?${c}#${Yt(r)}`}const ee=new Map,ne=18e5,re=new Map;function ae(t,e){const n=Be;if(!(n&&n.K&&"function"==typeof n.K.put&&e&&e.length))return;const r=re.get(t)||0;if(Date.now()-r<ne)return;if(!K())return;re.size>200&&re.clear(),re.set(t,Date.now());const a=JSON.stringify({t:Date.now(),ips:e.slice(0,300)}),o=n.K.put(t,a,{expirationTtl:1800}).catch(()=>{});n._ctx&&"function"==typeof n._ctx.waitUntil&&n._ctx.waitUntil(o)}function oe(t,e,n){return new Promise(r=>{const a=new AbortController,o=setTimeout(()=>a.abort(),n);fetch(t,Object.assign({},e,{signal:a.signal})).then(t=>{clearTimeout(o),r(t)}).catch(()=>{clearTimeout(o),r(null)})})}function se(t){const e=[];let n="";const r=t=>/^[a-z][a-z0-9+.-]*:\/\//i.test(t),a=t=>/^\[[0-9a-f:]+\](?::\d{1,5})?(?:[?#].*)?$/i.test(t)||/^(?:\d{1,3}(?:\.\d{1,3}){3}|[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+)(?::\d{1,5})?(?:[?#].*)?$/i.test(t);for(const o of String(t||"").split(/[\n;]+/)){for(const t of o.split(",")){const o=t.trim();o&&(n?r(o)||a(o)?(e.push(n),n=o):o.includes("=")||/^[A-Za-z0-9]{1,6}$/.test(o)?n=n+","+o:(e.push(n),n=o):n=o)}n&&(e.push(n),n="")}return e}async function ie(t,e=100,n=300,r=!1,a=!0,o=!1){const s=se(t).map(t=>t.replace(/^\*\./,"")),i=Date.now(),l=["https://cloudflare-dns.com/dns-query","https://dns.alidns.com/resolve"],c=async(t,e,n)=>{for(const r of l)try{const a=await oe(r+"?name="+encodeURIComponent(t)+"&type="+e,{headers:{accept:"application/dns-json"}},4e3);if(!a||!a.ok)continue;return((await a.json()).Answer||[]).filter(t=>t.type===n&&("A"===e?/^\d+\.\d+\.\d+\.\d+$/.test(t.data):/^[0-9a-fA-F:]+$/.test(t.data))).map(t=>t.data)}catch(t){}return[]},p=await Promise.all(s.map(async t=>{if(t.includes("://")){if(t.startsWith("sub://")){let e=t.slice(6);if(/^[A-Za-z0-9+/=]+$/.test(e)&&e.length%4==0)try{const t=atob(e);/^https?:\/\//i.test(t)&&(e=t)}catch(t){}/^https?:\/\//i.test(e)||(e="https://"+e),t=e}const s="url:"+t+(r?"|rf":"")+(a?"":"|raw"),l="srccache:"+F(s).slice(0,24),c=ee.get(s);if(c&&i-c.t<6e5)return c.ips.slice(0,e);const p=await async function(t){const e=Be;if(!e||!e.K||"function"!=typeof e.K.get)return null;try{const n=await e.K.get(t);if(!n)return null;const r=JSON.parse(n);return!r||!Array.isArray(r.ips)||!r.ips.length||Date.now()-(r.t||0)>ne?null:r.ips}catch(t){return null}}(l);if(p)return ee.set(s,{t:i,ips:p}),p.slice(0,e);try{const c=await oe(t,{},6e3);if(!c||!c.ok)throw new Error("unreachable");let p=Ht(await c.arrayBuffer());if(/^[A-Za-z0-9+/=\s]{40,}$/.test(p.slice(0,2e3))&&p.replace(/\s+/g,"").length%4==0)try{const t=atob(p.replace(/\s+/g,""));p=Ht(Uint8Array.from(t,t=>t.charCodeAt(0)))}catch(t){}const d=new Set,u={},h=[],g=(n=t,C.test(String(n||""))),b=t=>!a||v(t)||g,x=p.trim().split(/\r?\n/).map(t=>t.trim()).filter(Boolean);if(x.length>1&&x[0].includes(",")){const t=x[0].split(",").map(t=>t.trim()),n=t.includes("IP地址")&&t.includes("端口"),r=t.some(t=>t.includes("IP"))&&t.some(t=>t.includes("延迟"))&&t.some(t=>t.includes("下载速度"));if(n||r){const n=t.findIndex(t=>t.includes("IP")),r=t.indexOf("端口"),a=t.findIndex(t=>t.includes("延迟")),o=t.findIndex(t=>t.includes("下载速度")),c=t.indexOf("国家")>-1?t.indexOf("国家"):t.indexOf("城市")>-1?t.indexOf("城市"):t.indexOf("数据中心"),p=t.indexOf("TLS");for(const t of x.slice(1)){if(h.length>=e)break;const s=t.split(",").map(t=>t.trim());if(-1!==p&&s[p]&&"true"!==s[p].toLowerCase())continue;const i=(s[n]||"").match(/(\[[0-9a-fA-F:]+\]|\d{1,3}(?:\.\d{1,3}){3})/);if(!i)continue;const l=i[1].replace(/^\[|\]$/g,""),f=-1!==r&&s[r]?parseInt(s[r]):443,m=l+":"+f;if(d.has(m))continue;if(!b(l))continue;d.add(m);let v=-1!==c&&s[c]?s[c]:"";v||-1===a||-1===o||(v="CF优选 "+(s[a]||"")+"ms "+(s[o]||"")+"MB/s"),v?(u[v]=(u[v]||0)+1,h.push({ip:l,port:f,name:v+"-"+String(u[v]).padStart(2,"0"),...g?{relay:!0}:{}})):h.push({ip:l,port:f,name:"",...g?{relay:!0}:{}})}return ee.set(s,{t:i,ips:h}),ae(l,h),h.slice()}}if(p.includes("<tr")&&p.includes("data-label")){for(const t of p.match(/<tr[\s\S]*?<\/tr>/g)||[]){if(h.length>=e)break;const n={};for(const e of t.match(/<td[^>]*>[\s\S]*?<\/td>/g)||[]){const t=e.match(/data-label="([^"]*)"[^>]*>([\s\S]*?)<\/td>/);t&&(n[t[1]]=t[2].replace(/<[^>]+>/g,"").trim())}const r=(n["优选地址"]||"").match(/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?/);if(!r)continue;const a=r[1],o=r[2]?parseInt(r[2]):443,s=a+":"+o;if(d.has(s))continue;if(!b(a))continue;d.add(s);const i=(n["线路名称"]||n["数据中心"]||"线路").trim();i?(u[i]=(u[i]||0)+1,h.push({ip:a,port:o,name:i+"-"+String(u[i]).padStart(2,"0"),...g?{relay:!0}:{}})):h.push({ip:a,port:o,name:"",...g?{relay:!0}:{}})}return ee.set(s,{t:i,ips:h}),ae(l,h),h.slice()}for(const t of p.split(/\r?\n/)){if(h.length>=e)break;const n=t.match(_r0);if(!n)continue;const r=n[1].replace(/^\[|\]$/g,""),a=n[2]?parseInt(n[2]):443,o=r+":"+a;if(d.has(o))continue;if(!b(r))continue;d.add(o);let s="";const i=t.indexOf("#");if(i>=0)try{s=decodeURIComponent(t.slice(i+1).trim())}catch(e){s=t.slice(i+1).trim()}s?(u[s]=(u[s]||0)+1,h.push({ip:r,port:a,name:s+"-"+String(u[s]).padStart(2,"0"),...g?{relay:!0}:{}})):h.push({ip:r,port:a,name:"",...g?{relay:!0}:{}})}for(const t of p.split(/\r?\n/)){if(h.length>=e)break;const n=t.match(/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?(?:#([^\r\n]*))?/);if(!n){const e=t.trim().match(/^(\*\.)?([a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+)(?::(\d{1,5}))?(?:#([^\r\n]*))?$/i);if(!e||e[1])continue;const n=e[2].toLowerCase(),r=e[3]?parseInt(e[3]):443,a=n+":"+r;if(d.has(a))continue;d.add(a);const o=(e[4]||"").trim();h.push({ip:n,port:r,name:o||n,...g?{relay:!0}:{}});continue}const r=n[1],a=n[2]?parseInt(n[2]):443,o=r+":"+a;if(d.has(o))continue;if(!b(r))continue;d.add(o);const s=(n[3]||"").trim();if(s&&!/[\u4e00-\u9fa5]/.test(s)&&!s.includes("|")){h.push({ip:r,port:a,name:s,...g?{relay:!0}:{}});continue}let i="";if(n[3]){const t=n[3].match(/^\s*[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}/);if(t){const e=t[0].match(/[\u4e00-\u9fa5]{2,5}/);e&&(i=e[0])}else{const t=n[3].split("|").map(t=>t.trim()),e=t.find(t=>/^[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}$/.test(t));if(e){const t=e.match(/[\u4e00-\u9fa5]{2,5}/);t&&(i=t[0])}else{const e=t.find(t=>/^[\u4e00-\u9fa5]{2,5}$/.test(t)&&!/^(地区随机|随机优选|官方优选|优选|CF优选)$/.test(t));if(e)i=e;else{const t=n[3].match(/\b([A-Z]{2})\b/);t&&(i=y[t[1]]||t[1])}}}}i?(u[i]=(u[i]||0)+1,h.push({ip:r,port:a,name:i+"-"+String(u[i]).padStart(2,"0"),...g?{relay:!0}:{}})):h.push({ip:r,port:a,name:"",...g?{relay:!0}:{}})}if(!h.length&&r){const n=(String(t).match(/\/([A-Z]{2})\//)||[])[1]||String(t).replace(/^https?:\/\//,"").split(".")[0];y[n]&&at(o?m:f,e).forEach((t,e)=>h.push({ip:t,port:443,name:y[n]+"-"+String(e+1).padStart(2,"0")}))}return ee.set(s,{t:i,ips:h}),ae(l,h),h.slice()}catch(t){const n=ee.get(s);return n&&n.ips&&n.ips.length?n.ips.slice(0,e):[]}}var n;if(!t.includes("://")&&!/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(t)){const e=t.match(/^(\[?[0-9a-fA-F:]+\]?|\d{1,3}(?:\.\d{1,3}){3}|[a-z0-9.-]+\.[a-z]{2,})(?::(\d{1,5}))?(?:#([^\r\n]*))?$/i);if(!e)return[];const n=e[1].replace(/^\[|\]$/g,""),r=e[2]?parseInt(e[2]):443,o=(e[3]||"").trim(),s=Y(n);if(!s&&!/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(n))return[];if(a&&s&&!v(n))return[];if(o)return[{ip:n,port:r,name:o}];if(s)return[{ip:n,port:r,name:""}]}const s=ee.get(t);if(s&&i-s.t<6e5)return s.ips.slice(0,e).map((e,n)=>({ip:e,port:443,name:t+"-"+(n+1)}));const l=await c(t,"A",1);let p=a?l.filter(v):l;if(o){const e=await c(t,"AAAA",28);p=[...new Set(l.concat(e))].filter(t=>!a||v(t))}return p=p.slice(0,e),p.length?(ee.set(t,{t:i,ips:p}),p.map((e,n)=>({ip:e,port:443,name:t+"-"+(n+1)}))):s&&s.ips&&s.ips.length?s.ips.slice(0,e).map((e,n)=>({ip:e,port:443,name:t+"-"+(n+1)})):[]})),d=[];let u=0;for(;u<n;){let t=!1;for(const e of p){if(u>=n)break;e.length&&(d.push(e.shift()),u++,t=!0)}if(!t)break}return d}async function le(t,e=800,n=null){const r=[],a=new Set,o=t.optimizer&&t.optimizer.subMode||"",s=t.filter&&t.filter.ipType||[],i=1===s.length&&"IPv6"===s[0],l=ve(t),c=i?g:l?[...f,...g]:f,p="custom"===o&&!(t.optimizer&&t.optimizer.subIncludeDefault),d="custom"===o||"random"===o,u=(n,o,s,i)=>{((n,o,s,i)=>{if(r.length>=e)return;if(Y(n)&&!v(n)&&!p&&!i)return;const l=t.probeAlive?n+":"+o:n;if(a.has(l))return;a.add(l);const c=!L.has(Number(o));if(t.tlsOnly&&!c)return;const d=Number(o),u=Qt(s,!!t.enableVless,!!t.enableTrojan,!(!t.enableXhttp||!c));t.enableVless&&r.push(Zt(t,n,d,u.v)),t.enableTrojan&&(t.probeAlive||c)&&r.push(te(t,n,c?d:Number(o),u.t)),t.enableXhttp&&c&&r.push(Zt(t,n,d,u.x,{type:_d("eGh0dHA=")}))})(n,Number(o)||443,s,i)};if("random"===o){let a=Math.min(Math.max(parseInt(t.optimizer.subRandomCount)||16,1),Math.min(99,e));if(t.nodeLimit){const n=parseInt(t.nodeLimitCount)||0;n>0&&(a=Math.min(Math.max(a,n),e))}const o=(t.enableVless?1:0)+(t.enableTrojan?1:0)+(t.enableXhttp?1:0)||1;let s=0;const i=at(c,3*Math.ceil(a/o));let l=i;n&&(l=[...i.filter(t=>!n.has(t)),...i.filter(t=>n.has(t))]);for(const e of l){if(s>=a)break;const n=Qt("优选IP-"+String(s+1).padStart(2,"0"),!!t.enableVless,!!t.enableTrojan,!!t.enableXhttp);if(t.enableVless&&(r.push(Zt(t,e,443,n.v)),s++),s>=a)break;if(t.enableTrojan&&(r.push(te(t,e,443,n.t)),s++),s>=a)break;t.enableXhttp&&(r.push(Zt(t,e,443,n.x,{type:_d("eGh0dHA=")})),s++)}return r}const h=se(t.preferredDomains).filter(t=>!t.includes("://"));h.forEach((t,e)=>{const n=t.indexOf("#"),r=(n>=0?t.slice(0,n):t).trim(),a=(n>=0?t.slice(n+1):"").trim(),o=z(r,443);o.host.startsWith("*.")||u(o.host,o.port,a||"优选IP-"+String(e+1).padStart(2,"0"))});let m=t.preferredIPs||[];if(l&&!i&&m.length>1){const t=[],e=[];for(const n of m)(String(n.ip).indexOf(":")>=0?e:t).push(n);const n=[],r=Math.max(t.length,e.length);for(let a=0;a<r;a++)a<t.length&&n.push(t[a]),a<e.length&&n.push(e[a]);m=n}if(m.forEach((t,e)=>{u(t.ip,t.port||443,t.name||"优选IP-"+String(e+1).padStart(2,"0"),!0===t.relay||Y(t.ip)&&!v(t.ip))}),!("custom"!==o||t.optimizer&&t.optimizer.subIncludeDefault))return r;h.length||(t.preferredIPs||[]).length||(ot(E.join("\n")).forEach(t=>u(t.ip,t.port||443,t.name||"0")),A.forEach((t,e)=>u(t,443,"域名-"+String(e+1).padStart(2,"0"))));const b=Math.min(Math.max(parseInt(t.optimizer&&t.optimizer.fillCount||0)||0,0),5e3),y=Math.min(b,e)-a.size;if(y>0){const t=n?T.filter(t=>!n.has(t)):T.slice(),a=at(c,3*y);let o=[...t,...n?a.filter(t=>!n.has(t)):a];if(o.length<y&&(o=[...T,...a]),o.length>0){const t=Math.min(o.length,20),e=o.slice(0,t),n=d?e.map(()=>!0):await je(e,t=>Ge(t,443,1500)),r=e.filter((t,e)=>n[e]),a=o.slice(t);o=[...r,...a].slice(0,y)}let s=0;for(const t of o){if(r.length>=e)break;s++,u(t,443,"优选IP-"+String(s).padStart(3,"0"))}}return r}function ce(t){const e=t.indexOf("@"),n=t.indexOf("?",e),r=n>e&&e>=0?t.slice(e+1,n):t.slice(e+1);if(r.startsWith("[")){const t=r.indexOf("]"),e=t>0?r.slice(1,t):r,n=r.slice(t+1),a=n.startsWith(":")?parseInt(n.slice(1)):443;return{host:e,port:isNaN(a)?443:a}}const a=r.lastIndexOf(":");if(a>0){const t=parseInt(r.slice(a+1));return{host:r.slice(0,a),port:isNaN(t)?443:t}}return{host:r,port:443}}function pe(t,e){const n=t.indexOf("?");if(n<0)return null;const r=t.indexOf("#",n),a=r>n?t.slice(n+1,r):t.slice(n+1);for(const t of a.split("&")){const n=t.indexOf("=");if((n>0?t.slice(0,n):t)===e)return n>0?decodeURIComponent(t.slice(n+1)):""}return null}function de(t,e){const{host:n,port:r}=ce(t),a=n,o=t.indexOf("#");let s=`节点${e+1}`;if(o>=0)try{s=decodeURIComponent(t.slice(o+1))||s}catch(t){}const i=t.indexOf("@");let l="";if(i>=0){const e=t.indexOf("://"),n=e>=0?e+3:0;try{l=decodeURIComponent(t.slice(n,i))}catch(e){l=t.slice(n,i)}}const c=t.startsWith(_d("dHJvamFu")+"://");return{srv:a,prt:r,name:s,user:l,isTrojan:c,tls:c||"tls"===(pe(t,"security")||"tls")}}const ue={HK:["HK","香港"],TW:["TW","台湾"],US:["US","美国"],SG:["SG","新加坡"],JP:["JP","日本"],KR:["KR","韩国"],DE:["DE","德国"]},fe={"移动":["移动","CM","CHINAMOBILE"],"联通":["联通","CU","UNICOM"],"电信":["电信","CT","CHINATELECOM"]},he=["移动","联通","电信"],me=["IPv4","IPv6"];function ge(t,e){if(!e||!e.region&&!e.ipType&&!e.isp)return t;const n=e.region||"all",r=e.ipType||me,a=e.isp||he,o=t.map(t=>{const{host:e}=ce(t);let n="";try{const e=t.indexOf("#");e>=0&&(n=decodeURIComponent(t.slice(e+1)||""))}catch(t){n=""}return{host:e,name:n,up:n.toUpperCase()}}),s=o.some(t=>t.up&&Object.keys(fe).some(e=>(fe[e]||[e]).some(e=>t.up.includes(e.toUpperCase())))),i=(e,n,r)=>{const a=Array.isArray(e)?0===e.length||e.includes("all")?null:e.flatMap(t=>ue[t]||[]):"all"!==e?ue[e]||[]:null,i=r.length>0&&r.length<he.length;return t.filter((t,e)=>{const l=o[e],c=l.host.indexOf(":")>=0;if(!l.name)return!1;if(a&&!a.some(t=>l.up.includes(t.toUpperCase()))&&!/^(优选IP|域名)-\d+/.test(l.name)&&"原生地址"!==l.name)return!1;if(1===n.length){if("IPv4"===n[0]&&c)return!1;if("IPv6"===n[0]&&!c)return!1}return!(i&&s&&!r.some(t=>(fe[t]||[t]).some(t=>l.up.includes(t.toUpperCase()))))})};let l=i(n,r,a);return l.length||(l=i(n,r,he)),l.length||(l=i(n,me,he)),l.length||(l=i("all",me,he)),l}function be(t){try{let e=ce(t).host||"";return"["===e.charAt(0)&&(e=e.slice(1,e.indexOf("]")>0?e.indexOf("]"):void 0)),e.indexOf(":")>=0}catch(t){return!1}}function ve(t){const e=t&&t.filter&&t.filter.ipType||[];if(!e.includes("IPv6"))return!1;if(1===e.length)return!0;const n=t&&t.ipv6Mode||"off";return"tail"===n||"full"===n}function ye(t,e,n){const r=e&&e.ipv6Mode||"off";if(n||"full"===r||"mix"===r||t.length<2)return t;const a=[],o=[];for(const e of t)(be(e)?a:o).push(e);if(!a.length)return t;if("off"===r)return o.length?o:t;const s=Math.max(1,Math.min(a.length,40,Math.floor(.1*o.length)));return o.length?o.concat(a.slice(0,s)):t}const xe=/^(?:优选IP-S\d|内置·保底-|隧道前置-)/;function we(t){try{const e=t.indexOf("#");return!(e<0)&&xe.test(decodeURIComponent(t.slice(e+1)||""))}catch(t){return!1}}function ke(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1)),r=t[e];t[e]=t[n],t[n]=r}return t}function Ie(t){if("boolean"==typeof t||"number"==typeof t)return String(t);const e=String(t);return/^[\w.\-/\u4e00-\u9fa5]+$/.test(e)?e:JSON.stringify(e)}function Pe(t,e){const n=" ".repeat(e);return String(t||"").split("\n").map(t=>n+(t||""))}function Ce(t){const e=String(t||"");if(!e)return"";if(e.indexOf("印度尼西亚")>=0)return"印尼";let n="";for(const t in y){const r=y[t];r.length>n.length&&e.indexOf(r)>=0&&(n=r)}if(n)return n;const r=e.toUpperCase().match(/[A-Z]{2,3}/g)||[];for(const t of r)if(k[t])return k[t];return""}const Se=36e5;let Ae=0;function Te(t,e){const n=async function(t,e){try{const n=String(e||"").toUpperCase();if(!n||!t||!t.K||"function"!=typeof t.K.put)return;const r=Date.now();if(r-Ae<Se)return;Ae=r;let a=null;try{a=JSON.parse(await t.K.get("usageColo")||"null")}catch(t){a=null}if(a&&r-(a.t||0)<Se)return void(Ae=a.t||r);if(!K())return;await t.K.put("usageColo",JSON.stringify({colo:n,t:r})).catch(()=>{})}catch(t){}}(t,e);t&&t._ctx&&"function"==typeof t._ctx.waitUntil?t._ctx.waitUntil(n):n.catch(()=>{})}async function Ue(t){try{if(!t||!t.K||"function"!=typeof t.K.get)return"";const e=JSON.parse(await t.K.get("usageColo",{cacheTtl:30})||"null");return e&&e.colo?Date.now()-(e.t||0)>6048e5?"":String(e.colo).toUpperCase():""}catch(t){return""}}function Ee(t,e,n,r,a,o,s){const i=t.host,l="/"+t.path,c=l+"?ed=2048",p=t.alpn?t.alpn.split(",").map(t=>t.trim()).filter(Boolean):null,d=new Set,u=[],f={},h=String(n||"").toUpperCase(),m=I[h]||h||"",g=String(s||"").toUpperCase(),b=I[g]||g||"",v=String(o||"").trim().toUpperCase(),w="OFF"===v?"":y[v]||b||m,k=e.map(e=>{const{user:n,srv:r,prt:a,name:o,isTrojan:s,tls:h}=de(e,0);let m=o;const g=pe(e,"type")||"ws";let b=Ce(m);if(!b&&w&&(b=w,m=m?w+"·"+m:w+"·优选"),d.has(m)){const t=s?"T":_d("eGh0dHA=")===g?"X":"W";let e=m+"·"+t,n=2;for(;d.has(e);)e=m+"·"+t+n,n++;m=e}if(d.add(m),b){let t=f[b];void 0===t&&(t=u.length,f[b]=t,u.push({name:b,code:x[b]||"R"+t,nodes:[]})),u[t].nodes.push(m)}const v={name:m,server:r,port:a,udp:!0,...h?{tls:!0,"skip-cert-verify":!0,servername:i,"client-fingerprint":"chrome",alpn:p||["http/1.1"]}:{},...t.ech&&h?{"ech-opts":{enable:!0,"query-server-name":t.echHost||"cloudflare-ech.com"}}:{}};if(s)return{...v,type:_d("dHJvamFu"),password:n,network:"ws",[_d("d3Mtb3B0cw==")]:{path:h?c:l,headers:{Host:i}}};if(_d("eGh0dHA=")===g){let t={};try{t=JSON.parse(pe(e,"extra")||"{}")}catch(t){}return{...v,type:_d("dmxlc3M="),uuid:n,network:_d("eGh0dHA="),alpn:p||["h2"],[_d("eGh0dHAtb3B0cw==")]:{path:l,mode:_d("c3RyZWFtLW9uZQ=="),host:i,[_d("eC1wYWRkaW5nLW9iZnMtbW9kZQ==")]:void 0===t.xPaddingObfsMode||t.xPaddingObfsMode,"x-padding-method":t.xPaddingMethod||"tokenish","x-padding-placement":t.xPaddingPlacement||"queryInHeader","x-padding-header":t.xPaddingHeader||"","x-padding-key":t.xPaddingKey||""}}}return{...v,type:_d("dmxlc3M="),uuid:n,network:"ws",[_d("d3Mtb3B0cw==")]:{path:h?c:l,headers:{Host:i}}}});k.sort((t,e)=>(443===t.port?0:1)-(443===e.port?0:1));const P="custom"===(t.optimizer&&t.optimizer.subMode||""),C=k.map(t=>t.name),S=t.homeWan&&C.length?"隧道前置":"",A=function(t){if(!t||!t.length)return t;const e=t[0],n=(t,e)=>(t||"")===(e||"");return t.map(t=>(t!==e?(n(t.ca,e.ca)&&(t.caRef="hwca"),n(t.cert,e.cert)&&(t.certRef="hwcert"),n(t.key,e.key)&&(t.keyRef="hwkey")):(t.ca&&(t.caAnchor="hwca"),t.cert&&(t.certAnchor="hwcert"),t.key&&(t.keyAnchor="hwkey")),t))}(function(t,e){if(!t.homeWan)return[];const n=Array.isArray(t.homeWanNodes)&&t.homeWanNodes.length?t.homeWanNodes:[];if(!n.length)return[];const r={};return n.map(t=>{const n="家宽"+String(t.country||"XX").toUpperCase();let a=n,o=2;for(;r[a];)a=n+"-"+o,o++;r[a]=1;const s={name:a,type:"openvpn",server:t.server,port:Number(t.port)||1194,proto:"tcp"===String(t.proto||"udp")?"tcp":"udp",username:"vpn",password:"vpn",ca:t.ca||"",dev:"tun",handshakeTimeout:30,cipher:t.cipher||_d("QUVTLTEyOC1HQ00="),auth:t.auth||"SHA1"};return t.cert&&(s.cert=t.cert),t.key&&(s.key=t.key),t.tlsAuth&&(s["tls-auth"]=t.tlsAuth,s["key-direction"]="1"),t.tlsCrypt&&(s["tls-crypt"]=t.tlsCrypt),e&&(s.dialerProxy=e),s})}(t,S)),T=!(!t.homeWan||P);A.length&&k.push(...A);const U=function(t,e){const n="https://www.google.com/generate_204";if(!e)return"# ==================== 策略组 ====================\n"+_d("cHJveHktZ3JvdXA=")+"s:\n  - {name: 一键连接, type: select, "+_d("cHJveGllcw==")+": [直接连接]}\n  - {name: 直接连接, type: select, "+_d("cHJveGllcw==")+": [DIRECT]}\n";const r=[];r.push("# ==================== 监听器 ===================="),r.push("listeners:"),r.push("  # "+_d("U2hhZG93c29ja3M=")+"监听器 - 远程连接家庭网络，端口和密码使用时请修改（默认密码请勿用于公网）"),r.push("  - {name: SS-IN,  type: "+_d("c2hhZG93c29ja3M=")+", listen: '::', port: 10000, udp: true, password: Xf3#Lp9WqZ, cipher: "+_d("YWVzLTI1Ni1nY20=")+"}"),r.push("  # Mixed监听器 - 分地区专用端口 玩法：本地客户端或插件，实现分地区访问"),t.slice(0,7).forEach((t,e)=>{r.push("  - {name: MIXED-"+t.code+", type: mixed, port: "+(5e4+e)+", proxy: "+t.name+"节点}")}),r.push("  - {name: MIXED-AL, type: mixed, port: 50007, proxy: 一键连接}"),r.push(""),r.push("# ==================== 策略组 ===================="),r.push(_d("cHJveHktZ3JvdXA=")+"s:");const a=t.map(t=>t.name+"节点");return r.push("  # 主入口：默认自动选择延迟最低节点，可手动切换各地区 / 全部节点 / 直接连接"),r.push("  - {name: 一键连接, type: select, "+_d("cHJveGllcw==")+": ["+["自动选择","故障转移"].concat(a,["全部节点","直接连接"]).join(", ")+"]}"),r.push("  # 自动选择：隐藏（面板不可手动选择），纯自动优选延时最低节点；故障转移：按序自动切换"),r.push("  - {name: 自动选择, type: url-test, include-all: true, url: '"+n+"', interval: 200, lazy: true, hidden: true, empty-fallback: REJECT}"),r.push("  - {name: 故障转移, type: fallback, "+_d("cHJveGllcw==")+": ["+a.concat(["全部节点"]).join(", ")+"], url: '"+n+"', interval: 200, lazy: true, empty-fallback: REJECT}"),t.forEach(t=>{const e=t.name+"节点",a=t.name+"自动";r.push("  # "+t.name+"（"+t.nodes.length+" 节点）：默认选中「"+a+"」=自动优选该地区最快节点，也可手动指定单个节点"),r.push("  - {name: "+e+", type: select, "+_d("cHJveGllcw==")+": ["+a+", "+t.nodes.map(Ie).join(", ")+"]}"),r.push("  - {name: "+a+", type: url-test, "+_d("cHJveGllcw==")+": ["+t.nodes.map(Ie).join(", ")+"], url: '"+n+"', interval: 200, lazy: true, empty-fallback: REJECT, hidden: true}")}),r.push("  # 全部节点（手动挑选任意节点；首个选项「自动选择」=全部节点中最快）"),r.push("  - {name: 全部节点, type: select, include-all: true, "+_d("cHJveGllcw==")+": [自动选择]}"),r.push("  - {name: 直接连接, type: select, "+_d("cHJveGllcw==")+": [DIRECT]}"),r.join("\n")+"\n"}(u,k.length);let E="\n# 监听器与策略组由订阅生成时按实际节点动态输出（见 generate"+_d("Q2xhc2g=")+" / build"+_d("Q2xhc2g=")+"Groups）：\n# 有节点的地区才生成对应分组与监听器，无节点不占位（地区归桶由节点名识别 + 机房落点标注）\n\n# ==================== 核心配置 ====================\nmode: rule\nport: 7890\nsocks-port: 7891\nredir-port: 7892\nmixed-port: 7893\ntproxy-port: 7895\nipv6: true\nallow-lan: true\nunified-delay: true\ntcp-concurrent: true\nlog-level: warning\nbind-address: '*'\nfind-process-mode: 'always'\nkeep-alive-interval: 15\nkeep-alive-idle: 600\n\n# 认证配置（默认凭据请务必修改！）\nauthentication:\n  - "+_d("bWlob21v")+":yyds666\nskip-auth-prefixes:\n  - 192.168.1.0/24\n  - 192.168.31.0/24\n  - 192.168.100.0/24\n  - 127.0.0.1/8\n\n# 实验性功能\nexperimental:\n  quic-go-disable-gso: true\n\n# 管理面板配置\nexternal-ui-url: https://github.com/"+_d("WmVwaHlydXNv")+"/"+_d("emFzaGJvYXJk")+"/releases/latest/download/dist.zip\nexternal-ui-name: "+_d("emFzaGJvYXJk")+"\nexternal-ui: ui\nexternal-controller: 127.0.0.1:9090\nsecret: yyds666    # 请修改为自定义密钥\n# 允许网页面板跨域访问\nexternal-controller-cors:\n  allow-origins:\n    - \"*\"\n  allow-private-network: true\n\n# 配置存储\nprofile:\n  store-selected: true\n  store-fake-ip: true\n\n# geosite / geoip 数据源（GEOSITE 规则依赖；"+_d("TWV0YUN1YmVY")+" 官方规则库，GitHub release 官方源）\ngeox-url:\n  geoip: \"https://github.com/"+_d("TWV0YUN1YmVY")+"/"+_d("bWV0YS1ydWxlcy1kYXQ=")+"/releases/download/latest/geoip.dat\"\n  geosite: \"https://github.com/"+_d("TWV0YUN1YmVY")+"/"+_d("bWV0YS1ydWxlcy1kYXQ=")+"/releases/download/latest/geosite.dat\"\n  mmdb: \"https://github.com/"+_d("TWV0YUN1YmVY")+"/"+_d("bWV0YS1ydWxlcy1kYXQ=")+"/releases/download/latest/country.mmdb\"\n\n# 流量嗅探\nsniffer:\n  enable: true\n  force-dns-mapping: true   # 强制 DNS 映射，提高分流准确度\n  parse-pure-ip: true       # 解析纯 IP 连接\n  override-destination: true\n  sniff:\n    HTTP:\n      ports: [80, 8080-8880]\n    TLS:\n      ports: [443, 8443]\n    QUIC:\n      ports: [443, 8443]\n  skip-domain:\n    - \"+.push.apple.com\"\n\n# TUN模式配置\ntun:\n  enable: false\n  stack: mixed\n  mtu: 1480\n  dns-hijack:\n    - \"any:53\"\n    - \"tcp://any:53\"\n  udp-timeout: 300\n  auto-route: true\n  strict-route: true\n  auto-redirect: true\n  auto-detect-interface: true\n  # 提示：系统级防泄露的最强手段是开启 TUN（自动劫持全部 DNS 流量）；\n  # 不开 TUN 时，请把系统 / LAN 设备的 DNS 指向 127.0.0.1:53（本机）或本机局域网 IP:53。\n\nhosts:\n  miwifi.com: 192.168.31.2\n  \"epdg.epc.mnc010.mcc234.pub.3gppnetwork.org\": [87.194.8.8, 87.194.88.8, 87.194.89.8, 87.194.9.8]\n  services.googleapis.cn: services.googleapis.com\n  cn.bing.com: www4.bing.com\n\n# ==================== DNS 配置 ====================\n# 防泄露要点：\n#   1) respect-rules: true：DNS 服务器连接遵循路由规则（国外 DoH 走隧道、国内 DoH 直连），\n#      解析行为与规则分流一致，避免“规则走出口、解析却直连”的泄露。\n#   2) 默认 nameserver 用国内 DoH；只有“将走出口”的规则集才用国外 DoH，\n#      且其域名在 rules 中显式固定走出口。\n#   3) fake-ip-filter 补齐系统连通性检测 / 时间同步 / 运营商登录等域名，防止系统误判断网而回退运营商 DNS。\ndns:\n  enable: true\n  listen: 0.0.0.0:53        # 本机 / LAN 设备可把 DNS 指向此地址，避免走运营商 DNS\n  ipv6: true\n  prefer-h3: false          # respect-rules 下官方不推荐 DoH3；且 QUIC 已被规则拦截\n  cache-algorithm: arc      # 性能更优的 ARC 缓存算法\n  cache-size: 4096\n  enhanced-mode: fake-ip\n  fake-ip-range: 198.18.0.1/16\n  fake-ip-filter:\n    - \"+.lan\"\n    - \"+.local\"\n    - \"+.localhost\"\n    - \"+.home.arpa\"\n    - \"+.internal\"\n    # 系统连通性检测（防止 fake-ip 导致“无网络”判断，回退 ISP DNS 造成泄露）\n    - \"+.msft"+_d("Y29ubmVjdA==")+"test.com\"\n    - \"+.msftncsi.com\"          # 通配已覆盖 dns.msftncsi.com\n    - \"captive.apple.com\"\n    - \""+_d("Y29ubmVjdA==")+"ivitycheck.gstatic.com\"\n    - \"detectportal.firefox.com\"\n    # 时间同步\n    - \"time.nist.gov\"\n    - \"+.pool.ntp.org\"\n    - \"time.*.com\"              # 通配已覆盖 time.windows.com\n    - \"ntp.*.com\"               # 通配已覆盖 ntp.ubuntu.com\n    # 运营商 Wi-Fi 登录页\n    - \"+.cmpassport.com\"\n    - \"id6.me\"\n    - \"open.e.189.cn\"\n    - \"mdn.open.wo.cn\"\n    - \"opencloud.wostore.cn\"\n    - \"auth.wosms.cn\"\n    - \"+.10099.com.cn\"\n    # 原配置保留项\n    - \"+.market.xiaomi.com\"\n    - \"+.pub.3gppnetwork.org\"\n    - \"+.push.apple.com\"\n    - \"+.bing.com\"\n    - \"+.miwifi.com\"\n    - \"+.docker.io\"\n    # 国内应用登录（+.qq.com 已覆盖 localhost.ptlogin2.qq.com）\n    - \"+.qq.com\"\n    # 直连 / 国内类规则集：返回真实 IP\n    - rule-set:Direct\n    - rule-set:Private\n    - rule-set:China\n    - geosite:cn                # 国内域名返回真实 IP（geosite 库兜底，防 fake-ip 干扰国内应用）\n  use-hosts: true\n  respect-rules: true\n  # 引导用 DNS（解析 DoH/DoT 服务器自身的域名），必须是 IP\n  default-nameserver:\n    - 223.5.5.5\n    - 119.29.29.29\n  # 默认解析：未命中 nameserver-policy 的域名（国内 DoH，直连）\n  nameserver:\n    - \"https://dns.alidns.com/dns-query\"\n    - \"https://doh.pub/dns-query\"\n  # 直连出口的解析\n  direct-nameserver:\n    - \"https://dns.alidns.com/dns-query\"\n    - \"https://doh.pub/dns-query\"\n  # 解析节点域名（防套娃 / 防循环，用国内直连可达的 DoH）\n  proxy-server-nameserver:\n    - \"https://dns.alidns.com/dns-query\"\n    - \"https://doh.pub/dns-query\"\n  nameserver-policy:\n    # 广告域名直接返回空应答\n    \"rule-set:Advertising,"+_d("QVdBdmVudWU=")+"Ads\": rcode://success\n    # 直连类：国内 DoH（微软已并入直连，微软域名走国内解析后直连）\n    \"rule-set:Direct,Private,China,Microsoft\":\n      - \"https://dns.alidns.com/dns-query\"\n      - \"https://doh.pub/dns-query\"\n    # 走出口类：国外 DoH（连接本身经隧道，不直连暴露查询）\n    \"rule-set:AI,Telegram,Twitter,SocialMedia,Netflix,YouTube,Spotify,TikTok,disney,Google,Proxy\":\n      - \"https://dns.google/dns-query\"\n      - \"https://cloudflare-dns.com/dns-query\"\n\n__"+_d("Q0xBU0g=")+"_GROUPS__\n\n# ==================== 规则路由 ====================\nrules:\n  # 广告拦截（常用：直接拒绝；如需临时放行可改为一键连接）\n  - RULE-SET,Tracking,REJECT\n  - RULE-SET,"+_d("QVdBdmVudWU=")+"Ads,REJECT\n  - RULE-SET,Advertising,REJECT\n  - GEOSITE,category-ads-all,REJECT        # geosite 广告分类兜底（"+_d("djJyYXk=")+" 标准库，覆盖面广）\n\n  # DNS 服务器域名：解析通道固定，避免 DNS 流量走错路径（防泄露关键）\n  - DOMAIN-SUFFIX,alidns.com,直接连接\n  - DOMAIN-SUFFIX,doh.pub,直接连接\n  - DOMAIN,dns.google,一键连接\n  - DOMAIN,cloudflare-dns.com,一键连接\n\n  # 大陆直连优先（置于国外服务规则之前：大陆应用一律直连，不被国外服务规则集抢先命中）\n  - RULE-SET,Private,直接连接\n  - RULE-SET,Direct,直接连接\n  - RULE-SET,Download,直接连接\n  - RULE-SET,AppleCN,直接连接\n  - RULE-SET,Microsoft,直接连接        # 微软全家桶直连（Office / OneDrive / Windows 更新 / Teams / Xbox 等）\n  - RULE-SET,China,直接连接             # 国内域名直连\n  - GEOSITE,CN,直接连接                  # geosite 国内域名兜底（覆盖规则集未收录的国内域名，先于 GEOIP 命中）\n  # 阻止 QUIC 走出口（强制回退 TCP，避免 QUIC 绕过出口 / 被干扰）。\n  # 放在直连规则之后：直连 QUIC（大陆 / 微软 / 苹果）不受影响。如需 Telegram 语音等 UDP，可删除此行。\n  - AND,((DST-PORT,443),(NETWORK,UDP)),REJECT\n\n  # 常用国外服务（统一走一键连接）\n  - RULE-SET,AI,一键连接\n  - RULE-SET,Telegram,一键连接\n  - RULE-SET,Twitter,一键连接\n  - RULE-SET,SocialMedia,一键连接\n  - RULE-SET,Netflix,一键连接\n  - RULE-SET,YouTube,一键连接\n  - RULE-SET,Spotify,一键连接\n  - RULE-SET,TikTok,一键连接\n  - RULE-SET,disney,一键连接\n  - RULE-SET,Google,一键连接\n  - RULE-SET,github,一键连接\n  - RULE-SET,Proxy,一键连接\n\n  # IP规则\n  - RULE-SET,PrivateIP,直接连接,no-resolve\n  - RULE-SET,TelegramIP,一键连接,no-resolve\n  - RULE-SET,"+_d("UHJveHlJUA==")+",一键连接,no-resolve\n  - RULE-SET,ChinaIP,直接连接,no-resolve\n\n  # 大陆 IP 兜底直连：覆盖规则集未收录的域名 / 纯 IP 连接的大陆应用（GEOIP 库覆盖面更全）\n  - GEOIP,CN,直接连接,no-resolve\n\n  # 兜底规则：其余（国外）走一键连接\n  - MATCH,一键连接\n\n# ==================== 规则集 ====================\n# 规则集行为模板\nBehaviorDN: &BehaviorDN {type: http, behavior: domain, format: mrs, interval: 86400}\nBehaviorDY: &BehaviorDY {type: http, behavior: domain, format: yaml, interval: 86400}\nBehaviorIP: &BehaviorIP {type: http, behavior: ipcidr, format: mrs, interval: 86400}\nClassicalYaml: &ClassicalYaml {type: http, behavior: classical, interval: 3600, format: yaml, proxy: DIRECT}\nBehaviorCL: &BehaviorCL {type: http, behavior: classical, interval: 86400, format: yaml, proxy: DIRECT}   # 经典规则集（"+_d("YmxhY2ttYXRyaXg3")+" 等，DOMAIN/DOMAIN-SUFFIX/DOMAIN-KEYWORD/PROCESS-NAME）\n\n# 规则提供者（仅保留常用）\n# ★ 同域代下：url 指向 __CRULES__（生成时替换为 https://<当前订阅域名>/crules）——\n#   客户端导入/更新零外部直连（不开梯子也能完成导入）；上游仓库资源由 Worker 服务端拉取，\n#   KV 缓存 + 进程内缓存，客户端不再每次直连外站下载（见 serveCrule / RULE_SOURCES）\n"+_d("cnVsZS1wcm92aWRlcg==")+"s:\n  # 广告\n  Tracking:       {<<: *BehaviorDN, url: __CRULES__/Tracking.mrs}\n  Advertising:    {<<: *BehaviorDN, url: __CRULES__/Advertising.mrs}\n  "+_d("QVdBdmVudWU=")+"Ads:    {<<: *BehaviorDY, url: __CRULES__/"+_d("QVdBdmVudWU=")+"Ads.yaml}\n  # 直连 / 国内\n  Direct:         {<<: *BehaviorDN, url: __CRULES__/Direct.mrs}\n  Private:        {<<: *BehaviorDN, url: __CRULES__/Private.mrs}\n  Download:       {<<: *BehaviorDN, url: __CRULES__/Download.mrs}\n  AppleCN:        {<<: *BehaviorDN, url: __CRULES__/AppleCN.mrs}\n  China:          {<<: *BehaviorCL, url: __CRULES__/China.yaml}   # 大陆直连全量：ChinaMaxNoIP（11万+ 域名，含大陆可达国际服务），每日更新\n  # 常用国外服务\n  AI:             {<<: *BehaviorDN, url: __CRULES__/AI.mrs}\n  Telegram:       {<<: *BehaviorDN, url: __CRULES__/Telegram.mrs}\n  Twitter:        {<<: *BehaviorDN, url: __CRULES__/Twitter.mrs}\n  SocialMedia:    {<<: *BehaviorDN, url: __CRULES__/SocialMedia.mrs}\n  Netflix:        {<<: *BehaviorDN, url: __CRULES__/Netflix.mrs}\n  YouTube:        {<<: *BehaviorDN, url: __CRULES__/YouTube.mrs}\n  Google:         {<<: *BehaviorDN, url: __CRULES__/Google.mrs}\n  Microsoft:      {<<: *BehaviorCL, url: __CRULES__/Microsoft.yaml}   # 微软全家桶全量："+_d("YmxhY2ttYXRyaXg3")+"（Office/OneDrive/Xbox/Teams/Skype/Bing/Azure 等）\n  Proxy:          {<<: *BehaviorDN, url: __CRULES__/Proxy.mrs}\n  # 媒体（"+_d("RHVzdGluV2lu")+"）\n  Spotify:        {<<: *BehaviorDN, url: __CRULES__/Spotify.mrs}\n  TikTok:         {<<: *BehaviorDN, url: __CRULES__/TikTok.mrs}\n  disney:         {<<: *BehaviorDN, url: __CRULES__/disney.mrs}\n  # GitHub\n  github:          {<<: *ClassicalYaml, url: __CRULES__/github.yaml}\n  # IP规则\n  PrivateIP:      {<<: *BehaviorIP, url: __CRULES__/PrivateIP.mrs}\n  TelegramIP:     {<<: *BehaviorIP, url: __CRULES__/TelegramIP.mrs}\n  "+_d("UHJveHlJUA==")+":        {<<: *BehaviorIP, url: __CRULES__/"+_d("UHJveHlJUA==")+".mrs}\n  ChinaIP:        {<<: *BehaviorIP, url: __CRULES__/ChinaIP.mrs}\n\n# ==================== EOF ====================\n\n".replace("__"+_d("Q0xBU0g=")+"_GROUPS__",U);r&&(E=E.replace(/__CRULES__/g,r)),E=function(t,e,n,r){if(!e.length)return t;const a=e.map(t=>t.name),o=a.slice().sort((t,e)=>t<e?-1:t>e?1:0),s=r&&r.length?`  # 家宽隧道前置：CF 优选节点自动测活，家宽 openvpn 经此拨号（${_d("ZGlhbGVy")}-proxy）\n  - {name: 隧道前置, type: url-test, ${_d("cHJveGllcw==")}: [${r.map(Ie).join(", ")}], url: 'https://www.google.com/generate_204', interval: 300, lazy: true, hidden: true, empty-fallback: REJECT, icon: https://github.com/${_d("S29vbHNvbg==")}/${_d("UXVyZQ==")}/raw/master/IconSet/Color/Auto.png}\n`:"",i=`  # 家宽模式：自动测活（url-test 自动选择延迟最低家宽节点）\n  - {name: 家宽自动, type: url-test, ${_d("cHJveGllcw==")}: [${a.map(Ie).join(", ")}], url: 'https://www.google.com/generate_204', interval: 600, lazy: true, hidden: true, empty-fallback: REJECT, icon: https://github.com/${_d("S29vbHNvbg==")}/${_d("UXVyZQ==")}/raw/master/IconSet/Color/Auto.png}\n`,l=`  # 家宽模式：VPN Gate OpenVPN 出口（多台家宽节点自动测活，经 ${_d("ZGlhbGVy")}-proxy 隧道拨号）\n  - {name: 家宽出口, type: select, ${_d("cHJveGllcw==")}: [家宽自动, ${o.map(Ie).join(", ")}, 直接连接], icon: https://github.com/${_d("S29vbHNvbg==")}/${_d("UXVyZQ==")}/raw/master/IconSet/Color/VPN.png}\n`;let c=t;return c=c.replace("# ==================== 规则路由 ====================",s+i+l+"# ==================== 规则路由 ===================="),c=c.replace("  - MATCH,一键连接","  # 家宽模式：VPN Gate 相关流量走家宽出口（OpenVPN 经 CF 隧道）\n  - DOMAIN-SUFFIX,vpngate.net,家宽出口\n"+(n?"  - MATCH,家宽出口":"  - MATCH,一键连接")),c}(E,A,T,C);const $=String(a||"").toUpperCase(),L=y[$]||"";return`# ${__B} 订阅 v${VERSION} · 机房 ${h||"未知"}${m?"("+m+")":""}${g&&g!==h?" · 实测 "+g+(b?"("+b+")":""):""}${$?" · 访客 "+$+(L?"("+L+")":""):""} · 节点 ${k.length} 个\ntest-url: 'http://www.gstatic.com/generate_204'\n${_d("cHJveGllcw==")}:\n${k.map(t=>function(t){const e=[];if(e.push("  - name: "+Ie(t.name)),e.push("    type: "+t.type),e.push("    server: "+Ie(t.server)),e.push("    port: "+t.port),"openvpn"===t.type)return e.push("    proto: "+Ie(t.proto||"udp")),e.push("    udp: "+("tcp"===t.proto?"false":"true")),e.push("    username: "+Ie(t.username||"vpn")),e.push("    password: "+Ie(t.password||"vpn")),t.caRef?e.push("    ca: *"+t.caRef):t.ca&&(e.push(t.caAnchor?"    ca: &"+t.caAnchor+" |":"    ca: |"),e.push(...Pe(t.ca,6))),t.certRef?e.push("    cert: *"+t.certRef):t.cert&&(e.push(t.certAnchor?"    cert: &"+t.certAnchor+" |":"    cert: |"),e.push(...Pe(t.cert,6))),t.keyRef?e.push("    key: *"+t.keyRef):t.key&&(e.push(t.keyAnchor?"    key: &"+t.keyAnchor+" |":"    key: |"),e.push(...Pe(t.key,6))),t["tls-auth"]&&(e.push("    tls-auth: |"),e.push(...Pe(t["tls-auth"],6)),e.push("    key-direction: "+Ie(t["key-direction"]||"1"))),t["tls-crypt"]&&(e.push("    tls-crypt: |"),e.push(...Pe(t["tls-crypt"],6))),e.push("    dev: tun"),e.push("    cipher: "+Ie(t.cipher||_d("QUVTLTEyOC1HQ00="))),e.push("    auth: "+Ie(t.auth||"SHA1")),t.handshakeTimeout&&e.push("    handshake-timeout: "+t.handshakeTimeout),t.dialerProxy&&e.push("    "+_d("ZGlhbGVy")+"-proxy: "+Ie(t.dialerProxy)),e.join("\n");if(_d("dmxlc3M=")===t.type?e.push("    uuid: "+Ie(t.uuid)):e.push("    password: "+Ie(t.password)),e.push("    network: "+t.network),e.push("    udp: true"),t.tls&&(e.push("    tls: true"),e.push("    skip-cert-verify: true"),e.push(t.alpn&&t.alpn.length?"    alpn: ["+t.alpn.join(", ")+"]":_d("eGh0dHA=")===t.network?"    alpn: [h2]":"    alpn: [http/1.1]"),e.push("    servername: "+Ie(t.servername)),_d("dHJvamFu")===t.type&&e.push("    sni: "+Ie(t.servername)),e.push("    client-fingerprint: chrome"),t["ech-opts"]&&(e.push("    ech-opts:"),e.push("      enable: "+Ie(t["ech-opts"].enable)),e.push("      query-server-name: "+Ie(t["ech-opts"]["query-server-name"])))),"ws"===t.network)e.push("    "+_d("d3Mtb3B0cw==")+":"),e.push("      path: "+Ie(t[_d("d3Mtb3B0cw==")].path)),e.push("      headers:"),e.push("        Host: "+Ie(t[_d("d3Mtb3B0cw==")].headers.Host));else if(_d("eGh0dHA=")===t.network){const n=t[_d("eGh0dHA=")+"-opts"];e.push("    "+_d("eGh0dHA=")+"-opts:"),e.push("      path: "+Ie(n.path)),e.push("      mode: "+Ie(n.mode)),e.push("      host: "+Ie(n.host)),e.push("      x-padding-"+_d("b2Jmcw==")+"-mode: "+Ie(n["x-padding-"+_d("b2Jmcw==")+"-mode"])),e.push("      x-padding-method: "+Ie(n["x-padding-method"])),e.push("      x-padding-placement: "+Ie(n["x-padding-placement"])),e.push("      x-padding-header: "+Ie(n["x-padding-header"])),e.push("      x-padding-key: "+Ie(n["x-padding-key"]))}return e.join("\n")}(t)).join("\n")}\n${E}\n`}function $e(t,e){const n=t.host,r="/"+t.path,a=[];for(const t of e)t.startsWith(_d("dHJvamFu")+"://")&&t.indexOf(_d("c2VjdXJpdHk9")+"none")<0?a.push(t):t.startsWith(_d("dmxlc3M=")+"://")&&t.indexOf("type="+_d("eGh0dHA="))<0&&t.indexOf(_d("c2VjdXJpdHk9")+"none")<0&&a.push(t.replace(_r1,_d("dHJvamFu")+"://").replace(_d("ZW5jcnlwdGlvbj0=")+"none&",""));const o=a.map((t,e)=>{const{user:a,srv:o,prt:s,name:i}=de(t,e);return`${i} = ${_d("dHJvamFu")}, ${o}, ${s}, password=${a}, ws=true, ws-path=${r}, ws-headers=Host:${n}, tls=true, skip-cert-verify=true, sni=${n}`});return`#!MANAGED-CONFIG\n[General]\nloglevel = notify\ndns-server = 223.5.5.5, 119.29.29.29\n\n[Proxy]\n${o.join("\n")}\n\n[Proxy Group]\n🚀 节点选择 = select, ${o.map(t=>t.split(" = ")[0]).join(", ")}\n🌐 全球直连 = select, DIRECT\n🐟 漏网之鱼 = select, 🚀 节点选择\n\n[Rule]\nGEOIP,CN,DIRECT\nFINAL,🐟 漏网之鱼\n`}function Le(t,e){const n=t.host,r="/"+t.path,a=t.alpn?t.alpn.split(",").map(t=>t.trim()).filter(Boolean):null,o=new Set,s=e.map((t,e)=>{const{user:s,srv:i,prt:l,name:c,isTrojan:p,tls:d}=de(t,e),u=pe(t,"type")||"ws";let f=c;if(o.has(f)){const t=p?"T":_d("eGh0dHA=")===u?"X":"W";let e=f+"·"+t,n=2;for(;o.has(e);)e=f+"·"+t+n,n++;f=e}o.add(f);const h=d?_d("eGh0dHA=")===u?{enabled:!0,server_name:n,insecure:!0,alpn:a||["h2"]}:{enabled:!0,server_name:n,insecure:!0,alpn:a||["http/1.1"],utls:{enabled:!0,fingerprint:"chrome"}}:{enabled:!1},m=_d("eGh0dHA=")===u?{type:_d("eGh0dHA="),mode:_d("c3RyZWFtLW9uZQ=="),path:r}:d?{type:"ws",path:r,max_early_data:2048,early_data_header_name:"Sec-WebSocket-Protocol",headers:{Host:n}}:{type:"ws",path:r,headers:{Host:n}};return p?{type:_d("dHJvamFu"),tag:f,server:i,server_port:l,password:s,tls:h,transport:m}:{type:_d("dmxlc3M="),tag:f,server:i,server_port:l,uuid:s,tls:h,transport:m}}),i=s.map(t=>t.tag),l=[["geosite-cn","🎯 全球直连"],["geosite-google","🌐 谷歌服务"],["geosite-apple","🍎 苹果服务"],["geosite-microsoft","Ⓜ️ 微软服务"],["geosite-openai","🤖 OpenAI"],["geosite-spotify","🌍 国外媒体"],["geosite-youtube","🌍 国外媒体"],["geosite-netflix","🌍 国外媒体"],["geosite-disney","🌍 国外媒体"],["geosite-twitter","🌍 国外媒体"],["geosite-telegram","🌍 国外媒体"],["geosite-github","🌍 国外媒体"],["geosite-category-ads-all","block"]],c={log:{level:"info"},dns:{servers:[{tag:"dns-remote",type:"https",server:"1.1.1.1"},{tag:"dns-direct",type:"udp",server:"223.5.5.5"},{tag:"dns-fakeip",type:"fakeip",inet4_range:"198.18.0.0/15"}],rules:[{domain_suffix:["githubusercontent.com","github.com","jsdelivr.net"],action:"route",server:"dns-direct"},{rule_set:"geosite-cn",action:"route",server:"dns-direct"},{action:"route",server:"dns-fakeip"}],final:"dns-remote",strategy:"ipv4_only"},inbounds:[{type:"mixed",tag:"mixed-in",listen:"127.0.0.1",listen_port:2080},{type:"tun",tag:"tun-in",interface_name:"tun0",address:["172.19.0.1/30"],mtu:9e3,auto_route:!0,strict_route:!0}],[_d("b3V0Ym91bmRz")]:[...s,{type:"direct",tag:"direct"},{type:"block",tag:"block"},{type:"selector",tag:"🚀 节点选择",[_d("b3V0Ym91bmRz")]:i},{type:"selector",tag:"🎯 全球直连",[_d("b3V0Ym91bmRz")]:["direct"]},{type:"selector",tag:"🐟 漏网之鱼",[_d("b3V0Ym91bmRz")]:["🚀 节点选择","🎯 全球直连"]},{type:"selector",tag:"🌍 国外媒体",[_d("b3V0Ym91bmRz")]:["🚀 节点选择"]},{type:"selector",tag:"🌐 谷歌服务",[_d("b3V0Ym91bmRz")]:["🚀 节点选择"]},{type:"selector",tag:"🤖 OpenAI",[_d("b3V0Ym91bmRz")]:["🚀 节点选择"]},{type:"selector",tag:"🍎 苹果服务",[_d("b3V0Ym91bmRz")]:["🎯 全球直连"]},{type:"selector",tag:"Ⓜ️ 微软服务",[_d("b3V0Ym91bmRz")]:["🎯 全球直连"]}],route:{rules:[{action:"sniff"},{protocol:"dns",action:"hijack-dns"},{ip_is_private:!0,[_d("b3V0Ym91bmQ=")]:"direct"},...l.map(([t,e])=>({rule_set:[t],[_d("b3V0Ym91bmQ=")]:e})),{rule_set:"geoip-cn",[_d("b3V0Ym91bmQ=")]:"direct"},{ip_is_private:!0,action:"reject"}],rule_set:[...l.map(([t])=>{const e=t.replace("geosite-","geosite/");return{type:"remote",tag:t,format:"binary",url:"https://cdn.jsdelivr.net/gh/"+_d("TWV0YUN1YmVY")+"/"+_d("bWV0YS1ydWxlcy1kYXQ=")+"@sing/geo/"+e+".srs",download_detour:"direct"}}),{type:"remote",tag:"geoip-cn",format:"binary",url:"https://cdn.jsdelivr.net/gh/"+_d("TWV0YUN1YmVY")+"/"+_d("bWV0YS1ydWxlcy1kYXQ=")+"@sing/geo/geoip/cn.srs",download_detour:"direct"}],final:"🐟 漏网之鱼",auto_detect_interface:!0,default_domain_resolver:{server:"dns-direct"}},experimental:{clash_api:{external_controller:"127.0.0.1:9090"},cache_file:{enabled:!0}}};return JSON.stringify(c,null,2)}function Ne(t,e){const n=t.host,r="/"+t.path,a=e.map((t,e)=>{const{user:a,srv:o,prt:s,name:i,isTrojan:l,tls:c}=de(t,e),p=c?", tls=true, skip-cert-verify=true, sni="+n:", tls=false";return l?`${i} = ${_d("dHJvamFu")}, ${o}, ${s}, password=${a}, ws=true, ws-path=${r}, ws-headers=Host:${n}${p}`:`${i} = ${_d("dmxlc3M=")}, ${o}, ${s}, username=${a}, ws=true, ws-path=${r}, ws-headers=Host:${n}${p}`});return`#!MANAGED-CONFIG\n[General]\nloglevel = notify\ndns-server = 223.5.5.5, 119.29.29.29\n\n[Proxy]\n${a.join("\n")}\n\n[Proxy Group]\n🚀 节点选择 = select, ${a.map(t=>t.split(" = ")[0]).join(", ")}\n🌐 全球直连 = select, DIRECT\n🐟 漏网之鱼 = select, 🚀 节点选择\n\n[Rule]\nGEOIP,CN,DIRECT\nFINAL,🐟 漏网之鱼\n`}function De(t,e){const n=t.host,r="/"+t.path,a=e.map((t,e)=>{const{user:a,srv:o,prt:s,name:i,isTrojan:l,tls:c}=de(t,e),p=c?", tls=true, skip-cert-verify=true, sni="+n:", tls=false";return l?`${i} = ${_d("dHJvamFu")}, ${o}, ${s}, password=${a}, ws=true, ws-path=${r}, ws-headers=Host:${n}${p}`:`${i} = ${_d("dmxlc3M=")}, ${o}, ${s}, username=${a}, ws=true, ws-path=${r}, ws-headers=Host:${n}${p}`}),o=a.map(t=>t.split(" = ")[0]).join(", ");return`[General]\ndns-server = 223.5.5.5, 119.29.29.29\n\n[Proxy]\n${a.join("\n")}\n\n[Proxy Group]\n🚀 节点选择 = select, ${o}\n🌐 全球直连 = select, DIRECT\n🐟 漏网之鱼 = select, ${o}\n\n[Rule]\nGEOIP,CN,DIRECT\nFINAL,🐟 漏网之鱼\n`}function Oe(t,e){const n=t.host,r="/"+t.path,a=t=>t.indexOf(":")>=0?"["+t+"]":t,o=e.map((t,e)=>{const{user:o,srv:s,prt:i,name:l}=de(t,e);if(t.startsWith(_d("dHJvamFu")+"://"))return`${_d("dHJvamFu")}=${a(s)}:${i}, password=${o}, over-tls=true, tls-host=${n}, ${_d("b2Jmcw==")}=wss, ${_d("b2Jmcw==")}-host=${n}, ${_d("b2Jmcw==")}-uri=${r}, tls-verification=true, tag=${l}`;const c="tls"===(pe(t,"security")||"tls");return`${_d("dmxlc3M=")}=${a(s)}:${i}, method=none, password=${o}, ${_d("b2Jmcw==")}=${c?"wss":"ws"}, ${_d("b2Jmcw==")}-host=${n}, ${_d("b2Jmcw==")}-uri=${r}${c?", tls-verification=true, tls13=true":""}, tag=${l}`}),s=e.map((t,e)=>{const n=t.indexOf("#");if(n<0)return`节点${e+1}`;try{return decodeURIComponent(t.slice(n+1))||`节点${e+1}`}catch(t){return`节点${e+1}`}}).join(", ");return`[general]\nnetwork_check_url=http://www.gstatic.com/generate_204\nserver_check_url=http://www.gstatic.com/generate_204\ndns_exclusion_list=*.cmpassport.com, *.qq.com, *.weibo.com, *.icloud.com\n[dns]\nserver=223.5.5.5\nserver=119.29.29.29\n[server_local]\n${o.join("\n")}\n[policy]\nstatic=🚀 节点选择, ${s}, img-url=https://fastly.jsdelivr.net/gh/${_d("S29vbHNvbg==")}/${_d("UXVyZQ==")}@master/IconSet/Color/Proxy.png\nstatic=🌐 全球直连, direct, img-url=https://fastly.jsdelivr.net/gh/${_d("S29vbHNvbg==")}/${_d("UXVyZQ==")}@master/IconSet/Color/Direct.png\nstatic=🐟 漏网之鱼, 🚀 节点选择, direct, img-url=https://fastly.jsdelivr.net/gh/${_d("S29vbHNvbg==")}/${_d("UXVyZQ==")}@master/IconSet/Color/Final.png\n[filter_local]\ngeoip, cn, 🌐 全球直连\nfinal, 🐟 漏网之鱼\n`}let Re=!1;const _e=4;let Me=0;const Fe=[];function ze(){return Me<_e?(Me++,Promise.resolve()):new Promise(t=>Fe.push(t))}function qe(){const t=Fe.shift();t?t():Me--}async function je(t,e){const n=[];let r=0;const a=Array.from({length:Math.min(_e,t.length)},async()=>{for(;r<t.length;){const a=r++;await ze();try{n[a]=await e(t[a],a)}catch(t){n[a]=!1}finally{qe()}}});return await Promise.all(a),n}let Be=null,_rq=null;async function Ge(e,n,r){if(!Re)return!0;if(v(e))return!0;const a=r||2e3;try{const r=t({hostname:e,port:n});await Promise.race([r.opened,new Promise((t,e)=>setTimeout(()=>e(new Error("proxy timeout")),a))]);try{r.close()}catch(t){}return!0}catch(t){return!1}}const He={t:0,list:null};let Ke="";const We={list:null,at:0,key:""};async function Ve(){const t=String(Ke||"").trim(),e=t||"__default__";if(We.key===e&&We.list&&Date.now()-We.at<6e5)return We.list;const n=[],r=(t?se(t).filter(t=>/^https?:\/\//i.test(t)).slice(0,10).map(t=>({url:t,label:"兜底",count:100})):U).map(async t=>{try{const e=await oe(t.url,{headers:{"User-Agent":"Mozilla/5.0"}},8e3);if(!e.ok)return;const r=await e.text(),a=[];for(const e of r.split(/[\r\n]+/)){const n=e.trim().match(/^(\d{1,3}(?:\.\d{1,3}){3})(?::(\d+))?$/);n&&a.length<t.count&&a.push({ip:n[1],port:n[2]?parseInt(n[2],10):443,name:t.label+"-"+String(a.length+1).padStart(2,"0")})}a.forEach(t=>n.push(t))}catch(t){}});return await Promise.all(r),We.list=n,We.at=Date.now(),We.key=e,n}async function Je(e,n,r,a,o,s,i){e.path&&"/"!==e.path&&""!==e.path||(e.path=e.uuid);let l="";try{l=(new URL(n).searchParams.get("country")||"").trim()}catch(t){}const c=(l||String(e.countryLabel||"")).trim(),p=await Ue(i)||o;if(e.filter&&e.filter.ipType,ve(e)&&await async function(){const t=Date.now();if(!(b&&t-b<216e5))try{const e=await fetch("https://www.cloudflare.com/ips-v6/",{signal:AbortSignal.timeout(1e4)});if(!e.ok)return;const n=await e.text(),r=String(n).split("\n").map(t=>t.trim()).filter(t=>/^[0-9a-fA-F:.]+\/\d+$/.test(t)&&t.indexOf(":")>=0);r.length>=3&&(g=r,b=t)}catch(t){}}(),""===(e.optimizer&&e.optimizer.subMode||"")&&e.probeAlive&&(!e.preferredIPs||e.preferredIPs.length<80)){let n=!1;try{const t=await async function(t){if(!t||!t.K||"function"!=typeof t.K.get)return null;try{const e=await t.K.get("initPool");if(!e)return null;const n=JSON.parse(e);return n&&Array.isArray(n.ips)&&n.ips.length?Date.now()-(n.at||0)>216e5?null:n.ips:null}catch(t){return null}}(i);if(t&&t.length){const r=new Set((e.preferredIPs||[]).map(t=>t.ip)),a=t.filter(t=>t&&t.ip&&!r.has(t.ip));a.length&&(e.preferredIPs=[...e.preferredIPs||[],...a]),n=!0}}catch(t){}if(!n)try{const[n,r,a]=await Promise.all([Ve().catch(()=>[]),Vt(200).catch(()=>null),Promise.resolve(ot(E.join("\n")))]),o=[],s=[],l=new Set((e.preferredIPs||[]).map(t=>t.ip));for(const t of[...e.preferredIPs||[],...n||[],...r||[],...a]){if(!t||!t.ip||l.has(t.ip))continue;l.add(t.ip);const e={ip:t.ip,port:t.port||443,name:t.name||"",relay:!!t.relay};e.relay||!v(e.ip)?s.push(e):o.push(e)}const c=s.slice(0,24),p=o.slice(0,16),[d,u]=await Promise.all([je(c,e=>async function(e,n,r){return!Re||async function(e,n,r){const a=r||2500;try{const r=t({hostname:e,port:n});await Promise.race([r.opened,new Promise((t,e)=>setTimeout(()=>e(new Error("tcp timeout")),a))]);const o=r.writable.getWriter(),s=r.readable.getReader();await o.write((new TextEncoder).encode("GET / HTTP/1.1\r\nHost: "+e+"\r\nUser-Agent: Mozilla/5.0\r\n"+_d("Q29ubmVjdA==")+"ion: close\r\n\r\n"));const i=await Promise.race([s.read(),new Promise((t,e)=>setTimeout(()=>e(new Error("http timeout")),a))]);try{r.close()}catch(t){}const l=(new TextDecoder).decode(i.value||new Uint8Array(0));return/^HTTP\/1\.[01] (200|204)/.test(l)}catch(t){return!1}}(e,n,r)}(e.ip,e.port||443,2500)),je(p,t=>Ge(t.ip,t.port||443,2500))]),f=c.filter((t,e)=>d[e]),h=[...p.filter((t,e)=>u[e]),...o.slice(p.length)].slice(0,210),m=[...f,...s.slice(c.length)].slice(0,40);e.preferredIPs=[...e.preferredIPs||[],...h,...m].slice(0,250),async function(t,e){if(t&&t.K&&"function"==typeof t.K.put)try{const n=(e||[]).filter(t=>t&&t.ip).map(t=>({ip:t.ip,port:t.port||443,name:t.name||"",relay:!!t.relay})).slice(0,250);if(!n.length)return;if(!K())return;await t.K.put("initPool",JSON.stringify({at:Date.now(),ips:n}))}catch(t){}}(i,e.preferredIPs)}catch(t){}}const d=!/\.workers\.dev$/i.test(new URL(n).hostname),u=Object.assign({},e,{host:e.host||new URL(n).hostname});d&&(u.tlsOnly=!0),u.enableVless||u.enableTrojan||u.enableXhttp||(u.enableVless=!0);const h=e.optimizer&&e.optimizer.subMode||"";if(e.homeWan)try{u.homeWanNodes=await X(i,u)}catch(t){}let m=[];const x=e.filter&&e.filter.ipType||[],w=1===x.length&&"IPv6"===x[0],k=ve(e),C=ot(E.join("\n")).map(t=>({ip:t.ip,port:t.port||443,name:t.name||"优选IP-"+String(E.indexOf(t)+1).padStart(2,"0")}));if("custom"===h){const t=!(!e.optimizer||!e.optimizer.subIncludeDefault),n=!t;if(m=await ie(e.preferredDomains||"",n?200:40,n?2e3:300,t,t,k),t){const t=await ie($,40,240,!1,!0,k),e=new Set(t.map(t=>t.ip));m=[...t,...m.filter(t=>!e.has(t.ip))],u.preferredIPs=[...u.preferredIPs||[],...C],u.optimizer||(u.optimizer={}),u.optimizer.fillCount=Math.max(parseInt(u.optimizer.fillCount)||0,800)}}else if(""===h){const t=e.src||{},n=!0===t.native,r=!1!==t.prefDomain,a=!1!==t.prefIp,o=!0===t.customPref;n&&!w&&(u.preferredDomains=(u.preferredDomains?u.preferredDomains+"\n":"")+u.host+"#原生地址"),o||(u.preferredIPs=[]);const s=(e.filter||{}).region;if(Array.isArray(s)?0===s.length||s.includes("all"):!s||"all"===s){if(m=[],r&&!w){const t=await async function(t){if(!Re)return String(t||"").split(/[\n,;]+/).map(t=>t.trim().replace(/^\*\./,"")).filter(Boolean).join("\n");if(Date.now()-He.t<6e5&&null!==He.list)return He.list;const e=String(t||"").split(/[\n,;]+/).map(t=>t.trim().replace(/^\*\./,"")).filter(Boolean),n=e.slice(0,12),r=e.slice(12),a=(await je(n,async t=>{const e=await async function(t){try{const e=await oe("https://cloudflare-dns.com/dns-query?name="+encodeURIComponent(t)+"&type=A",{headers:{accept:"application/dns-json"}},4e3);return e&&e.ok&&((await e.json()).Answer||[]).filter(t=>1===t.type&&/^\d+\.\d+\.\d+\.\d+$/.test(t.data)).map(t=>t.data).filter(v)[0]||null}catch(t){return null}}(t);return e&&v(e)?{d:t,ok:await Ge(e,443)}:{d:t,ok:!1}})).map((t,e)=>t&&t.ok?n[e]:null).filter(Boolean).concat(r);return He.t=Date.now(),He.list=a.join("\n"),He.list}($);t&&(u.preferredDomains=(u.preferredDomains?u.preferredDomains+"\n":"")+t)}if(a&&!w){const t=await Vt(150);t&&t.length&&(u.preferredIPs=[...u.preferredIPs||[],...t]);try{const t=await ie(P,100,600,!0,!0,!1);t&&t.length&&(u.preferredIPs=[...u.preferredIPs||[],...t])}catch(t){}}if(k&&r)try{const t=$+(w?"\n"+A.join("\n"):""),e=await ie(t,40,w?800:240,!1,!0,!0);e&&e.length&&(u.preferredIPs=[...u.preferredIPs||[],...e])}catch(t){}}else r&&(m=await ie($,100,300,!1,!0,k));if(a)if(w){const t=C.map(t=>({ip:rt(t.ip),port:t.port||443,name:t.name})).filter(t=>t.ip);u.preferredIPs=[...u.preferredIPs||[],...t]}else if(k){const t=C.map(t=>({ip:rt(t.ip),port:t.port||443,name:t.name})).filter(t=>t.ip);u.preferredIPs=[...u.preferredIPs||[],...C,...t]}else u.preferredIPs=[...u.preferredIPs||[],...C];if(!(n||r||a||o))if(w){const t=C.map(t=>({ip:rt(t.ip),port:t.port||443,name:t.name})).filter(t=>t.ip);u.preferredIPs=[...u.preferredIPs||[],...t]}else u.preferredIPs=[...u.preferredIPs||[],...C];if(w&&u.preferredIPs&&(u.preferredIPs=u.preferredIPs.filter(t=>String(t.ip).indexOf(":")>=0)),u.optimizer||(u.optimizer={}),u.optimizer.fillCount=Math.max(parseInt(u.optimizer.fillCount)||0,w?0:1e3),e.probeAlive&&u.preferredIPs&&u.preferredIPs.length){const t=T.map((t,e)=>({ip:t,port:443,name:"优选IP-S"+String(e+1).padStart(2,"0")})),e=new Set(t.map(t=>t.ip));u.preferredIPs=[...t,...u.preferredIPs.filter(t=>!e.has(t.ip))]}}const S=e._skipIssued&&e._skipIssued.size?e._skipIssued:null;if(m.length){let t=m;S&&(t=[...m.filter(t=>!S.has(t.ip)),...m.filter(t=>S.has(t.ip))]);const e=(u.preferredIPs||[]).length;t=t.map((t,n)=>/^[A-Za-z0-9.-]+\.[A-Za-z]{2,}-\d+$/.test(t.name||"")?Object.assign({},t,{name:"优选IP-"+String(e+n+1).padStart(2,"0")}):t),u.preferredIPs=[...u.preferredIPs||[],...t]}w&&u.preferredIPs&&(u.preferredIPs=u.preferredIPs.filter(t=>String(t.ip).indexOf(":")>=0)),a=(a||"").toLowerCase();const U=(r||"").toLowerCase(),L=[_d("Y2xhc2g="),_d("c2luZ2JveA=="),_d("c2luZy1ib3g="),_d("c3VyZ2U="),_d("c3VyZmJvYXJk"),_d("bG9vbg=="),_d("cXVhbng="),_d("cXVhbnR1bXVsdHg=")].includes(U)||_r3.test(a);let N=L?300:800;if("custom"===h&&e.optimizer&&e.optimizer.subIncludeDefault&&(N=L?Math.max(N,300):Math.max(N,800)),"custom"!==h||e.optimizer&&e.optimizer.subIncludeDefault||(N=L?Math.max(N,800):Math.max(N,2e3)),!1===e.polling&&(N=1e4),e.nodeLimit){const t=parseInt(e.nodeLimitCount)||0;t>0&&(N=Math.min(t,1e3))}e._quotaCap&&(N=Math.min(N,e._quotaCap));const D="random"===h?Object.assign({},e.filter,{region:"all"}):e.filter,O=!(!e.homeWan||"custom"===h);let R;R=O?function(t,e,n){const r=Array.isArray(n)?n.slice(0,3):[];if(r.length>=3)return r;const a=new Set;for(const t of r)try{a.add(ce(t).host)}catch(t){}for(const e of T){if(r.length>=3)break;a.has(e)||(a.add(e),r.push(Zt(t,e,443,"隧道前置-"+String(r.length+1).padStart(2,"0"))))}return r}(u,0,ge(await le(u,N,S),D).slice(0,3)):ge(await le(u,N,S),D),O||(R=ye(R,e,w));const _="custom"===h&&!(e.optimizer&&e.optimizer.subIncludeDefault);if(O||_||w||function(t,e,n){if(t.length>=n)return;const r=new Set;for(const e of t)try{r.add(ce(e).host)}catch(t){}e.src&&!0===e.src.native&&(a=>{if(t.length>=n)return;if(r.has(a))return;r.add(a);const o=Qt("原生地址",!!e.enableVless,!!e.enableTrojan,!!e.enableXhttp);e.enableVless&&t.push(Zt(e,a,443,o.v)),e.enableTrojan&&t.push(te(e,a,443,o.t)),e.enableXhttp&&t.push(Zt(e,a,443,o.x,{type:_d("eGh0dHA=")}))})(e.host)}(R,u,N),O||!e.probeAlive||w||_&&R.length>0||function(t,e){const n=t.length+3*T.length,r=new Set;for(const e of t)try{r.add(ce(e).host)}catch(t){}let a=0;for(const o of T){if(t.length>=n)break;if(r.has(o))continue;r.add(o),a++;const s=Qt("内置·保底-"+String(a).padStart(2,"0"),!!e.enableVless,!!e.enableTrojan,!!e.enableXhttp);if(e.enableVless&&t.push(Zt(e,o,443,s.v)),t.length>=n)break;if(e.enableTrojan&&t.push(te(e,o,443,s.t)),t.length>=n)break;e.enableXhttp&&t.push(Zt(e,o,443,s.x,{type:_d("eGh0dHA=")}))}}(R,u),!O&&e.nodeLimit&&h&&!_&&R.length<N){const t=N-R.length,e=new Set;for(const t of R)try{e.add(ce(t).host)}catch(t){}const n=(t,n,r)=>{R.length>=N||e.has(t)||(e.add(t),R.push(Zt(u,t,n||443,r)))};let r=0;try{const e=await Ve(),r=S?e.filter(t=>!S.has(t.ip)):e,a=r.length>=t?r:e;for(const t of a)if(n(t.ip,t.port,t.name||"优选IP-"+String(t.port)),R.length>=N)break}catch(t){}if(R.length<N){const t=N-R.length,e=g,a=at(w?e:k?[...f,...e]:f,3*t),o=S?a.filter(t=>!S.has(t)):a,s=o.length>=t?o:a;for(const t of s){if(R.length>=N)break;r++,n(t,443,"优选IP-"+String(r).padStart(3,"0"))}}}O||(R=ye(R,e,w)),function(t,e,n){if(t.length<2)return t;const r=!1!==e.loadBalance&&"random"!==n,a="tail"===(e&&e.ipv6Mode),o=[],s=[],i=[];for(const e of t)we(e)?o.push(e):a&&be(e)?i.push(e):s.push(e);if(!o.length&&!i.length)return r&&ke(t),t;r&&(ke(o),ke(s)),t.length=0;for(let e=0;e<o.length;e++)t.push(o[e]);for(let e=0;e<s.length;e++)t.push(s[e]);for(let e=0;e<i.length;e++)t.push(i[e])}(R,e,h),R.length>N&&(R.length=N),R=function(t,e,n){const r=String(n||"").trim().toUpperCase(),a=String(e||"").toUpperCase(),o="OFF"===r?"":y[r]||I[a]||a||"",s=new Set;return t.map(t=>{let e="";try{e=de(t,0).name||""}catch(t){e=""}const n=e;let r=Ce(e);!r&&o&&(r=o,e=e?o+"·"+e:o+"·优选"),e||(e="节点");let a=e,i=2;for(;s.has(a);)a=e+"·"+i,i++;return s.add(a),a===n?t:function(t,e){const n=String(t),r=n.indexOf("#");return(r>=0?n.slice(0,r):n)+"#"+Yt(e)}(t,a)})}(R,p,c);const M=[],F=new Set;for(const t of R)try{const{host:e}=ce(t);Y(e)&&!F.has(e)&&(F.add(e),M.push(e))}catch(t){}if(!R.length)for(let t=0;t<T.length;t++)try{R.push(Zt(u,T[t],443,"兜底-"+String(t+1).padStart(2,"0")))}catch(t){}let z,q;const j=()=>{const t=R.slice();try{t.push(Zt(u,u.host,443,"域名直连·对照"))}catch(t){}return{type:"text/plain",body:t.join("\n"),issued:M}};if(_d("a2FyaW5n")===U)return j();if(_d("Y2xhc2g=")===U)z="text/yaml",q=Ee(u,R,o,new URL(n).origin+"/crules/"+Ck(u),s,c,p);else if(_d("c2luZ2JveA==")===U||_d("c2luZy1ib3g=")===U||_d("aGlkZGlmeQ==")===U)z="application/json",q=Le(u,R);else if(_d("c3VyZ2U=")===U)z="text/plain",q=Ne(u,R);else if(_d("c3VyZmJvYXJk")===U)z="text/plain",q=$e(u,R);else if(_d("bG9vbg==")===U)z="text/plain",q=De(u,R);else if(_d("cXVhbng=")===U||_d("cXVhbnR1bXVsdHg=")===U)z="text/plain",q=Oe(u,R);else if("plain"===U||"raw"===U)z="text/plain",q=R.join("\n");else if(_d("djJyYXk=")===U||_d("djJyYXlu")===U||_d("c2hhZG93cm9ja2V0")===U||_d("bmVrb3JheQ==")===U||_d("c3Rhc2g=")===U)z="text/plain",q=R.join("\n");else if(a.includes(_d("Y2xhc2g="))||a.includes(_d("c3Rhc2g=")))z="text/yaml",q=Ee(u,R,o,new URL(n).origin+"/crules/"+Ck(u),s,c,p);else{if(_r4.test(a))return j();a.includes(_d("c2luZy1ib3g="))?(z="application/json",q=Le(u,R)):a.includes(_d("c3VyZ2U="))?(z="text/plain",q=Ne(u,R)):a.includes(_d("c3VyZmJvYXJk"))?(z="text/plain",q=$e(u,R)):a.includes(_d("bG9vbg=="))?(z="text/plain",q=De(u,R)):a.includes(_d("cXVhbnR1bXVsdA=="))?(z="text/plain",q=Oe(u,R)):a.includes("mozilla")?(z="text/yaml",q=Ee(u,R,o,new URL(n).origin+"/crules/"+Ck(u),s,c,p)):(z="text/plain",q=R.join("\n"))}return{type:z,body:q,issued:M}}const Xe=String.raw`
<!DOCTYPE html>
<html lang="zh-CN" data-theme="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>控制台</title>
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='3' y='3' width='18' height='18' rx='5' fill='%23f6821f'/%3E%3Cpath d='M8 15V9l8 6V9' stroke='%230d131b' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E">
<script src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js"></script>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#0b0f14;--bg2:#0f141b;--card:#131a23;--card2:#182130;--border:#243041;
  --text:#e8eef6;--dim:#8fa3ba;--faint:#5c6f86;
  --accent:#f6821f;--accent2:#ff9a3d;--accent-dim:rgba(246,130,31,.14);
  --ok:#34c98e;--ok-dim:rgba(52,201,142,.13);--err:#ff5c5c;--err-dim:rgba(255,92,92,.13);--warn:#ffb454;
  --sb-bg:#0d131b;--sb-text:#9fb0c5;--sb-dim:#5c6f86;--sb-border:#1c2737;
  --sb-active-bg:rgba(246,130,31,.13);--sb-active-text:#ffa14d;--sb-active-bar:#f6821f;
  --shadow:0 10px 30px rgba(0,0,0,.28);
}
[data-theme="light"]{
  --bg:#f3f5f9;--bg2:#e9edf3;--card:#ffffff;--card2:#f6f8fb;--border:#dde4ee;
  --text:#1b2634;--dim:#5d6b7d;--faint:#93a1b3;
  --accent:#e8720e;--accent2:#f6821f;--accent-dim:rgba(232,114,14,.10);
  --ok:#1f9d6a;--ok-dim:rgba(31,157,106,.12);--err:#d94848;--err-dim:rgba(217,72,72,.10);--warn:#c07c1e;
  --sb-bg:#ffffff;--sb-text:#5d6b7d;--sb-dim:#a2aec0;--sb-border:#e7ebf2;
  --sb-active-bg:rgba(232,114,14,.09);--sb-active-text:#c96408;--sb-active-bar:#e8720e;
  --shadow:0 10px 28px rgba(30,45,70,.10);
}
html,body{height:100%}
body{background:var(--bg);color:var(--text);font-family:"PingFang SC","Microsoft YaHei","Segoe UI",system-ui,sans-serif;font-size:14px;line-height:1.55}
.app{display:flex;min-height:100vh}
a{color:var(--accent);text-decoration:none}
a:hover{text-decoration:underline}

/* ===== 侧边栏 ===== */
.sidebar{width:236px;flex:0 0 236px;background:var(--sb-bg);border-right:1px solid var(--sb-border);display:flex;flex-direction:column;position:sticky;top:0;height:100vh;z-index:50;transition:background .25s,border-color .25s}
.brand{display:flex;align-items:center;gap:10px;padding:18px 18px 14px}
.mark{width:34px;height:34px;border-radius:9px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;flex:0 0 34px;box-shadow:0 4px 12px var(--accent-dim)}
.mark svg{width:18px;height:18px}
.mark path{stroke:#0d131b}
.brand .bt{display:flex;flex-direction:column;line-height:1.2}
.brand .bt b{font-size:15px;letter-spacing:.3px;color:var(--text)}
.brand .bt span{font-size:11px;color:var(--sb-dim)}
.nav{flex:1;padding:6px 10px 12px;overflow-y:auto}
.nav-item{display:flex;align-items:center;gap:10px;padding:9px 12px;margin:2px 0;border-radius:8px;color:var(--sb-text);cursor:pointer;border:none;background:transparent;width:100%;text-align:left;font-size:13.5px;position:relative;transition:background .15s,color .15s}
.nav-item svg{width:17px;height:17px;flex:0 0 17px;stroke:currentColor}
.nav-item:hover{background:var(--sb-active-bg);color:var(--sb-active-text)}
.nav-item.on{background:var(--sb-active-bg);color:var(--sb-active-text);font-weight:600}
.nav-item.on::before{content:"";position:absolute;left:-10px;top:8px;bottom:8px;width:3px;border-radius:0 3px 3px 0;background:var(--sb-active-bar)}
.side-foot{padding:12px 18px;border-top:1px solid var(--sb-border);display:flex;align-items:center;justify-content:space-between;font-size:11.5px;color:var(--sb-dim)}
.ver-chip{font-family:ui-monospace,Consolas,monospace;background:var(--accent-dim);color:var(--sb-active-text);padding:2px 8px;border-radius:6px;font-size:11px;border:1px solid transparent;cursor:pointer;transition:border-color .15s,color .15s,background .15s}
.ver-chip:hover{color:var(--accent);border-color:var(--accent)}
.ver-chip.has-update{color:var(--accent);background:var(--accent-dim);border-color:var(--accent)}
.ver-chip.checking{opacity:.7;pointer-events:none}

/* ===== 主区 ===== */
.main{flex:1;min-width:0;display:flex;flex-direction:column}
.topbar{display:flex;align-items:center;gap:14px;padding:14px 26px;border-bottom:1px solid var(--border);background:var(--bg);position:sticky;top:0;z-index:40}
.topbar h1{font-size:17px;font-weight:600;flex:1;min-width:0}
.pill{display:inline-flex;align-items:center;gap:6px;font-size:12px;padding:4px 10px;border-radius:20px;background:var(--ok-dim);color:var(--ok);white-space:nowrap}
.pill.off{background:var(--err-dim);color:var(--err)}
.pill .dot{width:6px;height:6px;border-radius:50%;background:currentColor}
.icon-btn{width:34px;height:34px;border-radius:8px;border:1px solid var(--border);background:var(--card);color:var(--text);cursor:pointer;display:flex;align-items:center;justify-content:center;flex:0 0 34px}
.icon-btn:hover{border-color:var(--accent);color:var(--accent)}
.icon-btn svg{width:16px;height:16px;stroke:currentColor}
.hamb{display:none}
.wdwarn{display:none;background:rgba(59,130,246,.10);border-bottom:1px solid rgba(59,130,246,.35);color:var(--accent2);padding:9px 26px;font-size:12.5px;line-height:1.6;text-align:center}
[data-theme="light"] .wdwarn{color:var(--accent);background:rgba(29,95,168,.06);border-bottom-color:rgba(29,95,168,.35)}

.content{padding:22px 26px 96px;max-width:1180px;width:100%;margin:0 auto}
.view{display:none}
.view.on{display:block;animation:fade .18s ease}
@keyframes fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
.view-head{margin-bottom:16px}
.view-head h2{font-size:20px;font-weight:700}
.view-head p{color:var(--dim);font-size:13px;margin-top:4px}

/* ===== 卡片 ===== */
.grid2{display:grid;grid-template-columns:repeat(auto-fit,minmax(330px,1fr));gap:16px}
.grid3{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:16px}
.filter-region{display:flex;align-items:center;gap:14px;padding:2px 0 14px;border-bottom:1px solid var(--border);margin-bottom:14px;flex-wrap:wrap}
.filter-region-label{font-size:13px;font-weight:600;white-space:nowrap}
.filter-row{display:flex;flex-wrap:wrap}
.filter-group{flex:0 1 auto;min-width:180px;padding:0 14px;border-left:1px solid var(--border)}
.filter-group:first-child{border-left:none;padding-left:0}
.filter-group-title{font-size:12px;font-weight:600;color:var(--dim);margin-bottom:9px;letter-spacing:.3px}
.pills{display:flex;flex-wrap:wrap;gap:8px}
.pills.nowrap{flex-wrap:nowrap;white-space:nowrap}
.pills.nowrap .spill span{padding:5px 10px;font-size:12px}
.spill input{position:absolute;opacity:0;pointer-events:none}
.spill span{display:inline-block;padding:5px 14px;border:1px solid var(--border);border-radius:999px;font-size:12.5px;color:var(--dim);cursor:pointer;background:var(--card);transition:border-color .15s,color .15s,background .15s;user-select:none;line-height:1.5}
.spill:hover span{border-color:var(--accent);color:var(--accent)}
.spill input:checked + span{background:var(--accent);border-color:var(--accent);color:#fff;font-weight:600;border-radius:999px}.card{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:18px;margin-bottom:16px}
.card h3{font-size:14px;font-weight:600;margin-bottom:14px;display:flex;align-items:center;gap:8px}
.card h3 .tick{width:3px;height:14px;border-radius:2px;background:var(--accent)}
.card .sub{font-size:12px;color:var(--dim);font-weight:400;margin-left:auto}
.kv{display:flex;justify-content:space-between;gap:12px;padding:7px 0;border-bottom:1px dashed var(--border);font-size:13px}
.kv:last-child{border-bottom:none}
.kv .k{color:var(--dim);white-space:nowrap}
.kv .v{text-align:right;word-break:break-all;font-family:ui-monospace,Consolas,monospace;font-size:12.5px}
.kv .v.ok{color:var(--ok)}.kv .v.bad{color:var(--err)}.kv .v.warn{color:var(--warn)}

/* ===== 表单 ===== */
.field{margin-bottom:12px}
.field>label{display:block;font-size:12.5px;color:var(--dim);margin-bottom:6px;font-weight:500}
input[type=text],input[type=password],input[type=number],select,textarea{
  width:100%;background:var(--card2);border:1px solid var(--border);color:var(--text);
  border-radius:8px;padding:8px 11px;font-size:13.5px;outline:none;transition:border-color .15s,box-shadow .15s;
  font-family:inherit;
}
input:focus,select:focus,textarea:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-dim)}
textarea{resize:vertical;line-height:1.5;font-family:ui-monospace,Consolas,monospace;font-size:12.5px}
select{cursor:pointer;-webkit-appearance:none;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%238fa3ba' stroke-width='1.6' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 10px center;padding-right:30px}
[data-theme="light"] select{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%235d6b7d' stroke-width='1.6' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")}
input[type=checkbox]{accent-color:var(--accent);width:15px;height:15px;cursor:pointer}
.hint{font-size:12px;color:var(--dim);margin-top:6px;line-height:1.6}
.inrow{display:flex;gap:8px;align-items:flex-start}
.inrow>div{flex:1}
.inrow .btn{margin-top:1px;white-space:nowrap}
.checkline{display:flex;align-items:center;gap:20px;padding:5px 0;font-size:13px;cursor:pointer}
.checkline input{margin:0;flex:0 0 auto;vertical-align:middle}
.checkline span{line-height:1.5}
.proto-row{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px dashed var(--border);font-size:13.5px}
.proto-row:last-child{border-bottom:none}

/* 开关 */
.switch{position:relative;display:inline-block;width:40px;height:22px;flex:0 0 40px}
.switch input{opacity:0;width:0;height:0}
.sl{position:absolute;inset:0;background:var(--border);border-radius:22px;cursor:pointer;transition:background .18s}
.sl::before{content:"";position:absolute;width:16px;height:16px;left:3px;top:3px;background:#fff;border-radius:50%;transition:transform .18s}
.switch input:checked+.sl{background:var(--accent)}
.switch input:checked+.sl::before{transform:translateX(18px)}

/* 按钮 */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--border);background:var(--card2);color:var(--text);border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer;transition:border-color .15s,background .15s,transform .05s;font-family:inherit;white-space:nowrap}
.btn:hover{border-color:var(--accent);color:var(--accent)}
.btn:active{transform:translateY(1px)}
.btn:disabled{opacity:.55;cursor:not-allowed}
.btn.primary{background:linear-gradient(135deg,var(--accent),var(--accent2));border-color:transparent;color:#201308;font-weight:600}
.btn.primary:hover{filter:brightness(1.06);color:#201308}
.btn.danger{background:var(--err-dim);border-color:transparent;color:var(--err)}
.btn.danger:hover{border-color:var(--err)}
.btn.sm{padding:4px 10px;font-size:12px;border-radius:6px}
.btn .dirty-dot{display:none;width:6px;height:6px;border-radius:50%;background:var(--warn)}
.btn.dirty .dirty-dot{display:inline-block}
.row{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.row .grow{flex:1;min-width:140px}

/* 表格 */
.tbl-wrap{overflow-x:auto}
table{width:100%;border-collapse:collapse;table-layout:fixed}
th,td{text-align:left;padding:9px 10px;font-size:13px;border-bottom:1px solid var(--border);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
th{color:var(--dim);font-weight:500;font-size:12px;background:var(--card2)}
td .ip{font-family:ui-monospace,Consolas,monospace;font-size:12.5px}
.badge{display:inline-block;padding:2px 8px;border-radius:10px;font-size:11.5px}
.badge.g{background:var(--ok-dim);color:var(--ok)}
.badge.r{background:var(--err-dim);color:var(--err)}
.mono{font-family:ui-monospace,Consolas,monospace;font-size:12.5px}

/* 消息与提示 */
.msg{display:none;margin-top:12px;padding:9px 12px;border-radius:8px;font-size:12.5px;line-height:1.6}
.msg.show{display:block}
.msg.ok{background:var(--ok-dim);color:var(--ok)}
.msg.err{background:var(--err-dim);color:var(--err)}
.msg.info{background:var(--accent-dim);color:var(--accent2)}
[data-theme="light"] .msg.info{color:#c96408}
pre.code{background:var(--bg2);border:1px solid var(--border);border-radius:8px;padding:12px;font-size:11.5px;line-height:1.55;font-family:ui-monospace,Consolas,monospace;overflow:auto;max-height:260px;white-space:pre-wrap;word-break:break-all;color:var(--dim)}

/* 悬浮操作栏 */
.fbar{position:fixed;right:22px;bottom:22px;display:flex;gap:10px;z-index:60;align-items:center}
.fbar .btn{box-shadow:var(--shadow)}
.saved-at{font-size:11.5px;color:var(--faint);background:var(--card);border:1px solid var(--border);border-radius:8px;padding:5px 10px;box-shadow:var(--shadow);white-space:nowrap}
.toast{position:fixed;left:50%;bottom:26px;transform:translateX(-50%) translateY(80px);background:var(--card);border:1px solid var(--border);color:var(--text);padding:10px 20px;border-radius:10px;font-size:13px;opacity:0;transition:all .25s;z-index:100;box-shadow:var(--shadow);pointer-events:none;max-width:86vw}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.toast.ok{border-color:var(--ok);color:var(--ok)}
.toast.err{border-color:var(--err);color:var(--err)}
.toast.warn{border-color:var(--warn);color:var(--warn)}

/* 分区 */
.sec-title{font-size:12px;color:var(--faint);letter-spacing:1px;margin:20px 0 10px;font-weight:600}
.danger-zone{border:1px solid var(--err);border-radius:12px;padding:16px;background:var(--err-dim)}
.qrbox{display:flex;justify-content:center;padding:12px 0 4px}
.qrbox img{width:168px;height:168px;image-rendering:pixelated;border-radius:8px}
.note-box{background:var(--card2);border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:8px;padding:12px 14px;font-size:12.5px;color:var(--dim);line-height:1.7;margin-bottom:12px}
.steps{list-style:none;counter-reset:st}
.steps li{counter-increment:st;position:relative;padding:0 0 14px 34px;font-size:13px;color:var(--dim)}
.steps li::before{content:counter(st);position:absolute;left:0;top:0;width:22px;height:22px;border-radius:50%;background:var(--accent-dim);color:var(--accent2);display:flex;align-items:center;justify-content:center;font-size:11.5px;font-weight:700}
[data-theme="light"] .steps li::before{color:#c96408}
.steps li b{color:var(--text)}

/* ===== 响应式 ===== */
@media (min-width:1100px){
  /* 右侧避让右下角浮动保存栏（尚未保存/重置/保存全部），避免遮挡筛选勾选项 */
  .filter-grid{padding-right:200px}
}
@media (max-width:960px){
  .sidebar{position:fixed;left:0;top:0;transform:translateX(-100%);transition:transform .22s ease;box-shadow:var(--shadow)}
  .sidebar.open{transform:translateX(0)}
  .hamb{display:flex}
  .content{padding:16px 16px 96px}
  .topbar{padding:12px 16px}
  .grid2,.grid3{grid-template-columns:1fr}
}
@media (max-width:560px){
  th,td{padding:8px 8px}
}
</style>
</head>
<body>
<div class="app">

<!-- ===== 侧边栏 ===== -->
<aside class="sidebar" id="sidebar">
  <div class="brand">
    <div class="mark"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h4l3-7 4 14 3-7h2"/></svg></div>
    <div class="bt"><b>${__B}</b><span>Cloudflare 隧道面板</span></div>
  </div>
  <nav class="nav" id="nav"></nav>
  <div class="side-foot">
    <span>部署版本</span>
    <span class="ver-chip" id="sideVer" title="点击检测更新" onclick="checkUpdate()">v—</span>
  </div>
</aside>

<!-- ===== 主区 ===== -->
<div class="main">
  <div class="topbar">
    <button class="icon-btn hamb" id="hamb" title="菜单"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
    <h1 id="pageTitle">仪表盘</h1>
    <span class="pill" id="connPill"><span class="dot"></span><span id="connText">连接中</span></span>
    <button class="icon-btn" id="themeBtn" title="切换日间 / 夜间"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path id="themeIcon" d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg></button>
  </div>
  <div class="wdwarn" id="wdwarn">当前运行在 *.workers.dev 域名上：订阅与节点下发功能正常；若遇连接不稳或访问受限，建议在 Cloudflare 面板绑定自定义域名后使用。</div>

  <div class="content" id="content">
    <!-- ===== 视图：仪表盘 ===== -->
    <section class="view" data-view="dashboard">
      <div class="view-head"><h2>仪表盘</h2><p>快速开始、订阅管理、配额速览与运行状态</p></div>
      <div class="card">
        <h3><span class="tick"></span>快速开始</h3>
        <ol class="steps">
          <li><b>部署即用</b>：绑定域名后客户端订阅即可获得海量节点（内置 300 条优选 IP 与地区域名源），默认已配好大陆直连分流（大陆应用、微软、苹果直连，国外服务走出口）。</li>
          <li><b>调优节点</b>：在「优选配置」在线测速，把最优 IP 加入优选列表（自定义订阅模式内置常用订阅源，可自行增删，可追加内置优选池与默认节点）。</li>
          <li><b>保障额度</b>：在「配额安全」开启用量监控与自动调节，防止免费额度超支（需在面板设置中配置 Cloudflare 账户 ID 与 API 令牌）。</li>
        </ol>
      </div>
      <div class="card">
        <h3><span class="tick"></span>订阅地址</h3>
        <div class="row" style="margin-bottom:12px">
          <div class="field grow" style="margin:0"><label>订阅格式</label>
            <select id="subFmt">
              <option value="auto">自动识别</option>
              <option value="${_d("Y2xhc2g=")}">${_d("Q2xhc2g=")} / ${_d("TWlob21v")}</option>
              <option value="${_d("c2luZ2JveA==")}">${_d("U2luZy1ib3g=")}</option>
              <option value="${_d("a2FyaW5n")}">${_d("S2FyaW5n")}</option>
              <option value="${_d("c3VyZ2U=")}">${_d("U3VyZ2U=")}</option>
              <option value="${_d("c3VyZmJvYXJk")}">${_d("U3VyZmJvYXJk")}</option>
              <option value="${_d("bG9vbg==")}">${_d("TG9vbg==")}</option>
              <option value="${_d("cXVhbng=")}">${_d("UXVhbnR1bXVsdA==")} X</option>
              <option value="${_d("djJyYXk=")}">${_d("djJyYXlO")} / ${_d("U2hhZG93cm9ja2V0")}</option>
              <option value="${_d("c3Rhc2g=")}">${_d("U3Rhc2g=")}</option>
              <option value="plain">明文 ${_d("dmxlc3M=")}</option>
            </select>
          </div>
        </div>
        <div class="field"><label>订阅链接</label>
          <div class="inrow">
            <input type="text" id="subUrl" readonly onclick="this.select()">
            <button class="btn sm" onclick="copySub()">复制</button>
            <button class="btn sm" onclick="toggleQR()">二维码</button>
            <button class="btn sm" onclick="downloadSub()">下载</button>
            <button class="btn sm primary" onclick="previewSub()">预览</button>
          </div>
        </div>
        <div id="qrWrap" style="display:none"></div>
        <p class="hint" style="margin-top:12px" id="subHint"></p>
        <div id="subPrev" style="display:none;margin-top:12px">
          <div class="kv"><span class="k">订阅类型</span><span class="v" id="prevType">—</span></div>
          <div class="kv"><span class="k">节点数量</span><span class="v" id="prevCount">—</span></div>
          <pre class="code" id="prevBody" style="margin-top:10px"></pre>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>地区与线路筛选</h3>
        <div class="filter-region">
          <span class="filter-region-label">节点地区</span>
          <div class="pills">
            <label class="spill"><input type="checkbox" id="fl-region-all" checked><span>全部地区</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-HK"><span>香港</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-TW"><span>台湾</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-US"><span>美国</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-SG"><span>新加坡</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-JP"><span>日本</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-KR"><span>韩国</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-DE"><span>德国</span></label>
          </div>
        </div>
        <div class="filter-row">
          <div class="filter-group">
            <div class="filter-group-title">IP 类型</div>
            <div class="pills">
              <label class="spill"><input type="checkbox" id="fl-ip4" checked><span>IPv4</span></label>
              <label class="spill"><input type="checkbox" id="fl-ip6"><span>IPv6</span></label>
            </div>
          </div>
          <div class="filter-group">
            <div class="filter-group-title">IPv6 下发</div>
            <div class="pills nowrap">
              <label class="spill"><input type="radio" name="ip6mode" id="ip6-off" value="off" checked><span>不下发</span></label>
              <label class="spill"><input type="radio" name="ip6mode" id="ip6-tail" value="tail"><span>仅备胎</span></label>
              <label class="spill"><input type="radio" name="ip6mode" id="ip6-full" value="full"><span>等权混合</span></label>
            </div>
          </div>
          <div class="filter-group">
            <div class="filter-group-title">运营商偏好</div>
            <div class="pills">
              <label class="spill"><input type="checkbox" id="fl-isp-m" checked><span>移动</span></label>
              <label class="spill"><input type="checkbox" id="fl-isp-c" checked><span>联通</span></label>
              <label class="spill"><input type="checkbox" id="fl-isp-t" checked><span>电信</span></label>
            </div>
          </div>
          <div class="filter-group">
            <div class="filter-group-title">地址来源</div>
            <div class="pills nowrap">
              <label class="spill"><input type="checkbox" id="fl-native"><span>原生地址</span></label>
              <label class="spill"><input type="checkbox" id="fl-pref-domain" checked><span>优选域名</span></label>
              <label class="spill"><input type="checkbox" id="fl-pref-ip" checked><span>优选 IP</span></label>
              <label class="spill"><input type="checkbox" id="fl-custom-pref"><span>自定义优选</span></label>
              <label class="spill"><input type="checkbox" id="fl-random-pref"><span>随机优选</span></label>
            </div>
          </div>
        </div>
        <p class="hint" style="margin-top:12px">「节点地区」多选过滤地区；「运营商偏好」按节点名称中的运营商标记过滤（移动/联通/电信），无标记时不生效；「地址来源」控制下发来源（原生地址/优选域名/优选 IP/自定义优选/随机优选）。任一维度无节点时自动放宽，保证订阅非空。<br>
          <b>IPv6 下发</b>（清单质量）：IPv6 到 CF 的可达性取决于客户端所在网络，不少家庭宽带 v6 到 CF 的路径比 v4 差甚至不通，IPv6 节点在客户端逐节点测延迟时会被大量超时项拖长。<b>「不下发」为默认</b>——即使勾选了「IPv6」也不进清单；「仅备胎」= 占比封顶 10% 且整体排到列表尾部，IPv4 打头；「等权混合」= 旧行为。仅勾选 IPv6（单选）时策略自动让位，保证订阅不为空。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>配额速览 <span class="sub" id="dbSub">未配置监控</span></h3>
        <div id="dbWrap" style="display:none">
          <div class="kv"><span class="k">当日请求量</span><span class="v" id="dbReq">—</span></div>
          <div style="margin:10px 0 6px;height:8px;border-radius:6px;background:var(--card2);overflow:hidden">
            <div id="dbBar" style="height:100%;width:0%;border-radius:6px;background:linear-gradient(90deg,var(--ok),var(--accent));transition:width .5s"></div>
          </div>
          <div class="kv"><span class="k">已用额度</span><span class="v" id="dbPct">—</span></div>
        </div>
        <p class="hint" style="margin-top:10px">免费计划 100,000 次/日。在「面板设置」配置 Cloudflare 监控后即可在此查看当日用量；策略见「配额安全」。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>运行状态</h3>
        <div class="kv"><span class="k">协议</span><span class="v" id="stProto">—</span></div>
        <div class="kv"><span class="k">KV 持久化</span><span class="v" id="stKv">—</span></div>
        <div class="kv"><span class="k">面板入口</span><span class="v" id="stEntry">—</span></div>
      </div>
    </section>

    <!-- ===== 视图：节点配置（协议 / TLS / ECH / 落地出站） ===== -->
    <section class="view" data-view="nodes">
      <div class="view-head"><h2>节点配置</h2><p>协议、TLS/ECH、节点测活、负载均衡与落地出站（保存后立即生效）</p></div>
      <div class="grid3">
        <div class="card">
          <h3><span class="tick"></span>协议开关</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-${_d("dmxlc3M=")}" checked><span class="sl"></span></label><span>${_d("VkxFU1M=")} 协议（默认开启）</span></div>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-${_d("dHJvamFu")}"><span class="sl"></span></label><span>${_d("VHJvamFu")} 协议（支持${_d("TWlob21v")}内核）</span></div>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-${_d("eGh0dHA=")}"><span class="sl"></span></label><span>${_d("WEhUVFA=")} 协议（支持${_d("TWlob21v")}内核，须绑定域名开启${_d("Z1JQQw==")}）</span></div>
          <div class="field" style="margin-top:12px"><label>${_d("VHJvamFu")} 密码（留空使用 UUID）</label><input type="text" id="tp-pass" placeholder="${_d("VHJvamFu")} 密码" autocomplete="off"></div>
        </div>
        <div class="card">
          <h3><span class="tick"></span>家宽模式</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="hw-on"><span class="sl"></span></label><span>VPN Gate OpenVPN （仅${_d("TWlob21v")}内核）</span></div>
          <p class="hint">- 每日拉取，取最快 100 台，仅留 TCP 家宽节点（「家宽 + 地区」、同区编号；UDP 剔除）。<br>- 缓存 30 分钟；&lt;30 台强制刷新，失败用旧缓存。<br>- 家宽须经隧道前置拨号；隧道节点 Worker 自动生成、自动测活、不受筛选。<br>- 开启后订阅仅含家宽 + 隧道节点；默认节点不下发（自定义订阅除外）。</p>
        </div>
        <div class="card">
          <h3><span class="tick"></span>TLS 与传输</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="tls-only"><span class="sl"></span></label><span>仅 TLS 端口（跳过 80/8080 等明文端口）</span></div>
          <div class="field" style="margin-top:12px"><label>ALPN 协商（h2 / http/1.1，逗号分隔）</label><input type="text" id="alpn" placeholder="留空自动，如 h2,http/1.1" autocomplete="off"></div>
          <p class="hint">明文端口节点（80/8080/8880/2052/2082/2086/2095）开启「仅 TLS」后从订阅剔除。</p>
        </div>
      </div>
      <div class="grid2">
        <div class="card">
          <h3><span class="tick"></span>节点测活</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-probe-on"><span class="sl"></span></label><span>节点测活（TCP 探测）</span></div>
          <p class="hint" style="margin-top:12px">默认关闭：服务端不做任何批量 TCP 探测，全量下发、客户端自行择优。<b>服务端批量探测是 CF 滥用风控的高危画像（可能触发「检测到网络滥用 / 账号封禁」提示），建议保持关闭。</b>开启后按限额抽测（初始化池 ≤40、域名预检 ≤12、补足 ≤20），剔除判死项后下发；CF 段 IP 禁止出站探测、直接视为可用；自定义订阅 / 随机优选模式不测活。</p>
        </div>
        <div class="card">
          <h3><span class="tick"></span>负载均衡</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-lb-on"><span class="sl"></span></label><span>负载均衡（打乱下发顺序）</span></div>
          <p class="hint" style="margin-top:12px">每次订阅对节点顺序随机轮换（Fisher-Yates），连接分散避免集中踩同一批头部 IP；关闭则固定顺序。<br>
            <b>保底前置</b>：「优选IP-Sxx」（实测高存活 IP）/「内置·保底-XX」/「隧道前置-XX」始终保留在清单头部（组内仍随机轮换），
            其余节点整体乱序——既保证客户端「取第一个」就是稳定节点，又不牺牲分散连接的收益；同时避免这批最稳的节点在节点数封顶时被尾部截断砍掉。</p>
        </div>
        <div class="card">
          <h3><span class="tick"></span>国家标注</h3>
          <div class="field" style="margin-top:10px"><label>无名节点默认国家</label><select id="q-clabel">
            <option value="">按订阅时机房实测（默认）</option>
            <option value="OFF">不标注</option>
            <option value="HK">固定：香港</option>
            <option value="TW">固定：台湾</option>
            <option value="MO">固定：澳门</option>
            <option value="JP">固定：日本</option>
            <option value="SG">固定：新加坡</option>
            <option value="KR">固定：韩国</option>
            <option value="US">固定：美国</option>
            <option value="DE">固定：德国</option>
            <option value="GB">固定：英国</option>
            <option value="FR">固定：法国</option>
            <option value="CA">固定：加拿大</option>
            <option value="AU">固定：澳大利亚</option>
            <option value="SE">固定：瑞典</option>
            <option value="NL">固定：荷兰</option>
            <option value="FI">固定：芬兰</option>
            <option value="IN">固定：印度</option>
            <option value="TR">固定：土耳其</option>
            <option value="BR">固定：巴西</option>
          </select></div>
          <p class="hint" style="margin-top:12px">仅影响无法从名字识别地区的节点（优选IP/保留N/自定名等）。「机房实测」= 真实路由落点，随运营商线路变化（同一网络下全部同名是正常现象）；「固定」只改节点名，不改变实际落地。订阅链接可加 ?country=HK 或 ?country=off 临时覆盖（优先于本设置）。</p>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>ECH 加密（可选）</h3>
        <div class="proto-row"><label class="switch"><input type="checkbox" id="ech-on"><span class="sl"></span></label><span>启用 ECH 加密（需绑定自定义域名）</span></div>
        <div class="grid2" style="margin-top:12px">
          <div class="field" style="margin-bottom:0"><label>ECH 域名（留空用默认 cloudflare-ech.com）</label><input type="text" id="ech-host" placeholder="cloudflare-ech.com" autocomplete="off"></div>
          <div class="field" style="margin-bottom:0"><label>自定义 ECH DNS（DoH 地址，留空用客户端默认）</label><input type="text" id="ech-dns" placeholder="https://223.5.5.5/dns-query" autocomplete="off"></div>
        </div>
        <p class="hint">开启后订阅节点附带 ech 参数与 alpn 协商，客户端需支持 ECH 才生效。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>落地与出站</h3>
        <div class="field"><label>反代 / 落地（留空则直连失败后走内置地区出口）</label><input type="text" id="s-${_d("cHJveHlJUA==")}" placeholder="留空则直连失败后走内置地区出口" autocomplete="off"></div>
        <div class="field"><label>出站（可选）</label><input type="text" id="s-${_d("b3V0Ym91bmQ=")}" placeholder="${_d("c29ja3M1")}://user:pass@1.2.3.4:1080 或 ${_d("c3M6Ly9jaGFjaGEyMA==")}-ietf-poly1305:密码@1.2.3.4:8388" autocomplete="off"></div>
        <p class="hint">支持 ${_d("c29ja3M1")}://（可带 user:pass@）、http(s)://、${_d("c3M6Ly8=")} 或 host:port（默认按 ${_d("c29ja3M1")}，端口 1080）。SS 加密支持 ${_d("YWVzLTEyOC1nY20=")} / ${_d("YWVzLTI1Ni1nY20=")} / ${_d("Y2hhY2hhMjA=")}-ietf-poly1305。</p>
        <div class="field" style="margin-bottom:0"><label>出站方式</label>
          <select id="s-outmode">
            <option value="">默认（优先出口，失败直连）</option>
            <option value="no">直连优先（no）</option>
            <option value="only">仅走出口（only）</option>
          </select>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>保存与生效</h3>
        <div class="note-box" style="margin:0">配置修改后点右下角「保存全部」写入 KV 并生效，订阅与节点构成立即更新；「重置」清空 KV 全部数据并还原初始部署状态。</div>
      </div>
    </section>

    <!-- ===== 视图：优选配置 ===== -->
    <section class="view" data-view="optimizer">
      <div class="view-head"><h2>优选配置</h2><p>拉取候选 IP → 本地测速 → 最优节点加入订阅</p></div>
      <div class="card">
        <h3><span class="tick"></span>在线优选</h3>
        <div class="grid3">
          <div class="field" style="grid-column:span 2;margin:0"><label>数据源</label>
            <select id="o-source">
              <option value="wetest_v4">微测网 IPv4</option>
              <option value="wetest_v6">微测网 IPv6</option>
              <option value="${_d("YmVzdGNm")}">优选 IP 列表（${_d("YmVzdGNm")}）</option>
              <option value="hostmonit">HostMonit 优选</option>
              <option value="cidr">内置 Cloudflare 地址段</option>
              <option value="custom">自定义 URL</option>
            </select>
          </div>
          <div class="field" style="margin:0"><label>默认端口 <span style="font-weight:400;color:var(--faint)">（源未带端口时用）</span></label>
            <select id="o-port" onchange="onPortSel()">
              <optgroup label="HTTPS"><option value="443">443</option><option value="2053">2053</option><option value="2083">2083</option><option value="2087">2087</option><option value="2096">2096</option><option value="8443">8443</option></optgroup>
              <optgroup label="HTTP"><option value="80">80</option><option value="8080">8080</option><option value="8880">8880</option><option value="2052">2052</option><option value="2082">2082</option><option value="2086">2086</option><option value="2095">2095</option></optgroup>
              <option value="custom">自定义…</option>
            </select>
            <input type="text" id="o-portC" style="display:none;margin-top:8px" placeholder="自定义端口号" autocomplete="off">
          </div>
        </div>
        <div class="field" id="o-customWrap" style="display:none;margin-top:12px"><label>自定义数据源 URL <span style="font-weight:400;color:var(--faint)">（多个用换行或分号隔开，上限 50 个，并发拉取；URL 查询串中的逗号原样保留）</span></label><input type="text" id="o-sourceURL" placeholder="https://example.com/ip.txt（多个用换行/分号隔开）" autocomplete="off"></div>
        <div class="field" style="margin-top:8px"><label>兜底优选池 URL <span style="font-weight:400;color:var(--faint)">（可选，换行/分号分隔，上限 10 个；URL 查询串中的逗号原样保留；留空用内置 ${_d("YmVzdGNm")} 地区池）</span></label><input type="text" id="o-fbpool" placeholder="https://a.example/ips.txt;https://b.example/ips.txt" autocomplete="off"></div>
        <div class="grid3" style="margin-top:6px">
          <div class="field" style="margin:0"><label>并发线程（1-50）</label><input type="number" id="o-threads" min="1" max="50" value="5"></div>
          <div class="field" style="margin:0"><label>候选数量</label><input type="number" id="o-count" min="1" value="20"></div>
          <div class="field" style="margin:0"><label>随机补足（0 关闭）</label><input type="number" id="o-fill" min="0" value="0"></div>
        </div>
        <div class="row" style="margin-top:14px">
          <label class="switch"><input type="checkbox" id="o-useCidr" checked><span class="sl"></span></label>
          <span style="font-size:13px;color:var(--dim)">候选不足时用 Cloudflare 地址段随机补足</span>
          <span style="flex:1"></span>
          <button class="btn primary" onclick="runPick()">开始优选</button>
          <button class="btn" onclick="addAllBest()">全部加入最优</button>
        </div>
        <div class="msg" id="oMsg"></div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>测速结果 <span class="sub">本地（浏览器）→ 目标 IP</span></h3>
        <div class="tbl-wrap">
          <table><colgroup><col style="width:42%"><col style="width:18%"><col style="width:16%"><col style="width:24%"></colgroup>
          <thead><tr><th>IP : 端口</th><th>延迟</th><th>状态</th><th>操作</th></tr></thead>
          <tbody id="oTableBody"><tr><td colspan="4" style="text-align:center;color:var(--faint)">尚未测速 — 点击「开始优选」拉取候选</td></tr></tbody></table>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>优选节点</h3>
        <div class="grid2">
          <div class="field" style="margin:0"><label>订阅模式</label>
            <select id="o-submode" onchange="onSubMode()">
              <option value="">关闭（使用面板默认节点池）</option>
              <option value="custom">自定义订阅（支持汇聚）</option>
              <option value="random">随机优选模式（官方接口）</option>
            </select>
          </div>
          <div class="field" style="margin:0"><label>自定义模式下追加默认节点</label>
            <select id="o-subinc">
              <option value="0">关闭（仅自定义节点）</option>
              <option value="1">开启（追加内置优选池与默认地区源）</option>
            </select>
          </div>
        </div>
        <div class="field" id="sm-custom" style="margin-top:14px;display:none">
          <label>优选节点（域名 / 优选 API / IP，每行一个；IP 格式 IP:端口#名称）</label>
          <textarea id="f-preferred" rows="6" placeholder="*.cloudflare.182682.xyz&#10;104.25.246.53:443#香港&#10;https://${_d("YmVzdGNm")}.pages.dev/random-region/HK/100.txt"></textarea>
          <div class="hint">开启「自定义订阅」后生效；域名与优选 API 保存后自动解析为 IP 下发；测速「加入优选」写入此列表，保存后生效。</div>
          <button class="btn sm" style="margin-top:8px" onclick="fetchDomains()">拉取微测网优选域名</button>
        </div>
        <div class="field" id="sm-random" style="margin-top:14px;display:none">
          <label>随机优选数量（1-99）</label>
          <input type="number" id="o-rand" min="1" max="99" value="16">
          <div class="hint">从 Cloudflare 地址段随机生成指定数量节点直接下发，不经域名解析。</div>
        </div>
      </div>
    </section>

    <!-- ===== 视图：配额安全 ===== -->
    <section class="view" data-view="quota">
      <div class="view-head"><h2>配额安全</h2><p>监控 Cloudflare 账户当日用量，按免费额度自动调节下发规模（需在面板设置中配置 Cloudflare 账户 ID 及 API 令牌）</p></div>
      <div class="card">
        <h3><span class="tick"></span>Cloudflare 用量监控 <span class="sub" id="qQuotaSub">未配置</span></h3>
        <div id="qQuotaWrap">
          <div class="kv"><span class="k">当日请求量</span><span class="v" id="qReq">—</span></div>
          <div style="margin:10px 0 6px;height:10px;border-radius:6px;background:var(--card2);overflow:hidden">
            <div id="qBar" style="height:100%;width:0%;border-radius:6px;background:linear-gradient(90deg,var(--ok),var(--accent));transition:width .5s"></div>
          </div>
          <div class="kv"><span class="k">已用额度</span><span class="v" id="qPct">—</span></div>
          <div class="kv"><span class="k">剩余额度</span><span class="v" id="qRemain">—</span></div>
          <div class="kv"><span class="k">CPU 时间</span><span class="v" id="qCpu">—</span></div>
          <div class="kv"><span class="k">子请求数</span><span class="v" id="qSub">—</span></div>
          <div class="kv"><span class="k">数据更新</span><span class="v" id="qAt">—</span></div>
        </div>
        <div id="qQuotaEmpty" style="display:none">
          <div class="note-box" style="margin:0">尚未配置 Cloudflare 监控：在「面板设置」填写 Cloudflare 账户 ID 与 API 令牌（或部署时配置环境变量 CF_ACCOUNT_ID / CF_API_TOKEN），即可实时查看当日请求量并启用自动调节。</div>
        </div>
        <div id="qQuotaErr" style="display:none">
          <div class="note-box" style="margin:0;border-left-color:var(--err)" id="qQuotaErrText">用量查询失败</div>
        </div>
        <div class="row" style="margin-top:14px">
          <label class="switch"><input type="checkbox" id="q-auto-on"><span class="sl"></span></label>
          <span style="font-size:13px">自动调节：当日用量 ≥ 60% 时按比例收缩节点上限（保护账户免费额度）</span>
          <span style="flex:1"></span>
          <button class="btn sm" onclick="refreshQuota()">刷新用量</button>
        </div>
        <p class="hint">自动调节：用量达免费额度 60% 后节点上限按比例收缩（60%→1000 条、70%→750、80%→500、90%→250、100%→100 条保底），用量越高下发越少。</p>
      </div>
      <div class="grid2">
        <div class="card">
          <h3><span class="tick"></span>下发控制</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-nl-on"><span class="sl"></span></label><span>精确节点数量控制</span></div>
          <div class="field" style="margin-top:10px"><label>精确节点上限（1-1000）</label><input type="number" id="q-nl-count" min="1" max="1000" value="500"></div>
          <p class="hint">默认开启：所有格式订阅精确下发到设定数量（默认 500，范围 1-1000），替代原 300/800 分档；勾选三种协议时总数仍为设定值。</p>
        </div>
        <div class="card">
          <h3><span class="tick"></span>轮询换新</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-poll-on"><span class="sl"></span></label><span>启用轮询（默认关闭）</span></div>
          <p class="hint" style="margin-top:12px">默认关闭：一次性全量下发；开启后按格式上限轮换新 IP（200 条去重窗口），端口固定 443，换新靠 IP 轮换。开启后每次更新订阅会写一次 KV 记录轮询窗口（KV 免费额度仅 1,000 写/日），客户端「更新间隔」建议 ≥5 分钟。</p>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>当前下发策略</h3>
        <div class="grid3">
          <div class="field" style="margin:0"><div class="kv"><span class="k">节点数量控制</span><span class="v" id="qNl">—</span></div><div class="kv"><span class="k">精确节点上限</span><span class="v" id="qNlCount">—</span></div></div>
          <div class="field" style="margin:0"><div class="kv"><span class="k">节点测活</span><span class="v" id="qProbe">—</span></div><div class="kv"><span class="k">轮询换新机制</span><span class="v" id="qPoll">—</span></div><div class="kv"><span class="k">负载均衡</span><span class="v" id="qLb">—</span></div><div class="kv"><span class="k">IPv6 下发</span><span class="v" id="qIp6">—</span></div></div>
          <div class="field" style="margin:0"><div class="kv"><span class="k">行式格式上限</span><span class="v">800 节点</span></div><div class="kv"><span class="k">结构化格式上限</span><span class="v">300 节点</span></div></div>
        </div>
        <p class="hint" style="margin-top:10px">每次订阅请求消耗 Worker CPU（免费计划 10ms/请求）。面板按「免费额度 → 格式 → 节点数」逐层设防。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>保护机制说明</h3>
        <div class="note-box">四道防线（优先级从高到低）：① 用量监控；② 自动调节（用量 ≥60% 时按比例收缩节点上限，只收紧不放大）；③ 数量上限精确限制；④ 格式分档与轮询去重。各层上限冲突取较小值，CPU 消耗始终在免费额度内。</div>
      </div>
    </section>

    <!-- ===== 视图：面板设置 ===== -->
    <section class="view" data-view="account">
      <div class="view-head"><h2>面板设置</h2><p>部署基础信息：UUID、订阅路径与管理密码</p></div>
      <div class="card">
        <h3><span class="tick"></span>基础配置</h3>
        <div class="field"><label>UUID（订阅节点身份）</label>
          <div class="inrow">
            <input type="text" id="a-uuid" placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" autocomplete="off">
            <button class="btn sm" onclick="genUuid()">生成</button>
          </div>
        </div>
        <div class="field"><label>自定义订阅路径（只填 UUID/别名段，如 AAZ；留空用面板路径）</label><input type="text" id="a-suburl" placeholder="AAZ" autocomplete="off"></div>
        <div class="field"><label>管理密码（留空则面板免登录）</label><input type="password" id="a-admin" placeholder="设置后访问面板需登录" autocomplete="new-password"></div>
        <p class="hint" style="margin-top:4px">部署后首次访问强制要求设置管理密码；设置后此处留空并保存可恢复免登录。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>Cloudflare 监控选项</h3>
        <div class="grid2">
          <div class="field" style="margin:0"><label>账户 ID（Account Tag）</label><input type="text" id="a-cfid" placeholder="32 位十六进制 ID，位于 dash.cloudflare.com 右侧栏「账户 ID」" autocomplete="off"></div>
          <div class="field" style="margin:0"><label>API 令牌（Bearer）</label><input type="password" id="a-cftoken" placeholder="40 位令牌（My Profile → API Tokens 创建）" autocomplete="new-password"></div>
        </div>
        <p class="hint" style="margin-top:10px">账户 ID 是 32 位十六进制字符串（非邮箱），位于 Cloudflare 控制台「管理账户 → 帐户 API 令牌」；查询 401 时请检查这两项。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>Telegram 用量通知</h3>
        <div class="grid2">
          <div class="field" style="margin:0"><label>Bot Token</label><input type="text" id="q-tgtoken" placeholder="123456789:AAxxxx..." autocomplete="off"></div>
          <div class="field" style="margin:0"><label>Chat ID</label><input type="text" id="q-tgchat" placeholder="123456789" autocomplete="off"></div>
        </div>
        <p class="hint">填好后推送规则：80%、85%、90% 各提醒一次；90% 后每涨 1% 提醒一次（91-99）；达 99% 自动停用订阅（次日自动恢复）。需同时配置上方 Cloudflare 账户监控；停用与恢复不依赖 TG，通知依赖 TG。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>备份与恢复</h3>
        <p class="hint" style="margin-top:0;margin-bottom:12px">以 JSON 导出/导入全部面板设置（协议、优选、筛选、配额监控），可保存或迁移；导入后点「保存全部」生效。</p>
        <div class="inrow">
          <button class="btn" onclick="exportConfig()">导出配置</button>
          <button class="btn" onclick="$('importFile').click()">导入配置</button>
          <input type="file" id="importFile" accept=".json,application/json" style="display:none" onchange="importConfig(this)">
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>运行信息</h3>
        <div class="kv"><span class="k">面板版本</span><span class="v" id="aVer">—</span></div>
        <div class="kv"><span class="k">KV 持久化</span><span class="v" id="aKv">—</span></div>
        <div class="kv"><span class="k">轮询窗口</span><span class="v">最近 200 条</span></div>
        <div class="kv"><span class="k">构建日期</span><span class="v">2026-09-21</span></div>
      </div>
      <div class="danger-zone">
        <h3 style="margin-bottom:8px;color:var(--err)">危险操作</h3>
        <p style="font-size:13px;color:var(--dim);margin-bottom:12px">重置将清空 KV 中全部数据（面板配置 + 已下发节点记录），面板还原为初始部署状态，不可恢复。</p>
        <button class="btn danger" onclick="resetAll()">重置全部数据</button>
      </div>
    </section>

    <!-- ===== 视图：关于 ===== -->
    <section class="view" data-view="about">
      <div class="view-head"><h2>关于项目</h2><p>${__B} — Cloudflare 边缘管理面板（独立界面 + 独立实现）</p></div>
      <div class="card">
        <h3><span class="tick"></span>相关链接</h3>
        <p style="font-size:13px;color:var(--dim)">YouTube @数字派：<a href="https://www.youtube.com/@${_d("UEFJX0NO")}" target="_blank" rel="noopener">youtube.com/@${_d("UEFJX0NO")}</a></p>
        <p style="font-size:13px;color:var(--dim);margin-top:6px">Telegram 交流群：<a href="https://t.me/${_d("U1pfUEFJ")}" target="_blank" rel="noopener">t.me/${_d("U1pfUEFJ")}</a></p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>特别鸣谢</h3>
        <p style="font-size:13px;color:var(--dim);margin-bottom:10px">感谢以下开源项目的启发与支持（界面与代码均为独立实现）</p>
        <div class="tbl-wrap"><table>
          <colgroup><col style="width:34%"><col style="width:66%"></colgroup>
          <thead><tr><th>开源项目</th><th>地址</th></tr></thead>
          <tbody>
            <tr><td>${_d("SW9uUmg=")}/${_d("Q2xvdWRmbGFyZS1CZXN0SVA=")}</td><td><a href="https://github.com/${_d("SW9uUmg=")}/${_d("Q2xvdWRmbGFyZS1CZXN0SVA=")}" target="_blank" rel="noopener">github.com/${_d("SW9uUmg=")}/${_d("Q2xvdWRmbGFyZS1CZXN0SVA=")}</a></td></tr>
            <tr><td>${_d("enZvcw==")}/${_d("Q0YtV29ya2Vycy1Nb25pdG9y")}</td><td><a href="https://github.com/${_d("enZvcw==")}/${_d("Q0YtV29ya2Vycy1Nb25pdG9y")}" target="_blank" rel="noopener">github.com/${_d("enZvcw==")}/${_d("Q0YtV29ya2Vycy1Nb25pdG9y")}</a></td></tr>
            <tr><td>${_d("TWV0YUN1YmVY")}/${_d("bWV0YS1ydWxlcy1kYXQ=")}</td><td><a href="https://github.com/${_d("TWV0YUN1YmVY")}/${_d("bWV0YS1ydWxlcy1kYXQ=")}" target="_blank" rel="noopener">github.com/${_d("TWV0YUN1YmVY")}/${_d("bWV0YS1ydWxlcy1kYXQ=")}</a></td></tr>
            <tr><td>${_d("NjY2T1M=")}/rules</td><td><a href="https://github.com/${_d("NjY2T1M=")}/rules" target="_blank" rel="noopener">github.com/${_d("NjY2T1M=")}/rules</a></td></tr>
            <tr><td>${_d("RHVzdGluV2lu")}/${_d("cnVsZXNldF9nZW9kYXRh")}</td><td><a href="https://github.com/${_d("RHVzdGluV2lu")}/${_d("cnVsZXNldF9nZW9kYXRh")}" target="_blank" rel="noopener">github.com/${_d("RHVzdGluV2lu")}/${_d("cnVsZXNldF9nZW9kYXRh")}</a></td></tr>
            <tr><td>${_d("YmxhY2ttYXRyaXg3")}/${_d("aW9zX3J1bGVfc2NyaXB0")}</td><td><a href="https://github.com/${_d("YmxhY2ttYXRyaXg3")}/${_d("aW9zX3J1bGVfc2NyaXB0")}" target="_blank" rel="noopener">github.com/${_d("YmxhY2ttYXRyaXg3")}/${_d("aW9zX3J1bGVfc2NyaXB0")}</a></td></tr>
            <tr><td>${_d("VEctVHdpbGlnaHQ=")}/${_d("QVdBdmVudWU=")}-Ads-Rule</td><td><a href="https://github.com/${_d("VEctVHdpbGlnaHQ=")}/${_d("QVdBdmVudWU=")}-Ads-Rule" target="_blank" rel="noopener">github.com/${_d("VEctVHdpbGlnaHQ=")}/${_d("QVdBdmVudWU=")}-Ads-Rule</a></td></tr>
            <tr><td>${_d("S29vbHNvbg==")}/${_d("UXVyZQ==")}</td><td><a href="https://github.com/${_d("S29vbHNvbg==")}/${_d("UXVyZQ==")}" target="_blank" rel="noopener">github.com/${_d("S29vbHNvbg==")}/${_d("UXVyZQ==")}</a></td></tr>
          </tbody>
        </table></div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>调用接口</h3>
        <div class="tbl-wrap"><table>
          <colgroup><col style="width:40%"><col style="width:60%"></colgroup>
          <thead><tr><th>用途</th><th>接口</th></tr></thead>
          <tbody>
            <tr><td>HostMonit 优选</td><td class="mono">stock.hostmonit.com/CloudFlareYes</td></tr>
            <tr><td>优选 IP 列表</td><td class="mono">cf.${_d("MDkwMjI3")}.xyz/ip.164746.xyz</td></tr>
            <tr><td>${_d("YmVzdGNm")} 地区优选池</td><td class="mono">${_d("YmVzdGNm")}.pages.dev/random-region/{HK|TW|JP|SG|US|KR}/100.txt</td></tr>
            <tr><td>DoH 解析</td><td class="mono">cloudflare-dns.com / dns.alidns.com / doh.pub</td></tr>
            <tr><td>Cloudflare 用量监控（GraphQL）</td><td class="mono">api.cloudflare.com/client/v4/graphql</td></tr>
            <tr><td>版本更新检测</td><td class="mono">raw.githubusercontent.com/${_d("UEFJQ05J")}/${_d("Q0ZOZXh0")}/...</td></tr>
            <tr><td>远程规则集（${_d("c2luZy1ib3g=")} / ${_d("Q2xhc2g=")}）</td><td class="mono">raw.githubusercontent.com/${_d("TWV0YUN1YmVY")}/${_d("bWV0YS1ydWxlcy1kYXQ=")}/...</td></tr>
            <tr><td>面板二维码库</td><td class="mono">cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js</td></tr>
          </tbody>
        </table></div>
      </div>
    </section>
  </div>
</div>
</div>

<div class="fbar">
  <span class="saved-at" id="savedAt">尚未保存</span>
  <button class="btn danger" id="resetBtn" onclick="resetAll()">重置</button>
  <button class="btn primary" id="saveBtn" onclick="saveAll()"><span class="dirty-dot"></span>保存全部</button>
</div>
<div class="toast" id="toast"></div>

<script>
/* ===== 基础 ===== */
var APIPATH = location.pathname.replace(/\/+$/, '');
var CFG = null;
var LAST = [];
var toastTimer = null;
function $(id){ return document.getElementById(id); }
function api(p, opts){
  return fetch(APIPATH + '/api/' + p, opts).then(function(r){ return r.json(); });
}
function toast(t, ty){
  var el = $('toast');
  el.textContent = t;
  el.className = 'toast show ' + (ty || '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function(){ el.className = 'toast'; }, 2600);
}
function showMsg(id, t, ty){
  var el = $(id);
  el.textContent = t;
  el.className = 'msg show ' + (ty || 'info');
}
function copyText(t){
  var done = false;
  function fin(ok2){
    if (done) return; done = true;
    toast(ok2 ? '已复制' : '复制失败，请手动复制', ok2 ? 'ok' : 'err');
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    var p = null;
    try { p = navigator.clipboard.writeText(t); } catch (e) { fin(fallbackCopy(t)); return; }
    if (p && typeof p.then === 'function') {
      p.then(function(){ fin(true); }, function(){ fin(fallbackCopy(t)); });
      setTimeout(function(){ fin(fallbackCopy(t)); }, 600); // 剪贴板 API 悬空（无权限等）时回退
    } else { fin(true); }
  } else {
    fin(fallbackCopy(t));
  }
}
function fallbackCopy(t){
  var ta = document.createElement('textarea');
  ta.value = t; ta.style.position = 'fixed'; ta.style.opacity = '0';
  document.body.appendChild(ta); ta.select();
  var ok2 = false;
  try { ok2 = document.execCommand('copy'); } catch (e) { ok2 = false; }
  document.body.removeChild(ta);
  return ok2;
}
function copySub(){ copyText($('subUrl').value || makeSub()); }
function markDirty(){
  $('saveBtn').classList.add('dirty');
  $('savedAt').textContent = '有未保存的修改';
}

/* ===== 导航 ===== */
var NAV = [
  { id:'dashboard', name:'仪表盘', icon:'<path d="M4 4h7v7H4zM13 4h7v4h-7zM4 13h7v7H4zM13 11h7v9h-7z"/>' },
  { id:'nodes', name:'节点配置', icon:'<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12L4 7.5"/>' },
  { id:'optimizer', name:'优选配置', icon:'<path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM12 8v4l2.5 2.5M3 3l3 3"/>' },
  { id:'quota', name:'配额安全', icon:'<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6zM9 12l2 2 4-4"/>' },
  { id:'account', name:'面板设置', icon:'<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-3.5 3.6-6 8-6s8 2.5 8 6"/>' },
  { id:'about', name:'关于项目', icon:'<path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01"/>' }
];
var TITLES = { dashboard:'仪表盘', nodes:'节点配置', optimizer:'优选配置', quota:'配额安全', account:'面板设置', about:'关于项目' };
function buildNav(){
  var html = '';
  NAV.forEach(function(n){
    html += '<button class="nav-item" data-v="' + n.id + '" onclick="switchView(\'' + n.id + '\')"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + n.icon + '</svg>' + n.name + '</button>';
  });
  $('nav').innerHTML = html;
}
function switchView(id){
  document.querySelectorAll('.nav-item').forEach(function(b){
    b.classList.toggle('on', b.getAttribute('data-v') === id);
  });
  document.querySelectorAll('.view').forEach(function(x){
    x.classList.toggle('on', x.getAttribute('data-view') === id);
  });
  $('pageTitle').textContent = TITLES[id] || '';
  $('sidebar').classList.remove('open');
}
$('hamb').addEventListener('click', function(){ $('sidebar').classList.toggle('open'); });

/* ===== 主题 ===== */
function systemIsLight(){ return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches; }
function storedTheme(){ var t = 'dark'; try { t = localStorage.getItem('tp_theme') || 'dark'; } catch(e) {} return t; }
function resolveTheme(t){ if (t === 'auto') return systemIsLight() ? 'light' : 'dark'; return t; }
function setThemeIcon(t){
  var p = document.getElementById('themeIcon');
  if (!p) return;
  if (t === 'light') p.setAttribute('d', 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4');
  else p.setAttribute('d', 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z');
}
function applyTheme(){
  var t = resolveTheme(storedTheme());
  document.documentElement.setAttribute('data-theme', t);
  setThemeIcon(t);
}
function setTheme(t){
  try { localStorage.setItem('tp_theme', t); } catch(e) {}
  applyTheme();
  toast(t === 'auto' ? '已切换为跟随系统' : (t === 'light' ? '已切换为日间模式' : '已切换为夜间模式'), 'ok');
}
$('themeBtn').addEventListener('click', function(){
  var cur = storedTheme();
  var next = (cur === 'light') ? 'dark' : 'light';
  setTheme(next);
});
applyTheme();

/* ===== 更新检测 ===== */
var topVerText = 'v—';
function legacyCopy(t){
  try {
    var ta = document.createElement('textarea');
    ta.value = t;
    ta.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    var ok2 = false;
    try { ok2 = document.execCommand('copy'); } catch (e) { ok2 = false; }
    document.body.removeChild(ta);
    return ok2;
  } catch (e) { return false; }
}
function copyClipboard(t){
  return new Promise(function(ok){
    var done = false;
    function finish(v){ if (done) return; done = true; ok(v); }
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        var p = null;
        try { p = navigator.clipboard.writeText(t); } catch (e) { finish(legacyCopy(t)); return; }
        if (p && typeof p.then === 'function') {
          p.then(function(){ finish(true); }, function(){ finish(legacyCopy(t)); });
          setTimeout(function(){ finish(legacyCopy(t)); }, 600); // 剪贴板 API 悬空（无权限等）时回退
        } else { finish(true); }
      } else {
        finish(legacyCopy(t));
      }
    } catch (e) { finish(legacyCopy(t)); }
  });
}
function checkUpdate(){
  var sv = $('sideVer');
  if (sv.classList.contains('checking')) return;
  sv.classList.add('checking');
  sv.textContent = '检测中…';
  api('update').then(function(r){
    sv.classList.remove('checking');
    if (!r || !r.ok || !r.data) { sv.textContent = topVerText; toast('检测更新失败，请稍后重试', 'err'); return; }
    var d = r.data;
    var kindName = (d.kind === '混淆') ? '混淆版' : '明文版';
    topVerText = 'v' + d.current + ' ' + kindName;
    sv.textContent = topVerText;
    if (d.hasUpdate && d.code) {
      sv.classList.add('has-update');
      var kind = (d.kind === '混淆') ? '混淆' : '明文';
      copyClipboard(d.code).then(function(copied){
        toast(copied ? '检测到更新，已复制最新' + kind + '代码到剪贴板' : '检测到更新（v' + d.latest + '），复制失败，请前往仓库获取', copied ? 'ok' : 'err');
      });
    } else if (d.hasUpdate) {
      toast('检测到更新（v' + d.latest + '），但未能获取代码', 'err');
    } else if (d.latest) {
      sv.classList.remove('has-update');
      toast('已是最新版本（v' + d.current + ' ' + kindName + '）', 'ok');
    } else {
      toast('检测更新失败：' + (d.error || '仓库暂不可达'), 'err');
    }
  }).catch(function(){
    sv.classList.remove('checking');
    sv.textContent = topVerText;
    toast('检测更新失败，请稍后重试', 'err');
  });
}

/* ===== 配置加载与回填 ===== */
function loadAll(){
  updateFreeDomainWarn();
  api('status').then(function(r){
    if (r && r.ok) renderStatus(r.data);
  }).catch(function(){});
  api('config').then(function(r){
    if (r && r.ok){
      CFG = r.data;
      fillForm();
      renderAll();
      makeSub(false);
      setConn(true);
      refreshQuota();
      toast('配置已加载', 'ok');
    } else if (r && r.status === 403) {
      location.reload();
    } else {
      setConn(false);
      toast('无法连接服务器', 'err');
    }
  }).catch(function(){
    setConn(false);
    toast('无法连接服务器', 'err');
  });
}
function setConn(ok){
  var p = $('connPill');
  p.className = 'pill ' + (ok ? '' : 'off');
  $('connText').textContent = ok ? '运行中' : '无法连接';
}
// 免费域名（*.workers.dev / *.pages.dev）大陆直连被阻断：命中即提示绑定自定义域名
function isFreeSubDomain(h){
  return /\.(workers\.dev|pages\.dev)$/i.test(String(h || ''));
}
function updateFreeDomainWarn(){
  var effHost = (CFG && CFG.host) ? String(CFG.host) : location.hostname;
  var wd = isFreeSubDomain(location.hostname) || isFreeSubDomain(effHost);
  $('wdwarn').style.display = wd ? 'block' : 'none';
  $('subHint').textContent = wd
    ? '节点 SNI / 订阅域名使用 *.pages.dev 或 *.workers.dev 免费域名：大陆直连会被阻断——订阅导入与更新需挂梯子，节点测延迟与连接可能全部失败。解决：在 Cloudflare 控制台为本项目绑定自定义域名，再用自定义域名打开面板重新复制订阅链接。'
    : '';
}
function renderStatus(d){
  $('stEntry').textContent = location.origin + '/' + (d.path || '');
  updateFreeDomainWarn();
  var kv = d.kv;
  var kvTxt = kv ? '已绑定（配置持久化）' : '未绑定（配置仅内存）';
  $('stKv').textContent = kvTxt;
  $('stKv').className = 'v ' + (kv ? 'ok' : 'bad');
  $('aKv').textContent = kvTxt;
  $('aKv').className = 'v ' + (kv ? 'ok' : 'bad');
  var v = d.version || '—';
  var kindName = (d.kind === '混淆版') ? '混淆版' : '明文版';   // 部署形态（明文版 / 混淆版），由后端自检
  $('sideVer').textContent = 'v' + v + ' ' + kindName;
  topVerText = 'v' + v + ' ' + kindName;
  $('aVer').textContent = v + ' ' + kindName;
}
function protoText(){
  if (!CFG) return '—';
  var a = [];
  if (CFG.enable${_d("Vmxlc3M=")} !== false) a.push('${_d("VkxFU1M=")}');
  if (CFG.enable${_d("VHJvamFu")}) a.push('${_d("VHJvamFu")}');
  if (CFG.enable${_d("WGh0dHA=")}) a.push('${_d("WEhUVFA=")}');
  return a.length ? a.join(' / ') : '未启用';
}
function renderAll(){
  $('stProto').textContent = protoText();
  renderQuota();
}
function renderQuota(){
  var nl = !!(CFG && CFG.nodeLimit);
  $('qNl').textContent = nl ? '已开启' : '关闭（默认分档上限）';
  $('qNl').className = 'v ' + (nl ? 'ok' : '');
  $('qNlCount').textContent = nl ? (CFG.nodeLimitCount || 500) + ' 节点' : '—';
  var po = !(CFG && CFG.polling === false);
  $('qPoll').textContent = po ? '已开启（每轮换新 IP）' : '关闭（每次下发全部）';
  $('qPoll').className = 'v ' + (po ? 'ok' : '');
  // 节点测活：开启 = 红字提醒（会误杀 CF 段精选池），关闭 = 绿字（推荐状态，对齐 V1.0.6）
  var pa = !!(CFG && CFG.probeAlive);
  $('qProbe').textContent = pa ? '已开启（剔除死节点，体感更快）' : '关闭（不测活，按 V1.x 原序下发）';
  $('qProbe').className = 'v ' + (pa ? 'warn' : 'ok');
  var lb = !(CFG && CFG.loadBalance === false);
  $('qLb').textContent = lb ? '已开启（随机轮换）' : '关闭（固定顺序）';
  $('qLb').className = 'v ' + (lb ? 'ok' : 'ok');
  // IPv6 下发策略：'full'（旧行为）标黄提醒——v6 备胎会拖慢客户端逐节点测延迟
  var i6 = (CFG && CFG.ipv6Mode) || 'off';
  $('qIp6').textContent = i6 === 'full' ? '等权混合（旧行为）' : (i6 === 'tail' ? '仅备胎（≤10%，排尾部）' : '不下发');
  $('qIp6').className = 'v ' + (i6 === 'full' ? 'warn' : 'ok');
}
function fmtNum(n){
  if (n == null || isNaN(n)) return '—';
  n = Number(n);
  if (n >= 1e6) return (n / 1e6).toFixed(2) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(1) + 'k';
  return String(n);
}
function showQuotaState(kind, text){
  $('qQuotaWrap').style.display = (kind === 'data') ? '' : 'none';
  $('qQuotaEmpty').style.display = (kind === 'empty') ? '' : 'none';
  $('qQuotaErr').style.display = (kind === 'err') ? '' : 'none';
  if (kind === 'err') $('qQuotaErrText').textContent = quotaErrText(text);
  if (kind === 'data'){ $('qQuotaEmpty').style.display = 'none'; }
}
function quotaErrText(e){
  var m = String(e || '');
  if (m.indexOf('401') >= 0) return '认证失败（CF API 401）：请检查账户 ID 是否为 32 位十六进制、API 令牌是否有效且勾选 Account Analytics 读取权限';
  if (m.indexOf('403') >= 0) return '无权限（CF API 403）：API 令牌缺少账户 Analytics 读取权限';
  if (m.indexOf('429') >= 0) return 'CF API 限流（429）：已自动退避 15 分钟，期间沿用缓存数据';
  if (m.indexOf('未找到账户') >= 0) return m + '：请核对 dash.cloudflare.com 右侧栏的 32 位账户 ID';
  return m || '用量查询失败';
}
function renderQuotaData(d){
  updDbQuota(d);
  if (!d || !d.configured){
    $('qQuotaSub').textContent = '未配置';
    showQuotaState('empty');
    return;
  }
  if (d.error && !d.stale){
    $('qQuotaSub').textContent = '查询失败';
    showQuotaState('err', d.error);
    return;
  }
  $('qQuotaSub').textContent = d.stale ? '缓存数据' : '已连接';
  showQuotaState('data');
  $('qReq').textContent = fmtNum(d.today.requests) + ' / ' + fmtNum(d.limit);
  var p = d.percent || 0;
  $('qBar').style.width = Math.min(100, p) + '%';
  $('qBar').style.background = p >= 90 ? 'linear-gradient(90deg,var(--err),var(--warn))' : (p >= 60 ? 'linear-gradient(90deg,var(--warn),var(--accent))' : 'linear-gradient(90deg,var(--ok),var(--accent))');
  $('qPct').textContent = p + '%';
  $('qPct').className = 'v ' + (p >= 90 ? 'bad' : (p >= 60 ? '' : 'ok'));
  $('qRemain').textContent = fmtNum(d.remaining != null ? d.remaining : (d.limit - d.today.requests));
  $('qCpu').textContent = (d.today.cpuTime != null) ? (d.today.cpuTime / 1000).toFixed(2) + ' s' : '—';
  $('qSub').textContent = fmtNum(d.today.subrequests);
  $('qAt').textContent = (d.updatedAt ? String(d.updatedAt).replace('T', ' ').replace('Z', '') + ' UTC' : '—') + (d.stale ? '（限流缓存）' : '');
}
function updDbQuota(d){
  if (!d || !d.configured){ $('dbSub').textContent = '未配置监控'; $('dbWrap').style.display = 'none'; return; }
  if (d.error && !d.stale){ $('dbSub').textContent = '查询失败'; $('dbWrap').style.display = 'none'; return; }
  $('dbSub').textContent = d.stale ? '缓存数据' : '已连接';
  $('dbWrap').style.display = '';
  $('dbReq').textContent = fmtNum(d.today.requests) + ' / ' + fmtNum(d.limit);
  var p = d.percent || 0;
  $('dbBar').style.width = Math.min(100, p) + '%';
  $('dbBar').style.background = p >= 90 ? 'linear-gradient(90deg,var(--err),var(--warn))' : (p >= 60 ? 'linear-gradient(90deg,var(--warn),var(--accent))' : 'linear-gradient(90deg,var(--ok),var(--accent))');
  $('dbPct').textContent = p + '%';
  $('dbPct').className = 'v ' + (p >= 90 ? 'bad' : (p >= 60 ? '' : 'ok'));
}
function refreshQuota(){
  $('qQuotaSub').textContent = '查询中…';
  api('quota').then(function(r){
    if (r && r.ok) renderQuotaData(r.data);
    else { $('qQuotaSub').textContent = '查询失败'; showQuotaState('err', (r && r.msg) || '查询失败'); }
  }).catch(function(){ $('qQuotaSub').textContent = '查询失败'; showQuotaState('err', '无法连接服务器'); });
}
function parseIps(t){
  var out = [];
  String(t || '').split(/[\n,;]+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){
    var name = '';
    if (s.indexOf('#') >= 0){ var a = s.split('#'); s = a[0]; name = a[1]; }
    var m;
    if ((m = s.match(/^\[([0-9a-fA-F:]+)\](?::(\d+))?$/))){ out.push({ ip: m[1], port: parseInt(m[2]) || 443, name: name }); return; }
    if ((m = s.match(/^(\d+\.\d+\.\d+\.\d+)(?::(\d+))?$/))){ out.push({ ip: m[1], port: parseInt(m[2]) || 443, name: name }); }
  });
  return out;
}
function renderPreferred(){
  if (!CFG) return;
  var lines = [];
  String(CFG.preferredDomains || '').split(/[\n;]+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){ lines.push(s); });  // URL 感知：含查询串逗号的 URL 整行保留，不按逗号切碎
  (CFG.preferredIPs || []).forEach(function(x){
    lines.push((String(x.ip).indexOf(':') >= 0 ? '[' + x.ip + ']' : x.ip) + ':' + (x.port || 443) + (x.name ? ('#' + x.name) : ''));
  });
  $('f-preferred').value = lines.join('\n');
}
function fillPort(pv){
  pv = String(pv == null ? 443 : pv);
  var sel = $('o-port');
  var found = false;
  for (var i = 0; i < sel.options.length; i++){ if (sel.options[i].value === pv){ found = true; break; } }
  if (found){ sel.value = pv; $('o-portC').style.display = 'none'; }
  else { sel.value = 'custom'; $('o-portC').value = pv; $('o-portC').style.display = ''; }
}
function fillForm(){
  if (!CFG) return;
  $('en-${_d("dmxlc3M=")}').checked = CFG.enable${_d("Vmxlc3M=")} !== false;
  $('en-${_d("dHJvamFu")}').checked = !!CFG.enable${_d("VHJvamFu")};
  $('tp-pass').value = CFG.${_d("dHJvamFu")}Password || '';
  $('en-${_d("eGh0dHA=")}').checked = !!CFG.enable${_d("WGh0dHA=")};
  $('tls-only').checked = !!CFG.tlsOnly;
  $('alpn').value = CFG.alpn || '';
  $('ech-on').checked = !!CFG.ech;
  $('ech-host').value = CFG.echHost || '';
  $('ech-dns').value = CFG.echDns || '';
  var fl = CFG.filter || {};
  var region = fl.region || 'all';
  var regionArr = Array.isArray(region) ? region : (region === 'all' ? ['all'] : [region]);
  $('fl-region-all').checked = regionArr.indexOf('all') >= 0;
  ['HK', 'TW', 'US', 'SG', 'JP', 'KR', 'DE'].forEach(function(r){ $('fl-region-' + r).checked = regionArr.indexOf(r) >= 0; });
  var ipType = fl.ipType || ['IPv4'];
  $('fl-ip4').checked = ipType.indexOf('IPv4') >= 0;
  $('fl-ip6').checked = ipType.indexOf('IPv6') >= 0;
  var ip6 = CFG.ipv6Mode || 'off';
  $('ip6-off').checked = ip6 !== 'tail' && ip6 !== 'full';
  $('ip6-tail').checked = ip6 === 'tail';
  $('ip6-full').checked = ip6 === 'full';
  var isp = fl.isp || ['移动', '联通', '电信'];
  $('fl-isp-m').checked = isp.indexOf('移动') >= 0;
  $('fl-isp-c').checked = isp.indexOf('联通') >= 0;
  $('fl-isp-t').checked = isp.indexOf('电信') >= 0;
  var src = CFG.src || {};
  $('fl-native').checked = src.native === true;
  $('fl-pref-domain').checked = src.prefDomain !== false;
  $('fl-pref-ip').checked = src.prefIp !== false;
  $('fl-custom-pref').checked = src.customPref === true;
  var o = CFG.optimizer || {};
  $('o-source').value = o.source || 'wetest_v4';
  $('o-sourceURL').value = o.sourceURL || '';
  $('o-fbpool').value = o.fallbackPool || '';
  fillPort(o.port);
  $('o-threads').value = o.threads || 5;
  $('o-count').value = o.count || 20;
  $('o-fill').value = (o.fillCount == null ? 0 : o.fillCount);
  $('o-useCidr').checked = o.useCidr !== false;
  $('o-submode').value = o.subMode || '';
  $('o-subinc').value = (o.subIncludeDefault ? '1' : '0');
  $('o-rand').value = o.subRandomCount == null ? 16 : o.subRandomCount;
  $('q-nl-on').checked = !!CFG.nodeLimit;
  $('q-nl-count').value = CFG.nodeLimitCount || 500;
  $('q-poll-on').checked = CFG.polling !== false;
  $('q-clabel').value = CFG.countryLabel || '';
  $('q-lb-on').checked = CFG.loadBalance !== false;
  $('q-probe-on').checked = !!CFG.probeAlive;
  $('q-auto-on').checked = !!CFG.quotaAuto;
  $('a-uuid').value = CFG.uuid || '';
  $('a-suburl').value = CFG.subUrl || '';
  $('a-admin').value = CFG.admin || '';
  $('a-cfid').value = CFG.cfAccountId || '';
  $('q-tgtoken').value = CFG.tgBotToken || '';
  $('q-tgchat').value = CFG.tgChatID || '';
  $('a-cftoken').value = CFG.cfApiToken || '';
  $('hw-on').checked = !!CFG.homeWan;
  $('s-${_d("cHJveHlJUA==")}').value = CFG.${_d("cHJveHlJUA==")} || '';
  $('s-${_d("b3V0Ym91bmQ=")}').value = CFG.${_d("b3V0Ym91bmQ=")}Proxy || '';
  $('s-outmode').value = CFG.${_d("b3V0Ym91bmQ=")}Mode || '';
  renderPreferred();
  bindRegionPills();
  onSubMode();
  $('o-customWrap').style.display = ($('o-source').value === 'custom') ? '' : 'none';
}
// 节点地区多选互斥：勾选具体地区时取消「全部地区」；全部取消时自动恢复「全部地区」（保证筛选非空）
function bindRegionPills(){
  if (window.__regionPillsBound) return;
  window.__regionPillsBound = true;
  var codes = ['HK', 'TW', 'US', 'SG', 'JP', 'KR', 'DE'];
  var all = $('fl-region-all');
  all.addEventListener('change', function(){
    if (all.checked) codes.forEach(function(r){ $('fl-region-' + r).checked = false; });
  });
  codes.forEach(function(c){
    $('fl-region-' + c).addEventListener('change', function(){
      if ($('fl-region-' + c).checked) all.checked = false;
      var any = codes.some(function(r){ return $('fl-region-' + r).checked; });
      if (!any) all.checked = true;
    });
  });
}
function collectForm(){
  if (!CFG) return null;
  var ipLines = [], domLines = [];
  // URL 感知收集：URL（含 ://）整行原样保留（查询串自带逗号不打碎，如 ?region=NL,GB,FI）；
  // 非 URL 行仍支持逗号/分号分隔多条 IP（兼容 "1.2.3.4:443#名, 5.6.7.8" 旧用法）
  String($('f-preferred').value).split(/\n+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){
    if (s.indexOf('://') >= 0){ domLines.push(s); return; }
    s.split(/[;,]+/).map(function(x){ return x.trim(); }).filter(Boolean).forEach(function(x){
      if (parseIps(x).length) ipLines.push(x); else domLines.push(x);
    });
  });
  var ips = [], seen = {};
  ipLines.forEach(function(s){
    var p = parseIps(s);
    if (!p.length) return;
    var k = p[0].ip + ':' + (p[0].port || 443);
    if (seen[k]) return;
    seen[k] = 1;
    ips.push(p[0]);
  });
  return {
    uuid: $('a-uuid').value.trim(),
    subUrl: $('a-suburl').value.trim(),
    admin: $('a-admin').value,
    alpn: $('alpn').value,
    ech: $('ech-on').checked,
    echHost: $('ech-host').value.trim() || 'cloudflare-ech.com',
    echDns: $('ech-dns').value.trim(),
    tlsOnly: $('tls-only').checked,
    nodeLimit: $('q-nl-on').checked,
    nodeLimitCount: parseInt($('q-nl-count').value) || 500,
    polling: $('q-poll-on').checked,
    countryLabel: $('q-clabel').value,
    loadBalance: $('q-lb-on').checked,
    ipv6Mode: $('ip6-tail').checked ? 'tail' : ($('ip6-full').checked ? 'full' : 'off'),
    probeAlive: $('q-probe-on').checked,
    cfAccountId: $('a-cfid').value.trim(),
    tgBotToken: $('q-tgtoken').value.trim(),
    tgChatID: $('q-tgchat').value.trim(),
    cfApiToken: $('a-cftoken').value.trim(),
    quotaAuto: $('q-auto-on').checked,
    enable${_d("Vmxlc3M=")}: $('en-${_d("dmxlc3M=")}').checked,
    enable${_d("VHJvamFu")}: $('en-${_d("dHJvamFu")}').checked,
    ${_d("dHJvamFu")}Password: $('tp-pass').value,
    enable${_d("WGh0dHA=")}: $('en-${_d("eGh0dHA=")}').checked,
    homeWan: $('hw-on').checked,
    ${_d("cHJveHlJUA==")}: $('s-${_d("cHJveHlJUA==")}').value.trim(),
    ${_d("b3V0Ym91bmQ=")}Proxy: $('s-${_d("b3V0Ym91bmQ=")}').value.trim(),
    ${_d("b3V0Ym91bmQ=")}Mode: $('s-outmode').value,
    preferredDomains: domLines.join('\n'),
    preferredIPs: ips,
    optimizer: {
      source: $('o-source').value,
      sourceURL: $('o-sourceURL').value.trim(),
      fallbackPool: $('o-fbpool').value.trim(),
      port: parseInt($('o-port').value === 'custom' ? $('o-portC').value : $('o-port').value) || 443,
      threads: parseInt($('o-threads').value) || 5,
      count: parseInt($('o-count').value) || 20,
      fillCount: parseInt($('o-fill').value) || 0,
      useCidr: $('o-useCidr').checked,
      subMode: $('o-submode').value,
      subRandomCount: parseInt($('o-rand').value) || 16,
      subIncludeDefault: $('o-subinc').value === '1'
    },
    filter: {
      region: (function(){
        if ($('fl-region-all').checked) return ['all'];
        var a = [];
        ['HK', 'TW', 'US', 'SG', 'JP', 'KR', 'DE'].forEach(function(r){ if ($('fl-region-' + r).checked) a.push(r); });
        return a.length ? a : ['all'];
      })(),
      ipType: (function(){ var a = []; if ($('fl-ip4').checked) a.push('IPv4'); if ($('fl-ip6').checked) a.push('IPv6'); return a; })(),
      isp: (function(){ var a = []; if ($('fl-isp-m').checked) a.push('移动'); if ($('fl-isp-c').checked) a.push('联通'); if ($('fl-isp-t').checked) a.push('电信'); return a; })()
    },
    src: {
      native: $('fl-native').checked,
      prefDomain: $('fl-pref-domain').checked,
      prefIp: $('fl-pref-ip').checked,
      customPref: $('fl-custom-pref').checked
    }
  };
}
function saveAll(){
  if (!CFG){ toast('配置尚未加载', 'err'); return; }
  var body = collectForm();
  var btn = $('saveBtn');
  btn.disabled = true;
  api('config', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    .then(function(r){
      if (r && r.ok){
        CFG = r.data;
        fillForm();
        renderAll();
        makeSub(false);
        refreshQuota();
        btn.classList.remove('dirty');
        $('savedAt').textContent = '已保存：' + new Date().toLocaleTimeString();
        toast('已保存并生效', 'ok');
      } else toast((r && r.msg) || '保存失败', 'err');
    })
    .catch(function(){ toast('保存失败：无法连接服务器', 'err'); })
    .then(function(){ btn.disabled = false; });
}
function resetAll(){
  if (!confirm('确定重置？将清空 KV 中全部面板配置与节点记录，面板还原为初始部署状态。此操作不可恢复！')) return;
  var btn = $('resetBtn');
  btn.disabled = true;
  api('reset', { method: 'POST' })
    .then(function(r){
      if (r && r.ok){ toast(r.msg || '已重置', 'ok'); setTimeout(function(){ location.reload(); }, 900); }
      else toast((r && r.msg) || '重置失败', 'err');
    })
    .catch(function(){ toast('重置失败：无法连接服务器', 'err'); })
    .then(function(){ btn.disabled = false; });
}
function genUuid(){
  var u = '';
  if (window.crypto && crypto.randomUUID){ u = crypto.randomUUID(); }
  else {
    var tpl = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    u = tpl.replace(/[xy]/g, function(c){
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 3 | 8);
      return v.toString(16);
    });
  }
  $('a-uuid').value = u;
  markDirty();
  toast('已生成新 UUID', 'ok');
}
// 备份：把当前面板表单值收集成 JSON 下载（与保存配置同一套字段，恢复后可直接保存）
function exportConfig(){
  try {
    var data = collectForm();
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    var ts = new Date();
    var pad = function(n){ return String(n).padStart(2, '0'); };
    a.download = '${_d("Y2ZuZXh0")}-backup-' + ts.getFullYear() + pad(ts.getMonth()+1) + pad(ts.getDate()) + '-' + pad(ts.getHours()) + pad(ts.getMinutes()) + '.json';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function(){ URL.revokeObjectURL(a.href); }, 1000);
    toast('配置已导出为 JSON', 'ok');
  } catch (e) { toast('导出失败：' + e.message, 'err'); }
}
// 恢复：读取 JSON 填充表单，标记未保存，由用户点「保存全部」写盘
function importConfig(input){
  var file = input.files && input.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function(){
    try {
      var data = JSON.parse(reader.result);
      CFG = Object.assign({}, CFG, data);
      fillForm();
      renderAll();
      markDirty();
      toast('配置已导入，请点「保存全部」生效', 'ok');
    } catch (e) { toast('导入失败：JSON 格式不正确', 'err'); }
    input.value = '';
  };
  reader.readAsText(file, 'utf-8');
}
document.querySelectorAll('input,select,textarea').forEach(function(el){
  var id = el.id || '';
  var prefixes = ['f-', 'o-', 'a-', 's-', 'q-', 'e-', 't-', 'fl-', 'en-'];
  for (var i = 0; i < prefixes.length; i++){ if (id.indexOf(prefixes[i]) === 0){ el.addEventListener('change', markDirty); break; } }
});

/* ===== 订阅 ===== */
function subUrlOf(fmt){
  // 自定义订阅路径优先：自动保留当前域名（location.origin），只替换路径段；
  // 用户只填 UUID/别名段（如 AAZ），拼成 https://当前域名/AAZ/sub；留空用面板路径。
  // 填了 /sub 结尾或带前后斜杠时自动归一，格式后缀（${_d("Y2xhc2g=")}/${_d("c2luZ2JveA==")} 等）拼为 /sub/<格式>
  var custom = (window.CFG && CFG.subUrl) ? String(CFG.subUrl).trim().replace(/^\/+/, '').replace(/\/sub$/, '').replace(/\/+$/, '') : '';
  var base = custom ? (location.origin + '/' + custom) : (location.origin + APIPATH);
  var u = base + '/sub';
  return fmt ? (u + '/' + fmt) : u;
}
function makeSub(showQR){
  var fmt = $('subFmt').value;
  var url = subUrlOf(fmt === 'auto' ? '' : fmt);
  $('subUrl').value = url;
  if (showQR) showQRCode(url);
}
$('subFmt').addEventListener('change', function(){ makeSub(false); });
function toggleQR(){
  var w = $('qrWrap');
  if (w.style.display === 'block'){ w.style.display = 'none'; return; }
  showQRCode($('subUrl').value || subUrlOf(''));
}
function showQRCode(url){
  var w = $('qrWrap');
  w.style.display = 'block';
  if (typeof qrcode === 'undefined'){ w.innerHTML = '<div class="hint">二维码库加载失败，请直接复制链接</div>'; return; }
  try {
    var fmt = ($('subFmt') && $('subFmt').value) || 'auto';
    var q = qrcode(0, 'M');
    q.addData(qrPayloadOf(fmt, url));
    q.make();
    w.innerHTML = '<div class="qrbox">' + q.createImgTag(4, 10) + '</div>';
  } catch(e) { w.innerHTML = '<div class="hint">二维码生成失败：' + e.message + '</div>'; }
}
// 二维码内容随订阅格式（客户端）联动：
// ${_d("Q2xhc2g=")}/${_d("TWlob21v")}、${_d("U3Rhc2g=")} → ${_d("Y2xhc2g=")}://install-config（Fly${_d("Q2xhc2g=")} / ${_d("Q2xhc2g=")} Verge / ${_d("U3Rhc2g=")} 扫码装订阅，配置名取订阅响应头 filename=${_d("Q0ZOZXh0")}）
// ${_d("U2luZy1ib3g=")} → ${_d("c2luZy1ib3g=")}://import-remote-profile?url=...#${_d("Q0ZOZXh0")}（官方 scheme，# 后为配置文件名称）
// ${_d("U3VyZ2U=")} → ${_d("c3VyZ2U=")}:///install-config（${_d("U3VyZ2U=")} 官方 scheme）
// auto / ${_d("djJyYXlO")}+${_d("U2hhZG93cm9ja2V0")} / ${_d("TG9vbg==")} / ${_d("UXVhbnR1bXVsdA==")} X / 明文 → 直接使用订阅链接（${_d("U2hhZG93cm9ja2V0")} / ${_d("TG9vbg==")} / ${_d("UXVhblg=")} 扫码识别）
function qrPayloadOf(fmt, url){
  var enc = encodeURIComponent(url);
  if (fmt === '${_d("Y2xhc2g=")}' || fmt === '${_d("c3Rhc2g=")}') return '${_d("Y2xhc2g=")}://install-config?url=' + enc;
  if (fmt === '${_d("c2luZ2JveA==")}') return '${_d("c2luZy1ib3g=")}://import-remote-profile?url=' + enc + '#' + __B;
  if (fmt === '${_d("c3VyZ2U=")}') return '${_d("c3VyZ2U=")}:///install-config?url=' + enc;
  return url;
}
function downloadSub(){
  var fmt = $('subFmt').value;
  // 按格式给出默认保存名（服务端 Content-Disposition 优先；无 CD 场景兜底），带正确扩展名
  var names = { ${_d("Y2xhc2g=")}:__B+'.yaml', ${_d("c3Rhc2g=")}:__B+'.yaml', ${_d("c2luZ2JveA==")}:__B+'.json', ${_d("c3VyZ2U=")}:__B+'.conf', ${_d("c3VyZmJvYXJk")}:__B+'.conf', ${_d("bG9vbg==")}:__B+'.conf', ${_d("cXVhbng=")}:__B+'.conf' };
  var a = document.createElement('a');
  a.href = subUrlOf(fmt === 'auto' ? '' : fmt);
  a.download = names[fmt] || __B+'.txt';
  document.body.appendChild(a);
  a.click();
  a.remove();
}
function previewSub(){
  var fmt = $('subFmt').value;
  var box = $('subPrev');
  box.style.display = 'block';
  $('prevType').textContent = '请求中…';
  $('prevCount').textContent = '—';
  $('prevBody').textContent = '';
  api('sub?fmt=' + encodeURIComponent(fmt === 'auto' ? '' : fmt))
    .then(function(r){
      if (!r || !r.ok){ $('prevType').textContent = '预览失败'; $('prevBody').textContent = (r && r.msg) || '未知错误'; return; }
      var body = r.body || '';
      var type = r.type || '';
      $('prevType').textContent = type || '—';
      var n = 0;
      if (/${_d("Y2xhc2g=")}|yaml/i.test(type)) n = (body.match(/- name:/g) || []).length;
      else if (/json/i.test(type)) n = (body.match(/"tag"/g) || []).length;
      else {
        var t = body;
        if (!/^(${_d("dmxlc3M=")}|${_d("dHJvamFu")}|ss|${_d("eGh0dHA=")}):\/\//m.test(t)) {
          try { t = atob(t); } catch (e) { /* 保持原样 */ }
        }
        n = t.split('\n').filter(function(l){ return /^(${_d("dmxlc3M=")}|${_d("dHJvamFu")}|ss|${_d("eGh0dHA=")}):\/\//.test(l.trim()); }).length;
      }
      $('prevCount').textContent = n + ' 个节点';
      $('prevBody').textContent = body.length > 2600 ? body.slice(0, 2600) + '\n…（已截断，完整内容请下载）' : body;
    })
    .catch(function(){ $('prevType').textContent = '预览失败：无法连接服务器'; $('prevBody').textContent = ''; });
}

/* ===== 优选配置 ===== */
function onPortSel(){
  var sel = $('o-port');
  var c = $('o-portC');
  c.style.display = sel.value === 'custom' ? '' : 'none';
}
function onSubMode(){
  var m = $('o-submode').value;
  $('sm-custom').style.display = (m === 'custom') ? '' : 'none';
  $('sm-random').style.display = (m === 'random') ? '' : 'none';
  // 「追加内置优选池与默认地区源」仅在自定义订阅 / 随机优选模式下可选；
  // 订阅模式关闭（使用面板默认节点池）时强制为关闭并禁用，避免默认模式下误开追加导致行为不符
  if (m === '') {
    $('o-subinc').value = '0';
    $('o-subinc').disabled = true;
  } else {
    $('o-subinc').disabled = false;
  }
  // 订阅模式与仪表盘「地址来源」胶囊互斥同步（三态全部明确跟随）：
  // custom → 自定义优选开、随机优选关；random → 随机优选开、自定义优选关；关闭 → 两个胶囊都关
  if (m === 'custom') {
    $('fl-custom-pref').checked = true;
    $('fl-random-pref').checked = false;
  } else if (m === 'random') {
    $('fl-custom-pref').checked = false;
    $('fl-random-pref').checked = true;
  } else {
    $('fl-custom-pref').checked = false;
    $('fl-random-pref').checked = false;
  }
}
// 仪表盘「地址来源 → 自定义优选」与优选配置「订阅模式」联动：
// 勾选 → 订阅模式切为「自定义订阅（支持汇聚）」并关闭随机优选；取消 → 订阅模式关闭（使用面板默认节点池）
$('fl-custom-pref').addEventListener('change', function(){
  if (this.checked) {
    $('fl-random-pref').checked = false;   // 与随机优选互斥
    $('o-submode').value = 'custom';
  } else {
    if ($('o-submode').value === 'custom') $('o-submode').value = '';
  }
  onSubMode();
});
// 仪表盘「地址来源 → 随机优选」与优选配置「订阅模式 → 随机优选模式（官方接口）」联动：
// 勾选 → 订阅模式切为 random 并关闭自定义优选；取消 → 订阅模式关闭（若当前为 random）
$('fl-random-pref').addEventListener('change', function(){
  if (this.checked) {
    $('fl-custom-pref').checked = false;   // 与自定义优选互斥
    $('o-submode').value = 'random';
  } else {
    if ($('o-submode').value === 'random') $('o-submode').value = '';
  }
  onSubMode();
});
$('o-source').addEventListener('change', function(){
  $('o-customWrap').style.display = ($('o-source').value === 'custom') ? '' : 'none';
});
function pingIp(ip, port, timeout){
  var t0 = Date.now();
  var addr = ip.indexOf(':') >= 0 ? '[' + ip + ']' : ip;
  var proto = (port === 80 || port === 8080 || port === 8880 || port === 2052 || port === 2082 || port === 2086 || port === 2095) ? 'http' : 'https';
  var ctrl = new AbortController();
  var timer = setTimeout(function(){ ctrl.abort(); }, timeout);
  return fetch(proto + '://' + addr + ':' + port + '/', { mode: 'no-cors', cache: 'no-store', redirect: 'manual', signal: ctrl.signal })
    .then(function(){ clearTimeout(timer); return { ok: true, latency: Date.now() - t0 }; })
    .catch(function(){
      clearTimeout(timer);
      var ms = Date.now() - t0;
      if (proto === 'http' && ms < 100) return pingHttps(ip, port, timeout);
      return { ok: ms < timeout, latency: ms };
    });
}
function pingHttps(ip, port, timeout){
  var t0 = Date.now();
  var addr = ip.indexOf(':') >= 0 ? '[' + ip + ']' : ip;
  var ctrl = new AbortController();
  var timer = setTimeout(function(){ ctrl.abort(); }, timeout);
  return fetch('https://' + addr + ':' + port + '/', { mode: 'no-cors', cache: 'no-store', redirect: 'manual', signal: ctrl.signal })
    .then(function(){ clearTimeout(timer); return { ok: true, latency: Date.now() - t0 }; })
    .catch(function(){ clearTimeout(timer); var ms = Date.now() - t0; return { ok: ms < timeout, latency: ms }; });
}
function localTest(cands, threads, timeout){
  var results = [], idx = 0, pending = 0;
  return new Promise(function(resolve){
    function next(){
      while (pending < threads && idx < cands.length) {
        (function(c){
          pending++;
          pingIp(c.ip, c.port, timeout).then(function(r){
            pending--;
            results.push({ ip: c.ip, port: c.port, name: c.name || '', ok: r.ok, latency: r.latency });
            if (results.length === cands.length) resolve(results);
            else next();
          });
        })(cands[idx++]);
      }
    }
    next();
  });
}
function runPick(){
  if (!CFG){ toast('配置尚未加载', 'err'); return; }
  var o = collectForm().optimizer;
  showMsg('oMsg', '正在拉取候选 IP…', 'info');
  api('candidates', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(o) })
    .then(function(r){
      if (!r || !r.ok){ showMsg('oMsg', (r && r.msg) || '拉取失败', 'err'); return; }
      var cands = r.data || [];
      if (!cands.length){ showMsg('oMsg', (r && r.msg) || '没有可测的 IP，请换一个数据源', 'err'); return; }
      var st = r.stats || {};
      var parts = [];
      if (st.preset) parts.push('预设源 ' + st.preset + ' 条');
      if (st.presetErr) parts.push('预设源失败(' + st.presetErr + ')');
      if (st.custom) parts.push('自定义源 ' + st.custom + ' 条');
      if (st.customErr) parts.push('自定义源失败(' + st.customErr + ')');
      if (st.cidr) parts.push('CF 补足 ' + st.cidr + ' 条');
      // 候选数量截断：自定义 URL 源可能拉取上千条候选（第三方优选 IP 文档动辄上千条），全量测速耗时过长；
      // 按「候选数量」只测前 N 条（可调高数值测更多），测速列表与「全部加入最优」均基于该子集
      var candSub = (o.count > 0 && cands.length > o.count) ? cands.slice(0, o.count) : cands;
      showMsg('oMsg', '拉取 ' + cands.length + ' 条（' + (parts.join('，') || '无') + '），本地测速前 ' + candSub.length + ' 条…', 'info');
      localTest(candSub, o.threads || 5, 3000).then(function(results){
        results.sort(function(a, b){ return (a.latency < 0 ? 1e9 : a.latency) - (b.latency < 0 ? 1e9 : b.latency); });
        renderResults(results);
        var okc = results.filter(function(x){ return x.ok; }).length;
        showMsg('oMsg', '测速完成：' + okc + '/' + results.length + ' 可用（本地 → 目标）', okc ? 'ok' : 'err');
      });
    })
    .catch(function(){ showMsg('oMsg', '拉取失败：无法连接服务器', 'err'); });
}
function renderResults(list){
  var seen = {};
  var dedup = [];
  (list || []).forEach(function(r){
    if (seen[r.ip]) return;
    seen[r.ip] = 1;
    dedup.push(r);
  });
  LAST = dedup;
  var tb = $('oTableBody');
  tb.innerHTML = '';
  if (!LAST.length){ tb.innerHTML = '<tr><td colspan="4" style="text-align:center;color:var(--faint)">没有可用结果</td></tr>'; return; }
  LAST.forEach(function(r, i){
    var tr = document.createElement('tr');
    var ok = r.ok;
    var lag = ok ? (r.latency + 'ms') : '超时';
    var badge = '<span class="badge ' + (ok ? 'g' : 'r') + '">' + (ok ? '可用' : '超时') + '</span>';
    var btn = ok ? '<button class="btn sm primary" onclick="useIp(' + i + ')">加入优选</button>' : '<span style="color:var(--faint)">—</span>';
    tr.innerHTML = '<td class="ip">' + r.ip + ':' + r.port + '</td><td>' + lag + '</td><td>' + badge + '</td><td>' + btn + '</td>';
    tb.appendChild(tr);
  });
}
function useIp(i){
  var r = LAST[i];
  if (!r) return;
  var ta = $('f-preferred');
  var line = r.ip + ':' + r.port + (r.name ? ('#' + r.name) : '');
  var exists = false;
  String(ta.value || '').split(/[\n,;]+/).forEach(function(s){
    var p = parseIps(s);
    if (p.length && p[0].ip === r.ip) exists = true;
  });
  if (exists){ toast('该 IP 已在优选列表中', 'warn'); return; }
  var s = ta.value.trim();
  ta.value = s ? (s + '\n' + line) : line;
  markDirty();
  toast('已加入优选列表，点击「保存全部」下发', 'ok');
}
function addAllBest(){
  var n = parseInt($('o-count').value) || 20;
  var seen = {};
  var list = [];
  LAST.filter(function(r){ return r.ok; }).forEach(function(r){
    if (seen[r.ip] || list.length >= n) return;
    seen[r.ip] = 1;
    list.push(r);
  });
  if (!list.length){ toast('没有可用结果', 'err'); return; }
  var arr = [];
  // 保留原节点名：防地区信息丢失导致订阅无国家显示；无名条目才编「优选N」
  list.forEach(function(r, i){ arr.push(r.ip + ':' + r.port + (r.name ? ('#' + r.name) : ('#优选' + (i + 1)))); });
  $('f-preferred').value = arr.join('\n');
  markDirty();
  toast('已加入最快的 ' + list.length + ' 个优选 IP，点击「保存全部」下发', 'ok');
}
function fetchDomains(){
  api('domains').then(function(r){
    if (r && r.ok && r.data && r.data.length){ $('f-preferred').value = r.data.join('\n'); markDirty(); toast('已拉取优选域名', 'ok'); }
    else toast((r && r.msg) || '拉取失败', 'err');
  }).catch(function(){ toast('拉取失败：无法连接服务器', 'err'); });
}

/* ===== 启动 ===== */
buildNav();
var initView = 'dashboard';
try {
  var qv = new URLSearchParams(location.search).get('v');
  if (qv && TITLES[qv]) initView = qv;
} catch(e) {}
switchView(initView);
loadAll();
</script>
</body>
</html>

`;function pn(t){const p="/"+String(t||"").replace(/^\/+/,"").replace(/\/+$/,""),i=Xe.indexOf("var APIPATH ="),j=i<0?-1:Xe.indexOf(";",i),h=i>=0&&j>i?Xe.slice(0,i)+"var APIPATH = "+JSON.stringify(p)+Xe.slice(j):Xe;return new Response(h,{status:200,headers:{"Content-Type":"text/html; charset=utf-8"}})}function Ye(t,e){return!t.admin&&!t.adminInit&&!(!e.K||"function"!=typeof e.K.get)}function Ck(t){return F(String(t&&t.uuid||"")+"|rule").slice(0,12)}function Qe(t){return(t||"").toLowerCase().includes("mozilla")}function Ze(t,e){return!!Qe(e)&&(!!(t.headers.get("Accept")||"").toLowerCase().includes("text/html")||"document"===(t.headers.get("Sec-Fetch-Dest")||"").toLowerCase()||!!t.headers.get("Upgrade-Insecure-Requests"))}async function tn(t,e){if(!e.admin)return!0;const n=(t.headers.get("Cookie")||"").match(new RegExp("(?:^|;\\s*)"+__AC+"=([^;]+)"));return!(!n||n[1]!==F(String(e.admin)))}const en=new Map,nn={sub:{cap:30,burst:10,refillMs:6e4},panel:{cap:60,burst:20,refillMs:6e4}};function rn(t,e){const n=nn[e];if(!n)return!0;const r=t.headers.get("CF-"+_d("Q29ubmVjdA==")+"ing-IP")||t.headers.get("X-Real-IP")||"";if(!r)return!0;const a=Date.now();en.size>2e3&&en.clear();const o=e+"|"+r;let s=en.get(o);s||(s={tokens:n.cap,t:a},en.set(o,s));const i=Math.floor((a-s.t)/n.refillMs);return i>0&&(s.tokens=Math.min(n.cap,s.tokens+i*n.burst),s.t=s.t+i*n.refillMs),!(s.tokens<=0||(s.tokens--,0))}function an(){return NF()}function _uq(t){try{return decodeURIComponent(t)}catch(e){return t}}const _WH=`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Welcome</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0f1216;color:#e8ecf2;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
main{text-align:center;padding:2rem}
h1{font-size:1.9rem;font-weight:600;letter-spacing:.02em}
p{margin-top:.75rem;color:#8b95a7;font-size:.95rem}
i{display:inline-block;width:8px;height:8px;border-radius:50%;background:#3ba55d;margin-right:.5rem;vertical-align:middle}
</style>
</head>
<body>
<main>
<h1>Welcome</h1>
<p><i></i>Service is running</p>
</main>
</body>
</html>
`;function _W(){return new Response(_WH,{status:200,headers:{"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-store, no-cache, must-revalidate","Pragma":"no-cache"}})}function NF(){const _m=Be&&(Be.MASK||"");return"1101"===_m?_M1():"off"===_m||"0"===_m?new Response("Not Found",{status:404}):_W()}function _M1(){const h=_rq?new URL(_rq.url).host:"localhost",d=new Date(),p=function(n){return String(n).padStart(2,"0")},ts=d.getUTCFullYear()+"-"+p(d.getUTCMonth()+1)+"-"+p(d.getUTCDate())+" "+p(d.getUTCHours())+":"+p(d.getUTCMinutes())+":"+p(d.getUTCSeconds()),ry=Array.from(crypto.getRandomValues(new Uint8Array(8)),function(b){return b.toString(16).padStart(2,"0")}).join(""),ip=(_rq&&_rq.headers.get("CF-"+_d("Q29ubmVjdA==")+"ing-IP"))||"";return new Response(`<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en-US"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en-US"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en-US"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en-US"> <!--<![endif]-->
<head>
<title>Worker threw exception | ${h} | Cloudflare</title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta name="robots" content="noindex, nofollow" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<style>
body{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:#fff;color:#404041;font-size:16px;line-height:1.5}
.cf-wrapper{max-width:960px;margin:0 auto;padding:0 1.5em}
#cf-error-details{padding:2.5em 0}
.cf-error-overview h1{font-size:2.6em;font-weight:400;margin:0 0 .3em;line-height:1.2}
.cf-error-type{color:#404041}
.cf-error-code{color:#bd2426;font-weight:600}
.heading-ray-id{display:block;font-size:.5em;color:#92979b;margin-top:.8em;font-weight:400}
.cf-subheadline{font-size:1.4em;font-weight:400;margin:0 0 1.2em;color:#404041}
.cf-section{border-top:1px solid #e0e0e0;padding:1.4em 0}
.cf-error-source{background:#f6f6f6;border:1px solid #e0e0e0;padding:1.2em;color:#606265;font-size:.94em}
.cf-error-source p{margin:0 0 .8em}
.cf-error-source p:last-child{margin:0}
.cf-footer{border-top:1px solid #e0e0e0;padding:1.2em 0;font-size:.86em;color:#92979b}
.cf-footer a,.cf-section a{color:#2f7bbf;text-decoration:none}
.cf-footer p{margin:0 0 .4em}
</style>
</head>
<body>
<div id="cf-wrapper">
<div id="cf-error-details" class="cf-error-details-wrapper">
<div class="cf-header cf-error-overview">
<h1><span class="cf-error-type">Error</span> <span class="cf-error-code">1101</span><small class="heading-ray-id">Ray ID: ${ry} &bull; ${ts} UTC</small></h1>
<h2 class="cf-subheadline">Worker threw exception</h2>
</div>
<div class="cf-section cf-wrapper">
<p>You've requested a page on a website (${h}) that is on the <a href="https://www.cloudflare.com/5xx-error-landing/">Cloudflare</a> network. An unknown error occurred while rendering the page.</p>
</div>
<div class="cf-section cf-wrapper">
<div class="cf-error-source">
<p><strong>What can I do?</strong></p>
<p><strong>If you are the owner of this website:</strong> contact your hosting provider and let them know your web server is not completing requests. An Error 1101 means that the request reached the server, but the server threw an exception while processing it.</p>
<p><strong>If you are a visitor:</strong> please try again in a few minutes.</p>
</div>
</div>
</div>
<div class="cf-footer"><p>Cloudflare Ray ID: <strong>${ry}</strong></p><p>Your IP: ${ip} &bull; Performance &amp; security by <a href="https://www.cloudflare.com/5xx-error-landing/">Cloudflare</a></p></div>
</div>
</body>
</html>`,{status:500,headers:{"Content-Type":"text/html; charset=UTF-8","Cache-Control":"no-store, no-cache, must-revalidate","Pragma":"no-cache"}})}async function on(t,e,n){if(!t||!t.K||"function"!=typeof t.K.get)return!0;try{const r=await t.K.get(e),a=r&&parseInt(JSON.parse(r).t,10)||0;if(a&&Date.now()-a<n)return!1;const o=t.K.put(e,JSON.stringify({t:Date.now()}));return t._ctx&&"function"==typeof t._ctx.waitUntil?t._ctx.waitUntil(o.catch(()=>{})):await o.catch(()=>{}),!0}catch(t){return!0}}export default{fetch:async(r,s,i)=>async function(r,s){Be=s,_rq=r;const i=new URL(r.url),u=r.headers.get("User-Agent")||"",f=(r.headers.get("Upgrade")||"").toLowerCase();if("http:"===i.protocol)return Response.redirect(i.href.replace("http://","https://"),301);const h=await lt(s),m=h.path||h.uuid,AP=String(h.login||h.admin||"").replace(/^\/+|\/+$/g,""),g=i.pathname.replace(/^\/+|\/+$/g,"").split("/");if("crules"===g[0]&&3===g.length&&g[1]===Ck(h))return async function(t,e){const n=String(e||"").replace(/\.(mrs|yaml|yml|txt|list)$/i,""),r=l[n];if(!r)return it({ok:!1,msg:"unknown rule set"},404);const a=Date.now(),o=c.get(n);if(o&&a-o.t<36e5)return d(o.buf,r.ct);if(t.K&&"function"==typeof t.K.get)try{const e=await t.K.get("crule:"+n,{type:"arrayBuffer"});if(e&&e.byteLength)return c.set(n,{t:a,buf:e}),d(e,r.ct)}catch(t){}let s=p.get(n);if(!s){s=(async()=>{const e=await oe(r.url,{headers:{"User-Agent":__B+"/"+VERSION,Accept:"*/*"}},2e4);if(!e.ok)throw new Error(_d("dXBzdHJlYW0=")+" HTTP "+e.status);const a=await e.arrayBuffer();if(!a||!a.byteLength)throw new Error(_d("dXBzdHJlYW0=")+" empty body");if(t.K&&"function"==typeof t.K.put)try{await t.K.put("crule:"+n,a,{expirationTtl:Math.floor(86400)})}catch(t){}return c.set(n,{t:Date.now(),buf:a}),a})(),p.set(n,s);const e=()=>p.delete(n);s.then(e,e)}try{return d(await s,r.ct)}catch(t){return new Response("rule "+_d("dXBzdHJlYW0=")+" error: "+(t.message||t),{status:502,headers:{"Retry-After":"3600"}})}}(s,decodeURIComponent(g[2]));if(AP&&(g[0]===AP||_uq(g[0])===AP)||"login"===g[0]&&!AP){const t=!h.admin;if("POST"===r.method){const e=await r.text(),n=new URLSearchParams(e);if(t){const t=String(n.get("password")||"");if(t.length<4)return it({ok:!1,msg:"密码至少 4 位"},400);const e=JSON.parse(JSON.stringify(h));if(e.admin=t,e.adminInit=!0,s.U||(e.uuid=_U(t)),s.D||s.PATH||(e.path=e.uuid),!await ct(s,e))return it({ok:!1,msg:"未绑定 KV 命名空间，无法保存管理密码"},500);const r=F(t);return new Response(JSON.stringify({ok:!0,next:n.get("next")||"/"+AP}),{status:200,headers:{"Content-Type":"application/json; charset=utf-8","Set-Cookie":__AC+"="+r+"; Path=/; Max-Age=86400; HttpOnly; Secure; SameSite=Lax"}})}if(h.admin&&n.get("password")===h.admin){const t=F(String(h.admin));return new Response(JSON.stringify({ok:!0,next:n.get("next")||"/"+AP}),{status:200,headers:{"Content-Type":"application/json; charset=utf-8","Set-Cookie":__AC+"="+t+"; Path=/; Max-Age=86400; HttpOnly; Secure; SameSite=Lax"}})}return it({ok:!1,msg:"密码错误"},403)}if(h.admin&&await tn(r,h))return pn(m);return h.admin?new Response("\n<!DOCTYPE html>\n<html lang=\"zh-CN\" data-theme=\"dark\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>登录</title>\n<link rel=\"icon\" href=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='3' y='3' width='18' height='18' rx='5' fill='%23f6821f'/%3E%3Cpath d='M8 15V9l8 6V9' stroke='%230d131b' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\">\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n:root{--bg:#0b0f14;--card:#131a23;--border:#243041;--text:#e8eef6;--dim:#8fa3ba;--accent:#f6821f;--accent2:#ff9a3d;--accent-dim:rgba(246,130,31,.14);--err:#ff5c5c;--err-dim:rgba(255,92,92,.13)}\n[data-theme=\"light\"]{--bg:#f3f5f9;--card:#ffffff;--border:#dde4ee;--text:#1b2634;--dim:#5d6b7d;--accent:#e8720e;--accent2:#f6821f;--accent-dim:rgba(232,114,14,.10);--err:#d94848;--err-dim:rgba(217,72,72,.10)}\nbody{background:var(--bg);color:var(--text);font-family:\"PingFang SC\",\"Microsoft YaHei\",\"Segoe UI\",system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px}\n.box{width:340px;max-width:100%;background:var(--card);border:1px solid var(--border);border-radius:16px;padding:30px 28px;box-shadow:0 18px 50px rgba(0,0,0,.25)}\n[data-theme=\"light\"] .box{box-shadow:0 14px 40px rgba(30,45,70,.10)}\n.brand{display:flex;align-items:center;gap:10px;margin-bottom:22px}\n.mark{width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center}\n.mark svg{width:20px;height:20px}\n.mark path{stroke:#0d131b}\n.brand .bt{display:flex;flex-direction:column;line-height:1.25}\n.brand .bt b{font-size:16px}\n.brand .bt span{font-size:11.5px;color:var(--dim)}\nh1{font-size:15px;margin-bottom:4px}\np{color:var(--dim);font-size:13px;margin-bottom:18px}\ninput{width:100%;background:var(--bg);border:1px solid var(--border);color:var(--text);border-radius:9px;padding:10px 13px;font-size:14px;outline:none;margin-bottom:12px;font-family:inherit}\ninput:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-dim)}\nbutton{width:100%;background:linear-gradient(135deg,var(--accent),var(--accent2));border:none;color:#201308;border-radius:9px;padding:11px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit}\nbutton:hover{filter:brightness(1.06)}\nbutton:disabled{opacity:.6;cursor:not-allowed}\n.msg{color:var(--err);font-size:13px;margin-bottom:12px;display:none;background:var(--err-dim);padding:8px 12px;border-radius:8px}\n.foot{margin-top:16px;text-align:center;font-size:11.5px;color:var(--dim)}\n</style>\n</head>\n<body>\n<div class=\"box\">\n  <div class=\"brand\">\n    <div class=\"mark\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12h4l3-7 4 14 3-7h2\"/></svg></div>\n    <div class=\"bt\"><b>Console</b><span>Cloudflare 节点控制台</span></div>\n  </div>\n  <h1>登录</h1>\n  <p>请输入管理密码以继续</p>\n  <div class=\"msg\" id=\"msg\">密码错误，请重试</div>\n  <form id=\"form\">\n    <input type=\"password\" id=\"pwd\" placeholder=\"管理密码\" autofocus autocomplete=\"current-password\">\n    <button type=\"submit\" id=\"btn\">登录</button>\n  </form>\n  <div class=\"foot\">配置保存在 Cloudflare KV 中，密码错误 24 小时后自动失效</div>\n</div>\n<script>\n(function(){\n  var t = 'dark';\n  try { t = localStorage.getItem('tp_theme') || 'dark'; } catch(e) {}\n  var resolved = t === 'auto'\n    ? (window.matchMedia && matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')\n    : t;\n  document.documentElement.setAttribute('data-theme', resolved);\n  var next = new URLSearchParams(location.search).get('next') || location.pathname;\n  document.getElementById('form').addEventListener('submit', function(e){\n    e.preventDefault();\n    var btn = document.getElementById('btn');\n    var msg = document.getElementById('msg');\n    btn.disabled = true; msg.style.display = 'none';\n    fetch(location.pathname, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'password=' + encodeURIComponent(document.getElementById('pwd').value) + '&next=' + encodeURIComponent(next) })\n      .then(function(r){ return r.json(); })\n      .then(function(r){\n        if (r && r.ok){ location.href = r.next || '/'; }\n        else { msg.style.display = 'block'; btn.disabled = false; }\n      })\n      .catch(function(){ msg.textContent = '网络错误，请重试'; msg.style.display = 'block'; btn.disabled = false; });\n  });\n})();\n<\/script>\n</body>\n</html>\n\n",{status:200,headers:{"Content-Type":"text/html; charset=utf-8"}}):t?new Response("\n<!DOCTYPE html>\n<html lang=\"zh-CN\" data-theme=\"dark\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>初始化</title>\n<link rel=\"icon\" href=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='3' y='3' width='18' height='18' rx='5' fill='%23f6821f'/%3E%3Cpath d='M8 15V9l8 6V9' stroke='%230d131b' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\">\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n:root{--bg:#0b0f14;--card:#131a23;--border:#243041;--text:#e8eef6;--dim:#8fa3ba;--accent:#f6821f;--accent2:#ff9a3d;--accent-dim:rgba(246,130,31,.14);--err:#ff5c5c;--err-dim:rgba(255,92,92,.13)}\n[data-theme=\"light\"]{--bg:#f3f5f9;--card:#ffffff;--border:#dde4ee;--text:#1b2634;--dim:#5d6b7d;--accent:#e8720e;--accent2:#f6821f;--accent-dim:rgba(232,114,14,.10);--err:#d94848;--err-dim:rgba(217,72,72,.10)}\nbody{background:var(--bg);color:var(--text);font-family:\"PingFang SC\",\"Microsoft YaHei\",\"Segoe UI\",system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px}\n.box{width:340px;max-width:100%;background:var(--card);border:1px solid var(--border);border-radius:16px;padding:30px 28px;box-shadow:0 18px 50px rgba(0,0,0,.25)}\n[data-theme=\"light\"] .box{box-shadow:0 14px 40px rgba(30,45,70,.10)}\n.brand{display:flex;align-items:center;gap:10px;margin-bottom:22px}\n.mark{width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center}\n.mark svg{width:20px;height:20px}\n.mark path{stroke:#0d131b}\n.brand .bt{display:flex;flex-direction:column;line-height:1.25}\n.brand .bt b{font-size:16px}\n.brand .bt span{font-size:11.5px;color:var(--dim)}\nh1{font-size:15px;margin-bottom:4px}\np{color:var(--dim);font-size:13px;margin-bottom:18px}\ninput{width:100%;background:var(--bg);border:1px solid var(--border);color:var(--text);border-radius:9px;padding:10px 13px;font-size:14px;outline:none;margin-bottom:12px;font-family:inherit}\ninput:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-dim)}\nbutton{width:100%;background:linear-gradient(135deg,var(--accent),var(--accent2));border:none;color:#201308;border-radius:9px;padding:11px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit}\nbutton:hover{filter:brightness(1.06)}\nbutton:disabled{opacity:.6;cursor:not-allowed}\n.msg{color:var(--err);font-size:13px;margin-bottom:12px;display:none;background:var(--err-dim);padding:8px 12px;border-radius:8px}\n.foot{margin-top:16px;text-align:center;font-size:11.5px;color:var(--dim)}\n</style>\n</head>\n<body>\n<div class=\"box\">\n  <div class=\"brand\">\n    <div class=\"mark\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12h4l3-7 4 14 3-7h2\"/></svg></div>\n    <div class=\"bt\"><b>Console</b><span>Cloudflare 节点控制台</span></div>\n  </div>\n  <h1>设置管理密码</h1>\n  <p>部署后首次访问请设置管理密码。设置后访问面板需登录。</p>\n  <div class=\"msg\" id=\"msg\">设置失败，请重试</div>\n  <form id=\"form\">\n    <input type=\"password\" id=\"pwd\" placeholder=\"设置管理密码（至少 4 位）\" autofocus autocomplete=\"new-password\">\n    <input type=\"password\" id=\"pwd2\" placeholder=\"确认管理密码\" autocomplete=\"new-password\">\n    <button type=\"submit\" id=\"btn\">设置并进入面板</button>\n  </form>\n  <div class=\"foot\">密码保存在 Cloudflare KV 中，之后可在「面板设置」中修改</div>\n</div>\n<script>\n(function(){\n  var t = 'dark';\n  try { t = localStorage.getItem('tp_theme') || 'dark'; } catch(e) {}\n  var resolved = t === 'auto'\n    ? (window.matchMedia && matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')\n    : t;\n  document.documentElement.setAttribute('data-theme', resolved);\n  var next = new URLSearchParams(location.search).get('next') || location.pathname;\n  document.getElementById('form').addEventListener('submit', function(e){\n    e.preventDefault();\n    var p1 = document.getElementById('pwd').value, p2 = document.getElementById('pwd2').value;\n    var msg = document.getElementById('msg');\n    var btn = document.getElementById('btn');\n    if (p1.length < 4) { msg.textContent = '密码至少 4 位'; msg.style.display = 'block'; return; }\n    if (p1 !== p2) { msg.textContent = '两次输入的密码不一致'; msg.style.display = 'block'; return; }\n    btn.disabled = true; msg.style.display = 'none';\n    fetch(location.pathname, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'setup=1&password=' + encodeURIComponent(p1) + '&next=' + encodeURIComponent(next) })\n      .then(function(r){ return r.json(); })\n      .then(function(r){\n        if (r && r.ok){ location.href = r.next || '/'; }\n        else { msg.textContent = (r && r.msg) || '设置失败，请重试'; msg.style.display = 'block'; btn.disabled = false; }\n      })\n      .catch(function(){ msg.textContent = '网络错误，请重试'; msg.style.display = 'block'; btn.disabled = false; });\n  });\n})();\n<\/script>\n</body>\n</html>\n\n",{status:200,headers:{"Content-Type":"text/html; charset=utf-8"}}):an()}const b=String(h.subUrl||"").trim().replace(/^\/+/,"").replace(/\/+$/,""),v=g[0]===m||!!b&&g[0]===b;if(""===g[0])return an();if(v&&1===g.length){if("websocket"===f)return Te(s,r.cf&&r.cf.colo),Gt(r,h);if("POST"===r.method&&h.enableXhttp){Te(s,r.cf&&r.cf.colo);try{return await async function(t,e){const n=t.body.getReader(),r=await n.read();if(r.done)return new Response("empty",{status:400});const a=bt(r.value),o=await Bt(a,e,t.cf&&t.cf.colo,0,jt(r.value.subarray(a.headerLength))),s=o.writable.getWriter();await s.write(r.value.subarray(a.headerLength)),(async()=>{try{for(;;){const{done:t,value:e}=await n.read();if(t)break;await s.write(e)}}catch(t){}try{await s.close()}catch(t){}})();const i=new ReadableStream({async start(t){t.enqueue(new Uint8Array([0,0])),o._preamble&&o._preamble.byteLength>0&&t.enqueue(o._preamble);const e=o.readable.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;t.enqueue(r)}}catch(t){}try{t.close()}catch(t){}try{o.close()}catch(t){}},cancel(){try{o.close()}catch(t){}}});return new Response(i,{status:200,headers:{"content-type":"application/octet-stream","x-accel-buffering":"no","cache-control":"no-store"}})}(r,h)}catch(t){return it({ok:!1,msg:_d("eGh0dHA=")+" 错误: "+(t.message||t)},500)}}}if(v&&"sub"===g[1]){if(!rn(r,"sub"))return an();const t=g.length>=3?g[2]:"";try{if(s._ctx&&"function"==typeof s._ctx.waitUntil)s._ctx.waitUntil(mt(s,h));else try{await mt(s,h)}catch(t){}if(h.quotaDisabled)return new Response(__B+"：账户当日额度已达 99%，订阅已自动停用（次日自动恢复）",{status:403,headers:{"Content-Type":"text/plain; charset=utf-8"}});let e=null;if(!1!==h.polling&&s.K&&"function"==typeof s.K.get)try{const t=await s.K.get("issued");if(t){const n=JSON.parse(t);Array.isArray(n.ips)&&n.ips.length&&(e=new Set(n.ips))}}catch(t){}const n=e?Object.assign({},h,{_skipIssued:e}):h;if(h.quotaAuto)try{const t=await gt(s,h);if(t.configured&&t.today&&t.today.requests>=Math.round(6e4)){const e=t.today.requests/t.limit,r=Math.max(.1,(1-e)/.4);n._quotaCap=Math.max(20,Math.round(1e3*r))}}catch(t){}const a=await Je(n,r.url,t,u,r.cf&&r.cf.colo,r.cf&&r.cf.country,s);if(!1!==h.polling&&s.K&&"function"==typeof s.K.put&&a.issued&&a.issued.length){const t=e?Array.from(e):[],n=[...new Set([...a.issued,...t])].slice(0,200);if((n.length!==t.length||n.some((e,n)=>e!==t[n]))&&Date.now()-W>=3e4){W=Date.now();const t=JSON.stringify({t:Date.now(),ips:n});s._ctx&&"function"==typeof s._ctx.waitUntil?s._ctx.waitUntil(s.K.put("issued",t).catch(()=>{})):await s.K.put("issued",t).catch(()=>{})}}const o={[_d("Y2xhc2g=")]:__B+".yaml",[_d("c3Rhc2g=")]:__B+".yaml",[_d("c2luZ2JveA==")]:__B+".json",[_d("c3VyZ2U=")]:__B+".conf",[_d("c3VyZmJvYXJk")]:__B+".conf",[_d("bG9vbg==")]:__B+".conf",[_d("cXVhbng=")]:__B+".conf"}[t]||__B+".txt";return new Response(a.body,{status:200,headers:{"Content-Type":a.type+"; charset=utf-8","Cache-Control":"no-store","Content-Disposition":'attachment; filename="'+o+"\"; filename*=utf-8''"+o}})}catch(t){return new Response("订阅生成失败: "+(t&&t.message||t),{status:500,headers:{"Content-Type":"text/plain; charset=utf-8"}})}}if(v&&1===g.length&&Ze(r,u))return rn(r,"panel")?await tn(r,h)?pn(m):an():an();if(v&&"api"===g[1]){if(!rn(r,"panel"))return an();const l=g[2]||"";if(Ye(h,s))return Ze(r,u)?it({ok:!1,status:403,msg:"请先完成首次设置：设置管理密码后再访问面板"},403):NF();if(!await tn(r,h))return Ze(r,u)?it({ok:!1,status:403,msg:"未授权（需要管理密码）"},403):NF();if("config"===l){if("GET"===r.method)return it({ok:!0,data:Object.assign({},h,{version:VERSION})});if("POST"===r.method)try{const t=await r.json();let e=!1;if(s.K&&"function"==typeof s.K.get)try{const t=await s.K.get("config",{cacheTtl:30});t&&void 0!==JSON.parse(t).quotaAuto&&(e=!0)}catch(t){}const n=Object.assign(JSON.parse(JSON.stringify(h)),t);e||!1!==n.quotaAuto||Boolean(n.cfAccountId&&n.cfApiToken||s.CF_ACCOUNT_ID&&s.CF_API_TOKEN)&&(n.quotaAuto=!0),t.optimizer&&"object"==typeof t.optimizer&&(n.optimizer=Object.assign(n.optimizer,t.optimizer)),t.preferredIPs&&Array.isArray(t.preferredIPs)&&(n.preferredIPs=t.preferredIPs),await ct(s,n);const a=await lt(s,r.url);return it({ok:!0,data:Object.assign({},a,{version:VERSION}),msg:"已保存并生效"})}catch(t){return it({ok:!1,msg:"保存失败: "+(t.message||t)},500)}}if("reset"===l){if("POST"!==r.method)return it({ok:!1,msg:"仅支持 POST"},405);try{return s.K&&"function"==typeof s.K.delete?(await s.K.delete("config"),await s.K.delete("issued"),it({ok:!0,msg:"已重置：KV 已清空，面板还原为初始部署状态"})):it({ok:!1,msg:"未绑定 KV 命名空间，无需重置"},400)}catch(t){return it({ok:!1,msg:"重置失败: "+(t.message||t)},500)}}if("status"===l)return it({ok:!0,data:{version:VERSION,kind:"obfuscated"===e()?"混淆版":"明文版",host:i.hostname,path:m,region:r.cf&&r.cf.colo||"unknown",visitorCountry:r.cf&&r.cf.country||"",usageColo:await Ue(s),kv:!(!s.K||"function"!=typeof s.K.get),workersDev:/\.workers\.dev$/i.test(i.hostname)}});if("update"===l)try{const t=await async function(){const t=Date.now();if(n&&t-n.t<6e4)return n.r;const r="obfuscated"===e()?"混淆":"明文";let s=null,i="",l="";const c="https://raw.githubusercontent.com/"+UPDATE_REPO+"/main/"+encodeURIComponent(_d("Q0ZOZXh0")+" 明文版.js");try{const t=await fetch(c,{headers:{"User-Agent":"Mozilla/5.0 ("+_d("Q0ZOZXh0")+")"}});if(t.ok){const e=o(await t.text());e&&(s=e)}}catch(t){l=t&&t.message||String(t)}if(s){const e="https://raw.githubusercontent.com/"+UPDATE_REPO+"/main/"+encodeURIComponent("混淆"===r?_d("Q0ZOZXh0")+" 混淆版.js":_d("Q0ZOZXh0")+" 明文版.js");try{const t=await fetch(e,{headers:{"User-Agent":"Mozilla/5.0 ("+_d("Q0ZOZXh0")+")"}});t.ok&&(i=await t.text())}catch(t){}return n={t:t,r:{current:VERSION,kind:r,latest:s,hasUpdate:a(s,VERSION)>0,code:i,checkedAt:t}},n.r}const p="https://raw.githubusercontent.com/"+UPDATE_REPO+"/main/"+encodeURIComponent(_d("Q0ZOZXh0")+" 混淆版.js");try{const t=await fetch(p,{headers:{"User-Agent":"Mozilla/5.0 ("+_d("Q0ZOZXh0")+")"}});if(t.ok){const e=o(await t.text());e&&(s=e)}}catch(t){l=t&&t.message||String(t)}return s?(n={t:t,r:{current:VERSION,kind:r,latest:s,hasUpdate:a(s,VERSION)>0,code:"",checkedAt:t}},n.r):{current:VERSION,kind:r,latest:null,hasUpdate:!1,code:"",error:l||"未在仓库中找到版本信息"}}(),r={current:t.current,latest:t.latest,hasUpdate:t.hasUpdate,kind:t.kind,error:t.error||""};return t.hasUpdate&&t.code&&(r.code=t.code),it({ok:!0,data:r})}catch(t){return it({ok:!1,msg:"检测失败: "+(t.message||t)},500)}if("quota"===l)try{return it({ok:!0,data:await gt(s,h)})}catch(t){return it({ok:!1,msg:"查询失败: "+(t.message||t)},500)}if("sub"===l){const t=i.searchParams.get("fmt")||"";try{const e=await Je(h,r.url,t,u,r.cf&&r.cf.colo,r.cf&&r.cf.country,s);return it({ok:!0,type:e.type,body:e.body})}catch(t){return it({ok:!1,msg:"订阅生成失败: "+(t.message||t)},500)}}if("candidates"===l){if("POST"!==r.method)return it({ok:!1,msg:"仅支持 POST"},405);try{const t=await r.json().catch(()=>({})),e=await Jt(Object.assign({},h.optimizer,t));if(!e.candidates.length){const t=e.stats||{},n=[t.presetErr&&"预设源: "+t.presetErr,t.customErr&&"自定义源: "+t.customErr].filter(Boolean).join("；");return it({ok:!1,msg:"没有可测的 IP"+(n?"（"+n+"）":"，请换一个数据源")},400)}return it({ok:!0,data:e.candidates,stats:e.stats})}catch(t){return it({ok:!1,msg:"拉取失败: "+(t.message||t)},500)}}if("hwlist"===l)try{const e=i.searchParams.get("country")||"",n=i.searchParams.get("proto")||"tcp",r=await q(e);if(!r.length)return it({ok:!1,msg:"VPN Gate 列表为空（可能被限流，请稍后重试）"},400);const a=r.slice(0,30),o=await je(a,e=>{const n=String(B(j(e.ovpnB64)).remote||"").split(/\s+/),r=parseInt(n[1],10)||0;return r?async function(e,n){const r=Date.now();try{const a=t({hostname:e,port:n});await Promise.race([a.opened,new Promise((t,e)=>setTimeout(()=>e(new Error("tcp timeout")),2e3))]);const o=Date.now()-r;try{a.close()}catch(t){}return{ok:!0,delay:o}}catch(t){return{ok:!1,delay:-1}}}(e.ip,r):{ok:!1,delay:-1}}),s=a.map((t,e)=>{const r=B(j(t.ovpnB64)),a=String(r.remote||"").split(/\s+/),s=parseInt(a[1],10)||443;return{host:t.host,ip:t.ip,port:s,tcp:s,udp:s,speed:t.speed,ping:t.ping,country:t.country,proto:r.proto||n,ovpn:r,alive:!(!o[e]||!o[e].ok),delay:o[e]&&o[e].ok?o[e].delay:-1}});return s.sort((t,e)=>(e.alive?1:0)-(t.alive?1:0)||(e.speed||0)-(t.speed||0)),it({ok:!0,data:s,proto:n})}catch(t){return it({ok:!1,msg:"VPN Gate 拉取失败: "+(t.message||t)},500)}if("hwrefresh"===l)try{const t=await lt(s),e=await X(s,t,!0);return it({ok:!0,data:e,count:e.length})}catch(t){return it({ok:!1,msg:"VPN Gate 刷新失败: "+(t.message||t)},500)}if("domains"===l)try{const t=N[i.searchParams.get("source")||"wetest_cname"]||N.wetest_cname,e=await fetch(t.url,{headers:{"User-Agent":"Mozilla/5.0"}});return e.ok?it({ok:!0,data:function(t){const e=new Set,n=[],r=/(?:\*\.)?(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}/gi;let a;for(;a=r.exec(t);){const t=a[0].toLowerCase();!e.has(t)&&(t.includes("cloudflare")||t.includes(_d("YmVzdGNm"))||t.includes("182682")||t.includes(_d("MDkwMjI3"))||t.endsWith(".xyz")||t.endsWith(".top"))&&(e.add(t),n.push(t))}return n.slice(0,10)}(await e.text())}):it({ok:!1,msg:"拉取失败 HTTP "+e.status})}catch(t){return it({ok:!1,msg:"拉取失败: "+(t.message||t)},500)}}return NF()}(r,Object.assign({},s,{_ctx:i})),scheduled:async(t,e,n)=>async function(t,e){Be=e;const n=String(e.HOME_WAN_AUTO||"").toLowerCase();if("1"===n||"true"===n)try{if(await on(e,"hwrefreshAt",9e5)){const t=await lt(e);t.homeWan&&await X(e,t,!0)}}catch(t){}const r=String(e.BESTIP_AUTO||"").toLowerCase();if("1"===r||"true"===r)try{await on(e,"autobestAt",18e5)&&await async function(t){const e=await lt(t),n=(await Jt(e.optimizer)).candidates||[];if(!n.length)return{ok:!1,msg:"没有可测的 IP"};const r=(await async function(t,e,n){e=Math.max(1,Math.min(50,Number(e)||5)),n=Math.max(500,Number(n)||5e3);const r=[];let a=0;return await Promise.all(Array.from({length:e},async function(){for(;a<t.length;){const e=t[a++],o=await Xt(e.ip,e.port,n);r.push(o)}})),r.sort((t,e)=>(t.latency<0?1e9:t.latency)-(e.latency<0?1e9:e.latency)),r}(n,e.optimizer.threads||5,5e3)).filter(t=>t.ok).slice(0,e.optimizer.count||20);if(!r.length)return{ok:!1,msg:"测速无可用 IP"};const a=r.map(t=>({ip:t.ip,port:t.port||443,name:""})),o=new Set((e.preferredIPs||[]).map(t=>t.ip)),s=new Set(a.map(t=>t.ip)),i=!(o.size===s.size&&[...s].every(t=>o.has(t)));i&&(e.preferredIPs=a,await ct(t,e));try{await mt(t,e)}catch(t){}return{ok:!0,changed:i,count:a.length}}(e)}catch(t){}}(0,e)};