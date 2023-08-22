$(document).ready(function(){
    $('.circulo').draggable();    
    $(".redimensionar").resizable();
    $("#lista").selectable();
    $("#lista2").sortable({
        update: function(even,ui){
            console.log("cambio en la lista");
        }
    });
    $('#elementomovido').draggable();
    $('#area').droppable({
        drop: function(){
            console.log("se ha dejado algo dentro del area");
        }
    })
    $('#mostrar').click(function (){
        // $('#contenedor').toggle('fade');
        // $('#contenedor').effect('explode');
        // $('#contenedor').toggle('drop');
        // $('#contenedor').toggle('blind');
        // $('#contenedor').toggle('slide');
        // $('#contenedor').toggle('fold');
        // $('#contenedor').toggle('puff');
        // $('#contenedor').toggle('scale');
        $('#contenedor').toggle('shake',4000);

    });
});
