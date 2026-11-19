// Contact form: there is no server backend, so the form opens the visitor's
// email app with a pre-filled message addressed to the company mailbox.
// Localized strings come from data-* attributes on the <form>.
(function () {
  var form = document.getElementById('quote-form');
  if (!form) return;

  var status = form.querySelector('.form__status');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;

    var d = form.dataset;
    var value = function (id) { return (document.getElementById(id).value || '').trim(); };
    var name = value('f-name');
    var company = value('f-company');
    var email = value('f-email');
    var service = value('f-service');
    var details = value('f-msg');

    var subject = d.subject + ' – ' + service + (company ? ' – ' + company : '');
    var body = [
      d.labelName + ': ' + name,
      d.labelCompany + ': ' + (company || '-'),
      d.labelEmail + ': ' + email,
      d.labelService + ': ' + service,
      '',
      d.labelDetails + ':',
      details
    ].join('\r\n');

    window.location.href = 'mailto:' + d.to +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);

    if (status) status.textContent = d.sent;
  });
})();
