/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'home': '&#xe900;',
            'house': '&#xe900;',
            'home2': '&#xe901;',
            'house2': '&#xe901;',
            'home3': '&#xe902;',
            'house3': '&#xe902;',
            'office': '&#xe903;',
            'buildings': '&#xe903;',
            'camera': '&#xe90f;',
            'photo': '&#xe90f;',
            'connection': '&#xe91b;',
            'wifi': '&#xe91b;',
            'podcast': '&#xe91c;',
            'broadcast': '&#xe91c;',
            'feed': '&#xe91d;',
            'wave': '&#xe91d;',
            'library2': '&#xe921;',
            'bank': '&#xe921;',
            'folder': '&#xe92f;',
            'directory': '&#xe92f;',
            'folder-open': '&#xe930;',
            'directory2': '&#xe930;',
            'barcode': '&#xe937;',
            'qrcode': '&#xe938;',
            'cart': '&#xe93a;',
            'purchase': '&#xe93a;',
            'envelop': '&#xe945;',
            'mail': '&#xe945;',
            'floppy-disk': '&#xe962;',
            'save2': '&#xe962;',
            'database': '&#xe964;',
            'db': '&#xe964;',
            'bubble': '&#xe96b;',
            'comment': '&#xe96b;',
            'user-tie': '&#xe976;',
            'user5': '&#xe976;',
            'spinner11': '&#xe984;',
            'loading12': '&#xe984;',
            'equalizer': '&#xe992;',
            'sliders': '&#xe992;',
            'equalizer2': '&#xe993;',
            'sliders2': '&#xe993;',
            'hammer': '&#xe996;',
            'tool2': '&#xe996;',
            'trophy': '&#xe99e;',
            'cup': '&#xe99e;',
            'rocket': '&#xe9a5;',
            'jet': '&#xe9a5;',
            'bin': '&#xe9ac;',
            'trashcan': '&#xe9ac;',
            'bin2': '&#xe9ad;',
            'trashcan2': '&#xe9ad;',
            'briefcase': '&#xe9ae;',
            'portfolio': '&#xe9ae;',
            'airplane': '&#xe9af;',
            'travel': '&#xe9af;',
            'shield': '&#xe9b4;',
            'security': '&#xe9b4;',
            'power': '&#xe9b5;',
            'lightning': '&#xe9b5;',
            'switch': '&#xe9b6;',
            'list': '&#xe9ba;',
            'todo': '&#xe9ba;',
            'menu': '&#xe9bd;',
            'list3': '&#xe9bd;',
            'earth': '&#xe9ca;',
            'globe2': '&#xe9ca;',
            'terminal': '&#xea81;',
            'console': '&#xea81;',
            'google-drive': '&#xea8f;',
            'brand9': '&#xea8f;',
            'facebook': '&#xea90;',
            'brand10': '&#xea90;',
            'facebook2': '&#xea91;',
            'brand11': '&#xea91;',
            'instagram': '&#xea92;',
            'brand12': '&#xea92;',
            'whatsapp': '&#xea93;',
            'brand13': '&#xea93;',
            'spotify': '&#xea94;',
            'brand14': '&#xea94;',
            'twitter': '&#xea96;',
            'brand16': '&#xea96;',
            'renren': '&#xea99;',
            'brand19': '&#xea99;',
            'youtube2': '&#xea9e;',
            'brand22': '&#xea9e;',
            'steam': '&#xeaac;',
            'brand36': '&#xeaac;',
            'steam2': '&#xeaad;',
            'brand37': '&#xeaad;',
            'dropbox': '&#xeaae;',
            'brand38': '&#xeaae;',
            'github': '&#xeab0;',
            'brand40': '&#xeab0;',
            'tumblr': '&#xeab9;',
            'brand49': '&#xeab9;',
            'tumblr2': '&#xeaba;',
            'brand50': '&#xeaba;',
            'tux': '&#xeabd;',
            'brand52': '&#xeabd;',
            'android': '&#xeac0;',
            'brand55': '&#xeac0;',
            'windows': '&#xeac1;',
            'brand56': '&#xeac1;',
            'windows8': '&#xeac2;',
            'brand57': '&#xeac2;',
            'skype': '&#xeac5;',
            'brand60': '&#xeac5;',
            'wikipedia': '&#xeac8;',
            'brand63': '&#xeac8;',
            'linkedin': '&#xeac9;',
            'brand64': '&#xeac9;',
            'linkedin2': '&#xeaca;',
            'brand65': '&#xeaca;',
            'pinterest': '&#xead1;',
            'brand72': '&#xead1;',
            'pinterest2': '&#xead2;',
            'brand73': '&#xead2;',
            'chrome': '&#xead9;',
            'browser': '&#xead9;',
            'firefox': '&#xeada;',
            'browser2': '&#xeada;',
            'IE': '&#xeadb;',
            'browser3': '&#xeadb;',
            'edge': '&#xeadc;',
            'browser4': '&#xeadc;',
            'file-pdf': '&#xeadf;',
            'file10': '&#xeadf;',
            'file-word': '&#xeae1;',
            'file12': '&#xeae1;',
            'file-excel': '&#xeae2;',
            'file13': '&#xeae2;',
            'libreoffice': '&#xeae3;',
            'file14': '&#xeae3;',
            'html-five': '&#xeae4;',
            'w3c': '&#xeae4;',
            'html-five2': '&#xeae5;',
            'w3c2': '&#xeae5;',
            'git': '&#xeae7;',
            'brand80': '&#xeae7;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
