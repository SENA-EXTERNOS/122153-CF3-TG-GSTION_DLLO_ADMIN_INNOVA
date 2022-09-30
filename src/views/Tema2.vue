<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Principios del proceso administrativo

    .row
      .col-lg-12.mb-5
        .row
          .col-md-2
            figure
              img(src='@/assets/template/tema2/img01_t2.png', alt='')

          .col-md-10
            p 
            |
            strong El proceso administrativo se compone de una serie de fases o etapas que permiten llevar a cabo una actividad,
            | con la existencia de diversos criterios acerca de la cantidad de pasos que lo integran, aunque para los autores, los elementos o funciones sean las mismas. Para el caso de este componente formativo, se tomarán como referentes las siguientes etapas:

      .col-lg-12.mb-5
        .row.d-flex.justify-content-center
          .col-lg-8.col-md-8.col-12
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 2.
              span Etapas del proceso administrativo

            figure
              img(src='@/assets/template/tema2/f2_t2.png', alt='')

      .col-lg-12.mb-5
        .titulo-segundo
          h2 2.1 Planeación
      .col-lg-12.mb-5
        .row
          .col-md-5
            figure
              img(src='@/assets/template/tema2/img02_t2.png', alt='')

          .col-md-7
            p La planeación puede tener varias perspectivas pero, en síntesis, obedece al rumbo hacia el que se dirige algo, bien sea a nivel empresarial o incluso, en la vida personal; es el horizonte proyectado y, para ilustrar un poco mejor el concepto, podría pensarse en los siguientes cuestionamientos: ¿qué se quiere? ¿Quiénes somos? ¿Para dónde vamos? La planeación impulsa para optimizar recursos, prever situaciones, reducir costos e incrementar la productividad, a partir de la concentración y canalización de esfuerzos por un mismo fin, además de ser un escenario base para una posterior evaluación y retroalimentación del proceso y de los logros obtenidos.

          .col-lg-12
            .row.p-lg-5.p-sm-0
              .col-lg-4.col-md-12.col-12
                p Basados en la estructura organizacional, existen 3 tipos de planeación:
                figure
                  img(
                    src='@/assets/template/tema2/img_acordeon_t2.png',
                    alt=''
                  )
              .col-lg-8.col-md-12.col-12
                AcordionA(
                  tipo='a',
                  clase-tarjeta='tarjeta color_tarjeta__secundaria'
                )
                  .row(titulo='Estratégica')
                    .col-md-12.mb-4.mb-md-0
                      p Hace referencia a la planeación general, desarrollada por los estamentos directivos de la organización. Usualmente es una planeación a mediano o largo plazo y de ahí se desprenden los diferentes planes de la empresa.

                  .row(titulo='Táctica')
                    .col-md-12.mb-4.mb-md-0
                      p Se refiere a los planes desarrollados en cumplimiento de la planeación estratégica y obedecen más al hacer, con un componente bajo de operatividad.

                  .row(titulo='Operativa')
                    .col-md-12.mb-4.mb-md-0
                      p Se diseña con base en los planes tácticos y desarrollada por los estamentos operativos de la organización.

          .col-lg-12
            p La planeación organizacional se enmarca, regularmente, en un documento denominado “plan estratégico”, donde confluye la información de base y la que se plantea en un horizonte de tiempo determinado, los propósitos y alcances pretendidos.

          .col-lg-12.mb-5
            p 
            |
            strong El plan estratégico es como un rompecabezas,
            | compuesto por diferentes piezas las cuales se presentan a continuación:
          .col-lg-12.mb-5
            .row.d-flex.justify-content-center
              .col-lg-6
                ImagenInfograficaB.color-primario
                  template(v-slot:imagen)
                    figure
                      img(
                        src='@/assets/template/tema2/img03_t2.png',
                        alt='Texto que describa la imagen'
                      )
                      figcaption Leyenda de la imagen

                  div(x='13%', y='5%', tooltip='Misión')
                    h5 Misión
                    p Es un escrito que sintetiza el propósito de una empresa y responde a preguntas como: ¿quién es la empresa? ¿A qué se dedica? ¿Para qué existe?
                  div(x='28%', y='84%', tooltip='Visión')
                    h5 Visión
                    p Se refiere al enunciado del estado del futuro deseado, a través de un texto: ¿dónde se visualiza la empresa en un horizonte de tiempo determinado? ¿Cómo producirá los resultados? ¿Cómo se enfrentará al cambio? ¿Cómo conseguirá ser competitiva?
                  div(x='42%', y='5%', tooltip='Filosofía')
                    h5 Filosofía
                    p Compuesta por:
                    br
                    p Valores: son concebidos como declaraciones que realizan las empresas como sustento a su forma de ser y de hacer las cosas. Por ejemplo, la calidad, el respeto, el compromiso.
                    br
                    p Principios corporativos: se refiere al conjunto de creencias y postulados que funcionan como guías orientadoras e inspiradoras en el quehacer de una organización.

                  div(x='82%', y='84%', tooltip='Objetivos estratégicos')
                    h5 Objetivos estratégicos
                    p Representan los resultados que la empresa desea alcanzar y lograr; se deben establecer para un tiempo específico y ser definidos cuantitativamente. Ayudan a materializar la estrategia, establecen metas y ayudan a su cumplimiento y, además, unifican el lenguaje y alinean la organización. Para la construcción de los objetivos estratégicos es necesario tener presente la misión, la visión y los principios de la organización, de tal manera que se garantice la alineación y la coherencia.
                  div(x='87%', y='5%', tooltip='Normas')
                    h5 Normas
                    p El concepto más apropiado para definir el término, podría ser el que citan Hernández y Rodríguez, S., Palafox de Anda, G. & Aguado Cortés, C. (2020): “son las reglas administrativas de observancia obligatoria para la realización de una operación, procedimiento, programa o presupuesto” (p.256).

          .col-md-12.p-4.mb-5
            .row.d-flex.justify-content-center
              .col-lg-11
                .cajon.color_cajon_tema1_2.p-4
                  p Estos temas corresponden a la denominada
                    |
                    strong cultura organizacional,
                    | la cual es como el ADN de la empresa: la forma de ser y de hacer empresa, las creencias y todas aquellas variables que hacen que los empleados se identifiquen y busquen, desde su quehacer, aportar a un mismo fin.
          .col-lg-12.mb-5
            p En compensación y proporcionando una continuidad con la construcción de la planeación estratégica, encontramos los siguientes elementos:

          .col-lg-12.mb-5
            .row.justify-content-center
              .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
                .crd_hover_txt(data-aos='flip-left')
                  .crd_hover_txt--img.mb-5
                    figure
                      img(src='@/assets/template/tema2/slider_planeacion/img01-slide.png', alt='alt')
                  .crd_hover_txt--body.text-center
                    h4.mb-3 Estrategias organizacionales
                    p.mb-0 Se relaciona con los planteamientos del cómo se pueden llegar a cumplir los objetivos. Pueden darse tantas estrategias como objetivos se planteen y son los vehículos para llevar las acciones al cumplimiento de los objetivos.
              .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
                .crd_hover_txt(data-aos='flip-left')
                  .crd_hover_txt--img.mb-5
                    figure
                      img(src='@/assets/template/tema2/slider_planeacion/img02-slide.png', alt='alt')
                  .crd_hover_txt--body.text-center
                    h4.mb-3 Programas o proyectos
                    p.mb-0 Se refiere a la secuencia de actividades desplegadas para el desarrollo y materialización de la estrategia; aquí se plasman los tiempos requeridos y los responsables de estos proyectos.
              .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
                .crd_hover_txt(data-aos='flip-left')
                  .crd_hover_txt--img.mb-5
                    figure
                      img(src='@/assets/template/tema2/slider_planeacion/img03-slide.png', alt='alt')
                  .crd_hover_txt--body.text-center
                    h4.mb-3 Presupuestos
                    p.mb-0 Son aquellas herramientas que permiten plasmar, de manera anticipada, los recursos requeridos (financieros y no financieros) para el cumplimiento de las actividades; por consiguiente, de las estrategias y de los objetivos.


          .col-lg-12.mb-5
            p Una vez se cumpla el paso de la planeación con sus respectivas variables y técnicas, se adquiere una claridad de hacia dónde va la empresa, cuáles son sus propósitos y finalidades, y se llega entonces al segundo paso del ciclo denominado
              |
              strong “organización”.

      .col-lg-12
        .titulo-segundo
          h2 2.2 Organización
        .row
          .col-lg-12.mb-5
            p Una de las definiciones de organización es la de los autores Hernández y Rodríguez, S., Palafox de Anda, G. & Aguado Cortés, C. (2020), quienes indican que: es la
              |
              span.color_texto_acento “fase del proceso administrativo en la cual se aplican las técnicas administrativas para estructurar una empresa u organización social; se definen las funciones por áreas sustantivas, departamentos y puestos; se establece la autoridad en materia de toma decisiones y la responsabilidad de los miembros que ocupan dichas unidades, y se definen las líneas de comunicación formal que faciliten la comunicación y la cooperación de los equipos de trabajo, a fin de alcanzar los objetivos y la estrategia” (p.271).
          .col-lg-12.mb-5
            .row
              .col-md-5
                figure
                  img(src='@/assets/template/tema2/img04_t2.png', alt='')

              .col-md-7
                p La organización permite optimizar tiempo y recursos, así como también el aumento de productividad, simplificando el trabajo y evitando los reprocesos y la duplicidad en responsabilidades o actividades. Las dos etapas fundamentales de la organización son:

                ul
                  li 
                    i.fas.fa-check.color-icon-check
                    |
                    | La división o asignación de trabajo, de tal manera que se clarifiquen responsabilidades y se delimiten actividades para acercarse, cada vez más, a la máxima eficiencia y eficacia, simplificando trabajos.
                  br
                  li 
                    i.fas.fa-check.color-icon-check
                    |
                    | La coordinación de las actividades, con el propósito de verificar su correcta ejecución.

          .col-lg-12.mb-5
            p Por otro lado, también se estructura a partir de unos principios que son los que aportan, a la “organización”, el hilo conductor como proceso administrativo. Dentro de estos principios se exponen los siguientes:

          .col-lg-12.mb-5
            SlyderF(columnas='col-lg-6 col-xl-4')
              .tarjeta.color-acento-contenido.p-4.altura_decard
                .row.justify-content-center.mb-3
                  .col-8
                    img(
                      src='@/assets/template/tema2/carrusel22/img01.png',
                      alt=''
                    )
                h2.text-center Objetivo
                p.text-center Es la posibilidad de garantizar que todas las actividades que se pretendan desarrollar, se encuentren alineadas con las apuestas organizacionales.
              .tarjeta.color-acento-contenido.p-4.altura_decard
                .row.justify-content-center.mb-3
                  .col-8
                    img(
                      src='@/assets/template/tema2/carrusel22/img02.png',
                      alt=''
                    )
                h2.text-center Especialización
                p.text-center El trabajo de cada persona debe estar delimitado hasta donde sea posible, asignando actividades y funciones específicas para su concentración y su destreza.
              .tarjeta.color-acento-contenido.p-4.altura_decard
                .row.justify-content-center.mb-3
                  .col-8
                    img(
                      src='@/assets/template/tema2/carrusel22/img03.png',
                      alt=''
                    )
                h2.text-center Jerarquía
                p.text-center Resulta necesario, como parte fundamental de la organización, definir centros de autoridad que canalicen la información y garanticen la alineación de los equipos de trabajo hacia la institucionalidad.
              .tarjeta.color-acento-contenido.p-4.altura_decard
                .row.justify-content-center.mb-3
                  .col-8
                    img(
                      src='@/assets/template/tema2/carrusel22/img04.png',
                      alt=''
                    )
                h2.text-center Unidad de mando
                p.text-center Al definir centros de autoridad, es preciso asignar un solo jefe a cada trabajador.
              .tarjeta.color-acento-contenido.p-4.altura_decard
                .row.justify-content-center.mb-3
                  .col-8
                    img(
                      src='@/assets/template/tema2/carrusel22/img05.png',
                      alt=''
                    )
                h2.text-center Difusión
                p.text-center Se debe difundir, de manera abierta y clara, la información que surja desde los centros de autoridad.
              .tarjeta.color-acento-contenido.p-4.altura_decard
                .row.justify-content-center.mb-3
                  .col-8
                    img(
                      src='@/assets/template/tema2/carrusel22/img06.png',
                      alt=''
                    )
                h2.text-center Equilibrio
                p.text-center Debe existir un equilibrio entre la aplicación de las técnicas y los principios, para asegurar la correcta marcha global de la organización.

          .col-lg-12.mb-5
            p En el ejercicio de la organización como proceso administrativo, también se encuentra la definición de la estructura organizacional, siendo esta la manera de establecer una arquitectura al interior de la empresa, indicando los cargos, las líneas de comunicación y de mando, las dependencias y la relación entre las mismas; esta herramienta debe ser construida y diseñada a la luz de la razón de ser de la empresa, su propósito superior y su actividad económica; por eso es importante realizar un análisis previo a variables, como el que se explica a continuación:

          .col-lg-12.mb-5
            .row
              .col-md-5
                figure
                  img(src='@/assets/template/tema2/img05_t2.png', alt='')

              .col-md-7
                ul
                  li 
                    i.fas.fa-check.color-icon-check
                    |
                    | La estrategia organizacional: analiza la coherencia entre el mercado, sus cambios y los objetivos organizacionales.
                  br
                  li 
                    i.fas.fa-check.color-icon-check
                    |
                    | El modelo de estructura organizacional: cada vez es más común ver empresas que le apuestan a un modelo de estructura organizacional más flexible y poco tradicional.
                  br
                  li 
                    i.fas.fa-check.color-icon-check
                    |
                    | Los perfiles de puesto: validan que los perfiles de cargo correspondan con las necesidades de la estructura organizacional y que la definición de las funciones y las responsabilidades, se encuentren definidas de manera coherente con el cumplimiento de la estrategia organizacional.
                  br
                  li 
                    i.fas.fa-check.color-icon-check
                    |
                    | El recurso humano: se deben tener en cuenta variables como la reubicación y rotación de personal, ante una posible adaptación, debido a una nueva estructura organizacional.

          .col-lg-12.mb-5
            p Es fundamental aclarar que no todas las estructuras organizacionales son iguales y que todo depende de la actividad económica, de su estilo de dirección y de organización;
              |
              strong a continuación se presentan algunos modelos y tipos de estructuras:

          .col-lg-12.mb-5 
            TabsC.color-acento-contenido
              .py-3.py-md-4(titulo='Organización  formal')
                .row
                  .col-md-6.mb-4.mb-md-0
                    h4 Organización formal
                    p Funciona con un sistema de tareas concretas, con delegaciones específicas de autoridad y responsabilidad, en función de la rendición de cuentas. La modalidad formal es benéfica en términos de facilidad para determinar las políticas y los objetivos organizacionales; es una representación de organización fija y predecible, lo que posibilita anticipar logros a futuro.

                  .col-md-6
                    figure
                      img(
                        src='@/assets/template/tema2/pestañas/img01p.png',
                        alt='Texto que describa la imagen'
                      )
              .py-3.py-md-4(titulo='Organización lineal')
                .row
                  .col-md-6.mb-4.mb-md-0
                    h4 Organización lineal
                    p Es una organización simple y de estructura piramidal, donde cada líder recibe y comunica lo que sucede en cada estamento. Algunas de sus características son:

                    ul
                      li 
                        i.fas.fa-check.color-icon-check
                        |
                        | Autoridad única.
                      br
                      li 
                        i.fas.fa-check.color-icon-check
                        |
                        | Formas de comunicación lineales.
                      br
                      li 
                        i.fas.fa-check.color-icon-check
                        |
                        | Decisiones centralizadas.

                  .col-md-6
                    figure
                      img(
                        src='@/assets/template/tema2/pestañas/img02p.png',
                        alt='Texto que describa la imagen'
                      )
              .py-3.py-md-4(titulo='Organización funcional')
                .row
                  .col-md-6.mb-4.mb-md-0
                    h4 Organización funcional
                    p Sustituye a la organización lineal; cada colaborador ya no solo rinde cuentas a su jefe inmediato, sino a varios actores o compañeros de la empresa; algunas de sus características son:

                    ul
                      li 
                        i.fas.fa-check.color-icon-check
                        |
                        | Autoridad dividida (funcional).
                      br
                      li 
                        i.fas.fa-check.color-icon-check
                        |
                        | Línea directa de comunicación.
                      br
                      li 
                        i.fas.fa-check.color-icon-check
                        |
                        | Decisiones descentralizadas.
                      br
                      li 
                        i.fas.fa-check.color-icon-check
                        |
                        | Particular énfasis en la especialización.

                  .col-md-6
                    figure
                      img(
                        src='@/assets/template/tema2/pestañas/img03p.png',
                        alt='Texto que describa la imagen'
                      )
              .py-3.py-md-4(titulo='Staff')
                .row
                  .col-md-6.mb-4.mb-md-0
                    h4 Staff
                    p Es una fusión entre la lineal y la funcional; los órganos staff prestan asesoría a servicios especializados. Sus características son:

                    ul
                      li 
                        i.fas.fa-check.color-icon-check
                        |
                        | Cada órgano reporta a un solo y único jefe, aplicando el principio de autoridad, pero cada órgano recibe asesoría y servicio especializado de los diferentes órganos de staff.
                      br
                      li 
                        i.fas.fa-check.color-icon-check
                        |
                        | Líneas de comunicación más abiertas.
                      br
                      li 
                        i.fas.fa-check.color-icon-check
                        |
                        | Se separan los órganos ejecutivos de los asesores.
                  .col-md-6
                    figure
                      img(
                        src='@/assets/template/tema2/pestañas/img04p.png',
                        alt='Texto que describa la imagen'
                      )

          .col-lg-12.mb-5
            p Una vez definida la estructura organizacional, y teniendo en cuenta que la fase de organización no es más que la continuación de la fase de planeación en relación con los procesos administrativos, es importante reconocer esos tipos de descriptores o facilitadores en la división y asignación del trabajo. Es entonces que surge como herramienta la gestión administrativa, definida como el conjunto de acciones o tareas que buscan maximizar los resultados de la empresa con la búsqueda permanente del uso eficiente de los recursos humanos, financieros y materiales.

          .col-lg-12.mb-5
            .titulo-principal.color-acento-contenido
              .titulo-principal__numero
                span 
              h1 Manual de funciones
          .col-lg-12.mb-5
            .row
              .col-md-2
                figure
                  img(src='@/assets/template/tema2/img06_t2.png', alt='')

              .col-md-10
                p El manual de funciones representa la organización y la delimitación de funciones y responsabilidades de los cargos creados en la estructura organizacional; su propósito fundamental es el de definir, de manera clara y concisa, los alcances de los cargos para evitar reprocesos, además de documentar los diferentes puestos de trabajo; controlar y mejorar los sistemas de gestión, posibilitar la valoración de los cargos, integrar las competencias profesionales para la ubicación del correcto perfil profesional o técnico en cada nivel, elaborar planes de formación para los cargos y prevenir los riesgos asociados a los mismos.

          .col-lg-12.mb-5
            .row.p-lg-5.p-sm-0
              .col-lg-4.col-md-12.col-12
                strong En términos de contenidos, el documento (ficha) de manual de funciones, debe estar conformado de manera básica por:
                figure
                  img(src='@/assets/template/tema2/img07_t2.png', alt='')
              .col-lg-8.col-md-12.col-12
                AcordionA(
                  tipo='a',
                  clase-tarjeta='tarjeta color_tarjeta__secundaria'
                )
                  .row(titulo='Propósito o finalidad del cargo')
                    .col-md-12.mb-4.mb-md-0
                      p ¿Para qué existe?
                      |
                      strong Ejemplo:
                      | impulsar, mantener y desarrollar la gestión de la calidad total en la empresa.

                  .row(titulo='Área de impacto en resultados')
                    .col-md-12.mb-4.mb-md-0
                      p ¿En qué ámbito impacta el área para la organización?
                      |
                      strong Ejemplo:
                      | resultados económicos y financieros o imagen de la empresa.

                  .row(titulo='Tareas')
                    .col-md-12.mb-4.mb-md-0
                      p Hacen referencia al listado de actividades elementales que desarrolla un trabajador para el cumplimiento de su función.
                      |
                      strong Ejemplo:
                      | archivar documentación, responder llamadas, etc.
                  .row(titulo='Funciones')
                    .col-md-12.mb-4.mb-md-0
                      p Se refiere a la agrupación de tareas de mayor complejidad que pueden ser de ejecución (buscan un fin concreto), directivas (su alcance es más estratégico e institucional), o empresariales (están más asociadas a los departamentos o áreas de la empresa).
                      |
                      strong Ejemplo:
                      | contratar personal (ejecución), tomar decisiones en materia de inversión (directiva).
                  .row(titulo='Decisiones')
                    .col-md-12.mb-4.mb-md-0
                      p Establecen si el cargo tiene el proceso de toma de decisiones para definir el alcance de estas.
                  .row(titulo='Condiciones de trabajo')
                    .col-md-12.mb-4.mb-md-0
                      p Algunos puestos de trabajo tienen, asociados a ellos, condiciones de trabajo con algunos riesgos de exposición como: humedad, calor extremo, peligrosidad, esfuerzo físico, entre otros; esto amerita que las capacidades físicas del trabajador que ocupe el cargo, sean especiales. Los riesgos plasmados en el manual, también permiten gestión adecuada y seguimiento para condiciones de seguridad y salud en el trabajo.
                  .row(titulo='Requerimientos del puesto')
                    .col-md-12.mb-4.mb-md-0
                      p Estos requerimientos hacen alusión al nivel de formación que requiere el cargo: nivel académico, grado de conocimientos técnicos y tecnológicos específicos, grado de experiencia o dominio operativo de la actividad a desarrollar, y conjunto de capacidades intelectuales, aptitudes, habilidades y características de personalidad.

          .col-lg-12.mb-5
            p Para mayor ilustración, a continuación se presenta un ejemplo de un manual de funciones:

          .col-lg-12.p-4
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 1.
              span Ejemplo manual de funciones

            .tabla-a
              .tabla-b__header.color_cajon_green_cuadro
                h4.mb-0 MANUAL DE FUNCIONES
              .tabla-b__header.color_cajon_grey_cuadro
                h4.mb-0.text-dark IDENTIFICACIÓN DEL CARGO
              table
                tbody
                  tr
                    th
                      strong Denominación del cargo
                      p Coordinador operativo de comunicaciones
                    th 
                      strong Categoría laboral
                      p Coordinador operativo
                  tr
                    th 
                      strong Denominación del cargo
                      p Coordinador operativo de comunicaciones
                    th 
                      strong Departamento
                      p Operativo
                  tr
                    th.color_cajon_grey_cuadro(colspan='2') 
                      strong FINALIDAD
                  tr
                    th(colspan='2') 
                      p El coordinador operativo de comunicaciones, es el encargado de velar por las correctas prácticas de comunicación interna y externa de la empresa; bajo su liderazgo cuenta con un equipo de trabajo que incluye personas cualificadas para ejercer labores de community manager, diseño gráfico y fotografía. Tiene la responsabilidad de asegurar el plan de comunicaciones, a través de campañas, para transmitir los mensajes que la empresa requiera difundir. Debe plantear la propuesta de presupuesto de inversión y, al mismo tiempo, debe hacer seguimiento y dar cumplimiento al presupuesto de operación para su área.
                        br
                        br
                        | También tiene como funciones importantes: la comunicación interna asertiva y eficiente, crear campañas comunicativas para divulgar información de interés institucional y la coordinación del área de comunicaciones, así como la gestión de relaciones externas.
                  tr
                    th.color_cajon_grey_cuadro(colspan='2') 
                      strong ÁREAS DE RESULTADOS
                  tr
                    td.text-center(colspan='2') 
                      ul
                        li 
                          i.fas.fa-check.color-icon-check
                          |
                          | Campañas de comunicación internas.
                        li 
                          i.fas.fa-check.color-icon-check
                          |
                          | Presupuestos para inversión en las campañas.
                        li 
                          i.fas.fa-check.color-icon-check
                          |
                          | Gestión y administración de las relaciones externas de la empresa.
                        li 
                          i.fas.fa-check.color-icon-check
                          |
                          | Control de presupuestos de operación.
                  tr
                    th.color_cajon_grey_cuadro(colspan='2') 
                      strong ACCIONES
                  tr
                    td.text-center(colspan='2') 
                      ul
                        li 
                          i.fas.fa-check.color-icon-check
                          |
                          | Planificar y proponer la política de comunicaciones para la empresa.
                        li 
                          i.fas.fa-check.color-icon-check
                          |
                          | Asegurar el correcto desarrollo de campañas de comunicación interna y externa.
                        li 
                          i.fas.fa-check.color-icon-check
                          |
                          | Planificar y proponer las inversiones financieras en materia de comunicaciones.
                        li 
                          i.fas.fa-check.color-icon-check
                          |
                          | Junto con el responsable de mercadeo, planear la forma de comunicar y publicitar los servicios de la empresa.
                  tr
                    th.color_cajon_grey_cuadro(colspan='2') 
                      strong EQUIPOS O VALORES A SU CARGO
                  tr
                    td.text-center(colspan='2') 
                      ul
                        li 
                          i.fas.fa-check.color-icon-check
                          |
                          | Información confidencial de la empresa.
                        li 
                          i.fas.fa-check.color-icon-check
                          |
                          | Equipo de oficina.
                  tr
                    th.color_cajon_grey_cuadro(colspan='2') 
                      strong PERFIL
                  tr
                    th
                      strong Competencias
                    th
                      strong Requisitos específicos
                  tr
                    td.text-center
                      p Educación
                    td.text-center
                      ul
                        li 
                          i.fas.fa-check.color-icon-check
                          |
                          | Profesional en Comunicación Social - Periodismo
                        li 
                          i.fas.fa-check.color-icon-check
                          |
                          | Especialista en comunicación corporativa
                  tr
                    td.text-center
                      p Experiencia relacionada
                    td.text-center
                      p Mínimo 3 años en cargos similares.

          .col-md-12.mb-5
            .row.d-flex.justify-content-center.p-4
              .col-lg-11
                .cajon.color_cajon_tema1_2.p-4
                  p Luego del planteamiento del manual de funciones, se hace necesario ahondar un poco más en las responsabilidades y en el paso a paso, para cumplir con las responsabilidades del cargo; es por esta razón, que se plantean aspectos relevantes de los procesos, procedimientos y sus consecuencias, como complemento para la correcta organización de la empresa.

          .col-lg-12.mb-5
            .titulo-principal.color-acento-contenido
              .titulo-principal__numero
                span 
              h1 Manual de procesos y procedimientos
            .row
              .col-lg-12
                p El manual de procesos y procedimientos de una empresa u organización, es un documento que contiene información sobre cómo se deben llevar a cabo los procesos; esto permite y facilita el flujo adecuado del trabajo, a partir de la estandarización de los mismos. Es un documento que contiene pautas y reglas sobre cómo deben ser desarrollados ciertos procedimientos y posibilita a las empresas para dirigir sus operaciones, estrategias y flujos de trabajo hacia resultados óptimos.

              .col-lg-12
                .row
                  .col-md-5
                    figure
                      img(src='@/assets/template/tema2/img08_t2.png', alt='')

                  .col-md-7
                    p Algunas de las ventajas de contar con un manual de procesos y procedimientos son:
                    ul
                      li 
                        i.fas.fa-check.color-icon-check
                        |
                        | Ahorro de tiempo.
                      br
                      li 
                        i.fas.fa-check.color-icon-check
                        |
                        | Posibilita la aplicación de acciones de control interno y mejora continua.
                      br
                      li 
                        i.fas.fa-check.color-icon-check
                        |
                        | Optimiza los procesos.
                      br
                      li 
                        i.fas.fa-check.color-icon-check
                        |
                        | Mejora la comunicación.
                      br
                      li 
                        i.fas.fa-check.color-icon-check
                        |
                        | Delimita las responsabilidades de los cargos.
                      br
                      li 
                        i.fas.fa-check.color-icon-check
                        |
                        | Mejora la imagen.
                      br
                      li 
                        i.fas.fa-check.color-icon-check
                        |
                        | Permite establecer expectativas.
                      br
                      li 
                        i.fas.fa-check.color-icon-check
                        |
                        | Puede ser una herramienta para capacitación.

          .col-lg-12.mb-5
            p Antes de presentar la estructura del manual de procesos y procedimientos, es importante profundizar un poco sobre los conceptos que se encuentran involucrados en este documento:
          .col-md-12.mb-5
            .row.d-flex.justify-content-center.p-4
              .col-lg-11
                .cajon.color_cajon_green.p-4
                  p 
                    |
                    strong Proceso:
                    | se refiere a una serie de entradas que se combina con algunas actividades, para generar unas salidas o un producto. Un ejemplo de esto es el siguiente: para realizar un pastel, se cuenta con los ingredientes, las herramientas y el mecanismo de elaboración, para obtener como resultado el pastel; a esto se le denomina proceso.
                  br
                  | Existen 3 tipos de procesos:
                  br
                  ul
                    li 
                      i.fas.fa-check.color-icon-check
                      |
                      strong Estratégicos:
                      | son aquellos que están relacionados con la planificación estratégica de la organización.
                    br
                    li 
                      i.fas.fa-check.color-icon-check
                      |
                      strong Operativos:
                      | son los que están relacionados con la operación de la empresa.
                    br
                    li 
                      i.fas.fa-check.color-icon-check
                      |
                      strong De apoyo:
                      | son los que dan soporte a la organización

          .col-lg-12.mb-5
            p Para continuar con el ejemplo de la pastelería, se ilustrará el ejercicio, para conocer el mapa de procesos de la misma empresa.
            .row
              .col-lg-12
                .row.d-flex.justify-content-center.p-4
                  .col-lg-8.col-md-8.col-12
                    .titulo-sexto.color-acento-contenido.mb-3
                      h5 Figura 3.
                      span Ejemplo mapa de procesos
                    figure
                      img(src='@/assets/template/tema2/img09_t2.png', alt='')

          .col-lg-12.mb-5
            .row
              .col-lg-8.col-md-12.col-12
                p En los procesos estratégicos se incluyen la planeación y las finanzas, porque a partir de estas se despliegan los proveedores, productos, y el presupuesto que se requiere para desarrollar el plan.
                br
                p En los operativos se definen compras, por la adquisición de materia prima, máquinas y productos asociados con la elaboración de los pasteles; producción para la fabricación misma de los pasteles, y ventas para la comercialización de los productos.
                br
                p En los procesos de apoyo se definen administración, mercadeo y contabilidad porque, si bien son muy importantes en el desarrollo del producto en su generalidad, para este caso se presentan como apoyo en el proceso.
                br
                p Una vez que se cuenta con el mapa de procesos, es importante asignar a un responsable o a un líder del desarrollo, quien será el encargado de velar por el cumplimiento, conjuntamente con el equipo que entrenará y guiará para el logro del objetivo.
              .col-lg-4.col-md-12.col-12 
                figure
                  img(src='@/assets/template/tema2/img10_t2.png', alt='')

          .col-lg-12.mb-5
            .row 
              .col-lg-12.mb-5
                p Como continuidad del ejercicio, es importante la documentación del proceso que se va a llevar, realizando los siguientes pasos:
              .col-lg-12
                TabsA.color-acento-contenido
                  .tarjeta.color_cajon_green.p-5(
                    titulo='PASO 1: Ficha del proceso'
                  )
                    h4 Ficha del proceso
                    .row
                      .col-xl-2.mb-4
                        figure
                          img(
                            src='@/assets/template/tema2/pestañas_verticales/img01_pv.svg',
                            alt=''
                          )
                      .col-xl-10
                        p Es la que describe las generalidades de cada proceso. El objetivo, entradas, salidas, cómo se medirá, entre otros.
                  .tarjeta.color_cajon_green.p-5(titulo='PASO 2:  Flujograma')
                    h4 Flujograma
                    .row
                      .col-xl-2.mb-4
                        figure
                          img(
                            src='@/assets/template/tema2/pestañas_verticales/img02_pv.svg',
                            alt=''
                          )
                      .col-xl-10
                        p Ilustra, gráficamente, el recorrido que conlleva el proceso desde sus entradas y hasta sus salidas.
                  .tarjeta.color_cajon_green.p-5(
                    titulo='PASO 4:  Procedimiento'
                  )
                    h4 Procedimiento
                    .row
                      .col-xl-2.mb-4
                        figure
                          img(
                            src='@/assets/template/tema2/pestañas_verticales/img03_pv.svg',
                            alt=''
                          )
                      .col-xl-10
                        p Se refiere al conjunto de actividades que constituyen el proceso, incluyendo un paso a paso de manera descriptiva.
                  .tarjeta.color_cajon_green.p-5(titulo='PASO 4:  Actividades')
                    h4 Actividades
                    .row
                      .col-xl-2.mb-4
                        figure
                          img(
                            src='@/assets/template/tema2/pestañas_verticales/img04_pv.svg',
                            alt=''
                          )
                      .col-xl-10
                        p Acciones que, en su desarrollo, aportan y generan valor a la organización.

          .col-lg-12.mb-5
            .row 
              .col-lg-12.mb-5
                p Para la construcción de un flujograma, se debe tener en cuenta la representación simbólica que se presenta a continuación:
              .col-lg-12 
                .row.d-flex.justify-content-center
                  .col-lg-8
                    figure
                      img(src='@/assets/template/tema2/img11_t2.jpg', alt='')

          .col-lg-12.mb-5
            .row
              .col-lg-12
                p El flujograma comprende el paso a paso de los procesos, estimando momentos de decisión, de desarrollo de actividades, e indicando el principio y el fin de los procesos.
                |
                | Para el ejemplo de la pastelería, quedaría así:
              .col-lg-12
                .row.d-flex.justify-content-center.p-4
                  .col-lg-8.col-md-8.col-12.mb-5
                    .titulo-sexto.color-acento-contenido
                      h5 Figura 4.
                      span Flujograma ejemplo pastelería
                    figure
                      img(src='@/assets/template/tema2/img12_t2.png', alt='')
                  .col-lg-11
                    .cajon.color_cajon_tema1_2.p-4
                      p Se puede concluir que en esta etapa del proceso administrativo, se realiza una identificación, clasificación, agrupación y asignación del trabajo, de los recursos y las responsabilidades, de tal forma que, cada integrante sepa qué se espera de su labor y cómo está aportando al logro del objetivo colectivo.
                      |
                      | Una vez culminada la etapa de organización, se procede con la etapa de dirección.

      .col-lg-12.mb-5
        .row
          .col-lg-12.mb-5
            .titulo-segundo
              h2 2.3 Dirección
          .col-lg-12.mb-5
            .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
              .bloque-texto-g__img(
                :style='{ "background-image": `url(${require("@/assets/template/tema2/img13_t2.png")})` }'
              )
              .bloque-texto-g__texto.p-4
                p.mb-0 Cuando se habla de dirección, se hace referencia a unos elementos asociados al liderazgo, a la motivación, a los equipos de trabajo y a la comunicación en torno a la ejecución de los planes, de acuerdo con la estructura organizacional.

          .col-lg-12.mb-5
            p Ahondar en el significado de cada uno de los elementos:

          .col-lg-12.mb-5 
            TabsC.color-acento-contenido
              .py-3.py-md-4(titulo='Liderazgo')
                .row
                  .col-md-7.mb-4.mb-md-0
                    h4 Liderazgo
                    p Implica ayudar, desde el rol directivo o líder, a los equipos de trabajo que componen la organización para trabajar con entusiasmo y, conjuntamente, alcanzar el éxito. El líder debe propiciar ambientes de trabajo favorables para que sus equipos aporten lo mejor de sí mismos y se sientan parte fundamental de la empresa.

                  .col-md-5
                    figure
                      img(
                        src='@/assets/template/tema2/pestañas_direccion/img01_d.png',
                        alt='Texto que describa la imagen'
                      )
              .py-3.py-md-4(titulo='Motivación')
                .row
                  .col-md-7.mb-4.mb-md-0
                    h4 Motivación
                    p La buena actitud de los trabajadores o empleados es fundamental para que realicen su trabajo con entusiasmo; por eso es importante que el líder genere ese estímulo permanente de confianza, desde lo individual, para impactar también colectivamente.

                  .col-md-5
                    figure
                      img(
                        src='@/assets/template/tema2/pestañas_direccion/img02_d.png',
                        alt='Texto que describa la imagen'
                      )
              .py-3.py-md-4(titulo='Comunicación')
                .row
                  .col-md-7.mb-4.mb-md-0
                    h4 Comunicación
                    p La comunicación es el canal que permite, a la organización, definir un entendimiento y unos mensajes claros; por eso es significativo que exista una comunicación efectiva que invite a los trabajadores a contribuir con el cumplimiento de los objetivos. Claves para esa comunicación asertiva: la empatía, el respeto y la confianza.

                  .col-md-5
                    figure
                      img(
                        src='@/assets/template/tema2/pestañas_direccion/img03_d.png',
                        alt='Texto que describa la imagen'
                      )
              .py-3.py-md-4(titulo='Ejecución y supervisión de resultados')
                .row
                  .col-md-6.mb-4.mb-md-0
                    h4 Ejecución y supervisión de resultados
                    p El seguimiento y la supervisión, permiten orientar acciones preventivas (antes de que suceda) y correctivas (una vez ya sucedido) a la hora del desarrollo de una actividad, para retomar el rumbo y la orientación hacia el cumplimiento de los objetivos propuestos.

                  .col-md-6
                    figure
                      img(
                        src='@/assets/template/tema2/pestañas_direccion/img04_d.png',
                        alt='Texto que describa la imagen'
                      )
              .py-3.py-md-4(titulo='Toma de decisiones')
                .row
                  .col-md-7.mb-4.mb-md-0
                    h4 Toma de decisiones
                    p Elegir el mejor recorrido para la organización, resulta ser una de las funciones más importantes que realiza el administrador, al analizar varias alternativas, con la finalidad de lograr los propósitos establecidos.

                  .col-md-5
                    figure
                      img(
                        src='@/assets/template/tema2/pestañas_direccion/img05_d.png',
                        alt='Texto que describa la imagen'
                      )
          .col-lg-12
            .titulo-principal.color-acento-contenido
              .titulo-principal__numero
                span 
              h1 Tipos de dirección
          .col-lg-12.mb-5
            p Las formas de administrar o dirigir, pueden variar de acuerdo con los tipos, formas o estilos de liderazgo; esto varía según la conformación y metodologías para realizar los procedimientos.
            |
            | Los tipos de dirección más conocidos son:
          .col-lg-12.mb-5
            .row
              .col-lg-8.col-md-12.col-12
                TabsA.color-acento-contenido
                  .tarjeta.color_cajon_green.p-5(titulo='Coercitivo')
                    h4 Coercitivo
                    p El estilo de liderazgo coercitivo no tiene en cuenta la flexibilidad, la disciplina prevalece como su valor regente, debido a que impone ritmos de trabajo acelerados sin tener en cuenta elementos humanos de fatiga y bienestar; no hay negociación, no tiene en cuenta las iniciativas de los demás. Normalmente, un líder coercitivo es muy efectivo en momentos de crisis para implementar cambios en situaciones de emergencia, como por ejemplo un temblor o un incendio.
                  .tarjeta.color_cajon_green.p-5(titulo='Autocrático')
                    h4 Autocrático
                    p Es aquel tipo de dirección donde la autoridad impone sus normas, criterios y decisiones, sin realizar consultas a sus colaboradores; motivo por el cual este estilo de liderazgo provoca ambientes de trabajo bajo tensión, en los que la disciplina y la inseguridad pueden ir de la mano. Se concentra el poder de decisión en una sola persona; dos ejemplos claros de este estilo de liderazgo son Adolfo Hitler y Fidel Castro.
                  .tarjeta.color_cajon_green.p-5(titulo='Democrático')
                    h4 Democrático
                    p En este modelo, la autoridad se encuentra en el grupo, es decir, se toman decisiones por unanimidad, permitiendo la participación del equipo de colaboradores que conforman la organización. Su conducta va orientada hacia las personas, se preocupa por las relaciones interpersonales dentro del equipo y necesidades ya sean de grupo o individuales. Los empleados sienten que son tenidos en cuenta, sin embargo este modo de operar puede retrasar bastante la toma de decisiones, mientras se llega a un consenso.
                  .tarjeta.color_cajon_green.p-5(titulo='Consultivo')
                    h4 Consultivo
                    p Es un tipo de liderazgo que se encuentra entre el estilo autocrático y el democrático; el jefe intenta persuadir a su equipo de la decisión que se ha tomado y eso hace que el grupo sienta esta decisión como suya; otro escenario puede ser aquel donde el jefe presenta el problema o la necesidad, recoge sugerencias y toma la decisión adecuada. Este modelo se caracteriza por ser el más participativo y democrático.
              .col-lg-4.col-md-12.col-12
                figure
                  img(src='@/assets/template/tema2/img_td.png', alt='')
          .col-lg-12
            .row.d-flex.justify-content-center.p-4
              .col-lg-11
                .cajon.color_cajon_tema1_2.p-4
                  p Una vez se tiene el equipo de trabajo comprometido, en busca de la eficiencia, desarrollando actividades claras, con liderazgos y jerarquías definidas y apostando a un mismo fin, aparece el último paso del ciclo del proceso administrativo, que busca evaluar el ejercicio y, a través de esa evaluación, definir procesos de mejora y corrección. Es así como se le da acceso a la cuarta etapa denominada “control”.
      .col-lg-12.md-5
        .row
          .col-lg-12
            .titulo-segundo
              h2 2.4 Control
          .col-lg-12.mb-5
            .row
              .col-lg-7.col-md-12.col-12
                p El control consiste en evidenciar y evaluar que lo planeado, organizado y dirigido, se encuentre marchando de acuerdo con los objetivos organizacionales y señalando, a partir de este ejercicio de evaluación, las debilidades, los errores, e inclusive las potencialidades y, a partir de las acciones tomadas, el perfeccionamiento del proceso traducido en mayor eficiencia y efectividad. El proceso de control permite tomar decisiones en torno a cuáles son los objetivos por alcanzar, como sistema o como área; cómo va el desempeño de los equipos de trabajo con base en sus responsabilidades y las apuestas generales, identificación de riesgos y oportunidades, incluyendo el cambio de planteamiento del objetivo. Existen diferentes tipos de controles:
              .col-lg-5.col-md-12.col-12
                figure
                  img(src='@/assets/template/tema2/img_control.png', alt='')
          .col-lg-12.p-5
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta.color_cajon_green_cuadro
                  span 1
                p
                  span.text-bold Preliminar y colectivo:
                  | se enfoca en la prevención de las desviaciones en la calidad y en la cantidad de recursos utilizados en la organización.
              li 
                .lista-ol--cuadro__vineta.color_cajon_green_cuadro
                  span 2
                p
                  span.text-bold Concurrente o permanente:
                  | consiste en vigilar las operaciones en funcionamiento; cuando el control se aplica de manera permanente, la directiva puede corregir los problemas oportunamente, antes que se vuelvan irremediables y costosos.
              li 
                .lista-ol--cuadro__vineta.color_cajon_green_cuadro
                  span 4
                p
                  span.text-bold Correctivo o de retroalimentación:
                  | este control se realiza una vez que la actividad ha llegado a su fin. La desventaja de este tipo de control es que cuando se recibe la información, el daño ya está hecho. Los informes financieros son un claro ejemplo de este tipo de control.
          .col-lg-12.mb-5
            p Por otro lado, el control también abarca unas etapas, que pueden ilustrarse de la siguiente manera:
          .col-lg-12.mb-5
            .row.d-flex.justify-content-center
              .col-lg-8.col-md-8.col-12
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Figura 5.
                  span Etapas del control

                figure
                  img(src='@/assets/template/tema2/img_control_02.png', alt='')

          .col-lg-12
            .row
              .col-lg-7.col-md-12.col-12
                p Con los resultados, la retroalimentación y las acciones correctivas, se da el cierre del proceso administrativo obteniendo, como resultado, una aplicación de teorías que indistintamente de su enfoque, muestran los resultados a nivel de logros alcanzados, con estructura científica, con análisis de variables internas y externas, y con equipos de trabajo comprometidos con el logro de sus objetivos tanto individuales, como organizacionales.
                .cajon.color_cajon_green.p-4
                  p El escenario práctico para la aplicación de la teoría que se ha presentado en este espacio, es precisamente la empresa que, sin haber profundizado en su origen y llegada a la historia, se ha convertido en el escenario propicio para los experimentos de autores, científicos y para el ejercicio de excelentes administradores y gerentes. Por esta razón, en el siguiente apartado, se presenta el concepto de “empresa”.

              .col-lg-5.col-md-12.col-12
                figure
                  img(src='@/assets/template/tema2/img_control_03.png', alt='')
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    indicadorTarjetaSlide: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
