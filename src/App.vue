<template>
  <v-app>
    <!-- <v-navigation-drawer app></v-navigation-drawer> -->
    <v-toolbar app flat>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat @click="newStuDialog = true">
          <v-icon>add</v-icon>
        </v-btn>
        <v-btn flat>
          <v-icon>cancel</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-layout row wrap align-content-space-around>
          <v-flex class="stu-flex" v-for="stu in students" :key="stu.name" lg1>
            <v-card max-width="155">
                <v-badge right color="error">
                  <span slot="badge">99</span>
                  <v-card-title primary-title>
                    <h3>{{stu.name}}</h3>
                  </v-card-title>
                </v-badge>
              <v-divider></v-divider>
              <v-card-text>
                <v-layout column justify-center>
                  <v-flex class="star-flex" v-for="(star, index) in stu.reward" :key="index">
                    <v-btn flat small>
                      <!-- <v-icon medium>star</v-icon> -->
                      {{star}}
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn fab small>
                  <v-icon small>close</v-icon>
                </v-btn>
                
                <v-spacer></v-spacer>
                <v-btn fab small>
                  <v-icon small>add</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
    <v-dialog v-model="newStuDialog" persistent width="500">
      <v-card>
        <v-card-title>
          <v-text-field 
            v-model="stuNameInput"
            name="name"
            label="Name"
            type="text"
            @keyup.enter="newStudentInput()"
          ></v-text-field>
        </v-card-title>
        <v-card-text>
          <v-chip close v-for="stu in students" :key="stu.name" @input="removeStudentChip(stu.name)">
            {{stu.name}}
          </v-chip>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn small @click="newStuDialog = false">取消</v-btn>
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
      stuNameInput: ''
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
      }
    }
  }
</script>

<style scoped>
.stu-flex{
  margin-left: 30px;
  margin-bottom: 30px;
}
.star-flex{
  text-align: center;
}
</style>


