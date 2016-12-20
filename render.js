var saveTable = function() {
    var page = require('webpage').create();
    page.paperSize = {
        format: 'Letter',
        orientation: 'landscape',
        margin: '0.1in'
    }
    page.open('vim_cheatsheet_table.html', function(status) {
        console.log("Status: " + status);
        if(status === "success") {
            page.render('vim_cheatsheet_table.pdf');
            saveTablePng();
        }
    });
}  

var saveTablePng = function() {
    var page = require('webpage').create();
    page.viewportSize = { width: 1920*.75, height: 1080*.8 };
    page.open('vim_cheatsheet_table.html', function(status) {
        console.log("Status: " + status);
        if(status === "success") {
            page.render('vim_cheatsheet_table.png');
            phantom.exit();
        }
    });
}

var savePng = function() {
    var page = require('webpage').create();
    page.viewportSize = { width: 1920*.75, height: 1080*.8 };
    page.open('vim_cheatsheet.html', function(status) {
        console.log("Status: " + status);
        if(status === "success") {
            page.render('vim_cheatsheet.png');
            saveTable();
        }
    });
} 
 
var save = function() {
    var page = require('webpage').create();
    page.paperSize = {
        format: 'Letter',
        orientation: 'landscape',
        margin: '0.1in'
    }
    page.open('vim_cheatsheet.html', function(status) {
        console.log("Status: " + status);
        if(status === "success") {
            page.render('vim_cheatsheet.pdf');
            savePng();
        }
    });
}
save();