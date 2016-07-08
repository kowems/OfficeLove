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
    },

    // use this for initialization
    onLoad: function () {
        cc.log("fadeIn");
        this.node.runAction(cc.fadeIn(2.0));
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    playAnimation: function() {
        var anim = this.getComponent(cc.Animation);
        anim.play('employee2');
    },
});
