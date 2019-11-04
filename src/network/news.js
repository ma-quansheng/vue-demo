import {
	request
} from './index';

export default {
	getList() {
		return request({
			url: '/news/list',
		})
	},

	postList() {
		return request({
			url: '/news/list',
			method: 'post',
			data: {
				pageSize: 8,
				pageIndex: 3
			}
		})
	}
}
