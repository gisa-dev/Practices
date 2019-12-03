var seccionesPaginas = new fullpage('#fullpage', {
    // ──────────────────────────────────────────────────
	//   :::::: Opciones Basicas
    // ──────────────────────────────────────────────────
    
        autoScrolling: true, // Se activa el Scroll.
        fitToSection: false, // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
        fitToSectionDelay: 300, // Delay antes de acomodar la seccion automatica.
        easing: 'easeInOutCubic', // Funcion de tiempo de la animacion.
        scrollingSpeed: 700, // Velocidad del scroll. Valores: En milisegundos.
        css3: true, // Si Usara CSS3 o Javascript.
        easingcss3: 'ease-out', // Curva de velocidad del efecto.
        loopBottom: false, // Regresa a la primera seccion siempre y cuando se ya haya llegado a la ultima seccion y el usuario siga scrolleando.

    // ──────────────────────────────────────────────────
	//   :::::: Barra de navegación
    // ──────────────────────────────────────────────────
    
    navigation: true, // Muestra la barra de navegacion
    menu: '#menu', // Menu de navegacion.
    anchors: ['inicio', 'producto', 'contacto'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
    navigationTooltip: ['Inicio', 'Producto', 'Contacto'], // Tooltips que mostrara por cada boton.
    showActiveTooltip: false, // Mostrar tooltip activa

    // ──────────────────────────────────────────────────
	//   :::::: Secciones
    // ──────────────────────────────────────────────────
    
    sectionsColor: ['#fff', '#c2c2c2', '#fff'], // Color de fondo de cada seccion.
    verticalCentered: true, // Si alineara de forma vertical los contenidos de cada seccion.

    // ──────────────────────────────────────────────────
	//   :::::: Slides
    // ──────────────────────────────────────────────────
    
    controlArrows: true, // Flechas del slide.
    slidesNavigation: false, // Indicadores del slide

    // ──────────────────────────────────────────────────
	//   :::::: Animaciones (Callbacks de FullPage.js)
    // ──────────────────────────────────────────────────
    
    afterLoad: function(origin, destination){
        if(destination.anchors == 'contacto'){
            document.querySelector('.footer').querySelector('h2').style.opacity = 1;
        }
    }

});