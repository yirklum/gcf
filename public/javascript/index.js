
$(function(){
  $("body").removeClass("fade-out");
  $('#world-map').vectorMap({
    map: 'world_mill',
    normalizeFunction: 'polynomial',
    zoomOnScroll: false,
    zoomButtons: false,
    hoverOpacity: 0.7,
    hoverColor: false,
    markerStyle: {
      initial: {
        fill: '#dfb634',
        stroke: '#383f47',
        "fill-opacity": 1,
        "stroke-width": 2,
        r: 7
      },
      hover: {
        fill: "#f7e9a3"
      }
    },
    regionStyle: {
      initial: {
        fill: "#000000",
        "fill-opacity": 1,
        stroke: "none",
        "stroke-width": 0,
        "stroke-opacity": 1
      },
      hover: {
        "fill-opacity": 0.8,
        cursor: 'pointer'
      },
      selected: {
      },
      selectedHover: {
      }
    },
    regionLabelStyle: {
      initial: {
        fill: 'white'
      },
      hover: {
        fill: 'white'
      }
    },
    backgroundColor: "rgba(0,0,0,0)",
    markerLabelStyle: {
      initial: {
        "font-family": "Arial",
        "font-size": "16",
        "font-weight": "bold",
        "cursor": "default",
        fill: "blue"
      },
      hover: {
        cursor: "pointer",
        "font-family": "Arial",
        "font-size": "16",
        "font-weight": "bold",
        "cursor": "default",
        fill: "blue"
      }
    },
    markers: [
      {latLng: [42.36, -71.06], name: 'Boston'},
      {latLng: [39.29, -76.61], name: 'Baltimore'},
      {latLng: [38.91, -77.04], name: 'Washington, DC'},
      {latLng: [41.88, -87.63], name: 'Chicago'},
      {latLng: [1.3, 103.8], name: 'Singapore'},
      {latLng: [24.71, 46.68], name: 'Riyadh'},
      {latLng: [21.49, 39.19], name: 'Jeddah'},
      {latLng: [26.22, 50.20], name: 'Al-Khobar'},
      {latLng: [24.45, 54.38], name: 'Abu Dhabi'},
      {latLng: [25.20, 55.27], name: 'Dubai'},
      {latLng: [51.51, -0.13], name: 'London'},
      {latLng: [48.86, 2.35], name: 'Paris'},
      {latLng: [46.20, 6.14], name: 'Geneva'},
      {latLng: [55.40, 10.40], name: 'Odense'},
      {latLng: [40.64, 22.94], name: 'Thessaloniki'},
      {latLng: [55.95, -3.19], name: 'Edinburgh'},
      {latLng: [35.69, 139.69], name: 'Tokyo'},
      {latLng: [29.31, 47.48], name: 'Kuwait City'},
      {latLng: [25.29, 51.53], name: 'Doha'},
      {latLng: [31.95, 35.93], name: 'Amman'}
    ],

    // series: {
    //   regions: [{
    //     values: {
    //       US: "United States",
    //       DK: "Denmark",
    //       FR: "France",
    //       GR: "Greece",
    //       JP: "Japan",
    //       KW: "Kuwait",
    //       SA: "Saudi Arabia",
    //       AE: "United Arab Emirate",
    //       GB: "United Kingdom"
    //     },
    //     scale: {
    //       "United States": "blue",
    //       "Denmark": "blue",
    //       "France": "blue",
    //       "Greece": "blue",
    //       "Japan": "blue",
    //       "Kuwait": "blue",
    //       "Saudi Arabia": "blue",
    //       "United Arab Emirates": "blue",
    //       "United Kingdom": "blue"
    //     }
    //   }]
    // },
    onRegionTipShow: function (e, el, code) {
      e.preventDefault();
    },
  });
});