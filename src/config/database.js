const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/leftlane')

mongoose.Error.messages.general.required = "O atributo '{PATH}' � obrigat�rio."
mongoose.Error.messages.Number.min =
    "O '{VALUE}' informado � menor que o limite m�nimo de '{MIN}'."
mongoose.Error.messages.Number.max =
    "O '{VALUE}' informado � maior que o limite m�ximo de '{MAX}'."
mongoose.Error.messages.String.enum =
    "'{VALUE}' n�o � v�lido para o atributo '{PATH}'."