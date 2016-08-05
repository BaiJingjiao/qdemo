$(document).ajaxStart(function(event, xhr, settings) {
  console.log('event.target: ' + event.target);
});

$(docment).ajaxComplete(function(event, xhr, settings) {
  console.log(xhr.status);
});
