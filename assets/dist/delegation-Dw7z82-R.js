import{f as i}from"./actions-BRqe8OAI.js";import{a,b as s,r as e}from"./util-CfqN00QO.js";window.addEventListener("alpine:init",()=>{Alpine.data("poolDelegation",()=>({isProcessing:!1,transactionHash:"",async handleDelegation(){this.transactionHash="",a({id:"delegation",type:"info",text:s.delegating}),this.isProcessing=!0;const t=await i();e("delegation"),t.success?(this.transactionHash=t.data.hash,a({type:"info",text:t.data.message})):a({type:"warning",text:t.data}),this.isProcessing=!1}}))});
