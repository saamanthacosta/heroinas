const Heroina = require('../models/Heroina');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async fraquezas(request, response) {
        const { fraquezas } = request.query;

        const fraquezasArray = parseStringAsArray(fraquezas);

        const heroinas = await Heroina.find({
            fraquezas: {
                $in: fraquezasArray
            }
        })

        return response.json({ heroinas });
    },
    async poderes(request, response) {
        const { poderes } = request.query;

        const poderesArray = parseStringAsArray(poderes);

        const heroinas = await Heroina.find({
            poderes: {
                $in: poderesArray
            }
        })

        return response.json({ heroinas });
    },
    async grupos(request, response) {
        const { grupos } = request.query;

        const gruposArray = parseStringAsArray(grupos);

        const heroinas = await Heroina.find({
            grupos: {
                $in: gruposArray
            }
        })

        return response.json({ heroinas });
    }
}