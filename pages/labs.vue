<template>
<div id="summit-preview">
  <div class="container-fluid bannerEn labs_banner" v-if="isEnglish">
    <div class="page-header">
      <h1 class="text-left title">
        <!-- 一站式孵化服务与生态整合平台 -->
        {{ $t('labs.title2')}}</h1>
      <p>
        <!-- 通过多年行业资源与经验积累、高效的整合能力等优势，同时纳入政府、高校、企业等社会资源以及技术团队和法律顾问，为优质区块链项目提供前期孵化及加速支持与服务。 -->
      {{ $t('labs.textlf')}}</p>
      <p>
        <!-- 依托于各地政府对区块链技术的政策支持和当地特色产业园区的强大企业库资源，为政府及各行业甄选优质的区块链技术项目，从而达到技术赋能实体产业的战略目标。此外LABS还担负着为区块链行业培训、输送专业人才的责任。 -->
        {{ $t('labs.ytygd')}}</p>
      <p>
        <!-- 正本清源，区块链项目才能回归正常价值。 -->
        {{ $t('labs.zbqy')}}</p>
      <img src="../assets/img/tag_labs.png">
    </div>
  </div>
  <div class="container-fluid banner labs_banner" v-else>
    <div class="page-header">
      <h1 class="text-left title">
        <!-- 一站式孵化服务与生态整合平台 -->
        {{ $t('labs.title2')}}</h1>
      <p>
        <!-- 通过多年行业资源与经验积累、高效的整合能力等优势，同时纳入政府、高校、企业等社会资源以及技术团队和法律顾问，为优质区块链项目提供前期孵化及加速支持与服务。 -->
      {{ $t('labs.textlf')}}</p>
      <p>
        <!-- 依托于各地政府对区块链技术的政策支持和当地特色产业园区的强大企业库资源，为政府及各行业甄选优质的区块链技术项目，从而达到技术赋能实体产业的战略目标。此外LABS还担负着为区块链行业培训、输送专业人才的责任。 -->
        {{ $t('labs.ytygd')}}</p>
      <p>
        <!-- 正本清源，区块链项目才能回归正常价值。 -->
        {{ $t('labs.zbqy')}}</p>
      <img src="../assets/img/tag_labs.png">
    </div>
  </div>
  <!-- pc端中英文 -->
  <div class="contentEn labs pc" v-if="isEnglish">
    <div class="labs_step">
      <div class="labs1">
        <h1>
					<span class="bluecolor">
						<!-- 常规业务 -->
					{{ $t('labs.cgyw')}}</span>
        </h1>
        <p class="aboutlabs">
          <!-- 依托FINWEX INSTITUTE智库资源，整合上下游业务，为区块链项目的孵化和加速提供专业咨询服务 -->
        {{ $t('labs.ytyfx')}}</p>
        <div>
          <div class="left tag_labs">
            <div class="" v-on:click="showOne('1')" v-bind:class="{bluebkg:show_one==1,graybkg:show_one!=1}">
              <!-- 前期孵化 -->
            {{ $t('labs.qqfh')}}</div>
            <div class="" v-on:click="showOne('2')" v-bind:class="{bluebkg:show_one==2,graybkg:show_one!=2}">
              <!-- 中期曝光 -->
            {{ $t('labs.zqfh')}}</div>
            <div v-on:click="showOne('3')" v-bind:class="{bluebkg:show_one==3,graybkg:show_one!=3}">
              <!-- 后期服务 -->
            {{ $t('labs.hqfh')}}</div>
          </div>
          <div v-if="show_one==1" class="left labs_detail">
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- 资本+媒体+技术的资源对接 -->
                {{ $t('labs.zbmt')}}</span>
            </div>
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- 物理空间提供 -->
                {{ $t('labs.wlkjtg')}}</span>
            </div>
          </div>

          <div v-if="show_one==2" class="left labs_detail">
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- Meetup（全球含赫尔辛基、旧金山等20多个城市，40多个点） -->
                {{ $t('labs.mtqq')}}</span>
            </div>
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- FINWEX SUMMIT全球金融科技峰会展示机会 -->
                {{ $t('labs.fxqqjr')}} </span>
            </div>
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- 媒体曝光及资本资源、技术团队资源、法律辅导 -->
                {{ $t('labs.mtbg')}}</span>
            </div>
          </div>

          <div v-if="show_one==3" class="left labs_detail">
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- 加速咨询 -->
                {{ $t('labs.jsfw')}}</span>
            </div>
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- 法律意见顾问 -->
                {{ $t('labs.flyjgw')}}</span>
            </div>
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- 人才培训及输送等 -->
                {{ $t('labs.rcpxjs')}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="labs2">
        <h1>
					<span class="pinkcolor">
						<!-- 特有业务 -->
					{{ $t('labs.tyyw')}}</span>
        </h1>
        <p class="aboutlabs">
          <!-- 特有业务是FINWEX LABS的一个重要特点，目的是推动现有区块链项目的落地应用，引导区块链技术更快地服务于实体经济发展 -->
        {{ $t('labs.tyyws')}}</p>
        <div>
          <div class="left tag_labs">
            <div class="" v-on:click="showTow('1')" v-bind:class="{pinkbkg:show_tow==1,graybkg:show_tow!=1}">
              <!-- 硬件和安全产品展示（广告）与销售  -->
              {{ $t('labs.ywy')}}</div>
            <div class="" v-on:click="showTow('2')" v-bind:class="{pinkbkg:show_tow==2,graybkg:show_tow!=2}">
              <!-- 技术和商业应用培训 -->
              {{ $t('labs.ywe')}}</div>
            <div class="" v-on:click="showTow('3')" v-bind:class="{pinkbkg:show_tow==3,graybkg:show_tow!=3}">
              <!--全球区块链技术研讨会承办 -->
              {{ $t('labs.yws')}}</div>
            <div class="" v-on:click="showTow('4')" v-bind:class="{pinkbkg:show_tow==4,graybkg:show_tow!=4}">
              <!--商业项目区块链化咨询和技术资源服务 -->
              {{ $t('labs.ywss')}}</div>
            <div class="" v-on:click="showTow('5')" v-bind:class="{pinkbkg:show_tow==5,graybkg:show_tow!=5}">
              <!--公链上DAPP的孵化 -->
              {{ $t('labs.yww')}}</div>
          </div>
          <div class="left labs_detail margintop20" v-if="show_tow==1">
            <div>
              <img src="../assets/img/tag_pink.png">
              <span>
                <!-- 广告展示和项目Meetup路演 -->
                {{ $t('labs.ggzs')}}</span>
            </div>
            <div>
              <img src="../assets/img/tag_pink.png">
              <span>
                <!-- 区块链技术相关硬件及安全产品销售 -->
                {{ $t('labs.qkljs')}}</span>
            </div>
          </div>
          <div class="left labs_detail margintop20" v-if="show_tow==2">
              <div class="detail2">
                <img src="../assets/img/tag_pink.png">
                <span>
                  <!-- 定期举办线上线下课程培训，包括技术和商业应用培训 -->
                  {{ $t('labs.dqjb')}}</span>
              </div>
            </div>
          </div>
          <div class="left labs_detail margintop20" v-if="show_tow==3">
            <div>
              <img src="../assets/img/tag_pink.png">
              <span>
                <!-- 结合政府高校资源举办全球规模的区块链技术研讨 -->
                {{ $t('labs.jhzfgx')}}</span>
            </div>
          </div>
          <div class="left labs_detail margintop20" v-if="show_tow==4">
            <div>
              <img src="../assets/img/tag_pink.png">
              <span>
                <!-- 区块链经济模型商业模式设计咨询服务 -->
                {{ $t('labs.qkljj')}}</span>
            </div>
             <div>
              <img src="../assets/img/tag_pink.png">
              <span>
                <!-- 商业公司进行区块链化资源及技术团队对接服务 -->
                {{ $t('labs.sygs')}}</span>
            </div>
          </div>
          <div class="left labs_detail margintop20" v-if="show_tow==5">
            <div>
              <img src="../assets/img/tag_pink.png">
              <span>
                <!-- 技术团队打造公链 -->
                {{ $t('labs.jstd')}}</span>
            </div>
            <div>
              <img src="../assets/img/tag_pink.png">
              <span>
                <!-- 公链上的DAPP的孵化 -->
                {{ $t('labs.gldh')}}</span>
            </div>
          </div>
      </div>
    </div>
  </div>
  <div class="content labs pc" v-else>
    <div class="labs_step">
      <div class="labs1">
        <h1>
					<span class="bluecolor">
						<!-- 常规业务 -->
					{{ $t('labs.cgyw')}}</span>
        </h1>
        <p class="aboutlabs">
          <!-- 依托FINWEX INSTITUTE智库资源，整合上下游业务，为区块链项目的孵化和加速提供专业咨询服务 -->
        {{ $t('labs.ytyfx')}}</p>
        <div>
          <div class="left tag_labs">
            <div class="" v-on:click="showOne('1')" v-bind:class="{bluebkg:show_one==1,graybkg:show_one!=1}">
              <!-- 前期孵化 -->
            {{ $t('labs.qqfh')}}</div>
            <div class="" v-on:click="showOne('2')" v-bind:class="{bluebkg:show_one==2,graybkg:show_one!=2}">
              <!-- 中期曝光 -->
            {{ $t('labs.zqfh')}}</div>
            <div v-on:click="showOne('3')" v-bind:class="{bluebkg:show_one==3,graybkg:show_one!=3}">
              <!-- 后期服务 -->
            {{ $t('labs.hqfh')}}</div>
          </div>
          <div v-if="show_one==1" class="left labs_detail">
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- 资本+媒体+技术的资源对接 -->
                {{ $t('labs.zbmt')}}</span>
            </div>
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- 物理空间提供 -->
                {{ $t('labs.wlkjtg')}}</span>
            </div>
          </div>

          <div v-if="show_one==2" class="left labs_detail">
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- Meetup（全球含赫尔辛基、旧金山等20多个城市，40多个点） -->
                {{ $t('labs.mtqq')}}</span>
            </div>
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- FINWEX SUMMIT全球金融科技峰会展示机会 -->
                {{ $t('labs.fxqqjr')}} </span>
            </div>
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- 媒体曝光及资本资源、技术团队资源、法律辅导 -->
                {{ $t('labs.mtbg')}}</span>
            </div>
          </div>

          <div v-if="show_one==3" class="left labs_detail">
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- 加速咨询 -->
                {{ $t('labs.jsfw')}}</span>
            </div>
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- 法律意见顾问 -->
                {{ $t('labs.flyjgw')}}</span>
            </div>
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- 人才培训及输送等 -->
                {{ $t('labs.rcpxjs')}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="labs2">
        <h1>
					<span class="pinkcolor">
						<!-- 特有业务 -->
					{{ $t('labs.tyyw')}}</span>
        </h1>
        <p class="aboutlabs">
          <!-- 特有业务是FINWEX LABS的一个重要特点，目的是推动现有区块链项目的落地应用，引导区块链技术更快地服务于实体经济发展 -->
        {{ $t('labs.tyyws')}}</p>
        <div>
          <div class="left tag_labs">
            <div class="" v-on:click="showTow('1')" v-bind:class="{pinkbkg:show_tow==1,graybkg:show_tow!=1}">
              <!-- 硬件和安全产品展示（广告）与销售  -->
              {{ $t('labs.ywy')}}</div>
            <div class="" v-on:click="showTow('2')" v-bind:class="{pinkbkg:show_tow==2,graybkg:show_tow!=2}">
              <!-- 技术和商业应用培训 -->
              {{ $t('labs.ywe')}}</div>
            <div class="" v-on:click="showTow('3')" v-bind:class="{pinkbkg:show_tow==3,graybkg:show_tow!=3}">
              <!--全球区块链技术研讨会承办 -->
              {{ $t('labs.yws')}}</div>
            <div class="" v-on:click="showTow('4')" v-bind:class="{pinkbkg:show_tow==4,graybkg:show_tow!=4}">
              <!--商业项目区块链化咨询和技术资源服务 -->
              {{ $t('labs.ywss')}}</div>
            <div class="" v-on:click="showTow('5')" v-bind:class="{pinkbkg:show_tow==5,graybkg:show_tow!=5}">
              <!--公链上DAPP的孵化 -->
              {{ $t('labs.yww')}}</div>
          </div>
          <div class="left labs_detail margintop20"  v-if="show_tow==1">
            <div>
              <img src="../assets/img/tag_pink.png">
              <span>
                <!-- 广告展示和项目Meetup路演 -->
                {{ $t('labs.ggzs')}}</span>
            </div>
            <div>
              <img src="../assets/img/tag_pink.png">
              <span>
                <!-- 区块链技术相关硬件及安全产品销售 -->
                {{ $t('labs.qkljs')}}</span>
            </div>
          </div>
          <div class="left labs_detail margintop20" v-if="show_tow==2">
              <div class="detail2">
                <img src="../assets/img/tag_pink.png">
                <span>
                  <!-- 定期举办线上线下课程培训，包括技术和商业应用培训 -->
                  {{ $t('labs.dqjb')}}</span>
              </div>
            </div>
          </div>
          <div class="left labs_detail margintop20" v-if="show_tow==3">
            <div>
              <img src="../assets/img/tag_pink.png">
              <span>
                <!-- 结合政府高校资源举办全球规模的区块链技术研讨 -->
                {{ $t('labs.jhzfgx')}}</span>
            </div>
          </div>
          <div class="left labs_detail margintop20" v-if="show_tow==4">
            <div>
              <img src="../assets/img/tag_pink.png">
              <span>
                <!-- 区块链经济模型商业模式设计咨询服务 -->
                {{ $t('labs.qkljj')}}</span>
            </div>
             <div>
              <img src="../assets/img/tag_pink.png">
              <span>
                <!-- 商业公司进行区块链化资源及技术团队对接服务 -->
                {{ $t('labs.sygs')}}</span>
            </div>
          </div>
          <div class="left labs_detail margintop20" v-if="show_tow==5">
            <div>
              <img src="../assets/img/tag_pink.png">
              <span>
                <!-- 技术团队打造公链 -->
                {{ $t('labs.jstd')}}</span>
            </div>
            <div>
              <img src="../assets/img/tag_pink.png">
              <span>
                <!-- 公链上的DAPP的孵化 -->
                {{ $t('labs.gldh')}}</span>
            </div>
          </div>
      </div>
    </div>
  </div>
  <!-- 移动端中英文 -->
  <div class="contentEn labs mb" v-if="isEnglish">
    <div class="labs_step">
      <div class="labs1">
        <h1>
					<span class="bluecolor">
						<!-- 常规业务 -->
					{{ $t('labs.cgyw')}}</span>
        </h1>
        <p class="aboutlabs">
          <!-- 依托FINWEX INSTITUTE智库资源，整合上下游业务，为区块链项目的孵化和加速提供专业咨询服务 -->
        {{ $t('labs.ytyfx')}}</p>
        <div>
          <div class="left tag_labs">
            <div class="" v-on:click="showOne('1')" v-bind:class="{bluebkg:show_one==1,graybkg:show_one!=1}">
              <!-- 前期孵化 -->
            {{ $t('labs.qqfh')}}</div>
            <div class="" v-on:click="showOne('2')" v-bind:class="{bluebkg:show_one==2,graybkg:show_one!=2}">
              <!-- 中期曝光 -->
            {{ $t('labs.zqfh')}}</div>
            <div v-on:click="showOne('3')" v-bind:class="{bluebkg:show_one==3,graybkg:show_one!=3}">
              <!-- 后期服务 -->
            {{ $t('labs.hqfh')}}</div>
          </div>
          <div v-if="show_one==1" class="left labs_detail">
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- 资本+媒体+技术的资源对接 -->
                {{ $t('labs.zbmt')}}</span>
            </div>
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- 物理空间提供 -->
                {{ $t('labs.wlkjtg')}}</span>
            </div>
          </div>

          <div v-if="show_one==2" class="left labs_detail">
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- Meetup（全球含赫尔辛基、旧金山等20多个城市，40多个点） -->
                {{ $t('labs.mtqq')}}</span>
            </div>
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- FINWEX SUMMIT全球金融科技峰会展示机会 -->
                {{ $t('labs.fxqqjr')}} </span>
            </div>
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- 媒体曝光及资本资源、技术团队资源、法律辅导 -->
                {{ $t('labs.mtbg')}}</span>
            </div>
          </div>

          <div v-if="show_one==3" class="left labs_detail">
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- 加速咨询 -->
                {{ $t('labs.jsfw')}}</span>
            </div>
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- 法律意见顾问 -->
                {{ $t('labs.flyjgw')}}</span>
            </div>
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- 人才培训及输送等 -->
                {{ $t('labs.rcpxjs')}}</span>
            </div>
          </div>
        </div>
      </div>
     <div class="labs2">
        <h1>
					<span class="pinkcolor">
						<!-- 特有业务 -->
					{{ $t('labs.tyyw')}}</span>
        </h1>
        <p class="aboutlabs">
          <!-- 特有业务是FINWEX LABS的一个重要特点，目的是推动现有区块链项目的落地应用，引导区块链技术更快地服务于实体经济发展 -->
        {{ $t('labs.tyyws')}}</p>
        <div>
          <div class="left tag_labs">
            <div class="" v-on:click="showTow('1')" v-bind:class="{pinkbkg:show_tow==1,graybkg:show_tow!=1}">
              <!-- 硬件和安全产品展示（广告）与销售  -->
              {{ $t('labs.ywy')}}</div>
              <div class="left labs_detail margintop20"  v-if="show_tow==1">
                <div>
                  <img src="../assets/img/tag_pink.png">
                  <span>
                    <!-- 广告展示和项目Meetup路演 -->
                    {{ $t('labs.ggzs')}}</span>
                </div>
                <div>
                  <img src="../assets/img/tag_pink.png">
                  <span>
                    <!-- 区块链技术相关硬件及安全产品销售 -->
                    {{ $t('labs.qkljs')}}</span>
                </div>
              </div>
            <div class="" v-on:click="showTow('2')" v-bind:class="{pinkbkg:show_tow==2,graybkg:show_tow!=2}">
              <!-- 技术和商业应用培训 -->
              {{ $t('labs.ywe')}}</div>
              <div class="left labs_detail margintop20" v-if="show_tow==2">
              <div class="detail2">
                <img src="../assets/img/tag_pink.png">
                <span>
                  <!-- 定期举办线上线下课程培训，包括技术和商业应用培训 -->
                  {{ $t('labs.dqjb')}}</span>
              </div>
            </div>
            <div class="" v-on:click="showTow('3')" v-bind:class="{pinkbkg:show_tow==3,graybkg:show_tow!=3}">
              <!--全球区块链技术研讨会承办 -->
              {{ $t('labs.yws')}}</div>
              <div class="left labs_detail margintop20" v-if="show_tow==3">
              <div>
                <img src="../assets/img/tag_pink.png">
                <span>
                  <!-- 结合政府高校资源举办全球规模的区块链技术研讨 -->
                  {{ $t('labs.jhzfgx')}}</span>
              </div>
            </div>
            <div class="" v-on:click="showTow('4')" v-bind:class="{pinkbkg:show_tow==4,graybkg:show_tow!=4}">
              <!--商业项目区块链化咨询和技术资源服务 -->
              {{ $t('labs.ywss')}}</div>
              <div class="left labs_detail margintop20" v-if="show_tow==4">
              <div>
                <img src="../assets/img/tag_pink.png">
                <span>
                  <!-- 区块链经济模型商业模式设计咨询服务 -->
                  {{ $t('labs.qkljj')}}</span>
              </div>
               <div>
                <img src="../assets/img/tag_pink.png">
                <span>
                  <!-- 商业公司进行区块链化资源及技术团队对接服务 -->
                  {{ $t('labs.sygs')}}</span>
              </div>
            </div>
            <div class="" v-on:click="showTow('5')" v-bind:class="{pinkbkg:show_tow==5,graybkg:show_tow!=5}">
              <!--公链上DAPP的孵化 -->
              {{ $t('labs.yww')}}</div>
               <div class="left labs_detail margintop20" v-if="show_tow==5">
                <div>
                  <img src="../assets/img/tag_pink.png">
                  <span>
                    <!-- 技术团队打造公链 -->
                    {{ $t('labs.jstd')}}</span>
                </div>
                <div>
                  <img src="../assets/img/tag_pink.png">
                  <span>
                    <!-- 公链上的DAPP的孵化 -->
                    {{ $t('labs.gldh')}}</span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="content labs mb" v-else>
    <div class="labs_step">
      <div class="labs1">
        <h1>
					<span class="bluecolor">
						<!-- 常规业务 -->
					{{ $t('labs.cgyw')}}</span>
        </h1>
        <p class="aboutlabs">
          <!-- 依托FINWEX INSTITUTE智库资源，整合上下游业务，为区块链项目的孵化和加速提供专业咨询服务 -->
        {{ $t('labs.ytyfx')}}</p>
        <div>
          <div class="left tag_labs">
            <div class="" v-on:click="showOne('1')" v-bind:class="{bluebkg:show_one==1,graybkg:show_one!=1}">
              <!-- 前期孵化 -->
            {{ $t('labs.qqfh')}}</div>
            <div class="" v-on:click="showOne('2')" v-bind:class="{bluebkg:show_one==2,graybkg:show_one!=2}">
              <!-- 中期曝光 -->
            {{ $t('labs.zqfh')}}</div>
            <div v-on:click="showOne('3')" v-bind:class="{bluebkg:show_one==3,graybkg:show_one!=3}">
              <!-- 后期服务 -->
            {{ $t('labs.hqfh')}}</div>
          </div>
          <div v-if="show_one==1" class="left labs_detail">
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- 资本+媒体+技术的资源对接 -->
                {{ $t('labs.zbmt')}}</span>
            </div>
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- 物理空间提供 -->
                {{ $t('labs.wlkjtg')}}</span>
            </div>
          </div>

          <div v-if="show_one==2" class="left labs_detail">
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- Meetup（全球含赫尔辛基、旧金山等20多个城市，40多个点） -->
                {{ $t('labs.mtqq')}}</span>
            </div>
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- FINWEX SUMMIT全球金融科技峰会展示机会 -->
                {{ $t('labs.fxqqjr')}} </span>
            </div>
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- 媒体曝光及资本资源、技术团队资源、法律辅导 -->
                {{ $t('labs.mtbg')}}</span>
            </div>
          </div>

          <div v-if="show_one==3" class="left labs_detail">
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- 加速咨询 -->
                {{ $t('labs.jsfw')}}</span>
            </div>
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- 法律意见顾问 -->
                {{ $t('labs.flyjgw')}}</span>
            </div>
            <div>
              <img src="../assets/img/tag_blue.png">
              <span>
                <!-- 人才培训及输送等 -->
                {{ $t('labs.rcpxjs')}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="labs2">
        <h1>
					<span class="pinkcolor">
						<!-- 特有业务 -->
					{{ $t('labs.tyyw')}}</span>
        </h1>
        <p class="aboutlabs">
          <!-- 特有业务是FINWEX LABS的一个重要特点，目的是推动现有区块链项目的落地应用，引导区块链技术更快地服务于实体经济发展 -->
        {{ $t('labs.tyyws')}}</p>
        <div>
          <div class="left tag_labs">
            <div class="" v-on:click="showTow('1')" v-bind:class="{pinkbkg:show_tow==1,graybkg:show_tow!=1}">
              <!-- 硬件和安全产品展示（广告）与销售  -->
              {{ $t('labs.ywy')}}</div>
              <div class="left labs_detail margintop20"  v-if="show_tow==1">
                <div>
                  <img src="../assets/img/tag_pink.png">
                  <span>
                    <!-- 广告展示和项目Meetup路演 -->
                    {{ $t('labs.ggzs')}}</span>
                </div>
                <div>
                  <img src="../assets/img/tag_pink.png">
                  <span>
                    <!-- 区块链技术相关硬件及安全产品销售 -->
                    {{ $t('labs.qkljs')}}</span>
                </div>
              </div>
            <div class="" v-on:click="showTow('2')" v-bind:class="{pinkbkg:show_tow==2,graybkg:show_tow!=2}">
              <!-- 技术和商业应用培训 -->
              {{ $t('labs.ywe')}}</div>
              <div class="left labs_detail margintop20" v-if="show_tow==2">
              <div class="detail2">
                <img src="../assets/img/tag_pink.png">
                <span>
                  <!-- 定期举办线上线下课程培训，包括技术和商业应用培训 -->
                  {{ $t('labs.dqjb')}}</span>
              </div>
            </div>
            <div class="" v-on:click="showTow('3')" v-bind:class="{pinkbkg:show_tow==3,graybkg:show_tow!=3}">
              <!--全球区块链技术研讨会承办 -->
              {{ $t('labs.yws')}}</div>
              <div class="left labs_detail margintop20" v-if="show_tow==3">
              <div>
                <img src="../assets/img/tag_pink.png">
                <span>
                  <!-- 结合政府高校资源举办全球规模的区块链技术研讨 -->
                  {{ $t('labs.jhzfgx')}}</span>
              </div>
            </div>
            <div class="" v-on:click="showTow('4')" v-bind:class="{pinkbkg:show_tow==4,graybkg:show_tow!=4}">
              <!--商业项目区块链化咨询和技术资源服务 -->
              {{ $t('labs.ywss')}}</div>
              <div class="left labs_detail margintop20" v-if="show_tow==4">
              <div>
                <img src="../assets/img/tag_pink.png">
                <span>
                  <!-- 区块链经济模型商业模式设计咨询服务 -->
                  {{ $t('labs.qkljj')}}</span>
              </div>
               <div>
                <img src="../assets/img/tag_pink.png">
                <span>
                  <!-- 商业公司进行区块链化资源及技术团队对接服务 -->
                  {{ $t('labs.sygs')}}</span>
              </div>
            </div>
            <div class="" v-on:click="showTow('5')" v-bind:class="{pinkbkg:show_tow==5,graybkg:show_tow!=5}">
              <!--公链上DAPP的孵化 -->
              {{ $t('labs.yww')}}</div>
               <div class="left labs_detail margintop20" v-if="show_tow==5">
                <div>
                  <img src="../assets/img/tag_pink.png">
                  <span>
                    <!-- 技术团队打造公链 -->
                    {{ $t('labs.jstd')}}</span>
                </div>
                <div>
                  <img src="../assets/img/tag_pink.png">
                  <span>
                    <!-- 公链上的DAPP的孵化 -->
                    {{ $t('labs.gldh')}}</span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="clear"></div>
  <div class="co_content">
    <h3 class="text-center paddingtop100">
      <!-- 合作布局 -->
      {{ $t('labs.hzbj')}}</h3>
    <div class="labs_part">
      <div class="part1">
        <img src="../assets/img/labs/1.png">
        <div class="part-bottom">
          <!-- 上海 -->
          <h3>{{ $t('labs.hesh')}}</h3>
          <h4>
            <!-- 张江高科FINWEX区块链孵化器 -->
            {{ $t('labs.zjgkqkl')}}</h4>
          <p>
            <!-- 通过LABS及活动落地张江，使FINWEX活动在张江常态化，持续化，积极引导行业注意力和孵化器等要素聚集，助力上海在新一轮金融科技城市竞争中获得新优势。 -->
          {{ $t('labs.tglb')}}</p>
        </div>
      </div>
      <div class="part1">
        <img src="../assets/img/labs/2.png">
        <div class="part-bottom">
          <h3>
            <!-- 深圳和香港 -->
            {{ $t('labs.szxg')}}</h3>
          <h4>
            <!-- GOLDFORD X FINWEX区块链孵化器 -->
            {{ $t('labs.gldqkl')}}</h4>
          <p>
            <!-- 通过FINWEX与高锋集团合作，在深圳和香港建立孵化器，打造粤港澳的区块链投资新环境。 -->
          {{ $t('labs.tgygf')}}</p>
        </div>
      </div >
      <div class="part1">
        <img src="../assets/img/labs/3.png">
        <div class="part-bottom">
          <h3>
            <!-- 全国16城 -->
            {{ $t('labs.qg16c')}}</h3>
          <h4>
            <!-- WE+ 酷窝 X FINWEX区块链孵化器 -->
            {{ $t('labs.wjkw')}}</h4>
          <p>
           <!-- WE+酷窝目前已布局16个城市，拥有约15000个工位，13万方体量。 WE+与FINWEX LABS合作孵化器，共同推动区块链行业健康成长，加速区块链产业发展，WE+和FINWEX已达成战略合作关系，WE+将直接投资FINWEX LABS，并且WE+全国16个城市网点将挂牌FINWEX LABS。
          WE+的股东包括柯罗尼新扬子基金和上实集团，以及高捷资本，分享投资，戈壁创投、寒武创投和英诺天使基金等。 -->
          {{ $t('labs.wjkwbj')}}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 返回顶部 -->
  <scrollTop></scrollTop>
</div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from 'vuex';
import scrollTop from '../components/goTop'
export default {
  head() {
    return {
      title: this.$t('labs.labsTitle')
    }
  },
  components: {
    scrollTop
  },
  layout: "labs",
  computed: {
    ...mapGetters("app", ["isEnglish"]),
  },
  asyncData(ctx) {
    ctx.store.commit("changeUrl", ctx.route.name);
  },
  data() {
    return {
      show_one: 1,
      show_tow: 1
    };
  },
  methods: {
    showOne(num) {
      this.show_one = num;
    },
    showTow(num) {
      this.show_tow = num;
    }
  },
};
</script>

<style lang="less" scoped>
@import "~@style/variables";
//PC端
.pc{
  display:block;
}
.mb{
  display:none;
}
.banner,
.bannerEn {
  width: 100%;
  min-width: 1110px;
  background: url(../assets/img/bkg_institute.jpg);
  height: 585px;
  margin: 0 auto;
  background-position: center;
  overflow: hidden;
  .page-header {
    margin-top: 120px;
  }
  div {
    margin: 0 auto;
    width: 930px;
    color: #fff;
    text-align: center;
  }
  p {
    color: #fff;
    font-size: 18px;
    line-height: 26px;
    font-weight: lighter;
    margin-top: 25px;
    z-index: 99;
    text-align: left;
    //padding-right:150px;
  }
  .text-left {
    margin-top: 50px;
    text-align: center;
  }
  h1 {
    margin-top: 100px;
    margin-bottom: 50px;
    font-size: 42px;
    //font-weight: 700;
    color: #fff;
  }
  img {
    width: 950px;
    position: relative;
    left: 49%;
    bottom: 85px;
  }
}
.content {
  padding: 24px 0 80px;
  margin: 0 auto;
  width: 1230px;
  .labs_step {
    > .labs1 {
      width: 440px;
      height: 380px;
      border-radius: 8px;
      float: left;
      padding: 40px;
      margin-right: 20px;
      margin-left: 20px;
      margin-top: 40px;
    }
    > div:first-child:hover {
      cursor: pointer;
      transition: all 2s;
      transform:translateY(-5px);
      box-shadow: 0 10px 30px 0 rgba(136, 172, 255, 0.22);
    }
    > div:last-child:hover {
      cursor: pointer;
      transition: all 2s;
      transform:translateY(-5px);
      box-shadow: 0 10px 30px 0 rgba(215, 130, 255, 0.22);
    }
    h1 {
      color: #3e3e3e;
      font-size: 32px;
      font-weight: 700;
      span {
        //font-weight: lighter;
        font-weight: 400;
      }
    }
    .aboutlabs {
      margin-top: 30px;
      font-size: 16px;
      line-height: 22px;
      height: 70px;
      color: #42505c;
    }
    .bluecolor {
      color: #88acff;
    }
    .pinkcolor {
      color: #df9aff;
    }

    .pinkbkg {
      background: #df9aff;
      color: #fff !important;
    }

    .tag_labs {
      width: 150px;
      float: left;
      div {
        width: 150px;
        height: 60px;
        border-radius: 8px;
        line-height: 60px;
        text-align: center;
        font-size: 16px;
        margin-top: 10px;
        float: left;
        cursor: pointer;
        color: #42505c;
      }
      .bluebkg {
        background: #88acff;
        color: #fff;
      }
      .graybkg:hover {
        background: rgba(241, 241, 241, 0.4);
        border-radius: 8px;
      }
    }
    .labs_detail {
      width: 250px;
      margin-left: 24px;
      float: left;
      padding-top: 18px;
      div {
        margin-bottom: 18px;
        position: relative;
        padding-left: 20px;
      }
      img {
        width: 20px;
        position: absolute;
        left: -4px;
      }
      span {
        color: #42505c;
        line-height: 20px;
      }
    }
  }
  .labs_step {
    .labs2 {
      width: 540px;
      height: 380px;
      border-radius: 8px;
      float: left;
      padding: 40px;
      margin-right: 20px;
      margin-left: 20px;
      margin-top: 40px;
      .tag_labs {
        width: 250px;
        float: left;
        div {
          width: 230px;
          height: 45px;
          border-radius: 8px;
          line-height: 45px;
          text-align: center;
          font-size: 16px;
          margin-top: 10px;
          float: left;
          cursor: pointer;
          color: #42505c;
        }
        .bluebkg {
          background: #88acff;
          color: #fff;
        }
        .graybkg:hover {
          background: rgba(241, 241, 241, 0.4);
          border-radius: 8px;
        }
      }
      .labs_detail {
        width: 250px;
        float: left;
        padding-top: 18px;
      }
    }
  }
}
.contentEn {
  padding: 24px 0 80px;
  margin: 0 auto;
  width: 1400px;
  .labs_step {
    > .labs1 {
      width: 465px;
      height: 490px;
      border-radius: 8px;
      float: left;
      padding: 40px 0 40px 40px;
      margin-right: 20px;
      margin-left: 20px;
      margin-top: 40px;
    }
    > div:first-child:hover {
      cursor: pointer;
      transition: all 2s;
      transform:translateY(-5px);
      box-shadow: 0 10px 30px 0 rgba(136, 172, 255, 0.22);
    }
    > div:last-child:hover {
      cursor: pointer;
      transition: all 2s;
      transform:translateY(-5px);
      box-shadow: 0 10px 30px 0 rgba(215, 130, 255, 0.22);
    }
    h1 {
      color: #3e3e3e;
      font-size: 32px;
      font-weight: 700;
      span {
        //font-weight: lighter;
        font-weight: 400;
      }
    }
    .aboutlabs {
      margin-top: 30px;
      font-size: 16px;
      line-height: 20px;
      height: 100px;
      color: #42505c;
    }
    .bluecolor {
      color: #88acff;
    }
    .pinkcolor {
      color: #df9aff;
    }

    .pinkbkg {
      background: #df9aff;
      color: #fff !important;
    }

    .tag_labs {
      width: 190px;
      float: left;
      div {
        width: 190px;
        height: 60px;
        border-radius: 8px;
        line-height: 60px;
        text-align: center;
        font-size: 16px;
        margin-top: 10px;
        float: left;
        cursor: pointer;
        color: #42505c;
      }
      .bluebkg {
        background: #88acff;
        color: #fff;
      }
      .graybkg:hover {
        background: rgba(241, 241, 241, 0.4);
        border-radius: 8px;
      }
    }
    .labs_detail {
      width: 230px;
      margin-left: 24px;
      float: left;
      padding-top: 18px;
      div {
        margin-bottom: 18px;
        position: relative;
        padding-left: 20px;
      }
      img {
        width: 20px;
        position: absolute;
        left: -4px;
      }
      span {
        color: #42505c;
        line-height: 20px;
      }
    }
  }
  .labs_step {
    .labs2 {
      width: 630px;
      height: 490px;
      border-radius: 8px;
      float: left;
      padding: 40px 0 40px 40px;
      margin-right: 20px;
      margin-left: 20px;
      margin-top: 40px;
      .tag_labs {
        width: 250px;
        float: left;
        div {
          width: 250px;
          height: 50px;
          border-radius: 8px;
          line-height: 20px;
          text-align: center;
          font-size: 16px;
          padding-top: 10px;
          float: left;
          cursor: pointer;
          color: #42505c;
        }
        .bluebkg {
          background: #88acff;
          color: #fff;
        }
        .graybkg:hover {
          background: rgba(241, 241, 241, 0.4);
          border-radius: 8px;
        }
      }
      .labs_detail {
        width: 300px;
        //margin-left: 225px;
        float: left;
        padding-top: 18px;
      }
    }
  }
}
.text-center {
  padding-top: 80px;
  text-align: center;
  font-size: 24px;
  margin-bottom: 40px;
}
.clear {
  clear: both;
}
.labs_part {
  margin: 0 auto;
  width: 1080px;
  h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 7px;
  }
  h4 {
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;
    margin-bottom: 13px;
  }
  p {
    font-size: 12px;
    line-height: 17px;
    color: rgba(62, 62, 62, 0.6);
  }
}
.labs_part > div {
  // height: 220px;
  background: #fff;
  margin-top: 20px;
  box-shadow: 0 2px 4px 0 rgba(37, 80, 123, 0.19);
  display: flex;
  align-items: center;
}
.labs_part > div img {
  width: 230px;
  padding: 0 22px;
  height: 100px;
  // margin-top: 50px;
}
.labs_part > div div {
  flex: 1;
  // width: 650px;
  margin-left: 30px;
  padding: 26px 72px 26px 20px;
}
.co_content {
  background: #f6f7fb;
  margin-top: 100px;
  height: 1000px;
  margin-bottom: -100px;
  color: #42505c;
  h3 {
    font-weight: 700;
  }
}
//移动端
#summit-preview {
  @media screen and (max-width: @device-width-mobile) {
    .pc{
      display:none;
    }
    .mb{
      display:block;
    }
    .content {
      padding: 0;
      width: 100%;
    }
    .row {
      margin: 0;
    }
    .content,.contentEn {
      padding: 0;
      width: 100%;
      .labs_step {
        display: flex;
        flex-direction: column;
        height: auto;
        width: 100%;
        padding:0;
        .labs1 {
          width:90%;
          height: auto;
          padding:.3rem .2rem;
          margin-left:0;
          margin-right:0;
          margin: .2rem auto;
          box-shadow: 0 10px 30px 0 rgba(136, 172, 255, 0.22);
          .tag_labs {
            display: flex;
            width: 6rem;
            div {
              height: 28px;
              line-height: 28px;
            }
          }
          .labs_detail {
            padding-top: 0;
            margin: 0.3rem auto 0 1rem;
          }
        }
        .labs2 {
          width:90%;
          height: auto;
          padding:.3rem .2rem;
          margin-left:0;
          margin-right:0;
          margin: .2rem auto;
          box-shadow: 0 10px 30px 0 rgba(215, 130, 255, 0.22);
          .tag_labs {
            display: flex;
            width: 100%;
            flex-direction: column;
            div {
              width: 100%;
              height: .7rem;
              line-height: 0.7rem;
            }
            .labs_detail {
              margin: 0;
              height: auto;
              background-color: rgba(144, 144, 144, 0.1);
              padding-top: 0;
              div {
                width: 91%;
                height: auto;
                text-align: left;
                margin-top: 0;
                margin-bottom: 0;
                padding-left:.8rem;
              }
              img {
                left: 6%;
                top: 8px;
              }
            }
          }
        }
        .aboutlabs {
          height: auto;
        }
      }
    }
    .contentEn{
      .labs_step{
        .labs1{
          .tag_labs{
            div{
              height:1rem;
              line-height:.4rem;
            }
          }
        }
        .labs2{
          .tag_labs{
            div{
              height:.8rem;
              line-height:.4rem;
            }
            .labs_detail{
              img{
                left:3%;
                top:5px;
              }
              div{
                padding:.1rem 0 .1rem .5rem;
                
              }
            }
          }
        }
      }
    }
    .banner {
      background: url("/images/labs/banner_bg.jpg") no-repeat;
      background-size: cover;
      width: 100%;
      min-width: 0;
      height: 8.5rem;
      div {
        width: 100%;
      }
      .page-header {
        width: 86%;
        margin-top: 0.4rem;
        .title {
          font-family: PingFangSC-Semibold;
          font-size: 0.6rem;
          color: #ffffff;
          //letter-spacing: 0.06rem;
          text-align: left;
          font-weight: 550;
          line-height: 1.2;
          margin-top: 0;
        }
        p {
          width: 100%;
          font-size: 14px;
          color: #ffffff;
          letter-spacing: 0;
          line-height: 0.4rem;
          margin-top: 20px;
        }
        img {
          width: 6rem;
          position: relative;
          left: 29%;
          bottom: 13px;
        }
      }
    }
    .bannerEn {
      background: url("/images/labs/banner_bg.jpg") no-repeat;
      background-size: cover;
      width: 100%;
      min-width: 0;
      height: 8.5rem;
      div {
        width: 100%;
      }
      .page-header {
        width: 90%;
        margin: 0 auto;
        margin-top: 0;
        padding-top: 0.4rem;
        .title {
          font-family: PingFangSC-Semibold;
          font-size: 0.5rem;
          color: #ffffff;
          //letter-spacing: 0.06rem;
          text-align: left;
          font-weight: 550;
          line-height: 1;
          margin-top: 0.3rem;
          margin-bottom: 0.7rem;
        }
        p {
          width: 100%;
          font-size: 13px;
          color: #ffffff;
          letter-spacing: 0;
          line-height: 0.3rem;
          margin-top: 20px;
        }
        img {
          width: 6rem;
          position: relative;
          left: 29%;
          bottom: -4px;
        }
      }
    }
    .banner-labs {
      background: url("/images/labs/banner-labs.png") no-repeat;
      background-size: cover;
      width: 1080px;
      height: 573px;
      text-align: right;
    }
    .co_content {
      height: auto;
      margin-bottom: 40px;
      .text-center {
        padding-top: 40px;
      }
      .labs_part {
        width: 100%;
        .part1 {
          display: flex;
          flex-direction: column;
          margin: 10px;
          padding-top: 0.4rem;
          border-radius: 5%;
          .part-bottom {
            margin-left: 0;
            padding: 20px;
            h3 {
              font-weight: 300;
              text-align: center;
            }
            h4 {
              font-size: 16px;
              font-weight: 400;
              text-align: center;
              color: #3e3e3e;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 416px) and (min-width: 380px) {
    .content {
      padding: 0;
    }
    .bannerEn {
      background: url("/images/labs/banner_bg.jpg") no-repeat;
      background-size: cover;
      width: 100%;
      min-width: 0;
      height: 8rem;
      div {
        width: 100%;
      }
      .page-header {
        width: 86%;
        margin: 0 auto;
        margin-top: 0;
        padding-top: 0.4rem;
        .title {
          font-family: PingFangSC-Semibold;
          font-size: 0.5rem;
          color: #ffffff;
          //letter-spacing: 0.06rem;
          text-align: left;
          font-weight: 550;
          line-height: 1;
          margin-top: 0;
        }
        p {
          width: 100%;
          font-size: 13px;
          color: #ffffff;
          letter-spacing: 0;
          line-height: 0.3rem;
          margin-top: 20px;
        }
        img {
          width: 6rem;
          position: relative;
          left: 29%;
          bottom: 13px;
        }
      }
    }
    .row {
      margin: 0;
    }
    .banner {
      background: url("/images/labs/banner_bg.jpg") no-repeat;
      background-size: cover;
      width: 100%;
      min-width: 0;
      height: 8.5rem;
      div {
        width: 100%;
      }
      .page-header {
        width: 86%;
        margin-top: 0.4rem;
        .title {
          font-family: PingFangSC-Semibold;
          font-size: 0.6rem;
          color: #ffffff;
          //letter-spacing: 0.06rem;
          text-align: left;
          font-weight: 500;
          line-height: 1.2;
          margin-top: 0;
        }
        p {
          width: 100%;
          font-size: 14px;
          color: #ffffff;
          letter-spacing: 0;
          line-height: 0.35rem;
          margin-top: 20px;
        }
        img {
          width: 7rem;
          height: 4rem;
          position: relative;
          left: 80px;
          bottom: 26px;
        }
      }
    }
    .banner-labs {
      background: url("/images/labs/banner-labs.png") no-repeat;
      background-size: cover;
      width: 1080px;
      height: 573px;
      text-align: right;
    }
    .labs_step {
      display: flex;
      flex-direction: column;
      height: auto;
      width: 100%;
      .labs1,
      .labs2 {
        width: 6.5rem;
        height: auto;
        padding: 0;
        .tag_labs {
          display: flex;
          width: 6rem;
          div {
            height: 28px;
            line-height: 28px;
          }
        }
        .labs_detail {
          margin: 0.7rem auto 0 1rem;
        }
      }
      .labs2 {
        .tag_labs {
          width: 100%;
          div {
            height: 175px;
          }
        }
      }
    }
    .co_content {
      height: auto;
      margin-bottom: 40px;
      margin-top:25px;
      .text-center {
        padding-top: 40px;
      }
      .labs_part {
        width: 100%;
        .part1 {
          display: flex;
          flex-direction: column;
          margin: 10px;
          padding-top: 0.4rem;
          border-radius: 5%;
          .part-bottom {
            margin-left: 0;
            padding: 20px;
            h3 {
              font-weight: 300;
              text-align: center;
            }
            h4 {
              font-size: 16px;
              font-weight: 400;
              text-align: center;
              color: #3e3e3e;
            }
          }
        }
      }
    }
  }
}
</style>
