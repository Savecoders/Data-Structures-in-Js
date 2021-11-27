const numBinario = (num) => {
	let strBinari = '';
	do{
          strBinari += (num % 2).toString();
          num = Math.floor(num / 2);
	}while (num != 0);
	return strBinari.split('').reverse().join('');
};
const binarioNum = (str)=>{
  let strIntConvert = str.split('').reverse().map(e => parseInt(e));
  let cont = 0;
  for (let i = 0; i < strIntConvert.length; i++) {
    cont+= strIntConvert[i]*Math.pow(2,i)
  }
  return cont
}
let binari =  (numBinario(20));

console.log(binarioNum(binari))

