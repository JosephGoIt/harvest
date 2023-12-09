// change-icon.js

// Function to toggle the SVG href
function toggleSvgHref() {
    // Get the <use> element
    var useElement = document.getElementById('menuIcon');

    // Check the current href and toggle it
    if (useElement.getAttributeNS('http://www.w3.org/1999/xlink', 'href') === '/images/icons.svg#gg_menu-left-icon') {
        useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '/images/icons.svg#icon-x'); // Change to another icon
    } else {
        useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '/images/icons.svg#gg_menu-left-icon'); // Change back to the original icon
    }
}

// Add click event listener to the button
document.getElementById('toggleButton').addEventListener('click', toggleSvgHref);
