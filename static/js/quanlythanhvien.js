
$("#dsTV a").click(function(e) {
    $(this).parent().parent().parent().remove();
    e.preventDefault();
 });