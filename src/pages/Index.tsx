import { useState } from "react";
import agent from "@/assets/agent.jpg";
import apt1 from "@/assets/apt1.jpg";
import apt2 from "@/assets/apt2.jpg";
import apt3 from "@/assets/apt3.jpg";
import keys from "@/assets/keys.jpg";
import moscow from "@/assets/moscow.jpg";

const listings = [
  { img: apt1, title: "2-к квартира, ЦАО", area: "64 м²", price: "29 500 000 ₽", meta: "м. Чистые пруды · 7 мин пешком" },
  { img: apt2, title: "Студия с видом, ЗАО", area: "32 м²", price: "12 900 000 ₽", meta: "м. Кутузовская · новый дом" },
  { img: apt3, title: "3-к квартира, СЗАО", area: "82 м²", price: "24 700 000 ₽", meta: "м. Щукинская · готов к заселению" },
];

const services = [
  { t: "Продажа квартиры", d: "Оценка по рынку, профессиональные фото, размещение на топ-площадках, показы." },
  { t: "Подбор и покупка", d: "Подберём 5–7 вариантов под задачу. Проверим документы и историю объекта." },
  { t: "Ипотека", d: "Поможем выбрать банк и программу, соберём пакет документов, сопроводим сделку." },
  { t: "Юридическое сопровождение", d: "Договор, проверка собственников, расчёты через аккредитив или ячейку." },
];

const cases = [
  { who: "Семья с ребёнком, ВАО", what: "Меняли однушку на трёшку с доплатой. Закрыли альтернативу за 6 недель." },
  { who: "Инвестор", what: "Подобрали ликвидный лот в новостройке у метро. Рост стоимости +14% за 9 месяцев." },
  { who: "Продавец, ЦАО", what: "Продали квартиру за 21 день по цене выше первоначальной оценки." },
];

const reviews = [
  { n: "Анна К.", t: "Помогли быстро продать квартиру и параллельно купить новую. Всё чётко по срокам." },
  { n: "Дмитрий П.", t: "Понравилось, что без давления. Объясняли каждый шаг, особенно по ипотеке." },
  { n: "Марина С.", t: "Подобрали отличный вариант рядом с метро. Сделка прошла без сюрпризов." },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", goal: "Подбор квартиры" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="border-b hairline sticky top-0 z-40 backdrop-blur bg-background/80">
        <div className="container-page flex items-center justify-between py-4">
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="inline-block w-2 h-2 rounded-full bg-primary pulse-dot" />
            Жильё в Москве
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#listings" className="hover:text-foreground">Объекты</a>
            <a href="#services" className="hover:text-foreground">Услуги</a>
            <a href="#cases" className="hover:text-foreground">Кейсы</a>
            <a href="#about" className="hover:text-foreground">О нас</a>
            <a href="#contact" className="hover:text-foreground">Заявка</a>
          </nav>
          <a href="tel:+74950000000" className="hidden sm:inline-block text-sm font-medium text-primary">
            +7 (495) 000-00-00
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="container-page py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary/90 mb-5">
              <span className="w-6 h-px bg-primary" /> Агентство недвижимости · Москва
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] mb-5">
              Подберём квартиру в Москве и проведём сделку — без суеты.
            </h1>
            <p className="text-muted-foreground text-lg mb-7 max-w-xl">
              5 лет на рынке. Помогаем купить, продать и обменять жильё. Проверка документов,
              ипотека и сопровождение до получения ключей.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a href="#contact" className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
                Получить подборку объектов
              </a>
              <a href="#estimate" className="px-6 py-3 rounded-md border hairline text-foreground hover:border-primary transition">
                Узнать стоимость моей квартиры
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="hsl(var(--primary))"><path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z"/></svg>
                <span><b className="text-foreground">5,0</b> · 11 отзывов на Яндекс Картах</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Член РГР
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Договор и юр. сопровождение
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-xl overflow-hidden border hairline shadow-2xl">
              <img src={agent} alt="Агент по недвижимости в офисе в Москве" width={1280} height={1280} className="w-full h-[420px] md:h-[560px] object-cover" />
              <div className="absolute bottom-4 left-4 right-4 bg-card/85 backdrop-blur rounded-lg p-4 border hairline">
                <div className="text-xs text-muted-foreground mb-1">Личный агент</div>
                <div className="font-display font-semibold">Андрей Соколов · 5 лет в Москве</div>
                <div className="text-xs text-muted-foreground mt-1">Сделки в ЦАО, ЗАО, СЗАО · ипотека всех топ-банков</div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border hairline rounded-xl -z-0 hidden md:block" />
          </div>
        </div>
        <div className="gold-line" />
      </section>

      {/* LISTINGS */}
      <section id="listings" className="py-16 md:py-24">
        <div className="container-page">
          <div className="flex items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest text-primary mb-3">Свежие объекты</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Подборка квартир этой недели</h2>
            </div>
            <a href="#contact" className="hidden md:inline text-sm text-accent hover:underline">Запросить полную подборку →</a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {listings.map((l) => (
              <article key={l.title} className="bg-card rounded-xl overflow-hidden border hairline group hover:border-primary/50 transition">
                <div className="overflow-hidden">
                  <img src={l.img} alt={l.title} loading="lazy" width={1280} height={960} className="w-full h-56 object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start gap-3 mb-2">
                    <h3 className="font-display font-semibold text-lg">{l.title}</h3>
                    <span className="text-xs text-muted-foreground whitespace-nowrap pt-1">{l.area}</span>
                  </div>
                  <div className="text-primary font-display text-xl font-bold mb-2">{l.price}</div>
                  <div className="text-sm text-muted-foreground">{l.meta}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES + ANIMATED PROCESS */}
      <section id="services" className="py-16 md:py-24 bg-card/40">
        <div className="container-page grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary mb-3">Услуги</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Закрываем все вопросы по сделке</h2>
            <div className="space-y-4">
              {services.map((s) => (
                <div key={s.t} className="flex gap-4 p-4 rounded-lg border hairline bg-background/40">
                  <div className="w-9 h-9 rounded-md bg-primary/15 text-primary flex items-center justify-center font-display font-bold shrink-0">
                    {s.t[0]}
                  </div>
                  <div>
                    <div className="font-display font-semibold mb-1">{s.t}</div>
                    <div className="text-sm text-muted-foreground">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-primary mb-3">Как мы работаем</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">4 шага до ключей</h2>
            <ProcessSVG />
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-16 md:py-24">
        <div className="container-page">
          <div className="text-xs uppercase tracking-widest text-primary mb-3">Кейсы</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">Реальные сделки наших клиентов</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <div key={i} className="p-6 rounded-xl border hairline bg-card">
                <div className="font-display text-3xl text-primary font-bold mb-3">0{i + 1}</div>
                <div className="font-semibold mb-2">{c.who}</div>
                <p className="text-sm text-muted-foreground">{c.what}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-xl overflow-hidden border hairline relative">
            <img src={moscow} alt="Жилые кварталы Москвы" loading="lazy" width={1600} height={900} className="w-full h-56 md:h-72 object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent flex items-center">
              <div className="p-8 md:p-12 max-w-lg">
                <div className="font-display text-2xl md:text-3xl font-bold mb-2">Знаем Москву по районам</div>
                <p className="text-muted-foreground">От Хамовников до Митино. Подскажем, где жить под бюджет и задачи семьи.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 md:py-24 bg-card/40">
        <div className="container-page grid md:grid-cols-2 gap-12 items-center">
          <img src={keys} alt="Передача ключей от квартиры" loading="lazy" width={1280} height={800} className="rounded-xl border hairline w-full h-80 object-cover" />
          <div>
            <div className="text-xs uppercase tracking-widest text-primary mb-3">О команде</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">5 лет помогаем москвичам с жильём</h2>
            <p className="text-muted-foreground mb-6">
              Небольшая команда практикующих агентов. Работаем по договору, не берём комиссию вперёд,
              отвечаем за каждую рекомендацию. Член Российской Гильдии Риэлторов.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <Stat n="5" l="лет на рынке" />
              <Stat n="5,0" l="на Яндекс Картах" />
              <Stat n="200+" l="закрытых сделок" />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 md:py-24">
        <div className="container-page">
          <div className="text-xs uppercase tracking-widest text-primary mb-3">Отзывы клиентов</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">Что говорят о работе</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.n} className="p-6 rounded-xl border hairline bg-card">
                <div className="flex gap-0.5 text-primary mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z"/></svg>
                  ))}
                </div>
                <p className="text-sm mb-4">{r.t}</p>
                <div className="text-sm text-muted-foreground">{r.n}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="py-16 md:py-24 bg-card/40">
        <div className="container-page">
          <div className="text-xs uppercase tracking-widest text-primary mb-3">Гарантии</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">Прозрачные условия работы</h2>
          <div className="grid md:grid-cols-4 gap-5">
            {[
              ["Договор", "Фиксируем услуги, сроки и ответственность сторон."],
              ["Без предоплат", "Комиссия — только по результату закрытой сделки."],
              ["Юр. чистота", "Проверяем собственников, обременения и историю."],
              ["Сопровождение", "Ведём до подписания и регистрации в Росреестре."],
            ].map(([t, d]) => (
              <div key={t} className="p-5 rounded-lg border hairline bg-background/40">
                <div className="font-display font-semibold mb-2">{t}</div>
                <div className="text-sm text-muted-foreground">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container-page grid md:grid-cols-2 gap-10">
          <div id="estimate">
            <div className="text-xs uppercase tracking-widest text-primary mb-3">Заявка</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Расскажите задачу — пришлём подборку или оценим квартиру
            </h2>
            <p className="text-muted-foreground mb-8">
              Перезвоним в течение 30 минут в рабочее время. Без спама и навязчивых звонков.
            </p>
            {sent ? (
              <div className="p-6 rounded-xl border border-primary/40 bg-primary/10">
                <div className="font-display font-semibold text-lg mb-1">Заявка отправлена</div>
                <div className="text-sm text-muted-foreground">Свяжемся с вами в ближайшее время.</div>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <input
                  required
                  placeholder="Ваше имя"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-md bg-card border hairline focus:border-primary outline-none"
                />
                <input
                  required
                  type="tel"
                  placeholder="Телефон"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-md bg-card border hairline focus:border-primary outline-none"
                />
                <select
                  value={form.goal}
                  onChange={(e) => setForm({ ...form, goal: e.target.value })}
                  className="w-full px-4 py-3 rounded-md bg-card border hairline focus:border-primary outline-none"
                >
                  <option>Подбор квартиры</option>
                  <option>Оценка моей квартиры</option>
                  <option>Продажа квартиры</option>
                  <option>Ипотека</option>
                  <option>Юридическая консультация</option>
                </select>
                <button type="submit" className="w-full px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
                  Отправить заявку
                </button>
                <p className="text-xs text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                </p>
              </form>
            )}
          </div>

          <div>
            <div className="rounded-xl overflow-hidden border hairline">
              <iframe
                title="Москва на карте"
                src="https://yandex.ru/map-widget/v1/?ll=37.617635%2C55.755814&z=11&pt=37.617635,55.755814,pm2rdm"
                width="100%"
                height="320"
                frameBorder="0"
                className="block"
              />
            </div>
            <div className="mt-5 p-5 rounded-xl border hairline bg-card space-y-2 text-sm">
              <div className="font-display font-semibold text-base mb-1">Контакты</div>
              <div className="flex justify-between"><span className="text-muted-foreground">Телефон</span><a href="tel:+74950000000" className="text-primary">+7 (495) 000-00-00</a></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Telegram</span><span>@zhilye_v_moskve</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Часы работы</span><span>Пн–Вс, 9:00–21:00</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Город</span><span>Москва</span></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t hairline py-8">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Жильё в Москве</div>
          <div>Москва · Член РГР</div>
        </div>
      </footer>
    </div>
  );
};

const Stat = ({ n, l }: { n: string; l: string }) => (
  <div className="p-4 rounded-lg border hairline bg-background/40">
    <div className="font-display text-2xl font-bold text-primary">{n}</div>
    <div className="text-xs text-muted-foreground mt-1">{l}</div>
  </div>
);

const ProcessSVG = () => (
  <div className="rounded-xl border hairline bg-background/40 p-6">
    <svg viewBox="0 0 480 220" className="w-full h-auto" role="img" aria-label="Этапы работы">
      <defs>
        <linearGradient id="ln" x1="0" x2="1">
          <stop offset="0" stopColor="hsl(38,50%,58%)" stopOpacity="0.2" />
          <stop offset="1" stopColor="hsl(38,50%,58%)" stopOpacity="1" />
        </linearGradient>
      </defs>
      <line x1="40" y1="110" x2="440" y2="110" stroke="hsl(222,20%,22%)" strokeWidth="2" />
      <line x1="40" y1="110" x2="440" y2="110" stroke="url(#ln)" strokeWidth="2" strokeDasharray="400" strokeDashoffset="400">
        <animate attributeName="stroke-dashoffset" from="400" to="0" dur="2.5s" begin="0.3s" fill="freeze" />
      </line>
      {[
        { x: 60, t: "Заявка", s: "30 мин" },
        { x: 187, t: "Подборка", s: "1–3 дня" },
        { x: 313, t: "Просмотры", s: "неделя" },
        { x: 440, t: "Сделка", s: "ключи" },
      ].map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy="110" r="8" fill="hsl(222,33%,9%)" stroke="hsl(38,50%,58%)" strokeWidth="2">
            <animate attributeName="r" values="6;10;8" dur="0.6s" begin={`${0.5 + i * 0.5}s`} fill="freeze" />
          </circle>
          <text x={p.x} y="80" textAnchor="middle" fill="hsl(210,17%,97%)" fontFamily="Manrope" fontWeight="600" fontSize="14">{p.t}</text>
          <text x={p.x} y="145" textAnchor="middle" fill="hsl(215,14%,68%)" fontFamily="Inter" fontSize="11">{p.s}</text>
        </g>
      ))}
    </svg>
  </div>
);

export default Index;
