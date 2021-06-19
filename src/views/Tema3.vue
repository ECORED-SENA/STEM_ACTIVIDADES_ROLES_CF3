<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  3
      h1 Ambientes de aprendizaje: STEM
    .row.mb-5
      .col-lg-7
        p.mb-3  En lo que respecta a los ambientes de aprendizajes STEM, hay varios y dependen del contexto de cada institución educativa, aquí es necesario recordar que “un ambiente de aprendizaje es un entorno físico y psicológico de interactividad regulada en donde confluyen personas con propósitos educativos” (Herrera (2006), citado por Castro y Morales 2015).
        p.mb-3  De acuerdo con Sánchez y Hernández (s.f.), “algunos de los ambientes de aprendizaje que con mayor frecuencia se presentan como: <b>laboratorios</b> (físicos y virtuales), <b>ambientes de aprendizaje colaborativo, aulas taller, espacios makers</b> (makerspaces), <b>realidad virtual y simuladores,</b> ambientes de aprendizaje situados, colaboratorios, museos de Ciencia y Tecnología”; pero es importante agregar a los laboratorios, una nueva modalidad, los del tipo remoto. Un laboratorio escolar es un espacio físico donde los aprendices pueden realizar diversas actividades de carácter académico, social y lúdico, al tiempo que propician la comprobación de fundamentos teóricos, la indagación y verificación de hipótesis. 
        p.mb-3  A continuación, <b>se describen algunos laboratorios (físicos y virtuales) que se caracterizan por ser ambientes de aprendizaje para la educación STEM:</b>
      .col-lg-5
        figure
          img(src='@/assets/curso/t3-i1.png', alt='estudiantes en una mesa de laboratorio químico')

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta-avatar-b.mb-4.align-items-center
          img.h80(src='@/assets/curso/t3-i2.svg' alt='icono decorativo')
          .tarjeta.tarjeta--gris
            .p-3
              p <b>La tecnología para la educación</b> es el conjunto de equipos con los cuales se hace más fácil la manera de dictar los contenidos de un plan académico. En este grupo se pueden encontrar las tabletas, los libros digitales, los tableros inteligentes y los programas de computadora en línea para acceso de instructores, padres y aprendices, entre otros.  
        .tarjeta-avatar-b.mb-5.align-items-center
          img.h80(src='@/assets/curso/t3-i2.svg' alt='icono decorativo')
          .tarjeta.tarjeta--gris
            .p-3
              p <b>La instrucción y tecnología</b>  hacen referencia a los conocimientos que debe tener un aprendiz desde educación preescolar hasta el grado once, que le permitan obtener y desarrollar habilidades para una sociedad eminentemente tecnológica.
    .row.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4
          .row
            .col-lg-2
              figure
              img(src='@/assets/curso/t3-i3.svg', alt='icono decorativo')
            .col-lg-10
              p.mb-3  Para finalizar se sugiere observar este ciclo de conferencia de la sicóloga Maryann Santos de Barona de la Universidad de Nueva York acerca de los retos de la educación STEM para el desarrollo de habilidades del siglo XXI ¿Qué esperas para observarlos? Adelante.  
                .row
                  .col-lg-8
                    a.anexo.mb-4.mb-lg-0(href="https://www.eafit.edu.co/proyecto50/compartir-experiencias/estrategias-innovacion-educativa/Paginas/Educaci%C3%B3n-STEM-para-todos.aspx" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p <b>Enlace web.</b>  Educación STEM para todos.<br>www.eafit.edu.co


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.h80{height: 80px}
.tarjeta--gris{background-color: #D5D6E2}
</style>
