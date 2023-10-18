document.addEventListener("DOMContentLoaded", function() {
    const donationForm = document.getElementById("donationForm");

    donationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const amount = document.getElementById("amount").value;
        const use = document.getElementById("use").value;
        const paymentMethod = document.getElementById("paymentMethod").value;

        let redirectUrl = '';
        
        if (paymentMethod === 'paypal') {
            redirectUrl = `https://paypal.me/AcidAlchamy?amount=${amount}`;
        } else if (paymentMethod === 'cashapp') {
            redirectUrl = `https://cash.app/$AcidAlchamy?amount=${amount}`;
        } else if (paymentMethod === 'bitcoin') {
            alert("Please send your bitcoin to the address. [Insert bitcoin address]");
            return;
        }
        
        window.location.href = redirectUrl;
    });
});
