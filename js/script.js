/* MONOLITH TEAM — Social Network Analyzer · behaviour */

/* ===== Login background fallback frames ===== */
window.LFRAMES=["assets/login/frame-001.jpg", "assets/login/frame-002.jpg", "assets/login/frame-003.jpg", "assets/login/frame-004.jpg", "assets/login/frame-005.jpg", "assets/login/frame-006.jpg", "assets/login/frame-007.jpg", "assets/login/frame-008.jpg", "assets/login/frame-009.jpg", "assets/login/frame-010.jpg", "assets/login/frame-011.jpg", "assets/login/frame-012.jpg", "assets/login/frame-013.jpg", "assets/login/frame-014.jpg", "assets/login/frame-015.jpg", "assets/login/frame-016.jpg", "assets/login/frame-017.jpg", "assets/login/frame-018.jpg", "assets/login/frame-019.jpg", "assets/login/frame-020.jpg", "assets/login/frame-021.jpg", "assets/login/frame-022.jpg", "assets/login/frame-023.jpg", "assets/login/frame-024.jpg", "assets/login/frame-025.jpg", "assets/login/frame-026.jpg", "assets/login/frame-027.jpg", "assets/login/frame-028.jpg", "assets/login/frame-029.jpg", "assets/login/frame-030.jpg", "assets/login/frame-031.jpg", "assets/login/frame-032.jpg", "assets/login/frame-033.jpg"];

/* ===== Main application ===== */
/* MONOLITH TEAM — Social Network Analyzer (main script) */
/* ===== Login background video ===== */
{const v=document.getElementById("loginVid"),cv=document.getElementById("loginFrames");
let fbOn=false,fbStop=false;
function fallback(){if(fbOn||!cv||!window.LFRAMES)return;fbOn=true;const cx=cv.getContext("2d"),imgs=[];let loaded=0;
 window.LFRAMES.forEach((u,i)=>{const im=new Image();im.onload=()=>{loaded++};im.src=u;imgs.push(im)});
 cv.width=960;cv.height=540;const n=imgs.length,per=1000/6,t0=performance.now();
 (function draw(){if(fbStop)return;const t=(performance.now()-t0)/per,i=Math.floor(t)%n,j=(i+1)%n,f=t-Math.floor(t);
  const a=imgs[i],b=imgs[j];if(a&&a.complete&&a.naturalWidth){cx.globalAlpha=1;cx.drawImage(a,0,0,960,540);if(b&&b.complete&&b.naturalWidth){cx.globalAlpha=f;cx.drawImage(b,0,0,960,540)}}
  requestAnimationFrame(draw)})()}
if(v){v.muted=true;const go=()=>{const q=v.play();if(q&&q.catch)q.catch(()=>{})};go();document.addEventListener("click",go,{once:true});
 v.addEventListener("playing",()=>{if(v.currentTime>0||true){fbStop=true}});
 v.addEventListener("error",fallback);
 setTimeout(()=>{if(v.paused||v.readyState<3||v.currentTime<0.1)fallback()},2500);
 setTimeout(()=>{if(v.paused||v.currentTime<0.1)fallback()},5000)}else fallback()}
window.SLIDES=["assets/slides/slide-001.webp", "assets/slides/slide-002.webp", "assets/slides/slide-003.webp", "assets/slides/slide-004.webp", "assets/slides/slide-005.webp", "assets/slides/slide-006.webp", "assets/slides/slide-007.webp", "assets/slides/slide-008.webp", "assets/slides/slide-009.webp", "assets/slides/slide-010.webp", "assets/slides/slide-011.webp", "assets/slides/slide-012.webp", "assets/slides/slide-013.webp", "assets/slides/slide-014.webp", "assets/slides/slide-015.webp", "assets/slides/slide-016.webp", "assets/slides/slide-017.webp", "assets/slides/slide-018.webp", "assets/slides/slide-019.webp", "assets/slides/slide-020.webp", "assets/slides/slide-021.webp", "assets/slides/slide-022.webp", "assets/slides/slide-023.webp", "assets/slides/slide-024.webp", "assets/slides/slide-025.webp", "assets/slides/slide-026.webp", "assets/slides/slide-027.webp", "assets/slides/slide-028.webp", "assets/slides/slide-029.webp", "assets/slides/slide-030.webp", "assets/slides/slide-031.webp", "assets/slides/slide-032.webp", "assets/slides/slide-033.webp", "assets/slides/slide-034.webp", "assets/slides/slide-035.webp", "assets/slides/slide-036.webp", "assets/slides/slide-037.webp", "assets/slides/slide-038.webp", "assets/slides/slide-039.webp", "assets/slides/slide-040.webp", "assets/slides/slide-041.webp", "assets/slides/slide-042.webp", "assets/slides/slide-043.webp", "assets/slides/slide-044.webp", "assets/slides/slide-045.webp", "assets/slides/slide-046.webp", "assets/slides/slide-047.webp", "assets/slides/slide-048.webp", "assets/slides/slide-049.webp", "assets/slides/slide-050.webp", "assets/slides/slide-051.webp", "assets/slides/slide-052.webp", "assets/slides/slide-053.webp", "assets/slides/slide-054.webp", "assets/slides/slide-055.webp", "assets/slides/slide-056.webp", "assets/slides/slide-057.webp", "assets/slides/slide-058.webp", "assets/slides/slide-059.webp", "assets/slides/slide-060.webp", "assets/slides/slide-061.webp", "assets/slides/slide-062.webp", "assets/slides/slide-063.webp", "assets/slides/slide-064.webp", "assets/slides/slide-065.webp", "assets/slides/slide-066.webp", "assets/slides/slide-067.webp", "assets/slides/slide-068.webp", "assets/slides/slide-069.webp", "assets/slides/slide-070.webp", "assets/slides/slide-071.webp", "assets/slides/slide-072.webp", "assets/slides/slide-073.webp", "assets/slides/slide-074.webp", "assets/slides/slide-075.webp", "assets/slides/slide-076.webp", "assets/slides/slide-077.webp", "assets/slides/slide-078.webp", "assets/slides/slide-079.webp", "assets/slides/slide-080.webp", "assets/slides/slide-081.webp", "assets/slides/slide-082.webp", "assets/slides/slide-083.webp", "assets/slides/slide-084.webp", "assets/slides/slide-085.webp", "assets/slides/slide-086.webp", "assets/slides/slide-087.webp", "assets/slides/slide-088.webp", "assets/slides/slide-089.webp", "assets/slides/slide-090.webp", "assets/slides/slide-091.webp", "assets/slides/slide-092.webp", "assets/slides/slide-093.webp", "assets/slides/slide-094.webp", "assets/slides/slide-095.webp", "assets/slides/slide-096.webp", "assets/slides/slide-097.webp", "assets/slides/slide-098.webp"];window.SLIDE_TITLES=["Social Network", "Presentation Overview", "Introduction To Social Network Analyzer", "Understanding Digital Connections", "What Is A Social Network Analyzer?", "What Is Social Network", "Basic Components Of Social Network Analysis", "Understanding Network", "Purpose Of Social Network Analyzer", "Understand Connection", "Identify Important Relationships", "Detect Unusual", "Better Decision-Making", "What Is Social Network?", "How Social Networks Work.", "Types Of Social Networks. Social Networking Media Sharing Pr", "Advantages Of Social Networks", "Risks And Safety Of Social Networks", "What Is Social Network Data? Information Related To Users' P", "Types Of Social Network Data.", "Sources Of Social Network Data.", "Methods Of Collecting Social Network Data.", "Uses Of Social Network Data Business Education Research", "Advantages And Challenges Of Social Network Data.", "Example Of Social Network Here Are Some Study Tips To Help", "What Is Data? Data Is Information Collected For Research, St", "What Is Definition Example Data Collection?", "Importance Of Data Collection.", "Types Of Data Primary Data Secondary Data", "Quantitative And Qualitative Data. Quantitative Data Qualita", "Data Collection Methods", "Data Collection Process", "Data Quality And Ethics", "Practical Example Of Data Collection.", "Data Preprocessing", "What Is Data Preprocessing?", "Importance Of Data Preprocessing Poor Data Quality = Unrelia", "Data Cleaning Finding And Correcting Errors, Inaccurate Info", "Removing Duplicate Data 1", "Handling 1 Identify And Check Empty Fields; Check Original R", "Preparing Data For Analysis Organizing Selecting Converting ", "Data Preprocessing Workflow", "Introduction To Graph Theory", "What Is A Graph? A", "Vertices (Nodes) And Edges Nodes (Vertices) Edges", "Directed Vs Undirected Graph Directed Graph Undirected Graph", "Weighted Vs Unweighted Graph 10 Km A 20 Km A", "Adjacencylista Method Of Storing A Graph By Listing The Neig", "Adjacencymatrix A Method Of Representing", "Slide 50", "Shortest Path Analysis B 8", "Unweighted Path Vs Weighted Path Unweighted Path Weighted Pa", "Shortest Path In Social Networks", "Graph Traversal And Shortest Path Algorithms", "Graph Search • Computer Science Bfs, Dfs &", "The Three Graph Search Approaches The Data Structure Determi", "Bfs Breadth-First Search", "How Bfs Works 1 Choose A Start Node", "Why Bfs Uses A Queue Fifo Preserves The Level-By-Level Front", "Bfs Step-By-Step Example Mark On Discovery; Enqueue Each Nod", "Bfs: Time And Space Complexity O(V + E)", "Dfs Depth-First Search", "Stack And Recursion Two Views Of The Same Lifo Behavior.", "Dfs Step-By-Step Example Same Graph. A Different Frontier Pr", "Dfs: Time And Space Complexity O(V + E)", "Dijkstra’S Shortest-Path Algorithm", "Weighted Graphs And Priority Queues Extract-Min", "Dijkstra Step-By-Step Example Distances From A; All Edge Wei", "Dijkstra: Time And Space Complexity O((V + E) Log V)", "Bfs Vs Dfs Vs Dijkstra Bfs Dfs Dijkstra", "Centrality Analysis", "What Is Centrality", "Five Major Centrality Algorithms Degree Closeness", "01 Degree Centrality Measures The Number Of Direct Connectio", "Types Of Degree Centrality Degree Centrality In-Degree Centr", "Closeness Centrality Measures How Close A Node Is To All Oth", "Types Of Closeness Centrality 1 A 1 2 A 6", "03 Harmonic Centrality A Centrality Measure Based On The Rec", "Handling Disconnected", "04 Vertex Betweenness Centrality Measures How Often A Node L", "Types Of Betweenness Centrality Standard Betweenness Central", "05 Pagerank A Link-Analysis Algorithm That Assigns", "Types Of Pagerank Classic Pagerank Approximate Pagerank Weig", "Comparing Centrality Algorithms", "What Is Community?", "Characteristics Of A Community", "Types Of Community Local Community Online Community", "Examples Of Community School Village Religious Online Sports", "Importance Of Community.", "Real-World Applications Of Social Network Analyzer", "01 Influencer Identification", "02 — Community Detection A Classroom Has 100 Students With D", "03 Fake Account And Suspicious Activity Detection", "04 Information Spreading And Viral Marketing", "05 Business And Customer Relationship Analysis", "Education And Healthcare Applications Education And Student ", "References 1. Cormen, T. H., Leiserson, C. E., Rivest, R. L.", "Social Network Analyzer – Live System Demonstration From The"];
function sget(k){try{return localStorage.getItem(k)}catch(e){return null}}function sset(k,v){try{localStorage.setItem(k,v)}catch(e){}}
function sget(k){try{return localStorage.getItem(k)}catch(e){return null}}function sset(k,v){try{localStorage.setItem(k,v)}catch(e){}}
const LOGO={wide:"assets/logo-wide.jpg",full:"assets/logo-full.jpg"};
document.querySelectorAll("img[data-logo]").forEach(i=>i.src=LOGO[i.dataset.logo]);
{const f=document.createElement("link");f.rel="icon";f.href=LOGO.full;document.head.appendChild(f)}
/* ===== Translations (EN / Burmese) ===== */
const T={en:{tap_music:"🎵 Tap anywhere to start the music",fx_bars:"Bars",fx_wave:"Wave",fx_off:"Off",login_title:"Welcome to MONOLITH TEAM",login_sub:"Log in with your username and email to enter.",lbl_user:"Username",lbl_email:"Email",login_btn:"Login",err_user:"Please enter a username (at least 3 characters).",err_email:"Please enter a valid email address.",logout:"Log out",welcome:"Hello",nav_viz:"Visualization",nav_apps:"Applications",nav_case:"Case Study",nav_results:"Results",nav_team:"Team",nav_skill:"Marvin Skill",nav_sum:"Summary",end_h:"Thank You",sum_h:"Summary",sum_g1:"Takeaways",sum_g2:"Value",sum_g3:"Future Scope",sum_a:"SNA Importance",sum_ap:"Clear insight into network connections.",sum_b:"Algorithm Value",sum_bp:"BFS, DFS, and Dijkstra find shortest paths.",sum_c:"Interactive Viz",sum_cp:"Easy learning through visual graphs.",sum_d:"Centrality & Case Study",sum_dp:"Spots key nodes in the network.",sum_e:"Real-world Impact",sum_ep:"Useful for social and routing analysis.",sum_f:"Data & Scale",sum_fp:"Test with larger, real-time datasets.",sum_g:"More Algorithms",sum_gp:"Add new centrality & graph metrics.",skill_h:"Marvin Skill",skill_p:"Marvin's web skills — HTML, CSS and JavaScript — shown with an image and a video for each one.",skill_1:"FIRST",skill_2:"SECOND",skill_3:"THIRD",skill_hint:"Hover to preview · Click to play with sound",chip:"Social Network Analyzer",hero_p:"Network Visualization, Applications & Practical Demo — graphs that move, search and explain themselves.",cta1:"Try the live demo",cta2:"Meet the team",viz_h:"Network Visualization",viz_p:"Pick an algorithm and watch it explore the graph step by step.",dijk:"Dijkstra Shortest Path",visited:"Visited order",log:"Log",play:"▶ Play",pause:"⏸ Pause",step:"Step",reset:"Reset",speed:"Speed",source:"Start",target:"Target",apps_h:"Real-World Applications",a1:"Social Media",a1p:"Friend suggestions, influencer detection and community discovery.",a2:"Recommendation Systems",a2p:"Graph neighbours reveal what similar users like.",a3:"Marketing",a3p:"Target key spreaders to make campaigns go viral.",a4:"Communication Networks",a4p:"Shortest paths route messages with the lowest delay.",a5:"Cybersecurity",a5p:"Trace attack paths and spot suspicious clusters.",case_h:"Practical Case Study & Demo",case_p:"Who is the most influential person in our sample network? Degree centrality (number of friends) answers it.",res_h:"Results",s1:"People (nodes)",s2:"Friendships (edges)",s3:"Algorithms",s4:"Applications",conc_h:"Conclusion",conc_p:"Graphs turn social data into insight: BFS finds the closest people, DFS explores deep chains, and Dijkstra finds the cheapest route.",team_h:"Our Team",team_boys:"Boys",team_girls:"Girls",queue:"Queue",stack:"Stack",pq:"Priority queue",
d_bfs:"BFS visits neighbours level by level using a queue — it finds the fewest hops.",d_dfs:"DFS goes as deep as possible along one branch using a stack, then backtracks.",d_dijkstra:"Dijkstra always expands the cheapest unvisited node and shows the shortest weighted path.",friends:"friends"},
my:{tap_music:"🎵 တေးဂီတ ဖွင့်ရန် မည်သည့်နေရာကိုမဆို နှိပ်ပါ",fx_bars:"ဘားများ",fx_wave:"လှိုင်း",fx_off:"ပိတ်",login_title:"MONOLITH TEAM မှ ကြိုဆိုပါသည်",login_sub:"ဝင်ရောက်ရန် အသုံးပြုသူအမည်နှင့် အီးမေးလ် ဖြည့်ပါ။",lbl_user:"အသုံးပြုသူအမည်",lbl_email:"အီးမေးလ်",login_btn:"ဝင်ရောက်ရန်",err_user:"အသုံးပြုသူအမည် (အနည်းဆုံး ၃ လုံး) ထည့်ပါ။",err_email:"မှန်ကန်သော အီးမေးလ်လိပ်စာ ထည့်ပါ။",logout:"ထွက်ရန်",welcome:"မင်္ဂလာပါ",nav_viz:"မြင်ယောင်ပုံဖော်ခြင်း",nav_apps:"အသုံးချမှုများ",nav_case:"လေ့လာမှု",nav_results:"ရလဒ်များ",nav_team:"အဖွဲ့",nav_skill:"Marvin Skill",nav_sum:"အကျဉ်းချုပ်",end_h:"ကျေးဇူးတင်ပါသည်",sum_h:"အကျဉ်းချုပ်",sum_g1:"အဓိက သင်ခန်းစာများ",sum_g2:"တန်ဖိုး",sum_g3:"အနာဂတ် အကျယ်အဝန်း",sum_a:"SNA ၏ အရေးပါမှု",sum_ap:"ကွန်ရက်ချိတ်ဆက်မှုများကို ရှင်းလင်းစွာ နားလည်စေသည်။",sum_b:"အယ်လ်ဂိုရီသမ်၏ တန်ဖိုး",sum_bp:"BFS၊ DFS နှင့် Dijkstra တို့က အတိုဆုံးလမ်းကြောင်းများကို ရှာဖွေပေးသည်။",sum_c:"အပြန်အလှန်ဆက်သွယ်နိုင်သော မြင်ယောင်ပုံဖော်မှု",sum_cp:"ဂရပ်ပုံများဖြင့် လွယ်ကူစွာ သင်ယူနိုင်သည်။",sum_d:"Centrality နှင့် လေ့လာမှု",sum_dp:"ကွန်ရက်ထဲရှိ အဓိက node များကို ဖော်ထုတ်ပေးသည်။",sum_e:"လက်တွေ့ကမ္ဘာ သက်ရောက်မှု",sum_ep:"လူမှုကွန်ရက်နှင့် လမ်းကြောင်းရှာဖွေမှု ခွဲခြမ်းစိတ်ဖြာရာတွင် အသုံးဝင်သည်။",sum_f:"ဒေတာနှင့် အတိုင်းအတာ",sum_fp:"ပိုကြီးသော အချိန်နှင့်တပြေးညီ ဒေတာအစုများဖြင့် စမ်းသပ်ရန်။",sum_g:"အယ်လ်ဂိုရီသမ် ပိုမိုထည့်သွင်းရန်",sum_gp:"centrality နှင့် graph metric အသစ်များ ထပ်ထည့်ရန်။",skill_h:"Marvin Skill",skill_p:"မာဗင်၏ ဝက်ဘ်ကျွမ်းကျင်မှု — HTML၊ CSS နှင့် JavaScript — တစ်ခုချင်းစီကို ပုံနှင့် ဗီဒီယိုဖြင့် ပြသထားသည်။",skill_1:"ပထမ",skill_2:"ဒုတိယ",skill_3:"တတိယ",skill_hint:"ကြိုကြည့်ရန် မောက်စ်တင်ပါ · အသံနှင့်ဖွင့်ရန် နှိပ်ပါ",chip:"လူမှုကွန်ရက် ခွဲခြမ်းစိတ်ဖြာကိရိယာ",hero_p:"ကွန်ရက် မြင်ယောင်ပုံဖော်ခြင်း၊ လက်တွေ့ အသုံးချမှုများနှင့် သရုပ်ပြ — လှုပ်ရှားနေသော ဂရပ်များ။",cta1:"သရုပ်ပြ စမ်းကြည့်ရန်",cta2:"အဖွဲ့ဝင်များ",viz_h:"ကွန်ရက် မြင်ယောင်ပုံဖော်ခြင်း",viz_p:"အယ်လဂိုရီသမ်တစ်ခုကို ရွေးပြီး အဆင့်ဆင့် လှုပ်ရှားပုံကို ကြည့်ပါ။",dijk:"Dijkstra အတိုဆုံးလမ်းကြောင်း",visited:"လည်ပတ်ခဲ့သော အစဉ်",log:"မှတ်တမ်း",play:"▶ စတင်ရန်",pause:"⏸ ရပ်ရန်",step:"အဆင့်",reset:"ပြန်စရန်",speed:"အမြန်နှုန်း",source:"စမှတ်",target:"ပန်းတိုင်",apps_h:"လက်တွေ့ အသုံးချမှုများ",a1:"လူမှုမီဒီယာ",a1p:"သူငယ်ချင်းအကြံပြုမှု၊ သြဇာကြီးသူရှာဖွေမှုနှင့် အသိုင်းအဝိုင်းရှာဖွေမှု။",a2:"အကြံပြုစနစ်များ",a2p:"ဆက်စပ်သူများမှ အသုံးပြုသူတူများ ကြိုက်နှစ်သက်မှုကို သိနိုင်သည်။",a3:"ဈေးကွက်ရှာဖွေရေး",a3p:"အဓိကပျံ့နှံ့စေသူများကို ပစ်မှတ်ထား၍ ကမ်ပိန်းကို ပျံ့နှံ့စေသည်။",a4:"ဆက်သွယ်ရေးကွန်ရက်များ",a4p:"အတိုဆုံးလမ်းကြောင်းဖြင့် မက်ဆေ့ချ်ကို အမြန်ပို့သည်။",a5:"ဆိုက်ဘာလုံခြုံရေး",a5p:"တိုက်ခိုက်မှုလမ်းကြောင်းနှင့် သံသယဖြစ်ဖွယ်အုပ်စုများကို ရှာဖွေသည်။",case_h:"လက်တွေ့ လေ့လာမှုနှင့် သရုပ်ပြ",case_p:"နမူနာကွန်ရက်တွင် သြဇာအကြီးဆုံးသူက ဘယ်သူလဲ? သူငယ်ချင်းအရေအတွက် (Degree Centrality) ဖြင့် ဖြေရှင်းသည်။",res_h:"ရလဒ်များ",s1:"လူများ (Node)",s2:"ဆက်ဆံရေးများ (Edge)",s3:"အယ်လဂိုရီသမ်များ",s4:"အသုံးချမှုများ",conc_h:"နိဂုံး",conc_p:"ဂရပ်များက လူမှုဒေတာကို အသိပညာအဖြစ် ပြောင်းပေးသည် — BFS က အနီးဆုံးလူများကို၊ DFS က နက်ရှိုင်းသောကွင်းဆက်ကို၊ Dijkstra က စရိတ်အနည်းဆုံးလမ်းကို ရှာပေးသည်။",team_h:"ကျွန်ုပ်တို့အဖွဲ့",team_boys:"ကောင်လေးများ",team_girls:"ကောင်မလေးများ",queue:"တန်းစီ (Queue)",stack:"စတက် (Stack)",pq:"ဦးစားပေးတန်းစီ",
d_bfs:"BFS သည် Queue ဖြင့် အလွှာလိုက် အနီးဆုံးမှ စတင်လည်ပတ်ပြီး အနည်းဆုံးခြေလှမ်းကို ရှာသည်။",d_dfs:"DFS သည် Stack ဖြင့် အနက်ဆုံးထိ သွားပြီးမှ ပြန်လှည့်သည်။",d_dijkstra:"Dijkstra သည် စရိတ်အနည်းဆုံး node ကို အမြဲရွေး၍ အတိုဆုံးလမ်းကို ပြသည်။",friends:"ယောက်"}};
Object.assign(T.en,{"nav_slides": "Slides", "slides_h": "Presentation Slides", "slides_p": "All 98 slides from our Canva presentation, shown with motion. Use arrows, swipe, or press Play.", "slides_play": "▶ Auto-play", "slides_pause": "⏸ Pause", "slides_all": "All slides", "slides_full": "Fullscreen", "slides_close": "✕ Close"});Object.assign(T.my,{"nav_slides": "ဆလိုက်များ", "slides_h": "တင်ဆက်မှု ဆလိုက်များ", "slides_p": "ကျွန်ုပ်တို့၏ Canva တင်ဆက်မှု ဆလိုက် 98 ခုလုံးကို လှုပ်ရှားမှုနှင့်အတူ ကြည့်ရှုနိုင်ပါသည်။ မြှားခလုတ်များ၊ ပွတ်ဆွဲခြင်း သို့မဟုတ် Play ကို နှိပ်ပါ။", "slides_play": "▶ အလိုအလျောက်ဖွင့်", "slides_pause": "⏸ ရပ်ရန်", "slides_all": "ဆလိုက်အားလုံး", "slides_full": "မျက်နှာပြင်အပြည့်", "slides_close": "✕ ပိတ်ရန်"});
let lang=sget("lang")||"en",theme=sget("theme")||"dark";
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
function applyLang(){document.documentElement.lang=lang;$$("[data-i18n]").forEach(e=>e.textContent=T[lang][e.dataset.i18n]);
  $("#langLabel").textContent=$("#loginLangLabel").textContent=lang==="en"?"မြန်မာ":"EN";showUser();updateFx();sset("lang",lang);setAlgo(algo,true);drawBars();
  $("#play").textContent=T[lang][timer?"pause":"play"]}
function applyTheme(){document.documentElement.dataset.theme=theme;$("#themeIcon").innerHTML=`<use href="#i-${theme==="dark"?"sun":"moon"}"/>`;sset("theme",theme)}
$("#langBtn").onclick=$("#loginLang").onclick=()=>{lang=lang==="en"?"my":"en";applyLang()};
$("#themeBtn").onclick=()=>{theme=theme==="dark"?"light":"dark";applyTheme()};

/* ===== Graph data ===== */
const N="ABCDEFGHIJ".split("");
const P={A:[70,170],B:[170,70],C:[170,270],D:[290,40],E:[290,170],F:[290,300],G:[410,90],H:[410,250],I:[520,60],J:[530,200]};
const E=[["A","B",4],["A","C",2],["B","D",5],["B","E",3],["C","E",6],["C","F",4],["D","G",3],["E","G",2],["E","H",5],["F","H",3],["G","I",4],["G","J",6],["H","J",2],["I","J",3],["D","E",7]];
const adj={};N.forEach(n=>adj[n]=[]);E.forEach(([a,b,w])=>{adj[a].push([b,w]);adj[b].push([a,w])});
const ns="http://www.w3.org/2000/svg",svg=$("#graph");
function el(t,a,p){const e=document.createElementNS(ns,t);for(const k in a)e.setAttribute(k,a[k]);(p||svg).appendChild(e);return e}
const edgeEl={},nodeEl={},distEl={};
E.forEach(([a,b,w])=>{const[x1,y1]=P[a],[x2,y2]=P[b];edgeEl[a+b]=edgeEl[b+a]=el("line",{class:"edge",x1,y1,x2,y2});
  const t=el("text",{class:"wt",x:(x1+x2)/2,y:(y1+y2)/2-6,"text-anchor":"middle"});t.textContent=w});
N.forEach(n=>{const g=el("g",{class:"node",transform:`translate(${P[n][0]},${P[n][1]})`});el("circle",{r:20},g);el("text",{},g).textContent=n;distEl[n]=el("text",{class:"dist"},g);nodeEl[n]=g});
["start","target"].forEach(id=>{$("#"+id).innerHTML=N.map(n=>`<option>${n}</option>`).join("")});$("#target").value="J";

/* ===== Algorithms → list of steps ===== */
function makeSteps(algo,s,t){const st=[],vis=new Set(),ord=[];
  const snap=(cur,ds,msg,extra={})=>st.push({cur,ds:[...ds],ord:[...ord],msg,...extra});
  if(algo==="bfs"){const q=[s];vis.add(s);snap(null,q,`enqueue ${s}`,{fr:[s]});
    while(q.length){const u=q.shift();ord.push(u);snap(u,q,`visit ${u}`);
      for(const[v]of adj[u].sort())if(!vis.has(v)){vis.add(v);q.push(v);snap(u,q,`enqueue ${v}`,{edge:[u,v]})}}}
  if(algo==="dfs"){const stack=[s];const seen=new Set();
    while(stack.length){const u=stack.pop();if(seen.has(u))continue;seen.add(u);ord.push(u);snap(u,stack,`visit ${u}`);
      for(const[v]of adj[u].sort().reverse())if(!seen.has(v)){stack.push(v);snap(u,stack,`push ${v}`,{edge:[u,v]})}}}
  if(algo==="dijkstra"){const d={},prev={},done=new Set();N.forEach(n=>d[n]=Infinity);d[s]=0;const pq=[[0,s]];
    snap(null,["A"].slice(0,0).concat(`${s}:0`),`start ${s}`,{d:{...d}});
    while(pq.length){pq.sort((a,b)=>a[0]-b[0]);const[du,u]=pq.shift();if(done.has(u))continue;done.add(u);ord.push(u);
      snap(u,pq.map(x=>`${x[1]}:${x[0]}`),`settle ${u} (${du})`,{d:{...d}});
      if(u===t)break;
      for(const[v,w]of adj[u])if(du+w<d[v]){d[v]=du+w;prev[v]=u;pq.push([d[v],v]);snap(u,pq.map(x=>`${x[1]}:${x[0]}`),`relax ${u}→${v} = ${d[v]}`,{edge:[u,v],d:{...d}})}}
    const path=[];for(let c=t;c;c=prev[c])path.unshift(c);if(d[t]<Infinity)snap(t,[],`shortest ${path.join("→")} = ${d[t]}`,{path,d:{...d}})}
  return st}

/* ===== Player ===== */
let algo="bfs",steps=[],idx=-1,timer=null;
function setAlgo(a,keep){algo=a;$$("#algoTabs button").forEach(b=>b.classList.toggle("active",b.dataset.algo===a));
  $("#algoDesc").textContent=T[lang]["d_"+a];$("#dsTitle").textContent=T[lang][a==="bfs"?"queue":a==="dfs"?"stack":"pq"];
  $("#targetWrap").style.display=a==="dijkstra"?"":"none";if(!keep)reset()}
function reset(){stop();idx=-1;steps=makeSteps(algo,$("#start").value,$("#target").value);paint(null)}
function paint(s){Object.values(edgeEl).forEach(e=>e.setAttribute("class","edge"));
  N.forEach(n=>{nodeEl[n].setAttribute("class","node");distEl[n].textContent=""});
  $("#ds").innerHTML=$("#order").innerHTML=$("#log").innerHTML="";if(!s)return;
  for(let i=0;i<=idx;i++){const x=steps[i];if(x.edge)edgeEl[x.edge.join("")].classList.add("on");
    $("#log").innerHTML+=`<div>${i+1}. ${x.msg}</div>`}
  s.ord.forEach(n=>nodeEl[n].classList.add("done"));
  s.ds.forEach(v=>{const n=String(v)[0];if(!s.ord.includes(n))nodeEl[n].classList.add("frontier")});
  if(s.cur)nodeEl[s.cur].classList.add("current");
  if(s.d)N.forEach(n=>distEl[n].textContent=s.d[n]<Infinity?s.d[n]:"");
  if(s.path)s.path.forEach((n,i)=>{nodeEl[n].classList.add("done");if(i)edgeEl[s.path[i-1]+n].setAttribute("class","edge path")});
  $("#ds").innerHTML=s.ds.map(v=>`<span>${v}</span>`).join("");$("#order").innerHTML=s.ord.map(v=>`<span>${v}</span>`).join("");
  $("#log").scrollTop=1e5}
function next(){if(idx>=steps.length-1){stop();return}idx++;paint(steps[idx])}
function stop(){clearInterval(timer);timer=null;$("#play").textContent=T[lang].play}
$("#play").onclick=()=>{if(timer)return stop();if(idx>=steps.length-1)reset();$("#play").textContent=T[lang].pause;
  const ms=[1400,1000,700,450,250][$("#speed").value-1];timer=setInterval(next,ms)};
$("#speed").oninput=()=>{if(timer){stop();$("#play").click()}};
$("#step").onclick=()=>{stop();next()};$("#reset").onclick=reset;
$("#start").onchange=$("#target").onchange=reset;
$$("#algoTabs button").forEach(b=>b.onclick=()=>setAlgo(b.dataset.algo));

/* ===== Case study bars (degree centrality) ===== */
function drawBars(){const deg=N.map(n=>[n,adj[n].length]).sort((a,b)=>b[1]-a[1]),max=deg[0][1];
  $("#bars").innerHTML=deg.map(([n,d])=>`<div class="bar"><span>${n}</span><i data-w="${d/max*100}"></i><b>${d}</b></div>`).join("");
  requestAnimationFrame(()=>setTimeout(()=>$$(".bar i").forEach(i=>i.style.width=i.dataset.w+"%"),50))}

/* ===== Team ===== */
const TEAM={"boys": [["Silent boy", "Network Data", "assets/team/silent-boy.jpg"], ["Nway oo", "Preprocessing", "assets/team/nway-oo.jpg"], ["Jassen", "BFS & Dijkstra", "assets/team/jassen.jpg"], ["Zaim", "BFS & Dijkstra", "assets/team/zaim.jpg"], ["Beau valor", "Community Detection", "assets/team/beau-valor.jpg"], ["Marvin", "Visualization & Demo", "assets/team/marvin.jpg"], ["Maevik", "Visualization & Demo", "assets/team/maevik.jpg"], ["Yoko", "Super Leader", "assets/team/yoko.jpg"]], "girls": [["Polar", "Introduction", "assets/team/polar.jpg"], ["Noble", "Fundamentals", "assets/team/noble.jpg"], ["Han", "Centrality", "assets/team/han.jpg"], ["Ni Nina", "Shortest Path", "assets/team/ni-nina.jpg"], ["Yuki", "Centrality", "assets/team/yuki.jpg"], ["Jeon Rhoda", "Slides", "assets/team/jeon-rhoda.jpg"], ["Anglena", "Data Collection", "assets/team/anglena.jpg"], ["Ki Ki", "BFS & Dijkstra", "assets/team/ki-ki.jpg"]]};
function card(p,i,f){return `<div class="member${f?" f":""}" style="--i:${i}"><div class="pf"><span class="ph"><img src="${p[2]}" alt="${p[0]}"></span><i></i></div><b>${p[0]}</b><small>${p[1]}</small></div>`}
$("#teamBoys").innerHTML=TEAM.boys.map((p,i)=>card(p,i,0)).join("");
$("#teamGirls").innerHTML=TEAM.girls.map((p,i)=>card(p,i+8,1)).join("");
document.querySelectorAll(".team.pro .member").forEach(c=>{
  c.addEventListener("pointermove",e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
    c.style.setProperty("--mx",x*100+"%");c.style.setProperty("--my",y*100+"%");
    c.style.transform="rotateY("+((x-.5)*18)+"deg) rotateX("+((.5-y)*18)+"deg) translateY(-6px)"});
  c.addEventListener("pointerleave",()=>{c.style.transform=""});
});

/* ===== Reveal + counters ===== */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add("in");
  e.target.querySelectorAll("[data-count]").forEach(c=>{const to=+c.dataset.count;let v=0;const t=setInterval(()=>{c.textContent=++v;if(v>=to)clearInterval(t)},80)});io.unobserve(e.target)}),{threshold:.15});
$$(".reveal").forEach(e=>io.observe(e));

/* ===== Floating graph background (hero + login) ===== */
function net(cv,fixedCol){const cx=cv.getContext("2d");let W,H,pts=[],mouse={x:-999,y:-999};
  function size(){W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight;pts=Array.from({length:Math.min(70,W/14|0)},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.6,vy:(Math.random()-.5)*.6}))}
  addEventListener("resize",size);cv.parentElement.addEventListener("mousemove",e=>{const r=cv.getBoundingClientRect();mouse={x:e.clientX-r.left,y:e.clientY-r.top}});
  (function loop(){const col=fixedCol||getComputedStyle(document.documentElement).getPropertyValue("--blue").trim();cx.clearRect(0,0,W,H);cx.strokeStyle=col;cx.fillStyle=col;
    pts.forEach((p,i)=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
      const dm=Math.hypot(p.x-mouse.x,p.y-mouse.y);if(dm<120){p.x+=(p.x-mouse.x)/dm*1.5;p.y+=(p.y-mouse.y)/dm*1.5}
      cx.globalAlpha=.8;cx.beginPath();cx.arc(p.x,p.y,2.5+(window.BEAT||0)*4,0,7);cx.fill();
      for(let j=i+1;j<pts.length;j++){const q=pts[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<130){cx.globalAlpha=(1-d/130)*(.5+(window.BEAT||0)*.5);cx.beginPath();cx.moveTo(p.x,p.y);cx.lineTo(q.x,q.y);cx.stroke()}}});
    requestAnimationFrame(loop)})();size()}
net($("#heroCanvas"));net($("#loginCanvas"),"#4f8cff");

/* ===== Login (username + email) ===== */
function ssGet(k){try{return sessionStorage.getItem(k)}catch(e){return null}}
function ssSet(k,v){try{k&&(v===null?sessionStorage.removeItem(k):sessionStorage.setItem(k,v))}catch(e){}}
let user=null;try{user=JSON.parse(ssGet("user"))}catch(e){}
function showUser(){const chip=$("#userChip");if(!user){chip.hidden=true;return}chip.hidden=false;$("#userName").textContent=T[lang].welcome+", "+user.name}
function openSite(){showUser();$("#login").classList.add("out");document.body.classList.remove("locked")}
if(user)openSite();else document.body.classList.add("locked");
function doLogin(){
  const n=$("#uName").value.trim(),m=$("#uMail").value.trim();
  const okN=n.length>=3,okM=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(m),b=$("#goBtn");
  if(b.classList.contains("loading")||b.classList.contains("done"))return;
  $("#uName").parentElement.classList.toggle("bad",!okN);$("#uMail").parentElement.classList.toggle("bad",!okM);
  if(!okN||!okM){const c=$("#loginForm");c.classList.remove("shake");void c.offsetWidth;c.classList.add("shake");return}
  startMusic();
  b.classList.add("loading");
  setTimeout(()=>{b.classList.remove("loading");b.classList.add("done");user={name:n,email:m};ssSet("user",JSON.stringify(user));setTimeout(openSite,900)},1100)}
$("#goBtn").onclick=doLogin;
["#uName","#uMail"].forEach(q=>$(q).addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();doLogin()}}));
$("#logoutBtn").onclick=()=>{user=null;ssSet("user",null);$("#goBtn").className="btn go";$("#uName").value=$("#uMail").value="";$$(".field").forEach(f=>f.classList.remove("bad"));$("#userChip").hidden=true;document.body.classList.add("locked");$("#login").classList.remove("out")};

/* ===== Background music + audio-reactive effects =====
   buffer mode: song is decoded with Web Audio (works even where <audio> files are blocked)
   element mode: plain <audio> (used when the page is opened from file://) */
const bgm=$("#bgm"),SRC=window.SONG_SRC||"assets/song.mp3";
let mode=(window.SONG_SRC||/^https?:/.test(location.protocol))?"buffer":"element";
if(mode==="element")bgm.src=SRC;
const FX=["bars","wave","off"];let fx=sget("fx")||"bars";if(!FX.includes(fx))fx="bars";
let vol=+(sget("vol")||.5),muted=false,userPaused=false,ctx=null,gain=null,an=null,fd=null,td=null,buf=null;
$("#pVol").value=vol*100;bgm.loop=true;bgm.volume=vol;
function b64buf(s){const b=atob(s.split(",")[1]),u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i);return u.buffer}
function toElement(){mode="element";an=null;bgm.src=SRC;if(!userPaused)bgm.play().catch(()=>{})}
function initCtx(){if(ctx||mode!=="buffer")return;
  try{ctx=new(window.AudioContext||window.webkitAudioContext)();gain=ctx.createGain();gain.gain.value=muted?0:vol;
    an=ctx.createAnalyser();an.fftSize=256;an.smoothingTimeConstant=.78;gain.connect(an);an.connect(ctx.destination);
    fd=new Uint8Array(an.frequencyBinCount);td=new Uint8Array(an.fftSize);ctx.onstatechange=sync;
    const get=window.SONG_SRC?Promise.resolve(b64buf(window.SONG_SRC)):fetch(SRC).then(r=>r.arrayBuffer());
    get.then(ab=>new Promise((ok,no)=>ctx.decodeAudioData(ab,ok,no))).then(b=>{buf=b;const n=ctx.createBufferSource();n.buffer=b;n.loop=true;n.connect(gain);n.start(0);sync()}).catch(toElement)
  }catch(e){toElement()}}
function isPlaying(){return mode==="buffer"?!!(ctx&&buf&&ctx.state==="running"):!bgm.paused}
function sync(){const on=isPlaying();$("#player").classList.toggle("playing",on);$("#pPlayIcon").setAttribute("href",on?"#i-pause":"#i-play");if(on)hideToast()}
function showToast(){const t=$("#toast");t.classList.add("show");clearTimeout(showToast.t);showToast.t=setTimeout(()=>t.classList.remove("show"),9000)}
function hideToast(){$("#toast").classList.remove("show")}
function startMusic(){userPaused=false;
  if(mode==="buffer"){initCtx();if(ctx){const p=ctx.resume();if(p&&p.then)p.then(sync)}}
  if(mode==="element"){const p=bgm.play();if(p&&p.catch)p.catch(()=>{})}
  sync()}
function stopMusic(){userPaused=true;if(mode==="buffer"){ctx&&ctx.suspend()}else bgm.pause();sync()}
bgm.addEventListener("play",sync);bgm.addEventListener("pause",sync);
setInterval(sync,700);
/* Auto-open: try at once; browsers need one touch/click/key, so the very first one anywhere starts the song */
const UNLOCK=["pointerdown","keydown","touchstart","click"];
function unlock(e){if(e.target&&e.target.closest&&e.target.closest("#player"))return;if(userPaused)return;startMusic();setTimeout(()=>{if(isPlaying())UNLOCK.forEach(n=>removeEventListener(n,unlock,true))},300)}
UNLOCK.forEach(n=>addEventListener(n,unlock,true));
$("#pPlay").onclick=()=>{isPlaying()?stopMusic():startMusic()};
$("#toast").onclick=()=>{hideToast();startMusic()};
function setVol(){if(gain)gain.gain.value=muted?0:vol;bgm.volume=vol;bgm.muted=muted;$("#pMuteIcon").setAttribute("href",muted||!vol?"#i-mute":"#i-vol")}
$("#pMute").onclick=()=>{muted=!muted;setVol()};
$("#pVol").oninput=e=>{vol=e.target.value/100;muted=false;sset("vol",vol);setVol()};
$("#pFx").onclick=()=>{fx=FX[(FX.indexOf(fx)+1)%FX.length];sset("fx",fx);updateFx()};
function updateFx(){$("#fxLabel").textContent=T[lang]["fx_"+fx]}
const vc=$("#fxCanvas"),vx=vc.getContext("2d"),NB=48,lv=new Array(NB).fill(0);let vw=0,col="#4f8cff",fr=0;
function fit(){vw=vc.width=innerWidth;vc.height=110}addEventListener("resize",fit);fit();
function frame(t){requestAnimationFrame(frame);fr++;if(fr%40===1)col=getComputedStyle(document.documentElement).getPropertyValue("--blue").trim()||col;
  const playing=isPlaying(),idle=!playing&&!userPaused;let live=false;
  if(playing&&an){an.getByteFrequencyData(fd);an.getByteTimeDomainData(td);live=fd[1]+fd[3]+fd[6]>0}
  const kick=Math.pow(Math.max(0,Math.sin(t/820*Math.PI)),8);
  for(let i=0;i<NB;i++){let v=0;
    const sim=Math.max(0,.45+.3*Math.sin(t/260+i*.55)*Math.sin(t/900+i*.2)+.12*Math.sin(t/110+i)+(i<6?kick*.5:0))*(1-i/80);
    if(playing)v=live?fd[Math.min(fd.length-1,Math.floor(i*.9)+1)]/255:sim;else if(idle)v=sim*.5;
    lv[i]+=(v-lv[i])*.35}
  const bass=fx==="off"?0:Math.min(1,(lv[0]+lv[1]+lv[2]+lv[3])/4*1.15);window.BEAT=bass;document.body.style.setProperty("--beat",bass.toFixed(3));
  vx.clearRect(0,0,vw,110);if(fx==="off"||lv[0]<.01&&lv[20]<.01)return;
  vx.fillStyle=vx.strokeStyle=col;
  if(fx==="bars"){const w=vw/NB;for(let i=0;i<NB;i++){const h=Math.max(3,lv[i]*100);vx.globalAlpha=.35+lv[i]*.65;vx.beginPath();vx.roundRect?vx.roundRect(i*w+2,110-h,w-4,h,4):vx.rect(i*w+2,110-h,w-4,h);vx.fill()}}
  else{vx.globalAlpha=.9;vx.lineWidth=3;vx.beginPath();const n=live?td.length:96;
    for(let i=0;i<n;i++){const y=live?(td[i]-128)/128:Math.sin(i*.25+t/160)*(.25+bass*.7)*Math.sin(i/n*Math.PI);const X=i/(n-1)*vw,Y=55+y*45*(live?1.4:1);i?vx.lineTo(X,Y):vx.moveTo(X,Y)}vx.stroke()}}
requestAnimationFrame(frame);
/* start immediately when the login screen opens */
initCtx();startMusic();setTimeout(()=>{if(!isPlaying()&&!userPaused)showToast()},1200);

applyTheme();applyLang();reset();

/* ===== Slides showcase ===== */
(()=>{const S=window.SLIDES,TT=window.SLIDE_TITLES,deck=document.getElementById("deck");
let i=0,busy=false,auto=null,fx="mix",t0=0;const els={};
const FX=["glitch","iris","sweep","cube","slide","zoom","flip"];
function mk(n){if(els[n])return els[n];const d=document.createElement("div");d.className="sl";const im=new Image();im.src=S[n];im.alt=TT[n];im.decoding="async";d.appendChild(im);deck.insertBefore(d,deck.querySelector(".prog"));return els[n]=d}
function label(){document.getElementById("sTitle").textContent=TT[i];document.getElementById("sNum").textContent=(i+1)+" / "+S.length;document.getElementById("sRange").value=i+1}
function bar(){const p=document.getElementById("sProg");p.style.transition="none";p.style.width=(i/(S.length-1))*100+"%"}
function go(n,dir){if(busy||n===i||n<0||n>=S.length)return;dir=dir||(n>i?"next":"prev");
  if(fx==="mix")deck.className="deck fx-"+FX[Math.floor(Math.random()*FX.length)]+(document.fullscreenElement===deck?"":"");
  const a=els[i],b=mk(n);busy=true;
  b.className="sl in-"+dir+" active";a.className="sl out-"+dir;
  const imgb=b.querySelector("img");imgb.style.animation="none";void imgb.offsetWidth;imgb.style.animation="";
  const c=document.getElementById("sTitle");c.style.animation="none";void c.offsetWidth;c.style.animation="";
  i=n;label();bar();
  setTimeout(()=>{a.className="sl";b.className="sl active";busy=false;mk(i+1<S.length?i+1:0);mk(i-1>=0?i-1:S.length-1)},800)}
const next=()=>go(i+1<S.length?i+1:0,"next"),prev=()=>go(i-1>=0?i-1:S.length-1,"prev");
function setFx(v){fx=v;deck.className="deck fx-"+(v==="mix"?"slide":v)}
function tick(ts){if(!auto)return;if(!t0)t0=ts;const p=Math.min((ts-t0)/4500,1),pr=document.getElementById("sProg");
  pr.style.width=((i+p)/S.length)*100+"%";if(p>=1){t0=0;next()}auto=requestAnimationFrame(tick)}
function setAuto(on){const b=document.getElementById("sPlay");cancelAnimationFrame(auto);auto=null;t0=0;
  const T0=(typeof T!=="undefined")?T[document.documentElement.lang==="my"?"my":"en"]:null;
  if(on){auto=requestAnimationFrame(tick);b.dataset.i18n="slides_pause"}else{b.dataset.i18n="slides_play";bar()}
  b.textContent=T0?T0[b.dataset.i18n]:b.textContent}
const first=mk(0);first.className="sl active";mk(1);label();bar();
document.getElementById("sNext").onclick=()=>{setAuto(false);next()};
document.getElementById("sPrev").onclick=()=>{setAuto(false);prev()};
document.getElementById("sPlay").onclick=()=>setAuto(!auto);
document.getElementById("sRange").oninput=e=>{setAuto(false);go(+e.target.value-1)};
document.getElementById("sFx").onchange=e=>setFx(e.target.value);
document.getElementById("sFull").onclick=()=>document.fullscreenElement?document.exitFullscreen():deck.requestFullscreen&&deck.requestFullscreen();
deck.addEventListener("keydown",e=>{if(e.key==="ArrowRight"||e.key===" "){e.preventDefault();setAuto(false);next()}else if(e.key==="ArrowLeft"){setAuto(false);prev()}else if(e.key==="Home")go(0);else if(e.key==="End")go(S.length-1)});
let sx=null;deck.addEventListener("pointerdown",e=>sx=e.clientX);
deck.addEventListener("pointerup",e=>{if(sx==null)return;const d=e.clientX-sx;sx=null;if(Math.abs(d)>50){setAuto(false);d<0?next():prev()}});
/* neon parallax + glare following the pointer */
deck.addEventListener("pointermove",e=>{const r=deck.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
  deck.style.setProperty("--px",(x-.5).toFixed(3));deck.style.setProperty("--py",(y-.5).toFixed(3));deck.style.setProperty("--gx",(x*100).toFixed(1)+"%");deck.style.setProperty("--gy",(y*100).toFixed(1)+"%")});
deck.addEventListener("pointerleave",()=>{deck.style.setProperty("--px",0);deck.style.setProperty("--py",0)});
/* grid overlay */
const g=document.getElementById("sgrid"),G=document.getElementById("sgG");let built=false;
document.getElementById("sGrid").onclick=()=>{if(!built){built=true;S.forEach((s,n)=>{const b=document.createElement("button");b.style.animationDelay=Math.min(n*18,700)+"ms";b.innerHTML='<img loading="lazy" alt="" src="'+s+'"><i>'+(n+1)+"</i>";b.onclick=()=>{g.classList.remove("open");setAuto(false);go(n)};G.appendChild(b)})}
  [...G.children].forEach((b,n)=>b.classList.toggle("cur",n===i));g.classList.add("open")};
document.getElementById("sgClose").onclick=()=>g.classList.remove("open");
addEventListener("keydown",e=>{if(e.key==="Escape")g.classList.remove("open")});
/* auto-play only while visible */
new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting&&auto)setAuto(false)}),{threshold:.1}).observe(deck);
})();


/* ===== Marvin Skill: image + video cards ===== */
(()=>{const cards=[...document.querySelectorAll(".skill")];let ducked=false;
  const duck=()=>{if(!ducked&&isPlaying()){stopMusic();ducked=true}};
  const unduck=()=>{if(ducked){ducked=false;startMusic()}};
  const reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
  function stop(c){const v=c.querySelector("video");c.classList.remove("active","preview");v.controls=false;v.pause();v.muted=true;try{v.currentTime=0}catch(e){}}
  cards.forEach(c=>{const v=c.querySelector("video"),b=c.querySelector(".sk-play");
    c.addEventListener("pointerenter",e=>{if(e.pointerType!=="mouse"||reduce||c.classList.contains("active"))return;
      v.muted=true;c.classList.add("preview");const p=v.play();if(p&&p.catch)p.catch(()=>{})});
    c.addEventListener("pointerleave",()=>{if(c.classList.contains("preview")&&!c.classList.contains("active")){c.classList.remove("preview");v.pause();try{v.currentTime=0}catch(e){}}});
    b.addEventListener("click",()=>{cards.forEach(o=>{if(o!==c&&o.classList.contains("active")){stop(o)}});
      c.classList.remove("preview");c.classList.add("active");v.controls=true;v.muted=false;try{v.currentTime=0}catch(e){}
      duck();const p=v.play();if(p&&p.catch)p.catch(()=>{})});
    v.addEventListener("play",()=>{if(c.classList.contains("active"))duck()});
    v.addEventListener("pause",()=>{if(c.classList.contains("active"))unduck()});
    v.addEventListener("click",()=>{if(!c.classList.contains("active")&&!c.classList.contains("preview"))return});
  });
  /* pause a video when the section scrolls out of view */
  new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting){cards.forEach(c=>{if(c.classList.contains("active")){c.querySelector("video").pause()}else if(c.classList.contains("preview")){stop(c)}})}}),{threshold:.05}).observe(document.getElementById("skills"));
})();

/* Marvin Story: reveal text when panel scrolls into view */
(()=>{const ps=document.querySelectorAll(".mv-p");const io=new IntersectionObserver(es=>es.forEach(e=>{e.target.classList.toggle("go",e.isIntersecting)}),{threshold:.35});ps.forEach(p=>io.observe(p))})();

/* ===== Closing-scene pointer parallax ===== */
(()=>{const c=document.getElementById("endCard");if(!c)return;
c.addEventListener("pointermove",e=>{const r=c.getBoundingClientRect();c.style.setProperty("--mx",((e.clientX-r.left)/r.width-.5).toFixed(3));c.style.setProperty("--my",((e.clientY-r.top)/r.height-.5).toFixed(3))});
c.addEventListener("pointerleave",()=>{c.style.setProperty("--mx",0);c.style.setProperty("--my",0)})})();
