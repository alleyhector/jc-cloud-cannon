$(function() {
  $('.read-more').click(function(event) {
    $(event.target).parent().addClass('expand');
    return false;
  });
});
