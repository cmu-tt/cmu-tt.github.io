/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmvtime"] = self["webpackChunkmvtime"] || []).push([["src_views_Portal_StatsModal_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Portal/StatsModal.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Portal/StatsModal.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _svonk_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svonk/util */ \"./node_modules/@svonk/util/util.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"StatsModal\",\n  emits: [\"close\"],\n  data() {\n    return {\n      is_ready: false,\n      can_update: true,\n      toolbar: false,\n      min_delay: 1000 * 15,\n      surveys: [],\n      active: [\"mood\", \"stress\"],\n      filters: [{\n        name: \"Mood\",\n        filter: \"mood\",\n        data: {\n          index: 1,\n          range: {\n            from: 1,\n            to: 3\n          },\n          scale(data) {\n            return ({\n              positive: 3,\n              neutral: 2,\n              negative: 1\n            }[data.sentiment] - 1) * (5 / 2);\n          },\n          label(data) {\n            return data.sentiment.charAt(0).toUpperCase() + data.sentiment.slice(1);\n          }\n        }\n      }, {\n        name: \"Stress\",\n        filter: \"stress\",\n        data: {\n          index: 2,\n          range: {\n            from: 1,\n            to: 5\n          },\n          scale(data) {\n            return (data.sentiment * 5 / 100 - 1) * (5 / 4);\n          },\n          label(data) {\n            return data.sentiment * 5 / 100 + \"/5\";\n          }\n        }\n      }, {\n        name: \"Work\",\n        filter: \"upcoming\",\n        data: {\n          index: 4,\n          range: {\n            from: 0,\n            to: 6\n          },\n          scale(data) {\n            return Math.min(data.num || data.tasks?.length || 0, 10) / 2;\n          },\n          label(data) {\n            return (data.num || data.tasks?.length || 0) + \" tasks\";\n          }\n        }\n      }, {\n        name: \"Notes\",\n        filter: \"additional\",\n        data: {\n          index: 3,\n          range: {\n            from: 0,\n            to: 0\n          },\n          scale(data) {\n            void data;\n            return data.input ? -0.8 : -1000;\n          },\n          label(data) {\n            // first 20 chars\n            return data.input ? data.input.length > 20 ? `\"${data.input.slice(0, 18)}...` : `\"${data.input}\"` : \"None\";\n          }\n        }\n      }]\n    };\n  },\n  computed: {\n    completed() {\n      return this.$store?.active_doc?.done_surveys || [];\n    },\n    graphs() {\n      let graphs = this.filters.filter(f => this.active.includes(f.filter)).map(f => {\n        return {\n          name: f.name,\n          data: this.surveys.map(survey => {\n            return f.data.scale(survey.data.responses[f.data.index].data);\n          }),\n          labels: this.surveys.map(survey => {\n            return f.data.label(survey.data.responses[f.data.index].data);\n          })\n        };\n      });\n      return graphs;\n    },\n    options() {\n      let self = this;\n      let theme = this.$store.theme;\n      return {\n        xaxis: {\n          type: \"datetime\",\n          labels: {\n            // show: false,\n          },\n          tooltip: {\n            enabled: false\n          },\n          categories: self.surveys.map(survey => survey.data.time)\n        },\n        yaxis: {\n          labels: {\n            show: false\n          },\n          // scale from 0 to 5\n          min: -0.5,\n          max: 5.5,\n          tickAmount: 10,\n          decimalsInFloat: 0\n        },\n        legend: {\n          show: true,\n          showForSingleSeries: true\n        },\n        theme: {\n          mode: theme\n        },\n        chart: {\n          background: \"var(--color-overlay-input)\",\n          fontFamily: \"inherit\",\n          toolbar: {\n            show: self.toolbar\n          },\n          width: \"100%\",\n          height: \"100%\"\n        },\n        grid: {\n          show: false\n        },\n        stroke: {\n          //   curve: \"smooth\",\n          curve: \"straight\",\n          width: 3\n        },\n        tooltip: {\n          custom: function (series, seriesIndex, dataPointIndex, w) {\n            // use the vue method to get the html w/ custom_tooltip\n            return self.custom_tooltip(series, seriesIndex, dataPointIndex, w);\n          },\n          enabled: true,\n          // don't show the label below the axis, but do show it in the tooltip\n          x: {\n            format: \"ddd MMM d\"\n          }\n        }\n      };\n    }\n  },\n  methods: {\n    custom_tooltip(args) {\n      let base = `<div class=\"apexcharts-tooltip-title\" style=\"font-family: inherit; font-size: 12px;\">${new Date(this.surveys[args.dataPointIndex].data.time).toLocaleDateString(undefined, {\n        weekday: \"short\",\n        month: \"short\",\n        day: \"numeric\"\n      })}</div>`;\n      for (let index in this.graphs) {\n        let series = this.graphs[index];\n        base += `<div class=\"apexcharts-tooltip-series-group apexcharts-active\" style=\"order: 1; display: flex;\">\n                <span class=\"apexcharts-tooltip-marker\" style=\"background-color: ${args.w.globals.colors[index]}\"></span>\n                <div class=\"apexcharts-tooltip-text\" style=\"font-family: inherit; font-size: 12px;\">\n                    <div class=\"apexcharts-tooltip-y-group\"><span class=\"apexcharts-tooltip-text-y-label\">${series.name}: </span><span class=\"apexcharts-tooltip-text-y-value\">${series.labels[args.dataPointIndex]}</span></div>\n                </div></div>`;\n      }\n      base += `</div>`;\n      return base;\n    },\n    try_update() {\n      if (this.can_update) {\n        this.update(true);\n        this.$status.log(\"Manualling refreshing survey data\");\n      } else {\n        new _svonk_util__WEBPACK_IMPORTED_MODULE_0__.WarningToast(\"Please wait before updating again\", 2000);\n        this.$status.warn(\"Blocked quick refresh of survey data \");\n      }\n    },\n    process(data) {\n      this.surveys = data.filter(survey => !survey.error);\n      // map index onto surveys\n      try {\n        this.surveys.forEach((survey, index) => {\n          survey.data.index = index;\n        });\n      } catch {\n        throw \"Failed to map indices onto survey data\";\n      }\n      this.is_ready = true;\n    },\n    update(force = false) {\n      this.is_ready = false;\n      this.can_update = false;\n      this.last_update = Date.now();\n      this.surveys = [];\n      this.$store.get_cached_surveys(this.completed, force).then(data => {\n        this.process(data);\n        // set a timeout to allow the user to update again\n        setTimeout(() => {\n          this.can_update = true;\n        }, this.min_delay);\n      }).catch(err => {\n        new _svonk_util__WEBPACK_IMPORTED_MODULE_0__.ErrorToast(\"Failed to get statistics\", err, 5000);\n        this.is_ready = true;\n        this.can_update = true;\n      });\n    }\n  },\n  mounted() {\n    this.update();\n  }\n});\n\n//# sourceURL=webpack://mvtime/./src/views/Portal/StatsModal.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Portal/StatsModal.vue?vue&type=template&id=688ca3a7&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Portal/StatsModal.vue?vue&type=template&id=688ca3a7&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_1__.pushScopeId)(\"data-v-688ca3a7\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"entercode\"\n};\nconst _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"header\", {\n  class: \"modal_header\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"h2\", {\n  class: \"header_style modal_header_title\"\n}, \"View Statistics\")], -1 /* HOISTED */));\nconst _hoisted_3 = {\n  class: \"overlay_contents\",\n  ref: \"contents\"\n};\nconst _hoisted_4 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"div\", {\n  class: \"overlay_contents_text\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createTextVNode)(\" The daily surveys you have completed are displayed below. \"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(\"TODO: view individual responses from data points \")], -1 /* HOISTED */));\nconst _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */));\nconst _hoisted_6 = {\n  class: \"stats_view_controls_wrapper\"\n};\nconst _hoisted_7 = {\n  class: \"stats_view_controls\"\n};\nconst _hoisted_8 = [\"onClick\"];\nconst _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"span\", {\n  class: \"flex_spacer\"\n}, null, -1 /* HOISTED */));\nconst _hoisted_10 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */));\nconst _hoisted_11 = {\n  class: \"overlay_contents_text\"\n};\nconst _hoisted_12 = {\n  class: \"bottom_actions\"\n};\nconst _hoisted_13 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"div\", {\n  class: \"flex_spacer\"\n}, null, -1 /* HOISTED */));\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_apexchart = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)(\"apexchart\");\n  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)(\"router-link\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)(\"main\", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"div\", _hoisted_3, [_hoisted_4, _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"nav\", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"div\", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_1__.renderList)($data.filters, tag => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)(\"button\", {\n      onClick: $event => {\n        if ($data.active.includes(tag.filter) && $data.active.length > 1) {\n          $data.active.splice($data.active.indexOf(tag.filter), 1);\n        } else {\n          $data.active.push(tag.filter);\n        }\n      },\n      class: (0,vue__WEBPACK_IMPORTED_MODULE_1__.normalizeClass)([\"stats_view_control__option\", {\n        active: $data.active.includes(tag.filter) && $data.is_ready\n      }]),\n      key: tag.filter\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(tag.name), 11 /* TEXT, CLASS, PROPS */, _hoisted_8);\n  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(\" <button\\n          class=\\\"stats_view_control__refresh\\\"\\n          @click=\\\"\\n            if (is_ready) {\\n              try_update();\\n            }\\n          \\\"\\n          :class=\\\"{ disabled: !can_update || !is_ready }\\\"\\n        >\\n          Update\\n        </button> \"), _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"button\", {\n    class: (0,vue__WEBPACK_IMPORTED_MODULE_1__.normalizeClass)([\"stats_view_control__toggle\", {\n      disabled: !$data.is_ready\n    }]),\n    onClick: _cache[0] || (_cache[0] = $event => $data.toolbar = !$data.toolbar)\n  }, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)($data.toolbar ? \"Less\" : \"More\"), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"div\", {\n    class: (0,vue__WEBPACK_IMPORTED_MODULE_1__.normalizeClass)([\"stats_view_container alt_bg\", {\n      loading_bg: !$data.is_ready\n    }])\n  }, [$data.surveys.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)(\"div\", {\n    key: 0,\n    class: (0,vue__WEBPACK_IMPORTED_MODULE_1__.normalizeClass)([\"stats_view_wrapper\", {\n      toolbar: $data.toolbar\n    }])\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_apexchart, {\n    class: \"stats_view\",\n    type: \"line\",\n    series: $options.graphs,\n    width: \"100%\",\n    height: \"100%\",\n    options: $options.options\n  }, null, 8 /* PROPS */, [\"series\", \"options\"])], 2 /* CLASS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(\"v-if\", true)], 2 /* CLASS */), _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"div\", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createTextVNode)(\" We appreciate your contributions towards our research. If you have any questions, please \"), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createVNode)(_component_router_link, {\n    to: \"/contact\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_1__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createTextVNode)(\"contact us\")]),\n    _: 1 /* STABLE */\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createTextVNode)(\"! \")])], 512 /* NEED_PATCH */), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"div\", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"button\", {\n    class: \"close_action click_escape\",\n    onClick: _cache[1] || (_cache[1] = $event => _ctx.$router.push({\n      name: 'settings',\n      query: _ctx.$route.query\n    }))\n  }, \" Back \"), _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"button\", {\n    class: \"continue_action click_ctrlenter\",\n    onClick: _cache[2] || (_cache[2] = $event => _ctx.$emit('close'))\n  }, \"Close\")])]);\n}\n\n//# sourceURL=webpack://mvtime/./src/views/Portal/StatsModal.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/string-replace-loader/index.js??clonedRuleSet-42.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Portal/StatsModal.vue?vue&type=style&index=0&id=688ca3a7&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/string-replace-loader/index.js??clonedRuleSet-42.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Portal/StatsModal.vue?vue&type=style&index=0&id=688ca3a7&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.stats_view_container[data-v-688ca3a7] {\\n  width: 100%;\\n  background-color: var(--color-overlay-input);\\n  color: var(--color-on-overlay-input);\\n  border: none;\\n  border-radius: var(--radius-overlay-input);\\n  /* overflow-x: auto; */\\n}\\n.stats_view_container[data-v-688ca3a7] {\\n  height: 250px;\\n}\\n\\n/* scrollbar */\\n.stats_view_container[data-v-688ca3a7]::-webkit-scrollbar-corner {\\n  display: none;\\n}\\n.stats_view_container[data-v-688ca3a7]::-webkit-scrollbar {\\n  background: var(--color-overlay-input);\\n  width: 12px;\\n  height: 12px;\\n  border-radius: var(--radius-overlay-input);\\n}\\n.stats_view_container[data-v-688ca3a7]::-webkit-scrollbar-thumb {\\n  width: 8px;\\n  height: 8px;\\n  background: var(--color-overlay-input-scrollbar);\\n  border-radius: 10px;\\n  border: 4px solid var(--color-overlay-input);\\n}\\n\\n/* empty */\\n.stats_view_container[data-v-688ca3a7]:empty {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: inherit;\\n  height: 100px;\\n}\\n.stats_view_container[data-v-688ca3a7]:empty::before {\\n  content: \\\"No data to display\\\";\\n  opacity: 0.5;\\n}\\n/* entry wrapper */\\n.stats_view_container > .stats_view_wrapper[data-v-688ca3a7] {\\n  padding: calc(var(--padding-overlay-input) - 5px) calc(var(--padding-overlay-input) - 10px);\\n  padding-bottom: var(--padding-overlay-input);\\n  height: 100%;\\n  min-width: 100%;\\n  width: -moz-fit-content;\\n  width: fit-content;\\n}\\n.stats_view_container > .stats_view_wrapper[data-v-688ca3a7]:not(.toolbar) {\\n  padding-top: 0;\\n}\\n.stats_view_container > .stats_view_wrapper > .stats_view[data-v-688ca3a7] {\\n  height: 100%;\\n  min-width: 100%;\\n  position: relative;\\n}\\n/* entries */\\n.stats_view_container > .stats_view_wrapper > .stats_view > .stats_view__entry[data-v-688ca3a7] {\\n  height: 5px;\\n  width: 5px;\\n  border-radius: 10px;\\n  /* background: var(--color-on-overlay-input); */\\n  background: var(--color-theme);\\n  bottom: calc(100% * var(--y-stat) * var(--h-scale-stat));\\n  left: calc(100% * var(--x-stat) * var(--w-scale-stat));\\n  position: absolute;\\n}\\n\\n/* controls */\\n.stats_view_controls_wrapper[data-v-688ca3a7] {\\n  margin-bottom: calc(var(--padding-overlay-input) / 2);\\n  display: flex;\\n  flex-flow: row wrap;\\n  /* justify-content: space-between; */\\n  justify-content: flex-start;\\n  gap: 5px;\\n}\\n.stats_view_controls[data-v-688ca3a7] {\\n  height: 30px;\\n  display: flex;\\n  flex-flow: row nowrap;\\n  gap: 2px;\\n  border-radius: var(--radius-overlay-input);\\n  overflow: hidden;\\n  width: -moz-fit-content;\\n  width: fit-content;\\n}\\n.stats_view_controls > button[data-v-688ca3a7],\\n.stats_view_control__refresh[data-v-688ca3a7],\\n.stats_view_control__toggle[data-v-688ca3a7] {\\n  flex: 0 1 auto;\\n  height: 30px;\\n  background: var(--color-overlay-input-alt);\\n  color: var(--color-on-overlay-input-alt);\\n  border: none;\\n  padding: 0 var(--padding-overlay-input);\\n  font-size: 0.9em;\\n  font-weight: 600;\\n  -webkit-user-select: none;\\n     -moz-user-select: none;\\n          user-select: none;\\n}\\n@media (max-width: 500px) {\\n.stats_view_controls_wrapper[data-v-688ca3a7],\\n  .stats_view_controls_wrapper > .stats_view_controls[data-v-688ca3a7] {\\n    display: flex;\\n    flex-flow: row wrap;\\n    justify-content: stretch;\\n    width: 100%;\\n}\\n.stats_view_controls > button[data-v-688ca3a7] {\\n    flex: 1 0 auto;\\n}\\n.stats_view_control__toggle[data-v-688ca3a7],\\n  .stats_view_controls_wrapper > .flex_spacer[data-v-688ca3a7] {\\n    display: none;\\n}\\n}\\n.stats_view_control__refresh[data-v-688ca3a7],\\n.stats_view_control__toggle[data-v-688ca3a7] {\\n  border-radius: var(--radius-overlay-input);\\n}\\n.stats_view_control__refresh.disabled[data-v-688ca3a7],\\n.stats_view_control__toggle.disabled[data-v-688ca3a7] {\\n  cursor: not-allowed;\\n}\\n.stats_view_controls > button.active[data-v-688ca3a7],\\n.stats_view_control__refresh[data-v-688ca3a7]:not(.disabled),\\n.stats_view_control__toggle[data-v-688ca3a7]:not(.disabled) {\\n  background: var(--color-overlay-input-active);\\n  color: var(--color-on-overlay-input);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mvtime/./src/views/Portal/StatsModal.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/string-replace-loader/index.js??clonedRuleSet-42.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/views/Portal/StatsModal.vue":
/*!*****************************************!*\
  !*** ./src/views/Portal/StatsModal.vue ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _StatsModal_vue_vue_type_template_id_688ca3a7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatsModal.vue?vue&type=template&id=688ca3a7&scoped=true */ \"./src/views/Portal/StatsModal.vue?vue&type=template&id=688ca3a7&scoped=true\");\n/* harmony import */ var _StatsModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatsModal.vue?vue&type=script&lang=js */ \"./src/views/Portal/StatsModal.vue?vue&type=script&lang=js\");\n/* harmony import */ var _StatsModal_vue_vue_type_style_index_0_id_688ca3a7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StatsModal.vue?vue&type=style&index=0&id=688ca3a7&scoped=true&lang=css */ \"./src/views/Portal/StatsModal.vue?vue&type=style&index=0&id=688ca3a7&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_StatsModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_StatsModal_vue_vue_type_template_id_688ca3a7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-688ca3a7\"],['__file',\"src/views/Portal/StatsModal.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://mvtime/./src/views/Portal/StatsModal.vue?");

/***/ }),

/***/ "./src/views/Portal/StatsModal.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./src/views/Portal/StatsModal.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StatsModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StatsModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StatsModal.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Portal/StatsModal.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://mvtime/./src/views/Portal/StatsModal.vue?");

/***/ }),

/***/ "./src/views/Portal/StatsModal.vue?vue&type=template&id=688ca3a7&scoped=true":
/*!***********************************************************************************!*\
  !*** ./src/views/Portal/StatsModal.vue?vue&type=template&id=688ca3a7&scoped=true ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StatsModal_vue_vue_type_template_id_688ca3a7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StatsModal_vue_vue_type_template_id_688ca3a7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StatsModal.vue?vue&type=template&id=688ca3a7&scoped=true */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Portal/StatsModal.vue?vue&type=template&id=688ca3a7&scoped=true\");\n\n\n//# sourceURL=webpack://mvtime/./src/views/Portal/StatsModal.vue?");

/***/ }),

/***/ "./src/views/Portal/StatsModal.vue?vue&type=style&index=0&id=688ca3a7&scoped=true&lang=css":
/*!*************************************************************************************************!*\
  !*** ./src/views/Portal/StatsModal.vue?vue&type=style&index=0&id=688ca3a7&scoped=true&lang=css ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_string_replace_loader_index_js_clonedRuleSet_42_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StatsModal_vue_vue_type_style_index_0_id_688ca3a7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/string-replace-loader/index.js??clonedRuleSet-42.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StatsModal.vue?vue&type=style&index=0&id=688ca3a7&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/string-replace-loader/index.js??clonedRuleSet-42.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Portal/StatsModal.vue?vue&type=style&index=0&id=688ca3a7&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_string_replace_loader_index_js_clonedRuleSet_42_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StatsModal_vue_vue_type_style_index_0_id_688ca3a7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_string_replace_loader_index_js_clonedRuleSet_42_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StatsModal_vue_vue_type_style_index_0_id_688ca3a7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_string_replace_loader_index_js_clonedRuleSet_42_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StatsModal_vue_vue_type_style_index_0_id_688ca3a7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_string_replace_loader_index_js_clonedRuleSet_42_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StatsModal_vue_vue_type_style_index_0_id_688ca3a7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://mvtime/./src/views/Portal/StatsModal.vue?");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/string-replace-loader/index.js??clonedRuleSet-42.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Portal/StatsModal.vue?vue&type=style&index=0&id=688ca3a7&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/string-replace-loader/index.js??clonedRuleSet-42.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Portal/StatsModal.vue?vue&type=style&index=0&id=688ca3a7&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/string-replace-loader/index.js??clonedRuleSet-42.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StatsModal.vue?vue&type=style&index=0&id=688ca3a7&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/string-replace-loader/index.js??clonedRuleSet-42.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Portal/StatsModal.vue?vue&type=style&index=0&id=688ca3a7&scoped=true&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"661f5a34\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://mvtime/./src/views/Portal/StatsModal.vue?./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/string-replace-loader/index.js??clonedRuleSet-42.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ })

}]);