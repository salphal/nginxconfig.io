(self['webpackChunknginxconfig_io'] = self['webpackChunknginxconfig_io'] || []).push([
    [664],
    {
        83: () => {
            (function (e) {
                var n = /[*&][^\s[\]{},]+/,
                    r =
                        /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
                    t =
                        '(?:' +
                        r.source +
                        '(?:[ \t]+' +
                        n.source +
                        ')?|' +
                        n.source +
                        '(?:[ \t]+' +
                        r.source +
                        ')?)',
                    o =
                        /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
                            /<PLAIN>/g,
                            function () {
                                return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
                                    .source;
                            },
                        ),
                    a = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
                function i(e, n) {
                    n = (n || '').replace(/m/g, '') + 'm';
                    var r =
                        /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
                            .replace(/<<prop>>/g, function () {
                                return t;
                            })
                            .replace(/<<value>>/g, function () {
                                return e;
                            });
                    return RegExp(r, n);
                }
                (e.languages.yaml = {
                    scalar: {
                        pattern: RegExp(
                            /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                                /<<prop>>/g,
                                function () {
                                    return t;
                                },
                            ),
                        ),
                        lookbehind: !0,
                        alias: 'string',
                    },
                    comment: /#.*/,
                    key: {
                        pattern: RegExp(
                            /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                                .replace(/<<prop>>/g, function () {
                                    return t;
                                })
                                .replace(/<<key>>/g, function () {
                                    return '(?:' + o + '|' + a + ')';
                                }),
                        ),
                        lookbehind: !0,
                        greedy: !0,
                        alias: 'atrule',
                    },
                    directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: 'important' },
                    datetime: {
                        pattern: i(
                            /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                                .source,
                        ),
                        lookbehind: !0,
                        alias: 'number',
                    },
                    boolean: {
                        pattern: i(/false|true/.source, 'i'),
                        lookbehind: !0,
                        alias: 'important',
                    },
                    null: { pattern: i(/null|~/.source, 'i'), lookbehind: !0, alias: 'important' },
                    string: { pattern: i(a), lookbehind: !0, greedy: !0 },
                    number: {
                        pattern: i(
                            /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
                                .source,
                            'i',
                        ),
                        lookbehind: !0,
                    },
                    tag: r,
                    important: n,
                    punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
                }),
                    (e.languages.yml = e.languages.yaml);
            })(Prism);
        },
        8664: (e, n, r) => {
            'use strict';
            r.r(n), r.d(n, { default: () => f });
            var t = r(641),
                o = r(33);
            const a = ['innerHTML'],
                i = ['innerHTML'];
            function l(e, n, r, l, u, s) {
                return (
                    (0, t.uX)(),
                    (0, t.CE)(
                        'div',
                        {
                            class: (0, o.C4)(
                                `column ${r.half ? 'is-half' : 'is-full'} is-full-mobile is-full-tablet`,
                            ),
                            onCopied: n[0] || (n[0] = (...e) => s.copied && s.copied(...e)),
                        },
                        [
                            (0, t.Lk)('h3', { innerHTML: r.name }, null, 8, a),
                            (0, t.Lk)('pre', null, [
                                (0, t.Lk)(
                                    'code',
                                    { class: 'language-yaml', innerHTML: r.conf },
                                    null,
                                    8,
                                    i,
                                ),
                            ]),
                        ],
                        34,
                    )
                );
            }
            r(83);
            var u = r(4555);
            const s = {
                name: 'YamlPrism',
                props: { name: String, conf: String, half: Boolean },
                mounted() {
                    (0, u.pq)(`Highlighting ${this.$props.name}...`),
                        window.Prism.highlightAllUnder(this.$el);
                },
                methods: {
                    copied(e) {
                        this.$emit('copied', e.detail.text);
                    },
                },
            };
            var d = r(6262);
            const c = (0, d.A)(s, [['render', l]]),
                f = c;
        },
    },
]);
