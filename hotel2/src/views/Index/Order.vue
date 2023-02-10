<template>
    <div class="wrap">
      <h2 align="center">我的订单</h2>
      <el-card>
        <el-table :data="tableData" border stripe  style="width: 100%,">
          <el-table-column prop="id" label="订单号" width="180" align="center"></el-table-column>
          <el-table-column prop="roomnumber" label="房间号" width="180" align="center"></el-table-column>
          <el-table-column prop="startdate" label="开始时间" width="180" align="center"></el-table-column>
          <el-table-column prop="enddate" label="结束时间" align="center"></el-table-column>
          <el-table-column prop="totalroom" label="房间数" align="center"></el-table-column>
          <el-table-column prop="RoomPrice" label="房间单价" align="center"></el-table-column>
          <el-table-column prop="orderstatus" label="订单状态" align="center"></el-table-column>
        </el-table>
       <el-pagination 
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="query.pageNum"
          :page-sizes="[2, 3, 4, 5, 10]"
          :page-size="query.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="query.total"
        ></el-pagination>
        
      </el-card>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        //table 表数据
        tableData: [],
        //分页数据
        query: {
          pageNum: 1,
          pageSize: 3,
          total: 0,
        }
      };
    },
    mounted() {
      /* this.getData(); */
      this.$store.dispatch('order/detailList').then(()=>{
        console.log(this.$store.state.order.list)
        this.tableData = this.$store.state.order.list
      })
    },
    methods: {
    /*   getData() {
        //table总数据
        const DataAll = [
          {
            id: 1,
            roomnumber:"555",
            startdate:"5522",
            enddate:"555",
            totalroom:"55551",
            RoomPrice:"555544",
            orderstatus:"11515",
          },
          {
            id: 2,
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄"
          },
          {
            id: 3,
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄"
          },
          {
            id: 4,
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄"
          },
          {
            id: 5,
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            id: 6,
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄"
          },
          {
            id: 7,
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄"
          },
          {
            id: 8,
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄"
          }
        ];
        this.tableData=[]
        let strlength = (this.query.pageNum - 1) * this.query.pageSize + 1;
        let endlength = this.query.pageNum * this.query.pageSize;
        let resStrLength=0
        if(DataAll.length % this.query.pageSize == 0){
          resStrLength = (parseInt(DataAll.length / this.query.pageSize)-1) * this.query.pageSize + 1
        }else{
          resStrLength = parseInt(DataAll.length / this.query.pageSize) * this.query.pageSize + 1
        }
        if(strlength>resStrLength){
          strlength=resStrLength
        }
        if (endlength > DataAll.length) {
          endlength = DataAll.length;
        }
        for (let i = strlength - 1; i < endlength; i++) {
          this.tableData.push(DataAll[i]);
        }
        this.query.total = DataAll.length;
      }, */
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.query.pageSize=val
        this.getData()
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.query.pageNum=val
        this.getData()
      }
    }
  }; 
  </script>
  <style scoped>
  .wrap {
    width: 100%;
    height: 100%;
  }
  .el-pagination {
    margin-top: 15px;
  }
  .el-card{margin-top: 20px;}
  
  </style>