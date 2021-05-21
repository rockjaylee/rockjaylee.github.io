/*
 * @Author: rowG
 * @Date: 2021-05-21 10:34:55
 * @LastEditTime: 2021-05-21 17:17:17
 * @FilePath: \Liqifeng\assets\js\login.js
 */
$(function () {
	// 点击切换login和signin
	$('#link_reg').on('click', function () {
		$('.login-box').hide();
		$('.reg-box').show();
		$('.loginAndRegBox').css('height', '310px');
	});
	$('#link_login').on('click', function () {
		$('.reg-box').hide();
		$('.login-box').show();
		$('.loginAndRegBox').css('height', '250px');
	});

	//自定义表单验证规则pwd repwd
	let form = layui.form;
	form.verify({
		pwd: [/^[\S]{6,12}$/, '密码必须为6-12位非空字符'],
		repwd: function (value) {
			if (value != $('.reg-box [name=password]').val()) {
				return '两次密码不一致';
			}
		},
	});

	let layer = layui.layer;

	//sign up
	$('#form_reg').on('submit', function (e) {
		e.preventDefault();
		let data = { username: $('.reg-box [name=username]').val(), password: $('.reg-box [name=password]').val() };
		$.post('/api/reguser', data, function (res) {
			if (res.status != 0) {
				return layer.msg(res.message);
			}
			layer.msg(res.message);
			$('#link_login').click();
		});
	});

	//log in
	$('#form_login').on('submit', function (e) {
		e.preventDefault();
		$.post('/api/login', $(this).serialize(), function (res) {
			if (res.status != 0) {
				return layer.msg(res.message);
			}
			layer.msg(res.message);
			localStorage.setItem('token', res.token);
			location.href = 'index.html';
		});
	});
});
