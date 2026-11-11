(() => {
  'use strict';
  const cfg = window.OPC_LANDING;
  if (!cfg) return;
  const view = matchMedia('(max-width:680px)');
  const coupon = document.querySelector('#coupon');
  const couponImage = coupon.querySelector('img[data-src]');
  const supportsIntersectionObserver = 'IntersectionObserver' in window;
  const offerParts = document.querySelectorAll('[data-coupon-only]');
  const start = Date.parse(cfg.offerStarts);
  const end = Date.parse(cfg.offerEnds);
  let offerTimer;
  function loadCouponImage() {
    if (!coupon.hidden && coupon.open && !couponImage.hasAttribute('src')) {
      couponImage.src = couponImage.dataset.src;
    }
  }
  function updateOffer() {
    clearTimeout(offerTimer);
    const now = Date.now();
    const active = Number.isFinite(start) && Number.isFinite(end) && now >= start && now <= end;
    offerParts.forEach(node => { node.hidden = !active; });
    if (!supportsIntersectionObserver) loadCouponImage();
    const next = now < start ? start : active ? end + 1 : NaN;
    if (Number.isFinite(next)) offerTimer = setTimeout(updateOffer, Math.min(Math.max(25, next - now), 2147483647));
  }
  updateOffer();
  document.addEventListener('visibilitychange', () => { if (!document.hidden) updateOffer(); });

  const metrics = cfg.analytics;
  const trackEnabled = metrics && metrics.hosts.includes(location.hostname) && ['http:', 'https:'].includes(location.protocol) &&
    navigator.doNotTrack !== '1' && !navigator.globalPrivacyControl;
  function track(events) {
    if (!trackEnabled) return;
    const body = JSON.stringify({ version: metrics.version, device: view.matches ? 'mobile' : 'desktop', events });
    fetch(metrics.endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, keepalive: true }).catch(() => {});
  }
  track([{ name: 'page_view' }]);
  document.querySelectorAll('[data-trial]').forEach(link => link.addEventListener('click', () => track([
    { name: 'experience_cta', detail: link.dataset.trial, placement: 'experience' },
    { name: 'invitation_click', detail: link.dataset.trial, placement: 'experience' }
  ])));
  let couponWasOpen = coupon.open;
  coupon.addEventListener('toggle', () => {
    if (!couponWasOpen && coupon.open) {
      track([{ name: 'coupon_open', placement: 'experience' }]);
    }
    couponWasOpen = coupon.open;
    if (!supportsIntersectionObserver) loadCouponImage();
  });
  document.querySelector('[data-coupon-jump]').addEventListener('click', () => { coupon.open = true; });

  if (!supportsIntersectionObserver) return;
  const couponImageObserver = new IntersectionObserver(([entry], observer) => {
    if (!entry.isIntersecting) return;
    loadCouponImage();
    if (couponImage.hasAttribute('src')) observer.disconnect();
  }, { rootMargin: '240px 0px' });
  couponImageObserver.observe(couponImage);

  const impressions = new Map([
    [document.querySelector('#trial-qr-image'), 'qr_view'],
    [coupon.querySelector('summary'), 'coupon_view']
  ]);
  const impressionObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.intersectionRatio < .35) continue;
      const name = impressions.get(entry.target);
      if (name) track([{ name, placement: 'experience' }]);
      impressionObserver.unobserve(entry.target);
    }
  }, { threshold: .35 });
  impressions.forEach((_, node) => impressionObserver.observe(node));

  const bar = document.querySelector('#mobile-bar');
  const main = document.querySelector('#hero-cta');
  const closing = document.querySelector('.closing');
  let mainPast = false;
  let closingVisible = false;
  let couponVisible = false;
  const updateBar = () => { bar.hidden = !view.matches || !mainPast || closingVisible || (coupon.open && couponVisible); };
  const ctaObserver = new IntersectionObserver(entries => {
    for (const e of entries) {
      if (e.target === main) mainPast = !e.isIntersecting && e.boundingClientRect.bottom <= 0;
      if (e.target === closing) closingVisible = e.isIntersecting;
      if (e.target === coupon) couponVisible = e.isIntersecting;
    }
    updateBar();
  }, { threshold: 0 });
  ctaObserver.observe(main);
  ctaObserver.observe(closing);
  ctaObserver.observe(coupon);
  coupon.addEventListener('toggle', updateBar);
  view.addEventListener('change', updateBar);
})();
