// NAVBAR TOGGLE
'use strict';

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function() {
    header.classList.toggle("active");
});

// ORDER ONLINE
$(document).on('click', '.send', function() {
    /* Inputan Formulir */
    var input_name = $("#name").val(),
        input_phone = $("#phone").val(),
        input_product = $("#product").val(),
        input_description = $("#description").val();

    /* Pengaturan Whatsapp */
    var walink = 'https://web.whatsapp.com/send',
        phone = '6282127275464',
        text = 'Halo saya ingin memesan produk Mobishine Interior Cleaner',
        text_yes = 'Pesanan Anda berhasil terkirim.',
        text_no = 'Isilah formulir terlebih dahulu.';

    /* Smartphone Support */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var walink = 'whatsapp://send';
    }

    if (input_name != "" && input_phone != "" && input_product != "") {
        /* Whatsapp URL */
        var checkout_whatsapp = walink + '?phone=' + phone + '&text=' + text + '%0A%0A' +
            '*Nama* : ' + input_name + '%0A' +
            '*No. Whatsapp* : ' + input_phone + '%0A' +
            '*Jumlah Produk* : ' + input_product + '%0A' +
            '*Catatan* : ' + input_description + '%0A';

        /* Whatsapp Window Open */
        window.open(checkout_whatsapp, '_blank');
        document.getElementById("text-info").innerHTML = '<div class="alert alert-success">' + text_yes + '</div>';
    } else {
        document.getElementById("text-info").innerHTML = '<div class="alert alert-danger">' + text_no + '</div>';
    }
});