import React, { Component } from "react";
import Fade from "react-reveal";

class Blogs extends Component {
  render() {

    const efectospic = "../../images/efectos.jpg";
    const ansiedadpic = "../../images/ansiedad.jpg";
    const narcpic = "../../images/narc.jpg";
    const fasespic = "../../images/fases.jpg";
    const toxpic = "../../images/tox.jpg";
    const habpic = "../../images/hab.jpg";

    return (
      <section id="blogs">
        <Fade duration={1000}>
          <div className="index-column">
            <li>
              <a href="/">
                <i class="fa fa-home"></i>
                VOLVER AL INICIO
              </a>
            </li>
            <li>
              <a href="#blogs1">
                LOS EFECTOS DEL AZUCAR EN EL CEREBRO
              </a>
            </li>
            <li>
              <a href="#blogs2">
                SINTOMAS Y RECOMENDACIONES PARA ATAQUES DE ANSIEDAD
              </a>
            </li>
            <li>
              <a href="#blogs3">
                ¿CÓMO IDENTIFICAR UN NARCISISTA?
              </a>
            </li>
            <li>
              <a href="#blogs4">
                FASES DE LA SEPARACION
              </a>
            </li>
            <li>
              <a href="#blogs5">
                ¿QUÉ SON LAS RELACIONES TÓXICAS?
              </a>
            </li>
            <li>
              <a href="#blogs6">
                HÁBITOS PARA SUPERAR UNA RUPTURA DE PAREJA
              </a>
            </li>
          </div>
          <div className="content-column">
            <Fade duration={1000}>
              <section id="blogs1">
                <div className="row">
                  <h1 class="center">LOS EFECTOS DEL AZUCAR EN EL CEREBRO</h1>
                </div>
                <div className="row1">
                  <img class="center" src={efectospic} alt="Efectos pic" />
                </div>
                <div className="row">
                  <p className="justified">{"Los efectos del azúcar en nuestro cerebro y estado de ánimo son devastadores, la liberación de dopamina que genera el azúcar y los alimentos altamente procesados nos hacen consumirlos para obtener esa satisfacción, que en algunos casos se vuelve una adicción,   comer mucho azúcar te dará picos repentinos en la cantidad de glucosa en la sangre; los síntomas de que esto incluyen, la adicción, fatiga, estrés, irritabilidad, mareos, insomnio, sudoración excesiva (especialmente por la noche), falta de concentración y olvido, sed excesiva, depresión y episodios de llanto, trastornos digestivos y visión borrosa. Dado que el cerebro depende de un suministro uniforme de glucosa, no es sorprendente encontrar que el azúcar ha estado implicado en el comportamiento agresivo, la ansiedad, la depresión y la fatiga."}</p>
                  <p className="justified">{"En un interesante artículo sobre la depresión publicado por la clínica FoodForTheBrain, exponen que los desequilibrios del nivel de azúcar en la sangre suele ser el factor más importante en los trastornos del estado de ánimo entre sus pacientes."}</p>
                  <p className="justified">{"El azúcar puede llegar a vincularse con la aparición de Alzheimer en casos de consumo crónico, y también puede tener un fuerte impacto neurológico, no hay controversia científica… el azúcar causa inflamación, las células de grasa resistentes a la insulina cuando usted come demasiada azúcar producen mensajes inflamatorios, extendiendo su daño al cerebro."}</p>
                  <p className="justified">{"Comer azúcar puede contribuir a deteriorar la capacidad del cerebro para procesar y retener información ya que provoca inflamación crónica. Los estudios demuestran que la depresión y el estrés pueden aumentar la inflamación. Esta inflamación se ha asociado a una disminución de las capacidades cognitivas que conduce a signos de envejecimiento como el olvido y la confusión."}</p>
                  <p className="justified">{"La obesidad y el trastorno de déficit por atención se potencian por el alto consumo de azúcar, sin dejar de mencionar que las células cancerígenas se alimentan de azúcar."}</p>
                  <p className="justified">{"Otro reciente estudio encontró que una menor ingesta de azúcar puede estar asociada con una mejor salud psicológica, estas condiciones alimentarias se pueden tratar en consulta psicológica con terapia cognitivo conductual, y llegar a Identificar aquello que incita a comer de manera impulsiva, que necesidad o vació se desea llenar. "}</p>
                  <p className="justified">{"Se dan talleres de relajación o mindfulness y la personalización de las actividades a realizar para instaurar los hábitos nuevos. Se trabaja el control de los impulsos, el manejo y reducción de la ansiedad, la gestión emocional y la instauración de hábitos de vida saludables para asegurar el bienestar físico y emocional de la persona. A lo largo del tratamiento se prioriza la mejora de la relación hacia la comida y la autoestima, dos factores que suelen verse repercutidos en estos casos y la medicación en los casos que se requiera. "}</p>
                </div>
              </section>
            </Fade>
            <Fade duration={1000}>
              <section id="blogs2">
                <div className="row">
                  <h1 class="center">SINTOMAS Y RECOMENDACIONES PARA ATAQUES DE ANSIEDAD</h1>
                </div>
                <div className="row1">
                  <img class="center" src={ansiedadpic} alt="Efectos pic" />
                </div>
                <div className="row">
                  <h2>Algunas reacciones físicas de los ataques de ansiedad.</h2>
                  <li>Aceleración cardíaca</li>
                  <li>Palpitaciones</li>
                  <li>Sensación de inestabilidad o mareo</li>
                  <li>Sudoración</li>
                  <li>Náuseas</li>
                  <li>Temblores</li>
                  <li>Sensación de falta de aire o ahogo</li>
                  <li>Dolor en el pecho</li>
                  <li>Molestias abdominales</li>
                  <li>Problemas gastrointestinales (estreñimiento, diarrea)</li>
                  <li>Escalofríos o sensación de calor</li>
                  <li>Parestesias (hormigueo o insensibilidad en extremidades)</li>
                  <li>Desrealización (sensación de irrealidad)</li>
                  <li>Despersonalización (sensación de estar separado de uno mismo)</li>
                  <li>Necesidad frecuente de ir al baño</li>
                  <li>Miedo a morir</li>
                  <li>Sequedad en la boca</li>
                  <li>Miedo a perder el control o volverse loco</li>
                  <li>Tensión muscular</li>
                  <h2>Recomendaciones para Ataques de Ansiedad</h2>
                  <li>Hacer y pensar en otra cosa (imagina tu lugar feliz y seguro)</li>
                  <li>Cambiar de tema de conversación.</li>
                  <li>Ponerse a trabajar en algo.</li>
                  <li>Realizar cualquier actividad que permita no darle importancia a los síntomas que está teniendo.</li>
                  <li>En vez de hiperventilar, respirar más lentamente, controlar la respiración es muy importante.</li>
                  <li>Técnicas de relajación</li>
                  <li>Es importante que la persona sepa que lo que está sintiendo es algo pasajero y que no le va a hacer daño a su salud ya que es algo emocional, independientemente del tiempo que le dure el ataque de ansiedad.</li>
                  <li>Preguntarle al médico que si puede tomar algún tranquilizante y también informarle de que está teniendo los ataques de ansiedad.</li>
                  <h2>Después del ataque de pánico</h2>
                  <ol>
                    <li>Haz alguna actividad agradable. Puede que sientas agotamiento después del episodio. Es normal, tu cuerpo ha reaccionado como si tuvieras que huir o luchar. Has gastado mucha energía. Haz alguna actividad que te permita desconectar de todas las sensaciones que has sentido en ese momento (ver tu serie favorita, escuchar música…).</li>

                    <li>Respira profundamente. Recupera el estado de activación normal del cuerpo permitiendo que se relaje después de tanta tensión.</li>

                    <li>Comparte tu experiencia con alguien en quien confíes. Cuéntale y explícale cómo podría ayudarte en esta situación, qué es lo que te podría hacer sentir mejor.</li>

                    <li>Recupera las fuerzas. Piensa en qué necesita tu cuerpo en ese momento, si descansar debido al esfuerzo, beber o comer alguna cosa para reponer.</li>
                  </ol>
                  <h2>Estrategias para el manejo de la ansiedad en general</h2>
                  <ol>
                    <li>El ejercicio físico es un método eficaz para reducir la ansiedad. Intenta mantener una actividad aeróbica diaria de al menos 30 minutos (caminar, correr, nadar, bailar…).</li>

                    <li>Las técnicas de relajación permiten fortalecer y consolidar la respuesta opuesta a la ansiedad. Permite que el cuerpo se relaje y los músculos se destensen. Entre las técnicas de relajación están la relajación progresiva y la respiración diafragmática.</li>

                    <li>Mantén hábitos de sueño saludables. Duerme las horas suficientes, ya que dormir pocas horas o de escasa calidad empeoran la ansiedad.</li>

                    <li>Haz actividades con tus amigos u otras personas que te permitan sentirte mejor. Es importante que mantengas las actividades de ocio con otras personas y no te aísles debido a la ansiedad, evitando estas situaciones.</li>
                  </ol>

                </div>

              </section>
            </Fade>
            <Fade duration={1000}>
              <section id="blogs3">
                <div className="row">
                  <h1 class="center">¿CÓMO IDENTIFICAR UN NARCISISTA?</h1>
                </div>
                <div className="row1">
                  <img class="center" src={narcpic} alt="Narcicista pic" />
                </div>
                <div className="row">
                  <p className="justified">{"Estos perfiles normalmente tienen unas características que son comunes en todos los casos, alguien que haya tenido una relación con una persona así se sentirá identificado con los puntos que les voy a hablar a continuación."}</p>
                  <h2>1.	BOMBARDEO DE AMOR O LOVE BOMBING</h2>
                  <p className="justified">{"Al principio de la relación se muestran totalmente encantadores, son personas que pueden enamorar y seducir a cualquiera, como la palabra lo dice es un bombardeo de amor, te endulza el oído, te dice las cosas que quieres oír, piensas que es el amor de tu vida que donde había estado en todo este tiempo, te ofrece el mundo entero, te hace sentir que estás en un lugar seguro y que eres única y especial. Después de esta maravillosa etapa donde parece todo un cuento de hadas, es donde el cazador a atrapado su presa, y luego las mentiras van a ir cayendo como un castillo de naipes, porque son insostenibles, se mostrará como es realmente, al principio es muy difícil para ti, es por eso que el anhelo de recuperar a esa persona es lo que te hace seguir ahí."}</p>
                  <h2>2.	ERES MUY CELOSA </h2>
                  <p className="justified">{"Los narcisistas te dicen con frecuencia que eres muy celosa, tienen conductas que crean esos celos en ti, crean conductas ambiguas que no acaban de encajar y cuando te muestras insegura, te dicen que es cosa tuya."}</p>
                  <h2>3.	TE HACEN GASLIGHTING</h2>
                  <p className="justified">{"¿Qué es Gaslignting? Es un tipo de abuso psicológico en el que se hace a la persona cuestionar su propia realidad. Consiste en negar la realidad, dar por sucedido algo que nunca ocurrió o presentan información falsa con el fin de hacer dudar a la víctima de su memoria y de su percepción. "}</p>
                  <h2>4.	SE ENOJAN CONTINUAMENTE POR CUALQUIER COSA</h2>
                  <p className="justified">{"Es como vivir con el enano gruñón de Blanca Nieves, es un narcisista frustrado, por cualquier cosa hace el mayor de los dramas, la víctima ya no sabe que decir porque no sabe qué le va a molestar o porque va a explotar, esto hace que tengas temor de hablar para no decir algo que le moleste, utiliza el día a día para generar conflictos, pleitos, para crear distanciamiento, culpa, sumisión (adoctrinamiento) y luego dependencia emocional cuando se acercan. "}</p>
                  <h2>5.	ALEJA A LA GENTE QUE TE QUIERE</h2>
                  <p className="justified">{"Reduce tu círculo de amigos, quiere que te quedes sola, cuando los ves, te castiga."}</p>
                  <p className="justified">{"Sí te identificas con esto, mi recomendación es que salgas de ahí lo antes posible, pide ayuda de tus seres queridos, amigos y familiares, apóyate en ellos, explícales qué es lo que estás viviendo."}</p>
                  <p className="justified">{"Si no tienes a quién acudir, pide ayuda psicológica lo antes posible, es muy importante abrirse y contarle a los demás por lo que estás pasando. En muchos casos hemos normalizado estas conductas y no nos parecen tan graves como realmente son. "}</p>
                </div>
              </section>
            </Fade>
            <Fade duration={1000}>
              <section id="blogs4">
                <div className="row">
                  <h1 class="center">FASES DE LA SEPARACION</h1>
                </div>
                <div className="row1">
                  <img class="center" src={fasespic} alt="Fases pic" />
                </div>
                <div className="row">
                  <p className="justified">{"Cuando una relación de pareja termina vivimos un proceso de duelo y es que se trata del fin de una historia."}</p>
                  <p className="justified">{"De la misma forma que ocurre ante la pérdida de un ser querido, nuestra mente necesita tiempo para hacerse a la idea de que las cosas han cambiado. Toca asimilar y afrontar que la otra persona ya no está en nuestra vida, y permitirnos sentir y vivir cada una de las emociones que cada etapa va a traer consigo: ansiedad, miedo, ira, rabia, tristeza, frustración…"}</p>
                  <p className="justified">{"Cuando la ruptura llega lo habitual y lo normal es pasar por las diferentes etapas del duelo (negación, ira, negociación, depresión y aceptación) pero cuidado porque si nos quedamos estancados en alguna de ellas, o si el duelo no se realiza de forma correcta, o la cosa se complica, puede traducirse en un gran bloqueo y podemos vivir un duelo patológico."}</p>
                  <p className="justified">{"Sin duda, conocer estas fases, una por una, Le ayudará a entender el proceso por el que está pasando."}</p>
                  <ol>
                    <li>Negación: “Esto no me puede estar pasando a mí”, “es como una pesadilla”, “dime que no es verdad, no es posible”.  Esta es la primera etapa y es el principio de todo. En esta fase se negará aceptar que ha terminado la relación, le costará creer que se ha producido la ruptura, sentirá tristeza y probablemente llore.</li>

                    <li>Ira: “¿Cómo ha podido hacerme esto a mí? ¡Le odio con todas mis fuerzas!” Una vez asimilada la situación, del dolor pasamos al odio. Ira que nace por pensar que le han tratado de forma injusta y/o que le han traicionado. En esta fase suele haber una tristeza profunda y puede haber agresividad y ansiedad.</li>

                    <li>Negociación: Tercera etapa en la que intentamos buscar soluciones y forzar acuerdos para que la situación cambie. En este punto es habitual actuar de manera mucho más impulsiva enviando mensajes, haciendo llamadas, forzando encuentros sorpresa… que no suelen lograr el objetivo deseado.</li>

                    <li>Depresión: En esta fase comenzará a entender por fin todo lo ocurrido, comprenderá que la relación de verdad ha terminado y que no van a volver a estar juntos. En este punto puede sentirse muy triste, desganado y desesperanzado. Aquí es totalmente normal dejar de comer, dormir mal y no tener ganas de salir.</li>

                    <li>Aceptación: Última etapa. En esta fase acepta que terminó con su pareja, va recuperando sus fuerzas y no tiene tantos pensamientos negativos. Los recuerdos de su pareja.</li>
                  </ol>

                </div>
              </section>
            </Fade>
            <Fade duration={1000}>
              <section id="blogs5">
                <div className="row">
                  <h1 class="center">¿QUÉ SON LAS RELACIONES TÓXICAS?</h1>
                </div>
                <div className="row1">
                  <img class="center" src={toxpic} alt="Tox pic" />
                </div>
                <div className="row">
                  <p className="justified">{"Son relaciones en las que ambas partes no puede evitar hacerse daño. Puede tratarse de una relación de pareja, pero también de amistad, de trabajo, incluso de una relación familiar"}</p>
                  <p className="justified">{"Si en la relación en que usted se encuentra de alguna u otra forma le hace sentir mal, por ejemplo juzgado, desvalorizado, manipulado, amenazado, acosado, maltratado, o siente un vacío después de verse con la persona, es importante que se pregunte si está en una relación tóxica y que busque la manera de salir."}</p>
                  <h2>Características de las relaciones tóxicas</h2>
                  <p className="justified">{"Pueden definirse como relaciones en las que ambas partes son incapaces de lograr un trato de igual a igual. Una relación se vuelve tóxica en el momento en que una de las partes se aprovecha de la otra, cuando aparentemente solo uno de los dos obtiene un beneficio.  Por ejemplo, se propone manipular, controlar, o sacar provecho. Quieren el control y poder en la relación  "}</p>
                  <p className="justified">{"En una relación tóxica el poder no se comparte y se establece entre dos tipos de personas, una manipuladora (perverso narcisista), y una susceptible a la culpabilidad, sensible y vulnerable, que sufre de dependencia afectiva y que usualmente está volcada a los demás. "}</p>
                  <p className="justified">{"Es difícil salir de este tipo de relación"}</p>
                  <h2>Tipos de relaciones tóxicas</h2>
                  <li>Menosprecio y denigración</li>
                  <p className="justified">{"El menosprecio se puede dar a través del humor o las bromas, emitiendo juicios sobre las cualidades, competencias o la personalidad del otro, o bien mediante la burla, queriendo decir que lo que la persona expresa , sus ideas, creencias o deseos, son estúpidos. "}</p>
                  <p className="justified">{"Aun en los casos en que se logra confrontar a la persona que denigra, ésta se muestra evasiva y disfraza su actitud diciendo que simplemente está bromeando."}</p>
                  <li>Intimidación y control mediante "mal carácter"</li>
                  <p className="justified">{"Se enojan por cualquier cosa y duran molestos por días. Esta es una forma de controlar y chantajear emocionalmente. Nunca se sabe qué puede hacer que pierda el control y se enoje."}</p>
                  <p className="justified">{"Las parejas constantemente se cuidan de no decir o hacer algo inapropiado, ya que puede estallar en cualquier momento. Tienden a responsabilizar a los demás por sus enojos, que es su culpa que el grite e insulte. "}</p>
                  <li>Inducción de culpa</li>
                  <p className="justified">{"En una relación tóxica, una de las personas puede inducir la culpa en el otro, y con esto, trata de obtener control. Esto puede ocurrir en relaciones de pareja, pero también es frecuente en la relación de los padres con sus hijos adultos."}</p>
                  <li>Excesiva independencia, no tener en cuenta al otro</li>
                  <p className="justified">{"Es la relación puede llevar su independencia demasiado lejos. Para esta persona, compartir lo que hizo en su día o anunciar lo que va a hacer, lo expone a que el otro lo controle, y por lo tanto a perder su independencia. Esto necesariamente hace sentir insegura a la persona que está a su lado. "}</p>
                  <p className="justified">{"No solo se trata de que su comportamiento sea impredecible, sino que tampoco se está seguro nunca de que esta persona esté comprometida emocionalmente con su pareja."}</p>
                  <li>Actitud utilitaria</li>
                  <p className="justified">{"Uno utiliza al otro para obtener lo que quiere, y la otra persona intenta complacerlo constantemente sin nunca conseguirlo. Es una relación en un solo sentido."}</p>
                  <li>Actitud posesiva y controladora</li>
                  <p className="justified">{"Uno de los dos es posesivo, y el otro sufre los celos y la desconfianza de su pareja. "}</p>
                  <p className="justified">{"Un ejemplo puede ser revisar el celular, incluso el kilometraje del automóvil para asegurarse que no haya ido a algún lugar que no debiera. Los esfuerzos de su pareja de asegurarle su fidelidad y compromiso serán en vano. "}</p>
                  <p className="justified">{"Quedarse en una relación aceptando el ser tratado como una persona no confiable tendrá como resultado el perder cualquier espacio personal y propio."}</p>
                  <h2>¿Por qué las personas tienen conductas tóxicas y por qué los demás lo toleran?</h2>
                  <p className="justified">La respuesta es que ambas personas tienen una autoestima pobre y una inseguridad arraigada.</p>
                  <h2>¿A quién acudir si está en una relación tóxica?</h2>
                  <p className="justified">{"La recomendación general es acudir con un psicólogo, ya que cuenta con herramientas que le ayudarán (o a ambos) a salir de una relación que se ha vuelto dañina. La terapia puede ser individual o en pareja."}</p>
                </div>
              </section>
            </Fade>
            <Fade duration={1000}>
              <section id="blogs6">
                <div className="row">
                  <h1 class="center">HÁBITOS PARA SUPERAR UNA RUPTURA DE PAREJA</h1>
                </div>
                <div className="row1">
                  <img class="center" src={habpic} alt="Hab pic" />
                </div>
                <div className="row">
                  <div>
                    <h2>Trabaje su autoestima</h2>
                    <p className="justified">
                      Una vez más, la autoestima florece y es fundamental trabajarla para sentirse querido, valioso y valorarse como debe. Descubra como potenciar su autoestima. Aprenda a disfrutar de su propia compañía, a estar bien con usted mismo y a QUERERSE porque si se quiere, también se gustará. Acéptese tal y como es, con lo bueno y lo menos bueno que tenga, esa es su verdadera identidad y lo que le hace único.
                    </p>

                    <h2>Acepte la situación, bienvenido el cambio</h2>
                    <p className="justified">
                      Lo primero, primerísimo de todo es aceptar la nueva situación. Negarnos a creer y aceptar lo que ha ocurrido no sirve de nada, solo alargará el proceso, será aún más complicado si tenía una dependencia emocional muy fuerte con esa persona. Por supuesto que no se trata de negar ni evitar el dolor, no, consiste en aceptarlo y abrazarlo, pero sin quedarnos ahí.
                    </p>

                    <h2>Si desea llorar, llore</h2>
                    <p className="justified">
                      Es importante que, si tiene ganas de llorar, lo haga. No le de vergüenza. Reprimir emociones nunca es bueno, déjalas fluir. Si está triste, debe sentirlo y desahogarse, llorar y sentir es de humanos.
                    </p>

                    <h2>Adiós al victimismo</h2>
                    <p className="justified">
                      Uno de los errores fundamentales y nada aconsejable que aparece cuando llega la separación es adoptar el papel de víctima. Y aunque seguramente ya lo habrá escuchado un montón de veces, aquí se lo recuerdo una vez más, compadecerse de sí mismo es cavar su propia tumba. Niéguese a ser víctima.
                    </p>
                    <p className="justified">

                      Intente entender que no es la única persona que ha vivido lo que usted está viviendo ahora, ni tampoco es muy diferente del resto de personas que han superado una separación de pareja. Si ellos han podido, usted también.

                    </p>

                    <h2>Mantenga y aumente su círculo social, oblíguese a salir</h2>
                    <p className="justified">
                      Relacionarse le va a beneficiar, y es que los amigos, los compañeros de trabajo, su familia y toda persona con la que se sienta bien, a gusto y cómodo va a ejercer una influencia muy positiva sobre usted. Es cierto que al inicio del duelo siempre preferimos pasar más tiempo a solas para favorecer el desahogo emocional, pero es muy importante que estos momentos de soledad no se aísle en exceso. Lo peor que puede hacer después de una ruptura es no hacer nada, encerrarse y/o aislarte.
                    </p>
                    <p className="justified">
                      Aunque no le apetezca al principio, esfuércese por hacer planes, por salir, por quedar, lucha contra la pereza y ya verá que poco a poco le irá costando cada vez menos.  Salga, recupere su vida social, abra las puertas a nuevas posibilidades.
                    </p>

                    <h2>No pare, sigua, sigua</h2>
                    <p className="justified">
                      Hay que evitar la inactividad y no hacer “nada”. La inactividad le bloquea y le atrapa en los pensamientos negativos y nada óptimos en una situación de ruptura.
                    </p>
                    <p className="justified">
                      No se puede permitir el lujo de parar, y es que, tras una ruptura, llega un momento de cambio que es idóneo para darse la oportunidad de iniciar nuevos proyectos y de establecer nuevas metas y objetivos. Póngase a ello.
                    </p>
                    <h2>Mira hacia adelante y aprende</h2>
                    <p className="justified">
                      Deje de hacer como los cangrejos, no busque en su pasado, no mire hacia atrás. Deja de pensar en lo que pasó o en lo que pudo haber sido. Lo que le va a beneficiar es ir mirar hacia delante, es hora de comenzar a pensar en lo bueno que está aún por llegar.
                    </p>
                    <p className="justified">
                      Aquí me remito a la cita del inicio y es que el pasado es sólo eso, pasado, no lo podemos cambiar ni modificar, pero si nos sirve para aprender e intentar mejorar los posibles errores cometidos. Con la ruptura sentimental aprendemos qué es lo que no queremos o no vamos a tolerar en futuras relaciones. Tener claro lo que no se va a negociar, ni soportar, ni sacrificar en el futuro es un gran avance para que una posterior relación de pareja sea exitosa.
                    </p>

                    <h2>Busque el lado positivo</h2>
                    <p className="justified">
                      Cuando algo ocurre, sea o no esperado, tenemos que intentar ver el lado positivo, esto nos ayudará a mejorar como personas y a no repetir los mismos errores.
                    </p>

                    <h2>Pida ayuda</h2>
                    <p className="justified">
                      Si ya ha pasado un tiempo prudencial desde que la relación terminó y aún con todo, siente que está anclado, inmóvil, que no ha pasado página, siente que está demasiado triste, no desea salir y no le encuentra sentido a nada, igual es necesario que un psicólogo profesional le acompañe para superar la ruptura y mejorar así su bienestar emocional.
                    </p>
                    <p className="justified">
                      El terapeuta le ayudará a reorientar la frustración, la rabia o la ira mal gestionada y a aminorar su sufrimiento emocional. Y es que es normal que en determinadas ocasiones no podamos superar solos las cosas que nos ocurren.
                    </p>
                  </div>
                </div>
              </section>
            </Fade>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Blogs;
