<template>
  <div class="fundraiser">
    <el-row class="graph-content">
      <el-col>
        <h1>籌款幹事介紹</h1>
      </el-col>

      <el-col>
        <el-row v-for="(item, index) in collapseData" :key="index">
          <el-col>
            <el-card shadow="hover">
              <el-row>
                <el-col :sm="{ span: 16, offset: 0 }" class="hidden-sm-and-up">
                  <img :src="item.img" width="100%" alt />
                </el-col>
                <el-col :sm="{ span: 15, offset: 0 }">
                  <h2>{{ item.name }}</h2>
                  <p>
                    職位：{{ item.position }}
                    <br />
                    <small>任職年期：{{ item.year }}</small>
                  </p>
                  <p style="margin-top: 20px;">{{ item.intro }}</p>
                </el-col>
                <el-col
                  :xs="{ span: 22, offset: 1 }"
                  :sm="{ span: 8, offset: 1 }"
                  class="hidden-xs-only"
                >
                  <img :src="item.img" width="100%" alt />
                </el-col>
              </el-row>
              <el-collapse>
                <el-collapse-item :name="index">
                  <template slot="title">
                    了解更多
                    <i class="header-icon el-icon-info"></i>
                  </template>
                  <div v-for="(title, index) in item.contentTitle" :key="title">
                    <h3>{{ title }}</h3>
                    <p>{{ item.contentText[index] }}</p>
                  </div>
                </el-collapse-item>
              </el-collapse>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-col>
          <el-divider></el-divider>
          <div class="graph-content">
            <p>
              <strong
                >了解我們更多的工作使命，可觀看以下短片或瀏覧我們的網址</strong
              >
            </p>
            <br />
            <el-tabs type="border-card" :stretch="true">
              <el-tab-pane>
                <span slot="label">
                  <i class="el-icon-caret-right"></i> 影片 1
                </span>
                <div style="--aspect-ratio: 16/9;">
                  <iframe
                    class="video"
                    src="https://www.youtube.com/embed/n4GhL4cy5m0?enablejsapi=1"
                    width="100%"
                    scrolling="no"
                    frameborder="0"
                  ></iframe>
                </div>
              </el-tab-pane>
              <el-tab-pane>
                <span slot="label">
                  <i class="el-icon-caret-right"></i> 影片 2
                </span>
                <div style="--aspect-ratio: 16/9;">
                  <iframe
                    class="video"
                    src="https://www.youtube.com/embed/sffAL_fzUnU?enablejsapi=1"
                    width="100%"
                    scrolling="no"
                    frameborder="0"
                  ></iframe>
                </div>
              </el-tab-pane>
              <!-- <el-tab-pane>
                <span slot="label">
                  <i class="el-icon-caret-right"></i> 影片 2
                </span>
                <div style="--aspect-ratio: 16/9;">
                  <iframe
                    class="video"
                    src="https://www.youtube.com/embed/hdfQbf6W2sc?enablejsapi=1"
                    width="100%"
                    scrolling="no"
                    frameborder="0"
                  ></iframe>
                </div>
              </el-tab-pane>
              <el-tab-pane>
                <span slot="label">
                  <i class="el-icon-caret-right"></i> 影片 3
                </span>
                <div style="--aspect-ratio: 16/9;">
                  <iframe
                    class="video"
                    src="https://www.youtube.com/embed/dm27NgZwJdA?enablejsapi=1"
                    width="100%"
                    scrolling="no"
                    frameborder="0"
                  ></iframe>
                </div>
              </el-tab-pane> -->
            </el-tabs>
          </div>
        </el-col>
      </el-col>
    </el-row>
    <center-btn></center-btn>
  </div>
</template>

<script>
import CenterBtn from './CenterBtn';

export default {
  name: 'Mission',
  components: {
    CenterBtn,
  },
  data() {
    return {
      collapseData: [
        {
          name: 'Wayne Ko',
          position: '資深籌款主管',
          year: '4年6個月',
          img: '',
          intro:
            '原來她家住劏房仍堅持捐款，更表示「支持一世」，那個感動時刻至今記憶猶新。',
          contentTitle: [
            '你現在的職位是？主要職責是甚麼？',
            '我沒有籌款經驗，這份工作有提供相關培訓嗎？',
            '工作的感動',
            '給新同事的話？',
          ],
          contentText: [
            '我身為籌款主管，除了負責管理三隊街頭籌款團隊的日常事務，亦會為每位同事訂立個人目標，隨時聆聽他們的心聲，凝聚積極樂觀的團隊氣氛，跨越連場環保挑戰。',
            '綠色和平特設兩天入職培訓，主要教導如何接觸市民，更有效傳遞環保訊息，亦有各種team building活動，加強團隊合作、提升領導才能。我們亦會一同親親大自然，與環境重新連繫。',
            '記得某次工作，一位婆婆駐足凝望被棕櫚油企業破壞印尼雨林棲息地的紅毛猩猩照片，並問我們：「隻猩猩係咪就嚟死啦？」眼見婆婆腳步蹣跚、推着滿載紙皮的手推車，我們也於心不忍，但她決意捐助，並填寫「Flat R」的地址……原來她家住劏房仍堅持捐款，更表示「支持一世」，那個感動時刻至今記憶猶新。',
            '每次聽見市民分享日常如何實踐環保，或者了解過後願意成為綠色和平會員，均讓我感到環保路上充滿希望，因無數有心人仍熱愛這片土地。我們需要更多志同道合的夥伴加入，特別是對環保有熱誠的您！',
          ],
        },
        {
          name: 'Sky Ho',
          position: '籌款隊長',
          year: '2年4個月',
          img: '',
          intro:
            '我們在香港紮根20多年來，從不接受政商界捐款，秉持獨立、公正守護環境',
          contentTitle: [
            '街頭工作抱負？',
            '對籌款工作的誤解',
            '綠色和平保護環境，得個「講」字？',
            '為自己的工作感到驕傲？',
          ],
          contentText: [
            '我希望以真誠打動市民，邀請他們與綠色和平一同堅守環境保護最前線；自己也希望以身作則，讓每位隊員承傳這顆人與人之間坦誠相對的心。',
            '最初加入時，以為籌款如同「呃錢」，之後才明白綠色和平是全球首創直接對話行動(Direct Dialogue Campaign)理念、1999年更是香港首間成立街頭籌款團隊的國際非政府組織。我們在香紮根20多年來，從不接受政商界捐款，秉持獨立、公正守護環境，更需要集結群眾力量作最強後盾。',
            '綠色和平一直以「IDEAL」為核心價值，從而帶來改變，調查(Investigation)、記錄(Document)、揭露(Expose)、行動(Act)、游說(Lobby)均缺一不可，例子之一就是我們曾經「放蛇」揭露香港海味店非法售賣極瀕危石首魚花膠，並成功游說當局加強執法打擊走私，最終令兩名東主定罪、罰款，致力拯救慘遭誤捕而瀕臨絕種的加灣鼠海豚。',
            '綠色和平近年向愈趨嚴重的塑膠污染宣戰，成功推動屈臣氏及759阿信屋承諾淘汰微塑膠產品之餘，亦促使多間連鎖快餐店踏出「走塑」第一步。每當分享這些環保成就時得到市民共鳴、認同，皆讓我倍感自豪！',
          ],
        },
        /*
				{
					name: "Yumi Cheung",
					position: "籌款隊長",
					year: "1年10個月",
					img:
					"https://secured.greenpeace.org/hk/Global/hk/artworks/gp/ddc-recruitment/2018/yumi_intro.jpg",
					intro: "我很享受它帶來的使命感，也歡迎您加入綠色和平大家庭！",
					contentTitle: [
						"你現在的職位是？主要職責是甚麼？",
						"綠色和平與其他商業機構有何不同？",
						"工餘時間有甚麼活動？",
						"在街頭籌款工作的意義"
					],
					contentText: [
						"我目前任職籌款隊長，平日與四至六名隊員一起推廣綠色和平的環保理念，壯大全球會員的聲音力量，亦會跟進最新項目進展，定期檢討團隊成效，以正面態度達致團隊目標。",
						"坊間不少職位可能需要獨自埋頭苦幹，但綠色和平每位街頭籌款成員都是充滿熱誠，為守護環境並肩奮鬥，所以您絕對不用擔心會孤身作戰，隊友之間定必共同進退。",
						"綠色和平釐訂合適上班時數，讓同事在工作與生活之間取得平衡；我在工餘時間多玩卡牌和手機遊戲，周末也會和同事、朋友一起行山，感受香港自然之美。",
						"選擇工作時固然要考慮薪金，但價值與意義同樣重要。環境威脅遍佈全球，從保衛郊野公園到守護南北兩極，綠色和平同樣能夠迅速動員應變，全因每位熱心支持者一分一毫慷慨捐助。街頭籌款工作時刻為守護環境出一分力，我很享受它帶來的使命感，也歡迎您加入綠色和平大家庭！"
					]
				},
        {
          name: "Gloria Yim",
          position: "籌款幹事",
          year: "8個月",
          img:
            "https://secured.greenpeace.org/hk/Global/hk/artworks/gp/ddc-recruitment/2018/gloria_intro.jpg",
          intro: "隊友之間不只是工作夥伴，更是戰友、好朋友！",
          contentTitle: [
            "你現在的職位是？主要職責是甚麼？",
            "為何加入綠色和平？",
            "綠色和平的工作文化？同事之間關係如何？",
            "自己的成長"
          ],
          contentText: [
            "我是一位全職籌款幹事，工作期間會前往不同地方與市民交流，分享最新環保資訊及綠色和平理念，從而爭取大眾支持。",
            "身邊不少人也好奇，為何我中六畢業後就加入綠色和平。其實自己在中學時期接觸到很多環境問題，眼見政府、企業一直在破壞環境，更希望在街頭將真相告訴市民。",
            "隊友之間不只是工作夥伴，更是戰友、好朋友！即使放假也會相約一起玩樂，遇上困難時同樣互相鼓勵、彼此分擔。",
            "最初在街頭主動接觸市民，難免有少許緊張和怯場，慶幸得到隊友鼓勵，也更深入認識環保資訊，勇氣和信心逐漸建立。期待與您一同成長，以行動帶來改變！"
          ]
        }
				*/
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-card {
  margin-bottom: 20px;
}

[style*='--aspect-ratio'] > :first-child {
  width: 100%;
}

[style*='--aspect-ratio'] > img {
  height: auto;
}

@supports (--custom: property) {
  [style*='--aspect-ratio'] {
    position: relative;
  }
  [style*='--aspect-ratio']::before {
    content: '';
    display: block;
    padding-bottom: calc(100% / (4 / 3));
  }
  [style*='--aspect-ratio'] > :first-child {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
}
</style>
