var items = [{
    "label": {
        text: "born on 14 March 1965 is an Indian film actor, director and producer. Through his career in "
    },
    "image": {
        image: "http://www.showbizbites.com/wp-content/uploads/2013/07/Aamir-Khan-Showbiz-Bites.jpg",
        onclick: "https://en.wikipedia.org/wiki/Ranbir_Kapoor"
    },

    "template": "image_title"
}, {
    "label": {
        text: "born 28 September 1982 is an Indian actor and producer"
    },
    "image": {
        image: "http://customerkart.com/wp-content/uploads/2016/01/ranbir-kapoor-wallpapers-300x215.jpg"

    },

    "template": "image_title"
}, {
    "label": {
        text: "born on 14 March 1965 is an Indian film actor, director and producer. Through his career in "
    },
    "image": {
        image: "http://www.showbizbites.com/wp-content/uploads/2013/07/Aamir-Khan-Showbiz-Bites.jpg"
    },

    "template": "image_title"

}];
$.dynamicListView.sections[0].setItems(items, {
    animated: "false"
});



//$.aamir.image = data.image[0];

$.win.open();

function WebView(e) {
    var webview = Titanium.UI.createWebView({
        Ti.API.info("url isssss" + e.);
        url: items[]
    });
    var window = Titanium.UI.createWindow();
    window.add(webview);
    window.open({
        modal: true
    });
}
