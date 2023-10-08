// JavaScript code for Vega-Lite interactivity
// Load the Vega-Lite specification and set up event listeners
const visContainer = document.getElementById("vega-chart");

// URL to your Vega-Lite specification hosted on GitHub
const vegaLiteSpecURL = "https://raw.githubusercontent.com/aaut0001/FIT3179_W10/main/visual.vg.json";

// Initialize Vega-Embed and render the initial graph
vegaEmbed(visContainer, vegaLiteSpecURL)
    .then((result) => {
        // Handle the result if needed (e.g., add interactivity)
        const view = result.view;

        // Add event listener for brushing on the x-axis
        view.addEventListener("brush", (event, item) => {
            if (item && item.datum) {
                const { MonthName } = item.datum;
                // Handle the selected month(s) here
                console.log("Selected Month(s):", MonthName);
            }
        });
    })
    .catch((error) => {
        console.error("Error embedding Vega-Lite chart:", error);
    });
