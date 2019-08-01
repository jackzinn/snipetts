var date = new Date();
var option = {

	hour: '2-digit', 
	minute: '2-digit',
	second: '2-digit',
   
};
var dateNow = date.toLocaleDateString('pt-BR',option);
var toDate =  date.toLocaleDateString('pt-BR');

console.log('Data/Hora: '+ dateNow)
console.log('Só Data: ' + toDate);