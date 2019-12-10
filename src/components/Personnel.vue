<template>
	<div class="personnel">
		<el-row>
			<el-col>
				<h1>人事制度</h1>
				<p>我們將嚴謹注視每名員工的能力和工作表現，以加薪和晉升來獎勵每名員工的努力。</p>
				<el-divider></el-divider>
				<h2>晉升機會</h2>
				<img src="../assets/img/2019_09_HK DD handbook_graphic-01.png" width="100%" alt />
			</el-col>
		</el-row>
		<center-btn></center-btn>
	</div>
</template>

<script>
import CenterBtn from './CenterBtn';

export default {
	name: "personnel",
	components: {
		CenterBtn,
	},
};
</script>
