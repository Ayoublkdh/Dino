global.rpg = {
	
  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }
    
    const role = [
      { name: "تلميذ🥋", level: 0 }, { name: "جنين🎑", level: 4 }, 
      { name: "قرصان🎴", level: 8 }, { name: "نينجا⚔️", level: 12 }, 
      { name: "ساحر🌟", level: 16 }, { name: "العملاق🌫️", level: 20 }, 
      { name: "ملك👑", level: 24 }, { name: "خارق🍥", level: 28 }, 
      { name: "هاشيرا🔥", level: 32 }, { name: "شرير😈", level: 36 },
      { name: "اقوي شرينجان👀💥", level: 48 }, { name: "شيطان🥀", level: 52 }, 
      { name: "ملك القوي🎯", level: 56 }, { name: "هوكاجي⛰️", level: 60 }, 
      { name: "اوتاكو ماكس🎉", level: 100 }
    ];

    return role.reverse().find(role => level >= role.level)
  }
      }
  