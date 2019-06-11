const getTableContent = ((getAllFields, solicitationNumber) => new Promise((resolve, reject) => {
    let fields = [];
    const constraints = [];

    if (!getAllFields) {
        fields = ['numero_solicitacao', 'clienteText', 'cnpj', 'area', 'dataEntrega'];
    }

    if (solicitationNumber) {
        constraints.push({
            _field: 'numero_solicitacao',
            _initialValue: solicitationNumber,
            _finalValue: solicitationNumber,
            _type: 1,
            _likeSearch: false,
        });
    }


    const datasetOptions = {
        name: 'dsFormProspeccoes',
        fields,
        constraints,
        order: [],
    };


    fetch(window.location.origin + '/api/public/ecm/dataset/datasets', {
        method: 'POST',
        redirect: 'follow',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify(datasetOptions),
    }).then(response => response.json()).then((data) => {
        if (solicitationNumber) {
            resolve(data.content.values[0]);
        } else {
            resolve(data.content.values);
        }
    }).catch((error) => {
        reject(error);
    });
}));