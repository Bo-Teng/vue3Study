<template>
  <div>
    <div class="dome">
      <div class="left">
        <el-input />
        <el-tree
          ref="tree"
          :infinite-scroll-disabled="noMore"
          :infinite-scroll-immediate="false"
          infinite-scroll-distance="26"
          :data="treeData"
          :props="defaultProps"
          :expand-on-click-node="false"
          accordion
          node-key="id"
        >
          <template #default="{ data }">
            <div class="top">
              <el-checkbox
                :indeterminate="data.indeterminate"
                :value="data.flag"
                @change="derail => checkAllChange(data, derail)"
              />
              <span @click="classClick(data)" class="tree-label">{{
                data.name
              }}</span>
            </div>
          </template>
        </el-tree>
      </div>
      <div class="right">
        <el-input />
        <el-table :data="tableData">
          <el-table-column width="300px">
            <template v-slot:header>
              <div class="top">
                <p>名称</p>
              </div>
            </template>
            <template #default="{ row, $index }">
              <div class="top">
                <el-checkbox
                  :value="isCheck($index)"
                  @change="flag => changeSelect(flag, $index, row.courseId)"
                  :key="$index * params.pageNo"
                />
                <p>{{ row.courseName }}</p>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="teacherName" label="讲师" width="180">
          </el-table-column>
          <el-table-column prop="people" label="价格" width="180">
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.current"
          :page-sizes="[5, 10, 20, 50]"
          :page-size="page.size"
          layout="total, sizes, prev, pager, next, jumper"
          :total="page.total"
        >
        </el-pagination>
      </div>
    </div>
    <footer>
      <el-button type="primary">确定</el-button>
    </footer>
  </div>
</template>

<script>
import { classList } from '@/api/course/course'
import axios from 'axios'
import { getToken } from '@/util/auth'
function recursion (arr, callBack, flag = false) {
  arr = arr instanceof Array ? arr : [arr]
  arr.forEach((item, index) => {
    callBack(item, callBack, flag, index)
  })
}
export default {
  async created () {
    this.paramsClone = JSON.parse(JSON.stringify(this.params))
    const res = await classList()
    function outerMost (item, callBack, flag, index) {
      void (function inside (prop) {
        prop.flag = flag
        prop.indeterminate = flag
        prop.$index = index
        if (prop.children && prop.children.length > 0) {
          recursion(prop.children, inside, flag)
        }
      })(item)
    }
    recursion(res, outerMost)
    res.forEach(item => {
      item.topLevel = true
    })
    this.data = res
    this.treeData = this.data.slice(0, 15)
  },
  data () {
    return {
      data: [],
      tableData: [],
      defaultProps: {
        label: 'name',
        children: 'children'
      },
      treeData: [],
      flag: 15,
      noMore: false,
      params: {
        catalogId: '',
        type: 1,
        pageSize: 5,
        choice: 3,
        pageNo: 1
      },
      paramsClone: null,
      page: {
        current: 1,
        size: 5,
        total: 0
      },
      totalCheckCourse: [],
      currentCheckCourse: [],
      checkClass: []
    }
  },
  methods: {
    ///api/manage/v1/course/getCatalog
    loadMore () {
      if (!this.data.length) return
      this.flag++
      this.treeData.push(this.data[this.flag])
      setTimeout(() => {
        this.treeData.shift()
      }, 50)
    },
    async getCourse () {
      const res = await axios({
        url: 'api/manage/v1/web/course/getForegroundCourseList',
        params: this.params,
        headers: {
          accessToken:
            this.$store.state.user.userInfo.token_type + ' ' + getToken()
        }
      })
      this.tableData = res.data.response.data
      this.page.total = res.data.response.totalNum
      if (this.currentCheckCourse.length === 0 && this.tableData.length > 0)
        this.Echo()
    },
    classClick (data) {
      if (this.params.catalogId === data.id) return
      this.params = JSON.parse(JSON.stringify(this.paramsClone))
      this.params.catalogId = data.id
      this.currentCheckCourse = []
      this.getCourse()
    },
    changeSelect (flag, index, id) {
      const course = this.currentCheckCourse[
        index + (this.params.pageNo - 1) * this.params.pageSize
      ]
      course.flag = flag
      course.courseId = id
    },
    checkAllChange (data, derail) {
      const treeData = this.treeData[data.$index]
      function callBack (item, callBack, flag) {
        item.flag = flag
        if (item.children && item.children.length > 0)
          recursion(item.children, callBack, flag)
      }

      recursion(data, callBack, derail)
      recursion(treeData, (item, callBack) => {
        item.children
      })
      this.totalCheckCourse.some(item => {
        if (item.classId === data.id) {
          item.value.forEach(item => {
            item.flag = derail
          })
          return true
        }
      })
    },
    handleSizeChange (num) {
      this.params.pageSize = num
      this.getCourse()
    },
    handleCurrentChange (num) {
      this.params.pageNo = num
      this.getCourse()
    },
    Echo () {
      let flag = false
      let classId = this.params.catalogId
      recursion(this.treeData, (item, callBack) => {
        if (item.id === classId) return (flag = item.flag)
        else if (item.children && item.children.length > 0)
          recursion(item.children, callBack)
      })
      const exist = this.totalCheckCourse.find(item => {
        return item.classId === classId
      })
      if (exist) this.currentCheckCourse = exist.value
      else {
        for (let i = 0; i < this.page.total; i++) {
          this.currentCheckCourse.push({
            flag,
            classId,
            courseId: ''
          })
        }
        this.totalCheckCourse.push({
          classId,
          value: this.currentCheckCourse
        })
      }
    }
  },
  computed: {
    isCheck () {
      return index =>
        this.currentCheckCourse[
          index + (this.params.pageNo - 1) * this.params.pageSize
        ].flag
    }
  }
}
</script>

<style lang="scss" scoped>
.dome {
  width: 1200px;
  margin: 100px auto;
  display: flex;
  justify-content: space-between;
  & > div {
    flex: 1;
    margin-left: 20px;
    height: 400px;
    overflow-y: auto;
  }
  ::v-deep .el-tree {
    overflow: hidden;
  }
}
.top {
  display: flex;
  align-items: center;
  height: 30px;
  p {
    margin-left: 20px;
  }
}
footer {
  text-align: center;
}
.tree-label {
  margin-left: 10px;
}
</style>
