/* Chinese copy lives here; English copy stays in index.html.
   Arrays follow the matching elements' order. All markup is local, trusted copy. */
(() => {
  const chinese = {
    '.skip-link': ['跳转到正文'],
    '.tagline': ['深度学习爱好者<br>网络安全工程师<br>运动爱好者'],
    '.affiliation': ['武汉大学<br>IAIS (CUPES)'],
    'nav a': ['关于我', '学术论文', '竞赛荣誉', '科研之外', '联系我'],
    '.sidebar-note': ['科研 · 工程 · 运动'],
    '.eyebrow': ['个人主页'],
    '.intro-title': ['你好，我是 wfs。'],
    '.lead': ['探索深度学习、<br class="desktop-break">多模态理解与计算机视觉。'],
    '#about > p:not([class])': [
      '我是一名深度学习爱好者和网络安全工程师，目前在<strong>武汉大学</strong>和 <strong>IAIS (CUPES)</strong>。我的兴趣包括多模态学习、计算机视觉、操作系统和汇编语言。',
      '我的研究涉及细粒度微动作理解、花样滑冰评估和能量消耗估计。我也热衷于参加人工智能竞赛，探索真实场景中的问题。'
    ],
    '.topics span': ['多模态学习', '计算机视觉', '动作理解', '网络安全'],
    '.collaboration': ['欢迎合作，交流各领域科研与竞赛。'],
    '.section-heading h2': ['学术论文', '竞赛荣誉', '科研之外', '联系我'],
    '.section-heading > span': ['01 / 学术研究', '02 / 算法竞赛', '03 / 个人兴趣', '04 / 联系方式'],
    '.publications h3': [
      '识别条件推理：面向细粒度微动作理解的免训练多模态大语言模型流程',
      '通过双流 Mamba 金字塔网络学习长程动作表征，用于花样滑冰评估',
      '基于体能特征的能量消耗估计：交叉注意力时空卷积神经网络',
      '从节拍到评分：面向花样滑冰综合评估的多模态框架'
    ],
    '.honors .award': ['冠军', '冠军', '亚军', '亚军', '二等奖', '第 5 名', '第 9 名', '第 9 名', '第 15 名'],
    '.honors h3': [
      'ACM MM 2026 微动作竞赛',
      '2025 行业数据应用大模型挑战赛',
      '2025 全球 AI 攻防挑战赛',
      '2024 Data-Juicer 系列：ModelScope-Sora 挑战赛',
      '“睿创杯”竞赛',
      '2025 饿了么 AI 算法大赛',
      '2024 Data-Juicer 系列：Better Synth 多模态大模型数据合成挑战赛',
      'WWW 2025 多模态对话系统意图识别挑战赛',
      'CCF 大语言模型安全挑战赛'
    ],
    '.honors li p': [
      '赛道三',
      '阿里云天池 · 金融数据赛道',
      '阿里云天池 · 赛道三：跨设备智能语音交互认证（检测赛道）',
      '阿里云天池',
      '阿里云天池 · 赛道一：轻量化双模态（可见光–红外）目标检测',
      '阿里云天池 · 优胜奖 · 赛道一：智慧养老——面向老年人的智能点餐',
      '阿里云天池 · 优胜奖',
      '阿里云天池',
      '阿里云天池 · 赛道二：内容安全检测器红队攻击'
    ],
    '#beyond > p:not([class])': ['科研与工程之外，我喜欢羽毛球、篮球、足球、游泳和冰球。'],
    '.small-heading': ['编程语言与工具'],
    '#contact > p': ['如果你希望开展科研合作或组队参加人工智能竞赛，欢迎与我联系。'],
    '.contact-list dt': ['邮箱', '微信', 'GitHub'],
    'footer > span:last-child': ['基于 <a href="https://github.com/pages-themes/minimal">Minimal</a> · <a href="#about">返回顶部 ↑</a>']
  };
  const translations = Object.entries(chinese).flatMap(([selector, values]) =>
    Array.from(document.querySelectorAll(selector), (element, index) => ({
      element, en: element.innerHTML, zh: values[index]
    }))
  );
  const switcher = document.querySelector('.language-switch');
  const description = document.querySelector('meta[name="description"]');
  const englishDescription = description.content;

  function setLanguage(language, preservePosition = false) {
    const isChinese = language === 'zh-CN';
    // Anchor to the nearest visible content item rather than a changing pixel offset.
    const anchor = preservePosition && Array.from(document.querySelectorAll('main h2, main li, main p'))
      .find(element => element.getBoundingClientRect().bottom > 0);
    const offset = anchor ? anchor.getBoundingClientRect().top : 0;
    translations.forEach(({element, en, zh}) => { element.innerHTML = isChinese ? zh : en; });
    document.documentElement.lang = language;
    document.title = isChinese ? 'wfs | 个人主页' : 'wfs | Personal Homepage';
    description.content = isChinese ? 'wfs 的个人主页：深度学习、多模态理解、计算机视觉与网络安全。学术论文、竞赛荣誉与联系方式。' : englishDescription;
    document.querySelector('nav').ariaLabel = isChinese ? '主导航' : 'Main navigation';
    document.querySelector('.topics').ariaLabel = isChinese ? '研究兴趣' : 'Research interests';
    switcher.querySelectorAll('button').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    });
    if (anchor) window.scrollBy({top: anchor.getBoundingClientRect().top - offset, behavior: 'instant'});
  }

  switcher.hidden = false;
  switcher.addEventListener('click', event => {
    const button = event.target.closest('button[data-language]');
    if (button) setLanguage(button.dataset.language, true);
  });
  setLanguage('en');
})();
