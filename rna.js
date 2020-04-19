// 1
let Rna = {

  transcript: function(x){

    let split = x.split('')

    let transMap = split.map(function(x){

      if (x === 'G'){ 
        return 'C'
      }else if (x === 'C'){
        return 'G'
      }else if (x === 'A'){
        return 'U'
      }else {
        return 'A'}        
    })

    console.log(transMap.join(''))

  }

}

Rna.transcript('GC')  //'CG'

Rna.transcript('ACGTGGTCTTAA')  //'UGCACCAGAAUU'


//2 終止子

let Rna = {
  transcript: function(x){
    let split = x.split('')
    let transReduce = split.reduce(( accu , x ) => {
      if ( accu.includes('UAG') || accu.includes('UAA') || accu.includes('UGA') ) {return accu} 
      else {
        return stop(x)
        if(x === 'G'){ 
          return accu + 'C'
        }else if (x === 'C'){
          return accu + 'G'
        }else if (x === 'A'){
          return accu + 'U'
        }else if (x === 'T') {
          return accu + 'A'
        }
      }       

    } , '')
     console.log(transReduce)
  }
}
Rna.transcript('ACGTATTCCCCC') 