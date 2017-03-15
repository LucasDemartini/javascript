const code=require('code');
const lab=require('lab');
lab=exports.lab=lab.scrip();
const {bemVindo}=require('./ola.js');
lab.test('verifica', function(done)){
code.expect(bemVindo('mario')).to.equal('Bem Vindo Mario');
}
