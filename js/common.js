/* плавная прокурутка */
$(document).ready(function() {
    $("a.link").click(function() {
        $("html, body").animate({
            // ($(this).attr("href") : #id элемента
            // $($(this).attr("href")).offset().top : расстояние от начала документа до элемента
            scrollTop: ($($(this).attr("href")).offset().top - 100)
        }, {
            duration: 600,
            easing: "swing"
        });

        return false;
    });
});