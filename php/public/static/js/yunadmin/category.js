/**
 * ==============================================
 * Created by SaiJia Technology.
 * Author: ZhiHuaWei <zhihua_wei@foxmail.com>
 * Date: 2019/8/24 16:07
 * Project: YunAdmin后台管理系统
 * Version: 1.0.0
 * Power: category.js
 * ==========================================
 */

//表单提交验证
var Script = function() {

	'use strict';

	$.validator.setDefaults({
		submitHandler: function(form) {
			form.submit();
		}
	});

	$().ready(function() {
		$("#categoryForm").validate({
			rules: {
				category_name: {
					required: true,
				},
				keywords: {
					required: true,
				},
				sort: {
					required: true,
				},
				category_desc: {
					required: true,
				},
			},

			messages: {
				category_name: "请输入分类名称！",
				keywords: "请为分类输入简要关键字！",
				sort: "请输入分类排序数值！",
				category_desc: "请输入分类的简单描述！",
			}
		});
	});

}();