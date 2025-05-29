document.getElementById("tamanForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the default form submission

    const taman = document.getElementById("tamanSelect").value; // Get the selected taman

    // If a taman is selected
    if (taman) {
        // Redirect to the selectLane.html page with the taman as a query parameter
        window.location.href = `selectLane.html?taman=${encodeURIComponent(taman)}`;
    } else {
        // Handle the case where no taman is selected (optional)
        alert("Please select a taman.");
    }
});
