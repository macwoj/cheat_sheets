var saveTable = function() {
    var page = require('webpage').create();
    page.paperSize = {
        format: 'Letter',
        orientation: 'landscape',
        margin: '0.3in'
    }
    page.open('vim_cheatsheet_table.html', function(status) {
        console.log("Status: " + status);
        if(status === "success") {
            page.render('vim_cheatsheet_table.pdf');
            phantom.exit();
        }
    });
}
var save = function() {
    var page = require('webpage').create();
    page.paperSize = {
        format: 'Letter',
        orientation: 'landscape',
        margin: '0.3in'
    }
    page.open('vim_cheatsheet.html', function(status) {
        console.log("Status: " + status);
        if(status === "success") {
            page.render('vim_cheatsheet.pdf');
            saveTable();
        }
    });
}
save();