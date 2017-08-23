

class Main {


  editorSetup () {

var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");

}

/*
 var customTree = new Tree({
    container: htmlParent,

    getIconHTML: function(node) {
        var icon = node.isFolder ? "folder" : "default";
        if (node.status === "loading") icon = "loading";
        return "<span class='ace_tree-icon " + icon + "'></span>";
    }
}, plugin);

customTree.setRoot({
    label: "root",
    items: [{
        label: "test",
        isFolder: true,
        items: [
            { label: "sub1" },
            { label: "sub2" }
        ]
    }, { label: "test2", isFolder: true } ]});

*/

}

module.exports = Main
