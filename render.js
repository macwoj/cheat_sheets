var page = require('webpage').create();
page.open('vim_cheatsheet.html', function(status) {
    
    console.log("Status: " + status);
    if(status === "success") {
        page.render('vim_cheatsheet.pdf');
        page.zoomFactor = 2;
        page.render('vim_cheatsheet.png');
    }
    phantom.exit();
});