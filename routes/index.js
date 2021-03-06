var express = require('express');
var router = express.Router();

const bios = {
  helicopterson: {
	 name: 'Helicopterson dos Santos',
  	role: 'Escritor, Poeta, Filantropo',
  	Birth: '1870',
  	death: '1950',
  	photo: '/images/helicopterson.png', 
  	background: 'Helicopterson sempre foi um jovem diferenciado, no mundo da lua, com aspirações muito além de sua geração. Com todos os seus sonhos e com muito esforço, um dia aprendeu a voar. Isso, ele aprendeu a voar, fazendo justiça à seu nome tão único. Ele continuou se esforçando, aprendendo muito e dominando a arte do voô, sempre chegando a alturas cada vez maiores. Até que um dia chegou na Lua, e essa na verdade é a última notícia que se tem dele. Depois disso, ele continuou voando cada vez mais alto, e ninguém mais o viu.',
  	quote: 'Senão for pra voar, eu nem desço pro play',
  	highlights: ['Nasceu','Voou','Voou mais Alto','Primeiro homem a pisar na Lua','sumiu'],
},
  lincoln: {
    name: 'Abraham Lincoln',
    role: 'Ex-presidente, advogado',
    birth: '1809',
    death: '1865',
    photo: '/images/lincoln.png',
    background: 'Abraham Lincoln foi um político norte-americano que serviu como o 16° presidente dos Estados Unidos, posto que ocupou de 4 de março de 1861 até seu assassinato em 15 de abril de 1865. Lincoln liderou o país de forma bem-sucedida durante sua maior crise interna, a Guerra Civil Americana, preservando a União e abolindo a escravidão, fortalecendo o governo nacional. Lincoln tem sido consistentemente considerado por estudiosos e pelo povo como um dos três maiores presidentes dos Estados Unidos.',
    quote: 'Governo das pessoas, pelas pessoas, para as pessoas, nunca deixará de existir na Terra.',
    highlights: ['Aprovou a Lei da Propriedade Rural', 'Emitiu a Proclamação de Emancipação, que levou à abolição da escravatura nos EUA', 'Liderou a União à vitória da Guerra Civil'],
},

  boca: {
    name: 'Luis Boça',
    role: 'Neto mimado',
    birth: '1980',
    death: '-',
    photo: '/images/boca.png',
    background: 'Luís Boça é natural de São Paulo, de onde, aos seis anos de idade, foi trocado por dois bodes velhos para ser criado pela avó, Dona Lourdes Boça. A velhinha sempre tratou ele muito bem, pois ela é uma puta guerreira. Sempre alimentou ele com Leite com pera e muito ovo maltino.',
     quote: 'NARIGUDO NÃO, MEU! NARIGUDO NÃO!',
    highlights: ['Boça fundou o Clube dos Minigameiros. Contudo, mesmo oferecendo cartões de clientes preferenciais do Mister Lanches não teve sucesso em conseguir outra pessoa além dele.'],
},


};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{bios: bios});
});

router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  res.render('bio', bios[id]);
});

module.exports = router;
