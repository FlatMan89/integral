import Vue from 'vue'

// 需要维护的状态

const mutations = {
    // 新增学生
    NEW_STUDENT(state, name) {
        let temp = true
        for(stu in state.students){
            if (stu.name == name){
                temp = false
            }
        }
        if(temp){
            state.students.push({name: name, reward:[]})
        }
        // Vue.set(state.students, name, {name: name, reward: []})
    },
    // 删除学生
    REMOVE_STUDENT(state, name) {
        // Vue.set(state.students, name, {})
        // Vue.set(state, 'students', state.students)
        for(stu in state.students){
            if (stu.name == name){
                state.students.remove(stu)
                break
            }
        }
    },
    // 清空所有学生
    REMOVE_ALL_STUDENT(state) {
        Vue.set(state, 'students', {})
    },

    // 给学生添加奖励
    ADD_REWARD(state, name, reward) {
        state.students[name].reward.push(reward)
    },
    // 删除学生的奖励
    REMOVE_REWARD(state, name, reward) {
        let arr = state.students[name].reward
        let index = arr[reward]

        if (state.student['name']){
            state.student['name'].reward = arr.splice(index, 1)
        }
    },
    // 清空所有学生的奖励
    REMOVE_ALL_REWARD(state) {
        for(stu in state.students){
            stu.reward = []
        }
    },
    
}

export default mutations