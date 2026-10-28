/* GameForge shared tools: fancy-font name generator + click-to-copy */
(function () {
  var A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', a = 'abcdefghijklmnopqrstuvwxyz';
  var SMALL = 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ';
  var DS = { C: 'ℂ', H: 'ℍ', N: 'ℕ', P: 'ℙ', Q: 'ℚ', R: 'ℝ', Z: 'ℤ' };

  function range(U, L) {
    return function (t) {
      return Array.from(t).map(function (c) {
        var i = A.indexOf(c);
        if (i > -1) return String.fromCodePoint(U + i);
        var j = a.indexOf(c);
        if (j > -1) return String.fromCodePoint(L + j);
        return c;
      }).join('');
    };
  }

  var FONTS = {
    plain: function (t) { return t; },
    script: range(0x1D4D0, 0x1D4EA),
    fraktur: range(0x1D56C, 0x1D586),
    mono: range(0x1D670, 0x1D68A),
    sansbold: range(0x1D5D4, 0x1D5EE),
    bolditalic: range(0x1D468, 0x1D482),
    double: function (t) {
      return Array.from(t).map(function (c) {
        if (DS[c]) return DS[c];
        var i = A.indexOf(c);
        if (i > -1) return String.fromCodePoint(0x1D538 + i);
        var j = a.indexOf(c);
        if (j > -1) return String.fromCodePoint(0x1D552 + j);
        return c;
      }).join('');
    },
    wide: function (t) {
      return Array.from(t).map(function (c) {
        return (A.indexOf(c) > -1 || a.indexOf(c) > -1) ? String.fromCodePoint(c.charCodeAt(0) + 0xFEE0) : c;
      }).join('');
    },
    small: function (t) {
      return Array.from(t).map(function (c) {
        var i = a.indexOf(c.toLowerCase());
        return i > -1 ? SMALL.charAt(i) : c;
      }).join('');
    },
    circle: function (t) {
      return Array.from(t).map(function (c) {
        var i = A.indexOf(c);
        if (i > -1) return String.fromCodePoint(0x24B6 + i);
        var j = a.indexOf(c);
        if (j > -1) return String.fromCodePoint(0x24D0 + j);
        return c;
      }).join('');
    }    ,
    negcircle: function (t) {
      return Array.from(t).map(function (c) {
        var i = A.indexOf(c.toUpperCase());
        return (c.length === 1 && i > -1 && /[A-Za-z]/.test(c)) ? String.fromCodePoint(0x1F150 + i) : c;
      }).join('');
    },
    squared: function (t) {
      return Array.from(t).map(function (c) {
        var i = A.indexOf(c.toUpperCase());
        return (i > -1 && /[A-Za-z]/.test(c)) ? String.fromCodePoint(0x1F130 + i) : c;
      }).join('');
    },
    negsquared: function (t) {
      return Array.from(t).map(function (c) {
        var i = A.indexOf(c.toUpperCase());
        return (i > -1 && /[A-Za-z]/.test(c)) ? String.fromCodePoint(0x1F170 + i) : c;
      }).join('');
    },
    canadian: function (t) {
      var M = ['ᗩ','ᗷ','ᑕ','ᗪ','ᗴ','ᖴ','ᘜ','ᕼ','I','ᒍ','K','ᒪ','ᗰ','ᑎ','O','ᑭ','ᑫ','ᖇ','ᔕ','T','ᑌ','ᐯ','ᗯ','᙭','Y','ᘔ'];
      return Array.from(t).map(function (c) {
        var i = A.indexOf(c.toUpperCase());
        return (i > -1 && /[A-Za-z]/.test(c)) ? M[i] : c;
      }).join('');
    },
    currency: function (t) {
      var M = ['Ⱥ','Ƀ','₵','Đ','Ɇ','₣','₲','Ⱨ','ł','J','₭','Ⱡ','₥','₦','Ø','₱','Ꝗ','Ɽ','₴','₮','Ʉ','V','₩','Ӿ','Ɏ','Ƶ'];
      return Array.from(t).map(function (c) {
        var i = A.indexOf(c.toUpperCase());
        return (i > -1 && /[A-Za-z]/.test(c)) ? M[i] : c;
      }).join('');
    },
    superscript: function (t) {
      var U = 'ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᵠᴿˢᵀᵁⱽᵂˣʸᶻ', L = 'ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻ';
      return Array.from(t).map(function (c) {
        var i = A.indexOf(c);
        if (i > -1) return U.charAt(i);
        var j = a.indexOf(c);
        return j > -1 ? L.charAt(j) : c;
      }).join('');
    },
    flip: function (t) {
      if (/[^\x00-\x7F]/.test(t)) return t;
      var F = 'ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz';
      return Array.from(t.toLowerCase()).reverse().map(function (c) {
        var j = a.indexOf(c);
        return j > -1 ? F.charAt(j) : c;
      }).join('');
    },
    underline: function (t) {
      return Array.from(t).map(function (c) { return /[A-Za-z0-9]/.test(c) ? c + '\u0332' : c; }).join('');
    },
    strike: function (t) {
      return Array.from(t).map(function (c) { return /[A-Za-z0-9]/.test(c) ? c + '\u0336' : c; }).join('');
    },
    spaced: function (t) {
      return Array.from(t.replace(/\s+/g, ' ')).join(' ');
    },
    altcase: function (t) {
      var k = 0;
      return Array.from(t).map(function (c) {
        if (!/[A-Za-z]/.test(c)) return c;
        k++;
        return k % 2 ? c.toUpperCase() : c.toLowerCase();
      }).join('');
    }
  };

  function toast() {
    var el = document.getElementById('toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'toast';
      el.className = 'toast';
      document.body.appendChild(el);
    }
    el.textContent = 'কপি হয়েছে! ✓';
    el.style.display = 'block';
    clearTimeout(toast.t);
    toast.t = setTimeout(function () { el.style.display = 'none'; }, 1800);
  }

  function fallbackCopy(t) {
    var x = document.createElement('textarea');
    x.value = t;
    x.style.position = 'fixed';
    x.style.opacity = '0';
    document.body.appendChild(x);
    x.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(x);
    toast();
  }

  function copy(t) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(t).then(toast, function () { fallbackCopy(t); });
    } else {
      fallbackCopy(t);
    }
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('.gf-chip') : null;
    if (!t) return;
    var v = t.getAttribute('data-copy');
    copy(v !== null ? v : t.textContent.trim());
  });

  function mount(sel, o) {
    var root = document.querySelector(sel);
    if (!root) return;
    var inp = document.createElement('input');
    inp.type = 'text';
    inp.maxLength = 20;
    inp.className = 'input-box';
    inp.placeholder = o.placeholder || 'তোমার নাম লেখো (যেমন: Rion)';
    inp.value = o.def || 'Legend';
    inp.setAttribute('aria-label', 'তোমার নাম');
    var hint = document.createElement('p');
    hint.className = 'gf-hint';
    var out = document.createElement('div');
    out.className = 'grid-container';
    root.appendChild(inp);
    root.appendChild(hint);
    root.appendChild(out);

    var EXTRA = ['negcircle','squared','negsquared','canadian','currency','superscript','flip','underline','strike','spaced','altcase'];
    var fonts = o.fonts.concat(EXTRA.filter(function (k) { return o.fonts.indexOf(k) < 0; }));
    var LIMIT = 18, expanded = false;

    function run() {
      var raw = inp.value.trim() || o.def || 'Legend';
      hint.textContent = /[^\x00-\x7F]/.test(raw)
        ? 'টিপস: ফ্যান্সি ফন্ট শুধু ইংরেজি অক্ষরে কাজ করে। বাংলা অক্ষরে শুধু সিম্বল ফ্রেম বসবে।'
        : 'যেকোনো স্টাইলে ট্যাপ করলেই কপি হয়ে যাবে। সব স্টাইল সব গেমে চলে না, আগে টেস্ট করে নাও।';
      out.innerHTML = '';
      var seen = {}, items = [];
      fonts.forEach(function (f, i) {
        var n = FONTS[f](raw);
        [0, 4].forEach(function (k) {
          var s = o.frames[(i + k) % o.frames.length].split('{n}').join(n);
          if (seen[s]) return;
          seen[s] = 1;
          items.push(s);
        });
      });
      items.forEach(function (s, idx) {
        if (!expanded && idx >= LIMIT) return;
        var d = document.createElement('div');
        d.className = 'item-card gf-chip';
        d.textContent = s;
        out.appendChild(d);
      });
      if (!expanded && items.length > LIMIT) {
        var b = document.createElement('div');
        b.className = 'item-card gf-more';
        b.style.gridColumn = '1 / -1';
        b.style.color = '#3b82f6';
        b.textContent = 'আরও ' + (items.length - LIMIT) + 'টি স্টাইল দেখাও ▼';
        b.addEventListener('click', function () { expanded = true; run(); });
        out.appendChild(b);
      }
    }
    inp.addEventListener('input', run);
    run();
  }

  window.GFGen = { mount: mount, copy: copy, fonts: FONTS };
})();
