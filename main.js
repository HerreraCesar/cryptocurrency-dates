window.addEventListener("load", function() {
    var datos = $.getJSON( "https://api.binance.com/api/v3/ticker/24hr")
    datos.done(function(datos) {
        $('table').html(`
            <tr>
                <th>TICKER</th>
                <th>PRECIO</th>
                <th>24 HS.</th>
            </tr>
            `)
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
})