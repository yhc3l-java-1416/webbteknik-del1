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
todo.models.items.delete = function (item, callback) {
	$.ajax({
		url: '/items/' + item.id,
		type: 'DELETE',
		success: function () {
			callback(null);
		},
		error: function (xhr, status, errorThrown) {
			callback(errorThrown);
		}
	});
};
todo.models.items.add = function (itemText, callback) {
	$.ajax({
		url: '/items',
		type: 'POST',
		data: {
			name: itemText
		},
		success: function () {
			callback(null);
		},
		error: function (xhr, status, errorThrown) {
			callback(errorThrown);
		}
	});
};