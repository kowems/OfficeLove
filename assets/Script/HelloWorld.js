cc.Class({
    extends: cc.Component,

    // use this for initialization
    onLoad: function () {
        cc._initDebugSetting(cc.DebugMode.INFO); 
        cc.game.addPersistRootNode(this.node);
        cc.log("aaaaa1");
        
        cc.log("aaaaa2");
    },

    // called every frame
    update: function (dt) {
        cc.log("aaaaa");
    },
    
    loadWelcome: function () {
        this.node.runAction(cc.fadeOut(1.0));
        cc.director.loadScene('welcome');
    },
});