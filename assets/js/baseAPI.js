/*
 * @Author: rowG
 * @Date: 2021-05-21 16:48:37
 * @LastEditTime: 2021-05-21 17:16:39
 * @FilePath: \Liqifeng\assets\js\baseAPI.js
 */
$.ajaxPrefilter(function (options) {
	options.url = 'http://api-breakingnews-web.itheima.net' + options.url;
});
