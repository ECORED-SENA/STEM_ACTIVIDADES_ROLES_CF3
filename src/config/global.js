export default {
  global: {
    componenteFormativo:
      'Desarrollo de habilidades para el ciudadano del siglo XXI',
    descripcionCurso:
      '<p>Las dinámicas socioculturales y tecnológicas están direccionando a las instituciones hacia una reflexión de las formas de enseñar que conlleven a la formación de aprendices capaces de resolver problemas en contexto de la ciencia-tecnología-ingeniería-matemáticas. </p><p>En este sentido, esta experiencia de aprendizaje surge desde la necesidad de analizar el rol del instructor en el desarrollo de habilidades personales de acuerdo con el contexto STEM.</p>',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        titulo: 'Rol del instructor en la educación STEM',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Habilidades clave de la era digital y complementarias',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ambientes de aprendizaje: STEM',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Aguirre, J., P., Vaca, V., C., y Vaca, M., C. (2019). Educación STEM: entrada a la sociedad del conocimiento. Ciencia Digital, 3(3.4), 212-227.',
    },
    {
      referencia:
        "Casal, J. D. (2019). STEM: oportunidades y retos desde la enseñanza de las ciencias. Revista de Ciències de l'Educació, 1(2), 154-168.",
    },
    {
      referencia:
        'Castro, C. M. (2016). Laboratorios virtuales como alternativa para el desarrollo de competencias profesionales. Revista Iberoamericana de Producción Académica y Gestión Educativa, 2(4).',
    },
    {
      referencia:
        'Hernández, M. E. (2015). Incidencia de la motivación en el proceso de aprendizaje en los estudiantes de educación virtual en pregrado de la UNAD. UNAD.',
    },
    {
      referencia:
        'Instituto de Tecnologías Educativas. (2010). Habilidades y competencias del siglo XXI para los aprendices del nuevo milenio en los países de la OCDE. ',
      link:
        'http://recursostic.educacion.es/blogs/europa/media/blogs/europa/informes/Habilidades_y_competencias_siglo21_OCDE.pdfv',
    },
    {
      referencia:
        'Lozana, Y., Rosales, A., y Giraldo, J. (2018). Competencias del siglo XXI: ¿Cómo desarrollarlas mediante el uso de videojuegos en un contexto multigrado? Artículos de Investigación Científica y Tecnológica, 12(23).',
      link: 'https://doi.org/10.15765/pnrm.v12i23.1191',
    },
    {
      referencia:
        'Ludeña, E. S. (2019). La educación STEAM y la cultura «maker». Padres y maestros. Journal of Parents and Teachers, (379), 45-51.',
    },
    {
      referencia:
        'Moreno, N. (2019) Educación STEM/STEAM. Apuestas hacia la formación, impacto y proyección de seres críticos. Unipanamericana, Univ. Politécnica Territorial de Falcón Alfonso Gamero, Alinin.',
      link:
        'https://alinin.org/wp-content/uploads/2020/06/Educaci%C3%B3n-STEM_STEAM.pdf',
    },
    {
      referencia:
        'Sánchez, D., Hernández, C. (s.f.). Ambientes de aprendizaje para la educación STEM/STEAM. Organización de los Estados Americanos. ',
    },
    {
      referencia:
        'Secretaría de Comunicaciones y Transporte. (2019). Marco de habilidades digitales.',
      link:
        'https://www.gob.mx/cms/uploads/attachment/file/444450/Marco_de_habilidades_digitales_vf.pdf',
    },
    {
      referencia: 'Universidad Eafit. (2016). Educación STEM para todos.',
      link:
        'https://www.eafit.edu.co/proyecto50/compartir-experiencias/estrategias-innovacion-educativa/Paginas/Educaci%C3%B3n-STEM-para-todos.aspx',
    },
    {
      referencia:
        'Villanueva, G., y Casas, M. (2010). e-competencias: nuevas habilidades del estudiante en la era de la educación, la globalidad y la generación del conocimiento. Signo y pensamiento, 29(56), 124-138. ',
    },
  ],
  glosario: [
    {
      termino: 'Alfabetización Digital',
      significado:
        'proceso que permite movilizar el desarrollo sostenible de una nación ya que permite una mayor participación de las personas en el mercado laboral.',
    },
    {
      termino: 'Digital',
      significado:
        'artefacto que suministra los datos mediante dígitos o elementos finitos o discretos.',
    },
    {
      termino: 'Estrategias',
      significado:
        'serie de acciones que buscan alcanzar un plan general para lograr uno o más objetivos generales o a largo plazo en condiciones de incertidumbre.',
    },
    {
      termino: 'Habilidades',
      significado:
        'capacidad de una persona para hacer una cosa correctamente y con facilidad.',
    },
    {
      termino: 'Simulador',
      significado:
        'dispositivo o aparato que simula un fenómeno, el funcionamiento real de otro aparato o dispositivo o las condiciones de entorno a las que están sometidos una máquina, aparato o material.',
    },
  ],
  complementario: [
    {
      texto:
        'Rol del Instructor en la Educación STEM, Moreno, N. (2019). Educación STEM/STEAM. Apuestas hacia la formación, impacto y proyección de seres críticos”',
      tipo: 'Artículo',
      descarga: '/downloads/Educacion-STEM_STEAM.pdf',
    },
    {
      texto:
        'Habilidades Clave de la Era Digital y Complementarias, Instituto de Tecnologías Educativas. (2010). Habilidades y competencias del siglo XXI para los aprendices del nuevo milenio en los países de la OCDE.',
      tipo: 'Artículo',
      link:
        'http://recursostic.educacion.es/blogs/europa/media/blogs/europa/informes/Habilidades_y_competencias_siglo21_OCDE.pdfv',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Jorge Armando Villamizar Moreno',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: [
          'Wilson Andrés Arenales Caceres',
          'Gilberto Junior Rodriguez Rodriguez ',
          'Victor Cardenas',
          'Lina Marcela Perez',
          'John Archiniegas',
        ],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Luis Fabian Robles Méndez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
