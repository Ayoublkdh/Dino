let timeout = 0xea60,
    poin = 0x1387,
    handler = async (_0x44a1fa, {
        conn: _0xd216c8,
        command: _0x5d60f8,
        usedPrefix: _0xfa5a72
    }) => {
        _0xd216c8['tebakbendera'] = _0xd216c8['tebakbendera'] ? _0xd216c8['tebakbendera'] : {};
        let _0x1062f3 = _0x44a1fa['chat'];
        if (_0x1062f3 in _0xd216c8['tebakbendera']) {
            _0xd216c8['reply'](_0x44a1fa['chat'], 'في سؤال عشان تبقا عارف', _0xd216c8['tebakbendera'][_0x1062f3][0x0]);
            throw ![];
        }
        let _0xf5e749 = await (await fetch('https://raw.githubusercontent.com/Xov445447533/Xov11111/master/src/Aesthetic/venom.json'))['json'](),
            _0xf98852 = _0xf5e749[Math['floor'](Math['random']() * _0xf5e749['length'])],
            _0x4e9011 = ('*' + _0x5d60f8['toUpperCase']() + '*\x0a  المده *' + (timeout / 0x3e8)['toFixed'](0x2) + '* ثانيه\x0a  استخدم ' + _0xfa5a72 + 'استسلم للاستسلام\x0a  الجائزه: ' + poin + ' XP\x0a{global.venomXov}$')['trim']();
        _0xd216c8['tebakbendera'][_0x1062f3] = [await _0xd216c8['sendFile'](_0x44a1fa['chat'], _0xf98852['img'], '', _0x4e9011, _0x44a1fa), _0xf98852, poin, setTimeout(() => {
            if (_0xd216c8['tebakbendera'][_0x1062f3]) _0xd216c8['reply'](_0x44a1fa['chat'], 'الوقت خلص!\x0aالاجابه هي *' + _0xf98852['name'] + '*', _0xd216c8['tebakbendera'][_0x1062f3][0x0]);
            delete _0xd216c8['tebakbendera'][_0x1062f3];
        }, timeout)];
    };
handler['help'] = ['عينو'], handler['tags'] = ['game'], handler['command'] = ['عينو'];
export default handler;
