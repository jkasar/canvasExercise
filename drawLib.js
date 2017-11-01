//create function for circles

function circle( context, x, y, r, color ){

}
//using context instead of ctx. local vs global variables
//allows function to not be dependent of global variables
//independent functions

function saveImage(canv,imageName){
  //code adopted from Thomas W's answer! https://stackoverflow.com/a/44487883/8854242
  // var image = canv.toDataURL("image/png").replace("image/png", "image/octet-stream");
  // // here is the most important part because if you dont replace you will get a DOM 18 exception.
  // window.location.href=image;
  //var link = document.getElementById('link');
  var link = document.createElement('a');
  document.body.appendChild(link);
  link.style.display = "none";
  link.setAttribute('download', imageName );
  link.setAttribute('href', canv.toDataURL("image/png").replace("image/png", "image/octet-stream"));
  link.click();
}
