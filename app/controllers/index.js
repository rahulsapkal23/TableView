var tableData = [];
for (var i = 1; i <= 20; i++) {
    var row = Ti.UI.createTableViewRow({
        className: 'forumEvent', // used to improve table performance
        selectedBackgroundColor: 'green',
        rowIndex: i, // custom property, useful for determining the row during events
        height: 110
    });

    var imageAvatar = Ti.UI.createImageView({
        image: 'download (5).jpeg',
        left: 10,
        top: 5,
        width: 50,
        height: 50
    });
    row.add(imageAvatar);

    var labelUserName = Ti.UI.createLabel({
        color: '#576996',
        font: {
            fontFamily: 'Arial',
            fontSize: 26,
            fontWeight: 'bold'
        },
        text: 'Raju' + i,
        left: 70,
        top: 6,
        width: 200,
        height: 30
    });
    row.add(labelUserName);

    var labelDetails = Ti.UI.createLabel({
        color: '#222',
        font: {
            fontFamily: 'Arial',
            fontSize: 2,
            fontWeight: 'normal'
        },
        text: 'Sachin',
        left: 70,
        top: 44,
        width: 360
    });
    row.add(labelDetails);






    tableData.push(row);
}

var tableView = Ti.UI.createTableView({
    backgroundColor: 'white',
    data: tableData
});

$.win.add(tableView);
$.win.open();
