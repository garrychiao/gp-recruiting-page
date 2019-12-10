<template>
  <div class="recruit">
    <el-row>
      <el-col>
        <h1>誠聘綠色和平籌款幹事</h1>
        <p>當我們多方努力守護環境的同時，更重要的是讓更多人知道並關注環保議題，才能持續壯大尋求改變的陣營，從而締造綠色成果。籌款幹事站在推動環境保護最前線，面對拒絕與冷漠，以堅持與熱誠傳播環保訊息，凝聚群眾力量。</p>
        <p>
          <strong>您願意成為我們其中一員嗎？</strong>
        </p>
      </el-col>
    </el-row>
    <el-row class="table-data">
      <el-col>
        <el-divider></el-divider>
        <el-card>
          <h2>招聘詳情</h2>
          <p>
            <strong>綠色和平籌款幹事</strong>
          </p>
          <el-row v-for="(item, index) in tableData" :key="index">
            <el-col :span="6">
              <p>{{item.cell1}}</p>
            </el-col>
            <el-col :span="18">
              <p>{{item.cell2}}</p>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <center-btn></center-btn>
  </div>
</template>

<script>
import CenterBtn from './CenterBtn';

export default {
  name: "recruit",
  components: {
		CenterBtn,
	},
  data() {
    return {
      tableData: [
        {
          cell1: "工作時間",
          cell2: "5天工作 (11:00-19:00)"
        },
        {
          cell1: "工作地點",
          cell2: "市區街頭（戶外工作）、商場或其他公眾活動"
        },
        {
          cell1: "基本月薪",
          cell2: "試用期後，薪金約 $15,000"
        },
        {
          cell1: "額外獎金",
          cell2: "新人獎、勤工獎及其它獎金"
        },
        {
          cell1: "醫療 / 牙科保險",
          cell2: "試用期後享有"
        },
        {
          cell1: "有薪假期",
          cell2: "享有最多20天有薪年假"
        },
        {
          cell1: "學歷",
          cell2: "完成香港中學文憑試或具同等學歷"
        },
        {
          cell1: "工作經驗",
          cell2: "歡迎應屆畢業生 或 具街頭籌款經驗優先"
        },
        {
          cell1: "培訓",
          cell2: "職前培訓（環保資訊及工作實習）說話技巧、領導能力、全人發展"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.table-data {
  text-align: center;
  .el-row {
    border-bottom: 1px solid rgb(245, 245, 245);
  }
  .el-row:hover {
    background-color: rgb(245, 245, 245);
  }
}
</style>
