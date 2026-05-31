window.ANG_HR_CONFIG = {
  edition: 'premium',
  editionName: 'ANG HR Premium',

  apiBaseUrl: 'https://script.google.com/macros/s/AKfycbxw2-0Xw4nSDW_Pcb88fPmM6qFxJP1-d_Ofbyhk2xQmg2HZtZOC8YoDA6TYn901XHhJ/exec',
  gasUrl: 'https://script.google.com/macros/s/AKfycbxw2-0Xw4nSDW_Pcb88fPmM6qFxJP1-d_Ofbyhk2xQmg2HZtZOC8YoDA6TYn901XHhJ/exec',

  defaultPage: 'admin',

  features: {
    // 員工端
    employeeLogin: true,
    employeeHome: true,
    todayStatus: true,
    clockIn: true,
    clockOut: true,
    clockRecords: true,
    leave: true,
    clockFix: true,
    preselect: true,
    upload: true,
    notices: true,
    themeSave: true,

    // 打卡進階
    gpsClock: true,
    fieldClock: true,
    overtimeClock: true,
    iosShortcut: true,
    deviceBind: true,
    nfcReady: true,
    qrClockReady: true,

    // 管理端
    adminHome: true,
    leaveReview: true,
    clockFixReview: true,
    uploadReview: true,
    messageReview: true,
    noticePublish: true,
    preselectSummary: true,
    scheduleCreate: true,
    schedulePublish: true,
    employeeScheduleCalendar: true,
    salaryDraft: true,
    shiftView: true,

    // Premium 專屬
    creatorPermissionCenter: true,
    officialSalary: true,
    laborInsurance: true,
    healthInsurance: true,
    pension: true,
    archive: true,
    driveExport: true,
    advancedSystemSettings: true,

    // 多級審核
    multiLevelReview: true,
    customReviewFlow: true,
    currentStepReview: true,

    // 多店舖 / 分店
    multiBranch: true,
    branchManagement: true,
    crossBranchSupport: true,
    branchQuotaManagement: true,
    employeeQuotaManagement: true,

    // 權限 / 角色
    roleManagement: true,
    permissionManagement: true,
    creatorMode: true,
    adminMode: true,
    managerMode: true,
    employeeMode: true,

    // 系統設定
    brandSettings: true,
    deadlineSettings: true,
    salarySettings: true,
    shiftSettings: true,
    themeSettings: true,
    driveFolderSettings: true,

    // API / 串接
    apiSettings: true,
    webhook: true,
    lineNotify: true,
    externalIntegration: true,

    // 資料中心
    dataCenter: true,
    dataExport: true,
    backup: true,
    apiLogs: true,
    errorLogs: true,

    // 附件 / Drive
    driveUpload: true,
    driveAttachment: true,
    customDriveFolder: true,

    // 薪資進階
    salaryCycleSettings: true,
    salaryExport: true,
    salarySlipDownload: true,
    customSalaryRules: true,
    customOvertimeRules: true,

    // 公告 / 通知 / 留言
    employeeMessage: true,
    messageBoard: true,
    supervisorNotice: true,
    targetedNotice: true,
    recentActivities: true
  },

  limits: {
    includedBranches: 8,
    includedEmployees: 80,
    extraBranchPack: {
      branches: 1,
      employees: 5
    },
    extraEmployeePack: {
      employees: 10
    }
  }
};
