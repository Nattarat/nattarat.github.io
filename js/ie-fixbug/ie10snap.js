
/*
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Fix IE10 Snap Mode Problem

when snapped, IE10 ignores the meta viewport tag for any viewport smaller than 400 pixels in width (which it is, when in snap mode). 
This in turn messes up your beautifully set responsive plans and results in the same kind of smart scaling you see on non-optimized sites on an iPhone or Android device.

For more information and usage guidelines, read
http://timkadlec.com/2013/01/windows-phone-8-and-device-width/

Additional article
http://www.mobilexweb.com/blog/windows-8-surface-ie10-html5
http://timkadlec.com/2012/10/ie10-snap-mode-and-responsive-design/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/





if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement("style")
  msViewportStyle.appendChild(
    document.createTextNode(
      "@-ms-viewport{width:auto!important}"
    )
  )
  document.getElementsByTagName("head")[0].appendChild(msViewportStyle)
}