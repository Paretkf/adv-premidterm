<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <strike v-if="todo.isDone">{{todo.name}}</strike>
        <span v-else>{{todo.name}}</span>

        <button v-if="!todo.isDone"
                @click="setIsDone(index, true)">
          done
        </button>
        <button v-if="todo.isDone"
                @click="setIsDone(index, false)">
          undo
        </button>
      </li>
    </ul>
    <button @click="clearDone()">
      clear done
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState({
      todos: state => state.todos
    })
  },
  methods: {
    ...mapActions({
      setTodoStatus: 'setTodoStatus',
      clearDone: 'clearDone'
    }),
    setIsDone (index, status) {
      this.setTodoStatus({
        index: index,
        status: status
      })
    }
  }
}
</script>
