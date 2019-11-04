import axios from 'axios';
import baseConfig from './baseConfig';

export function request(config) {
	// 创建 axios 实例
	const instance = axios.create({
		baseURL: baseConfig.baseURL,
		timeout: baseConfig.timeout,
	});

	// 请求拦截器
	instance.interceptors.request.use(
		config => {
			return config;
		},
		err => {
			console.log(err);
		});
	
	// 响应拦截器
	instance.interceptors.response.use(
		result => {
			if (result.status == 200) {
				return result.data;
			} else {
				return 'no data';
			}
		},
		error => {
			console.log(error)
		}
	);

	// 返回 promise 类型的实例
	return instance(config);
}
