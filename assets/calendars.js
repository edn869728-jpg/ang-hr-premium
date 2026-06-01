(function(){
  'use strict';
  window.ANG_HR_CALENDARS = window.ANG_HR_CALENDARS || {
    pad: function(n){ return String(n).padStart(2, '0'); },
    ymd: function(d){ d = d || new Date(); return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0'); }
  };
})();
