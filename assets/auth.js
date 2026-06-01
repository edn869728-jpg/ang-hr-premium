(function(){
  'use strict';

  var KEYS = {
    id: 'ang_employee_id',
    name: 'ang_employee_name',
    role: 'ang_employee_role',
    token: 'ang_hr_token',
    legacyLogin: 'emp_logged_in',
    legacyName: 'emp_name',
    legacyIsLoggedIn: 'isLoggedIn',
    legacyLoginId: 'loginId'
  };

  function cleanId(v){
    return String(v || '').trim().replace(/[^A-Za-z0-9_-]/g, '').toUpperCase();
  }

  function cleanRole(v){
    return String(v || 'employee').trim().toLowerCase();
  }

  function saveLogin(res){
    res = res || {};
    var id = cleanId(res.id || res.employeeId || res.account || res.userId || localStorage.getItem(KEYS.id));
    var name = String(res.name || res.nickname || res.displayName || id || '員工');
    var role = cleanRole(res.role || res.permission || 'employee');
    var token = String(res.token || res.loginToken || res.sessionToken || 'login-token-' + Date.now());

    if (!id) return false;

    localStorage.setItem(KEYS.id, id);
    localStorage.setItem(KEYS.name, name);
    localStorage.setItem(KEYS.role, role);
    localStorage.setItem(KEYS.token, token);

    localStorage.setItem(KEYS.legacyLogin, id);
    localStorage.setItem(KEYS.legacyName, name);
    localStorage.setItem(KEYS.legacyIsLoggedIn, 'true');
    localStorage.setItem(KEYS.legacyLoginId, id);
    return true;
  }

  function getUser(){
    var id = cleanId(localStorage.getItem(KEYS.id) || localStorage.getItem(KEYS.legacyLogin) || localStorage.getItem(KEYS.legacyLoginId));
    if (!id) return null;
    return {
      id: id,
      employeeId: id,
      name: localStorage.getItem(KEYS.name) || localStorage.getItem(KEYS.legacyName) || id,
      role: cleanRole(localStorage.getItem(KEYS.role) || 'employee'),
      token: localStorage.getItem(KEYS.token) || ''
    };
  }

  function isLoggedIn(){
    return !!getUser();
  }

  function logout(){
    Object.keys(KEYS).forEach(function(k){ localStorage.removeItem(KEYS[k]); });
    sessionStorage.clear();
    location.href = 'login.html?v=11';
  }

  function requireLogin(roleGroup){
    var user = getUser();
    if (!user) {
      location.href = 'login.html?v=11';
      return null;
    }
    if (roleGroup === 'admin') {
      var r = cleanRole(user.role);
      if (!(r === 'admin' || r === 'manager' || r === 'creator')) {
        location.href = 'employee_home.html?v=11';
        return null;
      }
    }
    return user;
  }

  window.ANG_HR_AUTH = {
    saveLogin: saveLogin,
    getUser: getUser,
    isLoggedIn: isLoggedIn,
    logout: logout,
    requireLogin: requireLogin,
    cleanId: cleanId
  };
})();
