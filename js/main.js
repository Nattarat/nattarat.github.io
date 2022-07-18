// //////////////////////////////////////////////////////////////////////////////////////////////////
// ==================================================================================================
//
// JS functions
// - is.js
//
// ==================================================================================================
// //////////////////////////////////////////////////////////////////////////////////////////////////

// is.js
// ============================================================
function browserDetect() {
  const html = document.getElementsByTagName('html')[0];
  // Browser condition
  if(is.ie()) {
    html.className = 'ie';
  } else if (is.edge()) {
    html.className = 'edge';
  } else if (is.firefox()) {
    html.className = 'firefox';
  } else if (is.desktop() && is.chrome()) {
    html.className = 'chrome';
  } else if (is.desktop() && is.safari()) {
    html.className = 'safari';
  } else if ((is.iphone() || is.ipad()) && is.safari()) {
    html.className = 'safari-mobile';
  } else if (is.android() && is.chrome()) {
    html.className = 'chrome-mobile';
  }
};

// Document ready
document.addEventListener('DOMContentLoaded', function(event) {
  browserDetect();
});
