function _0x215c(_0x11c870, _0x2120cd) {
    const _0x85e9de = _0x85e9();
    return _0x215c = function (_0x215c1a, _0x21f7a7) {
        _0x215c1a = _0x215c1a - 0x162;
        let _0x3d6a01 = _0x85e9de[_0x215c1a];
        return _0x3d6a01;
    }, _0x215c(_0x11c870, _0x2120cd);
}
const _0x14328c = _0x215c;
(function (_0x4fadd9, _0xa4c499) {
    const _0x5d5556 = _0x215c,
        _0x29b820 = _0x4fadd9();
    while (!![]) {
        try {
            const _0x445d7a = -parseInt(_0x5d5556(0x162)) / 0x1 * (parseInt(_0x5d5556(0x16d)) / 0x2) + parseInt(_0x5d5556(0x17b)) / 0x3 + -parseInt(_0x5d5556(0x19f)) / 0x4 * (parseInt(_0x5d5556(0x167)) / 0x5) + -parseInt(_0x5d5556(0x175)) / 0x6 + parseInt(_0x5d5556(0x19e)) / 0x7 + parseInt(_0x5d5556(0x166)) / 0x8 + parseInt(_0x5d5556(0x185)) / 0x9 * (parseInt(_0x5d5556(0x17f)) / 0xa);
            if (_0x445d7a === _0xa4c499) break;
            else _0x29b820['push'](_0x29b820['shift']());
        } catch (_0x298a6e) {
            _0x29b820['push'](_0x29b820['shift']());
        }
    }
}(_0x85e9, 0xb503a));
import _0x428f93 from 'mongoose';

function _0x85e9() {
    const _0x423a38 = [' - ', 'findOneAndUpdate', '3136280EXOZBG', '2167720emPDgT', 'هذا الأمر يعمل فقط مع الإداريين', 'deleteOne', '┇عـدد الألقـاب المـسـجـلـة: ', '┇ اللقب ', 'deletedCount', '230WyKjWM', 'مثال:\x0a .تسجيل @العضو جيرايا', 'error', 'لقبي', 'Error fetching user\'s nickname:', ' لا يـوجـد ألـقـاب مـسـجـلـة حـالـيـا ┇', ' بنجاح ', ' اللقب ', '4473576EDrWVt', 'اكتب اللقب الذي تريد حذفه', 'sender', 'حذف_لقب', 'log', 'connect', '2318970TTFXZs', 'findOne', ' بنجاح', 'تسجيل', '10KvAvqE', 'حدث خطأ أثناء جلب لقبك', 'mentionedJid', '@s.whatsapp.net', 'find', 'userId', '18942543fFhIuh', 'Connected to MongoDB', 'model', 'length', '┇ تم حذف اللقب ', 'الألقاب', 'chat', '\x0a\x0a ┇الألقـاب المـسـجـلـة:\x0a\x0a', 'slice', ' ماخوذ من طرف @', 'isGroup', ' متوفر', 'bk9', 'then', 'خطأ', 'reply', 'trim', 'split', 'getName', 'لقب', 'mongodb+srv://itachi3mk:mypassis1199@cluster0.zzyxjo3.mongodb.net/?retryWrites=true&w=majority', ' غير مسجل لاحد اساسا', 'منشن احد', 'هذا الأمر يعمل فقط في المجموعات', 'لقبه', '5604340zhoxLp', '12BAnEMC', 'Schema', 'replace', '11154qRQQko', 'catch'];
    _0x85e9 = function () {
        return _0x423a38;
    };
    return _0x85e9();
}
const uri = _0x14328c(0x199);
_0x428f93[_0x14328c(0x17a)](uri, {
    'useNewUrlParser': !![],
    'useUnifiedTopology': !![]
})[_0x14328c(0x192)](() => console[_0x14328c(0x179)](_0x14328c(0x186)))[_0x14328c(0x163)](_0x46bc2f => console['error']('Error connecting to MongoDB:', _0x46bc2f));
const bk9Schema = new _0x428f93[(_0x14328c(0x1a0))]({
        'groupId': String,
        'userId': String,
        'bk9': String
    }),
    BK9 = _0x428f93[_0x14328c(0x187)]('BK9', bk9Schema);
let handler = async function (_0x2937c8, {
    conn: _0x3407a1,
    text: _0x42cb88,
    command: _0x1ac1d4,
    isAdmin: _0x2b2ca3
}) {
    const _0x1da810 = _0x14328c;
    try {
        if (_0x1ac1d4 === _0x1da810(0x18a)) {
            if (!_0x2937c8[_0x1da810(0x18f)]) {
                _0x2937c8[_0x1da810(0x194)](_0x1da810(0x19c));
                return;
            }
            if (!_0x2b2ca3) {
                _0x2937c8[_0x1da810(0x194)](_0x1da810(0x168));
                return;
            }
            const _0x44f6aa = await BK9[_0x1da810(0x183)]({
                'groupId': _0x2937c8['chat']
            });
            if (_0x44f6aa[_0x1da810(0x188)] === 0x0) _0x2937c8[_0x1da810(0x194)](_0x1da810(0x172));
            else {
                let _0x571f14 = '';
                _0x44f6aa['forEach']((_0x1d5ccf, _0x381009) => {
                    const _0x142156 = _0x1da810;
                    _0x571f14 += _0x381009 + 0x1 + _0x142156(0x164) + _0x1d5ccf[_0x142156(0x191)] + '\x0a';
                }), _0x2937c8[_0x1da810(0x194)](_0x1da810(0x16a) + _0x44f6aa[_0x1da810(0x188)] + _0x1da810(0x18c) + _0x571f14);
            }
        } else {
            if (_0x1ac1d4 === _0x1da810(0x17e)) {
                if (!_0x2937c8['isGroup']) {
                    _0x2937c8[_0x1da810(0x194)](_0x1da810(0x19c));
                    return;
                }
                if (!_0x2b2ca3) {
                    _0x2937c8[_0x1da810(0x194)](_0x1da810(0x168));
                    return;
                }
                if (!_0x2937c8['mentionedJid'] || !_0x42cb88 || _0x42cb88[_0x1da810(0x195)]() === '') {
                    _0x2937c8[_0x1da810(0x194)](_0x1da810(0x16e));
                    return;
                }
                const _0x29b1fb = _0x2937c8[_0x1da810(0x181)][0x0][_0x1da810(0x1a1)](_0x1da810(0x182), ''),
                    _0xd54b9e = _0x42cb88[_0x1da810(0x195)]()[_0x1da810(0x196)](' ')[_0x1da810(0x18d)](0x1)['filter'](_0x413500 => _0x413500[_0x1da810(0x195)]() !== ''),
                    _0x4d48ec = _0xd54b9e['join'](' ');
                if (!/\S/ ['test'](_0x4d48ec)) {
                    _0x2937c8[_0x1da810(0x194)]('مثال:\x0a .تسجيل @العضو جيرايا');
                    return;
                }
                const _0x53f1f3 = await BK9[_0x1da810(0x17c)]({
                    'bk9': _0x4d48ec,
                    'groupId': _0x2937c8[_0x1da810(0x18b)]
                });
                if (_0x53f1f3) {
                    const _0x4f3847 = await _0x3407a1[_0x1da810(0x197)](_0x53f1f3[_0x1da810(0x184)] + _0x1da810(0x182));
                    _0x2937c8[_0x1da810(0x194)](_0x1da810(0x16b) + _0x4d48ec + _0x1da810(0x18e) + _0x4f3847);
                } else await BK9[_0x1da810(0x165)]({
                    'userId': _0x29b1fb,
                    'groupId': _0x2937c8[_0x1da810(0x18b)]
                }, {
                    'bk9': _0x4d48ec
                }, {
                    'upsert': !![]
                }), _0x2937c8[_0x1da810(0x194)]('┇ تم تسجيله بلقب ' + _0x4d48ec + _0x1da810(0x173));
            } else {
                if (_0x1ac1d4 === _0x1da810(0x178)) {
                    if (!_0x2937c8[_0x1da810(0x18f)]) {
                        _0x2937c8['reply']('هذا الأمر يعمل فقط في المجموعات');
                        return;
                    }
                    if (!_0x2b2ca3) {
                        _0x2937c8[_0x1da810(0x194)](_0x1da810(0x168));
                        return;
                    }
                    if (!_0x42cb88 || _0x42cb88[_0x1da810(0x195)]() === '') {
                        _0x2937c8['reply'](_0x1da810(0x176));
                        return;
                    }
                    const _0x414234 = _0x42cb88[_0x1da810(0x195)](),
                        _0xda9359 = await BK9[_0x1da810(0x169)]({
                            'bk9': _0x414234,
                            'groupId': _0x2937c8[_0x1da810(0x18b)]
                        });
                    _0xda9359[_0x1da810(0x16c)] > 0x0 ? _0x2937c8['reply'](_0x1da810(0x189) + _0x414234 + _0x1da810(0x17d)) : _0x2937c8[_0x1da810(0x194)](_0x1da810(0x174) + _0x414234 + _0x1da810(0x19a));
                } else {
                    if (_0x1ac1d4 === 'لقبي') try {
                        const _0x4967b1 = _0x2937c8[_0x1da810(0x177)][_0x1da810(0x196)]('@')[0x0],
                            _0x3a7317 = await BK9[_0x1da810(0x17c)]({
                                'userId': _0x4967b1,
                                'groupId': _0x2937c8[_0x1da810(0x18b)]
                            });
                        _0x3a7317 && _0x3a7317['bk9'] ? _0x2937c8[_0x1da810(0x194)]('┇ لقبك هو : ' + _0x3a7317['bk9']) : _0x2937c8[_0x1da810(0x194)]('┇ لم يتم تسجيلك بعد');
                    } catch (_0x203760) {
                        console[_0x1da810(0x16f)](_0x1da810(0x171), _0x203760), _0x2937c8[_0x1da810(0x194)](_0x1da810(0x180));
                    } else {
                        if (_0x1ac1d4 === _0x1da810(0x19d) && _0x2937c8[_0x1da810(0x181)]) {
                            if (!_0x2937c8['mentionedJid'] || _0x2937c8[_0x1da810(0x181)][_0x1da810(0x188)] === 0x0) {
                                _0x2937c8[_0x1da810(0x194)](_0x1da810(0x19b));
                                return;
                            }
                            const _0x32a957 = _0x2937c8['mentionedJid'][0x0][_0x1da810(0x1a1)]('@s.whatsapp.net', ''),
                                _0x39f918 = await BK9[_0x1da810(0x17c)]({
                                    'userId': _0x32a957,
                                    'groupId': _0x2937c8[_0x1da810(0x18b)]
                                });
                            if (_0x39f918) {
                                const _0x20a473 = await _0x3407a1[_0x1da810(0x197)](_0x32a957 + _0x1da810(0x182));
                                _0x2937c8['reply']('┇ لقبه هو : ' + _0x39f918[_0x1da810(0x191)]);
                            } else _0x2937c8[_0x1da810(0x194)]('┇ لم يتم تسجيله بعد');
                        } else {
                            if (_0x1ac1d4 === _0x1da810(0x198)) {
                                if (!_0x42cb88 || _0x42cb88[_0x1da810(0x195)]() === '') {
                                    _0x2937c8[_0x1da810(0x194)]('اكتب لقب للتحقق منه');
                                    return;
                                }
                                const _0xdc60ae = _0x42cb88['trim'](),
                                    _0x2bbc47 = await BK9['findOne']({
                                        'bk9': _0xdc60ae,
                                        'groupId': _0x2937c8[_0x1da810(0x18b)]
                                    });
                                if (_0x2bbc47) {
                                    const _0x4ccfe0 = await _0x3407a1[_0x1da810(0x197)](_0x2bbc47['userId']['split']('@')[0x0]);
                                    _0x2937c8['reply'](_0x1da810(0x16b) + _0xdc60ae + ' ماخوذ من طرف ' + _0x4ccfe0);
                                } else _0x2937c8['reply'](_0x1da810(0x16b) + _0xdc60ae + _0x1da810(0x190));
                            } else {}
                        }
                    }
                }
            }
        }
    } catch (_0x2dd35e) {
        console[_0x1da810(0x16f)](_0x1da810(0x193), _0x2dd35e);
    }
};
handler['command'] = [_0x14328c(0x18a), 'تسجيل', _0x14328c(0x170), _0x14328c(0x19d), _0x14328c(0x178), _0x14328c(0x198)], handler['tags'] = ['BK9'];
export default handler;
