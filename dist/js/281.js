(self['webpackChunknginxconfig_io'] = self['webpackChunknginxconfig_io'] || []).push([
    [281],
    {
        568: () => {
            (function (e) {
                var n = /\\[\r\n](?:\s|\\[\r\n]|#.*(?!.))*(?![\s#]|\\[\r\n])/.source,
                    r = /(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)/.source.replace(
                        /<SP_BS>/g,
                        function () {
                            return n;
                        },
                    ),
                    o = /"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"|'(?:[^'\\\r\n]|\\(?:\r\n|[\s\S]))*'/
                        .source,
                    t = /--[\w-]+=(?:<STR>|(?!["'])(?:[^\s\\]|\\.)+)/.source.replace(
                        /<STR>/g,
                        function () {
                            return o;
                        },
                    ),
                    i = { pattern: RegExp(o), greedy: !0 },
                    s = { pattern: /(^[ \t]*)#.*/m, lookbehind: !0, greedy: !0 };
                function l(e, n) {
                    return (
                        (e = e
                            .replace(/<OPT>/g, function () {
                                return t;
                            })
                            .replace(/<SP>/g, function () {
                                return r;
                            })),
                        RegExp(e, n)
                    );
                }
                (e.languages.docker = {
                    instruction: {
                        pattern:
                            /(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            options: {
                                pattern: l(
                                    /(^(?:ONBUILD<SP>)?\w+<SP>)<OPT>(?:<SP><OPT>)*/.source,
                                    'i',
                                ),
                                lookbehind: !0,
                                greedy: !0,
                                inside: {
                                    property: { pattern: /(^|\s)--[\w-]+/, lookbehind: !0 },
                                    string: [
                                        i,
                                        { pattern: /(=)(?!["'])(?:[^\s\\]|\\.)+/, lookbehind: !0 },
                                    ],
                                    operator: /\\$/m,
                                    punctuation: /=/,
                                },
                            },
                            keyword: [
                                {
                                    pattern: l(
                                        /(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\b/
                                            .source,
                                        'i',
                                    ),
                                    lookbehind: !0,
                                    greedy: !0,
                                },
                                {
                                    pattern: l(
                                        /(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\]+<SP>)AS/
                                            .source,
                                        'i',
                                    ),
                                    lookbehind: !0,
                                    greedy: !0,
                                },
                                {
                                    pattern: l(/(^ONBUILD<SP>)\w+/.source, 'i'),
                                    lookbehind: !0,
                                    greedy: !0,
                                },
                                { pattern: /^\w+/, greedy: !0 },
                            ],
                            comment: s,
                            string: i,
                            variable: /\$(?:\w+|\{[^{}"'\\]*\})/,
                            operator: /\\$/m,
                        },
                    },
                    comment: s,
                }),
                    (e.languages.dockerfile = e.languages.docker);
            })(Prism);
        },
        2281: (e, n, r) => {
            'use strict';
            r.r(n), r.d(n, { default: () => p });
            var o = r(641),
                t = r(33);
            const i = ['innerHTML'],
                s = ['innerHTML'];
            function l(e, n, r, l, a, c) {
                return (
                    (0, o.uX)(),
                    (0, o.CE)(
                        'div',
                        {
                            class: (0, t.C4)(
                                `column ${r.half ? 'is-half' : 'is-full'} is-full-mobile is-full-tablet`,
                            ),
                            onCopied: n[0] || (n[0] = (...e) => c.copied && c.copied(...e)),
                        },
                        [
                            (0, o.Lk)('h3', { innerHTML: r.name }, null, 8, i),
                            (0, o.Lk)('pre', null, [
                                (0, o.Lk)(
                                    'code',
                                    { class: 'language-docker', innerHTML: r.conf },
                                    null,
                                    8,
                                    s,
                                ),
                            ]),
                        ],
                        34,
                    )
                );
            }
            r(568);
            var a = r(4555);
            const c = {
                name: 'DockerPrism',
                props: { name: String, conf: String, half: Boolean },
                mounted() {
                    (0, a.pq)(`Highlighting ${this.$props.name}...`),
                        window.Prism.highlightAllUnder(this.$el);
                },
                methods: {
                    copied(e) {
                        this.$emit('copied', e.detail.text);
                    },
                },
            };
            var u = r(6262);
            const d = (0, u.A)(c, [['render', l]]),
                p = d;
        },
    },
]);
