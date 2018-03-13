define(function (require, exports, module) {

    var Ratchet = require("ratchet/ratchet");
    var UI = require("ui");
    var $ = require("jquery");

    return Ratchet.Actions.register("create-journal", UI.AbstractIFrameAction.extend({

        defaultConfiguration: function () {
            var config = this.base();

            config.title = "Create Journal";
            config.iconClass = "glyphicon glyphicon-pencil";
            
            // the location of the "overlay app"
            config.src = "https://alb.primary.dev.gcms.the-infra.com/app/create-page?loc=%2FAll%20Journals%2FTest%20Journal%20Folder%2FSecondary%20Pages%2F";

            return config;
        }

    }));
});

