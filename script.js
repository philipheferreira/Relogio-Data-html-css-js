var contadorDate = new Date('jan 1, 2021 00:00:00').getTime();

function novoAno(){ 
    var agora = new Date().getTime();

    var segundos = 1000;
    var minutos = segundos * 60;
    var horas = minutos * 60;
    var dias = horas * 24;

    var d = Math.floor(gap/(dias));
    var h = Math.floor((gap % (dias))/ (horas));
    var m = Math.floor((gap % (horas)) / (minutos));
    var s = Math.floor((gap % (minutos)) / (segundos));
}