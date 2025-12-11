// === Load language from cookie value: th , en ===
var lang = "th";

window.klaroConfig = {
     version: 1,

    // การตั้งค่า Light Mode ที่ถูกต้อง
    styling: { 
        //theme: ['light', 'bottom', 'wide'] 
        theme: ['light', 'bottom', 'narrow']
        //theme: ['dark', 'bottom', 'wide']
        //theme: ['dark', 'top', 'narrow']
    },
    
    appName: 'My Website',
    lang: lang, // ใช้ตัวแปรภาษา
    
    privacyPolicy: 'https://genplay.co.th/cookie-policy/', // ลิงก์นโยบายความเป็นส่วนตัว
    
    noticeAsModal: false, // ใช้ notice แบบแถบ (Non-modal notice)
    mustConsent: false,
    acceptAll: true,
    hideDeclineAll: false,

    storageMethod: 'cookie',
    storageName: 'klaro',
    storageExpiresAfterDays: 365,
    
    purposes: [
        'essential',
        'analytics',
        'marketing',
        'social',
        'personalization'
    ],

    translations: {
        // ภาษาไทย
        th: {
            consentNotice: {
                learnMore: 'ตั้งค่าคุกกี้',
                description: 'เว็บไซต์ของเรามีการใช้งานคุกกี้ (Cookies) เพื่อมอบประสบการณ์ที่ดีในการใช้งานให้แก่ท่าน สามารถเข้าถึงบริการต่างๆ ของเราได้อย่างครบถ้วน โดยท่านสามารถศึกษารายละเอียดการใช้คุกกี้ได้จาก',
            },
            consentModal: {
                title: 'การตั้งค่าความเป็นส่วนตัว',
                description: 'เราใช้คุกกี้เพื่อเพิ่มประสิทธิภาพและประสบการณ์ที่ดีในการใช้งานเว็บไซต์ คุณสามารถเลือกการตั้งค่าได้ด้านล่าง',
            },
            privacyPolicy :{
                  name: 'นโยบายความเป็นส่วนตัว',
                    text: 'อ่านรายละเอียดเพิ่มเติมได้ที่ {privacyPolicy}'
            },
            service: {
                purpose: 'วัตถุประสงค์', 
                required: { 
                    title: 'จำเป็น',
                },
                disableAll: {
                    title: 'เปิดการใช้งานทั้งหมด',
                    description: 'เปิดการใช้งานทุกบริการที่อยู่ภายใต้หมวดหมู่นี้'
                },
            },
            purposeItem: {
                service: 'บริการ',
                services: 'บริการ'
            },
            purposes: {
                essential: { title: 'จำเป็นพื้นฐาน', description: 'คุกกี้ที่จำเป็นสำหรับการทำงานของเว็บไซต์' },
                analytics: { title: 'การวิเคราะห์และวัดผล', description: 'เก็บข้อมูลสถิติการใช้งานเพื่อปรับปรุงเว็บไซต์' },
                marketing: { title: 'การตลาดและโฆษณา', description: 'ใช้สำหรับแสดงโฆษณาที่เกี่ยวข้องกับคุณ' },
                social: { title: 'โซเชียลมีเดีย', description: 'เชื่อมต่อกับแพลตฟอร์มโซเชียลมีเดีย' },
                personalization: { title: 'การปรับแต่งเฉพาะบุคคล', description: 'จดจำการตั้งค่าของคุณ' },
            },
            ok: 'ยอมรับรายการที่เลือก',
            decline: 'ปฏิเสธทั้งหมด',
            save: 'บันทึกการตั้งค่า',
            acceptSelected: 'ยอมรับรายการที่เลือก',
            acceptAll:'ยอมรับทั้งหมด',
            poweredBy: 'ขับเคลื่อนโดย',
        },

        // ภาษาอังกฤษ 
        en: {
            consentNotice: {
                learnMore: 'Privacy Settings',
                description: 'Our website uses cookies to provide you with the best possible browsing experience and to ensure full access to all of our services. You can learn more about our use of cookies from cookie policy',
            },
            consentModal: {
                title: 'Privacy Settings',
                description: 'We use cookies to improve your experience. You can customize your preferences below.',
                privacyPolicy: {
                    name: 'privacy policy',
                    text: 'For more info, please read our {privacyPolicy}.'
                }
            },
            service: {
                purpose: 'Purpose',
                required: { 
                    title: 'Required',
                },
                disableAll: {
                    title: 'Enable all',
                    description: 'Enable all services under this category'
                },
            },
            purposeItem: {
                service: 'service',
                services: 'services'
            },
            purposes: {
                essential: { title: 'Essential', description: 'Necessary for the website to function.' },
                analytics: { title: 'Analytics', description: 'Collecting usage statistics.' },
                marketing: { title: 'Marketing', description: 'Displaying relevant ads.' },
                social: { title: 'Social Media', description: 'Social media integration.' },
                personalization: { title: 'Personalization', description: 'Remembering your preferences.' },
            },
            ok: 'Accept Selected',
            decline: 'Decline All',
            save: 'Save Settings',
            acceptSelected: 'Accept Selected',
            acceptAll:'Accept All',
            poweredBy: 'Powered by',
        }
    },

    services: [
        // ================================================================
        // 1) Google Tag Manager (GTM)
        // ================================================================
        {
            name: 'site-core',
            title: 'Website System',
            purposes: ['essential'],
            cookies: ['ASP.NET_SessionId', 'production-dynastysea'],
            required: true
        },
        {
            name: 'google-tag-manager',
            required: true,
            purposes: ['essential'],

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
        {
            name: 'google-analytics',
            purposes: ['analytics'],
            cookies: [
                /^_ga(_.*)?/   // delete GA cookies on decline
            ],

              onAccept: `
                console.log("[Klaro] GA Accepted");
                gtag('consent', 'update', {
                        'ad_storage': 'granted',
                        'analytics_storage': 'granted',
                        'ad_user_data': 'granted',
                        'ad_personalization': 'granted'
                });

                // Event กลางสำหรับ GTM
                dataLayer.push({
                    'event': 'klaro-consent-granted',
                    'klaro_service': 'google-analytics'
                });
                `,

                onDecline: `
                    console.log("[Klaro] GA Declined");
                  gtag('consent', 'update', {
                        'ad_storage': 'denied',
                        'analytics_storage': 'denied',
                        'ad_user_data': 'denied',
                        'ad_personalization': 'denied'
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
                        'ad_storage': 'granted',
                        'analytics_storage': 'granted',
                        'ad_user_data': 'granted',
                        'ad_personalization': 'granted'
                });


                // Event กลางสำหรับ GTM
                dataLayer.push({
                    'event': 'klaro-consent-granted',
                    'klaro_service': 'clarity'
                });

                
            `,

            onDecline: `
                console.log("[Klaro] GA Declined");

                gtag('consent', 'update', {
                    'ad_storage': 'denied',
                    'analytics_storage': 'denied',
                    'ad_user_data': 'denied',
                    'ad_personalization': 'denied'
                });
            `,
        },

    ]
}
