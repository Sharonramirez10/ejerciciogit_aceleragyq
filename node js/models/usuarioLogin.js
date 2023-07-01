var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioLoginSchema = Schema(
    {
        mail:{type: String, require:true, unique:true},
        pas:{type: String, require:true}
    }
);

module.exports = mongoose.model('usuarioLoging', UsuarioLoginSchema);