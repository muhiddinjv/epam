const showText = document.querySelector("h2")
const showNum = document.querySelector("h1")
const input = document.querySelector("input")
				
		function show(){
		 //output.innerHTML = "Hello "+ input.value + "! Welcome to my website!";
			showText.innerHTML = "YEAH ITS WORKING";
		}
		
		function block(){
		   let myWorker = new Worker("worker.js");
		   myWorker.postMessage("do work");
		   myWorker.onmessage = function(e) {
		      showNum.innerHTML = e.data;
		   }
		}