/*
 * Reto #1
 * ¿ES UN ANAGRAMA?
 * Fecha publicación enunciado: 03/01/22
 * Fecha publicación resolución: 10/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function checkAnagram(word1, word2) {
    var word1Array = [...word1.toLowerCase()]
    var word2Array = [...word2.toLowerCase()]

    word1Array.forEach(letter => {
        if (!word2Array.includes(letter)) {
            console.log(false)
            return false;   
        }
        const index = word2Array.indexOf(letter);
        word2Array.splice(index, 1);
    });
    if (word2Array.length > 0) {
        console.log(false);
        return false;
    }
    console.log(true)
    return true;
}

checkAnagram("NIDO", "odin")