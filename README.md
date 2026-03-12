# SIDRA - Landing Page Assurance Adaptative

صفحة هبوط (Landing Page) كاملة لمفهوم **PULSE** - التأمين الذي يتكيف مع الاستخدام الفعلي.

## 🎯 المفهوم

SIDRA هي منصة تعليمية تشرح مبدأ التأمين الدقيق التكيفي:
- **فعّل** تغطيتك عندما تحتاجها
- **استخدم** وتابع استهلاكك في الوقت الفعلي
- **افهم** نقاطك وتكلفتك
- **ثق** في شركات التأمين المعتمدة

## 🚀 البدء السريع

### التثبيت

```bash
npm install
```

### التشغيل في وضع التطوير

```bash
npm run dev
```

افتح [http://localhost:3000](http://localhost:3000) في المتصفح.

### بناء الإنتاج

```bash
npm run build
npm start
```

## 📱 أقسام الصفحة

صفحة واحدة مع 5 أقسام:

1. **#hero** - Hero section (الصفحة الرئيسية)
2. **#insurance** - Mon assurance (تأميني)
3. **#usage** - Usage & coût (الاستخدام والتكلفة)
4. **#score** - Score SIDRA (نقاط PULSE)
5. **#partner** - Assureur partenaire (الشريك المؤمن)

## 🎨 التصميم

- **الخط**: Inter (Google Fonts)
- **اللون المميز**: #13ecda (فيروزي/سماوي)
- **التقوس**: 12px
- **الأسلوب**: Minimal premium fintech/insurtech
- **الوضع**: Light فقط

## 📐 Responsive

محسّن لجميع أحجام الشاشات:
- Mobile: 320-430px (عمود واحد)
- Tablet: 768-1024px
- Desktop: 1280-1920px (max-width 1200px)
- Large screens: 2560px+ (2K/4K مع مسافات متكيفة)

## 🎯 المميزات الرئيسية

### Navigation
- ✅ شريط تنقل ثابت (sticky) مع تأثير الشفافية عند التمرير
- ✅ قائمة سطح المكتب مع روابط الأقسام
- ✅ **أيقونة قائمة الهاتف** (hamburger menu)
- ✅ قائمة جانبية منزلقة للهاتف مع روابط كاملة

### Mobile Menu
- ✅ قائمة منزلقة من اليمين
- ✅ overlay شفاف
- ✅ أيقونات لكل قسم
- ✅ زر إغلاق
- ✅ CTA button في الأسفل

### Sections
- ✅ Hero: full-screen مع دوائر متحركة
- ✅ Insurance: toggle ON/OFF مع شبكة المميزات
- ✅ Usage: بطاقات الاستخدام والتكلفة
- ✅ Score: دائرة التقدم + badges
- ✅ Partner: معلومات الثقة + شبكة المزايا

## 🧩 المكونات

- `Navigation` - شريط التنقل مع menu icon
- `MobileMenu` - قائمة الهاتف المنزلقة
- `Hero` - قسم البطل
- `Insurance` - قسم التأمين
- `Usage` - قسم الاستخدام
- `Score` - قسم النقاط
- `Partner` - قسم الشركاء
- `Card` - بطاقة مع variants
- `ToggleSwitch` - مفتاح قابل للوصول
- `ProgressRing` - دائرة التقدم SVG

## 🛠 التقنيات

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**

## 📝 ملاحظات

- جميع النصوص بالـ **فرنسية**
- العملة بالـ **DZD** (الدينار الجزائري)
- لا يوجد backend أو مصادقة
- بيانات وهمية (تعليمية فقط)
- لا توجد إشارة إلى AI/ML (نبرة بسيطة ومطمئنة)

## 🎉 الميزات الجديدة

### ✅ Landing Page Style
- صفحة واحدة بدلاً من صفحات منفصلة
- تنقل سلس بين الأقسام (smooth scroll)
- جميع المحتوى في صفحة واحدة

### ✅ Mobile Menu Icon
- أيقونة hamburger في وضع الهاتف
- قائمة منزلقة جميلة
- تجربة مستخدم ممتازة على الهاتف

## 📄 الترخيص

مشروع تجريبي - للاستخدام التعليمي فقط.
