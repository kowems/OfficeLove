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
        message: {
            default: null,
            type: cc.Node,
        },
    },

    // use this for initialization
    onLoad: function () {
        let self = this;
        this.node.on('mouseup', function ( event ) {
            self.node.runAction(cc.fadeOut(0.5));
            self.node.dispatchEvent( new cc.Event.EventCustom('mouseup', true) );
        });
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
