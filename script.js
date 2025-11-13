//your JS code here. If required.
const textEle = document.querySelector("#text");
const delayEle = document.querySelector("#delay");
const btn = document.querySelector("#btn");
const outputEle = document.querySelector("#output");

btn.addEventListener('click',async ()=>{
		await new Promise(resolve=>setTimeout(resolve,delayEle.value.trim()))
		outputEle.textContent=`${textEle.value.trim()}`
})