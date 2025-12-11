// === Load language from cookie value: th , en ===
var lang = "th";

window.klaroConfig = {

    services: [
        // ================================================================
        // 1) Google Tag Manager (GTM)
        // ================================================================
        {
            name: 'google-tag-manager',
            required: true,
            purposes: ['marketing'],

            onAccept: `
                console.log("[Klaro] GTM Accepted");
                // notify GTM for all accepted services
                for(let k of Object.keys(opts.consents)){
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

        // ================================================================
        // 3) Microsoft Clarity
        // ================================================================
        {
            name: 'clarity',
            purposes: ['analytics'],
            cookies: ['_clck', '_clsk'],

            onAccept: `
                console.log("[Klaro] Clarity Accepted");

                // โหลดสคริปต์ Clarity
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "YOUR-CLARITY-ID");

                console.log("[Klaro] Clarity Script Loaded");
            `,

            onDecline: `
                console.log("[Klaro] Clarity Declined - removing cookies");
            `,
        },

    ]
}
