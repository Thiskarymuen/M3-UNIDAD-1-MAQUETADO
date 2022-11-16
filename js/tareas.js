// Mostrar en consola los alumnos aprobados

var alumnos = [

    {
  
      nombre: 'Juan Gomez',
  
      nota: 7
  
    }, {
  
      nombre: 'Pedro Rodriguez',
  
      nota: 4
  
    }, {
  
      nombre: 'Roxana García',
  
      nota: 8
  
    }, {
  
      nombre: 'Luciano Lopez',
  
      nota: 5
  
    }, {
  
      nombre: 'Fernanda Gimenez',
  
      nota: 6
  
    }, {
  
      nombre: 'Florencia Martinez',
  
      nota: 10
  
    }, {
  
      nombre: 'Raul Sanchez',
  
      nota: 7
  
    }, {
  
      nombre: 'Sandra Figueroa',
  
      nota: 8
  
    }
  
  ];

  const resultado = alumnos.filter ( alumnos => alumnos.nota >= 7)
  console.log(resultado)


  // Cambiar botones de color


        const alternar = document.getElementsByClassName('alternar')[0];
        const alternar1 = document.getElementsByClassName('alternar')[1];
        const alternar2 = document.getElementsByClassName('alternar')[2];
        
        alternar.addEventListener('click', function(e) {
            e.currentTarget.classList.toggle('activo');
        });
        alternar1.addEventListener('click', function(e) {
          e.currentTarget.classList.toggle('activo');
      });
      alternar2.addEventListener('click', function(e) {
        e.currentTarget.classList.toggle('activo');
    });
    