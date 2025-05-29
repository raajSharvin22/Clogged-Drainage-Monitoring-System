document.getElementById("laneForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const selectedLane = document.getElementById("laneSelect").value;
    const urlParams = new URLSearchParams(window.location.search);
    const selectedTaman = urlParams.get('taman');  // Get selected TAMAN from URL

    // Only allow if TAMAN PERWIRA and LORONG 8 are selected
    if (selectedTaman === "TAMAN PERWIRA" && selectedLane === "LORONG 8") {
        window.location.href = `dashboard.html?taman=${selectedTaman}&lane=${selectedLane}`;
    } else {
        // Redirect to "No Record Found" page
        window.location.href = "noRecordFound.html";
    }
});
