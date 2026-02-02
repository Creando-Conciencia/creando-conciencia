import { Book, PageContent } from "@/lib/types/book";

// Sample book with per-chapter chatbot + form (5 questions)
export const sampleBook: Book = {
  id: "creando-conciencia-ujat-2025",
  title: "UJAT 2025: Transformando vidas y sociedad a través de la ciencia",
  author: "Dr. José Ramón Laines Canepa",
  year: 2,
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
      title: "Lic. Guillermo Narvaez Ozorio, Rector de la UJAT",
      pages: [
        {
          type: "cover",
          title: "Invitado: Lic. Guillermo Narváez Osorio, Rector de la UJAT",
          image: "/lic_guillermo_narvaez.jpeg",
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

        {
          type: "biography",
          authorName: "Kenia Leticia Utrera Cabrera",
          image: "/Kenia_Leticia_Utrera_Cabrera.jpg",
          content: `
            <p>Kenia Leticia Utrera Cabrera es egresada de la Licenciatura en Ingeniería Ambiental por la DACBiol-UJAT, con experiencia en liderazgo estudiantil y gestión de residuos. Ha colaborado con SEMARNAT en Tabasco y es cofundadora de EPLASTO, proyecto de economía circular reconocido por Enactus México y presentado en la Universidad de Harvard y el MIT. Actualmente es presidenta de la Sociedad de Alumnos de la DACBiol-UJAT y participa en AMICA y AIDIS Joven México.</p>`,
        } as PageContent,
       {
          type: "biography",
          authorName: "Mairé Paulina Torres García",
          image: "/Kenia_Leticia_Utrera_Cabrera.jpg",
          content: `
            <p>Mairé Paulina Torres García es egresada de la Licenciatura en Ingeniería Ambiental por la DACBiol-UJAT, con enfoque en sostenibilidad y gestión de residuos. Es presidenta del Comité Estudiantil de AMICA en la DACBiol-UJAT, donde promueve la participación y formación académica del estudiantado. Forma parte de EPLASTO en el área financiera y de análisis de riesgos, contribuyendo al desarrollo y viabilidad del proyecto, presentado en Harvard y el MIT.</p>`,
        } as PageContent,
        {
          type: "biography",
          authorName: "Danna Paola Correa García",
          image: "/Dr_Carlos_Manuel_Burelo_Ramos.jpg",
          content: `
            <p>Danna Paola Correa García es Licenciada en Ingeniería Ambiental por la DACBiol-UJAT y participa activamente en la Sociedad de Alumnos de la DACBiol-UJAT y en el Comité Estudiantil de AMICA. Cuenta con experiencia en el manejo y tratamiento de residuos sólidos urbanos y de manejo especial. Se desempeña como directora de operaciones y de producto en EPLASTO, proyecto de economía circular reconocido por Enactus México y presentado en instituciones como Harvard y el MIT.</p>`,
        } as PageContent,
       {
          type: "biography",
          authorName: "Jessica Lizbeth Córdova Palma",
          image: "/Dr_Carlos_Manuel_Burelo_Ramos.jpg",
          content: `
            <p>Jessica Lizbeth Córdova Palma es egresada de la Licenciatura en Ingeniería Ambiental por la DACBiol-UJAT. Realizó sus prácticas profesionales en PEMEX, en el área de Seguridad, Salud en el Trabajo y Protección Ambiental. Actualmente es Chief Technology Officer (CTO) de EPLASTO, emprendimiento de economía circular enfocado en el desarrollo de materiales a partir de plásticos reciclados, reconocido por Enactus México y presentado en Harvard y el MIT.</p>`,
        } as PageContent,
        {
          type: "text",
          content: `<h1><strong>Introducción del Capítulo</strong></h1>
          EPLASTO: Transformando Residuos en Innovación Universitaria desde Harvard y MIT
En un contexto global marcado por la crisis ambiental y la acumulación de residuos plásticos, las universidades se han convertido en espacios clave para la generación de soluciones innovadoras y sostenibles. En este escenario, la ciencia aplicada, la creatividad y el compromiso social se articulan para responder a problemáticas locales con impacto más allá del aula, demostrando que el conocimiento puede transformarse en acción concreta. 
Este capítulo presenta el proyecto EPLASTO: Transformando Residuos en Innovación Universitaria desde Harvard y MIT, a partir de una entrevista realizada en el programa Creando Con-Ciencia: La ciencia que transforma. En esta conversación participan Kenia Leticia Utrera Cabrera, Mairé Paulina Torres García, Danna Paola Correa García y Jessica Lizbeth Córdova Palma, estudiantes de Ingeniería Ambiental de la Universidad Juárez Autónoma de Tabasco, quienes comparten la experiencia de desarrollar y presentar su iniciativa en el Enactus Innovation Bootcamp 2024, celebrado en Cambridge, Massachusetts. 
A lo largo del capítulo, el lector conocerá cómo surgió EPLASTO como respuesta a la acumulación de plásticos y al desecho de mobiliario en mal estado, y cómo esta problemática se convirtió en una oportunidad para crear un material alternativo a la madera, elaborado a partir de polipropileno reciclado. Asimismo, se explora el proceso técnico que distingue al proyecto, particularmente el uso de biogás como fuente de energía, integrando principios de economía circular y reducción de la huella ambiental. 
El capítulo también aborda los retos tecnológicos, logísticos y formativos que enfrentaron las autoras, así como los aprendizajes obtenidos al interactuar con expertos de universidades como Harvard y el MIT. Estas experiencias permitieron replantear la visión del proyecto, fortalecer su enfoque de impacto y trazar rutas para su escalamiento y replicabilidad en otros contextos. 
Finalmente, esta experiencia invita a reflexionar sobre el papel de las y los estudiantes como agentes de cambio. EPLASTO demuestra que la innovación ambiental puede nacer desde lo local, crecer con respaldo académico y proyectarse a escenarios internacionales, inspirando a nuevas generaciones a transformar los residuos en oportunidades y a construir soluciones sostenibles con conciencia social y científica.`,
        } as PageContent,
        {
          type: "text",
          content: `<h1><strong>Transcripción Editada de la Entrevista</strong></h1>
          En una jornada marcada por el entusiasmo, la innovación y la conciencia ambiental, los micrófonos de Radio UJAT y Creando Con-Ciencia: La ciencia que transforma se abrieron para dar voz a una experiencia universitaria que trascendió fronteras. En esta emisión del programa, dirigido por los doctores José Ramón Laines Canepa y Roberto Hernández Barajas, se recibió a Kenia Leticia Utrera Cabrera, Mairé Paulina Torres García, Danna Paola Correa García y Jessica Lizbeth Córdova Palma, egresadas de Ingeniería Ambiental de la UJAT e integrantes del proyecto EPLASTO, quienes platicaron sobre el tema “EPLASTO: Transformando Residuos en Innovación Universitaria desde Harvard y MIT”.</br>
Desde el inicio de la conversación, las invitadas compartieron el origen del proyecto, el cual surgió a partir de una problemática cotidiana, pero poco atendida: la acumulación de plásticos y el desecho constante de mobiliario en mal estado. Lejos de observar este fenómeno únicamente como un problema ambiental, el equipo decidió convertirlo en una oportunidad para diseñar una alternativa sostenible que respondiera a las necesidades locales y redujera la presión sobre los recursos naturales. </br>
A lo largo de la entrevista, Kenia explicó que EPLASTO nació desde el trabajo académico, pero evolucionó rápidamente hacia un proyecto con visión social y ambiental. La idea central consistió en desarrollar un material alternativo a la madera, elaborado a partir de polipropileno reciclado, capaz de ser utilizado en mobiliario y otros productos, contribuyendo así a la reducción de residuos y a la disminución de la deforestación. </br>
El diálogo avanzó hacia el proceso técnico que distingue al proyecto. Danna detalló cómo el equipo exploró distintas formas de transformación del plástico hasta consolidar un modelo que integra principios de economía circular. Uno de los elementos más innovadores fue el uso de biogás como fuente de energía en el proceso, lo que permitió reducir la huella ambiental y reforzar el enfoque sustentable de la propuesta. </br>
Jessica complementó esta explicación al abordar el componente tecnológico, señalando que el desarrollo del material implicó pruebas, ajustes y aprendizaje constante. La experiencia, explicó, no solo fortaleció sus conocimientos técnicos, sino que también evidenció la importancia del trabajo interdisciplinario y de la innovación aplicada desde la ingeniería ambiental. </br> 
Por su parte, Mairé destacó el papel de la planeación financiera y del análisis de riesgos para asegurar la viabilidad del proyecto. Señaló que uno de los mayores retos fue traducir una idea ambiental en una propuesta sólida, capaz de sostenerse en el tiempo y de generar impacto real. Este enfoque permitió que EPLASTO evolucionara de un ejercicio académico a un emprendimiento con proyección nacional e internacional. </br>
Uno de los momentos centrales del programa fue la experiencia del equipo en el Enactus Innovation Bootcamp 2024, realizado en Cambridge, Massachusetts. Las entrevistadas compartieron cómo la oportunidad de presentar EPLASTO en espacios como la Universidad de Harvard y el Massachusetts Institute of Technology (MIT) representó un punto de inflexión para el proyecto. El intercambio con expertos, estudiantes y mentores internacionales les permitió ampliar su visión, recibir retroalimentación crítica y fortalecer su propuesta. </br>
La conversación también abordó los desafíos personales y académicos que implicó participar en un evento de esta magnitud. Las invitadas coincidieron en que el proceso demandó disciplina, organización y confianza en su trabajo, pero también reafirmó la importancia de creer en las ideas desarrolladas desde las universidades públicas y de apostar por soluciones locales con alcance global. </br>
Hacia el cierre, el programa retomó una reflexión clave: el papel de las y los estudiantes como agentes de cambio frente a la crisis ambiental. EPLASTO, coincidieron las entrevistadas, demuestra que la innovación no está reservada a grandes industrias, sino que puede surgir desde el aula, impulsada por la curiosidad, el compromiso social y el trabajo colaborativo. </br>
Finalmente, la entrevista concluyó con un mensaje claro y esperanzador. Transformar residuos en oportunidades no solo es posible, sino necesario. La experiencia de EPLASTO invita a repensar nuestra relación con los materiales que desechamos y a reconocer que la ciencia, cuando se combina con conciencia y acción, tiene el poder de generar soluciones sostenibles con impacto real en la sociedad. </br>
`,
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
              id: "q3",
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
          xxx`,
        } as PageContent,
        {
          type: "text",
          content: `<h1><strong>Mirada desde la Ciencia</strong></h1>
          <h3>.</h3>
          El episodio dedicado a EPLASTO plantea una tesis central clara: la innovación ambiental universitaria cobra sentido pleno cuando el conocimiento técnico se traduce en soluciones materiales concretas que dialogan con el territorio, el contexto social y los límites ambientales. Desde esta perspectiva, el proyecto es presentado no solo como un ejercicio académico, sino como una propuesta de economía circular aplicada que cuestiona la noción tradicional de “residuo” y redefine el papel de la ingeniería ambiental como disciplina de intervención directa. </br>
Un primer eje del diálogo es la revalorización del plástico desde la ciencia aplicada. Se sostiene que el problema ambiental no reside únicamente en el material, sino en los modelos lineales de producción y descarte. EPLASTO parte de un diagnóstico técnico: el polipropileno, ampliamente utilizado y desechado, conserva propiedades mecánicas que permiten su reincorporación a nuevos ciclos productivos. Esta mirada científica rompe con la lógica de “usar y tirar” y propone un cambio conceptual fundamental: el residuo como recurso estratégico. </br>
El segundo eje se centra en la economía circular como metodología operativa, no como discurso abstracto. La transformación de plástico reciclado en un material alternativo a la madera implica intervenir simultáneamente en varios frentes: gestión de residuos, reducción de presión sobre ecosistemas forestales y diseño de materiales con mayor vida útil. Desde la ciencia, se enfatiza que la sostenibilidad no se alcanza con una sola acción aislada, sino con la coherencia entre diseño del producto, procesos de transformación y decisiones energéticas. </br>
En este punto emerge un tercer eje clave: la integración de criterios energéticos y de huella ambiental. El uso de biogás como fuente energética dentro del proceso productivo es presentado como una decisión técnica con implicaciones éticas. La ciencia, se argumenta, no es neutral: cada elección tecnológica genera impactos acumulativos. EPLASTO incorpora esta conciencia al reducir emisiones asociadas al proceso y alinear sus objetivos ambientales con los medios utilizados para alcanzarlos, evitando contradicciones entre discurso y práctica. </br>
El cuarto eje aborda el proceso de innovación como experiencia formativa. El desarrollo del proyecto no es descrito como una trayectoria lineal, sino como un ciclo de ensayo, error, ajuste y aprendizaje continuo. Desde la mirada científica, este proceso es tan relevante como el producto final, ya que consolida competencias clave: análisis de viabilidad, evaluación de riesgos, trabajo interdisciplinario y toma de decisiones basada en evidencia. La innovación, en este sentido, se entiende como una práctica situada y progresiva. </br>
Un quinto eje es el vínculo entre ciencia, sociedad y uso cotidiano. El proyecto no se limita a demostrar factibilidad técnica, sino que busca responder a necesidades reales mediante aplicaciones concretas como mobiliario. Esta orientación permite que el conocimiento salga del ámbito académico y se inserte en la vida diaria, reforzando la idea de que la ingeniería ambiental no solo mitiga impactos, sino que propone alternativas funcionales y socialmente pertinentes. </br>
El sexto eje introduce la dimensión de escalabilidad y validación externa. La presentación del proyecto en espacios internacionales como Harvard y el MIT no es abordada como un logro simbólico, sino como evidencia de que el conocimiento generado en universidades públicas puede competir en escenarios globales. Esta experiencia refuerza una idea central: la calidad científica no depende del origen, sino del rigor metodológico, la claridad del propósito y la capacidad de comunicar impacto. </br>
Finalmente, el episodio se cierra con una reflexión de fondo sobre la responsabilidad ética del conocimiento. EPLASTO no se presenta como una solución definitiva al problema del plástico, sino como una dirección posible: repensar los materiales, asumir corresponsabilidad en el ciclo de consumo y diseñar alternativas que integren ciencia, conciencia ambiental y compromiso social. La idea final es contundente: la innovación universitaria tiene verdadero valor cuando convierte conocimiento en acción y cuando esa acción contribuye, de manera tangible, a la construcción de un futuro más sostenible. </br>
`,
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
        {
          type: "biography",
          authorName: "Dr. Carlos Manuel Burelo Ramos",
          image: "/Dr_Carlos_Manuel_Burelo_Ramos.jpg",
          content: `
            <p>El Dr. Carlos Manuel Burelo Ramos es Biólogo por la Universidad Juárez Autónoma de Tabasco (UJAT) y Doctor en Ciencias con especialidad en Sistemática por el Instituto de Ecología (INECOL). Es Investigador Nacional Nivel I, miembro del Sistema Estatal de Investigadores y Profesor-Investigador de tiempo completo en la División Académica de Ciencias Biológicas de la UJAT, donde dirige el Laboratorio de Manglares Interiores. Su investigación se centra en la flora de Tabasco, con énfasis en estudios taxonómicos y en la conservación de ecosistemas estratégicos. Ha publicado 19 artículos científicos y es coautor de un trabajo en Proceedings of the National Academy of Sciences que documentó los manglares más tierra adentro y a mayor altitud del mundo, ubicados en el río San Pedro Mártir. Este hallazgo lo ha consolidado como referente internacional en estudios de manglares. Además, lideró el estudio técnico justificativo para la declaratoria del río San Pedro Mártir como Reserva de la Biosfera Wanha’ y actualmente coordina un proyecto de restauración con la meta de producir 60,000 plantas en un año, con financiamiento de REPSOL, SLB y la UJAT.</p>`,
        } as PageContent,
        {
          type: "text",
          content: `<h1><strong>Introducción del Capítulo</strong></h1>
          Este capítulo abre una ventana hacia uno de los hallazgos ecológicos más fascinantes del sureste de México: la existencia de manglares interiores en el río San Pedro Mártir, un ecosistema que desafía lo que comúnmente creemos saber sobre los manglares y su relación con el mar. Lejos de ser solo una rareza biológica, estos manglares —establecidos en agua dulce y a más de 120 kilómetros de la costa— funcionan como una evidencia viva de los cambios climáticos ocurridos en el planeta hace miles de años, y al mismo tiempo como un recordatorio contundente de los riesgos que el futuro puede volver a imponer sobre nuestros territorios y sociedades. 
A través de una narrativa cercana, este capítulo presenta cómo la ciencia puede convertirse en esperanza cuando logra traducirse en acciones concretas: investigación aplicada, comunicación social del conocimiento, y estrategias reales de conservación. El caso de Wan-ha no es únicamente la historia de un ecosistema excepcional, sino también la historia de una región que comienza a ser mirada con mayor atención por la comunidad científica, por las instituciones ambientales y por las propias comunidades que la habitan. 
En estas páginas se explora cómo un descubrimiento de alcance internacional detonó procesos de protección ambiental sin precedentes, culminando en la declaratoria de la Reserva de la Biosfera Wanha’, una categoría de conservación de máxima relevancia en México. Este paso representa un triunfo para la biodiversidad, pero también una oportunidad histórica para construir un modelo de desarrollo sostenible basado en el conocimiento, la restauración ecológica y el compromiso social. 
Finalmente, el capítulo invita a reflexionar sobre el sentido profundo de “crear conciencia”: no como una frase discursiva, sino como una práctica real que implica comprender, valorar y actuar. Conservar estos ecosistemas no es tarea exclusiva de especialistas; es una responsabilidad colectiva que inicia cuando aprendemos a mirar el territorio con respeto, entendiendo que proteger la naturaleza es también proteger nuestra propia permanencia.`,
        } as PageContent,
        {
          type: "text",
          content: `<h1><strong>Transcripción Editada de la Entrevista</strong></h1>
          En una tarde de divulgación y asombro científico, los micrófonos de Radio UJAT abrieron espacio a un tema tan cercano como frecuentemente ignorado: la presencia silenciosa —y decisiva— de los insectos en los ecosistemas de Tabasco. Con la conducción del Dr. José Ramón Laínez Canepa y el Dr. Roberto Hernández Barajas, la audiencia fue guiada a través del episodio “Biodiversidad oculta: explorando el rol de los insectos en los ecosistemas de Tabasco”, un recorrido que reconfigura la manera en que observamos la vida cotidiana.</br>
Desde el inicio, el diálogo dejó clara una premisa fundamental: lo “pequeño” no es sinónimo de insignificante. Con un lenguaje accesible, se explicó que la aracnología estudia a los arácnidos —arañas, escorpiones y ácaros—, organismos clave como reguladores naturales en los ecosistemas. A su vez, la entomología fue definida como la ciencia dedicada a los insectos, el grupo biológico más diverso del planeta, y quizá uno de los más determinantes para la estabilidad ecológica. </br>
A partir de ese marco, emergió un mensaje contundente: los insectos no solo habitan el territorio, lo sostienen. Son parte esencial de la cadena trófica, participan en el flujo de energía y materia, y permiten que múltiples especies sobrevivan. Cuando estos eslabones se debilitan o desaparecen, el ecosistema entra en tensión, y los impactos se trasladan —tarde o temprano— hacia la vida humana.
El capítulo también condujo a la audiencia hacia el trabajo de campo, ese universo donde la ciencia se construye con paciencia, técnica y asombro. Se mencionaron herramientas como redes de golpeo, cebos, trampas y metodologías diseñadas para cada grupo. Y surgió una idea que funciona como columna vertebral de todo el episodio: </br>
“Cuando no conocemos las cosas, no las vemos; pero cuando las conocemos, empezamos a mirar alrededor.” </br>
Tras una cápsula que reforzó su papel como polinizadores, recicladores de nutrientes y bioindicadores, se presentaron hallazgos obtenidos en manglares, selvas y agroecosistemas. Se destacó que los relictos de selva y los manglares suelen concentrar mayor diversidad, mientras que los agroecosistemas albergan comunidades distintas, adaptadas a condiciones más intervenidas. </br>
Entre los momentos más llamativos estuvo la explicación sobre los insectos conocidos popularmente como “polillas”, aquellos que perforan madera y producen aserrín. Se precisó que, en realidad, suelen pertenecer a grupos como escolítidos, platipódidos o cerambícidos, capaces de desarrollarse dentro del árbol y, en algunos casos, asociarse con hongos que afectan a la planta. Más que simples “plagas”, su presencia puede funcionar como una señal biológica de estrés, deterioro o transformación del ecosistema. </br>
La conversación conectó esta problemática incluso con escenarios domésticos: insectos que emergen tiempo después desde la madera utilizada en muebles y estructuras, generando sorpresa y rechazo. Pero el llamado fue claro: antes de eliminar, conviene comprender, porque detrás de cada señal existe un proceso ecológico activo. </br>
El programa elevó el análisis al hablar de especies clave como bioindicadores. Se resaltó el papel de escarabajos altamente diversos, con funciones cruciales como el reciclaje de nutrientes mediante especies que procesan estiércol y contribuyen al enriquecimiento del suelo. En el caso de las termitas, se subrayó su diversidad y su capacidad de degradar madera, con presencia diferenciada entre selvas, ciudades y agroecosistemas. </br>
El tono se volvió más urgente al abordar amenazas concretas. La pérdida de hábitat se señaló como el principal factor, junto con la expansión urbana. Sin embargo, también se expuso un riesgo menos evidente: la luz artificial, que desorienta a los insectos, altera sus ciclos de reproducción y favorece su concentración en espacios humanos, donde suelen ser eliminados mediante insecticidas. El mensaje fue directo: muchas especies exterminadas por miedo cumplen funciones esenciales, incluida la polinización de plantas clave para la vida. </br>
Frente a ello, se propuso una estrategia simple pero poderosa: conservar y restaurar vegetación nativa. Reforestar con especies locales implica proteger no solo plantas, sino redes completas de vida asociada. La entrevista también abrió una discusión sobre regulación ambiental y riesgos de especies invasoras: trasladar plantas entre regiones puede movilizar insectos microscópicos u organismos no detectados, cuyos impactos se manifiestan años después. </br>
Hacia el final, el programa defendió el valor de la investigación interdisciplinaria: biología, ecología, química, física, tecnología e incluso diseño gráfico se mostraron como aliados para documentar y comprender la biodiversidad. La entomología y la aracnología fueron presentadas como campos “nobles”, capaces de generar conocimiento aplicable a la conservación, al manejo ecológico y a la educación ambiental. </br>
La sección de vox populi reveló una paradoja social: las personas reconocen la importancia de los insectos, pero también los temen. Frente a ello, se amplió la mirada hacia polinizadores menos conocidos, como abejas nativas sin aguijón (meliponas), y se recordó que incluso organismos rechazados —como el mosquito— cumplen roles ecológicos, incluyendo funciones de polinización en algunos casos. </br>
El cierre fue tan directo como esperanzador: coexistir, aprender, respetar y actuar. No se trata de hablar de “invasiones”, sino de organismos intentando adaptarse a un entorno transformado por el ser humano. La conclusión se instaló con claridad: proteger a los insectos no es un tema menor, es una acción estratégica para sostener el equilibrio de la vida y el futuro de los ecosistemas que nos sostienen. </br>
`,
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
              id: "q4",
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
          <p><strong>Locutor</strong>: Bienvenidos, donde cada descubrimiento abre una puerta, cada idea inspira un cambio. Aquí, la ciencia no duerme, se transforma. Creando conciencia, la ciencia que transforma. </p></br>
<p><strong>Dr. José Ramón Laines Canepa</strong>: ¡Hola! ¿Cómo están? Muy buenas tardes a todas y todos quienes nos escuchan por Radio UJAT, la voz universitaria en el 96.1 de FM. Bienvenidos al primer episodio de "Creando Conciencia", el programa que te conecta con el fascinante mundo de la ciencia, la tecnología y el medio ambiente. En este espacio exploraremos juntos investigaciones, descubrimientos y proyectos que están cambiando nuestro presente para construir un futuro más sustentable. </p></br>
Soy el doctor José Ramón Laínez Canepa. Y me acompaña en cabina el doctor </p></br>
<p><strong>Dr. José Roberto Hernández Barajas</strong>: Roberto Barajas Muchas gracias por la invitación a conducir este programa. </p></br>
<p><strong>Dr. JRLC</strong>: Cada miércoles a las 4:00 en punto de la tarde, estaremos trayéndote lo más relevante de la ciencia aplicada con entrevistas, debates y noticias que buscan no solo informarte, sino también inspirarte a pensar de manera crítica y actuar de forma consciente en el cuidado de nuestro planeta. Así que prepárate. A lo largo del programa de hoy, conoceremos un proyecto innovador y hablaremos con un experto que nos compartirá cómo la investigación puede tener un impacto directo en nuestra sociedad. Recuerda que puedes interactuar con nosotros a través de nuestras redes sociales y ser parte activa de esta comunidad de curiosos y apasionados por la ciencia. ¡Comencemos! </p></br>
Esto es "Creando Conciencia". El día de hoy, nuestro tema es "Wan-ha: un ejemplo de ciencia, esperanza y conciencia ambiental". Nos acompaña un amigo, profesor, investigador, científico, el doctor Carlos Manuel Morelos Ramos, quien es licenciado en Biología, doctor en Ciencias Sistemáticas por el INECOL, orgullosamente UJAT, investigador nacional nivel 1, miembro del Sistema Estatal de Investigadores, profesor investigador a tiempo completo en la DACS-Biol, líder del laboratorio de manglares interiores. Toda una personalidad en nuestra universidad, doctor Carlos Manuel Morelos. </p></br>
<p><strong>Dr. Carlos Manuel Morelos Ramos</strong>: Muchas gracias por su presencia. Muchas gracias por la invitación a este, tu primer programa, deseándote todo el éxito. </p></br>
<p><strong>Dr. JRLC</strong>: ¡Muchas gracias! Ciertamente, hoy estamos iniciando y tenemos un gran padrino. ¡Muchas gracias! Si hay lujo, un amigo de lujo. Doctor, leía en National Geographic un artículo titulado "Los mangles de la selva", y hacía una pregunta: ¿cómo un ecosistema nos obliga a reflexionar sobre el futuro? Este fue un artículo muy importante que trascendió las fronteras. Lo escribiste, creo que no sé en cuántos idiomas, pero además lo hiciste con el doctor Ezequiel Ezcurra y con fotografías de Octavio Aburto. Doctor, la primera pregunta: ¿qué hace a los manglares del río San Pedro Mártir un ecosistema tan especial y único en el mundo? </p></br>
<p><strong>Dr. CMBR </strong>: Sí, mira, cuando hablamos de manglar, viene a nuestra mente un ecosistema que está a las orillas del mar, un ecosistema que está creciendo en una zona con influencia de agua marina. Los manglares del río San Pedro son manglares que están creciendo en agua completamente dulce, donde no hay una influencia marina reciente. Estos manglares están a 120 y hasta 180 km retirados de la costa, es decir, son los manglares tierra adentro o manglares interiores más alejados del mar de todo el planeta. Pero no es que hayan llegado ahí o hayan surgido; lo que pasa es que hace 125,000 años el mar estuvo ahí, en las cascadas de Reforma, y los mangles estaban ahí. Ahí era una línea de costa y los mangles se quedaron ahí. ¿Por qué estaba el mar ahí? Porque pasó un proceso de un periodo interglaciar en el que los polos se derritieron por el incremento de la temperatura. El mar llegó hasta allá. Posteriormente, el mar se retrae porque se vuelven a congelar los polos, baja la temperatura y los manglares se quedan ahí. Son vestigios de ese fenómeno. Es como cuando, desgraciadamente, se inunda Villahermosa y la gente que se inunda marca en sus paredes: "hasta aquí llegó el agua en 2010". Pues esos mangles son esa marquita de que hace 125,000 años el mar estuvo ahí. Y el título del artículo que mencionas de National Geographic habla de eso, de cómo un ecosistema del pasado nos hace pensar en el futuro. El hecho es que estamos hablando del cambio climático global diario. Esto quiere decir que el mar podría volver a ese punto, con la gran diferencia de que hace 125,000 años no había humanos en América, y menos de qué preocuparse si todo se inundara. Perderíamos territorio, perderíamos zonas de agricultura, ganadería, ciudades completas. Entonces, sería un caos. Es por eso el título de ese artículo en National Geographic, que fue un medio para comunicarle a la sociedad lo que hemos encontrado, y un artículo científico que fue publicado en otra revista, un artículo que específicamente se dedica a exponer todo lo que te acabo de exponer. </p></br>
<p><strong>Dr. JRLC</strong>: Fíjate que cuando ese artículo es expuesto ahí en la revista de National Geographic y luego lo escribes en otra revista, y nos mostrabas que fue traducido a diferentes idiomas, ¿cómo te sentiste? ¿Qué pasó ahí en tu mente cuando lo que descubrieron, pues, tomó relevancia no solo en Tabasco, sino en el mundo? </p></br>
<p><strong>Dr. CMBR </strong>: Nosotros, cuando empezamos esta investigación, sabíamos que había algo muy interesante ahí, pero nunca imaginamos que fuera tanto el impacto de este artículo. Esperábamos que fuera un artículo que se iba a leer bastante, pero nunca que tuviera este impacto y que nos cambiara la vida. A mí, prácticamente el artículo y la investigación me cambiaron la vida. Desde este punto de vista, me hizo visible: muchas entrevistas, mucha oportunidad de conocer gente, mucha oportunidad de que mucha gente volteara a ver esta zona de México, de Tabasco, y buscaran colaborar con nosotros. Y la universidad siempre ha estado abierta a este tipo de colaboraciones con diferentes investigadores. Hemos tenido gente de Sudáfrica, gente de Estados Unidos, gente mexicana con la que estamos desarrollando varios trabajos. Pero sí, fue un cambio brutal. Yo todavía no me acostumbro, la verdad, a este tipo de visibilidad en la comunidad científica. </p></br>
<p><strong>Dr. JRLC</strong>: ¡Qué importante en este descubrimiento, en el desarrollo de esta investigación que estás haciendo, la importancia del apoyo de las autoridades de la universidad, del rector, de todos los que han interactuado ahí contigo y te han apoyado! </p></br>
<p><strong>Dr. CMBR </strong>: Sí, cuando comenzamos, este fue un proyecto parcialmente personal. Cuando ya teníamos los resultados y todo el impacto, la universidad visualiza esta oportunidad con un trabajo generado desde la universidad y hemos recibido todo el apoyo de la institución. Tenemos un financiamiento y bueno, estamos trabajando. </p></br>
<p><strong>Dr. JRLC</strong>: Bien, vamos a un corte promocional y todavía estamos calentando motores. Vamos a un corte promocional y enseguida regresamos con "Creando Conciencia".</p></br>
<p><strong>Locutor</strong>: En un momento regresamos. Continuamos con la ciencia que transforma. </p></br>
<p><strong>Dr. JRLC</strong>: Regresamos con "Creando Conciencia" y seguimos aquí con nuestro amigo, el doctor Carlos Manuel Burelos Ramos, y vamos a continuar con esta charla. Le quiero ceder el uso de la voz a otro amigo, otro profesor investigador, al doctor Tonanias Barajas. </p></br>
<p><strong>Dr. JRHB</strong>: Muchas gracias, José Ramón. Bueno, continuando con las preguntas, toda esta investigación que has realizado en San Pedro Mártir ha llegado a un punto donde has logrado un gran avance. La Comisión Nacional de Áreas Naturales Protegidas (CONANP) se contactó contigo y con la universidad con la intención de convertir esta zona, hace un par de años, en un área natural protegida. Me gustaría saber, bueno, que nos contaras a todos, cómo se ha dado esta declaración de la Reserva de la Biósfera Wan-ha, que es un gran logro no solo para la universidad y para el estado de Tabasco, sino para todo el país, y qué impacto tendrá en la conservación de la región y en las comunidades locales. </p></br>
<p><strong>Dr. CMBR </strong>: Sí, mira, cuando salieron nuestros artículos, la noticia llegó al presidente de la República, al expresidente de la República, Andrés Manuel López Obrador, mediante una periodista que llegaba a las "mañaneras", supo de esto y le preguntó al expresidente qué sabía del San Pedro y qué pasaría con esa área que parecía ser interesante. Y el presidente en ese momento dijo que iban a analizarlo. A los pocos días se contactó la CONANP con nosotros y empezamos a trabajar junto con la universidad en el desarrollo del estudio técnico justificativo para la declaratoria, que era un documento oficial, un documento técnico en el que se plasmaba toda la información necesaria para que fuera decretada el área natural protegida. Nosotros teníamos avances, porque cuando comenzó este proyecto, cuando ya fuimos visibles ante la sociedad, la universidad aportó recursos para desarrollar investigación en el San Pedro. Teníamos 11 tesistas, mucha gente trabajando allá, y esa información sirvió para este documento, que fue el estudio previo justificativo que está en la declaración del área natural protegida en el Diario Oficial de la Federación. Es el documento que sustenta la declaratoria y se decretó como Reserva de la Biósfera, que es la categoría más alta dentro de los diferentes tipos de áreas naturales protegidas. Es un logro importante para el estado, para el país, pues para la humanidad, porque son declaratorias que son para toda la vida. Un decreto presidencial. ¿Cuál es la importancia de esta zona? Esta zona, que son casi 48,000 hectáreas, es vecina de la Selva Maya, también en Guatemala, y del Cañón del Usumacinta. Entonces, vemos un área que conecta tres áreas naturales protegidas muy grandes, un territorio muy, muy grande que está protegido. </p></br>
¿Qué beneficios traería para la comunidad, me decías? Mira, las comunidades están muy contentas. Era difícil para ellos, primero, entender que iban a estar dentro de una Reserva de la Biósfera. El miedo era: "¿nos van a quitar nuestros terrenos, nuestras propiedades? ¿Ya no vamos a poder sacar leña? ¿Ya no vamos a poder...?" No. Se les explicó, se les dijo cuáles son los beneficios. Su terreno sigue siendo de ellos, pueden venderlo, heredarlo, todo. Lo que se hace es que se cumple la ley. Lo que está en la ley es lo que tiene que cumplirse. No sé, por ejemplo, van a seguir pescando, pero solamente con las mallas permitidas, no con redes de arrastre. O si pescaban usando choques eléctricos, pues eso ya no está permitido. Ahorita la gente lo ha entendido, está muy motivada. Ya la CONANP está acercándose a las comunidades y está ofreciéndole proyectos o le está explicando lo que pueden obtener. Por ejemplo, la CONANP tiene recursos asignados para la gente que vive en áreas naturales protegidas, pues son sujetos a recibir financiamiento para diferentes tipos de proyectos: ecoturísticos, de producir algún producto agroalimentario, cualquier tipo de producto. Entonces, están muy contentos y creo que vienen cosas buenas para la gente de la reserva. </p></br>
<p><strong>Dr. JRHB</strong>: Excelente. De hecho, revisando la literatura que has estado publicando, nos damos cuenta de que has hecho estudios con tu equipo de trabajo, desde insectos, hongos, hasta aves en la región. Explícanos un poco de qué tipo de estudios han realizado y también las acciones que has tomado en proyectos de conservación. </p></br>
<p><strong>Dr. CMBR </strong>: A mí me interesa mucho conocer la biodiversidad de la zona. Cuando comencé a leer sobre el área del río San Pedro, todos los artículos decían, o todas las notas decían, que se carecía de inventarios de biodiversidad y de estudios de biodiversidad. Yo, como soy de Balancán, entonces dije: "voy a aportar en algo". Y comencé con un listado de plantas. Encontré todo el número de plantas y de ahí surge la idea, la propuesta del proyecto de los mangles, lo que ya platicamos. Pero ahorita tenemos estudios de mariposas diurnas, y acabo de regresar del primer monitoreo de mariposas nocturnas. Monitoreamos de 6:00 de la tarde a 6:00 de la mañana. Vino gente de ECOSUR Chetumal, que son colaboradores de nosotros. Tenemos listados de libélulas, de hongos, de abejas que estamos desarrollando, abejas nativas con un alumno de Biología que es mi tesista. Hemos estudiado odonatos (libélulas), plantas epífitas, orquídeas. Estamos comenzando una tesis con plantas acuáticas. Entonces, queremos generar todo este conocimiento. También de aves, monitoreo de aves de las áreas núcleo de la reserva, que son tres áreas. La reserva tiene tres áreas núcleo, que son tres áreas muy, muy conservadas o con un valor ecosistémico muy alto. Estamos estudiando esas tres zonas y tenemos como 150 especies de aves. </p></br>
¿Y por qué queremos conocer la biodiversidad? Primero, por conocerla, y segundo, porque la biodiversidad puede ser un producto turístico, claro, puede aportar al desarrollo de las comunidades. Todos saben que hay gente que quiere ver aves. Viene gente de Estados Unidos, de Canadá, a las zonas tropicales a ver aves. Y creemos que ese, por ejemplo, podría ser un punto de desarrollo. Se lo hemos dicho a la gente, le hemos platicado, y la gente empieza a involucrarse. Con las mariposas estamos haciendo unos libros, pero no con fotos, sino con dibujos de la gente de las comunidades. Ahorita estamos digitalizando las imágenes, ya nos dieron sus obras y estamos en eso. Entonces, sí creemos que la biodiversidad puede aportar al desarrollo de las comunidades, de la gente, y eso nos ayuda. Porque si tú le dices a un pescador: "los robalos valen más si llevas a la gente a verlos que si se los vendes fritos", la gente lo entiende. Entonces, ellos pueden vender más el avistamiento de robalos, o de aves, o de cocodrilos, y eso les ayuda a conservar y generan recursos. </p></br>
Justamente, hace poco, dado este proyecto, me he metido a conocer áreas que no conocía. Por ejemplo, hace tres semanas estuve en el río San Pedro con operadores turísticos, gente que está dispuesta a llevar turistas al río San Pedro, pero querían conocer qué es lo que les ofrecemos. Sí, desde la parte visual de un atardecer o una pirámide, una zona arqueológica con una pirámide muy grande. Hasta yo tuve que ser como el guía, decirles: "mira, aquí estamos viendo aves de tal tipo". Y la gente está fascinada. Es decir, creen que puede haber un turismo muy interesado en llegar. Y esto, básicamente, porque cerca del río San Pedro, sobre Wan-ha, pasa el Tren Maya. Y en un punto, a 20 minutos de San Pedro, está una estación del Tren Maya en El Triunfo, y en Tenosique, a 40 km del río, hay una estación también. Entonces, creemos que puede llegar gente a pagar por productos turísticos, y esta gente, si llega, va a querer que la zona se conserve en la mejor calidad. Entonces, creo que viene una época de un cambio, un giro en la vida de la gente. En lugar de desaprovechar las aves, o los peces, o las mariposas, o el ecosistema en general, van a empezar a conservarlo porque va a ser el punto de atracción para que la gente vaya a conocerlo. </p></br>
<p><strong>Dr. JRLC</strong>: Muy bien. ¡Qué interesante esta plática! Podemos observar cómo el doctor Morelos está creando conciencia. Bien, vamos a un corte promocional y enseguida regresamos para el último bloque. </p></br>
<p><strong>Locutor</strong>: En un momento regresamos. Continuamos con la ciencia que transforma. </p></br>
<p><strong>Dr. JRLC</strong>: Regresamos con "Creando Conciencia". ¡Qué bonita plática! En esta tarde estamos conviviendo de manera interesante con lo que nos platica el doctor Burelo. Doctor, sabemos que también estás trabajando ahí con la comunidad, están haciendo recuperación de mangle, tengo entendido. Y obviamente las empresas y la comunidad están jugando un papel importante en este esfuerzo. ¿Podrías platicarnos al respecto? </p></br>
<p><strong>Dr. CMBR </strong>: Sí, uno de los problemas del San Pedro fue la pérdida del mangle. Son plantas que tienen unas raíces zancudas y que crecen en la orilla del río. Pues se formaban verdaderas cercas que impedían que los ganaderos llevaran a sus vacas a tomar agua, y los tiraron y los quemaron. Y aparte, los incendios, naturales o creados para los pastizales, terminaron con muchísimas hectáreas de mangle. Viendo esta problemática, actualmente tenemos un programa de nueve viveros en el San Pedro produciendo mangle. Este noviembre vamos a terminar la etapa dos del proyecto con la finalidad de producir 60,000 plantas de mangle. Ya sembramos 27,000 y vamos a producir 33,000 ahorita; están en producción para sembrarse en noviembre. Este proyecto es financiado por dos empresas petroleras, Repsol y Wintershall Dea, que aportan los recursos a las comunidades, y la gente de las comunidades produce las plantas y se le da un incentivo económico. Incluso hay una escuela, una preparatoria, que tiene un vivero. A ellos no se les da el dinero porque no pueden recibir dinero en efectivo, pero recibieron la semana pasada botes de pintura, artículos de limpieza, y hoy me acaban de visitar porque ya se les va a llevar material deportivo. Entonces, la gente está creando conciencia para recuperar los mangles. Decía un ganadero, me decía: "mi abuelo los mandaba a quemar el mangle para las vacas, y hoy yo estoy sembrando". Gracias. Esa parte creo que fue cuando dije: "ya valió la pena lo que estoy haciendo”. </p></br>
<p><strong>Dr. JRLC</strong>: ¡Vale la pena, verdad! Es clave entonces generar conciencia sobre la conservación, la restauración de estos ecosistemas tan importantes y asegurar su supervivencia, asegurar la supervivencia de las especies que dependen de ellos. Y ya para cerrar esta charla tan amena, agradeciéndote mucho, doctor Morelos, la última pregunta: ¿cómo podemos, como individuos y sociedad, contribuir a la conservación de estos ecosistemas tan importantes? ¿Qué significa para ti crear conciencia? </p></br>
<p><strong>Dr. CMBR </strong>: Primero, sería que la manera en que cualquiera de nosotros en Villahermosa pudiera aportar a este proyecto es, cuando estén todas las actividades de ecoturismo en esta zona, que vayan. Que vayan, conozcan, se eduquen, apoyen a la gente, porque van a pagar la lancha, la comida, y con eso van a ayudar a conservarlo. Esa creo que es una parte importante: que la gente conozca estos sitios. Mucha gente de Tabasco no conoce este lugar, y es un lugar único en el mundo, y está a tres horas de Villahermosa. Un lugar único en el mundo. Todos queremos ir a lugares únicos en el mundo. Yo quería ir a conocer la Muralla China, pero conozco uno que está aquí a tres horas, y que está a una hora de donde yo nací. </p></br>
<p><strong>Dr. JRLC</strong>: ¿Cómo se llama? </p></br>
<p><strong>Dr. CMBR </strong>: Wan-ha, el río San Pedro Mártir. "Wan-ha" significa "río de codornices" en vocablo maya. Entonces, invitemos a toda la gente que vaya al San Pedro, que vaya y conozca, vean lo que estamos haciendo desde la universidad. </p></br>
<p><strong>Dr. JRLC</strong>: Doctor Burelo, muchas gracias por compartir tu experiencia, por estar creando conciencia. Y le digo a todos los que nos escuchan hoy que nos vemos el próximo miércoles, nos escuchamos el próximo miércoles a las 4:00 de la tarde en "Creando Conciencia". Y le quiero pedir a mi amigo, el doctor Roberto, que se despida. </p></br>
<p><strong>Dr. JRHB</strong>: Pues, muchas gracias por la invitación. </p></br>	
<p><strong>Dr. JRLC</strong>: Y aquí seguimos, creando conciencia en el 96.1 FM, Radio UJAT, voz universitaria. Nos vemos. </p></br>
<p><strong>Locutor</strong>: "Creando Conciencia: la ciencia que transforma" es una producción de Radio UJAT, voz universitaria, legado UJAT. Estudio en la duda, acción en la fe. </p></br>
`,
        } as PageContent,
        {
          type: "text",
          content: `<h1><strong>Mirada desde la Ciencia</strong></h1>
          <h3>Wan-ha, memoria del clima y futuro del territorio</h3>
          Hay ecosistemas que parecen imposibles hasta que la ciencia los nombra. Durante años se creyó que el manglar era, por definición, un paisaje costero: un borde verde entre el continente y el mar, un territorio de sal, raíces expuestas y mareas. Pero la naturaleza siempre encuentra formas de desmentir nuestras certezas. En el río San Pedro Mártir, el manglar crece donde nadie esperaría verlo: lejos del mar, en agua dulce, tierra adentro. No es un accidente biológico ni una excepción menor; es un mensaje vivo de la historia climática del planeta y, al mismo tiempo, una advertencia silenciosa sobre el futuro. </br>
La ciencia lo explica con precisión, pero también con fuerza simbólica. Estos manglares interiores existen porque hace aproximadamente 125,000 años el nivel del mar fue más alto. El planeta se calentó, los polos se derritieron y el océano avanzó hasta regiones que hoy parecen demasiado alejadas para imaginarlo. Después, el mundo se enfrió, el mar retrocedió… y los mangles se quedaron ahí, como una evidencia persistente de que la Tierra cambia, incluso cuando nuestra memoria humana no alcanza para recordarlo. Son, como se dijo en el programa, una “marca” en el territorio: la señal de hasta dónde llegó el agua, pero escrita no en una pared, sino en un ecosistema completo. </br>
Este hallazgo tiene un peso que va más allá de lo extraordinario. Nos obliga a aceptar una idea incómoda: el paisaje que creemos estable es, en realidad, el resultado provisional de una historia en movimiento. Y cuando esa historia vuelve a acelerar —como ocurre hoy con el cambio climático— lo que estaba en equilibrio puede desplazarse de nuevo. La diferencia es que ahora hay ciudades, caminos, agricultura, infraestructura y comunidades humanas que no estaban allí hace miles de años. En ese contraste aparece el verdadero sentido del descubrimiento: la ciencia no solo describe el mundo, también nos muestra lo que podríamos perder si ignoramos sus señales. </br>
Pero la importancia de Wan-ha no radica únicamente en su carácter único. Lo verdaderamente transformador es que este ecosistema dejó de ser un dato científico para convertirse en un detonador social. La investigación generó visibilidad internacional, colaboración académica y, sobre todo, abrió una ruta hacia la conservación institucional: el territorio fue decretado como Reserva de la Biosfera, la categoría más alta dentro de las áreas naturales protegidas. La ciencia, en este caso, no se quedó en el laboratorio ni en la publicación: se tradujo en protección del territorio, en una decisión de largo plazo que rebasa generaciones. </br>
Esa transición —de descubrimiento a política pública— deja una lección central: proteger la naturaleza no inicia con decretos, inicia con conocimiento. Y el conocimiento, cuando se comparte, puede romper el mito más peligroso en materia ambiental: la idea de que conservar significa prohibirlo todo. Al contrario, la reserva mostró que conservar puede ser también una oportunidad de vida para quienes habitan el territorio. La conversación lo expuso con claridad: las comunidades no pierden su propiedad; se fortalecen condiciones para el uso responsable de los recursos y se abren posibilidades de proyectos sustentables, ecoturismo y desarrollo local. Aquí la conservación no se plantea como castigo, sino como futuro. </br>
En esta mirada científica, la biodiversidad no es un concepto abstracto: es un valor que puede convertirse en motor de bienestar si se entiende con inteligencia ecológica. Se habló de monitoreos de aves, mariposas, abejas nativas, hongos y plantas, y de cómo ese conocimiento puede transformarse en una forma distinta de economía: una en la que conservar genera más valor que destruir. La frase que mejor resume esa lógica es simple, pero contundente: algunos recursos valen más vivos que convertidos en mercancía inmediata. Ver un río sano, aves en vuelo o un manglar en pie puede sostener una economía comunitaria más duradera que la explotación rápida de sus componentes. </br>
Sin embargo, el capítulo también revela la fragilidad de lo extraordinario. Los manglares del San Pedro no están a salvo solo por existir: han sido talados, quemados y debilitados por presiones productivas y por incendios. Y allí aparece el punto más humano del relato: la restauración no ocurre únicamente cuando se siembra una planta, ocurre cuando cambia una mentalidad. La imagen de un ganadero reconociendo que antes se quemaba el mangle y hoy se siembra, resume la esencia de “crear conciencia”: no se trata de culpa, sino de transformación. Es reconocer que el territorio puede sanar si quienes lo habitan se vuelven aliados, no enemigos, del ecosistema. </br>
Por eso los viveros comunitarios no son solo viveros: son una estrategia científica, social y ética. Producir 60,000 plantas, sembrarlas, cuidarlas y recuperar kilómetros de rivera es un acto de restauración ecológica, pero también un acto de reconciliación cultural con el paisaje. La ciencia aquí se convierte en puente: conecta a la universidad con el territorio, a las empresas con la responsabilidad ambiental, y a la comunidad con una narrativa diferente sobre el mangle: ya no como obstáculo, sino como patrimonio vivo. </br>
Al final, la conversación deja una invitación que tiene forma de principio: no hay conservación sin conocimiento, y no hay conocimiento real sin experiencia. Ir, mirar, recorrer, aprender y apoyar las actividades responsables de ecoturismo es una manera directa de participar. No porque visitar sea suficiente, sino porque conocer transforma el valor que damos a lo que existe. Wan-ha, “río de codornices”, no es solo un nombre; es una oportunidad pedagógica y moral: recordarnos que aún existen territorios únicos en el mundo a pocas horas de distancia, esperando que la ciencia y la ciudadanía trabajen juntas para que sigan existiendo. </br>
Y quizá la enseñanza más importante sea esta: los ecosistemas del pasado no solo cuentan historias antiguas, también nos muestran lo que podría volver a ocurrir. En esa tensión entre memoria y futuro, los manglares interiores del San Pedro Mártir se vuelven algo más que un descubrimiento. Se vuelven una señal. Y cuando aprendemos a leer las señales del territorio, empezamos a cuidar lo invisible… y, con ello, a proteger nuestro propio porvenir. </br>
`,
        } as PageContent,
  
        ],
     },
        // CAPITULO 5 *********************************************************************************
     {
      title: "Invitados: Dr. León David Olivera Gómez y Mtro. Darwin Jiménez Domínguez",
      pages: [
        {
          type: "cover",
          title: "Invitados: Dr. León David Olivera Gómez y Mtro. Darwin Jiménez Domínguez",
        } as PageContent,
        {
          type: "biography",
          authorName: "Dr. León David Olivera Gómez",
          image: "/Dr_Leon_David_Olivera_Gomez.jpg",
          content: `
            <p>El Dr. León David Olivera Gómez es Ingeniero en Acuicultura y Doctor en Ciencias en Ecología Marina. Desde 1990 se especializa en la ecología y conservación de mamíferos acuáticos, con énfasis en el manatí. Es Profesor-Investigador Titular en la DACBiol-UJAT, miembro del Cuerpo Académico de Ecología y Conservación de Fauna Silvestre Neotropical y del Comité de Especialistas en Sirenios de la IUCN. Cuenta con experiencia en monitoreo por telemetría y sonar y fue presidente de la Sociedad Mexicana de Mastozoología Marina (2016-2018). </p>`,
        } as PageContent,
        {
          type: "biography",
          authorName: "Mtro. Darwin Jiménez Domínguez",
          image: "/Mtro_Darwin_Jimenez_Dominguez.jpg",
          content: `
            <p>El Mtro. Darwin Jiménez Domínguez es Biólogo y Maestro en Ciencias Ambientales por la UJAT. Desde el año 2000 trabaja en la investigación y conservación de mamíferos acuáticos, especialmente manatíes. Es Profesor-Investigador en la DACBiol-UJAT, integrante del Cuerpo Académico de Ecología y Conservación de Fauna Silvestre Neotropical y responsable del proyecto de Atención y Rehabilitación de Manatíes en el LECMA-UJAT. Participa en redes nacionales e internacionales de conservación de sirenios.</p>`,
        } as PageContent,
        
        
        {
          type: "text",
          content: `<h1><strong>Introducción del Capítulo</strong></h1></br>
          <h3><strong> Sirenas del Agua Dulce: Ciencia, Conservación y el Futuro del Manatí Antillano </strong></h3> </br>
En Tabasco, el agua configura el paisaje, la memoria colectiva y la manera en que las comunidades interactúan con su entorno. Ríos, lagunas, humedales y sistemas costeros sostienen una notable diversidad biológica, pero también enfrentan presiones crecientes asociadas a la expansión urbana, la contaminación y la alteración de los ecosistemas acuáticos. En este escenario habita una especie discreta y vulnerable, cuya presencia revela tanto la riqueza natural del estado como la fragilidad de sus ambientes: el manatí antillano. </br>
Este capítulo ofrece una aproximación clara y accesible al tema de la conservación del manatí y su vínculo con la salud de los ecosistemas acuáticos de Tabasco, a partir de una conversación desarrollada en el programa Creando Con-Ciencia: La ciencia que transforma, conducido por los Dres. José Ramón Laines Canepa y José Roberto Hernández Barajas. El diálogo cuenta con la participación del Dr. León David Olivera Gómez y el Mtro. Darwin Jiménez Domínguez, investigadores de la Universidad Juárez Autónoma de Tabasco, cuyo trabajo académico y de campo se ha centrado en el estudio, monitoreo y manejo de mamíferos acuáticos, con énfasis en la conservación del manatí en el sureste de México. </br>
A lo largo del capítulo, se analiza por qué el manatí no debe concebirse únicamente como una especie carismática o emblemática, sino como un indicador ambiental estrechamente asociado a la calidad del agua, la disponibilidad de hábitat y el equilibrio ecológico de ríos y humedales. Su presencia, comportamiento y distribución aportan información clave para comprender el estado de conservación de los sistemas acuáticos y los efectos de la actividad humana sobre ellos. </br>
Asimismo, se explora el trabajo científico que sustenta su protección, destacando el uso de herramientas de monitoreo como la telemetría y el sonar, así como las acciones de atención, rehabilitación y seguimiento de individuos en riesgo. Estos esfuerzos no solo fortalecen el conocimiento especializado, sino que permiten diseñar estrategias de conservación basadas en evidencia, colaboración institucional y compromiso social. </br>
Finalmente, este capítulo propone una reflexión central: proteger al manatí implica proteger los ecosistemas acuáticos y la relación que las sociedades establecen con el agua. La conservación no es una tarea exclusiva de la ciencia, sino una responsabilidad compartida que comienza con la información, la conciencia ambiental y la toma de decisiones cotidianas orientadas al cuidado del entorno y de las especies que lo habitan. </br>
          `,
        } as PageContent,
        {
          type: "text",
          content: `<h1><strong>Transcripción Editada de la Entrevista</strong></h1>
          En una emisión dedicada a la divulgación científica y a la reflexión ambiental, el programa Creando Con-Ciencia: La ciencia que transforma, a través de los micrófonos de Radio UJAT, abrió el diálogo sobre uno de los habitantes más emblemáticos y vulnerables de los ecosistemas acuáticos del sureste mexicano: el manatí antillano. Con la conducción de los Dres. José Ramón Laines Canepa y Roberto Hernández Barajas, la conversación reunió al Dr. León David Olivera Gómez y al Mtro. Darwin Jiménez Domínguez, especialistas en ecología y conservación de mamíferos acuáticos, para analizar la situación actual de esta especie y los retos que enfrenta en Tabasco. </br>
Desde el inicio, el diálogo planteó una idea central: el manatí no es solo un símbolo de la biodiversidad regional, sino un indicador biológico de la salud de los ecosistemas acuáticos. Su presencia depende directamente de la calidad del agua, la disponibilidad de alimento y la conectividad de ríos y humedales, por lo que su estudio permite comprender procesos ecológicos más amplios que afectan tanto a la fauna como a las comunidades humanas. </br>
El Dr. León David Olivera Gómez explicó que el manatí es una especie herbívora, de movimientos lentos y hábitos discretos, lo que lo vuelve especialmente vulnerable a actividades humanas como la navegación, la contaminación, la modificación de cauces y la pérdida de hábitat. A diferencia de otros mamíferos marinos, el manatí depende de sistemas de agua dulce y salobre, lo que lo coloca en una estrecha relación con zonas donde también se concentran asentamientos humanos. </br>
Por su parte, el Mtro. Darwin Jiménez Domínguez profundizó en el trabajo de monitoreo y seguimiento que se realiza en Tabasco, destacando el uso de telemetría y sonar de barrido lateral para localizar individuos, conocer sus desplazamientos y evaluar las condiciones de los cuerpos de agua que habitan. Estas herramientas permiten obtener información precisa sin alterar el comportamiento natural de los animales, fortaleciendo las estrategias de conservación basada en evidencia científica. </br>
Durante el programa, se compartió una cápsula informativa que permitió contextualizar la importancia del manatí antillano dentro de los ecosistemas acuáticos del sureste de México. Se explicó que esta especie cumple un papel clave en el equilibrio ecológico, al contribuir al control de la vegetación acuática y favorecer la dinámica natural de ríos, lagunas y humedales. </br>
Asimismo, se destacó que el manatí se encuentra catalogado como una especie en riesgo, debido principalmente a la degradación de su hábitat, la contaminación del agua, las colisiones con embarcaciones y el crecimiento urbano no planificado. La cápsula subrayó que su conservación no solo implica proteger a una especie, sino preservar los servicios ambientales que estos ecosistemas brindan a la sociedad. </br>
La conversación retomó el tema de la atención y rehabilitación de manatíes que han sufrido lesiones, desnutrición o desorientación. Se explicó que estos casos suelen estar relacionados con impactos antrópicos, como choques con lanchas o la reducción de áreas adecuadas para su alimentación. Desde el Laboratorio de Ecología y Conservación de Mamíferos Acuáticos (LECMA) de la UJAT, se coordinan acciones para su recuperación, reintegración y seguimiento, priorizando siempre su bienestar y adaptación al medio natural. </br>
Un punto clave fue la relevancia de la colaboración interinstitucional. Ambos investigadores coincidieron en que la conservación del manatí requiere la participación conjunta de universidades, autoridades ambientales, organizaciones civiles y comunidades locales, ya que la protección efectiva de la especie depende de una gestión integral del territorio. </br>
La sección de vox populi reveló una percepción social diversa en torno al manatí. Algunas personas lo identificaron como un símbolo natural de Tabasco y reconocieron su valor ecológico, mientras que otras admitieron conocer poco sobre su función dentro del ecosistema. También se mencionó la preocupación por la contaminación de ríos y lagunas, así como el desconocimiento sobre cómo las actividades cotidianas pueden afectar directamente a esta especie. Estas voces reflejaron un punto clave del programa: existe interés y sensibilidad social, pero aún es necesario fortalecer la educación ambiental y el acceso a información clara para fomentar una participación más activa en su conservación. </br>

Hacia el cierre, los conductores subrayaron que el manatí también cumple una función educativa y cultural, al facilitar procesos de sensibilización sobre la relación entre el uso del agua, el cuidado de los ecosistemas y la biodiversidad. Informar y generar conciencia se presentó como una herramienta tan importante como cualquier tecnología de monitoreo. </br>
El mensaje final fue compartido por todos los participantes: proteger al manatí es proteger los ecosistemas acuáticos y, en consecuencia, la calidad de vida humana. La ciencia, cuando se comunica de forma clara y accesible, tiene la capacidad de transformar conocimiento en acción y de promover una relación más responsable con el entorno natural. </br>
.`,
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
              id: "q5",
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
          <p><strong>Locutor </strong>: Creando Conciencia: La Ciencia que Transforma. Bienvenidos, donde cada descubrimiento abre una puerta, cada idea inspira un cambio, aquí la ciencia no duerme. Se transforma. Creando Conciencia, la ciencia que transforma. </p></br>
<p><strong>Dr. José Ramón Laínez Canepa </strong>: Hola, ¿qué tal? Muy buenas tardes, tengan todos ustedes. Estamos en el 96.1 de FM, por Radio UJAT, Voz Universitaria. Bienvenidos a “Creando Conciencia, la Ciencia que Transforma”, el programa que te conecta con el fascinante mundo de la ciencia, la tecnología y el medio ambiente. Para que todos juntos construyamos un futuro más sustentable. Habla el doctor José Ramón Laínez Canepa, y me acompaña como todos los miércoles. </p></br>
<p><strong>Dr. José Roberto Hernández Barajas </strong>: Roberto Hernández Barajas, buenas tardes, Ramón, buenas tardes a la audiencia de Radio UJAT. </p></br>
<p><strong>Dr. JRLC</strong>: Gracias por estar con nosotros para que juntos conozcamos lo más relevante de la ciencia, pensar de manera crítica y actuar de forma consciente en el cuidado de nuestro planeta. Así que prepárate, recuerda puedes interactuar con nosotros a través de nuestras redes sociales y ser parte activa de esta comunidad de curiosos y apasionados por la ciencia. Hoy estamos de lujo, dos invitados de lujo, tenemos un tema de lujo hoy, como todos los miércoles estamos de lujo. </p></br>
El tema, el otro día estaba yo viendo en el periódico este, que una presidenta municipal, la de Jonuta, había declarado que se habían muerto unos manatíes, como unas redes de unos pescadores, me llamó mucho la atención. Y le digo a Roberto, “Roberto, ya tenemos tema”. “Vamos a invitar a los mejores que conocen de manatíes en Tabasco, y lo tenemos aquí en la Universidad Juárez Autónoma de Tabasco, vamos a invitarlos para que toquemos el tema”. Y, bueno, pues llegó el día, nuestro tema “Sirenas del agua dulce”. “Ciencia, conservación y el futuro del manatí antillano” y nuestros invitados los doctores León David Olivera Gómez y Darwin Jiménez Domínguez, profesores, investigadores de la División Académica de Ciencias Biológicas de nuestra máxima casa de estudio. La Universidad Juárez Autónoma de Tabasco. Doctores, bienvenidos, buenas tardes, Doctor León David.
<p><strong>Dr. León David Olivera Gómez </strong>: Buenas tardes. Muchas gracias por invitarnos. Y, bueno, también muchas gracias a todo el auditorio que nos escucha.
<p><strong>Dr. JRLC</strong>: Y es un auditorio que nos escuchan en España, en Estados Unidos, nos escuchan en muchas partes del planeta, bienvenido. Doctor Darwin, ¿qué tal? ¿Cómo estás? Con el maestro, ¿todavía maestro? Bueno, para allá, por fe, no está bien para allá vamos, para qué bueno, qué bueno, sí. </p></br>
<p><strong>Mtro. Darwin Jiménez Domínguez </strong>: Igual, muchas gracias y saludo a toda la comunidad UJAT. </p></br>
<p><strong>Dr. JRLC</strong>: Pues voy a leer la semblanza de nuestros invitados, ya van a ver, van a escuchar. El doctor León David Olivera Gómez, lo estaba yo leyendo su semblanza, ingeniero en Acuicultura, graduado del Instituto Tecnológico del Mar en Boca del Río, Veracruz. Tiene maestría, tiene doctorado en Ciencias con especialidad en Ecología Marina por el Centro de Investigación Científica y de Educación Superior de Ensenada. El CICESE. Trabaja en ecología y conservación de mamíferos acuáticos desde 1990. También ha trabajado en el Centro de Investigaciones de Quintana Roo, en el Colegio de la Frontera Sur, unidad Chetumal, en la Universidad de Occidente, y en el Centro de Investigación Interdisciplinaria Integral Regional del Instituto Politécnico Nacional el CIIDIR en la ciudad de Guasave, Sinaloa. Y desde 2004 está adscrito como profesor investigador titular en la División Académica de Ciencias Biológicas de nuestra universidad. Y además pertenece al Cuerpo Académico de Ecología y Conservación de Fauna Silvestre Neotropical desde 1990. Trabaja principalmente con la ecología y conservación de manatíes y otros mamíferos acuáticos con experiencia en técnicas para el monitoreo y muestreo de mamíferos acuáticos, entre lo que destacan el seguimiento por telemetría y sondeo acústico con sonar. </p></br>
Y también colabora con otros grupos de trabajo, nacional e internacionalmente, que son especialistas en planeación y gestión de la conservación de especies acuáticas, en especial del manatí, como, por ejemplo, el Comité de Especialistas en Sirenios de la IUCN. Y además fue presidente de la Sociedad Mexicana de Mastozoología Marina de 2016 a 2018. Así que vayan ahí preparando sus preguntas y no duden en enviarnos las para que aquí aprovechemos el tiempo. </p></br>
Y también quiero presentar al maestro, futuro doctor, Darwin Jiménez Domínguez. Él es aquí de Villahermosa, Tabasco, licenciado en Biología, maestro en Ciencias Ambientales por nuestra máxima casa de estudio. Ha colaborado en muchos proyectos de investigación que tienen que ver con la ecología y con el manejo de mamíferos silvestres en el sureste de México desde 2000, con mayor énfasis en el estudio y conservación de mamíferos acuáticos, particularmente en manatíes y utiliza técnicas de monitoreo por telemetría y sonar con imagen de barrido lateral. Ha participado en muchas publicaciones, artículos científicos y de divulgación que tienen que ver con mamíferos de Tabasco. Actualmente también es profesor investigador desde 2011 en la División Académica de Ciencias Biológicas de nuestra universidad. Tiene perfil PRODEP. Es miembro del Cuerpo Académico en consolidación “Ecología y Conservación de Fauna Silvestre Neotropical”. Pero además es responsable del proyecto de atención y rehabilitación de manatíes en la en el Laboratorio de Ecología y Conservación de Mamíferos Acuáticos, mejor conocido como LECMA de la UJAT. Y pertenece al Sistema Estatal de Investigadores y el Grupo Nacional para la Conservación y Manejo del Manatí en México desde 2002. Y es miembro del grupo especialista en Sirenios de la Unión Internacional para la Conservación de la Naturaleza del año 2017 a la fecha. Dos grandes estudiosos de nuestro tema, las “Sirenas del Agua Dulce: Ciencia, Conservación y el Futuro del Manatí Antillano”. </p></br>
Pues bien, vamos a calentar motor. Vamos a empezar con las preguntas después de esta presentación interesante. Le quisiera reiterar, la bienvenida a este programa de “Creando Conciencia” y, bueno, la primera pregunta, ¿por qué el manatí antillano es considerado una especie en peligro de extinción en México y en otras regiones del Caribe? ¿Por qué está preocupada la presidenta de Jonuta? No, o sea, dice que se le están muriendo, adelante. </p></br>
<p><strong>Mtro. DJD </strong>: El manatí antillano, como tal, de hecho, estaba protegido en México desde 1921, más o menos y de hecho se consideró una veda porque realmente se consideraba un recurso pesquero, principalmente por ser un animal acuático y demás. Ya después se enlista en la NOM, por ejemplo, este ya más o menos de los años 90 para acá ya está como especie protegida, como tal. Pero pues originalmente por la sobreexplotación, para consumo humano, es lo que lleva a la especie a disminuir sus poblaciones en gran parte de la región de toda su área de distribución, desde Estados Unidos hasta Brasil, por ejemplo, y todo el Caribe, pasando por México. Y pues sí, hay un antecedente de consumo de manatí en la región justamente Tabasco, el Caribe. Pues por ahí andan algunas imágenes de Alvarado, Veracruz, por ejemplo, hay unas fotos muy particulares de la Holbox, lo mismo. </p></br>
<p><strong>Dr. JRLC</strong>: O sea, ¿por qué le llaman sirena?, y a mí, cuando dije sirena, este, ¿hembra o macho?, o sea, platíquenos ahí para que quienes están escuchando se ubiquen, no, en esta en este tema. </p></br>
<p><strong>Dr. LDOG</strong>: Por sus características que es mamífero, tiene a sus crías muy cerca, sale en las orillas de los mares estuarios, los pescadores cuando llegaban a las orillas veían al manatí y lo asociaban con sirenas. De hecho, mucho quedó porque Colón cuando llegó, bueno, estaba el rumor, cuando llegó a una parte de América vio a manatí, y dijo “Las sirenas no son como yo las imaginaba”. El grupo en realidad, el grupo científicamente se conoce como sirenios. Sirenia, el grupo de los manatíes y, bueno, tiene muchas características que asociamos con las sirenas, que son, respiran aire, pero viven en el en el agua. El cuidado a las crías, amamantan a las crías o al ser mamíferos, muchas características, asociaciones. </p></br>
<p><strong>Dr. JRLC</strong>: Pues qué interesante. Vamos a seguir abundando en el tema, pero qué creen, tenemos que ir a un corte promocional y enseguida regresamos a “Creando Conciencia, la Ciencia que Transforma”. </p></br>
<p><strong>Locutor </strong>: Creando conciencia. En un momento, regresamos. </p></br>
<p><strong>Locutor </strong> Continuamos con la ciencia que transforma. </p></br>
<p><strong>Dr. JRHB</strong>: Regresamos a “Creando Conciencia, la Ciencia que Transforma”. A continuación, presentaremos una cápsula con información de Kenia Utrera y en la voz de Rubí Landeros. </p></br>
<p><strong> Rubí Landeros </strong>: ¿Sabías que el manatí antillano puede pesar hasta 600 kg? No obstante, su mayor peso hoy es el de la amenaza de su desaparición, esta especie emblemática de los ríos y lagunas del sureste mexicano enfrenta riesgos crecientes que ponen en peligro su futuro. Los doctores León David Olivera Gómez y Darwin Jiménez Domínguez, investigadores de la UJAT, nos comparten cómo la ciencia y la conservación se unen para proteger estas sirenas del agua dulce. El manatí antillano es una especie en peligro de extinción en México y el Caribe, debido a la pérdida del hábitat, la contaminación y los accidentes con embarcaciones. Las zonas fluvio-lagunares del Golfo de México como la Cuenca Grijalva, Usumacinta, son refugios esenciales para su supervivencia. Para conocer y proteger mejor a estos mamíferos, los científicos emplean metodologías como la telemetría, el sonar de barrido lateral y modelos de captura-recaptura. Estas tecnologías permiten estimar sus poblaciones y entender su comportamiento. Además, los estudios han identificado eco tipos costeros y ribereños con diferencias físicas que influyen en las estrategias de manejo y conservación. A pesar de su tamaño, los manatíes son vulnerables, pero también muestran resiliencia. Áreas naturales protegidas como los Pantanos de Centla y la laguna de Las Ilusiones juegan un papel clave en su resguardo. Además, la participación de comunidades locales y la ciencia ciudadana son esenciales para su monitoreo y conservación. El manatí no solo simboliza la riqueza natural de nuestros humedales, también nos recuerda la fragilidad de estos ecosistemas. Protegerlo, es proteger el agua, la biodiversidad y nuestra conexión con la naturaleza, sigamos creando conciencia y sumándonos a la conservación de las sirenas de agua dulce, con información de Kenia Utrera te saluda Rubí Landeros, hasta la próxima. </p></br>
<p><strong>Dr. JRHB</strong>: Regresamos a “Creando Conciencia, la Ciencia que Transforma”. Pues es una cápsula muy interesante en donde aborda de manera general la importancia del manatí y su hábitat. Y bueno, doctor León, es muy interesante saber, o es curioso saber que las zonas de ríos y lagunas del Golfo de México, particularmente la Cuenca del Río Grijalva y el Río Usumacinta, debe tener algunas características que lo hacen especialmente importante y crítico para esta especie de manatí. ¿Qué nos puede decir al respecto? ¿Qué características tiene? </p></br>
<p><strong>Dr. LDOG</strong>: Sí, bueno. Para empezar, podríamos decir que el manatí, como especie, evolucionó dentro de zonas de agua dulce. Así desarrolló su sistema de dentición, sistema digestivo que le permite digerir fuertemente pastos, pastos continentales. Después, pudo salir al mar y entonces ahorita habita también zonas costeras, pero su hábitat principal eran las zonas fluvio-lagunares. Aquí en la región, no solo en Tabasco, en el sur de Campeche, Chiapas, el sur de Veracruz, tenemos ríos muy grandes que por la topografía y, por también por el tipo de suelo, forman zonas de inundación muy extensas. Eso en una temporada les proporciona el manatí, mucho alimento, mucha zona para dispersarse, comer, cuidar a las crías, etcétera. Y entonces eso hace que esta región, por la gran cantidad de escurrimiento. De hecho, la región tiene como el 30% de todo el escurrimiento pluvial de México, que es muchísimo y fueron grandes extensiones de zonas lagunares, humedales y vemos que el hábitat es muy propicio para el manatí. En esta zona, por lo mismo, también hay muchas, muchos, mucha problemática asociada a todo esto, pero el hábitat es muy grande. Otras zonas, por ejemplo, importantes es en el Caribe, en la zona costera del Caribe. Lo digo, es la mitad, no es importante que este, pero también hay problemáticas de animales y presentan otras diferencias que hablaremos un poco después de eso. </p></br>
<p><strong>Dr. JRHB</strong>: Muy bien, y justo acaba de comentarnos que el manatí, pues, se mueve de ríos, lagunas y a zonas costeras. Y ¿cómo le hacemos para monitorearlo, ¿cómo sabemos cómo se distribuye, la densidad poblacional, es decir, ¿cuántos individuos hay en una cierta región, qué metodologías se usan para este monitoreo? </p></br>
<p><strong>Dr. LDOG</strong>: Claro, es un reto importante para los investigadores y eso nos ha mantenido trabajando durante ya varias décadas aquí la universidad. En el Caribe, por ejemplo, trabajé en un principio, allá en una avioneta, podíamos contar los animales en la zona costera. Es tampoco es un método muy fácil, pero se facilita en esa zona. Aquí no se puede replicar ese método. Aquí los animales están sumergidos y pasa una lancha, no hay manera de saber que estuvieron. Entonces en un principio, pues, explotaron entrevistas, la gente que está más en los sitios son las que identifican qué sitios son ocupados con qué frecuencia, ¿dónde ven el manatí? ¿Cuántos ven? Pero, ya aterrizando, para poder contar los animales, nosotros empezamos a utilizar técnicas acústicas, con un sonar, emitir un sonido en el fondo. El sonido rebota y sonares específicos pueden detectar a los manatíes. Son ahora es, ya más modernos, no. Con eso hemos podido contarlos, aunque estén sumergidos. </p></br>
<p><strong>Mtro. DJD</strong>: Pero doctor, pero para que lo entienda quien nos lo escucha, porque nos están escuchando niños, adolescentes, jóvenes. ¿Cómo es que emiten el sonido, cómo es que logran decir? “Ah, mira, ahí hay uno”. Con más detalle, por favor. </p></br>
<p><strong>Dr. LDOG</strong>: Un sonar es un aparato especial, emite un sonido como emiten los murciélagos, un sonido que rebota en una superficie dura. </p></br>
<p><strong>Dr. JRHB</strong>: Que el oído humano no escucha. </p></br>
<p><strong>Dr. LDOG</strong>: No lo escucha y el aparato capta el eco de ese sonido. Ese eco, pues, trae la, es diferencial, o sea, si hay algo en el camino del eco se refleja en el sonar. Antes usaban sonares muy, muy sencillos, que solo hacían un haz de sonido muy directo hacia el fondo y podías ir viendo no viendo, sino sondeando que había en el fondo, la profundidad. Hoy utilizamos un sonar que tira más haces como en 360 grados. 180 grados y entonces puede ver toda la columna de agua y detectar el reflejo de un manatí. Nosotros ya sabemos en la pantalla del sonar, lo que es un manatí. Estamos contando, si tenemos duda, regresamos, damos vuelta y lo seguimos contando. De todas maneras, es complicado porque hay que hacer muchos transectos. Tiene un cierto ancho. Tiene un ancho en el que podemos encontrar manatíes, y lo vamos perdiendo más a la distancia. Entonces, también tenemos que ver este, hacer una función con la distancia para irlos contando. Es complicado, no. Otras técnicas que también hemos utilizado mucho aquí. Es capturar los manatíes, marcarlos y seguirlos. Al seguirlos nos lleva a donde hay otros animales y también vemos sus rutas de movimiento y podemos hacer los recorridos que hacemos dirigidos a esas zonas, a los horarios a los en donde podemos más ver a los animales. </p></br>
<p><strong>Dr. JRHB</strong>: Muy, muy interesante, Doctor León. Pues por lo pronto vamos a un corte promocional y enseguida regresamos a “Creando Conciencia”. </p></br>
<p><strong>Locutor </strong>: Creando conciencia. En un momento regresamos. </p></br>
<p><strong>Locutor </strong>: Con la ciencia que transforma. </p></br>
<p><strong>Mtro. DJD</strong>: Regresamos a “Creando Conciencia, la Ciencia que Transforma” y, bueno, vamos a empezar a hablar ahora de eco tipos, condiciones corporales, adaptación y bueno, este, maestros, no todos los manatíes son iguales, ¿verdad? Eh, pues vamos a empezar a ver cómo la ciencia ha ido detectando esos diferentes eco tipos y qué significado tiene conocer esto en la conservación de estos ejemplares, que cuando yo los conocí por primera vez, estaban, o sea, son extraordinariamente. Pero antes de que yo les pregunte, bueno, ¿qué revelan esos estudios de índices de condición corporal sobre la sobre la existencia de eco tipos costeros y manatíes? ¿También que tienen un eco tipo ribereño, no este, ¿eh? ¿Cómo fue que ustedes además de que me contesten esa pregunta, cómo fue que ustedes empezaron a estudiar estos ejemplares? Estos organismos que son preciosos, pero, y qué les llamó la atención y por qué lo sigues estudiando después de tantos años. </p></br>
<p><strong>Dr. LDOG</strong>: Es un es un animal muy interesante, incluso biológicamente. No es un grupo adaptado de manera muy especial. Son los únicos mamíferos herbívoros completamente acuáticos. Son los mamíferos acuáticos, son carnívoros, con excepción de los sirenios, donde pertenece el manatí, que es en principio y todas las adaptaciones que tiene para alimentarse de vegetación con muy poco nutriente, pues es fascinante. También las historias que se cuentan. </p></br>
<p><strong>Mtro. DJD</strong>: Eh, ¿cómo? ¿Cuál? ¿Como para ver de la fuente de una estrella? </p></br>
<p><strong>Dr. LDOG</strong>: Porque la gente siempre te cuenta que cuando saca el manatí del agua, pues empieza a llorar, por ejemplo, no. Que se tapa a las mamás porque le da pena. </p></br>
<p><strong>Mtro. DJD</strong>: ¡Guau! </p></br>
<p><strong>Dr. LDOG</strong>: En fin, preguntándole a la gente, tiene muchas historias. Porque la gente sabe que están ahí, pero poca gente los ve fuera del agua, con excepción de cuando se los comían y al ajo muchos los veían, ya como carne como alimento. </p></br>
<p><strong>Mtro. DJD</strong>: Y hay historias también que relacionan a los manatíes con mujeres embarazadas, no, que, es las cuentas y no sé qué. </p></br>
<p><strong>Dr. LDOG</strong>: Hay leyendas, hay muchas. Hay muchas leyendas en Brasil, hay mucha, porque la gente convive mucho con esa. En México, pues no, no convivimos tanto con los manatíes, eh. Hemos aprendido mucho de la gente que está en los pueblos, en las en las zonas, eh, más dentro de la Cuenca, no, porque sí tienen un poco más de contacto, pero, por ejemplo, aquí en Laguna de las Ilusiones, cuando empezaron a trabajar, la gente no sabía que había animales, les preguntábamos y que “¿Cuál manatí?, ¿cuál manatí?”. Y ayer afuera de su casa estaban cogiendo los animales. </p></br>
<p><strong>Mtro. DJD</strong>: No, eso no es grande, si no hemos mirado. </p></br>
<p><strong>Dr. LDOG</strong>: Son grandes, son grandes. Ahorita ya la gente ha volteado y entonces ya todo lo ven, los sacan video, no. Eh, entonces, el animal es muy interesante, con muchas adaptaciones biológicas, ecológicas que se puede usar como modelo, también para muchas preguntas científicas y ecológicas. Eh, yo cuando trabajaba en Quintana Roo, trabajamos en la zona costera, era más difícil estudiarlos solamente que nos subiéramos a la avioneta. Pero hubo, hubo un evento y yo creo que eso marcó mucho en el 96, 95. Aquí, en la parte derecha, en Chiapas, cerca de Catazajá, una laguna que se estaba secando y nos hablaron para que pudiéramos ayudar a rescatar un par de animales. Eh, llegamos, otro investigador que ella trabajaba. Llegamos, empezamos a capturar animales y de ahí sacamos 17 animales y un par de 18, 18, 18×2, sacamos 17 animales que se llevaron a Catazajá, llamó eso mucho la atención y nosotros volteamos a ver qué pasaba en Tabasco. Ya sabíamos que, si es razonable importante, pero pues no había estudios más que las entrevistas que decía. “¿Qué pasa en Tabasco?”. ¿Cómo los podemos estudiar para poder descifrar este este problema, no, y veíamos que también iba en aumento lo del problema por el cambio climático de que se secan las lagunas, o sea, los momentos de inundación se sequías, etcétera, que esto se podía hacer más recurrente? Entonces teníamos que estudiarlos, pero era complicado y eso nos ha metido en trabajo de todo este tipo. </p></br>
<p><strong>Mtro. DJD</strong>: En mi caso, pues yo, como estudiante, conocí los manatíes, realmente sabía que existían, pero era para mí también, dormitaste que los conocí y se me hizo una especie muy fuera de lo normal. Digamos, no es la estética que uno imagina siempre y sí se me hace muy interesante. Y después viendo que era una especie local que conocemos poco y conocemos más de otros animales y menos de este, no, entonces también eso me llamó la atención y pues se me dio la oportunidad en su momento de realizar una tesis sobre deficiencia digestiva y de ahí para adelante. Después, tuve la oportunidad de trabajar con la navid, igual otros investigadores este que me abrieron, cabo, las puertas y por ahí se fue el camino, no para para este, para estudiar a los animales hasta que se me da la oportunidad de la universidad de establecerme, no. </p></br>
<p><strong>Dr. JRLC</strong>: ¡Qué interesante! No, en esta entrevista tenemos dos generaciones. Estamos, ¿están, está bien, el relevo generacional, ¿no? Así es, y los dos apasionados por estos por estos mamíferos, no. ¿Qué bonito, entonces sí, hay si hay condiciones corporales diferentes entre manatíes costeros y ribereños? Y ¿qué implica que tengan esas diferencias, si los pudieran explicar? </p></br>
<p><strong>Mtro. DJD</strong>: Este, pues, en principio, pues tiene que ver como adaptaciones justamente a los ambientes, no. Eh, por ejemplo, el ambiente costero, que puede ser pues más estable, un ambiente, digamos, más amplio con menos obstáculos, tal vez este con ciertos recursos, este, más o menos estable, como son los pastos marinos, mientras que, por ejemplo, en el ambiente de aguas continentales, ambiente de agua dulce, sí, tiende mucho a haber muchos cambios. Por ejemplo, en las estaciones, no, de época secas, época de lluvias, inundaciones o secas. No, entonces, de repente hay demasiado alimento en época de inundaciones y hay demasiado poco alimento en época de secas. No, entonces, eso puede influenciar los tamaños de los animales, digamos, como un, un ajuste selectivo a la talla. A las condiciones de ambientales, no. Estos estos organismos lo han ocupado, eh, las personas por siempre para su alimentación o qué obtienen de él, ¿por qué? ¿Por qué? ¿Por qué fueron desapareciendo? ¿Por qué los matan, por qué? ¿Por qué dañamos esas especies, cuál es la razón, qué se aprovecha de ellos, y si no hay una forma de seguirlos cuidando, yo sé que ustedes hacen un gran esfuerzo, ahorita nos han contado que no es tan fácil contarlos, que requiere mucho recurso, ¿no? ¿Por qué? ¿Por qué no se ha mirado eso? Si nos pudieran hacer al respecto. </p></br>
<p><strong>Dr. LDOG</strong>: Del manatí se aprovechaba todo cuando era un recurso comercial, digamos, en la época de la colonia. Se aprovechaba la carne, la piel, los huesos, se aprovechaba de manera integral. Eh, pero la cacería fue, fue muy extensa, no hay mucho documentado, pero, por ejemplo, se cuenta que los barcos atracaban, por ejemplo, en Ciudad del Carmen y se subían muchas toneladas de carne de manatí seca para avituallar a los barcos, no. Eh, no hubo un registro como en el caso de otros animales, por ejemplo, los marinos, se registró cuántos se iban cazando por las pieles. No, en el manatí no hay registros de eso. Pero estos, estas bitácoras que se encuentran, pues, se dice que la cacería fue muy grande y con los estudios de genética también hemos visto que hubo un cuello de botella, un, un momento en el que la especie llegó a niveles muy bajos y después empezó a recuperar. Después de la colonia sí hubo cacería, pero ya no fue tan intensa como antes y tan fue así que, como decía Darwin, en 1921, en México se estableció la primera ley, la primera veda y cacería de manatí. Dice, “Pero yo en todo México, ¿casarme manatí?”. Porque ya algo estaba llamando la atención de que había bajado muchísimo sus poblaciones. La cacería aún con la veda siguió. Eh, ya en los 90, en el 94, la Ley de Pesca y Fomento estableció ya multas, incluso, para la cacería de manatíes, y después, ya no. Después del 94, 96, ya vino la Norma Oficial Mexicana que establecía las especies en riesgo. Eh, y hubo más regulación para el caso del manatí. Aún ahora se sigue comiendo. Es un recurso alimenticio, pero ya sucede en muy pocas ocasiones. A lo mejor como algo accidental, si queda en una red, la gente la aprovecha, no. Eh, ya es rarísimo que alguien salga específicamente a cazar un manatí, y la gente ya incluso en las comunidades ya no lo ven malo, bueno. El él está haciendo esta actividad, pero, pues acompañado, vienen muchísimos problemas, no solamente es la cacería. También estamos cambiando el hábitat, impactándolo de manera significativa, incluso silenciosamente, con la contaminación, químicos, nutrientes en exceso, etcétera. Están cambiando su hábitat y lo están volviendo hostil, si se le podían decir así. </p></br>
<p><strong>Mtro. DJD</strong>: ¡Qué interesante la reflexión en la que estamos llegando! No, o sea, no los estamos casando directamente, pero con nuestra acción los estamos destruyendo. ¡Qué interesante! Pero Roberto. Tenemos que ir a un corte promocional y enseguida regresamos a “Creando Conciencia, la Ciencia que Transforma”. </p></br>
<p><strong>Locutor </strong>: Creando conciencia. En un momento regresamos.	 </p></br>
<p><strong>Locutor </strong>: Continuamos con la ciencia. </p></br>
<p><strong>Dr. JRHB</strong>: Regresamos a “Creando Conciencia, la Ciencia que Transforma”. Es tiempo de escuchar Vox Populi, la voz de la sociedad, preparada por el doctor José Aurelio Sosa Olivier. </p></br>
<p><strong>Dr. José Aurelio Sosa Olivier </strong>: El manatí antillano es una especie emblemática de Tabasco, reconocida por su carácter pacífico y su rol ecológico en los ecosistemas acuáticos. Sin embargo, enfrenta múltiples amenazas que comprometen su supervivencia, lo que ha motivado una respuesta integral desde la ciencia, la conservación y la gestión ambiental. El manatí antillano considerado el mamífero acuático más grande del estado de Tabasco que enfrenta diversas amenazas. ¿Conocen esa? </p></br>
<p><strong>Dr. JASO</strong>: Una, conozco que las diversas maneras que puede enfrentar la especie de manatí antillano son, ya sea la contaminación a cuerpos de agua en los que estén, en los que estos habiten, porque puedan afectar a su piel. Tengo entendido. Conozco algunas amenazas que podría decir la colisión de lanchas y contaminación de cuerpos de agua, también este la. </p></br>
<p><strong>Dr. JASO</strong>: Secreto. ¿Son los servicios ecosistémicos que esta especie le ofrece a nuestro entorno ecológico? </p></br>
<p><strong>Dr. JASO</strong>: Los servicios que yo sé que ofrecen que la especie está habitando en un lugar de cuerpo de agua es que nos dejan claro la pureza que tiene el agua que habiten ahí. </p></br>
<p><strong>Dr. JASO</strong>: ¿Sabes o conoces sobre el santuario del manatí ubicado en Jonuta, Tabasco? </p></br>
<p><strong>Dr. JASO</strong>: No lo conozco, pero sé que UJAT tiene una participación cuando se trata del cuidado de los manatíes. </p></br>
<p><strong>Mtro. DJD</strong>: Regresamos a “Creando Conciencia, la Ciencia que Transforma” y, bueno, vamos a aprovechar el momento. Nos están escuchando aquí en la junta de gobierno, este la licenciada Rocío Morales Pérez siempre está pendiente del programa, dice, “Siempre le escucho, doctor”. Siempre escucho, te queremos mandar un saludo ahí donde está trabajando y, y, bueno, este igual decirles aquí a los doctores que yo veo que su teléfono suena y suena, “manden saludos”, no pierdan la oportunidad. Este es el momento, bien. Vamos a continuar con las con las preguntas. Escuchábamos la voz, la voz del pueblo y, bueno, este sobre las amenazas, esa resiliencia, ¿verdad? Esta especie emblemática que a mí me emociona muchísimo platicar de ella. Hace rato comentábamos aquí en cortito, porque pues este mi mamá que vive vivías ahí, habías un río, interactuaba con estos, este, con estos documentos de organismos, no y siempre los platicaba de los manatíes y nos contaba historia que ella escuchaba o también a veces nos las inventaba, pero siempre nos llamó mucho la atención. El manatí es grande, ¿verdad? Es, es un animal que llega a medir de un gran tamaño, no. Y a pesar ahorita nos digan, me pueden decir ¿cuánto mide?, ¿cuánto pesa?, no, y, bueno, pero son tan grandes y, vamos a decir gordos, muy pesados, este, pero tienen amenazas. No nos amenazan, eh, las poblaciones aquí en Tabasco, no, y este y en otras partes del mundo, no. ¿Cuáles son esas principales amenazas que tienen los estas estas especies? </p></br>
<p><strong>Dr. JASO</strong>: Bueno, dentro de las amenazas, por ejemplo, era la cacería y ya decíamos que ahorita la cacería no es realmente un problema, como tal, sino hay un aprovechamiento futurístico, pero, por ejemplo, la contaminación también. La, por ejemplo, en estos problemas de desecación de cuerpos de agua. Por ejemplo, esta zona de Tabasco, sur de Campeche, norte de Chiapas, sí sufre mucho de desecación, entonces es relativamente común que en esa temporada ya empiecen a quedarse aislados algunos animales que no pueden salir ya, no, no tienen acceso a comida. Inclusive hay animales que hayamos documentado que pueden caer entre 2 hasta 4 meses sin comer nada en esa temporada, te dice algo también mucho de llamar la atención porque pues pocos animales aguantan tanto tiempo ayunando, digamos, no, entonces, esa es una de las amenazas. Decíamos la contaminación, la alteración del hábitat, por ejemplo, a ciertos hábitats, pues están alterados en la, en la ribera, por ejemplo, se rellena, se construyen cosas, y, pues obviamente ahí también se pierde vegetación este, y pues también es una fuente de contaminación. Todo asentamiento humano siempre va a provocar algo. Este, pues también en por ahí, están las plantaciones de gran escala, por ejemplo, una de ellas puede ser palma de aceite este u otro tipo de plantaciones que utilizan cierta cantidad de químicos o inclusive nutrientes, no, porque te hace también el exceso de nutrientes que va al agua puede provocar. Por ejemplo, cuestiones de eutroficación y proliferación de algunas cuestiones por ahí, que pueden ser este un problema más adelante. </p></br>
<p><strong>Mtro. DJD</strong>: ¡Oh, ¡qué interesante! No este ¿Y entonces, qué papel? O qué rol pegan ahora las áreas naturales protegidas, como, por ejemplo. No, yo voy a decirlo o desprotegidas, no. Como pantanos de Centla. O desprotegida, como la laguna de las ilusiones, no, este, en la conservación del del manatí y también tenemos otra área natural, no, otra reserva natural, ¿manzano? Y este, ¿qué papel juegan esas eh, esas estrategias gubernamentales en el en el en la conservación del manatí? En la conservación de su de su hábitat y recuerden que nos gustaría, nos dijeran cuánto mide, cuánto pesan, cómo, cómo nacen, cómo. ¿Quién, quién se junta con quién? Para que nazca un manatí, platíquenos de eso, que es emocionante, es que. </p></br>
<p><strong>Dr. LDOG</strong>: Eso. Adelante, doctor, son animales grandes, solitarios, que crecen rápidamente y, además, puede llegar a la era reproductiva en machos como en unos 3 años en hembras. Por medio de unos 5 años, pero su reproducción es muy lenta. Tienen una cría por parto. El parto dura casi 14 meses, entre 13 y 14 meses. La gestación del parto tiene una sola cría, en ocasiones 2. Y la hembra cuida a la cría en un periodo más o menos prolongado de unos 3 años, en promedio. Y son muy solitarios. Son solitarios, no, no forman grupos muy grandes. La hembra cuando entra en esto. </p></br>
<p><strong>Dr. JRLC</strong>: Eso lo hace también vulnerable, ¿verdad? </p></br>
<p><strong>Dr. LDOG</strong>: Lo hace bastante. Bueno, claro, no es el primer aviso, ahí implementan esto y tiene un sistema reproductivo como el de los caninos, como el de los perros, por ejemplo. La hembra entra en esto y libera las hormonas en el agua que atraen a los machos de distancias más grandes, se forman grupos reproductivos. En promedio, una docena de animales puede haber más, que siguen a la que siguen a la hembra e intentan, eh, cooperar con ella en repetidas ocasiones, durante todo el momento que está la receptiva. E incluso tenemos casos en los que es tanto el acoso y a lo mejor la hembra tiene algún problema de salud que terminan matando a la hembra por el cansancio o por desnutrición, pero, bueno, ese ese sistema pareciera que es que se producen muy lentamente, pero como viven tanto pueden tener también muchas crías, si se les da el tiempo de vida. </p></br>
<p><strong>Dr. JRLC</strong>: ¿Y con cuántos años viven tanto, a qué edad? </p></br>
<p><strong>Dr. LDOG</strong>: Se ha documentado, hasta como 60 años en cautiverio, de un animal y en la libre hasta podían ser más, a menos dependiendo. </p></br>
<p><strong>Dr. JRLC</strong>: Y ¿cómo se dan cuenta de cuántos años tienen, ¿cómo saben que esta tiene 7 años, esa tiene 15? </p></br>
<p><strong>Dr. LDOG</strong>: Sí, de hecho. Por ejemplo, en el en el hueso del oído cada año se va formando una capa periótica entonces. Ese en una parte del hueso se corta, se hacen láminas y en el microscopio se pueden contar las líneas de crecimiento. Esas se han se han relacionado con el tamaño de los individuos y, pues haciendo un, un modelo, podemos ver cómo van creciendo con el tiempo, tiene cierta precisión, pero esa es la forma. Otra es seguirlos, desde el principio cuando tienen animales en cautiverio que les dan seguimiento con el tiempo, pues o en zoológicos, son acuarios que les dan más tiempo se puede siguiendo. </p></br>
<p><strong>Mtro. DJD</strong>: ¿O, ustedes tienen animales así en cautiverio? A ver, cuéntenos. </p></br>
<p><strong>Mtro. DJD</strong>: Pues sí, bueno, tenemos 3 animalitos o 3 especímenes de digamos, o 3 individuos que ya son juveniles, pues ya tienen 2 m, llegaron desde pequeñitos de uno de qué, de qué medida llegaron 95, 95. Dos metros, ya mira, yo me acuerdo se los dijo, estaban chiquititos. Sí, ya básicamente 6, poco más de 6 años que tienen, 10, entonces ya son los juveniles, este ya puede ser reproductivamente. Ya tenemos una idea de ciertas tallas, ya sabemos cómo se nos queda tienes, por ejemplo, este de manatí que. Bueno, la longevidad que mencionaba León David, por ejemplo, un manatí en Estados Unidos en Florida, que llegó a vivir 60 y más de 65 años, y justamente murió por un error humano en el acuario. No, ustedes pudieron haber vivido más, pues no queremos seguir platicando. Pero tenemos que ir a un corte promocional. Y enseguida regresábamos a “Creando Conciencia, la Ciencia que Transforma”. </p></br>
<p><strong>Locutor </strong>: Creando Conciencia. En un momento regresamos. Con la ciencia. Transforma. </p></br>
<p><strong>Mtro. DJD</strong>:  Bien, regresamos a “Creando Conciencia, la Ciencia que Transforma”. Pues ya vamos a ir cerrando el este programa. Nos falta muchísimo tiempo para seguir platicando de los manatíes, pero bien, doctores, algún comentario que quieran hacer ustedes para para tocar el tema de esa de esa conservación participativa, de ese futuro sostenible, de cómo de cómo ir cuidando a estos organismos que nos den sus comentarios y quedó algo pendiente, no. La de las reservas. </p></br>
<p><strong>Mtro. DJD</strong>: Sí, de hecho, este Tabasco tiene varias reservas que pues, sobre todo, en los Pantanos de Centla, a nivel de reserva de la biosfera, este que tiene un reconocimiento internacional. Este es de la que cubren una mayor área en cuanto a la protección. Sin embargo, todavía faltan ahí algunas otras reservas que pudieran formarse, porque, por ejemplo, la región hacia el sur, hacia Balancán, porque está Jonuta, pero no necesariamente cubre toda la zona donde hay distribución de manatí. Hay otras zonas este por ahí que tienen una buena esta porción de manatíes, digamos, la parte de Jonuta que, por ejemplo, hay iniciativas por ahí, para hacer las áreas naturales protegidas o la falta puntualizar cuestiones de manejo de los organismos en esa zona, no. Por ejemplo, acá tenemos laguna de las ilusiones en Tabasco, que es una reserva ecológica pero que los manatíes ahí no necesariamente este eh, digamos, no son animales que pueden salir de ahí. Son animales confinados, prácticamente. En otros, ahí tenemos una situación diferente, o sea, es una población que está ahí que, para parecer, de hecho, los estudios genéticos apuntan más a que fue una población que se insertó ahí. Sí, entonces por ahí hay una serie de cosas que hay que hacer a esa población, porque no es tan fácil, este ya no tiene flujo genético, pues, en el sentido de que no entran ni salen animales. </p></br>
<p><strong>Dr. JRLC</strong>: Adelante, doctor. </p></br>
<p><strong>Dr. LDOG</strong>: De las reservas, es muy importante, en realidad, viendo toda la distribución en México, eh, hay bastantes áreas de reserva que cobijarían a la especie. Eh, yo creo que es bien importante rescatar en los objetivos de la reserva, así que la reserva sí se vuelva, eh, pues un, un mecanismo eh, de protección de artes y me van a decir, también, es que las reservas, pues son entes, como cerrados, no, eh, y mucha de la contaminación, por ejemplo, viene de cuencas arriba, no, ¿cierto? Entonces, eh, pues no nos podemos circunscribir a las a las escuelas, reservas, tenemos que ampliar áreas de la influencia de esas reservas y crear algún mecanismo de protección y de manejo la especie de su hábitat. Y bueno, como retomando, lo que decías bien importante. El cambio de conciencia de la gente no mira la especie, eh, con otra perspectiva, el que el manatí esté aquí en Tabasco, en nuestros sistemas fluvio-lagunares, refleja que todavía son funcionales, esos sistemas. Lo estamos perdiendo porque están degradando, pero todavía son funcionales, porque podemos observar esa especie tan grande, tan longeva, tan difícil de producir. No la vemos ahí, es parte vida integral de eso, entonces no solo quejarnos cuando se mueren, sino tener una visión abierta. Lo que queremos vida de las manatíes, pero también queremos vida de los ecosistemas acuáticos que tenemos en los que hay muchas cosas más de las que dependemos. </p></br>
<p><strong>Mtro. DJD</strong>: Y así como cuidamos los monos, pues también no, cuidar a los manatíes. ¿Roberto, último comentario? </p></br>
<p><strong>Dr. JRHB</strong>: Pues yo siempre he sido muy, muy aficionado a los manatíes, desde niño que conocí los primeros que vi en Quintana Roo, me encantaron y son animalitos que, bueno, como todos como toda la fauna silvestre son es necesario de conservar de proteger, y, bueno, nuestros dos invitados del día de hoy son no solo expertos, sino que nos podrían dar mucha información, muchas, mucha capacitación a las comunidades para conseguir que esta especie se mantenga en un hábitat saludable. </p></br>
<p><strong>Mtro. DJD</strong>: Y ¿hay muchos como ustedes en México que estudian los manatíes, o son pocos? </p></br>
<p><strong>Dr. LDOG</strong>: No es una comunidad tan grande. Pues hay muchas más cosas que investigar en México, pero también sí es diversa, o sea, hay gente que está trabajando con las comunidades, no tanto con la especie, sino con las comunidades alrededor del cuidado del manatí. Hay gente que está con parasitología, hay veterinarios y, pues también este, algunos cuantos investigadores en la parte de ecología. Somos tantos, pero tratamos de cubrir muchas. </p></br>
<p><strong>Mtro. DJD</strong>: ¡Qué interesante! Este tema creo que quedó, quedaron muchas preguntas para una segunda vuelta. No sé si están ustedes este que nos regalen ese tiempo valioso, no, para para una segunda entrevista y va a ser muy interesante. Hoy descubrimos como un mamífero acuático silencioso y poco visible, puede convertirse en un símbolo de conservación y sostenibilidad. El manatí antillano, no solo representa la riqueza de nuestros ecosistemas fluviales. También nos recuerda los frágiles que son estos sistemas frente al descuido humano. Hoy alzamos la voz para crear conciencia sobre el manatí, para crear conciencia eh, sobre el cuidado de lo que está alrededor del manatí, los humedales, la biodiversidad y la necesidad de poder coexistir en equilibrio por naturaleza, desde la ciencia, la tecnología y la educación podemos construir soluciones para protegerlos, gracias de verdad, doctores, por acompañarnos en esta emisión y gracias a todos los que nos están escuchando, eh, en “Creando Conciencia” y, bueno, nos despedimos como todos los miércoles agradeciendo su presencia. Eh, soy el doctor José Ramón Laínez Canepa. </p></br>
<p><strong>Dr. JRHB</strong>: Roberto Hernández Barajas. </p></br>
<p><strong>Mtro. DJD</strong>: Y Darwin Jiménez Domínguez. </p></br>
<p><strong>Dr. LDOG</strong>: Y León David Olivera Gómez. </p></br>
<p><strong>Mtro. DJD</strong>: Y de igual forma, estamos muy agradecidos con las autoridades de la Dirección General de Comunicación Social y a la División Académica de Ciencias Biológicas y como siempre, muchas gracias a nuestra productora, la licenciada Ayara, y a todos los que nos escuchan cada miércoles. Gracias por estar con nosotros en “Creando Conciencia”, hasta la próxima.
<p><strong>Locutor </strong>: Creando Conciencia, la Ciencia que Transforma. Es una producción de Radio UJAT, Voz Universitaria, Legado UJAT, estudio en la duda, acción en la fe. </p></br>
`,
        } as PageContent,
        {
          type: "text",
          content: `<h1><strong>Mirada desde la Ciencia</strong></h1>
          Hablar del manatí es hablar del estado de los ecosistemas acuáticos. Desde la ciencia, esta especie no se comprende únicamente como un organismo vulnerable o emblemático, sino como un indicador biológico que refleja la calidad ambiental de ríos, lagunas y humedales. Su presencia, sus desplazamientos y su condición física permiten interpretar procesos más amplios relacionados con la calidad del agua, la disponibilidad de alimento, la conectividad de los sistemas acuáticos y el grado de intervención humana. En este sentido, estudiar al manatí es una forma de leer el territorio y sus transformaciones. </br>
La investigación científica ha demostrado que la conservación no puede centrarse solo en la protección de individuos. El manatí depende de ecosistemas funcionales, donde la vegetación acuática, los flujos naturales del agua y la ausencia de contaminantes permiten su supervivencia. Cuando estos elementos se alteran —por la contaminación, el tráfico de embarcaciones, la modificación de cauces o la pérdida de hábitat—, los efectos no siempre son inmediatos ni visibles, pero sí profundos y acumulativos. La ciencia permite identificar estas señales tempranas, cuando aún es posible prevenir daños irreversibles. </br>
Desde el trabajo de campo, el uso de telemetría y sonar de barrido lateral ha ampliado de manera significativa el conocimiento sobre el comportamiento del manatí. Estas herramientas han permitido reconocer zonas críticas, rutas de desplazamiento y áreas de mayor riesgo, aportando información clave para diseñar estrategias de conservación basadas en evidencia. Así, la ciencia deja de ser un ejercicio descriptivo y se convierte en una guía para la toma de decisiones ambientales. </br>
Un aspecto central abordado en este capítulo es la atención y rehabilitación de manatíes en riesgo, que revela la estrecha relación entre las actividades humanas y la fauna acuática. Cada individuo lesionado, desorientado o desnutrido no representa un caso aislado, sino un síntoma de un sistema que ha perdido equilibrio. La ciencia, en este contexto, no solo busca sanar, sino comprender las causas para evitar que el daño se repita. Rehabilitar implica también prevenir, educar y fortalecer la gestión ambiental. </br>
La conversación científica también pone en evidencia una tensión social persistente. Para muchas personas, el manatí es un símbolo de naturaleza y conservación; para otras, es un organismo lejano, poco visible o ajeno a la vida cotidiana. La ciencia no niega esta percepción dual, pero la ordena: explica que incluso las especies menos observadas cumplen funciones ecológicas fundamentales y que su desaparición genera impactos que trascienden lo biológico y alcanzan lo social. El problema no es el manatí ni su presencia, sino la forma en que el ser humano ha modificado los ecosistemas que comparte con él. </br>
En este punto, el capítulo enfatiza que la conservación deja de ser un concepto abstracto y se transforma en una responsabilidad concreta. Proteger al manatí no significa únicamente evitar su extinción, sino replantear la relación con el agua, con los territorios acuáticos y con las decisiones cotidianas que influyen en su estado. La ciencia propone un cambio de enfoque: dejar de reaccionar cuando el daño ya es visible y comenzar a actuar desde la prevención, el conocimiento y la corresponsabilidad social. </br>
De esta manera, el cierre de esta reflexión realiza una invitación abierta: crear conciencia implica aprender a coexistir con los ecosistemas acuáticos, no desde la tolerancia pasiva, sino desde la comprensión informada. Convivir no es adaptarse al deterioro, sino actuar para evitarlo. El manatí guarda información valiosa sobre el presente y el futuro de los cuerpos de agua; escucharlo, a través de la ciencia, es una forma de proteger no solo a una especie, sino a los sistemas de los que depende la vida humana. Porque cuando cuidamos lo que parece distante o silencioso, también estamos cuidando el equilibrio que nos sostiene. </br>
`,
        } as PageContent,






        
        ],
     },
        // CAPITULO 6 *********************************************************************************
     {
      title: "Invitados: Cual?",
      pages: [
        {
          type: "cover",
          title: "Invitados: xxxx",
        } as PageContent,
        {
          type: "biography",
          authorName: "xxx",
          image: "/xxx.jpg",
          content: `
            <p></p>`,
        } as PageContent,

        {
          type: "text",
          content: `<h1><strong>Introducción del Capítulo</strong></h1>
          Burelo.`,
        } as PageContent,
        {
          type: "text",
          content: `<h1><strong>Transcripción Editada de la Entrevista</strong></h1>
          Xxx.`,
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
          xxx`,
        } as PageContent,
        {
          type: "text",
          content: `<h1><strong>Mirada desde la Ciencia</strong></h1>
          <h3>Por el o los entrevistados (síntesis ensayística de los puntos clave del programa)</h3>
          xxx`,
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
        {
          type: "biography",
          authorName: "xxx",
          image: "/xxx.jpg",
          content: `
            <p></p>`,
        } as PageContent,

        {
          type: "text",
          content: `<h1><strong>Introducción del Capítulo</strong></h1>
          Burelo.`,
        } as PageContent,
        {
          type: "text",
          content: `<h1><strong>Transcripción Editada de la Entrevista</strong></h1>
          Xxx.`,
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
          xxx`,
        } as PageContent,
        {
          type: "text",
          content: `<h1><strong>Mirada desde la Ciencia</strong></h1>
          <h3>Por el o los entrevistados (síntesis ensayística de los puntos clave del programa)</h3>
          xxx`,
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
        {
          type: "biography",
          authorName: "xxx",
          image: "/xxx.jpg",
          content: `
            <p></p>`,
        } as PageContent,
        {
          type: "text",
          content: `<h1><strong>Introducción del Capítulo</strong></h1>
          Burelo.`,
        } as PageContent,
        {
          type: "text",
          content: `<h1><strong>Transcripción Editada de la Entrevista</strong></h1>
          Xxx.`,
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
          xxx`,
        } as PageContent,
        {
          type: "text",
          content: `<h1><strong>Mirada desde la Ciencia</strong></h1>
          <h3>Por el o los entrevistados (síntesis ensayística de los puntos clave del programa)</h3>
          xxx`,
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
        {
          type: "biography",
          authorName: "xxx",
          image: "/xxx.jpg",
          content: `
            <p></p>`,
        } as PageContent,

        {
          type: "text",
          content: `<h1><strong>Introducción del Capítulo</strong></h1>
          Burelo.`,
        } as PageContent,
        {
          type: "text",
          content: `<h1><strong>Transcripción Editada de la Entrevista</strong></h1>
          Xxx.`,
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
          xxx`,
        } as PageContent,
        {
          type: "text",
          content: `<h1><strong>Mirada desde la Ciencia</strong></h1>
          <h3>Por el o los entrevistados (síntesis ensayística de los puntos clave del programa)</h3>
          xxx`,
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
        {
          type: "biography",
          authorName: "xxx",
          image: "/xxx.jpg",
          content: `
            <p></p>`,
        } as PageContent,
        {
          type: "text",
          content: `<h1><strong>Introducción del Capítulo</strong></h1>
          Burelo.`,
        } as PageContent,
        {
          type: "text",
          content: `<h1><strong>Transcripción Editada de la Entrevista</strong></h1>
          Xxx.`,
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
          xxx`,
        } as PageContent,
        {
          type: "text",
          content: `<h1><strong>Mirada desde la Ciencia</strong></h1>
          <h3>Por el o los entrevistados (síntesis ensayística de los puntos clave del programa)</h3>
          xxx`,
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
