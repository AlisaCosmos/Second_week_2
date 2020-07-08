/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {

    // Объявляем массивы для хранения данных
    var miniArr = [];
    var arrResult = [];

    // Приводим все хэштеги к нижнему регистру и записываем в массив miniArr
    for (var i = 0; i < hashtags.length; i++) {

        var hash = hashtags[i].toLowerCase();
        miniArr.push(hash);
    }
    console.log('Массив miniArr состоит из '+ miniArr +' Его размер '+ miniArr.length);
    console.log('Массив arrResulte состоит из '+ arrResult +' Его размер '+ arrResult.length);

    // Проверяем, встречали ли такой хэштег (возвращаемое значение -1 (значение не найдено в массиве))
    // Если не встречали, сохраняем его в массив arrResult
    for (var j = 0; j < miniArr.length; j++) {
        if (arrResult.indexOf(miniArr[j]) == -1) {
            arrResult.push(miniArr[j]);
        }
    }

    // Склеиваем теги и возвращаем результат
    var resultString = arrResult.join(', ');
    return resultString;

};
