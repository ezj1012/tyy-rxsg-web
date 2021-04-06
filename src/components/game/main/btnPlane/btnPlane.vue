<template>
  <div class="rxsg-btn-plane">
    <div class="rxsg-btn-plane-main">
      <div class="btn-top">
        <div class="btn-top-left">
          <RadioButton
            class="btn-top-btn btn-top-center-innercity"
            :id="1"
            :bg="bgs.top.innercityBg"
            v-model="palneState.top.openInnercityPlane"
            width="76"
            height="29"
            :click="changePage"
            :holdActive="true"
          ></RadioButton>
          <RadioButton
            class="btn-top-btn btn-top-center-outercity"
            :id="2"
            :bg="bgs.top.outercityBg"
            v-model="palneState.top.openOutercityPlane"
            width="76"
            height="29"
            :click="changePage"
            :holdActive="true"
          ></RadioButton>
          <RadioButton
            class="btn-top-btn btn-top-center-map"
            :id="3"
            :bg="bgs.top.mapBg"
            v-model="palneState.top.openMapPlane"
            width="76"
            height="29"
            :click="changePage"
            :holdActive="true"
          ></RadioButton>
          <RadioButton
            class="btn-top-btn btn-top-center-battle"
            :id="4"
            :bg="bgs.top.battleBg"
            v-model="palneState.top.openBattlePlane"
            width="76"
            height="29"
            :click="changePage"
            :holdActive="true"
          ></RadioButton>
        </div>
        <div class="btn-top-center">
          <RadioButton
            class="btn-top-btn btn-top-center-build"
            message="显示建筑队列"
            :bg="bgs.top.buildBg"
            v-model="palneState.top.openBuildPlane"
            width="18"
            height="22"
          ></RadioButton>
          <RadioButton
            class="btn-top-btn btn-top-center-craft"
            message="宝物状态"
            :bg="bgs.top.craftBg"
            v-model="palneState.top.openCraftPlane"
            width="17"
            height="17"
          ></RadioButton>
          <RadioButton
            class="btn-top-btn btn-top-center-tactic"
            :bg="bgs.top.tacticBg"
            v-model="palneState.top.openTacticPlane"
            width="17"
            height="17"
            message="技能状态"
          ></RadioButton>
          <RadioButton
            class="btn-top-btn btn-top-center-level"
            :bg="bgs.top.levelBg"
            v-model="palneState.top.openLevelPlane"
            width="18"
            height="22"
            message="显示建筑、地图等级"
          ></RadioButton>
        </div>
        <div class="btn-top-right">
          <RButton
            class="btn-top-btn btn-top-btn-hero"
            :bg="bgs.top.heroBG"
            width="61"
            height="26"
            :click="
              () => {
                palneState.top.openHeroPlane = true;
              }
            "
          ></RButton>
          <RButton
            class="btn-top-btn btn-top-btn-army"
            :bg="bgs.top.armyBG"
            width="61"
            height="26"
            :click="
              () => {
                palneState.top.openArmyPlane = true;
              }
            "
          ></RButton>
          <RButton
            class="btn-top-btn btn-top-btn-union"
            :bg="bgs.top.unionBG"
            width="61"
            height="26"
            :click="
              () => {
                palneState.top.openUnionPlane = true;
              }
            "
          ></RButton>
          <RButton
            class="btn-top-btn btn-top-btn-mission"
            :bg="bgs.top.missionBG"
            width="61"
            height="26"
            :click="
              () => {
                palneState.top.openMissionPlane = true;
              }
            "
          ></RButton>
          <RButton
            class="btn-top-btn btn-top-btn-box"
            :bg="bgs.top.boxBG"
            :disabled="palneState.top.boxDisable"
            width="29"
            height="25"
            :click="
              () => {
                palneState.top.openBoxPlane = true;
              }
            "
          ></RButton>
        </div>
      </div>
      <div class="btn-bottom">
        <RButton
          class="btn-bottom-btn btn-bottom-btn-achievement"
          :bg="bgs.bottom.achievementBG"
          width="31"
          height="35"
          :click="
            () => {
              palneState.bottom.openAchievementPlane = true;
            }
          "
        ></RButton>
        <RButton
          class="btn-bottom-btn btn-bottom-btn-charge"
          :bg="bgs.bottom.chargeBG"
          width="31"
          height="35"
          :click="
            () => {
              palneState.bottom.openChargePlane = true;
            }
          "
        ></RButton>
        <RButton
          class="btn-bottom-btn btn-bottom-btn-forum"
          :bg="bgs.bottom.forumBG"
          width="31"
          height="35"
          :click="
            () => {
              palneState.bottom.openForumPlane = true;
            }
          "
        ></RButton>
        <RButton
          class="btn-bottom-btn btn-bottom-btn-friend"
          :bg="bgs.bottom.friendBG"
          width="31"
          height="35"
          :click="
            () => {
              palneState.bottom.openFriendPlane = true;
            }
          "
        ></RButton>
        <RButton
          class="btn-bottom-btn btn-bottom-btn-help"
          :bg="bgs.bottom.helpBG"
          width="31"
          height="35"
          :click="
            () => {
              palneState.bottom.openHelpPlane = true;
            }
          "
        ></RButton>
        <RButton
          class="btn-bottom-btn btn-bottom-btn-mail"
          :bg="bgs.bottom.mailBG"
          width="31"
          height="35"
          :click="
            () => {
              palneState.bottom.openMailPlane = true;
            }
          "
        ></RButton>
        <RButton
          class="btn-bottom-btn btn-bottom-btn-rank"
          :bg="bgs.bottom.rankBG"
          width="31"
          height="35"
          :click="
            () => {
              palneState.bottom.openRankPlane = true;
            }
          "
        ></RButton>
        <RButton
          class="btn-bottom-btn btn-bottom-btn-report"
          :bg="bgs.bottom.reportBG"
          width="31"
          height="35"
          :click="
            () => {
              palneState.bottom.openReportPlane = true;
            }
          "
        ></RButton>
        <RButton
          class="btn-bottom-btn btn-bottom-btn-shop"
          :bg="bgs.bottom.shopBG"
          width="31"
          height="35"
          :click="
            () => {
              palneState.bottom.openShopPlane = true;
            }
          "
        ></RButton>
        <RButton
          class="btn-bottom-btn btn-bottom-btn-stat"
          :bg="bgs.bottom.statBG"
          width="31"
          height="35"
          :click="
            () => {
              palneState.bottom.openStatPlane = true;
            }
          "
        ></RButton>
        <RButton
          class="btn-bottom-btn btn-bottom-btn-system"
          :bg="bgs.bottom.systemBG"
          width="31"
          height="35"
          :click="
            () => {
              palneState.bottom.openSystemPlane = true;
            }
          "
        ></RButton>
        <RButton
          class="btn-bottom-btn btn-bottom-btn-union"
          :bg="bgs.bottom.unionBG"
          width="31"
          height="35"
          :click="
            () => {
              palneState.bottom.openUnionPlane = true;
            }
          "
        ></RButton>
      </div>
    </div>
  </div>
</template>
<script>
import RButton from "@/components/rxsg/button";
import RadioButton from "@/components/rxsg/radioButton";

export default {
  name: "BtnPlane",
  components: { RButton, RadioButton },
  props: {},
  data() {
    return {
      palneState: {
        top: {
          openHeroPlane: false,
          openArmyPlane: false,
          openUnionPlane: false,
          openMissionPlane: false,
          openBoxPlane: false,
          boxDisable: true,
          openBuildPlane: false,
          openCraftPlane: false,
          openTacticPlane: false,
          openLevelPlane: false,
          //城池页面相关
          openInnercityPlane: true,
          openOutercityPlane: false,
          openMapPlane: false,
          openBattlePlane: false,
        },
        bottom: {
          openAchievementPlane: false,
          openChargePlane: false,
          openForumPlane: false,
          openFriendPlane: false,
          openHelpPlane: false,
          openMailPlane: false,
          openRankPlane: false,
          openReportPlane: false,
          openShopPlane: false,
          openStatPlane: false,
          openSystemPlane: false,
          openUnionPlane: false,
          openWebsitePlane: false,
        },
      },
      bgs: {
        top: {
          heroBG: {
            default:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_hero.png") +
              ") ",
            hover:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_hero_on.png") +
              ") ",
            active:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_hero_down.png") +
              ") ",
          },
          armyBG: {
            default:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_army.png") +
              ") ",
            hover:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_army_on.png") +
              ") ",
            active:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_army_down.png") +
              ") ",
            flicker:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_army_alarm.png") +
              ") ",
          },
          unionBG: {
            default:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_union.png") +
              ") ",
            hover:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_union_on.png") +
              ") ",
            active:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_union_down.png") +
              ") ",
            flicker:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_union_alarm.png") +
              ") ",
          },
          missionBG: {
            default:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_mission.png") +
              ") ",
            hover:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_mission_on.png") +
              ") ",
            active:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_mission_down.png") +
              ") ",
          },
          boxBG: {
            default:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_box.png") +
              ") ",
            hover:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_box_on.png") +
              ") ",
            active:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_box_down.png") +
              ") ",
            disabled:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_box_disabled.png") +
              ") ",
          },
          buildBg: {
            default:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_build.png") +
              ") ",
            active:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_build_dark.png") +
              ") ",
          },
          craftBg: {
            default:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_craft.png") +
              ") ",
            active:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_craft_dark.png") +
              ") ",
          },
          tacticBg: {
            default:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_tactic.png") +
              ") ",
            active:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_tactic_dark.png") +
              ") ",
          },
          levelBg: {
            default:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_level.png") +
              ") ",
            active:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_level_dark.png") +
              ") ",
          },
          innercityBg: {
            default:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_innercity.png") +
              ") ",
            active:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_innercity_on.png") +
              ") ",
            hover:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_innercity_over.png") +
              ") ",
          },
          outercityBg: {
            default:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_outercity.png") +
              ") ",
            active:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_outercity_on.png") +
              ") ",
            hover:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_outercity_over.png") +
              ") ",
          },
          mapBg: {
            default:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_map.png") +
              ") ",
            active:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_map_on.png") +
              ") ",
            hover:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_map_over.png") +
              ") ",
          },
          battleBg: {
            default:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_battle.png") +
              ") ",
            active:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_battle_on.png") +
              ") ",
            hover:
              "url(" +
              require("../../../../assets/rxsg/main/top/topbutton_battle_over.png") +
              ") ",
          },
        },
        bottom: {
          achievementBG: {
            default:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_achievement.png") +
              ") ",
            hover:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_achievement_on.png") +
              ") ",
            active:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_achievement_down.png") +
              ") ",
          },

          chargeBG: {
            default:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_charge.png") +
              ") ",
            hover:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_charge_on.png") +
              ") ",
            active:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_charge_down.png") +
              ") ",
          },

          forumBG: {
            default:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_forum.png") +
              ") ",
            hover:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_forum_on.png") +
              ") ",
            active:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_forum_down.png") +
              ") ",
          },

          friendBG: {
            default:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_friend.png") +
              ") ",
            hover:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_friend_on.png") +
              ") ",
            active:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_friend_down.png") +
              ") ",
            flicker:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_friend_blink1.png") +
              ") ",
          },

          helpBG: {
            default:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_help.png") +
              ") ",
            hover:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_help_on.png") +
              ") ",
            active:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_help_down.png") +
              ") ",
          },

          mailBG: {
            default:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_mail.png") +
              ") ",
            hover:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_mail_on.png") +
              ") ",
            active:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_mail_down.png") +
              ") ",
            flicker:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_mail_blink1.png") +
              ") ",
          },

          rankBG: {
            default:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_rank.png") +
              ") ",
            hover:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_rank_on.png") +
              ") ",
            active:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_rank_down.png") +
              ") ",
          },

          reportBG: {
            default:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_report.png") +
              ") ",
            hover:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_report_on.png") +
              ") ",
            active:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_report_down.png") +
              ") ",
            flicker:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_report_blink1.png") +
              ") ",
          },

          shopBG: {
            default:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_shop.png") +
              ") ",
            hover:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_shop_on.png") +
              ") ",
            active:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_shop_down.png") +
              ") ",
          },

          statBG: {
            default:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_stat.png") +
              ") ",
            hover:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_stat_on.png") +
              ") ",
            active:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_stat_down.png") +
              ") ",
          },

          systemBG: {
            default:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_system.png") +
              ") ",
            hover:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_system_on.png") +
              ") ",
            active:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_system_down.png") +
              ") ",
          },

          unionBG: {
            default:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_union.png") +
              ") ",
            hover:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_union_on.png") +
              ") ",
            active:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_union_down.png") +
              ") ",
          },
          websiteBG: {
            default:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_website.png") +
              ") ",
            hover:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_website_on.png") +
              ") ",
            active:
              "url(" +
              require("../../../../assets/rxsg/main/bottom/function_website_down.png") +
              ") ",
          },
        },
      },
    };
  },
  mounted: function () {
    // this.palneState.top.openInnercityPlane = true;
  },
  methods: {
    changePage(e, id) {
      console.log(id == 1);
      if (id == 1) {
        this.palneState.top.openOutercityPlane = this.palneState.top.openMapPlane = this.palneState.top.openBattlePlane = false;
      } else if (id == 2) {
        this.palneState.top.openInnercityPlane = this.palneState.top.openMapPlane = this.palneState.top.openBattlePlane = false;
      } else if (id == 3) {
        this.palneState.top.openInnercityPlane = this.palneState.top.openOutercityPlane = this.palneState.top.openBattlePlane = false;
      } else if (id == 4) {
        this.palneState.top.openInnercityPlane = this.palneState.top.openMapPlane = this.palneState.top.openMapPlane = false;
      }
    },
  },
  directives: {},
};
</script>
<style lang="less">
.rxsg-btn-plane {
  z-index: 20px;
  width: 737px;
  height: 600px;
  .rxsg-btn-plane-main {
    width: 100%;
    height: 100%;
    position: relative;
    .btn-top {
      position: absolute;
      top: 0px;
      left: 1px;
      width: 731px;
      height: 36px;
      background: url("../../../../assets/rxsg/main/top/board_topbar.png");
      .btn-top-btn {
        position: absolute;
        top: 4px;
      }

      .btn-top-left {
        position: absolute;
        .btn-top-center-innercity {
          left: 10px;
        }
        .btn-top-center-outercity {
          left: 80px;
        }
        .btn-top-center-map {
          left: 150px;
        }
        .btn-top-center-battle {
          left: 220px;
        }
      }

      .btn-top-center {
        position: absolute;
        .btn-top-center-build {
          left: 305px;
        }
        .btn-top-center-craft {
          left: 345px;
          top: 10px;
        }
        .btn-top-center-tactic {
          left: 369px;
          top: 10px;
        }
        .btn-top-center-level {
          left: 407px;
        }
      }

      .btn-top-btn-hero {
        left: 436px;
      }
      .btn-top-btn-army {
        left: 500px;
      }
      .btn-top-btn-union {
        left: 565px;
      }
      .btn-top-btn-mission {
        left: 630px;
      }
      .btn-top-btn-box {
        left: 692px;
      }
    }
    .btn-bottom {
      position: absolute;
      top: 556px;
      left: 1px;
      width: 731px;
      height: 42px;
      .btn-bottom-btn {
        position: absolute;
        top: 4px;
      }
      .btn-bottom-btn-achievement {
        left: 608px;
      }
      .btn-bottom-btn-charge {
        left: 670px;
      }
      .btn-bottom-btn-forum {
        left: -482px;
      }
      .btn-bottom-btn-friend {
        left: 421px;
      }
      .btn-bottom-btn-help {
        left: -482px;
      }
      .btn-bottom-btn-mail {
        left: 482px;
      }
      .btn-bottom-btn-rank {
        left: 513px;
      }
      .btn-bottom-btn-report {
        left: 452px;
      }
      .btn-bottom-btn-shop {
        left: 700px;
      }
      .btn-bottom-btn-stat {
        left: 545px;
      }
      .btn-bottom-btn-system {
        left: 639px;
      }
      .btn-bottom-btn-union {
        left: 576px;
      }
    }
  }
}
</style>