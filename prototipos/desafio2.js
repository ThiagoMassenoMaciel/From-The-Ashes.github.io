let contador_do_click = 0

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
    console.log("V")
    contador_do_click = 0 // depois que fez a ação tem que zerar
  }

 })