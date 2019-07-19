/* Se cookies não tiverem guardadas se sessões anteriores:
    - Cria uma nova variável que guarda um valor Date
    - A essa variavel, atribui o tempo atual + os milisegundos escolhidos
    - Atribui o tempo escolhido a cookie atual
    - Por fim, mostra o modal com o nome de "newsletterModal", que se encontra no index.html */
if (document.cookie.indexOf('popupShowed=1') == -1) {
    $(document).ready(function () {
        var date = new Date();
        date.setTime(date.getTime() + (2 * 60000)); // 60000 - 1 minuto || 864e+5 = 1 dia
        document.cookie = 'popupShowed=1; expires=' + date.toUTCString();

        $("#newsletterModal").modal('show');

    });
}

/* Apenas para teste do popup

$(document).ready(function () {
    
});
*/