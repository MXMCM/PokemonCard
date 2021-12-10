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
            image1: req.body.image1,
            image2: req.body.image2,
            image3: req.body.image3,
            move: req.body.move,
            damage: req.body.damage,
            image4: req.body.image4,
            move1: req.body.move1,
            damage1: req.body.damage1,
            weakness: req.body.weakness,
            resistance: req.body.resistance,
            retreatcost: req.body.retreatcost,
            image: req.body.image,
            image5: req.body.image5
        });
    res.redirect('/')
};

module.exports.renderEditForm = async function (req,res,next) {
    const PokemonCard = await Pokemon.findByPk(
        req.params.id
    );
    res.render('edit',{PokemonCard})
};

module.exports.updateRestaurant = async function (req,res) {
    await Pokemon.update(
        {
            name: req.body.name,
            Hp: req.body.Hp,
            image1: req.body.image1,
            image2: req.body.image2,
            image3: req.body.image3,
            move: req.body.move,
            damage: req.body.damage,
            image4: req.body.image4,
            move1: req.body.move1,
            damage1: req.body.damage1,
            weakness: req.body.weakness,
            resistance: req.body.resistance,
            retreatcost: req.body.retreatcost,
            image: req.body.image,
            image5: req.body.image5
        },
        {
        where:
            {
                id:req.params.id
            }
        });
    res.redirect('/');
};

module.exports.deleteCard = async function(res,req){
    await Pokemon.destroy(
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/');
};