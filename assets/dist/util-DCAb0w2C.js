const __vite__fileDeps=["coinSelection-BK9MdsDt.js","cardano_serialization_lib-DZgxyT4u.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var lt=Object.defineProperty;var ut=(m,f,g)=>f in m?lt(m,f,{enumerable:!0,configurable:!0,writable:!0,value:g}):m[f]=g;var l=(m,f,g)=>(ut(m,typeof f!="symbol"?f+"":f,g),g);let h,I,C,L,Q,Z,tt,et,B,U,j,at,nt,q,z,W,F,T,ot,rt,ht=(async()=>{var P,M;let m,f,g,O,x;C={0:"testnet",1:"mainnet"},m={too_big:"Transaction too big",not_possible:"Transaction not possible (maybe insufficient balance)",invalid_hereafter:7200},T=Object.freeze(["Nami","Eternl","Yoroi","Flint","Typhon","GeroWallet","NuFi","Lace","Begin"]),f="modulepreload",g=function(t){return"/wp-content/plugins/cardanopress/assets/dist/"+t},O={},x=function(t,e,n){let a=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),s=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));a=Promise.all(e.map(i=>{if(i=g(i),i in O)return;O[i]=!0;const c=i.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${d}`))return;const r=document.createElement("link");if(r.rel=c?"stylesheet":f,c||(r.as="script",r.crossOrigin=""),r.href=i,s&&r.setAttribute("nonce",s),document.head.appendChild(r),c)return new Promise((w,b)=>{r.addEventListener("load",w),r.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${i}`)))})}))}return a.then(()=>t()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})},h=(P=class{static async load(){return h.Module===void 0&&(h.Module=await x(()=>import("./cardano_serialization_lib-DZgxyT4u.js").then(async t=>(await t.__tla,t)),[])),h.Module}},l(P,"Module"),P);const _=class _{static async load(){return _.Module===void 0&&(_.Module=(await x(()=>import("./index-DwswyeBN.js").then(e=>e.i),[])).Buffer),_.Module}};l(_,"Module");let y=_,E,$,A,S;z=t=>(parseFloat(t||"1")*1e6).toFixed(),E=async t=>{const e=await h.load(),n=await y.load();return e.Address.from_bytes(n.from(t,"hex")).to_bech32()},nt=Object.freeze(Object.defineProperty({__proto__:null,adaToLovelace:z,hexToBech32:E},Symbol.toStringTag,{value:"Module"})),$=async t=>{var a;if(!t)return 0;let e=0;const n=t.keys();for(let o=0;o<t.len();o++){const s=n.get(o),i=(a=t.get(s))==null?void 0:a.keys();for(let c=0;c<i.len();c++)e++}return e},A=async(t,e)=>{const n=await h.load(),a=n.TransactionOutputs.new();return a.add(n.TransactionOutput.new(n.Address.from_bech32(e),n.Value.new(n.BigNum.from_str(t)))),a},S=async(t,e,n,a,o=null)=>{const s=await $(n.get(0).amount().multiasset()),{default:i}=await x(()=>import("./coinSelection-BK9MdsDt.js").then(async u=>(await u.__tla,u)),__vite__mapDeps([0,1]));i.setProtocolParameters(a.minUtxo,a.minFeeA.toString(),a.minFeeB.toString(),a.maxTxSize.toString());let c;try{c=await i.randomImprove(e,n,20+s)}catch{throw m.not_possible}const d=c.input,r=await h.load(),w=r.TransactionBuilder.new(r.LinearFee.new(r.BigNum.from_str(a.minFeeA.toString()),r.BigNum.from_str(a.minFeeB.toString())),r.BigNum.from_str(a.minUtxo),r.BigNum.from_str(a.poolDeposit),r.BigNum.from_str(a.keyDeposit),a.maxValSize,a.maxTxSize);o&&w.set_certs(o);for(let u=0;u<d.length;u++){const p=d[u];w.add_input(p.output().address(),p.input(),p.output().amount())}for(let u=0;u<n.len();u++)w.add_output(n.get(u));const b=c.change,v=b.multiasset();if(v&&b.to_bytes().length*2>a.maxValSize){const u=r.Value.new(r.BigNum.from_str("0")),p=r.MultiAsset.new(),it=v.keys();(()=>{for(let R=0;R<v.len();R++){const N=it.get(R),K=v.get(N),Y=K.keys(),k=r.Assets.new();for(let V=0;V<Y.len();V++){const G=Y.get(V),dt=K.get(G);k.insert(G,dt);const J=r.MultiAsset.from_bytes(p.to_bytes());J.insert(N,k);const X=r.Value.new(r.BigNum.from_str("0"));if(X.set_multiasset(J),X.to_bytes().length*2>=a.maxValSize){p.insert(N,k);return}}p.insert(N,k)}})(),u.set_multiasset(p);const ct=r.min_ada_required(u,r.BigNum.from_str(a.minUtxo));u.set_coin(ct),w.add_output(r.TransactionOutput.new(r.Address.from_bech32(t),u))}w.set_ttl(a.slot+m.invalid_hereafter),w.add_change_if_needed(r.Address.from_bech32(t));const H=r.Transaction.new(w.build(),r.TransactionWitnessSet.new());if(H.to_bytes().length*2>a.maxTxSize)throw m.too_big;return H},rt=Object.freeze(Object.defineProperty({__proto__:null,buildTx:S,prepareTx:A},Symbol.toStringTag,{value:"Module"}));class st{constructor(e,n){l(this,"type");l(this,"cardano");l(this,"getNetwork",async()=>{if(this.type==="Yoroi")return C[1];let e=await this.cardano.getNetworkId();return this.type==="Typhon"&&(e=e.data),C[e]});l(this,"getBalance",async()=>{if(this.type==="Typhon")return(await this.cardano.getBalance()).data.ada;const e=await this.cardano.getBalance(),n=await h.load(),a=await y.load();return n.Value.from_bytes(a.from(e,"hex")).coin().to_str()});l(this,"getChangeAddress",async()=>{if(this.type==="Typhon")return(await this.cardano.getAddress()).data;const e=await this.cardano.getChangeAddress();return await E(e)});l(this,"getRewardAddress",async()=>{if(this.type==="Typhon")return(await this.cardano.getRewardAddress()).data;const e=await this.cardano.getRewardAddresses();return await E(e[0])});l(this,"getUtxos",async()=>{if(this.type==="Typhon")return[];const e=await this.cardano.getUtxos(),n=await h.load(),a=await y.load();return e.map(o=>n.TransactionUnspentOutput.from_bytes(a.from(o,"hex")))});l(this,"getStakeKeyHash",async()=>{var a,o,s;const e=await this.getRewardAddress(),n=await h.load();return(s=(o=(a=n.RewardAddress.from_address(n.Address.from_bech32(e)))==null?void 0:a.payment_cred())==null?void 0:o.to_keyhash())==null?void 0:s.to_bytes()});l(this,"signAndSubmit",async e=>{if(this.type==="Typhon")throw"No implementation from the extension";try{const n=await y.load(),a=await h.load(),o=n.from(e.to_bytes()),s=await this.cardano.signTx(o.toString("hex")),i=a.Transaction.new(e.body(),a.TransactionWitnessSet.from_bytes(n.from(s,"hex")));let c=n.from(i.to_bytes());return await this.cardano.submitTx(c.toString("hex"))}catch(n){throw n.info}});l(this,"payTo",async(e,n,a=null)=>{if(this.type==="Typhon"){const{status:o,data:s,error:i,reason:c}=await this.cardano.paymentTransaction({outputs:[{address:e,amount:n}]});if(o)return s.transactionId;throw i??c}if(!a)throw"Required protocol parameters";try{const o=await this.getChangeAddress(),s=await this.getUtxos(),i=await A(n,e),c=await S(o,s,i,a);return await this.signAndSubmit(c)}catch(o){throw o}});l(this,"multiSend",async(e,n=null)=>{if(this.type==="Typhon"){const{status:a,data:o,error:s,reason:i}=await this.cardano.paymentTransaction({outputs:e});if(a)return o.transactionId;throw s??i}if(!n)throw"Required protocol parameters";try{const a=await this.getChangeAddress(),o=await this.getUtxos(),s=await h.load(),i=s.TransactionOutputs.new();e.forEach(d=>{i.add(s.TransactionOutput.new(s.Address.from_bech32(d.address),s.Value.new(s.BigNum.from_str(d.amount))))});const c=await S(a,o,i,n);return await this.signAndSubmit(c)}catch(a){throw a}});l(this,"delegateTo",async(e,n=null,a=null)=>{if(this.type==="Typhon"){const{status:o,data:s,error:i,reason:c}=await this.cardano.delegationTransaction({poolId:e});if(o)return s.transactionId;throw i??c}if(!n)throw"Required protocol parameters";if(!a)throw"Required account information";try{const o=await this.getChangeAddress(),s=await this.getUtxos(),i=await A(n.keyDeposit,o),c=await this.getStakeKeyHash(),d=await h.load(),r=await y.load(),w=d.Certificates.new();a.active||w.add(d.Certificate.new_stake_registration(d.StakeRegistration.new(d.StakeCredential.from_keyhash(d.Ed25519KeyHash.from_bytes(r.from(c)))))),w.add(d.Certificate.new_stake_delegation(d.StakeDelegation.new(d.StakeCredential.from_keyhash(d.Ed25519KeyHash.from_bytes(r.from(c))),d.Ed25519KeyHash.from_bytes(r.from(e,"hex")))));const b=await S(o,s,i,n,w);return await this.signAndSubmit(b)}catch(o){throw o}});this.type=e,this.cardano=n}}let D;D=async t=>{const e=await window.cardano[t].enable();if(t==="typhon"){if(e.status===!1)throw(e==null?void 0:e.error)??e.reason;return await window.cardano[t]}return e},B=t=>{var e,n;return((n=(e=window.cardano[t.toLowerCase()])==null?void 0:e.experimental)==null?void 0:n.vespr_compat)||!1},I=(M=class{static isSupported(t){return t==="ccvault"&&(t="Eternl"),t==="VESPR"?!0:T.includes(t)}static fromVespr(){return T.filter(B)}static hasWallet(t){var e;return this.isSupported(t)?!!((e=window.cardano)!=null&&e[t.toLowerCase()]):!1}static async isEnabled(t){return this.hasWallet(t)?window.cardano[t.toLowerCase()].isEnabled():!1}static async getWallet(t){if(!this.isSupported(t))throw`Not supported wallet "${t}"`;if(!this.hasWallet(t))throw`Not available wallet "${t}"`;const e=t.toLowerCase(),n=`${e}Object`;if(this[n]===void 0||!await this.isEnabled(t))try{this[n]=new st(t,await D(e))}catch(a){throw typeof a=="string"?a:a.info||a.message||"user abort connection"}return Object.freeze(this[n])}},l(M,"supported",T),M),Z=window.cardanoPress||{ajaxUrl:"",_nonce:"",logged:""},Q=window.cardanoPressMessages||{connected:"",connecting:"",reconnected:"",reconnecting:"",walletSyncing:"",newAssetsPulled:"",handleSaving:"",delegating:"",paying:"",clipboardCopy:""},U=()=>{const t=localStorage.getItem("_x_connectedExtension")||"";return t===""?"":`${t}${B(t)?"(VESPR Compat)":""}`},et=t=>localStorage.setItem("_x_connectedExtension",t),at=()=>(localStorage.getItem("_x_isNotified")||"false")==="true",tt=t=>localStorage.setItem("_x_isNotified",t),W=t=>new Promise(e=>{if(document.querySelector(t))return e(document.querySelector(t));const n=new MutationObserver(()=>{document.querySelector(t)&&(e(document.querySelector(t)),n.disconnect())});n.observe(document.body,{childList:!0,subtree:!0})}),q=()=>{const t=()=>Math.floor((1+Math.random())*65536).toString(16).substring(1);return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()},L=t=>{window.dispatchEvent(new CustomEvent("cardanoPress:addNotice",{detail:t}))},F=t=>{window.dispatchEvent(new CustomEvent("cardanoPress:removeNotice",{detail:t}))},j=async()=>{const t=U();if(!t)throw"Not connected to a wallet";return await I.getWallet(t)},ot=Object.freeze(Object.defineProperty({__proto__:null,addNotice:L,generateUuid:q,getConnectedWallet:j,removeNotice:F,waitElement:W},Symbol.toStringTag,{value:"Module"}))})();export{h as C,I as E,C as N,ht as __tla,L as a,Q as b,Z as c,tt as d,et as e,B as f,U as g,j as h,at as i,nt as j,q as k,z as l,W as m,F as r,T as s,ot as u,rt as w};