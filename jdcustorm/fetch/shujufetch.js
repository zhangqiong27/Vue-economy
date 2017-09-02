"use strict"
import shujuconstants from "../constants/shujuconstants.js";

export default {

    getShujuinfo: function (cb) {
        fetch(shujuconstants.JDURL).then((res) => {
            res.json().then((data) => {
                cb(data);
            })
        })
    }
}