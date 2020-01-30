const Heroina = require('../models/Heroina');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

    async index(request, response) {
        const heroinas = await Heroina.find();

        return response.json(heroinas);
    },

    async show(request, response) {
        const _id = request.params.id;
        const heroina = await Heroina.findOne({ _id });
        return response.json(heroina);
    },

    async store(request, response) {
        const { nome, personalidade, localDeAtuacao, grupos, fotos, amigos, inimigos, poderes, fraquezas } = request.body;

        let heroina = await Heroina.findOne({ nome });

        if (!heroina) {
            const gruposArray = parseStringAsArray(grupos);
            const fotosArray = parseStringAsArray(fotos);
            const amigosArray = parseStringAsArray(amigos);
            const inimigosArray = parseStringAsArray(inimigos);
            const poderesArray = parseStringAsArray(poderes);
            const fraquezasArray = parseStringAsArray(fraquezas);
            
            heroina = await Heroina.create({
                nome,
                localDeAtuacao,
                personalidade,
                amigos: amigosArray,
                inimigos: inimigosArray,
                poderes: poderesArray,
                fraquezas: fraquezasArray,
                grupos: gruposArray,
                fotos: fotosArray
            });
        };

        return response.json(heroina);
    },
    async update(request, response) {
        const { _id, nome, personalidade, localDeAtuacao, grupos, fotos, amigos, inimigos, poderes, fraquezas } = request.body;

        let heroina = await Heroina.findOne({ _id });

        if (heroina) {
            const gruposArray = parseStringAsArray(grupos);
            const fotosArray = parseStringAsArray(fotos);
            const amigosArray = parseStringAsArray(amigos);
            const inimigosArray = parseStringAsArray(inimigos);
            const poderesArray = parseStringAsArray(poderes);
            const fraquezasArray = parseStringAsArray(fraquezas);
            
            heroina = await Heroina.updateOne({
                nome,
                localDeAtuacao,
                personalidade,
                amigos: amigosArray,
                inimigos: inimigosArray,
                poderes: poderesArray,
                fraquezas: fraquezasArray,
                grupos: gruposArray,
                fotos: fotosArray
            })
            response.sendStatus(200);
        } else {
            response.sendStatus(404);
        }

    },
    async destroy(request, response) {
        const _id = request.params.id;
        const heroina = await Heroina.findOne({ _id });
        await heroina.remove();
        response.sendStatus(200);
    }
}