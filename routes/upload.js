var express = require('express');
var router = express.Router();

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

router.post('/fileupload', upload.array('images', 12), function(req, res, next){

    // Get files.
    // Rename files 00000000001-1.....8
    // Save to database
    // Return message (success = true/false)

});