const randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  let p = document.querySelector(".quotes");
  let curiosities = [
    "A veces, la percepción del tiempo nos engaña, y no nos damos cuenta de la magnitud del paso del mismo. De hecho, el Tyrannosaurus rex vivió más cerca de nosotros en la línea temporal que por ejemplo, del Stegosaurus.",
    "La ecuación de Dirac describe el entrelazamiento cuántico. De un modo prosaico viene a decir que cuando dos elementos cuánticos interactuan el tiempo suficiente, quedarán conectados independientemente de la distancia que los separes. Si uno cambia alguna cualidad, el otro lo hará. Es por ello que se considera la ecuación más romántica. Parejas se la tatuan en virtud de un amor que los conecta aunque les separen millones de galaxias.",
    "El cúbit o bit cuántico es la base de la supremacía cuántica. Y es que mientras un bit solo puede almacenar estados entre 1 y 0, el cúbit puede estar en ambos estados gracias al fenómeno de la superposición cuántica.",
    "Una de las teorías más aceptadas es que todo el tiempo pasado, presente y que será está contenido en el universo. Es por ello que en lo que a viajes en el tiempo se refiere, si viajaras atrás a matar a tu padre. Todo encajaría de algún modo para que el presente no cambiara en absoluto.",
    "Cuando Robert Oppenheimer, director del proyecto Manhattan, cumplió los objetivos marcados de crear una bomba atómica citó una parte del Mahábhárata (libro sagrado indú escrito aproximadamente en el siglo III a.C) con las siguientes palabras: Si el brillo de mil soles refulgiese a la vez en el cielo, sería como el esplendor del Poderoso... Me he convertido en la Muerte, la destructora de mundos... Bastante premonitorio.",
    "Una estrella de neutrones es tan sumamente densa, que solo una cucharadita de postre de su superficie pesaría lo mismo que la isla de Manhattan.",
    "Un descubrimiento reciente, nos ha revelado que todos los bosques tienen una red micelial creada por hongos que literalemente permite a los árboles comunicarse entre sí para evitar amenazas e incluso se cree que para ayudarse entre ellos en tiempos de escasez, algo así como el internet de los árboles.",
    "El 99,9% de los átomos es espacio vacío. Si puediera suprimirse, toda la humanidad cabría en un terrón de azúcar ¿somos casi un 99,9% vacío?",
    "La mayor parte de los átomos que nos componen a nosotros y todo lo que nos rodea se formó en el interior estrellas que fusionaron esos elementos constantemente hasta que explotaron al no poder fusionarlos más. Literalmente podemos decir que somos polvo de estrellas.",
    "El espacio tiempo se ve distorsionado por la gravedad. De hecho si fueras astronauta, por el hecho de estar en la estación espacial y pasar más o menos dos años allí. Volverías un segundo en el pasado.",
    "Uno de los grandes problemas a los que se enfrentó el estudio de la física cuántica es que las partículas no se comportan igual cuando se les observa y cuando no se hace.",
    "los fotones que se crean en el sol tardan miles de años en salir de él. Pero una vez fuera, solo tardan ocho minutos en llegar a nosotros.",
    "Vivimos en la edad de las estrellas. Sin embargo debido a la expansión del universo las estrellas se irán alejando unas de otras dejando un cielo a oscuras. La expansión llegará a tal punto que superará a la fuerza que mantien unida a la materia y se producirá el gran desgarramiento. Eso sí dentro de miles de millones de años.",
    "¿Quieres hacerte el hombre más rico del mundo? Solo tienes que conseguir viajar a Urano. Se cree que allí literalmente llueven diamantes.",
    "Curiosamente Saturno tiene una densidad menor que la del agua. Si tiraramos el planeta de los anillos a un enorme océano... flotaría.",
    "Satélites de Júpiter como Europa pueden tener grandes océanos de agua en su interior. Esto se debe a que la enorme gravedad de Jupiter comprime y estira al pequeño cuerpo celeste continuamente creando gran cantidad de energía... Y donde hay agua... puede haber vida.",
    "Es bastante posible que lo que veas en el cielo al mirar una estrella sea un fantasma. En el tiempo en que tarda la luz en llegar a nosotros puede que la estrella ya lleve muerta millones de años.",
    "debemos nuestra energía a las madres. Todas nuestras mitocodondrias, proceden exclusivamente, del óvulo. El espermatozoide los pierde en el momento de la fecundación. De hecho tus mitocondrias poseen un ADN propio que es idéntico al de tu madre.",
    "Si subes al Everest, encontrarás fósiles marinos. Esto se debe a que la cordillera del Himalaya fue un lecho submarino hasta que la placa India chocó con la asiática y lo elevó hace millones de años.",
    "Carl Sagan partició en la creación de un disco de oro que viaja en las misiones Voyager. Se llama -Sounds of Earth- y contiene datos de nuestras culturas y nuestra ubicación en base a los púlsares más cercanos. Es literalemente la primera botella con un mensaje lanzada a la vastedad del infinito océano del universo.",
  ];
  p.innerText = curiosities[randomNumber(0, 19)];
  let timerId = setInterval(
    () => (p.innerText = curiosities[randomNumber(0, 19)]),
    15000
  );
  setTimeout(() => {
    clearInterval(timerId);
    p.innerText =
      "Y aquí terminan las curiosidades, espero que las hayas disfrutado";
  }, 120000);