/**
 * Created by Igor on 03.12.2016.
 */
$(function  () {
    $("ol.example").sortable();
});

var group = $("ol.example").sortable({
    group: 'example',
    isValidTarget: function  ($item, container) {
        if($item.is(".highlight"))
            return true;
        else
            return $item.parent("ol")[0] == container.el[0];
    },
    onDrop: function ($item, container, _super) {
        console.log(group.sortable("serialize").get())
        var data = group.sortable("serialize").get();

        var jsonString = JSON.stringify(data, null, ' ');

        $('#serialize_output').text(jsonString);
        _super($item, container);
    },
    serialize: function (parent, children, isContainer) {
        return isContainer ? children.join() : parent.text();
    },
    tolerance: 6,
    distance: 10
});