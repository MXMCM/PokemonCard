const {Pokemon} = require('../models');
const categories = ['Water','Fire','Normal','Electric','Ground','Dragon','Physic','Grass'];
module.exports.viewAll = async function(req, res) {
    let searchCategories =['All'];
    for(let i = 0; i<categories.length; i++){
        searchCategories.push(categories[i]);
    }
    let PokemonTable;
    let searchCategory = req.query.category || 'All';
    let searchRandom = req.query.random || false;
    if (searchCategory==='All'){
        PokemonTable = await Pokemon.findAll();
    } else{
        PokemonTable = await Pokemon.findAll({
            where: {
                category: searchCategory
            }
        });
    }
    if (PokemonTable.length > 0 && searchRandom){
        let randomIndex = getRandomInt(PokemonTable.length);
        PokemonTable = [PokemonTable[randomIndex]];
    }
    res.render('index', {PokemonTable, categories:searchCategories, searchCategory, searchRandom});
};

module.exports.renderAddForm = function(req,res,next){
    const PokemonCard = {
        name: "",
        Hp: "",
        image1: "",
        image2: "",
        image3: "",
        move: "",
        damage: "",
        Image4: "",
        move1: "",
        damage1: "",
        weakness: "",
        resistance: "",
        retreatcost: "",
        image: "",
        image5:"",
        category:""
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
            image5: req.body.image5,
            category: req.body.category
        });
    console.log(Pokemon);
    res.redirect('/')
};

module.exports.renderEditForm = async function (req,res,next) {
    const PokemonCard = await Pokemon.findByPk(
        req.params.id
    );
    res.render('add',{PokemonCard})
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
            image5: req.body.image5,
            category: req.body.category
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

function getRandomInt(max){
    return Math.floor(Math.random()* max);
}