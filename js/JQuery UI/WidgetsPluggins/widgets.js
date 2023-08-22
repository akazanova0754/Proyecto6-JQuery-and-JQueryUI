$(document).ready(function(){

    // TOOLTIP
    $('#contenedor').tooltip();
    // $(document).tooltip();
    // $( document ).tooltip();


    // DIALOG
    $("#ver").click(function(){
        
        $("#pop").dialog({
            modal: true
          });
    });

    // CALENDAR
    $("#calendario").datepicker();

    // TABS
    $("#tab").tabs();
});