
var datos = $.getJSON( "https://api.binance.com/api/v3/ticker/24hr")
datos.done(function(datos) {
    console.log(datos);
    datos.forEach(money => {
        $('table').append(`
            <tr>
                <td>${money.symbol}</td>
                <td>${money.lastPrice}</td>
                <td>${money.priceChangePercent}</td>
            </tr>
        `)
    });
})