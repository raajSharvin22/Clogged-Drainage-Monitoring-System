const channelID = "2855916";
const field = 1; // Assuming field1 is distance in cm
const baseHeight = 28.75; // ✅ Updated base height for water level calculation
const url = `https://api.thingspeak.com/channels/${channelID}/fields/${field}.json?api_key=QBHT4MJBSIRT6S0R&results=1`;

function fetchData() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const latestEntry = data.feeds[0];
            const distance = parseFloat(latestEntry[`field${field}`]);

            if (!isNaN(distance)) {
                let waterLevel = baseHeight - distance;
                if (waterLevel < 0) waterLevel = 0;
                waterLevel = waterLevel.toFixed(2);

                document.getElementById("sensorReading").innerHTML = `📏 Sensor Distance: ${distance.toFixed(2)} cm<br>💧 Water Level: ${waterLevel} cm`;

                // Only show severe alert when water level ≥ 10 cm
                if (parseFloat(waterLevel) >= 10.00) {
                    document.getElementById("severeAlert").style.display = "block";
                } else {
                    document.getElementById("severeAlert").style.display = "none";
                }
            } else {
                document.getElementById("sensorReading").textContent = "Invalid data";
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            document.getElementById("sensorReading").textContent = "Error loading data";
        });
}

fetchData();
setInterval(fetchData, 10000); // Refresh every 10 seconds 🕙
