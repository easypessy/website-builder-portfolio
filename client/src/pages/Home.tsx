import { useState } from 'react';
import { ArrowUpRight, Menu, X, MessageCircle, Check, ChevronDown } from 'lucide-react';

// Nigerian WhatsApp number: 0905 069 0837
const wa = 'https://wa.me/2349050690837';
const categories = ['All','Web Design','Landing Pages','AI Automation','Social Media','Digital Marketing','Copywriting','Reports & Presentations'];
const seeds = [
 ['Northline Atelier','Web Design','Fashion / editorial','A quiet, image-led storefront for a considered clothing label.'],
 ['Morrow House','Web Design','Hospitality','A warm, menu-first digital home for a neighbourhood restaurant.'],
 ['Cedar & Co.','Web Design','Professional services','A confident, structured site for a small advisory practice.'],
 ['Fieldstone Build','Web Design','Construction','Project photography and practical information for a builder.'],
 ['Luma Skin Studio','Web Design','Beauty','A calm booking journey for a results-focused skin studio.'],
 ['Harbour & Home','Web Design','Real estate','Property discovery with a more human point of view.'],
 ['Open Door Learning','Web Design','Education','A clear path from curiosity to enrolment for a learning centre.'],
 ['Good Form Fitness','Web Design','Fitness','A bright, energetic membership experience with less friction.'],
 ['The Sunday Table','Launch page','Food & beverage','A focused pre-order page built around one seasonal offer.'],
 ['Quiet Hours','Landing Pages','Wellness','A consultation page that answers concerns before asking for a booking.'],
 ['Atlas CRM','Landing Pages','SaaS','A product story for a small team that hates bloated software.'],
 ['Mina Candle Co.','Landing Pages','E-commerce','A sensory product page with a simple gift-buying route.'],
 ['Homebase Workshop','Landing Pages','Local business','An event registration page designed for busy parents.'],
 ['First Step Finance','Landing Pages','Financial services','A reassuring lead-generation page without the jargon.'],
 ['Brightline Course','Landing Pages','Education','A launch page that turns a syllabus into a clear decision.'],
 ['Aster Property','Landing Pages','Real estate','A single-property story for a design-conscious buyer.'],
 ['After-hours Reception','AI Automation','Dental practice','A concept workflow for capturing questions outside office hours.'],
 ['Market Lane Assistant','AI Automation','Retail','A product-finding assistant grounded in a small shop knowledge base.'],
 ['Goodstay Concierge','AI Automation','Hospitality','A guest FAQ flow for check-in, amenities and local recommendations.'],
 ['Civic Intake','AI Automation','Professional services','A structured inquiry route that sends complete context to a team.'],
 ['Table for Two','AI Automation','Restaurant','A reservation and menu assistant for the questions staff answer repeatedly.'],
 ['Buildwise Lead Desk','AI Automation','Construction','A qualification flow that sorts project enquiries by fit.'],
 ['Carepath Internal','AI Automation','Healthcare','An internal information assistant, designed with careful boundaries.'],
 ['Follow-up Loop','AI Automation','Sales','A lightweight follow-up workflow for warm enquiries.'],
 ['Sol Club','Social Media','Fashion','A monthly content system balancing product, process and point of view.'],
 ['Morrow House Social','Social Media','Restaurant','A tactile mix of menu stories, kitchen notes and local moments.'],
 ['Pulse Method','Social Media','Fitness','A practical educational series that makes consistency feel possible.'],
 ['Luma Skin Notes','Social Media','Beauty','Myth-busting carousels and gentle treatment education.'],
 ['Oakline Properties','Social Media','Real estate','A content direction that sells the feeling of a place, not just its specs.'],
 ['Studio Common','Social Media','Consulting','A thought-leadership calendar for a founder with limited time.'],
 ['Little Lantern','Social Media','Education','Parent-friendly content pillars for a growing learning community.'],
 ['Good Harvest','Social Media','Food','Seasonal product stories with a less promotional voice.'],
 ['Local First','Digital Marketing','Local services','A visibility plan connecting search, reviews and useful content.'],
 ['Aster Launch','Digital Marketing','Property','A campaign map from first impression to viewing request.'],
 ['Mina Audience Map','Digital Marketing','E-commerce','Audience segments and message angles for a gift-led brand.'],
 ['Civic Clarity','Digital Marketing','Consulting','A channel strategy that turns expertise into regular demand.'],
 ['Table Season','Digital Marketing','Restaurant','A campaign structure for filling quieter weekday tables.'],
 ['Fieldstone Foundations','Digital Marketing','Construction','A trust-building content plan for considered projects.'],
 ['Good Form Funnel','Digital Marketing','Fitness','A simple journey from local discovery to trial session.'],
 ['Open Door Enrolment','Digital Marketing','Education','Messaging and channel priorities for a new intake.'],
 ['The Clear Homepage','Copywriting','Professional services','A homepage rewrite that leads with client questions, not credentials.'],
 ['Morrow Menu Voice','Copywriting','Restaurant','A menu and web voice that makes seasonal food feel approachable.'],
 ['Northline Product Edit','Copywriting','Fashion','Product descriptions with detail, restraint and a point of view.'],
 ['Carepath Service Pages','Copywriting','Healthcare','Plain-language service copy built to reduce uncertainty.'],
 ['Brightline Email Series','Copywriting','Education','A five-email welcome sequence for people considering a course.'],
 ['Buildwise About','Copywriting','Construction','A founder story shaped into a credible reason to choose them.'],
 ['Mina Gift Guide','Copywriting','E-commerce','Helpful, specific copy for a seasonal buying moment.'],
 ['Quiet Hours FAQ','Copywriting','Wellness','Answers to real objections, written without overpromising.'],
 ['Field Notes Report','Reports & Presentations','Research','A readable report system for turning findings into decisions.'],
 ['Civic Proposal','Reports & Presentations','Professional services','A proposal template that gives a small team a clear narrative.'],
 ['Open Door Deck','Reports & Presentations','Education','An enrolment presentation with a calm, editorial rhythm.'],
 ['Aster Market Brief','Reports & Presentations','Real estate','A visual briefing document for a new property release.'],
 ['Good Harvest Plan','Reports & Presentations','Food','A seasonal planning document built for real-world use.'],
 ['Northline Lookbook','Reports & Presentations','Fashion','A compact lookbook with generous image pacing.'],
 ['Buildwise Project Report','Reports & Presentations','Construction','Progress information formatted for clients, not just teams.'],
 ['Mina Brand Guide','Reports & Presentations','E-commerce','A practical reference for keeping a growing brand consistent.'],
];
const imgs = ['photo-1490481651871-ab68de25d43d','photo-1517248135467-4c7edcad34c4','photo-1497366811353-6870744d04b2','photo-1503387762-592deb58ef4e','photo-1570172619644-dfd03ed5d881','photo-1560518883-ce09059eeffa','photo-1509062522246-3755977927d7','photo-1534438327276-14e5300c3a48'];
const image = (i:number) => `https://images.unsplash.com/${imgs[i%imgs.length]}?auto=format&fit=crop&w=1200&q=80`;

export default function Home(){
 const [filter,setFilter]=useState('All'); const [active,setActive]=useState<any>(null); const [menu,setMenu]=useState(false);
 const projects=seeds.map((s,i)=>({title:s[0],category:s[1],industry:s[2],desc:s[3],status:'Concept Project',image:image(i), challenge:`${s[0]} needed a clearer way to be understood by the people they want to reach.`, approach:'We started with the audience, simplified the message, then built a visual system around the most useful next step.', work:'Messaging, information architecture, visual direction and a considered set of practical deliverables.', direction:'A project-specific visual language shaped by its audience, context and job to be done.', takeaway:'Good work begins by making the important thing easier to find.'}));
 const shown=filter==='All'?projects:projects.filter(p=>p.category===filter || (filter==='Landing Pages'&&p.category==='Launch page'));
 return <div className="site">
  <header className="nav"><a className="logo" href="#top"><span>easy</span>wurld<small>SIMPLIFY · OPTIMIZE · GROW</small></a><nav className={menu?'open':''}>{['Services','Work','Process','About'].map(x=><a href={'#'+x.toLowerCase()} key={x} onClick={()=>setMenu(false)}>{x}</a>)}<a className="nav-cta" href="#contact">Start a project <ArrowUpRight size={16}/></a></nav><button className="menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></header>
  <main id="top">
   <section className="hero"><div className="eyebrow">MARKETING CLARITY FOR SMALL BUSINESSES <i/></div><h1>Make your<br/><em>next move</em> clear.</h1><p className="hero-copy">Easywurld helps businesses simplify their message, improve their online presence and build practical digital systems through strategy, design, content and automation.</p><div className="hero-actions"><a className="button dark" href="#work">Explore our work <ArrowUpRight size={17}/></a><a className="text-link" href="#contact">Start a project <span>↗</span></a></div><div className="hero-art"><div className="art-note">A clearer way<br/>to grow <span>✳</span></div><div className="art-circle">easy<br/><b>wurld</b></div><div className="art-line">STRATEGY · DESIGN · CONTENT · SYSTEMS</div></div></section>
   <section className="intro"><div className="section-label">01 / THE WHY</div><div><h2>Good marketing<br/><em>should feel simple.</em></h2><p>Not louder. Not more complicated. Just clearer about who you are, what you offer and why it matters.</p><p>We work alongside small businesses to turn scattered ideas into useful strategy, confident design and systems that keep working after launch.</p></div></section>
   <section id="services" className="services"><div className="section-label">02 / WHAT WE DO</div><div className="service-list">{[['01','Digital marketing strategy','The thinking behind the work: audience, positioning, content and customer journeys.'],['02','Websites & landing pages','Digital homes and focused campaign pages that help the right people take the next step.'],['03','Social media management','A considered content direction that gives your brand something useful to say.'],['04','AI business automation','Practical assistants and workflows for enquiries, follow-up and internal knowledge.'],['05','Copywriting & business content','Clear, human words for websites, offers, emails, products and services.'],['06','Reports & presentations','Professional documents that make complex information easier to read and act on.']].map(x=><div className="service" key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p><ArrowUpRight size={20}/></div>)}</div></section>
   <section id="work" className="work"><div className="work-head"><div><div className="section-label">03 / SELECTED WORK</div><h2>A body of work<br/><em>with a point of view.</em></h2></div><p>Concept projects are clearly labelled. They show how we think, design and make — without pretending to be client results.</p></div><div className="filters">{categories.map(c=><button className={filter===c?'active':''} onClick={()=>setFilter(c)} key={c}>{c}</button>)}</div><div className="project-grid">{shown.map((p,i)=><article className={'project p'+(i%4)} key={p.title} onClick={()=>setActive(p)}><div className="project-image"><img src={p.image} alt={p.title}/><span>↗</span></div><div className="project-meta"><div><small>{p.category}</small><h3>{p.title}</h3></div><small>{p.industry}</small></div></article>)}</div><p className="library-note">{shown.length} concept examples in this collection · <a href="#contact">Have a project in mind? Tell us about it →</a></p></section>
   <section id="process" className="process"><div className="section-label">04 / HOW WE WORK</div><div className="process-grid"><h2>Understand.<br/>Simplify.<br/><em>Build. Optimize.</em></h2><div className="steps">{[['01','Understand','We get close to the business, the audience and the real problem.'],['02','Simplify','We find the useful message and remove the noise around it.'],['03','Build','We turn the thinking into clear, capable work.'],['04','Optimize','We look at what is working and improve what is not.']].map(s=><div className="step" key={s[0]}><span>{s[0]}</span><div><h3>{s[1]}</h3><p>{s[2]}</p></div></div>)}</div></div></section>
   <section id="about" className="about"><div className="section-label">05 / ABOUT EASYWURLD</div><div><h2>Small enough<br/>to <em>care deeply.</em></h2><p>Easywurld is an independent creative and digital partner for businesses who want thoughtful work without the theatre.</p><p>We bring together strategy, design, content and systems — so your marketing feels like one connected thing.</p></div></section>
   <section id="contact" className="contact"><div><div className="section-label light">06 / LET'S TALK</div><h2>Tell us what<br/>you're trying<br/><em>to solve.</em></h2><p>Have a question, a half-formed idea or a project ready to go? We would like to hear it.</p><a className="whatsapp" href={wa} target="_blank"><MessageCircle size={19}/> Message us on WhatsApp</a></div><form onSubmit={e=>{e.preventDefault(); const data=new FormData(e.currentTarget); const message=`Hello Easywurld, I would like to discuss a project.%0A%0AName: ${encodeURIComponent(String(data.get('name')||''))}%0ABusiness: ${encodeURIComponent(String(data.get('business')||''))}%0AService: ${encodeURIComponent(String(data.get('service')||''))}%0APlatforms: ${encodeURIComponent(data.getAll('platform').join(', ') || 'Not selected')}%0ASocial handle or link: ${encodeURIComponent(String(data.get('website')||''))}`; window.open(`${wa}?text=${message}`,'_blank')}}><label>Name<input name="name" required placeholder="Your name"/></label><label>Business<input name="business" placeholder="Business name"/></label><label>What do you need help with?<select name="service"><option>Choose a service</option>{categories.slice(1).map(c=><option key={c}>{c}</option>)}</select></label><fieldset><legend>Where can we find your business?</legend><div className="checks">{['Instagram','Facebook','LinkedIn','TikTok','X / Twitter','Website'].map(platform=><label key={platform}><input type="checkbox" name="platform" value={platform}/>{platform}</label>)}</div></fieldset><label>Social handle or link <span className="optional">(optional)</span><input name="website" placeholder="@yourbusiness or https://..."/></label><button className="button light-button">Send enquiry <ArrowUpRight size={17}/></button><small>By sending this form, you can continue the conversation with us on WhatsApp.</small></form></section>
  </main><footer><a className="logo" href="#top"><span>easy</span>wurld</a><p>Marketing clarity for small businesses.</p><a href={wa} target="_blank">WhatsApp · 905 069 0837</a><small>© 2025 Easywurld. Concept work is clearly labelled.</small></footer>
  {active&&<div className="modal-back" onClick={()=>setActive(null)}><div className="modal" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setActive(null)}><X/></button><img src={active.image} alt=""/><div className="modal-copy"><small>{active.status} · {active.category}</small><h2>{active.title}</h2><p className="lead">{active.desc}</p>{[['THE CHALLENGE',active.challenge],['OUR APPROACH',active.approach],['WHAT WE BUILT',active.work],['DESIGN DIRECTION',active.direction],['KEY TAKEAWAY',active.takeaway]].map(x=><div className="case-row" key={x[0]}><b>{x[0]}</b><p>{x[1]}</p></div>)}<a className="button dark" href="#contact" onClick={()=>setActive(null)}>Discuss a similar project <ArrowUpRight size={17}/></a></div></div></div>}
 </div>
}
