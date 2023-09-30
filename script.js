// JavaScript code for Vega-Lite interactivity
// Load the Vega-Lite specification and set up event listeners
const select = document.getElementById("continent-select");
const visContainer = document.getElementById("vis");

// Load the Vega-Lite specification from the visual.vg.json script
const spec = vegaLiteSpec; // This references the Vega-Lite spec from visual.vg.json

// Initialize Vega-Embed and render the initial graph
vegaEmbed(visContainer, spec);

// Add event listener for continent selection
select.addEventListener("change", () => {
  // Get the selected continent
  const selectedContinent = select.value;

  // Update the filter in the Vega-Lite specification to make other continents transparent
  spec.transform = [
    {
      filter: { field: "Continents", equal: selectedContinent }
    }
  ];

  // Re-render the graph with the updated specification
  vegaEmbed(visContainer, spec);
});
