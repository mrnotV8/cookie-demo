// === Load language from cookie value: th , en ===
var lang = "th";

window.klaroConfig = {

    services: [
        // ================================================================
        // 1) Google Tag Manager (GTM)
        // ================================================================
        {
            name: 'google-tag-manager',
            required: false,
            purposes: ['marketing'],

            onAccept: `
                console.log("[Klaro] GTM Accepted");
                // notify GTM for all accepted services
                for(let k of Object.keys(opts.consents)){
                    console.log("for"+ opts.consents[k]);

                    if (opts.consents[k]){
                        let eventName = 'klaro-consent-granted'
                        console.log("[Klaro] Push Event to GTM:", eventName);
                        dataLayer.push({'event': eventName});
                    }
                }
            `,

            onInit: `
                console.log("[Klaro] GTM Init");
                window.dataLayer = window.dataLayer || [];
                window.gtag = function(){ dataLayer.push(arguments); }

                // Default deny (Consent Mode)
                gtag('consent', 'default', {
                    'ad_storage': 'denied',
                    'analytics_storage': 'denied',
                    'ad_user_data': 'denied',
                    'ad_personalization': 'denied'
                });
                gtag('set', 'ads_data_redaction', true);
            `,
        },

        // ================================================================
        // 2) Google Analytics (GA4)
        // ================================================================
        {
            name: 'google-analytics',
            purposes: ['analytics'],
            cookies: [
                /^_ga(_.*)?/   // delete GA cookies on decline
            ],

            onAccept: `
                console.log("[Klaro] GA Accepted");
                gtag('consent', 'update', {
                    'analytics_storage': 'granted'
                });
            `,

            onDecline: `
                console.log("[Klaro] GA Declined");
                gtag('consent', 'update', {
                    'analytics_storage': 'denied'
                });
            `,
        },
        {
            name: 'clarity',
            purposes: ['analytics'],
            cookies: [
                /^_ga/, /^_gid/, /^_gat/
            ],

            onAccept: `
                console.log("[Klaro] GA Accepted");
                gtag('consent', 'update', {
                    'analytics_storage': 'granted'
                });
            `,

            onDecline: `
                console.log("[Klaro] GA Declined");
                gtag('consent', 'update', {
                    'analytics_storage': 'denied'
                });
            `,
        },

    ]
}
