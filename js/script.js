$(document).ready(function() {
    $('.book-now').click(function(event) {
        event.preventDefault();
        let days = prompt("Enter the number of days you want to stay:");

        if (days !== null && days !== "") {
            days = parseInt(days);
            let pricePerDay = 99;
            let totalPrice = days * pricePerDay;

            if (days > 7) {
                totalPrice = totalPrice * 0.75; // 25% off
            }

            alert("The total price for " + days + " days is around: $" + totalPrice.toFixed(2));
        }
    });
});

$(document).ready(function() {
    $('.book-now1').click(function(event) {
        event.preventDefault();
        let days = prompt("Enter the number of days you want to stay:");

        if (days !== null && days !== "") {
            days = parseInt(days);
            let pricePerDay = 139;
            let totalPrice = days * pricePerDay;

            if (days > 7) {
                totalPrice = totalPrice * 0.75; // 25% off
            }

            alert("The total price for " + days + " days is around: $" + totalPrice.toFixed(2));
        }
    });
});
