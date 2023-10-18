document.addEventListener("DOMContentLoaded", function() {
    const donationForm = document.getElementById("donationForm");

    donationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const amount = document.getElementById("amount").value;
        const use = document.getElementById("use").value;

        // Perform donation action, such as API calls to payment gateway.
    });
});
