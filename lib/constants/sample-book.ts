import { Book, PageContent } from "@/lib/types/book";

// Sample book with per-chapter chatbot + form (5 questions)
export const sampleBook: Book = {
  id: "creando-conciencia-ujat-2025",
  title: "UJAT 2025: Transformando vidas y sociedad a través de la ciencia",
  author: "Dr. José Ramón Laines Canepa",
  year: 2030,
  cover: {
    type: "cover",
    title: "UJAT 2025: Transformando vidas y sociedad a través de la ciencia",
    isBookCover: true,
  },
  authors: {
    type: "authors",
    title: "Autores y Coautores",
    authors: [
      {
        name: "Dr. José Ramón Laines Canepa",
        role: "Editor y Autor Principal",
        affiliation: "Universidad Juárez Autónoma de Tabasco",
        bio: `<p>Doctor en Ciencias en Ecología y Manejo de Sistemas Tropicales con más de 20 años de experiencia en investigación y docencia. Coordinador del programa "Creando Conciencia" en Radio UJAT, dedica su trabajo a la divulgación científica y la vinculación universidad-sociedad.</p>`,
      },
      {
        name: "Dr. José Roberto Hernández Barajas",
        role: "Coautor y Conductor",
        affiliation: "Universidad Juárez Autónoma de Tabasco",
        bio: `<p>Doctor en Química. Investigador y divulgador científico comprometido con la comunicación efectiva de la ciencia. Co-conductor del programa "Creando Conciencia", especializado en hacer accesible el conocimiento científico a la comunidad.</p>`,
      },
      {
        name: "Dr. José Aurelio Sosa Olivier",
        role: "Coautor - Vox Populi",
        affiliation: "Universidad Juárez Autónoma de Tabasco",
        bio: `<p>Doctor en Ciencias en Ecología y Manejo de Sistemas Tropicales. Responsable de la Vox Populi del programa.</p>`,
      },
      {
        name: "Kenia Leticia Utrera Cabrera",
        role: "Coautor - Cápsulas Científicas",
        affiliation: "Universidad Juárez Autónoma de Tabasco",
        bio: `<p>Ingeniera Ambiental. Contribuye con cápsulas informativas que enriquecen el diálogo entre la ciencia y la sociedad en Radio UJAT.</p>`,
      },
      {
        name: "MC. Sergio Vázquez Noriega",
        role: "Productor del Programa Creando Con Ciencia: La ciencia que transforma",
        affiliation: "Universidad Juárez Autónoma de Tabasco",
        bio: `<p>Maestro en Ciencias de la Comunicación. Productor del Programa Creando Con Ciencia.</p>`,
      },
      {
        name: "Lic. Yara García Robles",
        role: "Productora del Programa Creando Con Ciencia: La ciencia que transforma",
        affiliation: "Universidad Juárez Autónoma de Tabasco",
        bio: `<p>Licenciada en Ciencias de la Comunicación. Productora del Programa Creando Con Ciencia.</p>`,
      },
      {
        name: "MC. David Alberto Laines Vázquez",
        role: "Coautor - Editor Técnico",
        affiliation: "Instituto Técnologico de Monterrey",
        bio: `<p>Maestro en Ciencias de la Computación. Editor Técnico del libro.</p>`,
      },
      {
        name: "MIA. Jesús Manuel Carrera Velueta",
        role: "Coautor - Coeditor Técnico",
        affiliation: "Universidad Juárez Autónoma de Tabasco",
        bio: `<p>Maestro en Inteligencia Artificial. Coeditor Técnico del libro. Investigador y divulgador científico comprometido con la comunicación efectiva de la ciencia. Co-conductor del programa "Creando Conciencia", especializado en hacer accesible el conocimiento científico a la comunidad.</p>`,
      },
    ],
  },
  acknowledgments: {
    type: "acknowledgments",
    title: "Agradecimientos",
    content: `
      <p>Este libro es el resultado de un esfuerzo colectivo que refleja el compromiso de la Universidad Juárez Autónoma de Tabasco con la ciencia, la educación y el desarrollo social.</p>
      <br>
      <p>Agradecemos profundamente al <strong>Lic. Guillermo Narváez Osorio</strong>, Rector de la UJAT, por su visión transformadora y su apertura para compartir con nuestra audiencia los proyectos que están cambiando vidas en Tabasco.</p>
      <br>
      <p>A la <strong>Dirección General de Comunicación Social de la UJAT</strong> y a todo el equipo de <strong>Radio UJAT 96.1 FM</strong>, por facilitar el espacio para que "Creando Conciencia" sea una realidad cada miércoles.</p>
      <br>
      <p>A los <strong>investigadores, docentes y estudiantes</strong> de la UJAT que con su trabajo diario demuestran que la ciencia con sentido social no es un discurso, sino una práctica constante.</p>
      <br>
      <p>A las <strong>comunidades de Tabasco</strong> —productores, apicultores, emprendedores— que confían en la universidad como aliada para resolver sus desafíos.</p>
      <br>
      <p>Y especialmente a <strong>ti, lector</strong>, por tu interés en conocer cómo la ciencia puede transformar vidas y sociedad. Este libro es también tuyo.</p>
      <br>
      <br>
      <p className="mt-8 italic">— El equipo de "Creando Conciencia"</p>`,
  },
  index: {
    type: "index",
    title: "Índice",
  },
  chapters: [
    {
      title: "Invitado: Lic. Guillermo Narvaez Ozorio, Rector de la UJAT",
      pages: [
        {
          type: "cover",
          title: "Invitado: Lic. Guillermo Narváez Osorio, Rector de la UJAT",
        } as PageContent,
        {
          type: "biography",
          authorName: "Lic. Guillermo Narváez Osorio",
          image: "/lic_guillermo_narvaez.jpeg",
          content: `
            <p>El Lic. Guillermo Narvaez Osorio fue electo para un segundo período como rector de la Universidad Juárez Autónoma de Tabasco el 22 de enero de 2024, para ejercer el cargo hasta enero del año 2028; tras una primera gestión que comprendió desde enero del año 2020 hasta enero del 2024.</p>
            <br>
            <p>Cursó sus estudios profesionales en la UJAT, titulándose el 30 de enero de 1979. Posteriormente, completó cursos de capacitación, actualización y diplomados en materias como: derecho notarial y derecho administrativo.</p>
            <br>
            <p>Cuenta con una vasta experiencia laboral a lo largo de casi cuatro décadas de ejercicio profesional. Ha sido profesor investigador de tiempo completo de la Escuela de Derecho en nuestra Alma Máter y director de la División Académica de Ciencias Sociales y Humanidades.</p>
            <br>
            <p>Como parte de su trayectoria en el servicio público, se ha desempeñado como procurador de la Juventud del CREA-Tabasco; asesor jurídico de la Secretaría de Comunicaciones Asentamientos y Obras Públicas (SCAOP); director de Administración del Instituto de Vivienda de Tabasco.</p>
            <br>
            <p>De igual manera, ostentó el cargo de presidente municipal en su natal Tacotalpa; fue diputado local en LIV Legislatura del Congreso del Estado de Tabasco y fue notario público número 28 de 1995 a 2018.</p>
            <br>
            <p>Asimismo, destaca su paso como magistrado presidente de Tribunal Superior de Justicia del Estado de Tabasco, en el periodo 2000 - 2006 y Secretario de Educación de Tabasco en el año 2019.</p> `,
        } as PageContent,
        {
          type: "text",
          content: `<h1><strong>Introducción del Capítulo</strong></h1>
          En el umbral del año 2025, la Universidad Juárez Autónoma de Tabasco (UJAT) se consolida como un actor transformador en el escenario científico, social y educativo de México.
          Bajo el liderazgo del rector Guillermo Narváez Osorio, esta casa de estudios ha orientado sus esfuerzos hacia una visión de ciencia con sentido social, donde la formación académica se entrelaza con la solución de problemas reales.
          En esta conversación inspiradora en el programa <strong>"Creando Conciencia"</strong>, se nos revela cómo la UJAT, a través de investigación, innovación y compromiso social, busca no solo formar profesionales, sino forjar agentes de cambio capaces de transformar su entorno.
          Este capítulo es un testimonio de esa misión.`,
        } as PageContent,
        {
          type: "text",
          content: `<h1><strong>Transcripción Editada de la Entrevista</strong></h1>
          En una tarde de ciencia y reflexión, los micrófonos de Radio UJAT recibieron al rector Guillermo Narváez Osorio.
          Acompañado por los doctores José Ramón Laines Canepa y José Roberto Hernández Barajas, la conversación fluía con cercanía, claridad y un tono visionario.
          “La universidad es motor de cambio”, fue la premisa que marcó el diálogo.</br>
          
          Narváez inició reconociendo los grandes retos del presente: consolidar la infraestructura científica, reforzar los laboratorios y extender el impacto de la universidad hacia el campo y la industria local.
          Pero el cambio no solo se mide en edificios. Lo esencial es el estudiante.
          Por ello, destacó la importancia de los programas como el verano de la ciencia y “Mujeres en la Ciencia”, acompañados de una estrategia: el ejemplo.</br>
          
          A través del testimonio de jóvenes que ya han vivido experiencias de intercambio, el rector apuesta por inspirar a otros: “Sí se puede. Tenemos el talento”.
          Así lo demuestran proyectos emblemáticos con productores de chile en Balancán y la Asociación de Apicultores, donde la ciencia de la UJAT ya transforma comunidades.</br>
          
          La universidad, insistió, no puede quedarse en sus claustros.
          “Es hora de salir, de devolverle a la sociedad lo que ésta aporta”, afirmó con convicción.
          Desde el desarrollo de secadores solares hasta la cría tropicalizada de abejas reinas, las investigaciones buscan impacto real, inmediato y sustentable.</br>
          
          Los conductores preguntaron entonces por la fuga de talentos.
          Narváez fue claro: no se trata de obligar a nadie a quedarse, sino de fomentar un profundo sentido de pertenencia.
          “No podemos cortar las alas, pero sí motivar a que regresen a impactar positivamente”.</br>
          
          El programa continuó hilando testimonios de estudiantes, ejemplos de éxito internacional —como proyectos reconocidos en Brasil, Harvard y Japón— y reflexiones sobre el papel de los investigadores en la universidad.
          Destacó especialmente el caso del “Mapa Háptico”, una innovación surgida de sinergias internas que alcanzó proyección global.</br>
          
          El rector cerró su intervención con esperanza.
          Desde el cultivo de perlas hasta la creación del Centro Universitario de Biotecnología de Reproducción Bovina, cada proyecto refleja la visión de una UJAT que trasciende aulas y laboratorios.
          “La ciencia con sentido social no es un discurso, es una promesa”, concluyó el Dr. José Ramón Laines  Canepa.`,
        } as PageContent,
        {
          type: "chatbot",
          title: "Reflexiona con Nosotros",
          config: {
            persona:
              "You are a science explainer: clear, engaging, and practical.",
            instruction: `Enfócate en ¿Cómo puede una universidad pública convertirse en un motor de transformación social a través de la ciencia? 
Analiza los casos presentados por el rector de la UJAT y compáralos con experiencias similares en América Latina.`,
          },
        } as PageContent,
        {
          type: "form",
          title: "Punto de Encuentro",
          fields: [
            {
              type: "text",
              id: "q1",
              label:
                "¿Cuál es el papel que tú, como estudiante, docente o ciudadano, puedes desempeñar para que la ciencia, creada en la UJAT, con sentido social transforme tu entorno?",
              multiline: true,
            },
          ],
        } as PageContent,
        {
          type: "audio",
          url: "/entrevista-1.mp3",
          htmlContent: `
  <p><strong>LOCUTOR:</strong> Bienvenidos, donde cada descubrimiento abre una puerta, cada idea
  inspira un cambio. Aquí, la ciencia no duerme. Se transforma. Creando conciencia, la
  ciencia que transforma</p></br>

  <p><strong>DR. JOSÉ RAMÓN LAINES CANEPA:</strong> Muy buenas tardes. Tengan todos ustedes.
  Estamos en el 96.1 de FM por Radio UJAT, la voz universitaria. Bienvenidos a "Creando
  Conciencia", el programa que te conecta con el fascinante mundo de la ciencia, la
  tecnología y el medio ambiente para construir un futuro más sustentable. Soy el doctor
  JOSÉ RAMÓN LAINES CANEPA y me acompaña en cabina.</p></br>

  <p><strong>DR. JOSÉ ROBERTO HERNANDEZ BARAJAS:</strong> Roberto Hernandez Barajas, buenas tardes,
  Ramón, muy buenas tardes a toda la audiencia de Radio UJAT.</p></br>

  <p><strong>DR. JRLC:</strong> Gracias por estar con nosotros para que juntos
  conozcamos lo más relevante de la ciencia, pensar de manera crítica y actuar de forma
  consciente en el cuidado de nuestro planeta. Así que prepárate, recuerda puedes
  interactuar con nosotros a través de nuestras redes sociales y ser parte activa de esta
  comunidad de curiosos y apasionados por la ciencia.</p></br>

  <p>Iniciamos en "Creando Conciencia". El día de hoy, nuestro tema es “UJAT 2025:
  Transformando vidas y sociedad a través de la ciencia”. ¿Y qué creen? Tenemos invitado
  de lujo, súper lujo. Tenemos a la máxima autoridad de la Universidad Juárez Autónoma
  de Tabasco. Al licenciado Guillermo Narváez Osorio, quien es rector. Bienvenido,
  rector, buenas tardes, gracias por estar con nosotros.</p></br>

  <p><strong>RECTOR LIC. GUILLERMO NARVAEZ OSORIO:</strong> Buenas tardes, buenas tardes a ambos. Es un
  honor estar aquí con ustedes compartiendo.</p></br>

  <p><strong>DR. JRLC:</strong> Bien, vamos a empezar, le voy a comentar una
  breve reseña de nuestro invitado. Nos costó mucho trabajo hacerla, tiene un amplio
  currículum. El licenciado Guillermo Narváez Osorio fue electo para un segundo
  periodo como rector de la Universidad Juárez Autónoma de Tabasco el 22 de enero de
  2024, para ejercer el cargo hasta enero del año 2028, tras una primera gestión que
  comprendió desde enero de 2020 hasta enero de 2024. Cursó sus estudios
  profesionales en la UJAT y se tituló el 30 de enero de 1979. Posteriormente, completó
  cursos de capacitación, actualización y diplomados en materias como derecho
  notarial y derecho administrativo.</p></br>

  <p>Cuenta con una vasta experiencia laboral a lo largo de 4 décadas de ejercicio
  profesional. También ha sido profesor e investigador de tiempo completo en la escuela
  de derecho en nuestra alma máter y director de la División Académica de Ciencias
  Sociales y Humanidades. Como parte de su trayectoria y del servicio público, se ha
  desempeñado como procurador de la juventud. En CREA Tabasco, fue asesor jurídico
  de la Secretaría de Comunicaciones, Asentamientos y Obras Públicas y también
  director de administración del Instituto de Vivienda y Tabasco. De igual manera,
  ostentó el cargo de presidente municipal en su natal Comalcalco. Fue diputado local
  en la 54 Legislatura del Congreso del Estado de Tabasco y fue notario público número
  28 de 1995 a 2018. Asimismo, destaca su paso como magistrado presidente del
  Tribunal Superior de Justicia del Estado de Tabasco en el periodo 2002-2006 y fue
  secretario de educación en el estado de Tabasco en el año 2019.</p></br>

  <p>Le recuerdo el título del tema, “UJAT 2025: Transformando vidas y sociedad a través de
  la ciencia”. Rector, nuevamente, bienvenido, calentamos motores, vamos a empezar
  con este primer bloque y nos gustaría saber, rector, sabemos que la Universidad Juárez
  es la universidad más importante, una de las más importantes del sureste mexicano.
  ¿Cuáles son de sus principales retos que enfrenta la UJAT en este 2025 que estamos
  iniciando y que estamos muy agradecidos que esté con nosotros en este programa?
  ¿Qué retos enfrentamos para seguir siendo líder en investigación científica en la
  región?</p></br>

  <p><strong>RECTOR LIC. GNO:</strong> Bueno, yo creo que lo primero es consolidar
  parte de lo que se ha venido haciendo en los últimos años y a partir de esa
  consolidación, empujar este año y los años que quedan en la de los proyectos que
  tengan que ver con las áreas de producción, con las áreas que tengan que ver con el
  apoyo hacia el campo y la industria tabasqueña. Y fundamentalmente, todo a partir de
  la reactivación de nuestros principales laboratorios de investigación.</p></br>

  <p><strong>DR. JRLC:</strong> Bien, rector, en la universidad la razón de ser son
  los estudiantes. Eso se dice en todos los eventos, en muchos lados y usted ha
  considerado qué estrategias para que más estudiantes participen en programas, por
  ejemplo, en el verano de investigación científica. Ahora, y tenemos programas de
  mujeres, mujeres en la ciencia. ¿Qué estrategia está usted implementando?</p></br>

  <p><strong>RECTOR LIC. GNO:</strong>  Mira, yo creo que la difusión es muy importante
  de todos estos eventos que tú correctamente señalas, eh, para que los jóvenes vayan
  adquiriendo mayor experiencia y vayan conociendo otras visiones de otras
  universidades. No solamente del sureste o del país, sino a nivel Latinoamérica y a nivel
  mundial. Y eso la única manera que lo podrán lograr es a través de las estancias
  académicas, los intercambios, veranos, todo lo que buscamos es que ellos, difundir
  esto para que ellos puedan tener acceso a esta posibilidad de conocer nuevos campus
  y nuevas formas de investigar. Entonces, ese sería fundamentalmente el reto, que es el
  de difundir y la difusión, fundamentalmente, la estamos haciendo, eh, con el ejemplo.
  No hay mejor manera de poder enseñar, se puede enseñar con libros, textos, pero la
  mejor manera de enseñar es el ejemplo. Y para ello, pues estamos utilizando a todos
  aquellos jóvenes que han vivido esta experiencia y los estamos invitando a que
  compartan con sus propios compañeros todas las bondades de este tipo de
  experiencia y entonces los jóvenes digan, bueno, sí se puede, sí podemos hacerlo, sí
  tenemos el talento, sí tenemos la capacidad, sí tenemos los instrumentos para poder
  realizar este tipo de actividades.</p></br>

  <p><strong>DR. JRLC:</strong> Qué interesante entrevista estamos teniendo con
  nuestra máxima autoridad, el licenciado Guillermo Narváez Osorio. Pero tenemos que
  ir a un corte promocional y enseguida regresamos en "Creando Conciencia, la ciencia
  que transforma".</p></br>

  <p><strong>LOCUTOR:</strong> "Creando Conciencia". Un momento, regresamos. Continuamos con "La
  ciencia que transforma".</p></br>

  <p><strong>DR. JOSÉ ROBERTO HERNÁNDEZ BARAJAS:</strong> Regresamos a "Creando Conciencia, la ciencia
  que transforma". A continuación, vamos a presentar una cápsula informativa que fue
  preparada por Kenia Leticia Utrera Cabrera.</p></br>

  <p><strong>KENIA LETICIA UTRERA CABRERA:</strong> ¿Cómo se transforma una universidad en un motor
  de cambio para la sociedad? Hoy en día, la Universidad Juárez Autónoma de Tabasco,
  UJAT, es un referente de excelencia académica, científica y social. Con la visión de su
  rector, el licenciado Guillermo Narváez Osorio, la UJAT continúa posicionándose como
  un líder en investigación científica, fomentando la ciencia y la educación para seguir
  transformando positivamente vidas y comunidades.</p></br>

  <p>La UJAT enfrenta grandes retos este año 2025, desde aumentar la participación en
  proyectos con impacto global hasta fomentar la equidad de género en programas
  como “Mujeres en la Ciencia”. De acuerdo con el rector, involucrar a los estudiantes en
  la investigación no solo enriquece su formación, sino que también crea soluciones
  reales para problemas locales y globales. Esto se refleja en los más de 200 alumnos
  que participaron en programas de intercambio en 2024, quienes regresaron con
  nuevas perspectivas y herramientas para contribuir al desarrollo de su comunidad. El
  compromiso de la UJAT no se limita a la formación académica, también busca generar
  investigaciones con sentido social. Ejemplo de ello son proyectos que abordan temas
  como el cambio climático, la salud pública y la economía circular, cuyos resultados ya
  han sido reconocidos internacionalmente en países como Japón, Brasil y Estados
  Unidos.</p></br>

  <p>Además, con el 60% de los investigadores del Sistema Estatal de Investigadores
  perteneciendo a la UJAT, la universidad reafirma su liderazgo en la región, demostrando
  que la ciencia no solo responde preguntas, sino que mejora la calidad de vida de las
  personas. La retención de talento es otro objetivo prioritario. Ofrecer oportunidades
  dentro de la UJAT, desde proyectos innovadores hasta infraestructura de vanguardia,
  es clave para evitar la fuga de cerebros y consolidar a la universidad como un espacio
  donde los jóvenes no solo estudian, sino que sueñan, crean y transforman.</p></br>

  <p>La UJAT no es solo un espacio de aprendizaje, es un motor de cambio para Tabasco y la
  región. Con cada estudiante que decide quedarse y construir un futuro mejor, con cada
  proyecto que trasciende fronteras, reafirmamos que la educación y la ciencia son
  pilares de transformación social. Sigamos creyendo en nuestra capacidad de cambiar
  el mundo desde nuestra universidad. Soy Kenia Utrera, le mando un saludo al rector y
  nos escuchamos en la próxima emisión.</p></br>

  <p><strong>DR. JRHB:</strong> Regresamos a "Creando Conciencia, la ciencia
  que transforma". Licenciado Narváez, es un tema muy importante para la sociedad el
  impacto social que tiene la ciencia que se desarrolla en la universidad. Al respecto, nos
  gustaría saber qué significa para usted y para la universidad generar investigaciones
  con sentido social y cómo esto beneficia a la comunidad.</p></br>

  <p><strong>RECTOR LIC. GNO:</strong> Claro, mira, eh, si partimos del hecho de que
  somos la máxima Casa de Estudios, si partimos del hecho de que somos generadores
  de conocimiento y partimos también del hecho de que, eh, traemos una serie de
  rezagos históricos en cuanto a la ciencia, en cuanto a la difusión de las ciencias, en
  cuanto a las tecnologías, pues es necesario que la universidad pueda salir de ese de
  ese claustro en el que ha estado durante muchos años.</p></br>

  <p>No digo, si bien o mal, eso ya es una evaluación que le corresponde a otras personas
  hacerla, no a nosotros, pero sí salir de estos claustros y poder aterrizar. Imagínate
  cuántos campesinos hay que podrían ver solucionados los problemas agropecuarios
  que enfrentan si nuestros investigadores pudieran poner su conocimiento al servicio
  de ellos. Imagínate cuántos pequeños emprendedores podrían, eh, ampliar sus
  campos de trabajo si nuestros investigadores ponen a disposición parte de lo que se
  hace. Y te doy 2 o 3 ejemplos sencillos. Eh, estamos trabajando con productores de
  chile tabaquero en la parte de Balancán. Eh, son productores de zonas agrícolas
  pobres en las que, y se resuelven sus problemas con sus propias armas, como dice el
  dicho popular, se rascan con sus propias uñas. Entonces, hay problemas de
  productividad.</p></br>

  <p>Hay problemas de fungosis o hay problemas de contaminación. Ellos acudieron con
  nosotros. Nosotros generamos un grupo de investigación. Se empezó a apoyarlos, se
  empezó desde la selección de la semilla y se logró que, en un año, el año pasado, su
  producción de chile pasara de 1 t/a a 2 t/ha. Pero si a eso le anexas que ellos tenían
  problemas porque es un producto perecedero y que el coyote lo que juega con esto
  para poder bajar los precios, porque dice, bueno, o me lo vendes o se echa a perder.
  Entonces, ¿qué hacen ellos? Ellos secan el chile, lo secan en secaderos rústicos. Hay
  una contaminación, ya es un producto que no puede competir en un mercado que
  tiene una serie de barreras de este carácter. Y bueno, pues ahí nosotros, lo que hicimos
  fue apoyarlos con el diseño, eh, por parte de ingeniería y arquitectura, con el diseño de
  secadores eléctricos y además si no hay electricidad en alguna zona, pues se
  diseñaron secadores con paneles solares.</p></br>

  <p>El otro que es el que tiene que ver ahora con lo que estamos haciendo con el
  laboratorio de producción de abeja reina. También lo atendimos, una demanda de la
  Asociación de Apicultores, quienes ellos nos señalaban de que tienen serios
  problemas para, eh, conseguir la abeja reina, porque no se aclimata, porque se muere,
  por muchas cosas. Vamos, empezamos a trabajar, independientemente de que no sé,
  ya no contamos con el laboratorio, ahora lo estamos construyendo. Pero se empezó a
  trabajar con la finalidad de encontrar una, un prototipo de abeja que fuera una línea
  que queríamos llamar UJAT con la finalidad de crear una abeja ya adaptada,
  tropicalizada y que sea de utilidad para los apicultores.</p></br>

  <p>Pues lo que nosotros hemos dicho desde un inicio es que la universidad tiene que
  recuperar su compromiso social. Qué significa el compromiso social, que somos una
  universidad pública que los recursos con los que se pagan los salarios de los maestros,
  con los que se pagan los salarios de los trabajadores de intendencia, administrativos,
  hasta el rector, provienen del erario estatal y federal. Y que, por lo tanto, tenemos el
  compromiso de devolverle a la sociedad eso que aporta vía impuestos, devolvérselos
  en conocimientos para que ellos puedan, eh, tener mejores posibilidades de
  desarrollo.</p></br>

  <p><strong>DR. JRHB:</strong> Y justo respecto, licenciado Narváez, ¿cómo
  podemos motivar que tanto estudiantes como profesores precisamente participen en
  el desarrollo de este tipo de proyectos encaminados a resolver problemas locales y
  globales?</p></br>

  <p><strong>RECTOR LIC. GNO:</strong>  Sí, ahí hay que, ahí, se tiene que trabajar mucho
  con crear sentidos de pertenencia, con crear, trabajar mucho en lo que se llama
  conciencia social, eh, que los, eh, los maestros entiendan exactamente cuál es el
  papel que les toca jugar, que si hoy somos profesionistas es porque existió una
  universidad, en muchos de los casos, en el 90% de los casos, una universidad pública
  que nos ayudó a formar, que nos ayudó a tener hoy las herramientas con que nos han
  permitido construir un nombre o un patrimonio, este, o una estabilidad laboral y que lo
  mínimo que podemos hacer es ser agradecidos y tratar de apoyar a estas, eh,
  universidades para que puedan realizar esa labor de carácter social.</p></br>

  <p><strong>DR. JRHB:</strong> Le agradecemos mucho sus respuestas,
  licenciado Narváez, por cuestiones de tiempo, bueno, tenemos que ir a un corte
  promocional y enseguida regresamos a "Creando Conciencia".</p></br>

  <p><strong>LOCUTOR 1:</strong> "Creando Conciencia". Un momento, regresamos. Continuamos con "La
  ciencia que transforma".</p></br>

  <p><strong>DR. JOSÉ RAMÓN LAINES CANEPA:</strong> Regresamos a "Creando Conciencia, la ciencia
  que transforma" y bien, ¿qué plática tan interesante estamos teniendo con el rector de
  la universidad Juárez Autónoma de Tabasco? Hemos observado que usted ha, se ha
  comprometido inclusive públicamente a fomentar el talento joven y en el 2024, pues
  hubo cerca de 200 alumnos que participaron en programas de intercambio académico.
  Rector, ¿qué impacto tiene esto en la vida de los estudiantes y en la universidad?
  ¿Podría platicarnos al respecto?</p></br>

  <p><strong>RECTOR LIC. GNO:</strong> Sí, claro. Imagínate jóvenes que están llenos de
  emociones, de sentimientos, llenos de esperanzas y que de pronto tienen la
  oportunidad de poder conocer otros ambientes, de poder estar en universidades muy
  importantes, con un prestigio internacional, pues eso les cambia la visión que tienen
  respecto de la ciencia y respecto de lo que ellos son dentro de la universidad. Y yo estoy
  convencido de que todos estos jóvenes que han tenido la oportunidad, ya sea por
  intercambio o porque se lo han ganado, y que tienen la oportunidad de acudir a otras
  universidades, pues entonces que regresen y regresan con esa visión distinta, nueva,
  fresca, en la que dejan de ser simples actores de reparto y se convierten en actores
  principales de su de su universidad, se convierten en verdaderos agentes de cambio.
  Entonces eso es lo que buscamos realmente, que nuestros jóvenes, eh, puedan tener
  una participación y una formación más solidaria y comprometida.</p></br>

  <p><strong>DR. JRLC:</strong> Qué interesante, eh, rector, de estos actores
  importantes que están interactuando en el devenir de la universidad, pues, eh, van a
  terminar sus carreras, van a terminar su licenciatura, su maestría, su doctorado. Y,
  pues hay necesidades de detener esos talentos y ofrecer oportunidades para que sigan
  creciendo en la universidad. ¿Ha considerado esto, rector, y nos podría platicar si ha
  pensado en algunas acciones para evitar lo que siempre se dice, la fuga de talento? El
  talento se va cuando usted ha dicho aquí en las preguntas anteriores. Necesitamos
  que la sociedad de Tabasco sienta eso que se está formando ahí en UJAT y lo que le
  está devolviendo al estado, lo que el estado nos ha dado.</p></br>

  <p><strong>RECTOR LIC. GNO:</strong> Sí, mira. Uno de los graves problemas de los
  países subdesarrollados es la fuga de talento. ¿Por qué los talentos se van? Porque los
  países desarrollados les ofrecen mejores expectativas de desarrollo profesional,
  mejores posibilidades de construir un patrimonio o de poder ir ascendiendo en la
  cadena o en la escalera de laboral y entonces ellos deciden, este, marcharse de sus
  países. Y también no podíamos nosotros ser egoístas de decirle a los jóvenes, "te
  tienes que quedar a la fuerza, tienes que devolver", no. Porque no le podemos cortar
  las alas a los pájaros, hay que dejarlos que vuelen. Lo que hay que hacer es irles
  creando un sentido de pertenencia, un sentido de conciencia social para que ellos
  digan, "bueno, yo creo que tengo que devolver un poco de lo mucho que he recibido y
  me quedo un tiempo, no para toda la vida, pero me quedo un tiempo con la finalidad
  de poder impactar en la vida de otros jóvenes". Pero sí, es muy difícil, no es un
  problema, no es un problema que sea propio de la de la Universidad Juárez Autónoma
  de Tabasco. Es un problema que impacta a la sociedad tabasqueña en todo su mundo.</p></br>

  <p><strong>DR. JRLC:</strong> Qué interesante entrevista estamos llevando.
  Pero tenemos que ir a un corte promocional y enseguida regresamos a "Creando
  Conciencia, la ciencia que transforma".</p></br>

  <p><strong>LOCUTOR:</strong> "Creando Conciencia". Un momento, regresamos. Continuamos con "La
  ciencia que transforma".</p></br>

  <p><strong>DR. JOSÉ RAMÓN LAINES CANEPA:</strong> Regresamos a "Creando Conciencia, la ciencia
  que transforma" y bien, qué plática tan interesante estamos teniendo, conociendo, eh,
  de viva voz del rector, cómo ve la investigación, cómo ve el crecimiento de la ciencia en
  la universidad y bueno, también sabemos la Universidad Juárez Autónoma de Tabasco
  es líder en investigación y tiene muchos profesores en el Sistema Nacional de
  Investigadores. Por ejemplo, tenemos el más de 60% de los miembros del Sistema
  Estatal de Investigadores pertenece a la UJAT. ¿Cómo es que se mantiene esta
  excelencia científica en la universidad?</p></br>

  <p><strong>RECTOR LIC. GNO:</strong> Yo creo que ese es un mérito de los maestros.
  Es un mérito de todos y cada uno de ellos, quienes se preocupan por su formación, por
  su preparación para estar dentro de este, eh, padrón estatal de investigadores. Y
  nosotros lo que hacemos simplemente es tratar de acercarles las herramientas que
  ellos necesiten para que puedan traducirse eso en investigaciones, en artículos
  científicos, elementos que les permitan a ellos poder no solamente pertenecer al
  sistema, sino lo más importante, mantenerse ya dentro de él. Entonces, yo creo que es
  un mérito que les corresponde a todos y cada uno de los maestros de esta Universidad
  Juárez Autónoma de Tabasco.</p></br>

  <p><strong>DR. JRHB:</strong> Y justamente, eh, licenciado Narváez, en lo
  pasado nos comentaba que hay 2 proyectos como ejemplo, 2 proyectos. Uno que tiene
  que ver con productores de chile y otro proyecto relacionado con la Asociación de
  Apicultores, que son los que están resolviendo problemas locales. Pero debe haber
  más proyectos que en la actualidad se estén desarrollando en la universidad y que
  tienen ese potencial de obtener un reconocimiento no solamente local, sino también
  internacional, como el caso de Brasil, Harvard, Japón.</p></br>

  <p><strong>RECTOR LIC. GNO:</strong> Sí, claro. Bueno, tenemos jóvenes que son
  estandartes de la de la universidad. Durante el año pasado, en el caso de Brasil, es
  este, el profesor Beto, junto con una de sus estudiantes, que obtuvo, ganó el pase
  nacional al evento latinoamericano que se hizo en Recife en Brasil con un proyecto de
  investigación denominado “Mapa háptico”, en el cual al momento de obtener su pase,
  pues él sabía que tenía que enfrentarse con otras investigaciones de alto nivel y logró
  hacer una sinergia con investigadores de ingeniería y arquitectura, quienes lo
  apoyaron, lo asesoraron y entonces él pudo estar en este evento de Recife con un
  mayor bagaje y obtuvo allí no solamente el primer lugar, sino el reconocimiento al
  proyecto con mayor impacto social que le permitió obtener el pase a un evento a nivel
  mundial ahora a celebrarse en los meses, creo que de marzo o de abril en España.</p></br>

  <p>Pero también, bueno, pues está el caso, si bien no es de Harvard, los alumnos aquí del
  maestro y que lograron obtener también en el en el concurso de Enactus México,
  obtener su pase y obtener un reconocimiento que les permitía tener una pequeña
  estancia, al maestro Canepa y a sus 4 alumnas en la Universidad de Harvard y en la de
  MIT, entonces, bueno, pues ahí también es importante, porque tuvieron ellos la
  oportunidad de conocer estas, que son de las 2:00 universidades más prestigiosas a
  nivel mundial en lo que es la formación de emprendedores. Entonces, este, bueno, eso
  fue un hecho muy importante, el que ellos hayan logrado obtener su pase a través del
  proyecto que están trabajando, que bueno, pues el maestro Canepa, lo podría describir
  mejor que yo, que es que tiene que ver con la producción de tablas plásticas a partir
  de, eh, de plástico del reciclado, no. Entonces, bueno, ese es un proyecto que incluso
  nosotros, y él sabe, estamos este año, empujando para que se deje de ser un proyecto
  de un grupo de estudiantes y maestros, y convertirlo ya en un proyecto productivo en
  donde se pueda trabajar ya en la elaboración de tablas y otros productos a partir del
  plástico reciclado.</p></br>

  <p>Y el otro tiene que ver con un evento convocado por las NUIES, eh, en el que se
  convocaron a todas las universidades, las que quisieran participar, participaron, creo
  que 30, 30 y tantas universidades, más de 60 alumnos con pequeños proyectos, de ahí
  se escogieron 25, que fueron concentrados en Valle de Bravo y de ahí salieron 20
  jóvenes, que estuvieron en una estancia de 3 meses por una empresa japonesa de
  tecnología, Mira, eh, en precisamente en Japón. En ese evento, en la primera fase de
  preselección, diríamos, en donde participaron todos, más de 60 y se quedaron 25.
  Pues la UJAT fue la única universidad que obtuvo 2 proyectos, 2 proyectos aceptados y
  de esos 2 proyectos, uno que se aceptó es un joven de la División Académica de
  Tecnología de la Información y eh, hizo la estancia en Japón y no solamente hizo la
  estancia, sino que al final en la evaluación de productos, él obtuvo el reconocimiento
  al premio o al proyecto con mayor impacto social. Nosotros hemos platicado con él,
  con su director y vamos a tratar de poder llevarlo al campo de los hechos, pues,
  convertirlo ya en un proyecto productivo.</p></br>

  <p><strong>DR. JRHB:</strong> Es muy interesante ver que la investigación que
  se realiza en la universidad no solamente es reconocida con premios internacionales,
  sino que ahora, como él ha comentado, se van a convertir en ya no proyectos de
  investigación, ya no proyectos escolares, sino que llegarán a ser, eh, proyectos
  productivos.</p></br>

  <p><strong>RECTOR LIC. GNO:</strong> Sí, esa es la finalidad, pues, porque también no
  queremos quedarnos en la simple teoría, sino que lo que los muchachos hacen
  puedan ellos verlo concretado en proyectos productivos.</p></br>

  <p><strong>DR. JRHB:</strong> Le agradezco mucho la respuesta, señor
  rector, vamos a un corte promocional y enseguida regresamos a "Creando Conciencia".</p></br>

  <p><strong>LOCUTOR:</strong> "Creando Conciencia". Un momento, regresamos. Continuamos con "La
  ciencia que transforma".</p></br>

  <p><strong>DR. ROBERTO HERNANDEZ BARAJAS:</strong> Regresamos a "Creando Conciencia, la ciencia
  que transforma". A continuación, vamos a escuchar "Vox Populi", la voz del pueblo,
  preparada por el doctor José Aurelio Sosa Olivia.</p></br>

  <p><strong>JOSÉ AURELIO SOSA OLIVIA:</strong> En más de 66 años de antigüedad, ha sido un motor de
  desarrollo de la sociedad tabasqueña, tanto por su oferta educativa a nivel de
  licenciaturas y posgrados, en servicios educativos profesionales como cursos de
  idiomas, deportivos, culturales, odontológicos, entre otros. El nivel de los
  investigadores e investigaciones ha permeado en ser orientadores en el estudio de
  diversas problemáticas ambientales, agronómicas, sociales, económicas y de salud
  en la región. El impacto que han tenido algunos estudiantes y egresados en el
  desarrollo de investigaciones básicas y aplicadas, tanto en instituciones de gran
  prestigio a nivel internacional como nacional, al igual de la inserción laboral en
  diversos sectores económicos de la región por parte de nuestros egresados. ¿Algún
  familiar o conocido tuyo ha estudiado en la UJAT? De ser así, ¿cuál es tu percepción
  sobre la universidad?</p></br>

  <p><strong>ENTREVISTADO 1:</strong> Sí, tengo conocidos y ha dado sus referencias, que es una buena
  universidad. Se cuenta con buenas instalaciones, buena educación. Sí, ha sido muy
  diferente a otras.</p></br>

  <p><strong>ENTREVISTADO 2:</strong> Tengo muchos conocidos y familiares, los cuales han formado parte
  de esta Casa de Estudios. Sin embargo, los más importantes e influyentes para mí son
  mis padres, ya que no solamente fueron influyentes en el proceso de convertirse en
  profesionales, sino que durante su trayectoria académica conocieron personas que
  fueron muy importantes en su vida.</p></br>

  <p><strong>ENTREVISTADO 3:</strong> Sí, conozco personas que han estudiado allá en la universidad. Es
  una buena universidad, las personas que he conocido, pues, no todas, pero tienen.</p></br>

  <p><strong>JOSÉ AURELIO SOSA OLIVIA:</strong> Abajo, ¿conoces a alguien o has participado en alguna
  de las actividades académicas o profesionales que ofrece la UJAT?</p></br>

  <p><strong>ENTREVISTADO 2:</strong> Gracias a las oportunidades que ofrece la Universidad Juárez
  Autónoma de Tabasco, pude estudiar 4 años el libro en inglés. Pude certificarme de
  manera profesional con un curso que es avalado de manera internacional, así como
  pude estudiar algunos otros idiomas y yo me siento muy contento por haber podido
  tener esa oportunidad.</p></br>

  <p><strong>ENTREVISTADO 3:</strong> Sí, de hecho, tengo un sobrino que estudia inglés y va muy bien. Él
  va nada más una vez a la semana y pues le ha ido bien en inglés, ha avanzado y pues
  son buenos maestros, sí.</p></br>

  <p><strong>ENTREVISTADO 4:</strong> De hecho, yo estudié un tiempo los sábados en escuelas de
  dirigidos por la Universidad de.</p></br>

  <p><strong>JOSÉ AURELIO SOSA OLIVIA:</strong> ¿Qué importancia consideras que tiene la UJAT en el
  desarrollo de Tabasco?</p></br>

  <p><strong>ENTREVISTADO 1:</strong> Ok, en base a varias impresiones que hacen y ha ayudado mucho
  en todo el estado. Por ejemplo, cuando son temas de los cocodrilos que son a nivel de
  todo el estado, son muy.</p></br>

  <p><strong>ENTREVISTADO 3:</strong> Pues es muy importante, porque pues luego hay gente que se va
  afuera a trabajar y pues dicen dónde estudiaron. Y pues que son de Tabasco. He visto
  en la tele que luego hay tabasqueños trabajando, haciendo cosas importantes en otros
  estados y dicen que estudiaron ahí en.</p></br>

  <p><strong>ENTREVISTADO 2:</strong> Yo considero que la universidad Juárez Autónoma de Tabasco tiene
  un impacto muy importante a nivel social, ya que no solamente crea profesionales,
  sino crea los líderes que forman parte de este entorno social, cultural e incluso a nivel
  político, que tiene el estado de Tabasco.</p></br>

  <p><strong>ENTREVISTADO 4:</strong> Promover un mejor futuro para las demás generaciones.</p></br>

  <p><strong>JOSÉ AURELIO SOSA OLIVIA:</strong> ¿Conoces el lema de la UJAT?</p></br>

  <p><strong>ENTREVISTADO 2:</strong> “En la duda, acciona, en la fe”.</p></br>

  <p><strong>ENTREVISTADO 3:</strong> Así como no, es ese de “Estudio en la duda, acción en la fe”.</p></br>

  <p><strong>DR. ROBERTO HERNANDEZ BARAJAS:</strong> Regresamos a "Creando Conciencia, la ciencia
  que transforma". Señor rector, eh, es muy importante, eh, saber que usted puede emitir
  como mensaje para los estudiantes, los profesores e investigadores, eh, que permita
  inspirarlos o motivarlos a construir dentro de la universidad, investigación de alta
  calidad para este nuevo año 2025 y para el futuro.</p></br>

  <p><strong>RECTOR LIC. NARVAEZ:</strong> Sí, gracias. Mira, yo soy un convencido de que
  tenemos talento y muy buen talento. No solamente el sector académico con nuestros
  investigadores, con docentes que han obtenido reconocimientos nacionales e
  internacionales. Te podría decir, por ejemplo, el que lo obtuvo, eh, el maestro Bernal,
  que es de la División de Ciencias Básicas en donde en Honduras, participó con un
  proyecto con uno de sus asesorados, en donde compitió, pues casi nada, con puros
  premios. Este, Nobel de física y él obtuvo allí un reconocimiento. El maestro Arroyo es
  una gente muy comprometida, muy identificada, tiene alumnos que hoy están en la
  NASA trabajando, entonces digo, hay el talento. Hay el talento de nuestros maestros,
  hay también el talento de los jóvenes. Lo que tenemos que hacer es lograr esa empatía,
  esa simbiosis y nosotros como, eh, autoridades administrativas de la universidad, eh,
  poder contar con espacios en donde se pueda hacer la investigación. Y muchas veces
  está el talento del joven, está el talento del maestro, pero no hay espacios, los
  laboratorios no funcionan, el equipo no funciona, eh, no hay medios de transporte. En
  fin, hay una serie de obstáculos en los que muchas veces puede quedar a un lado un
  gran proyecto y no concretarse, porque alguien no hizo bien la parte de la chamba que
  le correspondía. Y en este caso, a nosotros, que es la de evaluar los proyectos y
  aquellos proyectos que tienen un impacto, pues poderlos llevar ya al campo y aterrizar
  al campo de los hechos. Porque esto es muy importante y de nada sirve que estemos
  incentivando a los jóvenes para que creen proyectos, proyectos de investigación, si al
  final de la jornada esto va a quedar solamente en un bonito proyecto que, a lo mejor
  compitió en algún lado y que tiene un gran potencial y que nosotros no fuimos capaces
  de hacer un esfuerzo por materializar ese proyecto. Ahora lo que yo quiero en estos
  años que nos quedan es que todos aquellos jóvenes y maestros que tengan un
  proyecto, que tengan algo que consideren que aporta a la sociedad tabasqueña, que
  vayan, que vengan aquí a la rectoría y platiquemos con ellos. Evaluemos sus proyectos
  y que, si sus proyectos son viables, los vamos a empujar, que no tengan temor de decir,
  "es que mi proyecto es pequeñito, tiene un nombre muy sencillo y entonces no me van
  a apoyar". No, preséntenlos, los evaluaremos con el mismo rigor que evaluamos a un
  gran proyecto. Evaluaremos estos pequeños proyectos con la misma visión, con la
  misma intención y vamos a tratar de, eh, apoyarlos para convertirlos en una realidad
  concreta y estos 3 años son los años en los que queremos consolidar todos nuestros
  proyectos.</p></br>

  <p><strong>DR. JOSÉ RAMÓN LAINES CANEPA:</strong>  Bien, qué interesante. Ya estamos terminando,
  eh, pero tenemos que ir a un corte promocional y enseguida regresamos con "Creando
  Conciencia, la ciencia que transforma".</p></br>

  <p><strong>LOCUTOR:</strong> "Creando Conciencia". Un momento, regresamos. Continuamos con "La
  ciencia que transforma".</p></br>

  <p><strong>DR. JOSÉ RAMÓN LAINES CANEPA:</strong> Regresamos al cierre de "Creando Conciencia, la
  ciencia que transforma" y qué interesante plática, qué motivadora, plática, qué
  esperanzadora entrevista para todos los que están haciendo investigación en la
  Universidad Juárez Autónoma de Tabasco. Cuando digo todos me refiero a profesores,
  investigadores, estudiantes, directivos, todos, porque lo que nos está diciendo el
  rector es que hay oportunidad para todos. Bien, rector, ya, eh, vamos a cerrar. Nos
  gustaría escuchar un último comentario, y ya nos habló usted sobre crear conciencia,
  ¿verdad?, en la comunidad universitaria. Ahora, qué mensaje, sabemos que usted va a
  rendir su informe pronto, qué mensaje usted le envía a la sociedad sobre la importancia
  de utilizar la ciencia para transformar vidas y transformar al mundo.</p></br>

  <p><strong>RECTOR LIC. NARVAEZ:</strong> Mira, nada más un pequeño dato adicional de
  un proyecto interesante. Yo alguna, hace mucho, hace algún tiempo, fui a al municipio
  de Balancán, específicamente, al río San Pedro, porque firmamos el Balancán. Porque
  firmamos ahí un convenio sobre los manglares del del proyecto que está haciendo el
  maestro Burelo con una empresa petrolera que nos aportó recursos. Y estando en el
  río San Pedro, alguien, alguno de los maestros me dijo, "oiga, aquí hay un criadero o no
  sé cómo le llamen de perlas en telas cultivadas en aguas semi saladas o dulces". Me
  llamó la atención, incluso uno de los de los guías se tiró, buceó y sacó una ostra con
  una perla ya cultivada, muy grande, bonita y me dijeron que ese proyecto lo habían
  dejado ahí abandonado. Tenía como un año, por la inseguridad, porque mucha gente
  pensó que ese era un gran negocio y amenazaron a los maestros. Pero quiero decirte
  que lo platicamos con el doctor Wilfrido, el secretario de Investigación y Posgrado y él
  me daba una noticia muy, muy alentadora, hace como una semana o 10 días, de que
  creo que ENI, la empresa ENI, si mal no recuerdo, ENI o CREAN, no sé, una de las
  empresas con las que trabajamos, le gustó el proyecto y va a aportar, no sé cuántos
  dólares, pero sí es casi 2 millones de pesos para poder llevar a cabo, eh, de manera
  integral, este proyecto de cultivo de perlas y que puedan trabajar las señoras, las
  mujeres de esta zona, de esta zona, este, de Balancán.</p></br>

  <p>Eh, así como estos hay muchos proyectos. Entonces, yo creo que tenemos que
  despertar en la sociedad, o transmitirle a la sociedad de que cuenta con una
  universidad y con investigadores que les pueden ayudar a resolver sus problemas y que
  están realmente todos los días, haciendo ciencia para poder contribuir a que ellos
  puedan desarrollarse como emprendedores. Esa es una gran satisfacción que
  nosotros tenemos y efectivamente el próximo jueves, 23 de enero, a las 6:00 de la
  tarde, estaremos rindiendo el primer informe de este segundo periodo, técnicamente
  es el quinto informe, no, porque si le hicimos 4 anteriores, es el primero de estos
  últimos 4 años, eh, en donde informaremos el Consejo Universitario y a toda la
  comunidad universitaria, lo que hemos hecho a lo largo de enero del 2024 a enero del
  2025. Están todos los invitados y ahí puedan poder escuchar con un poquito de mayor
  detenimiento y especificación algunos de los proyectos de los que aquí hemos estado
  hablando. Incluso hay un gran proyecto que iniciamos ahora y que en 4 meses tenemos
  que inaugurar, es el Centro Universitario de Biotecnología de Reproducción Bovina, el
  famoso CUBRE, un gran centro que estamos seguros de que en muy poco tiempo podrá
  aportar a el cambio de pie genético de en la calidad del ganado tabasqueño. Y también
  vamos, estábamos trabajando ya en 4 meses, debemos de aperturar en el Centro, en
  la Casa Universitaria del Agua, en donde vamos a generar también una conciencia de
  lo que es el agua, de lo que es el cambio climático y de la importancia de preservar este
  bien que, si no lo hacemos, nos vamos a arrepentir. Quizás ya no nosotros, pero las
  generaciones que nos van a suceder, les vamos a dejar un terrible dilema, que es en la
  importancia del agua.</p></br>

  <p><strong>DR. JOSÉ RAMÓN LAINES CANEPA:</strong> Qué interesante. Quisiéramos seguir platicando,
  pero sabemos que el rector, su tiempo está bastante. Que es corto, no para nosotros
  dimos comentarios muy rápido porque nos estamos yendo.</p></br>

  <p><strong>DR. ROBERTO HERNANDEZ BARAJAS:</strong> No, pues me ha interesado mucho el mensaje
  del señor rector, referente a que la apertura que tiene su administración para apoyar a
  profesores y estudiantes que sus proyectos no se queden ahí en el olvido, sino que se
  conviertan en proyectos productivos.</p></br>

  <p><strong>DR. JOSÉ RAMÓN LAINES CANEPA:</strong> Bien, como todos los miércoles, hoy reafirmamos
  que la Universidad Juárez Autónoma de Tabasco no solo forma profesionales, sino
  también agentes de cambio que transforman vidas y comunidades. Con cada
  proyecto, con cada joven que decide quedarse y construir aquí su futuro, estamos
  forjando una universidad que inspira y una sociedad que progresa. La ciencia con
  sentido social no es solo un objetivo, es nuestra promesa para un mañana mejor.
  Sigamos creyendo, creando y transformando juntos, el futuro de la UJAT es el futuro de
  todos. Se despide de ustedes JOSÉ RAMÓN LAINES CANEPA, Roberto Barajas. Guillermo
  Narváez, agradeciendo a la Dirección General de Comunicación Social, a la
  Universidad Juárez Autónoma de Tabasco, a nuestra productora, al licenciado Jayara y
  a todos los que nos escuchan cada miércoles. Muchas gracias por estar con nosotros
  en "Creando Conciencia", hasta la próxima.</p></br>

  <p><strong>LOCUTOR:</strong> "Creando Conciencia, la ciencia que transforma". Es una producción de
  Radio UJAT, la voz universitaria. “Legado UJAT, estudio en la duda, acción en la fe”.</p></br>`,
        } as PageContent,
        {
          type: "text",
          content: `<h1><strong>Mirada desde la Ciencia</strong></h1>
          <h3>Por el o los entrevistados (síntesis ensayística de los puntos clave del programa)</h3>
          El episodio “UJAT 2025: Transformando vidas y sociedad a través de la ciencia” plantea una tesis central: la ciencia universitaria adquiere su máximo sentido cuando deja de ser un ejercicio encerrado en laboratorios y se convierte en un bien público orientado a resolver problemas concretos del territorio. Desde esta perspectiva, la Universidad Juárez Autónoma de Tabasco es presentada como una institución con doble responsabilidad: generar conocimiento y devolver a la sociedad, de manera tangible, lo que recibe del erario.
Un primer eje del diálogo es la consolidación. El Rector subraya que 2025 no debe ser un año de improvisación, sino de continuidad estratégica: consolidar lo avanzado, reactivar laboratorios y priorizar proyectos vinculados con producción, campo e industria tabasqueña. Esta idea es relevante porque reconoce que la ciencia no solo depende del talento académico, sino también de condiciones habilitantes: infraestructura operativa, equipamiento funcional, logística y evaluación institucional que permita pasar de resultados a impacto.
Un segundo eje es la formación científica temprana y la movilidad como detonadores de cambio. Se argumenta que programas como veranos científicos, intercambios y estancias transforman la identidad del estudiante: dejan de “ser actores de reparto” para asumir un rol protagónico como agentes de cambio. La estrategia clave para ampliar la participación no se reduce a convocatorias, sino a la difusión con el ejemplo: que quienes ya vivieron la experiencia inspiren a otros mostrando que “sí se puede”. Se propone, en suma, una pedagogía de la aspiración sustentada en evidencia vivida.
El tercer eje, quizá el más estructurante, es la noción de investigación con sentido social. El Rector sostiene que la universidad debe salir del “claustro” y aterrizar el conocimiento en los sectores que más lo necesitan. Los ejemplos ofrecidos son ilustrativos de una ciencia aplicada con enfoque de cadena de valor: en el caso de productores de chile, la intervención universitaria no solo mejora productividad, también atiende el problema de poscosecha mediante diseño de secadores eléctricos y solares, reduciendo pérdidas y riesgos de contaminación. De manera paralela, el proyecto de producción de abeja reina busca resolver la dependencia tecnológica y la falta de adaptación al entorno tropical. Ambos casos muestran un patrón: diagnóstico del problema, diseño de solución interdisciplinaria y acompañamiento para crear capacidades locales.
Un cuarto eje es la motivación y el sentido de pertenencia como política institucional. Se reconoce que no basta con exhortar a participar; se requiere construir conciencia social en estudiantes y profesores, recordando que la universidad pública habilita trayectorias profesionales y, por tanto, implica una ética de reciprocidad. En esta misma línea, la “fuga de talento” es tratada con madurez: no se puede forzar la permanencia, pero sí se puede generar pertenencia y proyectos de vida que vinculen el desarrollo individual con la transformación del entorno.
El quinto eje es el reconocimiento y la escalabilidad. Se mencionan logros internacionales (eventos en Brasil, estancias, reconocimientos a impacto social) no como trofeos, sino como evidencia de que la calidad científica puede traducirse en reputación y redes. Sin embargo, la reflexión más importante no es el premio, sino el paso siguiente: convertir proyectos “escolares” o “de concurso” en proyectos productivos. Aquí aparece una exigencia institucional: la administración debe crear mecanismos para evaluar viabilidad, asignar apoyos y acompañar la implementación, evitando que buenas ideas se queden en el papel por falta de “espacios, laboratorios, equipos o transporte”.
Finalmente, el episodio cierra con un horizonte de futuro que integra ciencia, territorio y sostenibilidad: proyectos como el cultivo de perlas con enfoque comunitario, el Centro Universitario de Biotecnología de Reproducción Bovina (CUBRE) y la Casa Universitaria del Agua se presentan como apuestas por infraestructura estratégica y, sobre todo, por una cultura científica que entiende el cambio climático y la gestión del agua como prioridades intergeneracionales. La idea final es contundente: la ciencia universitaria debe ser una herramienta para transformar vidas, no solo para producir documentos; y esa transformación ocurre cuando se enlazan talento, infraestructura, ética pública y compromiso social.
En conjunto, este capítulo radiofónico sostiene que “crear conciencia” no es una frase retórica: es un programa de acción que demanda universidades abiertas, ciencia con pertinencia local y una comunidad académica capaz de convertir conocimiento en bienestar social.`,
        } as PageContent,
      ],
    },

    // CAPITULO 2 ****************************************
     {
      title: "Invitados: Dr. Manuel Pérez de la Cruz y Dra. Aracely de la Cruz Pérez",
      pages: [
        {
          type: "cover",
          title: "Invitados: Dr. Manuel Pérez de la Cruz y Dra. Aracely de la Cruz Pérez",
        } as PageContent,
        {
          type: "biography",
          authorName: " Dr. Manuel Pérez de la Cruz",
          image: "/Dr_Manuel_Perez.jpg",
          content: `
            <p>El Dr. Manuel Pérez de la Cruz es Profesor-Investigador y especialista en insectos tropicales. Egresado de la UJAT (2003) y con estudios de posgrado en el Colegio de Postgraduados, ha publicado 52 artículos científicos, dirigido 32 tesis y participado en capítulos del libro Biodiversidad de Tabasco. Es miembro del SNI desde 2011 y responsable de la Colección de Insectos y Arácnidos en la DACBiol-UJAT. </p>`,
        } as PageContent,
       {
          type: "biography",
          authorName: " Dra. Aracely de la Cruz Pérez",
          image: "/Dra_Aracely.jpg",
          content: `
            <p> La Dra. Aracely de la Cruz Pérez es Profesora-Investigadora, especialista en el estudio de arácnidos e insectos. Egresada de la UJAT (2003) y con formación de posgrado en el Colegio de Postgraduados, es integrante del SNII desde 2013. Ha publicado 33 artículos científicos, dirigido 24 tesis y contribuido en capítulos del libro Biodiversidad de Tabasco. Es responsable de la Colección de Arácnidos e Insectos en la DACBiol-UJAT. </p>`,
        } as PageContent,
        {
          type: "text",
          content: `<h1><strong>Introducción del Capítulo</strong></h1>
          <h3>Biodiversidad oculta: explorando el rol de los insectos en los ecosistemas de Tabasco</h3>
          En Tabasco, la vida se manifiesta con intensidad en cada selva, humedal y manglar. Sin embargo, gran parte del equilibrio ecológico del estado depende de organismos que con frecuencia pasan desapercibidos: los insectos y otros artrópodos. Aunque pequeños, estos seres cumplen funciones esenciales para la salud de los ecosistemas, sosteniendo procesos como la descomposición de materia orgánica, el reciclaje de nutrientes, la polinización y el mantenimiento de las cadenas tróficas que sustentan a numerosas especies.
          </br> 
          Este capítulo presenta una mirada clara y cercana al tema “Biodiversidad oculta: explorando el rol de los insectos en los ecosistemas de Tabasco”, a partir de una entrevista realizada en el programa Creando Con-Ciencia: La ciencia que transforma, conducido por los Dres. José Ramón Laines Canepa y Roberto Hernández Barajas. En esta conversación participan como invitados el Dr. Manuel Pérez de la Cruz y la Dra. Aracely de la Cruz Pérez, investigadores especializados en entomología y aracnología tropical, quienes han dedicado su trabajo al estudio, documentación y divulgación de la biodiversidad de la región.
          </br> 
          A lo largo del capítulo, el lector comprenderá por qué los insectos no deben considerarse únicamente como organismos molestos o asociados a plagas, sino como indicadores ambientales y piezas clave para interpretar el estado de conservación de los ecosistemas. En particular, se explora el papel de grupos como escarabajos, termitas y barrenadores, así como su relación con la vegetación nativa, la dinámica forestal y la estabilidad ecológica, especialmente en ambientes sensibles como los manglares.
          </br>
          Asimismo, se abordan retos contemporáneos que amenazan esta biodiversidad, entre ellos la pérdida de hábitat, el crecimiento urbano, el uso indiscriminado de insecticidas y la contaminación lumínica, factores que alteran los ciclos naturales de muchas especies y disminuyen su capacidad de sostener procesos ecológicos críticos. 
          </br>
          Finalmente, este capítulo invita a una reflexión importante: proteger la biodiversidad oculta es también proteger nuestra calidad de vida. Entender a estos organismos, respetar su papel y promover su conservación no es un tema exclusivo de especialistas; es una responsabilidad compartida que comienza con la educación ambiental, la curiosidad científica y acciones cotidianas conscientes.`,
        } as PageContent,
        {
          type: "text",
          content: `<h1><strong>Transcripción Editada de la Entrevista</strong></h1>
          En una tarde de divulgación y asombro científico, los micrófonos de Radio UJAT abrieron espacio a un tema tan cercano como ignorado por la vida cotidiana: la presencia silenciosa y poderosa de los insectos en los ecosistemas tabasqueños. Acompañados por los doctores José Ramón Laines Canepa y Roberto Hernández Barajas, los invitados —la Dra. Araceli de la Cruz Pérez y el Dr. Manuel Pérez de la Cruz— condujeron a la audiencia por un recorrido revelador titulado “Biodiversidad oculta: explorando el rol de los insectos en los ecosistemas de Tabasco”.
          </br>
          Desde el inicio, el diálogo tomó forma con una intención clara: demostrar que lo “pequeño” también sostiene lo esencial. Con lenguaje accesible, la Dra. Araceli explicó que la aracnología estudia a los arácnidos —arañas, escorpiones, ácaros y otros grupos—, organismos que actúan como reguladores naturales en los ecosistemas. El Dr. Manuel complementó con una definición contundente: la entomología es la ciencia que estudia a los insectos, el grupo más diverso del planeta. 
          </br>
          A partir de ahí, quedó claro que estos organismos no son solo parte del paisaje: son el engranaje que hace funcionar la vida. Los insectos, explicó el Dr. Manuel, son base de la cadena trófica, pues alimentan a múltiples especies y mantienen el flujo ecológico. Si uno de esos eslabones se rompe, el ecosistema se desequilibra. El mensaje fue directo: sin insectos, la naturaleza pierde estabilidad. 
          </br>
          La conversación avanzó hacia el trabajo de campo, ese que a menudo parece exclusivo de documentales, pero que en Tabasco es una realidad diaria. Con entusiasmo, la Dra. Araceli describió cómo la investigación requiere curiosidad científica, paciencia y técnicas específicas: redes de golpeo, cebos, cámaras trampa y métodos diseñados para cada grupo. Su reflexión fue precisa: “cuando no conocemos las cosas, no las vemos; pero cuando las conocemos, empezamos a mirar alrededor”. 
          </br>
          Tras una cápsula informativa que reforzó el papel de los insectos como polinizadores, recicladores de nutrientes y bioindicadores, el programa se enfocó en hallazgos concretos del trabajo científico en manglares, selvas y agroecosistemas. El Dr. Manuel compartió que los relictos de selva y los manglares suelen concentrar la mayor diversidad, mientras que los agroecosistemas albergan comunidades distintas, adaptadas a condiciones más alteradas. 
          </br>
          Uno de los momentos más llamativos ocurrió al hablar de los insectos conocidos popularmente como “polillas”, aquellos que perforan madera y producen aserrín. En realidad, explicó el Dr. Manuel, se trata de grupos como escolítidos, platipódidos y cerambícidos, capaces de vivir dentro de los árboles y, en algunos casos, asociarse con hongos que afectan a la planta. Más que “plagas”, son señales biológicas: cuando aparecen, pueden revelar que un árbol o un ecosistema atraviesa estrés o deterioro. 
          </br>
          La Dra. Araceli llevó esta idea al terreno doméstico: muchas veces estos insectos quedan dentro de la madera usada en muebles y, con el tiempo, emergen causando desgaste, lo que sorprende a las personas sin entender el origen. El mensaje fue una invitación a comprender antes de destruir: detrás de cada señal hay un proceso ecológico en marcha. 
          </br>
          El Dr. Roberto, confesando su afinidad por los escarabajos desde la infancia, abrió un bloque sobre especies clave como bioindicadores. El Dr. Manuel explicó que los escarabajos representan uno de los grupos más diversos del planeta, con funciones tan sorprendentes como el reciclaje de nutrientes mediante especies que utilizan estiércol, formando esferas y enriqueciendo el suelo. En el caso de las termitas, se subrayó su diversidad y su capacidad de degradar madera, así como su presencia diferenciada entre selva, ciudad y agroecosistemas. 
          </br>
          El capítulo tomó un tono de alerta cuando se abordaron las amenazas. La Dra. Araceli fue clara: la pérdida de hábitat es el principal problema, seguido del crecimiento urbano. Pero también destacó un enemigo invisible: la luz artificial, que desorienta a los insectos, altera sus ciclos reproductivos y provoca que se concentren en espacios humanos, donde suelen ser eliminados con insecticidas. Su llamado fue firme: muchas especies que se exterminan por miedo cumplen funciones esenciales, incluida la polinización de múltiples plantas. 
          </br>
          Como respuesta, el Dr. Manuel propuso una estrategia sencilla pero poderosa: conservar y restaurar vegetación nativa, especialmente en programas de reforestación. Reforestar con especies locales —dijo— significa conservar no solo insectos, sino cadenas completas de vida asociada. 
          </br>
          La entrevista también abrió el debate sobre la regulación ambiental y los riesgos de introducir especies invasoras. La Dra. Araceli explicó que mover plantas de un lugar a otro puede trasladar huevos o insectos microscópicos sin ser detectados, generando impactos que se evidencian años después. El Dr. Manuel aportó ejemplos concretos: especies invasoras que actualmente causan defoliación y casos históricos de insectos introducidos por transporte de madera desde otros continentes, que hoy se encuentran establecidos en zonas urbanas. 
          </br>
          En el tramo final, el programa defendió la importancia de la investigación interdisciplinaria. Se habló del valor de integrar biología, ecología, química, física, tecnología e incluso diseño gráfico para mejorar la identificación y comprensión de especies. La entomología y la aracnología, insistieron ambos investigadores, son campos “nobles” porque permiten generar conocimiento aplicable para conservación, manejo ecológico y educación ambiental. 
          </br>
          La sección de vox populi reveló algo fundamental: la gente reconoce que los insectos son esenciales, aunque también les teme por sus impactos negativos. Frente a ello, el Dr. Manuel amplió la mirada: no solo existe la abeja productora de miel, también hay abejas nativas sin aguijón, como las meliponas, además de muchos otros insectos polinizadores. La Dra. Araceli añadió una idea clave: incluso el mosquito, tan rechazado, cumple un rol ecológico, y el macho puede actuar como polinizador. 
          </br>
          El cierre fue tan directo como esperanzador. Se habló de contaminación lumínica y sonora, de cómo los insectos pueden agotarse por sobreestimulación, y de acciones simples para convivir mejor: sembrar plantas útiles, reducir luces innecesarias y reconocer que no se trata de una “invasión”, sino de organismos intentando adaptarse a un entorno transformado por el ser humano. 
          </br>
          Finalmente, los conductores y los invitados compartieron una conclusión que resume el corazón del capítulo: coexistir, aprender, respetar y actuar. La Dra. Araceli lo definió con precisión: no ver a estos animales como enemigos, sino como aliados. El Dr. Manuel cerró recordando que los insectos contienen información invaluable para comprender y conservar la vida, y que el conocimiento debe compartirse mediante talleres, foros y divulgación pública. 
          </br>
          En palabras del programa, la enseñanza quedó sembrada con claridad: “Hoy descubrimos que los insectos, aunque pequeños, sostienen grandes ecosistemas. Proteger su hábitat no es solo un acto de conservación, sino un compromiso con el equilibrio de la vida en nuestro planeta”.`,
        } as PageContent,
        {
          type: "chatbot",
          title: "Reflexiona con Nosotros",
          config: {
            persona:
              "You are a science explainer: clear, engaging, and practical.",
            instruction: `Enfócate en ¿Cómo puede una universidad pública convertirse en un motor de transformación social a través de la ciencia? 
            Analiza los casos presentados por el rector de la UJAT y compáralos con experiencias similares en América Latina.`,
          },
        } as PageContent,
        {
          type: "form",
          title: "Punto de Encuentro",
          fields: [
            {
              type: "text",
              id: "q2",
              label:
                "¿Qué acción concreta puedes asumir tú, como estudiante, docente o ciudadano, para reconocer el valor de la “biodiversidad oculta” —especialmente de los insectos— y contribuir a su conservación, evitando prácticas que dañen sus hábitats y promoviendo una convivencia más consciente en tu entorno?",
              multiline: true,
            },
          ],
        } as PageContent,

        {
          type: "audio",
          url: "/entrevista-1.mp3",
          htmlContent: `
          <p><strong>LOCUTOR:</strong> Bienvenidos a "Creando Conciencia", el programa que te conecta con el fascinante mundo de la ciencia, la tecnología y el medio ambiente para construir un futuro más sustentable.</p></br>
          <p><strong>Dr. José Ramón Laines Canepa:</strong> Soy el doctor José Ramón Laínez Canepa, y me acompaña en cabina el doctor Roberto Hernández Barajas. Buenas tardes, Ramón.</p></br>
          <p><strong>Dr. José Roberto Hernández Barajas:</strong> Buenas tardes a la audiencia de Radio UJAT. </p></br>
          <p><strong>Dr. JRLC:</strong> Gracias por estar con nosotros para que juntos conozcamos lo más relevante de la ciencia, pensar de manera crítica y actuar de forma consciente en el cuidado de nuestro planeta. Así que prepárate. Recuerda que puedes interactuar con nosotros a través de nuestras redes sociales y ser parte activa de esta comunidad de curiosos y apasionados por la ciencia. El día de hoy nuestro tema es un tema muy interesante. Lo estábamos esperando, así como la lluvia. Lo estábamos esperando: "Biodiversidad oculta: explorando el rol de los insectos en los ecosistemas de Tabasco". Y tenemos un invitado de lujo, Roberto. </p></br>
          <p><strong>Dr. JRHB:</strong> Impresionante, la verdad.</p></br>
          <p><strong>Dr. JRLC:</strong> De verdad, los que tenemos aquí, además de ser científicos, son profesores científicos, pero son nuestros grandes amigos. Tenemos a la doctora Araceli de la Cruz Pérez y al doctor Manuel Pérez de la Cruz. Muchas gracias por estar con nosotros, doctores. </p></br>
          <p><strong>Dra. Araceli de la Cruz Pérez:</strong> Muchas gracias a ustedes por la invitación. </p></br>
          <p><strong>Dr. Manuel Pérez de la Cruz:</strong> Gracias por la invitación. </p></br>
          <p><strong>Dr. JRLC:</strong> Bien, le voy a dar una breve reseña de nuestros invitados. La doctora Araceli de la Cruz Pérez es profesora investigadora, egresada en 2003 de la licenciatura en Biología por nuestra máxima casa de estudio, la UJAT. Tiene estudios de maestría y doctorado por el Colegio de Posgraduados. Pero, además, es integrante del Sistema Nacional de Investigadoras e Investigadores desde 2013 al 2029. Ha publicado 33 artículos científicos en revistas nacionales e internacionales, ha dirigido 24 tesis —escuchen bien— 24 tesis de doctorado, maestría y licenciatura, y ha publicado 3 capítulos en el libro "Biodiversidad de Tabasco". Además, es responsable de la colección de arácnidos y la colección de insectos de la DACBIOL. Nuestro invitado, el doctor Manuel Pérez de la Cruz, es profesor investigador, egresado en 2003 de la licenciatura en Biología, ¿también, ¿verdad? De nuestra máxima casa de estudio. Tiene estudios de maestría y doctorado en el Colegio de Posgraduados, ha publicado 52 artículos sobre insectos tropicales y, escuchen esto, ha sido reconocido con el mérito científico en 2014 y en 2023. Es miembro del Sistema Nacional de Investigadores desde 2011, ha dirigido 32 tesis de licenciatura, maestría y doctorado y ha publicado también 3 capítulos en el libro "Biodiversidad de Tabasco". Y él es el responsable de la colección de insectos y colección de arácnidos de la DACBIOL. Ambos investigadores crearon el campo profesional Entomología y Aracnología Tropical en el plan de estudio de la licenciatura en Biología y, de forma altruista, han diseñado talleres en técnicas de colecta de insectos y arácnidos. Y son también revisores de artículos científicos en revistas de otros países como Colombia, Costa Rica, Estados Unidos, México y Pakistán. Formaron el laboratorio de Aracnología y Entomología en la DACBIOL, donde elaboran. Al ratito nos van a explicar qué significa eso de aracnología y entomología, porque seguramente muchos no tenemos ni idea. ¿No tenemos ni idea, ¿verdad? Recuerden el tema: "Biodiversidad oculta: explorando el rol de los insectos en los ecosistemas de Tabasco". Doctores, primero para calentar motores, primero díganos qué es aracnología y qué es entomología.</p></br>
          <p><strong>Dra. ACP:</strong> Ok, bueno, aracnología es aquella rama de la biología encargada de estudiar a los arácnidos. Los arácnidos están compuestos por 11 grupos de animales, y entonces ahí encontramos escorpiones, alacranes, pseudoescorpiones, ácaros, vinagrillos o uropígidos, solífugos, por ejemplo, y arañas propiamente dichas, las que conocemos. Y, bueno, nos dedicamos al estudio de este grupo que es muy interesante y que es un regulador importante de las poblaciones de artrópodos, principalmente de los individuos. </p></br>
          <p><strong>Dr. JRLC:</strong> Excelente.</p></br>
          <p><strong>Dr. JRHB:</strong> Excelente definición.</p></br>
          <p><strong>Dr. JRLC:</strong> Entomología, doctor.</p></br>
          <p><strong>Dr. MPC:</strong> Bien, la entomología es la ciencia que estudia a los insectos, el grupo más diverso del planeta que tenemos. Y pues aquí entran las mariposas, los escarabajos, las luciérnagas, pues muchos, muchos insectos de los que hoy vamos a platicar. </p></br>
          <p><strong>Dr. JRLC:</strong> Y veo que traes un poco de insectos. Quién sabe dónde los agarraste, al rato nos vas a explicar porque nuestros escuchas quieren saber acerca de estos animalitos, ¿verdad? </p></br>
          <p><strong>Dr. MPC:</strong> Así es, estaremos platicando mucho sobre todo lo que hemos colectado en Tabasco. </p></br>
          <p><strong>Dr. JRLC:</strong> Excelente. Doctores, ¿qué importancia tienen los insectos? Por ejemplo, los barrenadores u otras especies para el equilibrio ecológico de los ecosistemas, pero ¿pueden abundar sobre el ecosistema de Tabasco? </p></br>
          <p><strong>Dr. MPC:</strong> Bien, los insectos... pues, ahora sí que la parte más importante de nuestro planeta es que son parte de la cadena trófica y son la base de las cadenas tróficas, y tienen muchas vías de esas cadenas, entonces son muy importantes. El rol que juegan... hay una gran diversidad de hábitos que tienen, entonces están relacionados con los anfibios, con los reptiles, con otros insectos, con las aves. Entonces todas esas cadenitas que siguen esos insectos son bien importantes, y si se llega a romper una de esas, pues tenemos problemas en los ecosistemas. </p></br>
          <p><strong>Dr. JRLC:</strong> Un desequilibrio en los ecosistemas. ¿Qué es una cadena trófica? ¿Qué es eso? </p></br>
          <p><strong>Dr. MPC:</strong> Bien, una cadena trófica es que ellos sirven de alimento a otros y así se va subiendo en una pirámide alimenticia, y el rol que juegan pues es bastante preponderante. Si se llega a romper una cadena de esta, tenemos problema. </p></br>
          <p><strong>Dr. JRLC:</strong> O sea que ustedes andan buscando por el campo, por los lugares, ¿andan buscando este tipo de insectos, ¿verdad? ¿Andan buscando, es así? ¿O cómo es su trabajo? Platíquenme un poquito más. </p></br>
          <p><strong>Dra. ACP:</strong> Es un trabajo así, es. Bueno, lo que hacemos es lo que a veces vemos en las películas y que a veces uno no piensa que pudiéramos hacerlo aquí en el estado. O a veces los niños, sobre todo, les llaman mucho la atención los insectos y lo ven como algo lejano, pero en realidad tiene que ver con la curiosidad y el interés de conocer cuál es la función que tienen. Y bueno, es buscarlos en el campo a través de diferentes técnicas de colecta. Por ejemplo, algunos requieren de cebos, algunos requieren de cámaras trampa, por ejemplo, algunos de redes de golpeo, y bueno, ir conociendo cada grupo nos ayuda a entender dónde pueden vivir, dónde los podemos encontrar, cómo están interactuando, sobre todo con nosotros que a veces no los vemos porque no los conocemos. Cuando no conocemos las cosas, no las vemos, pero cuando las conocemos empezamos a mirar alrededor y vemos "wow, qué maravilla", ¿no? </p></br>
          <p><strong>Dr. JRHB:</strong> ¿Cómo ustedes están escuchando, Roberto? Apenas vamos calentando motores. </p></br>
          <p><strong>Dr. JRLC:</strong> Hay muchas preguntas por hacer, pero ¿sabes algo, Roberto? Tenemos que ir a un corte promocional y enseguida regresamos en "Creando Conciencia". </p></br>
          <p><strong>LOCUTOR:</strong> "Creando Conciencia", la ciencia que transforma. "Creando Conciencia". En un momento regresamos. </p></br>
          <p><strong>Dr. JRHB:</strong> Continuamos con "La ciencia que transforma". Regresamos a "Creando Conciencia", la ciencia que transforma. A continuación, vamos a escuchar una cápsula informativa preparada por Kenia Utrera. </p></br>
          <p><strong>Kenia Utrera:</strong> ¿Sabías que los insectos, aunque pequeños, son piezas fundamentales en los ecosistemas? El día de hoy, dos destacados investigadores de la UJAT, el doctor Manuel Pérez de la Cruz y la doctora Araceli de la Cruz Pérez, quienes han dedicado su carrera al estudio de insectos tropicales y su impacto en la biodiversidad local, nos hablarán de cómo estas criaturas sostienen el equilibrio ecológico en Tabasco. Los insectos cumplen roles esenciales como polinizadores, recicladores de nutrientes y controladores biológicos. En Tabasco, especies como los coleópteros y las termitas han demostrado ser indicadores clave de la salud ambiental. Según los expertos, estos insectos enfrentan amenazas como la deforestación y el cambio climático, alterando procesos fundamentales como la descomposición y el reciclaje de nutrientes, lo que resalta la necesidad de implementar programas de conservación y manejo sostenible. Asimismo, los estudios sobre la diversidad de escarabajos en manglares han revelado cambios en las comunidades de estos ecosistemas, destacando su sensibilidad a las actividades humanas. Los insectos son más que simples criaturas, son pilares de la vida en nuestro planeta. Conservar sus hábitats y entender su importancia es fundamental para asegurar un futuro equilibrado. Además de proteger su entorno, debemos involucrar a las comunidades locales en proyectos de monitoreo y restauración. Sigamos aprendiendo de su biodiversidad y creando conciencia para proteger nuestro entorno natural. Soy Kenia Utrera, hasta la próxima. </p></br>
          <p><strong>Dr. JRLC:</strong> Regresamos a "Creando Conciencia", la ciencia que transforma. Y estábamos calentando motores. Estábamos escuchando con atención la cápsula de Kenia y bueno, otra pregunta, doctores. Ya escuchamos que usan trampas, que usan cebo, que usan una serie de herramientas y mecanismos para atrapar, ¿verdad?, para encontrar insectos por donde quiera que ustedes andan ahí trabajando en el campo. ¿Podría platicarnos cuáles son esos hallazgos más destacados sobre la biodiversidad, por ejemplo, de coleópteros, como decía Kenia, y termitas? Y yo veo que por ahí traes de ese tipo de insectos, ¿podría describirlos? </p></br>
          <p><strong>Dr. MPC:</strong> Sí, así es. Los ecosistemas que hemos trabajado nos han reflejado una gran diversidad de formas y de modos de vida que tienen los insectos asociados a esos ecosistemas. En el caso de los de la selva, son las que más nos han dado una cuenta de la mayor diversidad que tenemos alojada en los relictos de selva y los manglares. Por otro lado, también se han estudiado agroecosistemas, y todos y cada uno de ellos tienen asociada una diversión particular que alojan a diferentes grupos de insectos. En el caso de los manglares, hemos encontrado hallazgos importantes en el cual la periferia de los manglares, al tener asociado una diversidad de plantas, se refleja en una diversidad mayor de insectos en la periferia, en los bordes, contrario a las partes internas de los manglares, donde las especies de mangle son muy reducidas, son muy pocas las especies, y disminuye la diversidad de insectos asociados a esos ecosistemas. </p></br>
          <p><strong>Dr. JRLC:</strong> ¿Cuáles han encontrado, por ejemplo? A ver, platícanos, y puedes detallarnos así de manera que quienes nos están escuchando... es muchísimo, eh, que te entiendan cómo son estos insectos, que lo comprendan y luego lo cuidemos. </p></br>
          <p><strong>Dr. MPC:</strong> Así es. Pues los insectos que trabajamos son relativamente pequeños. La gente comúnmente los conoce como polillas porque hacen agujeros a los árboles. Entonces, en los ecosistemas de manglares, por ejemplo, hemos detectado una diversidad amplia de escolítidos y platipódidos, así como barrenadores —le llaman cerambícidos— que pasan toda su vida dentro de los árboles, y la gente los conoce como polillas. Quiere decir que cuando ellos tienen una rama en su casa o un tronco, empiezan a tirar basura, ¿no?, pero son horadaciones de los insectos que están dentro de los troncos. El detalle con estos insectos es que pueden transmitir enfermedades fúngicas. Ellos se alimentan de hongos que cultivan dentro de los tejidos de las plantas y es lo que ahí lo conocen como "polilla". </p></br>
          <p><strong>Dr. JRLC:</strong> ¿Y tienen algún beneficio? Porque yo recuerdo que mis padres o mi familia, cuando ven un árbol que está así, dicen: "está apolillado ese árbol, túmbalo". Este, eso... ¿cómo ves? ¿Hay que tumbarlo o qué hay que hacer con ellos? </p></br>
          <p><strong>Dr. MPC:</strong> Esos insectos a nosotros nos indican que el ecosistema tiene problemas, está en desequilibrio. Por eso son indicadores de calidad del ambiente, porque nos están indicando que esos árboles que ellos están atacando es porque algo los está matando. Entonces, para nosotros es bien importante tener en cuenta cómo está haciéndose ese daño, porque normalmente ellos se alimentan de árboles viejos, ya muy grandes que están en decadencia, pero cuando la situación se vuelve a árboles muy jóvenes, eso quiere decir que hay un problema en el ecosistema. </p></br>
          <p><strong>Dr. JRLC:</strong> Porque estamos haciendo todo lo contrario, no estamos matando... y matamos a los que nos están diciendo "¡hey, aquí hay un peligro!", ¿no? Ahora sí que estamos matando a los que nos cuidan. </p></br>
          <p><strong>Dr. Araceli de la Cruz Pérez: </strong> No puede ser, eso no puede ser. Sí, bueno, aparte, la madera pues tiene mucha utilidad aquí en el estado. La usamos para muebles, por ejemplo, mesas, armarios. Entonces también podemos encontrarlos ahí asociados. Muchas veces, cuando se trabaja la madera, los insectos, como son barrenadores, quedan dentro de esta madera y con el paso del tiempo o las temperaturas, la humedad que esté en la casa hace también que estas proliferen y entonces de repente nuestro mueble ya tira aserrín y no sabemos qué es. Entonces es presencia de un barrenador que está ahí, que llegó de manera natural a la madera, se transformó en un mueble, en una mesa muy bonita, y que muchas veces nos puede causar un daño o un desgaste importante de la madera. </p></br>
          <p><strong>Dr. José Ramón Laínez Canepa: </strong> ¡Qué interesante! ¿No? Pero seguimos todavía ahí, vamos en este programa tan bonito, pero tenemos que ir a un corte promocional y enseguida regresamos en "Creando Conciencia". </p></br>
          <p><strong>Locutor: </strong> “Creando Conciencia". En un momento regresamos. </p></br>
          <p><strong>Dr. Roberto Hernández Barajas: </strong> Continuamos con "La ciencia que transforma". Regresamos a "Creando Conciencia", la ciencia que transforma. Debo ser honesto que, de los insectos, a mí me apasionan mucho los coleópteros, algunas especies de escarabajos, desde que era niño me encantaron. </p></br>
          <p><strong>Dr. José Ramón Laínez Canepa: </strong> ¿Respetabas a los escarabajos? </p></br>
          <p><strong>Dr. Roberto Hernández Barajas: </strong> Sinceramente, sí, y era un poquito invasivo en mis técnicas de aprendizaje sobre ellos. Sí, fui un poquito malicioso, pero bueno, era la búsqueda de conocimiento. Quiero decir, ¿no? Sí, sí, claro que sí. Doctor Manuel, ¿qué especies de termitas y escarabajos destacan como bioindicadores en los ecosistemas forestales? </p></br>
          <p><strong>Dr. Manuel Pérez de la Cruz: </strong> Bien, pues tenemos que también aportar algo sobre la diversidad de escarabajos. Realmente los escarabajos son el grupo más diverso de todos los insectos y artrópodos que existen, cerca de medio millón. Casi, entonces, este, por eso es que son muy abundantes, casi medio millón de especies a nivel mundial. Sí, entonces por eso es que es muy común que podamos encontrar cualquier tipo de escarabajo, y los diseños que tienen son los que más atraen, y la función que tienen, obviamente cada uno tiene su propia historia y es la que nosotros contamos y le atrae mucho a la gente, ¿no?. Por platicarles un ejemplo, de los escarabajos que usan el estiércol de los animales, hay un grupo en particular que se enfoca a colectar el estiércol de animales muy específicos y hacer una bolita. Y son ejemplos de película, son ejemplos de la historia de los egipcios, por ejemplo, de cómo estaban asociados esos insectos. Y lo hemos estudiado hasta la fecha y siguen estando aquí, y tienen una función en el reciclaje de los nutrientes al suelo, enriquecen el suelo. Es uno de esos maravilloso ese grupo. Pero bueno, regresando a la pregunta, nuestros ecosistemas guardan una diversidad bastante considerable y la tenemos registrada en la colección de insectos de la UJAT, en Biológicas. Por ejemplo, hay dos ejemplos de termitas que están asociadas únicamente a los ecosistemas de selva y no los encontramos en otro lado. Eso es bien importante. En el caso de los escarabajos, a pesar de que son muy diversos y abundantes, también hay muy particulares en la selva y en los agroecosistemas o agrícolas ya no se encuentran. ¿Qué quiere decir? Que los relictos de selva que tenemos son los que conservan esa biodiversidad de escarabajos y termitas; igual, están muy muy específicas en esos sitios. Entonces, para nosotros encontrar un tipo de insecto raro como ese, pues nos llena de alegría y enriquece nuestro acervo, que son los insectos colectados. </p></br>
          <p><strong>Dr. José Ramón Laínez Canepa: </strong> ¿Cómo es una termita? A ver, descríbemela, ¿cómo es una termita? </p></br>
          <p><strong>Dr. Manuel Pérez de la Cruz:</strong> Las termitas antiguamente se conocían como el grupo de los isópteros, porque tienen sus alas de igual tamaño. </p></br>
          <p><strong>Dr. José Ramón Laínez Canepa:</strong> No helicóptero, ¿verdad? </p></br>
          <p><strong>Dr. Manuel Pérez de la Cruz:</strong> Exacto, porque hace referencia a las alas. Las alas son el carácter principal que se usa para separarlos. O sea, cada grupo de insecto incluso tiene su etimología basada en alguna estructura de su cuerpo y son maravillosas porque, a pesar de que son pequeñas, muy pequeñas, pueden acabarse una casa de madera, un árbol completo. Hay termitas de madera seca, de madera húmeda, de áreas agrícolas, de áreas forestales, de casas, de las que están asociadas al humano, una de la ciudad o citadina, como le llamamos también. </p></br>
          <p><strong>Dr. Roberto Hernández Barajas:</strong> Interesantes esos animalitos. ¿Y cuáles son las principales amenazas para lograr conservar estas especies en Tabasco? </p></br>
          <p><strong>Dr. Araceli de la Cruz Pérez:</strong> Bueno, una de las principales amenazas es la destrucción de su hábitat natural. La otra es el crecimiento poblacional, que también requiere un mayor espacio para zonas habitacionales. Eso es un impacto importante. La luz artificial, por ejemplo, es otra de las amenazas que pueden tener. La luz artificial puede desorientar a los insectos y entonces eso genera que nosotros veamos grandes cantidades, por ejemplo, en nuestra banqueta, en nuestro patio, en una ventana de nuestra casa. Ellos llegan allí, pero realmente son atraídos de manera obligada, por así decirlo, porque ellos van buscando estas salidas, esta búsqueda de luz. Y bueno, eso afecta mucho en los ciclos reproductivos. Entonces, eso también va diezmando de cierta manera las poblaciones naturales. Porque, ¿qué hacemos nosotros en nuestras casas cuando vemos un animal o un "bicho raro", que le decimos, ¿no? Entonces, usamos Raid, usamos insecticida, la matamos y no sabemos el beneficio que está aportando al sistema. De esas especies, los insectos, en su mayoría los escarabajos, van a ser también polinizadores. Entonces, no solamente degradan la materia orgánica, sino también favorecen que nosotros tengamos frutos. Tabasco es un edén, ¿no?, propiamente dicho. Entonces, hay una gran cantidad de plantas que requieren de la presencia de estos animales y no solamente de un grupo en particular, sino que entran cerambícidos, entran cléridos, por ejemplo, entran brúquidos, también entran dípteros, que son moscas, por ejemplo, las polillas que son muy importantes también como polinizadoras, hablando solamente de los insectos. </p></br>
          <p><strong>Dr. José Ramón Laínez Canepa:</strong> Fíjate, Roberto, que no sé si recuerdas también la entrevista que hicimos, importante sobre los murciélagos y el gran control de la luz, el fototropismo. Y hoy estaba escuchando en la radio que va a haber un programa nacional para iluminar las ciudades por el tema de la delincuencia. Yo hago una pregunta y le hago una pregunta a la presidenta de la república: ¿se ha considerado el tema de que la luz también [afecta] a este tipo de organismos y microorganismos? ¡Qué interesante esto! O sea, no podemos andar haciendo cosas sin considerar todo el bosque, ¿no?, fijándonos nada más en el árbol. </p></br>
          <p><strong>Dr. Roberto Hernández Barajas:</strong> Y precisamente esto es porque la actividad humana tiene impactos, y justamente eso quería preguntarles a los doctores: ¿qué estrategias podrían implementarse para mitigar el impacto humano en estos ecosistemas? </p></br>
          <p><strong>Dr. Manuel Pérez de la Cruz:</strong> Bien, este, lo más importante yo creo que es la conservación de la vegetación nativa. Eso ayuda muchísimo, sobre todo si vamos a los programas de reforestación. Utilizar plantas nativas, sobre todo de cada región. Siempre considerar las plantas nativas, y creo que eso coadyuva mucho a que se mantenga la diversidad, no nada más de insectos, de otros organismos que interactúan con los insectos. Y, sobre todo, si conservamos vegetación, conservamos muchas cosas realmente. </p></br>
          <p><strong>Dr. José Ramón Laínez Canepa:</strong> Entonces, también, así como hacíamos una reflexión de y mencionábamos a la presidenta, también podemos tener una reflexión de lo que es "Sembrando Vida", ¿no?, que es reforestando. Ahí el tema ya es para bien, ¿no? </p></br>
          <p><strong>Dr. Manuel Pérez de la Cruz:</strong> Así es. Los tipos de árboles que estamos estableciendo realmente en el sureste, la gran mayoría son árboles que son de las zonas tropicales, pues eso es bien... </p></br>
          <p><strong>Dr. Roberto Hernández Barajas:</strong> Es algo muy positivo, qué bueno. Y no se están usando agroquímicos, tengo entendido. </p></br>
          <p><strong>Dr. José Ramón Laínez Canepa:</strong> Se usan biofertilizantes. Me gusta ver mi composta y todo ese tipo de fertilizantes que son buenos. </p></br>
          <p><strong>Dr. Roberto Hernández Barajas:</strong> ¡Qué interesante! Pues por ahora vamos a un corte promocional y enseguida regresamos a su programa "Creando Conciencia". </p></br>
          <p><strong>Locutor:</strong> "Creando Conciencia". En un momento regresamos. </p></br>
          <p><strong>Dr. José Ramón Laínez Canepa:</strong> Continuamos con "La ciencia que transforma". Regresamos a "Creando Conciencia", la ciencia que transforma. Y aquí platicábamos, ¿verdad? Qué interesante este tema, qué motivador. O sea, nos hace reflexionar muchísimo en cuanto a tema de aplicaciones científicas y educativas para promover el valor ecológico y la necesidad de conservar esos ecosistemas locales que ustedes han enfatizado. ¿Cómo podemos utilizar esos hallazgos sobre estas especies en programas educativos, en programas de concientización ambiental, en programas nacionales? ¿Qué le podemos decir nosotros a los presidentes, a los gobernadores, a la presidenta? ¿Qué le podemos decir a las autoridades educativas, a todos ellos? </p></br>
          <p><strong>Dr. Araceli de la Cruz Pérez:</strong> Bueno, en este caso de los hallazgos de especies nuevas, lo que podemos aportar o lo que podemos utilizar de esa información es a través de la reeducación de las personas, sobre todo los niños, integrar actividades y programas educativos. Por ejemplo, la educación ambiental es otra de las aplicaciones que pueden llegar a tener. Y aparte de entender que es importante la regulación, la reglamentación fitosanitaria, es un tema muy importante para México porque estamos moviendo especies de plantas, de animales, muchas cosas, tanto vivas como procesadas. Entonces, cuando tenemos un buen marco legal del manejo de estas especies, también estamos protegiendo aquellas especies nativas que son de nuestra zona, de nuestra región, y sobre todo que no vamos a tener presencia de especies invasoras. A veces nosotros movemos plantas sin saber que nos podemos traer un insecto que esté ahí asociado, que no lo vamos a ver al inicio porque muchos de ellos son microscópicos, son muy pequeños. Otros, por ejemplo, podemos traer los huevos y nosotros no sabemos qué viene ahí. Traemos la planta porque nos gustó, está bonita, y luego venimos y traemos un problema y generamos un desequilibrio mucho mayor. Entonces, muchas veces el desequilibrio no se da en un año o en dos años, lo vamos a ver en cinco, en diez, cuando ya esa especie que viene de otro lugar llega, se establece y empieza a generar competencia, sobre todo con los recursos de otras especies nativas que nosotros vamos a tener. </p></br>
          <p><strong>Dr. José Ramón Laínez Canepa:</strong> ¿Tienen ustedes algún ejemplo de algo que haya pasado así? Que en un árbol o un animal le hayan traído algún insecto y bueno, no nos dimos cuenta y nos está perjudicando o está alterando nuestro ecosistema. ¿Podrían platicar al respecto? </p></br>
          <p><strong>Dr. Manuel Pérez de la Cruz:</strong> Sí, hay varios ejemplos de insectos que han venido de otros continentes y generan problemas, sobre todo de defoliadores. Actualmente tenemos un número importante de insectos causando defoliación en otros ecosistemas, no necesariamente de Tabasco, pero este año localizamos como tres insectos en Tabasco que han empezado a causar problemas de defoliación y son de especies invasoras. Es un ejemplo. En el caso de los barrenadores de madera, en lo que más nos hemos enfocado, también hemos detectado que históricamente tenemos varios insectos que vienen de África. ¿Cómo se explica eso? El transporte de madera es en el que se vienen esos insectos y los tenemos aquí. Hay algunos que están establecidos en la ciudad, por ejemplo, y que no los encuentras en el medio natural, sino solamente en árboles que han sido establecidos de manera pues esporádica en algunos parques, por ejemplo. Y esos son de los errores que cometemos. </p></br>
          <p><strong>Dr. José Ramón Laínez Canepa:</strong> ¡Guau! Cuando no saben. Así como nos traen, nosotros también llevamos a otros lados, ¿no? O sea, estamos compartiendo por todos lados. </p></br>
          <p><strong>Dr. Manuel Pérez de la Cruz:</strong> Así es. Hay un ejemplo del área agrícola, sobre todo, que es donde más nos pega la parte de las plagas. No podemos exportar nosotros del sur de México muchos frutales tropicales. Es muy común aquí, se llama cochinilla del hibisco, está asociado a una planta de ornato, pero ataca casi 400 plantas hospederas y de importancia frutal. Entonces eso nos limita mucho como país para poder exportar frutales. Es un ejemplo. </p></br>
          <p><strong>Dr. José Ramón Laínez Canepa:</strong> Qué interesante. Y dentro de esa interdisciplinariedad en los estudios de combinar biología, ecología, tecnología... me acuerdo de que por ahí un día nos diste una cátedra, ¿verdad?, en el tema de, ¿te acuerdas cuando hacíamos reportajes de animales muertos? Nunca se me olvida. ¿Y qué papel juega la investigación interdisciplinaria en el estudio de estos insectos? </p></br>
          <p><strong>Dr. Manuel Pérez de la Cruz:</strong> Bien, este, tenemos un buen ejemplo de cómo la colaboración de varios campos, de varias áreas del conocimiento, se puede integrar y mejorar la información que se genera, porque al final de cuenta, nosotros generamos mucha información que se convierte en información aplicada, para algo sirve. Entonces, tener conocimiento de todas las áreas posibles nos ayuda a tener mejor conocimiento y tener información de mejor calidad. Las presentaciones que se hacen con la información son de mayor calidad. Obviamente tenemos distintos puntos de vista, pero eso enriquece la información. Y todo eso va a caber en que la gente interesada, como en la formación sobre todo de recurso humano, pues tienen mejor información, con imágenes detalladas, con ejemplos, que no es lo mismo imaginarse cómo es un insecto a ver una imagen. Y hay mucha gente de diseño gráfico, por ejemplo, que pudiera hacer bosquejos, implementar herramientas nuevas, porque es muy problemático identificar insectos, entonces eso nos ayudaría mucho en esa área, y es un ejemplo nada más de cómo, digamos, la interdisciplinariedad puede ayudarnos. </p></br>
          <p><strong>Dr. Araceli de la Cruz Pérez:</strong> Bueno, otro sería, por ejemplo, la biología, la química, que nos ayuda a entender cómo se comunican, qué hace que los atraigan. La física también nos puede ayudar a entender los campos de atracción que estos pueden tener. A veces el ruido, un sonido, los campos magnéticos también pueden afectar o beneficiar a las poblaciones de insectos. Otro es el control de plagas, por ejemplo, que requiere de un campo multidisciplinario, tanto de biólogos, agrónomos, zootecnistas, por ejemplo, en el caso de aquellos insectos que van a afectar especies de ganado vacuno o bovino. Entonces, es un campo muy noble. La entomología y la aracnología es un campo noble porque permite también integrar a otras personas con otras disciplinas y generar incluso políticas, planes, programas de manejo, por ejemplo, que van más enfocados a la conservación y al cuidado de estos grupos de animales. Y con ello viene el cuidado también de otros grupos superiores, de aves, por ejemplo, mamíferos, reptiles, anfibios, que también son importantes en los ecosistemas, como lo es el agroecosistema cacao. Por ejemplo, aquí es un agroecosistema muy noble, en realidad nos permite una subsistencia de recursos y también el mantenimiento y la conservación de la biodiversidad del estado. </p></br>
          <p><strong>Dr. José Ramón Laínez Canepa:</strong> Excelente la información que nos están dando, pero vamos a un corte promocional y enseguida regresamos a "Creando Conciencia". </p></br>
          <p><strong>Locutor:</strong> Creando conciencia, la ciencia que transforma. </p></br>
          <p><strong>Dr. Roberto Hernández Barajas:</strong> Continuamos en "Creando Conciencia", la ciencia que transforma. A continuación, vamos a escuchar a la voz del pueblo, la vox populi, preparada por José Aurelio Sosa Olivier. </p></br>
          <p><strong>Dr. José Aurelio Sosa Olivier:</strong> Los insectos desempeñan papeles clave como polinizadores, descomponedores y reguladores naturales en las cadenas tróficas. Además, su sensibilidad a los cambios ambientales los convierte en excelentes bioindicadores. La entomología es la rama de la biología que se dedica al estudio de los insectos. ¿Consideras que estudiar los insectos ayuda a entender y proteger el medio ambiente? </p></br>
          <p><strong>Voz del Pueblo:</strong> Sí, considero que ayuda a entender y pues a proteger, porque, por ejemplo, el tema de las abejas, ¿no?, que dicen que son los mayores polinizadores y que si no hay abejas pues habría una crisis en la parte de agricultura y pues sobre todo para nuestro consumo, y obviamente afecta a otras especies animales que también son de consumo porque pues viven de lo que son las plantas y ya que sin los insectos no habría un medio ambiente adecuado. </p></br>
          <p><strong>Dr. José Aurelio Sosa Olivier:</strong> Desde tu experiencia, ¿has observado cómo los insectos interactúan en el ambiente, como en jardines, parques o áreas naturales? </p></br>
          <p><strong>Voz del Pueblo:</strong> Eso se observa todos los días. En mi caso, como ama de casa, en los jardines, en el área verde de las comunidades y en cualquier espacio en general. Pues no solamente se encuentran donde hay área verde, sino también en las ciudades, pues sí lo he notado. He visto abejas, he visto arañas, he visto hormigas y pues de alguna u otra manera se ve cómo modifican el lugar en el que se observan. </p></br>
          <p><strong>Dr. José Aurelio Sosa Olivier:</strong> ¿Consideras que existen impactos benéficos o, en su caso, perjudiciales provocados por insectos en tu vida diaria? </p></br>
          <p><strong>Voz del Pueblo:</strong> Por partes negativas, pues podría ser un ejemplo las personas que son alérgicas a las abejas. Lo incómodo que es muchas veces interactuar o coexistir con estas especies, como las hormigas y todo eso. Por ejemplo, los mosquitos que dan una enfermedad. Pero ya las moscas, pues sí hay casos en que, por ejemplo, si se paran en algún alimento… Las cucarachas y el comején degradan las cosas. Y las abejas y todo eso ayudan a lo que es la polinización de las flores y a tener pues mejor ambiente. </p></br>
          <p><strong>Dr. José Ramón Laínez Canepa:</strong> No cabe duda de que, en esta reflexión y acción colectiva de la voz del pueblo, la vox populi, pues igual nosotros vamos aprendiendo. Ahorita yo miraba cómo los doctores decían "cierto, comején", corroboraban lo que la voz del pueblo está diciendo. Roberto, ¿qué piensas de lo que acabamos de escuchar? </p></br>
          <p><strong>Dr. Roberto Hernández Barajas:</strong> Pues últimamente he estado leyendo algunos temas interesantes acerca de insectos que están causando algunos problemas. Por ejemplo, es el caso del gusano barrenador que en el sureste está reapareciendo después de que se supone había quedado erradicado hace algunas décadas. Y también me ha preocupado mucho cómo por el cambio climático esta especie Aedes aegypti está ahora en regiones como el Bajío y está causando enfermedades que normalmente eran tropicales, ¿no?, como chikunguña, zika, dengue. Entonces, es un tema muy interesante y se ve que la gente está muy comprometida. </p></br>
          <p><strong>Dr. José Ramón Laínez Canepa:</strong> ¿Qué opinan, doctores, acerca de la vox populi? </p></br>
          <p><strong>Dr. Manuel Pérez de la Cruz:</strong> Varios temas que abordaron se me hacen bastante interesantes. La primera es sobre los insectos polinizadores, que es un tema que se ha hablado sobre el papel que juegan las abejas, pero siempre nos referimos a la abeja Apis mellifera, que es la productora de miel a la que la gente está acostumbrada a referirse. Pero nosotros tenemos una diversidad que incluso es desconocida de abejas nativas, las abejas sin aguijón, las meliponas, y que todo el sureste de México incluso las ha estado promoviendo como productoras de miel, pero esas son excelentes polinizadores de las plantas nativas. Entonces, no nada más las abejas, sino también hay otros grupos de insectos que hacen también la polinización, pero son menos conocidos. Por ejemplo, los cerambícidos, los cléridos que incluso son depredadores, pero visitan flores, van y vienen y traen polen. </p></br>
          <p><strong>Dr. José Ramón Laínez Canepa:</strong> Pero sí se han visto afectadas las abejas. O sea que, si nosotros nos ponemos a estudiar sobre insectos, también tenemos que hablar con esos términos, ¿verdad?, que ustedes manejan, esos nombres tan bonitos. ¡Qué interesante lo que ustedes nos están enseñando! Adelante, doctora. </p></br>
          <p><strong>Dr. Araceli de la Cruz Pérez:</strong> Sí, claro. Bueno, igual, por ejemplo, las polillas son muy importantes también. El valor ecológico que tienen los mosquitos, por ejemplo. La gente dice "hay muchos mosquitos", pero en realidad tienen un valor ecológico muy importante. Son alimento de muchos otros grupos de animales, de insectos, de arañas, de mamíferos; los murciélagos también llegan a comer este tipo de animales. Y, por ejemplo, otro es que el mosquito macho es un polinizador importante. ¡Guau! No solamente es porque la hembra es la que nos extrae la sangre, sino que el macho también tiene un valor. Entonces, los mosquitos, a pesar de ser un poco molestos y ruidosos, el valor que tienen en el sistema es esencial. </p></br>
          <p><strong>Dr. Roberto Hernández Barajas:</strong> De hecho, una pregunta que quedó a la mitad respondida en la sección anterior es acerca de estos contaminantes ambientales que causan problemas con las diversas poblaciones de insectos, por ejemplo, un exceso de luz o un exceso de ruido. ¿Qué nos pueden comentar al respecto? </p></br>
          <p><strong>Dr. Manuel Pérez de la Cruz:</strong> Bien, el crecimiento humano ha sido quizá lo que más nos ha llevado a perder ecosistemas completos, y la contaminación lumínica es algo muy importante para la conservación de los insectos, a los cuales les atrae mucho la luz. Entonces, por eso es que en nuestras casas llegan muchos mosquitos, llegan escarabajos, llegan chinches, llegan una infinidad de insectos que, al parecer, nosotros podemos ver como plagas o como algo malo, pero realmente nosotros mismos los estamos atrayendo, porque también hemos quitado parte de la vegetación de donde originalmente ellos viven. Entonces, la contaminación lumínica ha contribuido mucho a que los insectos vengan a la ciudad y nos puedan generar problemas. </p></br>
          <p><strong>Dr. José Ramón Laínez Canepa:</strong> ¿Cómo afecta esa contaminación? Nos platicabas aquí en cortito, ¿podrías decirle a nuestro público que está aquí con el teléfono, nos están preguntando, “sí, pero ¿cómo le afecta?” </p></br>
          <p><strong>Dr. Manuel Pérez de la Cruz:</strong> Bien, no todos los insectos son atraídos por la luz, pero la gran mayoría sí. Lo que hace es que los estimula, hay una sobreestimulación en sus ojos, en el cual los sensores más importantes son la visión. Entonces, para esos insectos, les atrae, los está sobreestimulando y los hace que vuelen alrededor de ello hasta desecarlos o agotarlos. </p></br>
          <p><strong>Dr. Roberto Hernández Barajas:</strong> ¿Les da un infarto a esos insectos? Y bueno, ¿cómo podemos participar o cómo podemos fomentar que la comunidad se involucre en tareas de conservación de estas especies y de sus hábitats? </p></br>
          <p><strong>Dr. Araceli de la Cruz Pérez:</strong> Bueno, una de ellas es plantando o sembrando plantas que pueden ser medicinales, por ejemplo, pueden ser que nos den algún beneficio, sombra. Si tenemos traspatio, algún frutal. Evitar la luz, por ejemplo, sería otra actividad que se pudiera realizar. También, aparte de eso, alrededor de nuestras casas siempre van a estar presentes, entonces hay que ser conscientes de que nosotros también coexistimos con ellos. Ellos no nos invaden, ellos no nos atacan, ellos también están intentando adaptarse a un cambio al cual también nosotros intentamos hacerlo. Entonces, si nosotros respetamos su existencia, yo creo que podemos sobrellevar mucho mejor los cambios que estamos viendo actualmente en el clima, por ejemplo. </p></br>
          <p><strong>Dr. Manuel Pérez de la Cruz:</strong> Y en el sonido, hablaban algo del sonido, cómo afecta. Si el sonido es otra forma de contaminación, igual que para el humano. Los insectos son ultrasensibles, escuchan sonidos ultrasensibles y tienen sensilios especializados en forma de placa para poder escucharlos y son sobreestimulados igual. Sí pueden generar problemas. De hecho, de eso se basan los pequeños radares que se diseñan en las cuestiones bélicas, y de ahí usaron herramientas para ahuyentar a los mosquitos utilizando un radar, porque ellos escuchan los ultrasonidos. </p></br>
          <p><strong>Dr. José Ramón Laínez Canepa:</strong> ¡Ah, ¡qué interesante este tema de esta tarde, como han sido todos los temas que hemos estado viendo con nuestros investigadores que son de primer nivel! Pero tenemos que ir a un corte promocional y vamos a ir cerrando ya en el siguiente bloque nuestro programa. </p></br>
          <p><strong>Dr. José Ramón Laínez Canepa:</strong> Bien, regresamos al cierre de "Creando Conciencia". No nos queremos ir, pero bueno, hay que hacerlo. Y vamos rápidamente, Roberto, una reflexión sobre el valor de estos insectos, rápidamente ahí tu último comentario. </p></br>
          <p><strong>Dr. Roberto Hernández Barajas:</strong> Pues yo me llevo tres aprendizajes. Primero, que debemos coexistir con estas especies. Tenemos también que aprender mucho de ellas, respetarlas, y solo aprendiendo de ellas podemos aplicarlo a la mejora de nuestra sociedad. </p></br>
          <p><strong>Dr. José Ramón Laínez Canepa:</strong> Extraordinaria tu reflexión. Doctora Araceli. </p></br>
          <p><strong>Dr. Araceli de la Cruz Pérez:</strong> Bueno, otra forma de crear conciencia es aceptar que estos animalitos van a estar siempre a nuestro alrededor. No pensarlos, no verlos como un enemigo, sino como un aliado. Nos van a dar muchos beneficios. Investigar o acercarnos, por ejemplo, a los museos, a las pláticas, talleres, conferencias, e ir aprendiendo poco a poco. Es nuestra responsabilidad educarnos, reeducarnos más bien, para poder hacer ese cambio de mentalidad. </p></br>
          <p><strong>Dr. José Ramón Laínez Canepa:</strong> Extraordinario. Adelante, mi estimado doctor Manuel Pérez de la Cruz. </p></br>
          <p><strong>Dr. Manuel Pérez de la Cruz:</strong> Yo creo que, estando dispuestos a aprender, como siempre, todos debemos estar abiertos a eso, a aprender cosas nuevas, y los insectos tienen muchísima información que darnos para poderlos comprender y entender y llevar las cosas bien, ¿no? Porque eso es lo que se busca, conservar los ecosistemas, vivir mejor. Nuestra calidad de vida puede ser mejor si los entendemos, esa es la clave, yo creo. Y bueno, nosotros siempre hemos estado dispuestos a difundir la información que generamos, sobre todo en el estado, para poder ponerla disponible a cualquier público. Hacemos foros, hacemos pláticas, damos talleres, enseñamos parte de la colección que tenemos alojada en la UJAT, y tenemos mucho que enseñar en cuanto a diversidad de insectos. </p></br>
          <p><strong>Dr. José Ramón Laínez Canepa:</strong> Nosotros somos testigos de su gran labor. Pues bien, hoy descubrimos que los insectos, aunque pequeños, sostienen grandes ecosistemas. Proteger su hábitat no es solo un acto de conservación, sino un compromiso con el equilibrio de la vida en nuestro planeta. Reflexionemos: cada acción cuenta y sigamos creando conciencia juntos. </p></br>
          <p><strong>Dr. Roberto Hernández Barajas:</strong> Se despide de ustedes su amigo... </p></br>
          <p><strong>Dr. José Ramón Laínez Canepa:</strong> José Ramón Laínez Canepa. </p></br>
          <p><strong>Dr. Roberto Hernández Barajas:</strong> Roberto Nandez. </p></br>
          <p><strong>Dr. Manuel Pérez de la Cruz:</strong> Manuel Pérez de la Cruz. </p></br>
          <p><strong>Dra. Araceli de la Cruz Pérez:</strong> Araceli de la Cruz.  </p></br>
          <p><strong>Dr. José Ramón Laínez Canepa:</strong> Y agradecemos a la Dirección General de Comunicación Social y a la División Académica de Ciencias Biológicas, y a todos los que nos escuchan cada miércoles. Muchas gracias por estar con nosotros en "Creando Conciencia" y también a nuestra productora, la licenciada Ayara. Muchas gracias, porque sin ella esto no saldría adelante. ¡Hasta la próxima! </p></br>
          <p><strong>Locutor:</strong> "Creando Conciencia", la ciencia que transforma es una producción de Radio UJAT, voz universitaria. Legado UJAT, estudio en la duda, acción en la fe. </p></br>
          <p><strong>LOCUTOR:</strong> "Creando Conciencia, la ciencia que transforma". Es una producción de Radio UJAT, la voz universitaria. “Legado UJAT, estudio en la duda, acción en la fe”.</p></br>`,
        } as PageContent,
        {
          type: "text",
          content: `<h1><strong>Mirada desde la Ciencia</strong></h1>
          <h3>La vida que sostiene lo invisible</h3>
          Hay ecosistemas que se describen con palabras grandes: selva, manglar, biodiversidad, equilibrio. Y sin embargo, la maquinaria que los mantiene en pie suele ser diminuta. En el fondo, la naturaleza no depende únicamente de lo evidente —árboles, ríos o grandes animales—, sino de una vida que trabaja en silencio, casi siempre fuera de nuestra atención. En esta conversación sobre la biodiversidad oculta, la ciencia plantea una idea que incomoda y al mismo tiempo esclarece: los insectos no son un detalle menor del paisaje; son la infraestructura viva que sostiene la vida misma. </br>
Basta una pausa para reconocerlo. El mundo está lleno de organismos que aparecen y desaparecen en la periferia de nuestros días: revolotean en una lámpara, se esconden entre hojas, atraviesan el aire sin pedir permiso, se vuelven parte de la rutina sin que los notemos. Y ahí reside el primer desafío: no protegemos lo que no comprendemos. Muchas veces, la vida invisible se confunde con molestia, amenaza o suciedad. La ciencia, en cambio, obliga a reeducar la mirada: cuando no conocemos algo, no lo vemos; pero cuando lo conocemos, empezamos a reconocerlo en todas partes. </br>
Desde esta perspectiva, el conocimiento no es solo información: es conciencia ecológica. Entender a los insectos no es aprender una lista de nombres, sino descubrir el lugar que ocupan en el tejido de la vida. Se insiste en una idea esencial: los insectos forman parte de la cadena trófica, y en muchos casos son su base. Alimentan a aves, anfibios, reptiles y otros insectos. Se convierten en el puente entre la materia orgánica que se descompone y la energía que circula. Sin ellos, la pirámide alimenticia pierde estabilidad; y cuando esa pirámide se vuelve frágil, el ecosistema entero comienza a romperse por dentro, aunque desde fuera todavía parezca intacto. </br>
La conversación también revela que la biodiversidad no se reparte con justicia geométrica. Hay zonas que sostienen más vida que otras. En los manglares, por ejemplo, se observan diferencias marcadas entre el borde y el interior: en la periferia, donde se asocian más plantas, la diversidad de insectos se multiplica; adentro, donde dominan pocas especies vegetales, esa diversidad disminuye. El mensaje es claro incluso para quien nunca ha realizado trabajo de campo: donde hay más diversidad de vegetación, hay más oportunidades para la vida. Los insectos lo confirman sin necesidad de discursos: aparecen donde el ecosistema ofrece nichos, recursos y condiciones para sostenerlos. </br> 
Pero quizás el giro más profundo ocurre cuando se aborda una escena cotidiana: un árbol perforado, una rama con agujeros, una madera que “tira aserrín”. La reacción cultural suele ser inmediata: eliminar. La ciencia propone lo contrario: interpretar. Esos insectos no son solo consumidores de madera; en muchos casos son indicadores ambientales, señales biológicas de que algo está ocurriendo en el ecosistema. Si atacan árboles viejos y en decadencia, cumplen un rol dentro del ciclo natural; si aparecen en árboles jóvenes, pueden estar anunciando un estrés mayor, un problema ecológico de fondo. De pronto, aquello que llamamos “plaga” se transforma en evidencia; y aquello que combatimos sin pensar se vuelve mensaje: algo está cambiando, algo está fallando, algo se está debilitando. </br> 
Esa misma lógica se extiende al hogar. Los insectos no pertenecen únicamente al bosque; viajan con la madera, con los materiales, con los objetos que transformamos. Lo biológico se instala en lo doméstico con la naturalidad de quien ha estado siempre ahí. Y entonces aparece una reflexión incómoda: la ciudad no está separada de la naturaleza, solo está hecha para ignorarla. La naturaleza no llega “de repente”; lo que ocurre es que el equilibrio se mueve, las condiciones cambian, y los organismos buscan adaptarse. </br>
En medio de esta mirada, surgen ejemplos que despiertan admiración. Se habla de escarabajos que reciclan nutrientes incorporando materia orgánica al suelo, enriqueciendo la tierra y cerrando ciclos de materia. La imagen es poderosa: mientras el mundo humano produce desechos y busca cómo gestionarlos, existen organismos que realizan —sin ruido y sin aplausos— una forma natural de economía circular. Comprenderlo cambia el juicio: despreciar insectos es despreciar los procesos que permiten que el suelo se regenere, que la fertilidad se conserve, que el ecosistema siga funcionando. </br>
Sin embargo, el episodio no se queda en la admiración. Avanza hacia lo urgente. Se expone que la biodiversidad enfrenta amenazas que parecen modernas, pero son profundamente simples: destrucción del hábitat, expansión urbana, uso indiscriminado de insecticidas. Y se suma un factor que rara vez se discute con seriedad: la luz artificial. Para muchos insectos, la luz no es un adorno urbano: es un estímulo capaz de desorientarlos, atraerlos y agotarlos. Se vuelven prisioneros del resplandor. Vuelan una y otra vez alrededor de una fuente luminosa hasta desecarse, agotarse y morir. Y entonces el problema se invierte: creemos que “hay demasiados insectos”, cuando en realidad somos nosotros quienes los atraemos y los colocamos en condiciones que los destruyen. </br> 
La ciencia plantea aquí una lección dura: no podemos intervenir el entorno sin consecuencias. Cada decisión humana reorganiza el paisaje biológico. Y cuando esa reorganización ocurre sin reflexión, aparecen desequilibrios que se interpretan como molestias, cuando en realidad son advertencias. Por eso, la conservación se presenta como un acto estratégico, no simbólico. Conservar vegetación nativa —reforestar con especies locales— significa sostener cadenas ecológicas completas. Es proteger insectos, pero también a los organismos que dependen de ellos. Es proteger el tejido y no solo el hilo. </br>
La reflexión se amplía con otra realidad: el mundo no solo se transforma por lo que destruimos, sino por lo que desplazamos. Mover plantas, transportar madera, intercambiar materiales entre regiones puede llevar consigo organismos invisibles: huevos microscópicos, especies que se establecen sin ser notadas y que, años después, generan competencia, defoliación o alteraciones graves. La crisis ecológica, en muchos casos, no empieza con una explosión, sino con una rutina. No comienza con un desastre evidente, sino con decisiones pequeñas repetidas sin conciencia. </br>
Y entonces el episodio encuentra su dimensión ética. La conversación con el público revela una percepción dual: los insectos son necesarios, pero también incómodos; son vida, pero también temor. La ciencia no niega esa tensión; la ordena. Reconoce que incluso los organismos menos apreciados cumplen funciones ecológicas: algunos polinizan, otros se integran como alimento en la red biológica, otros sostienen procesos de regulación ambiental. Lo que cambia no es el insecto, sino el criterio humano: dejar de reaccionar con exterminio automático y reemplazar la reacción por entendimiento. </br> 
Así, el cierre de este capítulo no funciona como una conclusión, sino como una invitación: crear conciencia significa aprender a convivir. Coexistir no es aguantar; es comprender. No es resignarse; es actuar con responsabilidad. Los insectos guardan información valiosa para interpretar el estado del ambiente y para preservar la vida que depende de él, incluida la nuestra. Protegerlos no es romanticismo: es inteligencia ecológica. Y si alguna enseñanza queda como hilo conductor, es esta: cuando cuidamos lo invisible, también estamos cuidando el futuro. </br>`,
        } as PageContent,
         ],
     },
    // CAPITULO 3 *********************************************************************************
     {
      title: "Invitados: Kenia Leticia Utrera Cabrera, Mairé Paulina Torres García, Danna Paola Correa García, Jessica Lizbeth Córdova Palma",
      pages: [
        {
          type: "cover",
          title: "Invitados: Kenia Leticia Utrera Cabrera, Mairé Paulina Torres García, Danna Paola Correa García, Jessica Lizbeth Córdova Palma",
        } as PageContent,

        
        ],
     },
  // CAPITULO 4 *********************************************************************************
     {
      title: "Invitado: Dr. Carlos Manuel Burelo Ramos",
      pages: [
        {
          type: "cover",
          title: "Invitado: Dr. Carlos Manuel Burelo Ramos",
        } as PageContent,

        
        ],
     },
        // CAPITULO 5 *********************************************************************************
     {
      title: "Invitados: Dr. Manuel Pérez de la Cruz y Dra. Aracely de la Cruz Pérez",
      pages: [
        {
          type: "cover",
          title: "Invitados: Dr. Manuel Pérez de la Cruz y Dra. Aracely de la Cruz Pérez",
        } as PageContent,

        
        ],
     },
        // CAPITULO 6 *********************************************************************************
     {
      title: "Invitados: Manatí",
      pages: [
        {
          type: "cover",
          title: "Invitados: Manatí",
        } as PageContent,

        
        ],
     },
        // CAPITULO 7 *********************************************************************************
     {
      title: "Invitados: Tecnologías",
      pages: [
        {
          type: "cover",
          title: "Invitados: Tecnologías",
        } as PageContent,

        
        ],
     },
        // CAPITULO 8 *********************************************************************************
     {
      title: "Invitados: Soriasis",
      pages: [
        {
          type: "cover",
          title: "Invitados: Soriasis",
        } as PageContent,

        
        ],
     },
        // CAPITULO 9 *********************************************************************************
     {
      title: "Invitados: Bioenergías",
      pages: [
        {
          type: "cover",
          title: "Invitados: Bioenergías",
        } as PageContent,

        
        ],
     },
        // CAPITULO 10 *********************************************************************************
     {
      title: "Invitados: Metales Pesados",
      pages: [
        {
          type: "cover",
          title: "Invitados: Metales Pesados",
        } as PageContent,

        
        ],
     },
         


    
    // {
    //   title: "Mujeres en la Ciencia",
    //   pages: [
    //     {
    //       type: "cover",
    //       title: "Mujeres en la Ciencia"
    //     } as PageContent,
    //     {
    //       type: "biography",
    //       authorName: "Mujeres Científicas de la UJAT",
    //       content: `
    //         <p>El programa <strong>"Mujeres en la Ciencia"</strong> de la Universidad Juárez Autónoma de Tabasco representa un esfuerzo institucional por visibilizar, impulsar y celebrar la participación femenina en las áreas STEM (Ciencia, Tecnología, Ingeniería y Matemáticas). A través de este programa, la UJAT reconoce las contribuciones de investigadoras, docentes y estudiantes que día a día rompen estereotipos y abren caminos en campos tradicionalmente masculinizados.</p>

    //         <p>Las mujeres científicas de la UJAT provienen de diversas disciplinas: desde la biotecnología hasta la ingeniería ambiental, pasando por las ciencias sociales y la innovación tecnológica. Muchas de ellas compaginan la investigación de alto nivel con la docencia, la divulgación científica y el compromiso social, siendo modelos a seguir para las nuevas generaciones.</p>

    //         <p>Este capítulo está dedicado a ellas: a su perseverancia, a su talento, a su capacidad de transformar la ciencia en acción concreta para el bienestar de la sociedad. Son mujeres que investigan sobre cambio climático, conservación de ecosistemas, desarrollo de tecnologías sostenibles, educación inclusiva y salud pública. Son líderes que inspiran y forman a las futuras científicas de México.</p>

    //         <p>El programa no solo busca aumentar la representación femenina en la ciencia, sino también crear redes de apoyo, mentoría y colaboración que permitan a las mujeres desarrollar todo su potencial. A través de conferencias, talleres, estancias de investigación y reconocimientos, la UJAT reafirma su compromiso con la equidad de género en el ámbito científico.</p>

    //         <p>Estas mujeres son la prueba viva de que la ciencia no tiene género, solo pasión, rigor y creatividad. Su legado es la inspiración para que más niñas y jóvenes se atrevan a soñar con carreras científicas y a construir un futuro donde la igualdad sea una realidad tangible.</p>
    //       `
    //     } as PageContent,
    //     {
    //       type: "text",
    //       content: `El programa "Mujeres en la Ciencia" de la UJAT fomenta la participación femenina en áreas STEM. Este capítulo narra historias de éxito y los retos que enfrentan las mujeres científicas en la universidad.`
    //     } as PageContent,
    //     {
    //       type: "chatbot",
    //       config: {
    //         persona: "You are an inspiring mentor: supportive, insightful, and empowering.",
    //         instruction: `Focus on Chapter 3: ¿Por qué es importante la inclusión de mujeres en la ciencia? ¿Qué desafíos y logros se destacan en el programa de la UJAT?`
    //       }
    //     } as PageContent,
    //     {
    //       type: "form",
    //       fields: [
    //         { type: "text", id: "q1", label: "¿Qué historia te inspiró más?", multiline: true },
    //         { type: "number", id: "q2", label: "¿Cuántas mujeres científicas conoces en tu entorno?", min: 0, max: 100 },
    //         { type: "text", id: "q3", label: "¿Cómo puede la UJAT apoyar más a las mujeres en STEM?", multiline: true },
    //       ]
    //     } as PageContent,
    //   ],
    // },
  ],
};
