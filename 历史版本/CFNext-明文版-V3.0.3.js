// ============================================================================
//  Edge panel · single-file Worker implementation
//
//  Config keys: login/L  ADMIN  U  D/PATH  MASK  HOST  PROXYIP  S/OUTBOUND
//               ECH  TROJAN  ALPN  YX  YXURL  BESTIP_AUTO  DEPLOY_EDITION
//               CF_ACCOUNT_ID  CF_API_TOKEN  K
//  Full docs: docs/环境变量.md
// ============================================================================
//
// 版本与部署形态：DEPLOY_EDITION 由构建期自动维护（源码恒为「明文版」，产物自动标注）；
// 更新检测统一以仓库基准版本号为比对依据，点击版本号可比对并按需拉取。
import{connect as t}from"cloudflare:sockets";const _d=atob;const _r2=new RegExp("^("+_d("c29ja3M1")+"|http|https|ss):\\/\\/(.+)$","i");const _r3=new RegExp(_d("Y2xhc2g=")+"|"+_d("c2luZ2JveA==")+"|"+_d("c2luZy1ib3g=")+"|"+_d("c3VyZ2U=")+"|"+_d("c3VyZmJvYXJk")+"|"+_d("bG9vbg==")+"|"+_d("cXVhbnR1bXVsdA=="));const _r4=new RegExp(_d("a2FyaW5n"),"i");const _r0=new RegExp("(?:"+_d("dmxlc3M=")+"|"+_d("dHJvamFu")+"):\\/\\/[^@\\s/]+@(\\[[0-9a-fA-F:]+\\]|[A-Za-z0-9.-]+)(?::(\\d{1,5}))?");const _r1=new RegExp("^"+_d("dmxlc3M=")+":\\/\\/");const VERSION="3.0.3",DEPLOY_EDITION="明文版";const __B="CFN"+"ext";const __AC="luma"+"_auth";function e(){try{return"小说混淆版"===DEPLOY_EDITION?"novel":"混淆版"===DEPLOY_EDITION?"obfuscated":"plain"}catch(t){return"plain"}}const s="application/octet-stream",i="text/yaml; charset=utf-8",l={Tracking:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/domain/Tracking.mrs",ct:s},Advertising:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/domain/Advertising.mrs",ct:s},AWAvenueAds:{url:"https://raw.githubusercontent.com/"+_d("VEctVHdpbGlnaHQ=")+"/"+_d("QVdBdmVudWU=")+"-Ads-Rule/main/Filters/"+_d("QVdBdmVudWU=")+"-Ads-Rule-"+_d("Q2xhc2g=")+".yaml",ct:i},Direct:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/domain/Direct.mrs",ct:s},Private:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/domain/Private.mrs",ct:s},Download:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/domain/Download.mrs",ct:s},AppleCN:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/domain/AppleCN.mrs",ct:s},China:{url:"https://cdn.jsdelivr.net/gh/"+_d("YmxhY2ttYXRyaXg3")+"/"+_d("aW9zX3J1bGVfc2NyaXB0")+"@master/rule/"+_d("Q2xhc2g=")+"/ChinaMaxNoIP/ChinaMaxNoIP_No_Resolve.yaml",ct:i},AI:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/domain/AI.mrs",ct:s},Telegram:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/domain/Telegram.mrs",ct:s},Twitter:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/domain/Twitter.mrs",ct:s},SocialMedia:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/domain/SocialMedia.mrs",ct:s},Netflix:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/domain/Netflix.mrs",ct:s},[_d("WW91VHViZQ==")]:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/domain/"+_d("WW91VHViZQ==")+".mrs",ct:s},Google:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/domain/Google.mrs",ct:s},Microsoft:{url:"https://cdn.jsdelivr.net/gh/"+_d("YmxhY2ttYXRyaXg3")+"/"+_d("aW9zX3J1bGVfc2NyaXB0")+"@master/rule/"+_d("Q2xhc2g=")+"/Microsoft/Microsoft.yaml",ct:i},Proxy:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/domain/Proxy.mrs",ct:s},Spotify:{url:"https://github.com/"+_d("RHVzdGluV2lu")+"/"+_d("cnVsZXNldF9nZW9kYXRh")+"/releases/download/"+_d("bWlob21v")+"-ruleset/spotify.mrs",ct:s},TikTok:{url:"https://github.com/"+_d("RHVzdGluV2lu")+"/"+_d("cnVsZXNldF9nZW9kYXRh")+"/releases/download/"+_d("bWlob21v")+"-ruleset/tiktok.mrs",ct:s},disney:{url:"https://github.com/"+_d("RHVzdGluV2lu")+"/"+_d("cnVsZXNldF9nZW9kYXRh")+"/releases/download/"+_d("bWlob21v")+"-ruleset/disney.mrs",ct:s},github:{url:"https://rule.kelee.one/"+_d("Q2xhc2g=")+"/GitHub.yaml",ct:i},PrivateIP:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/ip/Private.mrs",ct:s},TelegramIP:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/ip/Telegram.mrs",ct:s},[_d("UHJveHlJUA==")]:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/ip/Proxy.mrs",ct:s},ChinaIP:{url:"https://github.com/"+_d("NjY2T1M=")+"/rules/raw/release/"+_d("bWlob21v")+"/ip/China.mrs",ct:s}},c=new Map,p=new Map;function d(t,e){return new Response(t,{status:200,headers:{"Content-Type":e,"Cache-Control":"public, max-age=86400"}})}const u=["173.245.48.0/20","103.21.244.0/22","103.22.200.0/22","103.31.4.0/22","141.101.64.0/18","108.162.192.0/18","190.93.240.0/20","188.114.96.0/20","197.234.240.0/22","198.41.128.0/17","162.158.0.0/15","104.16.0.0/13","104.24.0.0/14","172.64.0.0/13","131.0.72.0/22"],f=["104.16.0.0/13","104.24.0.0/14","172.64.0.0/13","162.158.0.0/15","188.114.96.0/20"],h=["2400:cb00::/32","2606:4700::/32","2803:f800::/32","2405:b500::/32","2405:8100::/32","2a06:98c0::/29","2c0f:f248::/32"],m=["2606:4700::/32","2400:cb00::/32","2803:f800::/32","2a06:98c0::/29","2c0f:f248::/32"];let g=h.slice(),b=0;function v(t){if(!Y(t=String(t||"")))return!1;if(t.indexOf(":")>=0)return h.some(e=>function(t,e){const[n,r]=e.split("/"),a=parseInt(r,10),o=t=>{const e=t.indexOf("::");let n;if(e>=0){const r=t.slice(0,e).split(":").filter(Boolean),a=t.slice(e+2).split(":").filter(Boolean),o=8-r.length-a.length;n=[...r,...Array(o).fill("0"),...a]}else n=t.split(":");return n.map(t=>t.padStart(4,"0"))},s=t=>t.map(t=>parseInt(t,16).toString(2).padStart(16,"0")).join("");return s(o(t)).slice(0,a)===s(o(n)).slice(0,a)}(t,e));const e=t.split(".").map(Number),n=(e[0]<<24|e[1]<<16|e[2]<<8|e[3])>>>0;return tt.some(([t,e])=>n>=t&&n<=e)}const y={HK:"香港",TW:"台湾",MO:"澳门",JP:"日本",SG:"新加坡",US:"美国",KR:"韩国",DE:"德国",FR:"法国",GB:"英国",CA:"加拿大",AU:"澳大利亚",SE:"瑞典",NL:"荷兰",FI:"芬兰",NO:"挪威",DK:"丹麦",CH:"瑞士",IT:"意大利",ES:"西班牙",PT:"葡萄牙",IE:"爱尔兰",BE:"比利时",AT:"奥地利",PL:"波兰",CZ:"捷克",RO:"罗马尼亚",HU:"匈牙利",GR:"希腊",RU:"俄罗斯",TR:"土耳其",UA:"乌克兰",IN:"印度",TH:"泰国",MY:"马来西亚",VN:"越南",PH:"菲律宾",ID:"印尼",BR:"巴西",MX:"墨西哥",AR:"阿根廷",CL:"智利",ZA:"南非",EG:"埃及",AE:"阿联酋",IL:"以色列",NZ:"新西兰",KZ:"哈萨克斯坦",SA:"沙特"},x={};for(const t in y)x[y[t]]=t;x["印度尼西亚"]="ID";const w={HKG:"香港",TPE:"台湾",KHH:"台湾",TSA:"台湾",RMQ:"台湾",NRT:"日本",KIX:"日本",HND:"日本",CTS:"日本",FUK:"日本",SIN:"新加坡",ICN:"韩国",KUL:"马来西亚",BKK:"泰国",MNL:"菲律宾",SGN:"越南",HAN:"越南",CGK:"印尼",DEL:"印度",BOM:"印度",MAA:"印度",DXB:"阿联酋",TLV:"以色列",RUH:"沙特",JED:"沙特",DOH:"卡塔尔",FRA:"德国",MUC:"德国",DUS:"德国",HAM:"德国",BER:"德国",CGN:"德国",STR:"德国",AMS:"荷兰",CDG:"法国",MRS:"法国",NCE:"法国",LHR:"英国",LGW:"英国",MAN:"英国",MAD:"西班牙",BCN:"西班牙",MXP:"意大利",FCO:"意大利",PMO:"意大利",ZRH:"瑞士",GVA:"瑞士",VIE:"奥地利",WAW:"波兰",PRG:"捷克",ARN:"瑞典",CPH:"丹麦",OSL:"挪威",HEL:"芬兰",DUB:"爱尔兰",LIS:"葡萄牙",BRU:"比利时",BUD:"匈牙利",OTP:"罗马尼亚",ATH:"希腊",IST:"土耳其",SVO:"俄罗斯",DME:"俄罗斯",LED:"俄罗斯",JFK:"美国",EWR:"美国",LAX:"美国",SJC:"美国",SFO:"美国",SEA:"美国",ORD:"美国",DFW:"美国",IAD:"美国",ATL:"美国",MIA:"美国",BOS:"美国",DEN:"美国",PHX:"美国",MSP:"美国",DTW:"美国",PHL:"美国",CLT:"美国",LAS:"美国",PDX:"美国",SLC:"美国",SAN:"美国",AUS:"美国",IAH:"美国",MCI:"美国",BNA:"美国",SMF:"美国",RDU:"美国",YYZ:"加拿大",YVR:"加拿大",YUL:"加拿大",YOW:"加拿大",YYC:"加拿大",MEX:"墨西哥",GRU:"巴西",GIG:"巴西",EZE:"阿根廷",SCL:"智利",SYD:"澳大利亚",MEL:"澳大利亚",BNE:"澳大利亚",PER:"澳大利亚",AKL:"新西兰",JNB:"南非",CAI:"埃及",ALA:"哈萨克斯坦",ALB:"美国",BDL:"美国",BHM:"美国",BIL:"美国",BOI:"美国",BUF:"美国",BUR:"美国",BTV:"美国",BWI:"美国",CAE:"美国",CHA:"美国",CLE:"美国",CMH:"美国",CPR:"美国",DAL:"美国",DAY:"美国",DSM:"美国",DTT:"美国",ECP:"美国",EYW:"美国",FLL:"美国",GRR:"美国",GSP:"美国",HIO:"美国",HNL:"美国",ICT:"美国",IND:"美国",JAX:"美国",LBB:"美国",MCO:"美国",MDW:"美国",MEM:"美国",MFE:"美国",MFR:"美国",MSY:"美国",OAK:"美国",OKC:"美国",OMA:"美国",ONT:"美国",ORF:"美国",PIT:"美国",PSC:"美国",PVD:"美国",RIC:"美国",RNO:"美国",RSW:"美国",SAT:"美国",SDF:"美国",SNA:"美国",STL:"美国",SWF:"美国",SYR:"美国",TPA:"美国",TUL:"美国",TUS:"美国",CTS:"日本",FUK:"日本",HND:"日本",BLR:"印度",CMB:"斯里兰卡",KWI:"科威特",AMM:"约旦",BEY:"黎巴嫩",NBO:"肯尼亚",LOS:"尼日利亚",ACC:"加纳",CPT:"南非",LIM:"秘鲁",BOG:"哥伦比亚",PTY:"巴拿马"},k=Object.assign({},y,w,{USA:"美国"}),I=w,P=["https://"+_d("YmVzdGNm")+".pages.dev/random-region/HK/100.txt","https://"+_d("YmVzdGNm")+".pages.dev/random-region/TW/100.txt","https://"+_d("YmVzdGNm")+".pages.dev/random-region/JP/100.txt","https://"+_d("YmVzdGNm")+".pages.dev/random-region/SG/100.txt","https://"+_d("YmVzdGNm")+".pages.dev/random-region/US/100.txt","https://"+_d("YmVzdGNm")+".pages.dev/random-region/KR/100.txt"].join("\n"),C=/random-region\/[A-Z]{2,}\/\d+\.txt/i,S={uuid:"",path:"",admin:"",clashSecret:"",login:"",adminInit:!1,host:"",enableVless:!0,enableTrojan:!1,trojanPassword:"",enableXhttp:!1,[_d("YWxwbg==")]:"",ech:!1,echHost:"cloudflare-ech.com",echDns:"",tlsOnly:!1,nodeLimit:!0,nodeLimitCount:300,countryLabel:"",loadBalance:!0,ipv6Mode:"off",cpuLimit:!1,freeCpu:!1,cfAccountId:"",cfApiToken:"",quotaAuto:!1,quotaStrict:!1,tgBotToken:"",tgChatID:"",homeWan:!1,homeWanNodes:[],[_d("cHJveHlJUA==")]:"",outboundProxy:"",outboundMode:"",masqueFront:"",mode:"",masqueEnable:!1,masqueConf:"",masqueName:"",masqueEps:"",masqueSni:"",masqueNet:"",preferredDomains:"https://"+_d("YmVzdGNm")+".pages.dev/random-region/HK/100.txt\nhttps://"+_d("YmVzdGNm")+".pages.dev/random-region/TW/100.txt\nhttps://"+_d("YmVzdGNm")+".pages.dev/random-region/JP/100.txt\nhttps://"+_d("YmVzdGNm")+".pages.dev/random-region/SG/100.txt\nhttps://"+_d("YmVzdGNm")+".pages.dev/random-region/US/100.txt\nhttps://"+_d("YmVzdGNm")+".pages.dev/random-region/KR/100.txt",preferredIPs:[],optimizer:{source:"wetest_v4",sourceURL:"",fallbackPool:"",port:443,threads:5,count:20,useCidr:!0,fillCount:0,subMode:"",subRandomCount:16,subIncludeDefault:!1},filter:{region:"all",ipType:["IPv4"],isp:["移动","联通","电信"]}},A=["cloudflare.com","www.cloudflare.com","speed.cloudflare.com"],T=["104.16.128.11","172.67.72.4","104.17.201.77","104.16.66.7","104.16.88.7","104.16.98.7","104.17.2.7","104.17.44.9","104.18.34.34","104.18.7.34","104.19.191.31","104.19.1.1","104.20.15.15","104.20.1.1","104.21.23.1","104.21.2.1","104.24.12.10","104.25.0.1","104.26.1.1","162.159.128.1"],U=[{label:"香港",region:"HK",url:"https://"+_d("YmVzdGNm")+".pages.dev/random-region/HK/100.txt",count:12},{label:"日本",region:"JP",url:"https://"+_d("YmVzdGNm")+".pages.dev/random-region/JP/100.txt",count:12},{label:"美国",region:"US",url:"https://"+_d("YmVzdGNm")+".pages.dev/random-region/US/100.txt",count:12},{label:"新加坡",region:"SG",url:"https://"+_d("YmVzdGNm")+".pages.dev/random-region/SG/100.txt",count:12},{label:"台湾",region:"TW",url:"https://"+_d("YmVzdGNm")+".pages.dev/random-region/TW/100.txt",count:12}],E=["104.17.127.180#优选IP-001","104.16.123.96#优选IP-002","104.16.124.96#优选IP-003","104.16.125.96#优选IP-004","104.16.126.96#优选IP-005","104.16.127.96#优选IP-006","104.16.132.229#优选IP-007","104.16.248.248#优选IP-008","104.16.249.249#优选IP-009","162.159.0.1#优选IP-010","188.114.96.1#优选IP-011","104.17.24.252#优选IP-012","188.114.99.52#优选IP-013","162.159.94.229#优选IP-014","162.159.5.175#优选IP-015","104.18.119.34#优选IP-016","104.21.213.24#优选IP-017","104.17.234.5#优选IP-018","104.16.245.187#优选IP-019","172.67.64.211#优选IP-020","172.67.64.12#优选IP-021","104.18.43.224#优选IP-022","104.18.40.93#优选IP-023","104.18.37.92#优选IP-024","104.18.47.234#优选IP-025","104.18.42.54#优选IP-026","172.64.144.49#优选IP-027","172.64.146.15#优选IP-028","104.17.185.207#优选IP-029","104.17.101.139#优选IP-030","162.159.44.215#优选IP-031","162.159.44.214#优选IP-032","104.18.217.109#优选IP-033","172.65.127.225#优选IP-034","104.18.184.243#优选IP-035","162.159.137.205#优选IP-036","172.65.64.7#优选IP-037","104.25.45.44#优选IP-038","104.19.88.253#优选IP-039","162.159.136.73#优选IP-040","104.18.185.40#优选IP-041","104.25.141.168#优选IP-042","104.25.246.123#优选IP-043","104.24.54.254#优选IP-044","104.19.123.4#优选IP-045","188.114.98.144#优选IP-046","188.114.99.18#优选IP-047","104.17.127.106#优选IP-048","162.159.4.175#优选IP-049","104.18.255.187#优选IP-050","172.65.173.221#优选IP-051","104.18.176.111#优选IP-052","104.25.122.6#优选IP-053","188.114.96.116#优选IP-054","104.25.214.211#优选IP-055","104.16.223.195#优选IP-056","104.25.101.186#优选IP-057","172.64.81.44#优选IP-058","104.25.143.238#优选IP-059","188.114.99.114#优选IP-060","104.19.169.53#优选IP-061","104.16.113.211#优选IP-062","104.27.40.81#优选IP-063","188.114.98.91#优选IP-064","162.159.236.5#优选IP-065","104.25.44.144#优选IP-066","162.159.46.167#优选IP-067","104.18.84.180#优选IP-068","104.18.196.199#优选IP-069","104.24.155.234#优选IP-070","162.159.228.244#优选IP-071","162.159.235.27#优选IP-072","104.19.214.25#优选IP-073","104.19.168.107#优选IP-074","104.24.244.237#优选IP-075","104.27.66.179#优选IP-076","104.24.2.253#优选IP-077","104.21.61.179#优选IP-078","104.21.114.216#优选IP-079","188.114.98.53#优选IP-080","172.65.145.187#优选IP-081","188.114.96.255#优选IP-082","104.25.245.147#优选IP-083","172.66.161.31#优选IP-084","104.18.133.24#优选IP-085","188.114.99.155#优选IP-086","172.64.34.109#优选IP-087","172.64.145.202#优选IP-088","104.19.78.30#优选IP-089","104.17.118.180#优选IP-090","104.17.13.179#优选IP-091","172.65.35.169#优选IP-092","104.16.0.133#优选IP-093","104.16.238.98#优选IP-094","104.18.28.140#优选IP-095","104.19.115.243#优选IP-096","104.24.58.243#优选IP-097","104.27.207.36#优选IP-098","104.21.192.230#优选IP-099","104.25.20.146#优选IP-100","104.27.113.151#优选IP-101","104.24.230.144#优选IP-102","172.65.134.100#优选IP-103","188.114.96.94#优选IP-104","104.25.197.107#优选IP-105","104.16.108.18#优选IP-106","172.64.233.36#优选IP-107","172.67.163.14#优选IP-108","104.24.230.213#优选IP-109","104.19.106.1#优选IP-110","104.27.72.4#优选IP-111","104.21.57.47#优选IP-112","172.65.162.213#优选IP-113","172.67.255.83#优选IP-114","172.67.189.246#优选IP-115","162.159.230.149#优选IP-116","162.159.197.16#优选IP-117","172.67.103.87#优选IP-118","162.159.237.243#优选IP-119","104.25.193.135#优选IP-120","104.18.141.27#优选IP-121","172.65.11.191#优选IP-122","104.24.184.158#优选IP-123","188.114.97.52#优选IP-124","104.27.4.144#优选IP-125","104.25.93.154#优选IP-126","172.66.199.166#优选IP-127","172.67.64.94#优选IP-128","104.27.94.231#优选IP-129","104.24.168.96#优选IP-130","104.18.173.224#优选IP-131","172.67.173.89#优选IP-132","104.17.107.217#优选IP-133","188.114.97.91#优选IP-134","104.17.195.184#优选IP-135","162.159.14.18#优选IP-136","172.67.229.44#优选IP-137","104.24.51.58#优选IP-138","104.19.97.238#优选IP-139","104.25.161.217#优选IP-140","104.17.146.117#优选IP-141","172.67.161.136#优选IP-142","104.17.99.0#优选IP-143","104.25.100.203#优选IP-144","104.19.23.222#优选IP-145","188.114.96.141#优选IP-146","104.19.247.23#优选IP-147","104.25.24.66#优选IP-148","104.16.123.26#优选IP-149","104.27.23.242#优选IP-150","104.25.36.200#优选IP-151","104.17.195.133#优选IP-152","104.16.68.175#优选IP-153","188.114.98.19#优选IP-154","104.16.218.231#优选IP-155","104.18.28.48#优选IP-156","162.159.143.225#优选IP-157","162.159.19.201#优选IP-158","104.25.166.112#优选IP-159","104.16.201.45#优选IP-160","104.16.91.33#优选IP-161","172.67.82.86#优选IP-162","104.16.11.246#优选IP-163","188.114.97.61#优选IP-164","104.17.240.245#优选IP-165","172.66.157.150#优选IP-166","104.17.25.173#优选IP-167","104.18.26.28#优选IP-168","104.18.123.15#优选IP-169","104.25.124.155#优选IP-170","188.114.96.64#优选IP-171","104.18.18.214#优选IP-172","104.17.46.187#优选IP-173","104.17.153.58#优选IP-174","188.114.96.89#优选IP-175","172.67.174.143#优选IP-176","104.25.251.220#优选IP-177","104.27.195.79#优选IP-178","162.159.153.10#优选IP-179","104.25.129.238#优选IP-180","172.65.3.67#优选IP-181","172.67.232.109#优选IP-182","104.18.178.193#优选IP-183","104.19.78.144#优选IP-184","104.18.63.107#优选IP-185","104.19.69.150#优选IP-186","104.25.73.92#优选IP-187","172.67.195.152#优选IP-188","172.65.184.114#优选IP-189","172.65.202.216#优选IP-190","172.65.21.190#优选IP-191","104.19.32.220#优选IP-192","104.18.211.8#优选IP-193","104.17.160.131#优选IP-194","162.159.6.39#优选IP-195","162.159.43.223#优选IP-196","104.21.224.5#优选IP-197","104.25.18.216#优选IP-198","162.159.6.246#优选IP-199","104.24.46.127#优选IP-200","104.17.87.46#优选IP-201","188.114.97.80#优选IP-202","188.114.97.108#优选IP-203","162.159.241.11#优选IP-204","188.114.97.0#优选IP-205","188.114.99.14#优选IP-206","104.19.68.127#优选IP-207","162.159.10.45#优选IP-208","104.25.181.74#优选IP-209","104.24.178.200#优选IP-210","188.114.96.164#优选IP-211","104.24.41.240#优选IP-212","104.17.97.72#优选IP-213","104.16.77.112#优选IP-214","104.19.181.118#优选IP-215","172.67.165.245#优选IP-216","104.17.169.109#优选IP-217","172.65.44.103#优选IP-218","188.114.97.63#优选IP-219","172.65.47.182#优选IP-220","104.17.245.237#优选IP-221","162.159.2.86#优选IP-222","188.114.96.151#优选IP-223","172.65.139.108#优选IP-224","172.65.118.105#优选IP-225","104.21.7.133#优选IP-226","162.159.134.174#优选IP-227","104.18.194.107#优选IP-228","188.114.97.21#优选IP-229","162.159.9.18#优选IP-230","104.18.41.168#优选IP-231","162.159.192.111#优选IP-232","162.159.240.54#优选IP-233","104.17.0.4#优选IP-234","104.25.86.143#优选IP-235","104.27.97.130#优选IP-236","172.67.127.122#优选IP-237","104.25.33.126#优选IP-238","104.25.223.90#优选IP-239","104.25.123.130#优选IP-240","172.65.167.52#优选IP-241","172.67.159.243#优选IP-242","104.25.113.22#优选IP-243","188.114.98.27#优选IP-244","162.159.198.200#优选IP-245","104.17.76.49#优选IP-246","104.21.215.255#优选IP-247","172.67.131.200#优选IP-248","162.159.135.234#优选IP-249","172.65.45.102#优选IP-250","172.66.164.60#优选IP-251","162.159.26.248#优选IP-252","162.159.90.82#优选IP-253","172.65.50.167#优选IP-254","162.159.236.19#优选IP-255","104.19.143.220#优选IP-256","104.17.151.244#优选IP-257","104.17.121.245#优选IP-258","104.18.144.168#优选IP-259","162.159.228.231#优选IP-260","104.17.100.40#优选IP-261","104.27.116.114#优选IP-262","162.159.199.220#优选IP-263","104.20.17.160#优选IP-264","104.25.62.39#优选IP-265","104.27.20.220#优选IP-266","172.65.118.85#优选IP-267","104.19.83.33#优选IP-268","188.114.96.238#优选IP-269","162.159.42.67#优选IP-270","104.27.46.114#优选IP-271","104.25.126.144#优选IP-272","104.25.173.14#优选IP-273","104.24.46.107#优选IP-274","104.25.109.0#优选IP-275","162.159.137.71#优选IP-276","104.25.238.28#优选IP-277","104.27.124.239#优选IP-278","104.24.34.149#优选IP-279","104.19.246.234#优选IP-280","162.159.10.243#优选IP-281","104.27.96.232#优选IP-282","172.65.78.200#优选IP-283","104.24.25.178#优选IP-284","104.24.84.86#优选IP-285","104.25.238.237#优选IP-286","104.16.45.249#优选IP-287","104.16.234.241#优选IP-288","104.24.18.62#优选IP-289","172.65.45.248#优选IP-290","104.25.169.144#优选IP-291","104.27.27.106#优选IP-292","162.159.43.85#优选IP-293","172.67.71.106#优选IP-294","162.159.228.164#优选IP-295","104.24.250.89#优选IP-296","104.18.185.26#优选IP-297","104.27.21.175#优选IP-298","104.24.49.39#优选IP-299","172.67.85.54#优选IP-300"],$=["cloudflare.182682.xyz","speed.marisalnc.com","freeyx.cloudflare88.eu.org",_d("YmVzdGNm")+".top","cdn.2020111.xyz","cfip.cfcdn.vip","cf.0sm.com","cf."+_d("MDkwMjI3")+".xyz","cf.zhetengsha.eu.org","cloudflare.9jy.cc","cf.zerone-cdn.pp.ua","cfip.1323123.xyz","cnamefuckxxs.yuchen.icu","cloudflare-ip.mofashi.ltd","115155.xyz","cname.xirancdn.us","f3058171cad.002404.xyz","8.889288.xyz","cdn.tzpro.xyz","cf.877771.xyz","xn--b6gac.eu.org",_d("YmVzdGNm")+"."+_d("MDMwMTAx")+".xyz","cdns.doon.eu.org","fn.130519.xyz","saas.sin.fan"].join("\n"),L=new Set([80,8080,8880,2052,2082,2086,2095]),N={wetest_v4:{label:"微测网 IPv4",url:"https://www.wetest.vip/page/cloudflare/address_v4.html"},wetest_v6:{label:"微测网 IPv6",url:"https://www.wetest.vip/page/cloudflare/address_v6.html"},[_d("YmVzdGNm")]:{label:"优选 IP 列表",url:"https://cf."+_d("MDkwMjI3")+".xyz/ip.164746.xyz"},hostmonit:{label:"HostMonit 优选",url:"https://stock.hostmonit.com/CloudFlareYes"},wetest_cname:{label:"微测网 优选域名",url:"https://www.wetest.vip/page/cloudflare/cname.html"}},D=new TextEncoder,O=new TextDecoder,R=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],_=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,2821735955,4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,2399980690,4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745];function M(t,e){return(t<<e|t>>>32-e)>>>0}function F(t){const e=D.encode(String(t)),n=8*e.length,r=1+(e.length+8>>6)<<6,a=new Uint8Array(r);a.set(e),a[e.length]=128;const o=new DataView(a.buffer);o.setUint32(r-8,n>>>0,!0),o.setUint32(r-4,Math.floor(n/4294967296),!0);let s=1732584193,i=4023233417,l=2562383102,c=271733878;for(let t=0;t<r;t+=64){const e=new Uint32Array(16);for(let n=0;n<16;n++)e[n]=o.getUint32(t+4*n,!0);let n=s,r=i,a=l,p=c;for(let t=0;t<64;t++){let o,s;t<16?(o=r&a|~r&p,s=t):t<32?(o=p&r|~p&a,s=(5*t+1)%16):t<48?(o=r^a^p,s=(3*t+5)%16):(o=a^(r|~p),s=7*t%16);const i=n+o+_[t]+e[s]>>>0;n=p,p=a,a=r,r=r+M(i,R[t])>>>0}s=s+n>>>0,i=i+r>>>0,l=l+a>>>0,c=c+p>>>0}let p="";for(const t of[s,i,l,c])p+=(255&t).toString(16).padStart(2,"0"),p+=(t>>>8&255).toString(16).padStart(2,"0"),p+=(t>>>16&255).toString(16).padStart(2,"0"),p+=(t>>>24&255).toString(16).padStart(2,"0");return p}function _U(t){const m=F(String(t||"")+"|"+__B);return[m.slice(0,8),m.slice(8,12),"4"+m.slice(13,16),"8"+m.slice(17,20),m.slice(20)].join("-")}function z(t,e=443){if(!(t=String(t||"").trim()))return{host:"",port:e};if(t.startsWith("[")){const n=t.match(/^\[([^\]]+)\](?::(\d+))?$/);return{host:n?n[1]:t.replace(/^\[|\]$/g,""),port:n&&n[2]?parseInt(n[2]):e}}const n=t.lastIndexOf(":");return n>0&&/^\d+$/.test(t.slice(n+1))?{host:t.slice(0,n),port:parseInt(t.slice(n+1))}:{host:t,port:e}}function j(t){try{const e=atob(String(t||"").trim());return"string"==typeof e&&e.indexOf("BEGIN")>=0?e:""}catch(t){return""}}let _HWMC={t:0,n:[]};async function q(t){const now=Date.now();if(_HWMC.n.length&&now-_HWMC.t<18e5)return _HWMC.n;const r=await fetch("https://www.vpngate.net/api/iphone/",{headers:{"User-Agent":"Mozilla/5.0",Accept:"text/plain"},cf:{cacheTtl:1800,cacheEverything:!0},signal:AbortSignal.timeout(8e3)});if(!r||!r.ok)throw new Error("VPN Gate HTTP "+(r&&r.status));const out=[];String(await r.text()).split(/\r?\n/).forEach(function(line){const cols=String(line||"").trim().split(",");if(cols.length<15||!cols[1]||String(cols[0]||"").toLowerCase().indexOf("public-vpn")===0)return;let b64="";for(let i=cols.length-1;i>=Math.max(3,cols.length-3);i--){const v=String(cols[i]||"").trim();if(v.length<100)continue;try{const p=atob(v.slice(0,600));if(/client|remote|dev |OpenVPN|PacketiX/i.test(p)){b64=v;break}}catch(e){}}if(!b64)return;const cc=String(cols[6]||"").trim().toUpperCase();if(t&&cc!==String(t).trim().toUpperCase())return;out.push({ip:String(cols[1]).trim(),speed:parseInt(cols[4],10)||0,country:cc,ovpnB64:b64})});out.sort(function(a,b){return(b.speed||0)-(a.speed||0)});_HWMC={t:now,n:out};return out}function B(t){const e=e=>{const n=String(t||"").match(new RegExp("<"+e+">([\\s\\S]*?)<\\/"+e+">","i"));return n?n[1].trim():""},n={};return String(t||"").split(/\r?\n/).forEach(t=>{const e=t.trim().match(/^(cipher|auth|dev|comp-lzo|key-direction|remote|port|proto|verb)\s+(.+)$/i);e&&(n[e[1].toLowerCase()]=e[2].trim())}),{ca:e("ca"),cert:e("cert"),key:e("key"),tlsAuth:e("tls-auth"),tlsCrypt:e("tls-crypt"),cipher:n.cipher||"",auth:n.auth||"",keyDirection:n["key-direction"]||"",remote:n.remote||"",proto:n.proto||""}}
function _hwParse(txt){
  try{
    const _map={ca:"ca",cert:"cert",key:"key","tls-auth":"tlsAuth","tls-crypt":"tlsCrypt"};
    let blk={ca:"",cert:"",key:"",tlsAuth:"",tlsCrypt:""},cur=null,buf=[];
    const out=[];
    const flush=function(){if(cur){blk[cur]=buf.join("\n");cur=null;buf=[]}};
    const mk=function(server,port,proto,cc,src){
      if(!src||!src.ca)return null;
      return {server:String(server||""),port:Number(port)||1194,proto:proto,country:String(cc||"XX").toUpperCase().slice(0,2),ca:src.ca||"",cert:src.cert||"",key:src.key||"",tlsAuth:src.tlsAuth||"",tlsCrypt:src.tlsCrypt||"",cipher:src.cipher||_d("QUVTLTEyOC1HQ00="),auth:src.auth||"SHA1"};
    };
    String(txt||"").split(/\r?\n/).forEach(function(ln){
      const s=String(ln||"").trim();
      const k=/^(ca|cert|key|tls-auth|tls-crypt)\s*[:=]\s*(.*)$/i.exec(s);
      if(k){flush();cur=_map[k[1].toLowerCase()];if(k[2])buf.push(k[2]);return}
      if(cur&&(/^-{3,}/.test(s)||/^[A-Za-z0-9+/=\s]{16,}$/.test(s))){buf.push(s);return}
      flush();
      if(!s||"#"===s.charAt(0))return;
      let cc="",body=s;
      const m=/^([A-Za-z]{2})\s*[:|]\s*([\s\S]+)$/.exec(s);
      if(m){cc=m[1].toUpperCase();body=m[2].trim()}
      const b64=body.replace(/\s+/g,"");
      if(b64.length>=200&&/^[A-Za-z0-9+/=]+$/.test(b64)){
        try{
          const e2=B(atob(b64)),n=String(e2.remote||"").split(/\s+/);
          const o=mk(n[0]||"",parseInt(n[1],10)||1194,"udp"===String(e2.proto||"").toLowerCase()?"udp":"tcp",cc,e2);
          if(o)out.push(o);
        }catch(x){}
        return;
      }
      const p=body.split(/[\s:]+/).filter(Boolean);
      if(!p.length)return;
      const o=mk(p[0],parseInt(p[1],10)||1194,/udp/i.test(p[2]||"")?"udp":"tcp",p[3]||cc||"XX",blk);
      if(o)out.push(o);
    });
    flush();
    return out;
  }catch(t){return[]}
}
function _smartGroups(c,names){
  try{
    if(!names||!names.length)return c;
    const _n=names.map(Ie).join(", ")+", 一键连接",_ut=_d("dXJsLXRlc3Q="),_px=_d("cHJveGllcw=="),_ef=_d("ZW1wdHktZmFsbGJhY2s=");
    const g="  # AI 与流媒体专用策略组：按真实站点测活，只有能直连该站点的节点才会被选中；\n  # 组内末位固定挂「一键连接」兜底，全部不达标时仍可正常出网，不会断流。\n"
      +"  - {name: AI自动, type: "+_ut+", "+_px+": ["+_n+"], url: 'https://chatgpt.com/cdn-cgi/trace', interval: 600, timeout: 5000, tolerance: 50, expected-status: '200-399', lazy: true, hidden: true, "+_ef+": REJECT}\n"
      +"  - {name: AI优选, type: select, "+_px+": [AI自动, 一键连接, 直接连接]}\n"
      +"  - {name: 流媒体自动, type: "+_ut+", "+_px+": ["+_n+"], url: 'https://www."+_d("eW91dHViZQ==")+".com/generate_204', interval: 600, timeout: 5000, tolerance: 50, expected-status: '204', lazy: true, hidden: true, "+_ef+": REJECT}\n"
      +"  - {name: 流媒体优选, type: select, "+_px+": [流媒体自动, 一键连接, 直接连接]}\n";
    const _rs=_d("UlVMRS1TRVQ=");
    let out=c.replace("# ==================== 规则路由 ====================",g+"# ==================== 规则路由 ====================");
    out=out.replace("  - "+_rs+",AI,一键连接","  - "+_rs+",AI,AI优选");
    ["Netflix",_d("WW91VHViZQ=="),"Spotify","TikTok","disney"].forEach(function(k){
      out=out.replace("  - "+_rs+","+k+",一键连接","  - "+_rs+","+k+",流媒体优选");
    });
    return out;
  }catch(t){return c}
}
async function X(t,e,n){if(!e.homeWan&&"home"!==String(e.mode||"").toLowerCase())return[];const r=_hwParse(e&&e.hwCfg);if(r.length)return r;const a=Array.isArray(e.homeWanNodes)?e.homeWanNodes.filter(t=>t&&t.server).slice(0,100):[];if(a.length)return a;try{return(await q("")).map(function(t){const e=B(j(t.ovpnB64)),n=String(e.remote||"").split(/\s+/),r=parseInt(n[1],10)||443,a="udp"===String(e.proto||"").toLowerCase()?"udp":"tcp";return{server:t.ip,port:r,proto:a,country:t.country,ca:e.ca||"",cert:e.cert||"",key:e.key||"",tlsAuth:e.tlsAuth||"",tlsCrypt:e.tlsCrypt||"",cipher:e.cipher||_d("QUVTLTEyOC1HQ00="),auth:e.auth||"SHA1"}}).filter(t=>t.server&&t.ca).slice(0,100)}catch(t){return[]}}function Y(t){if(!(t=String(t||"").trim()))return!1;const e=t.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);if(e)return e.slice(1).every(t=>Number(t)<=255);if(!/^[0-9a-fA-F:]+$/.test(t))return!1;if((t.match(/::/g)||[]).length>1)return!1;const n=t.includes("::"),r=t.replace(/::/g,":").split(":").filter(Boolean);return!(!n&&8!==r.length)&&(!n||!(r.length<1||r.length>7))&&r.every(t=>/^[0-9a-fA-F]{1,4}$/.test(t))}function Q(t){const e=[];for(let n=0;n<16;n+=2)e.push((t[n]<<8|t[n+1]).toString(16));let n=-1,r=0,a=-1,o=0;for(let t=0;t<8;t++)"0"===e[t]?(a<0?(a=t,o=1):o++,o>r&&(r=o,n=a)):(a=-1,o=0);if(r>=2){const t=e.slice(0,n).join(":");return(t?t+"::":"::")+e.slice(n+r).join(":")}return e.join(":")}function Z(t){const[e,n]=t.split("/"),r=e.split(".").map(Number),a=(r[0]<<24|r[1]<<16|r[2]<<8|r[3])>>>0,o=n>=32?0:4294967295<<32-n>>>0;return[(a&o)>>>0,(a|~o>>>0)>>>0]}const tt=u.map(Z),et=new Map;function nt(t){if(String(t).indexOf(":")>=0)return function(t){const[e,n]=t.split("/"),r=parseInt(n,10)||0,a=(t=>{const e=t.indexOf("::");let n;if(e>=0){const r=t.slice(0,e).split(":").filter(Boolean),a=t.slice(e+2).split(":").filter(Boolean),o=8-r.length-a.length;n=[...r,...Array(o).fill("0"),...a]}else n=t.split(":");return n.map(t=>t.padStart(4,"0"))})(e).map(t=>parseInt(t,16));let o=0;for(let t=0;t<8;t++)for(let e=15;e>=0;e--)o>=r&&(a[t]|=(Math.random()<.5?1:0)<<e),o++;return a.map(t=>t.toString(16)).join(":")}(t);const[e,n]=function(t){let e=et.get(t);return e||(e=Z(t),et.set(t,e)),e}(t),r=e+Math.floor(Math.random()*(n-e>>>0));return`${r>>>24&255}.${r>>>16&255}.${r>>>8&255}.${255&r}`}function rt(t){const e=String(t||"").split(".").map(t=>parseInt(t,10).toString(16).padStart(2,"0"));return 4!==e.length||e.some(t=>"NaN"===t)?null:"2606:4700::"+e[0]+e[1]+":"+e[2]+e[3]}function at(t,e){const n=new Set,r=[];let a=0;for(;r.length<e&&a++<20*e;){const e=nt(t[Math.floor(Math.random()*t.length)]);n.has(e)||(n.add(e),r.push(e))}return r}function ot(t){const e=[],n=new Set;return String(t||"").split(/[\n,;]+/).map(t=>t.trim()).filter(Boolean).forEach(t=>{let r="";if(t.includes("#")){const[e,n]=t.split("#");t=e,r=n}const{host:a,port:o}=z(t,443);a&&Y(a)&&!n.has(a)&&(n.add(a),e.push({ip:a,port:o,name:r}))}),e}function st(t){try{const e=atob(String(t).replace(/-/g,"+").replace(/_/g,"/")),n=new Uint8Array(e.length);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);return new TextDecoder("utf-8").decode(n)}catch(t){return null}}function it(t,e){return new Response(JSON.stringify(t),{status:e||200,headers:{"Content-Type":"application/json; charset=utf-8"}})}
const _CFG_KEY_CACHE=new Map;
function _cfgB64(t){let e="";for(let n=0;n<t.length;n+=8192)e+=String.fromCharCode(...t.subarray(n,n+8192));return btoa(e)}
function _cfgBytes(t){const e=atob(String(t||"")),n=new Uint8Array(e.length);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);return n}
async function _cfgKey(t){const e=String(t&&t.CONFIG_KEY||"").trim();if(!e)return null;let n=_CFG_KEY_CACHE.get(e);return n||(n=(async()=>{const t=await crypto.subtle.digest("SHA-256",D.encode(e));return crypto.subtle.importKey("raw",t,{name:"AES-GCM"},!1,["encrypt","decrypt"])})(),_CFG_KEY_CACHE.size>3&&_CFG_KEY_CACHE.clear(),_CFG_KEY_CACHE.set(e,n)),n}
async function _cfgSeal(t,e){const n=await _cfgKey(t);if(!n)return JSON.stringify(e);const r=crypto.getRandomValues(new Uint8Array(12)),a=await crypto.subtle.encrypt({name:"AES-GCM",iv:r},n,D.encode(JSON.stringify(e)));return JSON.stringify({v:1,alg:"A256GCM",iv:_cfgB64(r),data:_cfgB64(new Uint8Array(a))})}
async function _cfgOpen(t,e){const n=JSON.parse(e);if(!n||1!==n.v||"A256GCM"!==n.alg)return n;const r=await _cfgKey(t);if(!r)throw new Error("配置已加密，请设置正确的 CONFIG_KEY");try{const a=await crypto.subtle.decrypt({name:"AES-GCM",iv:_cfgBytes(n.iv)},r,_cfgBytes(n.data));return JSON.parse(O.decode(a))}catch(t){throw new Error("CONFIG_KEY 无法解密现有配置")}}
async function lt(t){const e=JSON.parse(JSON.stringify(S));let n=!1,r=!1,_euH="";(function(){const _fc=String(t.FREE_CPU||t.freeCpu||"").toLowerCase();("1"===_fc||"true"===_fc||"yes"===_fc)&&(e.freeCpu=!0)})();if(t.U&&(e.uuid=String(t.U).toLowerCase()),(t.D||t.PATH)&&(e.path=String(t.D||t.PATH)),(t.login||t.L)&&(e.login=String(t.login||t.L)),(t.ADMIN||t.admin)&&(e.admin=String(t.ADMIN||t.admin)),t.HOST&&(e.host=_euH=String(t.HOST).replace(/^https?:\/\//,"").split("/")[0]),t.PROXYIP&&(e.proxyIP=String(t.PROXYIP)),(t.S||t.OUTBOUND)&&(e.outboundProxy=String(t.S||t.OUTBOUND)),"true"!==t.ECH&&"1"!==t.ECH||(e.ech=!0),"true"!==t.TROJAN&&"1"!==t.TROJAN||(e.enableTrojan=!0),t.TROJAN_PASSWORD&&(e.trojanPassword=String(t.TROJAN_PASSWORD)),t.CLASH_SECRET&&(e.clashSecret=String(t.CLASH_SECRET)),t.ALPN&&(e.alpn=String(t.ALPN)),t.TGTOKEN&&(e.tgBotToken=String(t.TGTOKEN)),t.TGCHAT&&(e.tgChatID=String(t.TGCHAT)),t.YX&&(e.preferredIPs=ot(t.YX)),t.YXURL&&(e.optimizer.sourceURL=String(t.YXURL)),"1"!==t.HOME_WAN&&"true"!==t.HOME_WAN||(e.homeWan=!0),t.MASQUE_ENDPOINTS&&(e.masqueEps=String(t.MASQUE_ENDPOINTS)),t.MASQUE_SNI&&(e.masqueSni=String(t.MASQUE_SNI)),t.K&&"function"==typeof t.K.get)try{const a=await async function(t){try{return await t.K.get("config")}catch(t){return null}}(t),_cv=a?await _cfgOpen(t,a):null;if(_cv){const t=_cv;r=!0,void 0!==t.quotaAuto&&(n=!0),Object.assign(e,t),!e.masqueFront&&t[_d("d2FycEZyb250")]&&(e.masqueFront=String(t[_d("d2FycEZyb250")])),e.mode===_d("d2FycA==")&&(e.mode="worker"),delete e[_d("d2FycEZyb250")],delete e[_d("d2FycEVuYWJsZQ==")],delete e[_d("d2FycENvbmY=")],delete e[_d("d2FycEVwcw==")],delete e[_d("d2FycE5hbWU=")],t.optimizer&&(e.optimizer=Object.assign(JSON.parse(JSON.stringify(S.optimizer)),t.optimizer)),t.preferredIPs&&Array.isArray(t.preferredIPs)&&(e.preferredIPs=t.preferredIPs),t.admin&&(e.admin=String(t.admin)),t.uuid&&(e.uuid=String(t.uuid).toLowerCase())}}catch(t){e._configError=t&&t.message||"配置读取失败"}(t.S||t.OUTBOUND)&&(e.outboundProxy=String(t.S||t.OUTBOUND));(t.OUTBOUND_MODE||t.SMODE)&&(e.outboundMode=String(t.OUTBOUND_MODE||t.SMODE));e.host=_euH||"";var a,o;return e.adminInit=!(!e.adminInit&&!r),delete e.fragment,delete e.fragmentParam,a=!1,Ke=e.optimizer&&e.optimizer.fallbackPool||"",e.uuid=String(e.uuid||"").toLowerCase(),o=e.uuid,/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(o||"")||(e.uuid=e.admin?_U(e.admin):function(){if(crypto.randomUUID)return crypto.randomUUID();const t=crypto.getRandomValues(new Uint8Array(16));return t[6]=15&t[6]|64,t[8]=63&t[8]|128,[...t].map((t,e)=>(4===e||6===e||8===e||10===e?"-":"")+t.toString(16).padStart(2,"0")).join("")}()),delete e.login,(t.login||t.L)&&(e.login=String(t.login||t.L)),(t.ADMIN||t.admin)&&(e.admin=String(t.ADMIN||t.admin)),e.path=t.D||t.PATH?String(t.D||t.PATH):e.uuid,Array.isArray(e.preferredIPs)||(e.preferredIPs=ot(e.preferredIPs)),n||Boolean(e.cfAccountId&&e.cfApiToken||t.CF_ACCOUNT_ID&&t.CF_API_TOKEN)&&(e.quotaAuto=!0),e}async function ct(t,e){if(!t.K||"function"!=typeof t.K.put)return!1;const n=JSON.parse(JSON.stringify(e));delete n.host,delete n.frontHost,delete n[_d("d2FycEZyb250")],delete n[_d("d2FycEVuYWJsZQ==")],delete n[_d("d2FycENvbmY=")],delete n[_d("d2FycEVwcw==")],delete n[_d("d2FycE5hbWU=")],n.mode===_d("d2FycA==")&&(n.mode="worker"),delete n._configError,n.admin&&(n.admin=String(n.admin)),await t.K.put("config",await _cfgSeal(t,n));try{_SUBC.clear()}catch(_e){}return!0}let pt=null,dt=0;const ut=1e5;async function ft(t,e){const n=String(t.tgBotToken||"").trim(),r=String(t.tgChatID||"").trim();if(n&&r)try{await oe("https://api.telegram.org/bot"+n+"/sendMessage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:r,text:e})},8e3)}catch(t){}}const ht=[80,85,90,91,92,93,94,95,96,97,98,99];async function mt(t,e){try{const n=await gt(t,e);if(!n||!n.configured||n.error||"number"!=typeof n.percent)return;const r=Math.floor(n.percent),a=(new Date).toISOString().slice(0,10);let o=null;if(t.K&&"function"==typeof t.K.get)try{o=await t.K.get("tgnote")}catch(t){}let s={day:a,level:0};if(o)try{const t=JSON.parse(o);t&&t.day&&(s=t)}catch(t){}const i=s.day!==a;if(i&&(s={day:a,level:0},e.quotaDisabled)){e.quotaDisabled=!1;try{await ct(t,e)}catch(t){}}const l=!(!String(e.tgBotToken||"").trim()||!String(e.tgChatID||"").trim()),c="当日额度 "+n.percent+"%（"+(n.today&&n.today.requests||0)+" / "+n.limit+"）";let p=i;if(r>=99&&!e.quotaDisabled){e.quotaDisabled=!0;try{await ct(t,e)}catch(t){}l&&await ft(e,"⚠️ "+__B+" 用量告警："+c+"。订阅已自动停用，明日自动恢复。"),s.level=99,p=!0}else if(l&&r>=80&&!e.quotaDisabled){const t=ht.filter(t=>t<=r&&t>(s.level||0)).pop();t&&(await ft(e,"📊 "+__B+" 用量提醒："+c+"（提醒阈值 "+t+"%）"),s.level=t,p=!0)}if(p&&t.K&&"function"==typeof t.K.put)try{await t.K.put("tgnote",JSON.stringify(s))}catch(t){}}catch(t){}}async function gt(t,e){const n=String(t.CF_ACCOUNT_ID||e&&e.cfAccountId||"").trim(),r=String(t.CF_API_TOKEN||e&&e.cfApiToken||"").trim();if(!n||!r)return{configured:!1};const a=Date.now();if(a<dt)return pt&&pt.data?Object.assign({},pt.data,{stale:!0,error:"CF API 限流(429)，显示缓存数据（可能滞后）"}):{configured:!0,error:"CF API 限流(429)，请 15 分钟后再试"};if(pt&&pt.at&&a-pt.at<3e5)return pt.data;try{const t=new Date;t.setUTCHours(0,0,0,0);const e=new Date,o={query:"query getBillingMetrics($accountId: string!, $filter: AccountWorkersInvocationsAdaptiveFilter_InputObject) {\n        viewer { accounts(filter:{accountTag:$accountId}) {\n          workersInvocationsAdaptive(limit:10000, filter:$filter) { sum { requests subrequests } quantiles { cpuTimeP50 } }\n          pagesFunctionsInvocationsAdaptiveGroups(limit:1000, filter:$filter) { sum { requests } }\n        } }\n      }",variables:{accountId:n,filter:{datetime_geq:t.toISOString(),datetime_leq:e.toISOString()}}},s=await fetch("https://api.cloudflare.com/client/v4/graphql",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+r},body:JSON.stringify(o),signal:AbortSignal.timeout(8e3)});if(!s.ok)throw new Error("CF API HTTP "+s.status);const i=await s.json();if(i.errors&&i.errors.length)throw new Error("GraphQL: "+JSON.stringify(i.errors).slice(0,200));const l=i&&i.data&&i.data.viewer&&i.data.viewer.accounts||[];if(!l.length)throw new Error("未找到账户数据（检查账户 ID 与令牌权限）");const c=l[0],p=(c.workersInvocationsAdaptive||[])[0]||{},d=(c.pagesFunctionsInvocationsAdaptiveGroups||[]).reduce((t,e)=>t+(e&&e.sum&&e.sum.requests||0),0),u=(p.sum&&p.sum.requests||0)+d,f=p.quantiles&&p.quantiles.cpuTimeP50||0,h=p.sum&&p.sum.subrequests||0,m=Math.round(u/ut*1e3)/10,g={configured:!0,limit:ut,today:{requests:u,cpuTime:f,subrequests:h},percent:m,remaining:Math.max(0,ut-u),updatedAt:e.toISOString()};return pt={at:a,data:g},g}catch(t){const e=t&&t.message||String(t);return e.indexOf("429")>=0?(dt=a+9e5,pt&&pt.data?Object.assign({},pt.data,{stale:!0,error:"CF API 限流(429)，显示缓存数据（可能滞后）"}):{configured:!0,error:"CF API 限流(429)，请 15 分钟后再试"}):{configured:!0,error:e}}}function bt(t){if(!t||t.byteLength<1)throw new Error(_d("VkxFU1M=")+" 头部过短");const e=new DataView(t.buffer,t.byteOffset,t.byteLength);let n=0;if(0!==e.getUint8(0))throw new Error("不支持的 "+_d("VkxFU1M=")+" 版本");if(n+=17,n>=t.byteLength)throw new Error(_d("VkxFU1M=")+" 头部过短");const r=e.getUint8(n);if(n+=1,n+=r,n+3>t.byteLength)throw new Error(_d("VkxFU1M=")+" 头部过短");const a=e.getUint8(n);n+=1;const o=e.getUint16(n);n+=2;const s=e.getUint8(n);n+=1;const{addr:i,len:l}=function(t,e,n,r){if(1===r)return{addr:`${e.getUint8(n)}.${e.getUint8(n+1)}.${e.getUint8(n+2)}.${e.getUint8(n+3)}`,len:4};if(2===r){const r=e.getUint8(n),a=t.subarray(n+1,n+1+r);return{addr:O.decode(a),len:1+r}}if(3===r)return{addr:Q(t.subarray(n,n+16)),len:16};throw new Error("无法识别的地址类型")}(t,e,n,s);return n+=l,{command:a,port:o,addr:i,headerLength:n,earlyData:t.subarray(n)}}const vt=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];let yt="",xt="";function wt(t){return t!==yt&&(yt=t,xt=function(t){const e=D.encode(String(t)),n=8*e.length,r=1+(e.length+8>>6)<<6,a=new Uint8Array(r);a.set(e),a[e.length]=128;const o=new DataView(a.buffer);o.setUint32(r-8,Math.floor(n/4294967296),!1),o.setUint32(r-4,n>>>0,!1);let s=3238371032,i=914150663,l=812702999,c=4144912697,p=4290775857,d=1750603025,u=1694076839,f=3204075428;const h=(t,e)=>t>>>e|t<<32-e;for(let t=0;t<r;t+=64){const e=new Uint32Array(64);for(let n=0;n<16;n++)e[n]=o.getUint32(t+4*n,!1);for(let t=16;t<64;t++){const n=h(e[t-15],7)^h(e[t-15],18)^e[t-15]>>>3,r=h(e[t-2],17)^h(e[t-2],19)^e[t-2]>>>10;e[t]=e[t-16]+n+e[t-7]+r>>>0}let n=s,r=i,a=l,m=c,g=p,b=d,v=u,y=f;for(let t=0;t<64;t++){const o=y+(h(g,6)^h(g,11)^h(g,25))+(g&b^~g&v)+vt[t]+e[t]>>>0,s=n&r^n&a^r&a;y=v,v=b,b=g,g=m+o>>>0,m=a,a=r,r=n,n=o+((h(n,2)^h(n,13)^h(n,22))+s>>>0)>>>0}s=s+n>>>0,i=i+r>>>0,l=l+a>>>0,c=c+m>>>0,p=p+g>>>0,d=d+b>>>0,u=u+v>>>0,f=f+y>>>0}let m="";for(const t of[s,i,l,c,p,d,u])m+=(t>>>24&255).toString(16).padStart(2,"0"),m+=(t>>>16&255).toString(16).padStart(2,"0"),m+=(t>>>8&255).toString(16).padStart(2,"0"),m+=(255&t).toString(16).padStart(2,"0");return m}(t)),xt}const kt=["https://doh.pub/dns-query","https://dns.alidns.com/resolve","https://1.1.1.1/dns-query","https://8.8.8.8/dns-query","https://dns.google/dns-query","https://cloudflare-dns.com/dns-query"];function It(t){const e=String(t).split("::"),n=e[0]?e[0].split(":").filter(Boolean):[],r=e[1]?e[1].split(":").filter(Boolean):[],a=[...n,...Array(Math.max(0,8-n.length-r.length)).fill("0"),...r],o=new Uint8Array(16);return a.forEach((t,e)=>{const n=parseInt(t,16)||0;o[2*e]=n>>8&255,o[2*e+1]=255&n}),o}async function Pt(e,n,r){const a=t({hostname:e,port:n});try{await function(t,e){return Promise.race([t,new Promise((t,n)=>setTimeout(()=>n(new Error("连接超时（SYN 被静默丢弃）")),e||6e3))])}(a.opened,r||6e3)}catch(t){try{a.close()}catch(t){}throw t}return a}async function Ct(t,e){return Pt(t.hostname,t.port,e||6e3)}async function _readTimed(t,e,n,r){let a=null;try{return await Promise.race([t.read(),new Promise((t,o)=>{a=setTimeout(()=>{try{r&&r.close()}catch(t){}o(new Error(n||"读取超时"))},e||6e3)})])}finally{a&&(clearTimeout(a),a=null)}}function St(t){const e=t instanceof Uint8Array?t:new Uint8Array(t),n=e.length,r=8*n,a=new Uint8Array(1+(n+8>>6)<<6);a.set(e),a[n]=128;const o=new DataView(a.buffer);o.setUint32(a.length-8,Math.floor(r/4294967296),!1),o.setUint32(a.length-4,r>>>0,!1);let s=1732584193,i=4023233417,l=2562383102,c=271733878,p=3285377520;const d=new Uint32Array(80);for(let t=0;t<a.length;t+=64){for(let e=0;e<16;e++)d[e]=o.getUint32(t+4*e,!1);for(let t=16;t<80;t++)d[t]=M(d[t-3]^d[t-8]^d[t-14]^d[t-16],1);let e=s,n=i,r=l,a=c,u=p;for(let t=0;t<80;t++){let o,s;t<20?(o=n&r|~n&a,s=1518500249):t<40?(o=n^r^a,s=1859775393):t<60?(o=n&r|n&a|r&a,s=2400959708):(o=n^r^a,s=3395469782);const i=M(e,5)+o+u+s+d[t]>>>0;u=a,a=r,r=M(n,30),n=e,e=i}s=s+e>>>0,i=i+n>>>0,l=l+r>>>0,c=c+a>>>0,p=p+u>>>0}const u=new Uint8Array(20),f=new DataView(u.buffer);return f.setUint32(0,s,!1),f.setUint32(4,i,!1),f.setUint32(8,l,!1),f.setUint32(12,c,!1),f.setUint32(16,p,!1),u}function At(t,e){let n=t;n.length>64&&(n=St(n));const r=new Uint8Array(64),a=new Uint8Array(64);for(let t=0;t<64;t++)r[t]=54^(t<n.length?n[t]:0),a[t]=92^(t<n.length?n[t]:0);return St(Dt(a,St(Dt(r,e))))}function Tt(t,e,n){const r=At(e&&e.length?e:new Uint8Array(20),t);let a=new Uint8Array(0),o=new Uint8Array(0);for(let t=1;o.length<n;t++){const e=new Uint8Array([t]);a=At(r,Dt(Dt(a,D.encode("ss-subkey")),e)),o=Dt(o,a)}return o.slice(0,n)}function Ut(t,e,n){const r=new Uint32Array(16);r[0]=1634760805,r[1]=857760878,r[2]=2036477234,r[3]=1797285236;const a=new DataView(t.buffer,t.byteOffset,32);for(let t=0;t<8;t++)r[4+t]=a.getUint32(4*t,!0);r[12]=e>>>0;const o=new DataView(n.buffer,n.byteOffset,12);r[13]=o.getUint32(0,!0),r[14]=o.getUint32(4,!0),r[15]=o.getUint32(8,!0);const s=r.slice(),i=(t,e,n,r)=>{s[t]=s[t]+s[e]>>>0,s[r]=M(s[r]^s[t],16),s[n]=s[n]+s[r]>>>0,s[e]=M(s[e]^s[n],12),s[t]=s[t]+s[e]>>>0,s[r]=M(s[r]^s[t],8),s[n]=s[n]+s[r]>>>0,s[e]=M(s[e]^s[n],7)};for(let t=0;t<10;t++)i(0,4,8,12),i(1,5,9,13),i(2,6,10,14),i(3,7,11,15),i(0,5,10,15),i(1,6,11,12),i(2,7,8,13),i(3,4,9,14);const l=new Uint8Array(64),c=new DataView(l.buffer);for(let t=0;t<16;t++)s[t]=s[t]+r[t]>>>0,c.setUint32(4*t,s[t],!0);return l}function Et(t,e,n,r){const a=r.slice(),o=Math.ceil(r.length/64);for(let r=0;r<o;r++){const o=Ut(t,n+r,e),s=64*r,i=Math.min(64,a.length-s);for(let t=0;t<i;t++)a[s+t]^=o[t]}return a}function $t(t,e){let n=0n,r=0n;for(let e=0;e<16;e++)n|=BigInt(t[e])<<BigInt(8*e),r|=BigInt(t[16+e])<<BigInt(8*e);n&=0x0ffffffc0ffffffc0ffffffc0fffffffn;let a=0n;const o=(1n<<130n)-5n;for(let t=0;t<e.length;t+=16){let r=1n;for(let n=Math.min(16,e.length-t)-1;n>=0;n--)r=r<<8n|BigInt(e[t+n]);a=(a+r)*n%o}a=a+r&(1n<<128n)-1n;const s=new Uint8Array(16);for(let t=0;t<16;t++)s[t]=Number(a>>BigInt(8*t)&0xffn);return s}async function Lt(t,e){const n=new Uint8Array(12),r=()=>{const t=n.slice();for(let e=11;e>=0&&(t[e]++,0===t[e]);e--);return t};if(_d("Q0hBQ0hBMjA=")+"-POLY1305"===t)return{seal:t=>function(t,e,n){const r=new Uint8Array(0),a=Et(t,e,0,new Uint8Array(32)),o=Et(t,e,1,n),s=t=>new Uint8Array((16-t%16)%16),i=t=>{const e=new Uint8Array(8),n=new DataView(e.buffer);return n.setUint32(0,t>>>0,!0),n.setUint32(4,Math.floor(t/4294967296),!0),e},l=Dt(r,Dt(s(r.length),Dt(o,Dt(s(o.length),Dt(i(r.length),i(o.length))))));return Dt(o,$t(a,l))}(e,r(),t),open(t){const n=function(t,e,n){if(n.length<16)throw new Error("SS AEAD 数据过短");const r=n.subarray(0,n.length-16),a=n.subarray(n.length-16),o=new Uint8Array(0),s=t=>new Uint8Array((16-t%16)%16),i=t=>{const e=new Uint8Array(8),n=new DataView(e.buffer);return n.setUint32(0,t>>>0,!0),n.setUint32(4,Math.floor(t/4294967296),!0),e},l=$t(Et(t,e,0,new Uint8Array(32)),Dt(o,Dt(s(o.length),Dt(r,Dt(s(r.length),Dt(i(o.length),i(r.length)))))));let c=0;for(let t=0;t<16;t++)c|=l[t]^a[t];return 0!==c?null:Et(t,e,1,r)}(e,r(),t);if(!n)throw new Error("SS AEAD 解密失败（密码/加密方式与服务器不匹配）");return n}};const a=await crypto.subtle.importKey("raw",e,{name:t},!1,["encrypt","decrypt"]);return{seal:async e=>new Uint8Array(await crypto.subtle.encrypt({name:t,iv:r()},a,e)),async open(e){try{return new Uint8Array(await crypto.subtle.decrypt({name:t,iv:r()},a,e))}catch(t){throw new Error("SS AEAD 解密失败（密码/加密方式与服务器不匹配）")}}}}async function Nt(t,e){const n=new Uint8Array([e.length>>8&255,255&e.length]);return Dt(await t.seal(n),await t.seal(e))}function Dt(t,e){const n=new Uint8Array(t.length+e.length);return n.set(t,0),n.set(e,t.length),n}function Ot(t,e){t:for(let n=0;n<=t.length-e.length;n++){for(let r=0;r<e.length;r++)if(t[n+r]!==e[r])continue t;return n}return-1}const __D="cmli"+"ussss"+".net";const Rt={HK:_d("cHJveHlpcA==")+".hk."+__D,US:_d("cHJveHlpcA==")+".us."+__D,SG:_d("cHJveHlpcA==")+".sg."+__D,JP:_d("cHJveHlpcA==")+".jp."+__D,KR:_d("cHJveHlpcA==")+".kr."+__D,DE:_d("cHJveHlpcA==")+".de."+__D,SE:_d("cHJveHlpcA==")+".se."+__D,NL:_d("cHJveHlpcA==")+".nl."+__D,FI:_d("cHJveHlpcA==")+".fi."+__D,GB:_d("cHJveHlpcA==")+".gb."+__D,Oracle:_d("cHJveHlpcA==")+".oracle."+__D,DigitalOcean:_d("cHJveHlpcA==")+".digitalocean."+__D,Vultr:_d("cHJveHlpcA==")+".vultr."+__D,Multacom:_d("cHJveHlpcA==")+".multacom."+__D},_t=(()=>{const t=Object.create(null),e=(e,n)=>{for(const r of[].concat(n))t[r]=e};return e("HK","HKG"),e("AU",["SYD","MEL","BNE","PER","ADL","CBR"]),e("SG","SIN"),e("JP",["NRT","HND","KIX","TYO","OSA","NGO","CTS","FUK","OKA"]),e("KR",["ICN","SEL","PUS"]),e("DE",["FRA","MUC","DUS","BER","HAM","STR","VIE","ZRH","CDG","MAD","MXP","FCO","PRG","WAW"]),e("SE","ARN"),e("NL","AMS"),e("FI","HEL"),e("GB",["LHR","LGW","MAN","EDI"]),e("US",["LAX","SJC","SFO","SEA","PDX","SAN","LAS","PHX","SLC","DEN","DFW","IAH","AUS","ORD","MSP","DTW","STL","MCI","ATL","MIA","MCO","BNA","CLT","IAD","BOS","EWR","JFK","PHL","YYZ","YVR","YUL","MEX","GRU"]),e("TW",["TPE","KHH","TSA","RMQ"]),t})(),_Zc=t=>{const e=String(t||"").toUpperCase();return e?_t[e]?_t[e]:/^[A-Z]{2}$/.test(e)?e:"US":"US"},_PXC=new Map,_Px=t=>{const s=String(t||"").trim();if(!s)return[];const c=_PXC.get(s);if(c)return c;const o=[];for(const r of s.split(/[,;\n\r]+/)){let v=r.trim();if(!v)continue;let n="";const mp=/^([A-Za-z]{2})\.(.+)$/.exec(v);if(mp&&Y(z(mp[2],443).host)){n=mp[1].toUpperCase(),v=mp[2]}if(!n){const ms=/^(.+)#([A-Za-z]{2})$/.exec(v);ms&&(n=ms[2].toUpperCase(),v=ms[1])}const p=z(v,443);if(!p.host)continue;if(!n&&!Y(p.host))for(const x of p.host.toUpperCase().split(/[^A-Z0-9]+/))if(/^[A-Z]{2}$/.test(x)&&"IP"!==x&&"CF"!==x){n=x;break}o.push({host:p.host,port:p.port,cc:n})}_PXC.size>32&&_PXC.clear(),_PXC.set(s,o);return o},Mt=new Map;async function Ft(t,e){if(e=e||443,Y(t))return[{hostname:t,port:e}];const n=t+":"+e,r=Date.now(),a=Mt.get(n);if(a&&r-a.t<3e5)return a.ips;const o=["https://cloudflare-dns.com/dns-query","https://dns.alidns.com/resolve","https://doh.pub/dns-query"],s=async(e,n)=>{for(const r of o)try{const a=await oe(r+"?name="+encodeURIComponent(t)+"&type="+e,{headers:{accept:"application/dns-json"}},4e3);if(!a||!a.ok)continue;return((await a.json()).Answer||[]).filter(t=>t.type===n).map(t=>t.data)}catch(t){}return[]},i=await s("TXT",16);let l=[];for(const t of i){const n=String(t).replace(/^"|"$/g,"").replace(/\\010/g,",").replace(/\n/g,",").trim();if(!n)continue;if("@"+_d("ZWR0dW5uZWw=")===n)break;const r=n.split(/[,;\s]+/).map(t=>t.trim()).filter(Boolean),a=[];for(const t of r){const{host:n,port:r}=z(t,e);Y(n)&&a.push({hostname:n,port:r})}if(a.length){l=a;break}}l.length||(l=(await s("A",1)).filter(t=>/^\d+\.\d+\.\d+\.\d+$/.test(t)).map(t=>({hostname:t,port:e}))),l.length||(l=(await s("AAAA",28)).filter(t=>Y(t)).map(t=>({hostname:t,port:e})));const c=new Set,p=l.filter(t=>{const e=t.hostname+":"+t.port;return!c.has(e)&&(c.add(e),!0)});return p.length&&Mt.set(n,{t:r,ips:p}),p}async function _proxyOpen(t,e){let n=[];try{n=await Ft(t,e)}catch(t){}n.push({hostname:t,port:e});const r=new Set,a=n.filter(t=>{const e=t.hostname+":"+t.port;return!r.has(e)&&(r.add(e),!0)}).slice(0,6),o=await zt(a.map(t=>()=>Pt(t.hostname,t.port,4e3)));if(!o)throw new Error("代理入口全部连接失败");return o}async function zt(t){if(!t||!t.length)return null;let e=!1;return await new Promise(n=>{let r=t.length;const a=t=>{if(r--,t)if(e)try{t.close()}catch(t){}else e=!0,n(t);else r<=0&&!e&&n(null)};for(const e of t)Promise.resolve().then(e).then(t=>a(t&&t.readable?t:null),()=>a(null))})}async function qt(t,e,n){let r=null;const a=t=>{if(t&&t!==r)try{t.close()}catch(t){}},o=t?Promise.resolve().then(t).then(t=>t&&t.readable?t:null,()=>null):Promise.resolve(null),s=e&&e.length?zt(e).then(t=>t&&t.readable?t:null,()=>null):Promise.resolve(null);let i=null;const l=await Promise.race([o,new Promise(t=>{i=setTimeout(()=>t("__GRACE__"),n)})]);if(i&&(clearTimeout(i),i=null),l&&"__GRACE__"!==l)return r=l,s.then(a),r;const c=await s;if(c)return r=c,o.then(a),r;const p=await o;return p?(r=p,r):null}function jt(t){return!t||t.byteLength<3?"unknown":22===t[0]&&3===t[1]?"tls":"nontls"}async function Bt(t,e,n,r,a){const o=function(t){if(!t)return null;let e=_d("c29ja3M1"),n=String(t).trim();const r=n.match(_r2);if(r&&(e=r[1].toLowerCase(),n=r[2]),"ss"===e)return function(t){let e=t,n="";const r=t.indexOf("#");r>=0&&(e=t.slice(0,r));const a=e.lastIndexOf("@");if(a>=0)n=e.slice(0,a),e=e.slice(a+1);else{const t=st(e);if(t&&t.includes("@")){const r=t.lastIndexOf("@");n=t.slice(0,r),e=t.slice(r+1)}}let o="",s="";if(n){let t=st(n)||n;try{t=decodeURIComponent(t)}catch(t){}const e=t.indexOf(":");e>0?(o=t.slice(0,e),s=t.slice(e+1)):o=t}const{host:i,port:l}=z(e,8388);return{type:"ss",host:i,port:l,method:o,password:s}}(n);let a="",o="";if(n.includes("@")){const e=n.lastIndexOf("@"),t=n.slice(0,e),i=n.slice(e+1),r=t=>{try{return decodeURIComponent(t)}catch(e){return t}},s=t.indexOf(":");s>=0?(a=r(t.slice(0,s)),o=r(t.slice(s+1))):a=r(t),n=i}const s="http"===e?80:"https"===e?443:1080,{host:i,port:l}=z(n,s);return{type:e,host:i,port:l,user:a,pass:o}}(e.outboundProxy),s=e.outboundMode||"",i="nontls"!==a,l=o?"http"===o.type||"https"===o.type?t=>async function(t,e){const n=await _proxyOpen(t.host,t.port),r=n.writable.getWriter(),a=n.readable.getReader();let o="";t.user&&(o=_d("UHJveHktQXV0aG9yaXphdGlvbg==")+": Basic "+function(t){let e="";for(let n=0;n<t.length;n+=32768)e+=String.fromCharCode(...t.subarray(n,n+32768));return btoa(e)}(D.encode(`${t.user}:${t.pass}`))+"\r\n");const s=`${_d("Q09OTkVDVA==")} ${e.hostname}:${e.port} HTTP/1.1\r\nHost: ${e.hostname}:${e.port}\r\n${o}\r\n`;await r.write(D.encode(s));const{head:i,leftover:l}=await async function(t){let e=new Uint8Array(0);for(;e.length<65536;){const{done:n,value:r}=await t.read();if(n)break;e=Dt(e,r);const a=Ot(e,[13,10,13,10]);if(a>=0)return{head:O.decode(e.subarray(0,a)),leftover:e.subarray(a+4)}}return{head:O.decode(e),leftover:new Uint8Array(0)}}(a);if(!/^HTTP\/\d\.\d\s+2\d\d/i.test(i))throw new Error(_d("Q09OTkVDVA==")+" 失败: "+i.split("\r\n")[0]);return l&&l.byteLength>0&&(n._preamble=l),r.releaseLock(),a.releaseLock(),n}(o,t):"ss"===o.type?t=>async function(t){const e=function(t){const e=String(t||"").toLowerCase().replace(/_/g,"-");return _d("YWVzLTEyOC1nY20=")===e||"aes-128gcm"===e?{name:"AES-GCM",keyLen:16}:_d("YWVzLTI1Ni1nY20=")===e||"aes-256gcm"===e?{name:"AES-GCM",keyLen:32}:_d("Y2hhY2hhMjA=")+"-ietf-poly1305"===e||_d("Y2hhY2hhMjA=")+"-poly1305"===e||_d("Y2hhY2hhMjA=")+"poly1305"===e?{name:_d("Q0hBQ0hBMjA=")+"-POLY1305",keyLen:32}:null}(t.method);if(!e)throw new Error("不支持的 SS 加密方式: "+(t.method||"（未指定）"));if(!t.password)throw new Error("SS 出站缺少密码");const n=await _proxyOpen(t.host,t.port),r=n.writable.getWriter(),a=n.readable.getReader();let o=new Uint8Array(0);const s=async t=>{for(;o.length<t;){const{done:t,value:e}=await a.read();if(t)throw new Error("SS 连接被关闭");o=Dt(o,e)}const e=o.slice(0,t);return o=o.subarray(t),e},i=new Uint8Array(await crypto.subtle.digest("SHA-256",D.encode(t.password))),l=crypto.getRandomValues(new Uint8Array(16)),c=await Lt(e.name,await Tt(i,l,e.keyLen));return await r.write(l),await r.write(await Nt(c,new Uint8Array(0))),{readable:new ReadableStream({async start(t){try{const n=await s(16),r=await Lt(e.name,await Tt(i,n,e.keyLen));for(;;){const e=await r.open(await s(18)),n=e[0]<<8|e[1];if(n>16384)throw new Error("SS 分片长度非法 "+n);const a=await r.open(await s(n+16));n>0&&t.enqueue(a)}}catch(e){try{t.error(e)}catch(t){}}}}),writable:new WritableStream({async write(t){const e=t instanceof Uint8Array?t:new Uint8Array(t);for(let t=0;t<e.length;t+=16384)await r.write(await Nt(c,e.subarray(t,Math.min(e.length,t+16384))))},close(){try{r.close()}catch(t){}},abort(){try{r.abort()}catch(t){}}}),close(){try{n.close()}catch(t){}}}}(o):t=>async function(t,e){const n=await _proxyOpen(t.host,t.port),r=n.writable.getWriter(),a=n.readable.getReader();let o=new Uint8Array(0);const s=async t=>{for(;o.length<t;){const{done:t,value:e}=await _readTimed(a,6e3,"SOCKS5 握手超时",n);if(t)throw new Error("连接被关闭");o=Dt(o,e)}const e=o.slice(0,t);return o=o.subarray(t),e},i=t.user?[5,2,0,2]:[5,1,0];await r.write(new Uint8Array(i));const l=await s(2);if(5!==l[0]||255===l[1])throw new Error(_d("U09DS1M1")+" 握手失败");if(2===l[1]){if(!t.user)throw new Error(_d("U09DS1M1")+" 服务器要求认证但未提供凭据");const e=D.encode(t.user),n=D.encode(t.pass),a=new Uint8Array([1,e.length,...e,n.length,...n]);if(await r.write(a),0!==(await s(2))[1])throw new Error(_d("U09DS1M1")+" 认证失败")}else if(0!==l[1])throw new Error(_d("U09DS1M1")+" 不支持的认证方法 "+l[1]);const c=D.encode(e.hostname);let p;p=/^\d+\.\d+\.\d+\.\d+$/.test(e.hostname)?new Uint8Array([5,1,0,1,...e.hostname.split(".").map(Number),e.port>>8&255,255&e.port]):new Uint8Array([5,1,0,3,c.length,...c,e.port>>8&255,255&e.port]),await r.write(p);const d=await s(4);if(0!==d[1])throw new Error(_d("U09DS1M1")+" 连接失败 码"+d[1]);if(1===d[3])await s(6);else if(3===d[3]){const t=(await s(1))[0];await s(t+2)}else 4===d[3]&&await s(18);return o.byteLength>0&&(n._preamble=o),r.releaseLock(),a.releaseLock(),n}(o,t):null;let c;const p=async t=>{try{const e=await t();if(e)return e}catch(t){c=t}return null},d=()=>{throw c||new Error("所有出站方式均失败")},u=e.proxyIP?_Px(e.proxyIP):[],_nc=_Zc(n),_nr=String(n||"").toUpperCase(),_cd=[];const _tryPx=async()=>{if(!u.length||!i)return null;for(const q of u)if(q.cc&&(q.cc===_nc||q.cc===_nr))_cd.push(q);for(const q of u)if(!q.cc)_cd.push(q);_cd.length||_cd.push(u[0]);for(const q of _cd.slice(0,3)){const _ok=await p(async()=>{let _ips=[];try{_ips=await Ft(q.host,q.port)}catch(_e){}_ips.length||(_ips=[{hostname:q.host,port:q.port}]);const _c=await zt(_ips.slice(0,4).map(_i=>()=>p(()=>Ct(_i,4e3))));if(_c)return _c});if(_ok)return _ok}return null};const f={hostname:t.addr,port:t.port},h=()=>{if(!i)return[];const t=_Zc(n),e=[t,...Object.keys(Rt).filter(e=>e!==t)].slice(0,2);return e.map((t,e)=>async()=>{const n=Rt[t];if(!n)return null;let r=[];try{r=await Ft(n,443)}catch(t){return null}if(!r.length)return null;const a=r.slice(0,0===e?2:1);return await zt(a.map(t=>()=>p(()=>Ct(t,4e3))))})},m=()=>p(()=>Ct(f,4e3)),g=l?()=>p(()=>l(f)):null;if("only"===s&&g){const t=await g();if(t)return t;return d()}if(""===s&&g){const t=await g();if(t)return t;const e=await m().catch(()=>null);if(e)return e;const n=await _tryPx();if(n)return n;return await qt(null,h().slice(0,4),0)||d()}const x=await m().catch(()=>null);if(x)return x;const q=await _tryPx();if(q)return q;const _fb=await qt(null,h().slice(0,3),0);if(_fb)return _fb;if(g){const t=await g();if(t)return t}return d()}async function Gt(t,e){const n=new WebSocketPair,[r,a]=Object.values(n);try{a.accept({allowHalfOpen:!0})}catch(t){a.accept()}a.binaryType="arraybuffer";let o=null,s=null,i=!1,l=null,c=null,p=!1;const d=t=>{try{a.send(t)}catch(t){}},u=async(n,r)=>{if(n&&n.byteLength&&(l=l?Dt(l,n):n),!l)return;if(l.byteLength>65536)throw new Error("握手头超过 64KB，关闭连接");let f,h;try{let t=function(t,e){if(!e.enableTrojan||!t||t.byteLength<58)return!1;const n=t.subarray(0,56);if(O.decode(n).toLowerCase()===wt(e.trojanPassword||e.uuid))return!0;if(13===t[56]&&10===t[57]){for(let t=0;t<56;t++){const e=n[t];if(!(e>=48&&e<=57||e>=97&&e<=102||e>=65&&e<=70))return!1}return!0}return!1}(l,e);if(!t&&l.byteLength>0&&0!==l[0]&&l.byteLength<58)return;h=!t,f=t?function(t){if(!t||t.byteLength<66)throw new Error(_d("VHJvamFu")+" 头部过短");const e=new DataView(t.buffer,t.byteOffset,t.byteLength);let n=58;const r=e.getUint8(n);n+=1;const a=e.getUint8(n);let o,s;if(n+=1,1===a)o=`${e.getUint8(n)}.${e.getUint8(n+1)}.${e.getUint8(n+2)}.${e.getUint8(n+3)}`,s=4;else if(3===a){const r=e.getUint8(n);o=O.decode(t.subarray(n+1,n+1+r)),s=1+r}else{if(4!==a)throw new Error("无法识别的地址类型");o=Q(t.subarray(n,n+16)),s=16}n+=s;const i=e.getUint16(n);return n+=2,n+=2,{command:r,port:i,addr:o,password:O.decode(t.subarray(0,56)),headerLength:n}}(l):bt(l)}catch(t){if(/头部过短/.test(t.message||""))return;throw t}!p&&h&&2!==f.command&&(p=!0,d(new Uint8Array([0,0])));const m=jt(l.byteLength>f.headerLength?l.subarray(f.headerLength):null);if("unknown"===m&&!r)return void(c||(c=setTimeout(()=>{c=null,u(new Uint8Array(0),!0).catch(t=>{try{a.close(1011,String(t&&t.message||t))}catch(t){}})},80)));if(c&&(clearTimeout(c),c=null),i)return;if(i=!0,2===f.command){try{const t=l.subarray(f.headerLength);if(53===f.port&&t.byteLength>=12){const e=await async function(t){if(!t||t.byteLength<17)return null;const e=new DataView(t.buffer,t.byteOffset,t.byteLength),n=e.getUint16(0);if(32768&e.getUint16(2))return null;if(1!==e.getUint16(4))return null;let r=12,a=[];for(;r<t.byteLength;){const n=e.getUint8(r);if(0===n){r++;break}if(!(192&~n)){r+=2;break}if(r+1+n>t.byteLength)return null;a.push(O.decode(t.subarray(r+1,r+1+n))),r+=1+n}if(r+4>t.byteLength||0===a.length)return null;const o=e.getUint16(r),s=e.getUint16(r+2),i=r+4;if(1!==o&&28!==o)return null;const l=a.join("."),c=t.subarray(12,i);let p=null;for(const t of kt)try{const e=await oe(t+"?name="+encodeURIComponent(l)+"&type="+o,{headers:{accept:"application/dns-json"}},5e3);if(!e||!e.ok)continue;const n=await e.json();if(!n||0!==n.Status)continue;const r=(n.Answer||[]).filter(t=>t.type===o&&(1===t.type?Y(String(t.data)):/^[0-9a-fA-F:]+$/.test(String(t.data))));if(r.length){p=r;break}}catch(t){}if(!p)return null;const d=new Uint8Array(12),u=new DataView(d.buffer);u.setUint16(0,n),u.setUint16(2,33152),u.setUint16(4,1),u.setUint16(6,p.length);const f=[d,c];for(const t of p){const e=String(t.data),n=1===t.type?Uint8Array.from(e.split(".").map(Number)):It(e);if(n.length!==(1===t.type?4:16))continue;const r=new Uint8Array(10),a=new DataView(r.buffer);a.setUint16(0,49164),a.setUint16(2,t.type),a.setUint16(4,0===s?1:s),a.setUint32(6,Number(t.TTL)||300),f.push(r,new Uint8Array([n.length>>8&255,255&n.length]),n)}let h=0;f.forEach(t=>h+=t.byteLength);const m=new Uint8Array(h);let g=0;for(const t of f)m.set(t,g),g+=t.byteLength;return m}(t);e&&d(e)}}catch(t){}try{a.close(1e3)}catch(t){}return}const g=await Bt(f,e,t.cf&&t.cf.colo,0,m);o=g,s=g.writable.getWriter(),g._preamble&&g._preamble.byteLength>0&&d(g._preamble),l&&l.byteLength>f.headerLength&&await s.write(l.subarray(f.headerLength)),l=null,async function(t,e,n){try{for(;;){const{done:n,value:r}=await t.read();if(n)break;e(r)}}catch(t){}try{n&&n()}catch(t){}}(g.readable.getReader(),d,()=>{try{a.close(1e3)}catch(t){}})},f=function(t,e){if(!t)return null;const n=String(t).trim();if(!n||n.length>8192)return null;if(!/^[A-Za-z0-9\-_+/=]+$/.test(n))return null;let r=null;try{const t=n.replace(/-/g,"+").replace(/_/g,"/"),e=t.length%4?"=".repeat(4-t.length%4):"",a=atob(t+e);r=new Uint8Array(a.length);for(let t=0;t<a.length;t++)r[t]=a.charCodeAt(t)}catch(t){return null}if(!r.byteLength||r.byteLength>6144)return null;if(r.byteLength>=17&&0===r[0]){const t=function(t){const e=String(t||"").replace(/-/g,"");if(32!==e.length)return null;const n=new Uint8Array(16);for(let t=0;t<16;t++){const r=parseInt(e.substr(2*t,2),16);if(isNaN(r))return null;n[t]=r}return n}(e.uuid);if(!t)return r;for(let e=0;e<16;e++)if(r[e+1]!==t[e])return null;return r}return e.enableTrojan&&r.byteLength>=58&&13===r[56]&&10===r[57]&&O.decode(r.subarray(0,56)).toLowerCase()===wt(e.trojanPassword||e.uuid)?r:null}(t.headers.get("sec-websocket-protocol"),e);f&&u(f).catch(t=>{try{a.close(1011,String(t&&t.message||t))}catch(t){}}),a.addEventListener("message",async t=>{try{const e="string"==typeof t.data?D.encode(t.data):new Uint8Array(t.data);i?s?await s.write(e):l=l?Dt(l,e):e:await u(e)}catch(t){try{a.close(1011,String(t&&t.message||t))}catch(t){}}});const h=()=>{if(c&&(clearTimeout(c),c=null),o){try{o.close()}catch(t){}o=null}};return a.addEventListener("close",h),a.addEventListener("error",h),new Response(null,{status:101,webSocket:r})}function Ht(t){const e=t instanceof Uint8Array?t:new Uint8Array(t);try{return new TextDecoder("utf-8",{fatal:!0}).decode(e)}catch(t){}try{return new TextDecoder("gbk").decode(e)}catch(t){}return(new TextDecoder).decode(e)}function Kt(t){const e=new Set,n=[],r=(t,r,a)=>{Y(t)&&(e.has(t)||(e.add(t),n.push({ip:t,port:r||443,name:a||""})))};ot(t).forEach(t=>r(t.ip,t.port,t.name));const a=/\b(?:\d{1,3}\.){3}\d{1,3}(?::\d{1,5})?\b/g;let o;for(;o=a.exec(t);){const{host:t,port:e}=z(o[0],443);t&&r(t,e,"")}const s=/[0-9a-fA-F:]+/g;for(;o=s.exec(t);){const t=o[0];t.includes(":")&&t.split(":").length>=3&&Y(t)&&r(t,443,"")}return n}const Wt={t:0,ips:null};async function Vt(t){if(t=Math.max(1,parseInt(t)||150),Date.now()-Wt.t<6e5)return Wt.ips;const e=await oe("https://stock.hostmonit.com/CloudFlareYes",{headers:{"User-Agent":"Mozilla/5.0"}},6e3);if(e&&e.ok){const n=Kt(await e.text()).filter(t=>t.ip&&v(t.ip)),r=new Set,a=[];for(const e of n)if(!r.has(e.ip)&&(r.add(e.ip),a.push(e),a.length>=t))break;return Wt.t=Date.now(),Wt.ips=a,a}return null}async function Jt(t){const e=[],n={preset:0,presetErr:"",custom:0,customErr:"",cidr:0},r="custom"===(t=t||{}).source||!!t.sourceURL,a=n=>{n&&n.ip&&(r||v(n.ip))&&e.push({ip:n.ip,port:n.port||t.port||443,name:n.name||""})};if(t.source&&N[t.source]){const e=await oe(N[t.source].url,{headers:{"User-Agent":"Mozilla/5.0"}},6e3);if(e&&e.ok){const t=Kt(await e.text());t.forEach(a),n.preset=t.length}else n.presetErr=e?"HTTP "+e.status:"超时/网络错误"}if(t.sourceURL){const e=se(t.sourceURL).filter(t=>/^https?:\/\//i.test(t)).slice(0,50);if(e.length){const t=await Promise.all(e.map(async t=>{try{const e=await oe(t,{headers:{"User-Agent":"Mozilla/5.0"}},6e3);return e&&e.ok?{url:t,arr:Kt(await e.text()),err:""}:{url:t,arr:[],err:e?"HTTP "+e.status:"超时/网络错误"}}catch(e){return{url:t,arr:[],err:e&&e.message||String(e)}}}));let r=0;const o=[];for(const e of t)e.err?o.push(e.url.replace(/^https?:\/\//,"").slice(0,40)+" → "+e.err):(e.arr.forEach(a),n.custom+=e.arr.length,r++);o.length&&(n.customErr=(r?"部分源失败: ":"")+o.join("；"))}else n.customErr="未提供有效 URL（多个用换行或分号隔开）"}const o=new Set,s=[];for(const t of e)o.has(t.ip)||(o.add(t.ip),s.push(t));if(s.length<(t.count||20)){let e=(t.count||20)-s.length;try{const n=await Ve();for(const r of n){if(e<=0)break;o.has(r.ip)||v(r.ip)&&(o.add(r.ip),s.push({ip:r.ip,port:t.port||r.port||443,name:r.name||""}),e--)}}catch(t){}n.bestcf=(t.count||20)-s.length-e}if(!1!==t.useCidr&&s.length<(t.count||20)){const e=(t.count||20)-s.length,r=at(u,3*e);let a=0;for(const n of r){if(a>=e)break;o.has(n)||(o.add(n),s.push({ip:n,port:t.port||443,name:""}),a++)}n.cidr=a}return{candidates:s,stats:n}}function Yt(t){return String(t).replace(/%/g,"%25").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/ /g,"%20")}function Qt(t,e,n,r){return(e?1:0)+(n?1:0)+(r?1:0)<=1?{v:t,t:t,x:t}:{v:t,t:t+".T",x:t+".X"}}function Zt(t,e,n,r,a={}){const o=t.host,s=e.includes(":")&&!e.startsWith("[")?`[${e}]`:e,i=!L.has(Number(n)),l=encodeURIComponent;let c=_d("ZW5jcnlwdGlvbj0=")+"none";c+=i?"&"+_d("c2VjdXJpdHk9")+"tls&sni="+l(o)+"&fp=chrome":"&"+_d("c2VjdXJpdHk9")+"none",c+="&host="+l(o);const p=_d("eGh0dHA=")===a.type&&i;return p?(c+="&type="+_d("eGh0dHA=")+"&mode="+_d("c3RyZWFtLW9uZQ=="),c+="&extra="+l(JSON.stringify(function(t){const e=t.uuid||"";return{xPaddingObfsMode:!0,xPaddingMethod:"tokenish",xPaddingPlacement:"queryInHeader",xPaddingHeader:e.slice(1,7),xPaddingKey:"_"+e.slice(25,31)}}(t)))):c+="&"+_d("dHlwZT13cw=="),c+="&path="+l("/"+t.path+(!p&&i?"?ed=2048":"")),t.alpn&&(c+="&"+_d("YWxwbg==")+"="+t.alpn.split(",").map(t=>t.trim().replace(/[&#=]/g,"")).filter(Boolean).join(",")),t.ech&&(c+="&ech="+l((t.echHost||"cloudflare-ech.com")+"+"+(t.echDns||"https://223.5.5.5/dns-query"))),`${_d("dmxlc3M=")}://${t.uuid}@${s}:${n}?${c}#${Yt(r)}`}function te(t,e,n,r){const a=t.host,o=e.includes(":")&&!e.startsWith("[")?`[${e}]`:e,s=encodeURIComponent,i=!L.has(Number(n)),l="/"+t.path+(i?"?ed=2048":"");let c=i?_d("c2VjdXJpdHk9")+"tls&sni="+s(a)+"&fp=chrome&host="+s(a)+"&"+_d("dHlwZT13cw==")+"&path="+s(l):_d("c2VjdXJpdHk9")+"none&host="+s(a)+"&"+_d("dHlwZT13cw==")+"&path="+s(l);return t.alpn&&i&&(c+="&"+_d("YWxwbg==")+"="+t.alpn.split(",").map(t=>t.trim().replace(/[&#=]/g,"")).filter(Boolean).join(",")),t.ech&&i&&(c+="&ech="+s((t.echHost||"cloudflare-ech.com")+"+"+(t.echDns||"https://223.5.5.5/dns-query"))),`${_d("dHJvamFu")}://${t.trojanPassword||t.uuid}@${o}:${n}?${c}#${Yt(r)}`}const ee=new Map,ne=18e5,re=new Map;
function _cacheRequest(t){return new Request("https://runtime-cache.invalid/"+encodeURIComponent(String(t)))}
async function _cacheRead(t,e){try{if("undefined"==typeof caches||!caches.default)return null;const n=await caches.default.match(_cacheRequest(t));if(!n)return null;return"arrayBuffer"===e?n.arrayBuffer():"text"===e?n.text():n.json()}catch(t){return null}}
function _cacheWrite(t,e,n,r,a){try{if("undefined"==typeof caches||!caches.default)return;const o=caches.default.put(_cacheRequest(t),new Response(e,{headers:{"Content-Type":n||"application/octet-stream","Cache-Control":"public, max-age="+(r||1800)}})).catch(()=>{});a&&"function"==typeof a.waitUntil?a.waitUntil(o):o.catch(()=>{})}catch(t){}}
function ae(t,e){if(!e||!e.length)return;const n=re.get(t)||0;if(Date.now()-n<ne)return;re.size>200&&re.clear(),re.set(t,Date.now());const r=JSON.stringify({t:Date.now(),ips:e.slice(0,300)});_cacheWrite(t,r,"application/json",1800,Be&&Be._ctx)}function oe(t,e,n){return new Promise(r=>{const a=new AbortController,o=setTimeout(()=>a.abort(),n);fetch(t,Object.assign({},e,{signal:a.signal})).then(t=>{clearTimeout(o),r(t)}).catch(()=>{clearTimeout(o),r(null)})})}function se(t){const e=[];let n="";const r=t=>/^[a-z][a-z0-9+.-]*:\/\//i.test(t),a=t=>/^\[[0-9a-f:]+\](?::\d{1,5})?(?:[?#].*)?$/i.test(t)||/^(?:\d{1,3}(?:\.\d{1,3}){3}|[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+)(?::\d{1,5})?(?:[?#].*)?$/i.test(t);for(const o of String(t||"").split(/[\n;]+/)){for(const t of o.split(",")){const o=t.trim();o&&(n?r(o)||a(o)?(e.push(n),n=o):o.includes("=")||/^[A-Za-z0-9]{1,6}$/.test(o)?n=n+","+o:(e.push(n),n=o):n=o)}n&&(e.push(n),n="")}return e}async function ie(t,e=100,n=300,r=!1,a=!0,o=!1){const s=se(t).map(t=>t.replace(/^\*\./,"")),i=Date.now(),l=["https://cloudflare-dns.com/dns-query","https://dns.alidns.com/resolve"],c=async(t,e,n)=>{for(const r of l)try{const a=await oe(r+"?name="+encodeURIComponent(t)+"&type="+e,{headers:{accept:"application/dns-json"}},4e3);if(!a||!a.ok)continue;return((await a.json()).Answer||[]).filter(t=>t.type===n&&("A"===e?/^\d+\.\d+\.\d+\.\d+$/.test(t.data):/^[0-9a-fA-F:]+$/.test(t.data))).map(t=>t.data)}catch(t){}return[]},p=await Promise.all(s.map(async t=>{if(t.includes("://")){if(t.startsWith("sub://")){let e=t.slice(6);if(/^[A-Za-z0-9+/=]+$/.test(e)&&e.length%4==0)try{const t=atob(e);/^https?:\/\//i.test(t)&&(e=t)}catch(t){}/^https?:\/\//i.test(e)||(e="https://"+e),t=e}const s="url:"+t+(r?"|rf":"")+(a?"":"|raw"),l="srccache:"+F(s).slice(0,24),c=ee.get(s);if(c&&i-c.t<6e5)return c.ips.slice(0,e);const p=await async function(t){const e=await _cacheRead(t,"json");return!e||!Array.isArray(e.ips)||!e.ips.length||Date.now()-(e.t||0)>ne?null:e.ips}(l);if(p)return ee.set(s,{t:i,ips:p}),p.slice(0,e);try{const c=await oe(t,{},6e3);if(!c||!c.ok)throw new Error("unreachable");let p=Ht(await c.arrayBuffer());if(/^[A-Za-z0-9+/=\s]{40,}$/.test(p.slice(0,2e3))&&p.replace(/\s+/g,"").length%4==0)try{const t=atob(p.replace(/\s+/g,""));p=Ht(Uint8Array.from(t,t=>t.charCodeAt(0)))}catch(t){}const d=new Set,u={},h=[],g=(n=t,C.test(String(n||""))),b=t=>!a||v(t)||g,x=p.trim().split(/\r?\n/).map(t=>t.trim()).filter(Boolean);if(x.length>1&&x[0].includes(",")){const t=x[0].split(",").map(t=>t.trim()),n=t.includes("IP地址")&&t.includes("端口"),r=t.some(t=>t.includes("IP"))&&t.some(t=>t.includes("延迟"))&&t.some(t=>t.includes("下载速度"));if(n||r){const n=t.findIndex(t=>t.includes("IP")),r=t.indexOf("端口"),a=t.findIndex(t=>t.includes("延迟")),o=t.findIndex(t=>t.includes("下载速度")),c=t.indexOf("国家")>-1?t.indexOf("国家"):t.indexOf("城市")>-1?t.indexOf("城市"):t.indexOf("数据中心"),p=t.indexOf("TLS");for(const t of x.slice(1)){if(h.length>=e)break;const s=t.split(",").map(t=>t.trim());if(-1!==p&&s[p]&&"true"!==s[p].toLowerCase())continue;const i=(s[n]||"").match(/(\[[0-9a-fA-F:]+\]|\d{1,3}(?:\.\d{1,3}){3})/);if(!i)continue;const l=i[1].replace(/^\[|\]$/g,""),f=-1!==r&&s[r]?parseInt(s[r]):443,m=l+":"+f;if(d.has(m))continue;if(!b(l))continue;d.add(m);let v=-1!==c&&s[c]?s[c]:"";v||-1===a||-1===o||(v="CF优选 "+(s[a]||"")+"ms "+(s[o]||"")+"MB/s"),v?(u[v]=(u[v]||0)+1,h.push({ip:l,port:f,name:v+"-"+String(u[v]).padStart(2,"0"),...g?{relay:!0}:{}})):h.push({ip:l,port:f,name:"",...g?{relay:!0}:{}})}return ee.set(s,{t:i,ips:h}),ae(l,h),h.slice()}}if(p.includes("<tr")&&p.includes("data-label")){for(const t of p.match(/<tr[\s\S]*?<\/tr>/g)||[]){if(h.length>=e)break;const n={};for(const e of t.match(/<td[^>]*>[\s\S]*?<\/td>/g)||[]){const t=e.match(/data-label="([^"]*)"[^>]*>([\s\S]*?)<\/td>/);t&&(n[t[1]]=t[2].replace(/<[^>]+>/g,"").trim())}const r=(n["优选地址"]||"").match(/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?/);if(!r)continue;const a=r[1],o=r[2]?parseInt(r[2]):443,s=a+":"+o;if(d.has(s))continue;if(!b(a))continue;d.add(s);const i=(n["线路名称"]||n["数据中心"]||"线路").trim();i?(u[i]=(u[i]||0)+1,h.push({ip:a,port:o,name:i+"-"+String(u[i]).padStart(2,"0"),...g?{relay:!0}:{}})):h.push({ip:a,port:o,name:"",...g?{relay:!0}:{}})}return ee.set(s,{t:i,ips:h}),ae(l,h),h.slice()}for(const t of p.split(/\r?\n/)){if(h.length>=e)break;const n=t.match(_r0);if(!n)continue;const r=n[1].replace(/^\[|\]$/g,""),a=n[2]?parseInt(n[2]):443,o=r+":"+a;if(d.has(o))continue;if(!b(r))continue;d.add(o);let s="";const i=t.indexOf("#");if(i>=0)try{s=decodeURIComponent(t.slice(i+1).trim())}catch(e){s=t.slice(i+1).trim()}s?(u[s]=(u[s]||0)+1,h.push({ip:r,port:a,name:s+"-"+String(u[s]).padStart(2,"0"),...g?{relay:!0}:{}})):h.push({ip:r,port:a,name:"",...g?{relay:!0}:{}})}for(const t of p.split(/\r?\n/)){if(h.length>=e)break;const n=t.match(/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?(?:#([^\r\n]*))?/);if(!n){const e=t.trim().match(/^(\*\.)?([a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+)(?::(\d{1,5}))?(?:#([^\r\n]*))?$/i);if(!e||e[1])continue;const n=e[2].toLowerCase(),r=e[3]?parseInt(e[3]):443,a=n+":"+r;if(d.has(a))continue;d.add(a);const o=(e[4]||"").trim();h.push({ip:n,port:r,name:o||n,...g?{relay:!0}:{}});continue}const r=n[1],a=n[2]?parseInt(n[2]):443,o=r+":"+a;if(d.has(o))continue;if(!b(r))continue;d.add(o);const s=(n[3]||"").trim();if(s&&!/[\u4e00-\u9fa5]/.test(s)&&!s.includes("|")){h.push({ip:r,port:a,name:s,...g?{relay:!0}:{}});continue}let i="";if(n[3]){const t=n[3].match(/^\s*[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}/);if(t){const e=t[0].match(/[\u4e00-\u9fa5]{2,5}/);e&&(i=e[0])}else{const t=n[3].split("|").map(t=>t.trim()),e=t.find(t=>/^[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}$/.test(t));if(e){const t=e.match(/[\u4e00-\u9fa5]{2,5}/);t&&(i=t[0])}else{const e=t.find(t=>/^[\u4e00-\u9fa5]{2,5}$/.test(t)&&!/^(地区随机|随机优选|官方优选|优选|CF优选)$/.test(t));if(e)i=e;else{const t=n[3].match(/\b([A-Z]{2})\b/);t&&(i=y[t[1]]||t[1])}}}}i?(u[i]=(u[i]||0)+1,h.push({ip:r,port:a,name:i+"-"+String(u[i]).padStart(2,"0"),...g?{relay:!0}:{}})):h.push({ip:r,port:a,name:"",...g?{relay:!0}:{}})}if(!h.length&&r){const n=(String(t).match(/\/([A-Z]{2})\//)||[])[1]||String(t).replace(/^https?:\/\//,"").split(".")[0];y[n]&&at(o?m:f,e).forEach((t,e)=>h.push({ip:t,port:443,name:y[n]+"-"+String(e+1).padStart(2,"0")}))}return ee.set(s,{t:i,ips:h}),ae(l,h),h.slice()}catch(t){const n=ee.get(s);return n&&n.ips&&n.ips.length?n.ips.slice(0,e):[]}}var n;if(!t.includes("://")&&!/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(t)){const e=t.match(/^(\[?[0-9a-fA-F:]+\]?|\d{1,3}(?:\.\d{1,3}){3}|[a-z0-9.-]+\.[a-z]{2,})(?::(\d{1,5}))?(?:#([^\r\n]*))?$/i);if(!e)return[];const n=e[1].replace(/^\[|\]$/g,""),r=e[2]?parseInt(e[2]):443,o=(e[3]||"").trim(),s=Y(n);if(!s&&!/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(n))return[];if(a&&s&&!v(n))return[];if(o)return[{ip:n,port:r,name:o}];if(s)return[{ip:n,port:r,name:""}]}const s=ee.get(t);if(s&&i-s.t<6e5)return s.ips.slice(0,e).map((e,n)=>({ip:e,port:443,name:t+"-"+(n+1)}));const l=await c(t,"A",1);let p=a?l.filter(v):l;if(o){const e=await c(t,"AAAA",28);p=[...new Set(l.concat(e))].filter(t=>!a||v(t))}return p=p.slice(0,e),p.length?(ee.set(t,{t:i,ips:p}),p.map((e,n)=>({ip:e,port:443,name:t+"-"+(n+1)}))):s&&s.ips&&s.ips.length?s.ips.slice(0,e).map((e,n)=>({ip:e,port:443,name:t+"-"+(n+1)})):[]})),d=[];let u=0;for(;u<n;){let t=!1;for(const e of p){if(u>=n)break;e.length&&(d.push(e.shift()),u++,t=!0)}if(!t)break}return d}async function le(t,e=800,n=null){const r=[],a=new Set,o=t.optimizer&&t.optimizer.subMode||"",s=t.filter&&t.filter.ipType||[],i=1===s.length&&"IPv6"===s[0],l=ve(t),c=i?g:l?[...f,...g]:f,p="custom"===o&&!(t.optimizer&&t.optimizer.subIncludeDefault),d="custom"===o||"random"===o,_FB={f:!!t.freeCpu,b:0,cap:65536,n:120},u=(n,o,s,i)=>{const _b0=r.length;((n,o,s,i)=>{if(r.length>=e||_FB.f&&(_FB.b>=_FB.cap||r.length>=_FB.n))return;if(Y(n)&&!v(n)&&!p&&!i)return;const l=n;if(a.has(l))return;a.add(l);const c=!L.has(Number(o));if(t.tlsOnly&&!c)return;const d=Number(o),u=Qt(s,!!t.enableVless,!!t.enableTrojan,!(!t.enableXhttp||!c));t.enableVless&&r.push(Zt(t,n,d,u.v)),t.enableTrojan&&c&&r.push(te(t,n,c?d:Number(o),u.t)),t.enableXhttp&&c&&r.push(Zt(t,n,d,u.x,{type:_d("eGh0dHA=")}))})(n,Number(o)||443,s,i);if(_FB.f)for(let _k=_b0;_k<r.length;_k++)_FB.b+=r[_k].length};if("random"===o){let a=Math.min(Math.max(parseInt(t.optimizer.subRandomCount)||16,1),Math.min(99,e));if(t.nodeLimit){const n=parseInt(t.nodeLimitCount)||0;n>0&&(a=Math.min(Math.max(a,n),e))}_FB.f&&(a=Math.min(a,_FB.n));const o=(t.enableVless?1:0)+(t.enableTrojan?1:0)+(t.enableXhttp?1:0)||1;let s=0;const i=at(c,3*Math.ceil(a/o));let l=i;n&&(l=[...i.filter(t=>!n.has(t)),...i.filter(t=>n.has(t))]);for(const e of l){if(s>=a)break;const n=Qt("优选IP-"+String(s+1).padStart(2,"0"),!!t.enableVless,!!t.enableTrojan,!!t.enableXhttp);if(t.enableVless&&(r.push(Zt(t,e,443,n.v)),s++),s>=a)break;if(t.enableTrojan&&(r.push(te(t,e,443,n.t)),s++),s>=a)break;t.enableXhttp&&(r.push(Zt(t,e,443,n.x,{type:_d("eGh0dHA=")})),s++)}return r}const h=se(t.preferredDomains).filter(t=>!t.includes("://"));h.forEach((t,e)=>{const n=t.indexOf("#"),r=(n>=0?t.slice(0,n):t).trim(),a=(n>=0?t.slice(n+1):"").trim(),o=z(r,443);o.host.startsWith("*.")||u(o.host,o.port,a||"优选IP-"+String(e+1).padStart(2,"0"))});let m=t.preferredIPs||[];if(l&&!i&&m.length>1){const t=[],e=[];for(const n of m)(String(n.ip).indexOf(":")>=0?e:t).push(n);const n=[],r=Math.max(t.length,e.length);for(let a=0;a<r;a++)a<t.length&&n.push(t[a]),a<e.length&&n.push(e[a]);m=n}if(m.forEach((t,e)=>{u(t.ip,t.port||443,t.name||"优选IP-"+String(e+1).padStart(2,"0"),!0===t.relay||Y(t.ip)&&!v(t.ip))}),!("custom"!==o||t.optimizer&&t.optimizer.subIncludeDefault))return r;h.length||(t.preferredIPs||[]).length||(ot(E.join("\n")).forEach(t=>u(t.ip,t.port||443,t.name||"0")),A.forEach((t,e)=>u(t,443,"域名-"+String(e+1).padStart(2,"0"))));const b=Math.min(Math.max(parseInt(t.optimizer&&t.optimizer.fillCount||0)||0,0),5e3),y=Math.min(b,e)-a.size;if(y>0){const t=n?T.filter(t=>!n.has(t)):T.slice(),a=at(c,3*y);let o=[...t,...n?a.filter(t=>!n.has(t)):a];if(o.length<y&&(o=[...T,...a]),o.length>0)o=o.slice(0,y);let s=0;for(const t of o){if(r.length>=e||_FB.f&&_FB.b>=_FB.cap)break;s++,u(t,443,"优选IP-"+String(s).padStart(3,"0"))}}return r}function ce(t){const e=t.indexOf("@"),n=t.indexOf("?",e),r=n>e&&e>=0?t.slice(e+1,n):t.slice(e+1);if(r.startsWith("[")){const t=r.indexOf("]"),e=t>0?r.slice(1,t):r,n=r.slice(t+1),a=n.startsWith(":")?parseInt(n.slice(1)):443;return{host:e,port:isNaN(a)?443:a}}const a=r.lastIndexOf(":");if(a>0){const t=parseInt(r.slice(a+1));return{host:r.slice(0,a),port:isNaN(t)?443:t}}return{host:r,port:443}}function pe(t,e){const n=t.indexOf("?");if(n<0)return null;const r=t.indexOf("#",n),a=r>n?t.slice(n+1,r):t.slice(n+1);for(const t of a.split("&")){const n=t.indexOf("=");if((n>0?t.slice(0,n):t)===e)return n>0?decodeURIComponent(t.slice(n+1)):""}return null}function de(t,e){const{host:n,port:r}=ce(t),a=n,o=t.indexOf("#");let s=`节点${e+1}`;if(o>=0)try{s=decodeURIComponent(t.slice(o+1))||s}catch(t){}const i=t.indexOf("@");let l="";if(i>=0){const e=t.indexOf("://"),n=e>=0?e+3:0;try{l=decodeURIComponent(t.slice(n,i))}catch(e){l=t.slice(n,i)}}const c=t.startsWith(_d("dHJvamFu")+"://");return{srv:a,prt:r,name:s,user:l,isTrojan:c,tls:c||"tls"===(pe(t,"security")||"tls")}}const ue={HK:["HK","香港"],TW:["TW","台湾"],US:["US","美国"],SG:["SG","新加坡"],JP:["JP","日本"],KR:["KR","韩国"],DE:["DE","德国"]},fe={"移动":["移动","CM","CHINAMOBILE"],"联通":["联通","CU","UNICOM"],"电信":["电信","CT","CHINATELECOM"]},he=["移动","联通","电信"],me=["IPv4","IPv6"];function ge(t,e){if(!e||!e.region&&!e.ipType&&!e.isp)return t;const n=e.region||"all",r=e.ipType||me,a=e.isp||he,o=t.map(t=>{const{host:e}=ce(t);let n="";try{const e=t.indexOf("#");e>=0&&(n=decodeURIComponent(t.slice(e+1)||""))}catch(t){n=""}return{host:e,name:n,up:n.toUpperCase()}}),s=o.some(t=>t.up&&Object.keys(fe).some(e=>(fe[e]||[e]).some(e=>t.up.includes(e.toUpperCase())))),i=(e,n,r)=>{const a=Array.isArray(e)?0===e.length||e.includes("all")?null:e.flatMap(t=>ue[t]||[]):"all"!==e?ue[e]||[]:null,i=r.length>0&&r.length<he.length;return t.filter((t,e)=>{const l=o[e],c=l.host.indexOf(":")>=0;if(!l.name)return!1;if(a&&!a.some(t=>l.up.includes(t.toUpperCase()))&&!/^(优选IP|域名)-\d+/.test(l.name)&&"原生地址"!==l.name)return!1;if(1===n.length){if("IPv4"===n[0]&&c)return!1;if("IPv6"===n[0]&&!c)return!1}return!(i&&s&&!r.some(t=>(fe[t]||[t]).some(t=>l.up.includes(t.toUpperCase()))))})};let l=i(n,r,a);return l.length||(l=i(n,r,he)),l.length||(l=i(n,me,he)),l.length||(l=i("all",me,he)),l}function be(t){try{let e=ce(t).host||"";return"["===e.charAt(0)&&(e=e.slice(1,e.indexOf("]")>0?e.indexOf("]"):void 0)),e.indexOf(":")>=0}catch(t){return!1}}function ve(t){const e=t&&t.filter&&t.filter.ipType||[];if(!e.includes("IPv6"))return!1;if(1===e.length)return!0;const n=t&&t.ipv6Mode||"off";return"tail"===n||"full"===n}function ye(t,e,n){const r=e&&e.ipv6Mode||"off";if(n||"full"===r||"mix"===r||t.length<2)return t;const a=[],o=[];for(const e of t)(be(e)?a:o).push(e);if(!a.length)return t;if("off"===r)return o.length?o:t;const s=Math.max(1,Math.min(a.length,40,Math.floor(.1*o.length)));return o.length?o.concat(a.slice(0,s)):t}const xe=/^(?:优选IP-S\d|内置·保底-|隧道前置-)/;function we(t){try{const e=t.indexOf("#");return!(e<0)&&xe.test(decodeURIComponent(t.slice(e+1)||""))}catch(t){return!1}}function ke(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1)),r=t[e];t[e]=t[n],t[n]=r}return t}function Ie(t){if("boolean"==typeof t||"number"==typeof t)return String(t);const e=String(t);return/^[\w.\-/\u4e00-\u9fa5]+$/.test(e)?e:JSON.stringify(e)}function Pe(t,e){const n=" ".repeat(e);return String(t||"").split("\n").map(t=>n+(t||""))}function Ce(t){const e=String(t||"");if(!e)return"";if(e.indexOf("印度尼西亚")>=0)return"印尼";let n="";for(const t in y){const r=y[t];r.length>n.length&&e.indexOf(r)>=0&&(n=r)}if(n)return n;const r=e.toUpperCase().match(/[A-Z]{2,3}/g)||[];for(const t of r)if(k[t])return k[t];return""}
function _frNode(e){
  try{
    const _raw=String(e.masqueFront||""),_ln=_raw.split(/[\n\r]+/).map(function(x){return x.trim()}).filter(Boolean)[0];
    if(!_ln)return null;
    const _m=/^([A-Za-z0-9]+):\/\/([\s\S]*)$/.exec(_ln);if(!_m)return null;
    const _sc=_m[1].toLowerCase();let _rest=_m[2];
    let _name="前置节点";const _hi=_rest.indexOf("#");
    if(_hi>=0){try{_name=decodeURIComponent(_rest.slice(_hi+1))||_name}catch(x){}_rest=_rest.slice(0,_hi)}
    const _qy={},_qi=_rest.indexOf("?");
    if(_qi>=0){_rest.slice(_qi+1).split("&").forEach(function(kv){const p=kv.split("=");if(!p[0])return;try{_qy[decodeURIComponent(p[0]).toLowerCase()]=decodeURIComponent((p[1]||"").replace(/\+/g," "))}catch(x){}});_rest=_rest.slice(0,_qi)}
    if(("ss"===_sc||_sc===_d("c2hhZG93c29ja3M="))&&_rest.indexOf("@")<0){try{let _b=_rest.replace(/-/g,"+").replace(/_/g,"/");while(_b.length%4)_b+="=";const _legacy=atob(_b);if(_legacy.indexOf("@")>0)_rest=_legacy}catch(x){}}
    const _at=_rest.lastIndexOf("@"),_hp=_at>=0?_rest.slice(_at+1):_rest,_cr=_at>=0?_rest.slice(0,_at):"";
    const _g=/^\[([^\]]+)\]:(\d+)$/.exec(_hp)||/^([^:]+):(\d+)$/.exec(_hp);
    if(!_g)return null;
    const _sv=_g[1],_pt=parseInt(_g[2],10);
    if(!_sv||!(_pt>0&&_pt<65536))return null;
    let _us="",_pw="";
    if(_cr){const c=_cr.indexOf(":");if(c>=0){_us=_cr.slice(0,c);_pw=_cr.slice(c+1)}else{_us=_cr}}
    const _dec=function(v){try{return decodeURIComponent(v)}catch(x){return v}};_us=_dec(_us);_pw=_dec(_pw);
    const _sec=String(_qy[_d("c2VjdXJpdHk=")]||"").toLowerCase(),_tls=("tls"===_sec||_d("cmVhbGl0eQ==")===_sec||_d("dHJvamFu")===_sc||"https"===_sc);
    const _net=String(_qy[_d("dHlwZQ==")]||"tcp").toLowerCase();
    const _udp={};_udp[_d("dWRw")]=!0;
    if(_d("c29ja3M1")===_sc||_d("c29ja3M=")===_sc){const o={name:_name,type:_d("c29ja3M1"),server:_sv,port:_pt};o[_d("dWRw")]=!0;if(_us)o[_d("dXNlcm5hbWU=")]=_us;if(_pw)o[_d("cGFzc3dvcmQ=")]=_pw;return o}
    if("http"===_sc||"https"===_sc){const o={name:_name,type:"http",server:_sv,port:_pt};o[_d("dWRw")]=!0;if(_us)o[_d("dXNlcm5hbWU=")]=_us;if(_pw)o[_d("cGFzc3dvcmQ=")]=_pw;if("https"===_sc)o[_d("dGxz")]=!0;return o}
    if("ss"===_sc||_sc===_d("c2hhZG93c29ja3M=")){
      let _ct="",_p2=_cr;
      if(_cr.indexOf(":")>=0){_ct=_cr.slice(0,_cr.indexOf(":"));_p2=_cr.slice(_cr.indexOf(":")+1)}
      else{try{const b=atob(_cr),i=b.indexOf(":");if(i>=0){_ct=b.slice(0,i);_p2=b.slice(i+1)}}catch(x){}}
      if(!_ct||!_p2)return null;
      let _p3=_p2;try{_p3=decodeURIComponent(_p2)}catch(x){}
      const o={name:_name,type:_d("c2hhZG93c29ja3M="),server:_sv,port:_pt,[_d("Y2lwaGVy")]:_ct,[_d("cGFzc3dvcmQ=")]:_p3};o[_d("dWRw")]=!0;return o
    }
    if(_d("dHJvamFu")===_sc||_sc===_d("dHJvamFu")){
      const o={name:_name,type:_d("dHJvamFu"),server:_sv,port:_pt,password:(_us+(_pw?":"+_pw:"")),skip_:0};
      delete o.skip_;
      const t={};t[_d("dGxz")]=!0;t[_d("c2tpcC1jZXJ0LXZlcmlmeQ==")]=!("false"===String(_qy[_d("YWxsb3dpbnNlY3VyZQ==")]||"")||"0"===String(_qy[_d("YWxsb3dpbnNlY3VyZQ==")]||""));t[_d("c2VydmVybmFtZQ==")]=_qy[_d("c25p")]||_qy[_d("cGVlcg==")]||_qy[_d("aG9zdA==")]||_sv;
      if(_qy[_d("YWxwbg==")])t[_d("YWxwbg==")]=_qy[_d("YWxwbg==")].split(",").map(function(x){return x.trim()}).filter(Boolean);
      Object.assign(o,t);o[_d("dWRw")]=!0;
      o[_d("bmV0d29yaw==")]="ws"===_net?"ws":(_d("Z3JwYw==")===_net?_d("Z3JwYw=="):("http"===_net||"h2"===_net?"http":"tcp"));if("ws"===_net){o[_d("bmV0d29yaw==")]="ws";const w={path:_qy[_d("cGF0aA==")]||"/",headers:{Host:_qy[_d("aG9zdA==")]||_qy[_d("c25p")]||_sv}};o[_d("d3Mtb3B0cw==")]=w}
      else if(_d("Z3JwYw==")===_net){o[_d("bmV0d29yaw==")]=_d("Z3JwYw==");const g={};g[_d("Z3JwYy1zZXJ2aWNlLW5hbWU=")]=_qy[_d("c2VydmljZW5hbWU=")]||_qy[_d("cGF0aA==")]||"";o[_d("Z3JwYy1vcHRz")]=g}
      return o
    }
    if(_d("dmxlc3M=")===_sc||_sc===_d("dmxlc3M=")){
      if(!_us)return null;
      const o={name:_name,type:_d("dmxlc3M="),server:_sv,port:_pt,uuid:_us};o[_d("dWRw")]=!0;
      if(_tls){o[_d("dGxz")]=!0;o[_d("c2tpcC1jZXJ0LXZlcmlmeQ==")]=!("false"===String(_qy[_d("YWxsb3dpbnNlY3VyZQ==")]||"")||"0"===String(_qy[_d("YWxsb3dpbnNlY3VyZQ==")]||""));o[_d("c2VydmVybmFtZQ==")]=_qy[_d("c25p")]||_qy[_d("aG9zdA==")]||_sv;if(_qy[_d("ZnA=")])o[_d("Y2xpZW50LWZpbmdlcnByaW50")]=_qy[_d("ZnA=")];if(_qy[_d("YWxwbg==")])o[_d("YWxwbg==")]=_qy[_d("YWxwbg==")].split(",").map(function(x){return x.trim()}).filter(Boolean);if(_qy[_d("Zmxvdw==")])o[_d("Zmxvdw==")]=_qy[_d("Zmxvdw==")];
        if(_d("cmVhbGl0eQ==")===_sec){const r={};r[_d("cHVibGljLWtleQ==")]=_qy[_d("cGJr")]||"";if(_qy[_d("c2lk")])r[_d("c2hvcnQtaWQ=")]=_qy[_d("c2lk")];o[_d("cmVhbGl0eS1vcHRz")]=r}}
      o[_d("bmV0d29yaw==")]="ws"===_net?"ws":(_d("eGh0dHA=")===_net?_d("eGh0dHA="):(_d("Z3JwYw==")===_net?_d("Z3JwYw=="):("http"===_net||"h2"===_net?"http":"tcp")));if("ws"===_net){o[_d("bmV0d29yaw==")]="ws";const w={path:_qy[_d("cGF0aA==")]||"/",headers:{Host:_qy[_d("aG9zdA==")]||_qy[_d("c25p")]||_sv}};o[_d("d3Mtb3B0cw==")]=w}
      else if(_d("eGh0dHA=")===_net){o[_d("bmV0d29yaw==")]=_d("eGh0dHA=");let _ex={};try{_ex=JSON.parse(_qy[_d("ZXh0cmE=")]||"{}")}catch(x){}const q={path:_qy[_d("cGF0aA==")]||"/",mode:_qy[_d("bW9kZQ==")]||_ex.mode||_d("c3RyZWFtLW9uZQ=="),host:_qy[_d("aG9zdA==")]||_qy[_d("c25p")]||_sv,"x-padding-obfs-mode":void 0===_ex.xPaddingObfsMode||!!_ex.xPaddingObfsMode,"x-padding-method":_ex.xPaddingMethod||"tokenish","x-padding-placement":_ex.xPaddingPlacement||"queryInHeader","x-padding-header":_ex.xPaddingHeader||"","x-padding-key":_ex.xPaddingKey||""};o[_d("eGh0dHAtb3B0cw==")]=q}
      else if(_d("Z3JwYw==")===_net){o[_d("bmV0d29yaw==")]=_d("Z3JwYw==");const g={};g[_d("Z3JwYy1zZXJ2aWNlLW5hbWU=")]=_qy[_d("c2VydmljZW5hbWU=")]||_qy[_d("cGF0aA==")]||"";o[_d("Z3JwYy1vcHRz")]=g}
      return o
    }
    return null;
  }catch(x){return null}
}
function Ee(t,e,n,r,a,o,s,_mx,_frontNode){const i=t.host,l="/"+t.path,c=l+"?ed=2048",p=t.alpn?t.alpn.split(",").map(t=>t.trim()).filter(Boolean):null,d=new Set,u=[],f={},h=String(n||"").toUpperCase(),m=I[h]||h||"",g=String(s||"").toUpperCase(),b=I[g]||g||"",v=String(o||"").trim().toUpperCase(),w="OFF"===v?"":y[v]||b||m,k=e.map(e=>{const{user:n,srv:r,prt:a,name:o,isTrojan:s,tls:h}=de(e,0);let m=o;const g=pe(e,"type")||"ws";let b=Ce(m);if(!b&&w&&(b=w,m=m?w+"·"+m:w+"·优选"),d.has(m)){const t=s?"T":_d("eGh0dHA=")===g?"X":"W";let e=m+"·"+t,n=2;for(;d.has(e);)e=m+"·"+t+n,n++;m=e}if(d.add(m),b){let t=f[b];void 0===t&&(t=u.length,f[b]=t,u.push({name:b,code:x[b]||"R"+t,nodes:[]})),u[t].nodes.push(m)}const v={name:m,server:r,port:a,udp:!0,...h?{tls:!0,[_d("c2tpcC1jZXJ0LXZlcmlmeQ==")]:!0,[_d("c2VydmVybmFtZQ==")]:i,[_d("Y2xpZW50LWZpbmdlcnByaW50")]:"chrome",[_d("YWxwbg==")]:p||["http/1.1"]}:{},...t.ech&&h?{"ech-opts":{enable:!0,"query-server-name":t.echHost||"cloudflare-ech.com"}}:{}};if(s)return{...v,type:_d("dHJvamFu"),password:n,network:"ws",[_d("d3Mtb3B0cw==")]:{path:h?c:l,headers:{Host:i}}};if(_d("eGh0dHA=")===g){let t={};try{t=JSON.parse(pe(e,"extra")||"{}")}catch(t){}return{...v,type:_d("dmxlc3M="),uuid:n,network:_d("eGh0dHA="),[_d("YWxwbg==")]:p||["h2"],[_d("eGh0dHAtb3B0cw==")]:{path:l,mode:_d("c3RyZWFtLW9uZQ=="),host:i,[_d("eC1wYWRkaW5nLW9iZnMtbW9kZQ==")]:void 0===t.xPaddingObfsMode||t.xPaddingObfsMode,"x-padding-method":t.xPaddingMethod||"tokenish","x-padding-placement":t.xPaddingPlacement||"queryInHeader","x-padding-header":t.xPaddingHeader||"","x-padding-key":t.xPaddingKey||""}}}return{...v,type:_d("dmxlc3M="),uuid:n,network:"ws",[_d("d3Mtb3B0cw==")]:{path:h?c:l,headers:{Host:i}}}});k.sort((t,e)=>(443===t.port?0:1)-(443===e.port?0:1));const P="custom"===(t.optimizer&&t.optimizer.subMode||""),C=k.map(t=>t.name),S=t.homeWan&&C.length?"隧道前置":"",A=function(t){if(!t||!t.length)return t;const e=t[0],n=(t,e)=>(t||"")===(e||"");return t.map(t=>(t!==e?(n(t.ca,e.ca)&&(t.caRef="hwca"),n(t.cert,e.cert)&&(t.certRef="hwcert"),n(t.key,e.key)&&(t.keyRef="hwkey")):(t.ca&&(t.caAnchor="hwca"),t.cert&&(t.certAnchor="hwcert"),t.key&&(t.keyAnchor="hwkey")),t))}(function(t,e){if(!t.homeWan)return[];const n=Array.isArray(t.homeWanNodes)&&t.homeWanNodes.length?t.homeWanNodes:[];if(!n.length)return[];const r={};return n.map(t=>{const n="家宽"+String(t.country||"XX").toUpperCase();let a=n,o=2;for(;r[a];)a=n+"-"+o,o++;r[a]=1;const s={name:a,type:"openvpn",server:t.server,port:Number(t.port)||1194,proto:"tcp"===String(t.proto||"udp")?"tcp":"udp",username:"vpn",password:"vpn",ca:t.ca||"",dev:"tun",handshakeTimeout:30,cipher:t.cipher||_d("QUVTLTEyOC1HQ00="),auth:t.auth||"SHA1"};return t.cert&&(s.cert=t.cert),t.key&&(s.key=t.key),t.tlsAuth&&(s["tls-auth"]=t.tlsAuth,s["key-direction"]="1"),t.tlsCrypt&&(s["tls-crypt"]=t.tlsCrypt),e&&(s[_d("ZGlhbGVyUHJveHk=")]=e),s})}(t,S)),T=!(!t.homeWan||P);A.length&&k.push(...A);if(_mx&&_mx.length){const _g=_mx.map(function(x){const o={name:x.name,type:_d("bWFzcXVl"),server:x.host,port:x.port,ip:x.local[0]?String(x.local[0]).split("/")[0]+"/32":"","private-key":x.k,"peer-public-key":x.p,udp:!0,mtu:1280,"remote-dns-resolve":!0,dns:["1.1.1.1"],sni:x.sni,uri:_d("aHR0cHM6Ly9jbG91ZGZsYXJlYWNjZXNzLmNvbQ=="),"congestion-controller":"bbr"};if(x.local[1])o.ipv6=String(x.local[1]).split("/")[0]+"/128";if(x.msnet)o[_d("bmV0d29yaw==")]=x.msnet;x[_d("ZGlhbGVyUHJveHk=")]&&(o[_d("ZGlhbGVyUHJveHk=")]=x[_d("ZGlhbGVyUHJveHk=")]);return o});k.push(..._g);_frontNode&&k.push(_frontNode);u.push({name:x0(_mx[0].name),code:"R"+u.length,nodes:_g.map(function(t){return t.name}),proto:1})}const U=function(t,e){const n="https://www.gstatic.com/generate_204",_nu="https://www.gstatic.com/generate_204";if(!e)return"# ==================== 策略组 ====================\n"+_d("cHJveHktZ3JvdXA=")+"s:\n  - {name: 一键连接, type: select, "+_d("cHJveGllcw==")+": [直接连接]}\n  - {name: 直接连接, type: select, "+_d("cHJveGllcw==")+": [DIRECT]}\n";const r=[];r.push("# ==================== 监听器 ===================="),r.push("listeners:"),r.push("  # "+_d("U2hhZG93c29ja3M=")+"监听器 - 远程连接家庭网络，端口和密码使用时请修改（默认密码请勿用于公网）"),r.push("  - {name: SS-IN,  type: "+_d("c2hhZG93c29ja3M=")+", listen: '::', port: 10000, "+_d("dWRwOg==")+" true, password: Xf3#Lp9WqZ, cipher: "+_d("YWVzLTI1Ni1nY20=")+"}"),r.push("  # Mixed监听器 - 分地区专用端口 玩法：本地客户端或插件，实现分地区访问"),t.slice(0,7).forEach((t,e)=>{r.push("  - {name: MIXED-"+t.code+", type: mixed, port: "+(5e4+e)+", proxy: "+t.name+"节点}")}),r.push("  - {name: MIXED-AL, type: mixed, port: 50007, proxy: 一键连接}"),r.push(""),r.push("# ==================== 策略组 ===================="),r.push(_d("cHJveHktZ3JvdXA=")+"s:");const a=t.map(t=>t.name+"节点"),_native=t.some(function(g){return!!(g&&g.proto)}),_traffic=[];if(_native)t.forEach(function(g){if(!g||!g.proto||!Array.isArray(g.nodes))return;g.nodes.forEach(function(name){if(_traffic.indexOf(name)<0)_traffic.push(name)})});const _trafficYaml=_traffic.map(Ie).join(", ");return r.push("  # 主入口：默认自动选择延迟最低节点，可手动切换各地区 / 全部节点 / 直接连接"),r.push("  - {name: 一键连接, type: select, "+_d("cHJveGllcw==")+": ["+["自动选择","故障转移"].concat(a,["全部节点","直接连接"]).join(", ")+"]}"),r.push("  # 自动选择：隐藏（面板不可手动选择），纯自动优选延时最低节点；故障转移：按序自动切换"),r.push("  - {name: 自动选择, type: "+_d("dXJsLXRlc3Q=")+", "+(_native?_d("cHJveGllcw==")+": ["+_trafficYaml+"]":"include-all: true")+", url: '"+n+"', interval: 200, timeout: 8000, expected-status: '204', lazy: true, hidden: true, "+_d("ZW1wdHktZmFsbGJhY2s=")+": REJECT}"),r.push("  - {name: 故障转移, type: "+_d("ZmFsbGJhY2s=")+", "+_d("cHJveGllcw==")+": ["+a.concat(["全部节点"]).join(", ")+"], url: '"+n+"', interval: 200, timeout: 8000, expected-status: '204', lazy: true, "+_d("ZW1wdHktZmFsbGJhY2s=")+": REJECT}"),t.forEach(t=>{const e=t.name+"节点",a=t.name+"自动",_tn=t.proto?_nu:n,_ti=t.proto?"600":"200";r.push("  # "+t.name+"（"+t.nodes.length+" 节点）：默认选中「"+a+"」=自动优选该地区最快节点，也可手动指定单个节点"),r.push("  - {name: "+e+", type: select, "+_d("cHJveGllcw==")+": ["+a+", "+t.nodes.map(Ie).join(", ")+"]}"),r.push("  - {name: "+a+", type: "+_d("dXJsLXRlc3Q=")+", "+_d("cHJveGllcw==")+": ["+t.nodes.map(Ie).join(", ")+"], url: '"+_tn+"', interval: "+_ti+(t.proto?", timeout: 5000, tolerance: 50, expected-status: '204'":"")+", lazy: true, "+_d("ZW1wdHktZmFsbGJhY2s=")+": REJECT, hidden: true}")}),r.push("  # 全部节点（手动挑选任意节点；首个选项「自动选择」=全部节点中最快）"),r.push(_native?"  - {name: 全部节点, type: select, "+_d("cHJveGllcw==")+": [自动选择"+(_trafficYaml?", "+_trafficYaml:"")+"]}":"  - {name: 全部节点, type: select, include-all: true, "+_d("cHJveGllcw==")+": [自动选择]}"),r.push("  - {name: 直接连接, type: select, "+_d("cHJveGllcw==")+": [DIRECT]}"),r.join("\n")+"\n"}(u,k.length);const _cs=String(t.clashSecret||"").trim()||("cfn-"+wt(String(t.uuid||"")+"|clash").slice(0,20));let E="\n# 监听器与策略组由订阅生成时按实际节点动态输出（见 generate"+_d("Q2xhc2g=")+" / build"+_d("Q2xhc2g=")+"Groups）：\n# 有节点的地区才生成对应分组与监听器，无节点不占位（地区归桶由节点名识别 + 机房落点标注）\n\n# ==================== 核心配置 ====================\nmode: rule\nport: 7890\nsocks-port: 7891\n"+_d("cmVkaXItcG9ydA==")+": 7892\n"+_d("bWl4ZWQtcG9ydA==")+": 7893\n"+_d("dHByb3h5LXBvcnQ=")+": 7895\nipv6: true\n"+_d("YWxsb3ctbGFu")+": true\nunified-delay: false\ntcp-concurrent: true\nlog-level: warning\nbind-address: '*'\nfind-process-mode: 'always'\nkeep-alive-interval: 15\nkeep-alive-idle: 600\n\n# 认证配置（默认凭据请务必修改！）\nauthentication:\n  - "+_d("bWlob21v")+":"+_cs+"\nskip-auth-prefixes:\n  - 192.168.1.0/24\n  - 192.168.31.0/24\n  - 192.168.100.0/24\n  - 127.0.0.1/8\n\n# 实验性功能\nexperimental:\n  quic-go-disable-gso: true\n\n# 管理面板配置\nexternal-ui-url: https://github.com/"+_d("WmVwaHlydXNv")+"/"+_d("emFzaGJvYXJk")+"/releases/latest/download/dist.zip\nexternal-ui-name: "+_d("emFzaGJvYXJk")+"\nexternal-ui: ui\nexternal-controller: 127.0.0.1:9090\nsecret: "+_cs+"    # 自动派生；也可用 CLASH_SECRET 覆盖\n# 允许网页面板跨域访问\nexternal-controller-cors:\n  allow-origins:\n    - \"*\"\n  allow-private-"+_d("bmV0d29yazo=")+" true\n\n# 配置存储\nprofile:\n  store-selected: true\n  store-fake-ip: true\n\n# "+_d("Z2Vvc2l0ZQ==")+" / "+_d("Z2VvaXA=")+" 数据源（"+_d("R0VPU0lURQ==")+" 规则依赖；"+_d("TWV0YUN1YmVY")+" 官方规则库，GitHub release 官方源）\n"+_d("Z2VveC11cmw=")+":\n  "+_d("Z2VvaXA=")+": \"https://github.com/"+_d("TWV0YUN1YmVY")+"/"+_d("bWV0YS1ydWxlcy1kYXQ=")+"/releases/download/latest/"+_d("Z2VvaXA=")+".dat\"\n  "+_d("Z2Vvc2l0ZQ==")+": \"https://github.com/"+_d("TWV0YUN1YmVY")+"/"+_d("bWV0YS1ydWxlcy1kYXQ=")+"/releases/download/latest/"+_d("Z2Vvc2l0ZQ==")+".dat\"\n  mmdb: \"https://github.com/"+_d("TWV0YUN1YmVY")+"/"+_d("bWV0YS1ydWxlcy1kYXQ=")+"/releases/download/latest/country.mmdb\"\n\n# 流量嗅探\n"+_d("c25pZmZlcg==")+":\n  enable: true\n  force-dns-mapping: true   # 强制 DNS 映射，提高分流准确度\n  parse-pure-ip: true       # 解析纯 IP 连接\n  override-destination: true\n  sniff:\n    HTTP:\n      ports: [80, 8080-8880]\n    "+_d("VExTOg==")+"\n      ports: [443, 8443]\n    QUIC:\n      ports: [443, 8443]\n  skip-domain:\n    - \"+.push.apple.com\"\n\n# TUN模式配置\ntun:\n  enable: false\n  stack: mixed\n  mtu: 1480\n  "+_d("ZG5zLWhpamFjaw==")+":\n    - \"any:53\"\n    - \"tcp://any:53\"\n  udp-timeout: 300\n  auto-route: true\n  strict-route: true\n  auto-redirect: true\n  auto-detect-interface: true\n  # 提示：系统级防泄露的最强手段是开启 TUN（自动劫持全部 DNS 流量）；\n  # 不开 TUN 时，请把系统 / LAN 设备的 DNS 指向 127.0.0.1:53（本机）或本机局域网 IP:53。\n\nhosts:\n  miwifi.com: 192.168.31.2\n  \"epdg.epc.mnc010.mcc234.pub.3gppnetwork.org\": [87.194.8.8, 87.194.88.8, 87.194.89.8, 87.194.9.8]\n  services.googleapis.cn: services.googleapis.com\n  cn.bing.com: www4.bing.com\n\n# ==================== DNS 配置 ====================\n# 防泄露要点：\n#   1) respect-rules: true：DNS 服务器连接遵循路由规则（国外 DoH 走隧道、国内 DoH 直连），\n#      解析行为与规则分流一致，避免“规则走出口、解析却直连”的泄露。\n#   2) 默认 nameserver 用国内 DoH；只有“将走出口”的规则集才用国外 DoH，\n#      且其域名在 rules 中显式固定走出口。\n#   3) fake-ip-filter 补齐系统连通性检测 / 时间同步 / 运营商登录等域名，防止系统误判断网而回退运营商 DNS。\ndns:\n  enable: true\n  listen: 0.0.0.0:53        # 本机 / LAN 设备可把 DNS 指向此地址，避免走运营商 DNS\n  ipv6: true\n  prefer-h3: false          # respect-rules 下官方不推荐 DoH3；且 QUIC 已被规则拦截\n  cache-algorithm: arc      # 性能更优的 ARC 缓存算法\n  cache-size: 4096\n  enhanced-mode: fake-ip\n  fake-ip-range: 198.18.0.1/16\n  fake-ip-filter:\n    - \"+.lan\"\n    - \"+.local\"\n    - \"+.localhost\"\n    - \"+.home.arpa\"\n    - \"+.internal\"\n    # 系统连通性检测（防止 fake-ip 导致“无网络”判断，回退 ISP DNS 造成泄露）\n    - \"+.msft"+_d("Y29ubmVjdA==")+"test.com\"\n    - \"+.msftncsi.com\"          # 通配已覆盖 dns.msftncsi.com\n    - \"captive.apple.com\"\n    - \""+_d("Y29ubmVjdA==")+"ivitycheck.gstatic.com\"\n    - \"detectportal.firefox.com\"\n    # 时间同步\n    - \"time.nist.gov\"\n    - \"+.pool.ntp.org\"\n    - \"time.*.com\"              # 通配已覆盖 time.windows.com\n    - \"ntp.*.com\"               # 通配已覆盖 ntp.ubuntu.com\n    # 运营商 Wi-Fi 登录页\n    - \"+.cmpassport.com\"\n    - \"id6.me\"\n    - \"open.e.189.cn\"\n    - \"mdn.open.wo.cn\"\n    - \"opencloud.wostore.cn\"\n    - \"auth.wosms.cn\"\n    - \"+.10099.com.cn\"\n    # 原配置保留项\n    - \"+.market.xiaomi.com\"\n    - \"+.pub.3gppnetwork.org\"\n    - \"+.push.apple.com\"\n    - \"+.bing.com\"\n    - \"+.miwifi.com\"\n    - \"+.docker.io\"\n    # 国内应用登录（+.qq.com 已覆盖 localhost.ptlogin2.qq.com）\n    - \"+.qq.com\"\n    # 直连 / 国内类规则集：返回真实 IP\n    - "+_d("cnVsZS1zZXQ=")+":Direct\n    - "+_d("cnVsZS1zZXQ=")+":Private\n    - "+_d("cnVsZS1zZXQ=")+":China\n    - "+_d("Z2Vvc2l0ZQ==")+":cn                # 国内域名返回真实 IP（"+_d("Z2Vvc2l0ZQ==")+" 库兜底，防 fake-ip 干扰国内应用）\n  use-hosts: true\n  respect-rules: true\n  # 引导用 DNS（解析 DoH/DoT 服务器自身的域名），必须是 IP\n  default-nameserver:\n    - 223.5.5.5\n    - 119.29.29.29\n  # 默认解析：未命中 "+_d("bmFtZXNlcnZlci1wb2xpY3k=")+" 的域名（国内 DoH，直连）\n  nameserver:\n    - \"https://dns.alidns.com/dns-query\"\n    - \"https://doh.pub/dns-query\"\n  # 直连出口的解析\n  "+_d("ZGlyZWN0LW5hbWVzZXJ2ZXI=")+":\n    - \"https://dns.alidns.com/dns-query\"\n    - \"https://doh.pub/dns-query\"\n  # 解析节点域名（防套娃 / 防循环，用国内直连可达的 DoH）\n  "+_d("cHJveHktc2VydmVyLW5hbWVzZXJ2ZXI=")+":\n    - \"https://dns.alidns.com/dns-query\"\n    - \"https://doh.pub/dns-query\"\n  "+_d("bmFtZXNlcnZlci1wb2xpY3k=")+":\n    # 广告域名直接返回空应答\n    \""+_d("cnVsZS1zZXQ=")+":Advertising,"+_d("QVdBdmVudWU=")+"Ads\": rcode://success\n    # 直连类：国内 DoH（微软已并入直连，微软域名走国内解析后直连）\n    \""+_d("cnVsZS1zZXQ=")+":Direct,Private,China,Microsoft\":\n      - \"https://dns.alidns.com/dns-query\"\n      - \"https://doh.pub/dns-query\"\n    # 走出口类：国外 DoH（连接本身经隧道，不直连暴露查询）\n    \""+_d("cnVsZS1zZXQ=")+":AI,Telegram,Twitter,SocialMedia,Netflix,"+_d("WW91VHViZQ==")+",Spotify,TikTok,disney,Google,Proxy\":\n      - \"https://dns.google/dns-query\"\n      - \"https://cloudflare-dns.com/dns-query\"\n\n__"+_d("Q0xBU0g=")+"_GROUPS__\n\n# ==================== 规则路由 ====================\nrules:\n  # 广告拦截（常用：直接拒绝；如需临时放行可改为一键连接）\n  - "+_d("UlVMRS1TRVQ=")+",Tracking,REJECT\n  - "+_d("UlVMRS1TRVQ=")+","+_d("QVdBdmVudWU=")+"Ads,REJECT\n  - "+_d("UlVMRS1TRVQ=")+",Advertising,REJECT\n  - "+_d("R0VPU0lURQ==")+",category-ads-all,REJECT        # "+_d("Z2Vvc2l0ZQ==")+" 广告分类兜底（"+_d("djJyYXk=")+" 标准库，覆盖面广）\n\n  # DNS 服务器域名：解析通道固定，避免 DNS 流量走错路径（防泄露关键）\n  - DOMAIN-SUFFIX,alidns.com,直接连接\n  - DOMAIN-SUFFIX,doh.pub,直接连接\n  - DOMAIN,dns.google,一键连接\n  - DOMAIN,cloudflare-dns.com,一键连接\n\n  # 大陆直连优先（置于国外服务规则之前：大陆应用一律直连，不被国外服务规则集抢先命中）\n  - "+_d("UlVMRS1TRVQ=")+",Private,直接连接\n  - "+_d("UlVMRS1TRVQ=")+",Direct,直接连接\n  - "+_d("UlVMRS1TRVQ=")+",Download,直接连接\n  - "+_d("UlVMRS1TRVQ=")+",AppleCN,直接连接\n  - "+_d("UlVMRS1TRVQ=")+",Microsoft,直接连接        # 微软全家桶直连（Office / OneDrive / Windows 更新 / Teams / Xbox 等）\n  - "+_d("UlVMRS1TRVQ=")+",China,直接连接             # 国内域名直连\n  - "+_d("R0VPU0lURQ==")+",CN,直接连接                  # "+_d("Z2Vvc2l0ZQ==")+" 国内域名兜底（覆盖规则集未收录的国内域名，先于 "+_d("R0VPSVA=")+" 命中）\n  # 阻止 QUIC 走出口（强制回退 TCP，避免 QUIC 绕过出口 / 被干扰）。\n  # 放在直连规则之后：直连 QUIC（大陆 / 微软 / 苹果）不受影响。如需 Telegram 语音等 UDP，可删除此行。\n  - AND,((DST-PORT,443),(NETWORK,UDP)),REJECT\n\n  # 常用国外服务（统一走一键连接）\n  - "+_d("UlVMRS1TRVQ=")+",AI,一键连接\n  - "+_d("UlVMRS1TRVQ=")+",Telegram,一键连接\n  - "+_d("UlVMRS1TRVQ=")+",Twitter,一键连接\n  - "+_d("UlVMRS1TRVQ=")+",SocialMedia,一键连接\n  - "+_d("UlVMRS1TRVQ=")+",Netflix,一键连接\n  - "+_d("UlVMRS1TRVQ=")+","+_d("WW91VHViZQ==")+",一键连接\n  - "+_d("UlVMRS1TRVQ=")+",Spotify,一键连接\n  - "+_d("UlVMRS1TRVQ=")+",TikTok,一键连接\n  - "+_d("UlVMRS1TRVQ=")+",disney,一键连接\n  - "+_d("UlVMRS1TRVQ=")+",Google,一键连接\n  - "+_d("UlVMRS1TRVQ=")+",github,一键连接\n  - "+_d("UlVMRS1TRVQ=")+",Proxy,一键连接\n\n  # IP规则\n  - "+_d("UlVMRS1TRVQ=")+",PrivateIP,直接连接,no-resolve\n  - "+_d("UlVMRS1TRVQ=")+",TelegramIP,一键连接,no-resolve\n  - "+_d("UlVMRS1TRVQ=")+","+_d("UHJveHlJUA==")+",一键连接,no-resolve\n  - "+_d("UlVMRS1TRVQ=")+",ChinaIP,直接连接,no-resolve\n\n  # 大陆 IP 兜底直连：覆盖规则集未收录的域名 / 纯 IP 连接的大陆应用（"+_d("R0VPSVA=")+" 库覆盖面更全）\n  - "+_d("R0VPSVA=")+",CN,直接连接,no-resolve\n\n  # 兜底规则：其余（国外）走一键连接\n  - MATCH,一键连接\n\n# ==================== 规则集 ====================\n# 规则集行为模板\nBehaviorDN: &BehaviorDN {type: http, behavior: domain, format: mrs, interval: 86400}\nBehaviorDY: &BehaviorDY {type: http, behavior: domain, format: yaml, interval: 86400}\nBehaviorIP: &BehaviorIP {type: http, behavior: ipcidr, format: mrs, interval: 86400}\nClassicalYaml: &ClassicalYaml {type: http, behavior: classical, interval: 3600, format: yaml, proxy: DIRECT}\nBehaviorCL: &BehaviorCL {type: http, behavior: classical, interval: 86400, format: yaml, proxy: DIRECT}   # 经典规则集（"+_d("YmxhY2ttYXRyaXg3")+" 等，DOMAIN/DOMAIN-SUFFIX/DOMAIN-KEYWORD/PROCESS-NAME）\n\n# 规则提供者（仅保留常用）\n# ★ 同域代下：url 指向 __CRULES__（生成时替换为 https://<当前订阅域名>/crules）——\n#   客户端导入/更新零外部直连（不开梯子也能完成导入）；上游仓库资源由 Worker 服务端拉取，\n#   KV 缓存 + 进程内缓存，客户端不再每次直连外站下载（见 serveCrule / RULE_SOURCES）\n"+_d("cnVsZS1wcm92aWRlcg==")+"s:\n  # 广告\n  Tracking:       {<<: *BehaviorDN, url: __CRULES__/Tracking.mrs}\n  Advertising:    {<<: *BehaviorDN, url: __CRULES__/Advertising.mrs}\n  "+_d("QVdBdmVudWU=")+"Ads:    {<<: *BehaviorDY, url: __CRULES__/"+_d("QVdBdmVudWU=")+"Ads.yaml}\n  # 直连 / 国内\n  Direct:         {<<: *BehaviorDN, url: __CRULES__/Direct.mrs}\n  Private:        {<<: *BehaviorDN, url: __CRULES__/Private.mrs}\n  Download:       {<<: *BehaviorDN, url: __CRULES__/Download.mrs}\n  AppleCN:        {<<: *BehaviorDN, url: __CRULES__/AppleCN.mrs}\n  China:          {<<: *BehaviorCL, url: __CRULES__/China.yaml}   # 大陆直连全量：ChinaMaxNoIP（11万+ 域名，含大陆可达国际服务），每日更新\n  # 常用国外服务\n  AI:             {<<: *BehaviorDN, url: __CRULES__/AI.mrs}\n  Telegram:       {<<: *BehaviorDN, url: __CRULES__/Telegram.mrs}\n  Twitter:        {<<: *BehaviorDN, url: __CRULES__/Twitter.mrs}\n  SocialMedia:    {<<: *BehaviorDN, url: __CRULES__/SocialMedia.mrs}\n  Netflix:        {<<: *BehaviorDN, url: __CRULES__/Netflix.mrs}\n  "+_d("WW91VHViZQ==")+":        {<<: *BehaviorDN, url: __CRULES__/"+_d("WW91VHViZQ==")+".mrs}\n  Google:         {<<: *BehaviorDN, url: __CRULES__/Google.mrs}\n  Microsoft:      {<<: *BehaviorCL, url: __CRULES__/Microsoft.yaml}   # 微软全家桶全量："+_d("YmxhY2ttYXRyaXg3")+"（Office/OneDrive/Xbox/Teams/Skype/Bing/Azure 等）\n  Proxy:          {<<: *BehaviorDN, url: __CRULES__/Proxy.mrs}\n  # 媒体（"+_d("RHVzdGluV2lu")+"）\n  Spotify:        {<<: *BehaviorDN, url: __CRULES__/Spotify.mrs}\n  TikTok:         {<<: *BehaviorDN, url: __CRULES__/TikTok.mrs}\n  disney:         {<<: *BehaviorDN, url: __CRULES__/disney.mrs}\n  # GitHub\n  github:          {<<: *ClassicalYaml, url: __CRULES__/github.yaml}\n  # IP规则\n  PrivateIP:      {<<: *BehaviorIP, url: __CRULES__/PrivateIP.mrs}\n  TelegramIP:     {<<: *BehaviorIP, url: __CRULES__/TelegramIP.mrs}\n  "+_d("UHJveHlJUA==")+":        {<<: *BehaviorIP, url: __CRULES__/"+_d("UHJveHlJUA==")+".mrs}\n  ChinaIP:        {<<: *BehaviorIP, url: __CRULES__/ChinaIP.mrs}\n\n# ==================== EOF ====================\n\n";E=E.replace("__"+_d("Q0xBU0g=")+"_GROUPS__",U);r&&(E=E.replace(/__CRULES__/g,r)),E=function(t,e,n,r,w){if(!e.length&&!(w&&w.length))return t;let c=t;if(e.length){const a=e.map(t=>t.name),o=a.slice().sort((t,e)=>t<e?-1:t>e?1:0),s=r&&r.length?`  # 家宽隧道前置：CF 优选节点自动测活，家宽 openvpn 经此拨号（${_d("ZGlhbGVy")}-proxy）\n  - {name: 隧道前置, type: ${_d("dXJsLXRlc3Q=")}, ${_d("cHJveGllcw==")}: [${r.map(Ie).join(", ")}], url: 'https://www.gstatic.com/generate_204', interval: 300, lazy: true, hidden: true, ${_d("ZW1wdHktZmFsbGJhY2s=")}: REJECT}\n`:"",i=`  # 家宽模式：自动测活（${_d("dXJsLXRlc3Q=")} 自动选择延迟最低家宽节点）\n  - {name: 家宽自动, type: ${_d("dXJsLXRlc3Q=")}, ${_d("cHJveGllcw==")}: [${a.map(Ie).join(", ")}], url: 'https://www.gstatic.com/generate_204', interval: 600, lazy: true, hidden: true, ${_d("ZW1wdHktZmFsbGJhY2s=")}: REJECT}\n`,l=`  # 家宽模式：VPN Gate OpenVPN 出口（多台家宽节点自动测活，经 ${_d("ZGlhbGVy")}-proxy 隧道拨号）\n  - {name: 家宽出口, type: select, ${_d("cHJveGllcw==")}: [家宽自动, ${o.map(Ie).join(", ")}, 直接连接]}\n`;c=c.replace("# ==================== 规则路由 ====================",s+i+l+"# ==================== 规则路由 ===================="),c=c.replace("  - MATCH,一键连接","  # 家宽模式：VPN Gate 相关流量走家宽出口（OpenVPN 经 CF 隧道）\n  - DOMAIN-SUFFIX,vpngate.net,家宽出口\n"+(n?"  - MATCH,家宽出口":"  - MATCH,一键连接"))}return _smartGroups(c,(w&&w.length?w:e).map(function(x){return x.name}))}(E,A,T,C,_mx);{const _sd=String(i||"").toLowerCase(),_se=/^[a-z0-9]([a-z0-9.-]{0,251}[a-z0-9])?$/.test(_sd)?"  - DOMAIN,"+_sd+",DIRECT\n":"";E=E.replace("# ==================== 规则路由 ====================\nrules:\n","# ==================== 规则路由 ====================\nrules:\n  # 本订阅域名必须直连：客户端（"+_d("Q2xhc2g=")+" Verge 等）拉取/更新订阅走的是系统代理（=本 "+_d("Q2xhc2g=")+" 自身），\n  # 规则里若没有 DIRECT 放行，请求会被送进代理节点 → 自指循环 → TLS 握手被断（tls handshake eof）→ 导入/更新失败\n"+_se+"  - DOMAIN-SUFFIX,pages.dev,DIRECT\n  - DOMAIN-SUFFIX,workers.dev,DIRECT\n")}const $=String(a||"").toUpperCase(),L=y[$]||"";return`# ${__B} 订阅 v${VERSION} · 机房 ${h||"未知"}${m?"("+m+")":""}${g&&g!==h?" · 实测 "+g+(b?"("+b+")":""):""}${$?" · 访客 "+$+(L?"("+L+")":""):""} · 节点 ${k.length} 个\ntest-url: 'https://www.gstatic.com/generate_204'\n${_d("cHJveGllcw==")}:\n${k.map(t=>function(t){const e=[];if(e.push("  - name: "+Ie(t.name)),e.push("    type: "+t.type),e.push("    server: "+Ie(t.server)),e.push("    port: "+t.port),"openvpn"===t.type)return e.push("    proto: "+Ie(t.proto||"udp")),e.push("    "+_d("dWRwOg==")+" "+("tcp"===t.proto?"false":"true")),e.push("    username: "+Ie(t.username||"vpn")),e.push("    password: "+Ie(t.password||"vpn")),t.caRef?e.push("    ca: *"+t.caRef):t.ca&&(e.push(t.caAnchor?"    ca: &"+t.caAnchor+" |":"    ca: |"),e.push(...Pe(t.ca,6))),t.certRef?e.push("    cert: *"+t.certRef):t.cert&&(e.push(t.certAnchor?"    cert: &"+t.certAnchor+" |":"    cert: |"),e.push(...Pe(t.cert,6))),t.keyRef?e.push("    key: *"+t.keyRef):t.key&&(e.push(t.keyAnchor?"    key: &"+t.keyAnchor+" |":"    key: |"),e.push(...Pe(t.key,6))),t["tls-auth"]&&(e.push("    tls-auth: |"),e.push(...Pe(t["tls-auth"],6)),e.push("    key-direction: "+Ie(t["key-direction"]||"1"))),t["tls-crypt"]&&(e.push("    tls-crypt: |"),e.push(...Pe(t["tls-crypt"],6))),e.push("    dev: tun"),e.push("    cipher: "+Ie(t.cipher||_d("QUVTLTEyOC1HQ00="))),e.push("    auth: "+Ie(t.auth||"SHA1")),t.handshakeTimeout&&e.push("    handshake-timeout: "+t.handshakeTimeout),t[_d("ZGlhbGVyUHJveHk=")]&&e.push("    "+_d("ZGlhbGVy")+"-proxy: "+Ie(t[_d("ZGlhbGVyUHJveHk=")])),e.join("\n");if(_d("bWFzcXVl")===t.type){if(t.ip)e.push("    ip: "+Ie(t.ip));if(t.ipv6)e.push("    ipv6: "+Ie(t.ipv6));e.push("    private-key: "+Ie(t["private-key"]||""));e.push("    public-key: "+Ie(t["peer-public-key"]||""));e.push("    "+_d("dWRwOg==")+" true");e.push("    mtu: "+(t.mtu||1280));if(t[_d("ZGlhbGVyUHJveHk=")])e.push("    "+_d("ZGlhbGVy")+"-proxy: "+Ie(t[_d("ZGlhbGVyUHJveHk=")]));if(t.sni)e.push("    sni: "+Ie(t.sni));if(t["remote-dns-resolve"])e.push("    remote-dns-resolve: true");if(t.dns&&t.dns.length)e.push("    dns: ["+t.dns.join(", ")+"]");if(t.uri)e.push("    "+_d("dXJp")+": "+t.uri);if(t["congestion-controller"])e.push("    "+_d("Y29uZ2VzdGlvbi1jb250cm9sbGVy")+": "+t["congestion-controller"]);if(t.network)e.push("    "+_d("bmV0d29yaw==")+": "+t.network);return e.join("\n")}if(t.type===_d("c2hhZG93c29ja3M=")||t.type===_d("c29ja3M1")||"http"===t.type){if(t.cipher)e.push("    cipher: "+Ie(t.cipher));if(t.username)e.push("    username: "+Ie(t.username));if(t.password)e.push("    password: "+Ie(t.password));if(t.tls)e.push("    "+_d("dGxzOg==")+" true");e.push("    "+_d("dWRwOg==")+" true");return e.join("\n")}if(_d("dmxlc3M=")===t.type?e.push("    uuid: "+Ie(t.uuid)):e.push("    password: "+Ie(t.password)),e.push("    "+_d("bmV0d29yazo=")+" "+t.network),e.push("    "+_d("dWRwOg==")+" true"),t.tls&&(e.push("    "+_d("dGxzOg==")+" true"),e.push("    "+_d("c2tpcC1jZXJ0LXZlcmlmeQ==")+": true"),e.push(t.alpn&&t.alpn.length?"    "+_d("YWxwbg==")+": ["+t.alpn.join(", ")+"]":_d("eGh0dHA=")===t.network?"    "+_d("YWxwbg==")+": [h2]":"    "+_d("YWxwbg==")+": [http/1.1]"),e.push("    "+_d("c2VydmVybmFtZQ==")+": "+Ie(t.servername)),_d("dHJvamFu")===t.type&&e.push("    sni: "+Ie(t.servername)),e.push("    "+_d("Y2xpZW50LWZpbmdlcnByaW50")+": chrome"),t[_d("Zmxvdw==")]&&e.push("    "+_d("Zmxvdw==")+": "+Ie(t[_d("Zmxvdw==")])),t[_d("cmVhbGl0eS1vcHRz")]&&(e.push("    "+_d("cmVhbGl0eS1vcHRz")+":"),e.push("      "+_d("cHVibGljLWtleQ==")+": "+Ie(t[_d("cmVhbGl0eS1vcHRz")][_d("cHVibGljLWtleQ==")]||"")),t[_d("cmVhbGl0eS1vcHRz")][_d("c2hvcnQtaWQ=")]&&e.push("      "+_d("c2hvcnQtaWQ=")+": "+Ie(t[_d("cmVhbGl0eS1vcHRz")][_d("c2hvcnQtaWQ=")]))),t["ech-opts"]&&(e.push("    ech-opts:"),e.push("      enable: "+Ie(t["ech-opts"].enable)),e.push("      query-server-name: "+Ie(t["ech-opts"]["query-server-name"])))),"ws"===t.network)e.push("    "+_d("d3Mtb3B0cw==")+":"),e.push("      path: "+Ie(t[_d("d3Mtb3B0cw==")].path)),e.push("      headers:"),e.push("        Host: "+Ie(t[_d("d3Mtb3B0cw==")].headers.Host));else if(_d("eGh0dHA=")===t.network){const n=t[_d("eGh0dHA=")+"-opts"];e.push("    "+_d("eGh0dHA=")+"-opts:"),e.push("      path: "+Ie(n.path)),e.push("      mode: "+Ie(n.mode)),e.push("      host: "+Ie(n.host)),e.push("      x-padding-"+_d("b2Jmcw==")+"-mode: "+Ie(n["x-padding-"+_d("b2Jmcw==")+"-mode"])),e.push("      x-padding-method: "+Ie(n["x-padding-method"])),e.push("      x-padding-placement: "+Ie(n["x-padding-placement"])),e.push("      x-padding-header: "+Ie(n["x-padding-header"])),e.push("      x-padding-key: "+Ie(n["x-padding-key"]))}return e.join("\n")}(t)).join("\n")}\n${E}\n`}function $e(t,e){const n=t.host,r="/"+t.path,a=[];for(const t of e)t.startsWith(_d("dHJvamFu")+"://")&&t.indexOf(_d("c2VjdXJpdHk9")+"none")<0?a.push(t):t.startsWith(_d("dmxlc3M=")+"://")&&t.indexOf("type="+_d("eGh0dHA="))<0&&t.indexOf(_d("c2VjdXJpdHk9")+"none")<0&&a.push(t.replace(_r1,_d("dHJvamFu")+"://").replace(_d("ZW5jcnlwdGlvbj0=")+"none&",""));const o=a.map((t,e)=>{const{user:a,srv:o,prt:s,name:i}=de(t,e);return`${i} = ${_d("dHJvamFu")}, ${o}, ${s}, password=${a}, ws=true, ws-path=${r}, ws-headers=Host:${n}, tls=true, ${_d("c2tpcC1jZXJ0LXZlcmlmeQ==")}=true, sni=${n}`});return`#!MANAGED-CONFIG\n[General]\nloglevel = notify\ndns-server = 223.5.5.5, 119.29.29.29\n\n[Proxy]\n${o.join("\n")}\n\n[Proxy Group]\n🚀 节点选择 = select, ${o.map(t=>t.split(" = ")[0]).join(", ")}\n🌐 全球直连 = select, DIRECT\n🐟 漏网之鱼 = select, 🚀 节点选择\n\n[Rule]\n${_d("R0VPSVA=")},CN,DIRECT\nFINAL,🐟 漏网之鱼\n`}function Le(t,e){const n=t.host,r="/"+t.path,a=t.alpn?t.alpn.split(",").map(t=>t.trim()).filter(Boolean):null,o=new Set,s=e.map((t,e)=>{const{user:s,srv:i,prt:l,name:c,isTrojan:p,tls:d}=de(t,e),u=pe(t,"type")||"ws";let f=c;if(o.has(f)){const t=p?"T":_d("eGh0dHA=")===u?"X":"W";let e=f+"·"+t,n=2;for(;o.has(e);)e=f+"·"+t+n,n++;f=e}o.add(f);const h=d?_d("eGh0dHA=")===u?{enabled:!0,server_name:n,insecure:!0,[_d("YWxwbg==")]:a||["h2"]}:{enabled:!0,server_name:n,insecure:!0,[_d("YWxwbg==")]:a||["http/1.1"],utls:{enabled:!0,[_d("ZmluZ2VycHJpbnQ=")]:"chrome"}}:{enabled:!1},m=_d("eGh0dHA=")===u?{type:_d("eGh0dHA="),mode:_d("c3RyZWFtLW9uZQ=="),path:r}:d?{type:"ws",path:r,max_early_data:2048,early_data_header_name:"Sec-WebSocket-Protocol",headers:{Host:n}}:{type:"ws",path:r,headers:{Host:n}};return p?{type:_d("dHJvamFu"),tag:f,server:i,server_port:l,password:s,tls:h,transport:m}:{type:_d("dmxlc3M="),tag:f,server:i,server_port:l,uuid:s,tls:h,transport:m}}),i=s.map(t=>t.tag),l=[[_d("Z2Vvc2l0ZQ==")+"-cn","🎯 全球直连"],[_d("Z2Vvc2l0ZQ==")+"-google","🌐 谷歌服务"],[_d("Z2Vvc2l0ZQ==")+"-apple","🍎 苹果服务"],[_d("Z2Vvc2l0ZQ==")+"-microsoft","Ⓜ️ 微软服务"],[_d("Z2Vvc2l0ZQ==")+"-openai","🤖 OpenAI"],[_d("Z2Vvc2l0ZQ==")+"-spotify","🌍 国外媒体"],[_d("Z2Vvc2l0ZQ==")+"-"+_d("eW91dHViZQ=="),"🌍 国外媒体"],[_d("Z2Vvc2l0ZQ==")+"-netflix","🌍 国外媒体"],[_d("Z2Vvc2l0ZQ==")+"-disney","🌍 国外媒体"],[_d("Z2Vvc2l0ZQ==")+"-twitter","🌍 国外媒体"],[_d("Z2Vvc2l0ZQ==")+"-telegram","🌍 国外媒体"],[_d("Z2Vvc2l0ZQ==")+"-github","🌍 国外媒体"],[_d("Z2Vvc2l0ZQ==")+"-category-ads-all","block"]],c={log:{level:"info"},dns:{servers:[{tag:"dns-remote",type:"https",server:"1.1.1.1"},{tag:"dns-direct",type:"udp",server:"223.5.5.5"},{tag:"dns-fakeip",type:"fakeip",inet4_range:"198.18.0.0/15"}],rules:[{domain_suffix:["githubusercontent.com","github.com","jsdelivr.net"],action:"route",server:"dns-direct"},{rule_set:_d("Z2Vvc2l0ZQ==")+"-cn",action:"route",server:"dns-direct"},{action:"route",server:"dns-fakeip"}],final:"dns-remote",strategy:"ipv4_only"},inbounds:[{type:"mixed",tag:"mixed-in",listen:"127.0.0.1",listen_port:2080},{type:"tun",tag:"tun-in",interface_name:"tun0",address:["172.19.0.1/30"],mtu:9e3,auto_route:!0,strict_route:!0}],[_d("b3V0Ym91bmRz")]:[...s,{type:"direct",tag:"direct"},{type:"block",tag:"block"},{type:"selector",tag:"🚀 节点选择",[_d("b3V0Ym91bmRz")]:i},{type:"selector",tag:"🎯 全球直连",[_d("b3V0Ym91bmRz")]:["direct"]},{type:"selector",tag:"🐟 漏网之鱼",[_d("b3V0Ym91bmRz")]:["🚀 节点选择","🎯 全球直连"]},{type:"selector",tag:"🌍 国外媒体",[_d("b3V0Ym91bmRz")]:["🚀 节点选择"]},{type:"selector",tag:"🌐 谷歌服务",[_d("b3V0Ym91bmRz")]:["🚀 节点选择"]},{type:"selector",tag:"🤖 OpenAI",[_d("b3V0Ym91bmRz")]:["🚀 节点选择"]},{type:"selector",tag:"🍎 苹果服务",[_d("b3V0Ym91bmRz")]:["🎯 全球直连"]},{type:"selector",tag:"Ⓜ️ 微软服务",[_d("b3V0Ym91bmRz")]:["🎯 全球直连"]}],route:{rules:[{action:"sniff"},{protocol:"dns",action:"hijack-dns"},{ip_is_private:!0,[_d("b3V0Ym91bmQ=")]:"direct"},...l.map(([t,e])=>({rule_set:[t],[_d("b3V0Ym91bmQ=")]:e})),{rule_set:_d("Z2VvaXA=")+"-cn",[_d("b3V0Ym91bmQ=")]:"direct"},{ip_is_private:!0,action:"reject"}],rule_set:[...l.map(([t])=>{const e=t.replace(_d("Z2Vvc2l0ZQ==")+"-",_d("Z2Vvc2l0ZQ==")+"/");return{type:"remote",tag:t,format:"binary",url:"https://cdn.jsdelivr.net/gh/"+_d("TWV0YUN1YmVY")+"/"+_d("bWV0YS1ydWxlcy1kYXQ=")+"@sing/geo/"+e+".srs",download_detour:"direct"}}),{type:"remote",tag:_d("Z2VvaXA=")+"-cn",format:"binary",url:"https://cdn.jsdelivr.net/gh/"+_d("TWV0YUN1YmVY")+"/"+_d("bWV0YS1ydWxlcy1kYXQ=")+"@sing/geo/"+_d("Z2VvaXA=")+"/cn.srs",download_detour:"direct"}],final:"🐟 漏网之鱼",auto_detect_interface:!0,default_domain_resolver:{server:"dns-direct"}},experimental:{clash_api:{external_controller:"127.0.0.1:9090"},cache_file:{enabled:!0}}};return JSON.stringify(c,null,2)}function Ne(t,e){const n=t.host,r="/"+t.path,a=e.map((t,e)=>{const{user:a,srv:o,prt:s,name:i,isTrojan:l,tls:c}=de(t,e),p=c?", tls=true, "+_d("c2tpcC1jZXJ0LXZlcmlmeQ==")+"=true, sni="+n:", tls=false";return l?`${i} = ${_d("dHJvamFu")}, ${o}, ${s}, password=${a}, ws=true, ws-path=${r}, ws-headers=Host:${n}${p}`:`${i} = ${_d("dmxlc3M=")}, ${o}, ${s}, username=${a}, ws=true, ws-path=${r}, ws-headers=Host:${n}${p}`});return`#!MANAGED-CONFIG\n[General]\nloglevel = notify\ndns-server = 223.5.5.5, 119.29.29.29\n\n[Proxy]\n${a.join("\n")}\n\n[Proxy Group]\n🚀 节点选择 = select, ${a.map(t=>t.split(" = ")[0]).join(", ")}\n🌐 全球直连 = select, DIRECT\n🐟 漏网之鱼 = select, 🚀 节点选择\n\n[Rule]\n${_d("R0VPSVA=")},CN,DIRECT\nFINAL,🐟 漏网之鱼\n`}function De(t,e){const n=t.host,r="/"+t.path,a=e.map((t,e)=>{const{user:a,srv:o,prt:s,name:i,isTrojan:l,tls:c}=de(t,e),p=c?", tls=true, "+_d("c2tpcC1jZXJ0LXZlcmlmeQ==")+"=true, sni="+n:", tls=false";return l?`${i} = ${_d("dHJvamFu")}, ${o}, ${s}, password=${a}, ws=true, ws-path=${r}, ws-headers=Host:${n}${p}`:`${i} = ${_d("dmxlc3M=")}, ${o}, ${s}, username=${a}, ws=true, ws-path=${r}, ws-headers=Host:${n}${p}`}),o=a.map(t=>t.split(" = ")[0]).join(", ");return`[General]\ndns-server = 223.5.5.5, 119.29.29.29\n\n[Proxy]\n${a.join("\n")}\n\n[Proxy Group]\n🚀 节点选择 = select, ${o}\n🌐 全球直连 = select, DIRECT\n🐟 漏网之鱼 = select, ${o}\n\n[Rule]\n${_d("R0VPSVA=")},CN,DIRECT\nFINAL,🐟 漏网之鱼\n`}function Oe(t,e){const n=t.host,r="/"+t.path,a=t=>t.indexOf(":")>=0?"["+t+"]":t,o=e.map((t,e)=>{const{user:o,srv:s,prt:i,name:l}=de(t,e);if(t.startsWith(_d("dHJvamFu")+"://"))return`${_d("dHJvamFu")}=${a(s)}:${i}, password=${o}, over-tls=true, tls-host=${n}, ${_d("b2Jmcw==")}=wss, ${_d("b2Jmcw==")}-host=${n}, ${_d("b2Jmcw==")}-uri=${r}, tls-verification=true, tag=${l}`;const c="tls"===(pe(t,"security")||"tls");return`${_d("dmxlc3M=")}=${a(s)}:${i}, method=none, password=${o}, ${_d("b2Jmcw==")}=${c?"wss":"ws"}, ${_d("b2Jmcw==")}-host=${n}, ${_d("b2Jmcw==")}-uri=${r}${c?", tls-verification=true, tls13=true":""}, tag=${l}`}),s=e.map((t,e)=>{const n=t.indexOf("#");if(n<0)return`节点${e+1}`;try{return decodeURIComponent(t.slice(n+1))||`节点${e+1}`}catch(t){return`节点${e+1}`}}).join(", ");return`[general]\nnetwork_check_url=https://www.gstatic.com/generate_204\nserver_check_url=https://www.gstatic.com/generate_204\ndns_exclusion_list=*.cmpassport.com, *.qq.com, *.weibo.com, *.icloud.com\n[dns]\nserver=223.5.5.5\nserver=119.29.29.29\n[server_local]\n${o.join("\n")}\n[policy]\nstatic=🚀 节点选择, ${s}, img-url=https://fastly.jsdelivr.net/gh/${_d("S29vbHNvbg==")}/${_d("UXVyZQ==")}@master/IconSet/Color/Proxy.png\nstatic=🌐 全球直连, direct, img-url=https://fastly.jsdelivr.net/gh/${_d("S29vbHNvbg==")}/${_d("UXVyZQ==")}@master/IconSet/Color/Direct.png\nstatic=🐟 漏网之鱼, 🚀 节点选择, direct, img-url=https://fastly.jsdelivr.net/gh/${_d("S29vbHNvbg==")}/${_d("UXVyZQ==")}@master/IconSet/Color/Final.png\n[filter_local]\n${_d("Z2VvaXA=")}, cn, 🌐 全球直连\nfinal, 🐟 漏网之鱼\n`}let Be=null,_rq=null;let Ke="";const We={list:null,at:0,key:""};async function Ve(){const t=String(Ke||"").trim(),e=t||"__default__";if(We.key===e&&We.list&&Date.now()-We.at<6e5)return We.list;const n=[],r=(t?se(t).filter(t=>/^https?:\/\//i.test(t)).slice(0,10).map(t=>({url:t,label:"兜底",count:100})):U).map(async t=>{try{const e=await oe(t.url,{headers:{"User-Agent":"Mozilla/5.0"}},8e3);if(!e.ok)return;const r=await e.text(),a=[];for(const e of r.split(/[\r\n]+/)){const n=e.trim().match(/^(\d{1,3}(?:\.\d{1,3}){3})(?::(\d+))?$/);n&&a.length<t.count&&a.push({ip:n[1],port:n[2]?parseInt(n[2],10):443,name:t.label+"-"+String(a.length+1).padStart(2,"0")})}a.forEach(t=>n.push(t))}catch(t){}});return await Promise.all(r),We.list=n,We.at=Date.now(),We.key=e,n}const _SUBC=new Map();
/* ===== MASQUE 凭据自动生成：部署后首次订阅即完成注册，结果回写 KV ===== */
const _MSURL="https://api."+_d("Y2xvdWRmbGFyZWNsaWVudA==")+".com/v0a2158/reg";const _MSSNI=_d("d3d3Lm1pY3Jvc29mdC5jb20=");
function _b64(u){let s="";for(let i=0;i<u.length;i++)s+=String.fromCharCode(u[i]);return btoa(s)}
function _ub64(s){try{const t=String(s||"").replace(/-/g,"+").replace(/_/g,"/");const p=t.length%4,t2=p?t+(2===p?"==":"="):t;const b=atob(t2),u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i);return u}catch(t){return null}}function _sec1(j){try{const d=_ub64(j.d),x=_ub64(j.x),y=_ub64(j.y);if(!d||!x||!y||32!==d.length||32!==x.length||32!==y.length)return null;const o=new Uint8Array(121);o.set([48,119,2,1,1,4,32],0);o.set(d,7);o.set([160,10,6,8,42,134,72,206,61,3,1,7],39);o.set([161,68,3,66,0],51);o[56]=4;o.set(x,57);o.set(y,89);return o}catch(t){return null}}async function _msKey(){try{const g=await crypto.subtle.generateKey({name:_d("RUNEU0E="),namedCurve:"P-256"},!0,["sign","verify"]);const j=await crypto.subtle.exportKey("jwk",g.privateKey);const s=_sec1(j);if(!s)return null;const pu=new Uint8Array(await crypto.subtle.exportKey("spki",g.publicKey));return {pub:_b64(pu),pri:_b64(s)}}catch(t){return null}}async function _msCred(e,s){try{if(e._mkc)return e._mkc;let c=null;try{const p=JSON.parse(String(e.masqueConf||""));if(p&&p.mk&&p.k&&p.p)c=p}catch(t){}if(c)return e._mkc=c;const kp=await _msKey();if(!kp)return null;let r=null;for(let _i=0;_i<3&&!r;_i++){try{const _f=await fetch(_MSURL,{method:"POST",headers:{"Content-Type":"application/json","User-Agent":"okhttp/3.12.1","CF-Client-Version":"a-6.30.0"},body:JSON.stringify({[_d("ZmNtX3Rva2Vu")]:"",[_d("aW5zdGFsbF9pZA==")]:"",key:kp.pub,locale:"en_US",model:"PC",tos:new Date().toISOString(),[_d("c2VyaWFsX251bWJlcg==")]:"",[_d("dHVubmVsX3R5cGU=")]:_d("bWFzcXVl")}),signal:AbortSignal.timeout(1e4)});_f.ok&&(r=_f)}catch(t){}if(!r&&_i<2)await new Promise(t=>setTimeout(t,800*(_i+1)))}if(!r)return null;const j=await r.json();const cf=j&&j.config,pr=cf&&cf.peers&&cf.peers[0],ic=cf&&cf.interface;if(!pr||!ic||!pr.public_key)return null;const ep=pr.endpoint||{};let hs=String(ep.host||ep.v4||ep.v6||"");const q=hs.lastIndexOf(":");if(q>0)hs=hs.slice(0,q);hs=hs||"162.159.198.2";c={mk:1,k:kp.pri,p:String(pr.public_key).replace(/-----[^-]+-----/g,"").replace(/\s+/g,""),a4:String(ic.addresses&&ic.addresses.v4||""),a6:String(ic.addresses&&ic.addresses.v6||""),h:hs,pt:Number(ep.ports&&ep.ports[0]||443)||443,cid:String(cf.client_id||""),at:Date.now()};try{const w=JSON.parse(JSON.stringify(e));delete w._mkc;w.masqueConf=JSON.stringify(c);e.masqueConf=w.masqueConf;await ct(s,w)}catch(t){}return e._mkc=c}catch(t){return null}}/* MASQUE 节点中间结构：{name,host,port,local[..],k,p} */
const _MSEP=["162.159.198.2:443","162.159.198.2:8443","162.159.198.2:4443","162.159.198.2:8095","162.159.198.2:500","162.159.198.2:1701","162.159.198.2:4500","162.159.199.2:443","162.159.199.2:8443","162.159.199.2:4443","162.159.199.2:8095","162.159.199.2:500","162.159.199.2:1701","162.159.199.2:4500","[2606:4700:103::2]:443","[2606:4700:103::2]:8443","[2606:4700:103::2]:4443","[2606:4700:103::2]:8095","[2606:4700:103::2]:500","[2606:4700:103::2]:1701","[2606:4700:103::2]:4500","[2606:4700:104::2]:443","[2606:4700:104::2]:8443","[2606:4700:104::2]:4443","[2606:4700:104::2]:8095","[2606:4700:104::2]:500","[2606:4700:104::2]:1701","[2606:4700:104::2]:4500"];
function _msEp(x){let s=String(x||"").trim();if("["===s.charAt(0)){const i=s.indexOf("]");if(i>0)return{h:s.slice(1,i),p:parseInt(s.slice(i+2),10)||0}}const i=s.lastIndexOf(":");return i>0&&s.indexOf(":")===i?{h:s.slice(0,i),p:parseInt(s.slice(i+1),10)||0}:{h:s,p:0}}
function _masqueNodes(c,e,nm){
  const eps=String(e.masqueEps||"").split(/[\n,;]+/).map(x=>x.trim()).filter(Boolean);
  const list=(eps.length?eps:_MSEP).slice(0,50);
  const local=[];
  if(c.a4)local.push(String(c.a4).split("/")[0]);
  if(c.a6)local.push(String(c.a6).split("/")[0]);
  return list.map((x,i)=>{
    const hp=_msEp(x);
    const o={name:nm+(list.length>1?"·"+String(i+1):""),host:hp.h,port:hp.p||c.pt,local:local,k:c.k,p:c.p,sni:String(e.masqueSni||"").trim()||_MSSNI};
    const net=String(e.masqueNet||"").trim();if(net)o.msnet=net;
    return o;
  });
}
function x0(t){const i=String(t||"").lastIndexOf("·");return i>0?String(t).slice(0,i):String(t||"MASQUE")}
async function Je(e,n,r,a,o,s,i){e.path&&"/"!==e.path&&""!==e.path||(e.path=e.uuid);let l="";try{l=(new URL(n).searchParams.get("country")||"").trim()}catch(t){}const c=(l||String(e.countryLabel||"")).trim(),p=o||"";const _eh=e.host||new URL(n).hostname,d=!/\.workers\.dev$/i.test(_eh),u=Object.assign({},e,{host:_eh});d&&(u.tlsOnly=!0),u.enableVless||u.enableTrojan||u.enableXhttp||(u.enableVless=!0);const h=e.optimizer&&e.optimizer.subMode||"";/* 家宽触发：原先只看 e.homeWan 开关；家宽独立成模式后，mode==='home' 等同开启（逻辑不变） */
const _HM="home"===String(e.mode||"").toLowerCase(),_HW=_HM?!0:!!e.homeWan;
u.homeWan=_HW;
if(_HW)try{u.homeWanNodes=await X(i,u)}catch(t){}let m=[];const x=e.filter&&e.filter.ipType||[],w=1===x.length&&"IPv6"===x[0],k=ve(e),C=ot(E.join("\n")).map(t=>({ip:t.ip,port:t.port||443,name:t.name||"优选IP-"+String(E.indexOf(t)+1).padStart(2,"0")}));if("custom"===h){const t=!(!e.optimizer||!e.optimizer.subIncludeDefault),n=!t;if(m=await ie(e.preferredDomains||"",n?200:40,n?2e3:300,t,t,k),t){const t=await ie($,40,240,!1,!0,k),e=new Set(t.map(t=>t.ip));m=[...t,...m.filter(t=>!e.has(t.ip))],u.preferredIPs=[...u.preferredIPs||[],...C],u.optimizer||(u.optimizer={}),u.optimizer.fillCount=Math.max(parseInt(u.optimizer.fillCount)||0,800)}}else if(""===h){const t=e.src||{},n=!0===t.native,r=!1!==t.prefDomain,a=!1!==t.prefIp,o=!0===t.customPref;n&&!w&&(u.preferredDomains=(u.preferredDomains?u.preferredDomains+"\n":"")+u.host+"#原生地址"),o||(u.preferredIPs=[]);const s=(e.filter||{}).region;if(Array.isArray(s)?0===s.length||s.includes("all"):!s||"all"===s){if(m=[],r&&!w){const t=await Promise.resolve(String($||"").split(/[\n,;]+/).map(t=>t.trim().replace(/^\*\./,"")).filter(Boolean).join("\n"));t&&(u.preferredDomains=(u.preferredDomains?u.preferredDomains+"\n":"")+t)}if(a&&!w){const t=await Vt(150);t&&t.length&&(u.preferredIPs=[...u.preferredIPs||[],...t]);try{const t=await ie(P,100,600,!0,!0,!1);t&&t.length&&(u.preferredIPs=[...u.preferredIPs||[],...t])}catch(t){}}if(k&&r)try{const t=$+(w?"\n"+A.join("\n"):""),e=await ie(t,40,w?800:240,!1,!0,!0);e&&e.length&&(u.preferredIPs=[...u.preferredIPs||[],...e])}catch(t){}}else r&&(m=await ie($,100,300,!1,!0,k));if(a)if(w){const t=C.map(t=>({ip:rt(t.ip),port:t.port||443,name:t.name})).filter(t=>t.ip);u.preferredIPs=[...u.preferredIPs||[],...t]}else if(k){const t=C.map(t=>({ip:rt(t.ip),port:t.port||443,name:t.name})).filter(t=>t.ip);u.preferredIPs=[...u.preferredIPs||[],...C,...t]}else u.preferredIPs=[...u.preferredIPs||[],...C];if(!(n||r||a||o))if(w){const t=C.map(t=>({ip:rt(t.ip),port:t.port||443,name:t.name})).filter(t=>t.ip);u.preferredIPs=[...u.preferredIPs||[],...t]}else u.preferredIPs=[...u.preferredIPs||[],...C];if(w&&u.preferredIPs&&(u.preferredIPs=u.preferredIPs.filter(t=>String(t.ip).indexOf(":")>=0)),u.optimizer||(u.optimizer={}),u.optimizer.fillCount=Math.max(parseInt(u.optimizer.fillCount)||0,w?0:1e3),!1&&u.preferredIPs&&u.preferredIPs.length){const t=T.map((t,e)=>({ip:t,port:443,name:"优选IP-S"+String(e+1).padStart(2,"0")})),e=new Set(t.map(t=>t.ip));u.preferredIPs=[...t,...u.preferredIPs.filter(t=>!e.has(t.ip))]}}if(m.length){let t=m;const e=(u.preferredIPs||[]).length;t=t.map((t,n)=>/^[A-Za-z0-9.-]+\.[A-Za-z]{2,}-\d+$/.test(t.name||"")?Object.assign({},t,{name:"优选IP-"+String(e+n+1).padStart(2,"0")}):t),u.preferredIPs=[...u.preferredIPs||[],...t]}w&&u.preferredIPs&&(u.preferredIPs=u.preferredIPs.filter(t=>String(t.ip).indexOf(":")>=0)),a=(a||"").toLowerCase();const U=(r||"").toLowerCase(),L=[_d("Y2xhc2g="),_d("c2luZ2JveA=="),_d("c2luZy1ib3g="),_d("c3VyZ2U="),_d("c3VyZmJvYXJk"),_d("bG9vbg=="),_d("cXVhbng="),_d("cXVhbnR1bXVsdHg=")].includes(U)||_r3.test(a);let N=1e4;if(e.nodeLimit){const t=parseInt(e.nodeLimitCount)||0;t>0&&(N=Math.min(t,1e3))}e._quotaCap&&(N=Math.min(N,e._quotaCap)),e.cpuLimit&&(N=Math.max(10,Math.floor(N*0.6)));const D="random"===h?Object.assign({},e.filter,{region:"all"}):e.filter,O=!(!_HW||"custom"===h);const _WM=String(e.mode||"").toLowerCase();let _MX=null;if(_d("bWFzcXVl")===_WM){const _mc=await _msCred(e,i);if(_mc)_MX=_masqueNodes(_mc,e,String(e.masqueName||"")||"MASQUE");}let _frontNode=null;if(_MX&&_MX.length){const _f=_frNode(e);if(_f){_frontNode=_f;for(let _q=0;_q<_MX.length;_q++)_MX[_q][_d("ZGlhbGVyUHJveHk=")]=_f.name}}let R;R=(O?function(t,e,n){const r=Array.isArray(n)?n.slice(0,3):[];if(r.length>=3)return r;const a=new Set;for(const t of r)try{a.add(ce(t).host)}catch(t){}for(const e of T){if(r.length>=3)break;a.has(e)||(a.add(e),r.push(Zt(t,e,443,"隧道前置-"+String(r.length+1).padStart(2,"0"))))}return r}(u,0,ge(await le(u,N,null),D).slice(0,3)):ge(await le(u,N,null),D)),O||(R=ye(R,e,w));const _="custom"===h&&!(e.optimizer&&e.optimizer.subIncludeDefault);if(O||_||w||(_MX&&_MX.length)||function(t,e,n){if(t.length>=n)return;const r=new Set;for(const e of t)try{r.add(ce(e).host)}catch(t){}e.src&&!0===e.src.native&&(a=>{if(t.length>=n)return;if(r.has(a))return;r.add(a);const o=Qt("原生地址",!!e.enableVless,!!e.enableTrojan,!!e.enableXhttp);e.enableVless&&t.push(Zt(e,a,443,o.v)),e.enableTrojan&&t.push(te(e,a,443,o.t)),e.enableXhttp&&t.push(Zt(e,a,443,o.x,{type:_d("eGh0dHA=")}))})(e.host)}(R,u,N),O||!0||w||_&&R.length>0||function(t,e){const n=t.length+3*T.length,r=new Set;for(const e of t)try{r.add(ce(e).host)}catch(t){}let a=0;for(const o of T){if(t.length>=n)break;if(r.has(o))continue;r.add(o),a++;const s=Qt("内置·保底-"+String(a).padStart(2,"0"),!!e.enableVless,!!e.enableTrojan,!!e.enableXhttp);if(e.enableVless&&t.push(Zt(e,o,443,s.v)),t.length>=n)break;if(e.enableTrojan&&t.push(te(e,o,443,s.t)),t.length>=n)break;e.enableXhttp&&t.push(Zt(e,o,443,s.x,{type:_d("eGh0dHA=")}))}}(R,u),!O&&!(_MX&&_MX.length)&&e.nodeLimit&&h&&!_&&R.length<N){const t=N-R.length,e=new Set;for(const t of R)try{e.add(ce(t).host)}catch(t){}const n=(t,n,r)=>{R.length>=N||e.has(t)||(e.add(t),R.push(Zt(u,t,n||443,r)))};let r=0;try{const e=await Ve(),r=e,a=r.length>=t?r:e;for(const t of a)if(n(t.ip,t.port,t.name||"优选IP-"+String(t.port)),R.length>=N)break}catch(t){}if(R.length<N){const t=N-R.length,e=g,a=at(w?e:k?[...f,...e]:f,3*t),o=a,s=o.length>=t?o:a;for(const t of s){if(R.length>=N)break;r++,n(t,443,"优选IP-"+String(r).padStart(3,"0"))}}}O||(R=ye(R,e,w)),function(t,e,n){if(t.length<2)return t;const r=!1!==e.loadBalance&&"random"!==n,a="tail"===(e&&e.ipv6Mode),o=[],s=[],i=[];for(const e of t)we(e)?o.push(e):a&&be(e)?i.push(e):s.push(e);if(!o.length&&!i.length)return r&&ke(t),t;r&&(ke(o),ke(s)),t.length=0;for(let e=0;e<o.length;e++)t.push(o[e]);for(let e=0;e<s.length;e++)t.push(s[e]);for(let e=0;e<i.length;e++)t.push(i[e])}(R,e,h),R.length>N&&(R.length=N),R=function(t,e,n){const r=String(n||"").trim().toUpperCase(),a=String(e||"").toUpperCase(),o="OFF"===r?"":y[r]||I[a]||a||"",s=new Set;return t.map(t=>{let e="";try{e=de(t,0).name||""}catch(t){e=""}const n=e;let r=Ce(e);!r&&o&&(r=o,e=e?o+"·"+e:o+"·优选"),e||(e="节点");let a=e,i=2;for(;s.has(a);)a=e+"·"+i,i++;return s.add(a),a===n?t:function(t,e){const n=String(t),r=n.indexOf("#");return(r>=0?n.slice(0,r):n)+"#"+Yt(e)}(t,a)})}(R,p,c);if(!R.length&&!(_MX&&_MX.length))for(let t=0;t<T.length;t++)try{R.push(Zt(u,T[t],443,"兜底-"+String(t+1).padStart(2,"0")))}catch(t){}const _modeNow=String(e.mode||"").toLowerCase(),_isH="home"===_modeNow,_isM=_d("bWFzcXVl")===_modeNow,_mIso=_isH||_isM;if(_mIso){const _cps=[_d("Y2xhc2g=")];if(!_cps.includes(U)&&!(_cps.some(function(x){return a&&a.includes(x)})))return{type:"text/plain",body:"# 当前为 "+(_isH?"家宽":"MASQUE")+" 模式：本订阅格式不支持该模式的原生节点，未下发 Worker 节点。请使用 Clash/Mihomo 兼容格式。\n"};R=[];}let z,q;const j=()=>{const t=R.slice();try{t.push(Zt(u,u.host,443,"域名直连·对照"))}catch(t){}return{type:"text/plain",body:t.join("\n")}};
if(_d("a2FyaW5n")===U)return j();if(_d("Y2xhc2g=")===U)z="text/yaml",q=Ee(u,R,o,new URL(n).origin+"/crules/"+Ck(u),s,c,p,_MX,_frontNode);else if(_d("c2luZ2JveA==")===U||_d("c2luZy1ib3g=")===U||_d("aGlkZGlmeQ==")===U)z="application/json",q=Le(u,R);else if(_d("c3VyZ2U=")===U)z="text/plain",q=Ne(u,R);else if(_d("c3VyZmJvYXJk")===U)z="text/plain",q=$e(u,R);else if(_d("bG9vbg==")===U)z="text/plain",q=De(u,R);else if(_d("cXVhbng=")===U||_d("cXVhbnR1bXVsdHg=")===U)z="text/plain",q=Oe(u,R);else if("plain"===U||"raw"===U)z="text/plain",q=R.join("\n");else if(_d("djJyYXk=")===U||_d("djJyYXlu")===U||_d("c2hhZG93cm9ja2V0")===U||_d("bmVrb3JheQ==")===U||_d("c3Rhc2g=")===U)z="text/plain",q=R.join("\n");else if(a.includes(_d("Y2xhc2g="))||a.includes(_d("c3Rhc2g=")))z="text/yaml",q=Ee(u,R,o,new URL(n).origin+"/crules/"+Ck(u),s,c,p,_MX,_frontNode);else{if(_r4.test(a))return j();a.includes(_d("c2luZy1ib3g="))?(z="application/json",q=Le(u,R)):a.includes(_d("c3VyZ2U="))?(z="text/plain",q=Ne(u,R)):a.includes(_d("c3VyZmJvYXJk"))?(z="text/plain",q=$e(u,R)):a.includes(_d("bG9vbg=="))?(z="text/plain",q=De(u,R)):a.includes(_d("cXVhbnR1bXVsdA=="))?(z="text/plain",q=Oe(u,R)):a.includes("mozilla")?(z="text/yaml",q=Ee(u,R,o,new URL(n).origin+"/crules/"+Ck(u),s,c,p,_MX,_frontNode)):(z="text/plain",q=R.join("\n"))}return{type:z,body:q}}const Xe=String.raw`
<!DOCTYPE html>
<html lang="zh-CN" data-theme="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>控制台</title>
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='3' y='3' width='18' height='18' rx='5' fill='%23f6821f'/%3E%3Cpath d='M8 15V9l8 6V9' stroke='%230d131b' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E">
<script src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js"></script>
<style>
.mark{width:34px;height:34px;border-radius:9px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;flex:0 0 34px;box-shadow:0 4px 12px var(--accent-dim)}
.mark svg{width:18px;height:18px}
.mark path{stroke:#0d131b}
.ver-chip.has-update{color:var(--accent);background:var(--accent-dim);border-color:var(--accent)}
.ver-chip.checking{opacity:.7;pointer-events:none}
.ibtn{width:34px;height:34px;border-radius:8px;border:1px solid var(--border);background:var(--card);color:var(--text);cursor:pointer;display:flex;align-items:center;justify-content:center;flex:0 0 34px}
.mbadge{margin-left:auto;padding:3px 10px;border-radius:999px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.06);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);box-shadow:inset 0 1px 0 rgba(255,255,255,.14);font-size:12px;color:var(--accent);white-space:nowrap}
[data-theme="light"] .mbadge{border-color:rgba(30,45,70,.10);background:rgba(255,255,255,.60);box-shadow:inset 0 1px 0 rgba(255,255,255,.90)}
.ibtn:hover{border-color:var(--accent);color:var(--accent)}
.ibtn svg{width:16px;height:16px;stroke:currentColor}
.wdwarn{display:none;background:rgba(59,130,246,.10);border-bottom:1px solid rgba(59,130,246,.35);color:var(--accent2);padding:9px 26px;font-size:12.5px;line-height:1.6;text-align:center}
[data-theme="light"] .wdwarn{color:var(--accent);background:rgba(29,95,168,.06);border-bottom-color:rgba(29,95,168,.35)}
.content{padding:22px 26px 96px;max-width:1180px;width:100%;margin:0 auto}
@keyframes fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
.view-head{margin-bottom:16px}
.view-head h2{font-size:20px;font-weight:700}
.view-head p{color:var(--dim);font-size:13px;margin-top:4px}
.grid2{display:grid;grid-template-columns:repeat(auto-fit,minmax(330px,1fr));gap:16px}
.filter-region{display:flex;align-items:center;gap:14px;padding:2px 0 14px;border-bottom:1px solid var(--border);margin-bottom:14px;flex-wrap:wrap}
.filter-region-label{font-size:13px;font-weight:600;white-space:nowrap}
.filter-row{display:flex;flex-wrap:wrap}
.filter-group{flex:0 1 auto;min-width:180px;padding:0 14px;border-left:1px solid var(--border)}
.filter-group:first-child{border-left:none;padding-left:0}
.filter-group-title{font-size:12px;font-weight:600;color:var(--dim);margin-bottom:9px;letter-spacing:.3px}
.pills.nowrap{flex-wrap:nowrap;white-space:nowrap}
.pills.nowrap .spill span{padding:5px 10px;font-size:12px}
.spill input{position:absolute;opacity:0;pointer-events:none}
.spill span{display:inline-block;padding:5px 14px;border:1px solid rgba(255,255,255,.13);border-radius:999px;font-size:12.5px;color:var(--dim);cursor:pointer;background:rgba(255,255,255,.05);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 2px 8px rgba(0,0,0,.20);transition:border-color .15s,color .15s,background .15s,box-shadow .15s;user-select:none;line-height:1.5}
.spill:hover span{border-color:var(--accent);color:var(--accent)}
.spill input:checked + span{background:var(--accent);border-color:var(--accent);color:#fff;font-weight:600;border-radius:999px}
.card h3 .tick{width:3px;height:14px;border-radius:2px;background:var(--accent)}
.checkline{display:flex;align-items:center;gap:20px;padding:5px 0;font-size:13px;cursor:pointer}
.checkline input{margin:0;flex:0 0 auto;vertical-align:middle}
.checkline span{line-height:1.5}
.proto-row{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px dashed var(--border);font-size:13.5px}
.proto-row:last-child{border-bottom:none}
.switch{position:relative;display:inline-block;width:40px;height:22px;flex:0 0 40px}
.switch input{opacity:0;width:0;height:0}
.switch input:checked+.sl{background:var(--accent)}
.switch input:checked+.sl::before{transform:translateX(18px)}
.btn.primary{background:linear-gradient(135deg,var(--accent),var(--accent2));border-color:transparent;color:#201308;font-weight:600}
.btn.primary:hover{filter:brightness(1.06);color:#201308}
.btn.danger{background:var(--err-dim);border-color:transparent;color:var(--err)}
.btn.danger:hover{border-color:var(--err)}
.btn .dirty-dot{display:none;width:6px;height:6px;border-radius:50%;background:var(--warn)}
.btn.dirty .dirty-dot{display:inline-block}
.tbl-wrap{overflow-x:auto}
.badge{display:inline-block;padding:2px 8px;border-radius:10px;font-size:11.5px}
.badge.g{background:var(--ok-dim);color:var(--ok)}
.badge.r{background:var(--err-dim);color:var(--err)}
.msg.show{display:block}
.fbar{position:fixed;right:22px;bottom:22px;display:flex;gap:10px;z-index:60;align-items:center}
.fbar .btn{box-shadow:var(--shadow)}
.saved-at{font-size:11.5px;color:var(--faint);background:var(--card);border:1px solid var(--border);border-radius:8px;padding:5px 10px;box-shadow:var(--shadow);white-space:nowrap}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.sec-title{font-size:12px;color:var(--faint);letter-spacing:1px;margin:20px 0 10px;font-weight:600}
.danger-zone{border:1px solid var(--err);border-radius:12px;padding:16px;background:var(--err-dim)}
.qrbox{display:flex;justify-content:center;padding:12px 0 4px}
.qrbox img{width:168px;height:168px;image-rendering:pixelated;border-radius:8px}
.note-box{background:var(--card2);border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:8px;padding:12px 14px;font-size:12.5px;color:var(--dim);line-height:1.7;margin-bottom:12px}
@media (min-width:1100px){
  /* 右侧避让右下角浮动保存栏（尚未保存/重置/保存全部），避免遮挡筛选勾选项 */
  .filter-grid{padding-right:200px}
}
.mmode{position:fixed;inset:0;z-index:120;display:none;align-items:center;justify-content:center;padding:18px;background:rgba(4,8,13,.74)}
.mmode.show{display:flex}
.mmodebox{width:100%;max-width:680px;max-height:88vh;overflow-y:auto;background:var(--card);border:1px solid var(--border);border-radius:14px;box-shadow:var(--shadow);padding:22px 22px 16px}
.mmodebox h3{margin:0 0 6px;font-size:17px}
.mmodebox .msub{color:var(--dim);font-size:12.5px;line-height:1.65;margin-bottom:16px}
.mmodegrid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;justify-content:center}
.mmodecard{border:1px solid rgba(255,255,255,.14);border-radius:11px;background:rgba(255,255,255,.055);color:var(--text);padding:15px 14px;cursor:pointer;text-align:left;-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);box-shadow:inset 0 1px 0 rgba(255,255,255,.16),0 8px 22px rgba(0,0,0,.30);transition:border-color .15s,transform .15s,box-shadow .15s,background .15s}
.mmodecard:hover{border-color:var(--accent);transform:translateY(-2px)}
.mmodecard b{display:block;font-size:14.5px;margin-bottom:7px}
.mmodecard span{display:block;font-size:12.5px;color:var(--dim);line-height:1.6}
.mmodecard em{display:block;font-style:normal;font-size:11.5px;color:var(--faint);margin-top:9px}
.mmodefoot{margin-top:14px;text-align:right}
.mmodefoot a{color:var(--dim);font-size:12.5px;text-decoration:none}
.mmodefoot a:hover{color:var(--accent)}
@media (max-width:760px){
  .mmodegrid{grid-template-columns:1fr}
}
*{box-sizing:border-box;margin:0;padding:0}:root{--bg:#06080d;--bg2:#090d14;--card:#0c1119;--card2:#101724;--border:#1a2331;--text:#e9eef7;--dim:#93a3b8;--faint:#61718a;--line:#131a25;--accent:#7c6cff;--accent2:#22d3ee;--accent-dim:rgba(124,108,255,.14);--ok:#22c55e;--ok-dim:rgba(34,197,94,.13);--err:#f87171;--err-dim:rgba(248,113,113,.13);--warn:#fbbf24;--sb-bg:#080c12;--sb-text:#9fb0c5;--sb-dim:#5f7292;--sb-border:#161d28;--sb-active-bg:rgba(124,108,255,.14);--sb-active-text:#ab9dff;--sb-active-bar:#7c6cff;--glass:rgba(23,32,45,.54);--glass-2:rgba(19,27,39,.62);--glass-line:rgba(255,255,255,.10);--sb-glass:rgba(20,28,41,.50);--sb-rim:rgba(255,255,255,.46);--sb-vol-a:rgba(255,255,255,.11);--sb-vol-b:rgba(0,0,0,.20);--sb-glass-m:rgba(15,21,32,.88);--glass-rim:rgba(255,255,255,.30);--glass-hi:rgba(255,255,255,.12);--glass-field:rgba(255,255,255,.045);--glass-hover:rgba(255,255,255,.07);--glass-btn:rgba(255,255,255,.09);--glass-btn-hi:rgba(255,255,255,.17);--glass-rim-sm:rgba(255,255,255,.55);--glass-field-brd:rgba(255,255,255,.09);--glass-blur:22px;--glass-sh:0 20px 48px rgba(0,0,0,.42);--glass-shx:12px 0 36px rgba(0,0,0,.30);--blob-o:.44;--shadow:0 14px 40px rgba(0,0,0,.4);color-scheme:dark}[data-theme="light"]{--bg:#f4f6fb;--bg2:#eaeef6;--card:#fff;--card2:#f7f9fd;--border:#e1e7f0;--text:#16202e;--dim:#5a6a80;--faint:#93a1b4;--line:#eaeff6;--accent:#6355f5;--accent2:#0ea5b7;--accent-dim:rgba(99,85,245,.10);--ok:#17915a;--ok-dim:rgba(23,145,90,.11);--err:#dc4c4c;--err-dim:rgba(220,76,76,.10);--warn:#b7791f;--sb-bg:#ffffff;--sb-text:#5a6a80;--sb-dim:#9aa8bb;--sb-border:#e5eaf2;--sb-active-bg:rgba(99,85,245,.10);--sb-active-text:#5546e8;--sb-active-bar:#6355f5;--glass:rgba(255,255,255,.50);--glass-2:rgba(255,255,255,.60);--glass-line:rgba(20,40,70,.10);--sb-glass:rgba(255,255,255,.46);--sb-rim:rgba(255,255,255,1);--sb-vol-a:rgba(255,255,255,.68);--sb-vol-b:rgba(20,40,70,.075);--sb-glass-m:rgba(255,255,255,.90);--glass-rim:rgba(255,255,255,.95);--glass-hi:rgba(255,255,255,.70);--glass-field:rgba(255,255,255,.62);--glass-hover:rgba(20,40,70,.055);--glass-btn:rgba(255,255,255,.86);--glass-btn-hi:#ffffff;--glass-rim-sm:rgba(255,255,255,1);--glass-field-brd:rgba(20,40,70,.11);--glass-blur:22px;--glass-sh:0 18px 44px rgba(25,45,80,.13);--glass-shx:10px 0 30px rgba(25,45,80,.09);--blob-o:.42;--shadow:0 12px 34px rgba(25,40,70,.12);color-scheme:light}html,body{min-height:100%}body{background:var(--bg);color:var(--text);font-family:"PingFang SC","Microsoft YaHei","Segoe UI",system-ui,sans-serif;font-size:14px;line-height:1.6;-webkit-font-smoothing:antialiased}a{color:var(--accent);text-decoration:none}a:hover{text-decoration:underline}.app{display:flex;min-height:100vh;gap:12px;padding:12px}.sidebar{width:232px;flex:0 0 232px;background:var(--sb-bg);border-right:1px solid var(--sb-border);display:flex;flex-direction:column;position:sticky;top:12px;height:calc(100vh - 24px);z-index:50}.brand{display:flex;align-items:center;gap:11px;padding:18px 18px 14px}.brand .lg{width:34px;height:34px;flex:0 0 34px;border-radius:10px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px var(--accent-dim)}.brand .lg svg{width:18px;height:18px;stroke:#0b0e14;fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}.brand .bt{display:flex;flex-direction:column;line-height:1.25;min-width:0}.brand .bt b{font-size:15px;font-weight:700;letter-spacing:.3px}.brand .bt span{font-size:11px;color:var(--sb-dim);white-space:nowrap;over${_d("Zmxvdzo=")}hidden;text-over${_d("Zmxvdzo=")}ellipsis}.nav{flex:1;padding:6px 10px 12px;overflow-y:auto}.nav-item{display:flex;align-items:center;gap:10px;width:100%;padding:9px 12px;margin:2px 0;border:none;background:transparent;color:var(--sb-text);font-size:13.5px;font-family:inherit;text-align:left;cursor:pointer;border-radius:8px;position:relative;transition:.15s}.nav-item svg{width:17px;height:17px;flex:0 0 17px;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}.nav-item:hover{background:var(--sb-active-bg);color:var(--sb-active-text)}.nav-item.on{background:var(--sb-active-bg);color:var(--sb-active-text);font-weight:600}.nav-item.on::before{content:"";position:absolute;left:-10px;top:8px;bottom:8px;width:3px;border-radius:0 3px 3px 0;background:var(--sb-active-bar)}.side-foot{padding:12px 18px;border-top:1px solid var(--sb-border);display:flex;align-items:center;justify-content:space-between;font-size:11.5px;color:var(--sb-dim)}.ver-chip{font-family:ui-monospace,Consolas,monospace;background:var(--accent-dim);color:var(--sb-active-text);padding:2px 8px;border-radius:6px;font-size:11px;border:1px solid transparent}.main{flex:1;min-width:0;display:flex;flex-direction:column;gap:12px}.topbar{display:flex;align-items:center;gap:14px;padding:12px 20px;border:1px solid var(--border);border-radius:18px;background:var(--bg);position:sticky;top:12px;z-index:40}.topbar h1{font-size:17px;font-weight:600;flex:1;min-width:0}.ibtn.hamb{display:none}.pill{display:inline-flex;align-items:center;gap:6px;font-size:12px;padding:4px 11px;border-radius:20px;background:var(--ok-dim);color:var(--ok);white-space:nowrap}.pill.off{background:var(--err-dim);color:var(--err)}.pill i{width:6px;height:6px;border-radius:50%;background:currentColor;display:block}.ibtn{width:34px;height:34px;border-radius:9px;border:1px solid var(--border);background:var(--card2);color:var(--dim);cursor:pointer;display:flex;align-items:center;justify-content:center}.ibtn:hover{border-color:var(--accent);color:var(--accent)}.ibtn svg{width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}.wrap{width:100%;max-width:1180px;margin:0 auto;padding:0 4px 96px}.view{display:none}.view.on{display:block;animation:up .2s ease}@keyframes up{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}.vh{margin-bottom:16px}.vh h2{font-size:20px;font-weight:700}.vh p{color:var(--dim);font-size:13px;margin-top:3px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(330px,1fr));gap:16px}.grid3{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:16px}.card{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:18px;margin-bottom:16px}.card h3{font-size:14px;font-weight:650;margin-bottom:14px;display:flex;align-items:center;gap:9px}.card h3 .dot{width:4px;height:15px;border-radius:3px;background:linear-gradient(var(--accent),var(--accent2))}.card h3 .sub{font-size:12px;color:var(--dim);font-weight:400;margin-left:auto}.kv{display:flex;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px dashed var(--line);font-size:13px}.kv:last-child{border-bottom:none}.kv .k{color:var(--dim);white-space:nowrap}.kv .v{text-align:right;word-break:break-all;font-family:ui-monospace,Consolas,monospace;font-size:12.5px}.kv .v.ok{color:var(--ok)}.kv .v.bad{color:var(--err)}.kv .v.warn{color:var(--warn)}.field{margin-bottom:13px}.field>label{display:block;font-size:12.5px;color:var(--dim);margin-bottom:6px;font-weight:500}input[type=text],input[type=password],input[type=number],select,textarea{width:100%;background:var(--card2);border:1px solid var(--border);color:var(--text);border-radius:9px;padding:9px 11px;font-size:13.5px;outline:none;font-family:inherit;transition:.15s}input:focus,select:focus,textarea:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-dim)}textarea{resize:vertical;line-height:1.55;font-family:ui-monospace,Consolas,monospace;font-size:12.5px}select{cursor:pointer;appearance:none;-webkit-appearance:none;padding-right:30px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%2393a3b8' stroke-width='1.6' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 11px center}select option,select optgroup{background:var(--bg2);color:var(--text)}input,select,textarea{accent-color:var(--accent)}.hint{font-size:12px;color:var(--dim);margin-top:7px;line-height:1.7}.inrow{display:flex;gap:8px;align-items:flex-start}.inrow>div{flex:1}.sw{position:relative;display:inline-block;width:40px;height:22px;flex:0 0 40px}.sw input{opacity:0;width:0;height:0}.sw .sl{position:absolute;inset:0;background:var(--border);border-radius:22px;cursor:pointer;transition:.18s}.sw .sl::before{content:"";position:absolute;width:16px;height:16px;left:3px;top:3px;background:#fff;border-radius:50%;transition:transform .18s}.sw input:checked+.sl{background:var(--accent)}.sw input:checked+.sl::before{transform:translateX(18px)}.prow{display:flex;align-items:center;gap:11px;padding:9px 0;border-bottom:1px dashed var(--line);font-size:13.5px}.prow:last-child{border-bottom:none}.btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--border);background:var(--card2);color:var(--text);border-radius:9px;padding:9px 15px;font-size:13px;cursor:pointer;font-family:inherit;white-space:nowrap;transition:.15s}.btn:hover{border-color:var(--accent);color:var(--accent)}.btn:active{transform:translateY(1px)}.btn:disabled{opacity:.5;cursor:not-allowed}.btn.pri{background:linear-gradient(135deg,var(--accent),var(--accent2));border-color:transparent;color:#0b0e14;font-weight:600}.btn.pri:hover{filter:brightness(1.07);color:#0b0e14}.btn.dgr{background:var(--err-dim);border-color:transparent;color:var(--err)}.btn.sm{padding:5px 11px;font-size:12px;border-radius:7px}.row{display:flex;align-items:center;gap:10px;flex-wrap:wrap}.row .grow{flex:1;min-width:150px}.pills{display:flex;flex-wrap:wrap;gap:8px}.sp{position:relative}.sp input{position:absolute;opacity:0;pointer-events:none}.sp span{display:inline-block;padding:5px 13px;border:1px solid var(--border);border-radius:999px;font-size:12.5px;color:var(--dim);cursor:pointer;background:var(--card2);transition:.15s;user-select:none}.sp:hover span{border-color:var(--accent);color:var(--accent)}.sp input:checked+span{background:var(--accent);border-color:var(--accent);color:#fff;font-weight:600}.blk{border-top:1px solid var(--line);margin-top:14px;padding-top:14px}.blk-t{font-size:12px;font-weight:600;color:var(--dim);margin-bottom:10px;letter-spacing:.4px}.tbl{overflow-x:auto}table{width:100%;border-collapse:collapse}th,td{text-align:left;padding:9px 10px;font-size:13px;border-bottom:1px solid var(--line);white-space:nowrap}th{color:var(--dim);font-weight:500;font-size:12px;background:var(--card2)}td.ip{font-family:ui-monospace,Consolas,monospace;font-size:12.5px}.bdg{display:inline-block;padding:2px 9px;border-radius:10px;font-size:11.5px}.bdg.g{background:var(--ok-dim);color:var(--ok)}.bdg.r{background:var(--err-dim);color:var(--err)}.mono{font-family:ui-monospace,Consolas,monospace;font-size:12.5px}.msg{display:none;margin-top:12px;padding:10px 13px;border-radius:9px;font-size:12.5px;line-height:1.65}.msg.on{display:block}.msg.ok{background:var(--ok-dim);color:var(--ok)}.msg.err{background:var(--err-dim);color:var(--err)}.msg.info{background:var(--accent-dim);color:var(--accent)}pre.code{background:var(--bg2);border:1px solid var(--border);border-radius:9px;padding:12px;font-size:11.5px;line-height:1.55;font-family:ui-monospace,Consolas,monospace;over${_d("Zmxvdzo=")}auto;max-height:280px;white-space:pre-wrap;word-break:break-all;color:var(--dim);margin-top:10px}.bar{position:fixed;right:20px;bottom:20px;display:flex;gap:10px;align-items:center;z-index:60}.bar .btn{box-shadow:var(--shadow)}.stat{font-size:11.5px;color:var(--faint);background:var(--card);border:1px solid var(--border);border-radius:9px;padding:6px 11px;box-shadow:var(--shadow);white-space:nowrap}.toast{position:fixed;left:50%;bottom:26px;transform:translateX(-50%) translateY(90px);background:var(--card);border:1px solid var(--border);padding:11px 20px;border-radius:11px;font-size:13px;opacity:0;transition:.25s;z-index:200;box-shadow:var(--shadow);pointer-events:none;max-width:86vw}.toast.on{opacity:1;transform:translateX(-50%) translateY(0)}.toast.ok{border-color:var(--ok);color:var(--ok)}.toast.err{border-color:var(--err);color:var(--err)}.toast.warn{border-color:var(--warn);color:var(--warn)}.note{background:var(--card2);border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:9px;padding:12px 14px;font-size:12.5px;color:var(--dim);line-height:1.75}.steps{list-style:none;counter-reset:st}.steps li{counter-increment:st;position:relative;padding:0 0 15px 32px;font-size:13px;color:var(--dim)}.steps li::before{content:counter(st);position:absolute;left:0;top:1px;width:22px;height:22px;border-radius:50%;background:var(--accent-dim);color:var(--accent);display:flex;align-items:center;justify-content:center;font-size:11.5px;font-weight:700}.steps li b{color:var(--text)}.prog{height:9px;border-radius:7px;background:var(--card2);over${_d("Zmxvdzo=")}hidden;margin:10px 0}.prog>div{height:100%;width:0;border-radius:7px;background:linear-gradient(90deg,var(--ok),var(--accent));transition:width .5s}.qr{display:flex;justify-content:center;padding:12px 0 2px}.qr img{width:170px;height:170px;image-rendering:pixelated;border-radius:10px;background:#fff;padding:8px}.dz{border:1px solid var(--err);border-radius:14px;padding:16px;background:var(--err-dim);margin-bottom:16px}.dz h3{font-size:14px;color:var(--err);margin-bottom:8px}.fgrp{border:1px solid var(--border);border-radius:11px;padding:12px;margin-bottom:12px}.fgrp-t{font-size:12px;font-weight:600;color:var(--dim);margin-bottom:9px}.bgfx{position:fixed;inset:0;z-index:0;over${_d("Zmxvdzo=")}hidden;pointer-events:none}.bgfx i{position:absolute;display:block;border-radius:50%;filter:blur(74px);opacity:var(--blob-o);will-change:transform}.bgfx i:nth-child(1){width:46vw;height:46vw;left:-12vw;top:-16vh;background:var(--accent);animation:blob 24s ease-in-out infinite}.bgfx i:nth-child(2){width:38vw;height:38vw;right:-14vw;top:2vh;background:var(--accent2);opacity:calc(var(--blob-o) * .72);animation:blob 30s ease-in-out infinite -8s}.bgfx i:nth-child(3){width:34vw;height:34vw;left:20vw;bottom:-22vh;background:#f472b6;opacity:calc(var(--blob-o) * .55);animation:blob 27s ease-in-out infinite -14s}.bgfx i:nth-child(4){width:30vw;height:30vw;right:10vw;bottom:-16vh;background:#38bdf8;opacity:calc(var(--blob-o) * .5);animation:blob 33s ease-in-out infinite -20s}@keyframes blob{0%,100%{transform:translate3d(0,0,0) scale(1)}33%{transform:translate3d(4vw,4vh,0) scale(1.1)}66%{transform:translate3d(-3vw,2vh,0) scale(.94)}}.app{position:relative;z-index:1}.sidebar{background:var(--sb-glass);-webkit-backdrop-filter:blur(30px) saturate(190%);backdrop-filter:blur(30px) saturate(190%);border:1px solid var(--glass-line);border-radius:22px;corner-shape:squircle;isolation:isolate;box-shadow:var(--glass-sh),inset 0 1px 0 var(--glass-hi),0 0 0 1px rgba(255,255,255,.03)}.sidebar::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:0;background:radial-gradient(520px 400px at var(--mx,50%) var(--my,-16%),var(--glass-hi),transparent 62%),linear-gradient(180deg,var(--sb-vol-a) 0,rgba(0,0,0,0) 32%,rgba(0,0,0,0) 60%,var(--sb-vol-b) 100%)}.sidebar::after{content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;pointer-events:none;z-index:1;background:linear-gradient(150deg,var(--sb-rim) 0,rgba(255,255,255,0) 34%,rgba(255,255,255,0) 66%,var(--sb-rim) 100%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask-composite:exclude}.sidebar>*{position:relative;z-index:2}.side-foot{border-top:1px solid var(--glass-line)}.nav::-webkit-scrollbar{width:8px}.nav::-webkit-scrollbar-thumb{background:var(--glass-field-brd);border-radius:8px}.nav-item{border-radius:12px}.nav-item:hover{background:var(--glass-hover)}.nav-item.on{background:var(--sb-active-bg);box-shadow:inset 0 1px 0 var(--glass-hi),0 6px 18px rgba(0,0,0,.16)}.topbar{background:var(--glass-2);-webkit-backdrop-filter:blur(20px) saturate(180%);backdrop-filter:blur(20px) saturate(180%);border:1px solid var(--glass-line);box-shadow:var(--glass-sh),inset 0 1px 0 var(--glass-hi)}.topbar::after{content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;pointer-events:none;background:linear-gradient(150deg,var(--glass-rim) 0,rgba(255,255,255,0) 36%,rgba(255,255,255,0) 64%,var(--glass-rim) 100%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask-composite:exclude}.ibtn{position:relative;background:var(--glass-field);border:1px solid var(--glass-field-brd);border-radius:11px;box-shadow:inset 0 1px 0 var(--glass-hi);transition:.18s cubic-bezier(.34,1.4,.64,1)}.ibtn:hover{background:var(--glass);border-color:var(--glass-rim);color:var(--accent);transform:translateY(-1px)}.ibtn:active{transform:translateY(0) scale(.96)}.card{position:relative;background:var(--glass);-webkit-backdrop-filter:blur(var(--glass-blur)) saturate(170%);backdrop-filter:blur(var(--glass-blur)) saturate(170%);border:1px solid var(--glass-line);border-radius:20px;corner-shape:squircle;box-shadow:var(--glass-sh),inset 0 1px 0 var(--glass-hi)}.card>*{position:relative;z-index:1}.card::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:0;background:radial-gradient(440px 260px at var(--mx,50%) var(--my,-12%),var(--glass-hi),transparent 68%)}.card::after{content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;pointer-events:none;z-index:0;background:linear-gradient(150deg,var(--glass-rim) 0,rgba(255,255,255,0) 32%,rgba(255,255,255,0) 64%,var(--glass-rim) 100%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask-composite:exclude}.fgrp{background:var(--glass-field);border:1px solid var(--glass-field-brd);border-radius:14px;corner-shape:squircle}.note{background:var(--glass-field);border:1px solid var(--glass-field-brd);border-left:3px solid var(--accent);border-radius:14px}pre.code{background:var(--glass-field);border:1px solid var(--glass-field-brd);border-radius:14px}.msg{border-radius:13px}input[type=text],input[type=password],input[type=number],select,textarea{background:var(--glass-field);border:1px solid var(--glass-field-brd);border-radius:12px;box-shadow:inset 0 1px 0 var(--glass-hi)}.sp span{background:var(--glass-field);border:1px solid var(--glass-field-brd)}th{background:var(--glass-field)}.btn{background:var(--glass-field);border:1px solid var(--glass-field-brd);border-radius:13px;position:relative;box-shadow:inset 0 1px 0 var(--glass-hi),0 4px 14px rgba(0,0,0,.16);transition:.18s cubic-bezier(.34,1.4,.64,1)}.btn:hover{background:var(--glass);border-color:var(--glass-rim);color:var(--text);transform:translateY(-1px)}.btn:active{transform:translateY(0) scale(.985)}.btn.sm{border-radius:10px}.btn.pri{background:linear-gradient(135deg,var(--accent),var(--accent2));border-color:transparent;color:#0b0e14;box-shadow:0 8px 24px var(--accent-dim),inset 0 1px 0 rgba(255,255,255,.45);over${_d("Zmxvdzo=")}hidden}.btn.pri:hover{color:#0b0e14;filter:brightness(1.06)}.btn.pri::after{content:"";position:absolute;top:-60%;left:-40%;width:36%;height:220%;pointer-events:none;transform:rotate(16deg);background:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.6),rgba(255,255,255,0));opacity:0;transition:opacity .2s}.btn.pri:hover::after{opacity:1;animation:sheen .85s cubic-bezier(.4,0,.2,1)}@keyframes sheen{from{left:-40%}to{left:130%}}.bar .stat{background:var(--glass);-webkit-backdrop-filter:blur(18px) saturate(180%);backdrop-filter:blur(18px) saturate(180%);border:1px solid var(--glass-line);border-radius:14px;box-shadow:var(--glass-sh)}.toast{background:var(--glass);-webkit-backdrop-filter:blur(24px) saturate(180%);backdrop-filter:blur(24px) saturate(180%);border:1px solid var(--glass-line);border-radius:16px;box-shadow:var(--glass-sh)}.pill{box-shadow:inset 0 1px 0 rgba(255,255,255,.18)}.btn::before,.ibtn::before,.sp span::before,.pill::before,.nav-item.on::after{content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;pointer-events:none;background:linear-gradient(160deg,var(--glass-rim-sm) 0,rgba(255,255,255,0) 42%,rgba(255,255,255,0) 58%,var(--glass-rim-sm) 100%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask-composite:exclude}.btn{background:var(--glass-btn);border-radius:13px;box-shadow:inset 0 1px 0 var(--glass-hi),0 6px 18px rgba(0,0,0,.20),0 1px 2px rgba(0,0,0,.18)}.btn:hover{background:var(--glass-btn-hi);border-color:var(--glass-rim-sm);color:var(--text);transform:translateY(-1px);box-shadow:inset 0 1px 0 var(--glass-hi),0 10px 26px rgba(0,0,0,.26)}.bar .btn{box-shadow:inset 0 1px 0 var(--glass-hi),var(--glass-sh)}.ibtn{background:var(--glass-btn);box-shadow:inset 0 1px 0 var(--glass-hi),0 4px 12px rgba(0,0,0,.16)}.ibtn:hover{background:var(--glass-btn-hi)}.sp span{position:relative;background:var(--glass-btn);box-shadow:inset 0 1px 0 var(--glass-hi)}.sp input:checked+span{box-shadow:inset 0 1px 0 rgba(255,255,255,.35),0 4px 14px var(--accent-dim)}.pill{position:relative;box-shadow:inset 0 1px 0 rgba(255,255,255,.22)}.ver-chip{position:relative;box-shadow:inset 0 1px 0 rgba(255,255,255,.20)}.nav-item{border-radius:12px}.nav-item.on{background:linear-gradient(180deg,rgba(255,255,255,.10),rgba(255,255,255,0)),var(--sb-active-bg);box-shadow:inset 0 1px 0 var(--glass-hi),0 8px 20px rgba(0,0,0,.18)}.sw .sl{background:var(--glass-field);border:1px solid var(--glass-field-brd);box-shadow:inset 0 1px 2px rgba(0,0,0,.16)}.sw input:checked+.sl{background:linear-gradient(135deg,var(--accent),var(--accent2));border-color:transparent;box-shadow:inset 0 1px 0 rgba(255,255,255,.40),0 2px 10px var(--accent-dim)}.sw .sl::before{box-shadow:0 1px 4px rgba(0,0,0,.40)}.bdg{box-shadow:inset 0 1px 0 rgba(255,255,255,.20)}.fgrp,.note,pre.code{box-shadow:inset 0 1px 0 var(--glass-hi)}.msg{box-shadow:inset 0 1px 0 rgba(255,255,255,.14)}.prog{background:var(--glass-field);border:1px solid var(--glass-field-brd);box-shadow:inset 0 1px 2px rgba(0,0,0,.14)}.steps li::before{background:var(--accent-dim);box-shadow:inset 0 1px 0 rgba(255,255,255,.22)}.dz{background:var(--err-dim);border:1px solid rgba(248,113,113,.30);border-radius:18px;-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);box-shadow:var(--glass-sh)}@supports not ((backdrop-filter:blur(1px)) or (-webkit-backdrop-filter:blur(1px))){.sidebar,.topbar{background:var(--card2)}.card{background:var(--card)}.btn,.ibtn,.sp span{background:var(--card2)}.bar .stat,.toast{background:var(--card)}}@media(prefers-reduced-motion:reduce){.bgfx i{animation:none}.btn.pri:hover::after{animation:none;opacity:0}.ibtn:hover,.btn:hover{transform:none}.view.on{animation:none}}@media(max-width:640px){:root{--glass-blur:14px}.sidebar{-webkit-backdrop-filter:blur(18px) saturate(180%);backdrop-filter:blur(18px) saturate(180%)}.bgfx i:nth-child(3),.bgfx i:nth-child(4){display:none}}@media(max-width:960px){.sidebar{position:fixed;left:12px;top:12px;height:calc(100vh - 24px);background:var(--sb-glass-m);transform:translateX(calc(-100% - 28px));transition:transform .22s ease;z-index:70;box-shadow:var(--glass-sh),inset 0 1px 0 var(--glass-hi)}.sidebar.open{transform:translateX(0)}.ibtn.hamb{display:flex}.app{padding:10px;gap:10px}.wrap{padding:0 2px 92px}.topbar{padding:10px 14px;top:10px}}@media(max-width:560px){.topbar .pill{display:none}}[data-style="material"]{--bg:var(--m-surface);--bg2:var(--m-surface-container);--card:var(--m-surface-container-low);--card2:var(--m-surface-container);--border:var(--m-outline-variant);--line:var(--m-outline-variant);--text:var(--m-on-surface);--dim:var(--m-on-surface-variant);--faint:var(--m-outline);--accent:var(--m-primary);--accent2:var(--m-tertiary);--accent-dim:var(--m-primary-container);--ok:var(--m-primary);--ok-dim:var(--m-primary-container);--err:var(--m-error);--err-dim:var(--m-error-container);--warn:var(--m-tertiary);--glass-rim:transparent;--glass-rim-sm:transparent;--glass-hi:transparent;--sb-rim:transparent;--sb-vol-a:transparent;--sb-vol-b:transparent;--m-e1:0 1px 2px rgba(0,0,0,.42),0 1px 3px 1px rgba(0,0,0,.24);--m-e2:0 1px 2px rgba(0,0,0,.42),0 2px 6px 2px rgba(0,0,0,.24);--m-e3:0 1px 3px rgba(0,0,0,.42),0 4px 8px 3px rgba(0,0,0,.24);--shadow:var(--m-e2);font-family:Roboto,"Roboto Flex","Noto Sans SC","PingFang SC","Microsoft YaHei",system-ui,sans-serif}[data-theme="light"][data-style="material"]{--m-e1:0 1px 2px rgba(0,0,0,.16),0 1px 3px 1px rgba(0,0,0,.09);--m-e2:0 1px 2px rgba(0,0,0,.16),0 2px 6px 2px rgba(0,0,0,.09);--m-e3:0 1px 3px rgba(0,0,0,.16),0 4px 8px 3px rgba(0,0,0,.09)}[data-style="material"] .bgfx{display:none}[data-style="material"] .card::before,[data-style="material"] .card::after,[data-style="material"] .sidebar::before,[data-style="material"] .sidebar::after,[data-style="material"] .topbar::after{display:none}[data-style="material"] .sidebar{background:var(--m-surface-container-low);-webkit-backdrop-filter:none;backdrop-filter:none;border:none;border-radius:16px;box-shadow:var(--m-e1)}[data-style="material"] .brand .lg{border-radius:12px;box-shadow:none}[data-style="material"] .brand .bt b{font-weight:500}[data-style="material"] .nav-item{border-radius:28px;padding:10px 16px;font-size:14px}[data-style="material"] .nav-item.on::before{display:none}[data-style="material"] .nav-item.on{background:var(--m-secondary-container);color:var(--m-on-secondary-container);font-weight:500;box-shadow:none}[data-style="material"] .nav-item:hover{background:transparent;color:var(--text)}[data-style="material"] .side-foot{border-top:1px solid var(--m-outline-variant)}[data-style="material"] .ver-chip{background:var(--m-secondary-container);color:var(--m-on-secondary-container);border-radius:8px;box-shadow:none}[data-style="material"] .topbar{background:var(--m-surface);-webkit-backdrop-filter:none;backdrop-filter:none;border:none;border-radius:16px;box-shadow:none}[data-style="material"] .topbar h1{font-weight:400;font-size:20px}[data-style="material"] .ibtn{background:transparent;border:none;border-radius:50%;color:var(--m-on-surface-variant);box-shadow:none;over${_d("Zmxvdzo=")}hidden}[data-style="material"] .ibtn:hover{background:transparent;color:var(--m-on-surface)}[data-style="material"] .ibtn:active{transform:none}[data-style="material"] .pill{background:var(--m-secondary-container);color:var(--m-on-secondary-container);border-radius:8px;box-shadow:none;padding:5px 12px;font-weight:500}[data-style="material"] .card{background:var(--m-surface-container-low);border:none;border-radius:16px;box-shadow:var(--m-e1);-webkit-backdrop-filter:none;backdrop-filter:none}[data-style="material"] .card h3{font-weight:500}[data-style="material"] .card h3 .dot{background:var(--m-primary)}[data-style="material"] .fgrp,[data-style="material"] .note,[data-style="material"] pre.code{background:var(--m-surface-container);border:1px solid var(--m-outline-variant);border-radius:12px;box-shadow:none}[data-style="material"] .note{border-left:1px solid var(--m-outline-variant)}[data-style="material"] .msg{border-radius:12px;box-shadow:none}[data-style="material"] input[type=text],[data-style="material"] input[type=password],[data-style="material"] input[type=number],[data-style="material"] select,[data-style="material"] textarea{background:transparent;border:1px solid var(--m-outline);border-radius:8px;box-shadow:none}[data-style="material"] input:focus,[data-style="material"] select:focus,[data-style="material"] textarea:focus{border-color:var(--m-primary);box-shadow:inset 0 0 0 1px var(--m-primary)}[data-style="material"] th{background:var(--m-surface-container);font-weight:500}[data-style="material"] .bdg{box-shadow:none;background:var(--m-secondary-container);color:var(--m-on-secondary-container)}[data-style="material"] .box{background:var(--m-surface-container-high);border:none;border-radius:28px;-webkit-backdrop-filter:none;backdrop-filter:none;box-shadow:var(--m-e3);corner-shape:round}[data-style="material"] .box::after{display:none}[data-style="material"] .logo{background:var(--m-primary-container);border-radius:16px;box-shadow:none}[data-style="material"] .logo svg{stroke:var(--m-on-primary-container)}[data-style="material"] .box p{color:var(--m-on-surface-variant)}[data-style="material"] .btn{background:var(--m-secondary-container);color:var(--m-on-secondary-container);border:none;border-radius:20px;box-shadow:none;font-weight:500;-webkit-mask:none;over${_d("Zmxvdzo=")}hidden}[data-style="material"] .btn:hover{background:var(--m-secondary-container);color:var(--m-on-secondary-container);transform:none;box-shadow:var(--m-e1)}[data-style="material"] .btn:active{transform:none}[data-style="material"] .btn.pri{background:var(--m-primary);color:var(--m-on-primary);box-shadow:none;border-radius:20px}[data-style="material"] .btn.pri:hover{background:var(--m-primary);color:var(--m-on-primary);box-shadow:var(--m-e1);filter:none}[data-style="material"] .btn.pri::after{display:none}[data-style="material"] .btn.sm{border-radius:18px}[data-style="material"] .btn.dgr{background:var(--m-error);color:var(--m-on-error)}[data-style="material"] .sp span{background:transparent;border:1px solid var(--m-outline);color:var(--m-on-surface-variant);border-radius:20px;box-shadow:none}[data-style="material"] .sp input:checked+span{background:var(--m-secondary-container);color:var(--m-on-secondary-container);border-color:transparent;box-shadow:none}[data-style="material"] .btn::before,[data-style="material"] .ibtn::before,[data-style="material"] .sp span::before,[data-style="material"] .nav-item::before{content:"";position:absolute;inset:0;border-radius:inherit;background:currentColor;opacity:0;-webkit-mask:none;mask:none;pointer-events:none;transition:opacity .12s}[data-style="material"] .btn:hover::before,[data-style="material"] .ibtn:hover::before,[data-style="material"] .sp span:hover::before,[data-style="material"] .nav-item:hover::before{opacity:.08}[data-style="material"] .btn:active::before,[data-style="material"] .ibtn:active::before,[data-style="material"] .sp span:active::before{opacity:.12}[data-style="material"] .card,.md-rip-host{position:relative}[data-style="material"] .nav-item,[data-style="material"] .sp span,[data-style="material"] .pill,[data-style="material"] .fgrp{position:relative;over${_d("Zmxvdzo=")}hidden}.md-rip{position:absolute;border-radius:50%;pointer-events:none;background:currentColor;opacity:0;transform:scale(0);animation:mdRip .62s cubic-bezier(.2,0,0,1) forwards}@keyframes mdRip{0%{opacity:.20;transform:scale(.25)}55%{opacity:.14}100%{opacity:0;transform:scale(1)}}@media(prefers-reduced-motion:reduce){.md-rip{display:none}}[data-style="material"] .sw .sl{background:var(--m-surface-container-highest);border:1px solid var(--m-outline);box-shadow:none}[data-style="material"] .sw input:checked+.sl{background:var(--m-primary);border-color:var(--m-primary);box-shadow:none}[data-style="material"] .sw .sl::before{box-shadow:0 1px 3px rgba(0,0,0,.30)}[data-style="material"] .prog{background:var(--m-surface-container-highest);border:none;border-radius:4px;box-shadow:none;height:8px}[data-style="material"] .prog>div{border-radius:4px;background:var(--m-primary)}[data-style="material"] .steps li::before{background:var(--m-primary-container);color:var(--m-on-primary-container);box-shadow:none}[data-style="material"] .dz{background:var(--m-error-container);border:none;border-radius:16px;-webkit-backdrop-filter:none;backdrop-filter:none;box-shadow:none}[data-style="material"] .dz h3{color:var(--m-on-error-container)}[data-style="material"] .dz p{color:var(--m-on-error-container)}[data-style="material"] .bar .stat,[data-style="material"] .toast{background:var(--m-surface-container-high);-webkit-backdrop-filter:none;backdrop-filter:none;border:none;border-radius:12px;box-shadow:var(--m-e3);color:var(--text)}[data-style="material"] .bar .btn{box-shadow:var(--m-e2)}[data-style="material"] .qr img{border-radius:12px}.seg{display:flex;gap:8px;flex-wrap:wrap}.seg button{flex:1;min-width:120px;justify-content:center}.seg button.on{background:var(--accent);color:#fff;border-color:transparent}[data-style="material"] .seg button.on{background:var(--m-primary);color:var(--m-on-primary)}.md-sw{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}.md-sw i{width:30px;height:30px;border-radius:50%;cursor:pointer;display:block;box-shadow:0 0 0 1px var(--border);transition:transform .15s}.md-sw i:hover{transform:scale(1.1)}.md-sw i.on{box-shadow:0 0 0 2px var(--accent),0 0 0 4px var(--bg2)}.md-pal{margin-top:14px;border:1px solid var(--border);border-radius:12px;over${_d("Zmxvdzo=")}hidden}.md-pal .r{display:flex;align-items:center;gap:2px;padding:3px 6px}.md-pal .r b{width:66px;flex:0 0 66px;font-size:10.5px;font-weight:500;color:var(--dim);font-family:ui-monospace,Consolas,monospace}.md-pal .r i{flex:1;height:20px;border-radius:4px;display:block;cursor:pointer;position:relative;z-index:0;transition:transform .12s ease,box-shadow .12s ease}.md-pal .r:hover b{color:var(--text)}.md-pal .r i:hover{transform:scale(1.16);z-index:3;box-shadow:0 0 0 1.5px var(--text),0 4px 10px rgba(0,0,0,.45)}.md-pal .r i.on{z-index:2;box-shadow:inset 0 0 0 2px rgba(255,255,255,.94),inset 0 0 0 4px rgba(0,0,0,.56)}.md-pal .r:first-child i{border-radius:6px 6px 4px 4px}.md-pal .r:last-child i{border-radius:4px 4px 6px 6px}.md-out{display:flex;align-items:center;gap:9px;margin-top:10px;flex-wrap:wrap;font-size:12px}.md-out .chip{width:20px;height:20px;border-radius:6px;flex:0 0 20px;display:block;box-shadow:0 0 0 1px var(--border)}.md-out .hx{font-family:ui-monospace,Consolas,monospace;color:var(--text);cursor:pointer;letter-spacing:.4px;padding:3px 7px;border-radius:7px;background:var(--bg2);box-shadow:0 0 0 1px var(--border)}.md-out .hx:hover{background:var(--card2)}.md-out .tag{color:var(--faint)}.md-seed{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}.md-seed i{width:34px;height:34px;border-radius:9px;cursor:pointer;display:block;box-shadow:0 0 0 1px var(--border);transition:transform .15s}.md-seed i:hover{transform:scale(1.08)}.md-seed i.on{box-shadow:0 0 0 2px var(--accent),0 0 0 4px var(--bg2)}

/* ===== ${_d("Q0ZOZXh0")} 自有组件层：对齐参考面板视觉 ===== */
.view-head{margin-bottom:16px}
.view-head h2{font-size:20px;font-weight:700}
.view-head p{color:var(--dim);font-size:13px;margin-top:4px}
.mark{width:34px;height:34px;flex:0 0 34px;border-radius:10px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px var(--accent-dim)}
.mark svg{width:19px;height:19px}
.mark path{stroke:#fff}
.fold{display:none}
.fold.open{display:block}
.foldbtn{margin-left:auto;flex:0 0 26px;width:26px;height:26px;padding:0;border:1px solid var(--border);border-radius:8px;background:var(--card2);color:var(--dim);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:color .18s,border-color .18s,background .18s}
.foldbtn:hover{color:var(--text);border-color:var(--accent);background:var(--accent-dim)}
.foldbtn svg{width:14px;height:14px;transition:transform .2s ease}
.foldbtn[data-open="1"] svg{transform:rotate(180deg)}
.foldbtn path{fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.card h3 .tick{width:4px;height:15px;border-radius:3px;background:linear-gradient(var(--accent),var(--accent2))}
.btn.primary{background:linear-gradient(135deg,var(--accent),var(--accent2));border-color:transparent;color:#fff;font-weight:600}
.btn.primary:hover{filter:brightness(1.06);color:#fff}
.spill input:checked + span{background:var(--accent);border-color:var(--accent);color:#fff;font-weight:600}
.note-box{background:var(--card2);border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:10px;padding:12px 14px;font-size:12.5px;color:var(--dim);line-height:1.7;margin-bottom:12px}
.danger-zone{border:1px solid var(--err);border-radius:14px;padding:16px;background:var(--err-dim)}
.steps li::before{background:var(--accent-dim);color:var(--accent)}
[data-theme="light"] .steps li::before{color:var(--accent)}
.msg.info{background:var(--accent-dim);color:var(--accent)}
[data-theme="light"] .msg.info{color:var(--accent)}
.qrbox img{border-radius:12px}
.mmodebox{border-radius:16px}
.mmodecard{border-radius:14px}
/* 开关滑块本体：${_d("Q0ZOZXh0")} 的 DOM 是 label.switch>span.sl（无 .sw 祖先），nimbus 的 .sw .sl 不匹配，须单独补回 */
.switch .sl{position:absolute;inset:0;background:var(--glass-field);border:1px solid var(--glass-field-brd);border-radius:22px;cursor:pointer;transition:.18s;box-shadow:inset 0 1px 2px rgba(0,0,0,.16)}
.switch .sl::before{content:"";position:absolute;width:16px;height:16px;left:3px;top:3px;background:#fff;border-radius:50%;transition:transform .18s;box-shadow:0 1px 4px rgba(0,0,0,.40)}
.switch input:checked+.sl{background:linear-gradient(135deg,var(--accent),var(--accent2));border-color:transparent;box-shadow:inset 0 1px 0 rgba(255,255,255,.40),0 2px 10px var(--accent-dim)}
.switch input:checked+.sl::before{transform:translateX(18px)}
[data-style="material"] .switch .sl{background:var(--m-surface-container-highest);border:1px solid var(--m-outline);box-shadow:none}
[data-style="material"] .switch input:checked+.sl{background:var(--m-primary);border-color:var(--m-primary);box-shadow:none}
[data-style="material"] .switch .sl::before{box-shadow:0 1px 3px rgba(0,0,0,.30)}
/* 按钮统一液态玻璃：半透明 + 模糊 + 内高光，与卡片/输入框同一材质 */
.btn{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);color:var(--text);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 2px 8px rgba(0,0,0,.18);transition:border-color .15s,color .15s,box-shadow .15s,transform .15s}
[data-theme="light"] .btn{background:rgba(255,255,255,.55);border:1px solid rgba(30,45,70,.10);box-shadow:inset 0 1px 0 rgba(255,255,255,.90),0 2px 8px rgba(30,45,70,.06)}
.btn:hover{border-color:var(--accent);color:var(--accent);box-shadow:inset 0 1px 0 rgba(255,255,255,.18),0 4px 14px var(--accent-dim)}
.btn.pri,.btn.primary{background:linear-gradient(135deg,var(--accent),var(--accent2));border-color:rgba(255,255,255,.18);color:#fff;box-shadow:inset 0 1px 0 rgba(255,255,255,.35),0 6px 18px var(--accent-dim)}
.btn.pri:hover,.btn.primary:hover{filter:brightness(1.08);color:#fff;box-shadow:inset 0 1px 0 rgba(255,255,255,.45),0 8px 22px var(--accent-dim)}
.btn.dgr,.btn.danger{background:var(--err-dim);border-color:rgba(248,113,113,.28);color:var(--err);box-shadow:inset 0 1px 0 rgba(255,255,255,.10)}
.ibtn{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:inset 0 1px 0 rgba(255,255,255,.14)}
[data-theme="light"] .ibtn{background:rgba(255,255,255,.55);border-color:rgba(30,45,70,.10);box-shadow:inset 0 1px 0 rgba(255,255,255,.90)}
.nav-item{background:transparent;border-color:transparent}
.nav-item.on,.nav-item:hover{background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.12);box-shadow:inset 0 1px 0 rgba(255,255,255,.12)}
[data-theme="light"] .nav-item.on,[data-theme="light"] .nav-item:hover{background:rgba(255,255,255,.55);border-color:rgba(30,45,70,.08);box-shadow:inset 0 1px 0 rgba(255,255,255,.90)}
@media (max-width:960px){.grid2,.grid3{grid-template-columns:1fr}}

</style>
</head>
<body><div class="bgfx" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
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
    <button class="ibtn hamb" id="hamb" title="菜单"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
    <h1 id="pageTitle">仪表盘</h1>
    <span class="pill" id="connPill"><span class="dot"></span><span id="connText">连接中</span></span>
    <button class="ibtn" id="themeBtn" title="切换日间 / 夜间"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path id="themeIcon" d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg></button><button class="ibtn" id="exitBtn" title="退出当前模式，回到模式选择" onclick="exitMode()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg></button>
  </div>
  <div class="wdwarn" id="wdwarn">当前运行在 *.workers.dev 域名上：订阅与节点下发功能正常；若遇连接不稳或访问受限，建议在 Cloudflare 面板绑定自定义域名后使用。</div>

  <div class="wrap" id="content">
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
      <div class="card" id="cardFilter">
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
          <div style="margin:10px 0 6px;height:8px;border-radius:6px;background:var(--card2);over${_d("Zmxvdzo=")}hidden">
            <div id="dbBar" style="height:100%;width:0%;border-radius:6px;background:linear-gradient(90deg,var(--ok),var(--accent));transition:width .5s"></div>
          </div>
          <div class="kv"><span class="k">已用额度</span><span class="v" id="dbPct">—</span></div>
        </div>
        <p class="hint" style="margin-top:10px">免费计划 100,000 次/日。在「面板设置」配置 Cloudflare 监控后即可在此查看当日用量；策略见「配额安全」。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>运行状态</h3>
        <div class="kv"><span class="k">协议</span><span class="v" id="stProto">—</span><span class="mbadge" id="stMode">—</span></div>
        <div class="kv"><span class="k">KV 持久化</span><span class="v" id="stKv">—</span></div>
        <div class="kv"><span class="k">面板入口</span><span class="v" id="stEntry">—</span></div>
      </div>
    </section>

    <!-- ===== 视图：节点配置（协议 / TLS / ECH / 落地出站） ===== -->
    <section class="view" data-view="nodes">
      <div class="view-head"><h2>节点配置</h2><p>协议、TLS/ECH、负载均衡与落地出站（保存后立即生效）</p></div>
      <div class="grid3">
        <div class="card">
          <h3><span class="tick"></span>协议开关</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-${_d("dmxlc3M=")}" checked><span class="sl"></span></label><span>${_d("VkxFU1M=")} 协议（默认开启）</span></div>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-${_d("dHJvamFu")}"><span class="sl"></span></label><span>${_d("VHJvamFu")} 协议（支持${_d("TWlob21v")}内核）</span></div>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-${_d("eGh0dHA=")}"><span class="sl"></span></label><span>${_d("WEhUVFA=")} 协议（支持${_d("TWlob21v")}内核，须绑定域名开启${_d("Z1JQQw==")}）</span></div>
          <div class="field" style="margin-top:12px"><label>${_d("VHJvamFu")} 密码（留空使用 UUID）</label><input type="text" id="tp-pass" placeholder="${_d("VHJvamFu")} 密码" autocomplete="off"></div>
        </div>
        <div class="card">
          <h3><span class="tick"></span>TLS 与传输</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="tls-only"><span class="sl"></span></label><span>仅 TLS 端口（跳过 80/8080 等明文端口）</span></div>
          <div class="field" style="margin-top:12px"><label>${_d("QUxQTg==")} 协商（h2 / http/1.1，逗号分隔）</label><input type="text" id="${_d("YWxwbg==")}" placeholder="留空自动，如 h2,http/1.1" autocomplete="off"></div>
          <p class="hint">明文端口节点（80/8080/8880/2052/2082/2086/2095）开启「仅 TLS」后从订阅剔除。</p>
        </div>
      </div>
      <div class="grid2">
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
        <p class="hint">开启后订阅节点附带 ech 参数与 ${_d("YWxwbg==")} 协商，客户端需支持 ECH 才生效。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>落地与出站</h3>
        <div class="field"><label>反代 / 落地（可填多个，英文逗号分隔；支持域名与 IP，可带两位国家代码；留空则直连失败后走内置地区出口）</label><input type="text" id="s-${_d("cHJveHlJUA==")}" placeholder="如：Proxy-HK.a.com,HK.43.132.231.159:443,8.219.155.125:443#JP" autocomplete="off"></div>
        <p class="hint">多条时按节点落地国家自动匹配。带国家代码的条目只用于该国节点，两种写法等价：域名把国家代码放在名字里（如 Proxy-HK.… 里的 HK），IP 写成前缀式 HK.1.2.3.4:443 或后缀式 1.2.3.4:443#HK（IPv6 用方括号，如 HK.[2001:db8::1]:443）。不带国家代码的条目（含纯 IP）作为通用候选，按填写顺序依次尝试。某国无对应条目时退回列表首条；只填一条时行为与旧版一致。</p>
        <div class="field"><label>出站（可选）</label><input type="text" id="s-${_d("b3V0Ym91bmQ=")}" placeholder="${_d("c29ja3M1")}://user:pass@1.2.3.4:1080 或 ${_d("c3M6Ly9jaGFjaGEyMA==")}-ietf-poly1305:密码@1.2.3.4:8388" autocomplete="off"></div>
        <p class="hint">支持 ${_d("c29ja3M1")}://（可带 user:pass@）、http(s)://、${_d("c3M6Ly8=")} 或 host:port（默认按 ${_d("c29ja3M1")}，端口 1080）。此项控制 Worker 的真实转发出口，不会作为节点字段写进订阅；验证出口 IP 时请选择“仅走出口（only）”，默认模式在代理失败时会回退直连。SS 加密支持 ${_d("YWVzLTEyOC1nY20=")} / ${_d("YWVzLTI1Ni1nY20=")} / ${_d("Y2hhY2hhMjA=")}-ietf-poly1305。</p>
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
          <div style="margin:10px 0 6px;height:10px;border-radius:6px;background:var(--card2);over${_d("Zmxvdzo=")}hidden">
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
        <div class="row" style="margin-top:10px">
          <label class="switch"><input type="checkbox" id="q-strict-on"><span class="sl"></span></label>
          <span style="font-size:13px">严格模式：当日用量高于 95% 时停止下发任何节点（保护账户免费额度）</span>
        </div>
        <p class="hint">严格模式：开启后，当日用量超过 95% 时订阅将不再下发任何节点（次日自动恢复）；关闭则沿用上方自动调节的比例收缩策略。需先在「面板设置」配置 Cloudflare 账户 ID 与 API 令牌。</p>
      </div>
      <div class="grid2">
        <div class="card">
          <h3><span class="tick"></span>下发控制</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-nl-on"><span class="sl"></span></label><span>精确节点数量控制</span></div>
          <div class="field" style="margin-top:10px"><label>精确节点上限（1-1000）</label><input type="number" id="q-nl-count" min="1" max="1000" value="300"></div>
          <p class="hint">默认开启：所有格式订阅精确下发到设定数量（默认 300，范围 1-1000），替代原 300/800 分档；勾选三种协议时总数仍为设定值。</p>
        </div>
        <div class="card">
          <h3><span class="tick"></span>CPU 超额限制</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-cpu-on"><span class="sl"></span></label><span>启用 CPU 超额限制（默认关闭）</span></div>
          <p class="hint" style="margin-top:12px">默认关闭：按设定数量完整下发。开启后对订阅生成降载 —— 节点按上限的 60% 下发（削减 40%），单次订阅请求的 CPU 消耗实测下降约 25%，用于规避免费计划 10ms/请求 的超额风险；代价是下发的节点数量相应减少。</p>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>当前下发策略</h3>
        <div class="grid3">
          <div class="field" style="margin:0"><div class="kv"><span class="k">节点数量控制</span><span class="v" id="qNl">—</span></div><div class="kv"><span class="k">精确节点上限</span><span class="v" id="qNlCount">—</span></div></div>
          <div class="field" style="margin:0"><div class="kv"><span class="k">CPU 超额限制</span><span class="v" id="qCpuLimit">—</span></div><div class="kv"><span class="k">负载均衡</span><span class="v" id="qLb">—</span></div></div>
          <div class="field" style="margin:0"><div class="kv"><span class="k">IPv6 下发</span><span class="v" id="qIp6">—</span></div></div>
        </div>
        <p class="hint" style="margin-top:10px">每次订阅请求消耗 Worker CPU（免费计划 10ms/请求）。面板按「免费额度 → 节点数」逐层设防。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>保护机制说明</h3>
        <div class="note-box">三道防线（优先级从高到低）：① 用量监控；② 自动调节（用量 ≥60% 时按比例收缩节点上限，只收紧不放大）；③ 数量上限精确限制。可选「CPU 超额限制」在以上基础上再降载。各层上限冲突取较小值，CPU 消耗始终在免费额度内。</div>
      </div>
    </section>

    <!-- ===== 视图：面板设置 ===== -->
    <!-- ===== 视图：家宽模式 ===== -->
    <section class="view" data-view="${_d("aG9tZQ==")}">
      <div class="view-head"><h2>家宽模式</h2><p>VPN Gate OpenVPN 家宽出口，经隧道前置拨号（仅 ${_d("TWlob21v")} 内核）</p></div>
      <div class="card" style="border-color:var(--accent)">
        <h3><span class="tick"></span>家宽出口</h3>
        <div class="proto-row"><label class="switch"><input type="checkbox" id="hw-on"><span class="sl"></span></label><span>VPN Gate OpenVPN （仅${_d("TWlob21v")}内核）</span></div>
        <p class="hint">- 该开关由运行模式自动控制：选「家宽模式」自动打开，切到其它模式自动关闭。<br>- 服务端不再自动拉取、缓存或 TCP 测活家宽节点；仅使用你手工保存的落地节点。<br>- 请在客户端完成延迟与可用性测试，避免 Worker 产生批量探测行为。<br>- 家宽须经隧道前置拨号；开启后订阅仅含手工家宽节点与隧道节点，默认节点不下发（自定义订阅除外）。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>VPN Gate 手写参数</h3>
        <div class="field"><label>每行一条：主机 端口 协议 地区（空格或冒号分隔，留空则自动拉取）</label>
          <textarea id="hw-cfg" rows="7" placeholder="116.12.3.63 1357 tcp JP&#10;219.100.37.10 1194 udp KR&#10;1.2.3.4:443:tcp:US"></textarea></div>
        <p class="hint" style="margin-top:8px">- 手写参数<b>优先级高于自动拉取</b>：填了就不再访问 VPN Gate 列表，订阅里出现的就是你手写的这几台。<br>- 两种写法：① 直接粘贴 VPN Gate 的 base64 配置（可加地区码前缀，如 JP: 开头）；② 主机 端口 协议 地区，同时在本框内用 ca: / cert: / key: 给出证书。<br>- 内核要求 openvpn 必须带内联证书，<b>缺少证书的行会被忽略</b>（可先点「试用并预览」看解析结果）。<br>- 端口省略默认 1194；协议省略默认 tcp（只认 tcp / udp）；地区省略默认 XX，节点名形如「家宽JP」。<br>- 认证沿用 VPN Gate 公共账号 vpn / vpn；仅 ${_d("TWlob21v")} 内核支持 openvpn 出站。</p>
        <div class="inrow" style="margin-top:10px">
          <button class="btn sm" onclick="hwCustomApply()">试用并预览</button>
          <span class="hint" id="hw-cfg-stat" style="margin:0"></span>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>使用说明</h3>
        <p class="hint" style="margin:0">本模式是 Worker 模式里的「家宽模式」独立而来，逻辑与原先完全一致：开启后订阅仅下发家宽出口与隧道前置节点。切换到其它模式即恢复对应形态，互不影响。</p>
      </div>
    </section>

    <!-- ===== 视图：${_d("TUFTUVVF")} 模式 ===== -->
    <section class="view" data-view="${_d("bWFzcXVl")}">
      <div class="view-head"><h2>${_d("TUFTUVVF")} 配置</h2><p>下发 ${_d("TUFTUVVF")} 节点由客户端直连：需 ${_d("TWlob21v")} 内核支持（${_d("Q2xhc2g=")} Verge Rev 建议在「设置 → 内核」切到 Alpha；${_d("Q2xhc2g=")}Mi / Fl${_d("Q2xhc2g=")} / ${_d("U2hhZG93cm9ja2V0")} 亦可）。不支持的内核会整份配置拒载</p></div>
      <div class="card" style="border-color:var(--accent)">
        <h3><span class="tick"></span>接入进度</h3>
        <div class="hint">${_d("TUFTUVVF")} 走<b>证书认证</b>：本服务会在首次拉取订阅时<b>自动完成注册</b>并把凭据写入你的存储，之后一直复用。你也可以在下面手工填入自己生成的凭据（优先级更高）；未取得有效凭据时不下发节点。</div>
      </div>
      <div class="grid3">
        <div class="card">
          <h3><span class="tick"></span>凭据（自动注册，可覆盖）</h3>
          <div class="field"><label class="spill"><input type="checkbox" id="x-on"> 启用 ${_d("TUFTUVVF")} 节点下发</label></div>
          <div class="field"><label>粘贴本地生成的凭据（EC 私钥 / 公钥）</label>
            <textarea id="x-conf" rows="6" placeholder="留空则由本服务自动注册；注册失败时请稍后重试"></textarea>
          </div>
          <div class="field"><label>节点名称</label><input type="text" id="x-name" placeholder="${_d("TUFTUVVF")}"></div>
          <div class="hint">不填也能用：留空时本服务自动注册。凭据只保存在你自己的存储中，不外发。</div>
        </div>
        <div class="card">
          <h3><span class="tick"></span>对端候选</h3>
          <div class="field"><label>一行一个「IP:端口」，按填写顺序尝试（最多 50 个）</label>
            <textarea id="x-eps" rows="6" placeholder="留空则使用内置官方端点组合"></textarea>
          </div>
          <div class="hint">${_d("TUFTUVVF")} 需使用本模式的官方端点；留空即使用内置组合。</div>
        </div>
        <div class="card">
          <h3><span class="tick"></span>客户端兼容</h3>
          <div class="hint">本模式产出的节点<b>只被部分客户端支持</b>；其余客户端导入后会看不到节点，或直接忽略该节点。</div>
          <div class="hint">若你的客户端不在支持范围内，请改用 Worker 模式或家宽模式。</div>
        </div>
      </div>
    </section>

    <section class="view" data-view="account">
      <div class="view-head"><h2>面板设置</h2><p>运行模式、部署基础信息：UUID、订阅路径与管理密码</p></div>
      <div class="card">
        <h3><span class="tick"></span>运行模式</h3>
        <div class="field"><label>当前模式（三种模式互不影响，可随时切换）</label>
          <div class="inrow">
            <select id="a-mode">
              <option value="worker">Worker 模式 — 使用内置节点，由本服务承载转发</option>
              <option value="${_d("bWFzcXVl")}">${_d("TUFTUVVF")} 模式 — 下发 ${_d("TUFTUVVF")} 节点，客户端直连</option>
              <option value="home">家宽模式 — 下发 VPN Gate 家宽出口，经隧道前置拨号</option>
            </select>
            <button class="btn sm" onclick="switchModeFromPanel()">切换</button>
          </div>
        </div>
        <div class="hint" id="modeHint">切换后左侧导航与各模式的配置区块会随之改变。</div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>基础配置</h3>
        <div class="field"><label>UUID（订阅节点身份）</label>
          <div class="inrow">
            <input type="text" id="a-uuid" placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" autocomplete="off">
            <button class="btn sm" onclick="genUuid()">生成</button>
          </div>
        </div>
        <div class="field"><label>自定义订阅路径（至少 3 位，仅支持大小写字母和数字；如 AAZ、aaz、A1z；留空使用 UUID）</label><input type="text" id="a-suburl" placeholder="AAZ" minlength="3" maxlength="64" pattern="[A-Za-z0-9]{3,64}" autocomplete="off"></div>
        <div class="field"><label>管理密码（留空则面板免登录）</label><input type="password" id="a-admin" placeholder="设置后访问面板需登录" autocomplete="new-password"></div>
        <p class="hint" style="margin-top:4px">部署后首次访问强制要求设置管理密码；设置后此处留空并保存可恢复免登录。</p>
        <div class="field"><label>前置节点（可选，粘贴一个节点链接）</label>
          <textarea id="a-front" rows="2" spellcheck="false" placeholder="${_d("dmxlc3M=")}://… / ${_d("dHJvamFu")}://… / ${_d("c3M6")}//… / ${_d("c29ja3M1")}://…"></textarea>
          <p class="hint" style="margin:6px 0 0">这是 ${_d("TUFTUVVF")} 模式的前置节点：下发的原生节点会通过 Mihomo <code>dialer-proxy</code> 连接它。支持 ${_d("dmxlc3M=")}（WS / XHTTP / gRPC）、${_d("dHJvamFu")}、SS、SOCKS5；<b>前置必须真实支持 UDP</b>。仅 Clash/Mihomo 格式生效，留空时 ${_d("TUFTUVVF")} 节点直连。默认 50 个端点可能使弱前置在批量测速时过载，建议在对应模式把候选缩到 3–5 个。</p>
        </div>
      </div>
      <div class="card"><h3><span class="tick"></span>外观风格<button class="foldbtn" id="mdFoldBtn" onclick="toggleMdFold()" data-open="0" title="展开色彩设置"><svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></button></h3><p class="hint" style="margin:0 0 12px">两种设计语言并存，切换只影响本机显示，不改动 Worker 配置。</p><div class="field"><label>设计语言</label><div class="inrow seg" id="styleSeg"><button class="btn" data-s="glass" onclick="setStyle('glass')">液态玻璃</button><button class="btn" data-s="material" onclick="setStyle('material')">Material</button></div></div><div id="mdBox" class="fold"><div class="field"><label>种子色（单一来源色，其余 64 色由它派生）</label><div class="inrow"><div><input type="text" id="mdSeed" placeholder="#6750A4" autocomplete="off" spellcheck="false"></div><button class="btn sm" onclick="resetSeed()">默认</button></div><div class="md-seed" id="mdSeedRow"></div></div><div class="field"><label>主题方案</label><div class="inrow seg" id="mdVarSeg"></div><p class="hint" id="mdVarDesc" style="margin:8px 0 0"></p></div><div class="md-pal" id="mdPal"></div><div class="md-out" id="mdPalOut"></div><p class="hint" style="margin:10px 0 0">单击任意色块，即把该色设为新的种子色；白圈标出当前种子色在色板中的落点。采样 AOSP「Material 设计」规范：来源色经 CAM16/HCT 展开为 5 个色调调色盘 × 13 个色调共 65 色，再按文档的颜色角色表映射。标号 N 对应 HCT 色调 (1000−N)/10。</p></div></div>
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
        <div class="kv"><span class="k">KV 持久化</span><span class="v" id="aKv">—</span></div>        <div class="kv"><span class="k">构建日期</span><span class="v">2026-09-21</span></div>
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
        <p style="font-size:13px;color:var(--dim)">${_d("WW91VHViZQ==")} @数字派：<a href="https://www.${_d("eW91dHViZQ==")}.com/@${_d("UEFJX0NO")}" target="_blank" rel="noopener">${_d("eW91dHViZQ==")}.com/@${_d("UEFJX0NO")}</a></p>
        <p style="font-size:13px;color:var(--dim);margin-top:6px">Telegram 交流群：<a href="https://${_d("dC5tZS8=")}${_d("U1pfUEFJ")}" target="_blank" rel="noopener">${_d("dC5tZS8=")}${_d("U1pfUEFJ")}</a></p>
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
<div class="mmode" id="mMode">
  <div class="mmodebox">
    <h3>选择运行模式</h3>
    <div class="msub">三种模式互不影响，之后可随时在「面板设置」里切换。模式决定面板形态与订阅下发内容，请按你的实际情况选择。</div>
    <div class="mmodegrid">
      <button class="mmodecard" onclick="pickMode('worker')">
        <b>Worker 模式</b>
        <span>使用内置节点，由本服务承载转发。开箱即用，无需额外准备任何东西。</span>
        <em>适合：先跑通、看重即开即用</em>
      </button>
      <button class="mmodecard" onclick="pickMode('${_d("bWFzcXVl")}')">
        <b>${_d("TUFTUVVF")} 模式</b>
        <span>下发 ${_d("TUFTUVVF")} 节点，同样由客户端直连。仅部分客户端支持，凭据同样自动生成与保管，无需自备配置。</span>
        <em>适合：明确知道自己的客户端支持</em>
      </button>
      <button class="mmodecard" onclick="pickMode('home')">
        <b>家宽模式</b>
        <span>下发 VPN Gate OpenVPN 家宽出口，经隧道前置拨号，客户端直连。</span>
        <em>适合：需要真实家宽出口（仅 ${_d("TWlob21v")} 内核）</em>
      </button>
    </div>
    <div class="mmodefoot"><a href="javascript:;" onclick="pickMode('worker')">先用 Worker 模式（默认）</a></div>
  </div>
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
    try { p = navigator.clipboard.writeText(t); } catch (e) { fin(${_d("ZmFsbGJhY2s=")}Copy(t)); return; }
    if (p && typeof p.then === 'function') {
      p.then(function(){ fin(true); }, function(){ fin(${_d("ZmFsbGJhY2s=")}Copy(t)); });
      setTimeout(function(){ fin(${_d("ZmFsbGJhY2s=")}Copy(t)); }, 600); // 剪贴板 API 悬空（无权限等）时回退
    } else { fin(true); }
  } else {
    fin(${_d("ZmFsbGJhY2s=")}Copy(t));
  }
}
function ${_d("ZmFsbGJhY2s=")}Copy(t){
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
  { id:'${_d("bWFzcXVl")}', name:'${_d("TUFTUVVF")} 配置', icon:'<path d="M4 7l8-4 8 4v10l-8 4-8-4zM12 3v18"/>' },
  { id:'${_d("aG9tZQ==")}', name:'家宽配置', icon:'<path d="M3 11l9-7 9 7M5 10v10h14V10M10 20v-6h4v6"/>' },
  { id:'nodes', name:'节点配置', icon:'<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12L4 7.5"/>' },
  { id:'optimizer', name:'优选配置', icon:'<path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM12 8v4l2.5 2.5M3 3l3 3"/>' },
  { id:'quota', name:'配额安全', icon:'<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6zM9 12l2 2 4-4"/>' },
  { id:'account', name:'面板设置', icon:'<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-3.5 3.6-6 8-6s8 2.5 8 6"/>' },
  { id:'about', name:'关于项目', icon:'<path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01"/>' }
];
var TITLES = { dashboard:'仪表盘', ${_d("bWFzcXVl")}:'${_d("TUFTUVVF")} 配置', ${_d("aG9tZQ==")}:'家宽配置', nodes:'节点配置', optimizer:'优选配置', quota:'配额安全', account:'面板设置', about:'关于项目' };

/* ===== 运行模式（三种模式互不影响，可随时切换） ===== */
var MODE_NAV = {
  worker: ['dashboard', 'nodes', 'optimizer', 'quota', 'account', 'about'],
  ${_d("bWFzcXVl")}: ['dashboard', '${_d("bWFzcXVl")}', 'account', 'about'],
  home: ['dashboard', '${_d("aG9tZQ==")}', 'account', 'about']
};
var MODE_SHORT = { worker: 'Worker', ${_d("bWFzcXVl")}: '${_d("TUFTUVVF")}', home: '家宽' };
var MODE_LABEL = { worker: 'Worker 模式', ${_d("bWFzcXVl")}: '${_d("TUFTUVVF")} 模式', home: '家宽模式' };
var MODE_DESC = {
  worker: '使用内置节点，由本服务承载转发，开箱即用。',
  ${_d("bWFzcXVl")}: '下发 ${_d("TUFTUVVF")} 节点，客户端直连；仅部分客户端支持。',
  home: 'VPN Gate OpenVPN 家宽出口，经隧道前置拨号（仅 ${_d("TWlob21v")} 内核）。'
};
function curMode(){ var m = CFG && CFG.mode; return MODE_NAV[m] ? m : 'worker'; }
function applyMode(){
  var m = curMode(), nav = MODE_NAV[m];
  buildNav();
  var active = document.querySelector('.nav-item.on');
  if (!active || nav.indexOf(active.getAttribute('data-v')) < 0) switchView(nav[0]);
  var h = $('modeHint');
  if (h) h.innerHTML = '当前：<b>' + MODE_LABEL[m] + '</b> — ' + MODE_DESC[m];
  var sel = $('a-mode');
  if (sel) sel.value = m;
  // 地区与线路筛选只对内置 CF 节点池有意义：${_d("TUFTUVVF")} 节点由客户端直连，不参与地区/来源筛选
  var cf = $('cardFilter');
  if (cf) cf.style.display = (m === 'worker') ? '' : 'none';
  var sm = $('stMode');
  if (sm) sm.textContent = MODE_SHORT[m] || 'Worker';
}
function exitMode(){ showMode(); }
function showMode(){ $('mMode').classList.add('show'); }
function closeMode(){ $('mMode').classList.remove('show'); }
function pickMode(m){
  if (!MODE_NAV[m]) return;
  var same = (m === curMode());
  api('config', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ mode: m }) })
    .then(function(r){
      if (!r || !r.ok) { toast((r && r.msg) || '保存失败', 'err'); return; }
      CFG = r.data;
      closeMode();
      fillForm();
      renderAll();
      applyMode();
      switchView(m === 'worker' ? 'dashboard' : m);
      toast(same ? '已应用当前模式' : ('已切换到 ' + MODE_LABEL[m]), 'ok');
    })
    .catch(function(){ toast('保存失败：无法连接服务器', 'err'); });
}
function switchModeFromPanel(){
  var m = $('a-mode').value;
  if (!MODE_NAV[m]) return;
  if (m === curMode()) { toast('已是当前模式'); return; }
  if (!confirm('切换到「' + MODE_LABEL[m] + '」？\n\n' + MODE_DESC[m] + '\n\n各模式的面板形态与订阅内容会随之改变，可随时切回。')) {
    $('a-mode').value = curMode();
    return;
  }
  pickMode(m);
}
function buildNav(){
  var nav = MODE_NAV[curMode()];
  var html = '';
  NAV.forEach(function(n){
    if (nav.indexOf(n.id) < 0) return;
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
  if (id === 'account' && typeof mdPaint === 'function') mdPaint();
}
$('hamb').addEventListener('click', function(){ $('sidebar').classList.toggle('open'); });

/* ===== Material 动态取色（移植自参考面板） ===== */
/* ---------- sRGB ↔ XYZ ↔ CAM16 ↔ HCT ---------- */
var MD_WP = [95.047, 100.0, 108.883];
var MD_XYZ2SRGB = [
  [3.2413774792388685, -1.5376652402851851, -0.49885366846268053],
  [-0.9691452513005321, 1.8758853451067872, 0.04156585616912061],
  [0.05562093689691305, -0.20395524564742123, 1.0571799111220335]
];
var MD_PI = Math.PI;
function mdClamp(a, b, x) { return x < a ? a : (x > b ? b : x); }
function mdSign(x) { return x < 0 ? -1 : (x > 0 ? 1 : 0); }
function mdDeg(d) { d = d % 360; return d < 0 ? d + 360 : d; }
var MD_LE = 216 / 24389, MD_LK = 24389 / 27;
function mdLabF(t) { return t > MD_LE ? Math.cbrt(t) : (MD_LK * t + 16) / 116; }
function mdLabInv(ft) { var f3 = ft * ft * ft; return f3 > MD_LE ? f3 : (116 * ft - 16) / MD_LK; }
function mdYFromLstar(l) { return 100 * mdLabInv((l + 16) / 116); }
function mdLstarFromY(y) { return 116 * mdLabF(y / 100) - 16; }
function mdLinear(c) { var n = c / 255; return n <= 0.040449936 ? n / 12.92 * 100 : Math.pow((n + 0.055) / 1.055, 2.4) * 100; }
function mdDelinear(c) { var n = c / 100; var d = n <= 0.0031308 ? n * 12.92 : 1.055 * Math.pow(n, 1 / 2.4) - 0.055; return mdClamp(0, 255, Math.round(d * 255)); }

/* 观看条件：D65 白点、适应亮度 11.73、背景 L*50、平均环绕，只算一次 */
var MD_VC = (function () {
  var la = (200 / MD_PI) * mdYFromLstar(50) / 100;
  var rW = MD_WP[0] * 0.401288 + MD_WP[1] * 0.650173 + MD_WP[2] * -0.051461;
  var gW = MD_WP[0] * -0.250268 + MD_WP[1] * 1.204414 + MD_WP[2] * 0.045854;
  var bW = MD_WP[0] * -0.002079 + MD_WP[1] * 0.048952 + MD_WP[2] * 0.953127;
  var f = 1.0, cc = 0.69;
  var d = mdClamp(0, 1, f * (1 - (1 / 3.6) * Math.exp((-la - 42) / 92)));
  var rgbD = [d * (100 / rW) + 1 - d, d * (100 / gW) + 1 - d, d * (100 / bW) + 1 - d];
  var k = 1 / (5 * la + 1), k4 = k * k * k * k, k4F = 1 - k4;
  var fl = k4 * la + 0.1 * k4F * k4F * Math.cbrt(5 * la);
  var n = mdYFromLstar(50) / MD_WP[1];
  var z = 1.48 + Math.sqrt(n);
  var nbb = 0.725 / Math.pow(n, 0.2);
  var af = [Math.pow(fl * rgbD[0] * rW / 100, 0.42), Math.pow(fl * rgbD[1] * gW / 100, 0.42), Math.pow(fl * rgbD[2] * bW / 100, 0.42)];
  var aa = [400 * af[0] / (af[0] + 27.13), 400 * af[1] / (af[1] + 27.13), 400 * af[2] / (af[2] + 27.13)];
  return { n: n, aw: (2 * aa[0] + aa[1] + 0.05 * aa[2]) * nbb, nbb: nbb, ncb: nbb, c: cc, nc: f, rgbD: rgbD, fl: fl, fLRoot: Math.pow(fl, 0.25), z: z };
})();

/* 正向：8 位 sRGB → { h 色相, c 色度, t 色调 } */
function mdHctFromRgb(r, g, b) {
  var rl = mdLinear(r), gl = mdLinear(g), bl = mdLinear(b);
  var x = 0.41233895 * rl + 0.35762064 * gl + 0.18051042 * bl;
  var y = 0.2126 * rl + 0.7152 * gl + 0.0722 * bl;
  var z = 0.01932141 * rl + 0.11916382 * gl + 0.95034478 * bl;
  var rC = 0.401288 * x + 0.650173 * y - 0.051461 * z;
  var gC = -0.250268 * x + 1.204414 * y + 0.045854 * z;
  var bC = -0.002079 * x + 0.048952 * y + 0.953127 * z;
  var rD = MD_VC.rgbD[0] * rC, gD = MD_VC.rgbD[1] * gC, bD = MD_VC.rgbD[2] * bC;
  var rAF = Math.pow(MD_VC.fl * Math.abs(rD) / 100, 0.42);
  var gAF = Math.pow(MD_VC.fl * Math.abs(gD) / 100, 0.42);
  var bAF = Math.pow(MD_VC.fl * Math.abs(bD) / 100, 0.42);
  var rA = mdSign(rD) * 400 * rAF / (rAF + 27.13);
  var gA = mdSign(gD) * 400 * gAF / (gAF + 27.13);
  var bA = mdSign(bD) * 400 * bAF / (bAF + 27.13);
  var a = (11 * rA - 12 * gA + bA) / 11;
  var bb = (rA + gA - 2 * bA) / 9;
  var u = (20 * rA + 20 * gA + 21 * bA) / 20;
  var p2 = (40 * rA + 20 * gA + bA) / 20;
  var hue = mdDeg(Math.atan2(bb, a) * 180 / MD_PI);
  var J = 100 * Math.pow(p2 * MD_VC.nbb / MD_VC.aw, MD_VC.c * MD_VC.z);
  var hp = hue < 20.14 ? hue + 360 : hue;
  var eHue = 0.25 * (Math.cos(hp * MD_PI / 180 + 2) + 3.8);
  var p1 = (50000 / 13) * eHue * MD_VC.nc * MD_VC.ncb;
  var t = (p1 * Math.sqrt(a * a + bb * bb)) / (u + 0.305);
  var alpha = Math.pow(t, 0.9) * Math.pow(1.64 - Math.pow(0.29, MD_VC.n), 0.73);
  return { h: hue, c: alpha * Math.sqrt(J / 100), t: mdLstarFromY(y) };
}

/* 逆向：CAM16 (J, C, H) → 线性 sRGB（未裁剪，用于色域判定） */
function mdCamToLinear(j, c, h) {
  var alpha = (c === 0 || j === 0) ? 0 : c / Math.sqrt(j / 100);
  var t = Math.pow(alpha / Math.pow(1.64 - Math.pow(0.29, MD_VC.n), 0.73), 1 / 0.9);
  var hRad = h * MD_PI / 180;
  var eHue = 0.25 * (Math.cos(hRad + 2) + 3.8);
  var ac = MD_VC.aw * Math.pow(j / 100, 1 / MD_VC.c / MD_VC.z);
  var p1 = eHue * (50000 / 13) * MD_VC.nc * MD_VC.ncb;
  var p2 = ac / MD_VC.nbb;
  var hSin = Math.sin(hRad), hCos = Math.cos(hRad);
  var gamma = (23 * (p2 + 0.305) * t) / (23 * p1 + 11 * t * hCos + 108 * t * hSin);
  var a = gamma * hCos, b = gamma * hSin;
  var rA = (460 * p2 + 451 * a + 288 * b) / 1403;
  var gA = (460 * p2 - 891 * a - 261 * b) / 1403;
  var bA = (460 * p2 - 220 * a - 6300 * b) / 1403;
  var rB = Math.max(0, 27.13 * Math.abs(rA) / (400 - Math.abs(rA)));
  var gB = Math.max(0, 27.13 * Math.abs(gA) / (400 - Math.abs(gA)));
  var bB = Math.max(0, 27.13 * Math.abs(bA) / (400 - Math.abs(bA)));
  var rC = mdSign(rA) * (100 / MD_VC.fl) * Math.pow(rB, 1 / 0.42);
  var gC = mdSign(gA) * (100 / MD_VC.fl) * Math.pow(gB, 1 / 0.42);
  var bC = mdSign(bA) * (100 / MD_VC.fl) * Math.pow(bB, 1 / 0.42);
  var rF = rC / MD_VC.rgbD[0], gF = gC / MD_VC.rgbD[1], bF = bC / MD_VC.rgbD[2];
  var X = 1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF;
  var Y = 0.38752654 * rF + 0.62144744 * gF - 0.00897398 * bF;
  var Z = -0.01584150 * rF - 0.03412294 * gF + 1.04996444 * bF;
  return [
    MD_XYZ2SRGB[0][0] * X + MD_XYZ2SRGB[0][1] * Y + MD_XYZ2SRGB[0][2] * Z,
    MD_XYZ2SRGB[1][0] * X + MD_XYZ2SRGB[1][1] * Y + MD_XYZ2SRGB[1][2] * Z,
    MD_XYZ2SRGB[2][0] * X + MD_XYZ2SRGB[2][1] * Y + MD_XYZ2SRGB[2][2] * Z
  ];
}
function mdInGamut(v) {
  return v[0] >= -0.01 && v[0] <= 100.01 && v[1] >= -0.01 && v[1] <= 100.01 && v[2] >= -0.01 && v[2] <= 100.01;
}
function mdLinToRgb(v) { return [mdDelinear(v[0]), mdDelinear(v[1]), mdDelinear(v[2])]; }

/* 求出让量化后色调等于 tone 的 CAM16 明度 J */
function mdJForTone(h, c, tone) {
  var lo = 0.01, hi = 99.9, i, mid, rgb, lt;
  for (i = 0; i < 24; i++) {
    mid = (lo + hi) / 2;
    rgb = mdLinToRgb(mdCamToLinear(mid, c, h));
    lt = mdLstarFromY(mdLinear(rgb[0]) * 0.2126 + mdLinear(rgb[1]) * 0.7152 + mdLinear(rgb[2]) * 0.0722);
    if (lt < tone) { lo = mid; } else { hi = mid; }
  }
  return (lo + hi) / 2;
}
/* HCT → sRGB：先把色度收敛到色域内（保住色调、牺牲色度），再解明度 */
function mdRgbFromHct(hue, chroma, tone) {
  var h = mdDeg(hue), t = mdClamp(0, 100, tone);
  if (!(chroma >= 1e-4) || t >= 99.9999 || t <= 0.0001) {
    var g = mdDelinear(mdYFromLstar(t));
    return [g, g, g];
  }
  var lo = 0, hi = chroma, i, mid;
  for (i = 0; i < 16; i++) {
    mid = (lo + hi) / 2;
    if (mdInGamut(mdCamToLinear(mdJForTone(h, mid, t), mid, h))) { lo = mid; } else { hi = mid; }
  }
  if (lo < 1e-4) { var g2 = mdDelinear(mdYFromLstar(t)); return [g2, g2, g2]; }
  return mdLinToRgb(mdCamToLinear(mdJForTone(h, lo, t), lo, h));
}

/* ---------- 十六进制互转 ---------- */
function mdHexToRgb(hx) {
  var s = String(hx || '').replace(/[^0-9a-fA-F]/g, '');
  if (s.length === 3) s = s[0] + s[0] + s[1] + s[1] + s[2] + s[2];
  if (s.length !== 6) return null;
  return [parseInt(s.slice(0, 2), 16), parseInt(s.slice(2, 4), 16), parseInt(s.slice(4, 6), 16)];
}
function mdRgbToHex(v) {
  return '#' + v.map(function (x) { var s = mdClamp(0, 255, Math.round(x)).toString(16); return s.length < 2 ? '0' + s : s; }).join('');
}
function mdHctFromHex(hx) { var v = mdHexToRgb(hx); return v ? mdHctFromRgb(v[0], v[1], v[2]) : { h: 0, c: 0, t: 50 }; }
function mdHexFromHct(h, c, t) { return mdRgbToHex(mdRgbFromHct(h, c, t)); }

/* ---------- 色调与主题方案 ---------- */
/* 文档的 13 个色调标号 0/10/50/100/200…1000 ↔ HCT 色调 100/99/95/90/80…0 */
var MD_TONE_LABELS = [0, 10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
function mdLabelToTone(L) { return (1000 - L) / 10; }
var MD_TONES = MD_TONE_LABELS.map(mdLabelToTone);

/* 主题方案：hue 为各调色盘相对来源色的色相偏移，chroma 为色度，
   n 为 neutral1/neutral2 色度，cap 为高色调（≥90）的色度上限。
   TONAL_SPOT 完全按文档：accent1 色度 48、高色调 40；accent2 16；accent3 色相 +60、色度 32；
   neutral1 色度 4；neutral2 色度 8。 */
var MD_VARIANTS = [
  { id: 'TONAL_SPOT', name: '色调点', desc: 'Android 默认方案，低到中等彩度', hue: [0, 0, 60], chroma: [48, 16, 32], n: [4, 8], cap: 40 },
  { id: 'VIBRANT', name: '鲜艳', desc: '次色与三色与主色同类，整体更饱和', hue: [0, 0, 60], chroma: [64, 32, 48], n: [6, 10], cap: 40 },
  { id: 'EXPRESSIVE', name: '表现力', desc: '高彩度，色相间拉开距离', hue: [0, 15, -45], chroma: [72, 36, 56], n: [8, 12], cap: 44 },
  { id: 'SPRITZ', name: '灰调', desc: '去饱和，接近灰阶', hue: [0, 0, 60], chroma: [14, 8, 18], n: [3, 5], cap: 14 }
];
function mdVariant(id) {
  for (var i = 0; i < MD_VARIANTS.length; i++) { if (MD_VARIANTS[i].id === id) return MD_VARIANTS[i]; }
  return MD_VARIANTS[0];
}

/* ---------- 由来源色派生 5 个色调调色盘 ---------- */
function mdPalettes(seedHex, variantId) {
  var src = mdHctFromHex(seedHex);
  /* 文档要求来源色的 CAM16 色度不低于 5，否则色相不稳 */
  var hue = src.h, chroma = Math.max(5, src.c);
  var V = mdVariant(variantId);
  var cap = function (c, t) { return t >= 90 ? Math.min(c, V.cap) : c; };
  var P = {
    a1: { h: hue, c: V.chroma[0] },
    a2: { h: mdDeg(hue + V.hue[1]), c: V.chroma[1] },
    a3: { h: mdDeg(hue + V.hue[2]), c: V.chroma[2] },
    n1: { h: hue, c: V.n[0] },
    n2: { h: hue, c: V.n[1] },
    err: { h: 25, c: 84 }
  };
  for (var k in P) { P[k].at = function (t) { return mdHexFromHct(this.h, cap(this.c, t), t); }; }
  P.err.at = function (t) { return mdHexFromHct(this.h, this.c, t); };
  P.seed = seedHex;
  P.sourceChroma = chroma;
  return P;
}
/* 65 色：5 个调色盘 × 13 个色调，键为文档标号 */
function mdTonal(seedHex, variantId) {
  var P = mdPalettes(seedHex, variantId);
  var out = {};
  ['a1', 'a2', 'a3', 'n1', 'n2'].forEach(function (k) {
    var row = {};
    MD_TONE_LABELS.forEach(function (L) { row[L] = P[k].at(mdLabelToTone(L)); });
    out[k] = row;
  });
  return out;
}

/* ---------- 颜色角色映射（文档「Material 库颜色属性更新」表） ---------- */
/* [角色, 调色盘, 浅色主题色调, 深色主题色调] —— 标号 N ↔ 色调 (1000-N)/10 */
var MD_ROLE_MAP = [
  ['primary', 'a1', 600, 200], ['onPrimary', 'a1', 0, 800],
  ['primaryContainer', 'a1', 100, 700], ['onPrimaryContainer', 'a1', 900, 900],
  ['secondary', 'a2', 600, 200], ['onSecondary', 'a2', 0, 800],
  ['secondaryContainer', 'a2', 100, 700], ['onSecondaryContainer', 'a2', 900, 900],
  ['tertiary', 'a3', 600, 200], ['onTertiary', 'a3', 0, 800],
  ['tertiaryContainer', 'a3', 100, 700], ['onTertiaryContainer', 'a3', 900, 900],
  ['error', 'err', 600, 200], ['onError', 'err', 0, 800],
  ['errorContainer', 'err', 100, 700], ['onErrorContainer', 'err', 900, 900],
  ['background', 'n1', 10, 900],
  ['onBackground', 'n1', 900, 100],
  ['surface', 'n1', 10, 900], ['onSurface', 'n1', 900, 100],
  ['surfaceContainerLowest', 'n1', 0, 1000], ['surfaceContainerLow', 'n1', 100, 900],
  ['surfaceContainer', 'n1', 200, 800], ['surfaceContainerHigh', 'n1', 300, 700],
  ['surfaceContainerHighest', 'n1', 400, 600],
  ['surfaceVariant', 'n2', 100, 700], ['onSurfaceVariant', 'n2', 700, 200],
  ['outline', 'n2', 500, 400], ['outlineVariant', 'n2', 200, 700],
  ['inverseSurface', 'n1', 800, 100], ['inverseOnSurface', 'n1', 100, 800],
  ['inversePrimary', 'a1', 200, 600],
  /* 遮罩与投影不随深浅翻转：M3 规定两者在任何主题下都是纯黑 */
  ['scrim', 'n1', 1000, 1000], ['shadow', 'n1', 1000, 1000],
  /* 状态层与状态内容（文档第二张表） */
  ['primaryStateContent', 'a1', 700, 200], ['primaryStateLayer', 'a1', 600, 300],
  ['secondaryStateContent', 'a2', 700, 200], ['secondaryStateLayer', 'a2', 600, 300],
  ['onPrimaryStateContent', 'a1', 0, 800], ['onPrimaryStateLayer', 'a1', 900, 800],
  ['onSecondaryStateContent', 'a2', 0, 800], ['onSecondaryStateLayer', 'a2', 900, 800],
  ['onSurfaceStateContent', 'n1', 900, 100], ['onSurfaceStateLayer', 'n1', 900, 100],
  ['onSurfaceVariantStateContent', 'n2', 700, 200], ['onSurfaceVariantStateLayer', 'n2', 700, 200],
  ['errorStateContent', 'err', 800, 200]
];
function mdRoleKey(role) {
  return role.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
/* 生成整套颜色角色；dark 为真时取深色主题列 */
function mdRoles(seedHex, variantId, dark) {
  var P = mdPalettes(seedHex, variantId);
  var out = {};
  MD_ROLE_MAP.forEach(function (row) {
    var pal = P[row[1]], L = dark ? row[3] : row[2];
    out[row[0]] = pal.at(mdLabelToTone(L));
  });
  return out;
}
/* 把角色写成 CSS 变量 */
function mdApply(seedHex, variantId, dark) {
  var r = mdRoles(seedHex, variantId, dark);
  var st = document.documentElement.style;
  for (var k in r) { st.setProperty('--m-' + mdRoleKey(k), r[k]); }
  return r;
}

/* ---------- Material 外观 ---------- */
var MD_SEED_DEF = '#6750A4';
var MD_PNAME = { a1: 'accent1', a2: 'accent2', a3: 'accent3', n1: 'neutral1', n2: 'neutral2' };
function storedStyle(){ try { return localStorage.getItem('nb_style') || 'glass'; } catch (e) { return 'glass'; } }
function storedSeed(){
  try { var v = localStorage.getItem('nb_seed'); return (v && mdHexToRgb(v)) ? v : MD_SEED_DEF; } catch (e) { return MD_SEED_DEF; }
}
function storedVariant(){ try { return localStorage.getItem('nb_variant') || 'TONAL_SPOT'; } catch (e) { return 'TONAL_SPOT'; } }
function savePref(k, v){ try { localStorage.setItem(k, v); } catch (e) {} }
function normHex(hx){ var v = mdHexToRgb(hx); return v ? mdRgbToHex(v) : null; }

/* 派生 65 色角色写入 CSS 变量；变量就绪后才挂 data-style，避免首帧闪烁 */
function mdSync(){
  var roles = mdApply(storedSeed(), storedVariant(), resolveTheme(storedTheme()) !== 'light');
  document.documentElement.setAttribute('data-style', storedStyle());
  return roles;
}
function setStyle(s){ savePref('nb_style', s); mdSync(); mdPaint(); }
function setSeed(hx){
  var v = normHex(hx); if (!v) return false;
  savePref('nb_seed', v); mdSync(); mdPaint(); return true;
}
function setVariant(id){ savePref('nb_variant', id); mdSync(); mdPaint(); }
function resetSeed(){ var i = $('mdSeed'); var s = setSeed(MD_SEED_DEF); if (i) i.value = storedSeed(); return s; }

/* ---------- 外观风格：色彩设置折叠（从「种子色」起收起） ---------- */
function mdFoldSet(open){
  var b = $('mdFoldBtn'), d = $('mdBox');
  if (!b || !d) return;
  d.classList[open ? 'add' : 'remove']('open');
  b.setAttribute('data-open', open ? '1' : '0');
  b.title = open ? '收起色彩设置' : '展开色彩设置';
}
function mdFoldInit(){
  var open = false;
  try { open = localStorage.getItem('nb_mdfold') === '1'; } catch (e) {}
  mdFoldSet(open);
}
function toggleMdFold(){
  var b = $('mdFoldBtn');
  var open = !(b && b.getAttribute('data-open') === '1');
  try { localStorage.setItem('nb_mdfold', open ? '1' : '0'); } catch (e) {}
  mdFoldSet(open);
  if (open && typeof mdPaint === 'function') mdPaint();
}

function buildOnce(el, html){
  if (!el || el.getAttribute('data-built')) return;
  el.innerHTML = html; el.setAttribute('data-built', '1');
}
/* 渲染外观卡片：风格段选、种子色板、方案段选、65 色预览 */
function mdPaint(){
  var seed = storedSeed(), variant = storedVariant(), style = storedStyle();
  var seg = document.querySelectorAll('#styleSeg button');
  for (var i = 0; i < seg.length; i++) seg[i].classList.toggle('on', seg[i].getAttribute('data-s') === style);

  var sr = $('mdSeedRow');
  if (sr) {
    buildOnce(sr, ["#6750A4","#0B57D0","#006A6A","#006E1C","#7A5900","#8B5000","#BA1A1A","#B90063","#7C6CFF","#5F6368"].map(function (c) {
      return '<i data-c="' + c + '" style="background:' + c + '" title="' + c + '"></i>';
    }).join(''));
    var its = sr.querySelectorAll('i');
    for (var j = 0; j < its.length; j++) {
      its[j].classList.toggle('on', normHex(its[j].getAttribute('data-c')) === normHex(seed));
    }
    if (!sr.getAttribute('data-bound')) {
      sr.setAttribute('data-bound', '1');
      sr.addEventListener('click', function (e) {
        var t = e.target;
        if (t && t.tagName === 'I') { var c = t.getAttribute('data-c'); var inp = $('mdSeed'); if (inp) inp.value = c; setSeed(c); }
      });
    }
  }
  var vs = $('mdVarSeg');
  if (vs) {
    buildOnce(vs, MD_VARIANTS.map(function (v) {
      return '<button class="btn sm" data-v="' + v.id + '" onclick="setVariant(\'' + v.id + '\')">' + v.name + '</button>';
    }).join(''));
    var vb = vs.querySelectorAll('button');
    for (var m = 0; m < vb.length; m++) vb[m].classList.toggle('on', vb[m].getAttribute('data-v') === variant);
  }
  var dsc = $('mdVarDesc');
  if (dsc) dsc.textContent = mdVariant(variant).desc;

  var pal = $('mdPal');
  if (pal) {
    buildOnce(pal, ['a1', 'a2', 'a3', 'n1', 'n2'].map(function (row) {
      return '<div class="r"><b>' + MD_PNAME[row] + '</b>' + MD_TONE_LABELS.map(function (L) {
        return '<i data-p="' + row + '" data-l="' + L + '"></i>';
      }).join('') + '</div>';
    }).join(''));
    var T = mdTonal(seed, variant);
    var cells = pal.querySelectorAll('i');
    var srgb = mdHexToRgb(seed), best = null, bestD = 1e9;
    for (var n = 0; n < cells.length; n++) {
      var cp = cells[n].getAttribute('data-p'), cl = cells[n].getAttribute('data-l');
      var hx = T[cp][cl], c = mdHexToRgb(hx);
      cells[n].style.background = hx;
      cells[n].setAttribute('data-hex', hx);
      cells[n].title = MD_PNAME[cp] + ' · ' + cl + ' · ' + hx + '\n单击设为种子色';
      cells[n].classList.remove('on');
      var d = Math.abs(c[0] - srgb[0]) + Math.abs(c[1] - srgb[1]) + Math.abs(c[2] - srgb[2]);
      if (d < bestD) { bestD = d; best = cells[n]; }   /* 种子色在色板中的落点 */
    }
    if (best) best.classList.add('on');
    /* 单击任一色块 → 该色成为新的种子色（与上方预设色板同一套交互） */
    if (!pal.getAttribute('data-bound')) {
      pal.setAttribute('data-bound', '1');
      pal.addEventListener('click', function (e) {
        var t = e.target;
        if (!t || t.tagName !== 'I') return;
        var hx = t.getAttribute('data-hex');
        if (!hx || !mdHexToRgb(hx)) return;
        if (normHex(hx) === normHex(storedSeed())) { toast('已是当前种子色 ' + hx); return; }
        var i = $('mdSeed'); if (i) i.value = hx;
        setSeed(hx);
        toast('种子色已更新 · ' + hx);
      });
    }
  }
  var po = $('mdPalOut');
  if (po) {
    var found = null;
    if (pal) {
      var cs = pal.querySelectorAll('i');
      for (var k = 0; k < cs.length; k++) if (cs[k].classList.contains('on')) { found = cs[k]; break; }
    }
    po.innerHTML = '<i class="chip" style="background:' + seed + '"></i>' +
      '<span class="hx" title="点击复制" onclick="copySeed()">' + seed + '</span>' +
      '<span class="tag">当前种子色' + (found
        ? ' · 落点 ' + MD_PNAME[found.getAttribute('data-p')] + ' · ' + found.getAttribute('data-l')
        : '') + '　单击色块即可改用该色</span>';
  }
  var inp = $('mdSeed');
  if (inp && document.activeElement !== inp) inp.value = seed;
}

/* 复制当前种子色 */
function copySeed(){ copyText(storedSeed()); }

/* ---------- 涟漪（Material 触控反馈） ---------- */
function mdRipple(e){
  if (storedStyle() !== 'material') return;
  if (!e.target || !e.target.closest) return;
  var host = e.target.closest('.btn,.ibtn,.nav-item,.sp span,.pill,.fgrp');
  if (!host) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var r = host.getBoundingClientRect();
  if (!r.width || !r.height) return;
  var d = Math.max(r.width, r.height) * 2;
  var sp = document.createElement('span');
  sp.className = 'md-rip';
  sp.style.width = sp.style.height = d + 'px';
  sp.style.left = (e.clientX - r.left - d / 2) + 'px';
  sp.style.top = (e.clientY - r.top - d / 2) + 'px';
  host.appendChild(sp);
  setTimeout(function () { if (sp.parentNode) sp.parentNode.removeChild(sp); }, 640);
}

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
  if (typeof mdSync === 'function') mdSync();
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
if (typeof mdFoldInit === 'function') mdFoldInit();

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
function checkUpdate(){toast("在线源码更新已移除，请手动部署新版本","ok");}

/* ===== 配置加载与回填 ===== */
function loadAll(){
  updateFreeDomainWarn();
  // 面板初始化只调用一次：分离版由前端转发一次、后端处理一次，避免 status/config/quota 三倍 invocation。
  api('bootstrap').then(function(r){
    if (r && r.ok && r.data){
      var b = r.data;
      if (b.status) renderStatus(b.status);
      CFG = b.config || {};
      fillForm();
      renderAll();
      applyMode();
      if (!CFG.mode) showMode();
      makeSub(false);
      setConn(true);
      if (b.quota) renderQuotaData(b.quota);
      else { $('qQuotaSub').textContent = '未配置'; showQuotaState('off', '未配置 Cloudflare API 用量查询'); }
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
  // Pages 部署（*.pages.dev）不展示那条 *.workers.dev 横幅：域名与文案不符
  var isPages = /\.pages\.dev$/i.test(String(location.hostname || ''));
  $('wdwarn').style.display = wd && !isPages ? 'block' : 'none';
  $('subHint').textContent = wd
    ? '节点 SNI / 订阅域名使用 *.pages.dev 或 *.workers.dev 免费域名：大陆直连会被阻断——订阅导入与更新需挂梯子，节点测延迟与连接可能全部失败。解决：在 Cloudflare 控制台为本项目绑定自定义域名，再用自定义域名打开面板重新复制订阅链接。'
    : '';
}
function renderStatus(d){
  $('stEntry').textContent = location.origin + '/' + (d.path || d.uuid || '');
  updateFreeDomainWarn();
  var kv = d.kv;
  var kvTxt = kv ? '已绑定（配置持久化）' : '未绑定（配置仅内存）';
  $('stKv').textContent = kvTxt;
  $('stKv').className = 'v ' + (kv ? 'ok' : 'bad');
  $('aKv').textContent = kvTxt;
  $('aKv').className = 'v ' + (kv ? 'ok' : 'bad');
  var v = d.version || '—';
  var kindName = (d.kind === '小说混淆版') ? '小说混淆版' : (d.kind === '混淆版') ? '混淆版' : '明文版';   // 部署形态（明文版 / 混淆版 / 小说混淆版），由后端自检
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
  $('qNlCount').textContent = nl ? (CFG.nodeLimitCount || 300) + ' 节点' : '—';
  var pc = !!(CFG && CFG.cpuLimit);
  $('qCpuLimit').textContent = pc ? '已开启（降载下发，按上限 60% 下发）' : '关闭（按设定数量完整下发）';
  $('qCpuLimit').className = 'v ' + (pc ? 'ok' : '');
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
  $('${_d("YWxwbg==")}').value = CFG.${_d("YWxwbg==")} || '';
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
  $('o-fbpool').value = o.${_d("ZmFsbGJhY2s=")}Pool || '';
  fillPort(o.port);
  $('o-threads').value = o.threads || 5;
  $('o-count').value = o.count || 20;
  $('o-fill').value = (o.fillCount == null ? 0 : o.fillCount);
  $('o-useCidr').checked = o.useCidr !== false;
  $('o-submode').value = o.subMode || '';
  $('o-subinc').value = (o.subIncludeDefault ? '1' : '0');
  $('o-rand').value = o.subRandomCount == null ? 16 : o.subRandomCount;
  $('q-nl-on').checked = !!CFG.nodeLimit;
  $('q-nl-count').value = CFG.nodeLimitCount || 300;
  $('q-cpu-on').checked = !!CFG.cpuLimit;
  $('q-clabel').value = CFG.countryLabel || '';
  $('q-lb-on').checked = CFG.loadBalance !== false;  $('q-auto-on').checked = !!CFG.quotaAuto;
  $('q-strict-on').checked = !!CFG.quotaStrict;
  $('a-uuid').value = CFG.uuid || '';
  $('a-suburl').value = CFG.subUrl || '';
  $('a-admin').value = CFG.admin || '';
  $('a-cfid').value = CFG.cfAccountId || '';
  $('q-tgtoken').value = CFG.tgBotToken || '';
  $('q-tgchat').value = CFG.tgChatID || '';
  $('a-cftoken').value = CFG.cfApiToken || '';
  $('hw-on').checked = !!CFG.homeWan;
  $('hw-cfg').value = CFG.hwCfg || '';
  $('s-${_d("cHJveHlJUA==")}').value = CFG.${_d("cHJveHlJUA==")} || '';
  $('s-${_d("b3V0Ym91bmQ=")}').value = CFG.${_d("b3V0Ym91bmQ=")}Proxy || '';
  $('s-outmode').value = CFG.${_d("b3V0Ym91bmQ=")}Mode || '';
  $('a-mode').value = curMode();
  $('a-front').value = CFG.masqueFront || '';
  $('x-on').checked = !!CFG.${_d("bWFzcXVl")}Enable;
  $('x-conf').value = CFG.${_d("bWFzcXVl")}Conf || '';
  $('x-name').value = CFG.${_d("bWFzcXVl")}Name || '${_d("TUFTUVVF")}';
  $('x-eps').value = CFG.${_d("bWFzcXVl")}Eps || '';
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
    mode: $('a-mode').value || '',
    masqueFront: $('a-front').value,
    ${_d("bWFzcXVl")}Enable: $('x-on').checked,
    ${_d("bWFzcXVl")}Conf: $('x-conf').value,
    ${_d("bWFzcXVl")}Name: $('x-name').value.trim() || '${_d("TUFTUVVF")}',
    ${_d("bWFzcXVl")}Eps: $('x-eps').value,
    uuid: $('a-uuid').value.trim(),
    subUrl: $('a-suburl').value.trim(),
    admin: $('a-admin').value,
    ${_d("YWxwbg==")}: $('${_d("YWxwbg==")}').value,
    ech: $('ech-on').checked,
    echHost: $('ech-host').value.trim() || 'cloudflare-ech.com',
    echDns: $('ech-dns').value.trim(),
    tlsOnly: $('tls-only').checked,
    nodeLimit: $('q-nl-on').checked,
    nodeLimitCount: parseInt($('q-nl-count').value) || 300,
    cpuLimit: $('q-cpu-on').checked,
    countryLabel: $('q-clabel').value,
    loadBalance: $('q-lb-on').checked,
    ipv6Mode: $('ip6-tail').checked ? 'tail' : ($('ip6-full').checked ? 'full' : 'off'),    cfAccountId: $('a-cfid').value.trim(),
    tgBotToken: $('q-tgtoken').value.trim(),
    tgChatID: $('q-tgchat').value.trim(),
    cfApiToken: $('a-cftoken').value.trim(),
    quotaAuto: $('q-auto-on').checked,
    quotaStrict: $('q-strict-on').checked,
    enable${_d("Vmxlc3M=")}: $('en-${_d("dmxlc3M=")}').checked,
    enable${_d("VHJvamFu")}: $('en-${_d("dHJvamFu")}').checked,
    ${_d("dHJvamFu")}Password: $('tp-pass').value,
    enable${_d("WGh0dHA=")}: $('en-${_d("eGh0dHA=")}').checked,
    homeWan: $('hw-on').checked,
    hwCfg: $('hw-cfg').value,
    ${_d("cHJveHlJUA==")}: $('s-${_d("cHJveHlJUA==")}').value.trim(),
    ${_d("b3V0Ym91bmQ=")}Proxy: $('s-${_d("b3V0Ym91bmQ=")}').value.trim(),
    ${_d("b3V0Ym91bmQ=")}Mode: $('s-outmode').value,
    preferredDomains: domLines.join('\n'),
    preferredIPs: ips,
    optimizer: {
      source: $('o-source').value,
      sourceURL: $('o-sourceURL').value.trim(),
      ${_d("ZmFsbGJhY2s=")}Pool: $('o-fbpool').value.trim(),
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
  var alias = $('a-suburl').value.trim().replace(/^\/+/, '').replace(/\/+$/, '').replace(/\/sub$/i, '');
  if (alias && !/^[A-Za-z0-9]{3,64}$/.test(alias)){
    toast('自定义订阅路径至少 3 位，且只能包含大小写字母和数字', 'err');
    $('a-suburl').focus();
    return;
  }
  $('a-suburl').value = alias;
  var body = collectForm();
  var btn = $('saveBtn');
  btn.disabled = true;
  api('config', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    .then(function(r){
      if (r && r.ok){
        CFG = r.data;
        // UUID 即入口路径：改 UUID 会改变入口与订阅地址，需跳转到新入口，否则停留在旧路径会落到欢迎页
        var nEntry = '/' + String((r.data && r.data.path) || '').replace(/^\/+/, '');
        if (nEntry !== '/' && nEntry !== APIPATH){
          toast('入口地址已随 UUID 变更，正在跳转…', 'ok');
          setTimeout(function(){ location.href = nEntry; }, 1200);
          return;
        }
        fillForm();
        renderAll();
        makeSub(false);
        refreshQuota();
        btn.classList.remove('dirty');
        $('savedAt').textContent = '已保存：' + new Date().toLocaleTimeString();
        toast('已保存并生效，正在刷新…', 'ok');
        setTimeout(function(){ location.reload(); }, 800);
      } else toast((r && r.msg) || '保存失败', 'err');
    })
    .catch(function(){ toast('保存失败：无法连接服务器', 'err'); })
    .then(function(){ btn.disabled = false; });
}
function hwCustomApply(){
  var el = $('hw-cfg'), st = $('hw-cfg-stat');
  if (!el || !st) return;
  var hosts = [], hasCrypto = false;
  String(el.value || '').split(/\n+/).forEach(function(line){
    var s = String(line || '').trim();
    if (!s || s.charAt(0) === '#') return;
    if (/^(ca|cert|key|tls-auth|tls-crypt)\s*[:=]/i.test(s)) { hasCrypto = true; return; }
    if (/^-{3,}/.test(s) || /^[A-Za-z0-9+/=\s]{16,}$/.test(s)) return;
    var m = /^([A-Za-z]{2})\s*[:|]\s*([\s\S]+)$/.exec(s);
    var body = s, code = '';
    if (m) { code = m[1].toUpperCase(); body = m[2].trim(); }
    var b64 = body.replace(/\s+/g, '');
    if (b64.length >= 200 && /^[A-Za-z0-9+/=]+$/.test(b64)) { hosts.push('配置(' + (code || 'XX') + ')'); return; }
    var p = body.split(/[\s:]+/).filter(Boolean);
    if (p.length) hosts.push(p[0] + ':' + (parseInt(p[1], 10) || 1194) + '/' + (/udp/i.test(p[2] || '') ? 'udp' : 'tcp'));
  });
  st.textContent = hosts.length
    ? ('解析到 ' + hosts.length + ' 条：' + hosts.slice(0, 4).join('、') + (hosts.length > 4 ? ' …' : '') + (hasCrypto ? '（含证书块）' : '（无证书块的行会被忽略）'))
    : '未解析到有效条目';
  toast(hosts.length ? ('解析到 ' + hosts.length + ' 条') : '没有解析到条目', hosts.length ? 'ok' : 'err');
}
function resetAll(){
  if (!confirm('确定重置？将清空 KV 中全部面板配置与节点记录，面板还原为初始部署状态。此操作不可恢复！')) return;
  var btn = $('resetBtn');
  btn.disabled = true;
  api('reset', { method: 'POST' })
    .then(function(r){
      if (r && r.ok){ toast(r.msg || '已重置', 'ok'); setTimeout(function(){ location.href = APIPATH; }, 900); }
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
  // 用户只填 UUID/别名段（如 AAZ），拼成 https://当前域名/AAZ/sub；留空用 UUID。
  // 填了 /sub 结尾或带前后斜杠时自动归一，格式后缀（${_d("Y2xhc2g=")}/${_d("c2luZ2JveA==")} 等）拼为 /sub/<格式>
  var custom = (window.CFG && CFG.subUrl) ? String(CFG.subUrl).trim().replace(/^\/+/, '').replace(/\/+$/, '').replace(/\/sub$/i, '') : '';
  if (custom && !/^[A-Za-z0-9]{3,64}$/.test(custom)) custom = '';
  var canonical = (window.CFG && (CFG.path || CFG.uuid)) ? ('/' + String(CFG.path || CFG.uuid).replace(/^\/+|\/+$/g, '')) : APIPATH;
  var base = custom ? (location.origin + '/' + custom) : (location.origin + canonical);
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
var __B = 'CFN' + 'ext';
function downloadSub(){
  var fmt = $('subFmt').value;
  var url = subUrlOf(fmt === 'auto' ? '' : fmt);
  // 保存名按所选格式给出（内容随管理接口返回，不再依赖响应头里的文件名）
  var names = { ${_d("Y2xhc2g=")}:__B+'.yaml', ${_d("c3Rhc2g=")}:__B+'.yaml', ${_d("c2luZ2JveA==")}:__B+'.json', ${_d("c3VyZ2U=")}:__B+'.conf', ${_d("c3VyZmJvYXJk")}:__B+'.conf', ${_d("bG9vbg==")}:__B+'.conf', ${_d("cXVhbng=")}:__B+'.conf' };
  var name = names[fmt] || __B + '.txt';
  var w = $('qrWrap');
  // 兜底出口：脚本触发的保存若被浏览器或内置 WebView 拦下，就给出一个真实链接
  // （用户手势点它一定会走浏览器原生下载，不经过脚本）
  function alt(msg){
    toast(msg, 'err');
    if (!w) return;
    w.style.display = 'block';
    w.innerHTML = '<div class="hint" style="margin-top:0">' + msg + ' 可<a href="' + url + '" download="' + name + '" style="text-decoration:underline">点此直接下载</a>，也可复制订阅链接导入客户端。</div>';
  }
  toast('正在生成 ' + name + ' …', '');
  // 与「预览」共用管理通道：订阅正文随 JSON 一并返回，
  // 不再依赖 /sub 的 Content-Disposition —— 那条响应头在部分托管环境会被改写
  api('sub?fmt=' + encodeURIComponent(fmt === 'auto' ? '' : fmt))
    .then(function(r){
      if (!r || !r.ok) throw new Error((r && r.msg) || '服务端未返回内容');
      var body = r.body || '';
      if (!body) throw new Error('订阅内容为空');
      var bu = URL.createObjectURL(new Blob([body], { type: 'application/octet-stream' }));
      var a = document.createElement('a');
      a.href = bu;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function(){ URL.revokeObjectURL(bu); }, 6e4);
      toast('已保存 ' + name + '（' + Math.max(1, Math.round(body.length / 1024)) + ' KB）', 'ok');
    })
    .catch(function(e){ alt('下载失败：' + ((e && e.message) || e)); });
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

/* 液态玻璃：高光跟随指针 */
var GLASS_EL=null,GLASS_EV=null,GLASS_RAF=0;
function glassTick(){GLASS_RAF=0;if(!GLASS_EL||!GLASS_EV)return;var r=GLASS_EL.getBoundingClientRect();if(!r.width||!r.height)return;GLASS_EL.style.setProperty('--mx',((GLASS_EV.clientX-r.left)/r.width*100).toFixed(1)+'%');GLASS_EL.style.setProperty('--my',((GLASS_EV.clientY-r.top)/r.height*100).toFixed(1)+'%');}
function bindGlass(){if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;if (typeof mdPaint === 'function') mdPaint();
document.addEventListener('pointerdown', function(e){ if (typeof mdRipple === 'function') mdRipple(e); }, true);
/* 鼠标跟随高光已按用户要求移除（原 pointermove → glassTick 沿光标刷新卡片高光） */
document.addEventListener('pointerleave',function(){GLASS_EL=null;});}
bindGlass();
</script>
</body>
</html>

`;function pn(t){const p="/"+String(t||"").replace(/^\/+/,"").replace(/\/+$/,""),i=Xe.indexOf("var APIPATH ="),j=i<0?-1:Xe.indexOf(";",i),h=i>=0&&j>i?Xe.slice(0,i)+"var APIPATH = "+JSON.stringify(p)+Xe.slice(j):Xe;return new Response(h,{status:200,headers:{"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-store, no-cache, must-revalidate","Pragma":"no-cache"}})}function Ye(t,e){return!t.admin&&!t.adminInit&&!(!e.K||"function"!=typeof e.K.get)}function Ck(t){return F(String(t&&t.uuid||"")+"|rule").slice(0,12)}function Qe(t){return(t||"").toLowerCase().includes("mozilla")}function Ze(t,e){return!!Qe(e)&&(!!(t.headers.get("Accept")||"").toLowerCase().includes("text/html")||"document"===(t.headers.get("Sec-Fetch-Dest")||"").toLowerCase()||!!t.headers.get("Upgrade-Insecure-Requests"))}async function tn(t,e){if(!e.admin)return!0;const n=(t.headers.get("Cookie")||"").match(new RegExp("(?:^|;\\s*)"+__AC+"=([^;]+)"));return!(!n||n[1]!==F(String(e.admin)))}const en=new Map,nn={sub:{cap:30,burst:10,refillMs:6e4},panel:{cap:60,burst:20,refillMs:6e4}};function rn(t,e){const n=nn[e];if(!n)return!0;const r=t.headers.get("CF-"+_d("Q29ubmVjdA==")+"ing-IP")||t.headers.get("X-Real-IP")||"";if(!r)return!0;const a=Date.now();en.size>2e3&&en.clear();const o=e+"|"+r;let s=en.get(o);s||(s={tokens:n.cap,t:a},en.set(o,s));const i=Math.floor((a-s.t)/n.refillMs);return i>0&&(s.tokens=Math.min(n.cap,s.tokens+i*n.burst),s.t=s.t+i*n.refillMs),!(s.tokens<=0||(s.tokens--,0))}function an(){return NF()}function _gt(r,s,g,f,h){try{const k=String(s&&s.API||s&&s.GATE||"").trim();if(!k)return!0;if(r.headers.get("X-CF-Api")===k||r.headers.get("X-CF-Gate")===k)return!0;if("crules"===g[0])return!0;if("websocket"===f)return!0;if("POST"===r.method&&h&&h.enableXhttp)return!0;return!1}catch(t){return!0}}function _uq(t){try{return decodeURIComponent(t)}catch(e){return t}}const _WH=`
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
`;function _W(){return new Response(_WH,{status:200,headers:{"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-store, no-cache, must-revalidate","Pragma":"no-cache"}})}function NF(){const _m=Be&&(Be.MASK||"");return"1101"===_m?_M1():"522"===_m?_M5():"off"===_m||"0"===_m?new Response("Not Found",{status:404}):_W()}function _EM(){try{return NF()}catch(t){return new Response("Service Unavailable",{status:503,headers:{"Content-Type":"text/plain; charset=utf-8","Cache-Control":"no-store"}})}}function _H(){try{return new URL(_rq.url).host}catch(t){return"localhost"}}function _M1(){const h=_H(),d=new Date(),p=function(n){return String(n).padStart(2,"0")},ts=d.getUTCFullYear()+"-"+p(d.getUTCMonth()+1)+"-"+p(d.getUTCDate())+" "+p(d.getUTCHours())+":"+p(d.getUTCMinutes())+":"+p(d.getUTCSeconds()),ry=Array.from(crypto.getRandomValues(new Uint8Array(8)),function(b){return b.toString(16).padStart(2,"0")}).join(""),ip=(_rq&&_rq.headers.get("CF-"+_d("Q29ubmVjdA==")+"ing-IP"))||"";return new Response(`<!DOCTYPE html>
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
</html>`,{status:500,headers:{"Content-Type":"text/html; charset=UTF-8","Cache-Control":"no-store, no-cache, must-revalidate","Pragma":"no-cache"}})}function _M5(){const h=_H(),d=new Date(),p=function(n){return String(n).padStart(2,"0")},ts=d.getUTCFullYear()+"-"+p(d.getUTCMonth()+1)+"-"+p(d.getUTCDate())+" "+p(d.getUTCHours())+":"+p(d.getUTCMinutes())+":"+p(d.getUTCSeconds()),ry=Array.from(crypto.getRandomValues(new Uint8Array(8)),function(b){return b.toString(16).padStart(2,"0")}).join(""),ip=(_rq&&_rq.headers.get("CF-"+_d("Q29ubmVjdA==")+"ing-IP"))||"";return new Response(`<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en-US"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en-US"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en-US"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en-US"> <!--<![endif]-->
<head>
<title>${h} | 522: ${_d("Q29ubmVjdA==")}ion timed out</title>
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
<h1><span class="cf-error-type">Error</span> <span class="cf-error-code">522</span><small class="heading-ray-id">Ray ID: ${ry} &bull; ${ts} UTC</small></h1>
<h2 class="cf-subheadline">${_d("Q29ubmVjdA==")}ion timed out</h2>
</div>
<div class="cf-section cf-wrapper">
<p>You've requested a page on a website (${h}) that is on the <a href="https://www.cloudflare.com/5xx-error-landing/">Cloudflare</a> network. Cloudflare is currently unable to reach the origin web server.</p>
</div>
<div class="cf-section cf-wrapper">
<div class="cf-error-source">
<p><strong>What can I do?</strong></p>
<p><strong>If you are the owner of this website:</strong> contact your hosting provider and let them know your web server is not completing requests. An Error 522 means that the request was able to ${_d("Y29ubmVjdA==")} to your web server, but it did not reply in time.</p>
<p><strong>If you are a visitor:</strong> please try again in a few minutes.</p>
</div>
</div>
</div>
<div class="cf-footer"><p>Cloudflare Ray ID: <strong>${ry}</strong></p><p>Your IP: ${ip} &bull; Performance &amp; security by <a href="https://www.cloudflare.com/5xx-error-landing/">Cloudflare</a></p></div>
</div>
</body>
</html>`,{status:522,headers:{"Content-Type":"text/html; charset=UTF-8","Cache-Control":"no-store, no-cache, must-revalidate","Pragma":"no-cache"}})}export default{fetch:async(r,s,i)=>async function(r,s){Be=s,_rq=r;const i=new URL(r.url),u=r.headers.get("User-Agent")||"",f=(r.headers.get("Upgrade")||"").toLowerCase();if("http:"===i.protocol)return Response.redirect(i.href.replace("http://","https://"),301);const h=await lt(s);delete h.frontHost;if(h._configError)return it({ok:!1,msg:h._configError},500);const m=h.path||h.uuid,AP=String(h.login||h.admin||"").replace(/^\/+|\/+$/g,""),g=i.pathname.replace(/^\/+|\/+$/g,"").split("/");if(!_gt(r,s,g,f,h))return an();if("crules"===g[0]&&3===g.length&&g[1]===Ck(h))return async function(t,e){const n=String(e||"").replace(/\.(mrs|yaml|yml|txt|list)$/i,""),r=l[n];if(!r)return it({ok:!1,msg:"unknown rule set"},404);const a=Date.now(),o=c.get(n);if(o&&a-o.t<36e5)return d(o.buf,r.ct);try{const e=await _cacheRead("crule:"+n,"arrayBuffer");if(e&&e.byteLength)return c.set(n,{t:a,buf:e}),d(e,r.ct)}catch(t){}let s=p.get(n);if(!s){s=(async()=>{const e=await oe(r.url,{headers:{"User-Agent":__B+"/"+VERSION,Accept:"*/*"}},2e4);if(!e.ok)throw new Error(_d("dXBzdHJlYW0=")+" HTTP "+e.status);const a=await e.arrayBuffer();if(!a||!a.byteLength)throw new Error(_d("dXBzdHJlYW0=")+" empty body");_cacheWrite("crule:"+n,a,r.ct,86400,t&&t._ctx);return c.set(n,{t:Date.now(),buf:a}),a})(),p.set(n,s);const e=()=>p.delete(n);s.then(e,e)}try{return d(await s,r.ct)}catch(t){return new Response("rule "+_d("dXBzdHJlYW0=")+" error: "+(t.message||t),{status:502,headers:{"Retry-After":"3600"}})}}(s,_uq(g[2]));if(AP&&(g[0]===AP||_uq(g[0])===AP)||"login"===g[0]&&!AP){const t=!h.admin;if("POST"===r.method){const e=await r.text(),n=new URLSearchParams(e);if(t){const t=String(n.get("password")||"");if(t.length<4)return it({ok:!1,msg:"密码至少 4 位"},400);const e=JSON.parse(JSON.stringify(h));if(e.admin=t,e.adminInit=!0,s.U||(e.uuid=_U(t)),s.D||s.PATH||(e.path=e.uuid),!await ct(s,e))return it({ok:!1,msg:"未绑定 KV 命名空间，无法保存管理密码"},500);const r=F(t);return new Response(JSON.stringify({ok:!0,next:n.get("next")||"/"+AP}),{status:200,headers:{"Content-Type":"application/json; charset=utf-8","Set-Cookie":__AC+"="+r+"; Path=/; Max-Age=86400; HttpOnly; Secure; SameSite=Lax"}})}if(h.admin&&n.get("password")===h.admin){const t=F(String(h.admin));return new Response(JSON.stringify({ok:!0,next:n.get("next")||"/"+AP}),{status:200,headers:{"Content-Type":"application/json; charset=utf-8","Set-Cookie":__AC+"="+t+"; Path=/; Max-Age=86400; HttpOnly; Secure; SameSite=Lax"}})}return it({ok:!1,msg:"密码错误"},403)}if(h.admin&&await tn(r,h))return pn(m);return h.admin?new Response("\n<!DOCTYPE html>\n<html lang=\"zh-CN\" data-theme=\"dark\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>登录</title>\n<link rel=\"icon\" href=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='3' y='3' width='18' height='18' rx='5' fill='%23f6821f'/%3E%3Cpath d='M8 15V9l8 6V9' stroke='%230d131b' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\">\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n:root{--bg:#0d1117;--card:#151d29;--border:#25303f;--text:#e9eef7;--dim:#93a3b8;--accent:#7c6cff;--accent2:#22d3ee;--accent-dim:rgba(124,108,255,.16);--err:#f87171;--err-dim:rgba(248,113,113,.13);--glass:rgba(255,255,255,.06);--glass-brd:rgba(255,255,255,.10);--hi:rgba(255,255,255,.10)}\n[data-theme=\"light\"]{--bg:#eef1f7;--card:#ffffff;--border:#dde4ee;--text:#1b2634;--dim:#5d6b7d;--accent:#6a58f5;--accent2:#0891b2;--accent-dim:rgba(106,88,245,.12);--err:#d94848;--err-dim:rgba(217,72,72,.10);--glass:rgba(255,255,255,.55);--glass-brd:rgba(255,255,255,.75);--hi:rgba(255,255,255,.85)}\nbody{background:var(--bg);color:var(--text);font-family:\"PingFang SC\",\"Microsoft YaHei\",\"Segoe UI\",system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px;position:relative}\nbody::before,body::after{content:\"\";position:fixed;border-radius:50%;filter:blur(90px);pointer-events:none;z-index:0}\nbody::before{width:480px;height:480px;left:-140px;top:-160px;background:rgba(124,108,255,.16)}\nbody::after{width:420px;height:420px;right:-120px;bottom:-140px;background:rgba(34,211,238,.10)}\n.box{position:relative;z-index:1;width:340px;max-width:100%;background:rgba(21,29,41,.72);border:1px solid var(--glass-brd);border-radius:20px;padding:30px 28px;box-shadow:0 24px 60px rgba(0,0,0,.35),inset 0 1px 0 var(--hi);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px)}\n[data-theme=\"light\"] .box{background:rgba(255,255,255,.66);border-color:rgba(30,45,70,.08);box-shadow:0 16px 44px rgba(30,45,70,.12),inset 0 1px 0 var(--hi)}\n.brand{display:flex;align-items:center;gap:10px;margin-bottom:22px}\n.mark{width:38px;height:38px;border-radius:12px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;box-shadow:0 8px 20px var(--accent-dim),inset 0 1px 0 var(--hi)}\n.mark svg{width:20px;height:20px}\n.mark path{stroke:#fff}\n.brand .bt{display:flex;flex-direction:column;line-height:1.25}\n.brand .bt b{font-size:16px}\n.brand .bt span{font-size:11.5px;color:var(--dim)}\nh1{font-size:15px;margin-bottom:4px}\np{color:var(--dim);font-size:13px;margin-bottom:18px}\ninput{width:100%;background:var(--glass);border:1px solid var(--glass-brd);color:var(--text);border-radius:12px;padding:11px 13px;font-size:14px;outline:none;margin-bottom:12px;font-family:inherit;box-shadow:inset 0 1px 0 var(--hi);transition:border-color .15s,box-shadow .15s}\ninput:focus{border-color:var(--accent);box-shadow:inset 0 1px 0 var(--hi),0 0 0 3px var(--accent-dim)}\nbutton{width:100%;background:linear-gradient(135deg,rgba(124,108,255,.85),rgba(34,211,238,.75));border:1px solid rgba(255,255,255,.22);color:#fff;border-radius:12px;padding:11px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:inset 0 1px 0 rgba(255,255,255,.38),0 8px 22px var(--accent-dim);transition:transform .15s,filter .15s,box-shadow .15s}\nbutton:hover{filter:brightness(1.08);box-shadow:inset 0 1px 0 var(--hi),0 10px 26px var(--accent-dim)}\nbutton:active{transform:translateY(1px)}\nbutton:disabled{opacity:.6;cursor:not-allowed}\n.msg{color:var(--err);font-size:13px;margin-bottom:12px;display:none;background:var(--err-dim);padding:8px 12px;border-radius:8px}\n.foot{margin-top:16px;text-align:center;font-size:11.5px;color:var(--dim)}\n</style>\n</head>\n<body>\n<div class=\"box\">\n  <div class=\"brand\">\n    <div class=\"mark\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12h4l3-7 4 14 3-7h2\"/></svg></div>\n    <div class=\"bt\"><b>CF&#78;ext 控制台</b></div>\n  </div>\n  <h1>登录</h1>\n  <p>请输入管理密码以继续</p>\n  <div class=\"msg\" id=\"msg\">密码错误，请重试</div>\n  <form id=\"form\">\n    <input type=\"password\" id=\"pwd\" placeholder=\"管理密码\" autofocus autocomplete=\"current-password\">\n    <button type=\"submit\" id=\"btn\">登录</button>\n  </form>\n  <div class=\"foot\">配置保存在 Cloudflare KV 中，密码错误 24 小时后自动失效</div>\n</div>\n<script>\n(function(){\n  var t = 'dark';\n  try { t = localStorage.getItem('tp_theme') || 'dark'; } catch(e) {}\n  var resolved = t === 'auto'\n    ? (window.matchMedia && matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')\n    : t;\n  document.documentElement.setAttribute('data-theme', resolved);\n  var next = new URLSearchParams(location.search).get('next') || location.pathname;\n  document.getElementById('form').addEventListener('submit', function(e){\n    e.preventDefault();\n    var btn = document.getElementById('btn');\n    var msg = document.getElementById('msg');\n    btn.disabled = true; msg.style.display = 'none';\n    fetch(location.pathname, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'password=' + encodeURIComponent(document.getElementById('pwd').value) + '&next=' + encodeURIComponent(next) })\n      .then(function(r){ return r.json(); })\n      .then(function(r){\n        if (r && r.ok){ location.href = r.next || '/'; }\n        else { msg.style.display = 'block'; btn.disabled = false; }\n      })\n      .catch(function(){ msg.textContent = '网络错误，请重试'; msg.style.display = 'block'; btn.disabled = false; });\n  });\n})();\n<\/script>\n</body>\n</html>\n\n",{status:200,headers:{"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-store, no-cache, must-revalidate","Pragma":"no-cache"}}):t?new Response("\n<!DOCTYPE html>\n<html lang=\"zh-CN\" data-theme=\"dark\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>初始化</title>\n<link rel=\"icon\" href=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='3' y='3' width='18' height='18' rx='5' fill='%23f6821f'/%3E%3Cpath d='M8 15V9l8 6V9' stroke='%230d131b' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\">\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n:root{--bg:#0d1117;--card:#151d29;--border:#25303f;--text:#e9eef7;--dim:#93a3b8;--accent:#7c6cff;--accent2:#22d3ee;--accent-dim:rgba(124,108,255,.16);--err:#f87171;--err-dim:rgba(248,113,113,.13);--glass:rgba(255,255,255,.06);--glass-brd:rgba(255,255,255,.10);--hi:rgba(255,255,255,.10)}\n[data-theme=\"light\"]{--bg:#eef1f7;--card:#ffffff;--border:#dde4ee;--text:#1b2634;--dim:#5d6b7d;--accent:#6a58f5;--accent2:#0891b2;--accent-dim:rgba(106,88,245,.12);--err:#d94848;--err-dim:rgba(217,72,72,.10);--glass:rgba(255,255,255,.55);--glass-brd:rgba(255,255,255,.75);--hi:rgba(255,255,255,.85)}\nbody{background:var(--bg);color:var(--text);font-family:\"PingFang SC\",\"Microsoft YaHei\",\"Segoe UI\",system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px;position:relative}\nbody::before,body::after{content:\"\";position:fixed;border-radius:50%;filter:blur(90px);pointer-events:none;z-index:0}\nbody::before{width:480px;height:480px;left:-140px;top:-160px;background:rgba(124,108,255,.16)}\nbody::after{width:420px;height:420px;right:-120px;bottom:-140px;background:rgba(34,211,238,.10)}\n.box{position:relative;z-index:1;width:340px;max-width:100%;background:rgba(21,29,41,.72);border:1px solid var(--glass-brd);border-radius:20px;padding:30px 28px;box-shadow:0 24px 60px rgba(0,0,0,.35),inset 0 1px 0 var(--hi);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px)}\n[data-theme=\"light\"] .box{background:rgba(255,255,255,.66);border-color:rgba(30,45,70,.08);box-shadow:0 16px 44px rgba(30,45,70,.12),inset 0 1px 0 var(--hi)}\n.brand{display:flex;align-items:center;gap:10px;margin-bottom:22px}\n.mark{width:38px;height:38px;border-radius:12px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;box-shadow:0 8px 20px var(--accent-dim),inset 0 1px 0 var(--hi)}\n.mark svg{width:20px;height:20px}\n.mark path{stroke:#fff}\n.brand .bt{display:flex;flex-direction:column;line-height:1.25}\n.brand .bt b{font-size:16px}\n.brand .bt span{font-size:11.5px;color:var(--dim)}\nh1{font-size:15px;margin-bottom:4px}\np{color:var(--dim);font-size:13px;margin-bottom:18px}\ninput{width:100%;background:var(--glass);border:1px solid var(--glass-brd);color:var(--text);border-radius:12px;padding:11px 13px;font-size:14px;outline:none;margin-bottom:12px;font-family:inherit;box-shadow:inset 0 1px 0 var(--hi);transition:border-color .15s,box-shadow .15s}\ninput:focus{border-color:var(--accent);box-shadow:inset 0 1px 0 var(--hi),0 0 0 3px var(--accent-dim)}\nbutton{width:100%;background:linear-gradient(135deg,rgba(124,108,255,.85),rgba(34,211,238,.75));border:1px solid rgba(255,255,255,.22);color:#fff;border-radius:12px;padding:11px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:inset 0 1px 0 rgba(255,255,255,.38),0 8px 22px var(--accent-dim);transition:transform .15s,filter .15s,box-shadow .15s}\nbutton:hover{filter:brightness(1.08);box-shadow:inset 0 1px 0 var(--hi),0 10px 26px var(--accent-dim)}\nbutton:active{transform:translateY(1px)}\nbutton:disabled{opacity:.6;cursor:not-allowed}\n.msg{color:var(--err);font-size:13px;margin-bottom:12px;display:none;background:var(--err-dim);padding:8px 12px;border-radius:8px}\n.foot{margin-top:16px;text-align:center;font-size:11.5px;color:var(--dim)}\n</style>\n</head>\n<body>\n<div class=\"box\">\n  <div class=\"brand\">\n    <div class=\"mark\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12h4l3-7 4 14 3-7h2\"/></svg></div>\n    <div class=\"bt\"><b>CF&#78;ext 控制台</b></div>\n  </div>\n  <h1>设置管理密码</h1>\n  <p>部署后首次访问请设置管理密码。设置后访问面板需登录。</p>\n  <div class=\"msg\" id=\"msg\">设置失败，请重试</div>\n  <form id=\"form\">\n    <input type=\"password\" id=\"pwd\" placeholder=\"设置管理密码（至少 4 位）\" autofocus autocomplete=\"new-password\">\n    <input type=\"password\" id=\"pwd2\" placeholder=\"确认管理密码\" autocomplete=\"new-password\">\n    <button type=\"submit\" id=\"btn\">设置并进入面板</button>\n  </form>\n  <div class=\"foot\">密码保存在 Cloudflare KV 中，之后可在「面板设置」中修改</div>\n</div>\n<script>\n(function(){\n  var t = 'dark';\n  try { t = localStorage.getItem('tp_theme') || 'dark'; } catch(e) {}\n  var resolved = t === 'auto'\n    ? (window.matchMedia && matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')\n    : t;\n  document.documentElement.setAttribute('data-theme', resolved);\n  var next = new URLSearchParams(location.search).get('next') || location.pathname;\n  document.getElementById('form').addEventListener('submit', function(e){\n    e.preventDefault();\n    var p1 = document.getElementById('pwd').value, p2 = document.getElementById('pwd2').value;\n    var msg = document.getElementById('msg');\n    var btn = document.getElementById('btn');\n    if (p1.length < 4) { msg.textContent = '密码至少 4 位'; msg.style.display = 'block'; return; }\n    if (p1 !== p2) { msg.textContent = '两次输入的密码不一致'; msg.style.display = 'block'; return; }\n    btn.disabled = true; msg.style.display = 'none';\n    fetch(location.pathname, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'setup=1&password=' + encodeURIComponent(p1) + '&next=' + encodeURIComponent(next) })\n      .then(function(r){ return r.json(); })\n      .then(function(r){\n        if (r && r.ok){ location.href = r.next || '/'; }\n        else { msg.textContent = (r && r.msg) || '设置失败，请重试'; msg.style.display = 'block'; btn.disabled = false; }\n      })\n      .catch(function(){ msg.textContent = '网络错误，请重试'; msg.style.display = 'block'; btn.disabled = false; });\n  });\n})();\n<\/script>\n</body>\n</html>\n\n",{status:200,headers:{"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-store, no-cache, must-revalidate","Pragma":"no-cache"}}):an()}const b=(t=>/^[A-Za-z0-9]{3,64}$/.test(t)?t:"")(String(h.subUrl||"").trim().replace(/^\/+/,"").replace(/\/+$/,"").replace(/\/sub$/i,"")),v=g[0]===m||!!b&&g[0]===b;if(""===g[0])return an();if(v&&1===g.length){if("websocket"===f)return Gt(r,h);if("POST"===r.method&&h.enableXhttp)try{return await async function(t,e){const n=t.body.getReader(),r=await n.read();if(r.done)return new Response("empty",{status:400});const a=bt(r.value),o=await Bt(a,e,t.cf&&t.cf.colo,0,jt(r.value.subarray(a.headerLength))),s=o.writable.getWriter();await s.write(r.value.subarray(a.headerLength)),(async()=>{try{for(;;){const{done:t,value:e}=await n.read();if(t)break;await s.write(e)}}catch(t){}try{await s.close()}catch(t){}})();const i=new ReadableStream({async start(t){t.enqueue(new Uint8Array([0,0])),o._preamble&&o._preamble.byteLength>0&&t.enqueue(o._preamble);const e=o.readable.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;t.enqueue(r)}}catch(t){}try{t.close()}catch(t){}try{o.close()}catch(t){}},cancel(){try{o.close()}catch(t){}}});return new Response(i,{status:200,headers:{"content-type":"application/octet-stream","x-accel-buffering":"no","cache-control":"no-store"}})}(r,h)}catch(t){return it({ok:!1,msg:_d("eGh0dHA=")+" 错误: "+(t.message||t)},500)}}if(v&&"sub"===g[1]){if(!rn(r,"sub"))return an();const t=g.length>=3?g[2]:"";try{if(s._ctx&&"function"==typeof s._ctx.waitUntil)s._ctx.waitUntil(mt(s,h));else try{await mt(s,h)}catch(t){}if(h.quotaDisabled)return new Response(__B+"：账户当日额度已达 99%，订阅已自动停用（次日自动恢复）",{status:403,headers:{"Content-Type":"text/plain; charset=utf-8"}});if(h.quotaStrict)try{const q=await gt(s,h);if(q&&q.configured&&"number"==typeof q.percent&&q.percent>95)return new Response(__B+"：严格模式已启用，当日额度已达 "+q.percent+"%（阈值 95%），已停止下发任何节点（次日自动恢复）",{status:403,headers:{"Content-Type":"text/plain; charset=utf-8"}})}catch(q){}const n=h;if(h.quotaAuto)try{const t=await gt(s,h);if(t.configured&&t.today&&t.today.requests>=Math.round(6e4)){const e=t.today.requests/t.limit,r=Math.max(.1,(1-e)/.4);n._quotaCap=Math.max(20,Math.round(1e3*r))}}catch(t){}const a=await async function(){const _p=h.preferredIPs||[],_fk=(function(){try{let _x=2166136261;const _s=JSON.stringify(h);for(let _i=0;_i<_s.length;_i++)_x=Math.imul(_x^_s.charCodeAt(_i),16777619);return(_x>>>0).toString(36)}catch(_e){return"0"}})(),_subTtl=Math.max(60,Math.min(3600,Number(h.subCacheTtl)||300))*1000,_k=[h.uuid,r.url,t,u,_p.length,_p[0]&&_p[0].ip||"",h.nodeLimitCount,h.enableVless?1:0,h.enableTrojan?1:0,h.enableXhttp?1:0,h.optimizer&&h.optimizer.subMode||"",h.host||"",h.homeWan?1:0,h._quotaCap||0,String(h.mode||""),h.masqueEnable?1:0,(h.masqueConf||"").length,_fk].join("|"),_n=Date.now(),_c=_SUBC.get(_k);if(_c&&_n-_c.t<_subTtl)return _c.r;const _r=await Je(n,r.url,t,u,r.cf&&r.cf.colo,r.cf&&r.cf.country,s);return _SUBC.size>=32&&(function(){let _ok=null,_ot=1/0;for(const[_a,_b]of _SUBC)_b.t<_ot&&(_ot=_b.t,_ok=_a);_ok&&_SUBC.delete(_ok)})(),_SUBC.set(_k,{r:_r,t:_n}),_r}();const o={[_d("Y2xhc2g=")]:__B+".yaml",[_d("c3Rhc2g=")]:__B+".yaml",[_d("c2luZ2JveA==")]:__B+".json",[_d("c3VyZ2U=")]:__B+".conf",[_d("c3VyZmJvYXJk")]:__B+".conf",[_d("bG9vbg==")]:__B+".conf",[_d("cXVhbng=")]:__B+".conf"}[t]||__B;return new Response(a.body,{status:200,headers:{"Content-Type":a.type+"; charset=utf-8","Cache-Control":"no-store","Content-Disposition":'attachment; filename="'+o+"\"; filename*=utf-8''"+o}})}catch(t){return new Response("订阅生成失败: "+(t&&t.message||t),{status:500,headers:{"Content-Type":"text/plain; charset=utf-8"}})}}if(v&&1===g.length&&Ze(r,u))return rn(r,"panel")?await tn(r,h)?pn(m):an():an();if(v&&"api"===g[1]){if(!rn(r,"panel"))return an();const l=g[2]||"";if(Ye(h,s))return Ze(r,u)||r.headers.get("Cookie")?it({ok:!1,status:403,msg:"请先完成首次设置：设置管理密码后再访问面板"},403):NF();if(!await tn(r,h))return Ze(r,u)||r.headers.get("Cookie")?it({ok:!1,status:403,msg:"未授权（需要管理密码）"},403):NF();if("config"===l){if("GET"===r.method)return it({ok:!0,data:Object.assign({},h,{version:VERSION})});if("POST"===r.method)try{const t=await r.json();if(Object.prototype.hasOwnProperty.call(t,"subUrl")){const _su=String(t.subUrl||"").trim().replace(/^\/+/,"").replace(/\/+$/,"").replace(/\/sub$/i,"");if(_su&&!/^[A-Za-z0-9]{3,64}$/.test(_su))return it({ok:!1,msg:"自定义订阅路径至少 3 位，且只能包含大小写字母和数字"},400);t.subUrl=_su}let e=!1;if(s.K&&"function"==typeof s.K.get)try{const t=await s.K.get("config"),_old=t?await _cfgOpen(s,t):null;_old&&void 0!==_old.quotaAuto&&(e=!0)}catch(t){}const n=Object.assign(JSON.parse(JSON.stringify(h)),t);"home"===String(n.mode||"").toLowerCase()?(n.homeWan=!0):(n.homeWan=!1),e||!1!==n.quotaAuto||Boolean(n.cfAccountId&&n.cfApiToken||s.CF_ACCOUNT_ID&&s.CF_API_TOKEN)&&(n.quotaAuto=!0),t.optimizer&&"object"==typeof t.optimizer&&(n.optimizer=Object.assign(n.optimizer,t.optimizer)),t.preferredIPs&&Array.isArray(t.preferredIPs)&&(n.preferredIPs=t.preferredIPs),delete n.frontHost,await ct(s,n);const a=await lt(s,r.url);return it({ok:!0,data:Object.assign({},a,{version:VERSION}),msg:"已保存并生效"})}catch(t){return it({ok:!1,msg:"保存失败: "+(t.message||t)},500)}}if("reset"===l){if("POST"!==r.method)return it({ok:!1,msg:"仅支持 POST"},405);try{if(!s.K||"function"!=typeof s.K.delete)return it({ok:!1,msg:"未绑定 KV 命名空间，无需重置"},400);await s.K.delete("config");const _ac=__AC+"=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax";return new Response(JSON.stringify({ok:!0,msg:"已重置：KV 已清空，面板还原为初始部署状态"}),{status:200,headers:{"Content-Type":"application/json; charset=utf-8","Set-Cookie":_ac}})}catch(t){return it({ok:!1,msg:"重置失败: "+(t.message||t)},500)}}if("bootstrap"===l&&"GET"===r.method){let _bq=null;try{_bq=await gt(s,h)}catch(_be){}return it({ok:!0,data:{config:Object.assign({},h,{version:VERSION}),status:{version:VERSION,kind:"novel"===e()?"小说混淆版":"obfuscated"===e()?"混淆版":"明文版",host:i.hostname,path:m,region:r.cf&&r.cf.colo||"unknown",visitorCountry:r.cf&&r.cf.country||"",usageColo:r.cf&&r.cf.colo||"",kv:!(!s.K||"function"!=typeof s.K.get),workersDev:/\.workers\.dev$/i.test(i.hostname),adminEnv:!!(s.ADMIN||s.admin)},quota:_bq}})};if("status"===l)return it({ok:!0,data:{version:VERSION,kind:"novel"===e()?"小说混淆版":"obfuscated"===e()?"混淆版":"明文版",host:i.hostname,path:m,region:r.cf&&r.cf.colo||"unknown",visitorCountry:r.cf&&r.cf.country||"",usageColo:r.cf&&r.cf.colo||"",kv:!(!s.K||"function"!=typeof s.K.get),workersDev:/\.workers\.dev$/i.test(i.hostname),adminEnv:!!(s.ADMIN||s.admin)}});if("update"===l)return it({ok:!1,msg:"在线源码更新已移除，请手动部署新版本"},410);if("quota"===l)try{return it({ok:!0,data:await gt(s,h)})}catch(t){return it({ok:!1,msg:"查询失败: "+(t.message||t)},500)}if("sub"===l){const t=i.searchParams.get("fmt")||"";try{const e=await Je(h,r.url,t,u,r.cf&&r.cf.colo,r.cf&&r.cf.country,s);return it({ok:!0,type:e.type,body:e.body})}catch(t){return it({ok:!1,msg:"订阅生成失败: "+(t.message||t)},500)}}if("candidates"===l){if("POST"!==r.method)return it({ok:!1,msg:"仅支持 POST"},405);try{const t=await r.json().catch(()=>({})),e=await Jt(Object.assign({},h.optimizer,t));if(!e.candidates.length){const t=e.stats||{},n=[t.presetErr&&"预设源: "+t.presetErr,t.customErr&&"自定义源: "+t.customErr].filter(Boolean).join("；");return it({ok:!1,msg:"没有可测的 IP"+(n?"（"+n+"）":"，请换一个数据源")},400)}return it({ok:!0,data:e.candidates,stats:e.stats})}catch(t){return it({ok:!1,msg:"拉取失败: "+(t.message||t)},500)}}if("hwlist"===l||"hwrefresh"===l)return it({ok:!1,msg:"服务端批量探测已移除，请使用客户端测速"},410);if("domains"===l)try{const t=N[i.searchParams.get("source")||"wetest_cname"]||N.wetest_cname,e=await fetch(t.url,{headers:{"User-Agent":"Mozilla/5.0"},signal:AbortSignal.timeout(6e3)});return e.ok?it({ok:!0,data:function(t){const e=new Set,n=[],r=/(?:\*\.)?(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}/gi;let a;for(;a=r.exec(t);){const t=a[0].toLowerCase();!e.has(t)&&(t.includes("cloudflare")||t.includes(_d("YmVzdGNm"))||t.includes("182682")||t.includes(_d("MDkwMjI3"))||t.endsWith(".xyz")||t.endsWith(".top"))&&(e.add(t),n.push(t))}return n.slice(0,10)}(await e.text())}):it({ok:!1,msg:"拉取失败 HTTP "+e.status})}catch(t){return it({ok:!1,msg:"拉取失败: "+(t.message||t)},500)}}return NF()}(r,Object.assign({},s,{_ctx:i})).catch(_EM),scheduled:async(t,e,n)=>{try{const t=await lt(e);(t.tgBotToken&&t.tgChatID||t.quotaAuto||t.quotaStrict)&&await mt(e,t)}catch(t){}}};
