
<template>
  <div id="chart_container" class="f-fill" style="height:300px; width: 480px;"></div>
</template>

<script>
  export default {
    head: {
      script: [
        {src: '/custom_scripts/chart_main/charting_library.min.js'}
      ]
    },
    mounted: function () {
      /* eslint-disable */
      let data = [
        {
          time: 1508313600000,
          close:42.1,
          open: 41.0,
          high:43.0,
          low: 40.4,
          volume:1200
        }
      ]

      let Datafeed= {
        onReady:function(callback){
          callback({"supports_marks":true,"supports_group_reques":false,"supports_time":true,"exchanges":[{"name":"All Exchanges","value":"","desc":""},{"name":"NasdaqNM","value":"NasdaqNM","desc":"NasdaqNM"},{"name":"NYSE","value":"NYSE","desc":"NYSE"},{"name":"NGM","value":"NGM","desc":"NGM"},{"name":"NCM","value":"NCM","desc":"NCM"}],"supports_search":true,"supported_resolutions":[1,5,15,30,60,"D","W"],"symbols_types":[{"name":"All types","value":""},{"name":"Stock","value":"stock"},{"name":"Index","value":"index"}],"supports_timescale_marks":true});
        },
        subscribeBars:function(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback) {},
        unsubscribeBars() {},
        resolveSymbol: function(symbolName, onSymbolResolvedCallback, onResolveErrorCallback){
          setTimeout(()=>{
            onSymbolResolvedCallback({
              "name": "BTC",
              "timezone": "Europe/Warsaw",
              "pricescale": "11",
              "minmov": 1,
              "minmov2": 0,
              "ticker": "BTC",
              "description": "",
              "session": "24x7",
              "type": "bitcoin",
              "exchange-traded": "FinWexIndex",
              "exchange-listed": "FinWexIndex",
              "has_intraday": true,
              "intraday_multipliers": ['60'], //It is an array containing intraday resolutions (in minutes) the datafeed wants to build by itself. E.g., if the datafeed reported he supports resolutions ["1", "5", "15"], but in fact it has only 1 minute bars for symbol X, it should set intraday_multipliers of X = [1]. This will make Charting Library to build 5 and 15 resolutions by itself.
              "has_weekly_and_monthly": true,
              "has_no_volume": false,
              "regular_session": "24x7"
            });
          },0)

        },
        getBars:function(symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest){
          setTimeout(()=>{
            onHistoryCallback([],{noData:true})
            data = []
          },0)

        },
      }

      let widget = new window.TradingView.widget({
        fullscreen: false,
        autosize: true,
        symbol: "BTC",
        container_id: "chart_container",
        datafeed: Datafeed,
        library_path: "custom_scripts/chart_main/",
        locale: "en",
        timezone: 'Etc/UTC',
        charts_storage_api_version: "1.1",
        client_id: 'tradingview.com',
        user_id: 'public_user_id',
        debug: true,
        //loading_screen:{ backgroundColor: "#000000",foregroundColor: "#000000", }//todo:do it
        interval: '60',
        // timeframe:'',//todo: na koncu
        toolbar_bg: "#FFFFFF",
        // saved_data: this_vue.savedData,
        allow_symbol_change: true,
        time_frames: [
          {text: "1y", resolution: "1W"},
          {text: "6m", resolution: "3D"},
          {text: "3m", resolution: "1D"},
          {text: "1m", resolution: "1D"},
          {text: "1w", resolution: "30"},
          {text: "3d", resolution: "30"},
          {text: "1d", resolution: "30"},
          {text: "6h", resolution: "15"},
          {text: "1h", resolution: "1"}],
        drawings_access: {
          type: 'black',
          // tools: [{name: "Regression Trend"}]//todo: moje
          tools: [{name: "Trend Line", grayed: true}, {name: "Trend Angle", grayed: true}] //todo: bb
        },
        disabled_features: [
          "header_symbol_search",
          "header_interval_dialog_button",
          "show_interval_dialog_on_key_press",
          "symbol_search_hot_key",
          "study_dialog_search_control",
          "display_market_status",
          "header_compare",
          "edit_buttons_in_legend",
          "symbol_info",
          "border_around_the_chart",
          "main_series_scale_menu",
          "star_some_intervals_by_default",
          "datasource_copypaste",
          "right_bar_stays_on_scroll",
          "context_menus",
          "go_to_date",
          "compare_symbol",
          "border_around_the_chart",
          "timezone_menu",

          "remove_library_container_border",
        ],
        enabled_features: [
          "dont_show_boolean_study_arguments",
          "use_localstorage_for_settings",
          "remove_library_container_border",
          "save_chart_properties_to_local_storage",
          "side_toolbar_in_fullscreen_mode",
          "hide_last_na_study_output",
          "constraint_dialogs_movement",
        ],
        studies_overrides: {
          "volume.volume.color.0": "#fe4761",
          "volume.volume.color.1": "#cfcab6",
          "volume.volume.transparency": 75,
        },
        overrides: {}
      })

    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #b90414;
  }
</style>
