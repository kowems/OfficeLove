var employee1 = require("employee1");
var employee2 = require("employee2");
//var message = require("message");

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        employee1: {
            default:null,
            type: cc.Node,
        },
        employee2: {
            default:null,
            type: cc.Node, 
        },
        message: {
            default: null,
            type: cc.Node,
        },
    },

    // use this for initialization
    onLoad: function () {
        let self = this;
        //this.message.getComponent(message).getComponent(cc.Label).string = jsb.fileUtils.getStringFromFile("welcomeText.txt");
        //this.message.getComponent('message').getComponent(cc.Label).string = "welcomeText.txt";
        this.node.runAction(cc.fadeIn(1.0));
        this.node.on('mouseup', function ( event ) {
            self.employee1.getComponent(employee1).playAnimation();
            self.employee2.getComponent(employee2).playAnimation();
            event.stopPropagation();
            cc.log(jsb.fileUtils.getStringFromFile("welcomeText.txt"));
            if (cc.sys.isNative) {
                jsb.fileUtils.writeStringToFile("aaaaaaa","aaa.txt");
                cc.log(jsb.fileUtils.getStringFromFile("welcomeText.txt"));
            } 
        });
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
