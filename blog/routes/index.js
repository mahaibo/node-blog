var express = require('express');
  var router = express.Router();
  var user = require('../database/db').user;


    /* GET home page. */
  router.get('/', function(req, res) {
        res.render('index', { title: 'index' });
  });

  /* login */
  router.get('/login', function(req, res) {
        res.render('login', { title: 'login' });
  });

  /* ucenter */
  router.post('/usercenter', function(req, res) {
          var query = {name: req.body.name, password: req.body.password};
          (function(){
                  user.count(query, function(err, doc){
                        if(doc == 1){
                            console.log(query.name + ": 登陆成功 " + new Date());
                            res.render('usercenter', { user:doc });
                        }else{
                            console.log(query.name + ": 登陆失败 " + new Date());
                            res.redirect('/');
                        }
                });
          })(query);
  });
  
  module.exports = router;