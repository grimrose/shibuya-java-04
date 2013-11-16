// A small server setup with mod-shell

var vertx = require('vertx');
var console = require('vertx/console');
var container = require('vertx/container');

// Deploy mod-shell and additional modules
container.deployModule("org.crashub~vertx.shell~2.0.0", {
    "cmd": "./commands",
    "crash.auth": "simple",
    "crash.auth.simple.username": "admin",
    "crash.auth.simple.password": "admin",
    "crash.ssh.port": 2000
});

vertx.eventBus.registerHandler('shibuya.java', function(message, replier) {
    console.log('I received a message ' + message);
});
