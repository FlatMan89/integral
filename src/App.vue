<template>
  <v-app>
    <!-- <v-navigation-drawer app></v-navigation-drawer> -->
    <v-toolbar app flat>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat @click="newStuDialog = true">
          <v-icon>add</v-icon>
        </v-btn>
        <v-btn flat @click="exit">
          <v-icon>cancel</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-layout wrap row >
          <v-flex class="stu-flex" v-for="stu in students" :key="stu.name" lg1>
            <v-badge color="info" overlap>
              <span slot="badge">{{stu.reward.length}}</span>
              <v-card width="130">
                <v-card-title primary-title>
                  <h4>{{stu.name}}</h4>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <v-layout wrap>
                    <v-flex v-for="(icon, index) in stu.reward" :key="index" @click="removeReward({name: stu.name, index: index})" lg4>
                      <img :src="require('@/assets/icon/'+icon+'@32.png')" alt="">
                    </v-flex>
                  </v-layout>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-menu>
                    <v-btn fab small slot="activator">
                      <v-icon small>add</v-icon>
                    </v-btn>
                    <v-list>
                      <v-list-tile v-for="(icon, index) in iconFonts" :key="index" @click="addIcon(stu.name, icon)">
                        <v-list-tile-content>
                          <img class="my-icon" :src="require('@/assets/icon/'+icon+'@32.png')" alt="icon">
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                  </v-menu>
                </v-card-actions>
              </v-card>
            </v-badge>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
    <v-dialog v-model="newStuDialog" persistent width="500">
      <v-card>
        <v-card-title>
          <v-layout row>
            <v-flex >
              <v-text-field 
                v-model="stuNameInput"
                name="name"
                label="Name"
                type="text"
                @keyup.enter="newStudentInput()"
              ></v-text-field>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex justify-end>
              <v-btn @click="newStudentInput()" color="primary">确定</v-btn>
            </v-flex>
          </v-layout>
          
        </v-card-title>
        <v-card-text>
          <v-chip close v-for="stu in students" :key="stu.name" @input="removeStudentChip(stu.name)">
            {{stu.name}}
          </v-chip>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn small @click="newStuDialog = false" color="error">取消</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="exitDialog" persistent max-width="300">
      <v-card>
        <v-card-text>
          <h3>确定要删除所有学生？</h3>
        </v-card-text>
        <!-- <v-divider></v-divider> -->
        <v-card-actions>
          <v-btn @click="exitDialog=false" small flat>取消</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="removeAllStudent();exitDialog=false" small flat>确定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

  export default {
    data: () => ({
      newStuDialog: false,
      exitDialog: false,
      stuNameInput: '',
      iconFonts: ['bbt', 'gz', 'hh', 'yz', 'zs']
    }),
    computed: mapState([
      'students'
    ]),
    methods: {
      ...mapActions([
        'newStudent', 'removeStudent', 'removeAllStudent', 'addReward', 'removeReward', 'removeAllReward'
      ]),
      newStudentInput(){
        this.newStudent(this.stuNameInput)
        this.stuNameInput = ''
      },
      removeStudentChip (name) {
        this.removeStudent(name)
      },
      addIcon(name, icon){
        this.addReward({name: name, icon: icon})
      },
      exit(){
        if(this.students.length > 0){
          this.exitDialog = true
        }
      }
    }
  }
</script>

<style scoped>
.stu-flex{
  margin-bottom: 30px;
}
.star-flex{
  text-align: center;
}
/* .my-icon {
  width: 40px;
  height: 40px;
} */
</style>


