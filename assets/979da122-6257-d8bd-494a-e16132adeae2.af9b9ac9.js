import"./dynamic-import-polyfill.b3685604.js";import{g as e}from"./vendor.18e29a6d.js";function t(e){return document.getElementById(e)}document.getElementById("input1Button").onclick=function(){let n=t("input1").value,i=new Blob([e.toUint8Array(n)],{type:"application/octet-stream"}),o=URL.createObjectURL(i),r=document.createElement("a");r.href=o,r.download="add its extension behind",r.target="_blank";let a=document.createEvent("MouseEvents");a.initEvent("click",!0,!0),r.dispatchEvent(a)},document.getElementById("input2").onchange=function(){let n=t("input2").files[0],i=new FileReader;i.onload=function(n){t("input1").value=e.fromUint8Array(new Uint8Array(n.target.result))},i.readAsArrayBuffer(n)};
