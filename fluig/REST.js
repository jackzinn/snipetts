// Incluir
WCMAPI.Create({
	url: WCMAPI.serverURL + '/api/public/2.0/cards/create',
	contentType: 'application/json',
	dataType: 'application/json',
	data: {
		'parentDocumentId': 123,
		'version': 1000,
		'inheritSecurity': false,
		'formData': [{
			'name': 'nameDoCampo',
			'value': 'valorDoCampo'
		}, {
			'name': 'nameDoCampo2',
			'value': 'valorDoCampo2'
		}]
	},
	
	error: function(error) {
		console.log(error);
	},
	
	success: function(data) {
		console.log('foi');
	}
});

// Alterar
WCMAPI.Create({
	url: WCMAPI.serverURL + "/ecm/api/rest/ecm/cardView/editCard/" + documentId + "/" + documentVersion,
	dataType: 'application/json',
	contentType: 'application/json',
 
	data: [{
		'name': '',
		'value': ''
	}],
 
	error: function(err) { // TODO
		console.log(err);
	},
 
	success: function(dados) {
		console.log('foi');
	}
 
});

// consultar
WCMAPI.Create({
	url: WCMAPI.serverURL + '/api/public/ecm/dataset/datasets',
	contentType: 'application/json',

	data: {
 		'name': 'kit_cardapio',
		'fields': [],
		'constraints' : [{
			'_field': 'value1',
			'_initialValue': 'value2',
			'_finalValue': 'value3',
			'_type': 0, // type of the constraint (1 - MUST, 2 - SHOULD, 3 - MUST_NOT),
			'_likeSearch': false // if it is a LIKE search
		}],
		'order': []
	},

	success: function(data) {
		console.log(data);
	},

	error: function(err) {
		console.log(err);
    }
})