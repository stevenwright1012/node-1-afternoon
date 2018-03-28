var messages = [];
var id = 0;

module.exports = {
    create: (req, res) => {
        let message = {
            time: req.body.time,
            text: req.body.text,
            id: id
        }
        messages.push(message)
        id++;
        res.status(200).send(messages);
    },

    read: (req, res) => {
        res.status(200).send(messages);
    },

    update: (req, res) => {
        let index = null;
        messages.forEach((val, i) => {
            if (val.id === +req.params.id){
                index = i;
            }
        })
        messages[index] = {
            id: messages[index].id,
            text: req.body.text || messages[index].text,
            time: messages[index].time
        }
        res.status(200).send(messages);
    },

    delete: (req, res) => {
        let index = null;
        messages.forEach((val, i) => {
            if (val.id === req.params.id){
                index = i;
            }
        })
        messages.splice(index, 1);
        res.status(200).send(messages);
    },
}