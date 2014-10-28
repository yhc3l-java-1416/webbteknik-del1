'use strict';
$(function () {
    var loadItems, addItem,
        items = [];

    addItem = function (itemObj) {
        var listItem = $('<li>'),
            itemSpan = $('<span>'),
            removeButton = $('<span>remove</span>');
        removeButton.addClass('remove');
        removeButton.click(function () {
            // 4) Delete the item from the server itemObj.id
            // delete http://127.0.0.1:8001/items/itemObj.id
            todo.models.items.delete(itemObj, function (err) {
                if (err === null) {
                    loadItems();
                } else {
                    alert(err);
                }
            });

            $('#itemName').focus();
        });
        itemSpan.text(itemObj.name);
        listItem.append(itemSpan);
        listItem.append(removeButton);
        $('ul').append(listItem);
        $('#itemName').val('').focus();
    };

    loadItems = function () {
        $('ul').empty();
        // 1) Change this function to get data from the server with ajax instead of localstorage.
        // get http://127.0.0.1:8001/items

        todo.models.items.getAll(function (err, data) {
            if (err === null) {
                items = data;
                for (var i = 0; i < items.length; i = i + 1) {
                    addItem(items[i]);
                }
            } else {
                alert(err);
            }
        });
    };

    $('#button').click(function () {
        var itemText = $('#itemName').val();
        itemText = $.trim(itemText);
        if (itemText !== '') {
            // 2) add the item to the server with ajax
            // post http://127.0.0.1:8001/items
            todo.models.items.add(itemText, function (err) {
                if (err === null) {
                    loadItems();
                } else {
                    alert(err);
                }
            });
            // 3) if add is successful instead of updateItems run loadItems to load all the items from the server. 

        }
    });
    loadItems();
});