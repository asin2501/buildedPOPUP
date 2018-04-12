(function ($) {
    var cookieName = 'disallowExternalCookies';
    var cookieLifeTime = 1000;//days
    var footer, popup, container, popupbtn, applyPopupBtn;
    var cookieStatus = false;
    var prevCookieStatus = false;
    var styles, html;
    var defaultTexts;
    var defaultJSONURL = '/cookies-text-fields.json';

    $(function () {

        window.defaultStyles = window.defaultStyles || {};

        cookieStatus = prevCookieStatus = !getCookie(cookieName);

        defaultStyles.fontFamily = defaultStyles.fontFamily || '"PT Sans Narrow", sans-serif';
        defaultStyles.fontSize = defaultStyles.fontSize || '15px';
        defaultStyles.popupBodyColor = defaultStyles.popupBodyColor || '#F6F6F6';
        defaultStyles.popupHeadColor = defaultStyles.popupHeadColor || '#fff';

        defaultStyles.footerTextColor = defaultStyles.footerTextColor || '#fff';
        defaultStyles.popupTextColor = defaultStyles.popupTextColor || '#000';
        defaultStyles.shadowColor = defaultStyles.shadowColor || 'rgba(0, 0, 0, 0.5)';
        defaultStyles.activeStatusColor = defaultStyles.activeStatusColor || '#509006';
        defaultStyles.offStatusColor = defaultStyles.offStatusColor || '#949495';
        defaultStyles.footerBackgroundColor = defaultStyles.footerBackgroundColor || '#000';
        defaultStyles.buttonColor = defaultStyles.buttonColor || '#f50140';
        defaultStyles.buttonHoverColor = defaultStyles.buttonHoverColor || '#99072e';
        defaultStyles.buttonTextColor = defaultStyles.buttonTextColor || '#fff';
        defaultStyles.bigTitleFontSize = defaultStyles.bigTitleFontSize || '31px';
        defaultStyles.bigTitleFontSizeMediumScreen = defaultStyles.bigTitleFontSizeMediumScreen || '28px';
        defaultStyles.bigTitleFontSizeSmallScreen = defaultStyles.bigTitleFontSizeSmallScreen || '24px';
        defaultStyles.smallTitleFontSize = defaultStyles.smallTitleFontSize || '20px';

        defaultTexts = {
            "cookies_preferences": "Cookies Preferences",
            "apply_changes": "Apply changes",
            "apply_cookie": "Apply cookie",
            "active": "Active",
            "cookie_options": "Cookie options",
            "footer_text": "Šī vietne izmanto sīkdatnes. Turpinot pārlūkot šo vietni, Jūs piekrītat sīkdatņu izmantošanas noteikumiem. Sīkāka informācija ir pieejama šeit. lick Agree and Proceed to accept cookies and gk on More Information to see detailed <a href='#' target='_blank'>Cooking policy</a> descriptions of the types",
            "popup_main_header": "Your Choices Regarding Cookies on this Site",
            "popup_head_title": "How Amparo Uses Cookies",
            "popup_head_text": "Amparo websites may request cookies to be set on your device. We use cookies to let us know when you visit our websites, how you interact with us, to enrich your user experience, and to customize your relationship with Amparo, including providing you with more relevant advertising. Click on the different category headings to find out more. You can also change your cookie preferences. Note that blocking some types of cookies may impact your experience on our websites and the services we are able to offer.",
            "popup_body_title_1": "Required Website Cookies",
            "popup_body_txt_1": "<p>These cookies are strictly necessary to provide you with services available through our websites and to use some of its features, such as access to secure areas. Because these cookies are strictly necessary to deliver the websites, you cannot refuse them without impacting how our websites function. You can block or delete them by changing your browser settings, as described under the heading \"How can I control cookies?\" <a href='#' target='_blanc'>Link style Cookie Statement.</a></p><p>These <a href='#' target='_blank'> Hover link</a> cookies also are used to enhance the performance and functionality of our websites but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.</p>",
            "popup_body_title_2": "Analytics and Advertising Cookies",
            "always_active": "Always Active",
            "popup_body_txt_2": " <p>These cookies are used to make advertising messages more relevant to you and your interests. They also perform functions like preventing the same ad from  continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests. For further information, see the section of the Cookie Statement entitled \"Targeted online advertising\".</p><p>These cookies collect information that is used either in aggregate form to help us understand how our websites are being used or how effective our   marketing campaigns are, or to help us customize our websites and application for you in order to enhance your experience.</p>"
        };

        styles = '@import url("https://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700");#cookie-notification-reset,#cookie-notification-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;-webkit-backface-visibility:visible;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:transparent;background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:inherit;direction:ltr;display:block;empty-cells:show;float:none;font:normal;font-family:inherit;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;-moz-tab-size:8;tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;-webkit-text-decoration-color:inherit;text-decoration-color:inherit;-webkit-text-decoration-line:none;text-decoration-line:none;-webkit-text-decoration-style:solid;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;top:auto;-ms-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;width:auto;word-spacing:normal;z-index:auto}#cookie-notification-reset::before,#cookie-notification-reset *::before{display:none}#cookie-notification-reset::after,#cookie-notification-reset *::after{display:none}#cookie-notification-reset .switcher{position:relative;display:block;width:33px;height:18px;background-color:"=offStatusColor=";border-radius:100px;transition:background-color 300ms;cursor:pointer}#cookie-notification-reset .switcher::before{position:absolute;content:"";display:block;background-color:#fff;border-radius:10px;width:14px;height:14px;left:2px;top:2px;transition:left 300ms}#cookie-notification-reset .activated .switcher{background-color:"=activeStatusColor="}#cookie-notification-reset .activated .switcher::before{left:17px}#cookie-notification-reset .popup-btn{display:none;position:fixed;z-index:99999999;transform:translateZ(0);bottom:0;left:0;padding-left:24px;padding-right:24px;background-color:"=footerBackgroundColor=";font-size:12px;font-family:"=fontFamily=";line-height:33px;height:33px;color:"=buttonTextColor=";cursor:pointer}#cookie-notification-reset .cookie-notification{position:fixed;z-index:99999999;transform:translateZ(0);display:none;left:0;bottom:0;padding-top:33px;padding-bottom:29px;width:100%;background-color:"=footerBackgroundColor=";font-family:"=fontFamily=";color:"=footerTextColor="}@media (max-width: 1199px){#cookie-notification-reset .cookie-notification{padding-top:15px;padding-bottom:15px}}#cookie-notification-reset .cookie-notification a{display:inline;transition:opacity 300ms;color:"=footerTextColor=";cursor:pointer}#cookie-notification-reset .cookie-notification a:hover{opacity:0.6}#cookie-notification-reset .cookie-notification p{margin-top:0;margin-bottom:0}#cookie-notification-reset .cookie-notification .cookie-notification__btns{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;padding-right:29px;padding-left:60px;-ms-flex-negative:0;flex-shrink:0}@media (max-width: 1199px){#cookie-notification-reset .cookie-notification .cookie-notification__btns{padding-right:0;-ms-flex-align:end;align-items:flex-end}}@media (max-width: 991px){#cookie-notification-reset .cookie-notification .cookie-notification__btns{display:block}}@media (max-width: 600px){#cookie-notification-reset .cookie-notification .cookie-notification__btns{display:-ms-flexbox;display:flex;margin-top:15px;padding-left:0;-ms-flex-pack:center;justify-content:center}}#cookie-notification-reset .cookie-notification .cookie-notification__description{font-size:"=fontSize=";max-width:860px}#cookie-notification-reset .cookie-notification .cookie-notification__description a{text-decoration:underline;color:inherit}#cookie-notification-reset .cookie-notification .cookie-notification__container{width:100%;max-width:1360px;margin:0 auto;padding-left:40px;padding-right:40px;display:-ms-flexbox;display:flex;box-sizing:border-box;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}@media (max-width: 1199px){#cookie-notification-reset .cookie-notification .cookie-notification__container{padding-right:20px;padding-left:20px}}@media (max-width: 767px){#cookie-notification-reset .cookie-notification .cookie-notification__container{padding-right:15px;padding-left:15px}}@media (max-width: 600px){#cookie-notification-reset .cookie-notification .cookie-notification__container{display:block}}#cookie-notification-reset .cookie-notification .cookie-notification__apply-btn{display:block;color:"=footerTextColor=";background-color:"=buttonColor=";border:none;padding:8px 30px;outline:none;font-size:"=fontSize=";-moz-appearance:none;-webkit-appearance:none;font-family:"=fontFamily=";cursor:pointer;transition:background-color 300ms;white-space:nowrap}#cookie-notification-reset .cookie-notification .cookie-notification__apply-btn:hover{background-color:"=buttonHoverColor="}#cookie-notification-reset .cookie-notification .cookie-notification__addon-btn{color:"=buttonTextColor=";padding:5px;font-family:"=fontFamily=";display:block;background-color:transparent;border:none;outline:none;font-size:"=fontSize=";-moz-appearance:none;-webkit-appearance:none;margin-right:35px;cursor:pointer;transition:opacity 300ms;white-space:nowrap}#cookie-notification-reset .cookie-notification .cookie-notification__addon-btn:hover{opacity:0.6}@media (max-width: 991px){#cookie-notification-reset .cookie-notification .cookie-notification__addon-btn{white-space:nowrap;margin-left:auto;margin-right:0;margin-bottom:10px;padding:0}}@media (max-width: 600px){#cookie-notification-reset .cookie-notification .cookie-notification__addon-btn{padding:5px;margin:0;margin-right:30px}}#cookie-notification-reset .cookie-popup{display:none;position:fixed;z-index:999999999;transform:translateZ(0);width:100%;top:0;right:0;bottom:0;left:0;font-size:"=fontSize=";background-color:"=shadowColor=";font-family:"=fontFamily=";color:"=popupTextColor="}#cookie-notification-reset .cookie-popup a{display:inline;text-decoration:underline;cursor:pointer;color:"=popupTextColor="}#cookie-notification-reset .cookie-popup h3{margin:0;font-size:"=bigTitleFontSize=";font-weight:bold;margin-top:0;margin-bottom:34px;line-height:1.33}@media (max-width: 767px){#cookie-notification-reset .cookie-popup h3{font-size:"=bigTitleFontSizeMediumScreen=";padding-right:50px;margin-bottom:20px;line-height:1.1}}@media (max-width: 600px){#cookie-notification-reset .cookie-popup h3{padding-right:0;font-size:"=bigTitleFontSizeSmallScreen="}}#cookie-notification-reset .cookie-popup h5{margin:0;font-size:"=smallTitleFontSize=";margin-bottom:22px;letter-spacing:0.2px;font-weight:bold;line-height:1}#cookie-notification-reset .cookie-popup p{margin:0;line-height:1.2}#cookie-notification-reset .cookie-popup p+p{margin-top:20px}@media (max-width: 767px){#cookie-notification-reset .cookie-popup p+p{margin-top:15px}}#cookie-notification-reset .cookie-popup__close{position:absolute;right:33px;top:28px;width:26px;height:26px;-webkit-appearance:none;-moz-appearance:none;padding:0;border:0;background-color:transparent;cursor:pointer;outline:none}@media (max-width: 600px){#cookie-notification-reset .cookie-popup__close{right:20px;top:20px;width:20px;height:20px}}#cookie-notification-reset .cookie-popup__close img{width:100%}#cookie-notification-reset .cookie-popup__apply-btn{-webkit-appearance:none;-moz-appearance:none;padding:0;border:0;color:"=buttonTextColor=";font-weight:bold;line-height:35px;font-size:"=fontSize=";padding-right:34px;padding-left:34px;background-color:"=buttonColor=";transition:background-color 300ms, opacity 200ms;cursor:pointer}#cookie-notification-reset .cookie-popup__apply-btn:hover{background-color:"=buttonHoverColor="}#cookie-notification-reset .cookie-popup__scroll-wrapper{overflow:auto;height:100vh}#cookie-notification-reset .cookie-popup__scroll-content{padding-top:83px;padding-right:50px;padding-left:50px;padding-bottom:150px;max-width:863px;margin:0 auto;box-sizing:border-box}@media (max-width: 600px){#cookie-notification-reset .cookie-popup__scroll-content{padding-top:40px;padding-right:20px;padding-left:20px}}@media (max-width: 480px){#cookie-notification-reset .cookie-popup__scroll-content{padding-right:15px;padding-left:15px}}#cookie-notification-reset .cookie-popup__inner{position:relative;background-color:"=popupHeadColor="}#cookie-notification-reset .cookie-popup__body{padding-right:76px;padding-left:76px;padding-top:35px;background-color:"=popupBodyColor=";padding-bottom:50px}@media (max-width: 767px){#cookie-notification-reset .cookie-popup__body{padding-right:30px;padding-left:30px;padding-top:25px;padding-bottom:30px}}@media (max-width: 480px){#cookie-notification-reset .cookie-popup__body{padding-right:15px;padding-left:15px}}#cookie-notification-reset .cookie-popup__head{padding-right:76px;padding-left:76px;padding-top:56px;padding-bottom:40px}@media (max-width: 767px){#cookie-notification-reset .cookie-popup__head{padding-right:30px;padding-left:30px;padding-top:35px;padding-bottom:20px}}@media (max-width: 600px){#cookie-notification-reset .cookie-popup__head{padding-top:80px}}@media (max-width: 480px){#cookie-notification-reset .cookie-popup__head{padding-right:15px;padding-left:15px}}#cookie-notification-reset .cookie-popup__b-with-control{position:relative;padding-top:15px;padding-bottom:30px;padding-right:130px}@media (max-width: 767px){#cookie-notification-reset .cookie-popup__b-with-control{padding-top:10px;padding-bottom:20px;padding-right:100px}}@media (max-width: 600px){#cookie-notification-reset .cookie-popup__b-with-control{padding-right:0}#cookie-notification-reset .cookie-popup__b-with-control h5{padding-right:100px}}#cookie-notification-reset .cookie-popup__status-show{position:absolute;right:0;top:50%;font-weight:bold;line-height:20px;height:20px;margin-top:-40px;color:"=activeStatusColor="}@media (max-width: 600px){#cookie-notification-reset .cookie-popup__status-show{top:10px;margin-top:0}}#cookie-notification-reset .cookie-popup__switcher{position:absolute;right:0;top:50%;margin-top:0;-webkit-appearance:none;-moz-appearance:none;background-color:transparent;border:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;outline:none;cursor:pointer}@media (max-width: 600px){#cookie-notification-reset .cookie-popup__switcher{top:10px;margin-top:0}}#cookie-notification-reset .cookie-popup__switcher-val{margin-left:7px;font-weight:bold;color:"=offStatusColor=";font-family:"=fontFamily=";font-size:"=fontSize=";cursor:pointer}#cookie-notification-reset .activated .cookie-popup__switcher-val{color:"=activeStatusColor="}#cookie-notification-reset .cookie-popup__footer{margin-top:10px}@media (max-width: 600px){#cookie-notification-reset .cookie-popup__footer{text-align:right}}';


        html = '<div id="cookie-notification-reset"> <div class="cookie-notification" id="cookie-notification-footer"> <div class="cookie-notification__container"> <div class="cookie-notification__description"> <p>"=footer_text="</p></div><div class="cookie-notification__btns"> <button class="cookie-notification__addon-btn js-open">"=cookie_options="</button> <button class="cookie-notification__apply-btn js-set-cookie">"=apply_cookie="</button> </div></div></div><div class="cookie-popup" id="cookie-notification-popup"> <div class="cookie-popup__scroll-wrapper"> <div class="cookie-popup__scroll-content"> <div class="cookie-popup__inner"> <div class="cookie-popup__head"> <button class="cookie-popup__close js-close"><img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDIyNC41MTIgMjI0LjUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjI0LjUxMiAyMjQuNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8cG9seWdvbiBwb2ludHM9IjIyNC41MDcsNi45OTcgMjE3LjUyMSwwIDExMi4yNTYsMTA1LjI1OCA2Ljk5OCwwIDAuMDA1LDYuOTk3IDEwNS4yNjMsMTEyLjI1NCAgICAwLjAwNSwyMTcuNTEyIDYuOTk4LDIyNC41MTIgMTEyLjI1NiwxMTkuMjQgMjE3LjUyMSwyMjQuNTEyIDIyNC41MDcsMjE3LjUxMiAxMTkuMjQ5LDExMi4yNTQgICIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="/> </button> <h3>"=popup_main_header="</h3> <h5>"=popup_head_title="</h5> <p>"=popup_head_text="</p></div><div class="cookie-popup__body"> <div class="cookie-popup__b-with-control"> <h5>"=popup_body_title_1="</h5> "=popup_body_txt_1=" <span class="cookie-popup__status-show">"=always_active="</span> </div><div class="cookie-popup__b-with-control"> <h5>"=popup_body_title_2="</h5> "=popup_body_txt_2=" <button class="cookie-popup__switcher js-switch"> <span class="switcher"></span> <span class="cookie-popup__switcher-val">"=active="</span> </button> </div><div class="cookie-popup__footer"> <button class="cookie-popup__apply-btn js-popup-apply-btn">"=apply_changes="</button> </div></div></div></div></div></div><button class="popup-btn js-open">"=cookies_preferences="</button></div>';


        var textFieldsJSONUrl = $('#custom-cookies').attr('data-text-fields');

        textFieldsJSONUrl = textFieldsJSONUrl ? textFieldsJSONUrl : defaultJSONURL;

        if (textFieldsJSONUrl === 'default') {
            init(defaultTexts);
        } else {
            $.ajax({
                url: textFieldsJSONUrl,
                dataType: "json",
                success: function (data, textStatus) {
                    for (key in defaultTexts) {
                        if (!data[key]) {
                            data[key] = defaultTexts[key];
                        }
                    }
                    init(data);
                },
                error: function (jqXHR, textStatus) {
                    init(defaultTexts);
                }
            });
        }
    });

    function init(textFields) {
        styles = replacePlaceHolers(styles, defaultStyles);
        html = replacePlaceHolers(html, textFields);
        $('<style></style>').text(styles).appendTo('body');
        $(html).appendTo('body');


        container = $('#cookie-notification-reset');
        footer = $('#cookie-notification-footer');
        popup = $('#cookie-notification-popup');
        popupbtn = container.find('.popup-btn');
        applyPopupBtn = container.find('.js-popup-apply-btn');
        container.find('.js-open').click(openPopup);
        container.find('.js-set-cookie').click(function () {
            cookieStatus = true;
            popup.addClass('activated');
            setCookieApply();
        });
        container.find('.js-close').click(closePopup);
        container.find('.js-switch').click(switchActive);
        container.find('.js-popup-apply-btn').click(applyCookieInPopup);
        popup.click(closeWhenClickOnShadow);

        if (cookieStatus) {
            popup.addClass('activated');
            popupbtn.fadeIn();

        } else {
            footer.fadeIn();
        }
    }

    function replacePlaceHolers(text, map) {
        for (key in map) {
            text = text.replace(new RegExp('"=' + key + '="', 'g'), map[key]);
        }
        return text;
    }

    function deleteCookie(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    function switchActive() {
        popup.toggleClass('activated');
        cookieStatus = !cookieStatus;
    }

    function applyCookieInPopup(e) {

        if (e && e.preventDefault) {
            e.preventDefault();
            e.stopPropagation();
        }
        setCookieApply(e)
    }

    function setCookieApply(e) {
        if (e && e.preventDefault) {
            e.preventDefault();
            e.stopPropagation();
        }
        closePopup();
        if(prevCookieStatus === cookieStatus){
            return;
        }
        setTimeout(
            function () {
                popupbtn.fadeIn()
            }, 400
        );
        if (cookieStatus) {
            deleteCookie(cookieName);
        } else {
            setCookie(cookieName, true, cookieLifeTime);
        }
        footer.fadeOut();
        prevCookieStatus = cookieStatus;
    }

    function setCookie(name, value, options) {
        options = options || {};
        var expires = options.expires;
        if (typeof expires == "number" && expires) {
            var d = new Date();
            d.setTime(d.getTime() + expires * 1000 * 60 * 60 * 24);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }
        value = encodeURIComponent(value);
        var updatedCookie = name + "=" + value;
        for (var propName in options) {
            updatedCookie += "; " + propName;
            var propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += "=" + propValue;
            }
        }
        document.cookie = updatedCookie;
    }

    function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    function openPopup(e) {
        if (e && e.preventDefault) {
            e.preventDefault();
            e.stopPropagation();
        }
        popup.fadeIn();
    }

    function closePopup(e) {
        if (e && e.preventDefault) {
            e.preventDefault();
            e.stopPropagation();
        }
        popup.fadeOut();
    }

    function closeWhenClickOnShadow(e) {
        if ($(e.target).closest('.cookie-popup__inner').length === 0) {
            closePopup(e);
        }
    }
})(jQuery);