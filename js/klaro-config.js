
// === Load language from cookie  value: th , en ===
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
        {
            name: 'site-core',
            title: 'Website System',
            purposes: ['essential'],
            cookies: ['ASP.NET_SessionId', 'production-dynastysea'],
            required: true
        },
        {
            name: 'google-analytics',
            title: 'Google Analytics',
            purposes: ['analytics'],
            //cookies: [/^_ga/, /^_gid/, /^_gat/],
            required: false
        },
        {
            name: 'clarity',
            title: 'Microsoft Clarity',
            purposes: ['analytics'],
            //cookies: [/^_ga/, /^_gid/, /^_gat/],
            required: false
        },
        // {
        //     name: 'google-tag-manager-fb',
        //     title: 'Facebook Pixel',
        //     purposes: ['marketing'],
        //     //cookies: ['_fbp', 'fr'],
        //     required: false
        // },
        // {
        //     name: 'google-login',
        //     title: 'Google Login',
        //     purposes: ['social'],
        //     cookies: ['g_state', 'g_auth', 'session'],
        //     required: false
        // },
        // {
        //     name: 'ui-theme',
        //     title: 'Theme Personalization',
        //     purposes: ['personalization'],
        //     cookies: ['theme-mode', 'theme-color'],
        //     required: false
        // }
    ],
      // Function นี้จะรันเมื่อ Klaro โหลด หรือ User เปลี่ยนค่า Consent
    callback: function(consent, app) {

        
        console.log("📢 Klaro callback triggered");
        console.log("🔍 Current consent object:", consent);
        console.log("🔧 App changed:", app);
        
        // เช็คว่า GTM โหลดมารึยัง
        window.dataLayer = window.dataLayer || [];
        
        // Loop เช็คทุก service ที่เราตั้งไว้
        for (var appName in consent) {
            if (consent[appName]) {
                // ถ้ายอมรับ service ไหน ให้ยิง event นั้นเข้า GTM
                window.dataLayer.push({
                    'event': 'klaro-consent-granted',
                    'serviceName': appName // เช่น 'google-analytics'
                });
            }
        }
    }
};
