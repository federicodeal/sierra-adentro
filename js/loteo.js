/**
 * Loteo de Sierra Adentro — las DOS opciones de área común.
 *
 * La web las muestra juntas, con pestañas, porque la ubicación del área
 * común está en estudio. No hace falta editar un número para «cambiar»
 * de opción: las dos están publicadas.
 *
 *   Opción A: área común en la chacra 1; privadas 2, 3, 4, 5, 6 y 7.
 *   Opción B: área común en la chacra 2; privadas 1, 3, 4, 5, 6 y 7.
 *
 * Superficies: planilla de áreas (IMG_3265). La 1 tiene 3 ha 3.130 m²;
 * la 2 tiene 3 ha 3.136 m². Los planos del masterplan traen cifras
 * aproximadas un poco distintas; en la tabla usamos la planilla.
 */
(function (global) {
  "use strict";

  var superficies = {
    1: "3 ha 3.130 m²",
    2: "3 ha 3.136 m²",
    3: "3 ha 3.136 m²",
    4: "3 ha 3.140 m²",
    5: "3 ha 3.140 m²",
    6: "3 ha 3.130 m²",
    7: "3 ha 3.130 m²"
  };

  var loteo = {
    chacras: [1, 2, 3, 4, 5, 6, 7],
    arroyo: [4, 5, 7],
    superficies: superficies,
    opciones: {
      A: {
        id: "A",
        comun: 1,
        privadas: [2, 3, 4, 5, 6, 7],
        etiqueta: "Opción A, área común en la chacra 1",
        linea:
          "En esta opción el área común se ubica en la chacra 1: tiene unos 147 m de frente a la ruta y la entrada de visitantes queda separada del camino de las chacras privadas.",
        notas: {
          1: "Área común, sobre la Ruta 109",
          2: "Acceso por el camino interno",
          3: "Acceso por servidumbre de paso de 10 m",
          4: "Arroyo y cascadas (de esta chacra)",
          5: "Arroyo y cascadas (de esta chacra)",
          6: "Acceso por servidumbre de paso de 10 m",
          7: "Arroyo y cascadas (de esta chacra)"
        }
      },
      B: {
        id: "B",
        comun: 2,
        privadas: [1, 3, 4, 5, 6, 7],
        etiqueta: "Opción B, área común en la chacra 2",
        linea:
          "En esta opción el área común se ubica en la chacra 2: queda más central y linda con más chacras, y deja la chacra 1, con su mejor frente, para la venta.",
        notas: {
          1: "Frente a la Ruta 109",
          2: "Área común, sobre la Ruta 109",
          3: "Acceso por servidumbre de paso de 10 m",
          4: "Arroyo y cascadas (de esta chacra)",
          5: "Arroyo y cascadas (de esta chacra)",
          6: "Acceso por servidumbre de paso de 10 m",
          7: "Arroyo y cascadas (de esta chacra)"
        }
      }
    }
  };

  global.LOTEO = loteo;
})(window);
