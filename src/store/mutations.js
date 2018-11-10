import Vue from 'vue'
import storage from '../storage'

// 需要维护的状态

const mutations = {
    // 新增学生
    NEW_STUDENT(state, name) {
        let temp = true
        for (let i=0; i<state.students.length; i++){
            if (state.students[i].name == name){
                return
            }
        }
        state.students.push({name: name, reward:[]})
        storage.save(state.students)
    },
    // 删除学生
    REMOVE_STUDENT(state, name) {
        if (state.students){
            for(let i=0;i<state.students.length; i++){
                if (state.students[i].name == name){
                    state.students.splice(i, 1)
                    storage.save(state.students)
                    break
                }
            }
        }
        
    },
    // 清空所有学生
    REMOVE_ALL_STUDENT(state) {
        state.students.splice(0, state.students.length)
        storage.save(state.students)
    },

    // 给学生添加奖励
    ADD_REWARD(state, {name, icon}) {
        for(let i=0; i<state.students.length; i++){
            if (state.students[i].name == name){
                state.students[i].reward.push(icon)
                storage.save(state.students)
                break;
            }
        }
        
    },
    // 删除学生的奖励
    REMOVE_REWARD(state, {name, index}) {
        for(let i=0; i<state.students.length; i++){
            if(state.students[i].name == name){
                state.students[i].reward.splice(index, 1)
                storage.save(state.students)
                break
            }
        }
    }
    
}

export default mutations