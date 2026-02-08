document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('js-contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('お問い合わせありがとうございます。このフォームはデモンストレーション用のため、実際には送信されません。');
            this.reset();
        });
    }
});