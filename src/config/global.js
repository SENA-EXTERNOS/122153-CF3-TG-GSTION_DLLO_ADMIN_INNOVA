export default {
  global: {
    componenteFormativo: 'Los sistemas y los paquetes ofimáticos',
    descripcionCurso:
      'Cobra gran importancia hoy en día la estrecha relación que debe existir entre los sistemas de información organizacionales y sobre todo cómo se entrega, se recibe, desde el emisor hasta el receptor, y la respuesta final, cerrando el ciclo comunicacional. Los paquetes ofimáticos hacen relevancia en la medida que, agilizan, mejoran y analizan la información para que fluya asertivamente en la organización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1p.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Teoría general de sistemas y sistemas de información',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Ofimática',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Hojas de cálculo, procesadores de texto y presentaciones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Navegación en la <em>web</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Redes de información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Normas técnicas de seguridad y salud en el ambiente laboral',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Teoría general de sistemas y sistemas de información',
      referencia:
        'Curso Laboral. (2021). Información Crítica Técnico en seguridad informática análisis de riesgo 5 (video). YouTube. https://www.youtube.com/watch?v=r4kmGCIGOTw',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=r4kmGCIGOTw',
    },
    {
      tema: 'Normas técnicas de seguridad y salud en el ambiente laboral',
      referencia:
        'Gestión & Formación. (2016). Qué significa SGSST? (video). YouTube. https://www.youtube.com/watch?v=y1Kxw3-jPL0',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=y1Kxw3-jPL0',
    },
    {
      tema: 'Normas técnicas de seguridad y salud en el ambiente laboral',
      referencia:
        'Gestión & Formación. (2019). Objetivos del SGSST (video). YouTube. https://www.youtube.com/watch?v=QHg-z31nKG0',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=QHg-z31nKG0',
    },
    {
      tema: 'Normas técnicas de seguridad y salud en el ambiente laboral',
      referencia:
        'Gestión & Formación. (2020). Comunicación del Sistema de Gestión (video). YouTube.https://www.youtube.com/watch?v=wmazHuPJfTs',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=wmazHuPJfTs',
    },
  ],
  glosario: [
    {
      termino: '<em>Hardware</em>',
      significado:
        'todo lo físico y tangible de un ordenador o sistema informático.',
    },
    {
      termino: 'Ofimática',
      significado:
        'todas las técnicas, herramientas, equipos y aplicaciones tecnológicas utilizadas en los trabajos de oficina y afines, agilizando los procesos administrativos.',
    },
    {
      termino: 'Organización',
      significado:
        'grupo de personas y medios organizados con un fin determinado.',
    },
    {
      termino: 'Proceso',
      significado:
        'proceso es el paso a paso lógico que se debe llevar para llegar a algún logro con un resultado específico.',
    },
    {
      termino: 'Red social',
      significado:
        'nueva organización donde por intereses y gustos comunes, personas, organizaciones o ambas se conectan de forma remota, compartiendo precisamente estos intereses.',
    },
    {
      termino: 'Sistema',
      significado:
        'es concebido básicamente como un conjunto ordenado de normas y procedimientos que regulan el funcionamiento de un grupo o colectividad y que tienen relación entre sí.',
    },
    {
      termino: '<em>Software</em>',
      significado:
        'es el conjunto de aplicaciones, programas de cómputo, procedimientos, datos y pautas, permitiendo realizar diferentes tareas dentro de un espacio, sistema o interface informática.',
    },
  ],
  referencias: [
    {
      referencia: 'Concepto. (s.f.). Sistema de información. Concepto.',
      link: 'https://concepto.de/sistema-de-informacion/#ixzz7cG3vNX2L',
    },
    {
      referencia:
        'Ladrón de Guevara, M. Á. (2020). Procesadores de texto y presentaciones de información básicos. Editorial Tutor Formación.',
      link: '',
    },
    {
      referencia:
        'Ley 1562 de 2012. Por la cual se modifica el sistema de riesgos laborales y se dictan otras disposiciones en materia de salud ocupacional. Julio 11 de 2012.',
      link: '',
    },
    {
      referencia:
        'Sicilia, M., Palazón, M., López, I. & López, M (2021). Marketing en Redes Sociales. Esic Editorial.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
