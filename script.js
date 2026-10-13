const toggle=document.querySelector('.toggle'),menu=document.querySelector('.menu');
toggle.addEventListener('click',()=>{
  const open=menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded',open);
});
menu.addEventListener('click',e=>{if(e.target.closest('a')){menu.classList.remove('open');toggle.setAttribute('aria-expanded',false)}});

const io='IntersectionObserver' in window&&new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io?io.observe(el):el.classList.add('in'));

const form=document.getElementById('contact-form');
if(form)form.addEventListener('submit',e=>{
  e.preventDefault();
  const d=new FormData(form);
  const body=`Name: ${d.get('first')} ${d.get('last')||''}\nEmail: ${d.get('email')}\n\n${d.get('message')||''}`;
  location.href='mailto:evidencestat@yahoo.com?subject='+encodeURIComponent('Enquiry from evidencestat.com')+'&body='+encodeURIComponent(body);
});
