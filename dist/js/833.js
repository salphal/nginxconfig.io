'use strict';
(self['webpackChunknginxconfig_io'] = self['webpackChunknginxconfig_io'] || []).push([
    [833],
    {
        5833: (e, o, n) => {
            n.d(o, { default: () => V });
            const t = {
                back: 'بازگشت',
                next: 'بعدی',
                enable: 'فعال کردن',
                php: 'PHP',
                ssl: 'SSL',
                nginx: 'NGINX',
                http: 'HTTP',
                https: 'HTTPS',
                letsEncrypt: "Let's Encrypt",
                python: 'Python',
                wordPress: 'WordPress',
                drupal: 'Drupal',
                magento: 'Magento',
                joomla: 'Joomla',
                django: 'Django',
                logging: 'لاگ‌گیری',
                reverseProxy: 'پروکسی معکوس',
                reverseProxyLower: 'پروکسی معکوس',
                restrict: 'محدود کردن',
                path: 'مسیر',
            };
            var r = n(788);
            const i = {
                    title: `${t.nginx}پیکربندی`,
                    description: `ساده‌ترین راه برای پیکربندی یک سرور ${t.nginx} کارآمد، امن و پایدار.`,
                    singleColumnMode: 'حالت ستون تکی',
                    splitColumnMode: 'حالت کناره به کناره',
                    perWebsiteConfig: 'پیکربندی برای هر وب‌سایت',
                    addSite: 'افزودن وب‌سایت',
                    globalConfig: 'پیکربندی جهانی',
                    setup: 'راه‌اندازی',
                    configFiles: 'پرونده‌های پیکربندی',
                    copied: 'کپی شد',
                },
                l = { downloadConfig: 'دانلود پیکربندی', copyBase64: 'کپی Base64' },
                a = {
                    backToTop: 'بازگشت به بالا',
                    thisToolIs: 'این ابزار',
                    openSourceOnGitHub: 'منبع‌باز در GitHub',
                    underThe: 'زیر',
                    mit: 'MIT',
                    license: 'لایسنس!',
                    weWelcomeFeedbackAndContributions: 'ما بازخورد و مشارکت‌ها را می‌پذیریم.',
                    originallyCreatedBy: 'اصلی توسط',
                    balintSzekeres: 'Bálint Szekeres',
                    maintainedBy: 'نگه‌داری شده توسط',
                    digitalOcean: 'DigitalOcean',
                },
                s = {
                    enableEncryptedSslConnection: `${t.enable} ${t.ssl} اتصال‌های رمزگذاری شده`,
                    http2: `${t.http}/2`,
                    enableHttp2Connections: `${t.enable} اتصال‌های ${t.http}/2`,
                    http3: `${t.http}/3`,
                    enableHttp3Connections: `${t.enable} اتصال‌های ${t.http}/3`,
                    forceHttps: `اجبار ${t.https}`,
                    hsts: 'HSTS',
                    enableStrictTransportSecurity: `${t.enable} امنیت حمل و نقل دقیق، الزامی کردن اتصال‌های HTTPS`,
                    enableIncludeSubDomains: `${t.enable} دستور includeSubDomains، الزامی کردن اتصال‌های HTTPS برای همه زیردامنه‌ها`,
                    enablePreload: `${t.enable} دستور preload، به مرورگرها اطلاع دادن برای همیشه برقراری اتصال‌های HTTPS فقط`,
                    certificationType: 'نوع گواهی',
                    customCertificate: 'گواهی سفارشی',
                    letsEncryptEmail: `${t.letsEncrypt} ایمیل`,
                    http3IsANonStandardModule: 'HTTP/3 ماژول استاندارد NGINX نیست، بررسی کنید ',
                    http3NginxQuicReadme: 'مستندات NGINX QUIC',
                    http3OrThe: ' یا ',
                    http3CloudflareQuicheProject: 'پروژه quiche Cloudflare',
                    http3ForBuildingNginxWithHttp3: ' برای چگونگی ساخت NGINX با HTTP/3!',
                },
                p = {
                    byDomain: 'به وسیلهٔ دامنه',
                    enableForThisDomain: `${t.enable} برای این دامنه`,
                    arguments: 'آرگومان‌ها',
                    level: 'سطح ورود',
                    forRedirects: 'برای هدایت‌ها',
                },
                d = {
                    phpIsDisabled: `${t.php} غیرفعال است.`,
                    phpCannotBeEnabledWithReverseProxy: `${t.php} نمی‌تواند هنگامی که پروکسی معکوس فعال است، فعال شود.`,
                    phpCannotBeEnabledWithPython: `${t.php} نمی‌تواند هنگامی که ${t.python} فعال است، فعال شود.`,
                    enablePhp: `${t.enable} ${t.php}`,
                    wordPressRules: `قوانین ${t.wordPress}`,
                    enableWordPressRules: `${t.enable} قوانین خاص ${t.wordPress}`,
                    drupalRules: `قوانین ${t.drupal}`,
                    enableDrupalRules: `${t.enable} قوانین خاص ${t.drupal}`,
                    magentoRules: `قوانین ${t.magento}`,
                    enableMagentoRules: `${t.enable} قوانین خاص ${t.magento}`,
                    joomlaRules: `قوانین ${t.joomla}`,
                    enableJoomlaRules: `${t.enable} قوانین خاص ${t.joomla}`,
                    phpServer: `سرور ${t.php}`,
                    phpBackupServer: `سرور پشتیبان ${t.php}`,
                    tcp: 'TCP',
                    hhvmSocket: 'سوکت HHVM',
                    php70Socket: 'سوکت 7.0',
                    php71Socket: 'سوکت 7.1',
                    php72Socket: 'سوکت 7.2',
                    php73Socket: 'سوکت 7.3',
                    php74Socket: 'سوکت 7.4',
                    php80Socket: 'سوکت 8.0',
                    php81Socket: 'سوکت 8.1',
                    php82Socket: 'سوکت 8.2',
                    phpSocket: 'سوکت PHP',
                    custom: 'سفارشی',
                    disabled: 'غیرفعال',
                },
                c = {
                    presets: 'پیش‌تنظیم‌ها',
                    itLooksLikeYouCustomisedTheConfig:
                        'به نظر می‌رسد که شما پیکربندی برای این دامنه را سفارشی کرده‌اید. انتخاب یک پیش‌تنظیم جدید ممکن است برخی از تنظیماتی که شما سفارشی کرده‌اید را بازنشانی یا تغییر دهد.',
                    frontend: 'رابط کاربری',
                    nodeJs: 'Node.js',
                    singlePageApplication: 'اپلیکیشن تک‌صفحه‌ای',
                },
                g = {
                    pythonIsDisabled: `${t.python} غیرفعال است.`,
                    pythonCannotBeEnabledWithReverseProxy: `${t.python} نمی‌تواند هنگامی که پروکسی معکوس فعال است، فعال شود.`,
                    pythonCannotBeEnabledWithPhp: `${t.python} نمی‌تواند هنگامی که ${t.php} فعال است، فعال شود.`,
                    enablePython: `${t.enable} ${t.python}`,
                    djangoRules: `قوانین ${t.django}`,
                    enableDjangoRules: `${t.enable} قوانین خاص ${t.django}`,
                },
                u = {
                    reverseProxyIsDisabled: `${t.reverseProxy} غیرفعال است.`,
                    reverseProxyCannotBeEnabledWithPhp: `${t.reverseProxy} نمی‌تواند هنگامی که ${t.php} فعال است، فعال شود.`,
                    reverseProxyCannotBeEnabledWithPython: `${t.reverseProxy} نمی‌تواند هنگامی که ${t.python} فعال است، فعال شود.`,
                    enableReverseProxy: `${t.enable} ${t.reverseProxyLower}`,
                    proxyHostHeader: 'هدر میزبان پروکسی',
                },
                b = {
                    fallbackRouting: 'مسیریابی پشتیبانی شده',
                    fallbackRoutingPhpPath: `مسیریابی پشتیبانی شده ${t.php}`,
                    legacyPhpRouting: `مسیریابی قدیمی ${t.php}`,
                    enableLegacyRouting: `${t.enable} مسیریابی قدیمی`,
                    routing: 'مسیریابی',
                },
                h = {
                    domain: 'دامنه',
                    documentRoot: 'ریشه سند',
                    oneOrMoreOtherDomainsAreAlsoNamed:
                        'یک یا چند دامنه دیگر همچنین نام‌گذاری شده‌اند',
                    thisWillCauseIssuesWithConfigGeneration:
                        'این باعث مشکلات در تولید پیکربندی می‌شود.',
                    wwwSubdomain: 'زیردامنه www',
                    cdnSubdomain: 'زیردامنه CDN',
                    redirectSubdomains: 'هدایت زیردامنه‌ها',
                    server: 'سرور',
                    listen: 'گوش کردن',
                },
                $ = {
                    disableForThisDomain: 'غیرفعال کردن برای این دامنه',
                    responseCode: 'کد پاسخ',
                },
                m = 'Onion',
                y = {
                    onion: 'پیاز',
                    onionLocation: `${m} مکان`,
                    provideAnOnionLocationToSetOnionLocationHeader:
                        'آدرس مکان پیاز را ارائه دهید تا هدر مکان پیاز را برای سایت خود تنظیم کنید.',
                    letsVisitorsKnownOnionServicesIsAvailable:
                        'این به بازدیدکنندگان اطلاع می‌دهد که نسخه سرویس‌های پیاز از سایت شما برای مرورگرهای Tor در دسترس است.',
                    learnMoreAboutOnionServices: 'بیشتر در مورد سرویس‌های پیاز بیاموزید',
                    onionLocationExpectedToEndWithOnion:
                        'آدرس‌های مکان پیاز به طور معمول با `.onion` ختم می‌شوند.',
                },
                C = {
                    https: s,
                    logging: p,
                    php: d,
                    presets: c,
                    python: g,
                    reverseProxy: u,
                    routing: b,
                    server: h,
                    restrict: $,
                    onion: y,
                },
                f = 'Mozilla',
                S = 'IPv4',
                P = 'IPv6',
                v = {
                    sslProfile: `${t.ssl} پروفایل`,
                    httpsMustBeEnabledOnOneSite: `${t.https} باید حداقل بر روی یک سایت فعال شود تا تنظیمات ${t.https} جهانی را پیکربندی کنید.`,
                    portReuse: 'استفاده مجدد پورت',
                    enableReuseOfPort: `${t.enable} استفاده مجدد از پورت برای ایجاد یک گوشه گوش دهنده برای هر کارگر`,
                    ocspDnsResolvers: 'راه‌حل‌های DNS OCSP',
                    cloudflareResolver: 'راه‌حل Cloudflare',
                    googlePublicDns: 'DNS عمومی Google',
                    openDns: 'OpenDNS',
                    quad9: 'Quad9',
                    verisign: 'Verisign',
                    letsEncryptWebroot: `${t.letsEncrypt} Webroot`,
                    letsEncryptCertRoot: `${t.letsEncrypt} دایرکتوری گواهی`,
                    mozillaModern: `${f} Modern`,
                    mozillaIntermediate: `${f} Intermediate`,
                    mozillaOld: `${f} Old`,
                    ipv4Only: `${S} فقط`,
                    ipv6Only: `${P} فقط`,
                    ipv4AndIpv6: `${S} و ${P}`,
                },
                x = {
                    enableFileNotFoundErrorLogging: `${t.enable} ثبت خطاهای فایل پیدا نشد در ورودی`,
                    logformat: 'فرمت ثبت',
                    level: 'سطح ورود',
                    enableCloudflare: 'افزودن هدرهای درخواست Cloudflare به فرمت ثبت پیش‌فرض',
                    cfRay: 'CF-Ray',
                    cfConnectingIp: 'CF-Connecting-IP',
                    xForwardedFor: 'X-Forwarded-For',
                    xForwardedProto: 'X-Forwarded-Proto',
                    trueClientIp: 'True-Client-IP',
                    cfIpCountry: 'CF-IPCountry',
                    cfVisitor: 'CF-Visitor',
                    cdnLoop: 'CDN-Loop',
                },
                T = { nginxConfigDirectory: `${t.nginx} دایرکتوری پیکربندی`, mb: 'MB' },
                D = {
                    disableHtmlCaching: 'غیرفعال کردن حافظه‌پنهان HTML',
                    enableDisableHtmlCaching: 'غیرفعال کردن حافظه‌پنهان HTML',
                    gzipCompression: 'فشرده‌سازی Gzip',
                    enableGzipCompression: `${t.enable} فشرده‌سازی gzip`,
                    brotliCompression: 'فشرده‌سازی Brotli',
                    enableBrotliCompression: `${t.enable} فشرده‌سازی brotli`,
                    brotliIsANonStandardModule: 'Brotli یک ماژول استاندارد NGINX نیست، بررسی کنید ',
                    brotliGoogleNgxBrotliProject: 'پروژه Google ngx_brotli',
                    brotliForBuildingNginxWithBrotli: ' برای چگونگی ساخت NGINX با Brotli!',
                    expirationForAssets: 'انقضا برای دارایی‌ها',
                    expirationForMedia: 'انقضا برای رسانه‌ها',
                    expirationForSvgs: 'انقضا برای SVGها',
                    expirationForFonts: 'انقضا برای فونت‌ها',
                    performance: 'عملکرد',
                },
                k = {
                    pythonServer: `${t.python} سرور`,
                    pythonMustBeEnabledOnOneSite: `${t.python} باید حداقل بر روی یک سایت فعال شود تا تنظیمات ${t.python} جهانی را پیکربندی کنید.`,
                },
                N = 'Legacy X-Forwarded-* headers',
                I = {
                    reverseProxyMustBeEnabledOnOneSite: `${t.reverseProxy} باید حداقل بر روی یک سایت فعال شود تا تنظیمات ${t.reverseProxyLower} جهانی را پیکربندی کنید.`,
                    seconds: 'ثانیه',
                    passOn: `${N} منتقل شده`,
                    remove: `${N} به طور فعال حذف شده`,
                },
                O = {
                    whenUsingWordPressUnsafeEvalIsOftenRequiredToAllowFunctionality: `هنگام استفاده از ${t.wordPress}، <code class="slim">script-src 'self' 'unsafe-inline' 'unsafe-eval';</code> اغلب برای اجازه به پنل مدیریت برای عملکرد صحیح، در سیاست امنیتی محتوا مورد نیاز است.`,
                    security: 'امنیت',
                },
                w = {
                    modularizedStructure: 'ساختار ماژولار',
                    enableModularizedConfigFiles: `${t.enable} پرونده‌های پیکربندی ماژولار`,
                    symlinkVhost: 'سم‌لینک vhost',
                    enableSymLinksFrom: `${t.enable} سم‌لینک‌ها از`,
                    to: 'به',
                    shareConfiguration: 'اشتراک پیکربندی',
                    resetConfiguration: 'تنظیم مجدد پیکربندی',
                    resetGlobalConfig: 'تنظیم مجدد پیکربندی جهانی',
                    resetAllDomains: 'تنظیم مجدد تمامی دامنه‌ها',
                    removeAllDomains: 'حذف تمامی دامنه‌ها',
                    resetAllDomainsConfig: 'تنظیم مجدد پیکربندی تمامی دامنه‌ها',
                    resetDomainConfig: 'تنظیم مجدد پیکربندی دامنه',
                    removeDomain: 'حذف دامنه',
                    yesImSure: 'بله، مطمئنم',
                    noCancel: 'خیر، لغو',
                    tools: 'ابزارها',
                    resetGlobalConfigBody:
                        'آیا مطمئنید که می‌خواهید تمام گزینه‌های پیکربندی در بخش پیکربندی جهانی را دوباره تنظیم کنید؟',
                    resetAllDomainsConfigBody:
                        'آیا مطمئنید که می‌خواهید پیکربندی تمامی دامنه‌ها را دوباره تنظیم کنید؟',
                    removeAllDomainsBody:
                        'آیا مطمئنید که می‌خواهید تمامی پیکربندی‌های دامنه را حذف کنید؟',
                    areYouSureYouWantToResetAllConfigurationOptionsForThe:
                        'آیا مطمئنید که می‌خواهید تمام گزینه‌های پیکربندی برای',
                    domain: 'دامنه را دوباره تنظیم کنید؟',
                    areYouSureYouWantToRemoveThe: 'آیا مطمئنید که می‌خواهید',
                    domainConfiguration: 'پیکربندی دامنه را حذف کنید؟',
                },
                F = 'Docker',
                R = 'Dockerfile',
                B = {
                    docker: 'داکر',
                    dockerfile: 'فایل داکر',
                    dockerCompose: `${F} ترکیب کنید`,
                    applyDockerTweaks: `اعمال تغییرات ${F}`,
                    applyDockerTweaksForNginx: `اعمال تنظیمات پیکربندی برای اجرای ${t.nginx} با ${F}`,
                    applyDockerTweaksExplainer: `به‌روزرسانی کاربر ${t.nginx} به <code class="slim">nginx</code> و pid به <code class="slim">/var/run/nginx.pid</code>`,
                    includeDockerfile: `شامل ${R} برای اجرای ${t.nginx} با ${F}`,
                    includeDockerCompose: `شامل docker-compose برای اجرای ${t.nginx} با docker-compose`,
                },
                E = {
                    https: v,
                    logging: x,
                    nginx: T,
                    performance: D,
                    python: k,
                    reverseProxy: I,
                    security: O,
                    tools: w,
                    docker: B,
                },
                H = 'Certbot',
                A = {
                    commentOutSslDirectivesInConfiguration: `توضیحات ${t.ssl} مرتبط را در پیکربندی زیر نظر بگیرید:`,
                    sslOffDeprecationWarning: `این دستور یک دستور موقت <code class="slim">ssl off</code> اضافه خواهد کرد تا اطمینان حاصل شود که دستورات ${t.ssl} فعال نیستند. این ممکن است باعث ایجاد هشدار در ${t.nginx} شود که ایمن است نادیده گرفته شود. این دستور هنگامی که ${H} پیکربندی شود، حذف خواهد شد.`,
                    reloadYourNginxServer: `سرور ${t.nginx} خود را دوباره بارگذاری کنید:`,
                    obtainSslCertificatesFromLetsEncrypt: `گواهی‌نامه‌های ${t.ssl} را از ${t.letsEncrypt} با استفاده از ${H} بدست آورید:`,
                    uncommentSslDirectivesInConfiguration: `توضیحات ${t.ssl} مرتبط را در پیکربندی را بدون نظر بگذارید:`,
                    configureCertbotToReloadNginxOnCertificateRenewal: `پیکربندی ${H} برای دوباره بارگذاری ${t.nginx} هنگامی که گواهی‌نامه‌ها با موفقیت تمدید شوند:`,
                    certbotDoesNotNeedToBeSetupForYourConfiguration: `${H} نیازی به راه‌اندازی برای پیکربندی ${t.nginx} شما ندارد.`,
                    certbot: H,
                },
                L = {
                    downloadTheGeneratedConfig: '<b>دانلود</b> پیکربندی تولید شده:',
                    andUploadItToYourServers: 'و آن را به سرورهای خود <b>آپلود</b> کنید',
                    directory: 'دایرکتوری.',
                    or: 'یا، ',
                    copyBase64StringOfCompressedConfig:
                        'یک رشته base64 از پیکربندی فشرده را کپی کنید',
                    pasteItInYourServersCommandLineAndExecute:
                        ', آن را در خط فرمان سرور خود <b>پیست</b> کرده و اجرا کنید.',
                    navigateToYourNginxConfigurationDirectoryOnYourServer: `به <b>دایرکتوری پیکربندی ${t.nginx}</b> خود در سرورتان بروید:`,
                    createABackupOfYourCurrentNginxConfiguration: `<b>پشتیبانی</b> از پیکربندی ${t.nginx} فعلی خود بسازید:`,
                    extractTheNewCompressedConfigurationArchiveUsingTar:
                        '<b>فایل فشرده پیکربندی جدید را</b> با استفاده از tar <b>استخراج</b> کنید:',
                    download: 'دانلود',
                },
                M = {
                    letsGoLive: 'بیایید زنده شویم!',
                    reloadNginxToLoadInYourNewConfiguration: `${t.nginx} را بارگذاری کنید تا پیکربندی جدید شما بارگذاری شود:`,
                    goLive: 'زنده شوید!',
                },
                G = {
                    generateDiffieHellmanKeysByRunningThisCommandOnYourServer:
                        '<b>کلیدهای Diffie-Hellman</b> را با اجرای این دستور در سرور خود ایجاد کنید:',
                    createACommonAcmeChallengeDirectoryForLetsEncrypt: `یک دایرکتوری مشترک <b>ACME-challenge</b> (برای <b>${t.letsEncrypt}</b>) ایجاد کنید:`,
                    noAdditionalStepsAreNeededToSetUpSslForNginx: `برای پیکربندی ${t.nginx} شما نیازی به مراحل اضافی برای راه‌اندازی ${t.ssl} ندارید.`,
                    sslInit: `${t.ssl} init`,
                },
                W = { certbot: A, download: L, goLive: M, ssl: G },
                Y = {
                    lookingForAPlaceToDeploy:
                        '👋 به دنبال مکانی برای استقرار پیکربندی جدیدتان هستید؟',
                    tryOutDigitalOceansDroplet: 'امتحان کنید Droplet LEMP DigitalOcean با NGINX',
                },
                j = {
                    wantToContributeChanges:
                        '👋 می‌خواهید ویژگی‌های جدید را درخواست دهید، تغییراتی اعمال کنید، یا ابزار را به یک زبان جدید ترجمه کنید؟',
                    getInvolvedOnGitHub: 'شرکت کنید در GitHub',
                },
                z = { droplet: Y, contribute: j },
                X = {
                    app: i,
                    setup: l,
                    footer: a,
                    domainSections: C,
                    globalSections: E,
                    setupSections: W,
                    callouts: z,
                },
                V = { common: t, languages: r['default'], templates: X };
        },
    },
]);
