<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  1
      h1 Rol del instructor en la educación STEM

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      //--figcaption Video: Leyenda del video
    .row.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4.mb-5
          .row
            .col-lg-7
              p.mb-3  <b>El rol de los instructores merece una revisión en el sistema de educación de Colombia frente a la educación STEM,</b> porque esta exige un profesional divergente y con capacidad de seguir aprendiendo a lo largo de la vida y estableciendo una conexión de lo que enseña con el contexto real de los aprendices; pero <b>¿qué habilidades merecen ser revisadas para la formación de un aprendiz en el contexto del siglo XXI?</b> Este puede ser un interrogante que conlleve a un estudio de investigación interesante, sin embargo, se puede retomar la perspectiva de Villanueva y Casas (2010) cuando afirman que los aprendices del siglo XXI deben formarse en habilidades para vivir en una sociedad cada vez más alfabetizada en el uso de las tecnologías y sobresalir en un mercado laboral cada vez más saturado.
            .col-lg-5
              figure
                img(src='@/assets/curso/t1-i1.png', alt='estudiantes e instructor en una mesa manipulando un brazo robótico')

        .cajon.color-secundario.p-4.mb-5
          .row
            .col-lg-7
              p.mb-3  En este sentido, el desarrollo de las habilidades del siglo XXI es cada vez más importante para ayudar a los ciudadanos a navegar por ecosistemas complejos en las diferentes etapas de sus vidas. Los sistemas de aprendizaje en el desarrollo de la vida requieren de personas que deben tomar muchas decisiones en diferentes momentos sobre las diferentes formas de aprendizaje y capacitación formal y no informal, necesarias para tener vigencia en el mercado laboral, conseguir un ascenso o cambiar a un nuevo empleo. <b>La oferta de aprendizaje es muy amplia y estas decisiones tendrán gran impacto en la capacidad de los aprendices para superar todos estos cambios.</b> 
            .col-lg-5
              figure
                img(src='@/assets/curso/t1-i2.png', alt='estudiante en una mesa manipulando un brazo robótico con un control remoto')
    .row.mb-5
      .col-lg-2
        figure
          img(src='@/assets/curso/t0-i12.svg' alt='icono decorativo')
      .col-lg-10
        p.mb-5  Por lo leído hasta aquí, <b>se concluye que la actualidad demanda de los instructores y aprendices un conjunto de habilidades y competencias basadas en las nuevas condiciones que manifiesta la sociedad.</b> Y para ello la educación STEM responde a estos desafíos mediante la integración de la ciencia-tecnología-ingeniería-matemáticas para una economía próspera y una sociedad segura y saludable. Con la intención de identificar algunas <b>habilidades necesarias en los instructores y aprendices,</b> se invita a explorar el siguiente recurso de aprendizaje. Adelante.
    
    figure
      img(src='@/assets/curso/t1-inf1.svg', alt='estudiante en una mesa manipulando un brazo robótico con un control remoto')




  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
