let contador_do_click = 0
console.log("começando")
let   startTime = performance.now();
window.addEventListener('keydown', (event)=>{

  if(event.key === 'Enter'){
    contador_do_click +=1
  }
 
  if(contador_do_click === 1){
    console.log("^")
  }else if(contador_do_click === 2){
    console.log(">")
  }else if(contador_do_click === 3){
    console.log("<")
  }else if(contador_do_click === 4){
    let endTime = performance.now();
    console.log(`A função levou ${endTime - startTime} milissegundos para executar.`);
    console.log("V")
    contador_do_click = 0 // depois que fez a ação tem que zerar
  }

 })

console.log("terminando")