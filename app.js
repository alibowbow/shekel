'use strict';

const GT=[
  {id:'shekel',symbol:'SHEKEL',name:'Rabbi Schlomo',chain:'Base',bn:[],mx:['SHEKEL_USDT'],chart:'https://www.geckoterminal.com/ko/base/pools/0xded72b40970af70720adbc5127092f3152392273?embed=1&info=0&swaps=0&grayscale=0&light_chart=0&chart_type=price&resolution=1d'},
  {id:'anon',symbol:'ANON',name:'Hey Anon',chain:'Solana',bn:['ANONUSDT'],mx:['ANON_USDT'],chart:'https://www.geckoterminal.com/ko/solana/pools/AeGBjqTeXiEgdAxU1ZhBEqmkXk6RuQNCXJWvdo4N4CBg?embed=1&info=0&swaps=0&grayscale=0&light_chart=0&chart_type=price&resolution=1d'},
  {id:'bink',symbol:'BINK',name:'Bink AI',chain:'BNB',bn:['BINKUSDT'],mx:['BINK_USDT'],chart:'https://www.geckoterminal.com/ko/bsc/pools/0x336ba8c1bff23894a77ebf8e31e736ebbe3ba846?embed=1&info=0&swaps=0&grayscale=0&light_chart=0&chart_type=price&resolution=1d'},
  {id:'buzz',symbol:'BUZZ',name:'Hive AI',chain:'Solana',bn:['BUZZUSDT'],mx:['BUZZ_USDT'],chart:'https://www.geckoterminal.com/ko/solana/pools/J2p6tgZDkvtHQ3VfbGRjzHJNLrqFgGfvjJsp2K7HX5cH?embed=1&info=0&swaps=0&grayscale=0&light_chart=0&chart_type=price&resolution=1d'},
  {id:'gekko',symbol:'GEKKO',name:'Gekko',chain:'Base',bn:['GEKKOUSDT'],mx:['GEKKO_USDT'],chart:'https://www.geckoterminal.com/base/pools/0xf9e91661c101196146cb2bf62f803d8ea6880a2e?embed=1&info=0&swaps=0&grayscale=0&light_chart=0&chart_type=price&resolution=15m'},
  {id:'pythia',symbol:'PYTHIA',name:'Pythia',chain:'Solana',bn:['PYTHIAUSDT'],mx:['PYTHIA_USDT'],chart:'https://www.geckoterminal.com/ko/solana/pools/HCeas2dbSrCrHNuzBVpkuaSz7X3oVu9ekzxMc5ZDsZ4j?embed=1&info=0&swaps=0&grayscale=0&light_chart=0&chart_type=price&resolution=1d'},
  {id:'aibot',symbol:'AIBOT',name:'Cherry AI',chain:'BNB',bn:['AIBOTUSDT'],mx:['AIBOT_USDT'],chart:'https://www.geckoterminal.com/ko/bsc/pools/0xd3774ab0fd42708095a72e865b2e282e20b0d255?embed=1&info=0&swaps=0&grayscale=0&light_chart=0&chart_type=price&resolution=15m'}
];

const KNOWN=[
  ['VIRTUAL','Virtuals Protocol','Base',['VIRTUALUSDT'],['VIRTUAL_USDT']],['AIXBT','aixbt','Base',['AIXBTUSDT'],['AIXBT_USDT']],
  ['FARTCOIN','Fartcoin','Solana',['FARTCOINUSDT'],['FARTCOIN_USDT']],['COOKIE','Cookie DAO','BNB',['COOKIEUSDT'],['COOKIE_USDT']],
  ['DEGEN','Degen','Base',['DEGENUSDT'],['DEGEN_USDT']],['POPCAT','Popcat','Solana',['POPCATUSDT'],['POPCAT_USDT']],
  ['MOODENG','Moo Deng','Solana',['MOODENGUSDT'],['MOODENG_USDT']],['GOAT','Goatseus Maximus','Solana',['GOATUSDT'],['GOAT_USDT']],
  ['TURBO','Turbo','Ethereum',['TURBOUSDT'],['TURBO_USDT']],['ACT','Act I','Solana',['ACTUSDT'],['ACT_USDT']],
  ['PNUT','Peanut the Squirrel','Solana',['PNUTUSDT'],['PNUT_USDT']],['BOME','Book of Meme','Solana',['BOMEUSDT'],['BOME_USDT']],
  ['BANANAS31','Banana For Scale','BNB',['BANANAS31USDT'],['BANANAS31_USDT']],['CHEEMS','Cheems','BNB',['1000CHEEMSUSDT','CHEEMSUSDT'],['CHEEMS_USDT','1000CHEEMS_USDT']],
  ['TST','Test','BNB',['TSTUSDT'],['TST_USDT']],['MUBARAK','Mubarak','BNB',['MUBARAKUSDT'],['MUBARAK_USDT']],
  ['TUT','Tutorial','BNB',['TUTUSDT'],['TUT_USDT']],['BROCCOLI','Broccoli 714','BNB',['BROCCOLI714USDT','BROCCOLIUSDT'],['BROCCOLI714_USDT','BROCCOLI_USDT']],
  ['ZEREBRO','Zerebro','Solana',['ZEREBROUSDT'],['ZEREBRO_USDT']],['GRIFFAIN','Griffain','Solana',['GRIFFAINUSDT'],['GRIFFAIN_USDT']],
  ['SWARMS','Swarms','Solana',['SWARMSUSDT'],['SWARMS_USDT']],['ARC','AI Rig Complex','Solana',['ARCUSDT'],['ARC_USDT']],
  ['WIF','dogwifhat','Solana',['WIFUSDT'],['WIF_USDT']],['BONK','Bonk','Solana',['1000BONKUSDT','BONKUSDT'],['BONK_USDT','1000BONK_USDT']],
  ['PEPE','Pepe','Ethereum',['1000PEPEUSDT','PEPEUSDT'],['PEPE_USDT','1000PEPE_USDT']],['FLOKI','Floki','BNB',['1000FLOKIUSDT','FLOKIUSDT'],['FLOKI_USDT','1000FLOKI_USDT']],
  ['NEIRO','Neiro','Ethereum',['NEIROUSDT','1000NEIROCTOUSDT','NEIROETHUSDT'],['NEIRO_USDT']],['PENGU','Pudgy Penguins','Solana',['PENGUUSDT'],['PENGU_USDT']],
  ['TRUMP','Official Trump','Solana',['TRUMPUSDT'],['TRUMP_USDT']],['KAITO','Kaito','Base',['KAITOUSDT'],['KAITO_USDT']]
].map(x=>({id:x[0].toLowerCase(),symbol:x[0],name:x[1],chain:x[2],bn:x[3],mx:x[4]}));

const META=[...KNOWN,...GT];
const BN_META=new Map(),MX_META=new Map(),ID_META=new Map();
for(const m of META){ID_META.set(m.id,m);for(const s of m.bn||[])BN_META.set(s,m);for(const s of m.mx||[])MX_META.set(s,m)}
const MAJORS=new Set(['BTC','ETH','BNB','SOL','XRP','ADA','DOGE','TRX','TON','AVAX','LINK','DOT','LTC','BCH','SUI','XLM','HBAR','USDC','USDE','FDUSD','TUSD','DAI','BTCDOM','DEFI']);
const CATEGORY_PRIORITY=['Meme','AI','DeFi','Layer-1','Layer-2','Gaming','RWA','Payment','PoW','Metaverse','NFT','Fan Token','Privacy','Storage','Oracle'];
const CATEGORY_LABELS={Meme:'밈',AI:'AI',DeFi:'DeFi','Layer-1':'L1','Layer-2':'L2',Gaming:'게임',RWA:'RWA',Payment:'결제',PoW:'PoW',Metaverse:'메타버스',NFT:'NFT','Fan Token':'팬토큰',Privacy:'프라이버시',Storage:'스토리지',Oracle:'오라클'};
const savedFav=(()=>{try{return JSON.parse(localStorage.getItem('shekel-fav')||'[]')}catch(_){return[]}})();
const S={tab:'binance',category:'all',q:'',sort:'change',dir:'desc',theme:document.documentElement.dataset.theme||'dark',fav:new Set(),bn:new Map(),mx:new Map(),fund:new Map(),bnCategories:new Map(),categoryList:[],bl:false,ml:false,last:null,socket:null,openItem:null,renderTimer:null};
for(const key of savedFav){if(String(key).includes(':'))S.fav.add(String(key));else{const m=ID_META.get(String(key));if(m)S.fav.add(m.chart?'dex:'+m.id:(m.bn?.[0]?'bn:'+m.bn[0]:'mx:'+m.mx?.[0]))}}

const $=id=>document.getElementById(id);
const E={tabs:$('tabs'),categories:$('categories'),tableHead:$('tableHead'),search:$('search'),sort:$('sort'),rows:$('rows'),empty:$('empty'),count:$('count'),status:$('status'),statusText:$('statusText'),bnCount:$('bnCount'),mxCount:$('mxCount'),dxCount:$('dxCount'),favCount:$('favCount'),symbolSortMark:$('symbolSortMark'),changeSortMark:$('changeSortMark'),shade:$('shade'),close:$('close'),dSymbol:$('dSymbol'),dName:$('dName'),dPrice:$('dPrice'),dChange:$('dChange'),dFunding:$('dFunding'),chartSource:$('chartSource'),chartOpen:$('chartOpen'),chartHost:$('chartHost'),theme:$('theme'),themeIcon:$('themeIcon')};

const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const baseBN=s=>String(s).replace(/USDT$/,'');
const baseMX=s=>String(s).replace(/_USDT$/,'');
const cleanBase=b=>String(b).replace(/^1000(?=[A-Z])/,'');
const knownFor=(venue,symbol)=>venue==='BINANCE'?BN_META.get(symbol):MX_META.get(symbol);
function eligible(venue,symbol){
  if(venue==='BINANCE'&&(!symbol.endsWith('USDT')||symbol.includes('_')))return false;
  if(venue==='MEXC'&&!symbol.endsWith('_USDT'))return false;
  const raw=venue==='BINANCE'?baseBN(symbol):baseMX(symbol),core=cleanBase(raw);
  return !!knownFor(venue,symbol)||!MAJORS.has(core);
}
function makeMarket(venue,symbol,data={}){
  const meta=knownFor(venue,symbol),raw=venue==='BINANCE'?baseBN(symbol):baseMX(symbol);
  return {key:(venue==='BINANCE'?'bn:':'mx:')+symbol,venue,symbol,display:raw,name:meta?.name||'USDT 무기한',chain:meta?.chain||'',meta,price:data.price??null,change:data.change??null,volume:data.volume??null,funding:data.funding??null};
}
function bestForMeta(meta){for(const s of meta.bn||[])if(S.bn.has(s))return S.bn.get(s);for(const s of meta.mx||[])if(S.mx.has(s))return S.mx.get(s);return null}
function dexItem(meta){const m=bestForMeta(meta);return {...(m||makeMarket('DEX',meta.symbol)),key:'dex:'+meta.id,venue:m?.venue||'DEX',display:meta.symbol,name:meta.name,chain:meta.chain,meta}}
function favItems(){
  const out=[];
  for(const key of S.fav){
    if(key.startsWith('bn:')){const m=S.bn.get(key.slice(3));if(m)out.push(m)}
    else if(key.startsWith('mx:')){const m=S.mx.get(key.slice(3));if(m)out.push(m)}
    else if(key.startsWith('dex:')){const m=ID_META.get(key.slice(4));if(m?.chart)out.push(dexItem(m))}
  }
  return out;
}
function allItems(){if(S.tab==='binance')return [...S.bn.values()];if(S.tab==='mexc')return [...S.mx.values()];if(S.tab==='dex')return GT.map(dexItem);return favItems()}
function num(v){return Number.isFinite(Number(v))?Number(v):null}
function price(v){v=num(v);if(v===null||v<=0)return'—';let d=v>=1000?2:v>=1?4:v>=.01?6:v>=.0001?8:12;return'$'+v.toLocaleString('en-US',{minimumFractionDigits:0,maximumFractionDigits:d})}
function pct(v){v=num(v);return v===null?'—':`${v>0?'+':''}${v.toFixed(2)}%`}
function fund(v){v=num(v);return v===null?'—':`${v>0?'+':''}${(v*100).toFixed(4)}%`}
function compact(v){v=num(v);if(v===null)return'—';return'$'+new Intl.NumberFormat('en-US',{notation:'compact',maximumFractionDigits:2}).format(v)}
function cls(v){v=num(v);return v===null?'dim':v>0?'up':v<0?'down':'dim'}
function marketBadges(item){let a=[];if(item.venue==='BINANCE'||item.meta?.bn?.some(s=>S.bn.has(s)))a.push('<span class="badge bn">BN</span>');if(item.venue==='MEXC'||item.meta?.mx?.some(s=>S.mx.has(s)))a.push('<span class="badge mx">MX</span>');if(item.meta?.chart)a.push('<span class="badge dx">DEX</span>');return a.join('')}
function secondary(item){if(item.name&&item.name!=='USDT 무기한')return item.chain?`${item.name} · ${item.chain}`:item.name;return `${item.venue} USDT 무기한`}
function saveFav(){try{localStorage.setItem('shekel-fav',JSON.stringify([...S.fav]))}catch(_){}E.favCount.textContent=S.fav.size}
function compareNullable(a,b){
  if(a===null&&b===null)return 0;
  if(a===null)return 1;
  if(b===null)return-1;
  const r=a<b?-1:a>b?1:0;
  return S.dir==='asc'?r:-r;
}
function compare(a,b){
  if(S.sort==='symbol'){const r=a.display.localeCompare(b.display,undefined,{numeric:true,sensitivity:'base'});return S.dir==='asc'?r:-r}
  if(S.sort==='volume')return compareNullable(num(a.volume),num(b.volume));
  if(S.sort==='funding'){const av=num(a.funding),bv=num(b.funding);return compareNullable(av===null?null:Math.abs(av),bv===null?null:Math.abs(bv))}
  return compareNullable(num(a.change),num(b.change));
}
function categoryLabel(id){return CATEGORY_LABELS[id]||id}
function normalizeCategory(value){
  const v=String(value||'').trim();
  const aliases={'MEME':'Meme','Meme Coin':'Meme','Artificial Intelligence':'AI','GameFi':'Gaming','Layer1':'Layer-1','Layer2':'Layer-2'};
  return aliases[v]||v;
}
function renderCategories(){
  E.categories.hidden=S.tab!=='binance';
  if(S.tab!=='binance')return;
  const counts=new Map();
  for(const item of S.bn.values())for(const tag of S.bnCategories.get(item.symbol)||[])counts.set(tag,(counts.get(tag)||0)+1);
  const visible=S.categoryList.map(id=>({id,count:counts.get(id)||0})).filter(x=>x.count>0);
  if(S.category!=='all'&&!visible.some(x=>x.id===S.category))S.category='all';
  const tabs=[{id:'all',label:'전체',count:S.bn.size},...visible.map(x=>({id:x.id,label:categoryLabel(x.id),count:x.count}))];
  E.categories.innerHTML=tabs.map(x=>`<button class="category ${S.category===x.id?'on':''}" type="button" data-category="${esc(x.id)}">${esc(x.label)} <em>${x.count}</em></button>`).join('');
}
function updateSortMarks(){
  E.symbolSortMark.textContent=S.sort==='symbol'?(S.dir==='asc'?'▲':'▼'):'';
  E.changeSortMark.textContent=S.sort==='change'?(S.dir==='asc'?'▲':'▼'):'';
  E.sort.value=S.sort;
}
function updateStatus(){
  E.bnCount.textContent=S.bn.size;E.mxCount.textContent=S.mx.size;E.dxCount.textContent=GT.length;E.favCount.textContent=S.fav.size;
  E.status.className='status '+(S.bl&&S.ml?'live':S.bl||S.ml?'partial':'');
  E.statusText.textContent=S.bl&&S.ml?`BN ${S.bn.size} · MX ${S.mx.size}`:S.bl?'Binance 연결':'MEXC 연결';
  if(!S.bl&&!S.ml)E.statusText.textContent='연결 중';
}
function render(){
  updateStatus();renderCategories();updateSortMarks();
  const q=S.q;
  let raw=allItems();
  if(S.tab==='binance'&&S.category!=='all')raw=raw.filter(x=>S.bnCategories.get(x.symbol)?.has(S.category));
  const filtered=raw.filter(x=>!q||x.display.toLowerCase().includes(q)||x.name.toLowerCase().includes(q));
  filtered.sort(compare);
  const cap=S.tab==='mexc'?350:300,items=filtered.slice(0,cap);
  E.empty.classList.toggle('on',!items.length&&((S.tab==='binance'&&S.bl)||(S.tab==='mexc'&&S.ml)||S.tab==='dex'||S.tab==='favorites'));
  if(!items.length&&((S.tab==='binance'&&!S.bl)||(S.tab==='mexc'&&!S.ml))){E.rows.innerHTML='<tr class="loadingrow"><td colspan="7">시장 데이터 연결 중…</td></tr>'}
  else E.rows.innerHTML=items.map(x=>`<tr class="row" tabindex="0" data-key="${esc(x.key)}"><td class="favcell"><button class="fav ${S.fav.has(x.key)?'on':''}" type="button" data-fav="${esc(x.key)}" aria-label="즐겨찾기">★</button></td><td class="coin"><b>${esc(x.display)}</b><small>${esc(secondary(x))}</small></td><td class="price">${price(x.price)}</td><td class="${cls(x.change)}">${pct(x.change)}</td><td class="vol">${compact(x.volume)}</td><td class="fund ${cls(x.funding)}">${fund(x.funding)}</td><td class="market"><div class="badges">${marketBadges(x)}</div></td></tr>`).join('');
  E.count.textContent=filtered.length>cap?`${items.length} / ${filtered.length} 종목`:`${filtered.length} 종목`;
}
function scheduleRender(){if(S.renderTimer)return;S.renderTimer=setTimeout(()=>{S.renderTimer=null;render()},220)}
function findItem(key){if(key.startsWith('bn:'))return S.bn.get(key.slice(3));if(key.startsWith('mx:'))return S.mx.get(key.slice(3));if(key.startsWith('dex:')){const m=ID_META.get(key.slice(4));return m?dexItem(m):null}return null}
async function json(urls,timeout=6500){let err;for(const url of urls){const c=new AbortController(),timer=setTimeout(()=>c.abort(),timeout);try{const r=await fetch(url,{cache:'no-store',signal:c.signal});if(!r.ok)throw Error(r.status);return await r.json()}catch(e){err=e}finally{clearTimeout(timer)}}throw err}
async function loadBNMeta(){
  try{
    const info=await json(['https://fapi.binance.com/fapi/v1/exchangeInfo','https://fapi1.binance.com/fapi/v1/exchangeInfo','https://fapi2.binance.com/fapi/v1/exchangeInfo'],9000);
    const map=new Map(),counts=new Map();
    for(const x of info?.symbols||[]){
      if(!eligible('BINANCE',x.symbol))continue;
      const tags=[...new Set((Array.isArray(x.underlyingSubType)?x.underlyingSubType:[]).map(normalizeCategory).filter(Boolean))];
      map.set(x.symbol,new Set(tags));
      for(const tag of tags)counts.set(tag,(counts.get(tag)||0)+1);
    }
    S.bnCategories=map;
    const priorityIndex=new Map(CATEGORY_PRIORITY.map((x,i)=>[x,i]));
    S.categoryList=[...counts.entries()]
      .filter(([,count])=>count>=2)
      .sort((a,b)=>{
        const ai=priorityIndex.has(a[0])?priorityIndex.get(a[0]):999,bi=priorityIndex.has(b[0])?priorityIndex.get(b[0]):999;
        return ai-bi||b[1]-a[1]||a[0].localeCompare(b[0]);
      })
      .slice(0,16)
      .map(([id])=>id);
  }catch(e){console.warn('Binance category metadata',e)}
  render();
}
async function loadBN(){
  try{
    const [tickers,premium]=await Promise.all([
      json(['https://fapi.binance.com/fapi/v1/ticker/24hr','https://fapi1.binance.com/fapi/v1/ticker/24hr','https://fapi2.binance.com/fapi/v1/ticker/24hr']),
      json(['https://fapi.binance.com/fapi/v1/premiumIndex','https://fapi1.binance.com/fapi/v1/premiumIndex','https://fapi2.binance.com/fapi/v1/premiumIndex'])
    ]);
    const fresh=new Map();
    for(const x of tickers){if(!eligible('BINANCE',x.symbol))continue;fresh.set(x.symbol,makeMarket('BINANCE',x.symbol,{price:+x.lastPrice,change:+x.priceChangePercent,volume:+x.quoteVolume,funding:S.fund.get(x.symbol)??null}))}
    for(const x of premium)if(fresh.has(x.symbol)){S.fund.set(x.symbol,+x.lastFundingRate);fresh.get(x.symbol).funding=+x.lastFundingRate}
    S.bn=fresh;S.bl=S.bn.size>0;S.last=new Date();
  }catch(e){console.warn('Binance REST',e)}
  render();
}
async function loadMX(){
  try{
    const r=await json(['https://contract.mexc.com/api/v1/contract/ticker']),a=Array.isArray(r?.data)?r.data:[],fresh=new Map();
    for(const x of a){if(!eligible('MEXC',x.symbol))continue;let change=+x.riseFallRate;if(Number.isFinite(change)&&Math.abs(change)<=2)change*=100;const volume=Number.isFinite(+x.amount24)?+x.amount24:(+x.volume24||0)*(+x.lastPrice||0);fresh.set(x.symbol,makeMarket('MEXC',x.symbol,{price:+x.lastPrice,change:Number.isFinite(change)?change:null,volume,funding:Number.isFinite(+x.fundingRate)?+x.fundingRate:null}))}
    S.mx=fresh;S.ml=S.mx.size>0;S.last=new Date();
  }catch(e){console.warn('MEXC REST',e)}
  render();
}
function socket(){
  try{
    S.socket?.close();const w=new WebSocket('wss://fstream.binance.com/ws/!ticker@arr');S.socket=w;
    w.onmessage=e=>{let a;try{a=JSON.parse(e.data)}catch(_){return}for(const x of a){if(!eligible('BINANCE',x.s))continue;const old=S.bn.get(x.s),m=old||makeMarket('BINANCE',x.s);m.price=+x.c;m.change=+x.P;m.volume=+x.q;m.funding=S.fund.get(x.s)??m.funding;S.bn.set(x.s,m)}S.bl=S.bn.size>0;S.last=new Date();scheduleRender()};
    w.onclose=()=>setTimeout(socket,5000);w.onerror=()=>w.close();
  }catch(_){setTimeout(socket,5000)}
}
function geckoUrl(meta){const u=new URL(meta.chart);u.searchParams.set('embed','1');u.searchParams.set('info','0');u.searchParams.set('swaps','0');u.searchParams.set('grayscale','0');u.searchParams.set('light_chart',S.theme==='light'?'1':'0');return u.toString()}
function tradingViewUrl(item){const isMX=item.venue==='MEXC'&&!item.meta?.bn?.some(s=>S.bn.has(s));const exchange=isMX?'MEXC':'BINANCE';let symbol=item.symbol.replace('_','');if(!isMX&&item.meta?.bn?.some(s=>S.bn.has(s)))symbol=item.meta.bn.find(s=>S.bn.has(s));const params=new URLSearchParams({symbol:`${exchange}:${symbol}.P`,interval:'15',theme:S.theme,style:'1',locale:'kr',allow_symbol_change:'0',hideideas:'1',saveimage:'0',toolbarbg:S.theme==='light'?'f1f3f6':'0e1218'});return'https://s.tradingview.com/widgetembed/?'+params}
function externalUrl(url,isGecko){if(!isGecko)return url;const u=new URL(url);['embed','info','swaps','grayscale','light_chart'].forEach(k=>u.searchParams.delete(k));return u.toString()}
function mountChart(item){
  const isGecko=!!item.meta?.chart,url=isGecko?geckoUrl(item.meta):tradingViewUrl(item);
  E.chartSource.textContent=isGecko?'GeckoTerminal · '+item.meta.chain:`${item.venue} · TradingView`;
  E.chartOpen.href=externalUrl(url,isGecko);E.chartHost.classList.remove('ready');E.chartHost.innerHTML='<div class="chartload">차트 불러오는 중…</div>';
  const frame=document.createElement('iframe');frame.className='chart';frame.title=`${item.display} 실시간 차트`;frame.src=url;frame.allow='clipboard-write; fullscreen';frame.allowFullscreen=true;frame.setAttribute('frameborder','0');frame.referrerPolicy='strict-origin-when-cross-origin';frame.onload=()=>E.chartHost.classList.add('ready');E.chartHost.appendChild(frame);
}
function openItem(item){
  if(!item)return;S.openItem=item;E.dSymbol.innerHTML=esc(item.display)+' <span class="badges">'+marketBadges(item)+'</span>';E.dName.textContent=secondary(item);E.dPrice.textContent=price(item.price);E.dChange.textContent=pct(item.change);E.dChange.className=cls(item.change);E.dFunding.textContent=fund(item.funding);E.dFunding.className=cls(item.funding);E.shade.classList.add('on');E.shade.setAttribute('aria-hidden','false');document.body.classList.add('lock');requestAnimationFrame(()=>mountChart(item));
}
function closeDrawer(){E.shade.classList.remove('on');E.shade.setAttribute('aria-hidden','true');E.chartHost.replaceChildren();document.body.classList.remove('lock');S.openItem=null}
function applyTheme(theme,reload=true){S.theme=theme;document.documentElement.dataset.theme=theme;try{localStorage.setItem('shekel-theme',theme)}catch(_){}document.querySelector('meta[name="theme-color"]').content=theme==='light'?'#f3f5f7':'#080a0e';const light=theme==='light';E.themeIcon.textContent=light?'☾':'☀';E.theme.title=light?'다크 모드':'라이트 모드';E.theme.setAttribute('aria-label',light?'다크 모드로 전환':'라이트 모드로 전환');if(reload&&S.openItem)mountChart(S.openItem)}
function toggleSort(field){
  if(S.sort===field)S.dir=S.dir==='asc'?'desc':'asc';
  else{S.sort=field;S.dir=field==='symbol'?'asc':'desc'}
  render();
}

E.tabs.onclick=e=>{const b=e.target.closest('[data-tab]');if(!b)return;S.tab=b.dataset.tab;document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('on',x===b));render()};
E.categories.onclick=e=>{const b=e.target.closest('[data-category]');if(!b)return;S.category=b.dataset.category;render()};
E.tableHead.onclick=e=>{const b=e.target.closest('[data-head-sort]');if(b)toggleSort(b.dataset.headSort)};
E.search.oninput=e=>{S.q=e.target.value.trim().toLowerCase();render()};
E.sort.onchange=e=>{S.sort=e.target.value;S.dir=S.sort==='symbol'?'asc':'desc';render()};
E.rows.onclick=e=>{const f=e.target.closest('[data-fav]');if(f){e.stopPropagation();S.fav.has(f.dataset.fav)?S.fav.delete(f.dataset.fav):S.fav.add(f.dataset.fav);saveFav();return render()}const r=e.target.closest('[data-key]');if(r)openItem(findItem(r.dataset.key))};
E.rows.onkeydown=e=>{if((e.key==='Enter'||e.key===' ')&&!e.target.closest('button')){e.preventDefault();const r=e.target.closest('[data-key]');if(r)openItem(findItem(r.dataset.key))}};
E.close.onclick=closeDrawer;E.shade.onclick=e=>{if(e.target===E.shade)closeDrawer()};E.theme.onclick=()=>applyTheme(S.theme==='light'?'dark':'light');window.addEventListener('keydown',e=>{if(e.key==='Escape')closeDrawer()});
applyTheme(S.theme,false);saveFav();render();loadBN();loadBNMeta();loadMX();socket();setInterval(loadMX,12000);setInterval(loadBN,60000);setInterval(loadBNMeta,1800000);
