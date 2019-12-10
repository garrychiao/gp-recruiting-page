<template>
	<div class="mission">
		<el-row>
			<el-col>
				<h1>
					組織使命
				</h1>
				<p>我們是一個獨立的國際環保組織，致力以實際行動推動積極的改變，保護地球環境與世界和平。</p>
				<p>我們透過研究、教育、行動和游說工作，推動政府、企業和社會大眾共同尋求環境問題的解決方案。</p>
				<el-divider></el-divider>
				<h2>綠色和平的IDEAL</h2>
				<p>
					<strong>綠色和平推動環保項目時 奉行「IDEAL」核心價值，配合不同行動策略，實踐環境理想。</strong>
				</p>
				<div v-for="(item, index) in cardData" :key="index">
					<el-row style="margin-bottom: 8px;">
						<el-col :xs="{span: 24, offset: 0}" :sm="{span: 10}">
							<img :src="item.img" :alt="item.title" width="100%" />
						</el-col>
						<el-col :xs="{span: 24}" :sm="{span: 13, offset: 1}">
							<div>
								<h3>{{item.title}}</h3>
								<p>{{ item.content }}</p>
							</div>
						</el-col>

					</el-row>

					<el-divider></el-divider>

				</div>
			</el-col>
		</el-row>
		<center-btn></center-btn>
	</div>
</template>

<script>
import CenterBtn from './CenterBtn';

export default {
	name: "Mission",
	components: {
		CenterBtn,
	},
	data() {
		return {
			cardData: [
				{
					title: "Investigate 調查",
					content:
					"綠色和平有許多科學家和環境專家，運用專業知識去調查環境罪行。我們會實地採集樣本送往獨立實驗室化驗，或利用衛星導航探測數據，或深入分析公開資料，確保分析結果準確和公正才向公眾發表。",
					img: require('@/assets/img/IDEAL-investigate.jpg')
				},
				{
					title: "Document 記錄",
					content:
					"綠色和平其中一個核心價值是「見證」環境破壞。換句話說，就是記錄環境災害及受害者的故事，將真相公開，免被公眾遺忘。",
					img: require('@/assets/img/IDEAL-document.jpg')
				},
				{
					title: "Expose 揭露",
					content:
					"許多企業刻意向公眾隱瞞破壞環境的罪證，但綠色和平會通過嚴謹和深思熟慮的調查及研究，向消費者揭露每件產品的背後，如何破壞環境。",
					img: require('@/assets/img/IDEAL-expose.jpg')
				},
				{
					title: "Action 行動",
					content:
					"「行動，帶來改變」是綠色和平的核心價值之一。我們的「非暴力直接行動」，有助喚起廣泛關注，把積極求變的訊息帶給企業、政府和公眾。",
					img: require('@/assets/img/IDEAL-action.jpg')
				},
				{
					title: "Lobby 遊說",
					content:
					"綠色和平會游說各國政府和企業一起合作，防治有毒化學物污染、減緩氣候變化、確保食品安全、停止砍伐森林和保護海洋。",
					img: require('@/assets/img/IDEAL-lobby.jpg')
				}
			]
		};
	}
};
</script>
