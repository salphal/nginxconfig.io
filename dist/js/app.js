(() => {
    var e = {
            4141: (e, t, o) => {
                var a = {
                    './de/languages.js': 9594,
                    './en/languages.js': 3862,
                    './es/languages.js': 1157,
                    './fa/languages.js': 788,
                    './fr/languages.js': 5149,
                    './ja/languages.js': 4184,
                    './pl/languages.js': 4545,
                    './pt-br/languages.js': 1046,
                    './ru/languages.js': 9068,
                    './zh-cn/languages.js': 6249,
                    './zh-tw/languages.js': 7469,
                };
                function s(e) {
                    return l(e).then(o);
                }
                function l(e) {
                    return Promise.resolve().then(() => {
                        if (!o.o(a, e)) {
                            var t = new Error("Cannot find module '" + e + "'");
                            throw ((t.code = 'MODULE_NOT_FOUND'), t);
                        }
                        return a[e];
                    });
                }
                (s.keys = () => Object.keys(a)), (s.resolve = l), (s.id = 4141), (e.exports = s);
            },
            8311: (e, t, o) => {
                var a = {
                    './de/index.js': [6619, 619],
                    './en/index.js': [1935],
                    './es/index.js': [9054, 673],
                    './fa/index.js': [5833, 833],
                    './fr/index.js': [726, 726],
                    './ja/index.js': [5589, 589],
                    './pl/index.js': [1202, 202],
                    './pt-br/index.js': [8671, 671],
                    './ru/index.js': [1937, 937],
                    './zh-cn/index.js': [346, 346],
                    './zh-tw/index.js': [4054, 54],
                };
                function s(e) {
                    if (!o.o(a, e))
                        return Promise.resolve().then(() => {
                            var t = new Error("Cannot find module '" + e + "'");
                            throw ((t.code = 'MODULE_NOT_FOUND'), t);
                        });
                    var t = a[e],
                        s = t[0];
                    return Promise.all(t.slice(1).map(o.e)).then(() => o(s));
                }
                (s.keys = () => Object.keys(a)), (s.id = 8311), (e.exports = s);
            },
            2634: () => {},
            8884: (e, t, o) => {
                'use strict';
                var a = o(4555);
                const s = document.currentScript.src.split('/').slice(0, -2).join('/') + '/';
                window.__webpackDynamicImportURL = () => (
                    (0, a.pq)(`Using ${s} for webpack dynamic import`), s
                );
            },
            9594: (e, t, o) => {
                'use strict';
                o.d(t, { default: () => a });
                const a = {
                    en: 'Englisch',
                    es: 'Spanisch',
                    zhCN: 'Chinesisch (vereinfacht)',
                    zhTW: 'Chinesisch (traditionell)',
                    ptBR: 'Portugiesisch (Brasilien)',
                    fr: 'Französisch',
                    ru: 'Russisch',
                    pl: 'Polnisch',
                    de: 'Deutsch',
                    ja: 'Japanisch',
                    fa: 'Persisch',
                };
            },
            1935: (e, t, o) => {
                'use strict';
                o.d(t, { default: () => N });
                const a = {
                    back: 'Back',
                    next: 'Next',
                    enable: 'enable',
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
                    logging: 'Logging',
                    reverseProxy: 'Reverse proxy',
                    reverseProxyLower: 'reverse proxy',
                    restrict: 'Restrict',
                    path: 'Path',
                };
                var s = o(3862);
                const l = {
                        title: `${a.nginx}Config`,
                        description: `The easiest way to configure a performant, secure, and stable ${a.nginx} server.`,
                        singleColumnMode: 'Single column mode',
                        splitColumnMode: 'Side-by-side mode',
                        perWebsiteConfig: 'Per-website config',
                        addSite: 'Add site',
                        globalConfig: 'Global config',
                        setup: 'Setup',
                        configFiles: 'Config files',
                        copied: 'Copied',
                    },
                    i = { downloadConfig: 'Download Config', copyBase64: 'Copy Base64' },
                    n = {
                        backToTop: 'Back To Top',
                        thisToolIs: 'This tool is',
                        openSourceOnGitHub: 'open-source on GitHub',
                        underThe: 'under the',
                        mit: 'MIT',
                        license: 'license!',
                        weWelcomeFeedbackAndContributions: 'We welcome feedback and contributions.',
                        originallyCreatedBy: 'Originally created by',
                        balintSzekeres: 'Bálint Szekeres',
                        maintainedBy: 'maintained by',
                        digitalOcean: 'DigitalOcean',
                    },
                    d = {
                        enableEncryptedSslConnection: `${a.enable} encrypted ${a.ssl} connections`,
                        http2: `${a.http}/2`,
                        enableHttp2Connections: `${a.enable} ${a.http}/2 connections`,
                        http3: `${a.http}/3`,
                        enableHttp3Connections: `${a.enable} ${a.http}/3 connections`,
                        forceHttps: `Force ${a.https}`,
                        hsts: 'HSTS',
                        enableStrictTransportSecurity: `${a.enable} Strict Transport Security, requiring HTTPS connections`,
                        enableIncludeSubDomains: `${a.enable} includeSubDomains directive, requiring HTTPS connections for ALL subdomains`,
                        enablePreload: `${a.enable} preload directive, telling browsers to always make HTTPS connections only`,
                        certificationType: 'Certification type',
                        customCertificate: 'Custom certificate',
                        letsEncryptEmail: `${a.letsEncrypt} email`,
                        http3IsANonStandardModule:
                            "HTTP/3 isn't a standard NGINX module, check the ",
                        http3NginxQuicReadme: 'NGINX QUIC readme',
                        http3OrThe: ' or the ',
                        http3CloudflareQuicheProject: 'Cloudflare quiche project',
                        http3ForBuildingNginxWithHttp3: ' for how to build NGINX with HTTP/3!',
                    },
                    r = {
                        byDomain: 'by domain',
                        enableForThisDomain: `${a.enable} for this domain`,
                        arguments: 'arguments',
                        level: 'logging level',
                        forRedirects: 'for redirects',
                    },
                    p = {
                        phpIsDisabled: `${a.php} is disabled.`,
                        phpCannotBeEnabledWithReverseProxy: `${a.php} cannot be enabled whilst the reverse proxy is enabled.`,
                        phpCannotBeEnabledWithPython: `${a.php} cannot be enabled whilst ${a.python} is enabled.`,
                        enablePhp: `${a.enable} ${a.php}`,
                        wordPressRules: `${a.wordPress} rules`,
                        enableWordPressRules: `${a.enable} ${a.wordPress}-specific rules`,
                        drupalRules: `${a.drupal} rules`,
                        enableDrupalRules: `${a.enable} ${a.drupal}-specific rules`,
                        magentoRules: `${a.magento} rules`,
                        enableMagentoRules: `${a.enable} ${a.magento}-specific rules`,
                        joomlaRules: `${a.joomla} rules`,
                        enableJoomlaRules: `${a.enable} ${a.joomla}-specific rules`,
                        phpServer: `${a.php} server`,
                        phpBackupServer: `${a.php} backup server`,
                        tcp: 'TCP',
                        hhvmSocket: 'HHVM socket',
                        php70Socket: '7.0 socket',
                        php71Socket: '7.1 socket',
                        php72Socket: '7.2 socket',
                        php73Socket: '7.3 socket',
                        php74Socket: '7.4 socket',
                        php80Socket: '8.0 socket',
                        php81Socket: '8.1 socket',
                        php82Socket: '8.2 socket',
                        phpSocket: 'PHP socket',
                        custom: 'Custom',
                        disabled: 'Disabled',
                    },
                    c = {
                        presets: 'Presets',
                        itLooksLikeYouCustomisedTheConfig:
                            "It looks like you've customised the configuration for this domain. Choosing a new preset may reset or change some of the settings that you've customised.",
                        frontend: 'Frontend',
                        nodeJs: 'Node.js',
                        singlePageApplication: 'Single-page application',
                    },
                    u = {
                        pythonIsDisabled: `${a.python} is disabled.`,
                        pythonCannotBeEnabledWithReverseProxy: `${a.python} cannot be enabled whilst the reverse proxy is enabled.`,
                        pythonCannotBeEnabledWithPhp: `${a.python} cannot be enabled whilst ${a.php} is enabled.`,
                        enablePython: `${a.enable} ${a.python}`,
                        djangoRules: `${a.django} rules`,
                        enableDjangoRules: `${a.enable} ${a.django}-specific rules`,
                    },
                    h = {
                        reverseProxyIsDisabled: `${a.reverseProxy} is disabled.`,
                        reverseProxyCannotBeEnabledWithPhp: `${a.reverseProxy} cannot be enabled whilst ${a.php} is enabled.`,
                        reverseProxyCannotBeEnabledWithPython: `${a.reverseProxy} cannot be enabled whilst ${a.python} is enabled.`,
                        enableReverseProxy: `${a.enable} ${a.reverseProxyLower}`,
                        proxyHostHeader: 'Proxy Host header',
                    },
                    m = {
                        fallbackRouting: 'Fallback routing',
                        fallbackRoutingPhpPath: `Fallback routing ${a.php} path`,
                        legacyPhpRouting: `Legacy ${a.php} routing`,
                        enableLegacyRouting: `${a.enable} legacy routing`,
                        routing: 'Routing',
                    },
                    g = {
                        domain: 'Domain',
                        documentRoot: 'Document root',
                        oneOrMoreOtherDomainsAreAlsoNamed:
                            'One or more other domains are also named',
                        thisWillCauseIssuesWithConfigGeneration:
                            'This will cause issues with config generation.',
                        wwwSubdomain: 'www subdomain',
                        cdnSubdomain: 'CDN subdomain',
                        redirectSubdomains: 'Redirect subdomains',
                        server: 'Server',
                        listen: 'listen',
                    },
                    f = {
                        disableForThisDomain: 'disable for this domain',
                        responseCode: 'Response code',
                    },
                    v = 'Onion',
                    b = {
                        onion: v,
                        onionLocation: `${v} location`,
                        provideAnOnionLocationToSetOnionLocationHeader:
                            'Provide an onion location address to set the Onion-Location header for your site.',
                        letsVisitorsKnownOnionServicesIsAvailable:
                            'This lets visitors know that an onion services version of your site is available for Tor browsers.',
                        learnMoreAboutOnionServices: 'Learn more about Onion services',
                        onionLocationExpectedToEndWithOnion:
                            'Onion location addresses normally end with `.onion`.',
                    },
                    k = {
                        https: d,
                        logging: r,
                        php: p,
                        presets: c,
                        python: u,
                        reverseProxy: h,
                        routing: m,
                        server: g,
                        restrict: f,
                        onion: b,
                    },
                    y = 'Mozilla',
                    $ = 'IPv4',
                    L = 'IPv6',
                    C = {
                        sslProfile: `${a.ssl} Profile`,
                        httpsMustBeEnabledOnOneSite: `${a.https} must be enabled on at least one site to configure global ${a.https} settings.`,
                        portReuse: 'Reuseport',
                        enableReuseOfPort: `${a.enable} reuseport to generate a listening socket per worker`,
                        ocspDnsResolvers: 'OCSP DNS Resolvers',
                        cloudflareResolver: 'Cloudflare Resolver',
                        googlePublicDns: 'Google Public DNS',
                        openDns: 'OpenDNS',
                        quad9: 'Quad9',
                        verisign: 'Verisign',
                        letsEncryptWebroot: `${a.letsEncrypt} webroot`,
                        letsEncryptCertRoot: `${a.letsEncrypt} certificate directory`,
                        mozillaModern: `${y} Modern`,
                        mozillaIntermediate: `${y} Intermediate`,
                        mozillaOld: `${y} Old`,
                        ipv4Only: `${$} only`,
                        ipv6Only: `${L} only`,
                        ipv4AndIpv6: `${$} & ${L}`,
                    },
                    x = {
                        enableFileNotFoundErrorLogging: `${a.enable} file not found error logging in`,
                        logformat: 'log_format',
                        level: 'logging level',
                        enableCloudflare:
                            'add Cloudflare request headers to the default log format',
                        cfRay: 'CF-Ray',
                        cfConnectingIp: 'CF-Connecting-IP',
                        xForwardedFor: 'X-Forwarded-For',
                        xForwardedProto: 'X-Forwarded-Proto',
                        trueClientIp: 'True-Client-IP',
                        cfIpCountry: 'CF-IPCountry',
                        cfVisitor: 'CF-Visitor',
                        cdnLoop: 'CDN-Loop',
                    },
                    S = { nginxConfigDirectory: `${a.nginx} config directory`, mb: 'MB' },
                    _ = {
                        disableHtmlCaching: 'Disable HTML caching',
                        enableDisableHtmlCaching: 'disable HTML caching',
                        gzipCompression: 'Gzip compression',
                        enableGzipCompression: `${a.enable} gzip compression`,
                        brotliCompression: 'Brotli compression',
                        enableBrotliCompression: `${a.enable} brotli compression`,
                        brotliIsANonStandardModule:
                            "Brotli isn't a standard NGINX module, check the ",
                        brotliGoogleNgxBrotliProject: 'Google ngx_brotli project',
                        brotliForBuildingNginxWithBrotli: ' for how to build NGINX with Brotli!',
                        expirationForAssets: 'Expiration for assets',
                        expirationForMedia: 'Expiration for media',
                        expirationForSvgs: 'Expiration for SVGs',
                        expirationForFonts: 'Expiration for fonts',
                        performance: 'Performance',
                    },
                    E = {
                        pythonServer: `${a.python} server`,
                        pythonMustBeEnabledOnOneSite: `${a.python} must be enabled on at least one site to configure global ${a.python} settings.`,
                    },
                    w = 'Legacy X-Forwarded-* headers',
                    P = {
                        reverseProxyMustBeEnabledOnOneSite: `${a.reverseProxy} must be enabled on at least one site to configure global ${a.reverseProxyLower} settings.`,
                        seconds: 'seconds',
                        passOn: `${w} passed on`,
                        remove: `${w} actively removed`,
                    },
                    T = {
                        whenUsingWordPressUnsafeEvalIsOftenRequiredToAllowFunctionality: `When using ${a.wordPress}, <code class="slim">script-src 'self' 'unsafe-inline' 'unsafe-eval';</code> is often required in the Content Security Policy to allow the admin panel to function correctly.`,
                        security: 'Security',
                    },
                    V = {
                        modularizedStructure: 'Modularized structure',
                        enableModularizedConfigFiles: `${a.enable} modularized config files`,
                        symlinkVhost: 'Symlink vhost',
                        enableSymLinksFrom: `${a.enable} symlinks from`,
                        to: 'to',
                        shareConfiguration: 'Share configuration',
                        resetConfiguration: 'Reset configuration',
                        resetGlobalConfig: 'Reset global config',
                        resetAllDomains: 'Reset all domains',
                        removeAllDomains: 'Remove all domains',
                        resetAllDomainsConfig: 'Reset all domain configs',
                        resetDomainConfig: 'Reset domain config',
                        removeDomain: 'Remove domain',
                        yesImSure: "Yes, I'm sure",
                        noCancel: 'No, cancel',
                        tools: 'Tools',
                        resetGlobalConfigBody:
                            'Are you sure you want to reset all configuration options in the global config section?',
                        resetAllDomainsConfigBody:
                            'Are you sure you want to reset the configuration of ALL domains?',
                        removeAllDomainsBody:
                            'Are you sure you want to remove ALL domain configurations?',
                        areYouSureYouWantToResetAllConfigurationOptionsForThe:
                            'Are you sure you want to reset all configuration options for the',
                        domain: 'domain?',
                        areYouSureYouWantToRemoveThe: 'Are you sure you want to remove the ',
                        domainConfiguration: 'domain configuration?',
                    },
                    R = 'Docker',
                    F = 'Dockerfile',
                    D = {
                        docker: R,
                        dockerfile: F,
                        dockerCompose: `${R} Compose`,
                        applyDockerTweaks: `Apply ${R} tweaks`,
                        applyDockerTweaksForNginx: `Apply configuration tweaks for running ${a.nginx} with ${R}`,
                        applyDockerTweaksExplainer: `Updates the ${a.nginx} user to be <code class="slim">nginx</code> and the pid to <code class="slim">/var/run/nginx.pid</code>`,
                        includeDockerfile: `Include ${F} to run ${a.nginx} with ${R}`,
                        includeDockerCompose: `Include docker-compose to run ${a.nginx} with docker-compose`,
                    },
                    A = {
                        https: C,
                        logging: x,
                        nginx: S,
                        performance: _,
                        python: E,
                        reverseProxy: P,
                        security: T,
                        tools: V,
                        docker: D,
                    },
                    O = 'Certbot',
                    z = {
                        commentOutSslDirectivesInConfiguration: `Comment out ${a.ssl} related directives in the configuration:`,
                        sslOffDeprecationWarning: `This command will add a temporary <code class="slim">ssl off</code> directive to ensure that ${a.ssl} directives are not active. This may cause ${a.nginx} to emit a warning, which is safe to ignore. The directive will be removed once ${O} is configured.`,
                        reloadYourNginxServer: `Reload your ${a.nginx} server:`,
                        obtainSslCertificatesFromLetsEncrypt: `Obtain ${a.ssl} certificates from ${a.letsEncrypt} using ${O}:`,
                        uncommentSslDirectivesInConfiguration: `Uncomment ${a.ssl} related directives in the configuration:`,
                        configureCertbotToReloadNginxOnCertificateRenewal: `Configure ${O} to reload ${a.nginx} when it successfully renews certificates:`,
                        certbotDoesNotNeedToBeSetupForYourConfiguration: `${O} does not need to be set up for your ${a.nginx} configuration.`,
                        certbot: O,
                    },
                    j = {
                        downloadTheGeneratedConfig: '<b>Download</b> the generated config:',
                        andUploadItToYourServers: "and <b>upload</b> it to your server's",
                        directory: 'directory.',
                        or: 'or, ',
                        copyBase64StringOfCompressedConfig:
                            'Copy a base64 string of the compressed config',
                        pasteItInYourServersCommandLineAndExecute:
                            ", paste it in your server's command line and execute it.",
                        navigateToYourNginxConfigurationDirectoryOnYourServer: `Navigate to your ${a.nginx} <b>configuration directory</b> on your server:`,
                        createABackupOfYourCurrentNginxConfiguration: `Create a <b>backup</b> of your current ${a.nginx} configuration:`,
                        extractTheNewCompressedConfigurationArchiveUsingTar:
                            '<b>Extract</b> the new compressed configuration archive using tar:',
                        download: 'Download',
                    },
                    H = {
                        letsGoLive: "Let's go live!",
                        reloadNginxToLoadInYourNewConfiguration: `Reload ${a.nginx} to load in your new configuration:`,
                        goLive: 'Go live!',
                    },
                    W = {
                        generateDiffieHellmanKeysByRunningThisCommandOnYourServer:
                            'Generate <b>Diffie-Hellman keys</b> by running this command on your server:',
                        createACommonAcmeChallengeDirectoryForLetsEncrypt: `Create a common <b>ACME-challenge</b> directory (for <b>${a.letsEncrypt}</b>):`,
                        noAdditionalStepsAreNeededToSetUpSslForNginx: `No additional steps are needed to set up ${a.ssl} for your ${a.nginx} configuration.`,
                        sslInit: `${a.ssl} init`,
                    },
                    X = { certbot: z, download: j, goLive: H, ssl: W },
                    I = {
                        lookingForAPlaceToDeploy:
                            '👋 Looking for a place to deploy your new configuration?',
                        tryOutDigitalOceansDroplet:
                            "Try out DigitalOcean's LEMP Droplet with NGINX",
                    },
                    M = {
                        wantToContributeChanges:
                            '👋 Want to request new features, contribute changes, or translate the tool into a new language?',
                        getInvolvedOnGitHub: 'Get involved on GitHub',
                    },
                    U = { droplet: I, contribute: M },
                    B = {
                        app: l,
                        setup: i,
                        footer: n,
                        domainSections: k,
                        globalSections: A,
                        setupSections: X,
                        callouts: U,
                    },
                    N = { common: a, languages: s['default'], templates: B };
            },
            3862: (e, t, o) => {
                'use strict';
                o.d(t, { default: () => a });
                const a = {
                    en: 'English',
                    es: 'Spanish',
                    zhCN: 'Chinese (simplified)',
                    zhTW: 'Chinese (traditional)',
                    ptBR: 'Portuguese (brazilian)',
                    fr: 'French',
                    ru: 'Russian',
                    pl: 'Polish',
                    de: 'German',
                    ja: 'Japanese',
                    fa: 'Persian',
                };
            },
            1157: (e, t, o) => {
                'use strict';
                o.d(t, { default: () => a });
                const a = {
                    en: 'Ingles',
                    es: 'Español',
                    zhCN: 'Chino (simplificado)',
                    zhTW: 'Chino (tradicional)',
                    ptBR: 'Portugués (brasileño)',
                    fr: 'Francés',
                    ru: 'Ruso',
                    pl: 'Polaco',
                    de: 'Alemán',
                    ja: 'Japonés',
                    fa: 'Persa',
                };
            },
            788: (e, t, o) => {
                'use strict';
                o.d(t, { default: () => a });
                const a = {
                    en: 'انگلیسی',
                    es: 'اسپانیایی',
                    zhCN: 'چینی (ساده شده)',
                    zhTW: 'چینی (سنتی)',
                    ptBR: 'پرتغالی (برزیلی)',
                    fr: 'فرانسوی',
                    ru: 'روسی',
                    pl: 'لهستانی',
                    de: 'آلمانی',
                    ja: 'ژاپنی',
                    fa: 'فارسی',
                };
            },
            5149: (e, t, o) => {
                'use strict';
                o.d(t, { default: () => a });
                const a = {
                    en: 'Anglais',
                    es: 'Espanol',
                    zhCN: 'Chinois (simplifié)',
                    zhTW: 'Chinois (traditionnel)',
                    ptBR: 'Portugais (brésilien)',
                    fr: 'Français',
                    ru: 'Russe',
                    pl: 'Polonais',
                    de: 'Allemand',
                    ja: 'Japonais',
                    fa: 'Persan',
                };
            },
            4184: (e, t, o) => {
                'use strict';
                o.d(t, { default: () => a });
                const a = {
                    en: '英語',
                    es: 'スペイン語',
                    zhCN: '中国語 (簡体字)',
                    zhTW: '中国語 (繁体字)',
                    ptBR: 'ポルトガル語 (ブラジル)',
                    fr: 'フランス語',
                    ru: 'ロシア語',
                    pl: 'ポーランド語',
                    de: 'ドイツ語',
                    ja: '日本語',
                    fa: 'ペルシア語',
                };
            },
            4545: (e, t, o) => {
                'use strict';
                o.d(t, { default: () => a });
                const a = {
                    en: 'Angielski',
                    es: 'Hiszpański',
                    zhCN: 'Chiński (uproszczony)',
                    zhTW: 'Chiński (tradycyjny)',
                    ptBR: 'Portugalski (brazylijski)',
                    fr: 'Francuski',
                    ru: 'Rosyjski',
                    pl: 'Polski',
                    de: 'Niemiecki',
                    ja: 'Japoński',
                    fa: 'Perski',
                };
            },
            1046: (e, t, o) => {
                'use strict';
                o.d(t, { default: () => a });
                const a = {
                    en: 'Inglês',
                    es: 'Espanhol',
                    zhCN: 'Chinês (simplificado)',
                    zhTW: 'Chinês (tradicional)',
                    ptBR: 'Português (brasileiro)',
                    fr: 'Francês',
                    ru: 'Russa',
                    pl: 'Polonês',
                    de: 'Alemão',
                    ja: 'Japonês',
                    fa: 'Persa',
                };
            },
            9068: (e, t, o) => {
                'use strict';
                o.d(t, { default: () => a });
                const a = {
                    en: 'Английский',
                    es: 'испанский',
                    zhCN: 'Китайский (упрощённый)',
                    zhTW: 'Китайский (традиционный)',
                    ptBR: 'Португальский (бразильский)',
                    fr: 'Французский',
                    ru: 'Русский',
                    pl: 'Польский',
                    de: 'Немецкий',
                    ja: 'Японский',
                    fa: 'Фарси',
                };
            },
            6249: (e, t, o) => {
                'use strict';
                o.d(t, { default: () => a });
                const a = {
                    en: '英语',
                    es: '西班牙语',
                    zhCN: '简体中文',
                    zhTW: '繁体中文',
                    ptBR: '葡萄牙语 (巴西)',
                    fr: '法语',
                    ru: '俄语',
                    pl: '波兰语',
                    de: '德语',
                    ja: '日语',
                    fa: '波斯语',
                };
            },
            7469: (e, t, o) => {
                'use strict';
                o.d(t, { default: () => a });
                const a = {
                    en: '英語',
                    es: '西班牙語',
                    zhCN: '簡體中文',
                    zhTW: '繁體中文',
                    ptBR: '葡萄牙語（巴西）',
                    fr: '法語',
                    ru: '俄語',
                    pl: '波蘭語',
                    de: '德語',
                    ja: '日語',
                    fa: '波斯語',
                };
            },
            9039: (e, t, o) => {
                'use strict';
                var a = o(3751),
                    s = o(7576),
                    l = o.n(s),
                    i = o(8848),
                    n = (o(9486), o(7022), o(4173), o(301), o(4555));
                const d = () => {
                    i.plugins.toolbar
                        ? i.plugins.toolbar.registerButton('copy-to-clipboard', (e) => {
                              const t = document.createElement('button');
                              t.textContent = 'Copy';
                              const o = e.element,
                                  a = new s(t, { text: () => o.textContent }),
                                  l = () => {
                                      setTimeout(() => {
                                          t.textContent = 'Copy';
                                      }, 5e3);
                                  },
                                  i = () => {
                                      t.dispatchEvent(
                                          new CustomEvent('copied', {
                                              bubbles: !0,
                                              detail: { text: o.textContent },
                                          }),
                                      );
                                  };
                              return (
                                  a.on('success', () => {
                                      (t.textContent = 'Copied!'), i(), l();
                                  }),
                                  a.on('error', () => {
                                      const e = navigator.platform.includes('Mac');
                                      (t.textContent = `Press ${e ? 'Cmd' : 'Ctrl'}+C to copy`),
                                          l();
                                  }),
                                  t
                              );
                          })
                        : (0, n.R8)('Copy to Clipboard loaded before Toolbar.');
                };
                d();
                var r = o(6992),
                    p = o(1935);
                const c = 'en',
                    u = (e, t) =>
                        e
                            .match(/^([a-z]+)([A-Z]*)$/)
                            .slice(1)
                            .map((e) => e.toLowerCase())
                            .filter((e) => !!e)
                            .join(t),
                    h = (e, t) =>
                        e.split(t, 2)[0].toLowerCase() + (e.split(t, 2)[1] || '').toUpperCase(),
                    m = Object.freeze([
                        'de',
                        'en',
                        'es',
                        'fr',
                        'ja',
                        'pl',
                        'ptBR',
                        'ru',
                        'zhCN',
                        'zhTW',
                        'fa',
                    ]),
                    g = {};
                g[c] = p['default'];
                const f = [c];
                let v = null;
                const b = async () => {
                        if (v) return v;
                        for (const e of m) {
                            if (e === c) continue;
                            if (g[e]) continue;
                            const { default: t } = await o(4141)(`./${u(e, '-')}/languages.js`);
                            g[e] = { languages: t };
                        }
                        return (v = (0, r.hU)({ locale: c, fallbackLocale: c, messages: g })), v;
                    },
                    k = async (e) => {
                        if (v.locale === e) return;
                        if (f.includes(e)) return;
                        const { default: t } = await o(8311)(`./${u(e, '-')}/index.js`);
                        g[e] = t;
                    },
                    y = async (e) => {
                        v && (await k(e), (v.global.locale = e));
                    };
                var $ = o(641),
                    L = o(33);
                const C = { class: 'all do-bulma' },
                    x = { class: 'has-icon' },
                    S = { key: 0, class: 'icon fas fa-spinner fa-pulse' },
                    _ = { key: 1, class: 'icon fas fa-language' },
                    E = { class: 'columns is-multiline' },
                    w = { class: 'tabs' },
                    P = ['onClick'],
                    T = { key: 0, class: 'fas fa-exclamation-triangle' },
                    V = ['onClick'],
                    R = (0, $.Lk)('i', { class: 'fas fa-times' }, null, -1),
                    F = [R],
                    D = (0, $.Lk)('i', { class: 'fas fa-plus' }, null, -1),
                    A = { ref: 'files', class: 'columns is-multiline files' };
                function O(e, t, o, a, s, l) {
                    const i = (0, $.g2)('VueSelect'),
                        n = (0, $.g2)('Header'),
                        d = (0, $.g2)('Domain'),
                        r = (0, $.g2)('Global'),
                        p = (0, $.g2)('DropletCallout'),
                        c = (0, $.g2)('Setup'),
                        u = (0, $.g2)('Footer'),
                        h = (0, $.g2)('ContributeCallout');
                    return (
                        (0, $.uX)(),
                        (0, $.CE)('div', C, [
                            (0, $.bF)(
                                n,
                                { title: e.$t('templates.app.title') },
                                {
                                    description: (0, $.k6)(() => [
                                        (0, $.eW)((0, L.v_)(e.$t('templates.app.description')), 1),
                                    ]),
                                    header: (0, $.k6)(() => []),
                                    buttons: (0, $.k6)(() => [
                                        (0, $.bF)(
                                            i,
                                            {
                                                modelValue: l.lang,
                                                'onUpdate:modelValue':
                                                    t[0] || (t[0] = (e) => (l.lang = e)),
                                                options: l.i18nPacks,
                                                clearable: !1,
                                                reduce: (e) => e.value,
                                                disabled: s.languageLoading,
                                            },
                                            {
                                                'selected-option': (0, $.k6)(({ label: e }) => [
                                                    (0, $.Lk)('span', x, [
                                                        s.languageLoading
                                                            ? ((0, $.uX)(), (0, $.CE)('i', S))
                                                            : ((0, $.uX)(), (0, $.CE)('i', _)),
                                                        (0, $.Lk)('span', null, (0, L.v_)(e), 1),
                                                    ]),
                                                ]),
                                                _: 1,
                                            },
                                            8,
                                            ['modelValue', 'options', 'reduce', 'disabled'],
                                        ),
                                        s.splitColumn
                                            ? ((0, $.uX)(),
                                              (0, $.CE)(
                                                  'a',
                                                  {
                                                      key: 0,
                                                      class: 'button is-primary is-outline is-hidden-touch',
                                                      onClick:
                                                          t[1] ||
                                                          (t[1] = (...e) =>
                                                              l.splitColumnToggle &&
                                                              l.splitColumnToggle(...e)),
                                                  },
                                                  (0, L.v_)(e.$t('templates.app.singleColumnMode')),
                                                  1,
                                              ))
                                            : ((0, $.uX)(),
                                              (0, $.CE)(
                                                  'a',
                                                  {
                                                      key: 1,
                                                      class: 'button is-primary is-hidden-touch',
                                                      onClick:
                                                          t[2] ||
                                                          (t[2] = (...e) =>
                                                              l.splitColumnToggle &&
                                                              l.splitColumnToggle(...e)),
                                                  },
                                                  (0, L.v_)(e.$t('templates.app.splitColumnMode')),
                                                  1,
                                              )),
                                    ]),
                                    _: 1,
                                },
                                8,
                                ['title'],
                            ),
                            (0, $.Lk)(
                                'div',
                                {
                                    class: 'main container',
                                    style: (0, L.Tr)({ display: s.ready ? void 0 : 'none' }),
                                },
                                [
                                    (0, $.Lk)('div', E, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    `column ${s.splitColumn ? 'is-half column-scroll-y' : 'is-full'} is-full-touch`,
                                                ),
                                            },
                                            [
                                                (0, $.Lk)(
                                                    'h2',
                                                    null,
                                                    (0, L.v_)(
                                                        e.$t('templates.app.perWebsiteConfig'),
                                                    ),
                                                    1,
                                                ),
                                                (0, $.Lk)('div', w, [
                                                    (0, $.Lk)('ul', null, [
                                                        ((0, $.uX)(!0),
                                                        (0, $.CE)(
                                                            $.FK,
                                                            null,
                                                            (0, $.pI)(
                                                                l.activeDomains,
                                                                (e) => (
                                                                    (0, $.uX)(),
                                                                    (0, $.CE)(
                                                                        'li',
                                                                        {
                                                                            class: (0, L.C4)(
                                                                                e[1] === s.active
                                                                                    ? 'is-active'
                                                                                    : void 0,
                                                                            ),
                                                                        },
                                                                        [
                                                                            (0, $.Lk)(
                                                                                'a',
                                                                                {
                                                                                    class: 'domain',
                                                                                    onClick: (t) =>
                                                                                        (s.active =
                                                                                            e[1]),
                                                                                },
                                                                                [
                                                                                    (0, $.eW)(
                                                                                        (0, L.v_)(
                                                                                            e[0]
                                                                                                .server
                                                                                                .domain
                                                                                                .computed,
                                                                                        ) +
                                                                                            (0,
                                                                                            L.v_)(
                                                                                                l.changes(
                                                                                                    e[1],
                                                                                                ),
                                                                                            ) +
                                                                                            ' ',
                                                                                        1,
                                                                                    ),
                                                                                    l.warnings(e[1])
                                                                                        ? ((0,
                                                                                          $.uX)(),
                                                                                          (0, $.CE)(
                                                                                              'i',
                                                                                              T,
                                                                                          ))
                                                                                        : (0, $.Q3)(
                                                                                              '',
                                                                                              !0,
                                                                                          ),
                                                                                ],
                                                                                8,
                                                                                P,
                                                                            ),
                                                                            (0, $.Lk)(
                                                                                'a',
                                                                                {
                                                                                    class: 'remove',
                                                                                    onClick: (t) =>
                                                                                        l.remove(
                                                                                            e[1],
                                                                                        ),
                                                                                },
                                                                                F,
                                                                                8,
                                                                                V,
                                                                            ),
                                                                        ],
                                                                        2,
                                                                    )
                                                                ),
                                                            ),
                                                            256,
                                                        )),
                                                        (0, $.Lk)('li', null, [
                                                            (0, $.Lk)(
                                                                'a',
                                                                {
                                                                    onClick:
                                                                        t[3] ||
                                                                        (t[3] = (...e) =>
                                                                            l.add && l.add(...e)),
                                                                },
                                                                [
                                                                    D,
                                                                    (0, $.eW)(
                                                                        ' ' +
                                                                            (0, L.v_)(
                                                                                e.$t(
                                                                                    'templates.app.addSite',
                                                                                ),
                                                                            ),
                                                                        1,
                                                                    ),
                                                                ],
                                                            ),
                                                        ]),
                                                    ]),
                                                ]),
                                                ((0, $.uX)(!0),
                                                (0, $.CE)(
                                                    $.FK,
                                                    null,
                                                    (0, $.pI)(
                                                        l.activeDomains,
                                                        (e) => (
                                                            (0, $.uX)(),
                                                            (0, $.Wv)(
                                                                d,
                                                                {
                                                                    key: e[1],
                                                                    ref_for: !0,
                                                                    ref: `domain-${e[1]}`,
                                                                    data: e[0],
                                                                    style: (0, L.Tr)({
                                                                        display:
                                                                            e[1] === s.active
                                                                                ? void 0
                                                                                : 'none',
                                                                    }),
                                                                },
                                                                null,
                                                                8,
                                                                ['data', 'style'],
                                                            )
                                                        ),
                                                    ),
                                                    128,
                                                )),
                                                (0, $.Lk)(
                                                    'h2',
                                                    null,
                                                    (0, L.v_)(e.$t('templates.app.globalConfig')),
                                                    1,
                                                ),
                                                (0, $.bF)(r, { data: s.global }, null, 8, ['data']),
                                                (0, $.bF)(p),
                                                (0, $.Lk)(
                                                    'h2',
                                                    null,
                                                    (0, L.v_)(e.$t('templates.app.setup')),
                                                    1,
                                                ),
                                                (0, $.bF)(
                                                    c,
                                                    {
                                                        data: {
                                                            domains: s.domains.filter(
                                                                (e) => null !== e,
                                                            ),
                                                            global: s.global,
                                                            confFiles: l.confFiles,
                                                        },
                                                    },
                                                    null,
                                                    8,
                                                    ['data'],
                                                ),
                                            ],
                                            2,
                                        ),
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    `column ${s.splitColumn ? 'is-half column-scroll-y' : 'is-full'} is-full-touch`,
                                                ),
                                            },
                                            [
                                                (0, $.Lk)(
                                                    'h2',
                                                    null,
                                                    (0, L.v_)(e.$t('templates.app.configFiles')),
                                                    1,
                                                ),
                                                (0, $.Lk)(
                                                    'div',
                                                    A,
                                                    [
                                                        ((0, $.uX)(!0),
                                                        (0, $.CE)(
                                                            $.FK,
                                                            null,
                                                            (0, $.pI)(
                                                                s.confFilesOutput,
                                                                (e) => (
                                                                    (0, $.uX)(),
                                                                    (0, $.Wv)(
                                                                        (0, $.$y)(
                                                                            l.getPrismComponent(
                                                                                e[0],
                                                                            ),
                                                                        ),
                                                                        {
                                                                            key: e[2],
                                                                            name: e[0],
                                                                            conf: e[1],
                                                                            half:
                                                                                Object.keys(
                                                                                    s.confFilesOutput,
                                                                                ).length > 1 &&
                                                                                !s.splitColumn,
                                                                            onCopied: (t) =>
                                                                                l.codeCopiedEvent(
                                                                                    e[3],
                                                                                ),
                                                                        },
                                                                        null,
                                                                        40,
                                                                        [
                                                                            'name',
                                                                            'conf',
                                                                            'half',
                                                                            'onCopied',
                                                                        ],
                                                                    )
                                                                ),
                                                            ),
                                                            128,
                                                        )),
                                                    ],
                                                    512,
                                                ),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ],
                                4,
                            ),
                            (0, $.bF)(u),
                            (0, $.bF)(h),
                        ])
                    );
                }
                var z = o(1779),
                    j = o.n(z),
                    H = o(6220),
                    W = o.n(H),
                    X = o(580),
                    I = o.n(X),
                    M = o(8936),
                    U = o(4857),
                    B = o(5146);
                const N = (e, t, o) =>
                    (e.enabled && e.value !== e.default) ||
                    ('php' === t && 'php' === o && e.computed !== e.default);
                var Q = o(5373);
                const G = { class: 'panel presets' },
                    J = { class: 'panel' },
                    K = { class: 'tabs' },
                    q = ['onClick'],
                    Y = { key: 0, class: 'fas fa-exclamation-triangle' },
                    Z = { class: 'navigation-buttons' },
                    ee = (0, $.Lk)('i', { class: 'fas fa-long-arrow-alt-left' }, null, -1),
                    te = (0, $.Lk)('i', { class: 'fas fa-long-arrow-alt-right' }, null, -1);
                function oe(e, t, o, a, s, l) {
                    const i = (0, $.g2)('Presets');
                    return (
                        (0, $.uX)(),
                        (0, $.CE)('div', null, [
                            (0, $.Lk)('div', G, [
                                (0, $.bF)(i, { data: e.$props.data.presets }, null, 8, ['data']),
                            ]),
                            (0, $.Lk)('div', J, [
                                (0, $.Lk)('div', K, [
                                    (0, $.Lk)('ul', null, [
                                        ((0, $.uX)(!0),
                                        (0, $.CE)(
                                            $.FK,
                                            null,
                                            (0, $.pI)(
                                                s.tabs,
                                                (t) => (
                                                    (0, $.uX)(),
                                                    (0, $.CE)(
                                                        'li',
                                                        { class: (0, L.C4)(l.tabClass(t.key)) },
                                                        [
                                                            (0, $.Lk)(
                                                                'a',
                                                                {
                                                                    onClick: (e) =>
                                                                        l.showTab(t.key),
                                                                },
                                                                [
                                                                    (0, $.eW)(
                                                                        (0, L.v_)(e.$t(t.display)) +
                                                                            (0, L.v_)(
                                                                                l.changes(t.key),
                                                                            ) +
                                                                            ' ',
                                                                        1,
                                                                    ),
                                                                    l.warnings(t.key)
                                                                        ? ((0, $.uX)(),
                                                                          (0, $.CE)('i', Y))
                                                                        : (0, $.Q3)('', !0),
                                                                ],
                                                                8,
                                                                q,
                                                            ),
                                                        ],
                                                        2,
                                                    )
                                                ),
                                            ),
                                            256,
                                        )),
                                    ]),
                                ]),
                                ((0, $.uX)(!0),
                                (0, $.CE)(
                                    $.FK,
                                    null,
                                    (0, $.pI)(
                                        s.tabs,
                                        (t) => (
                                            (0, $.uX)(),
                                            (0, $.Wv)(
                                                (0, $.$y)(t),
                                                {
                                                    key: t.key,
                                                    ref_for: !0,
                                                    ref: t.key,
                                                    data: e.$props.data[t.key],
                                                    style: (0, L.Tr)({
                                                        display:
                                                            s.active === t.key ? void 0 : 'none',
                                                    }),
                                                    class: 'container',
                                                },
                                                null,
                                                8,
                                                ['data', 'style'],
                                            )
                                        ),
                                    ),
                                    128,
                                )),
                                (0, $.Lk)('div', Z, [
                                    !1 !== l.previousTab
                                        ? ((0, $.uX)(),
                                          (0, $.CE)(
                                              'a',
                                              {
                                                  key: 0,
                                                  class: 'button is-mini',
                                                  onClick:
                                                      t[0] ||
                                                      (t[0] = (...e) =>
                                                          l.showPreviousTab &&
                                                          l.showPreviousTab(...e)),
                                              },
                                              [
                                                  ee,
                                                  (0, $.Lk)(
                                                      'span',
                                                      null,
                                                      (0, L.v_)(e.$t('common.back')),
                                                      1,
                                                  ),
                                              ],
                                          ))
                                        : (0, $.Q3)('', !0),
                                    !1 !== l.nextTab
                                        ? ((0, $.uX)(),
                                          (0, $.CE)(
                                              'a',
                                              {
                                                  key: 1,
                                                  class: 'button is-primary is-mini',
                                                  onClick:
                                                      t[1] ||
                                                      (t[1] = (...e) =>
                                                          l.showNextTab && l.showNextTab(...e)),
                                              },
                                              [
                                                  (0, $.Lk)(
                                                      'span',
                                                      null,
                                                      (0, L.v_)(e.$t('common.next')),
                                                      1,
                                                  ),
                                                  te,
                                              ],
                                          ))
                                        : (0, $.Q3)('', !0),
                                ]),
                            ]),
                        ])
                    );
                }
                const ae = ({ category: e, action: t, label: o, value: a, nonInteraction: s }) => {
                        (0, n.pq)('Analytics event:', {
                            category: e,
                            action: t,
                            label: o,
                            value: a,
                            nonInteraction: s,
                        });
                        try {
                            (window.dataLayer = window.dataLayer || []),
                                window.dataLayer.push({
                                    event: 'nginx_tool',
                                    category: e,
                                    action: t,
                                    label: o,
                                    value: a,
                                    nonInteraction: s,
                                });
                        } catch (l) {}
                        try {
                            window.analytics.track('Web Interaction', {
                                category: e,
                                action: t,
                                label: o,
                                value: a,
                                nonInteraction: s,
                            });
                        } catch (l) {}
                    },
                    se = { class: 'container' },
                    le = { key: 0, class: 'button is-tiny' },
                    ie = { key: 0, class: 'message is-warning' },
                    ne = { class: 'message-body' },
                    de = { class: 'buttons-group' },
                    re = ['onClick'];
                function pe(e, t, o, a, s, l) {
                    return (
                        (0, $.uX)(),
                        (0, $.CE)('div', se, [
                            (0, $.Lk)(
                                'div',
                                {
                                    class: 'header-group',
                                    style: (0, L.Tr)({ cursor: l.interacted ? 'pointer' : void 0 }),
                                    onClick:
                                        t[0] ||
                                        (t[0] = (...e) =>
                                            l.toggleCollapse && l.toggleCollapse(...e)),
                                },
                                [
                                    (0, $.Lk)(
                                        'h3',
                                        null,
                                        (0, L.v_)(e.$t('templates.domainSections.presets.presets')),
                                        1,
                                    ),
                                    l.interacted
                                        ? ((0, $.uX)(),
                                          (0, $.CE)('a', le, [
                                              (0, $.Lk)(
                                                  'i',
                                                  {
                                                      class: (0, L.C4)(
                                                          'fas fa-angle-' +
                                                              (s.expanded ? 'up' : 'down'),
                                                      ),
                                                  },
                                                  null,
                                                  2,
                                              ),
                                          ]))
                                        : (0, $.Q3)('', !0),
                                ],
                                4,
                            ),
                            !e.$parent.$props.data.hasUserInteraction || s.expanded
                                ? ((0, $.uX)(),
                                  (0, $.CE)(
                                      $.FK,
                                      { key: 0 },
                                      [
                                          e.$parent.$props.data.hasUserInteraction
                                              ? ((0, $.uX)(),
                                                (0, $.CE)('div', ie, [
                                                    (0, $.Lk)(
                                                        'p',
                                                        ne,
                                                        (0, L.v_)(
                                                            e.$t(
                                                                'templates.domainSections.presets.itLooksLikeYouCustomisedTheConfig',
                                                            ),
                                                        ),
                                                        1,
                                                    ),
                                                ]))
                                              : (0, $.Q3)('', !0),
                                          (0, $.Lk)('div', de, [
                                              ((0, $.uX)(!0),
                                              (0, $.CE)(
                                                  $.FK,
                                                  null,
                                                  (0, $.pI)(
                                                      e.$props.data,
                                                      (t, o) => (
                                                          (0, $.uX)(),
                                                          (0, $.CE)(
                                                              'a',
                                                              {
                                                                  class: (0, L.C4)(
                                                                      'button' +
                                                                          (t.computed
                                                                              ? ' is-primary'
                                                                              : ''),
                                                                  ),
                                                                  onClick: (e) => l.setPreset(o),
                                                              },
                                                              (0, L.v_)(e.$t(t.display)),
                                                              11,
                                                              re,
                                                          )
                                                      ),
                                                  ),
                                                  256,
                                              )),
                                          ]),
                                      ],
                                      64,
                                  ))
                                : (0, $.Q3)('', !0),
                        ])
                    );
                }
                const ce = (e) =>
                        Object.keys(e).reduce(
                            (t, o) => (
                                (t[o] = { value: e[o].default, computed: e[o].default, ...e[o] }), t
                            ),
                            {},
                        ),
                    ue = (e, t, o = !0) =>
                        Object.keys(e).reduce(
                            (e, a) => (
                                (e[a] = {
                                    get() {
                                        return this.$props.data[a].value;
                                    },
                                    set(e) {
                                        o &&
                                            this.$parent &&
                                            'data' in this.$parent.$props &&
                                            'hasUserInteraction' in this.$parent.$props.data &&
                                            !this.$parent.$props.data.hasUserInteraction &&
                                            this.$props.data[a].value !== e &&
                                            (this.$parent.$props.data.hasUserInteraction = !0),
                                            (this.$props.data[a].value = e),
                                            (this.$props.data[a].computed = e);
                                    },
                                }),
                                (e[a + 'Default'] = {
                                    get() {
                                        return this.$props.data[a].default;
                                    },
                                }),
                                (e[a + 'Enabled'] = {
                                    get() {
                                        return this.$props.data[a].enabled;
                                    },
                                }),
                                (e[a + 'Changed'] = {
                                    get() {
                                        return N(this.$props.data[a], t, a);
                                    },
                                }),
                                e
                            ),
                            {},
                        ),
                    he = {
                        frontend: {
                            default: !1,
                            display: 'templates.domainSections.presets.frontend',
                            enabled: !0,
                            computedCheck(e) {
                                return (
                                    !e.php.php.computed &&
                                    !e.python.python.computed &&
                                    !e.reverseProxy.reverseProxy.computed &&
                                    'index.html' === e.routing.index.computed &&
                                    e.routing.fallbackHtml.computed
                                );
                            },
                        },
                        php: {
                            default: !0,
                            display: 'common.php',
                            enabled: !0,
                            computedCheck(e) {
                                return (
                                    e.php.php.computed &&
                                    'index.php' === e.routing.index.computed &&
                                    e.routing.fallbackPhp.computed &&
                                    !e.routing.fallbackHtml.computed &&
                                    !e.php.wordPressRules.computed &&
                                    !e.php.drupalRules.computed &&
                                    !e.php.magentoRules.computed &&
                                    !e.php.joomlaRules.computed
                                );
                            },
                        },
                        django: {
                            default: !1,
                            display: 'common.django',
                            enabled: !0,
                            computedCheck(e) {
                                return (
                                    e.python.python.computed &&
                                    e.python.djangoRules.computed &&
                                    !e.routing.root.computed
                                );
                            },
                        },
                        nodejs: {
                            default: !1,
                            display: 'templates.domainSections.presets.nodeJs',
                            enabled: !0,
                            computedCheck(e) {
                                return (
                                    e.reverseProxy.reverseProxy.computed && !e.routing.root.computed
                                );
                            },
                        },
                        singlePageApplication: {
                            default: !1,
                            display: 'templates.domainSections.presets.singlePageApplication',
                            enabled: !0,
                            computedCheck(e) {
                                return (
                                    e.php.php.computed &&
                                    'index.html' === e.routing.index.computed &&
                                    e.routing.fallbackHtml.computed
                                );
                            },
                        },
                        wordPress: {
                            default: !1,
                            display: 'common.wordPress',
                            enabled: !0,
                            computedCheck(e) {
                                return (
                                    'index.php' === e.routing.index.computed &&
                                    e.routing.fallbackPhp.computed &&
                                    !e.routing.fallbackHtml.computed &&
                                    e.php.wordPressRules.computed &&
                                    !e.php.drupalRules.computed &&
                                    !e.php.magentoRules.computed &&
                                    !e.php.joomlaRules.computed
                                );
                            },
                        },
                        drupal: {
                            default: !1,
                            display: 'common.drupal',
                            enabled: !0,
                            computedCheck(e) {
                                return (
                                    'index.php' === e.routing.index.computed &&
                                    e.routing.fallbackPhp.computed &&
                                    !e.routing.fallbackHtml.computed &&
                                    !e.php.wordPressRules.computed &&
                                    e.php.drupalRules.computed &&
                                    !e.php.magentoRules.computed &&
                                    !e.php.joomlaRules.computed
                                );
                            },
                        },
                        magento: {
                            default: !1,
                            display: 'common.magento',
                            enabled: !0,
                            computedCheck(e) {
                                return (
                                    'index.php' === e.routing.index.computed &&
                                    e.routing.fallbackPhp.computed &&
                                    !e.routing.fallbackHtml.computed &&
                                    !e.php.wordPressRules.computed &&
                                    !e.php.drupalRules.computed &&
                                    e.php.magentoRules.computed &&
                                    !e.php.joomlaRules.computed
                                );
                            },
                        },
                        joomla: {
                            default: !1,
                            display: 'common.joomla',
                            enabled: !0,
                            computedCheck(e) {
                                return (
                                    'index.php' === e.routing.index.computed &&
                                    e.routing.fallbackPhp.computed &&
                                    !e.routing.fallbackHtml.computed &&
                                    !e.php.wordPressRules.computed &&
                                    !e.php.drupalRules.computed &&
                                    !e.php.magentoRules.computed &&
                                    e.php.joomlaRules.computed
                                );
                            },
                        },
                    },
                    me = {
                        name: 'DomainPresets',
                        display: 'templates.domainSections.presets.presets',
                        key: 'presets',
                        delegated: ce(he),
                        props: { data: Object },
                        data() {
                            return { expanded: !1 };
                        },
                        computed: {
                            ...ue(he, 'presets', !1),
                            interacted() {
                                return this.$parent.$props.data.hasUserInteraction;
                            },
                        },
                        watch: {
                            '$parent.$props.data': {
                                handler(e) {
                                    Object.keys(this.$props.data).forEach((t) => {
                                        this.$props.data[t].computed =
                                            this.$props.data[t].computedCheck(e);
                                    });
                                },
                                deep: !0,
                            },
                        },
                        methods: {
                            setPreset(e) {
                                switch (
                                    (Object.keys(this.$props.data).forEach(
                                        (t) => (this[t] = t === e),
                                    ),
                                    this.presetEvent(e, this.interacted),
                                    this.$parent.resetValue('server', 'domain'),
                                    this.$parent.resetValue('php', 'php'),
                                    this.$parent.resetValue('php', 'wordPressRules'),
                                    this.$parent.resetValue('php', 'drupalRules'),
                                    this.$parent.resetValue('php', 'magentoRules'),
                                    this.$parent.resetValue('php', 'joomlaRules'),
                                    this.$parent.resetValue('python', 'python'),
                                    this.$parent.resetValue('python', 'djangoRules'),
                                    this.$parent.resetValue('reverseProxy', 'reverseProxy'),
                                    this.$parent.resetValue('routing', 'root'),
                                    this.$parent.resetValue('routing', 'index'),
                                    this.$parent.resetValue('routing', 'fallbackHtml'),
                                    this.$parent.resetValue('routing', 'fallbackPhp'),
                                    e)
                                ) {
                                    case 'frontend':
                                        this.$parent.setValue('php', 'php', !1),
                                            this.$parent.setValue('routing', 'index', 'index.html'),
                                            this.$parent.setValue('routing', 'fallbackHtml', !0);
                                        break;
                                    case 'php':
                                        break;
                                    case 'django':
                                        this.$parent.setValue('php', 'php', !1),
                                            this.$parent.setValue('python', 'python', !0),
                                            this.$parent.setValue('python', 'djangoRules', !0),
                                            this.$parent.setValue('routing', 'root', !1);
                                        break;
                                    case 'nodejs':
                                        this.$parent.setValue('php', 'php', !1),
                                            this.$parent.setValue(
                                                'reverseProxy',
                                                'reverseProxy',
                                                !0,
                                            ),
                                            this.$parent.setValue('routing', 'root', !1);
                                        break;
                                    case 'singlePageApplication':
                                        this.$parent.setValue('routing', 'index', 'index.html'),
                                            this.$parent.setValue('routing', 'fallbackHtml', !0);
                                        break;
                                    case 'wordPress':
                                        this.$parent.setValue('php', 'wordPressRules', !0);
                                        break;
                                    case 'drupal':
                                        this.$parent.setValue('php', 'drupalRules', !0);
                                        break;
                                    case 'magento':
                                        this.$parent.setValue('php', 'magentoRules', !0);
                                        break;
                                    case 'joomla':
                                        this.$parent.setValue('php', 'joomlaRules', !0);
                                        break;
                                }
                            },
                            presetEvent(e, t = !1) {
                                ae({
                                    category: 'Preset',
                                    action: t ? 'Overwritten' : 'Applied',
                                    label: e,
                                });
                            },
                            toggleCollapse() {
                                this.interacted && (this.expanded = !this.expanded);
                            },
                        },
                    };
                var ge = o(6262);
                const fe = (0, ge.A)(me, [['render', pe]]),
                    ve = fe,
                    be = { class: 'field-row' },
                    ke = { class: 'field' },
                    ye = { class: 'label' },
                    $e = ['placeholder'],
                    Le = { class: 'field' },
                    Ce = { class: 'label' },
                    xe = ['placeholder'],
                    Se = { class: 'field' },
                    _e = { class: 'label' },
                    Ee = ['placeholder'],
                    we = { key: 0, class: 'field' },
                    Pe = { class: 'control' },
                    Te = { class: 'text message is-warning' },
                    Ve = { class: 'message-body' },
                    Re = { class: 'slim' },
                    Fe = { class: 'field is-horizontal' },
                    De = { class: 'field-label' },
                    Ae = { class: 'label' },
                    Oe = { class: 'field-body' },
                    ze = { class: 'field' },
                    je = { class: 'checkbox' },
                    He = { key: 1, class: 'field is-horizontal' },
                    We = { class: 'field-label' },
                    Xe = { class: 'label' },
                    Ie = { class: 'field-body' },
                    Me = { class: 'field' },
                    Ue = { class: 'checkbox' },
                    Be = { class: 'field is-horizontal' },
                    Ne = { class: 'field-label' },
                    Qe = { class: 'label' },
                    Ge = { class: 'field-body' },
                    Je = { class: 'field' },
                    Ke = { class: 'checkbox' },
                    qe = (0, $.Lk)('i', { class: 'fas fa-long-arrow-alt-right' }, null, -1),
                    Ye = { class: 'field is-horizontal' },
                    Ze = { class: 'field-label' },
                    et = { class: 'label' },
                    tt = { class: 'field-body' },
                    ot = { class: 'field has-addons' },
                    at = (0, $.Lk)(
                        'div',
                        { class: 'control' },
                        [(0, $.Lk)('a', { class: 'button is-static' }, 'IPv4')],
                        -1,
                    ),
                    st = ['placeholder'],
                    lt = { class: 'field has-addons' },
                    it = (0, $.Lk)(
                        'div',
                        { class: 'control' },
                        [(0, $.Lk)('a', { class: 'button is-static' }, 'IPv6')],
                        -1,
                    ),
                    nt = ['placeholder'];
                function dt(e, t, o, s, l, i) {
                    const n = (0, $.g2)('PrettyCheck');
                    return (
                        (0, $.uX)(),
                        (0, $.CE)('div', null, [
                            (0, $.Lk)('div', be, [
                                (0, $.Lk)('div', ke, [
                                    (0, $.Lk)(
                                        'label',
                                        ye,
                                        (0, L.v_)(e.$t('templates.domainSections.server.domain')),
                                        1,
                                    ),
                                    (0, $.Lk)(
                                        'div',
                                        {
                                            class: (0, L.C4)(
                                                'control' + (e.domainChanged ? ' is-changed' : ''),
                                            ),
                                        },
                                        [
                                            (0, $.bo)(
                                                (0, $.Lk)(
                                                    'input',
                                                    {
                                                        'onUpdate:modelValue':
                                                            t[0] || (t[0] = (t) => (e.domain = t)),
                                                        class: 'input',
                                                        type: 'text',
                                                        placeholder: e.domainDefault,
                                                    },
                                                    null,
                                                    8,
                                                    $e,
                                                ),
                                                [[a.Jo, e.domain]],
                                            ),
                                        ],
                                        2,
                                    ),
                                ]),
                                (0, $.Lk)('div', Le, [
                                    (0, $.Lk)('label', Ce, (0, L.v_)(e.$t('common.path')), 1),
                                    (0, $.Lk)(
                                        'div',
                                        {
                                            class: (0, L.C4)(
                                                'control' + (e.pathChanged ? ' is-changed' : ''),
                                            ),
                                        },
                                        [
                                            (0, $.bo)(
                                                (0, $.Lk)(
                                                    'input',
                                                    {
                                                        'onUpdate:modelValue':
                                                            t[1] || (t[1] = (t) => (e.path = t)),
                                                        class: 'input',
                                                        type: 'text',
                                                        placeholder: `/var/www/${e.domain}`,
                                                    },
                                                    null,
                                                    8,
                                                    xe,
                                                ),
                                                [[a.Jo, e.path]],
                                            ),
                                        ],
                                        2,
                                    ),
                                ]),
                                (0, $.Lk)('div', Se, [
                                    (0, $.Lk)(
                                        'label',
                                        _e,
                                        (0, L.v_)(
                                            e.$t('templates.domainSections.server.documentRoot'),
                                        ),
                                        1,
                                    ),
                                    (0, $.Lk)(
                                        'div',
                                        {
                                            class: (0, L.C4)(
                                                'control' +
                                                    (e.documentRootChanged ? ' is-changed' : ''),
                                            ),
                                        },
                                        [
                                            (0, $.bo)(
                                                (0, $.Lk)(
                                                    'input',
                                                    {
                                                        'onUpdate:modelValue':
                                                            t[2] ||
                                                            (t[2] = (t) => (e.documentRoot = t)),
                                                        class: 'input',
                                                        type: 'text',
                                                        placeholder: e.documentRootDefault,
                                                    },
                                                    null,
                                                    8,
                                                    Ee,
                                                ),
                                                [[a.Jo, e.documentRoot]],
                                            ),
                                        ],
                                        2,
                                    ),
                                ]),
                            ]),
                            i.duplicateDomain
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', we, [
                                      (0, $.Lk)('div', Pe, [
                                          (0, $.Lk)('label', Te, [
                                              (0, $.Lk)('span', Ve, [
                                                  (0, $.eW)(
                                                      (0, L.v_)(
                                                          e.$t(
                                                              'templates.domainSections.server.oneOrMoreOtherDomainsAreAlsoNamed',
                                                          ),
                                                      ) + ' ',
                                                      1,
                                                  ),
                                                  (0, $.Lk)(
                                                      'code',
                                                      Re,
                                                      (0, L.v_)(e.$props.data.domain.computed),
                                                      1,
                                                  ),
                                                  (0, $.eW)(
                                                      ' . ' +
                                                          (0, L.v_)(
                                                              e.$t(
                                                                  'templates.domainSections.server.thisWillCauseIssuesWithConfigGeneration',
                                                              ),
                                                          ),
                                                      1,
                                                  ),
                                              ]),
                                          ]),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                            (0, $.Lk)('div', Fe, [
                                (0, $.Lk)('div', De, [
                                    (0, $.Lk)(
                                        'label',
                                        Ae,
                                        (0, L.v_)(
                                            e.$t('templates.domainSections.server.wwwSubdomain'),
                                        ),
                                        1,
                                    ),
                                ]),
                                (0, $.Lk)('div', Oe, [
                                    (0, $.Lk)('div', ze, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.wwwSubdomainChanged
                                                            ? ' is-changed'
                                                            : ''),
                                                ),
                                            },
                                            [
                                                (0, $.Lk)('div', je, [
                                                    (0, $.bF)(
                                                        n,
                                                        {
                                                            modelValue: e.wwwSubdomain,
                                                            'onUpdate:modelValue':
                                                                t[3] ||
                                                                (t[3] = (t) =>
                                                                    (e.wwwSubdomain = t)),
                                                            class: 'p-default p-curve p-fill p-icon',
                                                        },
                                                        {
                                                            default: (0, $.k6)(() => [
                                                                (0, $.eW)(
                                                                    ' (www.' +
                                                                        (0, L.v_)(
                                                                            e.$props.data.domain
                                                                                .computed,
                                                                        ) +
                                                                        ') ',
                                                                    1,
                                                                ),
                                                            ]),
                                                            _: 1,
                                                        },
                                                        8,
                                                        ['modelValue'],
                                                    ),
                                                ]),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                            e.cdnSubdomainEnabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', He, [
                                      (0, $.Lk)('div', We, [
                                          (0, $.Lk)(
                                              'label',
                                              Xe,
                                              (0, L.v_)(
                                                  e.$t(
                                                      'templates.domainSections.server.cdnSubdomain',
                                                  ),
                                              ),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', Ie, [
                                          (0, $.Lk)('div', Me, [
                                              (0, $.Lk)(
                                                  'div',
                                                  {
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.cdnSubdomainChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.Lk)('div', Ue, [
                                                          (0, $.bF)(
                                                              n,
                                                              {
                                                                  modelValue: e.cdnSubdomain,
                                                                  'onUpdate:modelValue':
                                                                      t[4] ||
                                                                      (t[4] = (t) =>
                                                                          (e.cdnSubdomain = t)),
                                                                  class: 'p-default p-curve p-fill p-icon',
                                                              },
                                                              {
                                                                  default: (0, $.k6)(() => [
                                                                      (0, $.eW)(
                                                                          ' (cdn.' +
                                                                              (0, L.v_)(
                                                                                  e.$props.data
                                                                                      .domain
                                                                                      .computed,
                                                                              ) +
                                                                              ') ',
                                                                          1,
                                                                      ),
                                                                  ]),
                                                                  _: 1,
                                                              },
                                                              8,
                                                              ['modelValue'],
                                                          ),
                                                      ]),
                                                  ],
                                                  2,
                                              ),
                                          ]),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                            (0, $.Lk)('div', Be, [
                                (0, $.Lk)('div', Ne, [
                                    (0, $.Lk)(
                                        'label',
                                        Qe,
                                        (0, L.v_)(
                                            e.$t(
                                                'templates.domainSections.server.redirectSubdomains',
                                            ),
                                        ),
                                        1,
                                    ),
                                ]),
                                (0, $.Lk)('div', Ge, [
                                    (0, $.Lk)('div', Je, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.redirectSubdomainsChanged
                                                            ? ' is-changed'
                                                            : ''),
                                                ),
                                            },
                                            [
                                                (0, $.Lk)('div', Ke, [
                                                    (0, $.bF)(
                                                        n,
                                                        {
                                                            modelValue: e.redirectSubdomains,
                                                            'onUpdate:modelValue':
                                                                t[5] ||
                                                                (t[5] = (t) =>
                                                                    (e.redirectSubdomains = t)),
                                                            class: 'p-default p-curve p-fill p-icon',
                                                        },
                                                        {
                                                            default: (0, $.k6)(() => [
                                                                (0, $.eW)(
                                                                    ' (' +
                                                                        (0, L.v_)(
                                                                            e.wwwSubdomain
                                                                                ? `${e.domain}, `
                                                                                : '',
                                                                        ) +
                                                                        '*.' +
                                                                        (0, L.v_)(
                                                                            e.$props.data.domain
                                                                                .computed,
                                                                        ) +
                                                                        ' ',
                                                                    1,
                                                                ),
                                                                qe,
                                                                (0, $.eW)(
                                                                    ' ' +
                                                                        (0, L.v_)(
                                                                            e.wwwSubdomain
                                                                                ? 'www.'
                                                                                : '',
                                                                        ) +
                                                                        (0, L.v_)(
                                                                            e.$props.data.domain
                                                                                .computed,
                                                                        ) +
                                                                        ') ',
                                                                    1,
                                                                ),
                                                            ]),
                                                            _: 1,
                                                        },
                                                        8,
                                                        ['modelValue'],
                                                    ),
                                                ]),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                            (0, $.Lk)('div', Ye, [
                                (0, $.Lk)('div', Ze, [
                                    (0, $.Lk)(
                                        'label',
                                        et,
                                        (0, L.v_)(e.$t('templates.domainSections.server.listen')),
                                        1,
                                    ),
                                ]),
                                (0, $.Lk)('div', tt, [
                                    (0, $.Lk)('div', ot, [
                                        at,
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control is-expanded' +
                                                        (e.listenIpv4Changed ? ' is-changed' : ''),
                                                ),
                                            },
                                            [
                                                (0, $.bo)(
                                                    (0, $.Lk)(
                                                        'input',
                                                        {
                                                            'onUpdate:modelValue':
                                                                t[6] ||
                                                                (t[6] = (t) => (e.listenIpv4 = t)),
                                                            class: 'input',
                                                            type: 'text',
                                                            placeholder: e.listenIpv4Default,
                                                        },
                                                        null,
                                                        8,
                                                        st,
                                                    ),
                                                    [[a.Jo, e.listenIpv4]],
                                                ),
                                            ],
                                            2,
                                        ),
                                    ]),
                                    (0, $.Lk)('div', lt, [
                                        it,
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control is-expanded' +
                                                        (e.listenIpv6Changed ? ' is-changed' : ''),
                                                ),
                                            },
                                            [
                                                (0, $.bo)(
                                                    (0, $.Lk)(
                                                        'input',
                                                        {
                                                            'onUpdate:modelValue':
                                                                t[7] ||
                                                                (t[7] = (t) => (e.listenIpv6 = t)),
                                                            class: 'input',
                                                            type: 'text',
                                                            placeholder: e.listenIpv6Default,
                                                        },
                                                        null,
                                                        8,
                                                        nt,
                                                    ),
                                                    [[a.Jo, e.listenIpv6]],
                                                ),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                        ])
                    );
                }
                const rt = 'example.com';
                var pt = o(953),
                    ct = o(1828);
                const ut = (0, $.Lk)('i', { class: 'icon fas fa-check' }, null, -1),
                    ht = {
                        __name: 'checkbox',
                        setup(e) {
                            return (e, t) => (
                                (0, $.uX)(),
                                (0, $.Wv)(
                                    (0, pt.R1)(ct.A),
                                    null,
                                    (0, $.eX)(
                                        {
                                            extra: (0, $.k6)(() => [
                                                (0, $.RG)(e.$slots, 'extra', {}, () => [ut]),
                                            ]),
                                            _: 2,
                                        },
                                        [
                                            (0, $.pI)(e.$slots, (t, o) => ({
                                                name: o,
                                                fn: (0, $.k6)((t) => [
                                                    (0, $.RG)(
                                                        e.$slots,
                                                        o,
                                                        (0, L._B)((0, $.Ng)(t || {})),
                                                    ),
                                                ]),
                                            })),
                                        ],
                                    ),
                                    1024,
                                )
                            );
                        },
                    },
                    mt = ht,
                    gt = mt,
                    ft = {
                        domain: { default: rt, enabled: !0 },
                        path: { default: '', computed: `/var/www/${rt}`, enabled: !0 },
                        documentRoot: { default: '/public', enabled: !0 },
                        wwwSubdomain: { default: !1, enabled: !0 },
                        cdnSubdomain: { default: !1, enabled: !1 },
                        redirectSubdomains: { default: !0, enabled: !0 },
                        listenIpv4: { default: '*', enabled: !0 },
                        listenIpv6: { default: '::', enabled: !0 },
                    },
                    vt = {
                        name: 'DomainServer',
                        display: 'templates.domainSections.server.server',
                        key: 'server',
                        delegated: ce(ft),
                        components: { PrettyCheck: gt },
                        props: { data: Object },
                        computed: {
                            ...ue(ft, 'server'),
                            duplicateDomain() {
                                return (
                                    this.$parent.$parent.$data.domains.filter(
                                        (e) =>
                                            e &&
                                            e.server.domain.computed ===
                                                this.$props.data.domain.computed,
                                    ).length > 1
                                );
                            },
                            hasWarnings() {
                                return this.duplicateDomain;
                            },
                        },
                        watch: {
                            '$props.data.domain': {
                                handler(e) {
                                    e.computed.startsWith('www.') &&
                                        ((e.computed = e.computed.slice(4)),
                                        (this.wwwSubdomain = !0)),
                                        e.computed.trim() || (e.computed = e.default),
                                        this.$props.data.path.value.trim() ||
                                            (this.$props.data.path.computed = `/var/www/${e.computed}`);
                                },
                                deep: !0,
                            },
                            '$props.data.wwwSubdomain': {
                                handler(e) {
                                    e.computed
                                        ? ((this.$props.data.cdnSubdomain.enabled = !0),
                                          (this.$props.data.cdnSubdomain.computed =
                                              this.$props.data.cdnSubdomain.value))
                                        : ((this.$props.data.cdnSubdomain.enabled = !1),
                                          (this.$props.data.cdnSubdomain.computed = !1));
                                },
                                deep: !0,
                            },
                            '$props.data.path': {
                                handler(e) {
                                    e.computed.trim() ||
                                        (e.computed = `/var/www/${this.$props.data.domain.computed}`);
                                },
                                deep: !0,
                            },
                        },
                    },
                    bt = (0, ge.A)(vt, [['render', dt]]),
                    kt = bt,
                    yt = { class: 'field is-horizontal' },
                    $t = { class: 'field-label' },
                    Lt = { class: 'label' },
                    Ct = { class: 'field-body' },
                    xt = { class: 'field' },
                    St = { class: 'checkbox' },
                    _t = { key: 0, class: 'field is-horizontal' },
                    Et = { class: 'field-label' },
                    wt = { class: 'label' },
                    Pt = { class: 'field-body' },
                    Tt = { class: 'field' },
                    Vt = { class: 'checkbox' },
                    Rt = { key: 1, class: 'field is-horizontal is-aligned-top' },
                    Ft = { class: 'field-label has-small-margin-top' },
                    Dt = { class: 'label' },
                    At = { class: 'field-body' },
                    Ot = { class: 'field' },
                    zt = { class: 'checkbox' },
                    jt = { key: 0, class: 'control' },
                    Ht = { class: 'text message is-warning' },
                    Wt = { class: 'message-body' },
                    Xt = { key: 2, class: 'field is-horizontal' },
                    It = { class: 'field-label' },
                    Mt = { class: 'label' },
                    Ut = { class: 'field-body' },
                    Bt = { class: 'field' },
                    Nt = { class: 'checkbox' },
                    Qt = (0, $.Lk)('i', { class: 'fas fa-long-arrow-alt-right' }, null, -1),
                    Gt = { key: 3, class: 'field is-horizontal is-aligned-top' },
                    Jt = { class: 'field-label' },
                    Kt = { class: 'label' },
                    qt = { class: 'field-body' },
                    Yt = { class: 'field' },
                    Zt = { class: 'checkbox' },
                    eo = { class: 'checkbox' },
                    to = { class: 'checkbox' },
                    oo = { key: 4, class: 'field is-horizontal is-aligned-top' },
                    ao = { class: 'field-label' },
                    so = { class: 'label' },
                    lo = { class: 'field-body' },
                    io = { class: 'field' },
                    no = { class: 'radio' },
                    ro = { key: 5, class: 'field is-horizontal' },
                    po = { class: 'field-label' },
                    co = { class: 'label' },
                    uo = { class: 'field-body' },
                    ho = { class: 'field' },
                    mo = ['placeholder'],
                    go = { key: 6, class: 'field is-horizontal' },
                    fo = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'ssl_certificate')],
                        -1,
                    ),
                    vo = { class: 'field-body' },
                    bo = { class: 'field' },
                    ko = ['placeholder'],
                    yo = { key: 7, class: 'field is-horizontal' },
                    $o = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'ssl_certificate_key')],
                        -1,
                    ),
                    Lo = { class: 'field-body' },
                    Co = { class: 'field' },
                    xo = ['placeholder'];
                function So(e, t, o, s, l, i) {
                    const n = (0, $.g2)('PrettyCheck'),
                        d = (0, $.g2)('ExternalLink'),
                        r = (0, $.g2)('PrettyRadio');
                    return (
                        (0, $.uX)(),
                        (0, $.CE)('div', null, [
                            (0, $.Lk)('div', yt, [
                                (0, $.Lk)('div', $t, [
                                    (0, $.Lk)('label', Lt, (0, L.v_)(e.$t('common.https')), 1),
                                ]),
                                (0, $.Lk)('div', Ct, [
                                    (0, $.Lk)('div', xt, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.httpsChanged ? ' is-changed' : ''),
                                                ),
                                            },
                                            [
                                                (0, $.Lk)('div', St, [
                                                    (0, $.bF)(
                                                        n,
                                                        {
                                                            modelValue: e.https,
                                                            'onUpdate:modelValue':
                                                                t[0] ||
                                                                (t[0] = (t) => (e.https = t)),
                                                            class: 'p-default p-curve p-fill p-icon',
                                                        },
                                                        {
                                                            default: (0, $.k6)(() => [
                                                                (0, $.eW)(
                                                                    (0, L.v_)(
                                                                        e.$t(
                                                                            'templates.domainSections.https.enableEncryptedSslConnection',
                                                                        ),
                                                                    ),
                                                                    1,
                                                                ),
                                                            ]),
                                                            _: 1,
                                                        },
                                                        8,
                                                        ['modelValue'],
                                                    ),
                                                ]),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                            e.http2Enabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', _t, [
                                      (0, $.Lk)('div', Et, [
                                          (0, $.Lk)(
                                              'label',
                                              wt,
                                              (0, L.v_)(
                                                  e.$t('templates.domainSections.https.http2'),
                                              ),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', Pt, [
                                          (0, $.Lk)('div', Tt, [
                                              (0, $.Lk)(
                                                  'div',
                                                  {
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.http2Changed ? ' is-changed' : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.Lk)('div', Vt, [
                                                          (0, $.bF)(
                                                              n,
                                                              {
                                                                  modelValue: e.http2,
                                                                  'onUpdate:modelValue':
                                                                      t[1] ||
                                                                      (t[1] = (t) => (e.http2 = t)),
                                                                  class: 'p-default p-curve p-fill p-icon',
                                                              },
                                                              {
                                                                  default: (0, $.k6)(() => [
                                                                      (0, $.eW)(
                                                                          (0, L.v_)(
                                                                              e.$t(
                                                                                  'templates.domainSections.https.enableHttp2Connections',
                                                                              ),
                                                                          ),
                                                                          1,
                                                                      ),
                                                                  ]),
                                                                  _: 1,
                                                              },
                                                              8,
                                                              ['modelValue'],
                                                          ),
                                                      ]),
                                                  ],
                                                  2,
                                              ),
                                          ]),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                            e.http3Enabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', Rt, [
                                      (0, $.Lk)('div', Ft, [
                                          (0, $.Lk)(
                                              'label',
                                              Dt,
                                              (0, L.v_)(
                                                  e.$t('templates.domainSections.https.http3'),
                                              ),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', At, [
                                          (0, $.Lk)('div', Ot, [
                                              (0, $.Lk)(
                                                  'div',
                                                  {
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.http3Changed ? ' is-changed' : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.Lk)('div', zt, [
                                                          (0, $.bF)(
                                                              n,
                                                              {
                                                                  modelValue: e.http3,
                                                                  'onUpdate:modelValue':
                                                                      t[2] ||
                                                                      (t[2] = (t) => (e.http3 = t)),
                                                                  class: 'p-default p-curve p-fill p-icon',
                                                              },
                                                              {
                                                                  default: (0, $.k6)(() => [
                                                                      (0, $.eW)(
                                                                          (0, L.v_)(
                                                                              e.$t(
                                                                                  'templates.domainSections.https.enableHttp3Connections',
                                                                              ),
                                                                          ),
                                                                          1,
                                                                      ),
                                                                  ]),
                                                                  _: 1,
                                                              },
                                                              8,
                                                              ['modelValue'],
                                                          ),
                                                      ]),
                                                  ],
                                                  2,
                                              ),
                                              i.showHttp3Warning
                                                  ? ((0, $.uX)(),
                                                    (0, $.CE)('div', jt, [
                                                        (0, $.Lk)('label', Ht, [
                                                            (0, $.Lk)('span', Wt, [
                                                                (0, $.eW)(
                                                                    (0, L.v_)(
                                                                        e.$t(
                                                                            'templates.domainSections.https.http3IsANonStandardModule',
                                                                        ),
                                                                    ) + ' ',
                                                                    1,
                                                                ),
                                                                (0, $.bF)(
                                                                    d,
                                                                    {
                                                                        text: e.$t(
                                                                            'templates.domainSections.https.http3NginxQuicReadme',
                                                                        ),
                                                                        link: 'https://quic.nginx.org/README',
                                                                    },
                                                                    null,
                                                                    8,
                                                                    ['text'],
                                                                ),
                                                                (0, $.eW)(
                                                                    ' ' +
                                                                        (0, L.v_)(
                                                                            e.$t(
                                                                                'templates.domainSections.https.http3OrThe',
                                                                            ),
                                                                        ) +
                                                                        ' ',
                                                                    1,
                                                                ),
                                                                (0, $.bF)(
                                                                    d,
                                                                    {
                                                                        text: e.$t(
                                                                            'templates.domainSections.https.http3CloudflareQuicheProject',
                                                                        ),
                                                                        link: 'https://github.com/cloudflare/quiche/tree/master/nginx',
                                                                    },
                                                                    null,
                                                                    8,
                                                                    ['text'],
                                                                ),
                                                                (0, $.eW)(
                                                                    ' ' +
                                                                        (0, L.v_)(
                                                                            e.$t(
                                                                                'templates.domainSections.https.http3ForBuildingNginxWithHttp3',
                                                                            ),
                                                                        ),
                                                                    1,
                                                                ),
                                                            ]),
                                                        ]),
                                                    ]))
                                                  : (0, $.Q3)('', !0),
                                          ]),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                            e.forceHttpsEnabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', Xt, [
                                      (0, $.Lk)('div', It, [
                                          (0, $.Lk)(
                                              'label',
                                              Mt,
                                              (0, L.v_)(
                                                  e.$t('templates.domainSections.https.forceHttps'),
                                              ),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', Ut, [
                                          (0, $.Lk)('div', Bt, [
                                              (0, $.Lk)(
                                                  'div',
                                                  {
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.forceHttpsChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.Lk)('div', Nt, [
                                                          (0, $.bF)(
                                                              n,
                                                              {
                                                                  modelValue: e.forceHttps,
                                                                  'onUpdate:modelValue':
                                                                      t[3] ||
                                                                      (t[3] = (t) =>
                                                                          (e.forceHttps = t)),
                                                                  class: 'p-default p-curve p-fill p-icon',
                                                              },
                                                              {
                                                                  default: (0, $.k6)(() => [
                                                                      (0, $.eW)(
                                                                          ' (http://' +
                                                                              (0, L.v_)(
                                                                                  e.$parent.$props
                                                                                      .data.server
                                                                                      .domain
                                                                                      .computed,
                                                                              ) +
                                                                              ' ',
                                                                          1,
                                                                      ),
                                                                      Qt,
                                                                      (0, $.eW)(
                                                                          ' https://' +
                                                                              (0, L.v_)(
                                                                                  e.$parent.$props
                                                                                      .data.server
                                                                                      .domain
                                                                                      .computed,
                                                                              ) +
                                                                              ') ',
                                                                          1,
                                                                      ),
                                                                  ]),
                                                                  _: 1,
                                                              },
                                                              8,
                                                              ['modelValue'],
                                                          ),
                                                      ]),
                                                  ],
                                                  2,
                                              ),
                                          ]),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                            e.hstsEnabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', Gt, [
                                      (0, $.Lk)('div', Jt, [
                                          (0, $.Lk)(
                                              'label',
                                              Kt,
                                              (0, L.v_)(
                                                  e.$t('templates.domainSections.https.hsts'),
                                              ),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', qt, [
                                          (0, $.Lk)('div', Yt, [
                                              (0, $.Lk)(
                                                  'div',
                                                  {
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.hstsChanged ? ' is-changed' : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.Lk)('div', Zt, [
                                                          (0, $.bF)(
                                                              n,
                                                              {
                                                                  modelValue: e.hsts,
                                                                  'onUpdate:modelValue':
                                                                      t[4] ||
                                                                      (t[4] = (t) => (e.hsts = t)),
                                                                  class: 'p-default p-curve p-fill p-icon',
                                                              },
                                                              {
                                                                  default: (0, $.k6)(() => [
                                                                      (0, $.eW)(
                                                                          (0, L.v_)(
                                                                              e.$t(
                                                                                  'templates.domainSections.https.enableStrictTransportSecurity',
                                                                              ),
                                                                          ),
                                                                          1,
                                                                      ),
                                                                  ]),
                                                                  _: 1,
                                                              },
                                                              8,
                                                              ['modelValue'],
                                                          ),
                                                      ]),
                                                  ],
                                                  2,
                                              ),
                                              e.hstsSubdomainsEnabled
                                                  ? ((0, $.uX)(),
                                                    (0, $.CE)(
                                                        'div',
                                                        {
                                                            key: 0,
                                                            class: (0, L.C4)(
                                                                'control' +
                                                                    (e.hstsSubdomainsChanged
                                                                        ? ' is-changed'
                                                                        : ''),
                                                            ),
                                                        },
                                                        [
                                                            (0, $.Lk)('div', eo, [
                                                                (0, $.bF)(
                                                                    n,
                                                                    {
                                                                        modelValue:
                                                                            e.hstsSubdomains,
                                                                        'onUpdate:modelValue':
                                                                            t[5] ||
                                                                            (t[5] = (t) =>
                                                                                (e.hstsSubdomains =
                                                                                    t)),
                                                                        class: 'p-default p-curve p-fill p-icon',
                                                                    },
                                                                    {
                                                                        default: (0, $.k6)(() => [
                                                                            (0, $.eW)(
                                                                                (0, L.v_)(
                                                                                    e.$t(
                                                                                        'templates.domainSections.https.enableIncludeSubDomains',
                                                                                    ),
                                                                                ),
                                                                                1,
                                                                            ),
                                                                        ]),
                                                                        _: 1,
                                                                    },
                                                                    8,
                                                                    ['modelValue'],
                                                                ),
                                                            ]),
                                                        ],
                                                        2,
                                                    ))
                                                  : (0, $.Q3)('', !0),
                                              e.hstsPreloadEnabled
                                                  ? ((0, $.uX)(),
                                                    (0, $.CE)(
                                                        'div',
                                                        {
                                                            key: 1,
                                                            class: (0, L.C4)(
                                                                'control' +
                                                                    (e.hstsPreloadChanged
                                                                        ? ' is-changed'
                                                                        : ''),
                                                            ),
                                                        },
                                                        [
                                                            (0, $.Lk)('div', to, [
                                                                (0, $.bF)(
                                                                    n,
                                                                    {
                                                                        modelValue: e.hstsPreload,
                                                                        'onUpdate:modelValue':
                                                                            t[6] ||
                                                                            (t[6] = (t) =>
                                                                                (e.hstsPreload =
                                                                                    t)),
                                                                        class: 'p-default p-curve p-fill p-icon',
                                                                    },
                                                                    {
                                                                        default: (0, $.k6)(() => [
                                                                            (0, $.eW)(
                                                                                (0, L.v_)(
                                                                                    e.$t(
                                                                                        'templates.domainSections.https.enablePreload',
                                                                                    ),
                                                                                ),
                                                                                1,
                                                                            ),
                                                                        ]),
                                                                        _: 1,
                                                                    },
                                                                    8,
                                                                    ['modelValue'],
                                                                ),
                                                            ]),
                                                        ],
                                                        2,
                                                    ))
                                                  : (0, $.Q3)('', !0),
                                          ]),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                            e.certTypeEnabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', oo, [
                                      (0, $.Lk)('div', ao, [
                                          (0, $.Lk)(
                                              'label',
                                              so,
                                              (0, L.v_)(
                                                  e.$t(
                                                      'templates.domainSections.https.certificationType',
                                                  ),
                                              ),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', lo, [
                                          (0, $.Lk)('div', io, [
                                              ((0, $.uX)(!0),
                                              (0, $.CE)(
                                                  $.FK,
                                                  null,
                                                  (0, $.pI)(
                                                      e.$props.data.certType.options,
                                                      (o, a) => (
                                                          (0, $.uX)(),
                                                          (0, $.CE)(
                                                              'div',
                                                              {
                                                                  class: (0, L.C4)(
                                                                      'control' +
                                                                          (e.certTypeChanged &&
                                                                          a === e.certType
                                                                              ? ' is-changed'
                                                                              : ''),
                                                                  ),
                                                              },
                                                              [
                                                                  (0, $.Lk)('div', no, [
                                                                      (0, $.bF)(
                                                                          r,
                                                                          {
                                                                              modelValue:
                                                                                  e.certType,
                                                                              'onUpdate:modelValue':
                                                                                  t[7] ||
                                                                                  (t[7] = (t) =>
                                                                                      (e.certType =
                                                                                          t)),
                                                                              value: a,
                                                                              class: 'p-default p-round p-fill p-icon',
                                                                          },
                                                                          {
                                                                              default: (0, $.k6)(
                                                                                  () => [
                                                                                      (0, $.eW)(
                                                                                          (0, L.v_)(
                                                                                              e.$t(
                                                                                                  o,
                                                                                              ),
                                                                                          ),
                                                                                          1,
                                                                                      ),
                                                                                  ],
                                                                              ),
                                                                              _: 2,
                                                                          },
                                                                          1032,
                                                                          ['modelValue', 'value'],
                                                                      ),
                                                                  ]),
                                                              ],
                                                              2,
                                                          )
                                                      ),
                                                  ),
                                                  256,
                                              )),
                                          ]),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                            e.letsEncryptEmailEnabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', ro, [
                                      (0, $.Lk)('div', po, [
                                          (0, $.Lk)(
                                              'label',
                                              co,
                                              (0, L.v_)(
                                                  e.$t(
                                                      'templates.domainSections.https.letsEncryptEmail',
                                                  ),
                                              ),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', uo, [
                                          (0, $.Lk)('div', ho, [
                                              (0, $.Lk)(
                                                  'div',
                                                  {
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.letsEncryptEmailChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.bo)(
                                                          (0, $.Lk)(
                                                              'input',
                                                              {
                                                                  'onUpdate:modelValue':
                                                                      t[8] ||
                                                                      (t[8] = (t) =>
                                                                          (e.letsEncryptEmail = t)),
                                                                  class: 'input',
                                                                  type: 'text',
                                                                  placeholder:
                                                                      e.$props.data.letsEncryptEmail
                                                                          .computed,
                                                              },
                                                              null,
                                                              8,
                                                              mo,
                                                          ),
                                                          [[a.Jo, e.letsEncryptEmail]],
                                                      ),
                                                  ],
                                                  2,
                                              ),
                                          ]),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                            e.sslCertificateEnabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', go, [
                                      fo,
                                      (0, $.Lk)('div', vo, [
                                          (0, $.Lk)('div', bo, [
                                              (0, $.Lk)(
                                                  'div',
                                                  {
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.sslCertificateChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.bo)(
                                                          (0, $.Lk)(
                                                              'input',
                                                              {
                                                                  'onUpdate:modelValue':
                                                                      t[9] ||
                                                                      (t[9] = (t) =>
                                                                          (e.sslCertificate = t)),
                                                                  class: 'input',
                                                                  type: 'text',
                                                                  placeholder: `${e.$parent.$parent.$data.global.nginx.nginxConfigDirectory.computed}/ssl/${e.$parent.$props.data.server.domain.computed}.crt`,
                                                              },
                                                              null,
                                                              8,
                                                              ko,
                                                          ),
                                                          [[a.Jo, e.sslCertificate]],
                                                      ),
                                                  ],
                                                  2,
                                              ),
                                          ]),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                            e.sslCertificateKeyEnabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', yo, [
                                      $o,
                                      (0, $.Lk)('div', Lo, [
                                          (0, $.Lk)('div', Co, [
                                              (0, $.Lk)(
                                                  'div',
                                                  {
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.sslCertificateKeyChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.bo)(
                                                          (0, $.Lk)(
                                                              'input',
                                                              {
                                                                  'onUpdate:modelValue':
                                                                      t[10] ||
                                                                      (t[10] = (t) =>
                                                                          (e.sslCertificateKey =
                                                                              t)),
                                                                  class: 'input',
                                                                  type: 'text',
                                                                  placeholder: `${e.$parent.$parent.$data.global.nginx.nginxConfigDirectory.computed}/ssl/${e.$parent.$props.data.server.domain.computed}.key`,
                                                              },
                                                              null,
                                                              8,
                                                              xo,
                                                          ),
                                                          [[a.Jo, e.sslCertificateKey]],
                                                      ),
                                                  ],
                                                  2,
                                              ),
                                          ]),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                        ])
                    );
                }
                var _o = o(2584),
                    Eo = o(7071);
                const wo = (0, $.Lk)('i', { class: 'icon fas fa-check' }, null, -1),
                    Po = {
                        __name: 'radio',
                        setup(e) {
                            return (e, t) => (
                                (0, $.uX)(),
                                (0, $.Wv)(
                                    (0, pt.R1)(Eo.A),
                                    null,
                                    (0, $.eX)(
                                        {
                                            extra: (0, $.k6)(() => [
                                                (0, $.RG)(e.$slots, 'extra', {}, () => [wo]),
                                            ]),
                                            _: 2,
                                        },
                                        [
                                            (0, $.pI)(e.$slots, (t, o) => ({
                                                name: o,
                                                fn: (0, $.k6)((t) => [
                                                    (0, $.RG)(
                                                        e.$slots,
                                                        o,
                                                        (0, L._B)((0, $.Ng)(t || {})),
                                                    ),
                                                ]),
                                            })),
                                        ],
                                    ),
                                    1024,
                                )
                            );
                        },
                    },
                    To = Po,
                    Vo = To,
                    Ro = {
                        https: { default: !0, enabled: !0 },
                        http2: { default: !0, enabled: !0 },
                        http3: { default: !1, enabled: !0 },
                        forceHttps: { default: !0, enabled: !0 },
                        hsts: { default: !0, enabled: !0 },
                        hstsSubdomains: { default: !0, enabled: !0 },
                        hstsPreload: { default: !1, enabled: !0 },
                        certType: {
                            default: 'letsEncrypt',
                            options: {
                                letsEncrypt: 'common.letsEncrypt',
                                custom: 'templates.domainSections.https.customCertificate',
                            },
                            enabled: !0,
                        },
                        letsEncryptEmail: { default: '', computed: `info@${rt}`, enabled: !0 },
                        sslCertificate: { default: '', enabled: !1 },
                        sslCertificateKey: { default: '', enabled: !1 },
                    },
                    Fo = {
                        name: 'DomainHTTPS',
                        display: 'common.https',
                        key: 'https',
                        delegated: ce(Ro),
                        components: { PrettyCheck: gt, PrettyRadio: Vo, ExternalLink: _o.A },
                        props: { data: Object },
                        computed: {
                            ...ue(Ro, 'https'),
                            showHttp3Warning() {
                                return this.$props.data.http3.computed;
                            },
                            hasWarnings() {
                                return this.showHttp3Warning;
                            },
                        },
                        watch: {
                            '$props.data.https': {
                                handler(e) {
                                    const t = e.computed;
                                    t
                                        ? ((this.$props.data.http2.enabled = !0),
                                          (this.$props.data.http2.computed =
                                              this.$props.data.http2.value),
                                          (this.$props.data.http3.enabled = !0),
                                          (this.$props.data.http3.computed =
                                              this.$props.data.http3.value),
                                          (this.$props.data.forceHttps.enabled = !0),
                                          (this.$props.data.forceHttps.computed =
                                              this.$props.data.forceHttps.value),
                                          (this.$props.data.hsts.enabled = !0),
                                          (this.$props.data.hsts.computed =
                                              this.$props.data.hsts.value),
                                          (this.$props.data.certType.enabled = !0),
                                          (this.$props.data.certType.computed =
                                              this.$props.data.certType.value))
                                        : ((this.$props.data.http2.enabled = !1),
                                          (this.$props.data.http2.computed = !1),
                                          (this.$props.data.http3.enabled = !1),
                                          (this.$props.data.http3.computed = !1),
                                          (this.$props.data.forceHttps.enabled = !1),
                                          (this.$props.data.forceHttps.computed = !1),
                                          (this.$props.data.hsts.enabled = !1),
                                          (this.$props.data.hsts.computed = !1),
                                          (this.$props.data.certType.enabled = !1),
                                          (this.$props.data.certType.computed = ''));
                                },
                                deep: !0,
                            },
                            '$props.data': {
                                handler() {
                                    this.$props.data.hsts.computed
                                        ? ((this.$props.data.hstsSubdomains.enabled = !0),
                                          (this.$props.data.hstsSubdomains.computed =
                                              this.$props.data.hstsSubdomains.value))
                                        : ((this.$props.data.hstsSubdomains.enabled = !1),
                                          (this.$props.data.hstsSubdomains.computed = !1)),
                                        this.$props.data.hsts.computed &&
                                        this.$props.data.hstsSubdomains.computed
                                            ? ((this.$props.data.hstsPreload.enabled = !0),
                                              (this.$props.data.hstsPreload.computed =
                                                  this.$props.data.hstsPreload.value))
                                            : ((this.$props.data.hstsPreload.enabled = !1),
                                              (this.$props.data.hstsPreload.computed = !1));
                                },
                                deep: !0,
                            },
                            '$props.data.certType': {
                                handler(e) {
                                    e.enabled
                                        ? (Object.keys(e.options).includes(e.computed) ||
                                              (e.computed = e.default),
                                          'letsEncrypt' === e.computed
                                              ? ((this.$props.data.letsEncryptEmail.enabled = !0),
                                                (this.$props.data.letsEncryptEmail.computed =
                                                    this.$props.data.letsEncryptEmail.value),
                                                (this.$props.data.sslCertificate.enabled = !1),
                                                (this.$props.data.sslCertificate.computed = ''),
                                                (this.$props.data.sslCertificateKey.enabled = !1),
                                                (this.$props.data.sslCertificateKey.computed = ''))
                                              : ((this.$props.data.sslCertificate.enabled = !0),
                                                (this.$props.data.sslCertificate.computed =
                                                    this.$props.data.sslCertificate.value),
                                                (this.$props.data.sslCertificateKey.enabled = !0),
                                                (this.$props.data.sslCertificateKey.computed =
                                                    this.$props.data.sslCertificateKey.value),
                                                (this.$props.data.letsEncryptEmail.enabled = !1),
                                                (this.$props.data.letsEncryptEmail.computed = '')))
                                        : ((this.$props.data.letsEncryptEmail.enabled = !1),
                                          (this.$props.data.letsEncryptEmail.computed = ''),
                                          (this.$props.data.sslCertificate.enabled = !1),
                                          (this.$props.data.sslCertificate.computed = ''),
                                          (this.$props.data.sslCertificateKey.enabled = !1),
                                          (this.$props.data.sslCertificateKey.computed = ''));
                                },
                                deep: !0,
                            },
                            '$props.data.letsEncryptEmail': {
                                handler(e) {
                                    e.computed.trim() ||
                                        (e.computed = `info@${this.$parent.$props.data.server.domain.computed}`);
                                },
                                deep: !0,
                            },
                            '$parent.$props.data.server.domain': {
                                handler(e) {
                                    this.$props.data.letsEncryptEmail.value.trim() ||
                                        (this.$props.data.letsEncryptEmail.computed = `info@${e.computed}`);
                                },
                                deep: !0,
                            },
                        },
                    },
                    Do = (0, ge.A)(Fo, [['render', So]]),
                    Ao = Do,
                    Oo = { key: 0, class: 'field is-horizontal is-aligned-top' },
                    zo = { class: 'field-label' },
                    jo = { class: 'label' },
                    Ho = { class: 'field-body' },
                    Wo = { class: 'field' },
                    Xo = { class: 'control is-changed' },
                    Io = { class: 'text' },
                    Mo = (0, $.Lk)('br', null, null, -1),
                    Uo = (0, $.Lk)('br', null, null, -1),
                    Bo = { key: 1, class: 'field is-horizontal' },
                    No = { class: 'field-label' },
                    Qo = { class: 'label' },
                    Go = { class: 'field-body' },
                    Jo = { class: 'field' },
                    Ko = { class: 'checkbox' },
                    qo = { key: 2, class: 'field is-horizontal is-aligned-top' },
                    Yo = { class: 'field-label has-margin-top' },
                    Zo = { class: 'label' },
                    ea = { class: 'field-body' },
                    ta = { class: 'field' },
                    oa = ['placeholder'],
                    aa = { key: 3, class: 'field is-horizontal is-aligned-top' },
                    sa = { class: 'field-label has-margin-top' },
                    la = { class: 'label' },
                    ia = { class: 'field-body' },
                    na = { class: 'field' },
                    da = ['placeholder'],
                    ra = { key: 4, class: 'field is-horizontal' },
                    pa = { class: 'field-label' },
                    ca = { class: 'label' },
                    ua = { class: 'field-body' },
                    ha = { class: 'field' },
                    ma = { class: 'checkbox' },
                    ga = { key: 5, class: 'field is-horizontal' },
                    fa = { class: 'field-label' },
                    va = { class: 'label' },
                    ba = { class: 'field-body' },
                    ka = { class: 'field' },
                    ya = { class: 'checkbox' },
                    $a = { key: 6, class: 'field is-horizontal' },
                    La = { class: 'field-label' },
                    Ca = { class: 'label' },
                    xa = { class: 'field-body' },
                    Sa = { class: 'field' },
                    _a = { class: 'checkbox' },
                    Ea = { key: 7, class: 'field is-horizontal' },
                    wa = { class: 'field-label' },
                    Pa = { class: 'label' },
                    Ta = { class: 'field-body' },
                    Va = { class: 'field' },
                    Ra = { class: 'checkbox' };
                function Fa(e, t, o, s, l, i) {
                    const n = (0, $.g2)('PrettyCheck'),
                        d = (0, $.g2)('VueSelect');
                    return (
                        (0, $.uX)(),
                        (0, $.CE)('div', null, [
                            e.phpEnabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', Bo, [
                                      (0, $.Lk)('div', No, [
                                          (0, $.Lk)('label', Qo, (0, L.v_)(e.$t('common.php')), 1),
                                      ]),
                                      (0, $.Lk)('div', Go, [
                                          (0, $.Lk)('div', Jo, [
                                              (0, $.Lk)(
                                                  'div',
                                                  {
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.phpChanged ? ' is-changed' : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.Lk)('div', Ko, [
                                                          (0, $.bF)(
                                                              n,
                                                              {
                                                                  modelValue: e.php,
                                                                  'onUpdate:modelValue':
                                                                      t[0] ||
                                                                      (t[0] = (t) => (e.php = t)),
                                                                  class: 'p-default p-curve p-fill p-icon',
                                                              },
                                                              {
                                                                  default: (0, $.k6)(() => [
                                                                      (0, $.eW)(
                                                                          (0, L.v_)(
                                                                              e.$t(
                                                                                  'templates.domainSections.php.enablePhp',
                                                                              ),
                                                                          ),
                                                                          1,
                                                                      ),
                                                                  ]),
                                                                  _: 1,
                                                              },
                                                              8,
                                                              ['modelValue'],
                                                          ),
                                                      ]),
                                                  ],
                                                  2,
                                              ),
                                          ]),
                                      ]),
                                  ]))
                                : ((0, $.uX)(),
                                  (0, $.CE)('div', Oo, [
                                      (0, $.Lk)('div', zo, [
                                          (0, $.Lk)('label', jo, (0, L.v_)(e.$t('common.php')), 1),
                                      ]),
                                      (0, $.Lk)('div', Ho, [
                                          (0, $.Lk)('div', Wo, [
                                              (0, $.Lk)('div', Xo, [
                                                  (0, $.Lk)('label', Io, [
                                                      (0, $.eW)(
                                                          (0, L.v_)(
                                                              e.$t(
                                                                  'templates.domainSections.php.phpIsDisabled',
                                                              ),
                                                          ) + ' ',
                                                          1,
                                                      ),
                                                      e.$parent.$props.data.reverseProxy
                                                          .reverseProxy.computed
                                                          ? ((0, $.uX)(),
                                                            (0, $.CE)(
                                                                $.FK,
                                                                { key: 0 },
                                                                [
                                                                    Mo,
                                                                    (0, $.eW)(
                                                                        ' ' +
                                                                            (0, L.v_)(
                                                                                e.$t(
                                                                                    'templates.domainSections.php.phpCannotBeEnabledWithReverseProxy',
                                                                                ),
                                                                            ),
                                                                        1,
                                                                    ),
                                                                ],
                                                                64,
                                                            ))
                                                          : (0, $.Q3)('', !0),
                                                      e.$parent.$props.data.python.python.computed
                                                          ? ((0, $.uX)(),
                                                            (0, $.CE)(
                                                                $.FK,
                                                                { key: 1 },
                                                                [
                                                                    Uo,
                                                                    (0, $.eW)(
                                                                        ' ' +
                                                                            (0, L.v_)(
                                                                                e.$t(
                                                                                    'templates.domainSections.php.phpCannotBeEnabledWithPython',
                                                                                ),
                                                                            ),
                                                                        1,
                                                                    ),
                                                                ],
                                                                64,
                                                            ))
                                                          : (0, $.Q3)('', !0),
                                                  ]),
                                              ]),
                                          ]),
                                      ]),
                                  ])),
                            e.phpServerEnabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', qo, [
                                      (0, $.Lk)('div', Yo, [
                                          (0, $.Lk)(
                                              'label',
                                              Zo,
                                              (0, L.v_)(
                                                  e.$t('templates.domainSections.php.phpServer'),
                                              ),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', ea, [
                                          (0, $.Lk)('div', ta, [
                                              (0, $.Lk)(
                                                  'div',
                                                  {
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.phpServerChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.bF)(
                                                          d,
                                                          {
                                                              ref: 'phpServerSelect',
                                                              modelValue: e.phpServer,
                                                              'onUpdate:modelValue':
                                                                  t[1] ||
                                                                  (t[1] = (t) => (e.phpServer = t)),
                                                              options: i.phpServerOptions,
                                                              clearable: !1,
                                                              reduce: (e) => e.value,
                                                          },
                                                          null,
                                                          8,
                                                          ['modelValue', 'options', 'reduce'],
                                                      ),
                                                  ],
                                                  2,
                                              ),
                                              e.phpServerCustomEnabled
                                                  ? ((0, $.uX)(),
                                                    (0, $.CE)(
                                                        'div',
                                                        {
                                                            key: 0,
                                                            class: (0, L.C4)(
                                                                'control' +
                                                                    (e.phpServerCustomChanged
                                                                        ? ' is-changed'
                                                                        : ''),
                                                            ),
                                                        },
                                                        [
                                                            (0, $.bo)(
                                                                (0, $.Lk)(
                                                                    'input',
                                                                    {
                                                                        'onUpdate:modelValue':
                                                                            t[2] ||
                                                                            (t[2] = (t) =>
                                                                                (e.phpServerCustom =
                                                                                    t)),
                                                                        class: 'input',
                                                                        type: 'text',
                                                                        placeholder:
                                                                            e.$props.data
                                                                                .phpServerCustom
                                                                                .default,
                                                                    },
                                                                    null,
                                                                    8,
                                                                    oa,
                                                                ),
                                                                [[a.Jo, e.phpServerCustom]],
                                                            ),
                                                        ],
                                                        2,
                                                    ))
                                                  : (0, $.Q3)('', !0),
                                          ]),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                            e.phpBackupServerEnabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', aa, [
                                      (0, $.Lk)('div', sa, [
                                          (0, $.Lk)(
                                              'label',
                                              la,
                                              (0, L.v_)(
                                                  e.$t(
                                                      'templates.domainSections.php.phpBackupServer',
                                                  ),
                                              ),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', ia, [
                                          (0, $.Lk)('div', na, [
                                              (0, $.Lk)(
                                                  'div',
                                                  {
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.phpBackupServerChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.bF)(
                                                          d,
                                                          {
                                                              ref: 'phpBackupServerSelect',
                                                              modelValue: e.phpBackupServer,
                                                              'onUpdate:modelValue':
                                                                  t[3] ||
                                                                  (t[3] = (t) =>
                                                                      (e.phpBackupServer = t)),
                                                              options: i.phpBackupServerOptions,
                                                              clearable: !1,
                                                              reduce: (e) => e.value,
                                                          },
                                                          null,
                                                          8,
                                                          ['modelValue', 'options', 'reduce'],
                                                      ),
                                                  ],
                                                  2,
                                              ),
                                              e.phpBackupServerCustomEnabled
                                                  ? ((0, $.uX)(),
                                                    (0, $.CE)(
                                                        'div',
                                                        {
                                                            key: 0,
                                                            class: (0, L.C4)(
                                                                'control' +
                                                                    (e.phpBackupServerCustomChanged
                                                                        ? ' is-changed'
                                                                        : ''),
                                                            ),
                                                        },
                                                        [
                                                            (0, $.bo)(
                                                                (0, $.Lk)(
                                                                    'input',
                                                                    {
                                                                        'onUpdate:modelValue':
                                                                            t[4] ||
                                                                            (t[4] = (t) =>
                                                                                (e.phpBackupServerCustom =
                                                                                    t)),
                                                                        class: 'input',
                                                                        type: 'text',
                                                                        placeholder:
                                                                            e.$props.data
                                                                                .phpBackupServerCustom
                                                                                .default,
                                                                    },
                                                                    null,
                                                                    8,
                                                                    da,
                                                                ),
                                                                [[a.Jo, e.phpBackupServerCustom]],
                                                            ),
                                                        ],
                                                        2,
                                                    ))
                                                  : (0, $.Q3)('', !0),
                                          ]),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                            e.wordPressRulesEnabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', ra, [
                                      (0, $.Lk)('div', pa, [
                                          (0, $.Lk)(
                                              'label',
                                              ca,
                                              (0, L.v_)(
                                                  e.$t(
                                                      'templates.domainSections.php.wordPressRules',
                                                  ),
                                              ),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', ua, [
                                          (0, $.Lk)('div', ha, [
                                              (0, $.Lk)(
                                                  'div',
                                                  {
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.wordPressRulesChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.Lk)('div', ma, [
                                                          (0, $.bF)(
                                                              n,
                                                              {
                                                                  modelValue: e.wordPressRules,
                                                                  'onUpdate:modelValue':
                                                                      t[5] ||
                                                                      (t[5] = (t) =>
                                                                          (e.wordPressRules = t)),
                                                                  class: 'p-default p-curve p-fill p-icon',
                                                              },
                                                              {
                                                                  default: (0, $.k6)(() => [
                                                                      (0, $.eW)(
                                                                          (0, L.v_)(
                                                                              e.$t(
                                                                                  'templates.domainSections.php.enableWordPressRules',
                                                                              ),
                                                                          ),
                                                                          1,
                                                                      ),
                                                                  ]),
                                                                  _: 1,
                                                              },
                                                              8,
                                                              ['modelValue'],
                                                          ),
                                                      ]),
                                                  ],
                                                  2,
                                              ),
                                          ]),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                            e.drupalRulesEnabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', ga, [
                                      (0, $.Lk)('div', fa, [
                                          (0, $.Lk)(
                                              'label',
                                              va,
                                              (0, L.v_)(
                                                  e.$t('templates.domainSections.php.drupalRules'),
                                              ),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', ba, [
                                          (0, $.Lk)('div', ka, [
                                              (0, $.Lk)(
                                                  'div',
                                                  {
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.drupalRulesChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.Lk)('div', ya, [
                                                          (0, $.bF)(
                                                              n,
                                                              {
                                                                  modelValue: e.drupalRules,
                                                                  'onUpdate:modelValue':
                                                                      t[6] ||
                                                                      (t[6] = (t) =>
                                                                          (e.drupalRules = t)),
                                                                  class: 'p-default p-curve p-fill p-icon',
                                                              },
                                                              {
                                                                  default: (0, $.k6)(() => [
                                                                      (0, $.eW)(
                                                                          (0, L.v_)(
                                                                              e.$t(
                                                                                  'templates.domainSections.php.enableDrupalRules',
                                                                              ),
                                                                          ),
                                                                          1,
                                                                      ),
                                                                  ]),
                                                                  _: 1,
                                                              },
                                                              8,
                                                              ['modelValue'],
                                                          ),
                                                      ]),
                                                  ],
                                                  2,
                                              ),
                                          ]),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                            e.magentoRulesEnabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', $a, [
                                      (0, $.Lk)('div', La, [
                                          (0, $.Lk)(
                                              'label',
                                              Ca,
                                              (0, L.v_)(
                                                  e.$t('templates.domainSections.php.magentoRules'),
                                              ),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', xa, [
                                          (0, $.Lk)('div', Sa, [
                                              (0, $.Lk)(
                                                  'div',
                                                  {
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.magentoRulesChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.Lk)('div', _a, [
                                                          (0, $.bF)(
                                                              n,
                                                              {
                                                                  modelValue: e.magentoRules,
                                                                  'onUpdate:modelValue':
                                                                      t[7] ||
                                                                      (t[7] = (t) =>
                                                                          (e.magentoRules = t)),
                                                                  class: 'p-default p-curve p-fill p-icon',
                                                              },
                                                              {
                                                                  default: (0, $.k6)(() => [
                                                                      (0, $.eW)(
                                                                          (0, L.v_)(
                                                                              e.$t(
                                                                                  'templates.domainSections.php.enableMagentoRules',
                                                                              ),
                                                                          ),
                                                                          1,
                                                                      ),
                                                                  ]),
                                                                  _: 1,
                                                              },
                                                              8,
                                                              ['modelValue'],
                                                          ),
                                                      ]),
                                                  ],
                                                  2,
                                              ),
                                          ]),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                            e.joomlaRulesEnabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', Ea, [
                                      (0, $.Lk)('div', wa, [
                                          (0, $.Lk)(
                                              'label',
                                              Pa,
                                              (0, L.v_)(
                                                  e.$t('templates.domainSections.php.joomlaRules'),
                                              ),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', Ta, [
                                          (0, $.Lk)('div', Va, [
                                              (0, $.Lk)(
                                                  'div',
                                                  {
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.joomlaRulesChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.Lk)('div', Ra, [
                                                          (0, $.bF)(
                                                              n,
                                                              {
                                                                  modelValue: e.joomlaRules,
                                                                  'onUpdate:modelValue':
                                                                      t[8] ||
                                                                      (t[8] = (t) =>
                                                                          (e.joomlaRules = t)),
                                                                  class: 'p-default p-curve p-fill p-icon',
                                                              },
                                                              {
                                                                  default: (0, $.k6)(() => [
                                                                      (0, $.eW)(
                                                                          (0, L.v_)(
                                                                              e.$t(
                                                                                  'templates.domainSections.php.enableJoomlaRules',
                                                                              ),
                                                                          ),
                                                                          1,
                                                                      ),
                                                                  ]),
                                                                  _: 1,
                                                              },
                                                              8,
                                                              ['modelValue'],
                                                          ),
                                                      ]),
                                                  ],
                                                  2,
                                              ),
                                          ]),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                        ])
                    );
                }
                const Da = {
                        '127.0.0.1:9000': 'templates.domainSections.php.tcp',
                        '/var/run/hhvm/sock': 'templates.domainSections.php.hhvmSocket',
                        '/var/run/hhvm/hhvm.sock': 'templates.domainSections.php.hhvmSocket',
                        '/var/run/php/php7.1-fpm.sock': 'templates.domainSections.php.php71Socket',
                        '/var/run/php/php7.2-fpm.sock': 'templates.domainSections.php.php72Socket',
                        '/var/run/php/php7.0-fpm.sock': 'templates.domainSections.php.php70Socket',
                        '/var/run/php/php7.3-fpm.sock': 'templates.domainSections.php.php73Socket',
                        '/var/run/php/php7.4-fpm.sock': 'templates.domainSections.php.php74Socket',
                        '/var/run/php/php8.0-fpm.sock': 'templates.domainSections.php.php80Socket',
                        '/var/run/php/php8.1-fpm.sock': 'templates.domainSections.php.php81Socket',
                        '/var/run/php/php8.2-fpm.sock': 'templates.domainSections.php.php82Socket',
                        '/var/run/php/php-fpm.sock': 'templates.domainSections.php.phpSocket',
                        custom: 'templates.domainSections.php.custom',
                    },
                    Aa = ['', 'custom'],
                    Oa = {
                        phpServer: {
                            default: '/var/run/php/php-fpm.sock',
                            options: Da,
                            enabled: !0,
                        },
                        phpServerCustom: { default: 'unix:/var/run/php/php-fpm.sock', enabled: !1 },
                        phpBackupServer: {
                            default: '',
                            options: { '': 'templates.domainSections.php.disabled', ...Da },
                            enabled: !0,
                        },
                        phpBackupServerCustom: {
                            default: 'unix:/var/run/php/php-fpm.sock',
                            enabled: !1,
                        },
                        php: { default: !0, enabled: !0 },
                        wordPressRules: { default: !1, enabled: !0 },
                        drupalRules: { default: !1, enabled: !0 },
                        magentoRules: { default: !1, enabled: !0 },
                        joomlaRules: { default: !1, enabled: !0 },
                    },
                    za = {
                        name: 'DomainPHP',
                        display: 'common.php',
                        key: 'php',
                        delegated: ce(Oa),
                        components: { PrettyCheck: gt, VueSelect: M.A },
                        props: { data: Object },
                        computed: {
                            ...ue(Oa, 'php'),
                            phpServerOptions() {
                                return Object.entries(this.$props.data.phpServer.options).map(
                                    ([e, t]) => this.formattedOption(e, t),
                                );
                            },
                            phpBackupServerOptions() {
                                return Object.entries(this.$props.data.phpBackupServer.options).map(
                                    ([e, t]) => this.formattedOption(e, t),
                                );
                            },
                        },
                        watch: {
                            '$parent.$props.data': {
                                handler(e) {
                                    e.reverseProxy.reverseProxy.computed || e.python.python.computed
                                        ? ((this.$props.data.php.enabled = !1),
                                          (this.$props.data.php.computed = !1))
                                        : ((this.$props.data.php.enabled = !0),
                                          (this.$props.data.php.computed =
                                              this.$props.data.php.value));
                                },
                                deep: !0,
                            },
                            '$props.data.php': {
                                handler(e) {
                                    e.computed
                                        ? ((this.$props.data.phpServer.enabled = !0),
                                          (this.$props.data.phpServer.computed =
                                              this.$props.data.phpServer.value),
                                          (this.$props.data.phpBackupServer.enabled = !0),
                                          (this.$props.data.phpBackupServer.computed =
                                              this.$props.data.phpBackupServer.value),
                                          (this.$props.data.wordPressRules.enabled = !0),
                                          (this.$props.data.wordPressRules.computed =
                                              this.$props.data.wordPressRules.value),
                                          (this.$props.data.drupalRules.enabled = !0),
                                          (this.$props.data.drupalRules.computed =
                                              this.$props.data.drupalRules.value),
                                          (this.$props.data.magentoRules.enabled = !0),
                                          (this.$props.data.magentoRules.computed =
                                              this.$props.data.magentoRules.value),
                                          (this.$props.data.joomlaRules.enabled = !0),
                                          (this.$props.data.joomlaRules.computed =
                                              this.$props.data.joomlaRules.value))
                                        : ((this.$props.data.phpServer.enabled = !1),
                                          (this.$props.data.phpServer.computed = ''),
                                          (this.$props.data.phpBackupServer.enabled = !1),
                                          (this.$props.data.phpBackupServer.computed = ''),
                                          (this.$props.data.wordPressRules.enabled = !1),
                                          (this.$props.data.wordPressRules.computed = !1),
                                          (this.$props.data.drupalRules.enabled = !1),
                                          (this.$props.data.drupalRules.computed = !1),
                                          (this.$props.data.magentoRules.enabled = !1),
                                          (this.$props.data.magentoRules.computed = !1),
                                          (this.$props.data.joomlaRules.enabled = !1),
                                          (this.$props.data.joomlaRules.computed = !1));
                                },
                                deep: !0,
                            },
                            '$props.data.phpServer': {
                                handler(e) {
                                    if (e.enabled)
                                        return (
                                            Object.keys(e.options).includes(e.computed) ||
                                                (e.computed = e.default),
                                            void (this.$props.data.phpServerCustom.enabled =
                                                'custom' === e.computed)
                                        );
                                    this.$props.data.phpServerCustom.enabled = !1;
                                },
                                deep: !0,
                            },
                            '$props.data.phpBackupServer': {
                                handler(e) {
                                    if (e.enabled)
                                        return (
                                            Object.keys(e.options).includes(e.computed) ||
                                                (e.computed = e.default),
                                            void (this.$props.data.phpBackupServerCustom.enabled =
                                                'custom' === e.computed)
                                        );
                                    this.$props.data.phpBackupServerCustom.enabled = !1;
                                },
                                deep: !0,
                            },
                            '$i18n.locale'() {
                                if (!this.$refs.phpServerSelect) return !1;
                                const e = this.phpServerOptions.find(
                                    (e) =>
                                        e.value === this.$refs.phpServerSelect.$data._value.value,
                                );
                                e && (this.$refs.phpServerSelect.$data._value = e);
                                const t = this.phpBackupServerOptions.find(
                                    (e) =>
                                        e.value ===
                                        this.$refs.phpBackupServerSelect.$data._value.value,
                                );
                                t && (this.$refs.phpBackupServerSelect.$data._value = t);
                            },
                        },
                        methods: {
                            formattedOption(e, t) {
                                return {
                                    label: `${this.$t(t)}${Aa.includes(e) ? '' : `: ${e}`}`,
                                    value: e,
                                };
                            },
                        },
                    },
                    ja = (0, ge.A)(za, [['render', Fa]]),
                    Ha = ja,
                    Wa = { key: 0, class: 'field is-horizontal is-aligned-top' },
                    Xa = { class: 'field-label' },
                    Ia = { class: 'label' },
                    Ma = { class: 'field-body' },
                    Ua = { class: 'field' },
                    Ba = { class: 'control' },
                    Na = { class: 'text' },
                    Qa = (0, $.Lk)('br', null, null, -1),
                    Ga = (0, $.Lk)('br', null, null, -1),
                    Ja = { key: 1, class: 'field is-horizontal' },
                    Ka = { class: 'field-label' },
                    qa = { class: 'label' },
                    Ya = { class: 'field-body' },
                    Za = { class: 'field' },
                    es = { class: 'checkbox' },
                    ts = { key: 2, class: 'field is-horizontal' },
                    os = { class: 'field-label' },
                    as = { class: 'label' },
                    ss = { class: 'field-body' },
                    ls = { class: 'field' },
                    is = { class: 'checkbox' };
                function ns(e, t, o, a, s, l) {
                    const i = (0, $.g2)('PrettyCheck');
                    return (
                        (0, $.uX)(),
                        (0, $.CE)('div', null, [
                            e.pythonEnabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', Ja, [
                                      (0, $.Lk)('div', Ka, [
                                          (0, $.Lk)(
                                              'label',
                                              qa,
                                              (0, L.v_)(e.$t('common.python')),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', Ya, [
                                          (0, $.Lk)('div', Za, [
                                              (0, $.Lk)(
                                                  'div',
                                                  {
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.pythonChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.Lk)('div', es, [
                                                          (0, $.bF)(
                                                              i,
                                                              {
                                                                  modelValue: e.python,
                                                                  'onUpdate:modelValue':
                                                                      t[0] ||
                                                                      (t[0] = (t) =>
                                                                          (e.python = t)),
                                                                  class: 'p-default p-curve p-fill p-icon',
                                                              },
                                                              {
                                                                  default: (0, $.k6)(() => [
                                                                      (0, $.eW)(
                                                                          (0, L.v_)(
                                                                              e.$t(
                                                                                  'templates.domainSections.python.enablePython',
                                                                              ),
                                                                          ),
                                                                          1,
                                                                      ),
                                                                  ]),
                                                                  _: 1,
                                                              },
                                                              8,
                                                              ['modelValue'],
                                                          ),
                                                      ]),
                                                  ],
                                                  2,
                                              ),
                                          ]),
                                      ]),
                                  ]))
                                : ((0, $.uX)(),
                                  (0, $.CE)('div', Wa, [
                                      (0, $.Lk)('div', Xa, [
                                          (0, $.Lk)(
                                              'label',
                                              Ia,
                                              (0, L.v_)(e.$t('common.python')),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', Ma, [
                                          (0, $.Lk)('div', Ua, [
                                              (0, $.Lk)('div', Ba, [
                                                  (0, $.Lk)('label', Na, [
                                                      (0, $.eW)(
                                                          (0, L.v_)(
                                                              e.$t(
                                                                  'templates.domainSections.python.pythonIsDisabled',
                                                              ),
                                                          ) + ' ',
                                                          1,
                                                      ),
                                                      e.$parent.$props.data.reverseProxy
                                                          .reverseProxy.computed
                                                          ? ((0, $.uX)(),
                                                            (0, $.CE)(
                                                                $.FK,
                                                                { key: 0 },
                                                                [
                                                                    Qa,
                                                                    (0, $.eW)(
                                                                        ' ' +
                                                                            (0, L.v_)(
                                                                                e.$t(
                                                                                    'templates.domainSections.python.pythonCannotBeEnabledWithReverseProxy',
                                                                                ),
                                                                            ),
                                                                        1,
                                                                    ),
                                                                ],
                                                                64,
                                                            ))
                                                          : (0, $.Q3)('', !0),
                                                      e.$parent.$props.data.php.php.computed
                                                          ? ((0, $.uX)(),
                                                            (0, $.CE)(
                                                                $.FK,
                                                                { key: 1 },
                                                                [
                                                                    Ga,
                                                                    (0, $.eW)(
                                                                        ' ' +
                                                                            (0, L.v_)(
                                                                                e.$t(
                                                                                    'templates.domainSections.python.pythonCannotBeEnabledWithPhp',
                                                                                ),
                                                                            ),
                                                                        1,
                                                                    ),
                                                                ],
                                                                64,
                                                            ))
                                                          : (0, $.Q3)('', !0),
                                                  ]),
                                              ]),
                                          ]),
                                      ]),
                                  ])),
                            e.djangoRulesEnabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', ts, [
                                      (0, $.Lk)('div', os, [
                                          (0, $.Lk)(
                                              'label',
                                              as,
                                              (0, L.v_)(
                                                  e.$t(
                                                      'templates.domainSections.python.djangoRules',
                                                  ),
                                              ),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', ss, [
                                          (0, $.Lk)('div', ls, [
                                              (0, $.Lk)(
                                                  'div',
                                                  {
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.djangoRulesChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.Lk)('div', is, [
                                                          (0, $.bF)(
                                                              i,
                                                              {
                                                                  modelValue: e.djangoRules,
                                                                  'onUpdate:modelValue':
                                                                      t[1] ||
                                                                      (t[1] = (t) =>
                                                                          (e.djangoRules = t)),
                                                                  class: 'p-default p-curve p-fill p-icon',
                                                              },
                                                              {
                                                                  default: (0, $.k6)(() => [
                                                                      (0, $.eW)(
                                                                          (0, L.v_)(
                                                                              e.$t(
                                                                                  'templates.domainSections.python.enableDjangoRules',
                                                                              ),
                                                                          ),
                                                                          1,
                                                                      ),
                                                                  ]),
                                                                  _: 1,
                                                              },
                                                              8,
                                                              ['modelValue'],
                                                          ),
                                                      ]),
                                                  ],
                                                  2,
                                              ),
                                          ]),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                        ])
                    );
                }
                const ds = {
                        python: { default: !1, enabled: !1 },
                        djangoRules: { default: !1, enabled: !1 },
                    },
                    rs = {
                        name: 'DomainPython',
                        display: 'common.python',
                        key: 'python',
                        delegated: ce(ds),
                        components: { PrettyCheck: gt },
                        props: { data: Object },
                        computed: ue(ds, 'python'),
                        watch: {
                            '$parent.$props.data': {
                                handler(e) {
                                    e.reverseProxy.reverseProxy.computed || e.php.php.computed
                                        ? ((this.$props.data.python.enabled = !1),
                                          (this.$props.data.python.computed = !1))
                                        : ((this.$props.data.python.enabled = !0),
                                          (this.$props.data.python.computed =
                                              this.$props.data.python.value));
                                },
                                deep: !0,
                            },
                            '$props.data.python': {
                                handler(e) {
                                    e.computed
                                        ? ((this.$props.data.djangoRules.enabled = !0),
                                          (this.$props.data.djangoRules.computed =
                                              this.$props.data.djangoRules.value))
                                        : ((this.$props.data.djangoRules.enabled = !1),
                                          (this.$props.data.djangoRules.computed = !1));
                                },
                                deep: !0,
                            },
                        },
                    },
                    ps = (0, ge.A)(rs, [['render', ns]]),
                    cs = ps,
                    us = { key: 0, class: 'field is-horizontal is-aligned-top' },
                    hs = { class: 'field-label' },
                    ms = { class: 'label' },
                    gs = { class: 'field-body' },
                    fs = { class: 'field' },
                    vs = { class: 'control' },
                    bs = { class: 'text' },
                    ks = (0, $.Lk)('br', null, null, -1),
                    ys = (0, $.Lk)('br', null, null, -1),
                    $s = { key: 1, class: 'field is-horizontal' },
                    Ls = { class: 'field-label' },
                    Cs = { class: 'label' },
                    xs = { class: 'field-body' },
                    Ss = { class: 'control' },
                    _s = { class: 'checkbox' },
                    Es = { key: 2, class: 'field is-horizontal' },
                    ws = { class: 'field-label' },
                    Ps = { class: 'label' },
                    Ts = { class: 'field-body' },
                    Vs = { class: 'control' },
                    Rs = ['placeholder'],
                    Fs = { key: 3, class: 'field is-horizontal' },
                    Ds = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'proxy_pass')],
                        -1,
                    ),
                    As = { class: 'field-body' },
                    Os = { class: 'control' },
                    zs = ['placeholder'],
                    js = { key: 4, class: 'field is-horizontal' },
                    Hs = { class: 'field-label' },
                    Ws = { class: 'label' },
                    Xs = { class: 'field-body' },
                    Is = { class: 'control' },
                    Ms = ['placeholder'];
                function Us(e, t, o, s, l, i) {
                    const n = (0, $.g2)('PrettyCheck');
                    return (
                        (0, $.uX)(),
                        (0, $.CE)('div', null, [
                            e.reverseProxyEnabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', $s, [
                                      (0, $.Lk)('div', Ls, [
                                          (0, $.Lk)(
                                              'label',
                                              Cs,
                                              (0, L.v_)(e.$t('common.reverseProxy')),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', xs, [
                                          (0, $.Lk)(
                                              'div',
                                              {
                                                  class: (0, L.C4)(
                                                      'field' +
                                                          (e.reverseProxyChanged
                                                              ? ' is-changed'
                                                              : ''),
                                                  ),
                                              },
                                              [
                                                  (0, $.Lk)('div', Ss, [
                                                      (0, $.Lk)('div', _s, [
                                                          (0, $.bF)(
                                                              n,
                                                              {
                                                                  modelValue: e.reverseProxy,
                                                                  'onUpdate:modelValue':
                                                                      t[0] ||
                                                                      (t[0] = (t) =>
                                                                          (e.reverseProxy = t)),
                                                                  class: 'p-default p-curve p-fill p-icon',
                                                              },
                                                              {
                                                                  default: (0, $.k6)(() => [
                                                                      (0, $.eW)(
                                                                          (0, L.v_)(
                                                                              e.$t(
                                                                                  'templates.domainSections.reverseProxy.enableReverseProxy',
                                                                              ),
                                                                          ),
                                                                          1,
                                                                      ),
                                                                  ]),
                                                                  _: 1,
                                                              },
                                                              8,
                                                              ['modelValue'],
                                                          ),
                                                      ]),
                                                  ]),
                                              ],
                                              2,
                                          ),
                                      ]),
                                  ]))
                                : ((0, $.uX)(),
                                  (0, $.CE)('div', us, [
                                      (0, $.Lk)('div', hs, [
                                          (0, $.Lk)(
                                              'label',
                                              ms,
                                              (0, L.v_)(e.$t('common.reverseProxy')),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', gs, [
                                          (0, $.Lk)('div', fs, [
                                              (0, $.Lk)('div', vs, [
                                                  (0, $.Lk)('label', bs, [
                                                      (0, $.eW)(
                                                          (0, L.v_)(
                                                              e.$t(
                                                                  'templates.domainSections.reverseProxy.reverseProxyIsDisabled',
                                                              ),
                                                          ) + ' ',
                                                          1,
                                                      ),
                                                      e.$parent.$props.data.php.php.computed
                                                          ? ((0, $.uX)(),
                                                            (0, $.CE)(
                                                                $.FK,
                                                                { key: 0 },
                                                                [
                                                                    ks,
                                                                    (0, $.eW)(
                                                                        ' ' +
                                                                            (0, L.v_)(
                                                                                e.$t(
                                                                                    'templates.domainSections.reverseProxy.reverseProxyCannotBeEnabledWithPhp',
                                                                                ),
                                                                            ),
                                                                        1,
                                                                    ),
                                                                ],
                                                                64,
                                                            ))
                                                          : (0, $.Q3)('', !0),
                                                      e.$parent.$props.data.python.python.computed
                                                          ? ((0, $.uX)(),
                                                            (0, $.CE)(
                                                                $.FK,
                                                                { key: 1 },
                                                                [
                                                                    ys,
                                                                    (0, $.eW)(
                                                                        ' ' +
                                                                            (0, L.v_)(
                                                                                e.$t(
                                                                                    'templates.domainSections.reverseProxy.reverseProxyCannotBeEnabledWithPython',
                                                                                ),
                                                                            ),
                                                                        1,
                                                                    ),
                                                                ],
                                                                64,
                                                            ))
                                                          : (0, $.Q3)('', !0),
                                                  ]),
                                              ]),
                                          ]),
                                      ]),
                                  ])),
                            e.pathEnabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', Es, [
                                      (0, $.Lk)('div', ws, [
                                          (0, $.Lk)('label', Ps, (0, L.v_)(e.$t('common.path')), 1),
                                      ]),
                                      (0, $.Lk)('div', Ts, [
                                          (0, $.Lk)(
                                              'div',
                                              {
                                                  class: (0, L.C4)(
                                                      'field' +
                                                          (e.pathChanged ? ' is-changed' : ''),
                                                  ),
                                              },
                                              [
                                                  (0, $.Lk)('div', Vs, [
                                                      (0, $.bo)(
                                                          (0, $.Lk)(
                                                              'input',
                                                              {
                                                                  'onUpdate:modelValue':
                                                                      t[1] ||
                                                                      (t[1] = (t) => (e.path = t)),
                                                                  class: 'input',
                                                                  type: 'text',
                                                                  placeholder:
                                                                      e.$props.data.path.default,
                                                              },
                                                              null,
                                                              8,
                                                              Rs,
                                                          ),
                                                          [[a.Jo, e.path]],
                                                      ),
                                                  ]),
                                              ],
                                              2,
                                          ),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                            e.proxyPassEnabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', Fs, [
                                      Ds,
                                      (0, $.Lk)('div', As, [
                                          (0, $.Lk)(
                                              'div',
                                              {
                                                  class: (0, L.C4)(
                                                      'field' +
                                                          (e.proxyPassChanged ? ' is-changed' : ''),
                                                  ),
                                              },
                                              [
                                                  (0, $.Lk)('div', Os, [
                                                      (0, $.bo)(
                                                          (0, $.Lk)(
                                                              'input',
                                                              {
                                                                  'onUpdate:modelValue':
                                                                      t[2] ||
                                                                      (t[2] = (t) =>
                                                                          (e.proxyPass = t)),
                                                                  class: 'input',
                                                                  type: 'text',
                                                                  placeholder:
                                                                      e.$props.data.proxyPass
                                                                          .default,
                                                              },
                                                              null,
                                                              8,
                                                              zs,
                                                          ),
                                                          [[a.Jo, e.proxyPass]],
                                                      ),
                                                  ]),
                                              ],
                                              2,
                                          ),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                            e.proxyHostHeaderEnabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', js, [
                                      (0, $.Lk)('div', Hs, [
                                          (0, $.Lk)(
                                              'label',
                                              Ws,
                                              (0, L.v_)(
                                                  e.$t(
                                                      'templates.domainSections.reverseProxy.proxyHostHeader',
                                                  ),
                                              ),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', Xs, [
                                          (0, $.Lk)(
                                              'div',
                                              {
                                                  class: (0, L.C4)(
                                                      'field' +
                                                          (e.proxyHostHeaderChanged
                                                              ? ' is-changed'
                                                              : ''),
                                                  ),
                                              },
                                              [
                                                  (0, $.Lk)('div', Is, [
                                                      (0, $.bo)(
                                                          (0, $.Lk)(
                                                              'input',
                                                              {
                                                                  'onUpdate:modelValue':
                                                                      t[3] ||
                                                                      (t[3] = (t) =>
                                                                          (e.proxyHostHeader = t)),
                                                                  class: 'input',
                                                                  type: 'text',
                                                                  placeholder:
                                                                      e.$props.data.proxyHostHeader
                                                                          .default,
                                                              },
                                                              null,
                                                              8,
                                                              Ms,
                                                          ),
                                                          [[a.Jo, e.proxyHostHeader]],
                                                      ),
                                                  ]),
                                              ],
                                              2,
                                          ),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                        ])
                    );
                }
                const Bs = {
                        reverseProxy: { default: !1, enabled: !1 },
                        path: { default: '/', enabled: !1 },
                        proxyPass: { default: 'http://127.0.0.1:3000', enabled: !1 },
                        proxyHostHeader: { default: '$host', enabled: !1 },
                    },
                    Ns = {
                        name: 'DomainReverseProxy',
                        display: 'common.reverseProxy',
                        key: 'reverseProxy',
                        delegated: ce(Bs),
                        components: { PrettyCheck: gt },
                        props: { data: Object },
                        computed: ue(Bs, 'reverseProxy'),
                        watch: {
                            '$parent.$props.data': {
                                handler(e) {
                                    e.php.php.computed || e.python.python.computed
                                        ? ((this.$props.data.reverseProxy.enabled = !1),
                                          (this.$props.data.reverseProxy.computed = !1))
                                        : ((this.$props.data.reverseProxy.enabled = !0),
                                          (this.$props.data.reverseProxy.computed =
                                              this.$props.data.reverseProxy.value));
                                },
                                deep: !0,
                            },
                            '$props.data.reverseProxy': {
                                handler(e) {
                                    e.computed
                                        ? ((this.$props.data.path.enabled = !0),
                                          (this.$props.data.path.computed =
                                              this.$props.data.path.value),
                                          (this.$props.data.proxyPass.enabled = !0),
                                          (this.$props.data.proxyPass.computed =
                                              this.$props.data.proxyPass.value),
                                          (this.$props.data.proxyHostHeader.enabled = !0),
                                          (this.$props.data.proxyHostHeader.computed =
                                              this.$props.data.proxyHostHeader.value))
                                        : ((this.$props.data.path.enabled = !1),
                                          (this.$props.data.path.computed = ''),
                                          (this.$props.data.proxyPass.enabled = !1),
                                          (this.$props.data.proxyPass.computed = ''),
                                          (this.$props.data.proxyHostHeader.enabled = !1),
                                          (this.$props.data.proxyHostHeader.computed = ''));
                                },
                                deep: !0,
                            },
                        },
                    },
                    Qs = (0, ge.A)(Ns, [['render', Us]]),
                    Gs = Qs,
                    Js = { class: 'field is-horizontal' },
                    Ks = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'root')],
                        -1,
                    ),
                    qs = { class: 'field-body' },
                    Ys = { class: 'field' },
                    Zs = { class: 'checkbox' },
                    el = { key: 0, class: 'field is-horizontal is-aligned-top' },
                    tl = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'index')],
                        -1,
                    ),
                    ol = { class: 'field-body' },
                    al = { class: 'field' },
                    sl = { class: 'radio' },
                    ll = { key: 1, class: 'field is-horizontal is-aligned-top' },
                    il = { class: 'field-label' },
                    nl = { class: 'label' },
                    dl = { class: 'field-body' },
                    rl = { class: 'field' },
                    pl = { class: 'checkbox' },
                    cl = { class: 'checkbox' },
                    ul = { key: 2, class: 'field is-horizontal' },
                    hl = { class: 'field-label' },
                    ml = { class: 'label' },
                    gl = { class: 'field-body' },
                    fl = { class: 'control' },
                    vl = ['placeholder'],
                    bl = { key: 3, class: 'field is-horizontal' },
                    kl = { class: 'field-label' },
                    yl = { class: 'label' },
                    $l = { class: 'field-body' },
                    Ll = { class: 'field' },
                    Cl = { class: 'checkbox' };
                function xl(e, t, o, s, l, i) {
                    const n = (0, $.g2)('PrettyCheck'),
                        d = (0, $.g2)('PrettyRadio');
                    return (
                        (0, $.uX)(),
                        (0, $.CE)('div', null, [
                            (0, $.Lk)('div', Js, [
                                Ks,
                                (0, $.Lk)('div', qs, [
                                    (0, $.Lk)('div', Ys, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.rootChanged ? ' is-changed' : ''),
                                                ),
                                            },
                                            [
                                                (0, $.Lk)('div', Zs, [
                                                    (0, $.bF)(
                                                        n,
                                                        {
                                                            modelValue: e.root,
                                                            'onUpdate:modelValue':
                                                                t[0] ||
                                                                (t[0] = (t) => (e.root = t)),
                                                            class: 'p-default p-curve p-fill p-icon',
                                                        },
                                                        {
                                                            default: (0, $.k6)(() => [
                                                                (0, $.eW)(
                                                                    (0, L.v_)(
                                                                        e.$t('common.enable'),
                                                                    ),
                                                                    1,
                                                                ),
                                                            ]),
                                                            _: 1,
                                                        },
                                                        8,
                                                        ['modelValue'],
                                                    ),
                                                ]),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                            e.indexEnabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', el, [
                                      tl,
                                      (0, $.Lk)('div', ol, [
                                          (0, $.Lk)('div', al, [
                                              ((0, $.uX)(!0),
                                              (0, $.CE)(
                                                  $.FK,
                                                  null,
                                                  (0, $.pI)(
                                                      e.$props.data.index.options,
                                                      (o) => (
                                                          (0, $.uX)(),
                                                          (0, $.CE)(
                                                              'div',
                                                              {
                                                                  class: (0, L.C4)(
                                                                      'control' +
                                                                          (e.indexChanged &&
                                                                          o === e.index
                                                                              ? ' is-changed'
                                                                              : ''),
                                                                  ),
                                                              },
                                                              [
                                                                  (0, $.Lk)('div', sl, [
                                                                      (0, $.bF)(
                                                                          d,
                                                                          {
                                                                              modelValue: e.index,
                                                                              'onUpdate:modelValue':
                                                                                  t[1] ||
                                                                                  (t[1] = (t) =>
                                                                                      (e.index =
                                                                                          t)),
                                                                              value: o,
                                                                              class: 'p-default p-round p-fill p-icon',
                                                                          },
                                                                          {
                                                                              default: (0, $.k6)(
                                                                                  () => [
                                                                                      (0, $.eW)(
                                                                                          (0, L.v_)(
                                                                                              o,
                                                                                          ),
                                                                                          1,
                                                                                      ),
                                                                                  ],
                                                                              ),
                                                                              _: 2,
                                                                          },
                                                                          1032,
                                                                          ['modelValue', 'value'],
                                                                      ),
                                                                  ]),
                                                              ],
                                                              2,
                                                          )
                                                      ),
                                                  ),
                                                  256,
                                              )),
                                          ]),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                            e.fallbackHtmlEnabled || e.fallbackPhpEnabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', ll, [
                                      (0, $.Lk)('div', il, [
                                          (0, $.Lk)(
                                              'label',
                                              nl,
                                              (0, L.v_)(
                                                  e.$t(
                                                      'templates.domainSections.routing.fallbackRouting',
                                                  ),
                                              ),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', dl, [
                                          (0, $.Lk)('div', rl, [
                                              e.fallbackHtmlEnabled
                                                  ? ((0, $.uX)(),
                                                    (0, $.CE)(
                                                        'div',
                                                        {
                                                            key: 0,
                                                            class: (0, L.C4)(
                                                                'control' +
                                                                    (e.fallbackHtmlChanged
                                                                        ? ' is-changed'
                                                                        : ''),
                                                            ),
                                                        },
                                                        [
                                                            (0, $.Lk)('div', pl, [
                                                                (0, $.bF)(
                                                                    n,
                                                                    {
                                                                        modelValue: e.fallbackHtml,
                                                                        'onUpdate:modelValue':
                                                                            t[2] ||
                                                                            (t[2] = (t) =>
                                                                                (e.fallbackHtml =
                                                                                    t)),
                                                                        class: 'p-default p-curve p-fill p-icon',
                                                                    },
                                                                    {
                                                                        default: (0, $.k6)(() => [
                                                                            (0, $.eW)(
                                                                                ' index.html ',
                                                                            ),
                                                                        ]),
                                                                        _: 1,
                                                                    },
                                                                    8,
                                                                    ['modelValue'],
                                                                ),
                                                            ]),
                                                        ],
                                                        2,
                                                    ))
                                                  : (0, $.Q3)('', !0),
                                              e.fallbackPhpEnabled
                                                  ? ((0, $.uX)(),
                                                    (0, $.CE)(
                                                        'div',
                                                        {
                                                            key: 1,
                                                            class: (0, L.C4)(
                                                                'control' +
                                                                    (e.fallbackPhpChanged
                                                                        ? ' is-changed'
                                                                        : ''),
                                                            ),
                                                        },
                                                        [
                                                            (0, $.Lk)('div', cl, [
                                                                (0, $.bF)(
                                                                    n,
                                                                    {
                                                                        modelValue: e.fallbackPhp,
                                                                        'onUpdate:modelValue':
                                                                            t[3] ||
                                                                            (t[3] = (t) =>
                                                                                (e.fallbackPhp =
                                                                                    t)),
                                                                        class: 'p-default p-curve p-fill p-icon',
                                                                    },
                                                                    {
                                                                        default: (0, $.k6)(() => [
                                                                            (0, $.eW)(
                                                                                ' index.php ',
                                                                            ),
                                                                        ]),
                                                                        _: 1,
                                                                    },
                                                                    8,
                                                                    ['modelValue'],
                                                                ),
                                                            ]),
                                                        ],
                                                        2,
                                                    ))
                                                  : (0, $.Q3)('', !0),
                                          ]),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                            e.fallbackPhpPathEnabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', ul, [
                                      (0, $.Lk)('div', hl, [
                                          (0, $.Lk)(
                                              'label',
                                              ml,
                                              (0, L.v_)(
                                                  e.$t(
                                                      'templates.domainSections.routing.fallbackRoutingPhpPath',
                                                  ),
                                              ),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', gl, [
                                          (0, $.Lk)(
                                              'div',
                                              {
                                                  class: (0, L.C4)(
                                                      'field' +
                                                          (e.fallbackPhpPathChanged
                                                              ? ' is-changed'
                                                              : ''),
                                                  ),
                                              },
                                              [
                                                  (0, $.Lk)('div', fl, [
                                                      (0, $.bo)(
                                                          (0, $.Lk)(
                                                              'input',
                                                              {
                                                                  'onUpdate:modelValue':
                                                                      t[4] ||
                                                                      (t[4] = (t) =>
                                                                          (e.fallbackPhpPath = t)),
                                                                  class: 'input',
                                                                  type: 'text',
                                                                  placeholder:
                                                                      e.$props.data.fallbackPhpPath
                                                                          .default,
                                                              },
                                                              null,
                                                              8,
                                                              vl,
                                                          ),
                                                          [[a.Jo, e.fallbackPhpPath]],
                                                      ),
                                                  ]),
                                              ],
                                              2,
                                          ),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                            e.legacyPhpRoutingEnabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', bl, [
                                      (0, $.Lk)('div', kl, [
                                          (0, $.Lk)(
                                              'label',
                                              yl,
                                              (0, L.v_)(
                                                  e.$t(
                                                      'templates.domainSections.routing.legacyPhpRouting',
                                                  ),
                                              ),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', $l, [
                                          (0, $.Lk)('div', Ll, [
                                              (0, $.Lk)(
                                                  'div',
                                                  {
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.legacyPhpRoutingChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.Lk)('div', Cl, [
                                                          (0, $.bF)(
                                                              n,
                                                              {
                                                                  modelValue: e.legacyPhpRouting,
                                                                  'onUpdate:modelValue':
                                                                      t[5] ||
                                                                      (t[5] = (t) =>
                                                                          (e.legacyPhpRouting = t)),
                                                                  class: 'p-default p-curve p-fill p-icon',
                                                              },
                                                              {
                                                                  default: (0, $.k6)(() => [
                                                                      (0, $.eW)(
                                                                          (0, L.v_)(
                                                                              e.$t(
                                                                                  'templates.domainSections.routing.enableLegacyRouting',
                                                                              ),
                                                                          ),
                                                                          1,
                                                                      ),
                                                                  ]),
                                                                  _: 1,
                                                              },
                                                              8,
                                                              ['modelValue'],
                                                          ),
                                                      ]),
                                                  ],
                                                  2,
                                              ),
                                          ]),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                        ])
                    );
                }
                const Sl = {
                        root: { default: !0, enabled: !0 },
                        index: {
                            default: 'index.php',
                            options: ['index.html', 'index.php'],
                            enabled: !0,
                        },
                        fallbackHtml: { default: !1, enabled: !0 },
                        fallbackPhp: { default: !0, enabled: !0 },
                        fallbackPhpPath: { default: '/api/', enabled: !1 },
                        legacyPhpRouting: { default: !1, enabled: !0 },
                    },
                    _l = {
                        name: 'DomainRouting',
                        display: 'templates.domainSections.routing.routing',
                        key: 'routing',
                        delegated: ce(Sl),
                        components: { PrettyCheck: gt, PrettyRadio: Vo },
                        props: { data: Object },
                        computed: ue(Sl, 'routing'),
                        watch: {
                            '$props.data.root': {
                                handler(e) {
                                    e.computed
                                        ? ((this.$props.data.index.enabled = !0),
                                          (this.$props.data.index.computed =
                                              this.$props.data.index.value),
                                          (this.$props.data.fallbackHtml.enabled = !0),
                                          (this.$props.data.fallbackHtml.computed =
                                              this.$props.data.fallbackHtml.value),
                                          (this.$props.data.fallbackPhp.enabled = !0),
                                          (this.$props.data.fallbackPhp.computed =
                                              this.$props.data.fallbackPhp.value))
                                        : ((this.$props.data.index.enabled = !1),
                                          (this.$props.data.index.computed = ''),
                                          (this.$props.data.fallbackHtml.enabled = !1),
                                          (this.$props.data.fallbackHtml.computed = !1),
                                          (this.$props.data.fallbackPhp.enabled = !1),
                                          (this.$props.data.fallbackPhp.computed = !1));
                                },
                                deep: !0,
                            },
                            '$props.data': {
                                handler(e) {
                                    e.fallbackHtml.computed && e.fallbackPhp.computed
                                        ? ((this.$props.data.fallbackPhpPath.enabled = !0),
                                          (this.$props.data.fallbackPhpPath.computed =
                                              this.$props.data.fallbackPhpPath.value))
                                        : ((this.$props.data.fallbackPhpPath.enabled = !1),
                                          (this.$props.data.fallbackPhpPath.computed = ''));
                                },
                                deep: !0,
                            },
                        },
                    },
                    El = (0, ge.A)(_l, [['render', xl]]),
                    wl = El,
                    Pl = { class: 'field is-horizontal is-aligned-top' },
                    Tl = { class: 'field-label has-small-margin-top' },
                    Vl = { class: 'label' },
                    Rl = { class: 'field-body' },
                    Fl = { class: 'field' },
                    Dl = { class: 'checkbox' },
                    Al = ['placeholder'],
                    Ol = { key: 0, class: 'field is-horizontal' },
                    zl = { class: 'field-label' },
                    jl = { class: 'label' },
                    Hl = { class: 'field-body' },
                    Wl = { class: 'field' },
                    Xl = ['placeholder'],
                    Il = { class: 'field is-horizontal is-aligned-top' },
                    Ml = { class: 'field-label has-small-margin-top' },
                    Ul = { class: 'label' },
                    Bl = { class: 'field-body' },
                    Nl = { class: 'field' },
                    Ql = { class: 'checkbox' },
                    Gl = { class: 'field is-horizontal is-aligned-top' },
                    Jl = { class: 'field-label has-small-margin-top' },
                    Kl = { class: 'label' },
                    ql = { class: 'field-body' },
                    Yl = { class: 'field' },
                    Zl = { class: 'checkbox' },
                    ei = ['disabled', 'placeholder'],
                    ti = { key: 1, class: 'field is-horizontal' },
                    oi = { class: 'field-label' },
                    ai = { class: 'label' },
                    si = { class: 'field-body' },
                    li = { class: 'field is-horizontal' },
                    ii = { class: 'radio' },
                    ni = { class: 'field is-horizontal is-aligned-top' },
                    di = { class: 'field-label has-small-margin-top' },
                    ri = { class: 'label' },
                    pi = { class: 'field-body' },
                    ci = { class: 'field' },
                    ui = { class: 'checkbox' };
                function hi(e, t, o, s, l, i) {
                    const n = (0, $.g2)('PrettyCheck'),
                        d = (0, $.g2)('PrettyRadio');
                    return (
                        (0, $.uX)(),
                        (0, $.CE)('div', null, [
                            (0, $.Lk)('div', Pl, [
                                (0, $.Lk)('div', Tl, [
                                    (0, $.Lk)(
                                        'label',
                                        Vl,
                                        ' access_log ' +
                                            (0, L.v_)(
                                                e.$t('templates.domainSections.logging.byDomain'),
                                            ),
                                        1,
                                    ),
                                ]),
                                (0, $.Lk)('div', Rl, [
                                    (0, $.Lk)('div', Fl, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.accessLogEnabledChanged
                                                            ? ' is-changed'
                                                            : ''),
                                                ),
                                            },
                                            [
                                                (0, $.Lk)('div', Dl, [
                                                    (0, $.bF)(
                                                        n,
                                                        {
                                                            modelValue: e.accessLogEnabled,
                                                            'onUpdate:modelValue':
                                                                t[0] ||
                                                                (t[0] = (t) =>
                                                                    (e.accessLogEnabled = t)),
                                                            class: 'p-default p-curve p-fill p-icon',
                                                        },
                                                        {
                                                            default: (0, $.k6)(() => [
                                                                (0, $.eW)(
                                                                    (0, L.v_)(
                                                                        e.$t(
                                                                            'templates.domainSections.logging.enableForThisDomain',
                                                                        ),
                                                                    ),
                                                                    1,
                                                                ),
                                                            ]),
                                                            _: 1,
                                                        },
                                                        8,
                                                        ['modelValue'],
                                                    ),
                                                ]),
                                            ],
                                            2,
                                        ),
                                        e.$props.data.accessLogEnabled.computed
                                            ? ((0, $.uX)(),
                                              (0, $.CE)(
                                                  'div',
                                                  {
                                                      key: 0,
                                                      class: (0, L.C4)(
                                                          'control field is-horizontal is-expanded' +
                                                              (e.accessLogPathChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.bo)(
                                                          (0, $.Lk)(
                                                              'input',
                                                              {
                                                                  'onUpdate:modelValue':
                                                                      t[1] ||
                                                                      (t[1] = (t) =>
                                                                          (e.accessLogPath = t)),
                                                                  class: 'input',
                                                                  type: 'text',
                                                                  placeholder:
                                                                      e.$props.data.accessLogPath
                                                                          .default,
                                                              },
                                                              null,
                                                              8,
                                                              Al,
                                                          ),
                                                          [[a.Jo, e.accessLogPath]],
                                                      ),
                                                  ],
                                                  2,
                                              ))
                                            : (0, $.Q3)('', !0),
                                    ]),
                                ]),
                            ]),
                            e.$props.data.accessLogEnabled.computed
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', Ol, [
                                      (0, $.Lk)('div', zl, [
                                          (0, $.Lk)(
                                              'label',
                                              jl,
                                              ' access_log ' +
                                                  (0, L.v_)(
                                                      e.$t(
                                                          'templates.domainSections.logging.arguments',
                                                      ),
                                                  ),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', Hl, [
                                          (0, $.Lk)('div', Wl, [
                                              (0, $.Lk)(
                                                  'div',
                                                  {
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.accessLogParametersChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.bo)(
                                                          (0, $.Lk)(
                                                              'input',
                                                              {
                                                                  'onUpdate:modelValue':
                                                                      t[2] ||
                                                                      (t[2] = (t) =>
                                                                          (e.accessLogParameters =
                                                                              t)),
                                                                  class: 'input',
                                                                  type: 'text',
                                                                  placeholder:
                                                                      e.$props.data
                                                                          .accessLogParameters
                                                                          .default,
                                                              },
                                                              null,
                                                              8,
                                                              Xl,
                                                          ),
                                                          [[a.Jo, e.accessLogParameters]],
                                                      ),
                                                  ],
                                                  2,
                                              ),
                                          ]),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                            (0, $.Lk)('div', Il, [
                                (0, $.Lk)('div', Ml, [
                                    (0, $.Lk)(
                                        'label',
                                        Ul,
                                        ' access_log ' +
                                            (0, L.v_)(
                                                e.$t(
                                                    'templates.domainSections.logging.forRedirects',
                                                ),
                                            ),
                                        1,
                                    ),
                                ]),
                                (0, $.Lk)('div', Bl, [
                                    (0, $.Lk)('div', Nl, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.redirectAccessLogChanged
                                                            ? ' is-changed'
                                                            : ''),
                                                ),
                                            },
                                            [
                                                (0, $.Lk)('div', Ql, [
                                                    (0, $.bF)(
                                                        n,
                                                        {
                                                            modelValue: e.redirectAccessLog,
                                                            'onUpdate:modelValue':
                                                                t[3] ||
                                                                (t[3] = (t) =>
                                                                    (e.redirectAccessLog = t)),
                                                            class: 'p-default p-curve p-fill p-icon',
                                                        },
                                                        {
                                                            default: (0, $.k6)(() => [
                                                                (0, $.eW)(
                                                                    (0, L.v_)(
                                                                        e.$t('common.enable'),
                                                                    ),
                                                                    1,
                                                                ),
                                                            ]),
                                                            _: 1,
                                                        },
                                                        8,
                                                        ['modelValue'],
                                                    ),
                                                ]),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                            (0, $.Lk)('div', Gl, [
                                (0, $.Lk)('div', Jl, [
                                    (0, $.Lk)(
                                        'label',
                                        Kl,
                                        ' error_log ' +
                                            (0, L.v_)(
                                                e.$t('templates.domainSections.logging.byDomain'),
                                            ),
                                        1,
                                    ),
                                ]),
                                (0, $.Lk)('div', ql, [
                                    (0, $.Lk)('div', Yl, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.errorLogEnabledChanged
                                                            ? ' is-changed'
                                                            : ''),
                                                ),
                                            },
                                            [
                                                (0, $.Lk)('div', Zl, [
                                                    (0, $.bF)(
                                                        n,
                                                        {
                                                            modelValue: e.errorLogEnabled,
                                                            'onUpdate:modelValue':
                                                                t[4] ||
                                                                (t[4] = (t) =>
                                                                    (e.errorLogEnabled = t)),
                                                            class: 'p-default p-curve p-fill p-icon',
                                                        },
                                                        {
                                                            default: (0, $.k6)(() => [
                                                                (0, $.eW)(
                                                                    (0, L.v_)(
                                                                        e.$t(
                                                                            'templates.domainSections.logging.enableForThisDomain',
                                                                        ),
                                                                    ),
                                                                    1,
                                                                ),
                                                            ]),
                                                            _: 1,
                                                        },
                                                        8,
                                                        ['modelValue'],
                                                    ),
                                                ]),
                                                e.$props.data.errorLogEnabled.computed
                                                    ? ((0, $.uX)(),
                                                      (0, $.CE)(
                                                          'div',
                                                          {
                                                              key: 0,
                                                              class: (0, L.C4)(
                                                                  'control field is-horizontal is-expanded' +
                                                                      (e.errorLogPathChanged
                                                                          ? ' is-changed'
                                                                          : ''),
                                                              ),
                                                          },
                                                          [
                                                              (0, $.bo)(
                                                                  (0, $.Lk)(
                                                                      'input',
                                                                      {
                                                                          'onUpdate:modelValue':
                                                                              t[5] ||
                                                                              (t[5] = (t) =>
                                                                                  (e.errorLogPath =
                                                                                      t)),
                                                                          class: 'input',
                                                                          type: 'text',
                                                                          disabled:
                                                                              !e.errorLogPathEnabled,
                                                                          placeholder:
                                                                              e.$props.data
                                                                                  .errorLogPath
                                                                                  .default,
                                                                      },
                                                                      null,
                                                                      8,
                                                                      ei,
                                                                  ),
                                                                  [[a.Jo, e.errorLogPath]],
                                                              ),
                                                          ],
                                                          2,
                                                      ))
                                                    : (0, $.Q3)('', !0),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                            e.$props.data.errorLogEnabled.computed
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', ti, [
                                      (0, $.Lk)('div', oi, [
                                          (0, $.Lk)(
                                              'label',
                                              ai,
                                              ' error_log ' +
                                                  (0, L.v_)(
                                                      e.$t(
                                                          'templates.domainSections.logging.level',
                                                      ),
                                                  ),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', si, [
                                          (0, $.Lk)('div', li, [
                                              ((0, $.uX)(!0),
                                              (0, $.CE)(
                                                  $.FK,
                                                  null,
                                                  (0, $.pI)(
                                                      e.$props.data.errorLogLevel.options,
                                                      (o) => (
                                                          (0, $.uX)(),
                                                          (0, $.CE)(
                                                              'div',
                                                              {
                                                                  class: (0, L.C4)(
                                                                      'control' +
                                                                          (e.errorLogLevelChanged &&
                                                                          o === e.errorLogLevel
                                                                              ? ' is-changed'
                                                                              : ''),
                                                                  ),
                                                              },
                                                              [
                                                                  (0, $.Lk)('div', ii, [
                                                                      (0, $.bF)(
                                                                          d,
                                                                          {
                                                                              modelValue:
                                                                                  e.errorLogLevel,
                                                                              'onUpdate:modelValue':
                                                                                  t[6] ||
                                                                                  (t[6] = (t) =>
                                                                                      (e.errorLogLevel =
                                                                                          t)),
                                                                              value: o,
                                                                              class: 'p-default p-round p-fill p-icon',
                                                                          },
                                                                          {
                                                                              default: (0, $.k6)(
                                                                                  () => [
                                                                                      (0, $.eW)(
                                                                                          (0, L.v_)(
                                                                                              o,
                                                                                          ),
                                                                                          1,
                                                                                      ),
                                                                                  ],
                                                                              ),
                                                                              _: 2,
                                                                          },
                                                                          1032,
                                                                          ['modelValue', 'value'],
                                                                      ),
                                                                  ]),
                                                              ],
                                                              2,
                                                          )
                                                      ),
                                                  ),
                                                  256,
                                              )),
                                          ]),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                            (0, $.Lk)('div', ni, [
                                (0, $.Lk)('div', di, [
                                    (0, $.Lk)(
                                        'label',
                                        ri,
                                        ' error_log ' +
                                            (0, L.v_)(
                                                e.$t(
                                                    'templates.domainSections.logging.forRedirects',
                                                ),
                                            ),
                                        1,
                                    ),
                                ]),
                                (0, $.Lk)('div', pi, [
                                    (0, $.Lk)('div', ci, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.redirectErrorLogChanged
                                                            ? ' is-changed'
                                                            : ''),
                                                ),
                                            },
                                            [
                                                (0, $.Lk)('div', ui, [
                                                    (0, $.bF)(
                                                        n,
                                                        {
                                                            modelValue: e.redirectErrorLog,
                                                            'onUpdate:modelValue':
                                                                t[7] ||
                                                                (t[7] = (t) =>
                                                                    (e.redirectErrorLog = t)),
                                                            class: 'p-default p-curve p-fill p-icon',
                                                        },
                                                        {
                                                            default: (0, $.k6)(() => [
                                                                (0, $.eW)(
                                                                    (0, L.v_)(
                                                                        e.$t('common.enable'),
                                                                    ),
                                                                    1,
                                                                ),
                                                            ]),
                                                            _: 1,
                                                        },
                                                        8,
                                                        ['modelValue'],
                                                    ),
                                                ]),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                        ])
                    );
                }
                const mi = '/var/log/nginx/access.log',
                    gi = 'buffer=512k flush=1m',
                    fi = '/var/log/nginx/error.log',
                    vi = '/dev/null',
                    bi = 'warn',
                    ki = Object.freeze([
                        'debug',
                        'info',
                        'notice',
                        'warn',
                        'error',
                        'crit',
                        'alert',
                        'emerg',
                    ]),
                    yi = 'none',
                    $i = (e, t) => {
                        let o = e.logging.accessLogPath.computed.trim();
                        return (
                            o || (o = mi),
                            o +
                                (t.logging.cloudflare.computed ? ' cloudflare' : ' combined') +
                                (e.logging.accessLogParameters.computed.trim()
                                    ? ` ${e.logging.accessLogParameters.computed.trim()}`
                                    : '')
                        );
                    },
                    Li = (e) => {
                        let t = e.logging.errorLogPath.computed.trim();
                        t || (t = fi);
                        const o = ki.includes(e.logging.errorLogLevel.computed)
                            ? ` ${e.logging.errorLogLevel.computed}`
                            : '';
                        return `${t}${o}`;
                    },
                    Ci = {
                        accessLogEnabled: { default: !0, enabled: !0 },
                        accessLogPath: { default: mi, enabled: !0 },
                        accessLogParameters: { default: gi, enabled: !0 },
                        redirectAccessLog: { default: !1, enabled: !0 },
                        errorLogEnabled: { default: !0, enabled: !0 },
                        errorLogPath: { default: fi, enabled: !0 },
                        errorLogLevel: { default: bi, options: [yi, ...ki], enabled: !0 },
                        redirectErrorLog: { default: !1, enabled: !0 },
                    },
                    xi = {
                        name: 'DomainLogging',
                        display: 'common.logging',
                        key: 'logging',
                        delegated: ce(Ci),
                        components: { PrettyCheck: gt, PrettyRadio: Vo },
                        props: { data: Object },
                        computed: ue(Ci, 'logging'),
                        watch: {
                            '$props.data.errorLogLevel': {
                                handler(e) {
                                    e.computed === yi
                                        ? ((this.$props.data.errorLogPath.enabled = !1),
                                          (this.$props.data.errorLogPath.computed = vi))
                                        : this.$props.data.errorLogPath.enabled ||
                                          ((this.$props.data.errorLogPath.enabled = !0),
                                          (this.$props.data.errorLogPath.computed =
                                              this.$props.data.errorLogPath.value));
                                },
                                deep: !0,
                            },
                        },
                    },
                    Si = (0, ge.A)(xi, [['render', hi]]),
                    _i = Si,
                    Ei = { class: 'columns' },
                    wi = { class: 'column' },
                    Pi = { class: 'field is-horizontal' },
                    Ti = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'GET')],
                        -1,
                    ),
                    Vi = { class: 'field-body' },
                    Ri = { class: 'field' },
                    Fi = { class: 'checkbox' },
                    Di = { class: 'field is-horizontal' },
                    Ai = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'POST')],
                        -1,
                    ),
                    Oi = { class: 'field-body' },
                    zi = { class: 'field' },
                    ji = { class: 'checkbox' },
                    Hi = { class: 'field is-horizontal' },
                    Wi = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'PUT')],
                        -1,
                    ),
                    Xi = { class: 'field-body' },
                    Ii = { class: 'field' },
                    Mi = { class: 'checkbox' },
                    Ui = { class: 'field is-horizontal' },
                    Bi = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'PATCH')],
                        -1,
                    ),
                    Ni = { class: 'field-body' },
                    Qi = { class: 'field' },
                    Gi = { class: 'checkbox' },
                    Ji = { class: 'field is-horizontal' },
                    Ki = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'DELETE')],
                        -1,
                    ),
                    qi = { class: 'field-body' },
                    Yi = { class: 'field' },
                    Zi = { class: 'checkbox' },
                    en = { class: 'column' },
                    tn = { class: 'field is-horizontal' },
                    on = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'HEAD')],
                        -1,
                    ),
                    an = { class: 'field-body' },
                    sn = { class: 'field' },
                    ln = { class: 'checkbox' },
                    nn = { class: 'field is-horizontal' },
                    dn = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'CONNECT')],
                        -1,
                    ),
                    rn = { class: 'field-body' },
                    pn = { class: 'field' },
                    cn = { class: 'checkbox' },
                    un = { class: 'field is-horizontal' },
                    hn = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'OPTIONS')],
                        -1,
                    ),
                    mn = { class: 'field-body' },
                    gn = { class: 'field' },
                    fn = { class: 'checkbox' },
                    vn = { class: 'field is-horizontal' },
                    bn = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'TRACE')],
                        -1,
                    ),
                    kn = { class: 'field-body' },
                    yn = { class: 'field' },
                    $n = { class: 'checkbox' },
                    Ln = { key: 0, class: 'field is-horizontal' },
                    Cn = { class: 'field-label' },
                    xn = { class: 'label' },
                    Sn = { class: 'field-body' },
                    _n = { class: 'field' },
                    En = ['placeholder'];
                function wn(e, t, o, s, l, i) {
                    const n = (0, $.g2)('PrettyCheck');
                    return (
                        (0, $.uX)(),
                        (0, $.CE)('div', null, [
                            (0, $.Lk)('div', Ei, [
                                (0, $.Lk)('div', wi, [
                                    (0, $.Lk)('div', Pi, [
                                        Ti,
                                        (0, $.Lk)('div', Vi, [
                                            (0, $.Lk)('div', Ri, [
                                                (0, $.Lk)(
                                                    'div',
                                                    {
                                                        class: (0, L.C4)(
                                                            'control' +
                                                                (e.getMethodChanged
                                                                    ? ' is-changed'
                                                                    : ''),
                                                        ),
                                                    },
                                                    [
                                                        (0, $.Lk)('div', Fi, [
                                                            (0, $.bF)(
                                                                n,
                                                                {
                                                                    modelValue: e.getMethod,
                                                                    'onUpdate:modelValue':
                                                                        t[0] ||
                                                                        (t[0] = (t) =>
                                                                            (e.getMethod = t)),
                                                                    class: 'p-default p-curve p-fill p-icon',
                                                                },
                                                                {
                                                                    default: (0, $.k6)(() => [
                                                                        (0, $.eW)(
                                                                            (0, L.v_)(
                                                                                e.$t(
                                                                                    'templates.domainSections.restrict.disableForThisDomain',
                                                                                ),
                                                                            ),
                                                                            1,
                                                                        ),
                                                                    ]),
                                                                    _: 1,
                                                                },
                                                                8,
                                                                ['modelValue'],
                                                            ),
                                                        ]),
                                                    ],
                                                    2,
                                                ),
                                            ]),
                                        ]),
                                    ]),
                                    (0, $.Lk)('div', Di, [
                                        Ai,
                                        (0, $.Lk)('div', Oi, [
                                            (0, $.Lk)('div', zi, [
                                                (0, $.Lk)(
                                                    'div',
                                                    {
                                                        class: (0, L.C4)(
                                                            'control' +
                                                                (e.postMethodChanged
                                                                    ? ' is-changed'
                                                                    : ''),
                                                        ),
                                                    },
                                                    [
                                                        (0, $.Lk)('div', ji, [
                                                            (0, $.bF)(
                                                                n,
                                                                {
                                                                    modelValue: e.postMethod,
                                                                    'onUpdate:modelValue':
                                                                        t[1] ||
                                                                        (t[1] = (t) =>
                                                                            (e.postMethod = t)),
                                                                    class: 'p-default p-curve p-fill p-icon',
                                                                },
                                                                {
                                                                    default: (0, $.k6)(() => [
                                                                        (0, $.eW)(
                                                                            (0, L.v_)(
                                                                                e.$t(
                                                                                    'templates.domainSections.restrict.disableForThisDomain',
                                                                                ),
                                                                            ),
                                                                            1,
                                                                        ),
                                                                    ]),
                                                                    _: 1,
                                                                },
                                                                8,
                                                                ['modelValue'],
                                                            ),
                                                        ]),
                                                    ],
                                                    2,
                                                ),
                                            ]),
                                        ]),
                                    ]),
                                    (0, $.Lk)('div', Hi, [
                                        Wi,
                                        (0, $.Lk)('div', Xi, [
                                            (0, $.Lk)('div', Ii, [
                                                (0, $.Lk)(
                                                    'div',
                                                    {
                                                        class: (0, L.C4)(
                                                            'control' +
                                                                (e.putMethodChanged
                                                                    ? ' is-changed'
                                                                    : ''),
                                                        ),
                                                    },
                                                    [
                                                        (0, $.Lk)('div', Mi, [
                                                            (0, $.bF)(
                                                                n,
                                                                {
                                                                    modelValue: e.putMethod,
                                                                    'onUpdate:modelValue':
                                                                        t[2] ||
                                                                        (t[2] = (t) =>
                                                                            (e.putMethod = t)),
                                                                    class: 'p-default p-curve p-fill p-icon',
                                                                },
                                                                {
                                                                    default: (0, $.k6)(() => [
                                                                        (0, $.eW)(
                                                                            (0, L.v_)(
                                                                                e.$t(
                                                                                    'templates.domainSections.restrict.disableForThisDomain',
                                                                                ),
                                                                            ),
                                                                            1,
                                                                        ),
                                                                    ]),
                                                                    _: 1,
                                                                },
                                                                8,
                                                                ['modelValue'],
                                                            ),
                                                        ]),
                                                    ],
                                                    2,
                                                ),
                                            ]),
                                        ]),
                                    ]),
                                    (0, $.Lk)('div', Ui, [
                                        Bi,
                                        (0, $.Lk)('div', Ni, [
                                            (0, $.Lk)('div', Qi, [
                                                (0, $.Lk)(
                                                    'div',
                                                    {
                                                        class: (0, L.C4)(
                                                            'control' +
                                                                (e.patchMethodChanged
                                                                    ? ' is-changed'
                                                                    : ''),
                                                        ),
                                                    },
                                                    [
                                                        (0, $.Lk)('div', Gi, [
                                                            (0, $.bF)(
                                                                n,
                                                                {
                                                                    modelValue: e.patchMethod,
                                                                    'onUpdate:modelValue':
                                                                        t[3] ||
                                                                        (t[3] = (t) =>
                                                                            (e.patchMethod = t)),
                                                                    class: 'p-default p-curve p-fill p-icon',
                                                                },
                                                                {
                                                                    default: (0, $.k6)(() => [
                                                                        (0, $.eW)(
                                                                            (0, L.v_)(
                                                                                e.$t(
                                                                                    'templates.domainSections.restrict.disableForThisDomain',
                                                                                ),
                                                                            ),
                                                                            1,
                                                                        ),
                                                                    ]),
                                                                    _: 1,
                                                                },
                                                                8,
                                                                ['modelValue'],
                                                            ),
                                                        ]),
                                                    ],
                                                    2,
                                                ),
                                            ]),
                                        ]),
                                    ]),
                                    (0, $.Lk)('div', Ji, [
                                        Ki,
                                        (0, $.Lk)('div', qi, [
                                            (0, $.Lk)('div', Yi, [
                                                (0, $.Lk)(
                                                    'div',
                                                    {
                                                        class: (0, L.C4)(
                                                            'control' +
                                                                (e.deleteMethodChanged
                                                                    ? ' is-changed'
                                                                    : ''),
                                                        ),
                                                    },
                                                    [
                                                        (0, $.Lk)('div', Zi, [
                                                            (0, $.bF)(
                                                                n,
                                                                {
                                                                    modelValue: e.deleteMethod,
                                                                    'onUpdate:modelValue':
                                                                        t[4] ||
                                                                        (t[4] = (t) =>
                                                                            (e.deleteMethod = t)),
                                                                    class: 'p-default p-curve p-fill p-icon',
                                                                },
                                                                {
                                                                    default: (0, $.k6)(() => [
                                                                        (0, $.eW)(
                                                                            (0, L.v_)(
                                                                                e.$t(
                                                                                    'templates.domainSections.restrict.disableForThisDomain',
                                                                                ),
                                                                            ),
                                                                            1,
                                                                        ),
                                                                    ]),
                                                                    _: 1,
                                                                },
                                                                8,
                                                                ['modelValue'],
                                                            ),
                                                        ]),
                                                    ],
                                                    2,
                                                ),
                                            ]),
                                        ]),
                                    ]),
                                ]),
                                (0, $.Lk)('div', en, [
                                    (0, $.Lk)('div', tn, [
                                        on,
                                        (0, $.Lk)('div', an, [
                                            (0, $.Lk)('div', sn, [
                                                (0, $.Lk)(
                                                    'div',
                                                    {
                                                        class: (0, L.C4)(
                                                            'control' +
                                                                (e.headMethodChanged
                                                                    ? ' is-changed'
                                                                    : ''),
                                                        ),
                                                    },
                                                    [
                                                        (0, $.Lk)('div', ln, [
                                                            (0, $.bF)(
                                                                n,
                                                                {
                                                                    modelValue: e.headMethod,
                                                                    'onUpdate:modelValue':
                                                                        t[5] ||
                                                                        (t[5] = (t) =>
                                                                            (e.headMethod = t)),
                                                                    class: 'p-default p-curve p-fill p-icon',
                                                                },
                                                                {
                                                                    default: (0, $.k6)(() => [
                                                                        (0, $.eW)(
                                                                            (0, L.v_)(
                                                                                e.$t(
                                                                                    'templates.domainSections.restrict.disableForThisDomain',
                                                                                ),
                                                                            ),
                                                                            1,
                                                                        ),
                                                                    ]),
                                                                    _: 1,
                                                                },
                                                                8,
                                                                ['modelValue'],
                                                            ),
                                                        ]),
                                                    ],
                                                    2,
                                                ),
                                            ]),
                                        ]),
                                    ]),
                                    (0, $.Lk)('div', nn, [
                                        dn,
                                        (0, $.Lk)('div', rn, [
                                            (0, $.Lk)('div', pn, [
                                                (0, $.Lk)(
                                                    'div',
                                                    {
                                                        class: (0, L.C4)(
                                                            'control' +
                                                                (e.connectMethodChanged
                                                                    ? ' is-changed'
                                                                    : ''),
                                                        ),
                                                    },
                                                    [
                                                        (0, $.Lk)('div', cn, [
                                                            (0, $.bF)(
                                                                n,
                                                                {
                                                                    modelValue: e.connectMethod,
                                                                    'onUpdate:modelValue':
                                                                        t[6] ||
                                                                        (t[6] = (t) =>
                                                                            (e.connectMethod = t)),
                                                                    class: 'p-default p-curve p-fill p-icon',
                                                                },
                                                                {
                                                                    default: (0, $.k6)(() => [
                                                                        (0, $.eW)(
                                                                            (0, L.v_)(
                                                                                e.$t(
                                                                                    'templates.domainSections.restrict.disableForThisDomain',
                                                                                ),
                                                                            ),
                                                                            1,
                                                                        ),
                                                                    ]),
                                                                    _: 1,
                                                                },
                                                                8,
                                                                ['modelValue'],
                                                            ),
                                                        ]),
                                                    ],
                                                    2,
                                                ),
                                            ]),
                                        ]),
                                    ]),
                                    (0, $.Lk)('div', un, [
                                        hn,
                                        (0, $.Lk)('div', mn, [
                                            (0, $.Lk)('div', gn, [
                                                (0, $.Lk)(
                                                    'div',
                                                    {
                                                        class: (0, L.C4)(
                                                            'control' +
                                                                (e.optionsMethodChanged
                                                                    ? ' is-changed'
                                                                    : ''),
                                                        ),
                                                    },
                                                    [
                                                        (0, $.Lk)('div', fn, [
                                                            (0, $.bF)(
                                                                n,
                                                                {
                                                                    modelValue: e.optionsMethod,
                                                                    'onUpdate:modelValue':
                                                                        t[7] ||
                                                                        (t[7] = (t) =>
                                                                            (e.optionsMethod = t)),
                                                                    class: 'p-default p-curve p-fill p-icon',
                                                                },
                                                                {
                                                                    default: (0, $.k6)(() => [
                                                                        (0, $.eW)(
                                                                            (0, L.v_)(
                                                                                e.$t(
                                                                                    'templates.domainSections.restrict.disableForThisDomain',
                                                                                ),
                                                                            ),
                                                                            1,
                                                                        ),
                                                                    ]),
                                                                    _: 1,
                                                                },
                                                                8,
                                                                ['modelValue'],
                                                            ),
                                                        ]),
                                                    ],
                                                    2,
                                                ),
                                            ]),
                                        ]),
                                    ]),
                                    (0, $.Lk)('div', vn, [
                                        bn,
                                        (0, $.Lk)('div', kn, [
                                            (0, $.Lk)('div', yn, [
                                                (0, $.Lk)(
                                                    'div',
                                                    {
                                                        class: (0, L.C4)(
                                                            'control' +
                                                                (e.traceMethodChanged
                                                                    ? ' is-changed'
                                                                    : ''),
                                                        ),
                                                    },
                                                    [
                                                        (0, $.Lk)('div', $n, [
                                                            (0, $.bF)(
                                                                n,
                                                                {
                                                                    modelValue: e.traceMethod,
                                                                    'onUpdate:modelValue':
                                                                        t[8] ||
                                                                        (t[8] = (t) =>
                                                                            (e.traceMethod = t)),
                                                                    class: 'p-default p-curve p-fill p-icon',
                                                                },
                                                                {
                                                                    default: (0, $.k6)(() => [
                                                                        (0, $.eW)(
                                                                            (0, L.v_)(
                                                                                e.$t(
                                                                                    'templates.domainSections.restrict.disableForThisDomain',
                                                                                ),
                                                                            ),
                                                                            1,
                                                                        ),
                                                                    ]),
                                                                    _: 1,
                                                                },
                                                                8,
                                                                ['modelValue'],
                                                            ),
                                                        ]),
                                                    ],
                                                    2,
                                                ),
                                            ]),
                                        ]),
                                    ]),
                                ]),
                            ]),
                            i.hasAtLeastOneEnabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', Ln, [
                                      (0, $.Lk)('div', Cn, [
                                          (0, $.Lk)(
                                              'label',
                                              xn,
                                              (0, L.v_)(
                                                  e.$t(
                                                      'templates.domainSections.restrict.responseCode',
                                                  ),
                                              ),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', Sn, [
                                          (0, $.Lk)('div', _n, [
                                              (0, $.Lk)(
                                                  'div',
                                                  {
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.responseCodeChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.bo)(
                                                          (0, $.Lk)(
                                                              'input',
                                                              {
                                                                  'onUpdate:modelValue':
                                                                      t[9] ||
                                                                      (t[9] = (t) =>
                                                                          (e.responseCode = t)),
                                                                  class: (0, L.C4)([
                                                                      'input',
                                                                      l.validResponseCode
                                                                          ? ''
                                                                          : 'is-danger',
                                                                  ]),
                                                                  type: 'number',
                                                                  min: '100',
                                                                  step: '1',
                                                                  placeholder:
                                                                      e.$props.data.responseCode
                                                                          .default,
                                                              },
                                                              null,
                                                              10,
                                                              En,
                                                          ),
                                                          [
                                                              [
                                                                  a.Jo,
                                                                  e.responseCode,
                                                                  void 0,
                                                                  { number: !0 },
                                                              ],
                                                          ],
                                                      ),
                                                  ],
                                                  2,
                                              ),
                                          ]),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                        ])
                    );
                }
                const Pn = {
                        getMethod: { default: !1, enabled: !0 },
                        postMethod: { default: !1, enabled: !0 },
                        putMethod: { default: !1, enabled: !0 },
                        patchMethod: { default: !1, enabled: !0 },
                        deleteMethod: { default: !1, enabled: !0 },
                        headMethod: { default: !1, enabled: !0 },
                        connectMethod: { default: !1, enabled: !0 },
                        optionsMethod: { default: !1, enabled: !0 },
                        traceMethod: { default: !1, enabled: !0 },
                        responseCode: { default: 405, enabled: !0 },
                    },
                    Tn = {
                        name: 'DomainRestrict',
                        display: 'common.restrict',
                        key: 'restrict',
                        delegated: ce(Pn),
                        components: { PrettyCheck: gt },
                        props: { data: Object },
                        data() {
                            return { validResponseCode: !0 };
                        },
                        computed: {
                            ...ue(Pn, 'restrict'),
                            hasAtLeastOneEnabled() {
                                return (
                                    Object.keys(this.$props.data).filter(
                                        (e) => this.$props.data[e].computed && 'responseCode' !== e,
                                    ).length > 0
                                );
                            },
                        },
                        watch: {
                            '$props.data.responseCode': {
                                handler(e) {
                                    e.computed && /^[1-5][0-9][0-9]$/.test(e.computed)
                                        ? (this.validResponseCode = !0)
                                        : (this.validResponseCode = !1);
                                },
                                deep: !0,
                            },
                        },
                    },
                    Vn = (0, ge.A)(Tn, [['render', wn]]),
                    Rn = Vn,
                    Fn = { class: 'field is-horizontal is-aligned-top' },
                    Dn = { class: 'field-label has-margin-top' },
                    An = { class: 'label' },
                    On = { class: 'field-body' },
                    zn = { class: 'field' },
                    jn = ['placeholder'],
                    Hn = { class: 'control' },
                    Wn = { class: 'text' },
                    Xn = { class: 'control' },
                    In = { class: 'text' },
                    Mn = { class: 'control' },
                    Un = { class: 'text' },
                    Bn = { key: 1, class: 'control' },
                    Nn = { class: 'text message is-warning' },
                    Qn = { class: 'message-body' };
                function Gn(e, t, o, s, l, i) {
                    const n = (0, $.g2)('ExternalLink');
                    return (
                        (0, $.uX)(),
                        (0, $.CE)('div', null, [
                            (0, $.Lk)('div', Fn, [
                                (0, $.Lk)('div', Dn, [
                                    (0, $.Lk)(
                                        'label',
                                        An,
                                        (0, L.v_)(
                                            e.$t('templates.domainSections.onion.onionLocation'),
                                        ),
                                        1,
                                    ),
                                ]),
                                (0, $.Lk)('div', On, [
                                    (0, $.Lk)('div', zn, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.onionLocationChanged
                                                            ? ' is-changed'
                                                            : ''),
                                                ),
                                            },
                                            [
                                                (0, $.bo)(
                                                    (0, $.Lk)(
                                                        'input',
                                                        {
                                                            'onUpdate:modelValue':
                                                                t[0] ||
                                                                (t[0] = (t) =>
                                                                    (e.onionLocation = t)),
                                                            class: 'input',
                                                            type: 'text',
                                                            placeholder:
                                                                e.$props.data.onionLocation
                                                                    .placeholder,
                                                        },
                                                        null,
                                                        8,
                                                        jn,
                                                    ),
                                                    [[a.Jo, e.onionLocation]],
                                                ),
                                            ],
                                            2,
                                        ),
                                        e.onionLocationChanged
                                            ? (0, $.Q3)('', !0)
                                            : ((0, $.uX)(),
                                              (0, $.CE)(
                                                  $.FK,
                                                  { key: 0 },
                                                  [
                                                      (0, $.Lk)('div', Hn, [
                                                          (0, $.Lk)(
                                                              'label',
                                                              Wn,
                                                              (0, L.v_)(
                                                                  e.$t(
                                                                      'templates.domainSections.onion.provideAnOnionLocationToSetOnionLocationHeader',
                                                                  ),
                                                              ),
                                                              1,
                                                          ),
                                                      ]),
                                                      (0, $.Lk)('div', Xn, [
                                                          (0, $.Lk)(
                                                              'label',
                                                              In,
                                                              (0, L.v_)(
                                                                  e.$t(
                                                                      'templates.domainSections.onion.letsVisitorsKnownOnionServicesIsAvailable',
                                                                  ),
                                                              ),
                                                              1,
                                                          ),
                                                      ]),
                                                      (0, $.Lk)('div', Mn, [
                                                          (0, $.Lk)('label', Un, [
                                                              (0, $.bF)(
                                                                  n,
                                                                  {
                                                                      text: e.$t(
                                                                          'templates.domainSections.onion.learnMoreAboutOnionServices',
                                                                      ),
                                                                      link: 'https://community.torproject.org/onion-services/',
                                                                  },
                                                                  null,
                                                                  8,
                                                                  ['text'],
                                                              ),
                                                          ]),
                                                      ]),
                                                  ],
                                                  64,
                                              )),
                                        i.incorrectEnding
                                            ? ((0, $.uX)(),
                                              (0, $.CE)('div', Bn, [
                                                  (0, $.Lk)('label', Nn, [
                                                      (0, $.Lk)(
                                                          'span',
                                                          Qn,
                                                          (0, L.v_)(
                                                              e.$t(
                                                                  'templates.domainSections.onion.onionLocationExpectedToEndWithOnion',
                                                              ),
                                                          ),
                                                          1,
                                                      ),
                                                  ]),
                                              ]))
                                            : (0, $.Q3)('', !0),
                                    ]),
                                ]),
                            ]),
                        ])
                    );
                }
                const Jn = {
                        onionLocation: {
                            default: '',
                            placeholder: '<your-onion-address>.onion',
                            enabled: !0,
                        },
                    },
                    Kn = {
                        name: 'DomainOnion',
                        display: 'templates.domainSections.onion.onion',
                        key: 'onion',
                        delegated: ce(Jn),
                        components: { ExternalLink: _o.A },
                        props: { data: Object },
                        computed: {
                            ...ue(Jn, 'onion'),
                            incorrectEnding() {
                                return (
                                    this.onionLocationChanged &&
                                    !this.$props.data.onionLocation.computed.endsWith('.onion')
                                );
                            },
                            hasWarnings() {
                                return this.incorrectEnding;
                            },
                        },
                        watch: {
                            '$props.data.onionLocation': {
                                handler(e) {
                                    e.computed = e.computed.replace(/^https?:\/\//, '');
                                },
                                deep: !0,
                            },
                        },
                    },
                    qn = (0, ge.A)(Kn, [['render', Gn]]),
                    Yn = qn,
                    Zn = [kt, Ao, Ha, cs, Gs, wl, _i, Rn, Yn],
                    ed = {
                        hasUserInteraction: !1,
                        presets: ve.delegated,
                        ...Zn.reduce((e, t) => ((e[t.key] = t.delegated), e), {}),
                    },
                    td = {
                        name: 'Domain',
                        delegated: ed,
                        components: { Presets: ve },
                        props: { data: Object },
                        data() {
                            return { active: Zn[0].key, tabs: Zn };
                        },
                        computed: {
                            nextTab() {
                                const e = this.$data.tabs.map((e) => e.key),
                                    t = e.indexOf(this.$data.active) + 1;
                                return t < e.length && e[t];
                            },
                            previousTab() {
                                const e = this.$data.tabs.map((e) => e.key),
                                    t = e.indexOf(this.$data.active) - 1;
                                return t >= 0 && e[t];
                            },
                            hasWarnings() {
                                return Object.values(this.$refs).some(
                                    (e) => e[0].hasWarnings || !1,
                                );
                            },
                        },
                        methods: {
                            changesCount(e) {
                                return Object.keys(this.$props.data[e]).filter((t) =>
                                    N(this.$props.data[e][t], e, t),
                                ).length;
                            },
                            changes(e) {
                                const t = this.changesCount(e);
                                return t ? ` (${t.toLocaleString()})` : '';
                            },
                            warnings(e) {
                                return (
                                    (Object.prototype.hasOwnProperty.call(this.$refs, e) &&
                                        this.$refs[e][0].hasWarnings) ||
                                    !1
                                );
                            },
                            setValue(e, t, o) {
                                Object.assign(this.$props.data[e][t], { value: o, computed: o });
                            },
                            resetValue(e, t) {
                                this.setValue(e, t, this.$props.data[e][t].default);
                            },
                            tabClass(e) {
                                const t = [];
                                e === this.$data.active && t.push('is-active'),
                                    this.changesCount(e) && t.push('is-changed');
                                const o = this.$data.tabs.map((e) => e.key);
                                return (
                                    o.indexOf(e) < o.indexOf(this.$data.active) &&
                                        t.push('is-before'),
                                    t.join(' ')
                                );
                            },
                            showTab(e) {
                                ae({
                                    category: 'Site',
                                    action: 'Tab clicked',
                                    label: `${this.$data.active}, ${e}`,
                                }),
                                    (this.$data.active = e);
                            },
                            showPreviousTab() {
                                ae({
                                    category: 'Site',
                                    action: 'Back clicked',
                                    label: `${this.$data.active}, ${this.previousTab}`,
                                }),
                                    (this.$data.active = this.previousTab);
                            },
                            showNextTab() {
                                ae({
                                    category: 'Site',
                                    action: 'Next clicked',
                                    label: `${this.$data.active}, ${this.nextTab}`,
                                }),
                                    (this.$data.active = this.nextTab);
                            },
                        },
                    },
                    od = (0, ge.A)(td, [['render', oe]]),
                    ad = od,
                    sd = (e) => '[object Object]' === Object.prototype.toString.call(e),
                    ld = (e) => '' === e.toString().trim() || e,
                    id = {
                        ssl_profile: ['https', 'sslProfile'],
                        resolver_cloudflare: ['https', 'ocspCloudflare', ld],
                        resolver_google: ['https', 'ocspGoogle', ld],
                        resolver_opendns: ['https', 'ocspOpenDns', ld],
                        directory_letsencrypt: ['https', 'letsEncryptRoot'],
                        referrer_policy: ['security', 'referrerPolicy'],
                        content_security_policy: ['security', 'contentSecurityPolicy'],
                        server_tokens: ['security', 'serverTokens', ld],
                        limit_req: ['security', 'limitReq', ld],
                        php_server: ['php', 'phpServer'],
                        php_server_backup: ['php', 'phpBackupServer'],
                        python_server: ['python', 'pythonServer'],
                        gzip: ['performance', 'gzipCompression', ld],
                        brotli: ['performance', 'brotliCompression', ld],
                        expires_assets: ['performance', 'assetsExpiration'],
                        expires_media: ['performance', 'mediaExpiration'],
                        expires_svg: ['performance', 'svgExpiration'],
                        expires_fonts: ['performance', 'fontsExpiration'],
                        access_log: ['logging', 'accessLog'],
                        error_log: ['logging', 'errorLog'],
                        log_not_found: ['logging', 'logNotFound', ld],
                        directory_nginx: ['nginx', 'nginxConfigDirectory'],
                        worker_processes: ['nginx', 'workerProcesses'],
                        user: ['nginx', 'user'],
                        pid: ['nginx', 'pid'],
                        client_max_body_size: ['nginx', 'clientMaxBodySize'],
                        file_structure: [
                            'tools',
                            'modularizedStructure',
                            (e) => 'modularized' === e.toLowerCase().trim(),
                        ],
                        symlink: ['tools', 'symlinkVhost', ld],
                    },
                    nd = {
                        domain: ['server', 'domain'],
                        path: ['server', 'path'],
                        document_root: ['server', 'documentRoot'],
                        non_www: ['server', 'wwwSubdomain', (e) => !ld(e)],
                        cdn: ['server', 'cdnSubdomain', ld],
                        redirect: ['server', 'redirectSubdomains', ld],
                        ipv4: ['server', 'listenIpv4'],
                        ipv6: ['server', 'listenIpv6'],
                        https: ['https', 'https', ld],
                        http2: ['https', 'http2', ld],
                        force_https: ['https', 'forceHttps', ld],
                        hsts: ['https', 'hsts', ld],
                        hsts_subdomains: ['https', 'hstsSubdomains', ld],
                        hsts_preload: ['https', 'hstsPreload', ld],
                        cert_type: [
                            'https',
                            'certType',
                            (e) => ('custom' === e.toLowerCase().trim() ? 'custom' : 'letsEncrypt'),
                        ],
                        email: ['https', 'letsEncryptEmail'],
                        ssl_certificate: ['https', 'sslCertificate'],
                        ssl_certificate_key: ['https', 'sslCertificateKey'],
                        php: ['php', 'php', ld],
                        wordpress: ['php', 'wordPressRules', ld],
                        drupal: ['php', 'drupalRules', ld],
                        magento: ['php', 'magentoRules', ld],
                        python: ['python', 'python', ld],
                        django: ['python', 'djangoRules', ld],
                        proxy: ['reverseProxy', 'reverseProxy', ld],
                        proxy_path: ['reverseProxy', 'path'],
                        proxy_pass: ['reverseProxy', 'proxyPass'],
                        root: ['routing', 'root', ld],
                        index: ['routing', 'index'],
                        fallback_html: ['routing', 'fallbackHtml', ld],
                        fallback_php: ['routing', 'fallbackPhp', ld],
                        fallback_php_path: ['routing', 'fallbackPhpPath'],
                        php_legacy_routing: ['routing', 'legacyPhpRouting', ld],
                        access_log_domain: ['logging', 'accessLog', ld],
                        error_log_domain: ['logging', 'errorLog', ld],
                    },
                    dd = (e) => {
                        const t = {};
                        for (const o in e)
                            if (Object.prototype.hasOwnProperty.call(e, o))
                                if (!(o in id) || sd(e[o]))
                                    isNaN(parseInt(o)) ||
                                        ((e.domains = sd(e.domains) ? e.domains : {}),
                                        (e.domains[o] = e[o]));
                                else {
                                    const a = id[o];
                                    (t[a[0]] = t[a[0]] || {}),
                                        (t[a[0]][a[1]] = a.length < 3 ? e[o] : a[2](e[o]));
                                }
                        if (
                            ((e.global = { ...(e.global || {}), ...t }),
                            'domains' in e && sd(e.domains))
                        )
                            for (const o in e.domains) {
                                if (!Object.prototype.hasOwnProperty.call(e.domains, o)) continue;
                                if (!sd(e.domains[o])) continue;
                                const t = {};
                                for (const a in e.domains[o])
                                    if (
                                        Object.prototype.hasOwnProperty.call(e.domains[o], a) &&
                                        !sd(e.domains[o][a]) &&
                                        a in nd
                                    ) {
                                        const s = nd[a];
                                        (t[s[0]] = t[s[0]] || {}),
                                            (t[s[0]][s[1]] =
                                                s.length < 3
                                                    ? e.domains[o][a]
                                                    : s[2](e.domains[o][a]));
                                    }
                                e.domains[o] = { ...e.domains[o], ...t };
                            }
                    },
                    rd = (e, t) => {
                        const o = (e, t) => {
                            Object.keys(t).forEach((a) => {
                                t[a] && 'object' === typeof t[a]
                                    ? o((e[a] = e[a] || {}), t[a])
                                    : (e[a] = t[a]);
                            });
                        };
                        o(e, t);
                    },
                    pd = (e) => {
                        if (0 === Object.keys(e).length) return;
                        const t =
                                'logging' in e.global && sd(e.global.logging)
                                    ? e.global.logging
                                    : {},
                            [o, ...a] = (t.accessLog || mi).split(' '),
                            s = !('accessLog' in t) || ('' !== o && 'off' !== o),
                            [l, ...i] = (t.errorLog || `${fi} ${bi}`).split(' '),
                            n = !('errorLog' in t) || ('' !== l && l !== vi);
                        for (const d in e.domains) {
                            if (!Object.prototype.hasOwnProperty.call(e.domains, d)) continue;
                            const t = {
                                    domain: rt,
                                    ...('server' in e.domains[d] && sd(e.domains[d].server)
                                        ? e.domains[d].server
                                        : {}),
                                },
                                r =
                                    'logging' in e.domains[d] && sd(e.domains[d].logging)
                                        ? e.domains[d].logging
                                        : {};
                            let p = s,
                                c = o;
                            const u = a.join(' ') || gi,
                                h = !!r.accessLog;
                            h && ((p = !0), (c = c.replace(/([^/]+)\.log$/, `${t.domain}.$1.log`)));
                            let m = n,
                                g = l;
                            const f = i.join(' ') || bi,
                                v = !!r.errorLog;
                            v && ((m = !0), (g = g.replace(/([^/]+)\.log$/, `${t.domain}.$1.log`))),
                                (e.domains[d].logging = {
                                    accessLogEnabled: p,
                                    accessLogPath: c,
                                    accessLogParameters: u,
                                    errorLogEnabled: m,
                                    errorLogPath: g,
                                    errorLogLevel: f,
                                    ...r,
                                });
                        }
                    },
                    cd = (e) => {
                        if ('global' in e && sd(e.global)) {
                            const t = { php: {} },
                                o = {
                                    php: [
                                        'phpServer',
                                        'phpServerCustom',
                                        'phpBackupServer',
                                        'phpBackupServerCustom',
                                    ],
                                };
                            for (const a in e.global)
                                if (
                                    Object.prototype.hasOwnProperty.call(e.global, a) &&
                                    Object.prototype.hasOwnProperty.call(o, a)
                                )
                                    for (const s in e.global[a])
                                        Object.prototype.hasOwnProperty.call(e.global[a], s) &&
                                            o[a].includes(s) &&
                                            (t[a][s] = e.global[a][s]);
                            for (const a in e.domains)
                                Object.prototype.hasOwnProperty.call(e.domains, a) &&
                                    rd(e.domains[a], t);
                        }
                        pd(e);
                    },
                    ud = (e, t) => {
                        for (const o in e)
                            if (
                                Object.prototype.hasOwnProperty.call(e, o) &&
                                'presets' !== o &&
                                o in t &&
                                sd(e[o])
                            )
                                for (const a in e[o])
                                    Object.prototype.hasOwnProperty.call(e[o], a) &&
                                        a in t[o] &&
                                        ((t[o][a].value = e[o][a]), (t[o][a].computed = e[o][a]));
                    },
                    hd = (e, t, o, a) =>
                        new Promise((s) => {
                            const l = Q.parse(e, {
                                ignoreQueryPrefix: !0,
                                allowDots: !0,
                                parseArrays: !1,
                                decoder(e) {
                                    if (((e = decodeURIComponent(e)), /^(\d+|\d*\.\d+)$/.test(e)))
                                        return parseFloat(e);
                                    let t = { true: !0, false: !1, null: null, undefined: void 0 };
                                    return e in t ? t[e] : e;
                                },
                            });
                            if ((dd(l), cd(l), 'domains' in l && sd(l.domains))) {
                                const e = Object.keys(l.domains)
                                    .map((e) => parseInt(e))
                                    .filter((e) => !isNaN(e));
                                for (let o = 0; o < Math.max(...e) + 1; o++) {
                                    if (!e.includes(o) || !sd(l.domains[o])) {
                                        t.push(z(ad.delegated));
                                        continue;
                                    }
                                    const s = t[t.push(z(ad.delegated)) - 1];
                                    (s.hasUserInteraction = !0), a(() => ud(l.domains[o], s));
                                }
                            } else t.push(z(ad.delegated));
                            'global' in l && sd(l.global) && ud(l.global, o),
                                a(() => a(() => s(l)));
                        }),
                    md = (e) => {
                        if ('object' === typeof window && 'object' === typeof window.navigator) {
                            const t = new Set();
                            Array.isArray(window.navigator.languages) &&
                                window.navigator.languages.forEach((e) => t.add(e)),
                                'string' === typeof window.navigator.language &&
                                    t.add(window.navigator.language),
                                Intl &&
                                    'DateTimeFormat' in Intl &&
                                    'und' !== Intl.DateTimeFormat().resolvedOptions().locale &&
                                    t.add(Intl.DateTimeFormat().resolvedOptions().locale);
                            const o = [...t.values()].find((t) => e.includes(h(t, '-')));
                            if (o) return h(o, '-');
                            const a = e.reduce((e, t) => {
                                    const o = t.match(/^[a-z]+/)[0];
                                    return o in e || (e[o] = t), e;
                                }, {}),
                                s = [...t.values()].find((e) =>
                                    Object.keys(a).includes(e.split('-')[0].toLowerCase()),
                                );
                            return !!s && a[s.split('-')[0].toLowerCase()];
                        }
                    },
                    gd = (e) =>
                        sd(e) ||
                        (Array.isArray(e) && e.every((e) => Array.isArray(e) && 2 === e.length)),
                    fd = (e) => {
                        let t = 0;
                        for (const o of e) {
                            if (gd(o[1])) return t;
                            o[0].length > t && !o[0].startsWith('#') && (t = o[0].length);
                        }
                        return t;
                    },
                    vd = (e, t) => {
                        const o = sd(e) ? Object.entries(e) : e;
                        if (
                            !Array.isArray(o) ||
                            !o.every((e) => Array.isArray(e) && 2 === e.length)
                        )
                            return '';
                        let a = '',
                            s = fd(o);
                        const l = '    '.repeat(t);
                        let i = !1;
                        for (let n = 0; n < o.length; n++) {
                            const e = o[n];
                            if (gd(e[1])) {
                                (a += '\n' + l + e[0] + ' {\n'),
                                    (a += vd(e[1], t + 1)),
                                    (a += l + '}\n\n'),
                                    (i = !0);
                                continue;
                            }
                            i && ((s = fd(o.slice(n))), (i = !1));
                            const d = Array.isArray(e[1]) ? e[1] : [e[1]],
                                r = s - e[0].length + 1,
                                p = ' '.repeat(Math.max(r, 0));
                            d.forEach((t) => {
                                const o = t.toString();
                                a +=
                                    l +
                                    (e[0] + p + o).trim() +
                                    (e[0].startsWith('#') ? '' : ';') +
                                    '\n';
                            });
                        }
                        return a;
                    },
                    bd = (e) => {
                        let t,
                            o = vd(e, 0);
                        o = o
                            .replace(/\n\n\n/g, '\n\n')
                            .replace(/^([^\S\r\n]*[^#\s].*[^\n])\n([^\S\r\n]*)#/gm, '$1\n\n$2#')
                            .replace(
                                /^([^\S\r\n]*#.*)(?:\n[^\S\r\n]*)+\n([^\S\r\n]*.*{)/gm,
                                '$1\n$2',
                            )
                            .replace(
                                /^([^\S\r\n]*#.*\n[^\S\r\n]*#.*\n)([^\S\r\n]*[^#\s])/gm,
                                '$1\n$2',
                            )
                            .replace(/^([^\S\r\n]*.*{)\n[^\S\r\n]*(})/gm, '$1$2');
                        do {
                            (t = /^([^\S\r\n]*})(?:\n[^\S\r\n]*)+\n([^\S\r\n]*})/m.exec(o)),
                                t &&
                                    (o =
                                        o.slice(0, t.index) +
                                        t[1] +
                                        '\n' +
                                        t[2] +
                                        o.slice(t.index + t[0].length));
                        } while (t);
                        return o.trim();
                    };
                var kd = o(1370);
                const yd = (e) => kd.stringify(e),
                    $d = {
                        modern: {
                            name: 'Mozilla Modern',
                            protocols: ['TLSv1.3'],
                            ciphers: [],
                            server_preferred_order: !1,
                            dh_param_size: !1,
                            oldest_clients: [
                                'Firefox 63',
                                'Android 10.0',
                                'Chrome 70',
                                'Edge 75',
                                'Java 11',
                                'OpenSSL 1.1.1',
                                'Opera 57',
                                'Safari 12.1',
                            ],
                        },
                        intermediate: {
                            name: 'Mozilla Intermediate',
                            protocols: ['TLSv1.2', 'TLSv1.3'],
                            ciphers: [
                                'ECDHE-ECDSA-AES128-GCM-SHA256',
                                'ECDHE-RSA-AES128-GCM-SHA256',
                                'ECDHE-ECDSA-AES256-GCM-SHA384',
                                'ECDHE-RSA-AES256-GCM-SHA384',
                                'ECDHE-ECDSA-CHACHA20-POLY1305',
                                'ECDHE-RSA-CHACHA20-POLY1305',
                                'DHE-RSA-AES128-GCM-SHA256',
                                'DHE-RSA-AES256-GCM-SHA384',
                            ],
                            server_preferred_order: !1,
                            dh_param_size: 2048,
                            oldest_clients: [
                                'Firefox 27',
                                'Android 4.4.2',
                                'Chrome 31',
                                'Edge',
                                'IE 11 on Windows 7',
                                'Java 8u31',
                                'OpenSSL 1.0.1',
                                'Opera 20',
                                'Safari 9',
                            ],
                        },
                        old: {
                            name: 'Mozilla Old',
                            protocols: ['TLSv1', 'TLSv1.1', 'TLSv1.2', 'TLSv1.3'],
                            ciphers: [
                                'ECDHE-ECDSA-AES128-GCM-SHA256',
                                'ECDHE-RSA-AES128-GCM-SHA256',
                                'ECDHE-ECDSA-AES256-GCM-SHA384',
                                'ECDHE-RSA-AES256-GCM-SHA384',
                                'ECDHE-ECDSA-CHACHA20-POLY1305',
                                'ECDHE-RSA-CHACHA20-POLY1305',
                                'DHE-RSA-AES128-GCM-SHA256',
                                'DHE-RSA-AES256-GCM-SHA384',
                                'DHE-RSA-CHACHA20-POLY1305',
                                'ECDHE-ECDSA-AES128-SHA256',
                                'ECDHE-RSA-AES128-SHA256',
                                'ECDHE-ECDSA-AES128-SHA',
                                'ECDHE-RSA-AES128-SHA',
                                'ECDHE-ECDSA-AES256-SHA384',
                                'ECDHE-RSA-AES256-SHA384',
                                'ECDHE-ECDSA-AES256-SHA',
                                'ECDHE-RSA-AES256-SHA',
                                'DHE-RSA-AES128-SHA256',
                                'DHE-RSA-AES256-SHA256',
                                'AES128-GCM-SHA256',
                                'AES256-GCM-SHA384',
                                'AES128-SHA256',
                                'AES256-SHA256',
                                'AES128-SHA',
                                'AES256-SHA',
                                'DES-CBC3-SHA',
                            ],
                            server_preferred_order: !0,
                            dh_param_size: 1024,
                            oldest_clients: [
                                'Firefox 1',
                                'Android 2.3',
                                'Chrome 1',
                                'Edge 12',
                                'IE8 on Windows XP',
                                'Java 6',
                                'OpenSSL 0.9.8',
                                'Opera 5',
                                'Safari 1',
                            ],
                        },
                    },
                    Ld = (e, t) =>
                        'letsEncrypt' === e.https.certType.computed
                            ? `${t.https.letsEncryptCertRoot.computed.replace(/\/+$/, '')}/${e.server.domain.computed}/fullchain.pem`
                            : e.https.sslCertificate.computed
                              ? e.https.sslCertificate.computed
                              : `${t.nginx.nginxConfigDirectory.computed.replace(/\/+$/, '')}/ssl/${e.server.domain.computed}.crt`,
                    Cd = (e, t) =>
                        'letsEncrypt' === e.https.certType.computed
                            ? `${t.https.letsEncryptCertRoot.computed.replace(/\/+$/, '')}/${e.server.domain.computed}/privkey.pem`
                            : e.https.sslCertificateKey.computed
                              ? e.https.sslCertificateKey.computed
                              : `${t.nginx.nginxConfigDirectory.computed.replace(/\/+$/, '')}/ssl/${e.server.domain.computed}.key`,
                    xd =
                        'text/plain text/css text/xml application/json application/javascript application/rss+xml application/atom+xml image/svg+xml',
                    Sd = {
                        assets: 'css(\\.map)?|js(\\.map)?',
                        fonts: 'ttf|ttc|otf|eot|woff2?',
                        svg: 'svgz?',
                        images: 'jpe?g|png|gif|ico|cur|heic|webp|tiff?',
                        audio: 'mp3|m4a|aac|ogg|midi?|wav',
                        video: 'mp4|mov|webm|mpe?g|avi|ogv|flv|wmv',
                        docs: 'pdf|docx?|dotx?|docm|dotm|xlsx?|xltx?|xlsm|xltm|pptx?|potx?|pptm|potm|ppsx?',
                        html: 'html?',
                    },
                    _d = (e) =>
                        e.every((e) => e.https.hsts.computed) &&
                        (e.every((e) => e.https.hstsSubdomains.computed) ||
                            e.every((e) => !e.https.hstsSubdomains.computed)) &&
                        (e.every((e) => e.https.hstsPreload.computed) ||
                            e.every((e) => !e.https.hstsPreload.computed)),
                    Ed = (e, t) => {
                        const o = [];
                        if (
                            (o.push(['# security headers', '']),
                            o.push(['add_header X-XSS-Protection', '"1; mode=block" always']),
                            o.push(['add_header X-Content-Type-Options', '"nosniff" always']),
                            o.push([
                                'add_header Referrer-Policy',
                                `"${t.security.referrerPolicy.computed}" always`,
                            ]),
                            t.security.contentSecurityPolicy.computed &&
                                o.push([
                                    'add_header Content-Security-Policy',
                                    `"${t.security.contentSecurityPolicy.computed}" always`,
                                ]),
                            t.security.permissionsPolicy.computed &&
                                o.push([
                                    'add_header Permissions-Policy',
                                    `"${t.security.permissionsPolicy.computed}" always`,
                                ]),
                            _d(e))
                        ) {
                            const t = e.length && e[0].https.hstsSubdomains.computed,
                                a = e.length && e[0].https.hstsPreload.computed;
                            o.push([
                                'add_header Strict-Transport-Security',
                                `"max-age=31536000${t ? '; includeSubDomains' : ''}${a ? '; preload' : ''}" always`,
                            ]);
                        }
                        return (
                            o.push(['# . files', '']),
                            o.push(['location ~ /\\.(?!well-known)', { deny: 'all' }]),
                            t.security.securityTxt.computed &&
                                (o.push(['# security.txt', '']),
                                o.push([
                                    'location /security.txt',
                                    { return: '301 /.well-known/security.txt' },
                                ]),
                                o.push([
                                    'location = /.well-known/security.txt',
                                    { alias: `${t.security.securityTxtPath.value}` },
                                ])),
                            o
                        );
                    },
                    wd = (e) => {
                        const t = {
                            '# default uwsgi_params': '',
                            include: 'uwsgi_params',
                            '# uwsgi settings': '',
                        };
                        return (
                            (t.uwsgi_pass =
                                ('/' === e.python.pythonServer.computed[0] ? 'unix:' : '') +
                                e.python.pythonServer.computed),
                            (t['uwsgi_param Host'] = '$host'),
                            (t['uwsgi_param X-Real-IP'] = '$remote_addr'),
                            (t['uwsgi_param X-Forwarded-For'] = '$proxy_add_x_forwarded_for'),
                            (t['uwsgi_param X-Forwarded-Proto'] = '$http_x_forwarded_proto'),
                            t
                        );
                    },
                    Pd = (e) => {
                        const t = {
                            proxy_http_version: '1.1',
                            proxy_cache_bypass: '$http_upgrade',
                            '# Proxy SSL': '',
                            proxy_ssl_server_name: 'on',
                            '# Proxy headers': '',
                            'proxy_set_header Upgrade': '$http_upgrade',
                            'proxy_set_header Connection': '$connection_upgrade',
                            'proxy_set_header X-Real-IP': '$remote_addr',
                            'proxy_set_header Forwarded': '$proxy_add_forwarded',
                        };
                        return (
                            'passOn' == e.reverseProxy.proxyCoexistenceXForwarded.computed
                                ? ((t['proxy_set_header X-Forwarded-For'] =
                                      '$proxy_add_x_forwarded_for'),
                                  (t['proxy_set_header X-Forwarded-Proto'] = '$scheme'),
                                  (t['proxy_set_header X-Forwarded-Host'] = '$host'),
                                  (t['proxy_set_header X-Forwarded-Port'] = '$server_port'))
                                : ((t['proxy_set_header X-Forwarded-For'] = '""'),
                                  (t['proxy_set_header X-Forwarded-Proto'] = '""'),
                                  (t['proxy_set_header X-Forwarded-Host'] = '""'),
                                  (t['proxy_set_header X-Forwarded-Port'] = '""')),
                            (t['# Proxy timeouts'] = ''),
                            (t['proxy_connect_timeout'] =
                                e.reverseProxy.proxyConnectTimeout.computed),
                            (t['proxy_send_timeout'] = e.reverseProxy.proxySendTimeout.computed),
                            (t['proxy_read_timeout'] = e.reverseProxy.proxyReadTimeout.computed),
                            t
                        );
                    },
                    Td = (e) => {
                        const t = e.some((e) => e.routing.legacyPhpRouting.computed),
                            o = {};
                        return (
                            t &&
                                ((o['# split path'] = ''),
                                (o.fastcgi_split_path_info = '^(.+\\.php)(/.+)$'),
                                (o.set = '$_fastcgi_path_info $fastcgi_path_info')),
                            (o['# 404'] = ''),
                            (o.try_files = '$fastcgi_script_name =404'),
                            (o['# default fastcgi_params'] = ''),
                            (o.include = 'fastcgi_params'),
                            (o['# fastcgi settings'] = ''),
                            (o.fastcgi_index = 'index.php'),
                            (o.fastcgi_buffers = '8 16k'),
                            (o.fastcgi_buffer_size = '32k'),
                            (o['# fastcgi params'] = ''),
                            (o['fastcgi_param DOCUMENT_ROOT'] = '$realpath_root'),
                            (o['fastcgi_param SCRIPT_FILENAME'] =
                                '$realpath_root$fastcgi_script_name'),
                            t && (o['fastcgi_param PATH_INFO'] = '$_fastcgi_path_info'),
                            (o['fastcgi_param PHP_ADMIN_VALUE'] =
                                '"open_basedir=$base/:/usr/lib/php/:/tmp/"'),
                            o
                        );
                    },
                    Vd = (e, t) => {
                        const o = {
                            '# favicon.ico': '',
                            'location = /favicon.ico': { log_not_found: 'off' },
                            '# robots.txt': '',
                            'location = /robots.txt': { log_not_found: 'off' },
                        };
                        if (t.performance.disableHtmlCaching.computed) {
                            o['# Disable HTML caching'] = '';
                            const e = `location ~* \\.(?:${Sd.html})$`;
                            o[e] = { add_header: 'Cache-Control "no-cache"' };
                        }
                        if (e.every((e) => e.routing.root.computed)) {
                            if (
                                t.performance.assetsExpiration.computed ===
                                t.performance.mediaExpiration.computed
                            ) {
                                if (t.performance.assetsExpiration.computed) {
                                    o['# assets, media'] = '';
                                    const e = `location ~* \\.(?:${Sd.assets}|${Sd.images}|${Sd.audio}|${Sd.video})$`;
                                    o[e] = { expires: t.performance.assetsExpiration.computed };
                                }
                            } else {
                                if (t.performance.assetsExpiration.computed) {
                                    o['# assets'] = '';
                                    const e = `location ~* \\.(?:${Sd.assets})$`;
                                    o[e] = { expires: t.performance.assetsExpiration.computed };
                                }
                                if (t.performance.mediaExpiration.computed) {
                                    o['# media'] = '';
                                    const e = `location ~* \\.(?:${Sd.images}|${Sd.audio}|${Sd.video})$`;
                                    o[e] = { expires: t.performance.mediaExpiration.computed };
                                }
                            }
                            if (
                                t.performance.svgExpiration.computed ===
                                t.performance.fontsExpiration.computed
                            ) {
                                if (t.performance.svgExpiration.computed) {
                                    o['# svg, fonts'] = '';
                                    const e = `location ~* \\.(?:${Sd.svg}|${Sd.fonts})$`;
                                    o[e] = {
                                        add_header: 'Access-Control-Allow-Origin "*"',
                                        expires: t.performance.svgExpiration.computed,
                                    };
                                }
                            } else {
                                if (t.performance.svgExpiration.computed) {
                                    o['# svg'] = '';
                                    const e = `location ~* \\.${Sd.svg}$`;
                                    o[e] = {
                                        add_header: 'Access-Control-Allow-Origin "*"',
                                        expires: t.performance.svgExpiration.computed,
                                    };
                                }
                                if (t.performance.fontsExpiration.computed) {
                                    o['# fonts'] = '';
                                    const e = `location ~* \\.${Sd.fonts}$`;
                                    o[e] = {
                                        add_header: 'Access-Control-Allow-Origin "*"',
                                        expires: t.performance.fontsExpiration.computed,
                                    };
                                }
                            }
                        }
                        return (
                            t.performance.gzipCompression.computed &&
                                ((o['# gzip'] = ''),
                                (o.gzip = 'on'),
                                (o.gzip_vary = 'on'),
                                (o.gzip_proxied = 'any'),
                                (o.gzip_comp_level = 6),
                                (o.gzip_types = xd)),
                            t.performance.brotliCompression.computed &&
                                ((o['# brotli'] = ''),
                                (o.brotli = 'on'),
                                (o.brotli_comp_level = 6),
                                (o.brotli_types = xd)),
                            o
                        );
                    },
                    Rd = (e, t = !1) => {
                        const o = `php${t ? 'Backup' : ''}Server`;
                        return 'custom' === e.php[o].computed
                            ? e.php[`${o}Custom`].computed
                            : ('/' === e.php[o].computed[0] ? 'unix:' : '') + e.php[o].computed;
                    },
                    Fd = (e) => `php_${e.server.domain.computed.replace(/\./g, '_')}`,
                    Dd = (e, t) => {
                        const o = {
                            '# WordPress: allow TinyMCE': '',
                            'location = /wp-includes/js/tinymce/wp-tinymce.php': {
                                include: 'nginxconfig.io/php_fastcgi.conf',
                            },
                            '# WordPress: deny wp-content, wp-includes php files': '',
                            'location ~* ^/(?:wp-content|wp-includes)/.*\\.php$': { deny: 'all' },
                            '# WordPress: deny wp-content/uploads nasty stuff': '',
                            'location ~* ^/wp-content/uploads/.*\\.(?:s?html?|php|js|swf)$': {
                                deny: 'all',
                            },
                            '# WordPress: SEO plugin': '',
                            'location ~* ^/wp-content/plugins/wordpress-seo(?:-premium)?/css/main-sitemap\\.xsl$':
                                {},
                            '# WordPress: deny wp-content/plugins (except earlier rules)': '',
                            'location ~ ^/wp-content/plugins': { deny: 'all' },
                            '# WordPress: deny general stuff': '',
                            'location ~* ^/(?:xmlrpc\\.php|wp-links-opml\\.php|wp-config\\.php|wp-config-sample\\.php|readme\\.html|license\\.txt)$':
                                { deny: 'all' },
                        };
                        return (
                            e.security.limitReq.computed &&
                                ((o['# WordPress: throttle wp-login.php'] = ''),
                                (o['location = /wp-login.php'] = {
                                    limit_req: 'zone=login burst=2 nodelay',
                                    include: 'nginxconfig.io/php_fastcgi.conf',
                                }),
                                t.php.wordPressRules.computed &&
                                    (o['location = /wp-login.php'].fastcgi_pass =
                                        '' !== t.php.phpBackupServer.computed ? Fd(t) : Rd(t))),
                            o
                        );
                    },
                    Ad = (e) => {
                        const t = {
                            '# Drupal: deny private files': '',
                            'location ~ ((^|/)\\.|^.*\\.yml$|^/sites/.*/private/|^/sites/[^/]+/[^/]*settings.*\\.php$)':
                                { deny: 'all', return: '404' },
                            '# Drupal: deny php in files': '',
                            'location ~ ^/sites/[^/]+/files/.*\\.php$': { deny: 'all' },
                            '# Drupal: deny php in vendor': '',
                            'location ~ /vendor/.*\\.php$': { deny: 'all' },
                            '# Drupal: allow image styles to be handled by the CMS': '',
                            'location ~ ^/sites/[^/]+/files/styles/': {
                                try_files: '$uri /index.php?q=$uri&$args',
                            },
                            '# Drupal: handle private files': '',
                            'location ~ ^(/[a-z\\-]+)?/system/files/': {
                                try_files: '$uri /index.php?$query_string',
                            },
                        };
                        return (
                            e.security.limitReq.computed &&
                                ((t['# Drupal: throttle user functions'] = ''),
                                (t['location ~ ^/user/(?:login|register|password)'] = {
                                    limit_req: 'zone=login burst=2 nodelay',
                                    try_files: '$uri /index.php?$query_string',
                                })),
                            t
                        );
                    },
                    Od = () => {
                        const e = {
                            '# Magento: setup': '',
                            'location ^~ /setup': {
                                root: '$base',
                                '# allow index.php': '',
                                'location ~ ^/setup/index.php': {
                                    include: 'nginxconfig.io/php_fastcgi.conf',
                                },
                                '# deny everything except pub': '',
                                'location ~ ^/setup/(?!pub/).': { deny: 'all' },
                            },
                            '# Magento: update': '',
                            'location ^~ /update': {
                                root: '$base',
                                '# allow index.php': '',
                                'location ~ ^/update/index.php': {
                                    include: 'nginxconfig.io/php_fastcgi.conf',
                                },
                                '# deny everything except pub': '',
                                'location ~ ^/update/(?!pub/).': { deny: 'all' },
                            },
                            '# Magento: media files': '',
                            'location ^~ /media/': {
                                try_files: '$uri $uri/ /get.php?$args',
                                'location ~* \\.(?:ico|jpg|jpeg|png|gif|svg|js|css|swf|eot|ttf|otf|woff|woff2)$':
                                    {
                                        expires: '+1y',
                                        add_header: 'Cache-Control "public"',
                                        try_files: '$uri $uri/ /get.php?$args',
                                    },
                                'location ~* \\.(?:zip|gz|gzip|bz2|csv|xml)$': {
                                    expires: 'off',
                                    add_header: 'Cache-Control "no-store"',
                                    try_files: '$uri $uri/ /get.php?$args',
                                },
                                'location ~ ^/media/theme_customization/.*\\.xml': { deny: 'all' },
                                'location ~ ^/media/(?:customer|downloadable|import)/': {
                                    deny: 'all',
                                },
                            },
                            '# Magento: static route': '',
                            'location @magento_static': {
                                rewrite:
                                    '^/static/(version\\d*/)?(.*)$ /static.php?resource=$2 last',
                            },
                            '# Magento: static files': '',
                            'location ^~ /static/': {
                                expires: 'max',
                                try_files: '$uri $uri/ @magento_static',
                                'location ~* \\.(ico|jpg|jpeg|png|gif|svg|js|css|swf|eot|ttf|otf|woff|woff2)$':
                                    {
                                        expires: '+1y',
                                        add_header: 'Cache-Control "public"',
                                        try_files: '$uri $uri/ magento_static',
                                    },
                                'location ~* .(zip|gz|gzip|bz2|csv|xml)$': {
                                    expires: 'off',
                                    add_header: 'Cache-Control "no-store"',
                                    try_files: '$uri $uri/ @magento_static',
                                },
                            },
                            '# Magento: deny cron': '',
                            'location ~ cron\\.php': { deny: 'all' },
                        };
                        return e;
                    },
                    zd = () => {
                        const e = {
                            '# Joomla: deny running scripts inside writable directories': '',
                            'location ~* /(images|cache|media|logs|tmp)/.*\\.(php|pl|py|jsp|asp|sh|cgi)$':
                                { return: '403', error_page: '403 /403_error.html' },
                            '# Joomla: caching of files': ('', ''),
                            'location ~* \\.(ico|pdf|flv)$': { expires: '1y' },
                            'location ~* \\.(js|css|png|jpg|jpeg|gif|swf|xml|txt)$': {
                                expires: '14d',
                            },
                        };
                        return e;
                    },
                    jd = (e) => {
                        const t = { '# ACME-challenge': '' };
                        return (
                            (t['location ^~ /.well-known/acme-challenge/'] = {
                                root: e.https.letsEncryptRoot.computed.replace(/\/+$/, ''),
                            }),
                            t
                        );
                    },
                    Hd = (e, t) => {
                        const o = [];
                        return (
                            e.https.https.computed &&
                                (o.push(['# SSL', '']),
                                o.push(['ssl_certificate', Ld(e, t)]),
                                o.push(['ssl_certificate_key', Cd(e, t)]),
                                'letsEncrypt' === e.https.certType.computed &&
                                    o.push([
                                        'ssl_trusted_certificate',
                                        `${t.https.letsEncryptCertRoot.computed.replace(/\/+$/, '')}/${e.server.domain.computed}/chain.pem`,
                                    ])),
                            o
                        );
                    },
                    Wd = (e, t, o) => {
                        const a = [],
                            s =
                                ('*' === e.server.listenIpv4.computed
                                    ? ''
                                    : `${e.server.listenIpv4.computed}:`) + '443',
                            l = t.https.portReuse.computed && !o.has(s);
                        if (
                            (l && o.add(s),
                            a.push([
                                'listen',
                                `${s} ssl${e.https.http2.computed ? ' http2' : ''}${l ? ' reuseport' : ''}`,
                            ]),
                            e.https.http3.computed && a.push(['listen', `${s} http3`]),
                            e.server.listenIpv6.computed)
                        ) {
                            const s = `[${e.server.listenIpv6.computed}]:443`,
                                l = t.https.portReuse.computed && !o.has(s);
                            l && o.add(s),
                                a.push([
                                    'listen',
                                    `${s} ssl${e.https.http2.computed ? ' http2' : ''}${l ? ' reuseport' : ''}`,
                                ]),
                                e.https.http3.computed && a.push(['listen', `${s} http3`]);
                        }
                        return a;
                    },
                    Xd = (e, t, o) => {
                        const a = [],
                            s =
                                ('*' === e.server.listenIpv4.computed
                                    ? ''
                                    : `${e.server.listenIpv4.computed}:`) + '80',
                            l = t.https.portReuse.computed && !o.has(s);
                        if (
                            (l && o.add(s),
                            a.push(['listen', `${s}${l ? ' reuseport' : ''}`]),
                            e.server.listenIpv6.computed)
                        ) {
                            const s = `[${e.server.listenIpv6.computed}]:80`,
                                l = t.https.portReuse.computed && !o.has(s);
                            l && o.add(s), a.push(['listen', `${s}${l ? ' reuseport' : ''}`]);
                        }
                        return a;
                    },
                    Id = (e, t, o) => (e.https.https.computed ? Wd(e, t, o) : Xd(e, t, o)),
                    Md = (e, t, o, a, s) => {
                        const l = [];
                        return (
                            l.push(...Xd(e, t, o)),
                            l.push(['server_name', a]),
                            (e.logging.redirectAccessLog.computed ||
                                e.logging.redirectErrorLog.computed) &&
                                (l.push(['# logging', '']),
                                e.logging.redirectAccessLog.computed &&
                                    l.push(['access_log', $i(e, t)]),
                                e.logging.redirectErrorLog.computed &&
                                    l.push(['error_log', Li(e)])),
                            'letsEncrypt' === e.https.certType.computed
                                ? (t.tools.modularizedStructure.computed
                                      ? l.push(['include', 'nginxconfig.io/letsencrypt.conf'])
                                      : l.push(...Object.entries(jd(t))),
                                  l.push([
                                      'location /',
                                      { return: `301 https://${s || a}$request_uri` },
                                  ]))
                                : l.push(['return', `301 https://${s || a}$request_uri`]),
                            l
                        );
                    },
                    Ud = (e, t, o, a) => {
                        const s = [],
                            l = [];
                        if (
                            ((e.https.https.computed && e.https.forceHttps.computed) ||
                                l.push(...Xd(e, o, a)),
                            e.https.https.computed && l.push(...Wd(e, o, a)),
                            l.push([
                                'server_name',
                                `${e.server.wwwSubdomain.computed ? 'www.' : ''}${e.server.domain.computed}`,
                            ]),
                            (e.php.php.computed ||
                                (e.python.python.computed && e.python.djangoRules.computed)) &&
                                (l.push(['set', `$base ${e.server.path.computed}`]),
                                e.routing.root.computed &&
                                    l.push(['root', `$base${e.server.documentRoot.computed}`])),
                            e.php.php.computed ||
                                (e.python.python.computed && e.python.djangoRules.computed) ||
                                !e.routing.root.computed ||
                                l.push([
                                    'root',
                                    `${e.server.path.computed}${e.server.documentRoot.computed}`,
                                ]),
                            l.push(...Hd(e, o)),
                            e.onion.onionLocation.computed &&
                                (l.push(['# Onion services', '']),
                                l.push([
                                    'add_header Onion-Location',
                                    `http://${e.onion.onionLocation.computed}$request_uri`,
                                ])),
                            !_d(t) &&
                                e.https.hsts.computed &&
                                (l.push(['# HSTS', '']),
                                l.push([
                                    'add_header Strict-Transport-Security',
                                    `"max-age=31536000${e.https.hstsSubdomains.computed ? '; includeSubDomains' : ''}${e.https.hstsPreload.computed ? '; preload' : ''}" always`,
                                ])),
                            o.tools.modularizedStructure.computed
                                ? (l.push(['# security', '']),
                                  l.push(['include', 'nginxconfig.io/security.conf']))
                                : l.push(...Ed(t, o)),
                            Object.keys(e.restrict).find(
                                (t) => e.restrict[t].computed && 'responseCode' !== t,
                            ))
                        ) {
                            const t = Object.keys(e.restrict)
                                .filter((t) => !e.restrict[t].computed && 'responseCode' !== t)
                                .map((e) => e.replace('Method', '').toUpperCase());
                            l.push(['# restrict methods', '']),
                                l.push([
                                    `if ($request_method !~ ^(${t.join('|')})$)`,
                                    { return: `'${e.restrict.responseCode.computed}'` },
                                ]);
                        }
                        if (
                            ((e.logging.accessLogEnabled.computed ||
                                e.logging.errorLogEnabled.computed) &&
                                (l.push(['# logging', '']),
                                e.logging.accessLogEnabled.computed &&
                                    l.push(['access_log', $i(e, o)]),
                                e.logging.errorLogEnabled.computed && l.push(['error_log', Li(e)])),
                            'index.php' === e.routing.index.computed &&
                                (l.push(['# index.php', '']), l.push(['index', 'index.php'])),
                            (!e.routing.fallbackHtml.computed && !e.routing.fallbackPhp.computed) ||
                                (e.reverseProxy.reverseProxy.computed &&
                                    '/' === e.reverseProxy.path.computed) ||
                                (l.push([
                                    `# index.${e.routing.fallbackHtml.computed ? 'html' : e.routing.fallbackPhp.computed ? 'php' : ''} fallback`,
                                    '',
                                ]),
                                l.push([
                                    'location /',
                                    {
                                        try_files:
                                            '$uri $uri/ /index.' +
                                            (e.routing.fallbackHtml.computed
                                                ? 'html'
                                                : e.routing.fallbackPhp.computed
                                                  ? 'php?$query_string'
                                                  : ''),
                                    },
                                ])),
                            e.routing.fallbackHtml.computed &&
                                e.routing.fallbackPhp.computed &&
                                (l.push(['# index.php fallback', '']),
                                l.push([
                                    `location ~ ^${e.routing.fallbackPhpPath.computed}`,
                                    { try_files: '$uri $uri/ /index.php?$query_string' },
                                ])),
                            e.python.python.computed &&
                                (o.tools.modularizedStructure.computed
                                    ? l.push([
                                          'location /',
                                          { include: 'nginxconfig.io/python_uwsgi.conf' },
                                      ])
                                    : l.push(['location /', wd(o)]),
                                e.python.djangoRules.computed &&
                                    (l.push(['# Django media', '']),
                                    l.push(['location /media/', { alias: '$base/media/' }]),
                                    l.push(['# Django static', '']),
                                    l.push(['location /static/', { alias: '$base/static/' }]))),
                            e.reverseProxy.reverseProxy.computed)
                        ) {
                            const t = [];
                            t.push(['proxy_pass', e.reverseProxy.proxyPass.computed]),
                                t.push([
                                    'proxy_set_header Host',
                                    e.reverseProxy.proxyHostHeader.computed,
                                ]),
                                o.tools.modularizedStructure.computed
                                    ? t.push(['include', 'nginxconfig.io/proxy.conf'])
                                    : t.push(...Object.entries(Pd(o))),
                                l.push(['# reverse proxy', '']),
                                l.push([`location ${e.reverseProxy.path.computed}`, t]);
                        }
                        if (
                            (o.tools.modularizedStructure.computed
                                ? (l.push(['# additional config', '']),
                                  l.push(['include', 'nginxconfig.io/general.conf']),
                                  e.https.forceHttps.computed ||
                                      'letsEncrypt' !== e.https.certType.computed ||
                                      l.push(['include', 'nginxconfig.io/letsencrypt.conf']),
                                  e.php.wordPressRules.computed &&
                                      l.push([
                                          'include',
                                          `nginxconfig.io/${e.server.domain.computed}.wordpress.conf`,
                                      ]),
                                  e.php.drupalRules.computed &&
                                      l.push(['include', 'nginxconfig.io/drupal.conf']),
                                  e.php.magentoRules.computed &&
                                      l.push(['include', 'nginxconfig.io/magento.conf']),
                                  e.php.joomlaRules.computed &&
                                      l.push(['include', 'nginxconfig.io/joomla.conf']))
                                : (l.push(...Object.entries(Vd(t, o))),
                                  e.https.forceHttps.computed ||
                                      'letsEncrypt' !== e.https.certType.computed ||
                                      l.push(...Object.entries(jd(o))),
                                  e.php.wordPressRules.computed &&
                                      l.push(...Object.entries(Dd(o, e))),
                                  e.php.drupalRules.computed && l.push(...Object.entries(Ad(o))),
                                  e.php.magentoRules.computed && l.push(...Object.entries(Od())),
                                  e.php.joomlaRules.computed && l.push(...Object.entries(zd()))),
                            e.php.php.computed)
                        ) {
                            e.php.phpBackupServer.computed &&
                                s.push([
                                    `upstream ${Fd(e)}`,
                                    { server: [Rd(e), `${Rd(e, !0)} backup`] },
                                ]),
                                l.push(['# handle .php', '']);
                            const a =
                                    'location ~ ' +
                                    (e.routing.legacyPhpRouting.computed
                                        ? '[^/]\\.php(/|$)'
                                        : '\\.php$'),
                                i = {
                                    fastcgi_pass:
                                        '' !== e.php.phpBackupServer.computed ? Fd(e) : Rd(e),
                                };
                            o.tools.modularizedStructure.computed || e.php.wordPressRules.computed
                                ? l.push([a, { ...i, include: 'nginxconfig.io/php_fastcgi.conf' }])
                                : l.push([a, { ...i, ...Td(t) }]);
                        }
                        if ((s.push(['server', l]), e.server.cdnSubdomain.computed)) {
                            const t = [];
                            t.push(...Id(e, o, a)),
                                t.push(['server_name', `cdn.${e.server.domain.computed}`]),
                                t.push([
                                    'root',
                                    `${e.server.path.computed}${e.server.documentRoot.computed}`,
                                ]),
                                t.push(...Hd(e, o)),
                                t.push(['# disable access_log', '']),
                                t.push(['access_log', 'off']),
                                o.performance.gzipCompression.computed &&
                                    (t.push(['# gzip', '']),
                                    t.push(['gzip', 'on']),
                                    t.push(['gzip_vary', 'on']),
                                    t.push(['gzip_proxied', 'any']),
                                    t.push(['gzip_comp_level', 6]),
                                    t.push(['gzip_types', xd])),
                                t.push(['# allow safe files', '']),
                                t.push([
                                    `location ~* \\.(?:${Sd.assets}|${Sd.fonts}|${Sd.svg}|${Sd.images}|${Sd.audio}|${Sd.video}|${Sd.docs})$`,
                                    [
                                        ['add_header', 'Access-Control-Allow-Origin "*"'],
                                        ['add_header', 'Cache-Control "public"'],
                                        ['expires', '30d'],
                                    ],
                                ]),
                                t.push(['# deny everything else', '']),
                                t.push(['location /', { deny: 'all' }]),
                                s.push(['# CDN', '']),
                                s.push(['server', t]);
                        }
                        if (e.server.redirectSubdomains.computed) {
                            const t = [];
                            t.push(...Id(e, o, a)),
                                t.push([
                                    'server_name',
                                    `${e.server.wwwSubdomain.computed ? '' : '*'}.${e.server.domain.computed}`,
                                ]),
                                t.push(...Hd(e, o)),
                                (e.logging.redirectAccessLog.computed ||
                                    e.logging.redirectErrorLog.computed) &&
                                    (t.push(['# logging', '']),
                                    e.logging.redirectAccessLog.computed &&
                                        t.push(['access_log', $i(e, o)]),
                                    e.logging.redirectErrorLog.computed &&
                                        t.push(['error_log', Li(e)])),
                                t.push([
                                    'return',
                                    `301 http${e.https.https.computed ? 's' : ''}://${e.server.wwwSubdomain.computed ? 'www.' : ''}${e.server.domain.computed}$request_uri`,
                                ]),
                                s.push([
                                    `# ${e.server.wwwSubdomain.computed ? 'non-www, ' : ''}subdomains redirect`,
                                    '',
                                ]),
                                s.push(['server', t]);
                        }
                        return (
                            e.https.forceHttps.computed &&
                                (s.push(['# HTTP redirect', '']),
                                e.server.wwwSubdomain.computed &&
                                !e.server.redirectSubdomains.computed
                                    ? (s.push([
                                          'server',
                                          Md(
                                              e,
                                              o,
                                              a,
                                              e.server.domain.computed,
                                              `www.${e.server.domain.computed}`,
                                          ),
                                      ]),
                                      s.push([
                                          'server',
                                          Md(e, o, a, `www.${e.server.domain.computed}`),
                                      ]))
                                    : e.server.wwwSubdomain.computed ||
                                      e.server.redirectSubdomains.computed ||
                                      s.push(['server', Md(e, o, a, e.server.domain.computed)]),
                                e.server.cdnSubdomain.computed &&
                                    s.push([
                                        'server',
                                        Md(e, o, a, `cdn.${e.server.domain.computed}`),
                                    ]),
                                e.server.redirectSubdomains.computed &&
                                    s.push([
                                        'server',
                                        Md(
                                            e,
                                            o,
                                            a,
                                            `.${e.server.domain.computed}`,
                                            `${e.server.wwwSubdomain.computed ? 'www.' : ''}${e.server.domain.computed}`,
                                        ),
                                    ])),
                            s
                        );
                    },
                    Bd = (e, t) => {
                        const o = {
                            '# Generated by nginxconfig.io': '',
                            '# See nginxconfig.txt for the configuration share link': '',
                        };
                        if (
                            ((o.user = t.nginx.user.computed),
                            t.nginx.pid.computed && (o.pid = t.nginx.pid.computed),
                            (o.worker_processes = t.nginx.workerProcesses.computed),
                            (o.worker_rlimit_nofile = 65535),
                            (o['# Load modules'] = ''),
                            (o.include = `${t.nginx.nginxConfigDirectory.computed.replace(/\/+$/, '')}/modules-enabled/*.conf`),
                            (o.events = { multi_accept: 'on', worker_connections: 65535 }),
                            (o.http = []),
                            o.http.push(['charset', 'utf-8']),
                            o.http.push(['sendfile', 'on']),
                            o.http.push(['tcp_nopush', 'on']),
                            o.http.push(['tcp_nodelay', 'on']),
                            t.security.serverTokens.computed ||
                                o.http.push(['server_tokens', 'off']),
                            t.logging.logNotFound.computed || o.http.push(['log_not_found', 'off']),
                            o.http.push(['types_hash_max_size', t.nginx.typesHashMaxSize.computed]),
                            o.http.push([
                                'types_hash_bucket_size',
                                t.nginx.typesHashBucketSize.computed,
                            ]),
                            o.http.push([
                                'client_max_body_size',
                                `${t.nginx.clientMaxBodySize.computed}M`,
                            ]),
                            o.http.push(['# MIME', '']),
                            o.http.push(['include', 'mime.types']),
                            o.http.push(['default_type', 'application/octet-stream']),
                            t.logging.cloudflare.computed)
                        ) {
                            o.http.push(['# Log Format', '']);
                            let e = [
                                '$remote_addr',
                                '-',
                                '$remote_user',
                                '[$time_local]',
                                '"$request"',
                                '$status',
                                '$body_bytes_sent',
                                '"$http_referer"',
                                '"$http_user_agent"',
                            ];
                            t.logging.cfRay.computed && e.push('$http_cf_ray'),
                                t.logging.cfConnectingIp.computed &&
                                    e.push('$http_cf_connecting_ip'),
                                t.logging.xForwardedFor.computed && e.push('$http_x_forwarded_for'),
                                t.logging.xForwardedProto.computed &&
                                    e.push('$http_x_forwarded_proto'),
                                t.logging.trueClientIp.computed && e.push('$http_true_client_ip'),
                                t.logging.cfIpCountry.computed && e.push('$http_cf_ipcountry'),
                                t.logging.cfVisitor.computed && e.push('$http_cf_visitor'),
                                t.logging.cdnLoop.computed && e.push('$http_cdn_loop'),
                                o.http.push(['log_format', `cloudflare '${e.join(' ')}'`]);
                        }
                        o.http.push(['# Logging', '']),
                            o.http.push(['access_log', 'off']),
                            t.logging.errorLogEnabled.computed
                                ? o.http.push([
                                      'error_log',
                                      t.logging.errorLogPath.computed.trim() +
                                          ` ${t.logging.errorLogLevel.computed}`,
                                  ])
                                : o.http.push(['error_log', vi]),
                            t.security.limitReq.computed &&
                                (o.http.push(['# Limits', '']),
                                o.http.push(['limit_req_log_level', 'warn']),
                                o.http.push([
                                    'limit_req_zone',
                                    '$binary_remote_addr zone=login:10m rate=10r/m',
                                ]));
                        let a = !1;
                        for (const s of e)
                            if (s && s.https && s.https.https && s.https.https.computed) {
                                a = !0;
                                break;
                            }
                        if (a) {
                            o.http.push(['# SSL', '']),
                                o.http.push(['ssl_session_timeout', '1d']),
                                o.http.push(['ssl_session_cache', 'shared:SSL:10m']),
                                o.http.push(['ssl_session_tickets', 'off']);
                            const e = $d[t.https.sslProfile.computed];
                            e &&
                                (e.dh_param_size &&
                                    (o.http.push([
                                        '# Diffie-Hellman parameter for DHE ciphersuites',
                                        '',
                                    ]),
                                    o.http.push([
                                        'ssl_dhparam',
                                        `${t.nginx.nginxConfigDirectory.computed.replace(/\/+$/, '')}/dhparam.pem`,
                                    ])),
                                o.http.push([`# ${e.name} configuration`, '']),
                                o.http.push(['ssl_protocols', e.protocols.join(' ')]),
                                e.ciphers.length &&
                                    o.http.push(['ssl_ciphers', e.ciphers.join(':')]),
                                e.server_preferred_order &&
                                    o.http.push(['ssl_prefer_server_ciphers', 'on'])),
                                o.http.push(['# OCSP Stapling', '']),
                                o.http.push(['ssl_stapling', 'on']),
                                o.http.push(['ssl_stapling_verify', 'on']);
                            const a = [];
                            t.https.ocspCloudflare.computed &&
                                (['ipv4', 'both'].includes(t.https.ocspCloudflareType.computed) &&
                                    a.push('1.1.1.1', '1.0.0.1'),
                                ['ipv6', 'both'].includes(t.https.ocspCloudflareType.computed) &&
                                    a.push('[2606:4700:4700::1111]', '[2606:4700:4700::1001]')),
                                t.https.ocspGoogle.computed &&
                                    (['ipv4', 'both'].includes(t.https.ocspGoogleType.computed) &&
                                        a.push('8.8.8.8', '8.8.4.4'),
                                    ['ipv6', 'both'].includes(t.https.ocspGoogleType.computed) &&
                                        a.push('[2001:4860:4860::8888]', '[2001:4860:4860::8844]')),
                                t.https.ocspOpenDns.computed &&
                                    (['ipv4', 'both'].includes(t.https.ocspOpenDnsType.computed) &&
                                        a.push('208.67.222.222', '208.67.220.220'),
                                    ['ipv6', 'both'].includes(t.https.ocspOpenDnsType.computed) &&
                                        a.push('[2620:119:35::35]', '[2620:119:53::53]')),
                                t.https.ocspQuad9.computed &&
                                    (['ipv4', 'both'].includes(t.https.ocspQuad9Type.computed) &&
                                        a.push('9.9.9.9', '149.112.112.112'),
                                    ['ipv6', 'both'].includes(t.https.ocspQuad9Type.computed) &&
                                        a.push('[2620:fe::fe]', '[2620:fe::9]')),
                                t.https.ocspVerisign.computed &&
                                    (['ipv4', 'both'].includes(t.https.ocspVerisignType.computed) &&
                                        a.push('64.6.64.6', '64.6.65.6'),
                                    ['ipv6', 'both'].includes(t.https.ocspVerisignType.computed) &&
                                        a.push('[2620:74:1b::1:1]', '[2620:74:1c::2:2]')),
                                a.length &&
                                    (o.http.push(['resolver', `${a.join(' ')} valid=60s`]),
                                    o.http.push(['resolver_timeout', '2s']));
                        }
                        if (
                            (e.some((e) => e.reverseProxy.reverseProxy.computed) &&
                                (o.http.push([
                                    '# Connection header for WebSocket reverse proxy',
                                    '',
                                ]),
                                o.http.push([
                                    'map $http_upgrade $connection_upgrade',
                                    { default: 'upgrade', '""': 'close' },
                                ]),
                                o.http.push([
                                    'map $remote_addr $proxy_forwarded_elem',
                                    {
                                        '# IPv4 addresses can be sent as-is': '',
                                        '~^[0-9.]+$': '"for=$remote_addr"',
                                        '# IPv6 addresses need to be bracketed and quoted': '',
                                        '~^[0-9A-Fa-f:.]+$': '"for=\\"[$remote_addr]\\""',
                                        '# Unix domain socket names cannot be represented in RFC 7239 syntax':
                                            '',
                                        default: '"for=unknown"',
                                    },
                                ]),
                                o.http.push([
                                    'map $http_forwarded $proxy_add_forwarded',
                                    {
                                        '# If the incoming Forwarded header is syntactically valid, append to it':
                                            '',
                                        '': '"~^(,[ \\\\t]*)*([!#$%&\'*+.^_`|~0-9A-Za-z-]+=([!#$%&\'*+.^_`|~0-9A-Za-z-]+|\\"([\\\\t \\\\x21\\\\x23-\\\\x5B\\\\x5D-\\\\x7E\\\\x80-\\\\xFF]|\\\\\\\\[\\\\t \\\\x21-\\\\x7E\\\\x80-\\\\xFF])*\\"))?(;([!#$%&\'*+.^_`|~0-9A-Za-z-]+=([!#$%&\'*+.^_`|~0-9A-Za-z-]+|\\"([\\\\t \\\\x21\\\\x23-\\\\x5B\\\\x5D-\\\\x7E\\\\x80-\\\\xFF]|\\\\\\\\[\\\\t \\\\x21-\\\\x7E\\\\x80-\\\\xFF])*\\"))?)*([ \\\\t]*,([ \\\\t]*([!#$%&\'*+.^_`|~0-9A-Za-z-]+=([!#$%&\'*+.^_`|~0-9A-Za-z-]+|\\"([\\\\t \\\\x21\\\\x23-\\\\x5B\\\\x5D-\\\\x7E\\\\x80-\\\\xFF]|\\\\\\\\[\\\\t \\\\x21-\\\\x7E\\\\x80-\\\\xFF])*\\"))?(;([!#$%&\'*+.^_`|~0-9A-Za-z-]+=([!#$%&\'*+.^_`|~0-9A-Za-z-]+|\\"([\\\\t \\\\x21\\\\x23-\\\\x5B\\\\x5D-\\\\x7E\\\\x80-\\\\xFF]|\\\\\\\\[\\\\t \\\\x21-\\\\x7E\\\\x80-\\\\xFF])*\\"))?)*)?)*$" "$http_forwarded, $proxy_forwarded_elem"',
                                        '# Otherwise, replace it': '',
                                        default: '"$proxy_forwarded_elem"',
                                    },
                                ])),
                            o.http.push(['# Load configs', '']),
                            o.http.push([
                                'include',
                                [
                                    `${t.nginx.nginxConfigDirectory.computed.replace(/\/+$/, '')}/conf.d/*.conf`,
                                    t.tools.modularizedStructure.computed
                                        ? `${t.nginx.nginxConfigDirectory.computed.replace(/\/+$/, '')}/sites-enabled/*`
                                        : '',
                                ].filter((e) => e.length),
                            ]),
                            !t.tools.modularizedStructure.computed)
                        ) {
                            const a = new Set();
                            for (const s of e)
                                o.http.push([`# ${s.server.domain.computed}`, '']),
                                    o.http.push(...Ud(s, e, t, a));
                        }
                        return o;
                    },
                    Nd = () => ({
                        version: '3.3',
                        services: { nginx: { build: { context: '.', dockerfile: 'Dockerfile' } } },
                    }),
                    Qd = () => 'FROM nginx:latest\nCOPY . /etc/nginx/',
                    Gd = (e) => {
                        const t = {};
                        for (const o in e) {
                            if ('presets' === o) continue;
                            const a = {};
                            for (const t in e[o]) {
                                const s = e[o][t];
                                s.value !== s.default && (a[t] = s.value);
                            }
                            Object.keys(a).length && (t[o] = a);
                        }
                        return t;
                    },
                    Jd = (e, t) => {
                        const o = {};
                        o.domains = e.map((e) => Gd(e[0])).reduce((e, t, o) => ((e[o] = t), e), {});
                        const a = Gd(t);
                        return Object.keys(a).length && (o.global = a), o;
                    },
                    Kd = (e, t) => {
                        const o = Jd(e, t),
                            a = Q.stringify(o, { allowDots: !0 });
                        return `${a.length > 1e3 ? '#' : ''}${a.length ? '?' : ''}${a}`;
                    },
                    qd = (e, t) => {
                        const o = {};
                        if (
                            ((o['nginx.conf'] = bd(Bd(e, t))),
                            t.docker.dockerfile.computed && (o['Dockerfile'] = Qd()),
                            t.docker.dockerCompose.computed &&
                                (o['docker-compose.yaml'] = yd(Nd())),
                            t.tools.modularizedStructure.computed)
                        ) {
                            const a =
                                    'sites-' +
                                    (t.tools.symlinkVhost.computed ? 'available' : 'enabled'),
                                s = new Set();
                            for (const l of e)
                                (o[`${a}/${l.server.domain.computed}.conf`] = bd(Ud(l, e, t, s))),
                                    e.some((e) => e.php.wordPressRules.computed) &&
                                        (o[
                                            `nginxconfig.io/${l.server.domain.computed}.wordpress.conf`
                                        ] = bd(Dd(t, l)));
                            e.some((e) => 'letsEncrypt' === e.https.certType.computed) &&
                                (o['nginxconfig.io/letsencrypt.conf'] = bd(jd(t))),
                                (o['nginxconfig.io/security.conf'] = bd(Ed(e, t))),
                                (o['nginxconfig.io/general.conf'] = bd(Vd(e, t))),
                                e.some((e) => e.php.php.computed) &&
                                    (o['nginxconfig.io/php_fastcgi.conf'] = bd(Td(e))),
                                e.some((e) => e.python.python.computed) &&
                                    (o['nginxconfig.io/python_uwsgi.conf'] = bd(wd(t))),
                                e.some((e) => e.reverseProxy.reverseProxy.computed) &&
                                    (o['nginxconfig.io/proxy.conf'] = bd(Pd(t))),
                                e.some((e) => e.php.drupalRules.computed) &&
                                    (o['nginxconfig.io/drupal.conf'] = bd(Ad(t))),
                                e.some((e) => e.php.magentoRules.computed) &&
                                    (o['nginxconfig.io/magento.conf'] = bd(Od())),
                                e.some((e) => e.php.joomlaRules.computed) &&
                                    (o['nginxconfig.io/joomla.conf'] = bd(zd()));
                        } else
                            e.some((e) => e.php.wordPressRules.computed) &&
                                (o['nginxconfig.io/php_fastcgi.conf'] = bd(Td(e)));
                        const a = Kd(
                            e.map((e, t) => [e, t]).filter((e) => null !== e[0]),
                            t,
                        );
                        return (
                            (o['nginxconfig.txt'] =
                                `${window.location.protocol}//${window.location.host}${window.location.pathname}${a}`),
                            o
                        );
                    },
                    Yd = { class: 'panel' },
                    Zd = { class: 'tabs' },
                    er = ['onClick'],
                    tr = { key: 0, class: 'fas fa-exclamation-triangle' },
                    or = { class: 'navigation-buttons' },
                    ar = (0, $.Lk)('i', { class: 'fas fa-long-arrow-alt-left' }, null, -1),
                    sr = (0, $.Lk)('i', { class: 'fas fa-long-arrow-alt-right' }, null, -1);
                function lr(e, t, o, a, s, l) {
                    return (
                        (0, $.uX)(),
                        (0, $.CE)('div', Yd, [
                            (0, $.Lk)('div', Zd, [
                                (0, $.Lk)('ul', null, [
                                    ((0, $.uX)(!0),
                                    (0, $.CE)(
                                        $.FK,
                                        null,
                                        (0, $.pI)(
                                            s.tabs,
                                            (t) => (
                                                (0, $.uX)(),
                                                (0, $.CE)(
                                                    'li',
                                                    { class: (0, L.C4)(l.tabClass(t.key)) },
                                                    [
                                                        (0, $.Lk)(
                                                            'a',
                                                            { onClick: (e) => l.showTab(t.key) },
                                                            [
                                                                (0, $.eW)(
                                                                    (0, L.v_)(e.$t(t.display)) +
                                                                        (0, L.v_)(
                                                                            l.changes(t.key),
                                                                        ) +
                                                                        ' ',
                                                                    1,
                                                                ),
                                                                l.warnings(t.key)
                                                                    ? ((0, $.uX)(),
                                                                      (0, $.CE)('i', tr))
                                                                    : (0, $.Q3)('', !0),
                                                            ],
                                                            8,
                                                            er,
                                                        ),
                                                    ],
                                                    2,
                                                )
                                            ),
                                        ),
                                        256,
                                    )),
                                ]),
                            ]),
                            ((0, $.uX)(!0),
                            (0, $.CE)(
                                $.FK,
                                null,
                                (0, $.pI)(
                                    s.tabs,
                                    (t) => (
                                        (0, $.uX)(),
                                        (0, $.Wv)(
                                            (0, $.$y)(t),
                                            {
                                                key: t.key,
                                                ref_for: !0,
                                                ref: t.key,
                                                data: e.$props.data[t.key],
                                                style: (0, L.Tr)({
                                                    display: s.active === t.key ? void 0 : 'none',
                                                }),
                                                class: 'container',
                                            },
                                            null,
                                            8,
                                            ['data', 'style'],
                                        )
                                    ),
                                ),
                                128,
                            )),
                            (0, $.Lk)('div', or, [
                                !1 !== l.previousTab
                                    ? ((0, $.uX)(),
                                      (0, $.CE)(
                                          'a',
                                          {
                                              key: 0,
                                              class: 'button is-mini',
                                              onClick:
                                                  t[0] ||
                                                  (t[0] = (...e) =>
                                                      l.showPreviousTab && l.showPreviousTab(...e)),
                                          },
                                          [
                                              ar,
                                              (0, $.Lk)(
                                                  'span',
                                                  null,
                                                  (0, L.v_)(e.$t('common.back')),
                                                  1,
                                              ),
                                          ],
                                      ))
                                    : (0, $.Q3)('', !0),
                                !1 !== l.nextTab
                                    ? ((0, $.uX)(),
                                      (0, $.CE)(
                                          'a',
                                          {
                                              key: 1,
                                              class: 'button is-primary is-mini',
                                              onClick:
                                                  t[1] ||
                                                  (t[1] = (...e) =>
                                                      l.showNextTab && l.showNextTab(...e)),
                                          },
                                          [
                                              (0, $.Lk)(
                                                  'span',
                                                  null,
                                                  (0, L.v_)(e.$t('common.next')),
                                                  1,
                                              ),
                                              sr,
                                          ],
                                      ))
                                    : (0, $.Q3)('', !0),
                            ]),
                        ])
                    );
                }
                const ir = { class: 'field is-horizontal' },
                    nr = { class: 'field-label' },
                    dr = { class: 'label' },
                    rr = { class: 'field-body' },
                    pr = { class: 'field' },
                    cr = { class: 'checkbox' },
                    ur = { key: 0, class: 'field is-horizontal is-aligned-top' },
                    hr = { class: 'field-label' },
                    mr = { class: 'label' },
                    gr = { class: 'field-body' },
                    fr = { class: 'field' },
                    vr = { class: 'control' },
                    br = { class: 'text' },
                    kr = { class: 'field is-horizontal is-aligned-top' },
                    yr = { class: 'field-label' },
                    $r = { class: 'label' },
                    Lr = { class: 'field-body' },
                    Cr = { class: 'field' },
                    xr = { class: 'field' },
                    Sr = { class: 'radio' },
                    _r = { class: 'field is-horizontal is-aligned-top' },
                    Er = { class: 'field-label' },
                    wr = { class: 'label' },
                    Pr = { class: 'field-body' },
                    Tr = { class: 'field' },
                    Vr = { class: 'checkbox' },
                    Rr = { key: 0, class: 'control field is-horizontal is-expanded' },
                    Fr = { class: 'radio' },
                    Dr = { class: 'checkbox' },
                    Ar = { key: 1, class: 'control field is-horizontal is-expanded' },
                    Or = { class: 'radio' },
                    zr = { class: 'checkbox' },
                    jr = { key: 2, class: 'control field is-horizontal is-expanded' },
                    Hr = { class: 'radio' },
                    Wr = { class: 'checkbox' },
                    Xr = { key: 3, class: 'control field is-horizontal is-expanded' },
                    Ir = { class: 'radio' },
                    Mr = { class: 'checkbox' },
                    Ur = { key: 4, class: 'control field is-horizontal is-expanded' },
                    Br = { class: 'radio' },
                    Nr = { key: 0, class: 'field is-horizontal' },
                    Qr = { class: 'field-label' },
                    Gr = { class: 'label' },
                    Jr = { class: 'field-body' },
                    Kr = { class: 'field' },
                    qr = ['placeholder'],
                    Yr = { key: 1, class: 'field is-horizontal' },
                    Zr = { class: 'field-label' },
                    ep = { class: 'label' },
                    tp = { class: 'field-body' },
                    op = { class: 'field' },
                    ap = ['placeholder'];
                function sp(e, t, o, s, l, i) {
                    const n = (0, $.g2)('PrettyCheck'),
                        d = (0, $.g2)('PrettyRadio');
                    return (
                        (0, $.uX)(),
                        (0, $.CE)('div', null, [
                            (0, $.Lk)('div', ir, [
                                (0, $.Lk)('div', nr, [
                                    (0, $.Lk)(
                                        'label',
                                        dr,
                                        (0, L.v_)(e.$t('templates.globalSections.https.portReuse')),
                                        1,
                                    ),
                                ]),
                                (0, $.Lk)('div', rr, [
                                    (0, $.Lk)('div', pr, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.portReuseChanged ? ' is-changed' : ''),
                                                ),
                                            },
                                            [
                                                (0, $.Lk)('div', cr, [
                                                    (0, $.bF)(
                                                        n,
                                                        {
                                                            modelValue: e.portReuse,
                                                            'onUpdate:modelValue':
                                                                t[0] ||
                                                                (t[0] = (t) => (e.portReuse = t)),
                                                            class: 'p-default p-curve p-fill p-icon',
                                                        },
                                                        {
                                                            default: (0, $.k6)(() => [
                                                                (0, $.eW)(
                                                                    (0, L.v_)(
                                                                        e.$t(
                                                                            'templates.globalSections.https.enableReuseOfPort',
                                                                        ),
                                                                    ),
                                                                    1,
                                                                ),
                                                            ]),
                                                            _: 1,
                                                        },
                                                        8,
                                                        ['modelValue'],
                                                    ),
                                                ]),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                            e.sslProfileEnabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)(
                                      $.FK,
                                      { key: 1 },
                                      [
                                          (0, $.Lk)('div', kr, [
                                              (0, $.Lk)('div', yr, [
                                                  (0, $.Lk)(
                                                      'label',
                                                      $r,
                                                      (0, L.v_)(
                                                          e.$t(
                                                              'templates.globalSections.https.sslProfile',
                                                          ),
                                                      ),
                                                      1,
                                                  ),
                                              ]),
                                              (0, $.Lk)('div', Lr, [
                                                  (0, $.Lk)('div', Cr, [
                                                      (0, $.Lk)('div', xr, [
                                                          ((0, $.uX)(!0),
                                                          (0, $.CE)(
                                                              $.FK,
                                                              null,
                                                              (0, $.pI)(
                                                                  e.$props.data.sslProfile.options,
                                                                  (o, a) => (
                                                                      (0, $.uX)(),
                                                                      (0, $.CE)(
                                                                          'div',
                                                                          {
                                                                              class: (0, L.C4)(
                                                                                  'control' +
                                                                                      (e.sslProfileChanged &&
                                                                                      a ===
                                                                                          e.sslProfile
                                                                                          ? ' is-changed'
                                                                                          : ''),
                                                                              ),
                                                                          },
                                                                          [
                                                                              (0, $.Lk)('div', Sr, [
                                                                                  (0, $.bF)(
                                                                                      d,
                                                                                      {
                                                                                          modelValue:
                                                                                              e.sslProfile,
                                                                                          'onUpdate:modelValue':
                                                                                              t[1] ||
                                                                                              (t[1] =
                                                                                                  (
                                                                                                      t,
                                                                                                  ) =>
                                                                                                      (e.sslProfile =
                                                                                                          t)),
                                                                                          value: a,
                                                                                          class: 'p-default p-round p-fill p-icon',
                                                                                      },
                                                                                      {
                                                                                          default:
                                                                                              (0,
                                                                                              $.k6)(
                                                                                                  () => [
                                                                                                      (0,
                                                                                                      $.eW)(
                                                                                                          (0,
                                                                                                          L.v_)(
                                                                                                              e.$t(
                                                                                                                  o,
                                                                                                              ),
                                                                                                          ),
                                                                                                          1,
                                                                                                      ),
                                                                                                  ],
                                                                                              ),
                                                                                          _: 2,
                                                                                      },
                                                                                      1032,
                                                                                      [
                                                                                          'modelValue',
                                                                                          'value',
                                                                                      ],
                                                                                  ),
                                                                              ]),
                                                                          ],
                                                                          2,
                                                                      )
                                                                  ),
                                                              ),
                                                              256,
                                                          )),
                                                      ]),
                                                  ]),
                                              ]),
                                          ]),
                                          (0, $.Lk)('div', _r, [
                                              (0, $.Lk)('div', Er, [
                                                  (0, $.Lk)(
                                                      'label',
                                                      wr,
                                                      (0, L.v_)(
                                                          e.$t(
                                                              'templates.globalSections.https.ocspDnsResolvers',
                                                          ),
                                                      ),
                                                      1,
                                                  ),
                                              ]),
                                              (0, $.Lk)('div', Pr, [
                                                  (0, $.Lk)('div', Tr, [
                                                      (0, $.Lk)(
                                                          'div',
                                                          {
                                                              class: (0, L.C4)(
                                                                  'control' +
                                                                      (e.ocspCloudflareChanged
                                                                          ? ' is-changed'
                                                                          : ''),
                                                              ),
                                                          },
                                                          [
                                                              (0, $.Lk)('div', Vr, [
                                                                  (0, $.bF)(
                                                                      n,
                                                                      {
                                                                          modelValue:
                                                                              e.ocspCloudflare,
                                                                          'onUpdate:modelValue':
                                                                              t[2] ||
                                                                              (t[2] = (t) =>
                                                                                  (e.ocspCloudflare =
                                                                                      t)),
                                                                          class: 'p-default p-curve p-fill p-icon',
                                                                      },
                                                                      {
                                                                          default: (0, $.k6)(() => [
                                                                              (0, $.eW)(
                                                                                  (0, L.v_)(
                                                                                      e.$t(
                                                                                          'templates.globalSections.https.cloudflareResolver',
                                                                                      ),
                                                                                  ),
                                                                                  1,
                                                                              ),
                                                                          ]),
                                                                          _: 1,
                                                                      },
                                                                      8,
                                                                      ['modelValue'],
                                                                  ),
                                                              ]),
                                                          ],
                                                          2,
                                                      ),
                                                      e.$props.data.ocspCloudflare.computed
                                                          ? ((0, $.uX)(),
                                                            (0, $.CE)('div', Rr, [
                                                                ((0, $.uX)(!0),
                                                                (0, $.CE)(
                                                                    $.FK,
                                                                    null,
                                                                    (0, $.pI)(
                                                                        e.$props.data
                                                                            .ocspCloudflareType
                                                                            .options,
                                                                        (o, a) => (
                                                                            (0, $.uX)(),
                                                                            (0, $.CE)(
                                                                                'div',
                                                                                {
                                                                                    class: (0,
                                                                                    L.C4)(
                                                                                        'control' +
                                                                                            (e.ocspCloudflareTypeChanged &&
                                                                                            a ===
                                                                                                e.ocspCloudflareType
                                                                                                ? ' is-changed'
                                                                                                : ''),
                                                                                    ),
                                                                                },
                                                                                [
                                                                                    (0, $.Lk)(
                                                                                        'div',
                                                                                        Fr,
                                                                                        [
                                                                                            (0,
                                                                                            $.bF)(
                                                                                                d,
                                                                                                {
                                                                                                    modelValue:
                                                                                                        e.ocspCloudflareType,
                                                                                                    'onUpdate:modelValue':
                                                                                                        t[3] ||
                                                                                                        (t[3] =
                                                                                                            (
                                                                                                                t,
                                                                                                            ) =>
                                                                                                                (e.ocspCloudflareType =
                                                                                                                    t)),
                                                                                                    value: a,
                                                                                                    class: 'p-default p-round p-fill p-icon',
                                                                                                },
                                                                                                {
                                                                                                    default:
                                                                                                        (0,
                                                                                                        $.k6)(
                                                                                                            () => [
                                                                                                                (0,
                                                                                                                $.eW)(
                                                                                                                    (0,
                                                                                                                    L.v_)(
                                                                                                                        e.$t(
                                                                                                                            o,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    1,
                                                                                                                ),
                                                                                                            ],
                                                                                                        ),
                                                                                                    _: 2,
                                                                                                },
                                                                                                1032,
                                                                                                [
                                                                                                    'modelValue',
                                                                                                    'value',
                                                                                                ],
                                                                                            ),
                                                                                        ],
                                                                                    ),
                                                                                ],
                                                                                2,
                                                                            )
                                                                        ),
                                                                    ),
                                                                    256,
                                                                )),
                                                            ]))
                                                          : (0, $.Q3)('', !0),
                                                      (0, $.Lk)(
                                                          'div',
                                                          {
                                                              class: (0, L.C4)(
                                                                  'control' +
                                                                      (e.ocspGoogleChanged
                                                                          ? ' is-changed'
                                                                          : ''),
                                                              ),
                                                          },
                                                          [
                                                              (0, $.Lk)('div', Dr, [
                                                                  (0, $.bF)(
                                                                      n,
                                                                      {
                                                                          modelValue: e.ocspGoogle,
                                                                          'onUpdate:modelValue':
                                                                              t[4] ||
                                                                              (t[4] = (t) =>
                                                                                  (e.ocspGoogle =
                                                                                      t)),
                                                                          class: 'p-default p-curve p-fill p-icon',
                                                                      },
                                                                      {
                                                                          default: (0, $.k6)(() => [
                                                                              (0, $.eW)(
                                                                                  (0, L.v_)(
                                                                                      e.$t(
                                                                                          'templates.globalSections.https.googlePublicDns',
                                                                                      ),
                                                                                  ),
                                                                                  1,
                                                                              ),
                                                                          ]),
                                                                          _: 1,
                                                                      },
                                                                      8,
                                                                      ['modelValue'],
                                                                  ),
                                                              ]),
                                                          ],
                                                          2,
                                                      ),
                                                      e.$props.data.ocspGoogle.computed
                                                          ? ((0, $.uX)(),
                                                            (0, $.CE)('div', Ar, [
                                                                ((0, $.uX)(!0),
                                                                (0, $.CE)(
                                                                    $.FK,
                                                                    null,
                                                                    (0, $.pI)(
                                                                        e.$props.data.ocspGoogleType
                                                                            .options,
                                                                        (o, a) => (
                                                                            (0, $.uX)(),
                                                                            (0, $.CE)(
                                                                                'div',
                                                                                {
                                                                                    class: (0,
                                                                                    L.C4)(
                                                                                        'control' +
                                                                                            (e.ocspGoogleTypeChanged &&
                                                                                            a ===
                                                                                                e.ocspGoogleType
                                                                                                ? ' is-changed'
                                                                                                : ''),
                                                                                    ),
                                                                                },
                                                                                [
                                                                                    (0, $.Lk)(
                                                                                        'div',
                                                                                        Or,
                                                                                        [
                                                                                            (0,
                                                                                            $.bF)(
                                                                                                d,
                                                                                                {
                                                                                                    modelValue:
                                                                                                        e.ocspGoogleType,
                                                                                                    'onUpdate:modelValue':
                                                                                                        t[5] ||
                                                                                                        (t[5] =
                                                                                                            (
                                                                                                                t,
                                                                                                            ) =>
                                                                                                                (e.ocspGoogleType =
                                                                                                                    t)),
                                                                                                    value: a,
                                                                                                    class: 'p-default p-round p-fill p-icon',
                                                                                                },
                                                                                                {
                                                                                                    default:
                                                                                                        (0,
                                                                                                        $.k6)(
                                                                                                            () => [
                                                                                                                (0,
                                                                                                                $.eW)(
                                                                                                                    (0,
                                                                                                                    L.v_)(
                                                                                                                        e.$t(
                                                                                                                            o,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    1,
                                                                                                                ),
                                                                                                            ],
                                                                                                        ),
                                                                                                    _: 2,
                                                                                                },
                                                                                                1032,
                                                                                                [
                                                                                                    'modelValue',
                                                                                                    'value',
                                                                                                ],
                                                                                            ),
                                                                                        ],
                                                                                    ),
                                                                                ],
                                                                                2,
                                                                            )
                                                                        ),
                                                                    ),
                                                                    256,
                                                                )),
                                                            ]))
                                                          : (0, $.Q3)('', !0),
                                                      (0, $.Lk)(
                                                          'div',
                                                          {
                                                              class: (0, L.C4)(
                                                                  'control' +
                                                                      (e.ocspOpenDnsChanged
                                                                          ? ' is-changed'
                                                                          : ''),
                                                              ),
                                                          },
                                                          [
                                                              (0, $.Lk)('div', zr, [
                                                                  (0, $.bF)(
                                                                      n,
                                                                      {
                                                                          modelValue: e.ocspOpenDns,
                                                                          'onUpdate:modelValue':
                                                                              t[6] ||
                                                                              (t[6] = (t) =>
                                                                                  (e.ocspOpenDns =
                                                                                      t)),
                                                                          class: 'p-default p-curve p-fill p-icon',
                                                                      },
                                                                      {
                                                                          default: (0, $.k6)(() => [
                                                                              (0, $.eW)(
                                                                                  (0, L.v_)(
                                                                                      e.$t(
                                                                                          'templates.globalSections.https.openDns',
                                                                                      ),
                                                                                  ),
                                                                                  1,
                                                                              ),
                                                                          ]),
                                                                          _: 1,
                                                                      },
                                                                      8,
                                                                      ['modelValue'],
                                                                  ),
                                                              ]),
                                                          ],
                                                          2,
                                                      ),
                                                      e.$props.data.ocspOpenDns.computed
                                                          ? ((0, $.uX)(),
                                                            (0, $.CE)('div', jr, [
                                                                ((0, $.uX)(!0),
                                                                (0, $.CE)(
                                                                    $.FK,
                                                                    null,
                                                                    (0, $.pI)(
                                                                        e.$props.data
                                                                            .ocspOpenDnsType
                                                                            .options,
                                                                        (o, a) => (
                                                                            (0, $.uX)(),
                                                                            (0, $.CE)(
                                                                                'div',
                                                                                {
                                                                                    class: (0,
                                                                                    L.C4)(
                                                                                        'control' +
                                                                                            (e.ocspOpenDnsTypeChanged &&
                                                                                            a ===
                                                                                                e.ocspOpenDnsType
                                                                                                ? ' is-changed'
                                                                                                : ''),
                                                                                    ),
                                                                                },
                                                                                [
                                                                                    (0, $.Lk)(
                                                                                        'div',
                                                                                        Hr,
                                                                                        [
                                                                                            (0,
                                                                                            $.bF)(
                                                                                                d,
                                                                                                {
                                                                                                    modelValue:
                                                                                                        e.ocspOpenDnsType,
                                                                                                    'onUpdate:modelValue':
                                                                                                        t[7] ||
                                                                                                        (t[7] =
                                                                                                            (
                                                                                                                t,
                                                                                                            ) =>
                                                                                                                (e.ocspOpenDnsType =
                                                                                                                    t)),
                                                                                                    value: a,
                                                                                                    class: 'p-default p-round p-fill p-icon',
                                                                                                },
                                                                                                {
                                                                                                    default:
                                                                                                        (0,
                                                                                                        $.k6)(
                                                                                                            () => [
                                                                                                                (0,
                                                                                                                $.eW)(
                                                                                                                    (0,
                                                                                                                    L.v_)(
                                                                                                                        e.$t(
                                                                                                                            o,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    1,
                                                                                                                ),
                                                                                                            ],
                                                                                                        ),
                                                                                                    _: 2,
                                                                                                },
                                                                                                1032,
                                                                                                [
                                                                                                    'modelValue',
                                                                                                    'value',
                                                                                                ],
                                                                                            ),
                                                                                        ],
                                                                                    ),
                                                                                ],
                                                                                2,
                                                                            )
                                                                        ),
                                                                    ),
                                                                    256,
                                                                )),
                                                            ]))
                                                          : (0, $.Q3)('', !0),
                                                      (0, $.Lk)(
                                                          'div',
                                                          {
                                                              class: (0, L.C4)(
                                                                  'control' +
                                                                      (e.ocspQuad9Changed
                                                                          ? ' is-changed'
                                                                          : ''),
                                                              ),
                                                          },
                                                          [
                                                              (0, $.Lk)('div', Wr, [
                                                                  (0, $.bF)(
                                                                      n,
                                                                      {
                                                                          modelValue: e.ocspQuad9,
                                                                          'onUpdate:modelValue':
                                                                              t[8] ||
                                                                              (t[8] = (t) =>
                                                                                  (e.ocspQuad9 =
                                                                                      t)),
                                                                          class: 'p-default p-curve p-fill p-icon',
                                                                      },
                                                                      {
                                                                          default: (0, $.k6)(() => [
                                                                              (0, $.eW)(
                                                                                  (0, L.v_)(
                                                                                      e.$t(
                                                                                          'templates.globalSections.https.quad9',
                                                                                      ),
                                                                                  ),
                                                                                  1,
                                                                              ),
                                                                          ]),
                                                                          _: 1,
                                                                      },
                                                                      8,
                                                                      ['modelValue'],
                                                                  ),
                                                              ]),
                                                          ],
                                                          2,
                                                      ),
                                                      e.$props.data.ocspQuad9.computed
                                                          ? ((0, $.uX)(),
                                                            (0, $.CE)('div', Xr, [
                                                                ((0, $.uX)(!0),
                                                                (0, $.CE)(
                                                                    $.FK,
                                                                    null,
                                                                    (0, $.pI)(
                                                                        e.$props.data.ocspQuad9Type
                                                                            .options,
                                                                        (o, a) => (
                                                                            (0, $.uX)(),
                                                                            (0, $.CE)(
                                                                                'div',
                                                                                {
                                                                                    class: (0,
                                                                                    L.C4)(
                                                                                        'control' +
                                                                                            (e.ocspQuad9TypeChanged &&
                                                                                            a ===
                                                                                                e.ocspQuad9Type
                                                                                                ? ' is-changed'
                                                                                                : ''),
                                                                                    ),
                                                                                },
                                                                                [
                                                                                    (0, $.Lk)(
                                                                                        'div',
                                                                                        Ir,
                                                                                        [
                                                                                            (0,
                                                                                            $.bF)(
                                                                                                d,
                                                                                                {
                                                                                                    modelValue:
                                                                                                        e.ocspQuad9Type,
                                                                                                    'onUpdate:modelValue':
                                                                                                        t[9] ||
                                                                                                        (t[9] =
                                                                                                            (
                                                                                                                t,
                                                                                                            ) =>
                                                                                                                (e.ocspQuad9Type =
                                                                                                                    t)),
                                                                                                    value: a,
                                                                                                    class: 'p-default p-round p-fill p-icon',
                                                                                                },
                                                                                                {
                                                                                                    default:
                                                                                                        (0,
                                                                                                        $.k6)(
                                                                                                            () => [
                                                                                                                (0,
                                                                                                                $.eW)(
                                                                                                                    (0,
                                                                                                                    L.v_)(
                                                                                                                        e.$t(
                                                                                                                            o,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    1,
                                                                                                                ),
                                                                                                            ],
                                                                                                        ),
                                                                                                    _: 2,
                                                                                                },
                                                                                                1032,
                                                                                                [
                                                                                                    'modelValue',
                                                                                                    'value',
                                                                                                ],
                                                                                            ),
                                                                                        ],
                                                                                    ),
                                                                                ],
                                                                                2,
                                                                            )
                                                                        ),
                                                                    ),
                                                                    256,
                                                                )),
                                                            ]))
                                                          : (0, $.Q3)('', !0),
                                                      (0, $.Lk)(
                                                          'div',
                                                          {
                                                              class: (0, L.C4)(
                                                                  'control' +
                                                                      (e.ocspVerisignChanged
                                                                          ? ' is-changed'
                                                                          : ''),
                                                              ),
                                                          },
                                                          [
                                                              (0, $.Lk)('div', Mr, [
                                                                  (0, $.bF)(
                                                                      n,
                                                                      {
                                                                          modelValue:
                                                                              e.ocspVerisign,
                                                                          'onUpdate:modelValue':
                                                                              t[10] ||
                                                                              (t[10] = (t) =>
                                                                                  (e.ocspVerisign =
                                                                                      t)),
                                                                          class: 'p-default p-curve p-fill p-icon',
                                                                      },
                                                                      {
                                                                          default: (0, $.k6)(() => [
                                                                              (0, $.eW)(
                                                                                  (0, L.v_)(
                                                                                      e.$t(
                                                                                          'templates.globalSections.https.verisign',
                                                                                      ),
                                                                                  ),
                                                                                  1,
                                                                              ),
                                                                          ]),
                                                                          _: 1,
                                                                      },
                                                                      8,
                                                                      ['modelValue'],
                                                                  ),
                                                              ]),
                                                          ],
                                                          2,
                                                      ),
                                                      e.$props.data.ocspVerisign.computed
                                                          ? ((0, $.uX)(),
                                                            (0, $.CE)('div', Ur, [
                                                                ((0, $.uX)(!0),
                                                                (0, $.CE)(
                                                                    $.FK,
                                                                    null,
                                                                    (0, $.pI)(
                                                                        e.$props.data
                                                                            .ocspVerisignType
                                                                            .options,
                                                                        (o, a) => (
                                                                            (0, $.uX)(),
                                                                            (0, $.CE)(
                                                                                'div',
                                                                                {
                                                                                    class: (0,
                                                                                    L.C4)(
                                                                                        'control' +
                                                                                            (e.ocspVerisignTypeChanged &&
                                                                                            a ===
                                                                                                e.ocspVerisignType
                                                                                                ? ' is-changed'
                                                                                                : ''),
                                                                                    ),
                                                                                },
                                                                                [
                                                                                    (0, $.Lk)(
                                                                                        'div',
                                                                                        Br,
                                                                                        [
                                                                                            (0,
                                                                                            $.bF)(
                                                                                                d,
                                                                                                {
                                                                                                    modelValue:
                                                                                                        e.ocspVerisignType,
                                                                                                    'onUpdate:modelValue':
                                                                                                        t[11] ||
                                                                                                        (t[11] =
                                                                                                            (
                                                                                                                t,
                                                                                                            ) =>
                                                                                                                (e.ocspVerisignType =
                                                                                                                    t)),
                                                                                                    value: a,
                                                                                                    class: 'p-default p-round p-fill p-icon',
                                                                                                },
                                                                                                {
                                                                                                    default:
                                                                                                        (0,
                                                                                                        $.k6)(
                                                                                                            () => [
                                                                                                                (0,
                                                                                                                $.eW)(
                                                                                                                    (0,
                                                                                                                    L.v_)(
                                                                                                                        e.$t(
                                                                                                                            o,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    1,
                                                                                                                ),
                                                                                                            ],
                                                                                                        ),
                                                                                                    _: 2,
                                                                                                },
                                                                                                1032,
                                                                                                [
                                                                                                    'modelValue',
                                                                                                    'value',
                                                                                                ],
                                                                                            ),
                                                                                        ],
                                                                                    ),
                                                                                ],
                                                                                2,
                                                                            )
                                                                        ),
                                                                    ),
                                                                    256,
                                                                )),
                                                            ]))
                                                          : (0, $.Q3)('', !0),
                                                  ]),
                                              ]),
                                          ]),
                                          e.letsEncryptRootEnabled
                                              ? ((0, $.uX)(),
                                                (0, $.CE)('div', Nr, [
                                                    (0, $.Lk)('div', Qr, [
                                                        (0, $.Lk)(
                                                            'label',
                                                            Gr,
                                                            (0, L.v_)(
                                                                e.$t(
                                                                    'templates.globalSections.https.letsEncryptWebroot',
                                                                ),
                                                            ),
                                                            1,
                                                        ),
                                                    ]),
                                                    (0, $.Lk)('div', Jr, [
                                                        (0, $.Lk)('div', Kr, [
                                                            (0, $.Lk)(
                                                                'div',
                                                                {
                                                                    class: (0, L.C4)(
                                                                        'control' +
                                                                            (e.letsEncryptRootChanged
                                                                                ? ' is-changed'
                                                                                : ''),
                                                                    ),
                                                                },
                                                                [
                                                                    (0, $.bo)(
                                                                        (0, $.Lk)(
                                                                            'input',
                                                                            {
                                                                                'onUpdate:modelValue':
                                                                                    t[12] ||
                                                                                    (t[12] = (t) =>
                                                                                        (e.letsEncryptRoot =
                                                                                            t)),
                                                                                class: 'input',
                                                                                type: 'text',
                                                                                placeholder:
                                                                                    e.$props.data
                                                                                        .letsEncryptRoot
                                                                                        .default,
                                                                            },
                                                                            null,
                                                                            8,
                                                                            qr,
                                                                        ),
                                                                        [[a.Jo, e.letsEncryptRoot]],
                                                                    ),
                                                                ],
                                                                2,
                                                            ),
                                                        ]),
                                                    ]),
                                                ]))
                                              : (0, $.Q3)('', !0),
                                          e.letsEncryptCertRootEnabled
                                              ? ((0, $.uX)(),
                                                (0, $.CE)('div', Yr, [
                                                    (0, $.Lk)('div', Zr, [
                                                        (0, $.Lk)(
                                                            'label',
                                                            ep,
                                                            (0, L.v_)(
                                                                e.$t(
                                                                    'templates.globalSections.https.letsEncryptCertRoot',
                                                                ),
                                                            ),
                                                            1,
                                                        ),
                                                    ]),
                                                    (0, $.Lk)('div', tp, [
                                                        (0, $.Lk)('div', op, [
                                                            (0, $.Lk)(
                                                                'div',
                                                                {
                                                                    class: (0, L.C4)(
                                                                        'control' +
                                                                            (e.letsEncryptCertRootChanged
                                                                                ? ' is-changed'
                                                                                : ''),
                                                                    ),
                                                                },
                                                                [
                                                                    (0, $.bo)(
                                                                        (0, $.Lk)(
                                                                            'input',
                                                                            {
                                                                                'onUpdate:modelValue':
                                                                                    t[13] ||
                                                                                    (t[13] = (t) =>
                                                                                        (e.letsEncryptCertRoot =
                                                                                            t)),
                                                                                class: 'input',
                                                                                type: 'text',
                                                                                placeholder:
                                                                                    e.$props.data
                                                                                        .letsEncryptCertRoot
                                                                                        .default,
                                                                            },
                                                                            null,
                                                                            8,
                                                                            ap,
                                                                        ),
                                                                        [
                                                                            [
                                                                                a.Jo,
                                                                                e.letsEncryptCertRoot,
                                                                            ],
                                                                        ],
                                                                    ),
                                                                ],
                                                                2,
                                                            ),
                                                        ]),
                                                    ]),
                                                ]))
                                              : (0, $.Q3)('', !0),
                                      ],
                                      64,
                                  ))
                                : ((0, $.uX)(),
                                  (0, $.CE)('div', ur, [
                                      (0, $.Lk)('div', hr, [
                                          (0, $.Lk)(
                                              'label',
                                              mr,
                                              (0, L.v_)(
                                                  e.$t('templates.globalSections.https.sslProfile'),
                                              ),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', gr, [
                                          (0, $.Lk)('div', fr, [
                                              (0, $.Lk)('div', vr, [
                                                  (0, $.Lk)(
                                                      'label',
                                                      br,
                                                      (0, L.v_)(
                                                          e.$t(
                                                              'templates.globalSections.https.httpsMustBeEnabledOnOneSite',
                                                          ),
                                                      ),
                                                      1,
                                                  ),
                                              ]),
                                          ]),
                                      ]),
                                  ])),
                        ])
                    );
                }
                const lp = {
                        default: 'ipv4',
                        options: {
                            ipv4: 'templates.globalSections.https.ipv4Only',
                            ipv6: 'templates.globalSections.https.ipv6Only',
                            both: 'templates.globalSections.https.ipv4AndIpv6',
                        },
                        enabled: !0,
                    },
                    ip = (e) => {
                        e.enabled &&
                            (Object.keys(e.options).includes(e.computed) ||
                                (e.computed = e.default));
                    },
                    np = {
                        portReuse: { default: !1, enabled: !0 },
                        sslProfile: {
                            default: 'intermediate',
                            options: {
                                modern: 'templates.globalSections.https.mozillaModern',
                                intermediate: 'templates.globalSections.https.mozillaIntermediate',
                                old: 'templates.globalSections.https.mozillaOld',
                            },
                            enabled: !0,
                        },
                        ocspCloudflare: { default: !0, enabled: !0 },
                        ocspCloudflareType: j()(lp),
                        ocspGoogle: { default: !0, enabled: !0 },
                        ocspGoogleType: j()(lp),
                        ocspOpenDns: { default: !0, enabled: !0 },
                        ocspOpenDnsType: j()(lp),
                        ocspQuad9: { default: !1, enabled: !0 },
                        ocspQuad9Type: j()(lp),
                        ocspVerisign: { default: !1, enabled: !0 },
                        ocspVerisignType: j()(lp),
                        letsEncryptRoot: { default: '/var/www/_letsencrypt/', enabled: !0 },
                        letsEncryptCertRoot: { default: '/etc/letsencrypt/live/', enabled: !0 },
                    },
                    dp = {
                        name: 'GlobalHTTPS',
                        display: 'common.https',
                        key: 'https',
                        delegated: ce(np),
                        components: { PrettyCheck: gt, PrettyRadio: Vo },
                        props: { data: Object },
                        computed: ue(np, 'https'),
                        watch: {
                            '$props.data.sslProfile': { handler: ip, deep: !0 },
                            '$props.data.ocspCloudflareType': { handler: ip, deep: !0 },
                            '$props.data.ocspGoogleType': { handler: ip, deep: !0 },
                            '$props.data.ocspOpenDnsType': { handler: ip, deep: !0 },
                            '$props.data.ocspQuad9Type': { handler: ip, deep: !0 },
                            '$props.data.ocspVerisignType': { handler: ip, deep: !0 },
                            '$parent.$parent.$data.domains': {
                                handler(e) {
                                    let t = !1,
                                        o = !1;
                                    for (const a of e)
                                        a &&
                                            a.https &&
                                            a.https.https &&
                                            a.https.https.computed &&
                                            ((this.$props.data.sslProfile.enabled = !0),
                                            (this.$props.data.sslProfile.computed =
                                                this.$props.data.sslProfile.value),
                                            (this.$props.data.ocspCloudflare.enabled = !0),
                                            (this.$props.data.ocspCloudflare.computed =
                                                this.$props.data.ocspCloudflare.value),
                                            (this.$props.data.ocspGoogle.enabled = !0),
                                            (this.$props.data.ocspGoogle.computed =
                                                this.$props.data.ocspGoogle.value),
                                            (this.$props.data.ocspOpenDns.enabled = !0),
                                            (this.$props.data.ocspOpenDns.computed =
                                                this.$props.data.ocspOpenDns.value),
                                            (this.$props.data.letsEncryptRoot.enabled = !0),
                                            (this.$props.data.letsEncryptRoot.computed =
                                                this.$props.data.letsEncryptRoot.value),
                                            (t = !0)),
                                            a &&
                                                a.https &&
                                                a.https.certType &&
                                                'letsEncrypt' === a.https.certType.computed &&
                                                ((this.$props.data.letsEncryptRoot.enabled = !0),
                                                (this.$props.data.letsEncryptRoot.computed =
                                                    this.$props.data.letsEncryptRoot.value),
                                                (o = !0));
                                    t ||
                                        ((this.$props.data.sslProfile.enabled = !1),
                                        (this.$props.data.sslProfile.computed = ''),
                                        (this.$props.data.ocspCloudflare.enabled = !1),
                                        (this.$props.data.ocspCloudflare.computed = !1),
                                        (this.$props.data.ocspGoogle.enabled = !1),
                                        (this.$props.data.ocspGoogle.computed = !1),
                                        (this.$props.data.ocspOpenDns.enabled = !1),
                                        (this.$props.data.ocspOpenDns.computed = !1),
                                        (this.$props.data.letsEncryptRoot.enabled = !1),
                                        (this.$props.data.letsEncryptRoot.computed = '')),
                                        o ||
                                            ((this.$props.data.letsEncryptRoot.enabled = !1),
                                            (this.$props.data.letsEncryptRoot.computed = ''));
                                },
                                deep: !0,
                            },
                        },
                    },
                    rp = (0, ge.A)(dp, [['render', sp]]),
                    pp = rp,
                    cp = { class: 'field is-horizontal' },
                    up = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'Referrer-Policy')],
                        -1,
                    ),
                    hp = { class: 'field-body' },
                    mp = { class: 'field' },
                    gp = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'Content-Security-Policy')],
                        -1,
                    ),
                    fp = { class: 'field-body' },
                    vp = { class: 'field' },
                    bp = ['placeholder'],
                    kp = { key: 0, class: 'control' },
                    yp = { class: 'text message is-warning' },
                    $p = ['innerHTML'],
                    Lp = { class: 'field is-horizontal' },
                    Cp = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'Permissions-Policy')],
                        -1,
                    ),
                    xp = { class: 'field-body' },
                    Sp = { class: 'field' },
                    _p = ['placeholder'],
                    Ep = { class: 'field is-horizontal' },
                    wp = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'server_tokens')],
                        -1,
                    ),
                    Pp = { class: 'field-body' },
                    Tp = { class: 'field' },
                    Vp = { class: 'checkbox' },
                    Rp = { class: 'field is-horizontal' },
                    Fp = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'limit_req')],
                        -1,
                    ),
                    Dp = { class: 'field-body' },
                    Ap = { class: 'field' },
                    Op = { class: 'checkbox' },
                    zp = { class: 'field is-horizontal' },
                    jp = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'security.txt')],
                        -1,
                    ),
                    Hp = { class: 'field-body' },
                    Wp = { class: 'field' },
                    Xp = { class: 'checkbox' },
                    Ip = { key: 0, class: 'field is-horizontal' },
                    Mp = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'security.txt path')],
                        -1,
                    ),
                    Up = { class: 'field-body' },
                    Bp = { class: 'field' },
                    Np = ['placeholder'];
                function Qp(e, t, o, s, l, i) {
                    const n = (0, $.g2)('VueSelect'),
                        d = (0, $.g2)('PrettyCheck');
                    return (
                        (0, $.uX)(),
                        (0, $.CE)('div', null, [
                            (0, $.Lk)('div', cp, [
                                up,
                                (0, $.Lk)('div', hp, [
                                    (0, $.Lk)('div', mp, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.referrerPolicyChanged
                                                            ? ' is-changed'
                                                            : ''),
                                                ),
                                            },
                                            [
                                                (0, $.bF)(
                                                    n,
                                                    {
                                                        modelValue: e.referrerPolicy,
                                                        'onUpdate:modelValue':
                                                            t[0] ||
                                                            (t[0] = (t) => (e.referrerPolicy = t)),
                                                        options:
                                                            e.$props.data.referrerPolicy.options,
                                                        clearable: !1,
                                                    },
                                                    null,
                                                    8,
                                                    ['modelValue', 'options'],
                                                ),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                            (0, $.Lk)(
                                'div',
                                {
                                    class: (0, L.C4)(
                                        'field is-horizontal' +
                                            (i.hasWordPress && !e.hasUnsafeEval
                                                ? ' is-aligned-top'
                                                : ''),
                                    ),
                                },
                                [
                                    gp,
                                    (0, $.Lk)('div', fp, [
                                        (0, $.Lk)('div', vp, [
                                            (0, $.Lk)(
                                                'div',
                                                {
                                                    class: (0, L.C4)(
                                                        'control' +
                                                            (e.contentSecurityPolicyChanged
                                                                ? ' is-changed'
                                                                : ''),
                                                    ),
                                                },
                                                [
                                                    (0, $.bo)(
                                                        (0, $.Lk)(
                                                            'input',
                                                            {
                                                                'onUpdate:modelValue':
                                                                    t[1] ||
                                                                    (t[1] = (t) =>
                                                                        (e.contentSecurityPolicy =
                                                                            t)),
                                                                class: 'input',
                                                                type: 'text',
                                                                placeholder:
                                                                    e.$props.data
                                                                        .contentSecurityPolicy
                                                                        .default,
                                                            },
                                                            null,
                                                            8,
                                                            bp,
                                                        ),
                                                        [[a.Jo, e.contentSecurityPolicy]],
                                                    ),
                                                ],
                                                2,
                                            ),
                                            i.hasWordPress && !i.hasWordPressUnsafeEval
                                                ? ((0, $.uX)(),
                                                  (0, $.CE)('div', kp, [
                                                      (0, $.Lk)('label', yp, [
                                                          (0, $.Lk)(
                                                              'span',
                                                              {
                                                                  class: 'message-body',
                                                                  innerHTML: e.$t(
                                                                      'templates.globalSections.security.whenUsingWordPressUnsafeEvalIsOftenRequiredToAllowFunctionality',
                                                                  ),
                                                              },
                                                              null,
                                                              8,
                                                              $p,
                                                          ),
                                                      ]),
                                                  ]))
                                                : (0, $.Q3)('', !0),
                                        ]),
                                    ]),
                                ],
                                2,
                            ),
                            (0, $.Lk)('div', Lp, [
                                Cp,
                                (0, $.Lk)('div', xp, [
                                    (0, $.Lk)('div', Sp, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.permissionsPolicyChanged
                                                            ? ' is-changed'
                                                            : ''),
                                                ),
                                            },
                                            [
                                                (0, $.bo)(
                                                    (0, $.Lk)(
                                                        'input',
                                                        {
                                                            'onUpdate:modelValue':
                                                                t[2] ||
                                                                (t[2] = (t) =>
                                                                    (e.permissionsPolicy = t)),
                                                            class: 'input',
                                                            type: 'text',
                                                            placeholder:
                                                                e.$props.data.permissionsPolicy
                                                                    .default,
                                                        },
                                                        null,
                                                        8,
                                                        _p,
                                                    ),
                                                    [[a.Jo, e.permissionsPolicy]],
                                                ),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                            (0, $.Lk)('div', Ep, [
                                wp,
                                (0, $.Lk)('div', Pp, [
                                    (0, $.Lk)('div', Tp, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.serverTokensChanged
                                                            ? ' is-changed'
                                                            : ''),
                                                ),
                                            },
                                            [
                                                (0, $.Lk)('div', Vp, [
                                                    (0, $.bF)(
                                                        d,
                                                        {
                                                            modelValue: e.serverTokens,
                                                            'onUpdate:modelValue':
                                                                t[3] ||
                                                                (t[3] = (t) =>
                                                                    (e.serverTokens = t)),
                                                            class: 'p-default p-curve p-fill p-icon',
                                                        },
                                                        {
                                                            default: (0, $.k6)(() => [
                                                                (0, $.eW)(
                                                                    (0, L.v_)(
                                                                        e.$t('common.enable'),
                                                                    ),
                                                                    1,
                                                                ),
                                                            ]),
                                                            _: 1,
                                                        },
                                                        8,
                                                        ['modelValue'],
                                                    ),
                                                ]),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                            (0, $.Lk)('div', Rp, [
                                Fp,
                                (0, $.Lk)('div', Dp, [
                                    (0, $.Lk)('div', Ap, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.limitReqChanged ? ' is-changed' : ''),
                                                ),
                                            },
                                            [
                                                (0, $.Lk)('div', Op, [
                                                    (0, $.bF)(
                                                        d,
                                                        {
                                                            modelValue: e.limitReq,
                                                            'onUpdate:modelValue':
                                                                t[4] ||
                                                                (t[4] = (t) => (e.limitReq = t)),
                                                            class: 'p-default p-curve p-fill p-icon',
                                                        },
                                                        {
                                                            default: (0, $.k6)(() => [
                                                                (0, $.eW)(
                                                                    (0, L.v_)(
                                                                        e.$t('common.enable'),
                                                                    ),
                                                                    1,
                                                                ),
                                                            ]),
                                                            _: 1,
                                                        },
                                                        8,
                                                        ['modelValue'],
                                                    ),
                                                ]),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                            (0, $.Lk)('div', zp, [
                                jp,
                                (0, $.Lk)('div', Hp, [
                                    (0, $.Lk)('div', Wp, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.securityTxt ? ' is-changed' : ''),
                                                ),
                                            },
                                            [
                                                (0, $.Lk)('div', Xp, [
                                                    (0, $.bF)(
                                                        d,
                                                        {
                                                            modelValue: e.securityTxt,
                                                            'onUpdate:modelValue':
                                                                t[5] ||
                                                                (t[5] = (t) => (e.securityTxt = t)),
                                                            class: 'p-default p-curve p-fill p-icon',
                                                        },
                                                        {
                                                            default: (0, $.k6)(() => [
                                                                (0, $.eW)(
                                                                    (0, L.v_)(
                                                                        e.$t('common.enable'),
                                                                    ),
                                                                    1,
                                                                ),
                                                            ]),
                                                            _: 1,
                                                        },
                                                        8,
                                                        ['modelValue'],
                                                    ),
                                                ]),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                            e.$props.data.securityTxt.computed
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', Ip, [
                                      Mp,
                                      (0, $.Lk)('div', Up, [
                                          (0, $.Lk)('div', Bp, [
                                              (0, $.Lk)(
                                                  'div',
                                                  {
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.securityTxtChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.bo)(
                                                          (0, $.Lk)(
                                                              'input',
                                                              {
                                                                  'onUpdate:modelValue':
                                                                      t[6] ||
                                                                      (t[6] = (t) =>
                                                                          (e.securityTxtPath = t)),
                                                                  class: 'input',
                                                                  type: 'text',
                                                                  placeholder:
                                                                      e.$props.data.securityTxtPath
                                                                          .default,
                                                              },
                                                              null,
                                                              8,
                                                              Np,
                                                          ),
                                                          [[a.Jo, e.securityTxtPath]],
                                                      ),
                                                  ],
                                                  2,
                                              ),
                                          ]),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                        ])
                    );
                }
                const Gp = {
                        referrerPolicy: {
                            default: 'no-referrer-when-downgrade',
                            options: [
                                'no-referrer',
                                'no-referrer-when-downgrade',
                                'origin',
                                'origin-when-cross-origin',
                                'same-origin',
                                'strict-origin',
                                'strict-origin-when-cross-origin',
                                'unsafe-url',
                            ],
                            enabled: !0,
                        },
                        contentSecurityPolicy: {
                            default:
                                "default-src 'self' http: https: ws: wss: data: blob: 'unsafe-inline'; frame-ancestors 'self';",
                            enabled: !0,
                        },
                        permissionsPolicy: { default: 'interest-cohort=()', enabled: !0 },
                        serverTokens: { default: !1, enabled: !0 },
                        limitReq: { default: !1, enabled: !0 },
                        securityTxt: { default: !1, enabled: !0 },
                        securityTxtPath: { default: '~/security.txt', enabled: !0 },
                    },
                    Jp = {
                        name: 'GlobalSecurity',
                        display: 'templates.globalSections.security.security',
                        key: 'security',
                        delegated: ce(Gp),
                        components: { PrettyCheck: gt, VueSelect: M.A },
                        props: { data: Object },
                        computed: {
                            ...ue(Gp, 'security'),
                            hasWordPress() {
                                return this.$parent.$parent.$data.domains.some(
                                    (e) => e && e.php.wordPressRules.computed,
                                );
                            },
                            hasWordPressUnsafeEval() {
                                return (
                                    null !==
                                    this.$props.data.contentSecurityPolicy.computed.match(
                                        /(default|script)-src[^;]+'self'[^;]+'unsafe-inline'[^;]+'unsafe-eval'[^;]*;/,
                                    )
                                );
                            },
                            hasWarnings() {
                                return this.hasWordPress && !this.hasWordPressUnsafeEval;
                            },
                        },
                        watch: {
                            '$props.data.referrerPolicy': {
                                handler(e) {
                                    e.enabled &&
                                        (e.options.includes(e.computed) ||
                                            (e.computed = e.default));
                                },
                                deep: !0,
                            },
                        },
                    },
                    Kp = (0, ge.A)(Jp, [['render', Qp]]),
                    qp = Kp,
                    Yp = { key: 0, class: 'field is-horizontal is-aligned-top' },
                    Zp = { class: 'field-label' },
                    ec = { class: 'label' },
                    tc = { class: 'field-body' },
                    oc = { class: 'field' },
                    ac = { class: 'control' },
                    sc = { class: 'text' },
                    lc = { key: 1, class: 'field is-horizontal' },
                    ic = { class: 'field-label' },
                    nc = { class: 'label' },
                    dc = { class: 'field-body' },
                    rc = { class: 'field' },
                    pc = ['placeholder'];
                function cc(e, t, o, s, l, i) {
                    return (
                        (0, $.uX)(),
                        (0, $.CE)('div', null, [
                            e.pythonServerEnabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', lc, [
                                      (0, $.Lk)('div', ic, [
                                          (0, $.Lk)(
                                              'label',
                                              nc,
                                              (0, L.v_)(
                                                  e.$t(
                                                      'templates.globalSections.python.pythonServer',
                                                  ),
                                              ),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', dc, [
                                          (0, $.Lk)('div', rc, [
                                              (0, $.Lk)(
                                                  'div',
                                                  {
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.pythonServerChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.bo)(
                                                          (0, $.Lk)(
                                                              'input',
                                                              {
                                                                  'onUpdate:modelValue':
                                                                      t[0] ||
                                                                      (t[0] = (t) =>
                                                                          (e.pythonServer = t)),
                                                                  class: 'input',
                                                                  type: 'text',
                                                                  placeholder:
                                                                      e.$props.data.pythonServer
                                                                          .default,
                                                              },
                                                              null,
                                                              8,
                                                              pc,
                                                          ),
                                                          [[a.Jo, e.pythonServer]],
                                                      ),
                                                  ],
                                                  2,
                                              ),
                                          ]),
                                      ]),
                                  ]))
                                : ((0, $.uX)(),
                                  (0, $.CE)('div', Yp, [
                                      (0, $.Lk)('div', Zp, [
                                          (0, $.Lk)(
                                              'label',
                                              ec,
                                              (0, L.v_)(
                                                  e.$t(
                                                      'templates.globalSections.python.pythonServer',
                                                  ),
                                              ),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', tc, [
                                          (0, $.Lk)('div', oc, [
                                              (0, $.Lk)('div', ac, [
                                                  (0, $.Lk)(
                                                      'label',
                                                      sc,
                                                      (0, L.v_)(
                                                          e.$t(
                                                              'templates.globalSections.python.pythonMustBeEnabledOnOneSite',
                                                          ),
                                                      ),
                                                      1,
                                                  ),
                                              ]),
                                          ]),
                                      ]),
                                  ])),
                        ])
                    );
                }
                const uc = { pythonServer: { default: '/tmp/uwsgi.sock', enabled: !1 } },
                    hc = {
                        name: 'GlobalPython',
                        display: 'common.python',
                        key: 'python',
                        delegated: ce(uc),
                        props: { data: Object },
                        computed: ue(uc, 'python'),
                        watch: {
                            '$parent.$parent.$data.domains': {
                                handler(e) {
                                    for (const t of e)
                                        if (
                                            t &&
                                            t.python &&
                                            t.python.python &&
                                            t.python.python.computed
                                        )
                                            return (
                                                (this.$props.data.pythonServer.enabled = !0),
                                                void (this.$props.data.pythonServer.computed =
                                                    this.$props.data.pythonServer.value)
                                            );
                                    (this.$props.data.pythonServer.enabled = !1),
                                        (this.$props.data.pythonServer.computed = '');
                                },
                                deep: !0,
                            },
                        },
                    },
                    mc = (0, ge.A)(hc, [['render', cc]]),
                    gc = mc,
                    fc = { key: 0, class: 'field is-horizontal is-aligned-top' },
                    vc = { class: 'field-label' },
                    bc = { class: 'label' },
                    kc = { class: 'field-body' },
                    yc = { class: 'field' },
                    $c = { class: 'control' },
                    Lc = { class: 'text' },
                    Cc = { class: 'field is-horizontal' },
                    xc = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'proxy_connect_timeout')],
                        -1,
                    ),
                    Sc = { class: 'field-body' },
                    _c = { class: 'field has-addons' },
                    Ec = ['placeholder'],
                    wc = { class: 'control' },
                    Pc = { class: 'button is-static' },
                    Tc = { class: 'field is-horizontal' },
                    Vc = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'proxy_send_timeout')],
                        -1,
                    ),
                    Rc = { class: 'field-body' },
                    Fc = { class: 'field has-addons' },
                    Dc = ['placeholder'],
                    Ac = { class: 'control' },
                    Oc = { class: 'button is-static' },
                    zc = { class: 'field is-horizontal' },
                    jc = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'proxy_read_timeout')],
                        -1,
                    ),
                    Hc = { class: 'field-body' },
                    Wc = { class: 'field has-addons' },
                    Xc = ['placeholder'],
                    Ic = { class: 'control' },
                    Mc = { class: 'button is-static' },
                    Uc = { class: 'field is-horizontal' },
                    Bc = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'Coexistence with X-Forwarded-*')],
                        -1,
                    ),
                    Nc = { class: 'field-body' },
                    Qc = { class: 'field' },
                    Gc = { class: 'field' },
                    Jc = { class: 'radio' };
                function Kc(e, t, o, s, l, i) {
                    const n = (0, $.g2)('PrettyRadio');
                    return (
                        (0, $.uX)(),
                        (0, $.CE)('div', null, [
                            l.reverseProxyEnabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)(
                                      $.FK,
                                      { key: 1 },
                                      [
                                          (0, $.Lk)('div', Cc, [
                                              xc,
                                              (0, $.Lk)('div', Sc, [
                                                  (0, $.Lk)('div', _c, [
                                                      (0, $.Lk)(
                                                          'div',
                                                          {
                                                              class: (0, L.C4)(
                                                                  'control is-expanded' +
                                                                      (e.proxyConnectTimeoutChanged
                                                                          ? ' is-changed'
                                                                          : ''),
                                                              ),
                                                          },
                                                          [
                                                              (0, $.bo)(
                                                                  (0, $.Lk)(
                                                                      'input',
                                                                      {
                                                                          'onUpdate:modelValue':
                                                                              t[0] ||
                                                                              (t[0] = (t) =>
                                                                                  (e.proxyConnectTimeout =
                                                                                      t)),
                                                                          class: 'input',
                                                                          type: 'number',
                                                                          min: '0',
                                                                          step: '1',
                                                                          placeholder:
                                                                              e.$props.data
                                                                                  .proxyConnectTimeout
                                                                                  .default,
                                                                      },
                                                                      null,
                                                                      8,
                                                                      Ec,
                                                                  ),
                                                                  [
                                                                      [
                                                                          a.Jo,
                                                                          e.proxyConnectTimeout,
                                                                          void 0,
                                                                          { number: !0 },
                                                                      ],
                                                                  ],
                                                              ),
                                                          ],
                                                          2,
                                                      ),
                                                      (0, $.Lk)('div', wc, [
                                                          (0, $.Lk)(
                                                              'a',
                                                              Pc,
                                                              (0, L.v_)(
                                                                  e.$t(
                                                                      'templates.globalSections.reverseProxy.seconds',
                                                                  ),
                                                              ),
                                                              1,
                                                          ),
                                                      ]),
                                                  ]),
                                              ]),
                                          ]),
                                          (0, $.Lk)('div', Tc, [
                                              Vc,
                                              (0, $.Lk)('div', Rc, [
                                                  (0, $.Lk)('div', Fc, [
                                                      (0, $.Lk)(
                                                          'div',
                                                          {
                                                              class: (0, L.C4)(
                                                                  'control is-expanded' +
                                                                      (e.proxySendTimeoutChanged
                                                                          ? ' is-changed'
                                                                          : ''),
                                                              ),
                                                          },
                                                          [
                                                              (0, $.bo)(
                                                                  (0, $.Lk)(
                                                                      'input',
                                                                      {
                                                                          'onUpdate:modelValue':
                                                                              t[1] ||
                                                                              (t[1] = (t) =>
                                                                                  (e.proxySendTimeout =
                                                                                      t)),
                                                                          class: 'input',
                                                                          type: 'number',
                                                                          min: '0',
                                                                          step: '1',
                                                                          placeholder:
                                                                              e.$props.data
                                                                                  .proxySendTimeout
                                                                                  .default,
                                                                      },
                                                                      null,
                                                                      8,
                                                                      Dc,
                                                                  ),
                                                                  [
                                                                      [
                                                                          a.Jo,
                                                                          e.proxySendTimeout,
                                                                          void 0,
                                                                          { number: !0 },
                                                                      ],
                                                                  ],
                                                              ),
                                                          ],
                                                          2,
                                                      ),
                                                      (0, $.Lk)('div', Ac, [
                                                          (0, $.Lk)(
                                                              'a',
                                                              Oc,
                                                              (0, L.v_)(
                                                                  e.$t(
                                                                      'templates.globalSections.reverseProxy.seconds',
                                                                  ),
                                                              ),
                                                              1,
                                                          ),
                                                      ]),
                                                  ]),
                                              ]),
                                          ]),
                                          (0, $.Lk)('div', zc, [
                                              jc,
                                              (0, $.Lk)('div', Hc, [
                                                  (0, $.Lk)('div', Wc, [
                                                      (0, $.Lk)(
                                                          'div',
                                                          {
                                                              class: (0, L.C4)(
                                                                  'control is-expanded' +
                                                                      (e.proxyReadTimeoutChanged
                                                                          ? ' is-changed'
                                                                          : ''),
                                                              ),
                                                          },
                                                          [
                                                              (0, $.bo)(
                                                                  (0, $.Lk)(
                                                                      'input',
                                                                      {
                                                                          'onUpdate:modelValue':
                                                                              t[2] ||
                                                                              (t[2] = (t) =>
                                                                                  (e.proxyReadTimeout =
                                                                                      t)),
                                                                          class: 'input',
                                                                          type: 'number',
                                                                          min: '0',
                                                                          step: '1',
                                                                          placeholder:
                                                                              e.$props.data
                                                                                  .proxyReadTimeout
                                                                                  .default,
                                                                      },
                                                                      null,
                                                                      8,
                                                                      Xc,
                                                                  ),
                                                                  [
                                                                      [
                                                                          a.Jo,
                                                                          e.proxyReadTimeout,
                                                                          void 0,
                                                                          { number: !0 },
                                                                      ],
                                                                  ],
                                                              ),
                                                          ],
                                                          2,
                                                      ),
                                                      (0, $.Lk)('div', Ic, [
                                                          (0, $.Lk)(
                                                              'a',
                                                              Mc,
                                                              (0, L.v_)(
                                                                  e.$t(
                                                                      'templates.globalSections.reverseProxy.seconds',
                                                                  ),
                                                              ),
                                                              1,
                                                          ),
                                                      ]),
                                                  ]),
                                              ]),
                                          ]),
                                          (0, $.Lk)('div', Uc, [
                                              Bc,
                                              (0, $.Lk)('div', Nc, [
                                                  (0, $.Lk)('div', Qc, [
                                                      (0, $.Lk)('div', Gc, [
                                                          ((0, $.uX)(!0),
                                                          (0, $.CE)(
                                                              $.FK,
                                                              null,
                                                              (0, $.pI)(
                                                                  e.$props.data
                                                                      .proxyCoexistenceXForwarded
                                                                      .options,
                                                                  (o, a) => (
                                                                      (0, $.uX)(),
                                                                      (0, $.CE)(
                                                                          'div',
                                                                          {
                                                                              class: (0, L.C4)(
                                                                                  'control' +
                                                                                      (e.proxyCoexistenceXForwardedChanged &&
                                                                                      a ===
                                                                                          e.proxyCoexistenceXForwarded
                                                                                          ? ' is-changed'
                                                                                          : ''),
                                                                              ),
                                                                          },
                                                                          [
                                                                              (0, $.Lk)('div', Jc, [
                                                                                  (0, $.bF)(
                                                                                      n,
                                                                                      {
                                                                                          modelValue:
                                                                                              e.proxyCoexistenceXForwarded,
                                                                                          'onUpdate:modelValue':
                                                                                              t[3] ||
                                                                                              (t[3] =
                                                                                                  (
                                                                                                      t,
                                                                                                  ) =>
                                                                                                      (e.proxyCoexistenceXForwarded =
                                                                                                          t)),
                                                                                          value: a,
                                                                                          class: 'p-default p-round p-fill p-icon',
                                                                                      },
                                                                                      {
                                                                                          default:
                                                                                              (0,
                                                                                              $.k6)(
                                                                                                  () => [
                                                                                                      (0,
                                                                                                      $.eW)(
                                                                                                          (0,
                                                                                                          L.v_)(
                                                                                                              e.$t(
                                                                                                                  o,
                                                                                                              ),
                                                                                                          ),
                                                                                                          1,
                                                                                                      ),
                                                                                                  ],
                                                                                              ),
                                                                                          _: 2,
                                                                                      },
                                                                                      1032,
                                                                                      [
                                                                                          'modelValue',
                                                                                          'value',
                                                                                      ],
                                                                                  ),
                                                                              ]),
                                                                          ],
                                                                          2,
                                                                      )
                                                                  ),
                                                              ),
                                                              256,
                                                          )),
                                                      ]),
                                                  ]),
                                              ]),
                                          ]),
                                      ],
                                      64,
                                  ))
                                : ((0, $.uX)(),
                                  (0, $.CE)('div', fc, [
                                      (0, $.Lk)('div', vc, [
                                          (0, $.Lk)(
                                              'label',
                                              bc,
                                              (0, L.v_)(e.$t('common.reverseProxy')),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', kc, [
                                          (0, $.Lk)('div', yc, [
                                              (0, $.Lk)('div', $c, [
                                                  (0, $.Lk)(
                                                      'label',
                                                      Lc,
                                                      (0, L.v_)(
                                                          e.$t(
                                                              'templates.globalSections.reverseProxy.reverseProxyMustBeEnabledOnOneSite',
                                                          ),
                                                      ),
                                                      1,
                                                  ),
                                              ]),
                                          ]),
                                      ]),
                                  ])),
                        ])
                    );
                }
                const qc = {
                        proxyConnectTimeout: { default: 60, computed: '60s', enabled: !1 },
                        proxySendTimeout: { default: 60, computed: '60s', enabled: !1 },
                        proxyReadTimeout: { default: 60, computed: '60s', enabled: !1 },
                        proxyCoexistenceXForwarded: {
                            default: 'passOn',
                            options: {
                                passOn: 'templates.globalSections.reverseProxy.passOn',
                                remove: 'templates.globalSections.reverseProxy.remove',
                            },
                            enabled: !1,
                        },
                    },
                    Yc = (e) => {
                        let t = parseFloat(e.computed);
                        isNaN(t) && (t = e.default), (e.computed = `${t}s`);
                    },
                    Zc = {
                        name: 'GlobalReverseProxy',
                        display: 'common.reverseProxy',
                        key: 'reverseProxy',
                        delegated: ce(qc),
                        components: { PrettyRadio: Vo },
                        props: { data: Object },
                        data() {
                            return { reverseProxyEnabled: !1 };
                        },
                        computed: ue(qc, 'reverseProxy'),
                        watch: {
                            '$parent.$parent.$data.domains': {
                                handler(e) {
                                    for (const t of e)
                                        if (
                                            t &&
                                            t.reverseProxy &&
                                            t.reverseProxy.reverseProxy &&
                                            t.reverseProxy.reverseProxy.computed
                                        )
                                            return (
                                                (this.$data.reverseProxyEnabled = !0),
                                                (this.$props.data.proxyConnectTimeout.enabled = !0),
                                                (this.$props.data.proxyConnectTimeout.computed =
                                                    this.$props.data.proxyConnectTimeout.value),
                                                (this.$props.data.proxySendTimeout.enabled = !0),
                                                (this.$props.data.proxySendTimeout.computed =
                                                    this.$props.data.proxySendTimeout.value),
                                                (this.$props.data.proxyReadTimeout.enabled = !0),
                                                (this.$props.data.proxyReadTimeout.computed =
                                                    this.$props.data.proxyReadTimeout.value),
                                                (this.$props.data.proxyCoexistenceXForwarded.enabled =
                                                    !0),
                                                void (this.$props.data.proxyCoexistenceXForwarded.computed =
                                                    this.$props.data.proxyCoexistenceXForwarded.value)
                                            );
                                    (this.$data.reverseProxyEnabled = !1),
                                        (this.$props.data.proxyConnectTimeout.enabled = !1),
                                        (this.$props.data.proxyConnectTimeout.computed = ''),
                                        (this.$props.data.proxySendTimeout.enabled = !1),
                                        (this.$props.data.proxySendTimeout.computed = ''),
                                        (this.$props.data.proxyReadTimeout.enabled = !1),
                                        (this.$props.data.proxyReadTimeout.computed = ''),
                                        (this.$props.data.proxyCoexistenceXForwarded.enabled = !1),
                                        (this.$props.data.proxyCoexistenceXForwarded.computed = '');
                                },
                                deep: !0,
                            },
                            '$props.data.proxyConnectTimeout': { handler: Yc, deep: !0 },
                            '$props.data.proxySendTimeout': { handler: Yc, deep: !0 },
                            '$props.data.proxyReadTimeout': { handler: Yc, deep: !0 },
                        },
                    },
                    eu = (0, ge.A)(Zc, [['render', Kc]]),
                    tu = eu,
                    ou = { class: 'field is-horizontal' },
                    au = { class: 'field-label' },
                    su = { class: 'label' },
                    lu = { class: 'field-body' },
                    iu = { class: 'field' },
                    nu = { class: 'checkbox' },
                    du = { class: 'field is-horizontal' },
                    ru = { class: 'field-label' },
                    pu = { class: 'label' },
                    cu = { class: 'field-body' },
                    uu = { class: 'field' },
                    hu = { class: 'checkbox' },
                    mu = { class: 'field is-horizontal is-aligned-top' },
                    gu = { class: 'field-label has-small-margin-top' },
                    fu = { class: 'label' },
                    vu = { class: 'field-body' },
                    bu = { class: 'field' },
                    ku = { class: 'checkbox' },
                    yu = { key: 0, class: 'control' },
                    $u = { class: 'text message is-warning' },
                    Lu = { class: 'message-body' },
                    Cu = { class: 'field is-horizontal' },
                    xu = { class: 'field-label' },
                    Su = { class: 'label' },
                    _u = { class: 'field-body' },
                    Eu = { class: 'field' },
                    wu = ['placeholder'],
                    Pu = { class: 'field is-horizontal' },
                    Tu = { class: 'field-label' },
                    Vu = { class: 'label' },
                    Ru = { class: 'field-body' },
                    Fu = { class: 'field' },
                    Du = ['placeholder'],
                    Au = { class: 'field is-horizontal' },
                    Ou = { class: 'field-label' },
                    zu = { class: 'label' },
                    ju = { class: 'field-body' },
                    Hu = { class: 'field' },
                    Wu = ['placeholder'],
                    Xu = { class: 'field is-horizontal' },
                    Iu = { class: 'field-label' },
                    Mu = { class: 'label' },
                    Uu = { class: 'field-body' },
                    Bu = { class: 'field' },
                    Nu = ['placeholder'];
                function Qu(e, t, o, s, l, i) {
                    const n = (0, $.g2)('PrettyCheck'),
                        d = (0, $.g2)('ExternalLink');
                    return (
                        (0, $.uX)(),
                        (0, $.CE)('div', null, [
                            (0, $.Lk)('div', ou, [
                                (0, $.Lk)('div', au, [
                                    (0, $.Lk)(
                                        'label',
                                        su,
                                        (0, L.v_)(
                                            e.$t(
                                                'templates.globalSections.performance.disableHtmlCaching',
                                            ),
                                        ),
                                        1,
                                    ),
                                ]),
                                (0, $.Lk)('div', lu, [
                                    (0, $.Lk)('div', iu, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.disableHtmlCachingChanged
                                                            ? ' is-changed'
                                                            : ''),
                                                ),
                                            },
                                            [
                                                (0, $.Lk)('div', nu, [
                                                    (0, $.bF)(
                                                        n,
                                                        {
                                                            modelValue: e.disableHtmlCaching,
                                                            'onUpdate:modelValue':
                                                                t[0] ||
                                                                (t[0] = (t) =>
                                                                    (e.disableHtmlCaching = t)),
                                                            class: 'p-default p-curve p-fill p-icon',
                                                        },
                                                        {
                                                            default: (0, $.k6)(() => [
                                                                (0, $.eW)(
                                                                    (0, L.v_)(
                                                                        e.$t(
                                                                            'templates.globalSections.performance.enableDisableHtmlCaching',
                                                                        ),
                                                                    ),
                                                                    1,
                                                                ),
                                                            ]),
                                                            _: 1,
                                                        },
                                                        8,
                                                        ['modelValue'],
                                                    ),
                                                ]),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                            (0, $.Lk)('div', du, [
                                (0, $.Lk)('div', ru, [
                                    (0, $.Lk)(
                                        'label',
                                        pu,
                                        (0, L.v_)(
                                            e.$t(
                                                'templates.globalSections.performance.gzipCompression',
                                            ),
                                        ),
                                        1,
                                    ),
                                ]),
                                (0, $.Lk)('div', cu, [
                                    (0, $.Lk)('div', uu, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.gzipCompressionChanged
                                                            ? ' is-changed'
                                                            : ''),
                                                ),
                                            },
                                            [
                                                (0, $.Lk)('div', hu, [
                                                    (0, $.bF)(
                                                        n,
                                                        {
                                                            modelValue: e.gzipCompression,
                                                            'onUpdate:modelValue':
                                                                t[1] ||
                                                                (t[1] = (t) =>
                                                                    (e.gzipCompression = t)),
                                                            class: 'p-default p-curve p-fill p-icon',
                                                        },
                                                        {
                                                            default: (0, $.k6)(() => [
                                                                (0, $.eW)(
                                                                    (0, L.v_)(
                                                                        e.$t(
                                                                            'templates.globalSections.performance.enableGzipCompression',
                                                                        ),
                                                                    ),
                                                                    1,
                                                                ),
                                                            ]),
                                                            _: 1,
                                                        },
                                                        8,
                                                        ['modelValue'],
                                                    ),
                                                ]),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                            (0, $.Lk)('div', mu, [
                                (0, $.Lk)('div', gu, [
                                    (0, $.Lk)(
                                        'label',
                                        fu,
                                        (0, L.v_)(
                                            e.$t(
                                                'templates.globalSections.performance.brotliCompression',
                                            ),
                                        ),
                                        1,
                                    ),
                                ]),
                                (0, $.Lk)('div', vu, [
                                    (0, $.Lk)('div', bu, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.brotliCompressionChanged
                                                            ? ' is-changed'
                                                            : ''),
                                                ),
                                            },
                                            [
                                                (0, $.Lk)('div', ku, [
                                                    (0, $.bF)(
                                                        n,
                                                        {
                                                            modelValue: e.brotliCompression,
                                                            'onUpdate:modelValue':
                                                                t[2] ||
                                                                (t[2] = (t) =>
                                                                    (e.brotliCompression = t)),
                                                            class: 'p-default p-curve p-fill p-icon',
                                                        },
                                                        {
                                                            default: (0, $.k6)(() => [
                                                                (0, $.eW)(
                                                                    (0, L.v_)(
                                                                        e.$t(
                                                                            'templates.globalSections.performance.enableBrotliCompression',
                                                                        ),
                                                                    ),
                                                                    1,
                                                                ),
                                                            ]),
                                                            _: 1,
                                                        },
                                                        8,
                                                        ['modelValue'],
                                                    ),
                                                ]),
                                            ],
                                            2,
                                        ),
                                        i.showBrotliWarning
                                            ? ((0, $.uX)(),
                                              (0, $.CE)('div', yu, [
                                                  (0, $.Lk)('label', $u, [
                                                      (0, $.Lk)('span', Lu, [
                                                          (0, $.eW)(
                                                              (0, L.v_)(
                                                                  e.$t(
                                                                      'templates.globalSections.performance.brotliIsANonStandardModule',
                                                                  ),
                                                              ) + ' ',
                                                              1,
                                                          ),
                                                          (0, $.bF)(
                                                              d,
                                                              {
                                                                  text: e.$t(
                                                                      'templates.globalSections.performance.brotliGoogleNgxBrotliProject',
                                                                  ),
                                                                  link: 'https://github.com/google/ngx_brotli',
                                                              },
                                                              null,
                                                              8,
                                                              ['text'],
                                                          ),
                                                          (0, $.eW)(
                                                              ' ' +
                                                                  (0, L.v_)(
                                                                      e.$t(
                                                                          'templates.globalSections.performance.brotliForBuildingNginxWithBrotli',
                                                                      ),
                                                                  ),
                                                              1,
                                                          ),
                                                      ]),
                                                  ]),
                                              ]))
                                            : (0, $.Q3)('', !0),
                                    ]),
                                ]),
                            ]),
                            (0, $.Lk)('div', Cu, [
                                (0, $.Lk)('div', xu, [
                                    (0, $.Lk)(
                                        'label',
                                        Su,
                                        (0, L.v_)(
                                            e.$t(
                                                'templates.globalSections.performance.expirationForAssets',
                                            ),
                                        ),
                                        1,
                                    ),
                                ]),
                                (0, $.Lk)('div', _u, [
                                    (0, $.Lk)('div', Eu, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.assetsExpirationChanged
                                                            ? ' is-changed'
                                                            : ''),
                                                ),
                                            },
                                            [
                                                (0, $.bo)(
                                                    (0, $.Lk)(
                                                        'input',
                                                        {
                                                            'onUpdate:modelValue':
                                                                t[3] ||
                                                                (t[3] = (t) =>
                                                                    (e.assetsExpiration = t)),
                                                            class: 'input',
                                                            type: 'text',
                                                            placeholder:
                                                                e.$props.data.assetsExpiration
                                                                    .default,
                                                        },
                                                        null,
                                                        8,
                                                        wu,
                                                    ),
                                                    [[a.Jo, e.assetsExpiration]],
                                                ),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                            (0, $.Lk)('div', Pu, [
                                (0, $.Lk)('div', Tu, [
                                    (0, $.Lk)(
                                        'label',
                                        Vu,
                                        (0, L.v_)(
                                            e.$t(
                                                'templates.globalSections.performance.expirationForMedia',
                                            ),
                                        ),
                                        1,
                                    ),
                                ]),
                                (0, $.Lk)('div', Ru, [
                                    (0, $.Lk)('div', Fu, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.mediaExpirationChanged
                                                            ? ' is-changed'
                                                            : ''),
                                                ),
                                            },
                                            [
                                                (0, $.bo)(
                                                    (0, $.Lk)(
                                                        'input',
                                                        {
                                                            'onUpdate:modelValue':
                                                                t[4] ||
                                                                (t[4] = (t) =>
                                                                    (e.mediaExpiration = t)),
                                                            class: 'input',
                                                            type: 'text',
                                                            placeholder:
                                                                e.$props.data.mediaExpiration
                                                                    .default,
                                                        },
                                                        null,
                                                        8,
                                                        Du,
                                                    ),
                                                    [[a.Jo, e.mediaExpiration]],
                                                ),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                            (0, $.Lk)('div', Au, [
                                (0, $.Lk)('div', Ou, [
                                    (0, $.Lk)(
                                        'label',
                                        zu,
                                        (0, L.v_)(
                                            e.$t(
                                                'templates.globalSections.performance.expirationForSvgs',
                                            ),
                                        ),
                                        1,
                                    ),
                                ]),
                                (0, $.Lk)('div', ju, [
                                    (0, $.Lk)('div', Hu, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.svgExpirationChanged
                                                            ? ' is-changed'
                                                            : ''),
                                                ),
                                            },
                                            [
                                                (0, $.bo)(
                                                    (0, $.Lk)(
                                                        'input',
                                                        {
                                                            'onUpdate:modelValue':
                                                                t[5] ||
                                                                (t[5] = (t) =>
                                                                    (e.svgExpiration = t)),
                                                            class: 'input',
                                                            type: 'text',
                                                            placeholder:
                                                                e.$props.data.svgExpiration.default,
                                                        },
                                                        null,
                                                        8,
                                                        Wu,
                                                    ),
                                                    [[a.Jo, e.svgExpiration]],
                                                ),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                            (0, $.Lk)('div', Xu, [
                                (0, $.Lk)('div', Iu, [
                                    (0, $.Lk)(
                                        'label',
                                        Mu,
                                        (0, L.v_)(
                                            e.$t(
                                                'templates.globalSections.performance.expirationForFonts',
                                            ),
                                        ),
                                        1,
                                    ),
                                ]),
                                (0, $.Lk)('div', Uu, [
                                    (0, $.Lk)('div', Bu, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.fontsExpirationChanged
                                                            ? ' is-changed'
                                                            : ''),
                                                ),
                                            },
                                            [
                                                (0, $.bo)(
                                                    (0, $.Lk)(
                                                        'input',
                                                        {
                                                            'onUpdate:modelValue':
                                                                t[6] ||
                                                                (t[6] = (t) =>
                                                                    (e.fontsExpiration = t)),
                                                            class: 'input',
                                                            type: 'text',
                                                            placeholder:
                                                                e.$props.data.fontsExpiration
                                                                    .default,
                                                        },
                                                        null,
                                                        8,
                                                        Nu,
                                                    ),
                                                    [[a.Jo, e.fontsExpiration]],
                                                ),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                        ])
                    );
                }
                const Gu = {
                        disableHtmlCaching: { default: !1, enabled: !0 },
                        gzipCompression: { default: !0, enabled: !0 },
                        brotliCompression: { default: !1, enabled: !0 },
                        assetsExpiration: { default: '7d', enabled: !0 },
                        mediaExpiration: { default: '7d', enabled: !0 },
                        svgExpiration: { default: '7d', enabled: !0 },
                        fontsExpiration: { default: '7d', enabled: !0 },
                    },
                    Ju = {
                        name: 'GlobalPerformance',
                        display: 'templates.globalSections.performance.performance',
                        key: 'performance',
                        delegated: ce(Gu),
                        components: { PrettyCheck: gt, ExternalLink: _o.A },
                        props: { data: Object },
                        computed: {
                            ...ue(Gu, 'performance'),
                            showBrotliWarning() {
                                return this.$props.data.brotliCompression.computed;
                            },
                            hasWarnings() {
                                return this.showBrotliWarning;
                            },
                        },
                    },
                    Ku = (0, ge.A)(Ju, [['render', Qu]]),
                    qu = Ku,
                    Yu = { class: 'field is-horizontal is-aligned-top' },
                    Zu = (0, $.Lk)(
                        'div',
                        { class: 'field-label has-small-margin-top' },
                        [(0, $.Lk)('label', { class: 'label' }, 'error_log')],
                        -1,
                    ),
                    eh = { class: 'field-body' },
                    th = { class: 'field' },
                    oh = { class: 'checkbox' },
                    ah = ['placeholder'],
                    sh = { key: 0, class: 'field is-horizontal' },
                    lh = { class: 'field-label' },
                    ih = { class: 'label' },
                    nh = { class: 'field-body' },
                    dh = { class: 'field is-horizontal' },
                    rh = { class: 'radio' },
                    ph = { class: 'field is-horizontal is-aligned-top' },
                    ch = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'log_not_found')],
                        -1,
                    ),
                    uh = { class: 'field-body' },
                    hh = { class: 'field' },
                    mh = { class: 'checkbox' },
                    gh = { class: 'field is-horizontal is-aligned-top' },
                    fh = { class: 'field-label' },
                    vh = { class: 'label' },
                    bh = { class: 'field-body' },
                    kh = { class: 'field' },
                    yh = { class: 'checkbox' },
                    $h = { class: 'checkbox' },
                    Lh = { class: 'checkbox' },
                    Ch = { class: 'checkbox' },
                    xh = { class: 'checkbox' },
                    Sh = { class: 'checkbox' },
                    _h = { class: 'checkbox' },
                    Eh = { class: 'checkbox' },
                    wh = { class: 'checkbox' };
                function Ph(e, t, o, s, l, i) {
                    const n = (0, $.g2)('PrettyCheck'),
                        d = (0, $.g2)('PrettyRadio');
                    return (
                        (0, $.uX)(),
                        (0, $.CE)('div', null, [
                            (0, $.Lk)('div', Yu, [
                                Zu,
                                (0, $.Lk)('div', eh, [
                                    (0, $.Lk)('div', th, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.errorLogEnabledChanged
                                                            ? ' is-changed'
                                                            : ''),
                                                ),
                                            },
                                            [
                                                (0, $.Lk)('div', oh, [
                                                    (0, $.bF)(
                                                        n,
                                                        {
                                                            modelValue: e.errorLogEnabled,
                                                            'onUpdate:modelValue':
                                                                t[0] ||
                                                                (t[0] = (t) =>
                                                                    (e.errorLogEnabled = t)),
                                                            class: 'p-default p-curve p-fill p-icon',
                                                        },
                                                        {
                                                            default: (0, $.k6)(() => [
                                                                (0, $.eW)(
                                                                    (0, L.v_)(
                                                                        e.$t('common.enable'),
                                                                    ),
                                                                    1,
                                                                ),
                                                            ]),
                                                            _: 1,
                                                        },
                                                        8,
                                                        ['modelValue'],
                                                    ),
                                                ]),
                                            ],
                                            2,
                                        ),
                                        e.$props.data.errorLogEnabled.computed
                                            ? ((0, $.uX)(),
                                              (0, $.CE)(
                                                  'div',
                                                  {
                                                      key: 0,
                                                      class: (0, L.C4)(
                                                          'control field is-horizontal is-expanded' +
                                                              (e.errorLogPathChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.bo)(
                                                          (0, $.Lk)(
                                                              'input',
                                                              {
                                                                  'onUpdate:modelValue':
                                                                      t[1] ||
                                                                      (t[1] = (t) =>
                                                                          (e.errorLogPath = t)),
                                                                  class: 'input',
                                                                  type: 'text',
                                                                  placeholder:
                                                                      e.$props.data.errorLogPath
                                                                          .default,
                                                              },
                                                              null,
                                                              8,
                                                              ah,
                                                          ),
                                                          [[a.Jo, e.errorLogPath]],
                                                      ),
                                                  ],
                                                  2,
                                              ))
                                            : (0, $.Q3)('', !0),
                                    ]),
                                ]),
                            ]),
                            e.$props.data.errorLogEnabled.computed
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', sh, [
                                      (0, $.Lk)('div', lh, [
                                          (0, $.Lk)(
                                              'label',
                                              ih,
                                              ' error_log ' +
                                                  (0, L.v_)(
                                                      e.$t(
                                                          'templates.globalSections.logging.level',
                                                      ),
                                                  ),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', nh, [
                                          (0, $.Lk)('div', dh, [
                                              ((0, $.uX)(!0),
                                              (0, $.CE)(
                                                  $.FK,
                                                  null,
                                                  (0, $.pI)(
                                                      e.$props.data.errorLogLevel.options,
                                                      (o) => (
                                                          (0, $.uX)(),
                                                          (0, $.CE)(
                                                              'div',
                                                              {
                                                                  class: (0, L.C4)(
                                                                      'control' +
                                                                          (e.errorLogLevelChanged &&
                                                                          o === e.errorLogLevel
                                                                              ? ' is-changed'
                                                                              : ''),
                                                                  ),
                                                              },
                                                              [
                                                                  (0, $.Lk)('div', rh, [
                                                                      (0, $.bF)(
                                                                          d,
                                                                          {
                                                                              modelValue:
                                                                                  e.errorLogLevel,
                                                                              'onUpdate:modelValue':
                                                                                  t[2] ||
                                                                                  (t[2] = (t) =>
                                                                                      (e.errorLogLevel =
                                                                                          t)),
                                                                              value: o,
                                                                              class: 'p-default p-round p-fill p-icon',
                                                                          },
                                                                          {
                                                                              default: (0, $.k6)(
                                                                                  () => [
                                                                                      (0, $.eW)(
                                                                                          (0, L.v_)(
                                                                                              o,
                                                                                          ),
                                                                                          1,
                                                                                      ),
                                                                                  ],
                                                                              ),
                                                                              _: 2,
                                                                          },
                                                                          1032,
                                                                          ['modelValue', 'value'],
                                                                      ),
                                                                  ]),
                                                              ],
                                                              2,
                                                          )
                                                      ),
                                                  ),
                                                  256,
                                              )),
                                          ]),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                            (0, $.Lk)('div', ph, [
                                ch,
                                (0, $.Lk)('div', uh, [
                                    (0, $.Lk)('div', hh, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.logNotFoundChanged ? ' is-changed' : ''),
                                                ),
                                            },
                                            [
                                                (0, $.Lk)('div', mh, [
                                                    (0, $.bF)(
                                                        n,
                                                        {
                                                            modelValue: e.logNotFound,
                                                            'onUpdate:modelValue':
                                                                t[3] ||
                                                                (t[3] = (t) => (e.logNotFound = t)),
                                                            class: 'p-default p-curve p-fill p-icon',
                                                        },
                                                        {
                                                            default: (0, $.k6)(() => [
                                                                (0, $.eW)(
                                                                    (0, L.v_)(
                                                                        e.$t(
                                                                            'templates.globalSections.logging.enableFileNotFoundErrorLogging',
                                                                        ),
                                                                    ) + ' error_log ',
                                                                    1,
                                                                ),
                                                            ]),
                                                            _: 1,
                                                        },
                                                        8,
                                                        ['modelValue'],
                                                    ),
                                                ]),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                            (0, $.Lk)('div', gh, [
                                (0, $.Lk)('div', fh, [
                                    (0, $.Lk)(
                                        'label',
                                        vh,
                                        (0, L.v_)(
                                            e.$t('templates.globalSections.logging.logformat'),
                                        ),
                                        1,
                                    ),
                                ]),
                                (0, $.Lk)('div', bh, [
                                    (0, $.Lk)('div', kh, [
                                        e.cloudflareEnabled
                                            ? ((0, $.uX)(),
                                              (0, $.CE)(
                                                  'div',
                                                  {
                                                      key: 0,
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.cloudflareChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.Lk)('div', yh, [
                                                          (0, $.bF)(
                                                              n,
                                                              {
                                                                  modelValue: e.cloudflare,
                                                                  'onUpdate:modelValue':
                                                                      t[4] ||
                                                                      (t[4] = (t) =>
                                                                          (e.cloudflare = t)),
                                                                  class: 'p-default p-curve p-fill p-icon',
                                                              },
                                                              {
                                                                  default: (0, $.k6)(() => [
                                                                      (0, $.eW)(
                                                                          (0, L.v_)(
                                                                              e.$t(
                                                                                  'templates.globalSections.logging.enableCloudflare',
                                                                              ),
                                                                          ),
                                                                          1,
                                                                      ),
                                                                  ]),
                                                                  _: 1,
                                                              },
                                                              8,
                                                              ['modelValue'],
                                                          ),
                                                      ]),
                                                  ],
                                                  2,
                                              ))
                                            : (0, $.Q3)('', !0),
                                        e.cfRayEnabled
                                            ? ((0, $.uX)(),
                                              (0, $.CE)(
                                                  'div',
                                                  {
                                                      key: 1,
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.cfRayChanged ? ' is-changed' : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.Lk)('div', $h, [
                                                          (0, $.bF)(
                                                              n,
                                                              {
                                                                  modelValue: e.cfRay,
                                                                  'onUpdate:modelValue':
                                                                      t[5] ||
                                                                      (t[5] = (t) => (e.cfRay = t)),
                                                                  class: 'p-default p-curve p-fill p-icon',
                                                              },
                                                              {
                                                                  default: (0, $.k6)(() => [
                                                                      (0, $.eW)(
                                                                          (0, L.v_)(
                                                                              e.$t(
                                                                                  'templates.globalSections.logging.cfRay',
                                                                              ),
                                                                          ),
                                                                          1,
                                                                      ),
                                                                  ]),
                                                                  _: 1,
                                                              },
                                                              8,
                                                              ['modelValue'],
                                                          ),
                                                      ]),
                                                  ],
                                                  2,
                                              ))
                                            : (0, $.Q3)('', !0),
                                        e.cfConnectingIpEnabled
                                            ? ((0, $.uX)(),
                                              (0, $.CE)(
                                                  'div',
                                                  {
                                                      key: 2,
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.cfConnectingIpChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.Lk)('div', Lh, [
                                                          (0, $.bF)(
                                                              n,
                                                              {
                                                                  modelValue: e.cfConnectingIp,
                                                                  'onUpdate:modelValue':
                                                                      t[6] ||
                                                                      (t[6] = (t) =>
                                                                          (e.cfConnectingIp = t)),
                                                                  class: 'p-default p-curve p-fill p-icon',
                                                              },
                                                              {
                                                                  default: (0, $.k6)(() => [
                                                                      (0, $.eW)(
                                                                          (0, L.v_)(
                                                                              e.$t(
                                                                                  'templates.globalSections.logging.cfConnectingIp',
                                                                              ),
                                                                          ),
                                                                          1,
                                                                      ),
                                                                  ]),
                                                                  _: 1,
                                                              },
                                                              8,
                                                              ['modelValue'],
                                                          ),
                                                      ]),
                                                  ],
                                                  2,
                                              ))
                                            : (0, $.Q3)('', !0),
                                        e.xForwardedForEnabled
                                            ? ((0, $.uX)(),
                                              (0, $.CE)(
                                                  'div',
                                                  {
                                                      key: 3,
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.xForwardedForChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.Lk)('div', Ch, [
                                                          (0, $.bF)(
                                                              n,
                                                              {
                                                                  modelValue: e.xForwardedFor,
                                                                  'onUpdate:modelValue':
                                                                      t[7] ||
                                                                      (t[7] = (t) =>
                                                                          (e.xForwardedFor = t)),
                                                                  class: 'p-default p-curve p-fill p-icon',
                                                              },
                                                              {
                                                                  default: (0, $.k6)(() => [
                                                                      (0, $.eW)(
                                                                          (0, L.v_)(
                                                                              e.$t(
                                                                                  'templates.globalSections.logging.xForwardedFor',
                                                                              ),
                                                                          ),
                                                                          1,
                                                                      ),
                                                                  ]),
                                                                  _: 1,
                                                              },
                                                              8,
                                                              ['modelValue'],
                                                          ),
                                                      ]),
                                                  ],
                                                  2,
                                              ))
                                            : (0, $.Q3)('', !0),
                                        e.xForwardedProtoEnabled
                                            ? ((0, $.uX)(),
                                              (0, $.CE)(
                                                  'div',
                                                  {
                                                      key: 4,
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.xForwardedProtoChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.Lk)('div', xh, [
                                                          (0, $.bF)(
                                                              n,
                                                              {
                                                                  modelValue: e.xForwardedProto,
                                                                  'onUpdate:modelValue':
                                                                      t[8] ||
                                                                      (t[8] = (t) =>
                                                                          (e.xForwardedProto = t)),
                                                                  class: 'p-default p-curve p-fill p-icon',
                                                              },
                                                              {
                                                                  default: (0, $.k6)(() => [
                                                                      (0, $.eW)(
                                                                          (0, L.v_)(
                                                                              e.$t(
                                                                                  'templates.globalSections.logging.xForwardedProto',
                                                                              ),
                                                                          ),
                                                                          1,
                                                                      ),
                                                                  ]),
                                                                  _: 1,
                                                              },
                                                              8,
                                                              ['modelValue'],
                                                          ),
                                                      ]),
                                                  ],
                                                  2,
                                              ))
                                            : (0, $.Q3)('', !0),
                                        e.trueClientIpEnabled
                                            ? ((0, $.uX)(),
                                              (0, $.CE)(
                                                  'div',
                                                  {
                                                      key: 5,
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.trueClientIpChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.Lk)('div', Sh, [
                                                          (0, $.bF)(
                                                              n,
                                                              {
                                                                  modelValue: e.trueClientIp,
                                                                  'onUpdate:modelValue':
                                                                      t[9] ||
                                                                      (t[9] = (t) =>
                                                                          (e.trueClientIp = t)),
                                                                  class: 'p-default p-curve p-fill p-icon',
                                                              },
                                                              {
                                                                  default: (0, $.k6)(() => [
                                                                      (0, $.eW)(
                                                                          (0, L.v_)(
                                                                              e.$t(
                                                                                  'templates.globalSections.logging.trueClientIp',
                                                                              ),
                                                                          ),
                                                                          1,
                                                                      ),
                                                                  ]),
                                                                  _: 1,
                                                              },
                                                              8,
                                                              ['modelValue'],
                                                          ),
                                                      ]),
                                                  ],
                                                  2,
                                              ))
                                            : (0, $.Q3)('', !0),
                                        e.cfIpCountryEnabled
                                            ? ((0, $.uX)(),
                                              (0, $.CE)(
                                                  'div',
                                                  {
                                                      key: 6,
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.cfIpCountryChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.Lk)('div', _h, [
                                                          (0, $.bF)(
                                                              n,
                                                              {
                                                                  modelValue: e.cfIpCountry,
                                                                  'onUpdate:modelValue':
                                                                      t[10] ||
                                                                      (t[10] = (t) =>
                                                                          (e.cfIpCountry = t)),
                                                                  class: 'p-default p-curve p-fill p-icon',
                                                              },
                                                              {
                                                                  default: (0, $.k6)(() => [
                                                                      (0, $.eW)(
                                                                          (0, L.v_)(
                                                                              e.$t(
                                                                                  'templates.globalSections.logging.cfIpCountry',
                                                                              ),
                                                                          ),
                                                                          1,
                                                                      ),
                                                                  ]),
                                                                  _: 1,
                                                              },
                                                              8,
                                                              ['modelValue'],
                                                          ),
                                                      ]),
                                                  ],
                                                  2,
                                              ))
                                            : (0, $.Q3)('', !0),
                                        e.cfVisitorEnabled
                                            ? ((0, $.uX)(),
                                              (0, $.CE)(
                                                  'div',
                                                  {
                                                      key: 7,
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.cfVisitorChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.Lk)('div', Eh, [
                                                          (0, $.bF)(
                                                              n,
                                                              {
                                                                  modelValue: e.cfVisitor,
                                                                  'onUpdate:modelValue':
                                                                      t[11] ||
                                                                      (t[11] = (t) =>
                                                                          (e.cfVisitor = t)),
                                                                  class: 'p-default p-curve p-fill p-icon',
                                                              },
                                                              {
                                                                  default: (0, $.k6)(() => [
                                                                      (0, $.eW)(
                                                                          (0, L.v_)(
                                                                              e.$t(
                                                                                  'templates.globalSections.logging.cfVisitor',
                                                                              ),
                                                                          ),
                                                                          1,
                                                                      ),
                                                                  ]),
                                                                  _: 1,
                                                              },
                                                              8,
                                                              ['modelValue'],
                                                          ),
                                                      ]),
                                                  ],
                                                  2,
                                              ))
                                            : (0, $.Q3)('', !0),
                                        e.cdnLoopEnabled
                                            ? ((0, $.uX)(),
                                              (0, $.CE)(
                                                  'div',
                                                  {
                                                      key: 8,
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.cdnLoopChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.Lk)('div', wh, [
                                                          (0, $.bF)(
                                                              n,
                                                              {
                                                                  modelValue: e.cdnLoop,
                                                                  'onUpdate:modelValue':
                                                                      t[12] ||
                                                                      (t[12] = (t) =>
                                                                          (e.cdnLoop = t)),
                                                                  class: 'p-default p-curve p-fill p-icon',
                                                              },
                                                              {
                                                                  default: (0, $.k6)(() => [
                                                                      (0, $.eW)(
                                                                          (0, L.v_)(
                                                                              e.$t(
                                                                                  'templates.globalSections.logging.cdnLoop',
                                                                              ),
                                                                          ),
                                                                          1,
                                                                      ),
                                                                  ]),
                                                                  _: 1,
                                                              },
                                                              8,
                                                              ['modelValue'],
                                                          ),
                                                      ]),
                                                  ],
                                                  2,
                                              ))
                                            : (0, $.Q3)('', !0),
                                    ]),
                                ]),
                            ]),
                        ])
                    );
                }
                const Th = {
                        errorLogEnabled: { default: !1, enabled: !0 },
                        errorLogPath: { default: fi, enabled: !0 },
                        errorLogLevel: { default: bi, options: ki, enabled: !0 },
                        logNotFound: { default: !1, enabled: !0 },
                        cloudflare: { default: !1, enabled: !0 },
                        cfRay: { default: !0, enabled: !1 },
                        cfConnectingIp: { default: !0, enabled: !1 },
                        xForwardedFor: { default: !1, enabled: !1 },
                        xForwardedProto: { default: !1, enabled: !1 },
                        trueClientIp: { default: !1, enabled: !1 },
                        cfIpCountry: { default: !1, enabled: !1 },
                        cfVisitor: { default: !1, enabled: !1 },
                        cdnLoop: { default: !1, enabled: !1 },
                    },
                    Vh = {
                        name: 'GlobalLogging',
                        display: 'common.logging',
                        key: 'logging',
                        delegated: ce(Th),
                        components: { PrettyCheck: gt, PrettyRadio: Vo },
                        props: { data: Object },
                        computed: ue(Th, 'logging'),
                        watch: {
                            '$props.data.cloudflare': {
                                handler(e) {
                                    e.computed
                                        ? ((this.$props.data.cfRay.enabled = !0),
                                          (this.$props.data.cfRay.computed =
                                              this.$props.data.cfRay.value),
                                          (this.$props.data.cfConnectingIp.enabled = !0),
                                          (this.$props.data.cfConnectingIp.computed =
                                              this.$props.data.cfConnectingIp.value),
                                          (this.$props.data.xForwardedFor.enabled = !0),
                                          (this.$props.data.xForwardedFor.computed =
                                              this.$props.data.xForwardedFor.value),
                                          (this.$props.data.xForwardedProto.enabled = !0),
                                          (this.$props.data.xForwardedProto.computed =
                                              this.$props.data.xForwardedProto.value),
                                          (this.$props.data.trueClientIp.enabled = !0),
                                          (this.$props.data.trueClientIp.computed =
                                              this.$props.data.trueClientIp.value),
                                          (this.$props.data.cfIpCountry.enabled = !0),
                                          (this.$props.data.cfIpCountry.computed =
                                              this.$props.data.cfIpCountry.value),
                                          (this.$props.data.cfVisitor.enabled = !0),
                                          (this.$props.data.cfVisitor.computed =
                                              this.$props.data.cfVisitor.value),
                                          (this.$props.data.cdnLoop.enabled = !0),
                                          (this.$props.data.cdnLoop.computed =
                                              this.$props.data.cdnLoop.value))
                                        : ((this.$props.data.cfRay.enabled = !1),
                                          (this.$props.data.cfRay.computed = !1),
                                          (this.$props.data.cfConnectingIp.enabled = !1),
                                          (this.$props.data.cfConnectingIp.computed = !1),
                                          (this.$props.data.xForwardedFor.enabled = !1),
                                          (this.$props.data.xForwardedFor.computed = !1),
                                          (this.$props.data.xForwardedProto.enabled = !1),
                                          (this.$props.data.xForwardedProto.computed = !1),
                                          (this.$props.data.trueClientIp.enabled = !1),
                                          (this.$props.data.trueClientIp.computed = !1),
                                          (this.$props.data.cfIpCountry.enabled = !1),
                                          (this.$props.data.cfIpCountry.computed = !1),
                                          (this.$props.data.cfVisitor.enabled = !1),
                                          (this.$props.data.cfVisitor.computed = !1),
                                          (this.$props.data.cdnLoop.enabled = !1),
                                          (this.$props.data.cdnLoop.computed = !1));
                                },
                                deep: !0,
                            },
                        },
                    },
                    Rh = (0, ge.A)(Vh, [['render', Ph]]),
                    Fh = Rh,
                    Dh = { class: 'field is-horizontal' },
                    Ah = { class: 'field-label' },
                    Oh = { class: 'label' },
                    zh = { class: 'field-body' },
                    jh = { class: 'field' },
                    Hh = ['placeholder'],
                    Wh = { class: 'field is-horizontal' },
                    Xh = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'worker_processes')],
                        -1,
                    ),
                    Ih = { class: 'field-body' },
                    Mh = { class: 'field' },
                    Uh = { class: 'field is-horizontal' },
                    Bh = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'user')],
                        -1,
                    ),
                    Nh = { class: 'field-body' },
                    Qh = { class: 'field' },
                    Gh = ['placeholder'],
                    Jh = { class: 'field is-horizontal' },
                    Kh = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'pid')],
                        -1,
                    ),
                    qh = { class: 'field-body' },
                    Yh = { class: 'field' },
                    Zh = ['placeholder'],
                    em = { class: 'field is-horizontal' },
                    tm = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'client_max_body_size')],
                        -1,
                    ),
                    om = { class: 'field-body' },
                    am = { class: 'field has-addons' },
                    sm = ['placeholder'],
                    lm = { class: 'control' },
                    im = { class: 'button is-static' },
                    nm = { class: 'field is-horizontal' },
                    dm = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'types_hash_max_size')],
                        -1,
                    ),
                    rm = { class: 'field-body' },
                    pm = { class: 'field' },
                    cm = { class: 'field is-horizontal' },
                    um = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' }, 'types_hash_bucket_size')],
                        -1,
                    ),
                    hm = { class: 'field-body' },
                    mm = { class: 'field' };
                function gm(e, t, o, s, l, i) {
                    const n = (0, $.g2)('VueSelect');
                    return (
                        (0, $.uX)(),
                        (0, $.CE)('div', null, [
                            (0, $.Lk)('div', Dh, [
                                (0, $.Lk)('div', Ah, [
                                    (0, $.Lk)(
                                        'label',
                                        Oh,
                                        (0, L.v_)(
                                            e.$t(
                                                'templates.globalSections.nginx.nginxConfigDirectory',
                                            ),
                                        ),
                                        1,
                                    ),
                                ]),
                                (0, $.Lk)('div', zh, [
                                    (0, $.Lk)('div', jh, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.nginxConfigDirectoryChanged
                                                            ? ' is-changed'
                                                            : ''),
                                                ),
                                            },
                                            [
                                                (0, $.bo)(
                                                    (0, $.Lk)(
                                                        'input',
                                                        {
                                                            'onUpdate:modelValue':
                                                                t[0] ||
                                                                (t[0] = (t) =>
                                                                    (e.nginxConfigDirectory = t)),
                                                            class: 'input',
                                                            type: 'text',
                                                            placeholder:
                                                                e.$props.data.nginxConfigDirectory
                                                                    .default,
                                                        },
                                                        null,
                                                        8,
                                                        Hh,
                                                    ),
                                                    [[a.Jo, e.nginxConfigDirectory]],
                                                ),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                            (0, $.Lk)('div', Wh, [
                                Xh,
                                (0, $.Lk)('div', Ih, [
                                    (0, $.Lk)('div', Mh, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.workerProcessesChanged
                                                            ? ' is-changed'
                                                            : ''),
                                                ),
                                            },
                                            [
                                                (0, $.bF)(
                                                    n,
                                                    {
                                                        modelValue: e.workerProcesses,
                                                        'onUpdate:modelValue':
                                                            t[1] ||
                                                            (t[1] = (t) => (e.workerProcesses = t)),
                                                        options:
                                                            e.$props.data.workerProcesses.options,
                                                        clearable: !1,
                                                    },
                                                    null,
                                                    8,
                                                    ['modelValue', 'options'],
                                                ),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                            (0, $.Lk)('div', Uh, [
                                Bh,
                                (0, $.Lk)('div', Nh, [
                                    (0, $.Lk)('div', Qh, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.userChanged ? ' is-changed' : ''),
                                                ),
                                            },
                                            [
                                                (0, $.bo)(
                                                    (0, $.Lk)(
                                                        'input',
                                                        {
                                                            'onUpdate:modelValue':
                                                                t[2] ||
                                                                (t[2] = (t) => (e.user = t)),
                                                            class: 'input',
                                                            type: 'text',
                                                            placeholder: e.$props.data.user.default,
                                                        },
                                                        null,
                                                        8,
                                                        Gh,
                                                    ),
                                                    [[a.Jo, e.user]],
                                                ),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                            (0, $.Lk)('div', Jh, [
                                Kh,
                                (0, $.Lk)('div', qh, [
                                    (0, $.Lk)('div', Yh, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' + (e.pidChanged ? ' is-changed' : ''),
                                                ),
                                            },
                                            [
                                                (0, $.bo)(
                                                    (0, $.Lk)(
                                                        'input',
                                                        {
                                                            'onUpdate:modelValue':
                                                                t[3] || (t[3] = (t) => (e.pid = t)),
                                                            class: 'input',
                                                            type: 'text',
                                                            placeholder: e.$props.data.pid.default,
                                                        },
                                                        null,
                                                        8,
                                                        Zh,
                                                    ),
                                                    [[a.Jo, e.pid]],
                                                ),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                            (0, $.Lk)('div', em, [
                                tm,
                                (0, $.Lk)('div', om, [
                                    (0, $.Lk)('div', am, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control is-expanded' +
                                                        (e.clientMaxBodySizeChanged
                                                            ? ' is-changed'
                                                            : ''),
                                                ),
                                            },
                                            [
                                                (0, $.bo)(
                                                    (0, $.Lk)(
                                                        'input',
                                                        {
                                                            'onUpdate:modelValue':
                                                                t[4] ||
                                                                (t[4] = (t) =>
                                                                    (e.clientMaxBodySize = t)),
                                                            class: 'input',
                                                            type: 'number',
                                                            min: '0',
                                                            step: '1',
                                                            placeholder:
                                                                e.$props.data.clientMaxBodySize
                                                                    .default,
                                                        },
                                                        null,
                                                        8,
                                                        sm,
                                                    ),
                                                    [
                                                        [
                                                            a.Jo,
                                                            e.clientMaxBodySize,
                                                            void 0,
                                                            { number: !0 },
                                                        ],
                                                    ],
                                                ),
                                            ],
                                            2,
                                        ),
                                        (0, $.Lk)('div', lm, [
                                            (0, $.Lk)(
                                                'a',
                                                im,
                                                (0, L.v_)(
                                                    e.$t('templates.globalSections.nginx.mb'),
                                                ),
                                                1,
                                            ),
                                        ]),
                                    ]),
                                ]),
                            ]),
                            (0, $.Lk)('div', nm, [
                                dm,
                                (0, $.Lk)('div', rm, [
                                    (0, $.Lk)('div', pm, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.typesHashMaxSizeChanged
                                                            ? ' is-changed'
                                                            : ''),
                                                ),
                                            },
                                            [
                                                (0, $.bF)(
                                                    n,
                                                    {
                                                        modelValue: e.typesHashMaxSize,
                                                        'onUpdate:modelValue':
                                                            t[5] ||
                                                            (t[5] = (t) =>
                                                                (e.typesHashMaxSize = t)),
                                                        options:
                                                            e.$props.data.typesHashMaxSize.options,
                                                        clearable: !1,
                                                    },
                                                    null,
                                                    8,
                                                    ['modelValue', 'options'],
                                                ),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                            (0, $.Lk)('div', cm, [
                                um,
                                (0, $.Lk)('div', hm, [
                                    (0, $.Lk)('div', mm, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.typesHashBucketSizeChanged
                                                            ? ' is-changed'
                                                            : ''),
                                                ),
                                            },
                                            [
                                                (0, $.bF)(
                                                    n,
                                                    {
                                                        modelValue: e.typesHashBucketSize,
                                                        'onUpdate:modelValue':
                                                            t[6] ||
                                                            (t[6] = (t) =>
                                                                (e.typesHashBucketSize = t)),
                                                        options:
                                                            e.$props.data.typesHashBucketSize
                                                                .options,
                                                        clearable: !1,
                                                    },
                                                    null,
                                                    8,
                                                    ['modelValue', 'options'],
                                                ),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                        ])
                    );
                }
                const fm = {
                        nginxConfigDirectory: {
                            default: '/etc/nginx/',
                            computed: '/etc/nginx',
                            enabled: !0,
                        },
                        workerProcesses: {
                            default: 'auto',
                            options: ['auto', ...Array.from({ length: 16 }, (e, t) => t + 1)],
                            enabled: !0,
                        },
                        user: { default: 'www-data', enabled: !0 },
                        pid: { default: '/run/nginx.pid', enabled: !0 },
                        clientMaxBodySize: { default: 16, enabled: !0 },
                        typesHashMaxSize: {
                            default: 2048,
                            options: Array.from({ length: 8 }, (e, t) => Math.pow(2, t + 6)),
                            enabled: !0,
                        },
                        typesHashBucketSize: {
                            default: 64,
                            options: Array.from({ length: 10 }, (e, t) => Math.pow(2, t + 4)),
                            enabled: !0,
                        },
                    },
                    vm = {
                        name: 'GlobalNGINX',
                        display: 'common.nginx',
                        key: 'nginx',
                        delegated: ce(fm),
                        components: { VueSelect: M.A },
                        props: { data: Object },
                        computed: ue(fm, 'nginx'),
                        watch: {
                            '$props.data.nginxConfigDirectory': {
                                handler(e) {
                                    e.enabled &&
                                        e.computed.endsWith('/') &&
                                        (e.computed = e.computed.replace(/\/+$/, ''));
                                },
                                deep: !0,
                            },
                            '$props.data.workerProcesses': {
                                handler(e) {
                                    e.enabled &&
                                        (e.options.includes(e.computed) ||
                                            (e.computed = e.default));
                                },
                                deep: !0,
                            },
                            '$props.data.clientMaxBodySize': {
                                handler(e) {
                                    e.enabled && e.computed < 0 && (e.computed = 0);
                                },
                                deep: !0,
                            },
                            '$props.data.typesHashMaxSize': {
                                handler(e) {
                                    e.enabled &&
                                        (e.options.includes(e.computed) ||
                                            (e.computed = e.default));
                                },
                                deep: !0,
                            },
                            '$props.data.typesHashBucketSize': {
                                handler(e) {
                                    e.enabled &&
                                        (e.options.includes(e.computed) ||
                                            (e.computed = e.default));
                                },
                                deep: !0,
                            },
                        },
                    },
                    bm = (0, ge.A)(vm, [['render', gm]]),
                    km = bm,
                    ym = { class: 'field is-horizontal' },
                    $m = { class: 'field-label' },
                    Lm = { class: 'label' },
                    Cm = { class: 'field-body' },
                    xm = { class: 'field is-horizontal is-aligned-top' },
                    Sm = (0, $.Lk)('br', null, null, -1),
                    _m = ['innerHTML'],
                    Em = { class: 'field is-horizontal' },
                    wm = { class: 'field-label' },
                    Pm = { class: 'label' },
                    Tm = { class: 'field-body' },
                    Vm = { class: 'field' },
                    Rm = { class: 'checkbox' },
                    Fm = { key: 0, class: 'field is-horizontal' },
                    Dm = { class: 'field-label' },
                    Am = { class: 'label' },
                    Om = { class: 'field-body' },
                    zm = { class: 'field' },
                    jm = { class: 'checkbox' };
                function Hm(e, t, o, a, s, l) {
                    const i = (0, $.g2)('PrettyCheck');
                    return (
                        (0, $.uX)(),
                        (0, $.CE)('div', null, [
                            (0, $.Lk)('div', ym, [
                                (0, $.Lk)('div', $m, [
                                    (0, $.Lk)(
                                        'label',
                                        Lm,
                                        (0, L.v_)(e.$t('templates.globalSections.docker.docker')),
                                        1,
                                    ),
                                ]),
                                (0, $.Lk)('div', Cm, [
                                    (0, $.Lk)('div', xm, [
                                        (0, $.Lk)(
                                            'a',
                                            {
                                                class: 'button is-primary is-tiny',
                                                onClick:
                                                    t[0] ||
                                                    (t[0] = (...e) =>
                                                        l.applyDockerTweaks &&
                                                        l.applyDockerTweaks(...e)),
                                            },
                                            (0, L.v_)(
                                                e.$t(
                                                    'templates.globalSections.docker.applyDockerTweaks',
                                                ),
                                            ),
                                            1,
                                        ),
                                        (0, $.Lk)('p', null, [
                                            (0, $.eW)(
                                                (0, L.v_)(
                                                    e.$t(
                                                        'templates.globalSections.docker.applyDockerTweaksForNginx',
                                                    ),
                                                ) + ' ',
                                                1,
                                            ),
                                            Sm,
                                            (0, $.Lk)(
                                                'small',
                                                {
                                                    innerHTML: e.$t(
                                                        'templates.globalSections.docker.applyDockerTweaksExplainer',
                                                    ),
                                                },
                                                null,
                                                8,
                                                _m,
                                            ),
                                        ]),
                                    ]),
                                ]),
                            ]),
                            (0, $.Lk)('div', Em, [
                                (0, $.Lk)('div', wm, [
                                    (0, $.Lk)(
                                        'label',
                                        Pm,
                                        (0, L.v_)(
                                            e.$t('templates.globalSections.docker.dockerfile'),
                                        ),
                                        1,
                                    ),
                                ]),
                                (0, $.Lk)('div', Tm, [
                                    (0, $.Lk)('div', Vm, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.dockerfileChanged ? ' is-changed' : ''),
                                                ),
                                            },
                                            [
                                                (0, $.Lk)('div', Rm, [
                                                    (0, $.bF)(
                                                        i,
                                                        {
                                                            modelValue: e.dockerfile,
                                                            'onUpdate:modelValue':
                                                                t[1] ||
                                                                (t[1] = (t) => (e.dockerfile = t)),
                                                            class: 'p-default p-curve p-fill p-icon',
                                                        },
                                                        {
                                                            default: (0, $.k6)(() => [
                                                                (0, $.eW)(
                                                                    (0, L.v_)(
                                                                        e.$t(
                                                                            'templates.globalSections.docker.includeDockerfile',
                                                                        ),
                                                                    ),
                                                                    1,
                                                                ),
                                                            ]),
                                                            _: 1,
                                                        },
                                                        8,
                                                        ['modelValue'],
                                                    ),
                                                ]),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                            e.dockerfile
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', Fm, [
                                      (0, $.Lk)('div', Dm, [
                                          (0, $.Lk)(
                                              'label',
                                              Am,
                                              (0, L.v_)(
                                                  e.$t(
                                                      'templates.globalSections.docker.dockerCompose',
                                                  ),
                                              ),
                                              1,
                                          ),
                                      ]),
                                      (0, $.Lk)('div', Om, [
                                          (0, $.Lk)('div', zm, [
                                              (0, $.Lk)(
                                                  'div',
                                                  {
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.dockerComposeChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.Lk)('div', jm, [
                                                          (0, $.bF)(
                                                              i,
                                                              {
                                                                  modelValue: e.dockerCompose,
                                                                  'onUpdate:modelValue':
                                                                      t[2] ||
                                                                      (t[2] = (t) =>
                                                                          (e.dockerCompose = t)),
                                                                  class: 'p-default p-curve p-fill p-icon',
                                                              },
                                                              {
                                                                  default: (0, $.k6)(() => [
                                                                      (0, $.eW)(
                                                                          (0, L.v_)(
                                                                              e.$t(
                                                                                  'templates.globalSections.docker.includeDockerCompose',
                                                                              ),
                                                                          ),
                                                                          1,
                                                                      ),
                                                                  ]),
                                                                  _: 1,
                                                              },
                                                              8,
                                                              ['modelValue'],
                                                          ),
                                                      ]),
                                                  ],
                                                  2,
                                              ),
                                          ]),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                        ])
                    );
                }
                const Wm = {
                        dockerfile: { default: !1, enabled: !0 },
                        dockerCompose: { default: !1, enabled: !1 },
                    },
                    Xm = {
                        name: 'GlobalDocker',
                        display: 'templates.globalSections.docker.docker',
                        key: 'docker',
                        delegated: ce(Wm),
                        components: { PrettyCheck: gt },
                        props: { data: Object },
                        computed: ue(Wm, 'docker'),
                        watch: {
                            '$props.data.dockerfile': {
                                handler(e) {
                                    e.computed
                                        ? ((this.$props.data.dockerCompose.enabled = !0),
                                          (this.$props.data.dockerCompose.computed =
                                              this.$props.data.dockerCompose.value))
                                        : ((this.$props.data.dockerCompose.enabled = !1),
                                          (this.$props.data.dockerCompose.computed = !1));
                                },
                                deep: !0,
                            },
                        },
                        methods: {
                            applyDockerTweaks() {
                                ae('apply_docker_tweaks', 'Presets'),
                                    this.$parent.setValue('nginx', 'user', 'nginx'),
                                    this.$parent.setValue('nginx', 'pid', '/var/run/nginx.pid'),
                                    this.$parent.setValue('docker', 'dockerfile', !0);
                            },
                        },
                    },
                    Im = (0, ge.A)(Xm, [['render', Hm]]),
                    Mm = Im,
                    Um = { class: 'field is-horizontal' },
                    Bm = { class: 'field-label' },
                    Nm = { class: 'label' },
                    Qm = { class: 'field-body' },
                    Gm = { class: 'field' },
                    Jm = { class: 'checkbox' },
                    Km = { key: 0, class: 'field is-horizontal' },
                    qm = (0, $.Lk)(
                        'div',
                        { class: 'field-label' },
                        [(0, $.Lk)('label', { class: 'label' })],
                        -1,
                    ),
                    Ym = { class: 'field-body' },
                    Zm = { class: 'field' },
                    eg = { class: 'checkbox' },
                    tg = { class: 'field is-horizontal' },
                    og = { class: 'field-label' },
                    ag = { class: 'label' },
                    sg = { class: 'field-body' },
                    lg = { class: 'field' },
                    ig = { class: 'control' },
                    ng = { class: 'field is-horizontal' },
                    dg = { class: 'field-label' },
                    rg = { class: 'label' },
                    pg = { class: 'field-body' },
                    cg = { class: 'field is-grouped' },
                    ug = { class: 'control' },
                    hg = { key: 0, class: 'control' },
                    mg = { key: 1, class: 'control' },
                    gg = { class: 'field is-horizontal' },
                    fg = (0, $.Lk)('div', { class: 'field-label' }, null, -1),
                    vg = { class: 'field-body is-vertical' },
                    bg = { class: 'field is-horizontal' },
                    kg = { class: 'field-label' },
                    yg = { class: 'label' },
                    $g = { class: 'field-body' },
                    Lg = { class: 'field is-grouped' },
                    Cg = { class: 'control' },
                    xg = ['onClick'],
                    Sg = { class: 'control' },
                    _g = ['onClick'];
                function Eg(e, t, o, s, l, i) {
                    const n = (0, $.g2)('PrettyCheck'),
                        d = (0, $.g2)('Modal');
                    return (
                        (0, $.uX)(),
                        (0, $.CE)('div', null, [
                            (0, $.Lk)('div', Um, [
                                (0, $.Lk)('div', Bm, [
                                    (0, $.Lk)(
                                        'label',
                                        Nm,
                                        (0, L.v_)(
                                            e.$t(
                                                'templates.globalSections.tools.modularizedStructure',
                                            ),
                                        ),
                                        1,
                                    ),
                                ]),
                                (0, $.Lk)('div', Qm, [
                                    (0, $.Lk)('div', Gm, [
                                        (0, $.Lk)(
                                            'div',
                                            {
                                                class: (0, L.C4)(
                                                    'control' +
                                                        (e.modularizedStructureChanged
                                                            ? ' is-changed'
                                                            : ''),
                                                ),
                                            },
                                            [
                                                (0, $.Lk)('div', Jm, [
                                                    (0, $.bF)(
                                                        n,
                                                        {
                                                            modelValue: e.modularizedStructure,
                                                            'onUpdate:modelValue':
                                                                t[0] ||
                                                                (t[0] = (t) =>
                                                                    (e.modularizedStructure = t)),
                                                            class: 'p-default p-curve p-fill p-icon',
                                                        },
                                                        {
                                                            default: (0, $.k6)(() => [
                                                                (0, $.eW)(
                                                                    (0, L.v_)(
                                                                        e.$t(
                                                                            'templates.globalSections.tools.enableModularizedConfigFiles',
                                                                        ),
                                                                    ),
                                                                    1,
                                                                ),
                                                            ]),
                                                            _: 1,
                                                        },
                                                        8,
                                                        ['modelValue'],
                                                    ),
                                                ]),
                                            ],
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                            e.symlinkVhostEnabled
                                ? ((0, $.uX)(),
                                  (0, $.CE)('div', Km, [
                                      qm,
                                      (0, $.Lk)('div', Ym, [
                                          (0, $.Lk)('div', Zm, [
                                              (0, $.Lk)(
                                                  'div',
                                                  {
                                                      class: (0, L.C4)(
                                                          'control' +
                                                              (e.symlinkVhostChanged
                                                                  ? ' is-changed'
                                                                  : ''),
                                                      ),
                                                  },
                                                  [
                                                      (0, $.Lk)('div', eg, [
                                                          (0, $.bF)(
                                                              n,
                                                              {
                                                                  modelValue: e.symlinkVhost,
                                                                  'onUpdate:modelValue':
                                                                      t[1] ||
                                                                      (t[1] = (t) =>
                                                                          (e.symlinkVhost = t)),
                                                                  class: 'p-default p-curve p-fill p-icon',
                                                              },
                                                              {
                                                                  default: (0, $.k6)(() => [
                                                                      (0, $.eW)(
                                                                          (0, L.v_)(
                                                                              e.$t(
                                                                                  'templates.globalSections.tools.enableSymLinksFrom',
                                                                              ),
                                                                          ) +
                                                                              ' sites-available/ ' +
                                                                              (0, L.v_)(
                                                                                  e.$t(
                                                                                      'templates.globalSections.tools.to',
                                                                                  ),
                                                                              ) +
                                                                              ' sites-enabled/ ',
                                                                          1,
                                                                      ),
                                                                  ]),
                                                                  _: 1,
                                                              },
                                                              8,
                                                              ['modelValue'],
                                                          ),
                                                      ]),
                                                  ],
                                                  2,
                                              ),
                                          ]),
                                      ]),
                                  ]))
                                : (0, $.Q3)('', !0),
                            (0, $.Lk)('div', tg, [
                                (0, $.Lk)('div', og, [
                                    (0, $.Lk)(
                                        'label',
                                        ag,
                                        (0, L.v_)(
                                            e.$t(
                                                'templates.globalSections.tools.shareConfiguration',
                                            ),
                                        ),
                                        1,
                                    ),
                                ]),
                                (0, $.Lk)('div', sg, [
                                    (0, $.Lk)('div', lg, [
                                        (0, $.Lk)('div', ig, [
                                            (0, $.bo)(
                                                (0, $.Lk)(
                                                    'input',
                                                    {
                                                        'onUpdate:modelValue':
                                                            t[2] ||
                                                            (t[2] = (e) => (i.shareLink = e)),
                                                        class: 'input',
                                                        type: 'text',
                                                        readonly: 'readonly',
                                                        onClick:
                                                            t[3] ||
                                                            (t[3] = (...e) =>
                                                                i.select && i.select(...e)),
                                                    },
                                                    null,
                                                    512,
                                                ),
                                                [[a.Jo, i.shareLink]],
                                            ),
                                        ]),
                                    ]),
                                ]),
                            ]),
                            (0, $.Lk)('div', ng, [
                                (0, $.Lk)('div', dg, [
                                    (0, $.Lk)(
                                        'label',
                                        rg,
                                        (0, L.v_)(
                                            e.$t(
                                                'templates.globalSections.tools.resetConfiguration',
                                            ),
                                        ),
                                        1,
                                    ),
                                ]),
                                (0, $.Lk)('div', pg, [
                                    (0, $.Lk)('div', cg, [
                                        (0, $.Lk)('div', ug, [
                                            (0, $.Lk)(
                                                'a',
                                                {
                                                    class: 'button is-danger is-outline is-mini',
                                                    onClick:
                                                        t[4] ||
                                                        (t[4] = (...e) =>
                                                            i.resetGlobal && i.resetGlobal(...e)),
                                                },
                                                (0, L.v_)(
                                                    e.$t(
                                                        'templates.globalSections.tools.resetGlobalConfig',
                                                    ),
                                                ),
                                                1,
                                            ),
                                        ]),
                                        i.hasDomain
                                            ? ((0, $.uX)(),
                                              (0, $.CE)('div', hg, [
                                                  (0, $.Lk)(
                                                      'a',
                                                      {
                                                          class: 'button is-danger is-outline is-mini',
                                                          onClick:
                                                              t[5] ||
                                                              (t[5] = (...e) =>
                                                                  i.resetDomains &&
                                                                  i.resetDomains(...e)),
                                                      },
                                                      (0, L.v_)(
                                                          e.$t(
                                                              'templates.globalSections.tools.resetAllDomains',
                                                          ),
                                                      ),
                                                      1,
                                                  ),
                                              ]))
                                            : (0, $.Q3)('', !0),
                                        i.hasDomain
                                            ? ((0, $.uX)(),
                                              (0, $.CE)('div', mg, [
                                                  (0, $.Lk)(
                                                      'a',
                                                      {
                                                          class: 'button is-danger is-outline is-mini',
                                                          onClick:
                                                              t[6] ||
                                                              (t[6] = (...e) =>
                                                                  i.removeDomains &&
                                                                  i.removeDomains(...e)),
                                                      },
                                                      (0, L.v_)(
                                                          e.$t(
                                                              'templates.globalSections.tools.removeAllDomains',
                                                          ),
                                                      ),
                                                      1,
                                                  ),
                                              ]))
                                            : (0, $.Q3)('', !0),
                                    ]),
                                ]),
                            ]),
                            (0, $.Lk)('div', gg, [
                                fg,
                                (0, $.Lk)('div', vg, [
                                    ((0, $.uX)(!0),
                                    (0, $.CE)(
                                        $.FK,
                                        null,
                                        (0, $.pI)(
                                            e.$parent.$parent.activeDomains,
                                            (t) => (
                                                (0, $.uX)(),
                                                (0, $.CE)('div', bg, [
                                                    (0, $.Lk)('div', kg, [
                                                        (0, $.Lk)(
                                                            'label',
                                                            yg,
                                                            (0, L.v_)(t[0].server.domain.computed),
                                                            1,
                                                        ),
                                                    ]),
                                                    (0, $.Lk)('div', $g, [
                                                        (0, $.Lk)('div', Lg, [
                                                            (0, $.Lk)('div', Cg, [
                                                                (0, $.Lk)(
                                                                    'a',
                                                                    {
                                                                        class: 'button is-danger is-outline is-mini',
                                                                        onClick: (e) =>
                                                                            i.resetDomain(t[1]),
                                                                    },
                                                                    (0, L.v_)(
                                                                        e.$t(
                                                                            'templates.globalSections.tools.resetDomainConfig',
                                                                        ),
                                                                    ),
                                                                    9,
                                                                    xg,
                                                                ),
                                                            ]),
                                                            (0, $.Lk)('div', Sg, [
                                                                (0, $.Lk)(
                                                                    'a',
                                                                    {
                                                                        class: 'button is-danger is-outline is-mini',
                                                                        onClick: (e) =>
                                                                            i.removeDomain(t[1]),
                                                                    },
                                                                    (0, L.v_)(
                                                                        e.$t(
                                                                            'templates.globalSections.tools.removeDomain',
                                                                        ),
                                                                    ),
                                                                    9,
                                                                    _g,
                                                                ),
                                                            ]),
                                                        ]),
                                                    ]),
                                                ])
                                            ),
                                        ),
                                        256,
                                    )),
                                ]),
                            ]),
                            (0, $.bF)(
                                d,
                                { ref: 'confirmModal', title: l.confirmTitle },
                                {
                                    default: (0, $.k6)(() => [
                                        (0, $.Lk)('p', null, (0, L.v_)(l.confirmBody), 1),
                                        (0, $.Lk)(
                                            'a',
                                            {
                                                class: 'button is-danger is-outline',
                                                onClick:
                                                    t[7] ||
                                                    (t[7] = (...e) =>
                                                        i.doConfirmAction &&
                                                        i.doConfirmAction(...e)),
                                            },
                                            (0, L.v_)(
                                                e.$t('templates.globalSections.tools.yesImSure'),
                                            ),
                                            1,
                                        ),
                                        (0, $.Lk)(
                                            'a',
                                            {
                                                class: 'button is-outline',
                                                onClick:
                                                    t[8] ||
                                                    (t[8] = (t) => e.$refs.confirmModal.close()),
                                            },
                                            (0, L.v_)(
                                                e.$t('templates.globalSections.tools.noCancel'),
                                            ),
                                            1,
                                        ),
                                    ]),
                                    _: 1,
                                },
                                8,
                                ['title'],
                            ),
                        ])
                    );
                }
                var wg = o(9145);
                const Pg = {
                        modularizedStructure: { default: !0, enabled: !0 },
                        symlinkVhost: { default: !0, enabled: !0 },
                    },
                    Tg = {
                        name: 'GlobalTools',
                        display: 'templates.globalSections.tools.tools',
                        key: 'tools',
                        delegated: ce(Pg),
                        components: { PrettyCheck: gt, Modal: wg.A },
                        props: { data: Object },
                        data() {
                            return { confirmTitle: '', confirmBody: '', confirmAction: () => {} };
                        },
                        computed: {
                            ...ue(Pg, 'tools'),
                            hasDomain() {
                                return this.$parent.$parent.activeDomains.length > 0;
                            },
                            shareQuery() {
                                return Kd(
                                    this.$parent.$parent.activeDomains,
                                    this.$parent.$props.data,
                                );
                            },
                            shareLink() {
                                const e = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
                                return `${e}${this.shareQuery}`;
                            },
                        },
                        watch: {
                            shareQuery(e) {
                                window.history.replaceState(
                                    {},
                                    '',
                                    `${window.location.pathname}${e || ''}`,
                                );
                            },
                            '$props.data.modularizedStructure': {
                                handler(e) {
                                    e.computed
                                        ? ((this.$props.data.symlinkVhost.enabled = !0),
                                          (this.$props.data.symlinkVhost.computed =
                                              this.$props.data.symlinkVhost.value))
                                        : ((this.$props.data.symlinkVhost.enabled = !1),
                                          (this.$props.data.symlinkVhost.computed = !1));
                                },
                                deep: !0,
                            },
                        },
                        methods: {
                            confirm(e, t, o) {
                                (this.$data.confirmTitle = e),
                                    (this.$data.confirmBody = t),
                                    (this.$data.confirmAction = o),
                                    this.$refs.confirmModal.open();
                            },
                            doConfirmAction() {
                                this.$refs.confirmModal.close(), this.$data.confirmAction();
                            },
                            doResetDomain(e) {
                                e &&
                                    Object.values(e).forEach((e) => {
                                        Object.values(e).forEach((e) => {
                                            (e.value = e.default), (e.computed = e.default);
                                        });
                                    });
                            },
                            doRemoveDomain(e) {
                                this.$set(this.$parent.$parent.$data.domains, e, null);
                            },
                            resetGlobal() {
                                this.confirm(
                                    this.$t('templates.globalSections.tools.resetGlobalConfig'),
                                    this.$t('templates.globalSections.tools.resetGlobalConfigBody'),
                                    () => {
                                        this.resetGlobalEvent(),
                                            Object.values(this.$parent.$props.data).forEach((e) => {
                                                Object.values(e).forEach((e) => {
                                                    (e.value = e.default), (e.computed = e.default);
                                                });
                                            });
                                    },
                                );
                            },
                            resetDomain(e) {
                                if (e >= this.$parent.$parent.$data.domains.length) return;
                                const t = this.$parent.$parent.$data.domains[e];
                                t &&
                                    this.confirm(
                                        this.$t('templates.globalSections.tools.resetDomainConfig'),
                                        `${this.$t('templates.globalSections.tools.areYouSureYouWantToResetAllConfigurationOptionsForThe')}\n                    ${t.server.domain.computed}\n                    ${this.$t('templates.globalSections.tools.domain')}`,
                                        () => {
                                            this.resetDomainEvent(t.server.domain.computed),
                                                this.doResetDomain(t);
                                        },
                                    );
                            },
                            removeDomain(e) {
                                if (e >= this.$parent.$parent.$data.domains.length) return;
                                const t = this.$parent.$parent.$data.domains[e];
                                t &&
                                    this.confirm(
                                        this.$t('templates.globalSections.tools.removeDomain'),
                                        `${this.$t('templates.globalSections.tools.areYouSureYouWantToRemoveThe')}\n                    ${t.server.domain.computed}\n                    ${this.$t('templates.globalSections.tools.domainConfiguration')}`,
                                        () => {
                                            this.removeDomainEvent(t.server.domain.computed),
                                                this.doRemoveDomain(e);
                                        },
                                    );
                            },
                            resetDomains() {
                                this.confirm(
                                    this.$t('templates.globalSections.tools.resetAllDomainsConfig'),
                                    this.$t(
                                        'templates.globalSections.tools.resetAllDomainsConfigBody',
                                    ),
                                    () => {
                                        this.resetDomainsEvent(
                                            this.$parent.$parent.activeDomains.map(
                                                (e) => e[0].server.domain.computed,
                                            ),
                                            this.$parent.$parent.activeDomains.length,
                                        );
                                        for (
                                            let e = 0;
                                            e < this.$parent.$parent.$data.domains.length;
                                            e++
                                        )
                                            this.doResetDomain(
                                                this.$parent.$parent.$data.domains[e],
                                            );
                                    },
                                );
                            },
                            removeDomains() {
                                this.confirm(
                                    this.$t('templates.globalSections.tools.removeAllDomains'),
                                    this.$t('templates.globalSections.tools.removeAllDomainsBody'),
                                    () => {
                                        this.removeDomainsEvent(
                                            this.$parent.$parent.activeDomains.map(
                                                (e) => e[0].server.domain.computed,
                                            ),
                                            this.$parent.$parent.activeDomains.length,
                                        );
                                        for (
                                            let e = 0;
                                            e < this.$parent.$parent.$data.domains.length;
                                            e++
                                        )
                                            this.doRemoveDomain(e);
                                    },
                                );
                            },
                            resetGlobalEvent() {
                                ae({ category: 'Tools', action: 'Global settings reset' });
                            },
                            resetDomainEvent(e) {
                                ae({ category: 'Tools', action: 'Site reset', label: e });
                            },
                            removeDomainEvent(e) {
                                ae({ category: 'Tools', action: 'Removed site', label: e }),
                                    this.$parent.$parent.removeSiteEvent(
                                        this.$parent.$parent.activeDomains.length - 1,
                                        e,
                                    );
                            },
                            resetDomainsEvent(e, t) {
                                ae({
                                    category: 'Tools',
                                    action: 'All sites reset',
                                    label: e.join(', '),
                                    value: t,
                                });
                            },
                            removeDomainsEvent(e, t) {
                                ae({
                                    category: 'Tools',
                                    action: 'All sites removed',
                                    label: e.join(', '),
                                    value: t,
                                });
                                for (let o = 0; o < this.$parent.$parent.$data.domains.length; o++)
                                    this.$parent.$parent.removeSiteEvent(
                                        this.$parent.$parent.activeDomains.length - o - 1,
                                        e[o],
                                    );
                            },
                            select(e) {
                                e.target.setSelectionRange(0, e.target.value.length);
                            },
                        },
                    },
                    Vg = (0, ge.A)(Tg, [['render', Eg]]),
                    Rg = Vg,
                    Fg = [pp, qp, gc, tu, qu, Fh, km, Mm, Rg],
                    Dg = Fg.reduce((e, t) => ((e[t.key] = t.delegated), e), {}),
                    Ag = {
                        name: 'Global',
                        delegated: Dg,
                        props: { data: Object },
                        data() {
                            return { active: Fg[0].key, tabs: Fg };
                        },
                        computed: {
                            nextTab() {
                                const e = this.$data.tabs.map((e) => e.key),
                                    t = e.indexOf(this.$data.active) + 1;
                                return t < e.length && e[t];
                            },
                            previousTab() {
                                const e = this.$data.tabs.map((e) => e.key),
                                    t = e.indexOf(this.$data.active) - 1;
                                return t >= 0 && e[t];
                            },
                        },
                        methods: {
                            changesCount(e) {
                                return Object.keys(this.$props.data[e]).filter((t) =>
                                    N(this.$props.data[e][t], e, t),
                                ).length;
                            },
                            changes(e) {
                                const t = this.changesCount(e);
                                return t ? ` (${t.toLocaleString()})` : '';
                            },
                            warnings(e) {
                                return (
                                    (Object.prototype.hasOwnProperty.call(this.$refs, e) &&
                                        this.$refs[e][0].hasWarnings) ||
                                    !1
                                );
                            },
                            setValue(e, t, o) {
                                Object.assign(this.$props.data[e][t], { value: o, computed: o });
                            },
                            resetValue(e, t) {
                                this.setValue(e, t, this.$props.data[e][t].default);
                            },
                            tabClass(e) {
                                const t = [];
                                e === this.$data.active && t.push('is-active'),
                                    this.changesCount(e) && t.push('is-changed');
                                const o = this.$data.tabs.map((e) => e.key);
                                return (
                                    o.indexOf(e) < o.indexOf(this.$data.active) &&
                                        t.push('is-before'),
                                    t.join(' ')
                                );
                            },
                            showTab(e) {
                                ae({
                                    category: 'Global',
                                    action: 'Tab clicked',
                                    label: `${this.$data.active}, ${e}`,
                                }),
                                    (this.$data.active = e);
                            },
                            showPreviousTab() {
                                ae({
                                    category: 'Global',
                                    action: 'Back clicked',
                                    label: `${this.$data.active}, ${this.previousTab}`,
                                }),
                                    (this.$data.active = this.previousTab);
                            },
                            showNextTab() {
                                ae({
                                    category: 'Global',
                                    action: 'Next clicked',
                                    label: `${this.$data.active}, ${this.nextTab}`,
                                }),
                                    (this.$data.active = this.nextTab);
                            },
                        },
                    },
                    Og = (0, ge.A)(Ag, [['render', lr]]),
                    zg = Og,
                    jg = { class: 'callout' };
                function Hg(e, t, o, a, s, l) {
                    const i = (0, $.g2)('ExternalLink');
                    return (
                        (0, $.uX)(),
                        (0, $.CE)('div', jg, [
                            (0, $.Lk)('p', null, [
                                (0, $.eW)(
                                    (0, L.v_)(
                                        e.$t('templates.callouts.droplet.lookingForAPlaceToDeploy'),
                                    ) + ' ',
                                    1,
                                ),
                                (0, $.bF)(
                                    i,
                                    {
                                        text: e.$t(
                                            'templates.callouts.droplet.tryOutDigitalOceansDroplet',
                                        ),
                                        link: 'https://marketplace.digitalocean.com/apps/lemp',
                                        onClick: l.linkClickEvent,
                                    },
                                    null,
                                    8,
                                    ['text', 'onClick'],
                                ),
                            ]),
                        ])
                    );
                }
                const Wg = {
                        name: 'DropletCallout',
                        components: { ExternalLink: _o.A },
                        data() {
                            return { observer: null };
                        },
                        mounted() {
                            if ('IntersectionObserver' in window)
                                return (
                                    (this.observer = new window.IntersectionObserver(
                                        this.observerCallback,
                                        { root: null, rootMargin: '0px', threshold: 1 },
                                    )),
                                    void this.observer.observe(this.$el)
                                );
                            this.calloutVisibleEvent();
                        },
                        updated() {
                            this.$nextTick(() => {
                                this.observer &&
                                    (this.observer.disconnect(), this.observer.observe(this.$el));
                            });
                        },
                        beforeDestroy() {
                            this.observerCleanup();
                        },
                        methods: {
                            observerCleanup() {
                                this.observer &&
                                    (this.observer.disconnect(), (this.observer = null));
                            },
                            observerCallback(e) {
                                for (const t of e)
                                    t.isIntersecting &&
                                        (this.observerCleanup(), this.calloutVisibleEvent());
                            },
                            calloutVisibleEvent() {
                                ae({
                                    category: 'Droplet callout',
                                    action: 'Visible',
                                    nonInteraction: !0,
                                });
                            },
                            linkClickEvent() {
                                ae({ category: 'Droplet callout', action: 'Clicked' });
                            },
                        },
                    },
                    Xg = (0, ge.A)(Wg, [['render', Hg]]),
                    Ig = Xg,
                    Mg = { class: 'close' },
                    Ug = (0, $.Lk)('i', { class: 'fas fa-times' }, null, -1),
                    Bg = [Ug];
                function Ng(e, t, o, s, l, i) {
                    return (
                        (0, $.uX)(),
                        (0, $.CE)(
                            'div',
                            { class: 'callout floating', style: (0, L.Tr)(i.style) },
                            [
                                (0, $.Lk)('div', Mg, [
                                    (0, $.Lk)(
                                        'p',
                                        null,
                                        (0, L.v_)(
                                            e.$t(
                                                'templates.callouts.contribute.wantToContributeChanges',
                                            ),
                                        ),
                                        1,
                                    ),
                                    (0, $.Lk)(
                                        'a',
                                        {
                                            onClick:
                                                t[0] ||
                                                (t[0] = (0, a.D$)(
                                                    (...e) => i.close && i.close(...e),
                                                    ['prevent'],
                                                )),
                                        },
                                        Bg,
                                    ),
                                ]),
                                (0, $.Lk)(
                                    'a',
                                    {
                                        href: 'https://github.com/digitalocean/nginxconfig.io',
                                        class: 'button is-primary',
                                        target: '_blank',
                                        onClick:
                                            t[1] ||
                                            (t[1] = (...e) =>
                                                i.linkClickEvent && i.linkClickEvent(...e)),
                                    },
                                    (0, L.v_)(
                                        e.$t('templates.callouts.contribute.getInvolvedOnGitHub'),
                                    ),
                                    1,
                                ),
                            ],
                            4,
                        )
                    );
                }
                const Qg = {
                        name: 'ContributeCallout',
                        data() {
                            return { scrolled: !1, closed: !1 };
                        },
                        computed: {
                            visible() {
                                return this.$data.scrolled && !this.$data.closed;
                            },
                            style() {
                                const e = { opacity: 0, pointerEvents: 'none' };
                                return this.visible ? void 0 : e;
                            },
                        },
                        mounted() {
                            document.addEventListener('scroll', () => {
                                this.$data.scrolled ||
                                    window.scrollY < 300 ||
                                    ((this.$data.scrolled = !0), this.calloutVisibleEvent());
                            });
                        },
                        methods: {
                            close() {
                                (this.$data.closed = !0), this.closedEvent();
                            },
                            closedEvent() {
                                ae({ category: 'Contribute callout', action: 'Closed' });
                            },
                            calloutVisibleEvent() {
                                ae({
                                    category: 'Contribute callout',
                                    action: 'Visible',
                                    nonInteraction: !0,
                                });
                            },
                            linkClickEvent() {
                                ae({ category: 'Contribute callout', action: 'Clicked' });
                            },
                        },
                    },
                    Gg = (0, ge.A)(Qg, [['render', Ng]]),
                    Jg = Gg,
                    Kg = { class: 'setup' },
                    qg = { class: 'panel' },
                    Yg = { class: 'tabs' },
                    Zg = ['onClick'],
                    ef = { class: 'navigation-buttons' },
                    tf = (0, $.Lk)('i', { class: 'fas fa-long-arrow-alt-left' }, null, -1),
                    of = (0, $.Lk)('i', { class: 'fas fa-long-arrow-alt-right' }, null, -1),
                    af = { class: 'buttons is-centered' };
                function sf(e, t, o, a, s, l) {
                    return (
                        (0, $.uX)(),
                        (0, $.CE)('div', Kg, [
                            (0, $.Lk)('div', qg, [
                                (0, $.Lk)('div', Yg, [
                                    (0, $.Lk)('ul', null, [
                                        ((0, $.uX)(!0),
                                        (0, $.CE)(
                                            $.FK,
                                            null,
                                            (0, $.pI)(
                                                s.tabs,
                                                (t) => (
                                                    (0, $.uX)(),
                                                    (0, $.CE)(
                                                        'li',
                                                        { class: (0, L.C4)(l.tabClass(t.key)) },
                                                        [
                                                            (0, $.Lk)(
                                                                'a',
                                                                {
                                                                    onClick: (e) =>
                                                                        l.showTab(t.key),
                                                                },
                                                                (0, L.v_)(e.$t(t.display)),
                                                                9,
                                                                Zg,
                                                            ),
                                                        ],
                                                        2,
                                                    )
                                                ),
                                            ),
                                            256,
                                        )),
                                    ]),
                                ]),
                                ((0, $.uX)(!0),
                                (0, $.CE)(
                                    $.FK,
                                    null,
                                    (0, $.pI)(
                                        s.tabs,
                                        (t) => (
                                            (0, $.uX)(),
                                            (0, $.Wv)(
                                                (0, $.$y)(t),
                                                {
                                                    key: t.key,
                                                    data: e.$props.data,
                                                    style: (0, L.Tr)({
                                                        display:
                                                            s.active === t.key ? void 0 : 'none',
                                                    }),
                                                    class: 'container',
                                                },
                                                null,
                                                8,
                                                ['data', 'style'],
                                            )
                                        ),
                                    ),
                                    128,
                                )),
                                (0, $.Lk)('div', ef, [
                                    !1 !== l.previousTab
                                        ? ((0, $.uX)(),
                                          (0, $.CE)(
                                              'a',
                                              {
                                                  key: 0,
                                                  class: 'button is-mini',
                                                  onClick:
                                                      t[0] ||
                                                      (t[0] = (...e) =>
                                                          l.showPreviousTab &&
                                                          l.showPreviousTab(...e)),
                                              },
                                              [
                                                  tf,
                                                  (0, $.Lk)(
                                                      'span',
                                                      null,
                                                      (0, L.v_)(e.$t('common.back')),
                                                      1,
                                                  ),
                                              ],
                                          ))
                                        : (0, $.Q3)('', !0),
                                    !1 !== l.nextTab
                                        ? ((0, $.uX)(),
                                          (0, $.CE)(
                                              'a',
                                              {
                                                  key: 1,
                                                  class: 'button is-primary is-mini',
                                                  onClick:
                                                      t[1] ||
                                                      (t[1] = (...e) =>
                                                          l.showNextTab && l.showNextTab(...e)),
                                              },
                                              [
                                                  (0, $.Lk)(
                                                      'span',
                                                      null,
                                                      (0, L.v_)(e.$t('common.next')),
                                                      1,
                                                  ),
                                                  of,
                                              ],
                                          ))
                                        : (0, $.Q3)('', !0),
                                ]),
                            ]),
                            (0, $.Lk)('div', af, [
                                (0, $.Lk)(
                                    'a',
                                    {
                                        class: 'button is-success',
                                        onClick:
                                            t[2] ||
                                            (t[2] = (...e) => l.downloadTar && l.downloadTar(...e)),
                                    },
                                    (0, L.v_)(e.$t('templates.setup.downloadConfig')),
                                    1,
                                ),
                                (0, $.Lk)(
                                    'a',
                                    { ref: 'copyTar', class: 'button is-primary' },
                                    (0, L.v_)(e.$t('templates.setup.copyBase64')),
                                    513,
                                ),
                            ]),
                        ])
                    );
                }
                var lf = o(111);
                const nf = ['innerHTML'],
                    df = (0, $.Lk)('br', null, null, -1),
                    rf = ['innerHTML'],
                    pf = { class: 'slim' },
                    cf = ['innerHTML'],
                    uf = ['innerHTML'],
                    hf = (0, $.Lk)('br', null, null, -1),
                    mf = ['innerHTML'],
                    gf = (0, $.Lk)('br', null, null, -1),
                    ff = ['innerHTML'],
                    vf = (0, $.Lk)('br', null, null, -1);
                function bf(e, t, o, a, s, l) {
                    const i = (0, $.g2)('BashPrism');
                    return (
                        (0, $.uX)(),
                        (0, $.CE)('div', null, [
                            (0, $.Lk)('ol', null, [
                                (0, $.Lk)('li', null, [
                                    (0, $.Lk)('p', null, [
                                        (0, $.Lk)(
                                            'span',
                                            {
                                                innerHTML: e.$t(
                                                    'templates.setupSections.download.downloadTheGeneratedConfig',
                                                ),
                                            },
                                            null,
                                            8,
                                            nf,
                                        ),
                                        (0, $.Lk)('b', null, [
                                            (0, $.eW)('   '),
                                            (0, $.Lk)(
                                                'a',
                                                {
                                                    onClick:
                                                        t[0] ||
                                                        (t[0] = (...t) =>
                                                            e.$parent.downloadTar &&
                                                            e.$parent.downloadTar(...t)),
                                                },
                                                (0, L.v_)(e.$parent.tarName),
                                                1,
                                            ),
                                        ]),
                                        df,
                                        (0, $.Lk)(
                                            'span',
                                            {
                                                innerHTML: e.$t(
                                                    'templates.setupSections.download.andUploadItToYourServers',
                                                ),
                                            },
                                            null,
                                            8,
                                            rf,
                                        ),
                                        (0, $.Lk)(
                                            'code',
                                            pf,
                                            (0, L.v_)(
                                                e.$props.data.global.nginx.nginxConfigDirectory
                                                    .computed,
                                            ),
                                            1,
                                        ),
                                        (0, $.eW)(
                                            ' ' +
                                                (0, L.v_)(
                                                    e.$t(
                                                        'templates.setupSections.download.directory',
                                                    ),
                                                ),
                                            1,
                                        ),
                                    ]),
                                    (0, $.Lk)('p', null, [
                                        (0, $.eW)(
                                            (0, L.v_)(e.$t('templates.setupSections.download.or')) +
                                                ' ',
                                            1,
                                        ),
                                        (0, $.Lk)('b', null, [
                                            (0, $.Lk)(
                                                'a',
                                                { ref: 'copyTar' },
                                                (0, L.v_)(
                                                    e.$t(
                                                        'templates.setupSections.download.copyBase64StringOfCompressedConfig',
                                                    ),
                                                ),
                                                513,
                                            ),
                                        ]),
                                        (0, $.Lk)(
                                            'span',
                                            {
                                                innerHTML: e.$t(
                                                    'templates.setupSections.download.pasteItInYourServersCommandLineAndExecute',
                                                ),
                                            },
                                            null,
                                            8,
                                            cf,
                                        ),
                                    ]),
                                ]),
                                (0, $.Lk)('li', null, [
                                    (0, $.Lk)('p', null, [
                                        (0, $.Lk)(
                                            'span',
                                            {
                                                innerHTML: e.$t(
                                                    'templates.setupSections.download.navigateToYourNginxConfigurationDirectoryOnYourServer',
                                                ),
                                            },
                                            null,
                                            8,
                                            uf,
                                        ),
                                        hf,
                                        ((0, $.uX)(),
                                        (0, $.Wv)(
                                            i,
                                            {
                                                key: e.$props.data.global.nginx.nginxConfigDirectory
                                                    .computed,
                                                cmd: `cd ${e.$props.data.global.nginx.nginxConfigDirectory.computed}`,
                                                onCopied:
                                                    t[1] ||
                                                    (t[1] = (e) =>
                                                        l.codeCopiedEvent(
                                                            'Navigate to nginx config directory',
                                                        )),
                                            },
                                            null,
                                            8,
                                            ['cmd'],
                                        )),
                                    ]),
                                ]),
                                (0, $.Lk)('li', null, [
                                    (0, $.Lk)('p', null, [
                                        (0, $.Lk)(
                                            'span',
                                            {
                                                innerHTML: e.$t(
                                                    'templates.setupSections.download.createABackupOfYourCurrentNginxConfiguration',
                                                ),
                                            },
                                            null,
                                            8,
                                            mf,
                                        ),
                                        gf,
                                        (0, $.bF)(i, {
                                            cmd: "tar -czvf nginx_$(date +'%F_%H-%M-%S').tar.gz nginx.conf sites-available/ sites-enabled/ nginxconfig.io/",
                                            onCopied:
                                                t[2] ||
                                                (t[2] = (e) =>
                                                    l.codeCopiedEvent(
                                                        'Create nginx config backup tar',
                                                    )),
                                        }),
                                    ]),
                                ]),
                                (0, $.Lk)('li', null, [
                                    (0, $.Lk)('p', null, [
                                        (0, $.Lk)(
                                            'span',
                                            {
                                                innerHTML: e.$t(
                                                    'templates.setupSections.download.extractTheNewCompressedConfigurationArchiveUsingTar',
                                                ),
                                            },
                                            null,
                                            8,
                                            ff,
                                        ),
                                        vf,
                                        ((0, $.uX)(),
                                        (0, $.Wv)(
                                            i,
                                            {
                                                key: e.$parent.tarName,
                                                cmd: `tar -xzvf ${e.$parent.tarName} | xargs chmod 0644`,
                                                onCopied:
                                                    t[3] ||
                                                    (t[3] = (e) =>
                                                        l.codeCopiedEvent(
                                                            'Extract new nginx config tar',
                                                        )),
                                            },
                                            null,
                                            8,
                                            ['cmd'],
                                        )),
                                    ]),
                                ]),
                            ]),
                        ])
                    );
                }
                const kf = { class: 'language-bash' };
                function yf(e, t, o, a, s, l) {
                    return (
                        (0, $.uX)(),
                        (0, $.CE)(
                            'div',
                            { onCopied: t[0] || (t[0] = (...e) => l.copied && l.copied(...e)) },
                            [(0, $.Lk)('pre', null, [(0, $.Lk)('code', kf, (0, L.v_)(o.cmd), 1)])],
                            32,
                        )
                    );
                }
                const $f = {
                        name: 'BashPrism',
                        props: { cmd: String },
                        mounted() {
                            (0, n.pq)(`Highlighting ${this.$props.cmd}...`),
                                window.Prism.highlightAllUnder(this.$el);
                        },
                        methods: {
                            copied(e) {
                                this.$emit('copied', e.detail.text);
                            },
                        },
                    },
                    Lf = (0, ge.A)($f, [['render', yf]]),
                    Cf = Lf,
                    xf = {
                        name: 'SetupDownload',
                        display: 'templates.setupSections.download.download',
                        key: 'download',
                        components: { BashPrism: Cf },
                        props: { data: Object },
                        mounted() {
                            this.$parent.setupCopy(this.$refs.copyTar);
                        },
                        methods: {
                            codeCopiedEvent(e) {
                                ae({
                                    category: 'Setup',
                                    action: 'Code snippet copied',
                                    label: `download: ${e}`,
                                });
                            },
                        },
                    },
                    Sf = (0, ge.A)(xf, [['render', bf]]),
                    _f = Sf,
                    Ef = { key: 0 },
                    wf = { key: 0 },
                    Pf = ['innerHTML'],
                    Tf = (0, $.Lk)('br', null, null, -1),
                    Vf = { key: 1 },
                    Rf = ['innerHTML'],
                    Ff = (0, $.Lk)('br', null, null, -1),
                    Df = { key: 1, class: 'field is-horizontal' },
                    Af = { class: 'field-body' },
                    Of = { class: 'field' },
                    zf = { class: 'control' },
                    jf = { class: 'text' };
                function Hf(e, t, o, a, s, l) {
                    const i = (0, $.g2)('BashPrism');
                    return (
                        (0, $.uX)(),
                        (0, $.CE)('div', null, [
                            l.diffieHellmanValue || l.letsEncryptActive
                                ? ((0, $.uX)(),
                                  (0, $.CE)('ol', Ef, [
                                      l.diffieHellmanValue
                                          ? ((0, $.uX)(),
                                            (0, $.CE)('li', wf, [
                                                (0, $.Lk)('p', null, [
                                                    (0, $.Lk)(
                                                        'span',
                                                        {
                                                            innerHTML: e.$t(
                                                                'templates.setupSections.ssl.generateDiffieHellmanKeysByRunningThisCommandOnYourServer',
                                                            ),
                                                        },
                                                        null,
                                                        8,
                                                        Pf,
                                                    ),
                                                    Tf,
                                                    ((0, $.uX)(),
                                                    (0, $.Wv)(
                                                        i,
                                                        {
                                                            key: `${e.$props.data.global.nginx.nginxConfigDirectory.computed}-${l.diffieHellmanValue}`,
                                                            cmd: `openssl dhparam -out ${e.$props.data.global.nginx.nginxConfigDirectory.computed}/dhparam.pem ${l.diffieHellmanValue}`,
                                                            onCopied:
                                                                t[0] ||
                                                                (t[0] = (e) =>
                                                                    l.codeCopiedEvent(
                                                                        'Generate diffie-hellman keys',
                                                                    )),
                                                        },
                                                        null,
                                                        8,
                                                        ['cmd'],
                                                    )),
                                                ]),
                                            ]))
                                          : (0, $.Q3)('', !0),
                                      l.letsEncryptActive
                                          ? ((0, $.uX)(),
                                            (0, $.CE)('li', Vf, [
                                                (0, $.Lk)('p', null, [
                                                    (0, $.Lk)(
                                                        'span',
                                                        {
                                                            innerHTML: e.$t(
                                                                'templates.setupSections.ssl.createACommonAcmeChallengeDirectoryForLetsEncrypt',
                                                            ),
                                                        },
                                                        null,
                                                        8,
                                                        Rf,
                                                    ),
                                                    Ff,
                                                    ((0, $.uX)(),
                                                    (0, $.Wv)(
                                                        i,
                                                        {
                                                            key: l.letsEncryptDir,
                                                            cmd: `mkdir -p ${l.letsEncryptDir}`,
                                                            onCopied:
                                                                t[1] ||
                                                                (t[1] = (e) =>
                                                                    l.codeCopiedEvent(
                                                                        "Create let's encrypt directory",
                                                                    )),
                                                        },
                                                        null,
                                                        8,
                                                        ['cmd'],
                                                    )),
                                                    ((0, $.uX)(),
                                                    (0, $.Wv)(
                                                        i,
                                                        {
                                                            key: `${l.nginxUser}-${l.letsEncryptDir}`,
                                                            cmd: `chown ${l.nginxUser} ${l.letsEncryptDir}`,
                                                            onCopied:
                                                                t[2] ||
                                                                (t[2] = (e) =>
                                                                    l.codeCopiedEvent(
                                                                        "Set let's encrypt directory ownership",
                                                                    )),
                                                        },
                                                        null,
                                                        8,
                                                        ['cmd'],
                                                    )),
                                                ]),
                                            ]))
                                          : (0, $.Q3)('', !0),
                                  ]))
                                : ((0, $.uX)(),
                                  (0, $.CE)('div', Df, [
                                      (0, $.Lk)('div', Af, [
                                          (0, $.Lk)('div', Of, [
                                              (0, $.Lk)('div', zf, [
                                                  (0, $.Lk)(
                                                      'label',
                                                      jf,
                                                      (0, L.v_)(
                                                          e.$t(
                                                              'templates.setupSections.ssl.noAdditionalStepsAreNeededToSetUpSslForNginx',
                                                          ),
                                                      ),
                                                      1,
                                                  ),
                                              ]),
                                          ]),
                                      ]),
                                  ])),
                        ])
                    );
                }
                const Wf = {
                        name: 'SetupSSL',
                        display: 'templates.setupSections.ssl.sslInit',
                        key: 'ssl',
                        components: { BashPrism: Cf },
                        props: { data: Object },
                        computed: {
                            letsEncryptDir() {
                                return this.$props.data.global.https.letsEncryptRoot.computed.replace(
                                    /\/+$/,
                                    '',
                                );
                            },
                            nginxUser() {
                                return this.$props.data.global.nginx.user.computed;
                            },
                            diffieHellmanValue() {
                                switch (this.$props.data.global.https.sslProfile.computed) {
                                    case 'intermediate':
                                        return 2048;
                                    case 'old':
                                        return 1024;
                                    case 'modern':
                                    default:
                                        return 0;
                                }
                            },
                            letsEncryptActive() {
                                for (const e of this.$props.data.domains)
                                    if (e && 'letsEncrypt' === e.https.certType.computed) return !0;
                                return !1;
                            },
                        },
                        methods: {
                            codeCopiedEvent(e) {
                                ae({
                                    category: 'Setup',
                                    action: 'Code snippet copied',
                                    label: `ssl: ${e}`,
                                });
                            },
                        },
                    },
                    Xf = (0, ge.A)(Wf, [['render', Hf]]),
                    If = Xf,
                    Mf = { key: 0 },
                    Uf = (0, $.Lk)('br', null, null, -1),
                    Bf = { class: 'text message is-warning' },
                    Nf = ['innerHTML'],
                    Qf = (0, $.Lk)('br', null, null, -1),
                    Gf = (0, $.Lk)('br', null, null, -1),
                    Jf = (0, $.Lk)('br', null, null, -1),
                    Kf = (0, $.Lk)('br', null, null, -1),
                    qf = (0, $.Lk)('br', null, null, -1),
                    Yf = { key: 1, class: 'field is-horizontal' },
                    Zf = { class: 'field-body' },
                    ev = { class: 'field' },
                    tv = { class: 'control' },
                    ov = { class: 'text' };
                function av(e, t, o, a, s, l) {
                    const i = (0, $.g2)('BashPrism');
                    return (
                        (0, $.uX)(),
                        (0, $.CE)('div', null, [
                            l.letsEncryptActive
                                ? ((0, $.uX)(),
                                  (0, $.CE)('ol', Mf, [
                                      (0, $.Lk)('li', null, [
                                          (0, $.Lk)('p', null, [
                                              (0, $.eW)(
                                                  (0, L.v_)(
                                                      e.$t(
                                                          'templates.setupSections.certbot.commentOutSslDirectivesInConfiguration',
                                                      ),
                                                  ) + ' ',
                                                  1,
                                              ),
                                              Uf,
                                          ]),
                                          ((0, $.uX)(),
                                          (0, $.Wv)(
                                              i,
                                              {
                                                  key: l.sitesAvailable,
                                                  cmd: `sed -i -r 's/(listen .*443)/\\1; #/g; s/(ssl_(certificate|certificate_key|trusted_certificate) )/#;#\\1/g; s/(server \\{)/\\1\\n    ssl off;/g' ${l.sitesAvailable}`,
                                                  onCopied:
                                                      t[0] ||
                                                      (t[0] = (e) =>
                                                          l.codeCopiedEvent(
                                                              'Disable ssl directives',
                                                          )),
                                              },
                                              null,
                                              8,
                                              ['cmd'],
                                          )),
                                          (0, $.Lk)('div', Bf, [
                                              (0, $.Lk)(
                                                  'p',
                                                  {
                                                      class: 'message-body',
                                                      innerHTML: e.$t(
                                                          'templates.setupSections.certbot.sslOffDeprecationWarning',
                                                      ),
                                                  },
                                                  null,
                                                  8,
                                                  Nf,
                                              ),
                                          ]),
                                      ]),
                                      (0, $.Lk)('li', null, [
                                          (0, $.Lk)('p', null, [
                                              (0, $.eW)(
                                                  (0, L.v_)(
                                                      e.$t(
                                                          'templates.setupSections.certbot.reloadYourNginxServer',
                                                      ),
                                                  ) + ' ',
                                                  1,
                                              ),
                                              Qf,
                                          ]),
                                          (0, $.bF)(i, {
                                              cmd: 'sudo nginx -t && sudo systemctl reload nginx',
                                              onCopied:
                                                  t[1] ||
                                                  (t[1] = (e) => l.codeCopiedEvent('Reload nginx')),
                                          }),
                                      ]),
                                      (0, $.Lk)('li', null, [
                                          (0, $.Lk)('p', null, [
                                              (0, $.eW)(
                                                  (0, L.v_)(
                                                      e.$t(
                                                          'templates.setupSections.certbot.obtainSslCertificatesFromLetsEncrypt',
                                                      ),
                                                  ) + ' ',
                                                  1,
                                              ),
                                              Gf,
                                          ]),
                                          ((0, $.uX)(),
                                          (0, $.Wv)(
                                              i,
                                              {
                                                  key: l.certbotCmds,
                                                  cmd: l.certbotCmds,
                                                  onCopied:
                                                      t[2] ||
                                                      (t[2] = (e) =>
                                                          l.codeCopiedEvent(
                                                              'Obtain certificates using certbot',
                                                          )),
                                              },
                                              null,
                                              8,
                                              ['cmd'],
                                          )),
                                      ]),
                                      (0, $.Lk)('li', null, [
                                          (0, $.Lk)('p', null, [
                                              (0, $.eW)(
                                                  (0, L.v_)(
                                                      e.$t(
                                                          'templates.setupSections.certbot.uncommentSslDirectivesInConfiguration',
                                                      ),
                                                  ) + ' ',
                                                  1,
                                              ),
                                              Jf,
                                          ]),
                                          ((0, $.uX)(),
                                          (0, $.Wv)(
                                              i,
                                              {
                                                  key: l.sitesAvailable,
                                                  cmd: `sed -i -r -z 's/#?; ?#//g; s/(server \\{)\\n    ssl off;/\\1/g' ${l.sitesAvailable}`,
                                                  onCopied:
                                                      t[3] ||
                                                      (t[3] = (e) =>
                                                          l.codeCopiedEvent(
                                                              'Enable ssl directives',
                                                          )),
                                              },
                                              null,
                                              8,
                                              ['cmd'],
                                          )),
                                      ]),
                                      (0, $.Lk)('li', null, [
                                          (0, $.Lk)('p', null, [
                                              (0, $.eW)(
                                                  (0, L.v_)(
                                                      e.$t(
                                                          'templates.setupSections.certbot.reloadYourNginxServer',
                                                      ),
                                                  ) + ' ',
                                                  1,
                                              ),
                                              Kf,
                                          ]),
                                          (0, $.bF)(i, {
                                              cmd: 'sudo nginx -t && sudo systemctl reload nginx',
                                              onCopied:
                                                  t[4] ||
                                                  (t[4] = (e) =>
                                                      l.codeCopiedEvent('Reload nginx (2)')),
                                          }),
                                      ]),
                                      (0, $.Lk)('li', null, [
                                          (0, $.Lk)('p', null, [
                                              (0, $.eW)(
                                                  (0, L.v_)(
                                                      e.$t(
                                                          'templates.setupSections.certbot.configureCertbotToReloadNginxOnCertificateRenewal',
                                                      ),
                                                  ) + ' ',
                                                  1,
                                              ),
                                              qf,
                                          ]),
                                          (0, $.bF)(i, {
                                              cmd: "echo -e '#!/bin/bash\\nnginx -t && systemctl reload nginx' | sudo tee /etc/letsencrypt/renewal-hooks/post/nginx-reload.sh",
                                              onCopied:
                                                  t[5] ||
                                                  (t[5] = (e) =>
                                                      l.codeCopiedEvent(
                                                          'Create nginx auto-restart on renewal',
                                                      )),
                                          }),
                                          (0, $.bF)(i, {
                                              cmd: 'sudo chmod a+x /etc/letsencrypt/renewal-hooks/post/nginx-reload.sh',
                                              onCopied:
                                                  t[6] ||
                                                  (t[6] = (e) =>
                                                      l.codeCopiedEvent(
                                                          'Enable execution of auto-restart',
                                                      )),
                                          }),
                                      ]),
                                  ]))
                                : ((0, $.uX)(),
                                  (0, $.CE)('div', Yf, [
                                      (0, $.Lk)('div', Zf, [
                                          (0, $.Lk)('div', ev, [
                                              (0, $.Lk)('div', tv, [
                                                  (0, $.Lk)(
                                                      'label',
                                                      ov,
                                                      (0, L.v_)(
                                                          e.$t(
                                                              'templates.setupSections.certbot.certbotDoesNotNeedToBeSetupForYourConfiguration',
                                                          ),
                                                      ),
                                                      1,
                                                  ),
                                              ]),
                                          ]),
                                      ]),
                                  ])),
                        ])
                    );
                }
                const sv = {
                        name: 'SetupCertbot',
                        display: 'templates.setupSections.certbot.certbot',
                        key: 'certbot',
                        components: { BashPrism: Cf },
                        props: { data: Object },
                        computed: {
                            letsEncryptDir() {
                                return this.$props.data.global.https.letsEncryptRoot.computed.replace(
                                    /\/+$/,
                                    '',
                                );
                            },
                            letsEncryptActive() {
                                for (const e of this.$props.data.domains)
                                    if (e && 'letsEncrypt' === e.https.certType.computed) return !0;
                                return !1;
                            },
                            sitesAvailable() {
                                if (!this.$props.data.global.tools.modularizedStructure.computed)
                                    return `${this.$props.data.global.nginx.nginxConfigDirectory.computed}/nginx.conf`;
                                const e = this.$props.data.global.tools.symlinkVhost.computed
                                    ? 'available'
                                    : 'enabled';
                                return this.$props.data.domains
                                    .filter((e) => 'letsEncrypt' === e.https.certType.computed)
                                    .map(
                                        (t) =>
                                            `${this.$props.data.global.nginx.nginxConfigDirectory.computed}/sites-${e}/${t.server.domain.computed}.conf`,
                                    )
                                    .join(' ');
                            },
                            certbotCmds() {
                                return this.$props.data.domains
                                    .filter((e) => 'letsEncrypt' === e.https.certType.computed)
                                    .map((e) =>
                                        [
                                            'certbot certonly --webroot',
                                            `-d ${e.server.domain.computed}`,
                                            e.server.wwwSubdomain.computed
                                                ? `-d www.${e.server.domain.computed}`
                                                : null,
                                            e.server.cdnSubdomain.computed
                                                ? `-d cdn.${e.server.domain.computed}`
                                                : null,
                                            `--email ${e.https.letsEncryptEmail.computed}`,
                                            `-w ${this.letsEncryptDir}`,
                                            '-n --agree-tos --force-renewal',
                                        ]
                                            .filter((e) => null !== e)
                                            .join(' '),
                                    )
                                    .join('\n');
                            },
                        },
                        methods: {
                            codeCopiedEvent(e) {
                                ae({
                                    category: 'Setup',
                                    action: 'Code snippet copied',
                                    label: `certbot: ${e}`,
                                });
                            },
                        },
                    },
                    lv = (0, ge.A)(sv, [['render', av]]),
                    iv = lv,
                    nv = (0, $.Lk)('br', null, null, -1);
                function dv(e, t, o, a, s, l) {
                    const i = (0, $.g2)('BashPrism');
                    return (
                        (0, $.uX)(),
                        (0, $.CE)('div', null, [
                            (0, $.Lk)('p', null, [
                                (0, $.Lk)(
                                    'b',
                                    null,
                                    (0, L.v_)(e.$t('templates.setupSections.goLive.letsGoLive')),
                                    1,
                                ),
                                (0, $.eW)(' 🎉 '),
                            ]),
                            (0, $.Lk)('p', null, [
                                (0, $.eW)(
                                    (0, L.v_)(
                                        e.$t(
                                            'templates.setupSections.goLive.reloadNginxToLoadInYourNewConfiguration',
                                        ),
                                    ) + ' ',
                                    1,
                                ),
                                nv,
                                (0, $.bF)(i, {
                                    cmd: 'sudo nginx -t && sudo systemctl reload nginx',
                                    onCopied:
                                        t[0] || (t[0] = (e) => l.codeCopiedEvent('Reload nginx')),
                                }),
                            ]),
                        ])
                    );
                }
                const rv = {
                        name: 'SetupGoLive',
                        display: 'templates.setupSections.goLive.goLive',
                        key: 'goLive',
                        components: { BashPrism: Cf },
                        props: { data: Object },
                        methods: {
                            codeCopiedEvent(e) {
                                ae({
                                    category: 'Setup',
                                    action: 'Code snippet copied',
                                    label: `goLive: ${e}`,
                                });
                            },
                        },
                    },
                    pv = (0, ge.A)(rv, [['render', dv]]),
                    cv = pv,
                    uv = [_f, If, iv, cv],
                    hv = {
                        name: 'Setup',
                        props: { data: Object },
                        data() {
                            return { active: uv[0].key, tabs: uv };
                        },
                        computed: {
                            nextTab() {
                                const e = this.$data.tabs.map((e) => e.key),
                                    t = e.indexOf(this.$data.active) + 1;
                                return t < e.length && e[t];
                            },
                            previousTab() {
                                const e = this.$data.tabs.map((e) => e.key),
                                    t = e.indexOf(this.$data.active) - 1;
                                return t >= 0 && e[t];
                            },
                            domainCount() {
                                return this.$props.data.domains.filter((e) => null !== e).length;
                            },
                            tarName() {
                                const e = this.$props.data.domains
                                    .filter((e) => null !== e)
                                    .map((e) => e.server.domain.computed);
                                return `nginxconfig.io-${e.join(',')}.tar.gz`;
                            },
                        },
                        mounted() {
                            this.setupCopy(this.$refs.copyTar);
                        },
                        methods: {
                            tabClass(e) {
                                if (e === this.$data.active) return 'is-active';
                                const t = this.$data.tabs.map((e) => e.key);
                                return t.indexOf(e) < t.indexOf(this.$data.active)
                                    ? 'is-before'
                                    : void 0;
                            },
                            tarContents() {
                                const e = {};
                                for (const t in this.$props.data.confFiles)
                                    Object.prototype.hasOwnProperty.call(
                                        this.$props.data.confFiles,
                                        t,
                                    ) &&
                                        ((e[t] = { contents: this.$props.data.confFiles[t] }),
                                        this.$props.data.global.tools.symlinkVhost.computed &&
                                            t.startsWith('sites-available') &&
                                            (e[t.replace(/^sites-available/, 'sites-enabled')] = {
                                                target: `../${t}`,
                                            }));
                                return new lf.A(e).gz();
                            },
                            downloadTar() {
                                ae({
                                    category: 'Setup',
                                    action: 'Downloaded tar file',
                                    label: this.tarName,
                                    value: this.domainCount,
                                }),
                                    this.tarContents().download(this.tarName);
                            },
                            copyTar() {
                                ae({
                                    category: 'Setup',
                                    action: 'Copied base64 tar',
                                    label: this.tarName,
                                    value: this.domainCount,
                                });
                                const e = `${this.$props.data.global.nginx.nginxConfigDirectory.computed}/${this.tarName}`;
                                return this.tarContents().base64(e);
                            },
                            setupCopy(e) {
                                const t = (t) => {
                                        setTimeout(() => {
                                            e.textContent = t;
                                        }, 5e3);
                                    },
                                    o = new (l())(e, { text: this.copyTar });
                                o.on('success', (o) => {
                                    const a = e.textContent;
                                    (e.textContent = this.$t('templates.app.copied')),
                                        o.clearSelection(),
                                        t(a);
                                }),
                                    o.on('error', () => {
                                        const o = e.textContent;
                                        (e.textContent = 'Press Ctrl + C to copy'), t(o);
                                    });
                            },
                            showTab(e) {
                                ae({
                                    category: 'Setup',
                                    action: 'Tab clicked',
                                    label: `${this.$data.active}, ${e}`,
                                }),
                                    (this.$data.active = e);
                            },
                            showPreviousTab() {
                                ae({
                                    category: 'Setup',
                                    action: 'Back clicked',
                                    label: `${this.$data.active}, ${this.previousTab}`,
                                }),
                                    (this.$data.active = this.previousTab);
                            },
                            showNextTab() {
                                ae({
                                    category: 'Setup',
                                    action: 'Next clicked',
                                    label: `${this.$data.active}, ${this.nextTab}`,
                                }),
                                    (this.$data.active = this.nextTab);
                            },
                        },
                    },
                    mv = (0, ge.A)(hv, [['render', sf]]),
                    gv = mv,
                    fv = { class: 'footer' },
                    vv = { class: 'container' };
                function bv(e, t, o, a, s, l) {
                    const i = (0, $.g2)('ExternalLink');
                    return (
                        (0, $.uX)(),
                        (0, $.CE)('div', fv, [
                            (0, $.Lk)('div', vv, [
                                (0, $.Lk)('p', null, [
                                    (0, $.Lk)(
                                        'button',
                                        {
                                            type: 'button',
                                            class: 'button is-primary is-small',
                                            onClick:
                                                t[0] ||
                                                (t[0] = (...e) =>
                                                    l.handleScrollToTop &&
                                                    l.handleScrollToTop(...e)),
                                        },
                                        (0, L.v_)(e.$t('templates.footer.backToTop')),
                                        1,
                                    ),
                                ]),
                                (0, $.Lk)('p', null, [
                                    (0, $.eW)(
                                        (0, L.v_)(e.$t('templates.footer.thisToolIs')) + ' ',
                                        1,
                                    ),
                                    (0, $.bF)(
                                        i,
                                        {
                                            text: e.$t('templates.footer.openSourceOnGitHub'),
                                            link: 'https://github.com/digitalocean/nginxconfig.io',
                                        },
                                        null,
                                        8,
                                        ['text'],
                                    ),
                                    (0, $.eW)(
                                        ' ' + (0, L.v_)(e.$t('templates.footer.underThe')) + ' ',
                                        1,
                                    ),
                                    (0, $.bF)(
                                        i,
                                        {
                                            text: e.$t('templates.footer.mit'),
                                            link: 'https://github.com/digitalocean/nginxconfig.io/blob/master/LICENSE',
                                        },
                                        null,
                                        8,
                                        ['text'],
                                    ),
                                    (0, $.eW)(
                                        ' ' +
                                            (0, L.v_)(e.$t('templates.footer.license')) +
                                            ' ' +
                                            (0, L.v_)(
                                                e.$t(
                                                    'templates.footer.weWelcomeFeedbackAndContributions',
                                                ),
                                            ),
                                        1,
                                    ),
                                ]),
                                (0, $.Lk)('p', null, [
                                    (0, $.eW)(
                                        (0, L.v_)(e.$t('templates.footer.originallyCreatedBy')) +
                                            ' ',
                                        1,
                                    ),
                                    (0, $.bF)(
                                        i,
                                        {
                                            text: e.$t('templates.footer.balintSzekeres'),
                                            link: 'https://b4lint.hu/',
                                        },
                                        null,
                                        8,
                                        ['text'],
                                    ),
                                    (0, $.eW)(
                                        ' , ' +
                                            (0, L.v_)(e.$t('templates.footer.maintainedBy')) +
                                            ' ',
                                        1,
                                    ),
                                    (0, $.bF)(
                                        i,
                                        {
                                            text: e.$t('templates.footer.digitalOcean'),
                                            link: 'https://github.com/digitalocean/nginxconfig.io',
                                        },
                                        null,
                                        8,
                                        ['text'],
                                    ),
                                    (0, $.eW)(' . '),
                                ]),
                            ]),
                        ])
                    );
                }
                const kv = {
                        name: 'Footer',
                        components: { ExternalLink: _o.A },
                        methods: {
                            handleScrollToTop: () => {
                                window.scrollTo({ top: 0 }),
                                    document
                                        .querySelectorAll('.column-scroll-y')
                                        .forEach((e) => e.scrollTo({ top: 0 }));
                            },
                        },
                    },
                    yv = (0, ge.A)(kv, [['render', bv]]),
                    $v = yv,
                    Lv = ['innerHTML'],
                    Cv = ['innerHTML'];
                function xv(e, t, o, a, s, l) {
                    return (
                        (0, $.uX)(),
                        (0, $.CE)(
                            'div',
                            {
                                class: (0, L.C4)(
                                    `column ${o.half ? 'is-half' : 'is-full'} is-full-mobile is-full-tablet`,
                                ),
                                onCopied: t[0] || (t[0] = (...e) => l.copied && l.copied(...e)),
                            },
                            [
                                (0, $.Lk)('h3', { innerHTML: o.name }, null, 8, Lv),
                                (0, $.Lk)('pre', null, [
                                    (0, $.Lk)(
                                        'code',
                                        { class: 'language-nginx', innerHTML: o.conf },
                                        null,
                                        8,
                                        Cv,
                                    ),
                                ]),
                            ],
                            34,
                        )
                    );
                }
                const Sv = {
                        name: 'NginxPrism',
                        props: { name: String, conf: String, half: Boolean },
                        mounted() {
                            (0, n.pq)(`Highlighting ${this.$props.name}...`),
                                window.Prism.highlightAllUnder(this.$el);
                        },
                        methods: {
                            copied(e) {
                                this.$emit('copied', e.detail.text);
                            },
                        },
                    },
                    _v = (0, ge.A)(Sv, [['render', xv]]),
                    Ev = _v,
                    wv = {
                        name: 'App',
                        components: {
                            Header: U.A,
                            VueSelect: M.A,
                            Footer: $v,
                            Domain: ad,
                            Global: zg,
                            DropletCallout: Ig,
                            ContributeCallout: Jg,
                            Setup: gv,
                            NginxPrism: Ev,
                            YamlPrism: (0, $.$V)(() => o.e(664).then(o.bind(o, 8664))),
                            DockerPrism: (0, $.$V)(() => o.e(281).then(o.bind(o, 2281))),
                        },
                        data() {
                            return {
                                domains: [],
                                global: {
                                    ...zg.delegated,
                                    app: {
                                        lang: { default: c, value: c, computed: c, enabled: !0 },
                                    },
                                },
                                active: 0,
                                ready: !1,
                                splitColumn: !1,
                                confWatcherWaiting: !1,
                                confFilesPrevious: {},
                                confFilesOutput: [],
                                languageLoading: !1,
                                languagePrevious: c,
                                interactiveEvents: !1,
                            };
                        },
                        computed: {
                            activeDomains() {
                                return this.$data.domains
                                    .map((e, t) => [e, t])
                                    .filter((e) => null !== e[0]);
                            },
                            confFiles() {
                                return qd(
                                    this.$data.domains.filter((e) => null !== e),
                                    this.$data.global,
                                );
                            },
                            confFilesWithDirectory() {
                                return Object.entries(this.confFiles).reduce(
                                    (e, [t, o]) => ({
                                        ...e,
                                        [`${this.$data.global.nginx.nginxConfigDirectory.computed}/${t}`]:
                                            o,
                                    }),
                                    {},
                                );
                            },
                            lang: {
                                get() {
                                    return this.$data.global.app.lang.value;
                                },
                                set(e) {
                                    (this.$data.global.app.lang.value = e),
                                        (this.$data.global.app.lang.computed = e);
                                },
                            },
                            i18nPacks() {
                                return m.map((e) => ({
                                    label:
                                        this.$t(`languages.${e}`) +
                                        (e === this.$i18n.locale
                                            ? ''
                                            : ` - ${this.$t(`languages.${e}`, e)}`),
                                    value: e,
                                }));
                            },
                        },
                        watch: {
                            confFilesWithDirectory(e, t) {
                                this.$data.confWatcherWaiting ||
                                    ((this.$data.confWatcherWaiting = !0),
                                    (this.$data.confFilesPrevious = t),
                                    this.$nextTick(() => this.checkChange(e)));
                            },
                            '$data.global.app.lang': {
                                handler(e) {
                                    this.$data.languageLoading = !0;
                                    const t = this.$data.interactiveEvents;
                                    m.includes(e.value) || (e.computed = e.default),
                                        y(e.computed)
                                            .then(() => {
                                                (0, n.pq)('Language set to', e.computed),
                                                    (this.$data.languagePrevious = e.computed),
                                                    (this.$data.languageLoading = !1),
                                                    this.languageSetEvent(!t);
                                            })
                                            .catch((t) => {
                                                (0, n.z3)(
                                                    `Failed to set language to ${e.computed}`,
                                                    t,
                                                ),
                                                    (e.value = this.$data.languagePrevious),
                                                    (e.computed = this.$data.languagePrevious),
                                                    (this.$data.languageLoading = !1);
                                            });
                                },
                                deep: !0,
                            },
                        },
                        async mounted() {
                            const e = window.location.search || window.location.hash.slice(1),
                                t = await hd(
                                    e,
                                    this.$data.domains,
                                    this.$data.global,
                                    this.$nextTick,
                                );
                            if (!t || !t.global || !t.global.app || !t.global.app.lang) {
                                const e = md(m);
                                e && (this.lang = e);
                            }
                            this.splitColumnEvent(!0);
                            for (let o = 0; o < this.activeDomains.length; o++)
                                this.addSiteEvent(o + 1, !0);
                            this.$data.interactiveEvents = !0;
                        },
                        methods: {
                            changes(e) {
                                const t = this.$data.domains[e],
                                    o = Object.entries(t).reduce(
                                        (e, t) =>
                                            'presets' === t[0]
                                                ? e
                                                : sd(t[1])
                                                  ? ((e += Object.keys(t[1]).filter((e) =>
                                                        N(t[1][e], t[0], e),
                                                    ).length),
                                                    e)
                                                  : e,
                                        0,
                                    );
                                return o ? ` (${o.toLocaleString()})` : '';
                            },
                            warnings(e) {
                                return (
                                    (Object.prototype.hasOwnProperty.call(
                                        this.$refs,
                                        `domain-${e}`,
                                    ) &&
                                        this.$refs[`domain-${e}`][0].hasWarnings) ||
                                    !1
                                );
                            },
                            add() {
                                const e = j()(ad.delegated);
                                let t = 1;
                                while (
                                    this.$data.domains.some(
                                        (t) =>
                                            t &&
                                            t.server.domain.computed === e.server.domain.computed,
                                    )
                                )
                                    t++,
                                        (e.server.domain.computed = e.server.domain.default.replace(
                                            '.com',
                                            `${t}.com`,
                                        ));
                                (e.server.domain.value = e.server.domain.computed),
                                    this.$data.domains.push(e),
                                    (this.$data.active = this.$data.domains.length - 1),
                                    this.addSiteEvent(this.activeDomains.length);
                            },
                            remove(e) {
                                const t = this.$data.domains[e].server.domain.computed;
                                (this.$data.domains[e] = null),
                                    this.$data.active === e &&
                                        (this.$data.active = this.$data.domains.findIndex(
                                            (e) => null !== e,
                                        )),
                                    this.removeSiteEvent(this.activeDomains.length, t);
                            },
                            checkChange(e) {
                                if (e === this.confFilesWithDirectory)
                                    return (
                                        this.$data.ready ||
                                            ((this.$data.confFilesPrevious =
                                                this.confFilesWithDirectory),
                                            this.$nextTick(() => {
                                                this.$data.ready = !0;
                                            })),
                                        void this.updateDiff(
                                            this.confFilesWithDirectory,
                                            this.$data.confFilesPrevious,
                                        )
                                    );
                                this.$nextTick(() => this.checkChange(this.confFilesWithDirectory));
                            },
                            updateDiff(e, t) {
                                try {
                                    const o = (0, B.A)(e, t, {
                                        highlightFunction: (e) => `<mark>${e}</mark>`,
                                    });
                                    this.$data.confFilesOutput = Object.entries(o).map(
                                        ([e, { name: t, content: o }]) => {
                                            const a = t
                                                    .filter((e) => !e.removed)
                                                    .map((e) => e.value)
                                                    .join(''),
                                                s = o
                                                    .filter((e) => !e.removed)
                                                    .map((e) => e.value)
                                                    .join('');
                                            return [a, s, `${W()(a)}-${W()(s)}`, e];
                                        },
                                    );
                                } catch (o) {
                                    (0, n.z3)('Failed to compute and highlight diff', o),
                                        (this.$data.confFilesOutput = Object.entries(e).map(
                                            ([e, t]) => {
                                                const o = I()(e),
                                                    a = I()(t);
                                                return [o, a, `${W()(o)}-${W()(a)}`, e];
                                            },
                                        ));
                                }
                                this.$nextTick(() => (this.$data.confWatcherWaiting = !1));
                            },
                            splitColumnToggle() {
                                (this.$data.splitColumn = !this.$data.splitColumn),
                                    this.splitColumnEvent();
                            },
                            splitColumnEvent(e = !1) {
                                ae({
                                    category: 'Split column',
                                    action: this.$data.splitColumn ? 'Enabled' : 'Disabled',
                                    nonInteraction: e,
                                });
                            },
                            languageSetEvent(e = !1) {
                                ae({
                                    category: 'Language',
                                    action: 'Set',
                                    label: this.$data.global.app.lang.computed,
                                    nonInteraction: e,
                                });
                            },
                            addSiteEvent(e, t = !1) {
                                ae({
                                    category: 'Site',
                                    action: 'Added',
                                    value: e,
                                    nonInteraction: t,
                                });
                            },
                            removeSiteEvent(e, t) {
                                ae({ category: 'Site', action: 'Removed', label: t, value: e });
                            },
                            codeCopiedEvent(e) {
                                ae({
                                    category: 'Config files',
                                    action: 'Code snippet copied',
                                    label: e,
                                });
                            },
                            getPrismComponent(e) {
                                switch (e) {
                                    case '/etc/nginx/Dockerfile':
                                        return 'DockerPrism';
                                    case '/etc/nginx/docker-compose.yaml':
                                        return 'YamlPrism';
                                    default:
                                        return 'NginxPrism';
                                }
                            },
                        },
                    },
                    Pv = (0, ge.A)(wv, [['render', O]]),
                    Tv = Pv;
                b().then((e) => {
                    const t = (0, a.Ef)(Tv);
                    t.use(e), t.mount('#app');
                });
            },
            4555: (e, t, o) => {
                'use strict';
                o.d(t, { R8: () => s, pq: () => a, z3: () => l });
                const a = () => {},
                    s = console.warn.bind(console),
                    l = console.error.bind(console);
            },
        },
        t = {};
    function o(a) {
        var s = t[a];
        if (void 0 !== s) return s.exports;
        var l = (t[a] = { exports: {} });
        return e[a].call(l.exports, l, l.exports, o), l.exports;
    }
    (o.m = e),
        (() => {
            o.amdO = {};
        })(),
        (() => {
            var e = [];
            o.O = (t, a, s, l) => {
                if (!a) {
                    var i = 1 / 0;
                    for (p = 0; p < e.length; p++) {
                        for (var [a, s, l] = e[p], n = !0, d = 0; d < a.length; d++)
                            (!1 & l || i >= l) && Object.keys(o.O).every((e) => o.O[e](a[d]))
                                ? a.splice(d--, 1)
                                : ((n = !1), l < i && (i = l));
                        if (n) {
                            e.splice(p--, 1);
                            var r = s();
                            void 0 !== r && (t = r);
                        }
                    }
                    return t;
                }
                l = l || 0;
                for (var p = e.length; p > 0 && e[p - 1][2] > l; p--) e[p] = e[p - 1];
                e[p] = [a, s, l];
            };
        })(),
        (() => {
            o.n = (e) => {
                var t = e && e.__esModule ? () => e['default'] : () => e;
                return o.d(t, { a: t }), t;
            };
        })(),
        (() => {
            o.d = (e, t) => {
                for (var a in t)
                    o.o(t, a) &&
                        !o.o(e, a) &&
                        Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            };
        })(),
        (() => {
            (o.f = {}),
                (o.e = (e) =>
                    Promise.all(Object.keys(o.f).reduce((t, a) => (o.f[a](e, t), t), [])));
        })(),
        (() => {
            o.u = (e) => 'js/' + e + '.js';
        })(),
        (() => {
            o.miniCssF = (e) => 'css/app.css';
        })(),
        (() => {
            o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
        })(),
        (() => {
            var e = {},
                t = 'nginxconfig.io:';
            o.l = (a, s, l, i) => {
                if (e[a]) e[a].push(s);
                else {
                    var n, d;
                    if (void 0 !== l)
                        for (
                            var r = document.getElementsByTagName('script'), p = 0;
                            p < r.length;
                            p++
                        ) {
                            var c = r[p];
                            if (
                                c.getAttribute('src') == a ||
                                c.getAttribute('data-webpack') == t + l
                            ) {
                                n = c;
                                break;
                            }
                        }
                    n ||
                        ((d = !0),
                        (n = document.createElement('script')),
                        (n.charset = 'utf-8'),
                        (n.timeout = 120),
                        o.nc && n.setAttribute('nonce', o.nc),
                        n.setAttribute('data-webpack', t + l),
                        (n.src = a)),
                        (e[a] = [s]);
                    var u = (t, o) => {
                            (n.onerror = n.onload = null), clearTimeout(h);
                            var s = e[a];
                            if (
                                (delete e[a],
                                n.parentNode && n.parentNode.removeChild(n),
                                s && s.forEach((e) => e(o)),
                                t)
                            )
                                return t(o);
                        },
                        h = setTimeout(u.bind(null, void 0, { type: 'timeout', target: n }), 12e4);
                    (n.onerror = u.bind(null, n.onerror)),
                        (n.onload = u.bind(null, n.onload)),
                        d && document.head.appendChild(n);
                }
            };
        })(),
        (() => {
            o.r = (e) => {
                'undefined' !== typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                    Object.defineProperty(e, '__esModule', { value: !0 });
            };
        })(),
        (() => {
            o.p = '';
        })(),
        'undefined' !== typeof o &&
            Object.defineProperty(o, 'p', {
                get: function () {
                    try {
                        if ('function' !== typeof __webpackDynamicImportURL)
                            throw new Error(
                                "WebpackRequireFrom: '__webpackDynamicImportURL' is not a function or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting",
                            );
                        return __webpackDynamicImportURL();
                    } catch (e) {
                        return '';
                    }
                },
                set: function (e) {
                    console.warn(
                        'WebpackRequireFrom: something is trying to override webpack public path. Ignoring the new value' +
                            e +
                            '.',
                    );
                },
            }),
        (() => {
            var e = { 524: 0 };
            (o.f.j = (t, a) => {
                var s = o.o(e, t) ? e[t] : void 0;
                if (0 !== s)
                    if (s) a.push(s[2]);
                    else {
                        var l = new Promise((o, a) => (s = e[t] = [o, a]));
                        a.push((s[2] = l));
                        var i = o.p + o.u(t),
                            n = new Error(),
                            d = (a) => {
                                if (o.o(e, t) && ((s = e[t]), 0 !== s && (e[t] = void 0), s)) {
                                    var l = a && ('load' === a.type ? 'missing' : a.type),
                                        i = a && a.target && a.target.src;
                                    (n.message =
                                        'Loading chunk ' + t + ' failed.\n(' + l + ': ' + i + ')'),
                                        (n.name = 'ChunkLoadError'),
                                        (n.type = l),
                                        (n.request = i),
                                        s[1](n);
                                }
                            };
                        o.l(i, d, 'chunk-' + t, t);
                    }
            }),
                (o.O.j = (t) => 0 === e[t]);
            var t = (t, a) => {
                    var s,
                        l,
                        [i, n, d] = a,
                        r = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (s in n) o.o(n, s) && (o.m[s] = n[s]);
                        if (d) var p = d(o);
                    }
                    for (t && t(a); r < i.length; r++)
                        (l = i[r]), o.o(e, l) && e[l] && e[l][0](), (e[l] = 0);
                    return o.O(p);
                },
                a = (self['webpackChunknginxconfig_io'] = self['webpackChunknginxconfig_io'] || []);
            a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
        })(),
        o.O(void 0, [504], () => o(8884));
    var a = o.O(void 0, [504], () => o(9039));
    a = o.O(a);
})();
