todo.models.items = {};
todo.models.items.getAll = function (callback) {
	$.ajax({
		url: '/items',
		type: 'GET',
		dataType: 'json',
		success: function (json) {
			callback(null, json);
		},
		error: function (xhr, status, errorThrown) {
			callback(errorThrown);
		}
	});
};
todo.models.items.delete = function (item, callback) {};
todo.models.items.add = function (item, callback) {};