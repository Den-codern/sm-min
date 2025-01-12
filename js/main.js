function animateBg() {
  $(document).mousemove(function (t) {
    if (!(window.innerWidth < 768)) {
      var a, e, s, i;
      $(".modal").hasClass("modal--active") ||
        ((a = t.pageX / window.innerWidth),
        (e = t.pageY / window.innerHeight),
        (s = 0),
        (i = 0),
        (s = 10 * (a -= 1)),
        (i = 10 * (e -= 1)),
        $(".main_img_1").css(
          "transform",
          `translate3d(${3 * s}px, ${3 * i}px, 0)`
        ),
        $(".main_img_2").css(
          "transform",
          `translate3d(${2 * s}px, ${2 * i}px, 0)`
        ),
        $(".technologies_content").css(
          "transform",
          `translate3d(${2 * s}px, ${2 * i}px, 0)`
        ));
    }
  });
}
function incTab() {
  var t = document.querySelectorAll(".ind_list_item"),
    a = document.querySelectorAll(".inc_icon_tab"),
    indText = document.querySelectorAll(".ind-text-tab");
  var i = "";
  for (let ind = 0; ind < t.length; ind++) {
    t[ind].addEventListener("click", function (e) {
       
      for (let i = 0; i < t.length; i++) {
        t[i].classList.remove("ind_list_item--active");
      }
      if (e.target.parentNode.classList.contains("ind_list_item")) {
        e.target.parentNode.classList.add("ind_list_item--active");
        i = e.target.parentNode.getAttribute("data-tab");
      } else {
        e.target.classList.add("ind_list_item--active");
        i = e.target.getAttribute("data-tab");
      }
      for (let i = 0; i < a.length; i++) {
        a[i].style.display = "none";
       
      }
      for (let i = 0; i < indText.length; i++) {
       
        indText[i].style.display = "none";
      }
      $(`.inc_icon_tab[data-content='${i}']`).fadeIn(200),
        $(`.ind-text-tab[data-content='${i}']`).fadeIn(200);
    });
  }

  a[0].style.display = "block";
  for (let i = 0; i < indText.length; i++) {
    indText[i].style.display = "none";
  }
  indText[0].style.display = "block";

  //   $(t).click(function (s) {
  //     var i = "";
  //     $(t).removeClass("ind_list_item--active"),
  //       s.target.parentNode.classList.contains("ind_list_item")
  //         ? (s.target.parentNode.classList.add("ind_list_item--active"),
  //           (i = $(s.target.parentNode).attr("data-tab")))
  //         : (s.target.classList.add("ind_list_item--active"),
  //           (i = $(s.target).attr("data-tab"))),
  //       $(a).css({ display: "none" }),
  //       $(e).css({ display: "none" }),
  //       $(`.inc_icon_tab[data-content='${i}']`).fadeIn(200),
  //       $(`.ind-text-tab[data-content='${i}']`).fadeIn(200);
  //   }),
  //     $(a).first().css({ display: "block" }),
  //     $(e).css({ display: "none" }),
  //     $(e).first().css({ display: "block" });
}
function cardsAnimation() {
  function t() {
    var t = 5;
    $(".about_card").each(function (a) {
      $(".about_card")
        .eq(a)
        .css({
          top: `-${(a + 1) * 19}px`,
          left: `${(a + 1) * 26}px`,
          zIndex: `${t}`,
        }),
        t--;
    });
  }
  t(),
    $(".card").click(function (a) {
      if ($(a.target).attr("data-card")) {
        var e,
          s = $(a.target).attr("data-card");
        $(`.about_card[data-card="${s}"]`).remove(),
          $(".about_cards").prepend(
            ((e = s),
            `<div class="about_card" data-card="${e}"><img src="img/card${e}.png" alt=""/></div>`)
          ),
          t();
      }
    });
}
function slider() {
  var t = new Number($(".quiz_progress").css("width").replace("px", "")) / 5,
    a = 0,
    e = 1,
    s = 0,
    i = {},
    n = {
      projectType: "",
      projectPlatform: "",
      projectState: "",
      projectStart: "",
      contact: { username: "", phone: "", email: "", comment: "" },
    };
  $(".brief_quiz_btn-prev").css({ display: "none" }),
    $(".quiz_content").css({ display: "none" }),
    $(".quiz_content").first().css({ display: "block" }),
    $(".brief_breadcrumbs_item")
      .first()
      .addClass("brief_breadcrumbs_item--active"),
    $(".quiz_list_item").click(function (t) {
      var a = "",
        e = "",
        r = "";
      $(".quiz_list_item").removeClass("quiz_list_item--active"),
        $(".brief_breadcrumbs_item")
          .eq(s)
          .addClass("brief_breadcrumbs_item--filled"),
        $(t.target).is("img")
          ? t.target.parentNode.classList.contains("breif_left_icon")
            ? $(t.target.parentNode.parentNode).addClass(
                "quiz_list_item--active"
              )
            : ((a = $(t.target.parentNode).attr("data-value")),
              (e = $(t.target.parentNode).attr("data-prop")),
              (r = $(t.target.parentNode).attr("data-quiz")))
          : t.target.parentNode.classList.contains("quiz_list_item")
          ? ($(t.target.parentNode).addClass("quiz_list_item--active"),
            (a = $(t.target.parentNode).attr("data-value")),
            (e = $(t.target.parentNode).attr("data-prop")),
            (i[(r = $(t.target.parentNode).attr("data-quiz"))] = a))
          : ($(t.target).addClass("quiz_list_item--active"),
            (a = $(t.target).attr("data-value")),
            (e = $(t.target).attr("data-prop")),
            (i[(r = $(t.target).attr("data-quiz"))] = a)),
        (function t(a) {
          for (let e in a)
            $(`.quiz_list_item[data-value="${a[e]}"]`).addClass(
              "quiz_list_item--active"
            );
        })(i),
        (n[e] = a),
        $(".brief_breadcrumbs_item .brief_breadcrumbs_item_name")
          .eq(r)
          .text(n[e]);
    }),
    $(".quiz_list_item").click(function () {
      $(".quiz_content").eq(a).fadeOut(),
        $(".brief_breadcrumbs_item").removeClass(
          "brief_breadcrumbs_item--active"
        ),
        (itemPick = ""),
        a++,
        ++s > 4 && (s = 4),
        "false" == $(".quiz_content").eq(a).attr("data-pass") && e++,
        a > 4 && (a = 4),
        e > 5 && a > 4 && (e = 5),
        4 == a &&
          ($(".brief_quiz_btn-submit").css({ display: "inline-block" }),
          $(".brief_quiz_btn-next").css({ display: "none" })),
        $(".brief_breadcrumbs_item")
          .eq(s)
          .addClass("brief_breadcrumbs_item--active"),
        $(".progress_bar").css({ width: `${(a + 1) * t - 4}` }),
        $(".quiz_step span").text(a + 1),
        $(".quiz_content").eq(a).attr("data-pass", "true"),
        setTimeout(function () {
          $(".quiz_content").eq(a).fadeIn();
        }, 400),
        a > 0
          ? $(".brief_quiz_btn-prev").css({ display: "inline-block" })
          : $(".brief_quiz_btn-prev").css({ display: "none" });
    }),
    $(".brief_quiz_btn-prev").click(function () {
      $(".quiz_content").eq(a).fadeOut(),
        $(".brief_quiz_btn-submit").css({ display: "none" }),
        $(".brief_quiz_btn-next").css({ display: "inline-block" }),
        a--,
        --s < 0 && (s = 0),
        a < 0 && (a = 0),
        $(".brief_breadcrumbs_item").removeClass(
          "brief_breadcrumbs_item--active"
        ),
        $(".brief_breadcrumbs_item")
          .eq(s)
          .addClass("brief_breadcrumbs_item--active"),
        $(".progress_bar").css({ width: `${(a + 1) * t - 4}` }),
        $(".quiz_step span").text(a + 1),
        setTimeout(function () {
          $(".quiz_content").eq(a).fadeIn();
        }, 400),
        a > 0
          ? $(".brief_quiz_btn-prev").css({ display: "inline-block" })
          : $(".brief_quiz_btn-prev").css({ display: "none" });
    }),
    $(".brief_quiz_btn-submit").click(function t() {
      console.log(n);
    });
}
function techSlider() {
  $(".technology_list_item a").click(function (t) {
    t.preventDefault();
    var a = $(t.target).attr("data-content");
    console.log(t.target),
      $(".technologies_modal").css({ display: "block" }),
      $(`.technologies_tags[data-content="${a}"]`).css({ display: "flex" }),
      $.fn.fullpage.setAllowScrolling(!1),
      $(".tag_close_btn").click(function () {
        $(".technologies_modal").css({ display: "none" }),
          $.fn.fullpage.setAllowScrolling(!0),
          $(".technologies_tags").css({ display: "none" });
      });
  }),
    $(".technologies_tags").css({ display: "none" });
}
function tagCanvasResponse() {
  767 >= $(window).width() &&
    ($("canvas").attr("width", "600"), $("canvas").attr("height", "500")),
    600 >= $(window).height() && $("canvas").attr("height", "400");
}
function typingAnimation() {
  new Typed(".area_code", {
    strings: [
      `<span style="color: #f083c3">public function index() </span><br /><span style="color: #000000">-</span><br /><span style="color: #000000">$this-load-›model('feedbac"</span><br /><span style="color: #000000">$data['feedbacks'] = $this- fee </span><br /><span style="color: #000000"><span style="color: #f083c3">if</span>(count($data['<span style="color: #807bed">feedbacks</span>']) \xa7 </span><br /><span style="color: #000000">$this\xf7load-›view('admin/feedbl</span><br /><span style="color: #000000">try else { </span><br /><span style="color: #000000">t</span><br /><span style="color: #f083c3">// you can change the new variable </span><br /><span style="color: #f083c3">}</span><br /><span style="color: #f083c3">//Controller Feedback pada method</span><br /><span style="color: #000000">$this-load-›view('<span style="color: #807bed">/feedback</span></span><br />`,
      `<span style="color: #f083c3">public function index() </span><br /><span style="color: #000000">-</span><br /><span style="color: #000000">$this-load-›model('feedbac"</span><br /><span style="color: #000000">$data['feedbacks'] = $this- fee </span><br /><span style="color: #000000"><span style="color: #f083c3">if</span>(count($data['<span style="color: #807bed">feedbacks</span>']) \xa7 </span><br /><span style="color: #000000">$this\xf7load-›view('admin/feedbl</span><br /><span style="color: #000000">try else { </span><br /><span style="color: #000000">t</span><br /><span style="color: #f083c3">// you can change the new variable </span><br /><span style="color: #f083c3">}</span><br /><span style="color: #f083c3">//Controller Feedback pada method</span><br /><span style="color: #000000">$this-load-›view('<span style="color: #807bed">/feedback</span></span><br />`,
    ],
    loop: !0,
  });
}
$(document).ready(function () {
  var t = 0,
    a = "";
  AOS.init({ once: !0 }),
    $(".keys_list").slick({
      variableWidth: !0,
      arrows: !1,
      touchThreshold: 100,
      slidesToScroll: 1,
    }),
    $(".nav-mobi").slick({
      variableWidth: !0,
      infinite: !1,
      touchMove: !1,
      adaptiveHeight: !0,
      swipe: !0,
      prevArrow:
        "<button type='button' class='slick-prev pull-left'><img src='img/slider-arrow-left.svg' alt=''/></button>",
      nextArrow:
        "<button type='button' class='slick-next pull-right'><img src='img/slider-arrow-right.svg' alt=''/></button>",
    }),
    $(".nav-mobi").on("afterChange", function (e, s, i) {
      (t = i),
        (a = s.$slides[i].children[0]),
        $(".tab-pane").css({ display: "none" }),
        $(`.tab-pane[data-slick-index="${t}"]`).fadeTo(50, 0.5).fadeTo(50, 1);
    }),
    $(".nav-mobi-wrap .nav-link ").click(function (t) {
      var a = $(t.target).attr("data-slick-index")
        ? $(t.target).attr("data-slick-index")
        : $(t.target.parentNode.parentNode).attr("data-slick-index");
      $(".tab-pane").css({ display: "none" }),
        $(`.tab-pane[data-slick-index="${a}"]`).fadeTo(50, 0.5).fadeTo(50, 1);
    }),
    tagCanvasResponse(),
    incTab(),
    cardsAnimation(),
    slider(),
    animateBg(),
    techSlider(),
    typingAnimation();
});
