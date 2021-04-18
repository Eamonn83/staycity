jQuery(document).ready(function($) {

    // Get JSON
    $.getJSON( './staycity-aparthotel-properties.json', function(data){
        var citySelect = $('.city-select'),
            apartmentSelect = $('.apartment-select'),
            items = [],
            anotherItems = [];

        // Populate City Select from JSON
        $.each( data, function( key, val ) {
            var today = new Date();
            $.each(val.properties, function(i, j) {

                // Only add cities with at least one property with opening dates past today's date
                var me = this,
                    openingDate = me['opening-date'];
                openingDate = new Date(openingDate);
                if(openingDate.getTime() < today.getTime()){
                    items.push('<option id="' + val.cityID + '">' + val.name + '</option>');
                    return false;
                }
            });

        });
        citySelect.append(items);

        // Populate Apartment Select from JSON when City is chosen
        citySelect.change(function(){
            var today = new Date(),
                cityId = $(this).children(':selected').attr('id');
            cityId = parseInt(cityId);
            anotherItems= [];
            apartmentSelect.html('<option value="" disabled selected>Any Aparthotel</option>');
            $.each( data, function( key, val ) {
                var cityIDD = val.cityID;
                if(cityIDD === cityId){
                    $.each(val.properties, function(i, j) {
                        var me = this,
                            openingDate = me['opening-date'],
                            hotelDataName = me['data-name'],
                            hotelName = me.name;
                        openingDate = new Date(openingDate);

                        // Only add properties with opening dates past today's date
                        if(openingDate.getTime() < today.getTime()){
                            anotherItems.push('<option value="' + hotelDataName + '">' + hotelName + '</option>');
                        }
                    });
                }
            });
            apartmentSelect.append(anotherItems);
        });
    });

    // Fill Date inputs with Today's and Tomorrow's dates
    function setInitialDates(){
        var today = new Date(),
            checkIn = $('#check-in-date'),
            checkOut = $('#check-out-date');
        today.getDate('MMM DD, YYYY');
        let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(today),
            mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(today),
            da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(today);
        var formatedDate = mo + ' ' + da + ', ' + ye,
            tomoz = parseInt(da) + 1,
            tomorrowsFormatedDate = mo + ' ' + tomoz + ', ' + ye;
        checkIn.attr('placeholder', formatedDate);
        checkOut.attr('placeholder', tomorrowsFormatedDate);
    }
    setInitialDates();

    // Init datepicker for check in
    var checkInPicker = flatpickr('#check-in-date', {
        dateFormat:'M d, Y',
        altFormat:'d-m-y',
        minDate:new Date(),
        defaultDate:null,
        allowInput:true,
        onClose: function(selectedDates, dateStr, instance) {
            checkOutPicker.set('minDate', dateStr);
        },
    });

    // Init datepicker for check out
    var checkOutPicker = flatpickr('#check-out-date', {
        dateFormat:'M d, Y',
        altFormat:'d-m-y',
        minDate:new Date(),
        allowInput:true
    });

    // Force user to pick location first
    function locationFirst(){
        $('.col-2').click(function(){
            if($('.apartment-select').attr('disabled')){
                var target = $('.col-1');
                target.toggleClass('alert');
                setTimeout(function(){
                    target.toggleClass('alert');
                },450);
            }
        });
        $('.city-select').change(function(){
            var apartmentSelect = $('.apartment-select');
            apartmentSelect.attr('disabled',false);
        });
    }
    locationFirst();

    // Force user to pick check in date first
    function checkInFirst(){
        $('.col-4').click(function(){
           if($('#check-out-date').attr('disabled')){
               var target = $('.col-3');
               target.toggleClass('alert');
               setTimeout(function(){
                   target.toggleClass('alert');
               },450);
           }
        });
        $('#check-in-date').change(function(){
            var checkOutDate = $('#check-out-date'),
                mobileSibling = checkOutDate.siblings('.flatpickr-mobile');
            checkOutDate.attr('disabled',false);

            // Check for datepicker mobile input
            if(mobileSibling.length){
                mobileSibling.attr('disabled',false);
            }
        });
    }
    checkInFirst();

    // Stick footer to bottom of page if page is too short
    function stickFooter(){
        if ($('body,html').height() < $(window).height()) {
            $('footer').addClass('footer-fixed');
        }
    }
    stickFooter();
});