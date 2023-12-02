import moment from "moment";

moment.locale("az", {
  months:
    "ocak_şubat_mart_nisan_mayıs_haziran_temmuz_ağustos_eylül_ekim_kasım_aralık".split(
      "_"
    ),
  monthsShort: "oca_şub_mar_nis_may_haz_tem_ağu_eyl_eki_kas_ara".split("_"),
  monthsParseExact: true,
  weekdays: "pazar_pazartesi_salı_çarşamba_perşembe_cuma_cumartesi".split("_"),
  weekdaysShort: "paz_pt_sali_çar_per_cu_cmt".split("_"),
  weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd D MMMM YYYY HH:mm",
  },
  calendar: {
    sameDay: "[Bugün saat] LT",
    nextDay: "[Sabah saat] LT",
    nextWeek: "dddd [saat] LT",
    lastDay: "[Dünən saat] LT",
    lastWeek: "dddd [keçən həftə saat] LT",
    sameElse: "L",
  },
  relativeTime: {
    future: "%s içinde",
    past: "%s əvvəl",
    s: "birkaç saniyə",
    m: "bir dəqiqə",
    mm: "%d dəqiqə",
    h: "bir saat",
    hh: "%d saat",
    d: "bir gün",
    dd: "%d gün",
    M: "bir ay",
    MM: "%d ay",
    y: "bir il",
    yy: "%d il",
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: function (number) {
    return number + ".";
  },
  meridiemParse: /ÖÖ|ÖS/,
  isPM: function (input) {
    return input.charAt(0) === "Ö";
  },
  meridiem: function (hours, minutes, isLower) {
    return hours < 12 ? "ÖÖ" : "ÖS";
  },
  week: {
    dow: 1, // Pazartesi haftanın ilk günüdür.
    doy: 4, // Yılın ilk haftasını belirlemede kullanılır.
  },
});
