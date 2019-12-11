// 定位console
function nlog(){
  let arg = arguments
  let Reset = "\x1b[0m"
  let FgCyan = "\x1b[36m"
  try{
    throw new Error();
  }catch(e){
    if(typeof e.stack === 'string'){
      let d = new Date()
      let t = `${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}`
      // let stack = `[time:${t}] at: ${e.stack.split('at ')[2].replace('\n','')}`
      let stack = `[time:${t}] at: ${e.stack.split('at ')[2].replace('\n','')}`
      console.log(FgCyan + '%s' + Reset, stack)
      console.log(...arg)
    }
  }
}

export default nlog