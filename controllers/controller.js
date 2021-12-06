const {Pokemon} = require('../models');
module.exports.viewAll = async function(req, res, next) {
    const PokemonTable = await Pokemon.findAll();
    res.render('index', {PokemonTable})
};

module.exports.renderAddForm = function(req,res,next){
    const PokemonCard = {
        name: "",
        Hp: "",
        Image1: "",
        Image2: "",
        Image3: "",
        move: "",
        damage: "",
        Image4: "",
        move1: "",
        damage1: "",
        weakness: "",
        resistance: "",
        retreatcost: "",
        image: "",
        image1:"",
    };
res.render('add',{PokemonCard});
};

module.exports.addCard = async function(req,res){
    await Pokemon.create(
        {
            name: req.body.name,
            Hp: req.body.Hp,
            Image1: req.body.Image1,
            Image2: req.body.Image2,
            Image3: req.body.Image3,
            move: req.body.move,
            damage: req.body.damage,
            Image4: req.body.Image4,
            move1: req.body.move1,
            damage1: req.body.damage1,
            weakness: req.body.weakness,
            resistance: req.body.resistance,
            retreatcost: req.body.retreatcost,
            image: req.body.image,
            image1: req.body.image1
        });
    res.redirect('/')
};

