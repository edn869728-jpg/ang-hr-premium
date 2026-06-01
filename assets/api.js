(function(){
  'use strict';

  function cfg(){ return window.ANG_HR_CONFIG || {}; }
  function apiUrl(){ return cfg().apiBaseUrl || cfg().gasUrl || ''; }
  function hasGasUrl(){ return /^https:\/\/script\.google\.com\/macros\/s\//.test(apiUrl()); }

  function normalizeResponse(data){
    if (!data) return { ok:false, message:'沒有收到系統回應' };
    if (typeof data === 'string') {
      try { return JSON.parse(data); } catch(e) { return { ok:true, raw:data }; }
    }
    if (data.success === true && data.ok !== true) data.ok = true;
    if (data.status === 'success' && data.ok !== true) data.ok = true;
    return data;
  }

  function demo(action, payload){
    payload = payload || {};
    var id = String(payload.id || payload.employeeId || payload.account || '').trim().toUpperCase();
    if (action === 'login') {
      if (!id) return Promise.resolve({ ok:false, message:'請輸入員工編號' });
      var role = (id === 'ANG0603') ? 'creator' : ((id === 'ANG0601' || id === 'ANG0606') ? 'admin' : 'employee');
      return Promise.resolve({ ok:true, id:id, employeeId:id, name:id, nickname:id, role:role, token:'demo-token-' + Date.now(), demo:true });
    }
    if (action === 'requestPasswordReset') return Promise.resolve({ ok:true, message:'已送出重設申請（Demo）' });
    if (action === 'changePassword') return Promise.resolve({ ok:true, message:'密碼已更新（Demo）' });
    if (action === 'resetEmployeePassword') return Promise.resolve({ ok:true, message:'密碼已重設（Demo）' });
    return Promise.resolve({ ok:true, data:[], list:[], records:[], message:'Demo fallback：' + action });
  }

  async function post(action, payload){
    payload = payload || {};
    var url = apiUrl();
    if (!hasGasUrl()) return demo(action, payload);

    var body = Object.assign({}, payload, { action: action });
    var qs = new URLSearchParams();
    qs.set('action', action);
    qs.set('payload', JSON.stringify(payload));
    Object.keys(payload).forEach(function(k){
      if (payload[k] !== undefined && payload[k] !== null && typeof payload[k] !== 'object') qs.set(k, String(payload[k]));
    });

    async function tryPostJson(){
      var res = await fetch(url, {
        method:'POST',
        mode:'cors',
        headers:{ 'Content-Type':'text/plain;charset=utf-8' },
        body:JSON.stringify(body)
      });
      var text = await res.text();
      return normalizeResponse(text);
    }

    async function tryGet(){
      var res = await fetch(url + '?' + qs.toString(), { method:'GET', mode:'cors' });
      var text = await res.text();
      return normalizeResponse(text);
    }

    try {
      var out = await tryPostJson();
      if (out && (out.ok || out.success || out.status === 'success' || out.message || out.msg || out.token || out.id || out.employeeId)) return normalizeResponse(out);
      return out;
    } catch(postErr) {
      try { return await tryGet(); }
      catch(getErr) {
        if (cfg().allowDemoFallback) return demo(action, payload);
        return { ok:false, message:(getErr && getErr.message) || (postErr && postErr.message) || 'API 連線失敗' };
      }
    }
  }

  window.ANG_HR_API = { post: post, request: post, apiUrl: apiUrl, hasGasUrl: hasGasUrl };
})();
