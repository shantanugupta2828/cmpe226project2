$(function() {
    $('.generateBill').click(function() {
        $.ajax({
            url: '/bill/generate?inputId='+sessionStorage.getItem("id")+'&inputCaId='+sessionStorage.getItem("ca_id")+'&inputRole='+sessionStorage.getItem("role"),
            type: 'GET',
            success: function(response) {
                $(".generateBillSuccess").show();
                location.reload();
                console.log(response);
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
    $('document').ready(function() {
        $(".generateBillSuccess").hide();
        $.ajax({
            url: '/revenue/current?inputId='+sessionStorage.getItem("id")+'&inputCaId='+sessionStorage.getItem("ca_id")+'&inputRole='+sessionStorage.getItem("role"),
            data: $('form').serialize(),
            type: 'GET',
            success: function(response) {
                console.log(response);
                var bills = JSON.parse(response).results;
                var $ul = $('.bills').append(
                  bills.map(bill =>
                    $("<tr>").append($("<td>").text(bill[0])).append($("<td>").text(bill[1])).append($("<td>").text(bill[3]))
                        .append($("<td>").text(bill[4])).append($("<td>").text(bill[5])).append($("<td>").text(bill[6]==0?"NO":"YES"))
                  )
                );
            },
            error: function(error) {
                console.log(error);
            }
        });
        $.ajax({
            url: '/revenue/history?inputId='+sessionStorage.getItem("id")+'&inputCaId='+sessionStorage.getItem("ca_id")+'&inputRole='+sessionStorage.getItem("role"),
            data: $('form').serialize(),
            type: 'GET',
            success: function(response) {
                console.log(response);
                var bills = JSON.parse(response).results;
                var $ul = $('.bills').append(
                  bills.map(bill =>
                    $("<tr>").append($("<td>").text(bill[0])).append($("<td>").text(bill[1])).append($("<td>").text(bill[3]))
                        .append($("<td>").text(bill[4])).append($("<td>").text(bill[5])).append($("<td>").text(bill[6]==0?"NO":"YES"))
                  )
                );
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});