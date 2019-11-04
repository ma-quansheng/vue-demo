import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations';
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA.js'

Vue.use(Vuex)

const state = {
	count: 0,
	msg: ''
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
	modules:{
		moduleA
	}
})
