document.addEventListener("DOMContentLoaded", function() {
    const donationForm = document.getElementById("donationForm");

    donationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const amount = document.getElementById("amount").value;
        const use = document.getElementById("use").value;
        const paymentMethod = document.getElementById("paymentMethod").value;

        // Generate a Transaction ID here (Requires Backend Logic)
        // let transactionID = generateTransactionID();

        let redirectUrl = '';
        
        if (paymentMethod === 'paypal') {
            redirectUrl = `https://paypal.me/AcidAlchamy?amount=${amount}`;
        } else if (paymentMethod === 'cashapp') {
            redirectUrl = `https://cash.app/$AcidAlchamy?amount=${amount}`;
        } else if (paymentMethod === 'bitcoin') {
            // Handle Bitcoin, probably show an alert or a modal with address
            alert("Please send your bitcoin to the address. [Insert bitcoin address]");
            return;
        }
        
        // Redirect to the payment gateway
        window.location.href = redirectUrl;
    });
});
