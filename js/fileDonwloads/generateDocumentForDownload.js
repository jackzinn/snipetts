function generateDocToDonwload(link,report,name){
	$.fileDownload(link, {
		httpMethod: 'POST',
		data: {
			name:name,
			XLS: report
		},
		successCallback: function (url) {
			alert(url)
		}
	});
};

