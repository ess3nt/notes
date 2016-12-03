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
        $('#serialize_output').text(
            group.sortable("serialize").get().join("\n"));
        _super($item, container);
    },
    serialize: function (parent, children, isContainer) {
        return isContainer ? children.join() : parent.text();
    },
    tolerance: 6,
    distance: 10
});