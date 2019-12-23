const express = require('express');

const router = express.Router();



router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: "hello from get"
    });
});

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message: "hello from post"
    });
});

router.get('/:pId',(req,res,next)=>{
    const id = req.params.pId;
    res.status(200).json({
        message: "hello from post",
        id: id

    });
})

module.exports = router;
