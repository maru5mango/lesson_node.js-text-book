#var(함수 스코프)-> const,let(블록 스코프-중괄호)
                    const값은 변경 불가
-> 호이스팅 문제 해결
##호이스팅?

# 객체 리터럴
  const newObjejct={
    sayJS(){ console.log('js');},
    sayNode,
    [es+6]: 'Fantasy',
  };
  newObject.sayNode() //Node
  newObject.sayJS() //JS
  console.log(newObject.ES6) // Fantasy
  
  # 비구조화 할당
    const candyMachine={
      status: { name: 'node', count: 5, },
      getCandy(){ this.status.count--; return this.status.count; }
    };
    const { getCandy, status: {count} }=candyMachine;
  
  # 프로미스
    const condition=true;
    const promise=new {romise((resolve, reject)=>{
      if (condition) { resolve('성공');}
      else { reject('실패');}
      });
      
    promise
      .then((msg)=>{  console.log(msg); })
      .catch((err)=>{ console.log(err); });
      
  # async/await
  
