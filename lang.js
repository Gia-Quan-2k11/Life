/* ============================================================
   🌐 File: lang.js
   📜 Mục đích: Quản lý đa ngôn ngữ (Việt / English / Français)
   🧠 Ghi chú:
   - Dễ đọc, có comment, không nén.
   - Tự lưu ngôn ngữ đã chọn vào localStorage.
   - Dịch tức thì, không reload.
   ============================================================ */

// --- Biến lưu trữ ngôn ngữ hiện tại ---
let currentLang = 'vi';

/* ------------------------------------------------------------
   🎯 BỘ DỊCH: translations
   - Mỗi khóa là ngôn ngữ (vi, en, fr)
   - Mỗi ngôn ngữ chứa các cặp key: text dịch
   ------------------------------------------------------------ */
const translations = {
  vi: {
    // --- Giao diện ---
    title: "Triết Lý Cuộc Sống",
    subtitle: "Third edition - Online edition",
    lang_label: "🌐 Ngôn ngữ:",
    scroll_top_title: "Lên đầu",
    goto_rule_title: "Đến quy tắc",
    random_rule_title: "Ngẫu nhiên",
    credit_authors_heading: "I. Tác Giả",
    credit_refs_heading: "II. Tham khảo",
    credit_site_heading: "III. Làm trang web",
    donate_title: "Ủng Hộ",
    donate_desc: "Nếu các bạn thích web và mô hình thì hãy ủng hộ mình. Số tiền qua được ủng hộ sẽ được sử dụng để động viên cá nhân và làm vốn cho các dự án sau này.",
    donate_type: "Tiền ảo:",
    crypto_btc: "Bitcoin (BTC)",
    crypto_eth: "Ethereum (ETH)",
    crypto_vrsc: "Verus Coin (VRSC)",
    account_label: "Địa chỉ tài khoản:",
    qr_label: "Hoặc quét mã QR để sao chép địa chỉ tài khoản:",
    qr_alt: "Mã QR ủng hộ",
    copyright: "© 2025 Lưu Gia Quân",

    // --- Triết lý (1–62) ---
    rule_1: "Không Tham Sân Si",
    rule_2: "Là người thì không thể tránh khỏi Sinh Lão Bệnh Tử",
    rule_3: "Không có gì là miễn phí",
    rule_4: "Làm gì cũng cần có thời gian",
    rule_5: "Sống thì phải bình đẳng",
    rule_6: "Không có gì là hoàn hảo",
    rule_7: "Cố gắng phát triển bản thân qua từng ngày",
    rule_8: "Mọi thứ đều có nhân quả",
    rule_9: "Hãy tha thứ và biết ơn nếu có thể",
    rule_10: "Tiền bạc chỉ là phù du",
    rule_11: "Tiền không mua được mọi thứ nhưng mua được hầu hết mọi thứ",
    rule_12: "Ôn hòa khi tức giận",
    rule_13: "Bình tĩnh, sáng suốt lúc gian nan",
    rule_14: "Nhà là nơi trở về lúc khó khăn",
    rule_15: "Không ăn hiếp nữ nhi",
    rule_16: "Không ăn hiếp nam nhân",
    rule_17: "Tình yêu đích thực chỉ xuất phát từ trái tim",
    rule_18: "Có duyên thì mới gặp nhau",
    rule_19: "Trong tình yêu thì tuổi tác không quan trọng",
    rule_20: "Đời nào chẳng phải trải qua khó khăn",
    rule_21: "Cuộc sống sẽ không bế tắc nếu bạn có niềm tin",
    rule_22: "Kiên trì, siêng năng, vượt khó",
    rule_23: "Kỷ luật bản thân là bàn đạp cho sự thành công",
    rule_24: "Số phận là do trời định sẵn, không thể thay đổi được",
    rule_25: "Tương lai là do mình quyết định",
    rule_26: "Thông minh có hạn nhưng thủ đoạn vô biên",
    rule_27: "Rộng lòng từ bi cho những người gặp khó khăn",
    rule_28: "Vừa có đức, có tài thì mới là người thành công",
    rule_29: "Cuộc sống thì không phải lúc nào cũng theo ý mình",
    rule_30: "Không làm người thứ ba trong cuộc tình đôi lứa",
    rule_31: "Không nghĩ về lợi ích của bản thân mà bỏ mặc người khác",
    rule_32: "Lúa chín cúi đầu",
    rule_33: "Cánh cửa này đóng thì cánh cửa khác sẽ mở ra",
    rule_34: "Những điều vui nào chẳng phải kết thúc",
    rule_35: "Thứ gì nhiều quá cũng không tốt",
    rule_36: "Sau cơn mưa thì mới có cầu vồng",
    rule_37: "Trong cuộc sống, có nhiều thứ hơn là sắc tướng và vật chất",
    rule_38: "Chú trọng vào hiện tại để phát triển bản thân thay vì đắm chìm vào quá khứ",
    rule_39: "Không có gì là vĩnh viễn",
    rule_40: "Hãy trân trọng từng giây của cuộc sống",
    rule_41: "Thế giới này không có bình đẳng, chỉ dựa vào sức lực của bản thân",
    rule_42: "Công bằng hơn bình đẳng",
    rule_43: "Không tà dâm",
    rule_44: "Đừng chỉ nói mà hãy hành động",
    rule_45: "Cong một chút cũng không sao",
    rule_46: "Thời gian không chờ một ai",
    rule_47: "Đôi khi tâm trí chúng ta cũng cần những cơn mưa",
    rule_48: "Đôi khi sai lầm là người thầy tốt nhất",
    rule_49: "Ngắt kết nối để tái kết nối",
    rule_50: "Không có nghề nghiệp nào là thấp kém",
    rule_51: "Ngày mai, cứ để mai lo. Ngày nào có cái khổ của ngày ấy",
    rule_52: "Có khi nhẫn để bình an",
    rule_53: "Có khi nhẫn để thênh thang cõi lòng",
    rule_54: "Đôi khi chúng ta cần phải hi sinh để giúp người khác",
    rule_55: "Đôi khi chúng ta cần thiết là tâm phải tĩnh",
    rule_56: "Quá khứ là hành trang của tương lai",
    rule_57: "Không tệ nạn",
    rule_58: "Hãy biết điều khiển 7 cảm xúc cơ bản của con người: hỷ, nộ, ái, ố, lạc, dục",
    rule_59: "Hãy vươn tay đón nhận tương lai",
    rule_60: "Tuổi thơ là thứ chỉ có một lần nên hãy trân trọng nó",
    rule_61: "Thay vì chạy theo những bề bộn bên ngoài, sao ta không tự quan tâm bản thân hơn?",
    rule_62: "Điểm số không nói lên tất cả",
  },

  // ==========================================================
  // 🇺🇸 English (US)
  // ==========================================================
  en: {
    title: "Philosophy of Life",
    subtitle: "Third edition - Online version",
    lang_label: "🌐 Language:",
    scroll_top_title: "Scroll to top",
    goto_rule_title: "Go to rule",
    random_rule_title: "Random rule",
    credit_authors_heading: "I. Authors",
    credit_refs_heading: "II. References",
    credit_site_heading: "III. Website creation",
    donate_title: "Support",
    donate_desc: "If you like this website and project, please consider supporting me. The donations will be used for encouragement and to fund future projects.",
    donate_type: "Cryptocurrency:",
    crypto_btc: "Bitcoin (BTC)",
    crypto_eth: "Ethereum (ETH)",
    crypto_vrsc: "Verus Coin (VRSC)",
    account_label: "Wallet address:",
    qr_label: "Or scan the QR code to copy the address:",
    qr_alt: "Donation QR code",
    copyright: "© 2025 Luu Gia Quan",

    // --- Philosophy rules (literal translation) ---
    rule_1: "Do not be greedy, angry, or deluded",
    rule_2: "As humans, we cannot avoid birth, aging, sickness, and death",
    rule_3: "Nothing is free",
    rule_4: "Everything takes time",
    rule_5: "Life should be equal",
    rule_6: "Nothing is perfect",
    rule_7: "Strive to improve yourself each day",
    rule_8: "Everything has cause and effect",
    rule_9: "Forgive and be grateful if possible",
    rule_10: "Money is only illusionary",
    rule_11: "Money can’t buy everything but can buy almost everything",
    rule_12: "Be gentle when angry",
    rule_13: "Be calm and clear-minded in hard times",
    rule_14: "Home is where you return when facing difficulties",
    rule_15: "Do not bully women",
    rule_16: "Do not bully men",
    rule_17: "True love comes from the heart",
    rule_18: "We meet each other because of fate",
    rule_19: "In love, age does not matter",
    rule_20: "Every life faces hardships",
    rule_21: "Life is never hopeless if you have faith",
    rule_22: "Persevere, work hard, overcome difficulties",
    rule_23: "Self-discipline is the foundation of success",
    rule_24: "Fate is predetermined by heaven, unchangeable",
    rule_25: "The future is decided by yourself",
    rule_26: "Wisdom is limited, but schemes are infinite",
    rule_27: "Show compassion to those in difficulty",
    rule_28: "Only those with both virtue and talent are truly successful",
    rule_29: "Life does not always go as we wish",
    rule_30: "Do not be a third person in another’s love",
    rule_31: "Do not abandon others for your own benefit",
    rule_32: "Ripe rice bows its head",
    rule_33: "When one door closes, another opens",
    rule_34: "All joys eventually end",
    rule_35: "Too much of anything is bad",
    rule_36: "After the rain comes the rainbow",
    rule_37: "Life is more than appearance and material things",
    rule_38: "Focus on the present to grow instead of clinging to the past",
    rule_39: "Nothing lasts forever",
    rule_40: "Treasure every second of life",
    rule_41: "The world is not equal; rely on your own strength",
    rule_42: "Fairness is better than equality",
    rule_43: "Do not commit adultery",
    rule_44: "Don’t just talk, take action",
    rule_45: "A little curve is fine",
    rule_46: "Time waits for no one",
    rule_47: "Sometimes our mind also needs rain",
    rule_48: "Mistakes are sometimes the best teacher",
    rule_49: "Disconnect to reconnect",
    rule_50: "No profession is lowly",
    rule_51: "Tomorrow will worry about itself; each day has its own troubles",
    rule_52: "Sometimes patience brings peace",
    rule_53: "Sometimes patience opens your heart",
    rule_54: "Sometimes we must sacrifice to help others",
    rule_55: "Sometimes the mind must be still",
    rule_56: "The past is the baggage of the future",
    rule_57: "Avoid vices",
    rule_58: "Learn to control seven basic emotions: joy, anger, love, hate, pleasure, desire",
    rule_59: "Reach out to embrace the future",
    rule_60: "Childhood happens only once, cherish it",
    rule_61: "Instead of chasing outside chaos, care for yourself more",
    rule_62: "Grades do not define everything",
  },

  // ==========================================================
  // 🇫🇷 Français
  // ==========================================================
  fr: {
    title: "Philosophie de la Vie",
    subtitle: "Troisième édition - Version en ligne",
    lang_label: "🌐 Langue :",
    scroll_top_title: "Haut de page",
    goto_rule_title: "Aller à la règle",
    random_rule_title: "Règle aléatoire",
    credit_authors_heading: "I. Auteurs",
    credit_refs_heading: "II. Références",
    credit_site_heading: "III. Création du site web",
    donate_title: "Soutenir",
    donate_desc: "Si vous aimez ce site et ce projet, veuillez envisager de me soutenir. Les dons seront utilisés pour m'encourager et financer de futurs projets.",
    donate_type: "Cryptomonnaie :",
    crypto_btc: "Bitcoin (BTC)",
    crypto_eth: "Ethereum (ETH)",
    crypto_vrsc: "Verus Coin (VRSC)",
    account_label: "Adresse du portefeuille :",
    qr_label: "Ou scannez le code QR pour copier l’adresse :",
    qr_alt: "Code QR de don",
    copyright: "© 2025 Luu Gia Quan",

    // --- Règles de philosophie (traduction fidèle) ---
    rule_1: "Ne sois pas avide, colérique ou illusionné",
    rule_2: "En tant qu’humains, nous ne pouvons éviter la naissance, la vieillesse, la maladie et la mort",
    rule_3: "Rien n’est gratuit",
    rule_4: "Toute chose demande du temps",
    rule_5: "La vie doit être égale",
    rule_6: "Rien n’est parfait",
    rule_7: "Efforce-toi de t’améliorer chaque jour",
    rule_8: "Tout a une cause et un effet",
    rule_9: "Pardonne et sois reconnaissant si possible",
    rule_10: "L’argent n’est qu’une illusion",
    rule_11: "L’argent ne peut pas tout acheter, mais presque tout",
    rule_12: "Sois doux lorsque tu es en colère",
    rule_13: "Reste calme et lucide dans les moments difficiles",
    rule_14: "La maison est l’endroit où l’on revient dans les épreuves",
    rule_15: "Ne brutalise pas les femmes",
    rule_16: "Ne brutalise pas les hommes",
    rule_17: "Le véritable amour vient du cœur",
    rule_18: "On se rencontre par le destin",
    rule_19: "En amour, l’âge n’a pas d’importance",
    rule_20: "Toute vie connaît des difficultés",
    rule_21: "La vie n’est jamais sans espoir si tu as la foi",
    rule_22: "Persévère, sois travailleur, surmonte les obstacles",
    rule_23: "La discipline personnelle est la base du succès",
    rule_24: "Le destin est fixé par le ciel, immuable",
    rule_25: "L’avenir dépend de toi",
    rule_26: "L’intelligence a des limites, mais la ruse est infinie",
    rule_27: "Montre de la compassion envers ceux qui souffrent",
    rule_28: "Avoir à la fois la vertu et le talent mène au succès",
    rule_29: "La vie ne suit pas toujours nos désirs",
    rule_30: "Ne sois pas la troisième personne dans une relation",
    rule_31: "Ne néglige pas les autres pour ton propre intérêt",
    rule_32: "Le riz mûr s’incline",
    rule_33: "Quand une porte se ferme, une autre s’ouvre",
    rule_34: "Toutes les joies finissent un jour",
    rule_35: "Trop de toute chose est mauvais",
    rule_36: "Après la pluie vient l’arc-en-ciel",
    rule_37: "La vie est plus que l’apparence et les biens matériels",
    rule_38: "Concentre-toi sur le présent plutôt que de t’attacher au passé",
    rule_39: "Rien n’est éternel",
    rule_40: "Chéris chaque seconde de la vie",
    rule_41: "Le monde n’est pas égal ; compte sur ta propre force",
    rule_42: "L’équité vaut mieux que l’égalité",
    rule_43: "Ne commets pas l’adultère",
    rule_44: "Ne te contente pas de parler, agis",
    rule_45: "Un peu de courbure n’est pas grave",
    rule_46: "Le temps n’attend personne",
    rule_47: "Parfois notre esprit a aussi besoin de pluie",
    rule_48: "Les erreurs sont parfois les meilleurs professeurs",
    rule_49: "Déconnecte-toi pour te reconnecter",
    rule_50: "Aucun métier n’est inférieur",
    rule_51: "Demain s’inquiétera de lui-même ; chaque jour a sa peine",
    rule_52: "Parfois la patience apporte la paix",
    rule_53: "Parfois la patience ouvre le cœur",
    rule_54: "Parfois il faut se sacrifier pour aider les autres",
    rule_55: "Parfois l’esprit doit être calme",
    rule_56: "Le passé est le bagage de l’avenir",
    rule_57: "Évite les vices",
    rule_58: "Apprends à contrôler les sept émotions : joie, colère, amour, haine, plaisir, désir",
    rule_59: "Tends la main vers l’avenir",
    rule_60: "L’enfance n’arrive qu’une fois, chéris-la",
    rule_61: "Au lieu de courir après le chaos extérieur, prends soin de toi",
    rule_62: "Les notes ne disent pas tout",
	
  },
  
  
  // ==========================================================
  // 🇨🇳 中文（简体）
  // ==========================================================
  zh: {
    title: "人生哲理",
    subtitle: "第三版 - 在线版",
    lang_label: "🌐 语言：",
    scroll_top_title: "回到顶部",
    goto_rule_title: "跳转到规则",
    random_rule_title: "随机规则",
    credit_authors_heading: "一、作者",
    credit_refs_heading: "二、参考资料",
    credit_site_heading: "三、网站制作",
    donate_title: "支持",
    donate_desc: "如果您喜欢这个网站和项目，请支持我。捐赠将用于鼓励个人和未来项目的资金。",
    donate_type: "加密货币：",
    crypto_btc: "比特币 (BTC)",
    crypto_eth: "以太坊 (ETH)",
    crypto_vrsc: "Verus 币 (VRSC)",
    account_label: "账户地址：",
    qr_label: "或扫描二维码复制地址：",
    qr_alt: "捐赠二维码",
    copyright: "© 2025 Luu Gia Quan",

    // --- 人生哲理 1–31 ---
    rule_1: "不贪、不嗔、不痴",
    rule_2: "做人无法避免生老病死",
    rule_3: "没有免费的东西",
    rule_4: "做任何事情都需要时间",
    rule_5: "生活应该平等",
    rule_6: "没有什么是完美的",
    rule_7: "每天都要努力提升自己",
    rule_8: "万事皆有因果",
    rule_9: "如果可以，就要宽恕并心怀感恩",
    rule_10: "金钱只是虚幻的",
    rule_11: "金钱买不到一切，但能买到大多数东西",
    rule_12: "生气时要温和",
    rule_13: "困难时要冷静清醒",
    rule_14: "家是困难时可以回去的地方",
    rule_15: "不要欺负女性",
    rule_16: "不要欺负男性",
    rule_17: "真正的爱情来自内心",
    rule_18: "有缘才能相遇",
    rule_19: "在爱情中，年龄并不重要",
    rule_20: "人生中总会经历困难",
    rule_21: "只要有信念，生活就不会绝望",
    rule_22: "坚持、勤奋、克服困难",
    rule_23: "自律是成功的基础",
    rule_24: "命运由天注定，无法改变",
    rule_25: "未来由自己决定",
    rule_26: "聪明有限，但手段无穷",
    rule_27: "对困难的人要怀有慈悲之心",
    rule_28: "既有德又有才的人才是真正成功的人",
    rule_29: "生活并不总是如愿以偿",
    rule_30: "不要做感情中的第三者",
    rule_31: "不要为了自己的利益而忽视别人",
    rule_32: "成熟的稻穗会低头",
    rule_33: "一扇门关上，另一扇门就会打开",
    rule_34: "所有的快乐终将结束",
    rule_35: "任何事过多都不好",
    rule_36: "雨后才会有彩虹",
    rule_37: "生活不仅仅是外表和物质",
    rule_38: "专注当下以提升自己，不要沉溺于过去",
    rule_39: "没有什么是永恒的",
    rule_40: "珍惜生命中的每一秒",
    rule_41: "这个世界并不平等，只能依靠自己的力量",
    rule_42: "公平比平等更重要",
    rule_43: "不可邪淫",
    rule_44: "不要只说，要行动",
    rule_45: "有一点弯曲也没关系",
    rule_46: "时间不等人",
    rule_47: "有时我们的心灵也需要一场雨",
    rule_48: "有时错误是最好的老师",
    rule_49: "断开连接以重新连接",
    rule_50: "没有卑贱的职业",
    rule_51: "明天的事留给明天忧虑，每天有每天的烦恼",
    rule_52: "有时忍耐是为了平安",
    rule_53: "有时忍耐能让心胸开阔",
    rule_54: "有时我们必须牺牲以帮助他人",
    rule_55: "有时需要让心保持平静",
    rule_56: "过去是未来的行囊",
    rule_57: "不要染上恶习",
    rule_58: "学会控制人的七种基本情绪：喜、怒、哀、惧、爱、恶、欲",
    rule_59: "伸出双手迎接未来",
    rule_60: "童年只有一次，要珍惜",
    rule_61: "与其追逐外界的纷扰，不如多关心自己",
    rule_62: "分数并不能说明一切"
  }

};

/* ------------------------------------------------------------
   🔧 HÀM CẬP NHẬT TOÀN BỘ VĂN BẢN THEO NGÔN NGỮ
   ------------------------------------------------------------ */
function updateTexts() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  // cập nhật các thuộc tính title, alt nếu có
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (translations[currentLang][key]) el.title = translations[currentLang][key];
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-alt');
    if (translations[currentLang][key]) el.alt = translations[currentLang][key];
  });
}

/* ------------------------------------------------------------
   🌍 HÀM THAY NGÔN NGỮ
   ------------------------------------------------------------ */
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  try { localStorage.setItem('site_lang', lang); } catch (e) {}
  updateTexts();
  window.currentLang = currentLang;
}

/* ------------------------------------------------------------
   🚀 KHỞI TẠO (GỌI LÚC DOM READY)
   ------------------------------------------------------------ */
function initI18n() {
  const saved = localStorage.getItem('site_lang');
  currentLang = saved || 'vi';
  updateTexts();
  // kích hoạt nút tương ứng
  const buttons = document.querySelectorAll('.lang-btn');
  buttons.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang));
  window.currentLang = currentLang;
}

// gắn vào window để index.html gọi được
window.setLanguage = setLanguage;
window.initI18n = initI18n;
window.currentLang = currentLang;
