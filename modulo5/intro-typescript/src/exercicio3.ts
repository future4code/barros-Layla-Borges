//EXERCÍCIO 3

function checaAnoBissexto(ano:number) {
  const cond1:boolean = ano % 400 === 0
  const cond2:boolean = (ano % 4 === 0) && (ano % 100 !== 0)
  return cond1 || cond2
}

