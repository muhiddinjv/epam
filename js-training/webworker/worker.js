onmessage = (e) => {
   let result = 0;
   for (let i = 0; i < 3000000000; i++){
      result += i
   }
   postMessage("Unblocked!");
}