let htmlpath = location.href;

// 限定全局样式生效路径
if (
    /^https:\/\/iaaa\.pku\.edu\.cn\/\S*$|^https:\/\/course\.pku\.edu\.cn\/\S*$|^https:\/\/livingroomhqy\.pku\.edu\.cn\/\S*$/.test(
        htmlpath
    )
) {
    import('./css/main.css');
    console.log('[PKU Art] main.css imported');
}

// 限定全局样式生效路径
if (
    /^https:\/\/iaaa\.pku\.edu\.cn\/\S*$|^https:\/\/course\.pku\.edu\.cn\/\S*$|^https:\/\/livingroomhqy\.pku\.edu\.cn\/\S*$/.test(
        htmlpath
    )
) {
    import('./css/arco-palette.css');
    console.log('[PKU Art] arco-palette.css imported');
}

// iaaa登录界面
if (/^https:\/\/iaaa\.pku\.edu\.cn\/\S*$/.test(htmlpath)) {
    import('./css/iaaaOAuthPage.css');
    console.log('[PKU Art] iaaaOAuthPage.css imported');
}

// 课程网首页
// courseLoginPage
if (/^https:\/\/course\.pku\.edu\.cn\/webapps\/login\S*$|^https:\/\/course\.pku\.edu\.cn[\/]?$/.test(htmlpath)) {
    import('./css/courseLoginPage.css');
    console.log('[PKU Art] courseLoginPage.css imported');
}

// 首页
// courseHomePage
if (
    /^https:\/\/course\.pku\.edu\.cn\/webapps\/?$|^https:\/\/course\.pku\.edu\.cn\/webapps\/portal\/\S*$/.test(htmlpath)
) {
    import('./css/courseHomePage.css');
    console.log('[PKU Art] courseHomePage.css imported');
}

// 课程页面框架
// courseContent
if (/^https:\/\/course\.pku\.edu\.cn\/webapps\/\S*course_id\S*$/.test(htmlpath)) {
    import('./css/courseContent.css');
    console.log('[PKU Art] courseContent.css imported');
}

// 课程通知界面
// courseAnnouncement
if (/^https:\/\/course\.pku\.edu\.cn\/webapps\/blackboard\S*announcement\S*$/.test(htmlpath)) {
    import('./css/courseAnnouncement.css');
    console.log('[PKU Art] courseAnnouncement.css imported');
}

// ClassIn界面，实际和其他界面差不多
// courseClassin
// https://course.pku.edu.cn/webapps/bb-ClassIn-BBLEARN/classinCourseClass/getHomeClassList.do?course_id=_51512_1&page=1
if (/^https:\/\/course\.pku\.edu\.cn\/webapps\S*classinCourseClass\S*$/.test(htmlpath)) {
    import('./css/courseClassin.css');
    console.log('[PKU Art] courseClassin.css imported');
}

// 回放界面
// courseVideolist
if (/^https:\/\/course.pku.edu.cn\/webapps\S*videoList\S*$/.test(htmlpath)) {
    import('./css/courseVideolist.css');
    console.log('[PKU Art] courseVideolist.css imported');
}

// 其他个人成绩界面
// courseOther
if (/^https:\/\/course\.pku\.edu\.cn\/webapps\S*((discussionboard)|(groupContentList))\S*$/.test(htmlpath)) {
    import('./css/courseOther.css');
    console.log('[PKU Art] courseOther.css imported');
}

// 个人成绩界面
// courseClassGrade
if (/^https:\/\/course\.pku\.edu\.cn\/webapps\S*myGrades\S*course_id\S*is_stream=false\S*$/.test(htmlpath)) {
    import('./css/courseClassGrade.css');
    console.log('[PKU Art] courseClassGrade.css imported');
}

// 文件列表界面
// courseListContent
if (/^https:\/\/course\.pku\.edu\.cn\/webapps\S*listContent\S*$/.test(htmlpath)) {
    import('./css/courseListContent.css');
    console.log('[PKU Art] courseListContent.css imported');
}

// 查看尝试界面
// courseViewAttempt
if (/^https:\/\/course\.pku\.edu\.cn\/webapps\S*viewAttempts\S*$/.test(htmlpath)) {
    import('./css/courseViewAttempt.css');
    console.log('[PKU Art] courseViewAttempt.css imported');
}

// 全局工具界面框架
// courseToolFrame
if (/^https:\/\/course\.pku\.edu\.cn\/webapps\S*toolId\S*$/.test(htmlpath)) {
    import('./css/courseToolFrame.css');
    console.log('[PKU Art] courseToolFrame.css imported');
}

// 全局通知界面
// courseToolAlert
// https://course.pku.edu.cn/webapps/bb-social-learning-bb_bb60/execute/mybb?cmd=display&toolId=AlertsOnMyBb_____AlertsTool
if (/^https:\/\/course\.pku\.edu\.cn\/webapps\/streamViewer\/streamViewer\S*streamName=alerts\S*$/.test(htmlpath)) {
    import('./css/courseToolAlert.css');
    console.log('[PKU Art] courseToolAlert.css imported');
}

// 全局成绩界面
// courseToolGrade
// https://course.pku.edu.cn/webapps/bb-social-learning-bb_bb60/execute/mybb?cmd=display&toolId=MyGradesOnMyBb_____MyGradesTool
if (/^https:\/\/course\.pku\.edu\.cn\/webapps\/streamViewer\/streamViewer\S*streamName=mygrades\S*$/.test(htmlpath)) {
    import('./css/courseToolGrade.css');
    console.log('[PKU Art] courseToolGrade.css imported');
}

// 课程成绩帧框
// courseToolGradeClass
// https://course.pku.edu.cn/webapps/bb-mygrades-bb_bb60/myGrades?course_id=_64001_1&stream_name=mygrades
if (/^https:\/\/course\.pku\.edu\.cn\/webapps\/\S*course_id\S*stream_name=mygrades$/.test(htmlpath)) {
    import('./css/courseToolGradeClass.css');
    console.log('[PKU Art] courseToolGradeClass.css imported');
}

// 单一成绩帧框
// courseToolGradeItem
// https://course.pku.edu.cn/webapps/bb-mygrades-bb_bb60/myGrades?course_id=_64001_1&stream_name=mygrades_d&gradable_item_id=_194000_1&course_membership_id=_5933797_1
if (
    /^https:\/\/course\.pku\.edu\.cn\/webapps\/\S*course_id\S*stream_name=mygrades_d\S*gradable_item_id\S*$/.test(
        htmlpath
    )
) {
    import('./css/courseToolGradeItem.css');
    console.log('[PKU Art] courseToolGradeItem.css imported');
}

// 文件预览界面
// courseFileEmbed
// https://course.pku.edu.cn/webapps/blackboard/execute/content/file?cmd=view&content_id=_836702_1&course_id=_64964_1
if (/^https:\/\/course\.pku\.edu\.cn\/webapps\/\S*content\/file\?cmd=view\S*$/.test(htmlpath)) {
    import('./css/courseFileEmbed.css');
    console.log('[PKU Art] courseFileEmbed.css imported');
}

// 文件上传界面
// courseAssignmentUpload
// https://course.pku.edu.cn/webapps/assignment/uploadAssignment?content_id=_862639_1&course_id=_64001_1&group_id=&mode=view

// 作业复查界面
// courseAssignmentReview
// https://course.pku.edu.cn/webapps/assignment/uploadAssignment?content_id=_862403_1&course_id=_64001_1&group_id=&mode=view#
if (/^https:\/\/course\.pku\.edu\.cn\/webapps\/\S*assignment\/uploadAssignment\?\S*$/.test(htmlpath)) {
    import('./css/courseAssignmentUpload.css');
    console.log('[PKU Art] courseAssignmentUpload.css imported');
}

// 全局界面
// courseGlobalPage
// https://course.pku.edu.cn/webapps/blackboard/execute/announcement?method=search&context=mybb&handle=my_announcements&returnUrl=/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_3_1&tabId=_1_1&forwardUrl=index.jsp
// https://course.pku.edu.cn/webapps/bb-streammedia-hqy-bb_bb60/playVideo.action?hqyCourseId=33467&hqySubId=776419&kcwybm=21222-012-01233170-0006166248-1
if (
    /^https:\/\/course\.pku\.edu\.cn\/webapps\/\S*context=mybb\S*$|^https:\/\/course\.pku\.edu\.cn\/webapps\/blackboard\/execute\/announcement$|^https:\/\/course\.pku\.edu\.cn\/webapps\/\S*playVideo\S*$/.test(
        htmlpath
    )
) {
    import('./css/courseGlobalPage.css');
    console.log('[PKU Art] courseGlobalPage.css imported');
}

// 全局通知界面
// courseGlobalAnnouncement
// https://course.pku.edu.cn/webapps/blackboard/execute/announcement?method=search&context=mybb&handle=my_announcements&returnUrl=/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_3_1&tabId=_1_1&forwardUrl=index.jsp
if (
    /^https:\/\/course\.pku\.edu\.cn\/webapps\/\S*announcement\S*context=mybb\S*$|^https:\/\/course\.pku\.edu\.cn\/webapps\/blackboard\/execute\/announcement$/.test(
        htmlpath
    )
) {
    import('./css/courseGlobalAnnouncement.css');
    console.log('[PKU Art] courseGlobalAnnouncement.css imported');
}

// 回放界面
// courseVideoPlay
// https://course.pku.edu.cn/webapps/bb-streammedia-hqy-bb_bb60/playVideo.action?hqyCourseId=33467&hqySubId=776419&kcwybm=21222-012-01233170-0006166248-1
if (/^https:\/\/course\.pku\.edu\.cn\/webapps\/\S*playVideo\S*$/.test(htmlpath)) {
    import('./css/courseVideoPlay.css');
    console.log('[PKU Art] courseVideoPlay.css imported');
}

// 回放帧框
// courseVideoPlayFrane
// https://livingroomhqy.pku.edu.cn/player?course_id=33467&sub_id=776419
if (/^https:\/\/livingroomhqy\.pku\.edu\.cn\/player\?course_id\S*$/.test(htmlpath)) {
    import('./css/courseVideoPlayFrame.css');
    console.log('[PKU Art] courseVideoPlayFrame.css imported');
}

// 任务界面
// courseTask
// https://course.pku.edu.cn/webapps/blackboard/execute/taskView?course_id=&task_id=_563_1

if (/^https:\/\/course\.pku\.edu\.cn\/webapps\/\S*taskView\S*$/.test(htmlpath)) {
    import('./css/courseTask.css');
    console.log('[PKU Art] courseTask.css imported');
}