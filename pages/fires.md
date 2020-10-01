---
title: Oregon Fire Relief
permalink: /fires/index.html
eleventyExcludeFromCollections: true
---
<div class="lang-switch">
  <div>Language/Idioma:</div>
  <a data-lang="to-eng" class="lang-btn active" href="#">English</a>
  <a data-lang="to-esp" class="lang-btn" href="#">Español</a>
</div>

<!-- english version -->
<div data-lang="eng">
  <div style="margin-bottom: 2rem">
    Do you need help because you've been affected by the Sept 2020 fires in Oregon?
    <a href="/fire-help/" target="_blank" class="button" style="margin-top: 1rem; background-color: #dc0b0b">I need help</a>
  </div>
  <hr style="margin-bottom: 2rem">
  <div style="margin-bottom: 2rem">
    Able to join BTE in providing mutual aid to fire survivors and evacuees?
    <a href="/fire-volunteer/" target="_blank" class="button" style="margin-top: 1rem; background-color: #087acc">I'd like to volunteer my time</a>
  </div>
  <hr style="margin-bottom: 2rem">
  <div style="margin-bottom: 2rem">
    Do you have some spare essential items or can assist us with acquiring and/or delivering them for others who have been affected by the fires in Oregon?
    <a href="/fire-donate/" target="_blank" class="button" style="margin-top: 1rem; background-color: #2c52a7">I can help with supplies</a>
  </div>
  <hr style="margin-bottom: 2rem">
  <div style="margin-bottom: 2rem">
    Would you like to support Boop Troop's relief efforts with a financial contribution? All funds go directly to provide relief to those displaced by the wildfires in Oregon and for efforts to help communities rebuild.
    <div style="display: flex; justify-content: space-between">
      <a href="https://www.paypal.com/biz/fund?id=9H82HTQH46S3S" target="_blank" class="button" style="margin-top: 1rem; background-color: #1a8e18; width: 49%">Donate with Paypal</a>
      <a href="https://venmo.com/booptroopeugene" target="_blank" class="button" style="margin-top: 1rem; background-color: #1a8e18; width: 49%">Donate with Venmo</a>
    </div>
  </div>
  <hr style="margin-bottom: 2rem">

  <h2>How your donations are being spent</h2>
  <p>Every dollar donated goes back into the community. Check out our <a href="https://www.facebook.com/booptroopeugene/posts/162893318803552" target="_blank">facebook posts</a> for updates and receipts for purchases showing exactly where your money is going and how we're helping our community.</p>
</div>
<!-- / english version -->

<!-- spanish version -->
<div data-lang="esp">
  <div style="margin-bottom: 2rem">
    ¿Necesita ayuda porque se vio afectado por los incendios de septiembre de 2020 en Oregon?
    <a href="/fire-help-esp/" target="_blank" class="button" style="margin-top: 1rem; background-color: #dc0b0b">Necesito ayuda</a>
  </div>
  <hr style="margin-bottom: 2rem">
  <div style="margin-bottom: 2rem">
    ¿Puede unirse a BTE para brindar ayuda mutua a sobrevivientes de incendios y evacuados?
    <a href="/fire-volunteer-esp/" target="_blank" class="button" style="margin-top: 1rem; background-color: #087acc">Me gustaría ofrecer mi tiempo como voluntario</a>
  </div>
  <hr style="margin-bottom: 2rem">
  <div style="margin-bottom: 2rem">
    ¿Tiene algunos artículos esenciales de repuesto o puede ayudarnos a adquirirlos y / o entregarlos a otras personas que se han visto afectadas por los incendios en Oregon?
    <a href="/fire-donate-esp/" target="_blank" class="button" style="margin-top: 1rem; background-color: #2c52a7">Puedo ayudar con los suministros</a>
  </div>
  <hr style="margin-bottom: 2rem">
  <div style="margin-bottom: 2rem">
    ¿Le gustaría apoyar los esfuerzos de ayuda de Boop Troop con una contribución financiera? Todos los fondos se destinan directamente a brindar ayuda a los desplazados por los incendios forestales en Oregón y a los esfuerzos para ayudar a las comunidades a reconstruirse.
    <div style="display: flex; justify-content: space-between">
      <a href="https://www.paypal.com/biz/fund?id=9H82HTQH46S3S" target="_blank" class="button" style="margin-top: 1rem; background-color: #1a8e18; width: 49%">Donar con Paypal</a>
      <a href="https://venmo.com/booptroopeugene" target="_blank" class="button" style="margin-top: 1rem; background-color: #1a8e18; width: 49%">Dona con Venmo</a>
    </div>
  </div>
  <hr style="margin-bottom: 2rem">

  <h2>Cómo se gastan sus donaciones</h2>
  <p>Cada dólar donado regresa a la comunidad. Consulte <a href="https://www.facebook.com/booptroopeugene/posts/162893318803552" target="_blank">publicaciones de Facebook</a> para obtener actualizaciones y recibos de compras que muestren exactamente a dónde va su dinero y cómo estamos ayudando a nuestra comunidad.</p>
</div>
<!-- / spanish version -->


<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script>
  $(document).ready(function () {
    var headline = $('.main-col h1');
    $('[data-lang="esp"]').hide();
    $('a.lang-btn').click(function (e) {
      if ( $(this).hasClass('active') ) {
        e.preventDefault();
      } else {
        e.preventDefault();
        if ( $(this).data('lang') == "to-esp" ) {
          $('[data-lang="eng"]').hide();
          $('[data-lang="esp"]').show();
          headline.html("Alivio de incendios de Oregon");
        }
        if ( $(this).data('lang') == "to-eng" ) {
          $('[data-lang="esp"]').hide();
          $('[data-lang="eng"]').show();
          headline.html("Oregon Fire Relief");
        }
        $(this).addClass('active');
        $('.lang-btn').not(this).removeClass('active');
      }
    });
  });
</script>