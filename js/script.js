$(document).ready(function(){
    if( window.location.href.indexOf('index') > -1){
        // Slider
        $("#galery").bxSlider({
            // mode:'fade',
            captions: true,
            responsive: true,
            pager: false
        });

        // Post
        moment.updateLocale('es-mx',{
            parentLocale:'es',
        });
        var posts=[
            {
                title:'Prueba de Titulo 1',
                date: 'Publicado el '+ moment().format('LL'),
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis porro magni quas, sint eaque quis nostrum ipsa cupiditate facilis ducimus doloremque accusantium? Repudiandae ea asperiores ad nobis numquam molestias sequi.'
            },
            {
                title:'Prueba de Titulo 2',
                date: 'Publicado el '+ moment().format('LL'),
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis porro magni quas, sint eaque quis nostrum ipsa cupiditate facilis ducimus doloremque accusantium? Repudiandae ea asperiores ad nobis numquam molestias sequi.'
            },
            {
                title:'Prueba de Titulo 3',
                date: 'Publicado el '+ moment().format('LL'),
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis porro magni quas, sint eaque quis nostrum ipsa cupiditate facilis ducimus doloremque accusantium? Repudiandae ea asperiores ad nobis numquam molestias sequi.'
            },
            {
                title:'Prueba de Titulo 4',
                date: 'Publicado el '+ moment().format('LL'),
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis porro magni quas, sint eaque quis nostrum ipsa cupiditate facilis ducimus doloremque accusantium? Repudiandae ea asperiores ad nobis numquam molestias sequi.'
            },
        ];
        var post="";
        posts.forEach((item,index)=>{
            post+=
            `<article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>${item.content}</p>
                <a href="#" class="button-more">Leer Mas</a>
            </article>`;
        });
        $('#posts').append(post);
    }

    // THEME
    var theme=$('#theme');
    var color=localStorage.getItem('color');
    if(color!=null){
        theme.attr("href","css/"+color);
    }
    $('#to-green').click(function(){
        theme.attr("href","css/green.css");
        localStorage.setItem('color','green.css');
    });
    $('#to-red').click(function(){
        theme.attr("href","css/red.css");
        localStorage.setItem('color','red.css');
    });
    $('#to-blue').click(function(){
        theme.attr("href","css/blue.css");
        localStorage.setItem('color','blue.css');
    });


    // SCROLL

    $("#subir").click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop: 0},500);
        return false;
    });

    //LOGIN

    $('#login form').submit(function(){
        var name=$('#form_name').val();
        var email=$('#form_email').val();
        var pass=$('#form_pass').val();

        localStorage.setItem('user',name);
    });

    var user=localStorage.getItem('user');

    if(user!=null && user!=undefined && user!=""){
        $('#login').append("<hr> <span id='user'> Bienvenido "+user+"</span>");
        $('#login').append('<button id="logout">cerrar sesion</button>');
        $('#login form').hide();
        $('#login h4').hide();  

        $('#logout').click(function(){
            localStorage.clear();
            location.reload();
        });
    }

    // ACORDEON
    if( window.location.href.indexOf('about') > -1){
        $('#accordion').accordion();
    }

    // RELOJ
    if( window.location.href.indexOf('reloj') > -1){
       $('#reloj').append(moment().format('h:mm:ss'));
       setInterval(function(){
            $('#reloj').html(moment().format('h:mm:ss'));
       },1000)
    }

    // FORMULARIO CONTACTO
    if( window.location.href.indexOf('contacto') > -1){
        $('#box form').validate({
            rules:{
                
                surname:{
                    required:true,
                    minlength: 2
                },
                // password:{
                //     required: true
                // }
                // confirmpass:{
                //     equalTo:"#password"
                    // require:"#campo:checked"
                // }
                // ,
                email:{
                    personalizado: true,
                    required: true
                },
                age:{
                    required: true,
                    number: true
                },
                opcion:{
                    required: '#opi:checked',
                    minlength: 2
                },
                nan:{
                    fechas: true,
                    required: true
                }
            },
            messages:{
                age:"Coloque su edad porfavor",
                name:{
                    required:"Este campo es obligatorio.",
                    minlength: "Tiene que haber mas de dos letras"
                },
                opcion:"Selecciona dos o mas campos"
            }
        });
        $("#nickname").focus(function(){
            console.log('Hice focus');
            var firstname = $("#name").val();
            var lastname = $("#surname").val();
            console.log(this.value);
           
            if(firstname!="" && lastname!="" && this.value==""){
                this.value= firstname+ "."+lastname;
            }
        });
        
        // PARA HABILITAR LAS OPCCIONES
        var control= $('#opi').is(":checked");
        var opciones= $('#opciones')[control?"removeClass":"addClass"]("hide");
        var opcion=opciones.find("input").attr("disabled",!control);
        
        $('#opi').click(function(){
            opciones[this.checked?"removeClass":"addClass"]("hide");
            opcion.attr("disabled",!this.checked);
        });

        // PARA EL CORREO
        jQuery.validator.addMethod("personalizado",function(value,element){
            
            return this.optional(element) || /^.+@unsa.edu.pe$/.test(value);
        }, "Por favor ingrese un correo valido");

        /**IMPORTANTE **/
        //La funcion optional devuelve dependency-mismatch cuando el input es opcional y esta en blanco


        // PARA LAS FECHAS
        $('#dat').datepicker();
        $('#dat').datepicker("option", "dateFormat","dd-mm-yy");
        
        jQuery.validator.addMethod("fechas",function(value,element){
            var str=value.toString();
            return this.optional(element) || /^((((0[1-9])|([12][0-9])|(30))(\-)(0[469]|(11))(\-)(((19|20)[0-9][0-9])|2100))|(((0[1-9])|([12][0-9])|(3[01]))(\-)(0[13578]|1[02])(\-)(((19|20)[0-9][0-9])|2100))|(((0[1-9])|([1][0-9])|(2[0-8]))(\-)(02)(\-)(((19|20)([0][1235679]|[13579][01345789]|[2468][1235679]))|(1900)|(2100)))|(((0[1-9])|([12][0-9]))(\-)(02)(\-)(2000|((19|20)(0[48]|[2468][480]|[13579][26])))))$/.test(str);
        }, "Por favor ingrese una fecha valida");
    }
});