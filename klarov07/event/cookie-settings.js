
 window.dataLayer = window.dataLayer || [];

    window.addEventListener('load', function () {

        const btn = document.getElementById('cookie-settings-link');

        // ฟัง event ที่ Klaro ส่งเข้า GTM
        window.dataLayer.push = new Proxy(window.dataLayer.push, {
            apply(target, thisArg, args) {
                const data = args[0];

                if (data && data.event === 'klaro-consent-granted') {
                    // ผู้ใช้กด Accept หรือ Decline แล้ว
                    btn.style.display = 'block';
                }

                return Reflect.apply(target, thisArg, args);
            }
        });

    });


document.addEventListener('DOMContentLoaded', function () {
    if (getCookie('klaro')) {
        document.getElementById('cookie-settings-link').style.display = 'block';
    }
});

document.getElementById('cookie-settings-link')
    .addEventListener('click', function () {
        klaro.show();
});