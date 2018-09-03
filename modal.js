
const modal= (val)=>{
  val = val;
  let title = "error";
  let bodyText = 'something went wrong!'
  if (val){
    $('#myModal').modal('show');
    $('#myModalLabel').text(title);
    $('#myModalBody').text(bodyText);
  }
}


function start(){
  modal(true);
}

document.addEventListener("DOMContentLoaded",start,false);




/*$(document).ready(function(){
  let val = true;
  let title = "error";
  let bodyText = 'something went wrong!'
  if (val){
    $('#myModal').modal('show');
    $('#myModalLabel').text(title);
    $('#myModalBody').text(bodyText
    );
  }
});*/
