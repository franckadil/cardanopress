const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["coinSelection-BK9MdsDt.js","cardano_serialization_lib-DZgxyT4u.js"])))=>i.map(i=>d[i]);
var ut=Object.defineProperty;var ht=(f,g,y)=>g in f?ut(f,g,{enumerable:!0,configurable:!0,writable:!0,value:y}):f[g]=y;var l=(f,g,y)=>ht(f,typeof g!="symbol"?g+"":g,y);let h,I,L,U,Z,tt,et,at,k,j,q,nt,ot,z,W,D,F,T,rt,st,wt=(async()=>{var P,M;let f,g,y,B,x;L={0:"testnet",1:"mainnet"},f={too_big:"Transaction too big",not_possible:"Transaction not possible (maybe insufficient balance)",invalid_hereafter:7200},T=Object.freeze(["Nami","Eternl","Yoroi","Flint","Typhon","GeroWallet","NuFi","Lace","Begin"]),g="modulepreload",y=function(t){return"/wp-content/plugins/cardanopress/assets/dist/"+t},B={},x=function(t,e,a){let n=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),s=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));n=Promise.all(e.map(i=>{if(i=y(i),i in B)return;B[i]=!0;const c=i.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${d}`))return;const r=document.createElement("link");if(r.rel=c?"stylesheet":g,c||(r.as="script",r.crossOrigin=""),r.href=i,s&&r.setAttribute("nonce",s),document.head.appendChild(r),c)return new Promise((w,b)=>{r.addEventListener("load",w),r.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${i}`)))})}))}return n.then(()=>t()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})},h=(P=class{static async load(){return h.Module===void 0&&(h.Module=await x(()=>import("./cardano_serialization_lib-DZgxyT4u.js").then(async t=>(await t.__tla,t)),[])),h.Module}},l(P,"Module"),P);const _=class _{static async load(){return _.Module===void 0&&(_.Module=(await x(async()=>{const{Buffer:e}=await import("./index-BTZikr4I.js").then(a=>a.i);return{Buffer:e}},[])).Buffer),_.Module}};l(_,"Module");let p=_,A,O,$,E,S;W=t=>(parseFloat(t||"1")*1e6).toFixed(),A=async t=>{const e=await h.load(),a=await p.load();return e.Address.from_bytes(a.from(t,"hex")).to_bech32()},O=t=>{let e="";for(var a=0,n=t.length;a<n;a++)e+=t.charCodeAt(a).toString(16);return e},ot=Object.freeze(Object.defineProperty({__proto__:null,adaToLovelace:W,hexEncode:O,hexToBech32:A},Symbol.toStringTag,{value:"Module"})),$=async t=>{var n;if(!t)return 0;let e=0;const a=t.keys();for(let o=0;o<t.len();o++){const s=a.get(o),i=(n=t.get(s))==null?void 0:n.keys();for(let c=0;c<i.len();c++)e++}return e},E=async(t,e)=>{const a=await h.load(),n=a.TransactionOutputs.new();return n.add(a.TransactionOutput.new(a.Address.from_bech32(e),a.Value.new(a.BigNum.from_str(t)))),n},S=async(t,e,a,n,o=null)=>{const s=await $(a.get(0).amount().multiasset()),{default:i}=await x(async()=>{const{default:u}=await import("./coinSelection-BK9MdsDt.js").then(async m=>(await m.__tla,m));return{default:u}},__vite__mapDeps([0,1]));i.setProtocolParameters(n.minUtxo,n.minFeeA.toString(),n.minFeeB.toString(),n.maxTxSize.toString());let c;try{c=await i.randomImprove(e,a,20+s)}catch{throw f.not_possible}const d=c.input,r=await h.load(),w=r.TransactionBuilder.new(r.LinearFee.new(r.BigNum.from_str(n.minFeeA.toString()),r.BigNum.from_str(n.minFeeB.toString())),r.BigNum.from_str(n.minUtxo),r.BigNum.from_str(n.poolDeposit),r.BigNum.from_str(n.keyDeposit),n.maxValSize,n.maxTxSize);o&&w.set_certs(o);for(let u=0;u<d.length;u++){const m=d[u];w.add_input(m.output().address(),m.input(),m.output().amount())}for(let u=0;u<a.len();u++)w.add_output(a.get(u));const b=c.change,v=b.multiasset();if(v&&b.to_bytes().length*2>n.maxValSize){const u=r.Value.new(r.BigNum.from_str("0")),m=r.MultiAsset.new(),ct=v.keys();(()=>{for(let R=0;R<v.len();R++){const N=ct.get(R),G=v.get(N),Y=G.keys(),C=r.Assets.new();for(let V=0;V<Y.len();V++){const J=Y.get(V),lt=G.get(J);C.insert(J,lt);const Q=r.MultiAsset.from_bytes(m.to_bytes());Q.insert(N,C);const X=r.Value.new(r.BigNum.from_str("0"));if(X.set_multiasset(Q),X.to_bytes().length*2>=n.maxValSize){m.insert(N,C);return}}m.insert(N,C)}})(),u.set_multiasset(m);const dt=r.min_ada_required(u,r.BigNum.from_str(n.minUtxo));u.set_coin(dt),w.add_output(r.TransactionOutput.new(r.Address.from_bech32(t),u))}w.set_ttl(n.slot+f.invalid_hereafter),w.add_change_if_needed(r.Address.from_bech32(t));const K=r.Transaction.new(w.build(),r.TransactionWitnessSet.new());if(K.to_bytes().length*2>n.maxTxSize)throw f.too_big;return K},st=Object.freeze(Object.defineProperty({__proto__:null,buildTx:S,prepareTx:E},Symbol.toStringTag,{value:"Module"}));class it{constructor(e,a){l(this,"type");l(this,"cardano");l(this,"getNetwork",async()=>{let e=await this.cardano.getNetworkId();return this.type==="Typhon"&&(e=e.data),L[e]});l(this,"getBalance",async()=>{if(this.type==="Typhon")return(await this.cardano.getBalance()).data.ada;const e=await this.cardano.getBalance(),a=await h.load(),n=await p.load();return a.Value.from_bytes(n.from(e,"hex")).coin().to_str()});l(this,"getChangeAddress",async()=>{if(this.type==="Typhon")return(await this.cardano.getAddress()).data;const e=await this.cardano.getChangeAddress();return await A(e)});l(this,"getRewardAddress",async()=>{if(this.type==="Typhon")return(await this.cardano.getRewardAddress()).data;const e=await this.cardano.getRewardAddresses();return await A(e[0])});l(this,"getUtxos",async()=>{if(this.type==="Typhon")return[];const e=await this.cardano.getUtxos(),a=await h.load(),n=await p.load();return e.map(o=>a.TransactionUnspentOutput.from_bytes(n.from(o,"hex")))});l(this,"getStakeKeyHash",async()=>{var n,o,s;const e=await this.getRewardAddress(),a=await h.load();return(s=(o=(n=a.RewardAddress.from_address(a.Address.from_bech32(e)))==null?void 0:n.payment_cred())==null?void 0:o.to_keyhash())==null?void 0:s.to_bytes()});l(this,"signData",async e=>{const a=await this.getChangeAddress(),n=O(e);let o=this.cardano;return this.type==="Typhon"&&(o=await window.cardano.typhoncip30.enable()),o.signData(a,n)});l(this,"signAndSubmit",async e=>{if(this.type==="Typhon")throw"No implementation from the extension";try{const a=await p.load(),n=await h.load(),o=a.from(e.to_bytes()),s=await this.cardano.signTx(o.toString("hex")),i=n.Transaction.new(e.body(),n.TransactionWitnessSet.from_bytes(a.from(s,"hex")));let c=a.from(i.to_bytes());return await this.cardano.submitTx(c.toString("hex"))}catch(a){throw a.info}});l(this,"payTo",async(e,a,n=null)=>{if(this.type==="Typhon"){const{status:o,data:s,error:i,reason:c}=await this.cardano.paymentTransaction({outputs:[{address:e,amount:a}]});if(o)return s.transactionId;throw i??c}if(!n)throw"Required protocol parameters";try{const o=await this.getChangeAddress(),s=await this.getUtxos(),i=await E(a,e),c=await S(o,s,i,n);return await this.signAndSubmit(c)}catch(o){throw o}});l(this,"multiSend",async(e,a=null)=>{if(this.type==="Typhon"){const{status:n,data:o,error:s,reason:i}=await this.cardano.paymentTransaction({outputs:e});if(n)return o.transactionId;throw s??i}if(!a)throw"Required protocol parameters";try{const n=await this.getChangeAddress(),o=await this.getUtxos(),s=await h.load(),i=s.TransactionOutputs.new();e.forEach(d=>{i.add(s.TransactionOutput.new(s.Address.from_bech32(d.address),s.Value.new(s.BigNum.from_str(d.amount))))});const c=await S(n,o,i,a);return await this.signAndSubmit(c)}catch(n){throw n}});l(this,"delegateTo",async(e,a=null,n=null)=>{if(this.type==="Typhon"){const{status:o,data:s,error:i,reason:c}=await this.cardano.delegationTransaction({poolId:e});if(o)return s.transactionId;throw i??c}if(!a)throw"Required protocol parameters";if(!n)throw"Required account information";try{const o=await this.getChangeAddress(),s=await this.getUtxos(),i=await E(a.keyDeposit,o),c=await this.getStakeKeyHash(),d=await h.load(),r=await p.load(),w=d.Certificates.new();n.active||w.add(d.Certificate.new_stake_registration(d.StakeRegistration.new(d.StakeCredential.from_keyhash(d.Ed25519KeyHash.from_bytes(r.from(c)))))),w.add(d.Certificate.new_stake_delegation(d.StakeDelegation.new(d.StakeCredential.from_keyhash(d.Ed25519KeyHash.from_bytes(r.from(c))),d.Ed25519KeyHash.from_bytes(r.from(e,"hex")))));const b=await S(o,s,i,a,w);return await this.signAndSubmit(b)}catch(o){throw o}});this.type=e,this.cardano=a}}let H;H=async t=>{const e=await window.cardano[t].enable();if(t==="typhon"){if(e.status===!1)throw(e==null?void 0:e.error)??e.reason;return await window.cardano[t]}return e},k=t=>{var e,a;return((a=(e=window.cardano[t.toLowerCase()])==null?void 0:e.experimental)==null?void 0:a.vespr_compat)||!1},I=(M=class{static isSupported(t){return t==="VESPR"?!0:T.includes(t)}static fromVespr(){return T.filter(k)}static hasWallet(t){var e;return this.isSupported(t)?!!((e=window.cardano)!=null&&e[t.toLowerCase()]):!1}static async isEnabled(t){return this.hasWallet(t)?window.cardano[t.toLowerCase()].isEnabled():!1}static async getWallet(t){if(!this.isSupported(t))throw`Not supported wallet "${t}"`;if(!this.hasWallet(t))throw`Not available wallet "${t}"`;const e=t.toLowerCase(),a=`${e}Object`;if(this[a]===void 0||!await this.isEnabled(t))try{this[a]=new it(t,await H(e))}catch(n){throw typeof n=="string"?n:n.info||n.message||"user abort connection"}return Object.freeze(this[a])}},l(M,"supported",T),M),tt=window.cardanoPress||{ajaxUrl:"",_nonce:"",logged:""},Z=window.cardanoPressMessages||{connected:"",connecting:"",reconnected:"",reconnecting:"",walletSyncing:"",newAssetsPulled:"",handleSaving:"",delegating:"",paying:"",clipboardCopy:""},j=()=>{const t=localStorage.getItem("_x_connectedExtension")||"";return t===""?"":`${t}${k(t)?"(VESPR Compat)":""}`},at=t=>localStorage.setItem("_x_connectedExtension",t),nt=()=>(localStorage.getItem("_x_isNotified")||"false")==="true",et=t=>localStorage.setItem("_x_isNotified",t),D=t=>new Promise(e=>{if(document.querySelector(t))return e(document.querySelector(t));const a=new MutationObserver(()=>{document.querySelector(t)&&(e(document.querySelector(t)),a.disconnect())});a.observe(document.body,{childList:!0,subtree:!0})}),z=()=>{const t=()=>Math.floor((1+Math.random())*65536).toString(16).substring(1);return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()},U=t=>{window.dispatchEvent(new CustomEvent("cardanoPress:addNotice",{detail:t}))},F=t=>{window.dispatchEvent(new CustomEvent("cardanoPress:removeNotice",{detail:t}))},q=async()=>{const t=j();if(!t)throw"Not connected to a wallet";return await I.getWallet(t)},rt=Object.freeze(Object.defineProperty({__proto__:null,addNotice:U,generateUuid:z,getConnectedWallet:q,removeNotice:F,waitElement:D},Symbol.toStringTag,{value:"Module"}))})();export{h as C,I as E,L as N,wt as __tla,U as a,Z as b,tt as c,et as d,at as e,k as f,j as g,q as h,nt as i,ot as j,z as k,W as l,D as m,F as r,T as s,rt as u,st as w};
