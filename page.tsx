'use client'

import { useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Footprints,
  Leaf,
  Mail,
  Menu,
  MapPin,
  Minus,
  Phone,
  Recycle,
  ShieldCheck,
  Sparkles,
  TrainFront,
  Users,
  X,
} from 'lucide-react'

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeu0IPajjfLyvgwCQGh1hbEyXS9g36lQr-uLj0bfU0tbBEhhg/viewform?usp=publish-editor'

const eventInfo = [
  { label: '행사명', value: '환경을 지키는 하루', icon: Leaf },
  { label: '일시', value: '2026년 5월 16일 토요일', icon: CalendarDays },
  { label: '장소', value: '서울숲 커뮤니티센터', icon: MapPin },
  { label: '참가 대상', value: '환경에 관심 있는 누구나', icon: Users },
  { label: '참가비', value: '무료', icon: Sparkles },
  { label: '모집 인원', value: '선착순 100명', icon: ShieldCheck },
]

const programs = [
  { time: '09:30', title: '참가자 등록', description: '만남의 장소에서 서로 인사를 나눠요.' },
  { time: '10:00', title: '환경 캠페인 소개', description: '오늘 우리가 함께할 이야기와 약속을 소개합니다.' },
  { time: '10:30', title: '환경 교육', description: '일상에서 실천하는 지속 가능한 방법을 배워요.' },
  { time: '11:00', title: '플로깅 활동', description: '숲길을 걸으며 쓰레기를 줍고 건강도 챙겨요.' },
  { time: '12:00', title: '마무리 및 기념 촬영', description: '오늘의 실천을 되돌아보고 함께 기록합니다.' },
]

const practices = [
  { icon: Recycle, title: '올바른 분리배출', text: '자원은 다시 순환할 수 있어요.' },
  { icon: Minus, title: '일회용품 줄이기', text: '필요한 만큼만, 오래 사용하는 습관.' },
  { icon: TrainFront, title: '대중교통 이용', text: '지구와 나에게 가벼운 이동.' },
  { icon: Footprints, title: '플로깅', text: '걷고 줍고, 우리 동네를 깨끗하게.' },
]

const faqs = [
  ['참가 신청은 어떻게 하나요?', '페이지의 참가 신청하기 버튼을 누르면 Google Forms 신청서로 이동합니다. 신청서 작성 후 제출해 주세요.'],
  ['참가비가 있나요?', '참가비는 무료입니다. 누구나 부담 없이 참여하실 수 있어요.'],
  ['준비물이 필요한가요?', '개인 물병과 편한 복장, 운동화를 준비해 주세요. 집게와 장갑은 현장에서 제공합니다.'],
  ['우천 시 행사는 어떻게 진행되나요?', '우천 시 일부 프로그램은 실내 교육으로 변경될 수 있으며, 자세한 안내는 신청자에게 별도로 전달합니다.'],
  ['참가 신청을 취소할 수 있나요?', '신청서에 기재된 문의 이메일로 행사 전날까지 취소 요청을 보내 주세요.'],
]

function RegisterButton({ className = '' }: { className?: string }) {
  return (
    <a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer" className={`register-button ${className}`}>
      참가 신청하기 <ArrowRight aria-hidden="true" />
    </a>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#top" className="brand" onClick={closeMenu} aria-label="그린스텝 홈">
            <span className="brand-mark"><Leaf aria-hidden="true" /></span>
            <span>그린스텝<span className="brand-dot">.</span></span>
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}>
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="주요 메뉴">
            <a href="#about" onClick={closeMenu}>행사 소개</a>
            <a href="#info" onClick={closeMenu}>행사 정보</a>
            <a href="#program" onClick={closeMenu}>프로그램</a>
            <a href="#practice" onClick={closeMenu}>환경 실천</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
            <RegisterButton className="nav-register" />
          </nav>
        </div>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow light"><span /> 2026 환경 캠페인</p>
          <h1>함께 만드는<br /><em>더 푸른 지구</em></h1>
          <p className="hero-subtitle">작은 실천이 모여 우리의 환경을 바꿉니다.</p>
          <RegisterButton />
          <a className="scroll-cue" href="#about">아래로 살펴보기 <ArrowDown aria-hidden="true" /></a>
        </div>
        <div className="hero-stamp"><Leaf aria-hidden="true" /><span>ONE DAY<br /><strong>FOR EARTH</strong></span></div>
      </section>

      <section id="about" className="section about-section">
        <div className="container about-grid">
          <div className="section-copy reveal">
            <p className="eyebrow"><span /> ABOUT THE DAY</p>
            <h2>환경을 위한<br /><em>우리의 실천</em></h2>
            <p className="body-copy">우리의 일상 속 작은 행동 하나가 환경을 변화시킬 수 있습니다. 이번 행사를 통해 환경 문제에 대해 함께 생각하고, 직접 실천하며 지속 가능한 미래를 만들어가고자 합니다.</p>
            <div className="quote"><span>"</span><p>오늘의 작은 걸음이<br />내일의 큰 변화를 만듭니다.</p></div>
          </div>
          <div className="about-visual reveal"><div className="visual-card"><Leaf aria-hidden="true" /><span>함께 걷는<br /><strong>지구의 길</strong></span></div><div className="visual-note">NATURE<br />IS HOME</div></div>
        </div>
      </section>

      <section id="info" className="section info-section">
        <div className="container"><div className="section-heading"><div><p className="eyebrow"><span /> EVENT DETAILS</p><h2>행사 정보</h2></div><p>하루 동안 함께 배우고,<br className="desktop-only" /> 걷고, 실천해요.</p></div>
          <div className="info-grid">{eventInfo.map(({ label, value, icon: Icon }) => <article className="info-card" key={label}><div className="info-icon"><Icon aria-hidden="true" /></div><p>{label}</p><h3>{value}</h3></article>)}</div>
        </div>
      </section>

      <section id="program" className="section program-section"><div className="container program-grid"><div><p className="eyebrow"><span /> OUR PROGRAM</p><h2>하루를 채우는<br /><em>다섯 가지 순간</em></h2><p className="body-copy">환경을 배우는 시간부터 직접 행동하는 순간까지, 알찬 프로그램을 준비했어요.</p><RegisterButton /></div><div className="timeline">{programs.map((program, index) => <div className="timeline-item" key={program.time}><div className="timeline-time">{program.time}</div><div className="timeline-dot">{index === programs.length - 1 ? <Check aria-hidden="true" /> : index + 1}</div><div><h3>{program.title}</h3><p>{program.description}</p></div></div>)}</div></div></section>

      <section id="practice" className="practice-section"><div className="container"><div className="practice-intro"><p className="eyebrow light"><span /> SMALL ACTIONS</p><h2>오늘 우리가 실천하는<br /><em>작은 행동이 내일의 지구를 만듭니다.</em></h2></div><div className="practice-grid">{practices.map(({ icon: Icon, title, text }) => <article className="practice-card" key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="cta-section"><div className="container cta-inner"><div><p className="eyebrow"><span /> JOIN US</p><h2>지금 함께해주세요<span>.</span></h2><p>환경을 위한 작은 실천에<br className="mobile-only" /> 여러분의 참여를 기다립니다.</p></div><RegisterButton /></div></section>

      <section id="faq" className="section faq-section"><div className="container faq-grid"><div><p className="eyebrow"><span /> FAQ</p><h2>궁금한 점이<br /><em>있으신가요?</em></h2><p className="body-copy">행사에 대해 더 알고 싶다면<br />아래 질문을 확인해 보세요.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown aria-hidden="true" /></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></div></section>

      <footer className="site-footer"><div className="container footer-top"><div><a href="#top" className="brand footer-brand"><span className="brand-mark"><Leaf aria-hidden="true" /></span><span>그린스텝<span className="brand-dot">.</span></span></a><p>더 나은 지구를 위한 하루,<br />우리의 발걸음으로 시작됩니다.</p></div><div className="footer-contact"><p>주최 · 주관</p><strong>그린스텝 환경 캠페인</strong><a href="mailto:hello@greenstep.kr"><Mail aria-hidden="true" /> hello@greenstep.kr</a><a href="tel:02-1234-5678"><Phone aria-hidden="true" /> 02-1234-5678</a></div></div><div className="container footer-bottom"><span>© 2026 Greenstep. All rights reserved.</span><a href="#top">개인정보처리방침</a><a href="#top">맨 위로 ↑</a></div></footer>
    </main>
  )
}
