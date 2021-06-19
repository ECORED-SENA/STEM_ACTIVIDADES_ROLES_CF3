<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  2
      h1 Habilidades clave de la era digital y complementarias
    .row.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/t2-ic1.svg', alt='mujer trabajando sentada frente al computador')
      .col-lg-8
        p.mb-4  Las habilidades digitales se definieron como la mezcla de conductas, conocimientos técnicos especializados y experiencias prácticas del siglo XXI. Esta definición considera las habilidades digitales como un proceso dinámico, que se reformula periódicamente para responder a una realidad temporal y espacial determinada. Las habilidades digitales deben partir de las tendencias tecnológicas que establecen las necesidades de inclusión de la sociedad, con énfasis en las necesidades del mercado y, por lo tanto, las habilidades que serán requeridas por el sector productivo en Colombia y en el mundo. De conformidad a los estándares de la UIT, la Unesco y la Unión Europea se presenta la siguiente clasificación, las que se pueden observar en el siguiente recurso educativo. 

    //--TABS
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Habilidades funcionales" :icono="require('@/assets/curso/t2-ic2.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0.py-5
            p.mb-5 Son las habilidades psicomotoras primarias del ser humano y permiten el cuidado necesario de uno mismo y de su entorno generando bienestar; en lo digital, esta habilidad permite a los ciudadanos las destrezas necesarias para la manipulación de equipos.      
          .col-md-4
            figure
              img.h210(src='@/assets/curso/t2-ic6.svg', alt='imagen decorativa')
              
      .py-4.py-md-5(titulo="Alfabetización digital" :icono="require('@/assets/curso/t2-ic3.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0.py-5
            p.mb-5 Estas habilidades se caracterizan porque permiten a las personas comunicarse y colaborar en ambientes digitales y en la creación de contenidos digitales.  
          .col-md-4
            figure
              img.h210(src='@/assets/curso/t2-ic7.svg', alt='imagen decorativa')
        
      .py-4.py-md-5(titulo="Programación y codificación" :icono="require('@/assets/curso/t2-ic4.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0.py-5
            p.mb-5 Estas habilidades permiten a los aprendices desarrollar una  serie y repeticiones complejas en ambientes heterogéneos para resolver procesos de automatización en el contexto del software.    
          .col-md-4
            figure
              img.h210(src='@/assets/curso/t2-ic8.svg', alt='imagen decorativa')

      .py-4.py-md-5(titulo="Profesional en TIC" :icono="require('@/assets/curso/t2-ic5.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0.py-5
            p.mb-5 Son habilidades especializadas y exigidas por el mercado. Estas contribuyen a el fortalecimiento de las competencias de los trabajadores y emprendedores.     
          .col-md-4
            figure
              img.h210(src='@/assets/curso/t2-ic9.svg', alt='imagen decorativa')
    .row.mb-5
      .col-lg-5
        figure
          img.h210(src='@/assets/curso/t2-i1.png', alt='Pareja sentanda frente al computador analizando códigos digitales')
      .col-lg-7
        p.mb-5  Ahora, fuera de las habilidades digitales es necesario hablar de las habilidades complementarias presentes en una sociedad conectada y que surgen debido a la automatización de procesos y demanda el desarrollo de aprendices altamente resilientes en entornos complejos. Por tal motivo, dichas habilidades deben adquirirse de forma paralela y considerar el aprendizaje para la vida, el desarrollo de pensamiento crítico, creatividad, innovación, flexibilidad, adaptabilidad, conciencia de sí mismo y capacidad de relacionarse ¿qué habilidades se podrían desarrollar para definir su rol en el contexto de la educación STEM? La mejor respuesta a esta pregunta es actuar ante la creación de ambientes que ayuden a los aprendices a desarrollar proyectos de vida coherentes con sus intereses y que ayuden al desarrollo de la región ante los retos del presente siglo.
    .row.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4
          .row
            .col-lg-2
              figure
              img(src='@/assets/curso/t2-ic10.svg', alt='icono decorativo')
            .col-lg-10
              p.mb-4  Con el surgimiento de la Tecnologías de la Información y Comunicación se ha diversificado la economía en relación con los factores tradicionales de producción. A estos se les suma el conocimiento como factor de prosperidad y una opción para mejorar la calidad de vida de las personas. Por ello, las instituciones de educación deben repensar las habilidades y conocimientos que ayuden a los instructores y aprendices a resolver los problemas de su contexto. En este sentido se sugiere leer el texto Marco de habilidades digitales (2019), en el que podrá comprender las habilidades digitales. Adelante. 
                .row
                  .col-lg-8
                    a.anexo.mb-4.mb-lg-0(href="https://www.gob.mx/cms/uploads/attachment/file/444450/Marco_de_habilidades_digitales_vf.pdf" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p <b>Enlace web.</b> Marco de Habilidades Digitales. Marzo de 2019


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
